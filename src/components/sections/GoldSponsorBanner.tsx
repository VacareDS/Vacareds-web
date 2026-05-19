'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

function TrophyIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cup body */}
      <path
        d="M8.5 2.5h9v8.5c0 3.85-2.68 7.08-6.3 7.88V21h2.8v1.5H12V21h2.8v-2.12A8 8 0 0 1 8.5 11V2.5Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      {/* Left handle */}
      <path
        d="M8.5 5H5.75A1.875 1.875 0 0 0 5.75 8.75H8.5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      {/* Right handle */}
      <path
        d="M17.5 5H20.25A1.875 1.875 0 0 1 20.25 8.75H17.5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      {/* Base stem */}
      <path
        d="M10 22.5h6"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      {/* Star inside cup */}
      <path
        d="M13 6.2l.52 1.6h1.68l-1.36.99.52 1.6L13 9.4l-1.36.99.52-1.6-1.36-.99h1.68z"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  );
}

const ATTRACT_STRENGTH = 0.09;
const ATTRACT_MAX = 11;
const TILT_MAX = 6; // grados de inclinación 3D

interface GoldSponsorBannerProps {
  eyebrow: string;
  title: string;
  description: string;
  stampMonth: string;
  stampYear: string;
}

export default function GoldSponsorBanner({ eyebrow, title, description, stampMonth, stampYear }: GoldSponsorBannerProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rawRX = useMotionValue(0);
  const rawRY = useMotionValue(0);

  const spring = { stiffness: 110, damping: 16, mass: 0.75 };
  const x = useSpring(rawX, spring);
  const y = useSpring(rawY, spring);
  const rotateX = useSpring(rawRX, spring);
  const rotateY = useSpring(rawRY, spring);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const dx = e.clientX - (left + width / 2);
    const dy = e.clientY - (top + height / 2);
    const clamp = (v: number, max: number) => Math.max(-max, Math.min(max, v));
    // Atracción: la tarjeta se mueve hacia el cursor
    rawX.set(clamp(dx * ATTRACT_STRENGTH, ATTRACT_MAX));
    rawY.set(clamp(dy * ATTRACT_STRENGTH, ATTRACT_MAX));
    // Tilt 3D: se inclina hacia donde está el cursor
    rawRY.set(clamp((dx / width) * TILT_MAX * 2, TILT_MAX));
    rawRX.set(clamp(-(dy / height) * TILT_MAX * 2, TILT_MAX));
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
    rawRX.set(0);
    rawRY.set(0);
  };

  return (
    <section className="bg-(--cream) py-[40px] md:py-[52px] relative overflow-hidden">
      <div className="max-w-[1160px] mx-auto px-[24px] flex justify-center" style={{ perspective: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[820px]"
        >
          {/* Magnetic layer */}
          <motion.div
            ref={cardRef}
            style={{ x, y, rotateX, rotateY, transformStyle: 'preserve-3d' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="cursor-default"
          >
            {/* CSS float layer */}
            <div style={{ animation: 'goldFloat 7s ease-in-out infinite' }}>

              {/* Gradient border shell */}
              <div
                className="relative rounded-[18px] p-[1.5px]"
                style={{
                  background: 'linear-gradient(135deg, #F5A623 0%, #F07030 45%, rgba(245,166,35,0.3) 100%)',
                  boxShadow: '0 24px 64px rgba(245,166,35,0.16), 0 6px 28px rgba(0,0,0,0.28)',
                }}
              >
                {/* Inner card */}
                <div
                  className="relative rounded-[16.5px] overflow-hidden"
                  style={{ background: 'linear-gradient(140deg, #1e1830 0%, #0E0E12 100%)' }}
                >
                  {/* Shimmer sweep */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(105deg, transparent 30%, rgba(245,166,35,0.07) 50%, transparent 70%)',
                      animation: 'shimmer 5s ease-in-out infinite 0.8s',
                    }}
                  />

                  {/* Top highlight line */}
                  <div
                    className="absolute top-0 left-[10%] right-[10%] h-px"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(245,166,35,0.55) 40%, rgba(240,112,48,0.45) 60%, transparent)',
                    }}
                  />

                  {/* Content row */}
                  <div className="relative z-10 flex items-center gap-[20px] md:gap-[28px] px-[24px] md:px-[36px] py-[22px] md:py-[26px]">

                    {/* Icon medallion */}
                    <div
                      className="hidden sm:flex shrink-0 w-[54px] h-[54px] md:w-[62px] md:h-[62px] rounded-[14px] items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(245,166,35,0.22) 0%, rgba(240,112,48,0.12) 100%)',
                        border: '1px solid rgba(245,166,35,0.32)',
                        boxShadow: '0 4px 16px rgba(245,166,35,0.12)',
                        color: '#F5A623',
                      }}
                    >
                      <TrophyIcon />
                    </div>

                    {/* Text block */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-[7px] mb-[7px]">
                        <span
                          className="text-[10px] font-extrabold tracking-[0.14em] uppercase"
                          style={{ color: 'var(--am)' }}
                        >
                          {eyebrow}
                        </span>
                      </div>
                      <h3 className="text-[15px] md:text-[17px] font-extrabold tracking-[-0.4px] leading-tight text-(--cream) mb-[7px]">
                        {title}
                      </h3>
                      <p className="text-[12.5px] md:text-[13.5px] leading-[1.65] text-[rgba(247,246,242,0.5)]">
                        {description}
                      </p>
                    </div>

                    {/* Stamp */}
                    <div className="hidden md:flex flex-col items-center gap-[5px] shrink-0 pr-[4px]">
                      <div
                        className="w-[34px] h-[34px] rounded-full flex items-center justify-center text-[10px] font-black tracking-[-0.3px] leading-tight text-center"
                        style={{
                          border: '1.5px solid rgba(245,166,35,0.45)',
                          color: 'rgba(245,166,35,0.7)',
                        }}
                      >
                        <span>{stampMonth}<br />{stampYear}</span>
                      </div>
                      <div className="flex gap-[3px]">
                        {[0.9, 0.55, 0.3].map((op, i) => (
                          <div
                            key={i}
                            className="w-[4px] h-[4px] rounded-full"
                            style={{ background: `rgba(245,166,35,${op})` }}
                          />
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
