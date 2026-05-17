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
import FaqJsonLd from '@/components/seo/FaqJsonLd';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn
      ? 'Starter Presence — Professional Website That Ranks on Google | Vacaré'
      : 'Starter Presence — Web Profesional que Aparece en Google | Vacaré',
    description: isEn
      ? 'Professional website in 30 days. Google-optimized, no monthly hosting, automated lead notifications to WhatsApp. Free diagnosis call.'
      : 'Web profesional en 30 días. Aparecés en Google, sin hosting mensual, con notificación automática de leads a tu WhatsApp. Llamada de diagnóstico gratuita.',
    alternates: {
      canonical: isEn
        ? 'https://vacaredigitalsolutions.com/en/services/starter-presence'
        : 'https://vacaredigitalsolutions.com/es/servicios/starter-presence',
    },
    openGraph: {
      title: 'Starter Presence — Vacaré Digital Solutions',
      description: isEn
        ? "If you search for your business on Google and can't find it, neither can your clients."
        : 'Si buscás tu negocio en Google y no te encontrás, tus clientes tampoco.',
    },
  };
}

// ─── Icon components ───────────────────────────────────────────────────────
function IconLightning() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
function IconMapPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function IconMessage() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
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
function IconSettings() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}
function IconSearch({ className = 'w-5 h-5', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
function IconUserX({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <line x1="18" y1="8" x2="23" y2="13" />
      <line x1="23" y1="8" x2="18" y2="13" />
    </svg>
  );
}
function IconMonitorX({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v6" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="15" y1="15" x2="21" y2="21" />
      <line x1="21" y1="15" x2="15" y2="21" />
    </svg>
  );
}
function IconStar({ fill = '#e37400' }: { fill?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill={fill} className="w-[9px] h-[9px]">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
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
    Icon: IconLightning,
    what: 'Web ultrarrápida — sin costos mensuales de por vida',
    means: 'Carga antes de que el visitante termine de respirar. Sin hosting que pagar mes a mes. La mayoría de webs que construimos no tienen costo recurrente — el dinero que invertís no se va diluyendo en cuotas.',
  },
  {
    Icon: IconMapPin,
    what: 'Aparecés cuando te buscan en Google — local y orgánico',
    means: 'Cuando alguien escribe tu servicio + tu ciudad, queremos que aparezcas en el mapa y en los resultados. SEO técnico completo + Google Business optimizado. En 30-60 días las primeras búsquedas locales ya te encuentran.',
  },
  {
    Icon: IconMessage,
    what: 'Cada consulta llega directo a tu WhatsApp en segundos',
    means: 'Ningún lead se pierde en un formulario que nadie revisa. Cuando alguien completa el contacto, vos recibís un mensaje en segundos con nombre, teléfono y lo que necesita. Respondés al toque, cuando la intención de compra está en el pico.',
  },
  {
    Icon: IconBarChart,
    what: 'Sabés exactamente qué funciona y qué no',
    means: 'Panel completo con visitas, fuentes, comportamiento y búsquedas que usaron para encontrarte. Tomás decisiones con datos reales, no con intuición. Si algo no está funcionando, lo sabés antes de seguir invirtiendo.',
  },
  {
    Icon: IconSettings,
    what: 'Una tarea que hacés a mano hoy — se hace sola desde el día uno',
    means: 'Elegimos la tarea que más te consume (confirmación de cita, respuesta de bienvenida, alerta interna de consulta) y la automatizamos. El sistema trabaja aunque vos no estés mirando.',
  },
];

const FAQ_ITEMS = [
  {
    q: '¿Voy a depender de ustedes para mantener la web?',
    a: 'No, y ese es un principio que no negociamos. Al terminar el proyecto te entregamos todos los accesos — dominio, código, herramientas de analítica. Si el día de mañana querés trabajar con otro proveedor o hacer cambios vos mismo, podés hacerlo sin perder absolutamente nada.',
  },
  {
    q: '¿Cómo aparezco en Google si la web es nueva?',
    a: 'Google indexa sitios nuevos en 15-30 días. El SEO técnico que implementamos desde el primer día acelera ese proceso. A eso sumamos Google Business Profile optimizado, que empieza a mostrar tu negocio en búsquedas locales mucho antes que el SEO orgánico tradicional. En la mayoría de proyectos, las primeras posiciones aparecen en 30-60 días.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'No publicamos un número fijo porque cada proyecto tiene alcances distintos. Lo que sí te garantizamos: en la llamada de diagnóstico te damos el precio exacto. Sin "desde", sin "podría ser". Un número concreto por un scope concreto. Si no encaja con tu presupuesto, también te lo decimos con honestidad.',
  },
  {
    q: '¿Qué pasa si no me gusta lo que construyeron?',
    a: 'Trabajamos con aprobación por etapas. Diseño aprobado antes de desarrollar. Desarrollo aprobado antes de publicar. Nunca llegás a una entrega final con sorpresas — porque las cosas grandes las definiste vos en cada revisión.',
  },
  {
    q: '¿Cuánto tiempo lleva de mi parte?',
    a: 'Menos de lo que pensás. Una llamada inicial de 30 minutos, una o dos revisiones por texto o videollamada breve, y la aprobación final. El trabajo pesado lo hacemos nosotros. Vos seguís operando tu negocio.',
  },
  {
    q: '¿Funciona para cualquier tipo de negocio?',
    a: 'Starter Presence es ideal para negocios de servicios locales: clínicas, estudios profesionales, gastronomía, educación, hoteles chicos, consultores independientes. Si tenés producto y querés una tienda online, hay un paquete mejor — Ecommerce Pro.',
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default async function StarterPresencePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tLayout = await getTranslations({ locale, namespace: 'Layout' });

  const BASE = 'https://vacaredigitalsolutions.com';
  const isEn = locale === 'en';
  const svcPath = isEn ? `${BASE}/en/services/starter-presence` : `${BASE}/es/servicios/starter-presence`;

  return (
    <>
      <ServiceJsonLd
        url={svcPath}
        name="Starter Presence"
        description={isEn
          ? 'Professional website in 30 days. Google-optimized, no monthly hosting, automated lead notifications to WhatsApp.'
          : 'Web profesional en 30 días. Aparecés en Google, sin hosting mensual, con notificación automática de leads a tu WhatsApp.'}
        price="1500"
      />
      <BreadcrumbJsonLd items={[
        { name: isEn ? 'Home' : 'Inicio', item: `${BASE}/${locale}` },
        { name: isEn ? 'Services' : 'Servicios', item: isEn ? `${BASE}/en/services` : `${BASE}/es/servicios` },
        { name: 'Starter Presence', item: svcPath },
      ]} />
      <FaqJsonLd items={FAQ_ITEMS.map(f => ({ question: f.q, answer: f.a }))} />
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
          <div className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.05) 0%, transparent 65%)' }} />
          <AnimatedWatermark text="STARTER" direction="left" className="bottom-[-20px] left-[-8px] text-[clamp(80px,13vw,170px)] text-[rgba(247,246,242,0.02)] tracking-[-5px] italic" />

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
                  <span className="text-[var(--mg)] font-semibold">Starter Presence</span>
                </nav>

                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--mg)] mb-[20px]">
                  <i className="w-[18px] h-[1.5px] bg-[var(--mg)] block" />
                  Paquete 01 · Primera web estratégica
                </div>

                <h1 className="text-[clamp(34px,4.5vw,58px)] font-extrabold leading-[1.07] tracking-[-2px] text-[var(--cream)] mb-[18px]">
                  Si buscás tu negocio<br />en Google y no aparecés,<br />
                  <GradientText>tus clientes van a otro.</GradientText>
                </h1>

                <p className="text-[16px] leading-[1.75] text-[var(--muted-l)] max-w-[460px] mb-[28px]">
                  En 30 días tu negocio aparece cuando te buscan, tu web transmite lo que realmente hacés, y cada consulta llega directo a tu WhatsApp — sin que hagas nada extra.
                </p>

                {/* 3-bullet outcomes */}
                <ul className="flex flex-col gap-[10px] mb-[36px] max-w-[420px]">
                  {[
                    'Web publicada en 30 días, sin hosting mensual de por vida',
                    'Posicionado en Google local en 30-60 días',
                    'Cada lead llega solo — notificación automática a tu WhatsApp',
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
                    Agendá una llamada gratuita →
                  </OpenMeetingBtn>
                  <a href="#includes" className="px-[24px] py-[15px] rounded-[10px] border-[1.5px] border-[rgba(247,246,242,0.15)] text-[var(--cream)] text-[15px] font-bold leading-none no-underline inline-flex items-center transition-all hover:border-[rgba(247,246,242,0.38)] hover:-translate-y-[1px]">
                    Ver qué incluye ↓
                  </a>
                </div>
                <p className="text-[12px] text-[rgba(247,246,242,0.3)] font-medium">
                  Llamada gratuita · Sin compromiso · Respondemos en menos de 2 horas
                </p>
              </MotionWrapper>
            </div>

            {/* Right — gradient panel */}
            <div className="w-full lg:w-[45%] relative overflow-hidden" style={{ background: 'linear-gradient(145deg,#E8417A 0%,#F07030 48%,#F5A623 100%)' }}>
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
              <div className="absolute text-[clamp(90px,14vw,180px)] font-extrabold italic text-[rgba(255,255,255,0.07)] leading-[0.9] tracking-[-5px] pointer-events-none bottom-[-10px] right-[-10px]">01</div>

              <div className="absolute inset-0 z-[2] flex flex-col justify-center px-[32px] lg:px-[44px] py-[40px] gap-[12px]">

                {/* Google Business mockup */}
                <div className="bg-white rounded-[14px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
                  {/* Search bar */}
                  <div className="bg-[#f8f9fa] px-[14px] py-[9px] border-b border-[rgba(0,0,0,0.08)] flex items-center gap-[8px]">
                    <div className="flex gap-[2px] shrink-0">
                      <div className="w-[5px] h-[5px] rounded-full bg-[#EA4335]" />
                      <div className="w-[5px] h-[5px] rounded-full bg-[#FBBC05]" />
                      <div className="w-[5px] h-[5px] rounded-full bg-[#34A853]" />
                    </div>
                    <div className="flex-1 bg-white rounded-[6px] px-[10px] py-[5px] flex items-center gap-[6px] border border-[rgba(0,0,0,0.12)]">
                      <IconSearch className="w-[11px] h-[11px]" color="rgba(0,0,0,0.4)" />
                      <span className="text-[11px] text-[rgba(0,0,0,0.55)]">dentista en Córdoba</span>
                    </div>
                  </div>
                  {/* Result card */}
                  <div className="p-[14px_16px]">
                    <div className="flex items-start gap-[10px]">
                      <div className="w-[30px] h-[30px] rounded-[7px] grad-bg flex items-center justify-center shrink-0 mt-[1px]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[12px] font-bold text-[#1558d6] leading-[1.2] mb-[3px]">Tu Negocio · Dentista en Córdoba</p>
                        <div className="flex items-center gap-[3px] mb-[3px]">
                          <span className="text-[10px] text-[#e37400] font-bold">4.9</span>
                          <div className="flex gap-[1px]">
                            {[1,2,3,4,5].map(s => <IconStar key={s} />)}
                          </div>
                          <span className="text-[9px] text-[rgba(0,0,0,0.5)]">47 reseñas</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-[6px] gap-y-[2px]">
                          <span className="text-[9px] text-[#137333] font-semibold">Abierto ahora</span>
                          <span className="text-[9px] text-[rgba(0,0,0,0.4)]">· Dentista · Córdoba</span>
                        </div>
                        <div className="flex gap-[5px] mt-[8px]">
                          {['Reservar turno', 'Llamar', 'Sitio web'].map(btn => (
                            <span key={btn} className="text-[8px] font-bold text-[#1558d6] border border-[rgba(21,88,214,0.3)] rounded-[4px] px-[6px] py-[3px] bg-[rgba(21,88,214,0.04)]">{btn}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-[16px] pb-[10px]">
                    <div className="text-[9px] text-[rgba(0,0,0,0.35)] font-medium border-t border-[rgba(0,0,0,0.06)] pt-[8px]">
                      Así es como tus clientes te encuentran. Hoy no están encontrando nada.
                    </div>
                  </div>
                </div>

                {/* 3 stats */}
                <div className="grid grid-cols-3 gap-[8px]">
                  {[
                    { num: '30d', label: 'Web publicada' },
                    { num: '$0', label: 'Hosting mensual' },
                    { num: '60d', label: 'Top Google local' },
                  ].map((s, i) => (
                    <div key={i} className="bg-[rgba(255,255,255,0.13)] backdrop-blur-[14px] border-[0.5px] border-[rgba(255,255,255,0.22)] rounded-[12px] p-[12px_10px] text-center">
                      <span className="text-[22px] font-extrabold text-white tracking-[-1px] leading-none block mb-[2px]">{s.num}</span>
                      <span className="text-[9px] font-bold text-[rgba(255,255,255,0.6)] leading-[1.3]">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* WhatsApp notification */}
                <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] border-[0.5px] border-[rgba(255,255,255,0.18)] rounded-[12px] p-[12px_14px]">
                  <div className="text-[9px] font-bold text-[rgba(255,255,255,0.45)] uppercase tracking-[0.08em] mb-[7px]">Notificación automática — WhatsApp</div>
                  <div className="bg-[rgba(37,211,102,0.18)] border-[0.5px] border-[rgba(37,211,102,0.35)] rounded-[8px] p-[9px_11px] flex items-start gap-[8px]">
                    <div className="w-[16px] h-[16px] rounded-full bg-[rgba(37,211,102,0.6)] flex items-center justify-center shrink-0 mt-[1px]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[8px] h-[8px]">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] text-[rgba(255,255,255,0.92)] font-bold leading-[1.3] mb-[2px]">Nueva consulta desde la web</p>
                      <p className="text-[10px] text-[rgba(255,255,255,0.6)] leading-[1.35]">Martín — quiere saber precios para implantes</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ══════ COSTO DE LA INVISIBILIDAD ══════ */}
        <section className="bg-[var(--cream)] py-[80px] lg:py-[110px] relative overflow-hidden">
          <AnimatedWatermark text="INVISIBLE" direction="right" className="-bottom-[10px] -right-[10px] text-[clamp(70px,13vw,160px)] text-[rgba(28,24,40,0.025)] tracking-[-4px] italic" />
          <PageWrapper className="relative z-10">
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
                El problema real
              </div>
              <h2 className="text-[clamp(28px,3.8vw,50px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[14px]">
                No es mala suerte.<br />
                <GradientText>Es que tus clientes eligen al que aparece.</GradientText>
              </h2>
              <p className="text-[16px] leading-[1.75] text-[var(--muted)] max-w-[560px] mb-[52px]">
                Google elige en 3 segundos. Si no estás ahí cuando alguien busca lo que ofrecés, ese cliente no existe para vos. Y lo que duele es que ni lo sabés.
              </p>
            </MotionWrapper>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-[14px] mb-[44px]" staggerDelay={0.1}>
              {[
                {
                  Icon: IconSearch,
                  title: 'Tu competidor aparece. Vos no.',
                  body: 'El cliente busca, ve tres resultados con foto, reseñas y horario. Vos no estás. Llama al que aparece. No siente que eligió mal — simplemente no te encontró.',
                },
                {
                  Icon: IconUserX,
                  title: 'La recomendación que no llega.',
                  body: 'Alguien te recomienda. La persona te googlea para confirmar que existís. No aparece nada, o aparece algo que no da confianza. La recomendación muere ahí.',
                },
                {
                  Icon: IconMonitorX,
                  title: 'La web que destruye credibilidad.',
                  body: 'Una web lenta o desactualizada no es neutral — activamente trabaja en tu contra. Mandás el link a un prospecto y perdés credibilidad antes de abrir la boca.',
                },
              ].map((card, i) => (
                <StaggerItem key={i}>
                  <div className="bg-white border-[0.5px] border-[rgba(28,24,40,0.09)] rounded-[20px] p-[28px] h-full hover:shadow-[0_14px_36px_rgba(28,24,40,0.08)] hover:-translate-y-[3px] transition-all duration-300 group">
                    <div className="w-[44px] h-[44px] rounded-[11px] bg-[rgba(232,65,122,0.07)] border-[0.5px] border-[rgba(232,65,122,0.14)] flex items-center justify-center mb-[18px] text-[var(--mg)] transition-colors group-hover:bg-[rgba(232,65,122,0.12)]">
                      <card.Icon className="w-[20px] h-[20px]" />
                    </div>
                    <h3 className="text-[16px] font-extrabold text-[var(--dark)] mb-[10px] leading-[1.3] tracking-[-0.3px]">{card.title}</h3>
                    <p className="text-[13px] leading-[1.65] text-[var(--muted)]">{card.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <MotionWrapper type="fadeUp" delay={0.3}>
              <div className="bg-gradient-to-r from-[rgba(232,65,122,0.06)] to-[rgba(245,166,35,0.04)] border-[0.5px] border-[rgba(232,65,122,0.14)] rounded-[16px] p-[20px_24px] flex items-start gap-[14px] max-w-[660px]">
                <div className="w-[36px] h-[36px] rounded-[9px] bg-[rgba(232,65,122,0.08)] border-[0.5px] border-[rgba(232,65,122,0.18)] flex items-center justify-center shrink-0">
                  <IconBulb />
                </div>
                <p className="text-[14px] text-[var(--dark)] leading-[1.6]">
                  <strong>Starter Presence resuelve los tres.</strong> En 30 días aparecés en Google, tu web transmite profesionalismo real, y cada consulta te llega sola — organizada, con datos, lista para que respondas.
                </p>
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
                Qué recibís
              </div>
              <h2 className="text-[clamp(28px,3.8vw,48px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[14px]">
                No una lista de features.<br /><GradientText>Lo que cada cosa significa para tu negocio.</GradientText>
              </h2>
              <p className="text-[16px] leading-[1.75] text-[var(--muted-l)] max-w-[540px] mb-[48px]">
                Cada componente existe para resolver un problema concreto. Si no resolviera nada, no lo incluiríamos.
              </p>
            </MotionWrapper>

            <StaggerContainer className="flex flex-col gap-[8px]" staggerDelay={0.07}>
              {INCLUDES.map((item, i) => (
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

        {/* ══════ ANTES / DESPUÉS ══════ */}
        <section className="bg-[var(--cream)] py-[80px] lg:py-[110px] border-t-[0.5px] border-[rgba(28,24,40,0.07)]">
          <PageWrapper>
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
                La transformación
              </div>
              <h2 className="text-[clamp(28px,3.5vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[44px]">
                Lo que cambia en 30 días.<br /><GradientText>Concreto. Sin promesas vacías.</GradientText>
              </h2>
            </MotionWrapper>

            <MotionWrapper type="fadeUp" delay={0.1}>
              <div className="bg-[var(--dark)] rounded-[24px] overflow-hidden shadow-[0_24px_80px_rgba(28,24,40,0.12)]">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* ANTES */}
                  <div className="p-[36px_40px] border-b-[0.5px] lg:border-b-0 lg:border-r-[0.5px] border-[rgba(247,246,242,0.07)]">
                    <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-[rgba(247,246,242,0.28)] mb-[20px] flex items-center gap-[8px]">
                      <span className="w-[6px] h-[6px] rounded-full bg-[rgba(247,246,242,0.22)] inline-block" />
                      Hoy
                    </div>
                    <ul className="flex flex-col gap-[11px]">
                      {[
                        'Sin web — o con una que da vergüenza mostrar',
                        'Invisible en Google · los clientes no te encuentran',
                        'El 100% de leads por boca a boca — impredecible',
                        'No sabés cuánta gente llega ni desde dónde',
                        'Seguimiento de consultas a mano, sin organización',
                        'Pagando hosting mes a mes sin retorno visible',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-[10px] text-[14px] text-[rgba(247,246,242,0.4)] leading-[1.5]">
                          <IconX size={15} color="rgba(247,246,242,0.2)" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* DESPUÉS */}
                  <div className="p-[36px_40px] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[220px] h-[220px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(232,65,122,0.09) 0%, transparent 65%)' }} />
                    <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[20px] flex items-center gap-[8px] relative z-10">
                      <span className="w-[6px] h-[6px] rounded-full bg-[var(--am)] inline-block" />
                      30 días después
                    </div>
                    <ul className="flex flex-col gap-[11px] relative z-10">
                      {[
                        'Web profesional que da confianza al primer vistazo',
                        'Aparecés en Google cuando te buscan',
                        'Leads que llegan solos — sin salir a buscarlos',
                        'Dashboard que muestra visitas, fuente y comportamiento',
                        'Cada consulta al WhatsApp, organizada, lista para responder',
                        '$0 de hosting mensual en la mayoría de proyectos',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-[10px] text-[14px] text-[var(--cream)] leading-[1.5]">
                          <IconCheck size={15} color="#1D9E75" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Bottom CTA */}
                <div className="border-t-[0.5px] border-[rgba(247,246,242,0.07)] p-[18px_32px] lg:p-[18px_40px] flex flex-wrap items-center justify-between gap-[14px] bg-[rgba(247,246,242,0.03)]">
                  <p className="text-[13px] text-[var(--muted-l)]">¿Querés este resultado en tu negocio?</p>
                  <OpenMeetingBtn className="px-[22px] py-[10px] rounded-[8px] grad-bg text-white text-[13px] font-bold leading-none cursor-pointer transition-all hover:opacity-90 hover:-translate-y-[1px] border-none shadow-[0_4px_16px_rgba(232,65,122,0.25)]">
                    Agendá la llamada →
                  </OpenMeetingBtn>
                </div>
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
                Autodiagnóstico
              </div>
              <h2 className="text-[clamp(28px,3.5vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[44px]">
                <GradientText>Starter Presence</GradientText> es para vos si...
              </h2>
            </MotionWrapper>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
              <MotionWrapper type="fadeLeft">
                <div className="bg-white border-[0.5px] border-[rgba(28,24,40,0.09)] rounded-[20px] p-[32px] h-full shadow-[0_8px_32px_rgba(28,24,40,0.04)]">
                  <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#1D9E75] mb-[22px] flex items-center gap-[8px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#1D9E75] inline-block" />
                    Para vos
                  </div>
                  <ul className="flex flex-col gap-[12px]">
                    {[
                      'Tu negocio funciona pero no tenés web, o la que tenés no genera nada',
                      'Tus clientes llegan por recomendación — querés sumarle un canal digital propio',
                      'Buscás tu negocio en Google y no aparece nada confiable',
                      'Querés algo profesional sin depender de nadie para cambios básicos',
                      'No querés pagar hosting mensual eternamente',
                      'Querés saber qué gente entra, desde dónde y qué hacen',
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
                    <span className="w-[6px] h-[6px] rounded-full bg-[rgba(28,24,40,0.28)] inline-block" />
                    Otro paquete te sirve más si...
                  </div>
                  <ul className="flex flex-col gap-[14px]">
                    {[
                      { text: 'Ya tenés web y leads, necesitás automatizar la captación', pack: 'Growth Machine', href: '/servicios/growth-machine' },
                      { text: 'Querés un canal orgánico predecible con SEO y contenido a largo plazo', pack: 'Full Funnel 360', href: '/servicios/full-funnel-360' },
                      { text: 'Tenés producto y querés vender online directo, sin comisiones', pack: 'Ecommerce Pro', href: '/servicios/ecommerce-pro' },
                      { text: 'Tu equipo gasta horas en tareas repetitivas que podrían automatizarse', pack: 'Automation Retainer', href: '/servicios/automation-retainer' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-[10px] text-[14px] leading-[1.5]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="rgba(28,24,40,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px] mt-[1px] shrink-0">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                        <span className="text-[var(--muted)]">{item.text}{' '}
                          <a href={item.href} className="text-[var(--mg)] font-bold no-underline hover:opacity-80 transition-opacity whitespace-nowrap">Ver {item.pack} →</a>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-[20px] pt-[16px] border-t-[0.5px] border-[rgba(28,24,40,0.07)]">
                    <p className="text-[12px] text-[var(--muted)] leading-[1.6]">
                      ¿No sabés cuál corresponde?{' '}
                      <a href="/auditoria-web-gratuita" className="text-[var(--mg)] font-bold no-underline hover:opacity-80">Pedí la auditoría gratuita →</a>
                    </p>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </PageWrapper>
        </section>

        {/* ══════ CÓMO FUNCIONA (3 pasos) ══════ */}
        <section className="bg-[var(--dark)] py-[80px] lg:py-[110px] relative overflow-hidden border-t-[0.5px] border-[rgba(247,246,242,0.06)]">
          <AnimatedWatermark text="PROCESO" direction="right" className="-bottom-[10px] -right-[10px] text-[clamp(70px,13vw,160px)] text-[rgba(247,246,242,0.025)] tracking-[-4px] italic" />
          <PageWrapper className="relative z-10">
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
                Cómo funciona
              </div>
              <h2 className="text-[clamp(28px,3.8vw,48px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[14px]">
                De la primera conversación<br /><GradientText>a la web publicada en 30 días.</GradientText>
              </h2>
              <p className="text-[16px] leading-[1.7] text-[var(--muted-l)] max-w-[480px] mb-[52px]">
                Sin procesos interminables. Sin reuniones que no van a ningún lado. Tres pasos y listo.
              </p>
            </MotionWrapper>

            <MotionWrapper type="fadeUp" delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-[rgba(247,246,242,0.05)] rounded-[20px] overflow-hidden">
                {[
                  {
                    num: '01',
                    time: 'Día 0',
                    title: 'Llamada de diagnóstico',
                    body: '30 minutos. Te escuchamos. Entendemos tu negocio y tus objetivos. Al final sabés exactamente qué vas a recibir, cuándo y cuánto. Si no somos la opción correcta, también te lo decimos sin rodeos.',
                  },
                  {
                    num: '02',
                    time: 'Días 1–30',
                    title: 'Construimos juntos',
                    body: 'Arrancamos con propuesta aprobada. Ves el avance en tiempo real. Cada etapa tiene revisión antes de seguir. No desaparecemos — te mantenemos informado durante todo el proceso.',
                  },
                  {
                    num: '03',
                    time: 'Día 30+',
                    title: 'Publicamos y te entregamos todo',
                    body: 'Lanzamos la web, entregamos todos los accesos (son tuyos, siempre), documentamos cada herramienta. A los 30 días del lanzamiento hacemos check-in para medir resultados y ajustar.',
                  },
                ].map((step, i) => (
                  <div key={i} className="bg-[rgba(247,246,242,0.03)] p-[32px_28px] hover:bg-[rgba(247,246,242,0.055)] transition-colors">
                    <div className="w-[50px] h-[50px] rounded-[12px] grad-bg flex items-center justify-center text-[15px] font-extrabold text-white mb-[16px] shadow-[0_6px_20px_rgba(232,65,122,0.22)]">{step.num}</div>
                    <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[7px]">{step.time}</div>
                    <h3 className="text-[16px] font-extrabold text-[var(--cream)] mb-[10px] tracking-[-0.3px]">{step.title}</h3>
                    <p className="text-[13px] leading-[1.65] text-[var(--muted-l)]">{step.body}</p>
                  </div>
                ))}
              </div>
            </MotionWrapper>
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
                  'Accesos 100% tuyos',
                  'Sin contratos de permanencia',
                  'Propuesta antes de cobrar',
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
          headline={<>30 días a partir de hoy,<br /><GradientText>tu negocio aparece en Google.</GradientText></>}
          subheadline="La llamada es gratuita y dura 30 minutos. Al final sabés exactamente qué recibís, cuánto cuesta y si tiene sentido avanzar. Sin compromiso de ningún tipo."
          mainCta={{ label: 'Agendá tu llamada gratuita →', href: '#' }}
          disclaimer="Sin compromiso · Sin costos ocultos · Respondemos en menos de 2 horas"
          watermarkText="EMPEZÁ"
          cards={[
            {
              tag: 'Tengo web pero no funciona',
              title: 'Auditoría gratuita primero',
              desc: 'Analizamos tu web en 2 horas y recibís el diagnóstico con las 3 acciones concretas de mayor impacto.',
              href: '/auditoria-web-gratuita',
            },
            {
              tag: 'Todavía no tengo web',
              title: 'Mini-curso gratuito · 5 emails',
              desc: 'Lo que necesitás saber antes de invertir en tu presencia digital. Gratis, en 5 días.',
              href: '/email-course',
            },
            {
              tag: 'Ya sé lo que quiero',
              title: 'Llamada de diagnóstico',
              desc: '30 minutos. Sin ventas. Al final sabés qué incluye Starter Presence para tu negocio específico.',
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
