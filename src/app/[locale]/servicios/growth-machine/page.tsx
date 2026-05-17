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
      ? 'Growth Machine — Automated Lead Capture & Nurturing System | Vacaré'
      : 'Growth Machine — Sistema Automatizado de Captación de Leads | Vacaré',
    description: isEn
      ? 'n8n automations + strategic website + email nurturing + automated scheduling. Your business captures and qualifies leads while you sleep. Free 30-minute call.'
      : 'Automatizaciones n8n + web estratégica + nurturing por email + agendamiento automático. Tu negocio captura y califica leads mientras dormís. Llamada gratuita de 30 minutos.',
    alternates: {
      canonical: isEn
        ? 'https://vacaredigitalsolutions.com/en/services/growth-machine'
        : 'https://vacaredigitalsolutions.com/es/servicios/growth-machine',
    },
    openGraph: {
      title: 'Growth Machine — Vacaré Digital Solutions',
      description: isEn
        ? 'Your leads go cold before you can respond. Growth Machine captures, nurtures and qualifies them automatically.'
        : 'Tus leads se enfrían antes de poder atenderlos. Growth Machine los captura, nutre y califica de forma autónoma.',
    },
  };
}

// ─── Icon components ───────────────────────────────────────────────────────
function IconLayers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
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
function IconCreditCard() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  );
}
function IconBarChart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}
function IconDroplet({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}
function IconUsers({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function IconClock({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function IconBulb() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--mg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
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
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────
const INCLUDES = [
  {
    Icon: IconLayers,
    what: 'Web estratégica — diseñada para convertir, no para decorar',
    means: 'No un folleto digital. Cada sección tiene un CTA, cada palabra está escrita sobre los puntos de dolor de tu buyer persona. El objetivo es uno: que el visitante deje sus datos o agende.',
  },
  {
    Icon: IconMail,
    what: 'Lead magnet + 5 emails que llevan al prospecto de interesado a listo',
    means: 'Un recurso de valor (PDF, checklist, guía corta) que captura el email. Luego, 5 emails automatizados en 7 días — cada uno diseñado para responder una objeción distinta y acercar a la conversación.',
  },
  {
    Icon: IconCalendar,
    what: 'Agendamiento automático — los prospectos eligen su horario sin vos',
    means: 'Integración de cal.com. El prospecto ve tu disponibilidad, elige el horario y confirma. Vos recibís la notificación con los datos. Sin "¿el martes a las 3?" por WhatsApp.',
  },
  {
    Icon: IconZap,
    what: '3 a 5 flujos en n8n — el sistema que trabaja cuando vos no estás',
    means: 'Automatizaciones que conectan tu web, tu email, tu WhatsApp y tu calendario. Cuando llega un lead: notificación inmediata, email de bienvenida, seguimiento programado. El sistema trabaja a las 2am.',
  },
  {
    Icon: IconCreditCard,
    what: 'Integración de pagos — cobrás sin fricción, el onboarding arranca solo',
    means: 'Si vendés servicios online, Stripe integrado en el flujo. El pago activa automáticamente el proceso de onboarding. Sin enviar links de pago manual ni confirmar transferencias.',
  },
  {
    Icon: IconBarChart,
    what: 'Dashboard en tiempo real — sabés de dónde vienen y cuántos convierten',
    means: 'Un único lugar con cuántos leads entraron, desde qué fuente, cuántos agendaron y cuántos convirtieron. Sin abrir 5 herramientas distintas. Sin adivinar qué está funcionando.',
  },
];

const TIMELINE = [
  {
    stage: 'Visita la web',
    without: 'Sale sin dejar datos — no hay forma de volver a contactarlo',
    with: 'Descarga el lead magnet, deja su email, entra al sistema',
  },
  {
    stage: 'Primer contacto',
    without: 'Manual, cuando tenés tiempo — a veces horas o días después',
    with: 'Email automático en 5 minutos, mientras la intención está en su pico',
  },
  {
    stage: 'Nurturing',
    without: 'No existe — o un mensaje de WhatsApp que mandás si te acordás',
    with: 'Secuencia de 5 emails en 7 días, cada uno con un propósito específico',
  },
  {
    stage: 'Agendamiento',
    without: '"¿El martes a las 3?" — 4 mensajes para acordar un horario',
    with: 'Link de cal.com en el último email — el prospecto elige solo',
  },
  {
    stage: 'Seguimiento',
    without: 'Hoja de cálculo o memoria — inevitablemente se pierde alguno',
    with: 'Dashboard con estado de cada lead en tiempo real',
  },
];

const FAQ_ITEMS = [
  {
    q: '¿Qué pasa si no soy técnico y no entiendo n8n?',
    a: 'No necesitás entenderlo — ni aprender nada técnico. Nosotros construimos todos los flujos, los documentamos con capturas y los probamos antes de entregar. Si algo falla después del lanzamiento, lo arreglamos. Es nuestro sistema, no tuyo — hasta que esté funcionando perfecto.',
  },
  {
    q: '¿Cuánto tarda en dar resultados?',
    a: 'El sistema captura leads desde el día del lanzamiento. Los primeros resultados de nurturing se ven en la primera semana — si alguien se suscribe al lead magnet el lunes, el viernes ya recibió 3 emails automatizados. El primer lead calificado suele aparecer en los primeros 7-14 días de operación.',
  },
  {
    q: '¿Puedo empezar con Growth Machine si ya tengo una web?',
    a: 'Sí. Podemos construir el sistema de captación y automatización sobre tu web actual, sin tocar nada del diseño si no hace falta. Si la web tiene problemas técnicos que afectan la conversión, te lo decimos y lo discutimos — pero no es condición para empezar.',
  },
  {
    q: '¿Qué herramientas usa el sistema?',
    a: 'n8n para automatizaciones, cal.com para agendamiento, Stripe para pagos (si aplica), GA4 + Looker Studio para métricas. Son herramientas open source o de bajo costo — sin licencias caras que vos tengas que pagar mes a mes. Todo documentado. Todo tuyo.',
  },
  {
    q: '¿Voy a depender de ustedes para que funcione?',
    a: 'No. Al terminar el proyecto te entregamos todos los accesos, credenciales y documentación. Si el día de mañana querés que lo gestione otra persona o agencia, podés hacerlo sin perder nada. El sistema es de tu negocio, no nuestro.',
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default async function GrowthMachinePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tLayout = await getTranslations({ locale, namespace: 'Layout' });

  const BASE = 'https://vacaredigitalsolutions.com';
  const isEn = locale === 'en';
  const svcPath = isEn ? `${BASE}/en/services/growth-machine` : `${BASE}/es/servicios/growth-machine`;

  return (
    <>
      <ServiceJsonLd
        url={svcPath}
        name="Growth Machine"
        description={isEn
          ? 'n8n automations + strategic website + email nurturing + automated scheduling. Your business captures and qualifies leads while you sleep.'
          : 'Automatizaciones n8n + web estratégica + nurturing por email + agendamiento automático. Tu negocio captura y califica leads mientras dormís.'}
        price="3000"
      />
      <BreadcrumbJsonLd items={[
        { name: isEn ? 'Home' : 'Inicio', item: `${BASE}/${locale}` },
        { name: isEn ? 'Services' : 'Servicios', item: isEn ? `${BASE}/en/services` : `${BASE}/es/servicios` },
        { name: 'Growth Machine', item: svcPath },
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
          <div className="absolute top-0 right-0 w-[560px] h-[560px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.09) 0%, transparent 65%)' }} />
          <div className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(232,65,122,0.05) 0%, transparent 65%)' }} />
          <AnimatedWatermark text="GROWTH" direction="left" className="bottom-[-20px] left-[-8px] text-[clamp(80px,13vw,170px)] text-[rgba(247,246,242,0.02)] tracking-[-5px] italic" />

          <div className="flex flex-col lg:flex-row w-full">
            {/* Left */}
            <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 lg:px-[52px] py-[72px] relative z-10">
              <MotionWrapper type="fadeUp">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-[8px] text-[11px] text-[rgba(247,246,242,0.3)] mb-[28px]">
                  <a href="/" className="hover:text-[rgba(247,246,242,0.6)] transition-colors no-underline">Inicio</a>
                  <span>/</span>
                  <a href="/servicios" className="hover:text-[rgba(247,246,242,0.6)] transition-colors no-underline">Servicios</a>
                  <span>/</span>
                  <span className="text-[var(--am)] font-semibold">Growth Machine</span>
                </nav>

                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[20px]">
                  <i className="w-[18px] h-[1.5px] bg-[var(--am)] block" />
                  Paquete 02 · Sistema de captación automatizado
                </div>

                <h1 className="text-[clamp(34px,4.5vw,58px)] font-extrabold leading-[1.07] tracking-[-2px] text-[var(--cream)] mb-[18px]">
                  Tu negocio tiene leads.<br />El problema es que<br />
                  <GradientText>se enfrían antes de que llegués.</GradientText>
                </h1>

                <p className="text-[16px] leading-[1.75] text-[var(--muted-l)] max-w-[460px] mb-[28px]">
                  Growth Machine construye el sistema que captura, nutre y califica leads de forma autónoma. Vos recibís el prospecto listo para cerrar — el sistema hace el resto.
                </p>

                {/* 3-bullet outcomes */}
                <ul className="flex flex-col gap-[10px] mb-[36px] max-w-[440px]">
                  {[
                    'Leads capturados y nutridos solos — mientras dormís',
                    'Reuniones agendadas automáticamente, sin coordinar por WhatsApp',
                    'Dashboard con estado de cada lead en tiempo real',
                  ].map((b, i) => (
                    <li key={i} className="flex items-start gap-[10px] text-[14px] text-[var(--cream)]">
                      <span className="w-[20px] h-[20px] rounded-full grad-bg flex items-center justify-center shrink-0 mt-[1px]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-[10px] h-[10px]">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="leading-[1.45]">{b}</span>
                    </li>
                  ))}
                </ul>
              </MotionWrapper>

              <MotionWrapper type="fadeUp" delay={0.15}>
                <div className="flex flex-wrap gap-[12px] mb-[28px]">
                  <OpenMeetingBtn className="px-[28px] py-[15px] rounded-[10px] grad-bg text-white text-[15px] font-bold leading-none cursor-pointer transition-all hover:-translate-y-[1px] hover:shadow-[0_12px_32px_rgba(232,65,122,0.35)] border-none">
                    Quiero mi sistema de captación →
                  </OpenMeetingBtn>
                  <a href="#como-funciona" className="px-[24px] py-[15px] rounded-[10px] border-[1.5px] border-[rgba(247,246,242,0.15)] text-[var(--cream)] text-[15px] font-bold leading-none no-underline inline-flex items-center transition-all hover:border-[rgba(247,246,242,0.38)] hover:-translate-y-[1px]">
                    Ver cómo funciona ↓
                  </a>
                </div>
                <p className="text-[12px] text-[rgba(247,246,242,0.3)] font-medium">
                  Llamada gratuita · Sin compromiso · Sistema funcionando en menos de 30 días
                </p>
              </MotionWrapper>
            </div>

            {/* Right — gradient panel */}
            <div className="w-full lg:w-[45%] relative overflow-hidden" style={{ background: 'linear-gradient(145deg,#F5A623 0%,#F07030 48%,#E8417A 100%)' }}>
              <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")" }} />
              {/* Geometric decorations */}
              <div className="absolute top-[22px] left-[18px] w-[72px] h-[72px] rounded-full border-[1.5px] border-[rgba(255,255,255,0.18)] pointer-events-none" />
              <div className="absolute top-[46px] left-[42px] w-[34px] h-[34px] rounded-full border-[1px] border-[rgba(255,255,255,0.1)] pointer-events-none" />
              <div className="absolute bottom-[52px] left-[20px] w-[80px] h-[80px] border-[1.5px] border-[rgba(255,255,255,0.12)] rotate-[18deg] pointer-events-none" />
              <div className="absolute top-[12px] right-[16px] w-[48px] h-[48px] border-[1.5px] border-[rgba(255,255,255,0.15)] rotate-45 pointer-events-none" />
              <div className="absolute top-[28px] right-[32px] w-[22px] h-[22px] border-[1px] border-[rgba(255,255,255,0.08)] rotate-45 pointer-events-none" />
              <div className="absolute top-[20%] right-[22px] w-[7px] h-[7px] rounded-full bg-[rgba(255,255,255,0.4)] pointer-events-none" />
              <div className="absolute top-[35%] right-[46px] w-[4px] h-[4px] rounded-full bg-[rgba(255,255,255,0.22)] pointer-events-none" />
              <div className="absolute bottom-[28%] right-[30px] w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.28)] pointer-events-none" />
              <div className="absolute text-[clamp(90px,14vw,180px)] font-extrabold italic text-[rgba(255,255,255,0.07)] leading-[0.9] tracking-[-5px] pointer-events-none bottom-[-10px] right-[-10px]">02</div>

              <div className="absolute inset-0 z-[2] flex flex-col justify-center px-[32px] lg:px-[44px] py-[40px] gap-[10px]">

                {/* Flow diagram */}
                <div className="bg-[rgba(255,255,255,0.12)] backdrop-blur-[14px] border-[0.5px] border-[rgba(255,255,255,0.22)] rounded-[14px] p-[18px_16px]">
                  <div className="text-[9px] font-bold text-[rgba(255,255,255,0.55)] uppercase tracking-[0.08em] mb-[12px]">Flujo automatizado · Growth Machine</div>
                  <div className="flex flex-col gap-[6px]">
                    {[
                      { step: '01', label: 'Visita la web', sub: 'Ve el lead magnet' },
                      { step: '02', label: 'Descarga y deja email', sub: '→ entra al sistema' },
                      { step: '03', label: 'Secuencia de 5 emails', sub: 'En 7 días, automático' },
                      { step: '04', label: 'Agenda la reunión', sub: 'Elige su horario solo' },
                      { step: '05', label: 'Vos cerrás', sub: 'Prospecto calificado' },
                    ].map((item, i, arr) => (
                      <div key={i}>
                        <div className="flex items-center gap-[10px]">
                          <div className="w-[26px] h-[26px] rounded-full bg-[rgba(255,255,255,0.18)] border-[0.5px] border-[rgba(255,255,255,0.3)] flex items-center justify-center shrink-0">
                            <span className="text-[9px] font-extrabold text-white">{item.step}</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-[11px] font-bold text-white leading-[1.2]">{item.label}</p>
                            <p className="text-[9px] text-[rgba(255,255,255,0.6)]">{item.sub}</p>
                          </div>
                          {i === arr.length - 1 && (
                            <div className="w-[18px] h-[18px] rounded-full bg-[rgba(255,255,255,0.25)] flex items-center justify-center shrink-0">
                              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-[9px] h-[9px]">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                          )}
                        </div>
                        {i < arr.length - 1 && (
                          <div className="ml-[12px] w-[2px] h-[8px] bg-[rgba(255,255,255,0.2)] rounded-full mt-[2px] mb-[0px]" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3 stats */}
                <div className="grid grid-cols-3 gap-[8px]">
                  {[
                    { num: '7d', label: 'Leads nutridos' },
                    { num: '5min', label: '1er email auto' },
                    { num: '0', label: 'Coord. manuales' },
                  ].map((s, i) => (
                    <div key={i} className="bg-[rgba(255,255,255,0.13)] backdrop-blur-[14px] border-[0.5px] border-[rgba(255,255,255,0.22)] rounded-[12px] p-[12px_10px] text-center">
                      <span className="text-[22px] font-extrabold text-white tracking-[-1px] leading-none block mb-[2px]">{s.num}</span>
                      <span className="text-[9px] font-bold text-[rgba(255,255,255,0.6)] leading-[1.3]">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* "2am" insight */}
                <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] border-[0.5px] border-[rgba(255,255,255,0.18)] rounded-[12px] p-[12px_14px]">
                  <div className="text-[9px] font-bold text-[rgba(255,255,255,0.45)] uppercase tracking-[0.08em] mb-[6px]">Actividad a las 2:04 AM</div>
                  <div className="bg-[rgba(255,255,255,0.12)] border-[0.5px] border-[rgba(255,255,255,0.2)] rounded-[8px] p-[8px_11px] flex items-start gap-[8px]">
                    <div className="w-[16px] h-[16px] rounded-full bg-[rgba(255,255,255,0.3)] flex items-center justify-center shrink-0 mt-[1px]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[8px] h-[8px]">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] text-white font-bold leading-[1.3] mb-[1px]">Nuevo lead calificado</p>
                      <p className="text-[10px] text-[rgba(255,255,255,0.65)] leading-[1.35]">Reunión agendada — mañana 10am</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ══════ EL BALDE CON AGUJEROS ══════ */}
        <section className="bg-[var(--cream)] py-[80px] lg:py-[110px] relative overflow-hidden">
          <AnimatedWatermark text="AGUJEROS" direction="right" className="-bottom-[10px] -right-[10px] text-[clamp(70px,13vw,160px)] text-[rgba(28,24,40,0.025)] tracking-[-4px] italic" />
          <PageWrapper className="relative z-10">
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
                El diagnóstico
              </div>
              <h2 className="text-[clamp(28px,3.8vw,50px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[14px]">
                ¿Cuánto vale un lead<br />
                <GradientText>que se enfría?</GradientText>
              </h2>
              <p className="text-[16px] leading-[1.75] text-[var(--muted)] max-w-[580px] mb-[52px]">
                La mayoría de los negocios trabajan duro para atraer visitantes — con publicidad, redes, boca a boca. Pero no tienen ningún sistema para convertir ese interés en una conversación real. Los visitantes llegan, no encuentran razón para quedarse, y desaparecen.
              </p>
            </MotionWrapper>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[24px] mb-[44px]">
              {/* Visual "balde" */}
              <MotionWrapper type="fadeLeft">
                <div className="bg-white rounded-[24px] border-[0.5px] border-[rgba(28,24,40,0.08)] p-[32px] shadow-[0_8px_40px_rgba(28,24,40,0.06)] h-full">
                  <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[var(--muted)] mb-[20px]">Tu negocio hoy</p>
                  {/* Balde visual */}
                  <div className="relative mx-auto w-[220px]">
                    {/* Fuentes arriba */}
                    <div className="flex justify-around items-end mb-[12px] px-[10px]">
                      {['Publicidad', 'Referidos', 'Redes'].map((src) => (
                        <div key={src} className="flex flex-col items-center gap-[6px]">
                          <span className="text-[10px] font-bold text-[var(--muted)] text-center">{src}</span>
                          <div className="w-[2px] h-[24px] bg-gradient-to-b from-[rgba(232,65,122,0.1)] to-[var(--mg)] rounded-full relative">
                            <div className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-[6px] h-[6px] border-b-[2px] border-r-[2px] border-[var(--mg)] rotate-45" />
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Balde */}
                    <div className="relative bg-white border-[1.5px] border-[rgba(28,24,40,0.15)] shadow-[inset_0_-12px_24px_rgba(28,24,40,0.03)] rounded-b-[40px] rounded-t-[8px] h-[100px] flex flex-col items-center justify-center">
                      <p className="text-[12px] font-extrabold text-[var(--dark)] leading-[1.3]">Visitas &amp; leads</p>
                      <p className="text-[10px] text-[var(--muted)] mt-[4px]">sin sistema de nurturing</p>

                      {/* Agua adentro */}
                      <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-[rgba(232,65,122,0.05)] rounded-b-[40px] pointer-events-none" />

                      {/* Agujeros */}
                      {[
                        { left: '22%', bottom: '10px', label: 'Sin seguimiento' },
                        { left: '50%', bottom: '-2px', label: 'Sin nurturing' },
                        { left: '78%', bottom: '10px', label: 'Sin agenda' },
                      ].map((hole, i) => (
                        <div key={i} className="absolute flex flex-col items-center" style={{ left: hole.left, bottom: hole.bottom, transform: 'translateX(-50%) translateY(100%)' }}>
                          <div className="w-[3px] h-[24px] bg-gradient-to-b from-[var(--mg)] to-[rgba(232,65,122,0.05)] rounded-full opacity-80" />
                          <span className="text-[10px] text-[var(--mg)] font-bold whitespace-nowrap mt-[4px] drop-shadow-sm">{hole.label}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-center text-[11px] text-[var(--muted)] mt-[60px] font-medium">Los leads se escurren por los agujeros</p>
                  </div>
                </div>
              </MotionWrapper>

              {/* 3 síntomas */}
              <MotionWrapper type="fadeRight" delay={0.1}>
                <div className="flex flex-col gap-[12px] h-full">
                  {[
                    {
                      Icon: IconDroplet,
                      title: 'Tenés tráfico, pero pocas consultas',
                      body: 'Visitantes que llegan y se van. Sin un lead magnet ni un incentivo para dejar datos, el 97% sale para siempre. Ese tráfico es dinero que ya gastaste en conseguirlo.',
                    },
                    {
                      Icon: IconClock,
                      title: 'Las consultas se enfrían si no respondés rápido',
                      body: 'Responder un lead en 5 minutos tiene 21 veces más probabilidad de conversión que en 30 minutos. Si tu respuesta depende de que vos estés mirando el teléfono, perdés.',
                    },
                    {
                      Icon: IconUsers,
                      title: 'No podés seguir a todos — el crecimiento tiene techo',
                      body: 'Cuando el seguimiento es manual, el límite de clientes es el límite de horas. Growth Machine rompe ese techo: el sistema sigue a todos, al mismo tiempo, sin cansarse.',
                    },
                  ].map((card, i) => (
                    <div key={i} className="bg-white border-[0.5px] border-[rgba(28,24,40,0.09)] rounded-[16px] p-[20px] hover:shadow-[0_8px_28px_rgba(28,24,40,0.07)] hover:-translate-y-[2px] transition-all duration-300 group">
                      <div className="flex items-start gap-[14px]">
                        <div className="w-[38px] h-[38px] rounded-[10px] bg-[rgba(232,65,122,0.07)] border-[0.5px] border-[rgba(232,65,122,0.14)] flex items-center justify-center shrink-0 text-[var(--mg)] transition-colors group-hover:bg-[rgba(232,65,122,0.12)]">
                          <card.Icon className="w-[18px] h-[18px]" />
                        </div>
                        <div>
                          <h3 className="text-[14px] font-extrabold text-[var(--dark)] mb-[6px] leading-[1.3]">{card.title}</h3>
                          <p className="text-[12px] leading-[1.6] text-[var(--muted)]">{card.body}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </MotionWrapper>
            </div>

            <MotionWrapper type="fadeUp" delay={0.3}>
              <div className="bg-gradient-to-r from-[rgba(245,166,35,0.06)] to-[rgba(232,65,122,0.04)] border-[0.5px] border-[rgba(245,166,35,0.2)] rounded-[16px] p-[20px_24px] flex items-start gap-[14px] max-w-[680px]">
                <div className="w-[36px] h-[36px] rounded-[9px] bg-[rgba(245,166,35,0.1)] border-[0.5px] border-[rgba(245,166,35,0.25)] flex items-center justify-center shrink-0">
                  <IconBulb />
                </div>
                <p className="text-[14px] text-[var(--dark)] leading-[1.6]">
                  <strong>Growth Machine tapa el balde.</strong> Captura el email antes de que se vaya, envía el primer email en 5 minutos, nutre al prospecto en 7 días, y agenda la reunión sin que vos hagas nada.
                </p>
              </div>
            </MotionWrapper>
          </PageWrapper>
        </section>

        {/* ══════ CÓMO FUNCIONA — TIMELINE ANTES / DESPUÉS ══════ */}
        <section id="como-funciona" className="bg-[var(--dark)] py-[80px] lg:py-[110px] relative overflow-hidden border-t-[0.5px] border-[rgba(247,246,242,0.06)]">
          <AnimatedWatermark text="SISTEMA" direction="left" className="-bottom-[10px] -left-[8px] text-[clamp(70px,13vw,160px)] text-[rgba(247,246,242,0.025)] tracking-[-4px] italic" />
          <PageWrapper className="relative z-10">
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
                El sistema
              </div>
              <h2 className="text-[clamp(28px,3.8vw,48px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[14px]">
                Lo que pasa desde que alguien<br /><GradientText>te descubre hasta que te contrata.</GradientText>
              </h2>
              <p className="text-[16px] leading-[1.75] text-[var(--muted-l)] max-w-[520px] mb-[48px]">
                Hoy cada etapa depende de que alguien la active manualmente. Growth Machine las automatiza todas.
              </p>
            </MotionWrapper>

            <MotionWrapper type="fadeUp" delay={0.1}>
              <div className="rounded-[20px] overflow-hidden border-[0.5px] border-[rgba(247,246,242,0.08)]">
                {/* Header */}
                <div className="grid grid-cols-[1fr_1.1fr_1.1fr] bg-[rgba(247,246,242,0.06)] border-b-[0.5px] border-[rgba(247,246,242,0.08)]">
                  <div className="px-[20px] py-[14px]">
                    <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[rgba(247,246,242,0.4)]">Etapa</span>
                  </div>
                  <div className="px-[20px] py-[14px] border-l-[0.5px] border-[rgba(247,246,242,0.06)]">
                    <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[rgba(247,246,242,0.25)]">Sin sistema</span>
                  </div>
                  <div className="px-[20px] py-[14px] border-l-[0.5px] border-[rgba(247,246,242,0.06)]">
                    <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--am)]">Con Growth Machine</span>
                  </div>
                </div>
                {/* Rows */}
                {TIMELINE.map((row, i) => (
                  <div key={i} className={`grid grid-cols-[1fr_1.1fr_1.1fr] border-b-[0.5px] border-[rgba(247,246,242,0.06)] ${i % 2 === 0 ? 'bg-[rgba(247,246,242,0.02)]' : 'bg-transparent'} hover:bg-[rgba(247,246,242,0.04)] transition-colors`}>
                    <div className="px-[20px] py-[16px]">
                      <span className="text-[13px] font-bold text-[var(--cream)] leading-[1.4]">{row.stage}</span>
                    </div>
                    <div className="px-[20px] py-[16px] border-l-[0.5px] border-[rgba(247,246,242,0.06)]">
                      <div className="flex items-start gap-[8px]">
                        <IconX size={13} color="rgba(247,246,242,0.22)" />
                        <span className="text-[12px] text-[rgba(247,246,242,0.4)] leading-[1.5]">{row.without}</span>
                      </div>
                    </div>
                    <div className="px-[20px] py-[16px] border-l-[0.5px] border-[rgba(247,246,242,0.06)]">
                      <div className="flex items-start gap-[8px]">
                        <IconCheck size={13} color="#1D9E75" />
                        <span className="text-[12px] text-[var(--cream)] leading-[1.5]">{row.with}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </MotionWrapper>

            {/* "2am" narrative */}
            <MotionWrapper type="fadeUp" delay={0.2}>
              <div className="mt-[32px] bg-[rgba(245,166,35,0.07)] border-[0.5px] border-[rgba(245,166,35,0.18)] rounded-[16px] p-[24px_28px] max-w-[720px]">
                <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--am)] mb-[10px]">Esto es lo que pasa mientras dormís</div>
                <p className="text-[14px] text-[var(--cream)] leading-[1.7]">
                  Son las 2am. Alguien en España busca un hostel en Cusco. Encuentra tu web. Descarga la guía gratuita. A las 2:05am recibe un email automático de bienvenida. A las 2:10am tiene el link de cal.com en la bandeja. <strong className="text-[var(--am)]">A las 9am vos abrís el mail y tenés una reunión agendada para mañana.</strong> Vos no hiciste nada.
                </p>
              </div>
            </MotionWrapper>
          </PageWrapper>
        </section>

        {/* ══════ QUÉ INCLUYE ══════ */}
        <section id="includes" className="bg-[var(--cream)] py-[80px] lg:py-[110px] relative overflow-hidden border-t-[0.5px] border-[rgba(28,24,40,0.07)]">
          <AnimatedWatermark text="INCLUYE" direction="right" className="-bottom-[10px] -right-[10px] text-[clamp(70px,13vw,160px)] text-[rgba(28,24,40,0.025)] tracking-[-4px] italic" />
          <PageWrapper className="relative z-10">
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
                Los 6 componentes
              </div>
              <h2 className="text-[clamp(28px,3.8vw,48px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[14px]">
                No una lista de features.<br /><GradientText>Lo que cada uno hace por tu negocio.</GradientText>
              </h2>
              <p className="text-[16px] leading-[1.75] text-[var(--muted)] max-w-[540px] mb-[48px]">
                Cada componente existe para resolver una etapa del proceso de captación. Juntos forman el sistema completo.
              </p>
            </MotionWrapper>

            <StaggerContainer className="flex flex-col gap-[8px]" staggerDelay={0.07}>
              {INCLUDES.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-0 bg-white border-[0.5px] border-[rgba(28,24,40,0.09)] rounded-[16px] overflow-hidden hover:shadow-[0_8px_28px_rgba(28,24,40,0.07)] hover:-translate-y-[2px] transition-all duration-200 group">
                    <div className="p-[20px_24px] flex items-center gap-[14px] border-b-[0.5px] lg:border-b-0 lg:border-r-[0.5px] border-[rgba(28,24,40,0.07)]">
                      <div className="w-[38px] h-[38px] rounded-[9px] grad-bg flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(232,65,122,0.2)]">
                        <item.Icon />
                      </div>
                      <p className="text-[14px] font-bold text-[var(--dark)] leading-[1.4]">{item.what}</p>
                    </div>
                    <div className="p-[20px_24px] flex items-center bg-[rgba(28,24,40,0.015)]">
                      <p className="text-[13px] leading-[1.65] text-[var(--muted)]">
                        <span className="text-[var(--mg)] font-extrabold mr-[6px]">→</span>
                        {item.means}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </PageWrapper>
        </section>

        {/* ══════ CASO SUPERTRAMP ══════ */}
        <section className="bg-[var(--dark)] py-[80px] lg:py-[110px] border-t-[0.5px] border-[rgba(247,246,242,0.06)]">
          <PageWrapper>
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
                Caso real
              </div>
              <h2 className="text-[clamp(28px,3.5vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[40px]">
                Así se ve un negocio<br /><GradientText>cuando tiene el sistema.</GradientText>
              </h2>
            </MotionWrapper>
            <CaseStudyBlock
              tag="Hostel · Cusco, Perú"
              title={<>Supertramp pasó de depender 100% de OTAs a generar el <span style={{ background: 'linear-gradient(135deg,#E8417A,#F5A623)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>30% de su facturación directa</span> en 6 meses.</>}
              description="Velocidad crítica en mobile, sin CTAs de reserva directa, 0 posicionamiento en keywords de conversión. Construimos la web, el sistema de reserva directa y las automatizaciones de seguimiento. El resultado habló solo."
              metrics={[
                { num: '30%', label: 'Facturación directa (antes: 0%)' },
                { num: '6m', label: 'Para ver resultados' },
                { num: '20%', label: 'Comisión OTA eliminada por reserva' },
              ]}
              linkHref="/case-studies/supertramp"
              linkText="Ver el caso completo →"
              imgSrc="/images/home_06_case_hostel.jpg"
              imgTag="Supertramp Hostel"
              imgNum="30%"
              imgSub="facturación directa"
            />
          </PageWrapper>
        </section>

        {/* ══════ ROI CONCRETO ══════ */}
        <section className="bg-[var(--cream)] py-[80px] lg:py-[110px] border-t-[0.5px] border-[rgba(28,24,40,0.07)] relative overflow-hidden">
          <AnimatedWatermark text="ROI" direction="left" className="-bottom-[10px] -left-[8px] text-[clamp(70px,13vw,160px)] text-[rgba(28,24,40,0.025)] tracking-[-4px] italic" />
          <PageWrapper className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[28px] items-center">
              <MotionWrapper type="fadeLeft">
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                  <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
                  El argumento financiero
                </div>
                <h2 className="text-[clamp(26px,3.5vw,44px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[20px]">
                  No es un gasto.<br /><GradientText>Es una inversión con retorno calculable.</GradientText>
                </h2>
                <p className="text-[15px] leading-[1.75] text-[var(--muted)] mb-[24px]">
                  Si un cliente nuevo te genera en promedio $500 USD de margen, y el sistema recupera 3 leads por mes que antes se perdían... el sistema se paga solo en el primer mes.
                </p>
                <p className="text-[13px] text-[var(--muted)] leading-[1.6] max-w-[400px]">
                  Un asistente de ventas junior cuesta $600–1,200 USD/mes. El sistema hace el trabajo de seguimiento de leads 24/7, nunca se enferma, no se va de vacaciones y no comete errores de copy.
                </p>
              </MotionWrapper>

              <MotionWrapper type="fadeRight" delay={0.1}>
                <div className="bg-[var(--dark)] rounded-[24px] p-[32px] border-[0.5px] border-[rgba(247,246,242,0.09)] shadow-[0_24px_80px_rgba(28,24,40,0.14)]">
                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--am)] mb-[22px]">Calculadora de retorno</p>
                  <div className="flex flex-col gap-[16px]">
                    {[
                      { label: 'Ticket promedio por cliente', value: '$500 USD' },
                      { label: 'Leads recuperados por mes (estimado)', value: '3 → 5' },
                      { label: 'Costo mensual de no tener sistema', value: '$1,500 USD' },
                      { label: 'Meses para recuperar la inversión', value: '~2 meses' },
                    ].map((row, i) => (
                      <div key={i} className={`flex items-center justify-between gap-[16px] ${i < 3 ? 'pb-[16px] border-b-[0.5px] border-[rgba(247,246,242,0.07)]' : 'pt-[4px]'}`}>
                        <span className="text-[13px] text-[var(--muted-l)] leading-[1.4] flex-1">{row.label}</span>
                        <span className={`text-[15px] font-extrabold whitespace-nowrap ${i === 3 ? 'text-[var(--am)]' : 'text-[var(--cream)]'}`}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-[24px] pt-[18px] border-t-[0.5px] border-[rgba(247,246,242,0.09)]">
                    <p className="text-[12px] text-[rgba(247,246,242,0.3)] leading-[1.6]">
                      * Estimación conservadora basada en proyectos reales. Tu número exacto lo calculamos en la llamada.
                    </p>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </PageWrapper>
        </section>

        {/* ══════ PARA QUIÉN ES ══════ */}
        <section className="bg-[var(--dark)] py-[80px] lg:py-[110px] border-t-[0.5px] border-[rgba(247,246,242,0.06)]">
          <PageWrapper>
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
                Autodiagnóstico
              </div>
              <h2 className="text-[clamp(28px,3.5vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[44px]">
                <GradientText>Growth Machine</GradientText> es para vos si...
              </h2>
            </MotionWrapper>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
              <MotionWrapper type="fadeLeft">
                <div className="bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.09)] rounded-[20px] p-[32px] h-full">
                  <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#1D9E75] mb-[22px] flex items-center gap-[8px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#1D9E75] inline-block" />
                    Para vos
                  </div>
                  <ul className="flex flex-col gap-[12px]">
                    {[
                      'Tenés un negocio funcionando con clientes reales',
                      'Tus leads llegan pero el proceso de convertirlos es manual y caótico',
                      'Querés que el sistema trabaje mientras vos entregás el servicio',
                      'El crecimiento está limitado por las horas del equipo, no por la demanda',
                      'Estás listo para escalar sin contratar más personas para captación',
                      'Sabés que perdés leads — simplemente no tenés tiempo de seguir a todos',
                    ].map((item, i) => (
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
                    <span className="w-[6px] h-[6px] rounded-full bg-[rgba(247,246,242,0.22)] inline-block" />
                    Otro paquete te sirve más si...
                  </div>
                  <ul className="flex flex-col gap-[14px]">
                    {[
                      { text: 'No tenés web todavía — necesitás empezar desde cero', pack: 'Starter Presence', href: '/servicios/starter-presence' },
                      { text: 'Querés posicionamiento orgánico con SEO y contenido a largo plazo', pack: 'Full Funnel 360', href: '/servicios/full-funnel-360' },
                      { text: 'Tenés producto y querés vender online directo, sin comisiones', pack: 'Ecommerce Pro', href: '/servicios/ecommerce-pro' },
                      { text: 'Tu equipo gasta horas en tareas repetitivas internas — no en captación', pack: 'Automation Retainer', href: '/servicios/automation-retainer' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-[10px] text-[14px] leading-[1.5]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="rgba(247,246,242,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px] mt-[1px] shrink-0">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                        <span className="text-[var(--muted-l)]">{item.text}{' '}
                          <a href={item.href} className="text-[var(--am)] font-bold no-underline hover:opacity-80 transition-opacity whitespace-nowrap">Ver {item.pack} →</a>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-[20px] pt-[16px] border-t-[0.5px] border-[rgba(247,246,242,0.07)]">
                    <p className="text-[12px] text-[var(--muted-l)] leading-[1.6]">
                      ¿No sabés cuál corresponde?{' '}
                      <a href="/auditoria-web-gratuita" className="text-[var(--am)] font-bold no-underline hover:opacity-80">Pedí la auditoría gratuita →</a>
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
                Preguntas frecuentes
              </div>
              <h2 className="text-[clamp(28px,3.8vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[14px]">
                Lo que todo el mundo pregunta<br /><GradientText>antes de dar el paso.</GradientText>
              </h2>
              <p className="text-[15px] leading-[1.7] text-[var(--muted-l)] max-w-[500px] mb-[44px]">
                Respondemos con honestidad. Si hay algo que no está acá, lo respondemos en la llamada.
              </p>
            </MotionWrapper>
            <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-[10px]" staggerDelay={0.06}>
              {FAQ_ITEMS.map((faq, idx) => (
                <StaggerItem key={idx}>
                  <div className="bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)] rounded-[16px] p-[24px] transition-all duration-200 hover:bg-[rgba(247,246,242,0.065)] hover:border-[rgba(247,246,242,0.14)] hover:-translate-y-[2px]">
                    <h3 className="text-[15px] font-extrabold text-[var(--cream)] mb-[10px] tracking-[-0.2px]">{faq.q}</h3>
                    <p className="text-[13px] leading-[1.7] text-[var(--muted-l)]">{faq.a}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Trust bar */}
            <MotionWrapper type="fadeUp" delay={0.3}>
              <div className="mt-[40px] flex flex-wrap items-center justify-center gap-x-[32px] gap-y-[12px] border-t-[0.5px] border-[rgba(247,246,242,0.07)] pt-[32px]">
                {[
                  'LLC registrada en Delaware',
                  'Todos los accesos son tuyos',
                  'Sistema documentado al detalle',
                  'Sin contratos de permanencia',
                ].map((item, i) => (
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
          headline={<>Tu negocio puede empezar<br />a trabajar solo<br /><GradientText>a partir de esta semana.</GradientText></>}
          subheadline="30 minutos de llamada. Sin presentaciones de agencia. Te decimos exactamente qué sistema construiríamos para tu negocio y cuándo estaría funcionando."
          mainCta={{ label: 'Agendá la llamada →', href: '#' }}
          disclaimer="Sin compromiso · Sin ventas agresivas · Respondemos en menos de 2 horas"
          watermarkText="SISTEMA"
          cards={[
            {
              tag: 'Ya tengo web pero no convierte',
              title: 'Auditoría gratuita primero',
              desc: 'Analizamos tu embudo actual y te decimos exactamente dónde se están perdiendo los leads.',
              href: '/auditoria-web-gratuita',
            },
            {
              tag: 'Quiero entender el sistema',
              title: 'Mini-curso gratuito · 5 emails',
              desc: 'Cómo funciona un sistema de captación automatizado, en 5 emails. Gratis.',
              href: '/email-course',
            },
            {
              tag: 'Ya sé lo que quiero',
              title: 'Llamada de diagnóstico',
              desc: '30 minutos. Sin ventas. Al final sabés qué incluye Growth Machine para tu negocio específico.',
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
          {
            title: 'Servicios',
            links: [
              { label: 'Starter Presence', href: '/servicios/starter-presence' },
              { label: 'Growth Machine', href: '/servicios/growth-machine' },
              { label: 'Full Funnel 360', href: '/servicios/full-funnel-360' },
              { label: 'Ecommerce Pro', href: '/servicios/ecommerce-pro' },
              { label: 'Automation Retainer', href: '/servicios/automation-retainer' },
            ],
          },
          {
            title: 'Gratuito',
            links: [
              { label: 'Auditoría web', href: '/auditoria-web-gratuita' },
              { label: 'Mini-curso 5 días', href: '/email-course' },
            ],
          },
          {
            title: 'Empresa',
            links: [
              { label: 'Todos los servicios', href: '/servicios' },
              { label: 'Casos de éxito', href: '/#case' },
              { label: 'Privacidad', href: '#' },
            ],
          },
        ]}
      />
      </HomeClient>
    </>
  );
}
