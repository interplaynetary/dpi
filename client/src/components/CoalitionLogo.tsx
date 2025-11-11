import { useEffect, useRef, useState } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  hue: number;
}

interface CoalitionLogoProps {
  size?: number;
  className?: string;
}

export const CoalitionLogo = ({ size = 200, className = '' }: CoalitionLogoProps) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);

  useEffect(() => {
    const centerX = 50; // SVG viewBox center (percentage)
    const centerY = 50;
    const radius = 45; // Leave 5% padding

    // Create 5 nodes
    const nodeCount = 5;
    const initialNodes: Node[] = [];
    
    for (let i = 0; i < nodeCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * (radius - 8);
      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);
      
      initialNodes.push({
        id: i,
        x,
        y,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        hue: Math.random() * 360,
      });
    }
    
    nodesRef.current = initialNodes;
    setNodes(initialNodes);

    // Animation loop
    const animate = () => {
      const updatedNodes = nodesRef.current.map(node => {
        // Move node
        let newX = node.x + node.vx;
        let newY = node.y + node.vy;
        let newVx = node.vx;
        let newVy = node.vy;
        let newHue = (node.hue + 0.5) % 360;

        // Check boundary
        const dx = newX - centerX;
        const dy = newY - centerY;
        const distFromCenter = Math.sqrt(dx * dx + dy * dy);
        
        if (distFromCenter > radius - 6) {
          // Bounce off edge
          const nx = dx / distFromCenter;
          const ny = dy / distFromCenter;
          const dot = newVx * nx + newVy * ny;
          newVx = newVx - 2 * dot * nx;
          newVy = newVy - 2 * dot * ny;
          
          // Push back inside
          newX = centerX + nx * (radius - 6);
          newY = centerY + ny * (radius - 6);
        }

        return {
          ...node,
          x: newX,
          y: newY,
          vx: newVx,
          vy: newVy,
          hue: newHue,
        };
      });

      nodesRef.current = updatedNodes;
      setNodes(updatedNodes);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Calculate connections
  const connections: Array<{from: Node, to: Node, distance: number, hue: number}> = [];
  const connectionDistance = 25; // Max distance for connections

  nodes.forEach((node, i) => {
    nodes.forEach((otherNode, j) => {
      if (i >= j) return;
      
      const dx = node.x - otherNode.x;
      const dy = node.y - otherNode.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < connectionDistance) {
        const avgHue = (node.hue + otherNode.hue) / 2;
        connections.push({
          from: node,
          to: otherNode,
          distance,
          hue: avgHue,
        });
      }
    });
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      <defs>
        {/* Define gradients for each node */}
        {nodes.map((node) => (
          <radialGradient key={`grad-${node.id}`} id={`node-gradient-${node.id}`}>
            <stop offset="0%" stopColor={`hsl(${node.hue}, 95%, 75%)`} stopOpacity="1" />
            <stop offset="70%" stopColor={`hsl(${node.hue}, 90%, 65%)`} stopOpacity="1" />
            <stop offset="100%" stopColor={`hsl(${node.hue}, 85%, 55%)`} stopOpacity="1" />
          </radialGradient>
        ))}
      </defs>

      {/* Circular boundary */}
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="hsl(200, 80%, 60%)"
        strokeWidth="2"
        opacity="0.9"
      />

      {/* Connections */}
      {connections.map((conn, idx) => {
        const opacity = Math.max((1 - conn.distance / connectionDistance) * 0.8, 0.3);
        return (
          <line
            key={`conn-${idx}`}
            x1={conn.from.x}
            y1={conn.from.y}
            x2={conn.to.x}
            y2={conn.to.y}
            stroke={`hsl(${conn.hue}, 90%, 60%)`}
            strokeWidth="1.5"
            strokeOpacity={opacity}
            strokeLinecap="round"
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((node) => (
        <g key={node.id}>
          {/* Outer glow */}
          <circle
            cx={node.x}
            cy={node.y}
            r="4.5"
            fill={`hsl(${node.hue}, 95%, 70%)`}
            opacity="0.3"
          />
          {/* Main node */}
          <circle
            cx={node.x}
            cy={node.y}
            r="3"
            fill={`url(#node-gradient-${node.id})`}
          />
          {/* Center highlight */}
          <circle
            cx={node.x}
            cy={node.y}
            r="1"
            fill={`hsl(${node.hue}, 100%, 90%)`}
            opacity="0.9"
          />
        </g>
      ))}
    </svg>
  );
};
