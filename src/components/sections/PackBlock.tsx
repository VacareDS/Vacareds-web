'use client';

import { motion } from 'framer-motion';
import { useMeeting } from '@/components/layout/HomeClient';

export interface PackItem {
  badge: string;
  badgeType: 'def' | 'hot' | 'mo';
  name: string;
  price: string;
  desc: string;
  features: string[];
  btn: string;
  btnType: 'outline' | 'solid';
  isHot: boolean;
}

export interface PackBlockProps {
  items: PackItem[];
}

export default function PackBlock({ items }: PackBlockProps) {
  const meeting = useMeeting();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[14px] items-start">
      {items.map((pack, idx) => {
        const isHot = pack.isHot;

        const badgeColors = {
          def: 'bg-[rgba(28,24,40,0.06)] text-[var(--muted)]',
          hot: 'gb text-white',
          mo: 'bg-[rgba(245,166,35,0.12)] text-[#7a5000]'
        };

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className={`
              rounded-[18px] transition-all duration-200 relative
              ${isHot
                ? 'bg-white p-[2px] md:-mt-[20px] md:-mb-[20px] hover:shadow-[0_24px_60px_rgba(232,65,122,0.2)]'
                : 'bg-white border-[0.5px] border-[rgba(28,24,40,0.09)] hover:-translate-y-[4px] hover:shadow-[0_20px_50px_rgba(28,24,40,0.09)]'
              }
            `}
          >
            {isHot && (
              <div className="absolute inset-0 rounded-[18px] gb -z-10" />
            )}

            <div className={`${isHot ? 'bg-white rounded-[16px] p-[28px] pt-[36px] pb-[36px]' : 'p-[28px]'}`}>
              {isHot && (
                <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 gb text-white text-[10px] font-bold tracking-[0.08em] uppercase px-[16px] py-[4px] rounded-b-[8px] z-10">
                  POPULAR
                </div>
              )}

              <span className={`text-[10px] font-bold tracking-[0.1em] uppercase px-[10px] py-[3px] rounded-[20px] inline-block mb-[18px] ${badgeColors[pack.badgeType]}`}>
                {pack.badge}
              </span>

              <div className={`text-[18px] font-extrabold tracking-[-0.5px] mb-[5px] ${isHot ? 'text-[var(--dark)] text-[20px]' : 'text-[var(--dark)]'}`}>
                {pack.name}
              </div>

              <div
                className="text-[12px] text-[var(--muted)] mb-[20px] [&>b]:text-[12px] [&>b]:font-bold [&>b]:text-[var(--muted)] [&>b]:tracking-[0]"
                dangerouslySetInnerHTML={{ __html: pack.price }}
              />

              <div className={`h-[0.5px] mb-[18px] ${isHot ? 'gb opacity-30' : 'bg-[rgba(28,24,40,0.08)]'}`} />

              <p className="text-[13px] leading-[1.65] text-[var(--muted)] mb-[20px]">
                {pack.desc}
              </p>

              <ul className="list-none flex flex-col gap-[9px] mb-[24px]">
                {pack.features.map((feat, fidx) => (
                  <li key={fidx} className="text-[13px] text-[var(--dark)] flex items-start gap-[9px] leading-[1.45]">
                    <span className="w-[14px] h-[14px] rounded-full gb shrink-0 mt-[1px] flex items-center justify-center text-white text-[8px] font-bold">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => meeting?.openMeeting()}
                className={`
                  w-full p-[12px] rounded-[10px] font-bold text-[14px] text-center block transition-all border-none cursor-pointer
                  ${pack.btnType === 'solid'
                    ? 'gb text-white hover:opacity-90 hover:shadow-[0_8px_24px_rgba(232,65,122,0.3)]'
                    : 'bg-transparent border-[1.5px] border-[rgba(28,24,40,0.14)] text-[var(--dark)] hover:border-[var(--mg)] hover:text-[var(--mg)]'
                  }
                `}
              >
                {pack.btn}
              </button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
