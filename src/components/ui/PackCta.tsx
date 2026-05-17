'use client';

import { useMeeting } from '@/components/layout/HomeClient';

interface Props {
  label: string;
}

export default function PackCta({ label }: Props) {
  const meeting = useMeeting();

  return (
    <div className="text-center mt-[48px]">
      <p className="text-[14px] text-[var(--muted)] mb-[14px]">
        {label}
      </p>
      <button
        onClick={() => meeting?.openMeeting()}
        className="inline-flex items-center gap-[8px] text-[13px] font-bold text-[var(--mg)] no-underline border-b-[1.5px] border-[rgba(232,65,122,0.3)] pb-[2px] transition-colors hover:border-[var(--mg)] bg-transparent border-l-0 border-r-0 border-t-0 cursor-pointer"
      >
        Contanos tu situación — te recomendamos el sistema ideal →
      </button>
    </div>
  );
}
