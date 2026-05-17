'use client';

import { Link, usePathname } from '@/navigation';
import { useLocale } from 'next-intl';
import { useMeeting } from '@/components/layout/HomeClient';

export interface FooterColumn {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export interface FooterProps {
  variant?: 'full' | 'minimal';
  brandName?: string;
  brandDesc?: string;
  columns?: FooterColumn[];
  copyrightText?: string;
  langText?: string;
}

export default function Footer({
  variant = 'full',
  brandName = 'Vacare Digital Solutions',
  brandDesc = 'Sistemas digitales que generan ingresos. LLC constituida en Delaware, EEUU.',
  columns = [],
  copyrightText = '© 2026 Vacare Digital Solutions LLC. Todos los derechos reservados.',
  langText = 'ES / EN',
}: FooterProps) {
  const meeting = useMeeting();
  const pathname = usePathname() || '/';
  const currentLocale = useLocale();

  return (
    <>
      <footer className="bg-[var(--darker)] relative overflow-hidden">
        {/* Gradient top border */}
        <div className="h-[1.5px] w-full" style={{ background: 'linear-gradient(90deg, transparent 0%, #E8417A 30%, #F07030 60%, #F5A623 85%, transparent 100%)' }} />

        {variant === 'full' && (
          <div className="max-w-[1280px] mx-auto px-5 md:px-[52px] pt-[52px] md:pt-[64px] pb-[0]">
            {/* Top grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-[40px] gap-x-[32px] mb-[52px]">

              {/* Brand col — 4 cols */}
              <div className="lg:col-span-4 flex flex-col gap-0">
                <Link href="/" className="flex items-center gap-[10px] mb-[14px] group w-fit">
                  <img src="/images/logo.webp" alt={brandName} className="h-[34px] w-auto rounded-[8px]" />
                  <span className="text-[15px] font-extrabold tracking-[-0.3px] gt leading-none group-hover:opacity-80 transition-opacity">{brandName}</span>
                </Link>
                <p className="text-[13px] text-[rgba(247,246,242,0.42)] leading-[1.75] max-w-[270px] mb-[24px]">
                  {brandDesc}
                </p>

                {/* Trust chips */}
                <div className="flex flex-wrap gap-[8px] mb-[24px]">
                  {[
                    { icon: '🇺🇸', label: 'LLC Delaware' },
                    { icon: '🌎', label: 'LATAM · US · ES' },
                    { icon: '⚡', label: 'n8n powered' },
                  ].map((chip) => (
                    <div key={chip.label} className="flex items-center gap-[5px] bg-[rgba(247,246,242,0.05)] border-[0.5px] border-[rgba(247,246,242,0.1)] rounded-[20px] px-[10px] py-[4px]">
                      <span className="text-[11px]">{chip.icon}</span>
                      <span className="text-[11px] font-semibold text-[rgba(247,246,242,0.45)]">{chip.label}</span>
                    </div>
                  ))}
                </div>

                {/* Social icons */}
                <div className="flex items-center gap-[10px]">
                  {[
                    {
                      label: 'LinkedIn',
                      href: 'https://www.linkedin.com/company/vacare-digital-solutions',
                      path: 'M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM20 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0014 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z',
                    },
                    {
                      label: 'Instagram',
                      href: 'https://www.instagram.com/vacaredigitalsolutions',
                      path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
                    },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-[34px] h-[34px] rounded-[9px] bg-[rgba(247,246,242,0.05)] border-[0.5px] border-[rgba(247,246,242,0.1)] flex items-center justify-center transition-all hover:bg-[rgba(247,246,242,0.12)] hover:border-[rgba(247,246,242,0.2)]"
                    >
                      <svg viewBox="0 0 24 24" fill="rgba(247,246,242,0.5)" className="w-[14px] h-[14px]">
                        <path d={s.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Link columns — 2 cols each */}
              {columns.map((col, idx) => (
                <div key={idx} className="lg:col-span-2 flex flex-col">
                  <h5 className="text-[11px] font-bold text-[rgba(247,246,242,0.6)] mb-[16px] uppercase tracking-[0.1em]">
                    {col.title}
                  </h5>
                  <ul className="list-none flex flex-col gap-[11px]">
                    {col.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <Link
                          href={link.href as any}
                          className="text-[13px] text-[rgba(247,246,242,0.35)] no-underline transition-all hover:text-[rgba(247,246,242,0.8)] hover:translate-x-[3px] inline-block"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* CTA card — 2 cols */}
              <div className="lg:col-span-2 flex flex-col">
                <h5 className="text-[11px] font-bold text-[rgba(247,246,242,0.6)] mb-[16px] uppercase tracking-[0.1em]">
                  Empezá hoy
                </h5>
                <div className="rounded-[16px] p-[20px] relative overflow-hidden border-[0.5px] border-[rgba(232,65,122,0.25)]" style={{ background: 'linear-gradient(135deg, rgba(232,65,122,0.12) 0%, rgba(245,166,35,0.08) 100%)' }}>
                  {/* Subtle glow */}
                  <div className="absolute -top-[20px] -right-[20px] w-[80px] h-[80px] rounded-full gb opacity-[0.12] blur-[20px] pointer-events-none" />

                  <div className="text-[13px] font-extrabold text-[var(--cream)] mb-[4px] relative z-10">
                    Llamada estratégica
                  </div>
                  <div className="text-[11px] text-[rgba(247,246,242,0.4)] mb-[16px] relative z-10">
                    30 min · Sin cargo
                  </div>
                  <button
                    onClick={() => meeting?.openMeeting()}
                    className="gb text-white text-[12px] font-bold py-[9px] px-[18px] rounded-[9px] border-none cursor-pointer hover:opacity-90 transition-opacity relative z-10 w-full"
                  >
                    Agendar →
                  </button>
                </div>
              </div>

            </div>

            {/* Divider */}
            <div className="h-[0.5px] bg-[rgba(247,246,242,0.07)]" />
          </div>
        )}

        {/* Bottom bar */}
        <div className="max-w-[1280px] mx-auto px-5 md:px-[52px]">
          <div className="py-[20px] md:py-[22px] flex flex-wrap items-center justify-between gap-[12px]">
            {variant === 'minimal' && (
              <Link href="/" className="flex items-center gap-[8px]">
                <img src="/images/logo.webp" alt={brandName} className="h-[24px] w-auto rounded-[5px]" />
                <span className="text-[14px] font-extrabold gt">{brandName}</span>
              </Link>
            )}
            <p className="text-[11px] text-[rgba(247,246,242,0.2)] order-2 md:order-1">
              {copyrightText}
            </p>
            <div className="flex items-center gap-[18px] order-1 md:order-2">
              <Link href={'#' as any} className="text-[11px] text-[rgba(247,246,242,0.2)] hover:text-[rgba(247,246,242,0.5)] transition-colors no-underline">
                Privacidad
              </Link>
              <Link href={'#' as any} className="text-[11px] text-[rgba(247,246,242,0.2)] hover:text-[rgba(247,246,242,0.5)] transition-colors no-underline">
                Términos
              </Link>
              <span className="inline-flex items-center gap-[5px] text-[11px] font-bold tracking-[0.08em] uppercase">
                <Link
                  href={pathname}
                  locale="es"
                  className={`transition-colors ${currentLocale === 'es' ? 'text-[var(--mg)]' : 'text-[rgba(247,246,242,0.25)] hover:text-[rgba(247,246,242,0.6)]'}`}
                >
                  ES
                </Link>
                <span className="text-[rgba(247,246,242,0.15)] select-none">/</span>
                <Link
                  href={pathname}
                  locale="en"
                  className={`transition-colors ${currentLocale === 'en' ? 'text-[var(--mg)]' : 'text-[rgba(247,246,242,0.25)] hover:text-[rgba(247,246,242,0.6)]'}`}
                >
                  EN
                </Link>
              </span>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}
