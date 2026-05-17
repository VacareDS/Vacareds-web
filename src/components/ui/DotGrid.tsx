import React from 'react';

export interface DotGridProps {
  className?: string;
  color?: string; // hex or rgba
  size?: number; // grid size in px
}

export default function DotGrid({
  className = '',
  color = 'rgba(28,24,40,0.06)',
  size = 24
}: DotGridProps) {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`
      }}
    />
  );
}
