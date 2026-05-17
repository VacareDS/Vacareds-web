import React from 'react';

export interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageWrapper({ children, className = '' }: PageWrapperProps) {
  return (
    <div className={`max-w-[1280px] mx-auto px-6 md:px-[52px] ${className}`}>
      {children}
    </div>
  );
}
