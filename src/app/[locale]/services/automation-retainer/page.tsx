import { getTranslations, setRequestLocale } from 'next-intl/server';
import HomeClient from '@/components/layout/HomeClient';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import PageWrapper from '@/components/layout/PageWrapper';
import CtaFinal from '@/components/sections/CtaFinal';
import GradientText from '@/components/ui/GradientText';
import AnimatedWatermark from '@/components/ui/AnimatedWatermark';
import MotionWrapper from '@/components/ui/MotionWrapper';
import { StaggerContainer, StaggerItem } from '@/components/ui/MotionWrapper';
import OpenMeetingBtn from '@/components/ui/OpenMeetingBtn';
import ServiceJsonLd from '@/components/seo/ServiceJsonLd';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ServicePages.automationRetainer' });
  const isEn = locale === 'en';
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    alternates: {
      canonical: isEn
        ? 'https://vacaredigitalsolutions.com/en/services/automation-retainer'
        : 'https://vacaredigitalsolutions.com/es/servicios/automation-retainer',
    },
    openGraph: {
      title: t('meta.ogTitle'),
      description: t('meta.ogDescription'),
    },
  };
}

// ─── Icons ─────────────────────────────────────────────────────────────────
function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function IconUserPlus() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" />
      <line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" />
    </svg>
  );
}
function IconBarChart2() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}
function IconDollarSign() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}
function IconSettings() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}
function IconClock({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function IconAlertOctagon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
      <line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}
function IconTrendingUp({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  );
}
function IconZap({ className = 'w-5 h-5', stroke = 'currentColor' }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
function IconCheck({ color = '#1D9E75', size = 16 }: { color?: string; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: size, height: size, flexShrink: 0 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// Icon order must match useCases array order in i18n JSON
const USE_CASE_ICONS = [IconMail, IconUserPlus, IconBarChart2, IconDollarSign, IconSettings, IconClock];

// Icon order must match painPoints array order in i18n JSON
const PAIN_POINT_ICONS = [IconClock, IconAlertOctagon, IconTrendingUp];

// Icon order must match hero.panel.stats array order in i18n JSON
const HERO_STAT_ICONS = [
  <IconTrendingUp key="trend" className="w-[20px] h-[20px]" />,
  <IconZap key="zap" className="w-[20px] h-[20px]" stroke="currentColor" />,
];

type UseCaseItem = { category: string; title: string; saved: string; body: string };
type FaqItem = { q: string; a: string };
type PlanItem = { name: string; for: string; hours: string; features: string[]; featured: boolean };
type CompoundItem = { month: string; title: string; body: string };
type N8nItem = { title: string; body: string };
type StatItem = { num: string; label: string };
type TableRowItem = { task: string; hours: string; cost: string };
type PainPointItem = { title: string; body: string };
type NotForYouItem = { text: string; pack: string; href: string };
type CtaCardItem = { tag: string; title: string; desc: string; href: string };

// ─── Page ──────────────────────────────────────────────────────────────────
export default async function AutomationRetainerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tLayout = await getTranslations({ locale, namespace: 'Layout' });
  const t = await getTranslations({ locale, namespace: 'ServicePages.automationRetainer' });

  const BASE = 'https://vacaredigitalsolutions.com';
  const isEn = locale === 'en';
  const svcPath = isEn ? `${BASE}/en/services/automation-retainer` : `${BASE}/es/servicios/automation-retainer`;

  const useCases = (t.raw('useCases') as UseCaseItem[]).map((uc, i) => ({ ...uc, Icon: USE_CASE_ICONS[i] }));
  const faqItems = t.raw('faq') as FaqItem[];
  const heroBullets = t.raw('heroBullets') as string[];
  const plans = t.raw('plans') as PlanItem[];
  const compound = t.raw('compound') as CompoundItem[];
  const n8nReasons = t.raw('n8n') as N8nItem[];
  const forYou = t.raw('forYou') as string[];
  const heroStats = t.raw('hero.panel.stats') as StatItem[];
  const tableRows = t.raw('problemSection.tableRows') as TableRowItem[];
  const painPoints = t.raw('problemSection.painPoints') as PainPointItem[];
  const notForYouItems = t.raw('forYouSection.notForYou') as NotForYouItem[];
  const trustBadges = t.raw('faqSection.trustBadges') as string[];
  const ctaCards = t.raw('ctaFinal.cards') as CtaCardItem[];

  return (
    <>
      <ServiceJsonLd
        url={svcPath}
        name="Automation Retainer"
        description={t('meta.seoDescription')}
        price="500"
      />
      <BreadcrumbJsonLd items={[
        { name: t('breadcrumb.home'), item: `${BASE}/${locale}` },
        { name: t('breadcrumb.services'), item: isEn ? `${BASE}/en/services` : `${BASE}/es/servicios` },
        { name: 'Automation Retainer', item: svcPath },
      ]} />
      <HomeClient>
        <Nav
          transparent={false}
          brandName={tLayout('Nav.brand')}
        />

        <main className="pt-[64px]">

          {/* ══════ HERO ══════ */}
          <section className="min-h-[86vh] flex bg-[var(--dark)] relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(247,246,242,0.04) 1px, transparent 1px)', backgroundSize: '26px 26px' }} />
            <div className="absolute top-0 right-0 w-[560px] h-[560px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(232,65,122,0.08) 0%, transparent 65%)' }} />
            <div className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(240,112,48,0.05) 0%, transparent 65%)' }} />
            <AnimatedWatermark text="AUTOMATION" direction="left" className="bottom-[-20px] left-[-8px] text-[clamp(60px,10vw,140px)] text-[rgba(247,246,242,0.02)] tracking-[-5px] italic" />

            <div className="flex flex-col lg:flex-row w-full">
              {/* Left */}
              <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 lg:px-[52px] py-[72px] relative z-10">
                <MotionWrapper type="fadeUp">
                  <nav className="flex items-center gap-[8px] text-[11px] text-[rgba(247,246,242,0.3)] mb-[28px]">
                    <a href="/" className="hover:text-[rgba(247,246,242,0.6)] transition-colors no-underline">{t('breadcrumb.home')}</a>
                    <span>/</span>
                    <a href={isEn ? '/services' : '/servicios'} className="hover:text-[rgba(247,246,242,0.6)] transition-colors no-underline">{t('breadcrumb.services')}</a>
                    <span>/</span>
                    <span className="text-[var(--mg)] font-semibold">Automation Retainer</span>
                  </nav>

                  <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--mg)] mb-[20px]">
                    <i className="w-[18px] h-[1.5px] bg-[var(--mg)] block" />
                    {t('hero.badge')}
                  </div>

                  <h1 className="text-[clamp(30px,4vw,54px)] font-extrabold leading-[1.07] tracking-[-2px] text-[var(--cream)] mb-[18px]">
                    <span className="block grad-text text-[clamp(22px,2.8vw,36px)] mb-[8px]">Automation Retainer</span>
                    {t('hero.h1Line1')}<br />
                    <GradientText>{t('hero.h1Gradient')}</GradientText>
                  </h1>

                  <p className="text-[16px] leading-[1.75] text-[var(--muted-l)] max-w-[460px] mb-[28px]">
                    {t('hero.description')}
                  </p>

                  <ul className="flex flex-col gap-[10px] mb-[36px] max-w-[440px]">
                    {heroBullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-[10px] text-[14px] text-[var(--cream)]">
                        <span className="w-[20px] h-[20px] rounded-full grad-bg flex items-center justify-center shrink-0 mt-[1px]">
                          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-[10px] h-[10px]"><polyline points="20 6 9 17 4 12" /></svg>
                        </span>
                        <span className="leading-[1.45]">{b}</span>
                      </li>
                    ))}
                  </ul>
                </MotionWrapper>

                <MotionWrapper type="fadeUp" delay={0.15}>
                  <div className="flex flex-wrap gap-[12px] mb-[28px]">
                    <OpenMeetingBtn className="px-[28px] py-[15px] rounded-[10px] grad-bg text-white text-[15px] font-bold leading-none cursor-pointer transition-all hover:-translate-y-[1px] hover:shadow-[0_12px_32px_rgba(232,65,122,0.35)] border-none">
                      {t('hero.ctaPrimary')}
                    </OpenMeetingBtn>
                    <a href="#casos" className="px-[24px] py-[15px] rounded-[10px] border-[1.5px] border-[rgba(247,246,242,0.15)] text-[var(--cream)] text-[15px] font-bold leading-none no-underline inline-flex items-center transition-all hover:border-[rgba(247,246,242,0.38)] hover:-translate-y-[1px]">
                      {t('hero.ctaSecondary')}
                    </a>
                  </div>
                  <p className="text-[12px] text-[rgba(247,246,242,0.3)] font-medium">
                    {t('hero.disclaimer')}
                  </p>
                </MotionWrapper>
              </div>

              {/* Right — gradient panel */}
              <div className="w-full lg:w-[45%] relative overflow-hidden flex items-center" style={{ background: 'linear-gradient(145deg,#E8417A 0%,#F07030 48%,#F5A623 100%)' }}>
                <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")" }} />
                <div className="absolute top-[22px] left-[18px] w-[72px] h-[72px] rounded-full border-[1.5px] border-[rgba(255,255,255,0.18)] pointer-events-none" />
                <div className="absolute top-[46px] left-[42px] w-[34px] h-[34px] rounded-full border-[1px] border-[rgba(255,255,255,0.1)] pointer-events-none" />
                <div className="absolute bottom-[52px] left-[20px] w-[80px] h-[80px] border-[1.5px] border-[rgba(255,255,255,0.12)] rotate-[18deg] pointer-events-none" />
                <div className="absolute top-[12px] right-[16px] w-[48px] h-[48px] border-[1.5px] border-[rgba(255,255,255,0.15)] rotate-45 pointer-events-none" />
                <div className="absolute top-[20%] right-[22px] w-[7px] h-[7px] rounded-full bg-[rgba(255,255,255,0.4)] pointer-events-none" />
                <div className="absolute top-[35%] right-[46px] w-[4px] h-[4px] rounded-full bg-[rgba(255,255,255,0.22)] pointer-events-none" />
                <div className="absolute bottom-[28%] right-[30px] w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.28)] pointer-events-none" />
                <div className="absolute text-[clamp(90px,14vw,180px)] font-extrabold italic text-[rgba(255,255,255,0.07)] leading-[0.9] tracking-[-5px] pointer-events-none bottom-[-10px] right-[-10px]">05</div>

                <div className="absolute inset-0 z-[2] flex flex-col justify-center px-[32px] lg:px-[64px] py-[64px] gap-[24px]">
                  {/* Cost Panel */}
                  <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-[16px] border border-[rgba(255,255,255,0.3)] rounded-[20px] p-[32px] shadow-[0_24px_48px_rgba(0,0,0,0.15)] transform hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-[12px] mb-[20px]">
                      <div className="w-[48px] h-[48px] rounded-full bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.3)] flex items-center justify-center shrink-0">
                        <IconClock className="w-[22px] h-[22px] text-white" />
                      </div>
                      <div>
                        <div className="text-[12px] font-bold text-[rgba(255,255,255,0.7)] uppercase tracking-[0.1em]">
                          {t('hero.panel.costLabel')}
                        </div>
                        <div className="text-[20px] font-extrabold text-white leading-tight">
                          {t('hero.panel.costTitle')}
                        </div>
                      </div>
                    </div>

                    <div className="text-[48px] md:text-[56px] font-black text-[rgba(255,220,100,0.95)] leading-none tracking-[-2px] mb-[12px] drop-shadow-md">
                      {t('hero.panel.costAmount')}<span className="text-[20px] md:text-[24px] font-bold text-[rgba(255,255,255,0.6)] tracking-normal">/{t('hero.panel.costPeriod')}</span>
                    </div>

                    <div className="h-[1px] w-full bg-[rgba(255,255,255,0.2)] my-[16px]" />

                    <p className="text-[15px] font-medium text-[rgba(255,255,255,0.9)] leading-[1.6]">
                      {t('hero.panel.costDesc')}
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-[16px]">
                    {heroStats.map((s, i) => (
                      <div key={i} className="bg-[rgba(0,0,0,0.1)] backdrop-blur-[8px] border border-[rgba(255,255,255,0.15)] rounded-[16px] p-[20px] flex flex-col justify-between hover:bg-[rgba(0,0,0,0.15)] hover:border-[rgba(255,255,255,0.25)] transition-all duration-300">
                        <div className="text-[rgba(255,255,255,0.6)] mb-[16px]">
                          {HERO_STAT_ICONS[i]}
                        </div>
                        <div>
                          <span className="text-[32px] md:text-[36px] font-extrabold text-white tracking-[-1px] leading-[1] block mb-[6px] drop-shadow-sm">{s.num}</span>
                          <span className="text-[13px] md:text-[14px] font-bold text-[rgba(255,255,255,0.75)] leading-[1.3] block">{s.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ══════ EL PROBLEMA ══════ */}
          <section className="bg-[var(--cream)] py-[80px] lg:py-[110px] relative overflow-hidden">
            <AnimatedWatermark text="MANUAL" direction="right" className="-bottom-[10px] -right-[10px] text-[clamp(70px,13vw,160px)] text-[rgba(28,24,40,0.025)] tracking-[-4px] italic" />
            <PageWrapper className="relative z-10">
              <MotionWrapper type="fadeUp">
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                  <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
                  {t('problemSection.label')}
                </div>
                <h2 className="text-[clamp(28px,3.8vw,50px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[14px]">
                  {t('problemSection.h2Part1')}<br />
                  <GradientText>{t('problemSection.h2Gradient')}</GradientText>
                </h2>
                <p className="text-[16px] leading-[1.75] text-[var(--muted)] max-w-[600px] mb-[48px]">
                  {t('problemSection.description')}
                </p>
              </MotionWrapper>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] mb-[44px]">
                {/* Audit table */}
                <MotionWrapper type="fadeLeft">
                  <div className="bg-white border-[0.5px] border-[rgba(28,24,40,0.09)] rounded-[24px] overflow-hidden shadow-[0_8px_40px_rgba(28,24,40,0.06)]">
                    <div className="bg-[rgba(28,24,40,0.04)] px-[24px] py-[14px] border-b border-[rgba(28,24,40,0.07)]">
                      <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--muted)]">{t('problemSection.tableLabel')}</p>
                    </div>
                    <div className="p-[0]">
                      <div className="grid grid-cols-[1fr_auto_auto] text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--muted)] px-[20px] py-[10px] bg-[rgba(28,24,40,0.02)] border-b border-[rgba(28,24,40,0.05)]">
                        <span>{t('problemSection.thTask')}</span>
                        <span className="text-right pr-[16px]">{t('problemSection.thHours')}</span>
                        <span className="text-right">{t('problemSection.thCost')}</span>
                      </div>
                      {tableRows.map((row, i) => (
                        <div key={i} className={`grid grid-cols-[1fr_auto_auto] px-[20px] py-[12px] ${i % 2 === 0 ? 'bg-white' : 'bg-[rgba(28,24,40,0.015)]'} border-b border-[rgba(28,24,40,0.05)]`}>
                          <span className="text-[12px] text-[var(--dark)]">{row.task}</span>
                          <span className="text-[12px] text-[var(--muted)] pr-[16px] text-right">{row.hours}</span>
                          <span className="text-[12px] font-bold text-[var(--mg)] text-right">{row.cost}</span>
                        </div>
                      ))}
                      <div className="grid grid-cols-[1fr_auto_auto] px-[20px] py-[14px] bg-[rgba(232,65,122,0.04)] border-t-[1.5px] border-[rgba(232,65,122,0.15)]">
                        <span className="text-[13px] font-extrabold text-[var(--dark)]">{t('problemSection.tableTotal')}</span>
                        <span className="text-[13px] font-bold text-[var(--dark)] pr-[16px] text-right">{t('problemSection.tableTotalHours')}</span>
                        <span className="text-[15px] font-extrabold text-[var(--mg)] text-right">{t('problemSection.tableTotalCost')}</span>
                      </div>
                    </div>
                  </div>
                </MotionWrapper>

                {/* 3 pain points */}
                <MotionWrapper type="fadeRight" delay={0.1}>
                  <div className="flex flex-col gap-[12px]">
                    {painPoints.map((card, i) => {
                      const CardIcon = PAIN_POINT_ICONS[i];
                      return (
                        <div key={i} className="bg-white border-[0.5px] border-[rgba(28,24,40,0.09)] rounded-[16px] p-[20px] hover:shadow-[0_8px_28px_rgba(28,24,40,0.07)] hover:-translate-y-[1px] transition-all duration-300 group">
                          <div className="flex items-start gap-[12px]">
                            <div className="w-[36px] h-[36px] rounded-[9px] bg-[rgba(232,65,122,0.07)] border-[0.5px] border-[rgba(232,65,122,0.14)] flex items-center justify-center shrink-0 text-[var(--mg)]">
                              <CardIcon className="w-[17px] h-[17px]" />
                            </div>
                            <div>
                              <h3 className="text-[13px] font-extrabold text-[var(--dark)] mb-[5px] leading-[1.3]">{card.title}</h3>
                              <p className="text-[12px] leading-[1.6] text-[var(--muted)]">{card.body}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </MotionWrapper>
              </div>
            </PageWrapper>
          </section>

          {/* ══════ CASOS DE USO ══════ */}
          <section id="casos" className="bg-[var(--dark)] py-[80px] lg:py-[110px] border-t-[0.5px] border-[rgba(247,246,242,0.06)] relative overflow-hidden">
            <AnimatedWatermark text="FLUJOS" direction="left" className="-bottom-[10px] -left-[8px] text-[clamp(70px,13vw,160px)] text-[rgba(247,246,242,0.025)] tracking-[-4px] italic" />
            <PageWrapper className="relative z-10">
              <MotionWrapper type="fadeUp">
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
                  <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
                  {t('useCasesSection.label')}
                </div>
                <h2 className="text-[clamp(28px,3.8vw,48px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[14px]">
                  {t('useCasesSection.h2Part1')}<br /><GradientText>{t('useCasesSection.h2Gradient')}</GradientText>
                </h2>
                <p className="text-[16px] leading-[1.75] text-[var(--muted-l)] max-w-[520px] mb-[48px]">
                  {t('useCasesSection.description')}
                </p>
              </MotionWrapper>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[12px]" staggerDelay={0.06}>
                {useCases.map((card, i) => (
                  <StaggerItem key={i}>
                    <div className="bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)] rounded-[20px] p-[24px] h-full hover:bg-[rgba(247,246,242,0.07)] hover:-translate-y-[2px] transition-all duration-300 group">
                      <div className="flex items-start justify-between mb-[14px]">
                        <div className="w-[40px] h-[40px] rounded-[10px] grad-bg flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(232,65,122,0.2)]">
                          <card.Icon />
                        </div>
                        <div className="text-right">
                          <div className="text-[8px] font-bold uppercase tracking-[0.08em] text-[rgba(247,246,242,0.3)]">{card.category}</div>
                          <div className="text-[10px] font-bold text-[var(--am)]">{card.saved} {t('useCasesSection.savedLabel')}</div>
                        </div>
                      </div>
                      <h3 className="text-[14px] font-extrabold text-[var(--cream)] mb-[8px] tracking-[-0.2px]">{card.title}</h3>
                      <p className="text-[12px] leading-[1.65] text-[var(--muted-l)]">{card.body}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </PageWrapper>
          </section>

          {/* ══════ DOS PLANES ══════ */}
          <section className="bg-[var(--cream)] py-[80px] lg:py-[110px] border-t-[0.5px] border-[rgba(28,24,40,0.07)]">
            <PageWrapper>
              <MotionWrapper type="fadeUp">
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                  <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
                  {t('plansSection.label')}
                </div>
                <h2 className="text-[clamp(28px,3.5vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[14px]">
                  {t('plansSection.h2Part1')}<br /><GradientText>{t('plansSection.h2Gradient')}</GradientText>
                </h2>
                <p className="text-[16px] leading-[1.75] text-[var(--muted)] max-w-[500px] mb-[44px]">
                  {t('plansSection.description')}
                </p>
              </MotionWrapper>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                {plans.map((plan, i) => (
                  <MotionWrapper key={i} type="fadeUp" delay={i * 0.1}>
                    <div className={`rounded-[24px] p-[32px] h-full border-[0.5px] transition-all ${plan.featured ? 'bg-[var(--dark)] border-[rgba(247,246,242,0.12)] shadow-[0_16px_60px_rgba(28,24,40,0.2)]' : 'bg-white border-[rgba(28,24,40,0.09)] shadow-[0_8px_32px_rgba(28,24,40,0.04)]'}`}>
                      {plan.featured && (
                        <div className="inline-flex items-center gap-[5px] text-[9px] font-bold uppercase tracking-[0.1em] text-[var(--am)] bg-[rgba(245,166,35,0.1)] border-[0.5px] border-[rgba(245,166,35,0.25)] rounded-[20px] px-[10px] py-[4px] mb-[14px]">
                          <span className="w-[4px] h-[4px] rounded-full bg-[var(--am)]" /> {t('plansSection.mostPopular')}
                        </div>
                      )}
                      <h3 className={`text-[22px] font-extrabold mb-[4px] tracking-[-0.5px] ${plan.featured ? 'text-[var(--cream)]' : 'text-[var(--dark)]'}`}>{plan.name}</h3>
                      <p className={`text-[12px] mb-[16px] ${plan.featured ? 'text-[var(--muted-l)]' : 'text-[var(--muted)]'}`}>{plan.for}</p>

                      <div className={`inline-flex items-center gap-[6px] rounded-[10px] px-[14px] py-[8px] mb-[22px] border-[0.5px] ${plan.featured ? 'bg-[rgba(245,166,35,0.1)] border-[rgba(245,166,35,0.25)]' : 'bg-[rgba(232,65,122,0.05)] border-[rgba(232,65,122,0.15)]'}`}>
                        <IconZap className="w-[13px] h-[13px]" stroke={plan.featured ? 'var(--am)' : 'var(--mg)'} />
                        <span className={`text-[13px] font-extrabold ${plan.featured ? 'text-[var(--am)]' : 'text-[var(--mg)]'}`}>{plan.hours} {t('plansSection.developmentLabel')}</span>
                      </div>

                      <ul className="flex flex-col gap-[10px]">
                        {plan.features.map((feat, j) => (
                          <li key={j} className={`flex items-start gap-[10px] text-[13px] leading-[1.5] ${plan.featured ? 'text-[var(--cream)]' : 'text-[var(--dark)]'}`}>
                            <IconCheck size={15} color="#1D9E75" />
                            {feat}
                          </li>
                        ))}
                      </ul>

                      <div className={`mt-[24px] pt-[18px] border-t-[0.5px] ${plan.featured ? 'border-[rgba(247,246,242,0.09)]' : 'border-[rgba(28,24,40,0.07)]'}`}>
                        <OpenMeetingBtn className={`w-full py-[13px] rounded-[10px] text-[13px] font-bold leading-none cursor-pointer transition-all hover:-translate-y-[1px] border-none ${plan.featured ? 'grad-bg text-white shadow-[0_6px_20px_rgba(232,65,122,0.25)] hover:shadow-[0_10px_30px_rgba(232,65,122,0.3)]' : 'bg-[rgba(28,24,40,0.06)] text-[var(--dark)] hover:bg-[rgba(28,24,40,0.09)]'}`}>
                          {t('plansSection.ctaStart', { name: plan.name })}
                        </OpenMeetingBtn>
                      </div>
                    </div>
                  </MotionWrapper>
                ))}
              </div>
            </PageWrapper>
          </section>

          {/* ══════ EFECTO COMPUESTO + n8n vs ZAPIER ══════ */}
          <section className="bg-[var(--dark)] py-[80px] lg:py-[110px] border-t-[0.5px] border-[rgba(247,246,242,0.06)] relative overflow-hidden">
            <AnimatedWatermark text="SISTEMA" direction="right" className="-bottom-[10px] -right-[10px] text-[clamp(70px,13vw,160px)] text-[rgba(247,246,242,0.025)] tracking-[-4px] italic" />
            <PageWrapper className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">

                {/* Compound effect */}
                <MotionWrapper type="fadeLeft">
                  <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
                    <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
                    {t('compoundSection.label')}
                  </div>
                  <h2 className="text-[clamp(24px,3vw,38px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[20px]">
                    {t('compoundSection.h2Part1')}<br /><GradientText>{t('compoundSection.h2Gradient')}</GradientText>
                  </h2>
                  <div className="flex flex-col gap-[0]">
                    {compound.map((step, i) => (
                      <div key={i} className="flex gap-[16px] pb-[16px]">
                        <div className="flex flex-col items-center shrink-0 mt-[2px]">
                          <div className="w-[8px] h-[8px] rounded-full grad-bg shrink-0" />
                          {i < compound.length - 1 && <div className="w-[1.5px] flex-1 min-h-[20px] bg-[rgba(247,246,242,0.08)] my-[3px]" />}
                        </div>
                        <div>
                          <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-[var(--am)] mb-[2px]">{step.month}</div>
                          <p className="text-[13px] font-bold text-[var(--cream)] mb-[3px]">{step.title}</p>
                          <p className="text-[12px] text-[var(--muted-l)] leading-[1.55]">{step.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </MotionWrapper>

                {/* n8n vs Zapier */}
                <MotionWrapper type="fadeRight" delay={0.1}>
                  <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
                    <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
                    {t('n8nSection.label')}
                  </div>
                  <h2 className="text-[clamp(24px,3vw,38px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[20px]">
                    {t('n8nSection.h2Part1')}<br /><GradientText>{t('n8nSection.h2Gradient')}</GradientText>
                  </h2>
                  <div className="flex flex-col gap-[14px]">
                    {n8nReasons.map((reason, i) => (
                      <div key={i} className="bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)] rounded-[16px] p-[20px_22px]">
                        <div className="flex items-start gap-[12px]">
                          <div className="w-[28px] h-[28px] rounded-[7px] grad-bg flex items-center justify-center shrink-0 mt-[1px] shadow-[0_3px_10px_rgba(232,65,122,0.2)]">
                            <span className="text-[11px] font-extrabold text-white">{i + 1}</span>
                          </div>
                          <div>
                            <h3 className="text-[13px] font-extrabold text-[var(--cream)] mb-[5px]">{reason.title}</h3>
                            <p className="text-[12px] leading-[1.6] text-[var(--muted-l)]">{reason.body}</p>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="bg-[rgba(245,166,35,0.07)] border-[0.5px] border-[rgba(245,166,35,0.18)] rounded-[14px] p-[16px_18px] mt-[4px]">
                      <p className="text-[12px] text-[var(--cream)] leading-[1.6]">
                        {t('n8nSection.note')}
                      </p>
                    </div>
                  </div>
                </MotionWrapper>
              </div>
            </PageWrapper>
          </section>

          {/* ══════ PARA QUIÉN ES ══════ */}
          <section className="bg-[var(--cream)] py-[80px] lg:py-[110px] border-t-[0.5px] border-[rgba(28,24,40,0.07)]">
            <PageWrapper>
              <MotionWrapper type="fadeUp">
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                  <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
                  {t('forYouSection.label')}
                </div>
                <h2 className="text-[clamp(28px,3.5vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[44px]">
                  <GradientText>Automation Retainer</GradientText> {t('forYouSection.h2Suffix')}
                </h2>
              </MotionWrapper>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                <MotionWrapper type="fadeLeft">
                  <div className="bg-white border-[0.5px] border-[rgba(28,24,40,0.09)] rounded-[20px] p-[32px] h-full shadow-[0_8px_32px_rgba(28,24,40,0.04)]">
                    <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#1D9E75] mb-[22px] flex items-center gap-[8px]">
                      <span className="w-[6px] h-[6px] rounded-full bg-[#1D9E75]" /> {t('forYouSection.forYouLabel')}
                    </div>
                    <ul className="flex flex-col gap-[12px]">
                      {forYou.map((item, i) => (
                        <li key={i} className="flex items-start gap-[10px] text-[14px] text-[var(--dark)] leading-[1.5]">
                          <IconCheck size={16} color="#1D9E75" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </MotionWrapper>
                <MotionWrapper type="fadeRight" delay={0.1}>
                  <div className="bg-[rgba(28,24,40,0.03)] border-[0.5px] border-[rgba(28,24,40,0.08)] rounded-[20px] p-[32px] h-full">
                    <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[22px] flex items-center gap-[8px]">
                      <span className="w-[6px] h-[6px] rounded-full bg-[rgba(28,24,40,0.28)]" /> {t('forYouSection.notForYouLabel')}
                    </div>
                    <ul className="flex flex-col gap-[14px]">
                      {notForYouItems.map((item, i) => (
                        <li key={i} className="flex items-start gap-[10px] text-[14px] leading-[1.5]">
                          <svg viewBox="0 0 24 24" fill="none" stroke="rgba(28,24,40,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px] mt-[1px] shrink-0">
                            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                          </svg>
                          <span className="text-[var(--muted)]">{item.text}{' '}<a href={item.href} className="text-[var(--mg)] font-bold no-underline hover:opacity-80">{t('forYouSection.seeLabel')} {item.pack} →</a></span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-[20px] pt-[16px] border-t-[0.5px] border-[rgba(28,24,40,0.07)]">
                      <p className="text-[12px] text-[var(--muted)]">{t('forYouSection.auditNote')}{' '}<a href={t('forYouSection.auditHref')} className="text-[var(--mg)] font-bold no-underline hover:opacity-80">{t('forYouSection.auditLinkLabel')}</a></p>
                    </div>
                  </div>
                </MotionWrapper>
              </div>
            </PageWrapper>
          </section>

          {/* ══════ FAQ ══════ */}
          <section className="bg-[var(--darker)] py-[80px] lg:py-[110px] relative overflow-hidden border-t-[0.5px] border-[rgba(247,246,242,0.06)]">
            <PageWrapper className="relative z-10">
              <MotionWrapper type="fadeUp">
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
                  <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
                  {t('faqSection.label')}
                </div>
                <h2 className="text-[clamp(28px,3.8vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[14px]">
                  {t('faqSection.h2Part1')}<br /><GradientText>{t('faqSection.h2Gradient')}</GradientText>
                </h2>
                <p className="text-[15px] leading-[1.7] text-[var(--muted-l)] max-w-[500px] mb-[44px]">{t('faqSection.description')}</p>
              </MotionWrapper>
              <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-[10px]" staggerDelay={0.06}>
                {faqItems.map((faq, idx) => (
                  <StaggerItem key={idx}>
                    <div className="bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)] rounded-[16px] p-[24px] transition-all duration-200 hover:bg-[rgba(247,246,242,0.065)] hover:border-[rgba(247,246,242,0.14)] hover:-translate-y-[2px]">
                      <h3 className="text-[15px] font-extrabold text-[var(--cream)] mb-[10px]">{faq.q}</h3>
                      <p className="text-[13px] leading-[1.7] text-[var(--muted-l)]">{faq.a}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              <MotionWrapper type="fadeUp" delay={0.3}>
                <div className="mt-[40px] flex flex-wrap items-center justify-center gap-x-[32px] gap-y-[12px] border-t-[0.5px] border-[rgba(247,246,242,0.07)] pt-[32px]">
                  {trustBadges.map((item, i) => (
                    <div key={i} className="flex items-center gap-[8px] text-[12px] text-[rgba(247,246,242,0.4)] font-semibold">
                      <IconCheck size={13} color="var(--am)" />
                      {item}
                    </div>
                  ))}
                </div>
              </MotionWrapper>
            </PageWrapper>
          </section>

          {/* ══════ CTA FINAL ══════ */}
          <CtaFinal
            headline={<><span>{t('ctaFinal.headlinePart1')}</span><br /><GradientText>{t('ctaFinal.headlineGradient')}</GradientText></>}
            subheadline={t('ctaFinal.subheadline')}
            mainCta={{ label: t('ctaFinal.ctaLabel'), href: '#' }}
            disclaimer={t('ctaFinal.disclaimer')}
            watermarkText={t('ctaFinal.watermark')}
            cards={ctaCards}
          />
        </main>

        <Footer
          variant="full"
          brandName="Vacaré Digital Solutions"
          brandDesc={tLayout('Footer.brandDesc')}
          copyrightText={tLayout('Footer.copyright')}
          langText={tLayout('Footer.lang')}
          columns={[
            {
              title: t('footerColumns.servicesTitle'), links: [
                { label: 'Starter Presence', href: `/${isEn ? 'services' : 'servicios'}/starter-presence` },
                { label: 'Growth Machine', href: `/${isEn ? 'services' : 'servicios'}/growth-machine` },
                { label: 'Full Funnel 360', href: `/${isEn ? 'services' : 'servicios'}/full-funnel-360` },
                { label: 'Ecommerce Pro', href: `/${isEn ? 'services' : 'servicios'}/ecommerce-pro` },
                { label: 'Automation Retainer', href: `/${isEn ? 'services' : 'servicios'}/automation-retainer` },
              ]
            },
            {
              title: t('footerColumns.freeTitle'), links: [
                { label: t('footerColumns.webAudit'), href: isEn ? '/free-audit' : '/auditoria-web-gratuita' },
                { label: t('footerColumns.emailCourse'), href: isEn ? '/email-course' : '/curso-web-gratis' },
              ]
            },
            {
              title: t('footerColumns.companyTitle'), links: [
                { label: t('footerColumns.allServices'), href: isEn ? '/services' : '/servicios' },
                { label: t('footerColumns.caseStudies'), href: '/#case' },
                { label: t('footerColumns.privacy'), href: '#' },
              ]
            },
          ]}
        />
      </HomeClient>
    </>
  );
}
