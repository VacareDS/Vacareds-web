import React from 'react';

export interface GeoDecorationsProps {
  type: 'circle' | 'square' | 'triangle' | 'blob' | 'cross';
  color?: string; // CSS color value
  size?: number; // in pixels
  className?: string;
}

export default function GeoDecorations({
  type,
  color = 'var(--mg)',
  size = 100,
  className = ''
}: GeoDecorationsProps) {
  
  const style = { width: `${size}px`, height: `${size}px` };

  if (type === 'circle') {
    return (
      <div 
        className={`rounded-full border border-dashed opacity-20 pointer-events-none ${className}`} 
        style={{ ...style, borderColor: color }} 
      />
    );
  }

  if (type === 'square') {
    return (
      <div 
        className={`border opacity-20 pointer-events-none ${className}`} 
        style={{ ...style, borderColor: color }} 
      />
    );
  }

  if (type === 'triangle') {
    return (
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        className={`opacity-20 pointer-events-none ${className}`}
      >
        <polygon points="50,0 100,100 0,100" fill="none" stroke={color} strokeWidth="2" strokeDasharray="4 4"/>
      </svg>
    );
  }

  if (type === 'cross') {
    return (
      <div className={`relative opacity-20 pointer-events-none ${className}`} style={style}>
        <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2" style={{ backgroundColor: color }} />
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2" style={{ backgroundColor: color }} />
      </div>
    );
  }

  // Blob
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      xmlns="http://www.w3.org/2000/svg"
      className={`opacity-10 pointer-events-none ${className}`}
    >
      <path fill={color} d="M47.7,-57.2C59.4,-45.5,65,-27.6,67.3,-9.4C69.5,8.9,68.4,27.5,58.3,42.4C48.2,57.3,29.1,68.5,9.4,70.5C-10.3,72.6,-30.5,65.5,-44.6,51.8C-58.6,38.1,-66.4,17.8,-65.2,-1.4C-64,-20.5,-53.8,-38.5,-40.4,-49.8C-27,-61.2,-13.5,-65.9,2.4,-68.8C18.3,-71.7,36,-72.9,47.7,-57.2Z" transform="translate(100 100)" />
    </svg>
  );
}
