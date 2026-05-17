import React from 'react';

export interface BadgeProps {
  text: string;
  variant?: 'light' | 'dark' | 'gradient';
  className?: string;
}

export default function Badge({
  text,
  variant = 'light',
  className = ''
}: BadgeProps) {
  
  const baseClasses = "inline-block text-[10px] font-bold tracking-[0.1em] uppercase px-[10px] py-[4px] rounded-[6px]";
  
  const variants = {
    light: "bg-[rgba(232,65,122,0.1)] text-[var(--mg)]",
    dark: "bg-[rgba(247,246,242,0.1)] text-[var(--cream)] border-[0.5px] border-[rgba(247,246,242,0.2)]",
    gradient: "grad-bg text-white shadow-[0_4px_12px_rgba(232,65,122,0.2)]"
  };

  return (
    <span className={`${baseClasses} ${variants[variant]} ${className}`}>
      {text}
    </span>
  );
}
