import { getTranslations } from 'next-intl/server';
import { useTranslations, useLocale } from 'next-intl';
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

// UI
import GradientText from '@/components/ui/GradientText';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: "Caso de éxito: sobremi.online — App con Stripe, n8n y Postgres | Vacare",
    description: "Cómo construimos sobremi.online: una plataforma de regalos personalizados con pagos Stripe, automatizaciones n8n, base de datos Postgres y webhooks en producción real.",
    alternates: {
      canonical: `https://vacaredigitalsolutions.com/${locale}/case-studies/sobremi`,
    }
  };
}

export default function SobreMiCasePage() {
  const locale = useLocale();
  const t = useTranslations('CaseSobreMi');
  const tLayout = useTranslations('Layout');

  const BASE = 'https://vacaredigitalsolutions.com';
  const caseUrl = `${BASE}/${locale}/casos-de-exito/sobremi`;

  return (
    <>
      <CaseStudyJsonLd
        url={caseUrl}
        name="Caso de éxito: sobremi.online — App con Stripe, n8n y Postgres"
        description="Plataforma de regalos personalizados con pagos Stripe, automatizaciones n8n, base de datos Postgres y webhooks en producción real."
        clientName="sobremi.online"
        reviewBody="Una plataforma completa con pagos reales, automatizaciones y base de datos, lista para escalar."
        reviewerName="Cliente"
        reviewerTitle="Fundador"
      />
      <BreadcrumbJsonLd items={[
        { name: 'Inicio', item: `${BASE}/${locale}` },
        { name: 'Casos de Éxito', item: `${BASE}/${locale}/casos-de-exito` },
        { name: 'sobremi.online', item: caseUrl },
      ]} />
      <Nav
        transparent={false}
        brandName={tLayout('Nav.brand')}
      />

      <main className="pt-[64px]">
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
              <div className="flex gap-[8px] flex-wrap mb-[20px]">
                {t.raw('Hero.stack').map((tech: string, idx: number) => (
                  <span key={idx} className={`inline-flex items-center gap-[6px] text-[12px] font-bold px-[13px] py-[6px] rounded-[20px] ${idx < 3 ? 'grad-bg text-white' : 'bg-[rgba(28,24,40,0.07)] text-[var(--dark)]'}`}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-0 border-[0.5px] border-[rgba(28,24,40,0.1)] rounded-[14px] overflow-hidden max-w-[440px]">
                {t.raw('Hero.metrics').map((m: any, idx: number, arr: any[]) => (
                  <div key={idx} className={`p-[14px_20px] flex-1 ${idx < arr.length - 1 ? 'border-b-[0.5px] sm:border-b-0 sm:border-r-[0.5px] border-[rgba(28,24,40,0.07)]' : ''}`}>
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
            <div className="relative w-full flex flex-col justify-center h-full max-w-[480px] mx-auto">
              <div className="bg-[rgba(255,255,255,0.04)] border-[0.5px] border-[rgba(255,255,255,0.1)] rounded-[20px] p-[24px] lg:p-[32px] backdrop-blur-[20px] shadow-[0_24px_48px_rgba(0,0,0,0.2)]">
                <h3 className="text-[20px] lg:text-[22px] font-extrabold text-white mb-[8px] lg:mb-[12px] tracking-[-0.5px] leading-[1.2]">
                  Un sistema diseñado para escalar
                </h3>
                <p className="text-[13px] lg:text-[14px] text-[rgba(255,255,255,0.6)] leading-[1.6] mb-[20px] lg:mb-[28px]">
                  Automatizamos todo el proceso de venta para que el equipo solo se enfoque en lo que importa: entregar valor.
                </p>
                <div className="flex flex-col gap-[16px] lg:gap-[20px]">
                  <div className="flex items-start gap-[14px]">
                    <div className="w-[36px] h-[36px] lg:w-[40px] lg:h-[40px] rounded-[10px] bg-[rgba(232,65,122,0.15)] flex items-center justify-center shrink-0 border-[0.5px] border-[rgba(232,65,122,0.3)]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#E8417A]"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                    </div>
                    <div>
                      <div className="text-[14px] lg:text-[15px] font-bold text-white mb-[4px]">Ventas 100% automatizadas</div>
                      <div className="text-[12px] lg:text-[13px] text-[rgba(255,255,255,0.5)] leading-[1.5]">Cobros online integrados con Stripe sin ninguna intervención humana.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-[14px]">
                    <div className="w-[36px] h-[36px] lg:w-[40px] lg:h-[40px] rounded-[10px] bg-[rgba(29,158,117,0.15)] flex items-center justify-center shrink-0 border-[0.5px] border-[rgba(29,158,117,0.3)]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#1D9E75]"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <div>
                      <div className="text-[14px] lg:text-[15px] font-bold text-white mb-[4px]">Gestión en tiempo real</div>
                      <div className="text-[12px] lg:text-[13px] text-[rgba(255,255,255,0.5)] leading-[1.5]">Notificaciones automáticas al equipo y base de datos siempre sincronizada.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-[14px]">
                    <div className="w-[36px] h-[36px] lg:w-[40px] lg:h-[40px] rounded-[10px] bg-[rgba(245,166,35,0.15)] flex items-center justify-center shrink-0 border-[0.5px] border-[rgba(245,166,35,0.3)]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#F5A623]"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                    </div>
                    <div>
                      <div className="text-[14px] lg:text-[15px] font-bold text-white mb-[4px]">Experiencia de usuario fluida</div>
                      <div className="text-[12px] lg:text-[13px] text-[rgba(255,255,255,0.5)] leading-[1.5]">Emails transaccionales y páginas de confirmación dinámicas al instante.</div>
                    </div>
                  </div>
                </div>
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
                <p className="text-[15px] leading-[1.75] text-[var(--muted)] mb-[16px]">{t('Context.p1')}</p>
                <p className="text-[15px] leading-[1.75] text-[var(--muted)] mb-[16px]">{t('Context.p2')}</p>
                <p className="text-[15px] leading-[1.75] text-[var(--muted)] mb-[16px]" dangerouslySetInnerHTML={{ __html: t.raw('Context.p3') }} />
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
                  <div className="flex gap-[6px] flex-wrap relative z-[1]">
                    {t.raw('Context.siteCard.tags').map((tag: string, idx: number) => (
                      <span key={idx} className="bg-[rgba(247,246,242,0.07)] border-[0.5px] border-[rgba(247,246,242,0.12)] rounded-[20px] px-[11px] py-[4px] text-[11px] font-semibold text-[rgba(247,246,242,0.5)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="h-[0.5px] bg-[rgba(247,246,242,0.07)] my-[20px] relative z-[1]" />
                  
                  <div className="flex flex-col gap-[8px] relative z-[1]">
                    {t.raw('Context.siteCard.stats').map((stat: any, idx: number) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-[12px] text-[rgba(247,246,242,0.35)]">{stat.label}</span>
                        <span className="text-[13px] font-bold text-[var(--cream)]">{stat.val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="h-[0.5px] bg-[rgba(247,246,242,0.07)] my-[20px] relative z-[1]" />

                  <div className="flex gap-[8px] flex-wrap relative z-[1]">
                    {t.raw('Context.siteCard.links').map((link: any, idx: number) => (
                      <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" className={`text-[12px] font-bold no-underline border-b pb-[1px] ${idx === 0 ? 'text-[var(--mg)] border-[rgba(232,65,122,0.3)]' : 'text-[rgba(247,246,242,0.4)] border-[rgba(247,246,242,0.1)]'}`}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* DESAFIOS */}
            <div className="bg-white border-[0.5px] border-[rgba(28,24,40,0.08)] rounded-[20px] p-[32px] lg:p-[48px] mt-[60px] shadow-[0_14px_36px_rgba(28,24,40,0.03)]">
              <div className="text-[12px] font-bold text-[var(--mg)] tracking-[0.08em] uppercase mb-[24px]">
                {t('Context.challengesLabel')}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                {t.raw('Context.challenges').map((c: string, idx: number) => (
                  <div key={idx} className="flex gap-[16px] items-start">
                    <div className="w-[32px] h-[32px] rounded-[8px] bg-[rgba(232,65,122,0.1)] flex items-center justify-center text-[12px] font-extrabold text-[var(--mg)] shrink-0 mt-[2px]">
                      {idx + 1}
                    </div>
                    <span className="text-[14px] text-[var(--muted)] leading-[1.6]" dangerouslySetInnerHTML={{ __html: c }} />
                  </div>
                ))}
              </div>
            </div>
          </PageWrapper>
        </section>

        {/* ARQUITECTURA */}
        <section id="arch" className="bg-[var(--dark)] py-[70px] lg:py-[110px] relative overflow-hidden">
          <div className="absolute text-[clamp(70px,13vw,160px)] font-extrabold text-[rgba(247,246,242,0.025)] italic leading-none pointer-events-none -bottom-[10px] -right-[10px] tracking-[-4px] select-none z-0">
            {t('Arch.watermark')}
          </div>
          <PageWrapper className="relative z-10">
            <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
              <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
              {t('Arch.eyebrow')}
            </div>
            <h2 className="text-[clamp(30px,3.8vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[14px]">
              {t.rich('Arch.title', { br: () => <br />, grad: (chunks) => <GradientText>{chunks}</GradientText> })}
            </h2>
            <p className="text-[16px] leading-[1.75] text-[var(--muted-l)] max-w-[560px] mb-[52px]">
              {t('Arch.intro')}
            </p>

            <div className="flex flex-col gap-[16px]">
              {/* Frontend Layer */}
              <div className="flex gap-[12px] items-center flex-wrap">
                <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-[rgba(247,246,242,0.25)] w-[80px] shrink-0 text-right">Frontend</div>
                <div className="flex gap-[10px] flex-wrap flex-1">
                  <div className="grad-bg border-none rounded-[12px] p-[14px_18px] shrink-0"><div className="text-[13px] font-bold text-white mb-[3px]">Next.js 14</div><div className="text-[11px] text-[rgba(255,255,255,0.5)]">App Router · SSR · RSC</div></div>
                  <div className="bg-[rgba(247,246,242,0.06)] border-[0.5px] border-[rgba(247,246,242,0.1)] rounded-[12px] p-[14px_18px] shrink-0"><div className="text-[13px] font-bold text-[var(--cream)] mb-[3px]">sobremi.online/crear</div><div className="text-[11px] text-[rgba(255,255,255,0.5)]">Formulario de pedido</div></div>
                  <div className="bg-[rgba(247,246,242,0.06)] border-[0.5px] border-[rgba(247,246,242,0.1)] rounded-[12px] p-[14px_18px] shrink-0"><div className="text-[13px] font-bold text-[var(--cream)] mb-[3px]">/regalos/:id</div><div className="text-[11px] text-[rgba(255,255,255,0.5)]">Página pública del regalo</div></div>
                  <div className="bg-[rgba(247,246,242,0.06)] border-[0.5px] border-[rgba(247,246,242,0.1)] rounded-[12px] p-[14px_18px] shrink-0"><div className="text-[13px] font-bold text-[var(--cream)] mb-[3px]">/productos</div><div className="text-[11px] text-[rgba(255,255,255,0.5)]">Catálogo dinámico</div></div>
                </div>
              </div>
              <div className="w-full h-[0.5px] bg-gradient-to-r from-[rgba(232,65,122,0.2)] to-[rgba(245,166,35,0.2)] my-[4px]" />
              
              {/* Backend Layer */}
              <div className="flex gap-[12px] items-center flex-wrap">
                <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-[rgba(247,246,242,0.25)] w-[80px] shrink-0 text-right">Backend</div>
                <div className="flex gap-[10px] flex-wrap flex-1">
                  <div className="grad-bg border-none rounded-[12px] p-[14px_18px] shrink-0"><div className="text-[13px] font-bold text-white mb-[3px]">API Routes</div><div className="text-[11px] text-[rgba(255,255,255,0.5)]">Next.js serverless</div></div>
                  <div className="bg-[rgba(232,65,122,0.15)] border-[0.5px] border-[rgba(232,65,122,0.3)] rounded-[12px] p-[14px_18px] shrink-0"><div className="text-[13px] font-bold text-[var(--cream)] mb-[3px]">Stripe SDK</div><div className="text-[11px] text-[rgba(255,255,255,0.5)]">Checkout + webhooks</div></div>
                  <div className="bg-[rgba(247,246,242,0.06)] border-[0.5px] border-[rgba(247,246,242,0.1)] rounded-[12px] p-[14px_18px] shrink-0"><div className="text-[13px] font-bold text-[var(--cream)] mb-[3px]">Postgres</div><div className="text-[11px] text-[rgba(255,255,255,0.5)]">VPS propio · Supabase client</div></div>
                  <div className="text-[18px] text-[rgba(247,246,242,0.2)] shrink-0 self-center">→</div>
                  <div className="bg-[rgba(247,246,242,0.06)] border-[0.5px] border-[rgba(247,246,242,0.1)] rounded-[12px] p-[14px_18px] shrink-0"><div className="text-[13px] font-bold text-[var(--cream)] mb-[3px]">Tablas: pedidos</div><div className="text-[11px] text-[rgba(255,255,255,0.5)]">id · estado · método · timestamp</div></div>
                </div>
              </div>
              <div className="w-full h-[0.5px] bg-gradient-to-r from-[rgba(232,65,122,0.2)] to-[rgba(245,166,35,0.2)] my-[4px]" />
              
              {/* Automation Layer */}
              <div className="flex gap-[12px] items-center flex-wrap">
                <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-[rgba(247,246,242,0.25)] w-[80px] shrink-0 text-right">Automation</div>
                <div className="flex gap-[10px] flex-wrap flex-1">
                  <div className="grad-bg border-none rounded-[12px] p-[14px_18px] shrink-0"><div className="text-[13px] font-bold text-white mb-[3px]">n8n 2.0</div><div className="text-[11px] text-[rgba(255,255,255,0.5)]">Dockerizado en VPS</div></div>
                  <div className="bg-[rgba(29,158,117,0.15)] border-[0.5px] border-[rgba(29,158,117,0.3)] rounded-[12px] p-[14px_18px] shrink-0"><div className="text-[13px] font-bold text-[var(--cream)] mb-[3px]">Webhook Stripe</div><div className="text-[11px] text-[rgba(255,255,255,0.5)]">payment_intent.succeeded</div></div>
                  <div className="bg-[rgba(29,158,117,0.15)] border-[0.5px] border-[rgba(29,158,117,0.3)] rounded-[12px] p-[14px_18px] shrink-0"><div className="text-[13px] font-bold text-[var(--cream)] mb-[3px]">Email SMTP</div><div className="text-[11px] text-[rgba(255,255,255,0.5)]">Confirmación al comprador</div></div>
                  <div className="bg-[rgba(29,158,117,0.15)] border-[0.5px] border-[rgba(29,158,117,0.3)] rounded-[12px] p-[14px_18px] shrink-0"><div className="text-[13px] font-bold text-[var(--cream)] mb-[3px]">Gmail API</div><div className="text-[11px] text-[rgba(255,255,255,0.5)]">Aviso interno al equipo</div></div>
                </div>
              </div>
              <div className="w-full h-[0.5px] bg-gradient-to-r from-[rgba(232,65,122,0.2)] to-[rgba(245,166,35,0.2)] my-[4px]" />
              
              {/* Deploy Layer */}
              <div className="flex gap-[12px] items-center flex-wrap">
                <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-[rgba(247,246,242,0.25)] w-[80px] shrink-0 text-right">Deploy</div>
                <div className="flex gap-[10px] flex-wrap flex-1">
                  <div className="grad-bg border-none rounded-[12px] p-[14px_18px] shrink-0"><div className="text-[13px] font-bold text-white mb-[3px]">Cloudflare Pages</div><div className="text-[11px] text-[rgba(255,255,255,0.5)]">CDN global · sin costo hosting</div></div>
                  <div className="bg-[rgba(247,246,242,0.06)] border-[0.5px] border-[rgba(247,246,242,0.1)] rounded-[12px] p-[14px_18px] shrink-0"><div className="text-[13px] font-bold text-[var(--cream)] mb-[3px]">VPS propio</div><div className="text-[11px] text-[rgba(255,255,255,0.5)]">n8n + Postgres + SMTP</div></div>
                  <div className="bg-[rgba(247,246,242,0.06)] border-[0.5px] border-[rgba(247,246,242,0.1)] rounded-[12px] p-[14px_18px] shrink-0"><div className="text-[13px] font-bold text-[var(--cream)] mb-[3px]">Dominio</div><div className="text-[11px] text-[rgba(255,255,255,0.5)]">sobremi.online · DNS Cloudflare</div></div>
                </div>
              </div>

            </div>
          </PageWrapper>
        </section>

        {/* FLUJOS N8N */}
        <section id="flows" className="bg-[var(--cream)] py-[70px] lg:py-[110px] relative overflow-hidden">
          <div className="absolute text-[clamp(70px,13vw,160px)] font-extrabold text-[rgba(28,24,40,0.025)] italic leading-none pointer-events-none -bottom-[10px] -right-[10px] tracking-[-4px] select-none z-0">
            {t('Flows.watermark')}
          </div>
          <PageWrapper className="relative z-10">
            <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
              <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
              {t('Flows.eyebrow')}
            </div>
            <h2 className="text-[clamp(30px,3.8vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[14px]">
              {t.rich('Flows.title', { br: () => <br />, grad: (chunks) => <GradientText>{chunks}</GradientText> })}
            </h2>
            <p className="text-[16px] leading-[1.75] text-[var(--muted)] max-w-[560px] mb-[52px]">
              {t('Flows.intro')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
              {t.raw('Flows.items').map((flow: any, idx: number) => (
                <div key={idx} className={`bg-white border-[0.5px] border-[rgba(28,24,40,0.08)] rounded-[18px] p-[28px] transition-transform hover:-translate-y-[3px] hover:shadow-[0_14px_36px_rgba(28,24,40,0.07)] flex flex-col ${idx === 0 ? 'md:col-span-2' : ''}`}>
                  <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--mg)] mb-[12px] flex items-center gap-[6px]">
                    <i className="w-[12px] h-[1px] bg-[var(--mg)] block" />
                    {flow.num}
                  </div>
                  <h3 className="text-[16px] font-extrabold text-[var(--dark)] mb-[10px] tracking-[-0.3px]">{flow.title}</h3>
                  <p className="text-[13px] leading-[1.65] text-[var(--muted)] mb-[16px]">{flow.p}</p>
                  
                  {/* Hardcoded mini flows matching the design for each index */}
                  <div className="flex items-center gap-[4px] flex-wrap mt-auto">
                    {idx === 0 && (
                      <>
                        <div className="text-[11px] font-semibold p-[5px_10px] rounded-[7px] bg-[rgba(232,65,122,0.1)] text-[var(--mg)] whitespace-nowrap">Formulario</div><div className="text-[10px] text-[rgba(28,24,40,0.25)] shrink-0">→</div>
                        <div className="text-[11px] font-semibold p-[5px_10px] rounded-[7px] bg-[rgba(28,24,40,0.05)] text-[var(--dark)] whitespace-nowrap">API Route</div><div className="text-[10px] text-[rgba(28,24,40,0.25)] shrink-0">→</div>
                        <div className="text-[11px] font-semibold p-[5px_10px] rounded-[7px] bg-[rgba(28,24,40,0.05)] text-[var(--dark)] whitespace-nowrap">Stripe SDK</div><div className="text-[10px] text-[rgba(28,24,40,0.25)] shrink-0">→</div>
                        <div className="text-[11px] font-semibold p-[5px_10px] rounded-[7px] bg-[var(--dark)] text-[var(--cream)] whitespace-nowrap">Webhook</div><div className="text-[10px] text-[rgba(28,24,40,0.25)] shrink-0">→</div>
                        <div className="text-[11px] font-semibold p-[5px_10px] rounded-[7px] bg-[rgba(28,24,40,0.05)] text-[var(--dark)] whitespace-nowrap">Postgres</div><div className="text-[10px] text-[rgba(28,24,40,0.25)] shrink-0">→</div>
                        <div className="text-[11px] font-semibold p-[5px_10px] rounded-[7px] bg-[var(--dark)] text-[var(--cream)] whitespace-nowrap">n8n</div><div className="text-[10px] text-[rgba(28,24,40,0.25)] shrink-0">→</div>
                        <div className="text-[11px] font-semibold p-[5px_10px] rounded-[7px] bg-[rgba(29,158,117,0.1)] text-[#0f6e56] whitespace-nowrap">Email</div>
                      </>
                    )}
                    {idx === 1 && (
                      <>
                        <div className="text-[11px] font-semibold p-[5px_10px] rounded-[7px] bg-[rgba(232,65,122,0.1)] text-[var(--mg)] whitespace-nowrap">Formulario</div><div className="text-[10px] text-[rgba(28,24,40,0.25)] shrink-0">→</div>
                        <div className="text-[11px] font-semibold p-[5px_10px] rounded-[7px] bg-[var(--dark)] text-[var(--cream)] whitespace-nowrap">n8n</div><div className="text-[10px] text-[rgba(28,24,40,0.25)] shrink-0">→</div>
                        <div className="text-[11px] font-semibold p-[5px_10px] rounded-[7px] bg-[rgba(29,158,117,0.1)] text-[#0f6e56] whitespace-nowrap">Email "en revisión"</div><div className="text-[10px] text-[rgba(28,24,40,0.25)] shrink-0">→</div>
                        <div className="text-[11px] font-semibold p-[5px_10px] rounded-[7px] bg-[rgba(28,24,40,0.05)] text-[var(--dark)] whitespace-nowrap">Confirmación manual</div><div className="text-[10px] text-[rgba(28,24,40,0.25)] shrink-0">→</div>
                        <div className="text-[11px] font-semibold p-[5px_10px] rounded-[7px] bg-[rgba(29,158,117,0.1)] text-[#0f6e56] whitespace-nowrap">Email final</div>
                      </>
                    )}
                    {idx === 2 && (
                      <>
                        <div className="text-[11px] font-semibold p-[5px_10px] rounded-[7px] bg-[var(--dark)] text-[var(--cream)] whitespace-nowrap">n8n recibe trigger</div><div className="text-[10px] text-[rgba(28,24,40,0.25)] shrink-0">→</div>
                        <div className="text-[11px] font-semibold p-[5px_10px] rounded-[7px] bg-[rgba(28,24,40,0.05)] text-[var(--dark)] whitespace-nowrap">Lee Postgres</div><div className="text-[10px] text-[rgba(28,24,40,0.25)] shrink-0">→</div>
                        <div className="text-[11px] font-semibold p-[5px_10px] rounded-[7px] bg-[rgba(28,24,40,0.05)] text-[var(--dark)] whitespace-nowrap">Genera email HTML</div><div className="text-[10px] text-[rgba(28,24,40,0.25)] shrink-0">→</div>
                        <div className="text-[11px] font-semibold p-[5px_10px] rounded-[7px] bg-[rgba(29,158,117,0.1)] text-[#0f6e56] whitespace-nowrap">SMTP → comprador</div>
                      </>
                    )}
                    {idx === 3 && (
                      <>
                        <div className="text-[11px] font-semibold p-[5px_10px] rounded-[7px] bg-[var(--dark)] text-[var(--cream)] whitespace-nowrap">n8n</div><div className="text-[10px] text-[rgba(28,24,40,0.25)] shrink-0">→</div>
                        <div className="text-[11px] font-semibold p-[5px_10px] rounded-[7px] bg-[rgba(28,24,40,0.05)] text-[var(--dark)] whitespace-nowrap">Construye resumen</div><div className="text-[10px] text-[rgba(28,24,40,0.25)] shrink-0">→</div>
                        <div className="text-[11px] font-semibold p-[5px_10px] rounded-[7px] bg-[rgba(29,158,117,0.1)] text-[#0f6e56] whitespace-nowrap">Gmail → equipo interno</div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </PageWrapper>
        </section>

        {/* TECH DEEP DIVE */}
        <section id="tech" className="bg-[var(--dark)] py-[70px] lg:py-[110px] relative overflow-hidden">
          <div className="absolute text-[clamp(70px,13vw,160px)] font-extrabold text-[rgba(247,246,242,0.025)] italic leading-none pointer-events-none -bottom-[10px] -right-[10px] tracking-[-4px] select-none z-0">
            {t('Tech.watermark')}
          </div>
          <PageWrapper className="relative z-10">
            <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
              <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
              {t('Tech.eyebrow')}
            </div>
            <h2 className="text-[clamp(30px,3.8vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[14px]">
              {t.rich('Tech.title', { br: () => <br />, grad: (chunks) => <GradientText>{chunks}</GradientText> })}
            </h2>
            <p className="text-[16px] leading-[1.75] text-[var(--muted-l)] max-w-[540px] mb-[52px]">
              {t('Tech.intro')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-[12px]">
              <div className="bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)] rounded-[16px] p-[26px] transition-colors hover:bg-[rgba(247,246,242,0.07)] hover:border-[rgba(232,65,122,0.3)] md:col-span-5">
                <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--mg)] mb-[12px] block">Base de datos</span>
                <h3 className="text-[15px] font-extrabold text-[var(--cream)] mb-[8px] tracking-[-0.3px]">Postgres en VPS propio</h3>
                <p className="text-[13px] leading-[1.65] text-[var(--muted-l)]">Los pedidos se registran en una tabla con id único, nombre, producto, método de pago, monto, estado (pendiente / confirmado / entregado) y timestamps. Cada webhook de Stripe hace un UPDATE automático del estado.</p>
                <div className="bg-[rgba(14,14,18,0.8)] border-[0.5px] border-[rgba(247,246,242,0.1)] rounded-[10px] p-[16px] mt-[14px] font-mono text-[12px] leading-[1.7] text-[rgba(247,246,242,0.6)] overflow-x-auto whitespace-pre">
<span className="text-[rgba(247,246,242,0.25)]">-- tabla pedidos</span>
{'\n'}<span className="text-[#E8417A]">CREATE TABLE</span> pedidos (
{'\n'}  id <span className="text-[#F5A623]">UUID</span> <span className="text-[#E8417A]">DEFAULT</span> gen_random_uuid(),
{'\n'}  nombre <span className="text-[#F5A623]">TEXT</span> <span className="text-[#E8417A]">NOT NULL</span>,
{'\n'}  producto <span className="text-[#F5A623]">TEXT</span>,
{'\n'}  monto <span className="text-[#F5A623]">INTEGER</span>,
{'\n'}  metodo <span className="text-[#F5A623]">TEXT</span>,
{'\n'}  estado <span className="text-[#F5A623]">TEXT</span> <span className="text-[#E8417A]">DEFAULT</span> <span className="text-[#b8f5d4]">'pendiente'</span>,
{'\n'}  stripe_id <span className="text-[#F5A623]">TEXT</span>,
{'\n'}  created_at <span className="text-[#F5A623]">TIMESTAMPTZ</span> <span className="text-[#E8417A]">DEFAULT</span> now()
{'\n'});
                </div>
              </div>

              <div className="bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)] rounded-[16px] p-[26px] transition-colors hover:bg-[rgba(247,246,242,0.07)] hover:border-[rgba(232,65,122,0.3)] md:col-span-7">
                <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--mg)] mb-[12px] block">Stripe + Webhooks</span>
                <h3 className="text-[15px] font-extrabold text-[var(--cream)] mb-[8px] tracking-[-0.3px]">Pago dinámico con confirmación automática</h3>
                <p className="text-[13px] leading-[1.65] text-[var(--muted-l)]">El backend crea un PaymentIntent de Stripe con los datos del pedido. Una vez el pago se confirma, Stripe llama al endpoint /api/stripe/webhook con el evento payment_intent.succeeded. Ese endpoint actualiza Postgres y dispara el webhook de n8n para que arranquen los flujos de email.</p>
                <div className="bg-[rgba(14,14,18,0.8)] border-[0.5px] border-[rgba(247,246,242,0.1)] rounded-[10px] p-[16px] mt-[14px] font-mono text-[12px] leading-[1.7] text-[rgba(247,246,242,0.6)] overflow-x-auto whitespace-pre">
<span className="text-[rgba(247,246,242,0.25)]">// api/stripe/webhook.ts</span>
{'\n'}<span className="text-[#E8417A]">const</span> event = stripe.<span className="text-[#F5A623]">webhooks.constructEvent</span>(
{'\n'}  body, sig, <span className="text-[#b8f5d4]">process.env.STRIPE_WEBHOOK_SECRET</span>
{'\n'});
{'\n'}<span className="text-[#E8417A]">if</span> (event.type === <span className="text-[#b8f5d4]">'payment_intent.succeeded'</span>) {'{'}
{'\n'}  <span className="text-[#E8417A]">await</span> <span className="text-[#F5A623]">updatePedido</span>(event.data.object.id);
{'\n'}  <span className="text-[#E8417A]">await</span> <span className="text-[#F5A623]">triggerN8N</span>(pedidoData);
{'\n'}{'}'}
                </div>
              </div>

              <div className="bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)] rounded-[16px] p-[26px] transition-colors hover:bg-[rgba(247,246,242,0.07)] hover:border-[rgba(232,65,122,0.3)] md:col-span-4">
                <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--mg)] mb-[12px] block">n8n</span>
                <h3 className="text-[15px] font-extrabold text-[var(--cream)] mb-[8px] tracking-[-0.3px]">Orquestador central</h3>
                <p className="text-[13px] leading-[1.65] text-[var(--muted-l)]">n8n 2.0 corre en Docker en el mismo VPS que Postgres. Recibe el webhook del backend, evalúa el método de pago con un nodo IF, y bifurca hacia el flujo de Stripe o el de transferencia. Cada rama genera el email y lo envía por SMTP.</p>
              </div>

              <div className="bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)] rounded-[16px] p-[26px] transition-colors hover:bg-[rgba(247,246,242,0.07)] hover:border-[rgba(232,65,122,0.3)] md:col-span-4">
                <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--mg)] mb-[12px] block">Páginas dinámicas</span>
                <h3 className="text-[15px] font-extrabold text-[var(--cream)] mb-[8px] tracking-[-0.3px]">/regalos/:id con SSR</h3>
                <p className="text-[13px] leading-[1.65] text-[var(--muted-l)]">Cada regalo tiene su propia URL pública. Next.js hace una query a Postgres en el servidor y renderiza la página con los datos del pedido. El comprador puede compartir ese link con el destinatario del regalo.</p>
              </div>

              <div className="bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)] rounded-[16px] p-[26px] transition-colors hover:bg-[rgba(247,246,242,0.07)] hover:border-[rgba(232,65,122,0.3)] md:col-span-4">
                <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--mg)] mb-[12px] block">Frontend</span>
                <h3 className="text-[15px] font-extrabold text-[var(--cream)] mb-[8px] tracking-[-0.3px]">Next.js App Router</h3>
                <p className="text-[13px] leading-[1.65] text-[var(--muted-l)]">La plataforma usa React Server Components donde puede y Client Components donde necesita interactividad (formulario de pedido, selector de productos). Deploy en Cloudflare Pages — cero costo de hosting, Edge network global.</p>
              </div>
            </div>
          </PageWrapper>
        </section>

        {/* RESULT */}
        <section id="result" className="bg-[var(--cream)] py-[70px] lg:py-[110px]">
          <PageWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] items-center">
              <div>
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                  <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
                  {t('Result.eyebrow')}
                </div>
                <h2 className="text-[clamp(30px,3.8vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[16px]">
                  {t.rich('Result.title', { br: () => <br />, grad: (chunks) => <GradientText>{chunks}</GradientText> })}
                </h2>
                <p className="text-[15px] leading-[1.75] text-[var(--muted)] mb-[16px]">{t('Result.p1')}</p>
                <p className="text-[15px] leading-[1.75] text-[var(--muted)] mb-[16px]">{t('Result.p2')}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px] mt-[24px]">
                  {t.raw('Result.metrics').map((m: any, idx: number) => (
                    <div key={idx} className="bg-white border-[0.5px] border-[rgba(28,24,40,0.09)] rounded-[14px] p-[20px]">
                      <span className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-2px] leading-none block mb-[6px] grad-text">{m.num}</span>
                      <span className="text-[11px] font-semibold text-[var(--muted)] tracking-[0.05em] uppercase">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="bg-[var(--dark)] rounded-[20px] overflow-hidden shadow-[0_32px_80px_rgba(28,24,40,0.15)]">
                  <div className="bg-[rgba(247,246,242,0.04)] p-[14px_20px] flex items-center gap-[8px] border-b-[0.5px] border-[rgba(247,246,242,0.06)]">
                    <div className="flex gap-[5px]">
                      <div className="w-[9px] h-[9px] rounded-full bg-[#ff5f57]" />
                      <div className="w-[9px] h-[9px] rounded-full bg-[#febc2e]" />
                      <div className="w-[9px] h-[9px] rounded-full bg-[#28c840]" />
                    </div>
                    <span className="text-[12px] text-[rgba(247,246,242,0.3)] ml-[8px] font-medium">{t('Result.visual.title')}</span>
                  </div>
                  <div className="p-[20px]">
                    {t.raw('Result.visual.rows').map((row: any, idx: number) => (
                      <div key={idx} className="flex items-center justify-between p-[11px_14px] bg-[rgba(247,246,242,0.04)] rounded-[9px] mb-[7px] last:mb-0">
                        <span className="text-[12px] font-semibold text-[rgba(247,246,242,0.6)]">{row.label}</span>
                        <span className={`text-[11px] font-bold p-[3px_9px] rounded-[20px] ${row.type === 's-live' ? 'bg-[rgba(232,65,122,0.2)] text-[#E8417A]' : row.type === 's-ok' ? 'bg-[rgba(29,158,117,0.2)] text-[#1D9E75]' : 'bg-[rgba(245,166,35,0.15)] text-[#B8760A]'}`}>
                          {row.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </PageWrapper>
        </section>

        {/* LEARNINGS */}
        <section id="learn" className="bg-[var(--dark)] py-[70px] lg:py-[110px] relative overflow-hidden">
          <div className="absolute text-[clamp(70px,13vw,160px)] font-extrabold text-[rgba(247,246,242,0.025)] italic leading-none pointer-events-none -bottom-[10px] -right-[10px] tracking-[-4px] select-none z-0">
            {t('Learn.watermark')}
          </div>
          <PageWrapper className="relative z-10">
            <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
              <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
              {t('Learn.eyebrow')}
            </div>
            <h2 className="text-[clamp(30px,3.8vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[52px]">
              {t.rich('Learn.title', { br: () => <br />, grad: (chunks) => <GradientText>{chunks}</GradientText> })}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px]">
              {t.raw('Learn.items').map((item: any, idx: number) => (
                <div key={idx} className="bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)] rounded-[18px] p-[28px] transition-colors hover:bg-[rgba(247,246,242,0.07)]">
                  <span className="text-[36px] font-extrabold tracking-[-2px] leading-none block mb-[14px] grad-text">{item.num}</span>
                  <h3 className="text-[15px] font-extrabold text-[var(--cream)] mb-[8px] tracking-[-0.3px]">{item.title}</h3>
                  <p className="text-[13px] leading-[1.65] text-[var(--muted-l)]">{item.p}</p>
                </div>
              ))}
            </div>
          </PageWrapper>
        </section>

        {/* NEXT CASE */}
        <section id="next" className="bg-[var(--cream)] border-t-[0.5px] border-[rgba(28,24,40,0.07)] py-[70px] lg:py-[110px]">
          <PageWrapper>
            <h2 className="text-[clamp(28px,3.5vw,44px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[48px] text-center">
              {t('Next.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mb-[52px]">
              {t.raw('Next.cases').map((nc: any, idx: number) => (
                <Link key={idx} href={nc.href} className="bg-white border-[0.5px] border-[rgba(28,24,40,0.08)] rounded-[18px] overflow-hidden no-underline transition-all hover:-translate-y-[3px] hover:shadow-[0_14px_36px_rgba(28,24,40,0.07)] block group">
                  <div className={`aspect-[16/7] relative overflow-hidden flex items-center justify-center ${nc.type === 'alt' ? 'bg-gradient-to-br from-[#1a2a35] to-[#2a3d4a]' : 'bg-gradient-to-br from-[#2a1f35] to-[#3d2a4a]'}`}>
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
            { label: 'sobremi.online', href: '/case-studies/sobremi' },
            { label: 'Supertramp Hostels', href: '/case-studies/supertramp' }
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
