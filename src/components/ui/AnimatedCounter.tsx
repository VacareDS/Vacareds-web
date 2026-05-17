'use client';

import { useRef, useEffect, useState } from 'react';

interface Props {
  value: string;
  className?: string;
}

export default function AnimatedCounter({ value, className = '' }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState(value);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true);
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const numericMatch = value.match(/(\d+)/);
    if (!numericMatch) { setDisplayed(value); return; }
    const target = parseInt(numericMatch[1], 10);
    const prefix = value.slice(0, numericMatch.index ?? 0);
    const suffix = value.slice((numericMatch.index ?? 0) + numericMatch[1].length);
    const duration = 1200;
    const steps = 28;
    const stepTime = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += target / steps;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setDisplayed(prefix + Math.round(current) + suffix);
    }, stepTime);
    return () => clearInterval(timer);
  }, [started, value]);

  return <span ref={ref} className={className}>{displayed}</span>;
}
