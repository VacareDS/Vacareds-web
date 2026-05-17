'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useMeeting } from '@/components/layout/HomeClient';

const STORAGE_KEY = 'vacare_exit_dismissed';

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const meeting = useMeeting();
  const t = useTranslations('ExitIntent');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    let scrollTriggered = false;

    function show() {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    }

    function onScroll() {
      if (scrollTriggered) return;
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      if (scrolled / total >= 0.8) {
        scrollTriggered = true;
        show();
      }
    }

    const timer = setTimeout(show, 60000);

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timer);
    };
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
  }

  function handleCta() {
    dismiss();
    meeting?.openMeeting();
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[400] flex items-end justify-center md:items-center p-4 md:p-0"
      style={{ background: 'rgba(14,14,18,0.7)', backdropFilter: 'blur(4px)' }}
      onClick={dismiss}
    >
      <div
        className="relative bg-[var(--darker)] border-[0.5px] border-[rgba(232,65,122,0.25)] rounded-[20px] p-[32px_28px] md:p-[40px_44px] w-full max-w-[440px] shadow-[0_24px_64px_rgba(0,0,0,0.5)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 rounded-[20px] gb opacity-[0.04] pointer-events-none" />

        <button
          onClick={dismiss}
          aria-label="Cerrar"
          className="absolute top-[14px] right-[14px] w-[28px] h-[28px] flex items-center justify-center rounded-full bg-[rgba(247,246,242,0.06)] text-[rgba(247,246,242,0.4)] hover:text-[rgba(247,246,242,0.8)] transition-colors border-none cursor-pointer text-[16px]"
        >
          ×
        </button>

        <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-[var(--mg)] mb-[14px] relative z-[1]">
          {t('eyebrow')}
        </div>

        <h3 className="text-[22px] md:text-[26px] font-extrabold text-[var(--cream)] leading-[1.2] tracking-[-0.8px] mb-[12px] relative z-[1]">
          {t('title')}
        </h3>

        <p className="text-[14px] text-[rgba(247,246,242,0.5)] leading-[1.6] mb-[28px] relative z-[1]">
          {t('body')}
        </p>

        <button
          onClick={handleCta}
          className="gb text-white border-none w-full py-[14px] px-[24px] rounded-[11px] font-extrabold text-[15px] cursor-pointer hover:opacity-90 transition-all hover:-translate-y-[2px] relative z-[1]"
        >
          {t('cta')}
        </button>

        <button
          onClick={dismiss}
          className="mt-[12px] w-full text-[12px] text-[rgba(247,246,242,0.25)] hover:text-[rgba(247,246,242,0.5)] transition-colors bg-transparent border-none cursor-pointer py-[4px] relative z-[1]"
        >
          {t('dismiss')}
        </button>
      </div>
    </div>
  );
}
