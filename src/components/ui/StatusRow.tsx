import React from 'react';

export interface StatusRowProps {
  label: string;
  status: 'pending' | 'success' | 'error';
  className?: string;
}

export default function StatusRow({
  label,
  status,
  className = ''
}: StatusRowProps) {
  
  const statusConfig = {
    pending: {
      color: 'text-[var(--or)]',
      bg: 'bg-[rgba(245,166,35,0.1)]',
      icon: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="animate-spin">
          <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
        </svg>
      )
    },
    success: {
      color: 'text-[#27c93f]',
      bg: 'bg-[rgba(39,201,63,0.1)]',
      icon: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      )
    },
    error: {
      color: 'text-[#ff5f56]',
      bg: 'bg-[rgba(255,95,86,0.1)]',
      icon: (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      )
    }
  };

  const current = statusConfig[status];

  return (
    <div className={`flex items-center justify-between py-[12px] border-b-[0.5px] border-[rgba(28,24,40,0.06)] last:border-0 ${className}`}>
      <span className="text-[13px] font-bold text-[var(--dark)]">
        {label}
      </span>
      <div className={`w-[24px] h-[24px] rounded-full flex items-center justify-center ${current.bg} ${current.color}`}>
        {current.icon}
      </div>
    </div>
  );
}
