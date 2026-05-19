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
      ? 'Automation Retainer — Monthly n8n Automations That Build Your Operating System | Vacaré'
      : 'Automation Retainer — Automatizaciones Mensuales que Construyen tu Sistema Operativo | Vacaré',
    description: isEn
      ? 'n8n flows that eliminate repetitive work from your team. Without hiring a developer. Without depending on Zapier. Monthly plan with up to 12 hours of development and complete documentation.'
      : 'Flujos n8n que eliminan el trabajo repetitivo de tu equipo. Sin contratar un desarrollador. Sin depender de Zapier. Plan mensual con hasta 12 horas de desarrollo y documentación completa.',
    alternates: {
      canonical: isEn
        ? 'https://vacaredigitalsolutions.com/en/services/automation-retainer'
        : 'https://vacaredigitalsolutions.com/es/servicios/automation-retainer',
    },
    openGraph: {
      title: 'Automation Retainer — Vacaré Digital Solutions',
      description: isEn
        ? "Your team's time is your most expensive resource. Every repetitive manual task is time not used for growing."
        : 'El tiempo de tu equipo es el recurso más caro que tenés. Cada tarea repetitiva que hacen a mano es tiempo que no se usa para crecer.',
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
function IconX({ color = 'rgba(247,246,242,0.25)', size = 16 }: { color?: string; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: size, height: size, flexShrink: 0 }}>
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────
const USE_CASES = [
  { Icon: IconMail, category: 'Comunicación', title: 'Confirmaciones automáticas', saved: '~4h/mes', body: 'Email + WhatsApp en segundos cuando entra una compra, reserva o consulta. Sin que nadie lo tenga que mandar.' },
  { Icon: IconUserPlus, category: 'Onboarding', title: 'Alta de nuevos clientes', saved: '~6h/mes', body: 'Nuevo cliente = creación en CRM + carpeta en Drive + email de bienvenida. Todo en 2 minutos, sin intervención.' },
  { Icon: IconBarChart2, category: 'Reporting', title: 'Reportes automáticos', saved: '~4h/mes', body: 'Datos de 3 planillas distintas consolidados y enviados por email al equipo cada lunes a las 8am.' },
  { Icon: IconDollarSign, category: 'Facturación', title: 'Seguimiento de cobros', saved: '~5h/mes', body: 'Aviso automático de factura vencida. Escala a WhatsApp si no se paga en 48h. Sin que nadie tenga que recordarlo.' },
  { Icon: IconSettings, category: 'Operaciones', title: 'Integración entre sistemas', saved: 'Variable', body: 'CRM ↔ facturación ↔ email ↔ calendario. Sistemas que no "se hablan" — conectados con n8n.' },
  { Icon: IconClock, category: 'Seguimiento', title: 'Recordatorio de citas', saved: '~2h/mes', body: '24h y 1h antes de cada reunión. Automático. Sin que el equipo tenga que acordarse de mandarlo.' },
];

const FAQ_ITEMS = [
  { q: '¿Cómo sé qué automatizar primero?', a: 'En el onboarding hacemos una auditoría de procesos. Vos nos contás cómo opera el negocio y nosotros identificamos los 3 puntos de mayor impacto — los que más tiempo consumen y más errores generan. Arrancamos por ahí.' },
  { q: '¿Necesito saber algo técnico?', a: 'No. Vos describís el proceso en lenguaje llano: "cuando llega un nuevo cliente, mandamos este mail y creamos esta carpeta". Nosotros lo construimos. Nunca vas a tener que entender código, flujos o APIs.' },
  { q: '¿Qué pasa con los flujos si cancelo el Retainer?', a: 'Son completamente tuyos. Te entregamos la exportación de cada flujo con documentación en lenguaje claro. Podés seguir usándolos en tu propio servidor de n8n sin pagar nada más a nadie.' },
  { q: '¿Cuánto tiempo hasta los primeros resultados?', a: 'El primer flujo suele estar activo en la primera semana del retainer. El ahorro de tiempo se nota desde el mes 1. A los 3 meses, el equipo ya nota claramente la diferencia.' },
  { q: '¿Puede conectar mi CRM con mi sistema de facturación?', a: 'Sí, siempre que ambos tengan API. En la llamada evaluamos la viabilidad técnica y te decimos qué es posible y qué no — sin comprometerte con algo que después no se puede hacer.' },
  { q: '¿Cuál es la diferencia entre el Plan Base y el Pro?', a: 'Principalmente las horas disponibles y la complejidad de las integraciones. Base = 6h/mes, flujos simples y medios. Pro = 12h/mes, integraciones con APIs externas, webhooks avanzados y revisión estratégica mensual.' },
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default async function AutomationRetainerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tLayout = await getTranslations({ locale, namespace: 'Layout' });

  const BASE = 'https://vacaredigitalsolutions.com';
  const isEn = locale === 'en';
  const svcPath = isEn ? `${BASE}/en/services/automation-retainer` : `${BASE}/es/servicios/automation-retainer`;

  return (
    <>
      <ServiceJsonLd
        url={svcPath}
        name="Automation Retainer"
        description={isEn
          ? 'n8n flows that eliminate repetitive work from your team. Without hiring a developer. Monthly plan with up to 12 hours of development and complete documentation.'
          : 'Flujos n8n que eliminan el trabajo repetitivo de tu equipo. Sin contratar un desarrollador. Plan mensual con hasta 12 horas de desarrollo y documentación completa.'}
        price="500"
      />
      <BreadcrumbJsonLd items={[
        { name: isEn ? 'Home' : 'Inicio', item: `${BASE}/${locale}` },
        { name: isEn ? 'Services' : 'Servicios', item: isEn ? `${BASE}/en/services` : `${BASE}/es/servicios` },
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
                  <a href="/" className="hover:text-[rgba(247,246,242,0.6)] transition-colors no-underline">{isEn ? 'Home' : 'Inicio'}</a>
                  <span>/</span>
                  <a href={isEn ? '/services' : '/servicios'} className="hover:text-[rgba(247,246,242,0.6)] transition-colors no-underline">{isEn ? 'Services' : 'Servicios'}</a>
                  <span>/</span>
                  <span className="text-[var(--mg)] font-semibold">Automation Retainer</span>
                </nav>

                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--mg)] mb-[20px]">
                  <i className="w-[18px] h-[1.5px] bg-[var(--mg)] block" />
                  Paquete 05 · Sistema operativo mensual
                </div>

                <h1 className="text-[clamp(30px,4vw,54px)] font-extrabold leading-[1.07] tracking-[-2px] text-[var(--cream)] mb-[18px]">
                  <span className="block grad-text text-[clamp(22px,2.8vw,36px)] mb-[8px]">Automation Retainer</span>
                  El tiempo de tu equipo es tu recurso más caro.<br />
                  <GradientText>Cada tarea repetitiva que hacen a mano es tiempo que no crece.</GradientText>
                </h1>

                <p className="text-[16px] leading-[1.75] text-[var(--muted-l)] max-w-[460px] mb-[28px]">
                  Automation Retainer construye las automatizaciones que eliminan ese trabajo — mes a mes. Sin contratar un desarrollador. Sin depender de Zapier. Sin que vos tengas que entender cómo funciona.
                </p>

                <ul className="flex flex-col gap-[10px] mb-[36px] max-w-[440px]">
                  {[
                    'Las tareas que hacen a mano hoy — se hacen solas desde el mes 1',
                    'Cada mes el sistema hace más — nunca termina',
                    'Flujos documentados y 100% tuyos si cancelás',
                  ].map((b, i) => (
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
                    Quiero automatizar mi negocio →
                  </OpenMeetingBtn>
                  <a href="#casos" className="px-[24px] py-[15px] rounded-[10px] border-[1.5px] border-[rgba(247,246,242,0.15)] text-[var(--cream)] text-[15px] font-bold leading-none no-underline inline-flex items-center transition-all hover:border-[rgba(247,246,242,0.38)] hover:-translate-y-[1px]">
                    Ver qué se construye ↓
                  </a>
                </div>
                <p className="text-[12px] text-[rgba(247,246,242,0.3)] font-medium">
                  Auditoría de procesos incluida en la llamada · Sin compromiso
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
                        {isEn ? 'Hidden Cost' : 'El Costo Oculto'}
                      </div>
                      <div className="text-[20px] font-extrabold text-white leading-tight">
                        {isEn ? 'Manual Work' : 'Trabajo Manual'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-[48px] md:text-[56px] font-black text-[rgba(255,220,100,0.95)] leading-none tracking-[-2px] mb-[12px] drop-shadow-md">
                    $460<span className="text-[20px] md:text-[24px] font-bold text-[rgba(255,255,255,0.6)] tracking-normal">/{isEn ? 'mo' : 'mes'}</span>
                  </div>
                  
                  <div className="h-[1px] w-full bg-[rgba(255,255,255,0.2)] my-[16px]" />
                  
                  <p className="text-[15px] font-medium text-[rgba(255,255,255,0.9)] leading-[1.6]">
                    {isEn 
                      ? 'Estimated cost in hours lost on repetitive tasks like onboarding and reporting.' 
                      : 'Costo estimado en horas perdidas en tareas repetitivas como onboarding y reportes.'}
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-[16px]">
                  {[
                    { 
                      num: '3h+', 
                      label: isEn ? 'Saved per day' : 'Ahorradas por día', 
                      icon: <IconTrendingUp className="w-[20px] h-[20px]" />
                    },
                    { 
                      num: '2-4', 
                      label: isEn ? 'New flows / month' : 'Flujos nuevos / mes', 
                      icon: <IconZap className="w-[20px] h-[20px]" stroke="currentColor" />
                    },
                  ].map((s, i) => (
                    <div key={i} className="bg-[rgba(0,0,0,0.1)] backdrop-blur-[8px] border border-[rgba(255,255,255,0.15)] rounded-[16px] p-[20px] flex flex-col justify-between hover:bg-[rgba(0,0,0,0.15)] hover:border-[rgba(255,255,255,0.25)] transition-all duration-300">
                      <div className="text-[rgba(255,255,255,0.6)] mb-[16px]">
                        {s.icon}
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

        {/* ══════ EL PROBLEMA — "DE BOMBERO A ARQUITECTO" ══════ */}
        <section className="bg-[var(--cream)] py-[80px] lg:py-[110px] relative overflow-hidden">
          <AnimatedWatermark text="MANUAL" direction="right" className="-bottom-[10px] -right-[10px] text-[clamp(70px,13vw,160px)] text-[rgba(28,24,40,0.025)] tracking-[-4px] italic" />
          <PageWrapper className="relative z-10">
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
                El diagnóstico
              </div>
              <h2 className="text-[clamp(28px,3.8vw,50px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[14px]">
                ¿Cuánto le pagás a tu equipo<br />
                <GradientText>para hacer trabajo de máquina?</GradientText>
              </h2>
              <p className="text-[16px] leading-[1.75] text-[var(--muted)] max-w-[600px] mb-[48px]">
                La mayoría de los negocios no calculan el costo real del trabajo manual. Hasta que lo hacen, y el número les cambia la perspectiva completamente.
              </p>
            </MotionWrapper>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] mb-[44px]">
              {/* Audit table */}
              <MotionWrapper type="fadeLeft">
                <div className="bg-white border-[0.5px] border-[rgba(28,24,40,0.09)] rounded-[24px] overflow-hidden shadow-[0_8px_40px_rgba(28,24,40,0.06)]">
                  <div className="bg-[rgba(28,24,40,0.04)] px-[24px] py-[14px] border-b border-[rgba(28,24,40,0.07)]">
                    <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--muted)]">Auditoría de tiempo · Ejemplo real</p>
                  </div>
                  <div className="p-[0]">
                    <div className="grid grid-cols-[1fr_auto_auto] text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--muted)] px-[20px] py-[10px] bg-[rgba(28,24,40,0.02)] border-b border-[rgba(28,24,40,0.05)]">
                      <span>Tarea</span>
                      <span className="text-right pr-[16px]">Horas/mes</span>
                      <span className="text-right">Costo ($20/h)</span>
                    </div>
                    {[
                      { task: 'Confirmaciones de pedido/reserva', hours: '8h', cost: '$160' },
                      { task: 'Onboarding de nuevos clientes', hours: '6h', cost: '$120' },
                      { task: 'Generación de reportes semanales', hours: '4h', cost: '$80' },
                      { task: 'Seguimiento de cobros pendientes', hours: '5h', cost: '$100' },
                    ].map((row, i) => (
                      <div key={i} className={`grid grid-cols-[1fr_auto_auto] px-[20px] py-[12px] ${i % 2 === 0 ? 'bg-white' : 'bg-[rgba(28,24,40,0.015)]'} border-b border-[rgba(28,24,40,0.05)]`}>
                        <span className="text-[12px] text-[var(--dark)]">{row.task}</span>
                        <span className="text-[12px] text-[var(--muted)] pr-[16px] text-right">{row.hours}</span>
                        <span className="text-[12px] font-bold text-[var(--mg)] text-right">{row.cost}</span>
                      </div>
                    ))}
                    <div className="grid grid-cols-[1fr_auto_auto] px-[20px] py-[14px] bg-[rgba(232,65,122,0.04)] border-t-[1.5px] border-[rgba(232,65,122,0.15)]">
                      <span className="text-[13px] font-extrabold text-[var(--dark)]">Total mensual</span>
                      <span className="text-[13px] font-bold text-[var(--dark)] pr-[16px] text-right">23h</span>
                      <span className="text-[15px] font-extrabold text-[var(--mg)] text-right">$460/mes</span>
                    </div>
                  </div>
                </div>
              </MotionWrapper>

              {/* 3 pain points */}
              <MotionWrapper type="fadeRight" delay={0.1}>
                <div className="flex flex-col gap-[12px]">
                  {[
                    { Icon: IconClock, title: 'Horas del equipo en tareas sin valor', body: 'Cada hora que tu equipo pasa mandando confirmaciones a mano es una hora que no está mejorando el servicio, consiguiendo clientes o haciendo crecer el negocio.' },
                    { Icon: IconAlertOctagon, title: 'Error humano constante — y evitable', body: 'Alguien se olvidó de mandar el mail. Alguien actualizó mal la planilla. Alguien no avisó al cliente. Con automatizaciones, los procesos se ejecutan igual siempre — sin excepciones.' },
                    { Icon: IconTrendingUp, title: 'El techo de crecimiento invisible', body: 'Para atender 20% más de clientes necesitás contratar una persona más. Ese es el techo. El Retainer lo rompe: el sistema atiende más sin que el equipo crezca proporcionalmente.' },
                  ].map((card, i) => (
                    <div key={i} className="bg-white border-[0.5px] border-[rgba(28,24,40,0.09)] rounded-[16px] p-[20px] hover:shadow-[0_8px_28px_rgba(28,24,40,0.07)] hover:-translate-y-[1px] transition-all duration-300 group">
                      <div className="flex items-start gap-[12px]">
                        <div className="w-[36px] h-[36px] rounded-[9px] bg-[rgba(232,65,122,0.07)] border-[0.5px] border-[rgba(232,65,122,0.14)] flex items-center justify-center shrink-0 text-[var(--mg)]">
                          <card.Icon className="w-[17px] h-[17px]" />
                        </div>
                        <div>
                          <h3 className="text-[13px] font-extrabold text-[var(--dark)] mb-[5px] leading-[1.3]">{card.title}</h3>
                          <p className="text-[12px] leading-[1.6] text-[var(--muted)]">{card.body}</p>
                        </div>
                      </div>
                    </div>
                  ))}
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
                Qué se construye
              </div>
              <h2 className="text-[clamp(28px,3.8vw,48px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[14px]">
                Ejemplos de lo que construimos<br /><GradientText>en los primeros meses.</GradientText>
              </h2>
              <p className="text-[16px] leading-[1.75] text-[var(--muted-l)] max-w-[520px] mb-[48px]">
                Cada flujo está diseñado para eliminar una tarea concreta. Arrancamos por los de mayor impacto.
              </p>
            </MotionWrapper>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[12px]" staggerDelay={0.06}>
              {USE_CASES.map((card, i) => (
                <StaggerItem key={i}>
                  <div className="bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.08)] rounded-[20px] p-[24px] h-full hover:bg-[rgba(247,246,242,0.07)] hover:-translate-y-[2px] transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-[14px]">
                      <div className="w-[40px] h-[40px] rounded-[10px] grad-bg flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(232,65,122,0.2)]">
                        <card.Icon />
                      </div>
                      <div className="text-right">
                        <div className="text-[8px] font-bold uppercase tracking-[0.08em] text-[rgba(247,246,242,0.3)]">{card.category}</div>
                        <div className="text-[10px] font-bold text-[var(--am)]">{card.saved} ahorrados</div>
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
                Elegís el alcance
              </div>
              <h2 className="text-[clamp(28px,3.5vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[14px]">
                Dos planes.<br /><GradientText>Cada uno correcto para una situación.</GradientText>
              </h2>
              <p className="text-[16px] leading-[1.75] text-[var(--muted)] max-w-[500px] mb-[44px]">
                La unidad de medida es el tiempo de desarrollo, no la cantidad de flujos. Un flujo simple = 2h. Una integración compleja = 6h. En el onboarding calibramos el alcance real.
              </p>
            </MotionWrapper>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
              {[
                {
                  name: 'Plan Base',
                  for: 'Negocios que empiezan a automatizar',
                  hours: '6h / mes',
                  features: [
                    '1 a 2 flujos nuevos por mes (complejidad baja/media)',
                    'Mantenimiento de flujos existentes',
                    'Documentación completa de cada entrega',
                    'Comunicación por chat + actualizaciones semanales',
                  ],
                  featured: false,
                },
                {
                  name: 'Plan Pro',
                  for: 'Negocios con operación establecida que quieren acelerar',
                  hours: '12h / mes',
                  features: [
                    'Flujos complejos + integraciones con APIs externas',
                    'Webhooks avanzados y subworkflows',
                    'Revisión estratégica mensual — qué construir primero y por qué',
                    'Soporte prioritario con respuesta en menos de 4 horas',
                    'Mapa de automatización del negocio entregado en el mes 1',
                  ],
                  featured: true,
                },
              ].map((plan, i) => (
                <MotionWrapper key={i} type="fadeUp" delay={i * 0.1}>
                  <div className={`rounded-[24px] p-[32px] h-full border-[0.5px] transition-all ${plan.featured ? 'bg-[var(--dark)] border-[rgba(247,246,242,0.12)] shadow-[0_16px_60px_rgba(28,24,40,0.2)]' : 'bg-white border-[rgba(28,24,40,0.09)] shadow-[0_8px_32px_rgba(28,24,40,0.04)]'}`}>
                    {plan.featured && (
                      <div className="inline-flex items-center gap-[5px] text-[9px] font-bold uppercase tracking-[0.1em] text-[var(--am)] bg-[rgba(245,166,35,0.1)] border-[0.5px] border-[rgba(245,166,35,0.25)] rounded-[20px] px-[10px] py-[4px] mb-[14px]">
                        <span className="w-[4px] h-[4px] rounded-full bg-[var(--am)]" /> Más elegido
                      </div>
                    )}
                    <h3 className={`text-[22px] font-extrabold mb-[4px] tracking-[-0.5px] ${plan.featured ? 'text-[var(--cream)]' : 'text-[var(--dark)]'}`}>{plan.name}</h3>
                    <p className={`text-[12px] mb-[16px] ${plan.featured ? 'text-[var(--muted-l)]' : 'text-[var(--muted)]'}`}>{plan.for}</p>

                    <div className={`inline-flex items-center gap-[6px] rounded-[10px] px-[14px] py-[8px] mb-[22px] border-[0.5px] ${plan.featured ? 'bg-[rgba(245,166,35,0.1)] border-[rgba(245,166,35,0.25)]' : 'bg-[rgba(232,65,122,0.05)] border-[rgba(232,65,122,0.15)]'}`}>
                      <IconZap className="w-[13px] h-[13px]" stroke={plan.featured ? 'var(--am)' : 'var(--mg)'} />
                      <span className={`text-[13px] font-extrabold ${plan.featured ? 'text-[var(--am)]' : 'text-[var(--mg)]'}`}>{plan.hours} de desarrollo</span>
                    </div>

                    <ul className="flex flex-col gap-[10px]">
                      {plan.features.map((feat, j) => (
                        <li key={j} className={`flex items-start gap-[10px] text-[13px] leading-[1.5] ${plan.featured ? 'text-[var(--cream)]' : 'text-[var(--dark)]'}`}>
                          <IconCheck size={15} color={plan.featured ? '#1D9E75' : '#1D9E75'} />
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <div className={`mt-[24px] pt-[18px] border-t-[0.5px] ${plan.featured ? 'border-[rgba(247,246,242,0.09)]' : 'border-[rgba(28,24,40,0.07)]'}`}>
                      <OpenMeetingBtn className={`w-full py-[13px] rounded-[10px] text-[13px] font-bold leading-none cursor-pointer transition-all hover:-translate-y-[1px] border-none ${plan.featured ? 'grad-bg text-white shadow-[0_6px_20px_rgba(232,65,122,0.25)] hover:shadow-[0_10px_30px_rgba(232,65,122,0.3)]' : 'bg-[rgba(28,24,40,0.06)] text-[var(--dark)] hover:bg-[rgba(28,24,40,0.09)]'}`}>
                        Empezar con {plan.name} →
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

              {/* Efecto compuesto mes a mes */}
              <MotionWrapper type="fadeLeft">
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
                  <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
                  El efecto compuesto
                </div>
                <h2 className="text-[clamp(24px,3vw,38px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[20px]">
                  Cada mes construye<br /><GradientText>sobre el anterior.</GradientText>
                </h2>
                <div className="flex flex-col gap-[0]">
                  {[
                    { month: 'Mes 1', title: 'Onboarding + primeras 2 automatizaciones', body: 'Auditoría de procesos. Las 2 automatizaciones de mayor impacto ya activas.' },
                    { month: 'Mes 2', title: '2 flujos nuevos + optimización', body: 'Los del mes 1 ya están documentados. Sumamos la siguiente capa.' },
                    { month: 'Mes 3', title: 'El equipo nota la diferencia', body: 'Menos tiempo en tareas operativas. Empezamos con integraciones entre sistemas.' },
                    { month: 'Mes 4–5', title: 'Flujos encadenados', body: 'El sistema de nurturing y seguimiento está completo. Los flujos se conectan entre sí.' },
                    { month: 'Mes 6', title: '30-40% menos trabajo manual', body: 'El equipo tiene tiempo para tareas de mayor valor. El sistema trabaja solo.' },
                  ].map((step, i) => (
                    <div key={i} className="flex gap-[16px] pb-[16px]">
                      <div className="flex flex-col items-center shrink-0 mt-[2px]">
                        <div className="w-[8px] h-[8px] rounded-full grad-bg shrink-0" />
                        {i < 4 && <div className="w-[1.5px] flex-1 min-h-[20px] bg-[rgba(247,246,242,0.08)] my-[3px]" />}
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
                  Por qué n8n
                </div>
                <h2 className="text-[clamp(24px,3vw,38px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[20px]">
                  Y no Zapier,<br /><GradientText>Make ni ningún otro.</GradientText>
                </h2>
                <div className="flex flex-col gap-[14px]">
                  {[
                    {
                      title: '$0 por automatización ejecutada',
                      body: 'Zapier cobra por cada "tarea" ejecutada. n8n puede correr a costo fijo sin importar cuántas veces se ejecute el flujo. Si tu negocio escala, el costo no escala con él.',
                    },
                    {
                      title: 'Sin límites de lógica',
                      body: 'Zapier tiene lógica lineal. n8n permite condicionales complejos, loops, subworkflows y llamadas a APIs externas sin restricciones. Las automatizaciones más importantes no son lineales.',
                    },
                    {
                      title: 'Los flujos te pertenecen',
                      body: 'Si el día de mañana querés que otro equipo los gestione, los flujos exportan en JSON y se instalan en cualquier entorno. Sin vendor lock-in. Sin perder lo construido.',
                    },
                  ].map((reason, i) => (
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
                      Si ya pagás Zapier Business ($599/mes), el Retainer Pro hace más por menos — con un profesional construyendo los flujos estratégicamente en vez de armar zaps a mano.
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
                Autodiagnóstico
              </div>
              <h2 className="text-[clamp(28px,3.5vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[44px]">
                <GradientText>Automation Retainer</GradientText> es para vos si...
              </h2>
            </MotionWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
              <MotionWrapper type="fadeLeft">
                <div className="bg-white border-[0.5px] border-[rgba(28,24,40,0.09)] rounded-[20px] p-[32px] h-full shadow-[0_8px_32px_rgba(28,24,40,0.04)]">
                  <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#1D9E75] mb-[22px] flex items-center gap-[8px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#1D9E75]" /> Para vos
                  </div>
                  <ul className="flex flex-col gap-[12px]">
                    {[
                      'Ya tenés un negocio funcionando con procesos establecidos pero manuales',
                      'Tenés 2+ personas que gastan tiempo en tareas repetitivas todos los días',
                      'Querés escalar sin contratar más personas solo para tareas operativas',
                      'Tenés sistemas que no se hablan entre sí (CRM + facturación + email)',
                      'Ya usás Zapier y querés algo más robusto y más barato',
                      'Sabés que hay que automatizar pero nadie en el equipo sabe cómo',
                    ].map((item, i) => (
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
                    <span className="w-[6px] h-[6px] rounded-full bg-[rgba(28,24,40,0.28)]" /> Otro paquete te sirve más si...
                  </div>
                  <ul className="flex flex-col gap-[14px]">
                    {[
                      { text: 'Todavía no tenés web ni leads — la base digital va primero', pack: 'Starter Presence', href: `/${isEn ? 'services' : 'servicios'}/starter-presence` },
                      { text: 'Tu problema es la captación de clientes nuevos, no las operaciones internas', pack: 'Growth Machine', href: `/${isEn ? 'services' : 'servicios'}/growth-machine` },
                      { text: 'Querés un canal orgánico con SEO y contenido a largo plazo', pack: 'Full Funnel 360', href: `/${isEn ? 'services' : 'servicios'}/full-funnel-360` },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-[10px] text-[14px] leading-[1.5]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="rgba(28,24,40,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px] mt-[1px] shrink-0">
                          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                        <span className="text-[var(--muted)]">{item.text}{' '}<a href={item.href} className="text-[var(--mg)] font-bold no-underline hover:opacity-80">Ver {item.pack} →</a></span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-[20px] pt-[16px] border-t-[0.5px] border-[rgba(28,24,40,0.07)]">
                    <p className="text-[12px] text-[var(--muted)]">¿No sabés cuál corresponde?{' '}<a href={isEn ? '/free-audit' : '/auditoria-web-gratuita'} className="text-[var(--mg)] font-bold no-underline hover:opacity-80">Pedí la auditoría gratuita →</a></p>
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
              <p className="text-[15px] leading-[1.7] text-[var(--muted-l)] max-w-[500px] mb-[44px]">Respondemos con honestidad.</p>
            </MotionWrapper>
            <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-[10px]" staggerDelay={0.06}>
              {FAQ_ITEMS.map((faq, idx) => (
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
                {['Flujos 100% tuyos al terminar', 'Documentación completa de cada entrega', 'Sin permanencia — cancelás cuando querés', 'Auditoría de procesos incluida en la llamada'].map((item, i) => (
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
          headline={<>¿Cuántas horas regaló tu equipo esta semana<br /><GradientText>a tareas que una máquina puede hacer?</GradientText></>}
          subheadline="30 minutos de llamada. Hacemos la auditoría de tus procesos juntos y te decimos exactamente qué automatizaciones tienen más impacto y en qué orden las construiríamos."
          mainCta={{ label: 'Quiero automatizar mi negocio →', href: '#' }}
          disclaimer="Sin compromiso · Auditoría de procesos incluida · Respondemos en 2 horas"
          watermarkText="AUTOMÁTICO"
          cards={[
            { tag: 'No sé qué automatizar primero', title: 'Auditoría de procesos gratuita', desc: 'Mapeamos tus 3 tareas de mayor impacto y estimamos el tiempo que ahorrarías.', href: isEn ? '/free-audit' : '/auditoria-web-gratuita' },
            { tag: 'Quiero entender cómo funciona', title: 'Mini-curso 5 días', desc: 'Qué se puede automatizar, con qué herramientas y cómo evaluar el ROI. Gratis.', href: isEn ? '/email-course' : '/curso-web-gratis' },
            { tag: 'Ya sé lo que quiero', title: 'Llamada de diagnóstico', desc: '30 minutos. Al final sabés qué plan corresponde y cuáles son los primeros flujos a construir.', href: '#ctaf' },
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
          { title: isEn ? 'Free' : 'Gratuito', links: [{ label: isEn ? 'Web Audit' : 'Auditoría web', href: isEn ? '/free-audit' : '/auditoria-web-gratuita' }, { label: isEn ? '5-day course' : 'Mini-curso 5 días', href: isEn ? '/email-course' : '/curso-web-gratis' }] },
          { title: isEn ? 'Company' : 'Empresa', links: [{ label: isEn ? 'All services' : 'Todos los servicios', href: isEn ? '/services' : '/servicios' }, { label: isEn ? 'Case studies' : 'Casos de éxito', href: '/#case' }, { label: isEn ? 'Privacy' : 'Privacidad', href: '#' }] },
        ]}
      />
      </HomeClient>
    </>
  );
}
