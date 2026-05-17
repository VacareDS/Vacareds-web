'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface VideoTestimonialProps {
  eyebrow: string;
  quote: string;
  author: string;
  role: string;
  videoSrc?: string;
  videoType?: 'file' | 'youtube';
  posterSrc?: string;
}

export default function VideoTestimonial({
  eyebrow,
  quote,
  author,
  role,
  videoSrc,
  videoType = 'file',
  posterSrc
}: VideoTestimonialProps) {
  return (
    <section className="bg-[var(--darker)] py-[80px] md:py-[100px] relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none gb" />
      
      <div className="max-w-[1180px] mx-auto px-5 md:px-[52px] grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[60px] items-center">
        {/* Video */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative rounded-[18px] overflow-hidden bg-[rgba(247,246,242,0.05)] border-[0.5px] border-[rgba(247,246,242,0.1)] aspect-video"
        >
          {videoSrc && videoType === 'youtube' ? (
            <iframe
              src={videoSrc}
              title="Video testimonial"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          ) : videoSrc ? (
            <video
              src={videoSrc}
              poster={posterSrc}
              controls
              preload="none"
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            /* Placeholder when no video yet */
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-[64px] h-[64px] rounded-full gb flex items-center justify-center mx-auto mb-[14px] shadow-[0_8px_30px_rgba(232,65,122,0.3)]">
                  <svg viewBox="0 0 24 24" fill="white" className="w-[24px] h-[24px] ml-[3px]">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-[12px] text-[rgba(247,246,242,0.35)]">Video próximamente</p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--mg)] mb-[22px]">
            <i className="w-[18px] h-[1.5px] bg-[var(--mg)] block" />
            {eyebrow}
          </div>
          
          {/* Quote mark */}
          <div className="text-[60px] leading-[0.7] font-extrabold gt mb-[8px]">"</div>
          
          <blockquote className="text-[clamp(20px,2.8vw,28px)] font-extrabold leading-[1.35] tracking-[-0.8px] text-[var(--cream)] mb-[28px]">
            {quote}
          </blockquote>
          
          <div className="flex items-center gap-[14px]">
            <div className="w-[40px] h-[2px] gb rounded-full" />
            <div>
              <div className="text-[14px] font-extrabold text-[var(--cream)]">{author}</div>
              <div className="text-[12px] text-[rgba(247,246,242,0.4)]">{role}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
