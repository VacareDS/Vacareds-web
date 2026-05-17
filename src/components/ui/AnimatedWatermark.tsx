'use client';

import React from 'react';
import { motion } from 'framer-motion';

type SlideDirection = 'left' | 'right' | 'bottom';

interface AnimatedWatermarkProps {
  text: string;
  direction?: SlideDirection;
  className?: string;
}

export default function AnimatedWatermark({
  text,
  direction = 'right',
  className = '',
}: AnimatedWatermarkProps) {
  const initialX = direction === 'left' ? 120 : direction === 'right' ? -120 : 0;
  const initialY = direction === 'bottom' ? 80 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, y: initialY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      className={`absolute font-extrabold leading-none pointer-events-none tracking-[-6px] whitespace-nowrap z-0 select-none ${className}`}
    >
      {text}
    </motion.div>
  );
}
