'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export interface FlowOutput {
  text: string;
  color: string;
}

export interface AutoFlowProps {
  trigger: string;
  engine: string;
  outputs: FlowOutput[];
}

/* Node positions as [x%, y%] — engine is DEAD CENTER */
const ENGINE  = { x: 50, y: 50 };
const TRIGGER = { x: 14, y: 15 };
const DB      = { x: 10, y: 75 };
const OUTPUT_POS = [
  { x: 84, y: 10 },
  { x: 88, y: 44 },
  { x: 82, y: 76 },
  { x: 38, y: 90 },
];

export default function AutoFlow({ trigger, engine, outputs }: AutoFlowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const setup = () => {
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect(); } },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    };
    let obs: IntersectionObserver | undefined;
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => { obs = setup(); });
    } else {
      obs = setup();
    }
    return () => obs?.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative"
      style={{ minHeight: '400px' }}
    >
      {/* SVG connection lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <line x1={TRIGGER.x} y1={TRIGGER.y} x2={ENGINE.x} y2={ENGINE.y}
          stroke="rgba(247,246,242,0.12)" strokeWidth="0.3" strokeDasharray="1.2 0.8" />
        <line x1={DB.x} y1={DB.y} x2={ENGINE.x} y2={ENGINE.y}
          stroke="rgba(247,246,242,0.1)" strokeWidth="0.3" strokeDasharray="1.2 0.8" />
        {OUTPUT_POS.map((pos, i) => (
          <line key={i} x1={ENGINE.x} y1={ENGINE.y} x2={pos.x} y2={pos.y}
            stroke={outputs[i]?.color ?? 'rgba(247,246,242,0.1)'}
            strokeOpacity="0.25" strokeWidth="0.3" strokeDasharray="1.2 0.8" />
        ))}
      </svg>

      {/* ── ENGINE NODE — absolute center ── */}
      <div
        className="absolute z-20"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          animation: active ? 'floatCenter 6s ease-in-out infinite' : 'none',
        }}
      >
        {/* Pulsing glow ring */}
        <div
          className="absolute -inset-[18px] rounded-[24px] gb blur-[22px]"
          style={{ animation: active ? 'enginePulse 3s ease-in-out infinite' : 'none', opacity: 0 }}
        />
        <div className="relative gb rounded-[16px] py-[18px] px-[28px] text-white font-extrabold text-[16px] shadow-[0_12px_40px_rgba(232,65,122,0.35)]">
          <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-[rgba(255,255,255,0.6)] mb-[4px]">Motor</div>
          {engine}
        </div>
      </div>

      {/* ── TRIGGER NODE ── */}
      <div
        className="absolute z-10"
        style={{
          left: `${TRIGGER.x}%`,
          top: `${TRIGGER.y}%`,
          transform: 'translate(-50%, -50%)',
          animation: active ? 'floatA 7s ease-in-out infinite' : 'none',
        }}
      >
        <div className="bg-[rgba(247,246,242,0.07)] border-[0.5px] border-[rgba(247,246,242,0.12)] rounded-[14px] py-[14px] px-[18px] text-[12px] font-semibold text-[var(--cream)] max-w-[180px] hover:bg-[rgba(247,246,242,0.12)] transition-colors">
          <div className="flex items-center gap-[8px] mb-[6px]">
            <div className="w-[8px] h-[8px] rounded-full bg-[#10b981]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-[rgba(247,246,242,0.4)]">Trigger</span>
          </div>
          {trigger}
        </div>
      </div>

      {/* ── DATABASE NODE ── */}
      <div
        className="absolute z-10"
        style={{
          left: `${DB.x}%`,
          top: `${DB.y}%`,
          transform: 'translate(-50%, -50%)',
          animation: active ? 'floatB 8s ease-in-out infinite' : 'none',
        }}
      >
        <div className="bg-[rgba(247,246,242,0.05)] border-[0.5px] border-[rgba(247,246,242,0.08)] rounded-[10px] py-[10px] px-[14px] hover:bg-[rgba(247,246,242,0.1)] transition-colors">
          <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-[rgba(247,246,242,0.3)] mb-[3px]">Database</div>
          <div className="text-[11px] font-semibold text-[rgba(247,246,242,0.55)]">Postgres</div>
        </div>
      </div>

      {/* ── OUTPUT NODES ── */}
      {outputs.map((out, idx) => {
        const pos = OUTPUT_POS[idx] || OUTPUT_POS[0];
        const anims = ['floatC 7.5s', 'floatD 8.5s', 'floatA 9s', 'floatB 7s'];
        return (
          <div
            key={idx}
            className="absolute z-10"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              transform: 'translate(-50%, -50%)',
              animation: active ? `${anims[idx] || anims[0]} ease-in-out infinite` : 'none',
            }}
          >
            <div className="bg-[rgba(247,246,242,0.05)] border-[0.5px] border-[rgba(247,246,242,0.09)] rounded-[12px] py-[11px] px-[15px] text-[12px] text-[rgba(247,246,242,0.7)] flex items-center gap-[10px] max-w-[200px] hover:bg-[rgba(247,246,242,0.1)] transition-colors">
              <div className="w-[8px] h-[8px] rounded-full shrink-0" style={{ background: out.color }} />
              <span className="leading-[1.35]">{out.text}</span>
            </div>
          </div>
        );
      })}

      {/* Decorative dots */}
      <div className="absolute top-[30%] left-[28%] w-[5px] h-[5px] rounded-full bg-[rgba(232,65,122,0.3)] z-[5]"
        style={{ animation: active ? 'floatC 5s ease-in-out infinite' : 'none' }} />
      <div className="absolute top-[65%] right-[35%] w-[4px] h-[4px] rounded-full bg-[rgba(245,166,35,0.25)] z-[5]"
        style={{ animation: active ? 'floatD 6s ease-in-out infinite' : 'none' }} />
      <div className="absolute bottom-[30%] left-[55%] w-[4px] h-[4px] rounded-full bg-[rgba(240,112,48,0.2)] z-[5]"
        style={{ animation: active ? 'floatA 7s ease-in-out infinite' : 'none' }} />
    </motion.div>
  );
}
