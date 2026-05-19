import { getTranslations, setRequestLocale } from 'next-intl/server';
import React from 'react';
import Link from 'next/link';
import CaseStudyJsonLd from '@/components/seo/CaseStudyJsonLd';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';

// Layout
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import PageWrapper from '@/components/layout/PageWrapper';

// Sections
import SplitHero from '@/components/sections/SplitHero';
import StrategyTimelineItem from './StrategyTimelineItem';

// UI
import GradientText from '@/components/ui/GradientText';
import Breadcrumb from '@/components/ui/Breadcrumb';

const BASE_URL = 'https://vacaredigitalsolutions.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: "Caso de éxito: Supertramp Hostels — 30% de reservas directas desde la web | Vacare",
    description: "Cómo rediseñamos la web de Supertramp Hostels en Cusco y Machu Picchu, ejecutamos un keyword research estratégico y en 6 meses el 30% de sus reservas totales llegaban directamente desde su sitio.",
    alternates: {
      canonical: `${BASE_URL}/${locale}/casos-de-exito/supertramp`,
      languages: {
        es: `${BASE_URL}/es/casos-de-exito/supertramp`,
        en: `${BASE_URL}/en/case-studies/supertramp`,
        'x-default': `${BASE_URL}/es/casos-de-exito/supertramp`,
      },
    },
  };
}

export default async function SupertrampCasePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'CaseSupertramp' });
  const tLayout = await getTranslations({ locale, namespace: 'Layout' });

  const BASE = 'https://vacaredigitalsolutions.com';
  const caseUrl = `${BASE}/${locale}/casos-de-exito/supertramp`;

  return (
    <>
      <CaseStudyJsonLd
        url={caseUrl}
        name="Caso de éxito: Supertramp Hostels — 30% de reservas directas desde la web"
        description="Rediseño web + SEO estratégico para Supertramp Hostels en Cusco y Machu Picchu. El 30% de sus reservas totales llegaban desde la web propia en 6 meses."
        clientName="Supertramp Hostels"
        reviewBody="El 30% de nuestra facturación ahora proviene de nuestra propia web. La diferencia es enorme."
        reviewerName="Theo"
        reviewerTitle="Manager General"
      />
      <BreadcrumbJsonLd items={[
        { name: 'Inicio', item: `${BASE}/${locale}` },
        { name: 'Casos de Éxito', item: `${BASE}/${locale}/casos-de-exito` },
        { name: 'Supertramp Hostels', item: caseUrl },
      ]} />
      <Nav
        transparent={false}
        brandName={tLayout('Nav.brand')}
      />

      <main className="pt-[64px]">
        <div className="bg-[var(--cream)] px-5 md:px-[52px] py-[12px] max-w-[1280px] mx-auto">
          <Breadcrumb items={[
            { label: 'Inicio', href: '/' },
            { label: 'Casos de éxito', href: '/casos-de-exito' },
            { label: 'Supertramp Hostels' },
          ]} />
        </div>

        {/* HERO */}
        <SplitHero
          watermarkText={t('Hero.watermark')}
          eyebrow={t('Hero.eyebrow')}
          headline={
            t.rich('Hero.title', {
              br: () => <br />,
              grad: (chunks) => <GradientText>{chunks}</GradientText>
            })
          }
          subheadline={t('Hero.subtitle')}
          leftContent={
            <>
              <div className="flex gap-[8px] flex-wrap mb-[32px]">
                {t.raw('Hero.stack').map((tech: string, idx: number) => (
                  <span key={idx} className={`inline-flex items-center gap-[6px] text-[12px] font-bold px-[13px] py-[6px] rounded-[20px] ${idx < 2 ? 'grad-bg text-white' : 'bg-[rgba(28,24,40,0.07)] text-[var(--dark)]'}`}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-0 border-[0.5px] border-[rgba(28,24,40,0.1)] rounded-[14px] overflow-hidden max-w-[440px]">
                {t.raw('Hero.metrics').map((m: any, idx: number, arr: any[]) => (
                  <div key={idx} className={`p-[18px_22px] flex-1 ${idx < arr.length - 1 ? 'border-b-[0.5px] sm:border-b-0 sm:border-r-[0.5px] border-[rgba(28,24,40,0.07)]' : ''}`}>
                    <span className="text-[clamp(22px,3vw,32px)] font-extrabold tracking-[-1px] leading-none block grad-text">{m.num}</span>
                    <span className="text-[10px] font-semibold text-[var(--muted)] tracking-[0.06em] uppercase mt-[5px] block">{m.label}</span>
                  </div>
                ))}
              </div>
            </>
          }
          splitPosition="54/46"
          rightWatermarkText={t('Hero.rightWatermark')}
          rightVerticalText={t('Hero.rightVertical')}
          rightContent={
            <div className="relative w-full">
              <div className="flex gap-[8px] mb-[28px]">
                <div className="rounded-[7px] w-[30px] h-[30px] bg-[rgba(255,255,255,0.22)]" />
                <div className="rounded-[5px] w-[18px] h-[18px] bg-[rgba(255,255,255,0.13)] mt-[7px]" />
                <div className="rounded-[10px] w-[42px] h-[42px] bg-transparent border-[2px] border-[rgba(255,255,255,0.28)]" />
                <div className="rounded-[3px] w-[14px] h-[14px] bg-[rgba(255,255,255,0.28)] mt-[13px]" />
              </div>

              <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-[rgba(255,255,255,0.4)] mb-[16px]">
                {t('Hero.previewLabel')}
              </div>

              <div className="flex flex-col gap-[10px]">
                {t.raw('Hero.results').map((rc: any, idx: number) => (
                  <div key={idx} className="bg-[rgba(255,255,255,0.12)] border-[0.5px] border-[rgba(255,255,255,0.22)] backdrop-blur-[14px] rounded-[14px] p-[16px_18px] flex items-center gap-[14px]">
                    <div className="text-[32px] font-extrabold text-white tracking-[-1.5px] leading-none shrink-0 min-w-[60px]">
                      {rc.num === 'icon-down' ? (
                        <svg className="w-[28px] h-[28px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      ) : rc.num === 'icon-up' ? (
                        <svg className="w-[28px] h-[28px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      ) : (
                        rc.num
                      )}
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-white mb-[2px]">{rc.title}</div>
                      <div className="text-[11px] text-[rgba(255,255,255,0.55)]">{rc.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* CONTEXT */}
        <section id="context" className="bg-[var(--cream)] py-[70px] lg:py-[110px]">
          <PageWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-start">
              <div>
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                  <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
                  {t('Context.eyebrow')}
                </div>
                <h2 className="text-[clamp(30px,3.8vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[16px]">
                  {t.rich('Context.title', { br: () => <br />, grad: (chunks) => <GradientText>{chunks}</GradientText> })}
                </h2>
                <p className="text-[15px] leading-[1.75] text-[var(--muted)] mb-[14px]">{t('Context.p1')}</p>
                <p className="text-[15px] leading-[1.75] text-[var(--muted)] mb-[14px]">{t('Context.p2')}</p>
                <p className="text-[15px] leading-[1.75] text-[var(--muted)] mb-[14px]">{t('Context.p3')}</p>

                <div className="bg-white border-[0.5px] border-[rgba(28,24,40,0.09)] rounded-[18px] p-[28px] mt-[28px]">
                  <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-[rgba(232,65,122,0.7)] mb-[14px]">
                    {t('Context.problemTag')}
                  </div>
                  <ul className="flex flex-col gap-[10px]">
                    {t.raw('Context.problems').map((prob: string, idx: number) => (
                      <li key={idx} className="flex gap-[10px] items-start text-[14px] text-[var(--dark)] leading-[1.5]">
                        <span className="text-[rgba(232,65,122,0.5)] font-extrabold text-[16px] leading-[1.1] shrink-0">×</span>
                        <span>{prob}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="bg-[var(--dark)] rounded-[20px] p-[32px] relative overflow-hidden">
                  <div className="absolute inset-0 grad-bg opacity-5" />
                  <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-[rgba(247,246,242,0.3)] mb-[14px] relative z-[1]">
                    {t('Context.siteCard.tag')}
                  </div>
                  <div className="text-[20px] font-extrabold text-[var(--cream)] mb-[6px] tracking-[-0.5px] relative z-[1]">
                    {t('Context.siteCard.url')}
                  </div>
                  <div className="text-[13px] text-[rgba(247,246,242,0.45)] leading-[1.6] mb-[24px] relative z-[1]">
                    {t('Context.siteCard.desc')}
                  </div>
                  <div className="flex gap-[6px] flex-wrap mb-[20px] relative z-[1]">
                    {t.raw('Context.siteCard.tags').map((tag: string, idx: number) => (
                      <span key={idx} className="bg-[rgba(247,246,242,0.07)] border-[0.5px] border-[rgba(247,246,242,0.12)] rounded-[20px] px-[11px] py-[4px] text-[11px] font-semibold text-[rgba(247,246,242,0.5)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="h-[0.5px] bg-[rgba(247,246,242,0.07)] my-[16px] relative z-[1]" />
                  
                  <div className="flex flex-col gap-[8px] relative z-[1]">
                    {t.raw('Context.siteCard.stats').map((stat: any, idx: number) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-[12px] text-[rgba(247,246,242,0.35)]">{stat.label}</span>
                        <span className="text-[13px] font-bold text-[var(--cream)]">{stat.val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="h-[0.5px] bg-[rgba(247,246,242,0.07)] my-[16px] relative z-[1]" />

                  <div className="relative z-[1]">
                    <a href={t('Context.siteCard.link')} target="_blank" rel="noopener noreferrer" className="text-[12px] font-bold no-underline border-b pb-[1px] text-[var(--mg)] border-[rgba(232,65,122,0.3)]">
                      {t('Context.siteCard.linkLabel')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </PageWrapper>
        </section>

        {/* STRATEGY */}
        <section id="strategy" className="bg-[var(--dark)] py-[70px] lg:py-[110px] relative overflow-hidden">
          <div className="absolute text-[clamp(70px,13vw,160px)] font-extrabold text-[rgba(247,246,242,0.025)] italic leading-none pointer-events-none -bottom-[10px] -right-[10px] tracking-[-4px] select-none z-0">
            {t('Strategy.watermark')}
          </div>
          <PageWrapper className="relative z-10">
            <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
              <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
              {t('Strategy.eyebrow')}
            </div>
            <h2 className="text-[clamp(30px,3.8vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[14px]">
              {t.rich('Strategy.title', { br: () => <br />, grad: (chunks) => <GradientText>{chunks}</GradientText> })}
            </h2>
            <p className="text-[16px] leading-[1.75] text-[var(--muted-l)] max-w-[560px] mb-[52px]">
              {t('Strategy.intro')}
            </p>

            <div className="flex flex-col gap-0">
              {t.raw('Strategy.steps').map((step: any, idx: number, arr: any[]) => (
                <StrategyTimelineItem key={idx} step={step} isLast={idx === arr.length - 1} />
              ))}
            </div>
          </PageWrapper>
        </section>

        {/* EXECUTION */}
        <section id="execution" className="bg-[var(--cream)] py-[70px] lg:py-[110px] relative overflow-hidden">
          <div className="absolute text-[clamp(70px,13vw,160px)] font-extrabold text-[rgba(28,24,40,0.025)] italic leading-none pointer-events-none -bottom-[10px] -right-[10px] tracking-[-4px] select-none z-0">
            {t('Execution.watermark')}
          </div>
          <PageWrapper className="relative z-10">
            <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
              <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
              {t('Execution.eyebrow')}
            </div>
            <h2 className="text-[clamp(30px,3.8vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[14px]">
              {t.rich('Execution.title', { br: () => <br />, grad: (chunks) => <GradientText>{chunks}</GradientText> })}
            </h2>
            <p className="text-[16px] leading-[1.75] text-[var(--muted)] max-w-[560px] mb-[52px]">
              {t('Execution.intro')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-[12px]">
              {t.raw('Execution.items').map((eb: any, idx: number) => (
                <div key={idx} className={`bg-white border-[0.5px] border-[rgba(28,24,40,0.08)] rounded-[16px] p-[26px] transition-transform hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(28,24,40,0.07)] relative overflow-hidden ${idx === 0 ? 'md:col-span-7' : idx === 1 ? 'md:col-span-5' : 'md:col-span-4'}`}>
                  <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--mg)] mb-[12px] block">{eb.tag}</span>
                  <h3 className="text-[15px] font-extrabold text-[var(--dark)] mb-[8px] tracking-[-0.3px]">{eb.title}</h3>
                  <p className="text-[13px] leading-[1.65] text-[var(--muted)]">{eb.p}</p>
                  {(idx === 0 || idx === 1) && (
                    <div className="absolute bottom-[16px] right-[16px] w-[36px] h-[36px] rounded-[8px] bg-gradient-to-br from-[rgba(232,65,122,0.08)] to-[rgba(245,166,35,0.06)]" />
                  )}
                </div>
              ))}
            </div>
          </PageWrapper>
        </section>

        {/* RESULT */}
        <section id="result" className="bg-[var(--dark)] py-[70px] lg:py-[110px] relative overflow-hidden">
          <div className="absolute text-[clamp(70px,13vw,160px)] font-extrabold text-[rgba(247,246,242,0.025)] italic leading-none pointer-events-none -bottom-[10px] -right-[10px] tracking-[-4px] select-none z-0">
            {t('Result.watermark')}
          </div>
          <PageWrapper className="relative z-10">
            <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
              <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
              {t('Result.eyebrow')}
            </div>
            <h2 className="text-[clamp(30px,3.8vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[14px]">
              {t.rich('Result.title', { br: () => <br />, grad: (chunks) => <GradientText>{chunks}</GradientText> })}
            </h2>
            <p className="text-[16px] leading-[1.75] text-[var(--muted-l)] max-w-[540px] mb-[52px]">
              {t('Result.intro')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mb-[14px]">
              {t.raw('Result.big').map((rb: any, idx: number) => (
                <div key={idx} className={`${rb.featured ? 'grad-bg border-none md:row-span-2' : 'bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)] transition-colors hover:border-[rgba(232,65,122,0.3)]'} rounded-[20px] p-[40px]`}>
                  <span className={`text-[clamp(56px,8vw,88px)] font-extrabold tracking-[-4px] leading-none block mb-[8px] ${rb.featured ? 'text-white' : 'grad-text'}`}>{rb.num}</span>
                  <div className={`text-[15px] font-bold mb-[6px] ${rb.featured ? 'text-white' : 'text-[var(--cream)]'}`}>{rb.label}</div>
                  <div className={`text-[13px] leading-[1.6] ${rb.featured ? 'text-[rgba(255,255,255,0.65)]' : 'text-[rgba(247,246,242,0.5)]'}`}>{rb.sub}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[14px]">
              {t.raw('Result.small').map((rs: any, idx: number) => (
                <div key={idx} className="bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)] rounded-[16px] p-[24px] text-center">
                  {rs.num === 'icon-down' ? (
                    <svg className="w-[40px] h-[40px] mx-auto mb-[6px] text-[var(--mg)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  ) : rs.num === 'icon-up' ? (
                    <svg className="w-[40px] h-[40px] mx-auto mb-[6px] text-[var(--mg)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ) : (
                    <span className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-[-2px] leading-none block mb-[6px] grad-text">{rs.num}</span>
                  )}
                  <span className="text-[11px] font-semibold text-[rgba(247,246,242,0.4)] tracking-[0.06em] uppercase">{rs.label}</span>
                </div>
              ))}
            </div>
          </PageWrapper>
        </section>

        {/* QUOTE */}
        <section id="quote" className="bg-[var(--cream)] py-[70px] lg:py-[110px]">
          <PageWrapper>
            <div className="bg-[var(--dark)] rounded-[24px] p-[56px] relative overflow-hidden text-center">
              <div className="absolute inset-0 grad-bg opacity-5" />
              <span className="text-[80px] font-extrabold leading-[0.6] text-[var(--mg)] opacity-30 block mb-[16px] relative z-[1]">"</span>
              <div className="text-[clamp(18px,2.8vw,26px)] font-bold text-[var(--cream)] leading-[1.4] tracking-[-0.5px] max-w-[700px] mx-auto relative z-[1]">
                {t.rich('Quote.text', {
                  span: (chunks) => <span className="grad-text">{chunks}</span>
                })}
              </div>
              <div className="mt-[28px] text-[13px] text-[rgba(247,246,242,0.35)] relative z-[1]">
                {t.rich('Quote.source', {
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
              </div>
            </div>
          </PageWrapper>
        </section>

        {/* LEARNINGS */}
        <section id="learn" className="bg-[var(--cream)] border-t-[0.5px] border-[rgba(28,24,40,0.07)] py-[70px] lg:py-[110px]">
          <PageWrapper>
            <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
              <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
              {t('Learn.eyebrow')}
            </div>
            <h2 className="text-[clamp(30px,3.8vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[52px]">
              {t.rich('Learn.title', { br: () => <br />, grad: (chunks) => <GradientText>{chunks}</GradientText> })}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[14px]">
              {t.raw('Learn.items').map((item: any, idx: number) => (
                <div key={idx} className="bg-white border-[0.5px] border-[rgba(28,24,40,0.08)] rounded-[18px] p-[28px] transition-transform hover:-translate-y-[3px]">
                  <span className="text-[36px] font-extrabold tracking-[-2px] leading-none block mb-[14px] grad-text">{item.num}</span>
                  <h3 className="text-[15px] font-extrabold text-[var(--dark)] mb-[8px] tracking-[-0.3px]">{item.title}</h3>
                  <p className="text-[13px] leading-[1.65] text-[var(--muted)]">{item.p}</p>
                </div>
              ))}
            </div>
          </PageWrapper>
        </section>

        {/* NEXT CASE */}
        <section id="next" className="bg-[var(--cream)] py-[70px] lg:py-[110px]">
          <PageWrapper>
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[48px] text-center">
              {t('Next.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mb-[52px]">
              {t.raw('Next.cases').map((nc: any, idx: number) => (
                <Link key={idx} href={nc.href} className="bg-white border-[0.5px] border-[rgba(28,24,40,0.08)] rounded-[18px] overflow-hidden no-underline transition-all hover:-translate-y-[3px] hover:shadow-[0_14px_36px_rgba(28,24,40,0.07)] block group">
                  <div className={`aspect-[16/7] relative overflow-hidden flex items-center justify-center ${nc.type === 'b' ? 'bg-gradient-to-br from-[#2a1f35] to-[#3d2a4a]' : 'bg-gradient-to-br from-[#1a2a35] to-[#2a3d4a]'}`}>
                    <div className="absolute inset-0 grad-bg opacity-10" />
                    <span className="text-[22px] font-extrabold text-[rgba(247,246,242,0.4)] relative z-[1]" dangerouslySetInnerHTML={{ __html: nc.name }} />
                  </div>
                  <div className="p-[20px_24px]">
                    <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--mg)] mb-[5px]">{nc.tag}</div>
                    <div className="text-[16px] font-extrabold text-[var(--dark)] mb-[4px]">{nc.title}</div>
                    <div className="text-[13px] text-[var(--muted)]" dangerouslySetInnerHTML={{ __html: nc.result }} />
                  </div>
                </Link>
              ))}
            </div>

          </PageWrapper>
        </section>

        {/* CTA FINAL */}
        <div className="bg-[var(--cream)] pb-[70px] lg:pb-[110px]">
          <PageWrapper>
            <div className="bg-[var(--dark)] rounded-[24px] p-[36px] sm:p-[52px] text-center relative overflow-hidden shadow-[0_24px_60px_rgba(28,24,40,0.12)]">
              <div className="absolute inset-0 grad-bg opacity-[0.04]" />
              <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[12px] relative z-[1]">
                {t.rich('Cta.title', { br: () => <br />, grad: (chunks) => <GradientText>{chunks}</GradientText> })}
              </h2>
              <p className="text-[16px] text-[var(--muted-l)] max-w-[440px] mx-auto mb-[32px] leading-[1.7] relative z-[1]">
                {t('Cta.p')}
              </p>
              <Link href="/#ctaf" className="inline-block grad-bg text-white border-none p-[16px_36px] rounded-[12px] font-extrabold text-[16px] leading-none transition-all hover:-translate-y-[2px] hover:opacity-90 tracking-[-0.3px] relative z-[1]">
                {t('Cta.btn')}
              </Link>
              <p className="text-[12px] text-[rgba(247,246,242,0.28)] mt-[14px] relative z-[1]">
                {t('Cta.dis')}
              </p>
            </div>
          </PageWrapper>
        </div>

      </main>

      <Footer 
        variant="full"
        brandName={tLayout('Footer.brandDesc').split('.')[0]}
        brandDesc={tLayout('Footer.brandDesc')}
        copyrightText={tLayout('Footer.copyright')}
        langText={tLayout('Footer.lang')}
        columns={[
          { title: tLayout('Nav.cases'), links: [
            { label: 'Supertramp Hostels', href: '/case-studies/supertramp' },
            { label: 'sobremi.online', href: '/case-studies/sobremi' }
          ]},
          { title: tLayout('Footer.services'), links: [
            { label: tLayout('Footer.growthMachine'), href: '/services#growth' },
            { label: tLayout('Footer.freeCourse'), href: '/email-course' },
            { label: tLayout('Footer.freeAudit'), href: '/auditoria-web-gratuita' },
            { label: tLayout('Footer.contact'), href: '/#ctaf' }
          ]}
        ]}
      />
    </>
  );
}
