import { getTranslations, setRequestLocale } from 'next-intl/server';
import HomeClient from '@/components/layout/HomeClient';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import PageWrapper from '@/components/layout/PageWrapper';
import CtaFinal from '@/components/sections/CtaFinal';
import CaseStudyBlock from '@/components/sections/CaseStudyBlock';
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
      ? 'Ecommerce Pro — Direct Sales Store, No Commissions, Fully Automated | Vacaré'
      : 'Ecommerce Pro — Tienda Directa, Sin Comisiones y Automatizada | Vacaré',
    description: isEn
      ? 'Online store in Next.js + Stripe with 5 post-purchase automations. No marketplace commissions. No expensive hosting. Every sale is completely yours.'
      : 'Tienda online en Next.js + Stripe con 5 automatizaciones post-compra. Sin comisiones a marketplaces. Sin hosting caro. Cada venta es completamente tuya.',
    alternates: {
      canonical: isEn
        ? 'https://vacaredigitalsolutions.com/en/services/ecommerce-pro'
        : 'https://vacaredigitalsolutions.com/es/servicios/ecommerce-pro',
    },
    openGraph: {
      title: 'Ecommerce Pro — Vacaré Digital Solutions',
      description: isEn
        ? 'Every sale through Booking or MercadoLibre gives 15-25% to another company. Ecommerce Pro builds your direct channel.'
        : 'Cada venta por Booking o MercadoLibre le regala el 15-25% a otra empresa. Ecommerce Pro construye tu canal directo.',
    },
  };
}

// ─── Icons ─────────────────────────────────────────────────────────────────
function IconClock({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function IconTrendingDown({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" /><polyline points="17 18 23 18 23 12" />
    </svg>
  );
}
function IconShieldIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function IconRefreshCw({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}
function IconAlertTriangle({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
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

// ─── Icon arrays (order must match JSON array order) ───────────────────────
const CONVERSION_ICONS = [IconClock, IconTrendingDown, IconShieldIcon, IconRefreshCw, IconAlertTriangle];

// ─── Types ────────────────────────────────────────────────────────────────
type ConversionKillerItem = { title: string; body: string };
type TechOptionItem = { name: string; for: string; how: string; why: string; best: boolean };
type PostPurchaseItem = { time: string; event: string; desc: string };
type FaqItem = { q: string; a: string };

// ─── Page ──────────────────────────────────────────────────────────────────
export default async function EcommerceProPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tLayout = await getTranslations({ locale, namespace: 'Layout' });
  const t = await getTranslations({ locale, namespace: 'ServicePages.ecommercePro' });

  const BASE = 'https://vacaredigitalsolutions.com';
  const isEn = locale === 'en';
  const svcPath = isEn ? `${BASE}/en/services/ecommerce-pro` : `${BASE}/es/servicios/ecommerce-pro`;

  const conversionKillers = (t.raw('conversionKillers') as ConversionKillerItem[]).map((item, i) => ({ ...item, Icon: CONVERSION_ICONS[i] }));
  const techOptions = t.raw('techOptions') as TechOptionItem[];
  const postPurchase = t.raw('postPurchase') as PostPurchaseItem[];
  const faqItems = t.raw('faq') as FaqItem[];
  const heroBullets = t.raw('heroBullets') as string[];
  const forYou = t.raw('forYou') as string[];

  return (
    <>
      <ServiceJsonLd
        url={svcPath}
        name="Ecommerce Pro"
        description={isEn
          ? 'Online store in Next.js + Stripe with post-purchase automations. No marketplace commissions. No expensive hosting. Every sale is completely yours.'
          : 'Tienda online en Next.js + Stripe con automatizaciones post-compra. Sin comisiones a marketplaces. Sin hosting caro. Cada venta es completamente tuya.'}
      />
      <BreadcrumbJsonLd items={[
        { name: isEn ? 'Home' : 'Inicio', item: `${BASE}/${locale}` },
        { name: isEn ? 'Services' : 'Servicios', item: isEn ? `${BASE}/en/services` : `${BASE}/es/servicios` },
        { name: 'Ecommerce Pro', item: svcPath },
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
          <div className="absolute top-0 right-0 w-[560px] h-[560px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(29,158,117,0.09) 0%, transparent 65%)' }} />
          <div className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.05) 0%, transparent 65%)' }} />
          <AnimatedWatermark text="ECOMMERCE" direction="left" className="bottom-[-20px] left-[-8px] text-[clamp(70px,11vw,150px)] text-[rgba(247,246,242,0.02)] tracking-[-5px] italic" />

          <div className="flex flex-col lg:flex-row w-full">
            {/* Left */}
            <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 lg:px-[52px] py-[72px] relative z-10">
              <MotionWrapper type="fadeUp">
                <nav className="flex items-center gap-[8px] text-[11px] text-[rgba(247,246,242,0.3)] mb-[28px]">
                  <a href="/" className="hover:text-[rgba(247,246,242,0.6)] transition-colors no-underline">{isEn ? 'Home' : 'Inicio'}</a>
                  <span>/</span>
                  <a href={isEn ? '/services' : '/servicios'} className="hover:text-[rgba(247,246,242,0.6)] transition-colors no-underline">{isEn ? 'Services' : 'Servicios'}</a>
                  <span>/</span>
                  <span className="text-[#1D9E75] font-semibold">Ecommerce Pro</span>
                </nav>

                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[#1D9E75] mb-[20px]">
                  <i className="w-[18px] h-[1.5px] bg-[#1D9E75] block" />
                  {isEn ? 'Package 04 · Direct & automated store' : 'Paquete 04 · Tienda directa y automatizada'}
                </div>

                <h1 className="text-[clamp(34px,4.5vw,58px)] font-extrabold leading-[1.07] tracking-[-2px] text-[var(--cream)] mb-[18px]">
                  <span className="block grad-text text-[clamp(22px,2.8vw,36px)] mb-[8px]">Ecommerce Pro</span>
                  {isEn ? (
                    <>Every sale through Booking<br />or MercadoLibre gives away<br /><GradientText>15–25% to another company.</GradientText></>
                  ) : (
                    <>Cada venta por Booking<br />o MercadoLibre le regala<br /><GradientText>el 15-25% a otra empresa.</GradientText></>
                  )}
                </h1>

                <p className="text-[16px] leading-[1.75] text-[var(--muted-l)] max-w-[460px] mb-[28px]">
                  {isEn
                    ? 'Ecommerce Pro builds your direct sales channel — fast, automated and commission-free. Every sale triggers confirmations, team notifications and follow-ups automatically.'
                    : 'Ecommerce Pro construye tu canal de venta directo — rápido, automatizado y libre de comisiones. Cada venta activa confirmaciones, avisos al equipo y seguimientos de forma automática.'}
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
                    {isEn ? 'I want my store that sells →' : 'Quiero mi tienda que vende →'}
                  </OpenMeetingBtn>
                  <a href="#includes" className="px-[24px] py-[15px] rounded-[10px] border-[1.5px] border-[rgba(247,246,242,0.15)] text-[var(--cream)] text-[15px] font-bold leading-none no-underline inline-flex items-center transition-all hover:border-[rgba(247,246,242,0.38)] hover:-translate-y-[1px]">
                    {isEn ? "See what's included ↓" : 'Ver qué incluye ↓'}
                  </a>
                </div>
                <p className="text-[12px] text-[rgba(247,246,242,0.3)] font-medium">
                  {isEn
                    ? 'Free call · No commitment · We respond in 2 hours'
                    : 'Llamada gratuita · Sin compromiso · Respondemos en 2 horas'}
                </p>
              </MotionWrapper>
            </div>

            {/* Right — gradient panel */}
            <div className="w-full lg:w-[45%] relative overflow-hidden" style={{ background: 'linear-gradient(145deg,#1D9E75 0%,#1D9E75 40%,#F5A623 100%)' }}>
              <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")" }} />
              <div className="absolute top-[22px] left-[18px] w-[72px] h-[72px] rounded-full border-[1.5px] border-[rgba(255,255,255,0.18)] pointer-events-none" />
              <div className="absolute top-[46px] left-[42px] w-[34px] h-[34px] rounded-full border-[1px] border-[rgba(255,255,255,0.1)] pointer-events-none" />
              <div className="absolute bottom-[52px] left-[20px] w-[80px] h-[80px] border-[1.5px] border-[rgba(255,255,255,0.12)] rotate-[18deg] pointer-events-none" />
              <div className="absolute top-[12px] right-[16px] w-[48px] h-[48px] border-[1.5px] border-[rgba(255,255,255,0.15)] rotate-45 pointer-events-none" />
              <div className="absolute top-[20%] right-[22px] w-[7px] h-[7px] rounded-full bg-[rgba(255,255,255,0.4)] pointer-events-none" />
              <div className="absolute top-[35%] right-[46px] w-[4px] h-[4px] rounded-full bg-[rgba(255,255,255,0.22)] pointer-events-none" />
              <div className="absolute bottom-[28%] right-[30px] w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.28)] pointer-events-none" />
              <div className="absolute text-[clamp(90px,14vw,180px)] font-extrabold italic text-[rgba(255,255,255,0.07)] leading-[0.9] tracking-[-5px] pointer-events-none bottom-[-10px] right-[-10px]">04</div>

              <div className="absolute inset-0 z-[2] flex flex-col justify-center px-[32px] lg:px-[44px] py-[40px] gap-[12px]">
                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-[10px]">
                  {(isEn ? [
                    { num: '20%', label: 'Avg. Booking commission', sub: 'you stop paying' },
                    { num: '<1s', label: 'Load speed', sub: 'Next.js on mobile' },
                    { num: '$0', label: 'Commission per direct sale', sub: '100% yours' },
                    { num: '5', label: 'Post-purchase automations', sub: 'included from day 1' },
                  ] : [
                    { num: '20%', label: 'Comisión Booking promedio', sub: 'que dejás de pagar' },
                    { num: '<1s', label: 'Velocidad de carga', sub: 'Next.js en mobile' },
                    { num: '$0', label: 'Comisión por venta directa', sub: 'tuya al 100%' },
                    { num: '5', label: 'Automatizaciones post-compra', sub: 'incluidas desde el día 1' },
                  ]).map((s, i) => (
                    <div key={i} className="bg-[rgba(255,255,255,0.12)] backdrop-blur-[14px] border-[0.5px] border-[rgba(255,255,255,0.22)] rounded-[12px] p-[14px_12px]">
                      <span className="text-[26px] font-extrabold text-white tracking-[-1px] leading-none block mb-[3px]">{s.num}</span>
                      <span className="text-[10px] font-bold text-[rgba(255,255,255,0.75)] leading-[1.3] block">{s.label}</span>
                      <span className="text-[9px] text-[rgba(255,255,255,0.45)]">{s.sub}</span>
                    </div>
                  ))}
                </div>

                {/* "Comisión ahorrada" calc */}
                <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] border-[0.5px] border-[rgba(255,255,255,0.18)] rounded-[12px] p-[14px_16px]">
                  <div className="text-[9px] font-bold text-[rgba(255,255,255,0.45)] uppercase tracking-[0.08em] mb-[8px]">
                    {isEn ? 'Commission given away per year' : 'Comisión regalada por año'}
                  </div>
                  {(isEn ? [
                    { industry: 'Hostel', monthly: '$8,000', pct: '18%', year: '$17,280' },
                    { industry: 'Online store', monthly: '$4,000', pct: '22%', year: '$10,560' },
                  ] : [
                    { industry: 'Hostel', monthly: '$8,000', pct: '18%', year: '$17,280' },
                    { industry: 'Tienda online', monthly: '$4,000', pct: '22%', year: '$10,560' },
                  ]).map((row, i) => (
                    <div key={i} className={`flex items-center justify-between ${i === 0 ? 'mb-[6px] pb-[6px] border-b border-[rgba(255,255,255,0.12)]' : ''}`}>
                      <span className="text-[10px] text-[rgba(255,255,255,0.65)]">{row.industry} · {row.monthly}/mes · {row.pct}</span>
                      <span className="text-[12px] font-extrabold text-[rgba(255,220,100,0.9)]">{row.year}/{isEn ? 'yr' : 'año'}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════ CALCULADORA DE COMISIONES ══════ */}
        <section className="bg-[var(--cream)] py-[80px] lg:py-[110px] relative overflow-hidden">
          <AnimatedWatermark text={isEn ? 'COMMISSION' : 'COMISIÓN'} direction="right" className="-bottom-[10px] -right-[10px] text-[clamp(70px,13vw,160px)] text-[rgba(28,24,40,0.025)] tracking-[-4px] italic" />
          <PageWrapper className="relative z-10">
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
                {isEn ? 'The financial argument' : 'El argumento financiero'}
              </div>
              <h2 className="text-[clamp(28px,3.8vw,50px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[14px]">
                {isEn ? (
                  <>Calculate how much you&apos;re<br /><GradientText>giving away every year.</GradientText></>
                ) : (
                  <>Calculá cuánto estás<br /><GradientText>regalando cada año.</GradientText></>
                )}
              </h2>
              <p className="text-[16px] leading-[1.75] text-[var(--muted)] max-w-[580px] mb-[48px]">
                {isEn
                  ? "A direct store isn't an expense. It's recovering what you already generated — without giving it to another company."
                  : 'Una tienda propia no es un gasto. Es recuperar lo que ya generaste — sin darlo a otra empresa.'}
              </p>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px] mb-[36px]">
              {(isEn ? [
                { industry: 'Hostel / Boutique Hotel', monthly: '$8,000', pct: '18%', monthly_lost: '$1,440', yearly: '$17,280', platform: 'Booking · Hostelworld' },
                { industry: 'Product store', monthly: '$4,000', pct: '22%', monthly_lost: '$880', yearly: '$10,560', platform: 'MercadoLibre · Amazon' },
                { industry: 'Courses & digital', monthly: '$3,000', pct: '15%', monthly_lost: '$450', yearly: '$5,400', platform: 'Hotmart · Teachable' },
              ] : [
                { industry: 'Hostel / Hotel boutique', monthly: '$8,000', pct: '18%', monthly_lost: '$1,440', yearly: '$17,280', platform: 'Booking · Hostelworld' },
                { industry: 'Tienda de producto', monthly: '$4,000', pct: '22%', monthly_lost: '$880', yearly: '$10,560', platform: 'MercadoLibre · Amazon' },
                { industry: 'Cursos y digital', monthly: '$3,000', pct: '15%', monthly_lost: '$450', yearly: '$5,400', platform: 'Hotmart · Teachable' },
              ]).map((example, i) => (
                <MotionWrapper key={i} type="fadeUp" delay={i * 0.08}>
                  <div className="bg-white border-[0.5px] border-[rgba(28,24,40,0.09)] rounded-[20px] p-[28px] h-full shadow-[0_6px_24px_rgba(28,24,40,0.04)] hover:shadow-[0_12px_36px_rgba(28,24,40,0.07)] hover:-translate-y-[2px] transition-all">
                    <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--muted)] mb-[14px]">{example.platform}</div>
                    <h3 className="text-[15px] font-extrabold text-[var(--dark)] mb-[16px] tracking-[-0.2px]">{example.industry}</h3>
                    <div className="flex flex-col gap-[8px] mb-[16px]">
                      <div className="flex justify-between text-[12px]">
                        <span className="text-[var(--muted)]">{isEn ? 'Monthly revenue' : 'Facturación mensual'}</span>
                        <span className="font-bold text-[var(--dark)]">{example.monthly}</span>
                      </div>
                      <div className="flex justify-between text-[12px]">
                        <span className="text-[var(--muted)]">{isEn ? 'Marketplace commission' : 'Comisión del marketplace'}</span>
                        <span className="font-bold text-[var(--mg)]">{example.pct}</span>
                      </div>
                      <div className="flex justify-between text-[12px]">
                        <span className="text-[var(--muted)]">{isEn ? 'Given away per month' : 'Regalado por mes'}</span>
                        <span className="font-bold text-[var(--mg)]">{example.monthly_lost}</span>
                      </div>
                    </div>
                    <div className="bg-[rgba(232,65,122,0.05)] border-[0.5px] border-[rgba(232,65,122,0.14)] rounded-[10px] p-[12px] text-center">
                      <span className="text-[10px] text-[var(--muted)] block mb-[2px]">{isEn ? 'Given away per year' : 'Regalado por año'}</span>
                      <span className="text-[24px] font-extrabold text-[var(--mg)] tracking-[-1px]">{example.yearly}</span>
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </div>

            <MotionWrapper type="fadeUp" delay={0.3}>
              <p className="text-center text-[14px] text-[var(--muted)] max-w-[480px] mx-auto leading-[1.7]">
                {isEn ? (
                  <>With a direct store, those numbers stay in your business.<br /><strong className="text-[var(--dark)]">The store pays for itself in the first few months.</strong></>
                ) : (
                  <>Con una tienda directa, esos números se quedan en tu negocio.<br /><strong className="text-[var(--dark)]">La tienda se paga sola en los primeros meses.</strong></>
                )}
              </p>
            </MotionWrapper>
          </PageWrapper>
        </section>

        {/* ══════ 5 ASESINOS DE CONVERSIÓN ══════ */}
        <section className="bg-[var(--dark)] py-[80px] lg:py-[110px] border-t-[0.5px] border-[rgba(247,246,242,0.06)] relative overflow-hidden">
          <AnimatedWatermark text={isEn ? 'CONVERSION' : 'CONVERSIÓN'} direction="left" className="-bottom-[10px] -left-[8px] text-[clamp(60px,10vw,140px)] text-[rgba(247,246,242,0.025)] tracking-[-4px] italic" />
          <PageWrapper className="relative z-10">
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
                {isEn ? 'What kills conversions' : 'Lo que mata las conversiones'}
              </div>
              <h2 className="text-[clamp(28px,3.8vw,48px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[14px]">
                {isEn ? (
                  <>Your store may be losing<br /><GradientText>60% of sales because of this.</GradientText></>
                ) : (
                  <>Tu tienda puede estar perdiendo<br /><GradientText>el 60% de las ventas por esto.</GradientText></>
                )}
              </h2>
              <p className="text-[16px] leading-[1.75] text-[var(--muted-l)] max-w-[520px] mb-[48px]">
                {isEn
                  ? "Most store owners have never tested their own checkout on their phone. These are the 5 most common problems — and how Ecommerce Pro solves them."
                  : 'La mayoría de los dueños de tienda nunca probaron su propio checkout en el celular. Estos son los 5 problemas más comunes — y cómo Ecommerce Pro los resuelve.'}
              </p>
            </MotionWrapper>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[12px]" staggerDelay={0.07}>
              {conversionKillers.map((card, i) => (
                <StaggerItem key={i}>
                  <div className="bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)] rounded-[20px] p-[24px] h-full hover:bg-[rgba(247,246,242,0.07)] hover:-translate-y-[2px] transition-all duration-300 group">
                    <div className="w-[42px] h-[42px] rounded-[11px] bg-[rgba(232,65,122,0.1)] border-[0.5px] border-[rgba(232,65,122,0.2)] flex items-center justify-center mb-[16px] text-[var(--mg)] transition-colors group-hover:bg-[rgba(232,65,122,0.16)]">
                      <card.Icon className="w-[20px] h-[20px]" />
                    </div>
                    <h3 className="text-[14px] font-extrabold text-[var(--cream)] mb-[8px] tracking-[-0.2px]">{card.title}</h3>
                    <p className="text-[12px] leading-[1.65] text-[var(--muted-l)]">{card.body}</p>
                  </div>
                </StaggerItem>
              ))}
              {/* Last item — CTA */}
              <StaggerItem>
                <div className="grad-bg rounded-[20px] p-[24px] h-full flex flex-col justify-between shadow-[0_8px_32px_rgba(232,65,122,0.2)]">
                  <div>
                    <h3 className="text-[15px] font-extrabold text-white mb-[10px] tracking-[-0.2px]">
                      {isEn ? 'Ecommerce Pro solves all five.' : 'Ecommerce Pro resuelve los cinco.'}
                    </h3>
                    <p className="text-[13px] leading-[1.6] text-[rgba(255,255,255,0.75)]">
                      {isEn
                        ? 'Speed, frictionless checkout, trust, abandonment recovery and automated post-purchase — all from launch day.'
                        : 'Velocidad, checkout sin fricción, confianza, recuperación de abandono y post-compra automatizado — todo desde el día del lanzamiento.'}
                    </p>
                  </div>
                  <OpenMeetingBtn className="mt-[20px] w-full py-[12px] rounded-[10px] bg-white text-[var(--mg)] text-[13px] font-bold leading-none cursor-pointer transition-all hover:bg-[rgba(255,255,255,0.9)] border-none">
                    {isEn ? 'I want my store →' : 'Quiero mi tienda →'}
                  </OpenMeetingBtn>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </PageWrapper>
        </section>

        {/* ══════ OPCIONES TÉCNICAS ══════ */}
        <section id="includes" className="bg-[var(--cream)] py-[80px] lg:py-[110px] border-t-[0.5px] border-[rgba(28,24,40,0.07)]">
          <PageWrapper>
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
                {isEn ? 'Your situation, your solution' : 'Tu situación, tu solución'}
              </div>
              <h2 className="text-[clamp(28px,3.5vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[14px]">
                {isEn ? (
                  <>The store we build<br /><GradientText>depends on your business.</GradientText></>
                ) : (
                  <>La tienda que construimos<br /><GradientText>depende de tu negocio.</GradientText></>
                )}
              </h2>
              <p className="text-[16px] leading-[1.75] text-[var(--muted)] max-w-[500px] mb-[44px]">
                {isEn
                  ? "There's no one-size-fits-all solution. There are three options — each right for a different situation."
                  : 'No hay una solución única. Hay tres opciones — cada una correcta para una situación distinta.'}
              </p>
            </MotionWrapper>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px]">
              {techOptions.map((opt, i) => (
                <MotionWrapper key={i} type="fadeUp" delay={i * 0.09}>
                  <div className={`rounded-[20px] p-[28px] h-full border-[0.5px] transition-all ${opt.best ? 'bg-[var(--dark)] border-[rgba(247,246,242,0.12)] shadow-[0_12px_48px_rgba(28,24,40,0.2)]' : 'bg-white border-[rgba(28,24,40,0.09)] shadow-[0_6px_24px_rgba(28,24,40,0.04)]'}`}>
                    {opt.best && (
                      <div className="inline-flex items-center gap-[5px] text-[9px] font-bold uppercase tracking-[0.1em] text-[var(--am)] bg-[rgba(245,166,35,0.1)] border-[0.5px] border-[rgba(245,166,35,0.25)] rounded-[20px] px-[10px] py-[4px] mb-[14px]">
                        <span className="w-[4px] h-[4px] rounded-full bg-[var(--am)]" /> {isEn ? 'Most chosen' : 'Más elegida'}
                      </div>
                    )}
                    <h3 className={`text-[15px] font-extrabold mb-[8px] tracking-[-0.2px] ${opt.best ? 'text-[var(--cream)]' : 'text-[var(--dark)]'}`}>{opt.name}</h3>
                    <div className={`text-[10px] font-bold uppercase tracking-[0.1em] mb-[14px] ${opt.best ? 'text-[rgba(247,246,242,0.4)]' : 'text-[var(--muted)]'}`}>
                      {isEn ? 'For:' : 'Para:'} {opt.for}
                    </div>
                    <div className={`text-[11px] font-bold mb-[4px] ${opt.best ? 'text-[var(--am)]' : 'text-[var(--mg)]'}`}>{isEn ? 'How' : 'Cómo'}</div>
                    <p className={`text-[13px] mb-[14px] leading-[1.5] ${opt.best ? 'text-[var(--muted-l)]' : 'text-[var(--muted)]'}`}>{opt.how}</p>
                    <div className={`text-[11px] font-bold mb-[4px] ${opt.best ? 'text-[var(--am)]' : 'text-[var(--mg)]'}`}>{isEn ? 'Why' : 'Por qué'}</div>
                    <p className={`text-[13px] leading-[1.6] ${opt.best ? 'text-[var(--muted-l)]' : 'text-[var(--muted)]'}`}>{opt.why}</p>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </PageWrapper>
        </section>

        {/* ══════ TIMELINE POST-COMPRA ══════ */}
        <section className="bg-[var(--dark)] py-[80px] lg:py-[110px] border-t-[0.5px] border-[rgba(247,246,242,0.06)] relative overflow-hidden">
          <AnimatedWatermark text={isEn ? 'AUTOMATIC' : 'AUTOMÁTICO'} direction="right" className="-bottom-[10px] -right-[10px] text-[clamp(60px,10vw,140px)] text-[rgba(247,246,242,0.025)] tracking-[-4px] italic" />
          <PageWrapper className="relative z-10">
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
                {isEn ? 'Automated post-purchase' : 'Post-compra automatizado'}
              </div>
              <h2 className="text-[clamp(28px,3.8vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[14px]">
                {isEn ? (
                  <>What happens automatically<br /><GradientText>after every sale.</GradientText></>
                ) : (
                  <>Lo que pasa automáticamente<br /><GradientText>después de cada venta.</GradientText></>
                )}
              </h2>
              <p className="text-[16px] leading-[1.75] text-[var(--muted-l)] max-w-[520px] mb-[48px]">
                {isEn
                  ? 'Every sale triggers this complete process. Without you doing anything. Without your team having to remember to send it.'
                  : 'Cada venta desencadena este proceso completo. Sin que vos hagas nada. Sin que tu equipo tenga que recordar mandarlo.'}
              </p>
            </MotionWrapper>

            <MotionWrapper type="fadeUp" delay={0.1}>
              <div className="max-w-[640px] mx-auto">
                <div className="flex flex-col gap-0">
                  {postPurchase.map((item, i) => (
                    <div key={i} className="flex gap-[16px]">
                      {/* Timeline line */}
                      <div className="flex flex-col items-center shrink-0">
                        <div className={`w-[36px] h-[36px] rounded-full flex items-center justify-center shrink-0 ${i === 0 ? 'grad-bg shadow-[0_4px_16px_rgba(232,65,122,0.25)]' : 'bg-[rgba(247,246,242,0.07)] border-[0.5px] border-[rgba(247,246,242,0.12)]'}`}>
                          <span className="text-[9px] font-extrabold text-white whitespace-nowrap">{item.time}</span>
                        </div>
                        {i < postPurchase.length - 1 && (
                          <div className="w-[1.5px] flex-1 min-h-[20px] bg-[rgba(247,246,242,0.08)] my-[3px]" />
                        )}
                      </div>
                      {/* Content */}
                      <div className={`pb-[20px] flex-1 ${i === postPurchase.length - 1 ? 'pb-0' : ''}`}>
                        <p className="text-[13px] font-bold text-[var(--cream)] mb-[3px] mt-[8px] leading-[1.3]">{item.event}</p>
                        <p className="text-[12px] text-[var(--muted-l)] leading-[1.6]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </MotionWrapper>
          </PageWrapper>
        </section>

        {/* ══════ CASO SUPERTRAMP ══════ */}
        <section className="bg-[var(--cream)] py-[80px] lg:py-[110px] border-t-[0.5px] border-[rgba(28,24,40,0.07)]">
          <PageWrapper>
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
                {isEn ? 'Real case' : 'Caso real'}
              </div>
              <h2 className="text-[clamp(28px,3.5vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[40px]">
                {isEn ? (
                  <>From 100% OTA dependency to generating<br /><GradientText>30% direct in 6 months.</GradientText></>
                ) : (
                  <>De depender 100% de OTAs a generar<br /><GradientText>el 30% directo en 6 meses.</GradientText></>
                )}
              </h2>
            </MotionWrapper>
            <CaseStudyBlock
              tag={isEn ? 'Hostel · Cusco, Peru' : 'Hostel · Cusco, Perú'}
              title={isEn ? (
                <>Supertramp stopped giving 18% of each booking to Booking and Hostelworld. <span style={{ background: 'linear-gradient(135deg,#E8417A,#F5A623)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>30% of revenue arrives direct from the website.</span></>
              ) : (
                <>Supertramp dejó de regalar el 18% de cada reserva a Booking y Hostelworld. <span style={{ background: 'linear-gradient(135deg,#E8417A,#F5A623)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>30% de su facturación llega directo desde la web.</span></>
              )}
              description={isEn
                ? '100% OTA bookings. 15-20% commission on each one. Critical mobile speed, no direct booking system, 0 positioning. We built the direct store, the cart abandonment recovery system and automatic confirmations.'
                : '100% de reservas por OTAs. 15-20% de comisión en cada una. Velocidad crítica en mobile, sin sistema de reserva directa, 0 posicionamiento. Construimos la tienda directa, el sistema de recuperación de abandono y las confirmaciones automáticas.'}
              metrics={[
                { num: '30%', label: isEn ? 'Direct revenue from website' : 'Facturación directa desde la web' },
                { num: '0%', label: isEn ? 'Commission on those bookings' : 'Comisión en esas reservas' },
                { num: '6m', label: isEn ? 'To see real results' : 'Para ver resultados reales' },
              ]}
              linkHref={isEn ? '/case-studies/supertramp' : '/casos-de-exito/supertramp'}
              linkText={isEn ? 'See the full case →' : 'Ver el caso completo →'}
              imgTag="Supertramp Hostel"
              imgNum="30%"
              imgSub={isEn ? 'direct bookings' : 'reservas directas'}
            />
          </PageWrapper>
        </section>

        {/* ══════ PARA QUIÉN ES ══════ */}
        <section className="bg-[var(--dark)] py-[80px] lg:py-[110px] border-t-[0.5px] border-[rgba(247,246,242,0.06)]">
          <PageWrapper>
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
                {isEn ? 'Self-diagnosis' : 'Autodiagnóstico'}
              </div>
              <h2 className="text-[clamp(28px,3.5vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[44px]">
                <GradientText>Ecommerce Pro</GradientText> {isEn ? 'is for you if...' : 'es para vos si...'}
              </h2>
            </MotionWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
              <MotionWrapper type="fadeLeft">
                <div className="bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.09)] rounded-[20px] p-[32px] h-full">
                  <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#1D9E75] mb-[22px] flex items-center gap-[8px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#1D9E75]" /> {isEn ? 'For you' : 'Para vos'}
                  </div>
                  <ul className="flex flex-col gap-[12px]">
                    {forYou.map((item, i) => (
                      <li key={i} className="flex items-start gap-[10px] text-[14px] text-[var(--cream)] leading-[1.5]">
                        <IconCheck size={16} color="#1D9E75" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionWrapper>
              <MotionWrapper type="fadeRight" delay={0.1}>
                <div className="bg-[rgba(247,246,242,0.025)] border-[0.5px] border-[rgba(247,246,242,0.06)] rounded-[20px] p-[32px] h-full">
                  <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-[rgba(247,246,242,0.3)] mb-[22px] flex items-center gap-[8px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[rgba(247,246,242,0.22)]" /> {isEn ? 'Another package suits you better if...' : 'Otro paquete te sirve más si...'}
                  </div>
                  <ul className="flex flex-col gap-[14px]">
                    {(isEn ? [
                      { text: 'You need an organic client channel with SEO', pack: 'Full Funnel 360', href: '/services/full-funnel-360' },
                      { text: "Your problem is lead acquisition, not direct sales", pack: 'Growth Machine', href: '/services/growth-machine' },
                      { text: "You're just starting and need the digital foundation first", pack: 'Starter Presence', href: '/services/starter-presence' },
                    ] : [
                      { text: 'Necesitás un canal orgánico de clientes con SEO', pack: 'Full Funnel 360', href: '/servicios/full-funnel-360' },
                      { text: 'Tu problema es la captación de leads, no la venta directa', pack: 'Growth Machine', href: '/servicios/growth-machine' },
                      { text: 'Recién empezás y necesitás la base digital primero', pack: 'Starter Presence', href: '/servicios/starter-presence' },
                    ]).map((item, i) => (
                      <li key={i} className="flex items-start gap-[10px] text-[14px] leading-[1.5]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="rgba(247,246,242,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px] mt-[1px] shrink-0">
                          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                        <span className="text-[var(--muted-l)]">{item.text}{' '}<a href={item.href} className="text-[var(--am)] font-bold no-underline hover:opacity-80">{isEn ? 'See' : 'Ver'} {item.pack} →</a></span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-[20px] pt-[16px] border-t-[0.5px] border-[rgba(247,246,242,0.07)]">
                    <p className="text-[12px] text-[var(--muted-l)]">
                      {isEn ? "Not sure which one fits? " : '¿No sabés cuál corresponde? '}
                      <a href={isEn ? '/free-web-audit' : '/auditoria-web-gratuita'} className="text-[var(--am)] font-bold no-underline hover:opacity-80">
                        {isEn ? 'Request the free audit →' : 'Pedí la auditoría gratuita →'}
                      </a>
                    </p>
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
                {isEn ? 'Frequently asked questions' : 'Preguntas frecuentes'}
              </div>
              <h2 className="text-[clamp(28px,3.8vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[14px]">
                {isEn ? (
                  <>What everyone asks<br /><GradientText>before taking the step.</GradientText></>
                ) : (
                  <>Lo que todo el mundo pregunta<br /><GradientText>antes de dar el paso.</GradientText></>
                )}
              </h2>
              <p className="text-[15px] leading-[1.7] text-[var(--muted-l)] max-w-[500px] mb-[44px]">
                {isEn ? 'We answer honestly.' : 'Respondemos con honestidad.'}
              </p>
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
                {(isEn ? [
                  '$0 commission per direct sale',
                  '100% your code',
                  'No platform dependency',
                  'Proposal before payment',
                ] : [
                  '$0 de comisión por venta directa',
                  'Código 100% tuyo',
                  'Sin dependencia de plataformas',
                  'Propuesta antes de cobrar',
                ]).map((item, i) => (
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
          headline={isEn ? (
            <>Every month you keep paying commission<br /><GradientText>is a month of margin given away.</GradientText></>
          ) : (
            <>Cada mes que pasás pagando comisión<br /><GradientText>es un mes de margen regalado.</GradientText></>
          )}
          subheadline={isEn
            ? '30-minute call. We tell you which technical option fits your business, how long it takes and when it starts recovering the investment.'
            : '30 minutos de llamada. Te decimos qué opción técnica corresponde a tu negocio, cuánto tarda y cuándo empieza a recuperar la inversión.'}
          mainCta={{ label: isEn ? 'I want my direct store →' : 'Quiero mi tienda directa →', href: '#' }}
          disclaimer={isEn
            ? "No commitment · We recommend the right option, not the most expensive · We respond in 2 hours"
            : 'Sin compromiso · Te recomendamos la opción correcta, no la más cara · Respondemos en 2 horas'}
          watermarkText={isEn ? 'DIRECT' : 'DIRECTO'}
          cards={[
            {
              tag: isEn ? 'I have a store but it converts poorly' : 'Tengo tienda pero convierte poco',
              title: isEn ? 'Conversion audit' : 'Auditoría de conversión',
              desc: isEn
                ? 'We review your store and tell you exactly where sales are being lost.'
                : 'Revisamos tu tienda y te decimos exactamente dónde se pierden las ventas.',
              href: isEn ? '/free-web-audit' : '/auditoria-web-gratuita',
            },
            {
              tag: isEn ? 'I want to understand my options' : 'Quiero entender mis opciones',
              title: isEn ? '5-day mini-course' : 'Mini-curso 5 días',
              desc: isEn
                ? 'What to consider before building or migrating your online store. Free.'
                : 'Qué tener en cuenta antes de construir o migrar tu tienda online. Gratis.',
              href: isEn ? '/email-course' : '/curso-web-gratis',
            },
            {
              tag: isEn ? 'I know what I want' : 'Ya sé lo que quiero',
              title: isEn ? 'Technical call' : 'Llamada técnica',
              desc: isEn
                ? '30 minutes. We evaluate your situation and tell you the right option for your business.'
                : '30 minutos. Evaluamos tu situación y te decimos la opción correcta para tu negocio.',
              href: '#ctaf',
            },
          ]}
        />
      </main>

      <Footer
        variant="full"
        brandName="Vacaré Digital Solutions"
        brandDesc={tLayout('Footer.brandDesc')}
        copyrightText={tLayout('Footer.copyright')}
        langText={tLayout('Footer.lang')}
        columns={[
          { title: isEn ? 'Services' : 'Servicios', links: [
            { label: 'Starter Presence', href: `/${isEn ? 'services' : 'servicios'}/starter-presence` },
            { label: 'Growth Machine', href: `/${isEn ? 'services' : 'servicios'}/growth-machine` },
            { label: 'Full Funnel 360', href: `/${isEn ? 'services' : 'servicios'}/full-funnel-360` },
            { label: 'Ecommerce Pro', href: `/${isEn ? 'services' : 'servicios'}/ecommerce-pro` },
            { label: 'Automation Retainer', href: `/${isEn ? 'services' : 'servicios'}/automation-retainer` },
          ]},
          { title: isEn ? 'Free' : 'Gratuito', links: [
            { label: isEn ? 'Web Audit' : 'Auditoría web', href: isEn ? '/free-web-audit' : '/auditoria-web-gratuita' },
            { label: isEn ? '5-day course' : 'Mini-curso 5 días', href: isEn ? '/email-course' : '/curso-web-gratis' },
          ]},
          { title: isEn ? 'Company' : 'Empresa', links: [
            { label: isEn ? 'All services' : 'Todos los servicios', href: isEn ? '/services' : '/servicios' },
            { label: isEn ? 'Case studies' : 'Casos de éxito', href: '/#case' },
            { label: isEn ? 'Privacy' : 'Privacidad', href: '#' },
          ]},
        ]}
      />
      </HomeClient>
    </>
  );
}
