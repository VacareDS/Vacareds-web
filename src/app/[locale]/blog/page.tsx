import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import PageWrapper from '@/components/layout/PageWrapper';
import GradientText from '@/components/ui/GradientText';
import { Link } from '@/navigation';

const posts = [
  {
    slug: 'seo-errores-comunes',
    categoryEs: 'SEO',
    categoryEn: 'SEO',
    titleEs: 'Por qué tu web no aparece en Google (y cómo arreglarlo)',
    titleEn: 'Why your website isn\'t on Google (and how to fix it)',
    excerptEs: 'Los 5 errores técnicos que Google penaliza más y que el 70% de los sitios tienen sin saberlo.',
    excerptEn: 'The 5 technical errors Google penalizes most and that 70% of sites have without knowing it.',
    color: '#E8417A',
  },
  {
    slug: 'n8n-vs-zapier',
    categoryEs: 'Automatización',
    categoryEn: 'Automation',
    titleEs: 'n8n vs Zapier: cuál es mejor para tu negocio',
    titleEn: 'n8n vs Zapier: which is better for your business',
    excerptEs: 'Comparamos costos, flexibilidad y escalabilidad de las dos plataformas de automatización más usadas.',
    excerptEn: 'We compare costs, flexibility, and scalability of the two most used automation platforms.',
    color: '#F07030',
  },
  {
    slug: 'dejar-de-depender-de-instagram',
    categoryEs: 'Estrategia',
    categoryEn: 'Strategy',
    titleEs: 'Cómo dejar de depender de Instagram para vender',
    titleEn: 'How to stop depending on Instagram to sell',
    excerptEs: 'La guía paso a paso para construir tu propio canal que genere leads y ventas sin depender de algoritmos.',
    excerptEn: 'The step-by-step guide to building your own channel that generates leads and sales without depending on algorithms.',
    color: '#F5A623',
  },
];

const BASE_URL = 'https://vacaredigitalsolutions.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  return {
    title: isEs ? 'Blog — Guías de marketing digital y automatización | Vacare' : 'Blog — Digital marketing & automation guides | Vacare',
    description: isEs
      ? 'Artículos prácticos sobre SEO, automatizaciones con n8n y estrategia digital para negocios que quieren crecer online.'
      : 'Practical articles on SEO, n8n automations, and digital strategy for businesses that want to grow online.',
    alternates: {
      canonical: `${BASE_URL}/${locale}/blog`,
      languages: {
        es: `${BASE_URL}/es/blog`,
        en: `${BASE_URL}/en/blog`,
        'x-default': `${BASE_URL}/es/blog`,
      },
    },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tLayout = await getTranslations({ locale, namespace: 'Layout' });
  const isEs = locale === 'es';

  return (
    <>
      <Nav
        transparent={false}
        brandName={tLayout('Nav.brand')}
      />

      <main className="pt-[64px] bg-[var(--cream)] min-h-screen">
        {/* Header */}
        <section className="bg-[var(--dark)] py-[80px] lg:py-[100px] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none gb" />
          <PageWrapper className="relative z-10">
            <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--mg)] mb-[18px]">
              <i className="w-[18px] h-[1.5px] bg-[var(--mg)] block" />
              {isEs ? 'Recursos' : 'Resources'}
            </div>
            <h1 className="text-[clamp(36px,5vw,64px)] font-extrabold leading-[1.06] tracking-[-2px] text-[var(--cream)] mb-[16px]">
              {isEs ? (
                <>Guías para <GradientText>crecer online</GradientText></>
              ) : (
                <>Guides to <GradientText>grow online</GradientText></>
              )}
            </h1>
            <p className="text-[16px] leading-[1.75] text-[rgba(247,246,242,0.55)] max-w-[520px]">
              {isEs
                ? 'Artículos prácticos sobre SEO, automatizaciones y estrategia digital. Sin relleno.'
                : 'Practical articles on SEO, automations, and digital strategy. No fluff.'}
            </p>
          </PageWrapper>
        </section>

        {/* Posts grid */}
        <section className="py-[80px] lg:py-[100px]">
          <PageWrapper>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}` as any}
                  className="bg-white border-[0.5px] border-[rgba(28,24,40,0.08)] rounded-[18px] overflow-hidden no-underline transition-all hover:-translate-y-[4px] hover:shadow-[0_16px_44px_rgba(28,24,40,0.09)] block group"
                >
                  {/* Color accent bar */}
                  <div className="h-[3px] w-full" style={{ background: post.color }} />
                  <div className="p-[28px]">
                    <span
                      className="text-[10px] font-bold tracking-[0.1em] uppercase px-[10px] py-[4px] rounded-[20px] inline-block mb-[16px]"
                      style={{ background: `${post.color}15`, color: post.color }}
                    >
                      {isEs ? post.categoryEs : post.categoryEn}
                    </span>
                    <h2 className="text-[17px] font-extrabold text-[var(--dark)] leading-[1.3] tracking-[-0.3px] mb-[10px] group-hover:text-[var(--mg)] transition-colors">
                      {isEs ? post.titleEs : post.titleEn}
                    </h2>
                    <p className="text-[13px] leading-[1.65] text-[var(--muted)] mb-[20px]">
                      {isEs ? post.excerptEs : post.excerptEn}
                    </p>
                    <span className="text-[13px] font-bold text-[var(--mg)] inline-flex items-center gap-[5px] group-hover:gap-[8px] transition-all">
                      {isEs ? 'Leer guía' : 'Read guide'} →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Coming soon note */}
            <div className="mt-[64px] text-center py-[52px] border-[0.5px] border-[rgba(28,24,40,0.07)] rounded-[20px] bg-white">
              <div className="text-[32px] mb-[12px]">✍️</div>
              <h3 className="text-[18px] font-extrabold text-[var(--dark)] mb-[8px] tracking-[-0.3px]">
                {isEs ? 'Más guías en camino' : 'More guides on the way'}
              </h3>
              <p className="text-[14px] text-[var(--muted)] max-w-[360px] mx-auto">
                {isEs
                  ? 'Publicamos nuevos artículos sobre automatización, SEO y estrategia cada semana.'
                  : 'We publish new articles on automation, SEO, and strategy every week.'}
              </p>
            </div>
          </PageWrapper>
        </section>
      </main>

      <Footer
        variant="minimal"
        brandName="Vacare Digital Solutions"
        copyrightText={tLayout('Footer.copyright')}
        langText={tLayout('Footer.lang')}
      />
    </>
  );
}
