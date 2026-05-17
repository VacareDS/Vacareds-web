import React from 'react';
import { Link } from '@/navigation';

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) {
  
  const baseClasses = "inline-flex items-center justify-center py-[14px] px-[28px] rounded-[10px] font-extrabold text-[15px] leading-none transition-all duration-200 tracking-[-0.2px] disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "grad-bg text-white border-none hover:-translate-y-[2px] hover:shadow-[0_12px_24px_rgba(232,65,122,0.25)]",
    secondary: "bg-[var(--dark)] text-white hover:bg-[var(--darker)] hover:-translate-y-[2px]",
    outline: "bg-transparent border border-[rgba(28,24,40,0.15)] text-[var(--dark)] hover:border-[var(--dark)]",
    ghost: "bg-transparent text-[var(--dark)] hover:bg-[rgba(28,24,40,0.04)]"
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href as any} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
