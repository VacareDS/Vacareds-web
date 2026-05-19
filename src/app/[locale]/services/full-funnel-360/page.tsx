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
  const isEn = locale === 'en';
  return {
    title: isEn
      ? 'Full Funnel 360 — Organic Client Channel, SEO & AI Visibility | Vacaré'
      : 'Full Funnel 360 — Canal Orgánico de Clientes, SEO y Visibilidad en IA | Vacaré',
    description: isEn
      ? 'Predictable organic client channel. SEO, strategic content, ChatGPT optimization and complete funnel. Without paid ads. Results from 90 days.'
      : 'Canal de clientes orgánico y predecible. SEO, contenido estratégico, optimización para ChatGPT y funnel completo. Sin publicidad pagada. Resultados desde los 90 días.',
    alternates: {
      canonical: isEn
        ? 'https://vacaredigitalsolutions.com/en/services/full-funnel-360'
        : 'https://vacaredigitalsolutions.com/es/servicios/full-funnel-360',
    },
    openGraph: {
      title: 'Full Funnel 360 — Vacaré Digital Solutions',
      description: isEn
        ? "Referrals don't scale. Paid ads don't compound. Full Funnel 360 builds the organic channel that works for years."
        : 'El boca a boca no escala. Los ads no acumulan. Full Funnel 360 construye el canal orgánico que trabaja por años.',
    },
  };
}

// ─── Icons ─────────────────────────────────────────────────────────────────
function IconSearch({ className = 'w-5 h-5', color = 'white' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
function IconFileText() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
    </svg>
  );
}
function IconCpu() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  );
}
function IconGift() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}
function IconFunnel() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function IconDatabase() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}
function IconZap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
function IconBarChart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}
function IconLayers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
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
function IconUsers({ className = 'w-5 h-5', color = 'white' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function IconBulb() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--mg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <path d="M9 18h6" /><path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
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
function IconX({ color = 'rgba(247,246,242,0.25)', size = 16 }: { color?: string; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: size, height: size, flexShrink: 0 }}>
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────
const INCLUDES_ICONS = [
  IconLayers,
  IconSearch,
  IconCpu,
  IconFileText,
  IconGift,
  IconFunnel,
  IconMail,
  IconDatabase,
  IconZap,
  IconBarChart,
];

const FUNNEL_ICONS = [
  <IconSearch key="0" className="w-[18px] h-[18px]" />,
  <IconUsers key="1" className="w-[18px] h-[18px]" />,
  <IconGift key="2" />,
  <IconFunnel key="3" />,
  <IconCheck key="4" size={18} color="white" />,
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default async function FullFunnel360Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tLayout = await getTranslations({ locale, namespace: 'Layout' });
  const t = await getTranslations({ locale, namespace: 'ServicePages.fullFunnel360' });

  const BASE = 'https://vacaredigitalsolutions.com';
  const isEn = locale === 'en';
  const svcPath = isEn ? `${BASE}/en/services/full-funnel-360` : `${BASE}/es/servicios/full-funnel-360`;

  // ─── Localized Data ────────────────────────────────────────────────────────
  const includes = (t.raw('includes') as Array<{ what: string; means: string }>).map((item, i) => ({
    ...item,
    Icon: INCLUDES_ICONS[i] || IconLayers,
  }));
  const faqItems = t.raw('faq') as Array<{ q: string; a: string }>;
  const heroBullets = t.raw('heroBullets') as string[];
  const forYou = t.raw('forYou') as string[];
  const funnelStages = (t.raw('funnelSection.stages') as Array<{ step: string; label: string; body: string }>).map((stage, i) => ({
    ...stage,
    icon: FUNNEL_ICONS[i] || FUNNEL_ICONS[0],
  }));
  const milestones = t.raw('timelineSection.milestones') as Array<{ period: string; title: string; items: string[] }>;

  return (
    <>
      <ServiceJsonLd
        url={svcPath}
        name="Full Funnel 360"
        description={t('meta.seoDescription')}
        price="5000"
      />
      <BreadcrumbJsonLd items={[
        { name: t('breadcrumb.home'), item: `${BASE}/${locale}` },
        { name: t('breadcrumb.services'), item: isEn ? `${BASE}/en/services` : `${BASE}/es/servicios` },
        { name: 'Full Funnel 360', item: svcPath },
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
          <div className="absolute top-0 right-0 w-[560px] h-[560px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(240,112,48,0.09) 0%, transparent 65%)' }} />
          <div className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.05) 0%, transparent 65%)' }} />
          <AnimatedWatermark text="FULL FUNNEL" direction="left" className="bottom-[-20px] left-[-8px] text-[clamp(60px,10vw,140px)] text-[rgba(247,246,242,0.02)] tracking-[-5px] italic" />

          <div className="flex flex-col lg:flex-row w-full">
            {/* Left */}
            <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 lg:px-[52px] py-[72px] relative z-10">
              <MotionWrapper type="fadeUp">
                <nav className="flex items-center gap-[8px] text-[11px] text-[rgba(247,246,242,0.3)] mb-[28px]">
                  <a href="/" className="hover:text-[rgba(247,246,242,0.6)] transition-colors no-underline">{t('breadcrumb.home')}</a>
                  <span>/</span>
                  <a href={isEn ? '/services' : '/servicios'} className="hover:text-[rgba(247,246,242,0.6)] transition-colors no-underline">{t('breadcrumb.services')}</a>
                  <span>/</span>
                  <span className="text-[var(--or)] font-semibold">Full Funnel 360</span>
                </nav>

                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--or)] mb-[20px]">
                  <i className="w-[18px] h-[1.5px] bg-[var(--or)] block" />
                  {t('hero.badge')}
                </div>

                <h1 className="text-[clamp(34px,4.5vw,58px)] font-extrabold leading-[1.07] tracking-[-2px] text-[var(--cream)] mb-[18px]">
                  <span className="block grad-text text-[clamp(22px,2.8vw,36px)] mb-[8px]">Full Funnel 360</span>
                  {t('hero.h1Line1')}<br />{t('hero.h1Line2')}<br />
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
                  <a href="#como-funciona" className="px-[24px] py-[15px] rounded-[10px] border-[1.5px] border-[rgba(247,246,242,0.15)] text-[var(--cream)] text-[15px] font-bold leading-none no-underline inline-flex items-center transition-all hover:border-[rgba(247,246,242,0.38)] hover:-translate-y-[1px]">
                    {t('hero.ctaSecondary')}
                  </a>
                </div>
                <p className="text-[12px] text-[rgba(247,246,242,0.3)] font-medium">
                  {t('hero.disclaimer')}
                </p>
              </MotionWrapper>
            </div>

            {/* Right — gradient panel */}
            <div className="w-full lg:w-[45%] relative overflow-hidden flex flex-col" style={{ background: 'linear-gradient(145deg,#F07030 0%,#F5A623 48%,#E8417A 100%)' }}>
              <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")" }} />
              
              <div className="absolute top-[22px] left-[18px] w-[72px] h-[72px] rounded-full border-[1.5px] border-[rgba(255,255,255,0.18)] pointer-events-none" />
              <div className="absolute top-[46px] left-[42px] w-[34px] h-[34px] rounded-full border-[1px] border-[rgba(255,255,255,0.1)] pointer-events-none" />
              <div className="absolute bottom-[52px] right-[20px] w-[120px] h-[120px] border-[2px] border-[rgba(255,255,255,0.08)] rounded-full pointer-events-none" />
              <div className="absolute text-[clamp(90px,14vw,180px)] font-extrabold italic text-[rgba(255,255,255,0.07)] leading-[0.9] tracking-[-5px] pointer-events-none bottom-[-10px] right-[-10px]">03</div>

              <div className="relative z-10 flex flex-col justify-center h-full px-[32px] lg:px-[52px] py-[60px] gap-[24px]">
                
                <div className="bg-[rgba(255,255,255,0.15)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.25)] rounded-[20px] p-[28px] shadow-[0_12px_40px_rgba(0,0,0,0.1)]">
                  <div className="flex items-center gap-[12px] mb-[16px]">
                    <div className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center shadow-md">
                      <IconTrendingUp className="w-[20px] h-[20px] text-[var(--or)]" />
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-[rgba(255,255,255,0.7)] uppercase tracking-[0.1em]">{t('hero.panel.growthLabel')}</div>
                      <div className="text-[20px] font-extrabold text-white leading-tight">{t('hero.panel.channelLabel')}</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-[14px] mt-[24px]">
                    {(t.raw('hero.panel.milestones') as Array<{ label: string; desc: string }>).map((item, i) => (
                      <div key={i} className="flex items-center gap-[16px]">
                        <div className="w-[45px] text-right text-[14px] font-bold text-white">{item.label}</div>
                        <div className="flex-1 h-[8px] bg-[rgba(255,255,255,0.2)] rounded-full overflow-hidden relative">
                          <div className="absolute top-0 left-0 h-full bg-white rounded-full" style={{ width: `${(i + 1) * 33}%` }} />
                        </div>
                        <div className="flex-1 text-[13px] font-semibold text-[rgba(255,255,255,0.95)]">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-[16px]">
                  <div className="bg-[rgba(255,255,255,0.12)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.2)] rounded-[16px] p-[20px] flex flex-col justify-center items-center text-center hover:bg-[rgba(255,255,255,0.18)] transition-colors">
                    <span className="text-[36px] font-extrabold text-white tracking-[-1.5px] leading-none mb-[6px]">$0</span>
                    <span className="text-[12px] font-bold text-[rgba(255,255,255,0.85)] uppercase tracking-[0.05em]">{t('hero.panel.noAds')}</span>
                  </div>
                  
                  <div className="bg-[rgba(255,255,255,0.12)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.2)] rounded-[16px] p-[20px] flex flex-col justify-center items-center text-center hover:bg-[rgba(255,255,255,0.18)] transition-colors">
                    <IconCpu />
                    <span className="text-[12px] font-bold text-[rgba(255,255,255,0.85)] uppercase tracking-[0.05em] mt-[10px]">{t('hero.panel.aiOptimized')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════ EL PROBLEMA — BOCA A BOCA VS ADS ══════ */}
        <section className="bg-[var(--cream)] py-[80px] lg:py-[110px] relative overflow-hidden">
          <AnimatedWatermark text="ORGÁNICO" direction="right" className="-bottom-[10px] -right-[10px] text-[clamp(70px,13vw,160px)] text-[rgba(28,24,40,0.025)] tracking-[-4px] italic" />
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
              <p className="text-[16px] leading-[1.75] text-[var(--muted)] max-w-[580px] mb-[48px]">
                {t('problemSection.description')}
              </p>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px] mb-[44px]">
              <MotionWrapper type="fadeUp" delay={0.05}>
                <div className="bg-white border-[0.5px] border-[rgba(28,24,40,0.09)] rounded-[20px] p-[28px] h-full">
                  <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-[rgba(28,24,40,0.3)] mb-[16px] flex items-center gap-[6px]">
                    <span className="w-[5px] h-[5px] rounded-full bg-[rgba(28,24,40,0.2)]" /> {t('problemSection.channel1Title')}
                  </div>
                  <ul className="flex flex-col gap-[9px]">
                    {(t.raw('problemSection.channel1Items') as string[]).map((item, i) => (
                      <li key={i} className="flex items-start gap-[8px] text-[13px] text-[var(--muted)] leading-[1.5]">
                        <IconX size={13} color="rgba(28,24,40,0.25)" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionWrapper>
              <MotionWrapper type="fadeUp" delay={0.1}>
                <div className="bg-white border-[0.5px] border-[rgba(28,24,40,0.09)] rounded-[20px] p-[28px] h-full">
                  <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-[rgba(28,24,40,0.3)] mb-[16px] flex items-center gap-[6px]">
                    <span className="w-[5px] h-[5px] rounded-full bg-[rgba(28,24,40,0.2)]" /> {t('problemSection.channel2Title')}
                  </div>
                  <ul className="flex flex-col gap-[9px]">
                    {(t.raw('problemSection.channel2Items') as string[]).map((item, i) => (
                      <li key={i} className="flex items-start gap-[8px] text-[13px] text-[var(--muted)] leading-[1.5]">
                        <IconX size={13} color="rgba(28,24,40,0.25)" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionWrapper>
              <MotionWrapper type="fadeUp" delay={0.15}>
                <div className="bg-[var(--dark)] rounded-[20px] p-[28px] h-full border-[0.5px] border-[rgba(247,246,242,0.1)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-[120px] h-[120px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(240,112,48,0.15) 0%, transparent 65%)' }} />
                  <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--am)] mb-[16px] flex items-center gap-[6px] relative z-10">
                    <span className="w-[5px] h-[5px] rounded-full bg-[var(--am)]" /> Full Funnel 360
                  </div>
                  <ul className="flex flex-col gap-[9px] relative z-10">
                    {(t.raw('problemSection.channel3Items') as string[]).map((item, i) => (
                      <li key={i} className="flex items-start gap-[8px] text-[13px] text-[var(--cream)] leading-[1.5]">
                        <IconCheck size={13} color="#1D9E75" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-[rgba(247,246,242,0.4)] mt-[16px] leading-[1.6] relative z-10">
                    {t('problemSection.channel3Note')}
                  </p>
                </div>
              </MotionWrapper>
            </div>
          </PageWrapper>
        </section>

        {/* ══════ CHATGPT / LLM — DIFERENCIADOR ÚNICO ══════ */}
        <section className="bg-[var(--dark)] py-[80px] lg:py-[110px] border-t-[0.5px] border-[rgba(247,246,242,0.06)] relative overflow-hidden">
          <AnimatedWatermark text="CHATGPT" direction="left" className="-bottom-[10px] -left-[8px] text-[clamp(70px,13vw,160px)] text-[rgba(247,246,242,0.025)] tracking-[-4px] italic" />
          <PageWrapper className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] items-center">
              <MotionWrapper type="fadeLeft">
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
                  <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
                  {t('llmSection.label')}
                </div>
                <h2 className="text-[clamp(26px,3.5vw,44px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[18px]">
                  {t('llmSection.h2Part1')}<br /><GradientText>{t('llmSection.h2Gradient')}</GradientText>
                </h2>
                <p className="text-[15px] leading-[1.75] text-[var(--muted-l)] mb-[20px]">
                  {t('llmSection.p1')}
                </p>
                <p className="text-[15px] leading-[1.75] text-[var(--muted-l)] mb-[28px]">
                  Full Funnel 360 incluye <strong className="text-[var(--am)]">LLM Optimization</strong>: {t('llmSection.p2')}
                </p>
                <div className="bg-[rgba(240,112,48,0.08)] border-[0.5px] border-[rgba(240,112,48,0.2)] rounded-[12px] p-[16px_20px] flex items-start gap-[12px]">
                  <div className="w-[32px] h-[32px] rounded-[8px] bg-[rgba(240,112,48,0.12)] border-[0.5px] border-[rgba(240,112,48,0.25)] flex items-center justify-center shrink-0">
                    <IconBulb />
                  </div>
                  <p className="text-[13px] text-[var(--cream)] leading-[1.6]">
                    {t('llmSection.note')}
                  </p>
                </div>
              </MotionWrapper>

              <MotionWrapper type="fadeRight" delay={0.1}>
                {/* ChatGPT mockup */}
                <div className="bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.1)] rounded-[20px] overflow-hidden">
                  {/* Header */}
                  <div className="bg-[rgba(247,246,242,0.06)] px-[16px] py-[10px] border-b border-[rgba(247,246,242,0.06)] flex items-center gap-[8px]">
                    <div className="w-[7px] h-[7px] rounded-full bg-[rgba(247,246,242,0.15)]" />
                    <div className="w-[7px] h-[7px] rounded-full bg-[rgba(247,246,242,0.15)]" />
                    <div className="w-[7px] h-[7px] rounded-full bg-[rgba(247,246,242,0.15)]" />
                    <span className="text-[10px] text-[rgba(247,246,242,0.3)] ml-[6px]">{t('llmSection.chatgptLabel')}</span>
                  </div>
                  {/* Prompt */}
                  <div className="p-[16px_18px] border-b border-[rgba(247,246,242,0.05)]">
                    <div className="bg-[rgba(247,246,242,0.06)] rounded-[10px] px-[14px] py-[10px] inline-block max-w-[80%]">
                      <p className="text-[12px] text-[rgba(247,246,242,0.75)] leading-[1.5]">{t('llmSection.chatgptQuestion')}</p>
                    </div>
                  </div>
                  {/* Response */}
                  <div className="p-[16px_18px]">
                    <div className="flex gap-[10px]">
                      <div className="w-[22px] h-[22px] rounded-full bg-[rgba(240,112,48,0.2)] border-[0.5px] border-[rgba(240,112,48,0.3)] flex items-center justify-center shrink-0 mt-[1px]">
                        <span className="text-[8px] font-bold text-[var(--or)]">AI</span>
                      </div>
                      <div>
                        <p className="text-[12px] text-[rgba(247,246,242,0.75)] leading-[1.65] mb-[8px]">
                          {t('llmSection.chatgptResponse1')}
                        </p>
                        <p className="text-[12px] text-[rgba(247,246,242,0.75)] leading-[1.65]">
                          <strong className="text-[var(--am)]">Vacaré Digital Solutions</strong> {t('llmSection.chatgptResponse2')}
                        </p>
                        <div className="flex gap-[6px] mt-[10px]">
                          {['vacaredigitalsolutions.com', t('llmSection.chatgptSources')].map((src, i) => (
                            <span key={i} className="text-[8px] bg-[rgba(247,246,242,0.06)] border-[0.5px] border-[rgba(247,246,242,0.1)] rounded-[4px] px-[7px] py-[3px] text-[rgba(247,246,242,0.4)]">{src}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-[18px] pb-[14px]">
                    <p className="text-[9px] text-[rgba(247,246,242,0.25)]">
                      {t('llmSection.chatgptNote')}
                    </p>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </PageWrapper>
        </section>

        {/* ══════ CÓMO FUNCIONA — FUNNEL 5 ETAPAS ══════ */}
        <section id="como-funciona" className="bg-[var(--cream)] py-[80px] lg:py-[110px] border-t-[0.5px] border-[rgba(28,24,40,0.07)] relative overflow-hidden">
          <AnimatedWatermark text="FUNNEL" direction="right" className="-bottom-[10px] -right-[10px] text-[clamp(70px,13vw,160px)] text-[rgba(28,24,40,0.025)] tracking-[-4px] italic" />
          <PageWrapper className="relative z-10">
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
                {t('funnelSection.label')}
              </div>
              <h2 className="text-[clamp(28px,3.8vw,48px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[14px]">
                {t('funnelSection.h2Part1')}<br /><GradientText>{t('funnelSection.h2Gradient')}</GradientText>
              </h2>
              <p className="text-[16px] leading-[1.75] text-[var(--muted)] max-w-[520px] mb-[48px]">
                {t('funnelSection.description')}
              </p>
            </MotionWrapper>

            <MotionWrapper type="fadeUp" delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-[2px] bg-[rgba(28,24,40,0.06)] rounded-[20px] overflow-hidden">
                {funnelStages.map((stage, i) => (
                  <div key={i} className="bg-white p-[24px_20px] hover:bg-[rgba(28,24,40,0.02)] transition-colors relative">
                    <div className="w-[40px] h-[40px] rounded-[10px] grad-bg flex items-center justify-center mb-[14px] shadow-[0_4px_14px_rgba(232,65,122,0.2)]">
                      {stage.icon}
                    </div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-[var(--muted)] mb-[6px]">{t('funnelSection.stageLabel')} {stage.step}</div>
                    <h3 className="text-[14px] font-extrabold text-[var(--dark)] mb-[8px] tracking-[-0.2px]">{stage.label}</h3>
                    <p className="text-[12px] leading-[1.6] text-[var(--muted)]">{stage.body}</p>
                    {i > 0 && (
                      <div className="hidden md:flex absolute top-1/2 left-[-12px] -translate-y-1/2 w-[24px] h-[24px] items-center justify-center z-20 text-[var(--mg)] bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-[12px] h-[12px] ml-[2px]">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </MotionWrapper>
          </PageWrapper>
        </section>

        {/* ══════ QUÉ INCLUYE ══════ */}
        <section id="includes" className="bg-[var(--dark)] py-[80px] lg:py-[110px] relative overflow-hidden border-t-[0.5px] border-[rgba(247,246,242,0.06)]">
          <AnimatedWatermark text="INCLUYE" direction="left" className="-bottom-[10px] -left-[8px] text-[clamp(70px,13vw,160px)] text-[rgba(247,246,242,0.025)] tracking-[-4px] italic" />
          <PageWrapper className="relative z-10">
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
                {t('includesSection.label')}
              </div>
              <h2 className="text-[clamp(28px,3.8vw,48px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[14px]">
                {t('includesSection.h2Part1')}<br /><GradientText>{t('includesSection.h2Gradient')}</GradientText>
              </h2>
              <p className="text-[16px] leading-[1.75] text-[var(--muted-l)] max-w-[540px] mb-[48px]">
                {t('includesSection.description')}
              </p>
            </MotionWrapper>

            <StaggerContainer className="flex flex-col gap-[8px]" staggerDelay={0.05}>
              {includes.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-0 bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)] rounded-[16px] overflow-hidden hover:bg-[rgba(247,246,242,0.065)] hover:border-[rgba(247,246,242,0.13)] transition-all duration-200 group">
                    <div className="p-[20px_24px] flex items-center gap-[14px] border-b-[0.5px] lg:border-b-0 lg:border-r-[0.5px] border-[rgba(247,246,242,0.06)]">
                      <div className="w-[38px] h-[38px] rounded-[9px] grad-bg flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(232,65,122,0.2)]">
                        <item.Icon />
                      </div>
                      <p className="text-[14px] font-bold text-[var(--cream)] leading-[1.4]">{item.what}</p>
                    </div>
                    <div className="p-[20px_24px] flex items-center">
                      <p className="text-[13px] leading-[1.65] text-[var(--muted-l)]">
                        <span className="text-[var(--am)] font-extrabold mr-[6px]">→</span>
                        {item.means}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </PageWrapper>
        </section>

        {/* ══════ EFECTO COMPUESTO ══════ */}
        <section className="bg-[var(--cream)] py-[80px] lg:py-[110px] border-t-[0.5px] border-[rgba(28,24,40,0.07)] relative overflow-hidden">
          <PageWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] items-center">
              <MotionWrapper type="fadeLeft">
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                  <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
                  {t('compoundSection.label')}
                </div>
                <h2 className="text-[clamp(26px,3.5vw,44px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[20px]">
                  {t('compoundSection.h2Part1')}<br /><GradientText>{t('compoundSection.h2Gradient')}</GradientText>
                </h2>
                <p className="text-[15px] leading-[1.75] text-[var(--muted)] mb-[20px]">
                  {t('compoundSection.p1')}
                </p>
                <p className="text-[15px] leading-[1.75] text-[var(--muted)]">
                  {t('compoundSection.p2')}
                </p>
              </MotionWrapper>

              <MotionWrapper type="fadeRight" delay={0.1}>
                <div className="bg-[var(--dark)] rounded-[24px] p-[28px] border-[0.5px] border-[rgba(247,246,242,0.09)] shadow-[0_24px_80px_rgba(28,24,40,0.14)]">
                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--am)] mb-[20px]">{t('compoundSection.chartTitle')}</p>
                  {/* Simple CSS chart comparison */}
                  <div className="flex flex-col gap-[12px]">
                    {(t.raw('compoundSection.series') as Array<{ label: string; note: string; color?: string; data?: number[] }>).map((series, si) => {
                      const color = si === 0 ? 'rgba(247,246,242,0.2)' : 'var(--am)';
                      const data = si === 0 ? [80, 80, 0, 0, 0] : [15, 30, 55, 75, 100];
                      return (
                        <div key={si}>
                          <div className="flex items-center justify-between mb-[6px]">
                            <span className="text-[11px] font-bold" style={{ color }}>{series.label}</span>
                            <span className="text-[9px] text-[rgba(247,246,242,0.35)]">{series.note}</span>
                          </div>
                          <div className="flex gap-[3px] items-end h-[36px]">
                            {data.map((v, i) => (
                              <div key={i} className="flex-1 rounded-t-[3px] transition-all" style={{ height: `${v}%`, background: color, minHeight: v > 0 ? '3px' : '0' }} />
                            ))}
                          </div>
                          <div className="flex gap-[3px] mt-[3px]">
                            {(t.raw('compoundSection.chartLabels') as string[]).map((l, i) => (
                              <div key={i} className="flex-1 text-center text-[7px] text-[rgba(247,246,242,0.25)]">{l}</div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-[11px] text-[rgba(247,246,242,0.3)] mt-[18px] border-t border-[rgba(247,246,242,0.07)] pt-[14px]">
                    {t('compoundSection.disclaimer')}
                  </p>
                </div>
              </MotionWrapper>
            </div>
          </PageWrapper>
        </section>

        {/* ══════ TIMELINE DE RESULTADOS ══════ */}
        <section className="bg-[var(--dark)] py-[80px] lg:py-[110px] border-t-[0.5px] border-[rgba(247,246,242,0.06)] relative overflow-hidden">
          <AnimatedWatermark text="TIEMPO" direction="right" className="-bottom-[10px] -right-[10px] text-[clamp(70px,13vw,160px)] text-[rgba(247,246,242,0.025)] tracking-[-4px] italic" />
          <PageWrapper className="relative z-10">
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
                {t('timelineSection.label')}
              </div>
              <h2 className="text-[clamp(28px,3.8vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[44px]">
                <GradientText>{t('timelineSection.h2Gradient')}</GradientText> {t('timelineSection.h2Suffix')}
              </h2>
            </MotionWrapper>

            <MotionWrapper type="fadeUp" delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-[rgba(247,246,242,0.05)] rounded-[20px] overflow-hidden">
                {milestones.map((stage, i) => (
                  <div key={i} className="bg-[rgba(247,246,242,0.03)] p-[28px] hover:bg-[rgba(247,246,242,0.055)] transition-colors">
                    <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--am)] mb-[8px]">{stage.period}</div>
                    <h3 className="text-[15px] font-extrabold text-[var(--cream)] mb-[14px] tracking-[-0.2px]">{stage.title}</h3>
                    <ul className="flex flex-col gap-[7px]">
                      {stage.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-[8px] text-[12px] text-[var(--muted-l)] leading-[1.5]">
                          <IconCheck size={12} color="#1D9E75" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </MotionWrapper>
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
                <GradientText>{t('forYouSection.h2Gradient')}</GradientText> {t('forYouSection.h2Suffix')}
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
                    {(t.raw('forYouSection.notForYou') as Array<{ text: string; pack: string; href: string }>).map((item, i) => (
                      <li key={i} className="flex items-start gap-[10px] text-[14px] leading-[1.5]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="rgba(28,24,40,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px] mt-[1px] shrink-0">
                          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                        <span className="text-[var(--muted)]">{item.text}{' '}<a href={isEn ? item.href : item.href.replace('/services/', '/servicios/')} className="text-[var(--mg)] font-bold no-underline hover:opacity-80">{isEn ? 'See' : 'Ver'} {item.pack} →</a></span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-[20px] pt-[16px] border-t-[0.5px] border-[rgba(28,24,40,0.07)]">
                    <p className="text-[12px] text-[var(--muted)]">{t('forYouSection.auditNote')}{' '}<a href={isEn ? '/free-web-audit' : '/auditoria-web-gratuita'} className="text-[var(--mg)] font-bold no-underline hover:opacity-80">{t('forYouSection.auditLinkLabel')}</a></p>
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
                    <h3 className="text-[15px] font-extrabold text-[var(--cream)] mb-[10px] tracking-[-0.2px]">{faq.q}</h3>
                    <p className="text-[13px] leading-[1.7] text-[var(--muted-l)]">{faq.a}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <MotionWrapper type="fadeUp" delay={0.3}>
              <div className="mt-[40px] flex flex-wrap items-center justify-center gap-x-[32px] gap-y-[12px] border-t-[0.5px] border-[rgba(247,246,242,0.07)] pt-[32px]">
                {(t.raw('faqSection.trustBadges') as string[]).map((item, i) => (
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
          headline={<>{t('ctaFinal.headlinePart1')}<br /><GradientText>{t('ctaFinal.headlineGradient')}</GradientText></>}
          subheadline={t('ctaFinal.subheadline')}
          mainCta={{ label: t('ctaFinal.ctaLabel'), href: '#' }}
          disclaimer={t('ctaFinal.disclaimer')}
          watermarkText={t('ctaFinal.watermark')}
          cards={(t.raw('ctaFinal.cards') as Array<{ tag: string; title: string; desc: string; href: string }>).map(card => ({
            ...card,
            href: isEn ? card.href : card.href.replace('/services/', '/servicios/').replace('/free-web-audit', '/auditoria-web-gratuita').replace('/email-course', '/curso-web-gratis')
          }))}
        />
      </main>

      <Footer
        brandName="Vacaré Digital Solutions"
        brandDesc={tLayout('Footer.brandDesc')}
        copyrightText={tLayout('Footer.copyright')}
        langText={tLayout('Footer.lang')}
        columns={[
          { title: t('footerColumns.servicesTitle'), links: [
            { label: 'Starter Presence', href: `/${isEn ? 'services' : 'servicios'}/starter-presence` },
            { label: 'Growth Machine', href: `/${isEn ? 'services' : 'servicios'}/growth-machine` },
            { label: 'Full Funnel 360', href: `/${isEn ? 'services' : 'servicios'}/full-funnel-360` },
            { label: 'Ecommerce Pro', href: `/${isEn ? 'services' : 'servicios'}/ecommerce-pro` },
            { label: 'Automation Retainer', href: `/${isEn ? 'services' : 'servicios'}/automation-retainer` },
          ]},
          { title: t('footerColumns.freeTitle'), links: [
            { label: t('footerColumns.webAudit'), href: isEn ? '/free-web-audit' : '/auditoria-web-gratuita' },
            { label: t('footerColumns.emailCourse'), href: isEn ? '/email-course' : '/curso-web-gratis' }
          ] },
          { title: t('footerColumns.companyTitle'), links: [
            { label: t('footerColumns.allServices'), href: isEn ? '/services' : '/servicios' },
            { label: t('footerColumns.caseStudies'), href: '/#case' },
            { label: t('footerColumns.privacy'), href: '#' }
          ] },
        ]}
      />
      </HomeClient>
    </>
  );
}
