import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  hue: number;
}

export const NetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Detect dark mode
    const isDarkMode = () => document.documentElement.classList.contains('dark');

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create nodes
    const nodeCount = 80;
    const nodes: Node[] = [];
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        hue: Math.random() * 360,
      });
    }

    // Animation loop
    let animationFrame: number;
    const animate = () => {
      const darkMode = isDarkMode();
      ctx.fillStyle = darkMode ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Move nodes
        node.x += node.vx;
        node.y += node.vy;
        node.hue += 0.5;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw connections (spider web lines)
        const darkMode = isDarkMode();
        nodes.forEach((otherNode, j) => {
          if (i === j) return;
          
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const opacity = (1 - distance / 150) * (darkMode ? 0.4 : 0.3);
            const avgHue = (node.hue + otherNode.hue) / 2;
            const lightness = darkMode ? 60 : 50;
            
            ctx.strokeStyle = `hsla(${avgHue}, 80%, ${lightness}%, ${opacity})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        });

        // Draw node
        const lightness = darkMode ? 60 : 55;
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 6);
        gradient.addColorStop(0, `hsla(${node.hue}, 85%, ${lightness}%, 0.9)`);
        gradient.addColorStop(0.5, `hsla(${node.hue}, 85%, ${lightness - 5}%, 0.7)`);
        gradient.addColorStop(1, `hsla(${node.hue}, 85%, ${lightness - 10}%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 6, 0, Math.PI * 2);
        ctx.fill();

        // Draw glow
        ctx.shadowBlur = darkMode ? 20 : 15;
        ctx.shadowColor = `hsla(${node.hue}, 85%, ${lightness}%, ${darkMode ? 0.6 : 0.5})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${node.hue}, 85%, ${lightness + 5}%, 1)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};

