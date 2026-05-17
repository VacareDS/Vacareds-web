import React, { ReactNode } from 'react';

export interface FormCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function FormCard({
  title,
  subtitle,
  children,
  className = ''
}: FormCardProps) {
  return (
    <div className={`bg-white rounded-[24px] border-[0.5px] border-[rgba(28,24,40,0.1)] shadow-[0_24px_60px_rgba(28,24,40,0.06)] p-[32px] md:p-[48px] ${className}`}>
      <div className="mb-[32px]">
        <h3 className="text-[24px] md:text-[28px] font-extrabold tracking-[-1px] text-[var(--dark)] mb-[8px]">
          {title}
        </h3>
        {subtitle && (
          <p className="text-[14px] text-[var(--muted)] leading-[1.6]">
            {subtitle}
          </p>
        )}
      </div>
      
      {children}
    </div>
  );
}
