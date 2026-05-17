import React from 'react';

export interface GradientTextProps {
  text?: string;
  children?: React.ReactNode;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p';
  className?: string;
}

export default function GradientText({
  text,
  children,
  as: Tag = 'span',
  className = ''
}: GradientTextProps) {
  return (
    <Tag className={`grad-text ${className}`}>
      {text || children}
    </Tag>
  );
}
