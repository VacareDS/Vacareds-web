import React from 'react';

export interface SplitLineProps {
  variant?: 'gradient' | 'dashed' | 'solid';
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

export default function SplitLine({
  variant = 'gradient',
  direction = 'horizontal',
  className = ''
}: SplitLineProps) {
  
  const isHorizontal = direction === 'horizontal';
  const baseClasses = isHorizontal ? "w-full h-[1px]" : "h-full w-[1px]";

  if (variant === 'gradient') {
    const bgStyle = isHorizontal 
      ? 'linear-gradient(to right, transparent 0%, rgba(232,65,122,0.3) 30%, rgba(245,166,35,0.3) 70%, transparent 100%)'
      : 'linear-gradient(to bottom, transparent 0%, rgba(232,65,122,0.3) 30%, rgba(245,166,35,0.3) 70%, transparent 100%)';
      
    return (
      <div 
        className={`${baseClasses} ${className}`}
        style={{ background: bgStyle }}
      />
    );
  }

  if (variant === 'dashed') {
    const borderClass = isHorizontal ? "border-t border-dashed" : "border-l border-dashed";
    return (
      <div className={`${baseClasses} ${borderClass} border-[rgba(28,24,40,0.15)] ${className}`} />
    );
  }

  // solid
  const bgClass = "bg-[rgba(28,24,40,0.08)]";
  return <div className={`${baseClasses} ${bgClass} ${className}`} />;
}
