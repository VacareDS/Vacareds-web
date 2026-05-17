import React from 'react';

export interface WatermarkProps {
  text: string;
  position?: 'left' | 'right' | 'center';
  className?: string;
}

export default function Watermark({
  text,
  position = 'left',
  className = ''
}: WatermarkProps) {
  const baseClasses = "absolute font-extrabold text-[rgba(28,24,40,0.035)] leading-none pointer-events-none tracking-[-6px] whitespace-nowrap z-0 select-none italic text-[clamp(80px,15vw,220px)]";
  
  const positionClasses = {
    left: "-bottom-[30px] -left-[10px]",
    right: "-bottom-[20px] -right-[20px]",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  };

  return (
    <div className={`${baseClasses} ${positionClasses[position]} ${className}`}>
      {text}
    </div>
  );
}
