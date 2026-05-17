'use client';

import React, { ReactNode, useRef, useEffect, useState } from 'react';
import { Link } from '@/navigation';
import { motion } from 'framer-motion';

export interface CaseMetric {
  num: string;
  label: string;
}

export interface CaseStudyBlockProps {
  tag: string;
  title: ReactNode;
  description: string;
  metrics: CaseMetric[];
  linkHref: string;
  linkText: string;
  imgSrc?: string;
  imgTag?: string;
  imgNum?: string;
  imgSub?: string;
}

function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState('0');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const numericMatch = value.match(/^(\d+)/);
    if (!numericMatch) { setDisplayed(value); return; }
    const target = parseInt(numericMatch[1], 10);
    const rest = value.slice(numericMatch[1].length);
    const duration = 1200;
    const steps = 30;
    const stepTime = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += target / steps;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setDisplayed(Math.round(current) + rest);
    }, stepTime);
    return () => clearInterval(timer);
  }, [started, value]);

  return <span ref={ref}>{displayed}{suffix}</span>;
}

export default function CaseStudyBlock({
  tag,
  title,
  description,
  metrics,
  linkHref,
  linkText,
  imgSrc,
  imgTag = 'supertramp hostels',
  imgNum = '30%',
  imgSub = 'Cusco & Machu Picchu'
}: CaseStudyBlockProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] rounded-[24px] overflow-hidden">
      
      {/* IMAGE SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative overflow-hidden bg-gradient-to-br from-[#2a1f35] to-[#3a2a50] flex items-end min-h-[320px] md:min-h-0"
      >
        {imgSrc && (
          <img 
            src={imgSrc} 
            alt={imgTag} 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,20,40,0.95)] via-[rgba(28,20,40,0.4)] to-transparent" />
        
        <div className="relative z-10 p-[32px] md:p-[44px] w-full">
          <div className="text-[11px] font-bold text-[rgba(247,246,242,0.5)] uppercase tracking-[0.1em] mb-[10px]">
            {imgTag}
          </div>
          <div className="text-[clamp(60px,10vw,100px)] font-extrabold leading-[0.9] tracking-[-4px] gt pb-[8px]">
            {imgNum}
          </div>
          <div className="text-[13px] text-[rgba(247,246,242,0.45)] mt-[6px]">
            {imgSub}
          </div>
        </div>
      </motion.div>

      {/* CONTENT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        className="p-[36px_24px] md:p-[60px_48px] flex flex-col justify-center bg-white"
      >
        <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--mg)] mb-[20px]">
          <i className="w-[18px] h-[1.5px] bg-[var(--mg)] block" />
          {tag}
        </div>
        
        <h2 className="text-[clamp(24px,3.2vw,40px)] font-extrabold leading-[1.14] tracking-[-1.2px] text-[var(--dark)] mb-[16px]">
          {title}
        </h2>
        
        <p className="text-[14px] leading-[1.75] text-[var(--muted)] mb-[32px] max-w-[440px]">
          {description}
        </p>

        {metrics && metrics.length > 0 && (
          <div className="flex flex-col md:flex-row mb-[32px] border-[1px] border-[rgba(28,24,40,0.1)] rounded-[14px] overflow-hidden">
            {metrics.map((metric, idx) => (
              <div 
                key={idx} 
                className={`flex-1 p-[20px_24px] border-b md:border-b-0 md:border-r border-[rgba(28,24,40,0.1)] ${idx === metrics.length - 1 ? 'md:border-r-0 border-b-0' : ''}`}
              >
                <span className="block text-[clamp(28px,3vw,36px)] font-extrabold tracking-[-2px] leading-none gt pb-[4px]">
                  <AnimatedCounter value={metric.num} />
                </span>
                <span className="block text-[11px] font-bold text-[var(--dark)] tracking-[0.05em] uppercase mt-[8px] leading-[1.4]">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        )}

        <Link 
          href={linkHref} 
          className="inline-block self-start text-[14px] font-bold text-[var(--am)] no-underline border-b-[1.5px] border-[rgba(245,166,35,0.35)] pb-[2px] transition-colors hover:border-[var(--am)]"
        >
          {linkText}
        </Link>
      </motion.div>
      
    </div>
  );
}
