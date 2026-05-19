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
function IconShoppingCart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
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
function IconSmartphone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function IconRefreshCw() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
      <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
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
function IconAlertTriangle({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}
function IconPackage({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
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
const CONVERSION_KILLERS = [
  { Icon: IconClock, title: 'Lentitud en mobile', body: '+3 segundos de carga = 50% de abandono. El 70% del tráfico ecommerce viene del celular — y la mayoría de tiendas fallan en este punto.' },
  { Icon: IconTrendingDown, title: 'Checkout con fricción', body: 'Cada campo extra = 10% de abandono. Si pedís registro obligatorio antes del pago, perdés el 30% de los compradores antes de llegar a la pantalla de pago.' },
  { Icon: IconShield, title: 'Sin señales de confianza', body: 'Sin reseñas visibles, sin política de devolución clara, sin logos de pago reconocidos — el usuario no compra. La confianza se construye o se destruye en 3 segundos.' },
  { Icon: IconRefreshCw, title: 'Sin recuperación de abandono', body: 'El 65-75% de los carritos se abandonan. Sin sistema de recuperación, esa venta está muerta. Con uno bien configurado, recuperás el 10-15%.' },
  { Icon: IconAlertTriangle, title: 'Proceso post-compra manual', body: 'Si la confirmación tarda o el comprador no sabe qué pasa después de pagar, llama al soporte, hace un contracargo o simplemente no vuelve a comprarte.' },
];

const TECH_OPTIONS = [
  {
    name: 'A — Máximo control',
    for: 'Marcas que quieren independencia total y performance máxima',
    how: 'Next.js + Stripe + base de datos propia',
    why: 'Carga en menos de 1 segundo. Sin dependencia de plataforma. Sin costos mensuales por "plan Premium". Si Shopify sube precios mañana, no importa — el código es tuyo.',
    best: true,
  },
  {
    name: 'B — Ya tenés WordPress',
    for: 'Negocios con inversión existente en WooCommerce',
    how: 'Optimización WooCommerce + automatizaciones',
    why: 'No tiras lo que tenés. Aceleramos el sitio, bajamos el tiempo de carga y sumamos automatizaciones post-compra que no tenías.',
    best: false,
  },
  {
    name: 'C — Headless Shopify',
    for: 'Marcas con alto volumen que quieren lo mejor de ambos mundos',
    how: 'Frontend en Next.js + Shopify como backend',
    why: 'El SEO y la velocidad de Next.js sobre la infraestructura de pagos e inventario de Shopify. Sin sacrificar ninguno de los dos.',
    best: false,
  },
];

const POST_PURCHASE = [
  { time: '0 min', event: 'Venta confirmada', desc: 'Email automático al comprador con resumen completo del pedido' },
  { time: '1 min', event: 'Aviso al equipo', desc: 'WhatsApp o email interno con detalle de la venta para preparar el pedido' },
  { time: '5 min', event: 'Recibo generado', desc: 'PDF automático con los datos fiscales correspondientes, enviado sin que nadie lo genere' },
  { time: '3 días', event: 'Seguimiento post-entrega', desc: '"¿Llegó todo bien?" — simple, automático, en el momento justo' },
  { time: '7 días', event: 'Solicitud de reseña', desc: 'Pedido automático en el momento de mayor satisfacción — cuando ya usó el producto y está feliz' },
  { time: 'Continuo', event: 'Alerta de stock bajo', desc: 'Nunca te quedás sin saber que algo se está agotando — el sistema te avisa antes de que pase' },
];

const FAQ_ITEMS = [
  { q: '¿Es mejor Shopify o Next.js para mi caso?', a: 'Depende de tu volumen, tu equipo técnico y tus necesidades. No recomendamos la opción más cara — recomendamos la correcta para cada negocio. En la llamada evaluamos tu caso y te decimos sin rodeos cuál tiene más sentido.' },
  { q: '¿Puedo migrar mi tienda de WooCommerce sin perder datos?', a: 'Sí. La migración incluye productos, imágenes, historial de clientes y pedidos. Hacemos la migración en etapas para que en ningún momento tu tienda esté offline o pierdas ventas durante el proceso.' },
  { q: '¿Cómo funciona Stripe en Argentina/LATAM?', a: 'Stripe funciona en Argentina, México, Colombia, Chile, España y más. La pasarela correcta depende de tu ubicación y moneda. En la llamada te explicamos la configuración exacta para tu caso — incluyendo opciones para recibir pagos en USD desde el exterior.' },
  { q: '¿La tienda va a ser mía o voy a depender de ustedes?', a: 'Todo el código y los accesos te quedan a vos. Si el día de mañana querés que lo gestione otro desarrollador o hacés cambios internamente, podés hacerlo sin perder nada. El código es tuyo desde el primer día.' },
  { q: '¿Puedo agregar productos después sin necesitar ayuda técnica?', a: 'Sí. El panel de administración te permite agregar, editar y gestionar productos sin ningún conocimiento técnico. Si es Next.js con CMS headless, operás todo desde una interfaz visual simple.' },
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default async function EcommerceProPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tLayout = await getTranslations({ locale, namespace: 'Layout' });

  const BASE = 'https://vacaredigitalsolutions.com';
  const isEn = locale === 'en';
  const svcPath = isEn ? `${BASE}/en/services/ecommerce-pro` : `${BASE}/es/servicios/ecommerce-pro`;

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
        langToggleText={tLayout('Nav.lang')}
        ctaText="Agendá una llamada →"
        ctaHref="#ctaf"
        links={[
          { label: 'Inicio', href: '/' },
          { label: 'Servicios', href: '/servicios' },
          { label: 'Casos', href: '/#case' },
          { label: 'Auditoría gratis', href: '/auditoria-web-gratuita' },
        ]}
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
                  Paquete 04 · Tienda directa y automatizada
                </div>

                <h1 className="text-[clamp(34px,4.5vw,58px)] font-extrabold leading-[1.07] tracking-[-2px] text-[var(--cream)] mb-[18px]">
                  <span className="block grad-text text-[clamp(22px,2.8vw,36px)] mb-[8px]">Ecommerce Pro</span>
                  Cada venta por Booking<br />o MercadoLibre le regala<br />
                  <GradientText>el 15-25% a otra empresa.</GradientText>
                </h1>

                <p className="text-[16px] leading-[1.75] text-[var(--muted-l)] max-w-[460px] mb-[28px]">
                  Ecommerce Pro construye tu canal de venta directo — rápido, automatizado y libre de comisiones. Cada venta activa confirmaciones, avisos al equipo y seguimientos de forma automática.
                </p>

                <ul className="flex flex-col gap-[10px] mb-[36px] max-w-[440px]">
                  {[
                    'Tienda directa — $0 de comisión por cada venta',
                    'Carga en menos de 1 segundo en mobile',
                    'Post-compra automatizado: confirmación, seguimiento y reseña',
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
                    Quiero mi tienda que vende →
                  </OpenMeetingBtn>
                  <a href="#includes" className="px-[24px] py-[15px] rounded-[10px] border-[1.5px] border-[rgba(247,246,242,0.15)] text-[var(--cream)] text-[15px] font-bold leading-none no-underline inline-flex items-center transition-all hover:border-[rgba(247,246,242,0.38)] hover:-translate-y-[1px]">
                    Ver qué incluye ↓
                  </a>
                </div>
                <p className="text-[12px] text-[rgba(247,246,242,0.3)] font-medium">
                  Llamada gratuita · Sin compromiso · Respondemos en 2 horas
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
                  {[
                    { num: '20%', label: 'Comisión Booking promedio', sub: 'que dejás de pagar' },
                    { num: '<1s', label: 'Velocidad de carga', sub: 'Next.js en mobile' },
                    { num: '$0', label: 'Comisión por venta directa', sub: 'tuya al 100%' },
                    { num: '5', label: 'Automatizaciones post-compra', sub: 'incluidas desde el día 1' },
                  ].map((s, i) => (
                    <div key={i} className="bg-[rgba(255,255,255,0.12)] backdrop-blur-[14px] border-[0.5px] border-[rgba(255,255,255,0.22)] rounded-[12px] p-[14px_12px]">
                      <span className="text-[26px] font-extrabold text-white tracking-[-1px] leading-none block mb-[3px]">{s.num}</span>
                      <span className="text-[10px] font-bold text-[rgba(255,255,255,0.75)] leading-[1.3] block">{s.label}</span>
                      <span className="text-[9px] text-[rgba(255,255,255,0.45)]">{s.sub}</span>
                    </div>
                  ))}
                </div>

                {/* "Comisión ahorrada" calc */}
                <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] border-[0.5px] border-[rgba(255,255,255,0.18)] rounded-[12px] p-[14px_16px]">
                  <div className="text-[9px] font-bold text-[rgba(255,255,255,0.45)] uppercase tracking-[0.08em] mb-[8px]">Comisión regalada por año</div>
                  {[
                    { industry: 'Hostel', monthly: '$8,000', pct: '18%', year: '$17,280' },
                    { industry: 'Tienda online', monthly: '$4,000', pct: '22%', year: '$10,560' },
                  ].map((row, i) => (
                    <div key={i} className={`flex items-center justify-between ${i === 0 ? 'mb-[6px] pb-[6px] border-b border-[rgba(255,255,255,0.12)]' : ''}`}>
                      <span className="text-[10px] text-[rgba(255,255,255,0.65)]">{row.industry} · {row.monthly}/mes · {row.pct}</span>
                      <span className="text-[12px] font-extrabold text-[rgba(255,220,100,0.9)]">{row.year}/año</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════ CALCULADORA DE COMISIONES ══════ */}
        <section className="bg-[var(--cream)] py-[80px] lg:py-[110px] relative overflow-hidden">
          <AnimatedWatermark text="COMISIÓN" direction="right" className="-bottom-[10px] -right-[10px] text-[clamp(70px,13vw,160px)] text-[rgba(28,24,40,0.025)] tracking-[-4px] italic" />
          <PageWrapper className="relative z-10">
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--muted)] block" />
                El argumento financiero
              </div>
              <h2 className="text-[clamp(28px,3.8vw,50px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[14px]">
                Calculá cuánto estás<br />
                <GradientText>regalando cada año.</GradientText>
              </h2>
              <p className="text-[16px] leading-[1.75] text-[var(--muted)] max-w-[580px] mb-[48px]">
                Una tienda propia no es un gasto. Es recuperar lo que ya generaste — sin darlo a otra empresa.
              </p>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px] mb-[36px]">
              {[
                { industry: 'Hostel / Hotel boutique', monthly: '$8,000', pct: '18%', monthly_lost: '$1,440', yearly: '$17,280', platform: 'Booking · Hostelworld' },
                { industry: 'Tienda de producto', monthly: '$4,000', pct: '22%', monthly_lost: '$880', yearly: '$10,560', platform: 'MercadoLibre · Amazon' },
                { industry: 'Cursos y digital', monthly: '$3,000', pct: '15%', monthly_lost: '$450', yearly: '$5,400', platform: 'Hotmart · Teachable' },
              ].map((example, i) => (
                <MotionWrapper key={i} type="fadeUp" delay={i * 0.08}>
                  <div className="bg-white border-[0.5px] border-[rgba(28,24,40,0.09)] rounded-[20px] p-[28px] h-full shadow-[0_6px_24px_rgba(28,24,40,0.04)] hover:shadow-[0_12px_36px_rgba(28,24,40,0.07)] hover:-translate-y-[2px] transition-all">
                    <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--muted)] mb-[14px]">{example.platform}</div>
                    <h3 className="text-[15px] font-extrabold text-[var(--dark)] mb-[16px] tracking-[-0.2px]">{example.industry}</h3>
                    <div className="flex flex-col gap-[8px] mb-[16px]">
                      <div className="flex justify-between text-[12px]">
                        <span className="text-[var(--muted)]">Facturación mensual</span>
                        <span className="font-bold text-[var(--dark)]">{example.monthly}</span>
                      </div>
                      <div className="flex justify-between text-[12px]">
                        <span className="text-[var(--muted)]">Comisión del marketplace</span>
                        <span className="font-bold text-[var(--mg)]">{example.pct}</span>
                      </div>
                      <div className="flex justify-between text-[12px]">
                        <span className="text-[var(--muted)]">Regalado por mes</span>
                        <span className="font-bold text-[var(--mg)]">{example.monthly_lost}</span>
                      </div>
                    </div>
                    <div className="bg-[rgba(232,65,122,0.05)] border-[0.5px] border-[rgba(232,65,122,0.14)] rounded-[10px] p-[12px] text-center">
                      <span className="text-[10px] text-[var(--muted)] block mb-[2px]">Regalado por año</span>
                      <span className="text-[24px] font-extrabold text-[var(--mg)] tracking-[-1px]">{example.yearly}</span>
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </div>

            <MotionWrapper type="fadeUp" delay={0.3}>
              <p className="text-center text-[14px] text-[var(--muted)] max-w-[480px] mx-auto leading-[1.7]">
                Con una tienda directa, esos números se quedan en tu negocio.<br />
                <strong className="text-[var(--dark)]">La tienda se paga sola en los primeros meses.</strong>
              </p>
            </MotionWrapper>
          </PageWrapper>
        </section>

        {/* ══════ 5 ASESINOS DE CONVERSIÓN ══════ */}
        <section className="bg-[var(--dark)] py-[80px] lg:py-[110px] border-t-[0.5px] border-[rgba(247,246,242,0.06)] relative overflow-hidden">
          <AnimatedWatermark text="CONVERSIÓN" direction="left" className="-bottom-[10px] -left-[8px] text-[clamp(60px,10vw,140px)] text-[rgba(247,246,242,0.025)] tracking-[-4px] italic" />
          <PageWrapper className="relative z-10">
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
                Lo que mata las conversiones
              </div>
              <h2 className="text-[clamp(28px,3.8vw,48px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[14px]">
                Tu tienda puede estar perdiendo<br /><GradientText>el 60% de las ventas por esto.</GradientText>
              </h2>
              <p className="text-[16px] leading-[1.75] text-[var(--muted-l)] max-w-[520px] mb-[48px]">
                La mayoría de los dueños de tienda nunca probaron su propio checkout en el celular. Estos son los 5 problemas más comunes — y cómo Ecommerce Pro los resuelve.
              </p>
            </MotionWrapper>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[12px]" staggerDelay={0.07}>
              {CONVERSION_KILLERS.map((card, i) => (
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
                    <h3 className="text-[15px] font-extrabold text-white mb-[10px] tracking-[-0.2px]">Ecommerce Pro resuelve los cinco.</h3>
                    <p className="text-[13px] leading-[1.6] text-[rgba(255,255,255,0.75)]">Velocidad, checkout sin fricción, confianza, recuperación de abandono y post-compra automatizado — todo desde el día del lanzamiento.</p>
                  </div>
                  <OpenMeetingBtn className="mt-[20px] w-full py-[12px] rounded-[10px] bg-white text-[var(--mg)] text-[13px] font-bold leading-none cursor-pointer transition-all hover:bg-[rgba(255,255,255,0.9)] border-none">
                    Quiero mi tienda →
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
                Tu situación, tu solución
              </div>
              <h2 className="text-[clamp(28px,3.5vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[14px]">
                La tienda que construimos<br /><GradientText>depende de tu negocio.</GradientText>
              </h2>
              <p className="text-[16px] leading-[1.75] text-[var(--muted)] max-w-[500px] mb-[44px]">
                No hay una solución única. Hay tres opciones — cada una correcta para una situación distinta.
              </p>
            </MotionWrapper>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[16px]">
              {TECH_OPTIONS.map((opt, i) => (
                <MotionWrapper key={i} type="fadeUp" delay={i * 0.09}>
                  <div className={`rounded-[20px] p-[28px] h-full border-[0.5px] transition-all ${opt.best ? 'bg-[var(--dark)] border-[rgba(247,246,242,0.12)] shadow-[0_12px_48px_rgba(28,24,40,0.2)]' : 'bg-white border-[rgba(28,24,40,0.09)] shadow-[0_6px_24px_rgba(28,24,40,0.04)]'}`}>
                    {opt.best && (
                      <div className="inline-flex items-center gap-[5px] text-[9px] font-bold uppercase tracking-[0.1em] text-[var(--am)] bg-[rgba(245,166,35,0.1)] border-[0.5px] border-[rgba(245,166,35,0.25)] rounded-[20px] px-[10px] py-[4px] mb-[14px]">
                        <span className="w-[4px] h-[4px] rounded-full bg-[var(--am)]" /> Más elegida
                      </div>
                    )}
                    <h3 className={`text-[15px] font-extrabold mb-[8px] tracking-[-0.2px] ${opt.best ? 'text-[var(--cream)]' : 'text-[var(--dark)]'}`}>{opt.name}</h3>
                    <div className={`text-[10px] font-bold uppercase tracking-[0.1em] mb-[14px] ${opt.best ? 'text-[rgba(247,246,242,0.4)]' : 'text-[var(--muted)]'}`}>
                      Para: {opt.for}
                    </div>
                    <div className={`text-[11px] font-bold mb-[4px] ${opt.best ? 'text-[var(--am)]' : 'text-[var(--mg)]'}`}>Cómo</div>
                    <p className={`text-[13px] mb-[14px] leading-[1.5] ${opt.best ? 'text-[var(--muted-l)]' : 'text-[var(--muted)]'}`}>{opt.how}</p>
                    <div className={`text-[11px] font-bold mb-[4px] ${opt.best ? 'text-[var(--am)]' : 'text-[var(--mg)]'}`}>Por qué</div>
                    <p className={`text-[13px] leading-[1.6] ${opt.best ? 'text-[var(--muted-l)]' : 'text-[var(--muted)]'}`}>{opt.why}</p>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </PageWrapper>
        </section>

        {/* ══════ TIMELINE POST-COMPRA ══════ */}
        <section className="bg-[var(--dark)] py-[80px] lg:py-[110px] border-t-[0.5px] border-[rgba(247,246,242,0.06)] relative overflow-hidden">
          <AnimatedWatermark text="AUTOMÁTICO" direction="right" className="-bottom-[10px] -right-[10px] text-[clamp(60px,10vw,140px)] text-[rgba(247,246,242,0.025)] tracking-[-4px] italic" />
          <PageWrapper className="relative z-10">
            <MotionWrapper type="fadeUp">
              <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--am)] mb-[16px]">
                <i className="w-[16px] h-[1.5px] bg-[var(--am)] block" />
                Post-compra automatizado
              </div>
              <h2 className="text-[clamp(28px,3.8vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] text-[var(--cream)] mb-[14px]">
                Lo que pasa automáticamente<br /><GradientText>después de cada venta.</GradientText>
              </h2>
              <p className="text-[16px] leading-[1.75] text-[var(--muted-l)] max-w-[520px] mb-[48px]">
                Cada venta desencadena este proceso completo. Sin que vos hagas nada. Sin que tu equipo tenga que recordar mandarlo.
              </p>
            </MotionWrapper>

            <MotionWrapper type="fadeUp" delay={0.1}>
              <div className="max-w-[640px] mx-auto">
                <div className="flex flex-col gap-0">
                  {POST_PURCHASE.map((item, i) => (
                    <div key={i} className="flex gap-[16px]">
                      {/* Timeline line */}
                      <div className="flex flex-col items-center shrink-0">
                        <div className={`w-[36px] h-[36px] rounded-full flex items-center justify-center shrink-0 ${i === 0 ? 'grad-bg shadow-[0_4px_16px_rgba(232,65,122,0.25)]' : 'bg-[rgba(247,246,242,0.07)] border-[0.5px] border-[rgba(247,246,242,0.12)]'}`}>
                          <span className="text-[9px] font-extrabold text-white whitespace-nowrap">{item.time}</span>
                        </div>
                        {i < POST_PURCHASE.length - 1 && (
                          <div className="w-[1.5px] flex-1 min-h-[20px] bg-[rgba(247,246,242,0.08)] my-[3px]" />
                        )}
                      </div>
                      {/* Content */}
                      <div className={`pb-[20px] flex-1 ${i === POST_PURCHASE.length - 1 ? 'pb-0' : ''}`}>
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
                Caso real
              </div>
              <h2 className="text-[clamp(28px,3.5vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-[40px]">
                De depender 100% de OTAs a generar<br /><GradientText>el 30% directo en 6 meses.</GradientText>
              </h2>
            </MotionWrapper>
            <CaseStudyBlock
              tag="Hostel · Cusco, Perú"
              title={<>Supertramp dejó de regalar el 18% de cada reserva a Booking y Hostelworld. <span style={{ background: 'linear-gradient(135deg,#E8417A,#F5A623)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>30% de su facturación llega directo desde la web.</span></>}
              description="100% de reservas por OTAs. 15-20% de comisión en cada una. Velocidad crítica en mobile, sin sistema de reserva directa, 0 posicionamiento. Construimos la tienda directa, el sistema de recuperación de abandono y las confirmaciones automáticas."
              metrics={[
                { num: '30%', label: 'Facturación directa desde la web' },
                { num: '0%', label: 'Comisión en esas reservas' },
                { num: '6m', label: 'Para ver resultados reales' },
              ]}
              linkHref="/case-studies/supertramp"
              linkText="Ver el caso completo →"
              imgTag="Supertramp Hostel"
              imgNum="30%"
              imgSub="reservas directas"
            />
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
                <GradientText>Ecommerce Pro</GradientText> es para vos si...
              </h2>
            </MotionWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
              <MotionWrapper type="fadeLeft">
                <div className="bg-[rgba(247,246,242,0.04)] border-[0.5px] border-[rgba(247,246,242,0.09)] rounded-[20px] p-[32px] h-full">
                  <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#1D9E75] mb-[22px] flex items-center gap-[8px]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#1D9E75]" /> Para vos
                  </div>
                  <ul className="flex flex-col gap-[12px]">
                    {['Vendés productos o servicios online y le pagás comisión a una plataforma', 'Tenés tienda pero la tasa de conversión es baja o el post-venta es manual', 'Querés vender online sin depender de Shopify, MercadoLibre o cualquier marketplace', 'Querés que cada venta dispare el proceso completo de forma automática', 'Tu tienda es lenta en mobile y sabés que estás perdiendo ventas por eso'].map((item, i) => (
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
                    <span className="w-[6px] h-[6px] rounded-full bg-[rgba(247,246,242,0.22)]" /> Otro paquete te sirve más si...
                  </div>
                  <ul className="flex flex-col gap-[14px]">
                    {[
                      { text: 'Necesitás un canal orgánico de clientes con SEO', pack: 'Full Funnel 360', href: `/${isEn ? 'services' : 'servicios'}/full-funnel-360` },
                      { text: 'Tu problema es la captación de leads, no la venta directa', pack: 'Growth Machine', href: `/${isEn ? 'services' : 'servicios'}/growth-machine` },
                      { text: 'Recién empezás y necesitás la base digital primero', pack: 'Starter Presence', href: `/${isEn ? 'services' : 'servicios'}/starter-presence` },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-[10px] text-[14px] leading-[1.5]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="rgba(247,246,242,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px] mt-[1px] shrink-0">
                          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                        <span className="text-[var(--muted-l)]">{item.text}{' '}<a href={item.href} className="text-[var(--am)] font-bold no-underline hover:opacity-80">Ver {item.pack} →</a></span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-[20px] pt-[16px] border-t-[0.5px] border-[rgba(247,246,242,0.07)]">
                    <p className="text-[12px] text-[var(--muted-l)]">¿No sabés cuál corresponde?{' '}<a href={isEn ? '/free-audit' : '/auditoria-web-gratuita'} className="text-[var(--am)] font-bold no-underline hover:opacity-80">Pedí la auditoría gratuita →</a></p>
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
                {['$0 de comisión por venta directa', 'Código 100% tuyo', 'Sin dependencia de plataformas', 'Propuesta antes de cobrar'].map((item, i) => (
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
          headline={<>Cada mes que pasás pagando comisión<br /><GradientText>es un mes de margen regalado.</GradientText></>}
          subheadline="30 minutos de llamada. Te decimos qué opción técnica corresponde a tu negocio, cuánto tarda y cuándo empieza a recuperar la inversión."
          mainCta={{ label: 'Quiero mi tienda directa →', href: '#' }}
          disclaimer="Sin compromiso · Te recomendamos la opción correcta, no la más cara · Respondemos en 2 horas"
          watermarkText="DIRECTO"
          cards={[
            { tag: 'Tengo tienda pero convierte poco', title: 'Auditoría de conversión', desc: 'Revisamos tu tienda y te decimos exactamente dónde se pierden las ventas.', href: isEn ? '/free-audit' : '/auditoria-web-gratuita' },
            { tag: 'Quiero entender mis opciones', title: 'Mini-curso 5 días', desc: 'Qué tener en cuenta antes de construir o migrar tu tienda online. Gratis.', href: isEn ? '/email-course' : '/curso-web-gratis' },
            { tag: 'Ya sé lo que quiero', title: 'Llamada técnica', desc: '30 minutos. Evaluamos tu situación y te decimos la opción correcta para tu negocio.', href: '#ctaf' },
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
