'use client';

import { useMeeting } from '@/components/layout/HomeClient';

interface Props {
  label: string;
  subText?: string;
}

export default function HeroCta({ label, subText }: Props) {
  const meeting = useMeeting();

  return (
    <div className="flex flex-col items-start gap-[6px]">
      <button
        onClick={() => meeting?.openMeeting()}
        className="gb text-white border-none py-[13px] px-[26px] rounded-[9px] font-extrabold text-[14px] md:text-[15px] cursor-pointer transition-all hover:opacity-90 hover:-translate-y-[2px] hover:shadow-[0_10px_28px_rgba(232,65,122,0.3)] whitespace-nowrap animate-[pulse-glow_3s_ease-in-out_infinite]"
      >
        {label}
      </button>
      {subText && (
        <span className="text-[11px] text-[var(--muted)] pl-[2px]">{subText}</span>
      )}
    </div>
  );
}
