import { useEffect, useState } from 'react';

interface FloatingSDGProps {
  sdgNumber: number;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'w-16 h-16',
  md: 'w-20 h-20',
  lg: 'w-24 h-24'
};

export const FloatingSDG = ({ sdgNumber, size = 'md' }: FloatingSDGProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [duration, setDuration] = useState(20);

  useEffect(() => {
    // Randomize initial position (0-100% of container)
    setPosition({
      x: Math.random() * 100,
      y: Math.random() * 100
    });
    
    // Randomize initial rotation (-15 to 15 degrees)
    setRotation(Math.random() * 30 - 15);
    
    // Randomize animation duration (15-30 seconds)
    setDuration(15 + Math.random() * 15);
  }, []);

  return (
    <img
      src={`https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-${String(sdgNumber).padStart(2, '0')}.jpg`}
      alt={`SDG ${sdgNumber}`}
      className={`absolute ${sizeClasses[size]}`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `rotate(${rotation}deg)`,
        animation: `float ${duration}s ease-in-out infinite`,
      }}
    />
  );
};

// Add floating animation styles to your global CSS
export const floatingStyles = `
  @keyframes float {
    0%, 100% {
      transform: translate(0, 0) rotate(var(--initial-rotate, 0deg));
    }
    25% {
      transform: translate(20px, -20px) rotate(calc(var(--initial-rotate, 0deg) + 5deg));
    }
    50% {
      transform: translate(-15px, 15px) rotate(calc(var(--initial-rotate, 0deg) - 3deg));
    }
    75% {
      transform: translate(25px, 10px) rotate(calc(var(--initial-rotate, 0deg) + 8deg));
    }
  }
`;

