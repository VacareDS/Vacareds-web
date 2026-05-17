import React from 'react';

export interface EmailPreviewCardProps {
  subject: string;
  snippet: string;
  time?: string;
  isUnread?: boolean;
  className?: string;
}

export default function EmailPreviewCard({
  subject,
  snippet,
  time = '10:00 AM',
  isUnread = true,
  className = ''
}: EmailPreviewCardProps) {
  return (
    <div className={`bg-white rounded-[16px] border-[0.5px] border-[rgba(28,24,40,0.08)] p-[20px] flex flex-col gap-[10px] shadow-[0_12px_32px_rgba(28,24,40,0.04)] transition-all hover:shadow-[0_16px_40px_rgba(28,24,40,0.06)] ${className}`}>
      
      <div className="flex justify-between items-center mb-[4px]">
        <div className="flex items-center gap-[10px]">
          <div className="w-[28px] h-[28px] rounded-full grad-bg text-white flex items-center justify-center text-[12px] font-extrabold">V</div>
          <span className={`text-[13px] ${isUnread ? 'font-extrabold text-[var(--dark)]' : 'font-medium text-[var(--muted)]'}`}>
            Vacare
          </span>
        </div>
        <span className="text-[11px] font-medium text-[var(--muted-l)]">{time}</span>
      </div>

      <div className="flex flex-col pl-[38px]">
        <h5 className={`text-[14px] leading-[1.4] mb-[4px] ${isUnread ? 'font-extrabold text-[var(--dark)]' : 'font-semibold text-[var(--muted)]'}`}>
          {subject}
        </h5>
        <p className="text-[13px] leading-[1.5] text-[var(--muted)] line-clamp-2">
          {snippet}
        </p>
      </div>

    </div>
  );
}
