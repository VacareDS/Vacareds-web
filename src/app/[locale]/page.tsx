import { getTranslations } from 'next-intl/server';
import React from 'react';
import { buildPageMeta, pageUrl } from '@/lib/seo';

// Layout
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import PageWrapper from '@/components/layout/PageWrapper';
import HomeClient from '@/components/layout/HomeClient';

// Sections
import SplitHero from '@/components/sections/SplitHero';
import WhyBento from '@/components/sections/WhyBento';
import CaseStudyBlock from '@/components/sections/CaseStudyBlock';
import StatsStrip from '@/components/sections/StatsStrip';
import PackBlock from '@/components/sections/PackBlock';
import AutoFlow from '@/components/sections/AutoFlow';
import WhoCards from '@/components/sections/WhoCards';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
import TeamSection from '@/components/sections/TeamSection';
import CtaFinal from '@/components/sections/CtaFinal';
import BlogPreview from '@/components/sections/BlogPreview';
import FaqSection from '@/components/sections/FaqSection';
import VideoTestimonial from '@/components/sections/VideoTestimonial';

// SEO
import JsonLd from '@/components/seo/JsonLd';

// UI
import GradientText from '@/components/ui/GradientText';
import Button from '@/components/ui/Button';
import AnimatedWatermark from '@/components/ui/AnimatedWatermark';
import MotionWrapper from '@/components/ui/MotionWrapper';
import HeroCta from '@/components/ui/HeroCta';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import ExitIntentPopup from '@/components/ui/ExitIntentPopup';
import PackCta from '@/components/ui/PackCta';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const loc = locale as 'es' | 'en';
  const t = await getTranslations({ locale, namespace: 'Metadata.Home' });
  return {
    title: t('title'),
    description: t('description'),
    ...buildPageMeta(loc, '/'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: pageUrl(loc, '/'),
      type: 'website',
    },
  };
}

import { setRequestLocale } from 'next-intl/server';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'Home' });
  const tLayout = await getTranslations({ locale, namespace: 'Layout' });

  return (
    <>
      <JsonLd />
      <HomeClient>
        <Nav
          transparent
          brandName={tLayout('Nav.brand')}
        />
        <main>
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
              <div>
                <div className="mb-[16px]">
                  <HeroCta label={t('Hero.ctaPrimary')} subText={locale === 'es' ? 'Sin compromiso · Sin llamadas agresivas' : 'No commitment · No pushy sales'} />
                </div>
                <div className="flex items-center gap-[10px] text-[12px] text-[var(--muted)] mb-[14px]">
                  {t.raw('Hero.trustLogos').map((logo: string, i: number, arr: string[]) => (
                    <React.Fragment key={logo}>
                      <span>{logo}</span>
                      {i < arr.length - 1 && <span className="w-[1px] h-[14px] bg-[rgba(28,24,40,0.15)]" />}
                    </React.Fragment>
                  ))}
                </div>
                <div className="flex items-center gap-[6px]">
                  <span className="text-[var(--am)] text-[13px] leading-none tracking-[1px]">★★★★★</span>
                  <span className="text-[11px] text-[var(--muted)]">
                    {locale === 'es'
                      ? '+8 negocios automatizados · Supertramp +30%'
                      : '+8 businesses automated · Supertramp +30%'}
                  </span>
                </div>
              </div>
            }
            leftFloats={
              <div className="hidden lg:flex absolute top-[72px] right-[12px] z-[3] bg-[rgba(247,246,242,0.6)] backdrop-blur-[12px] border-[0.5px] border-[rgba(28,24,40,0.06)] rounded-[10px] p-[7px_11px] shadow-[0_8px_24px_rgba(28,24,40,0.04)] items-center gap-[8px] fi d2">
                <div className="w-[7px] h-[7px] rounded-full bg-[#10b981]" />
                <div>
                  <div className="text-[9px] font-bold text-[var(--muted)] uppercase tracking-[0.05em] mb-[1px]">{t('Hero.float1.tag')}</div>
                  <div className="text-[12px] font-extrabold text-[var(--dark)] flex items-baseline gap-[3px]">{t('Hero.float1.num')} <span className="text-[10px] font-semibold text-[var(--muted)]">{t('Hero.float1.label')}</span></div>
                </div>
              </div>
            }
            splitPosition="52/48"
            rightWatermarkText={t('Hero.rightWatermark')}
            rightVerticalText={t('Hero.rightVertical')}
            rightContent={
              <>
                {/* geometric decorations — tamaño reducido para above-the-fold */}
                <div className="flex gap-[8px] mb-[22px] flex-wrap relative z-10 items-end">
                  <div className="w-[40px] h-[40px] rounded-[10px] bg-[rgba(255,255,255,0.25)]" style={{ animation: 'shapeFloat1 6s ease-in-out infinite' }} />
                  <div className="w-[16px] h-[16px] rounded-[4px] bg-transparent border-[2px] border-[rgba(255,255,255,0.4)] mt-[5px]" style={{ animation: 'shapeFloat2 7s ease-in-out infinite 0.5s' }} />
                  <div className="w-[22px] h-[22px] rounded-[6px] bg-[rgba(255,255,255,0.15)] mt-[10px]" style={{ animation: 'shapeFloat3 8s ease-in-out infinite 1s' }} />
                  <div className="w-[16px] h-[16px] rounded-[4px] bg-[rgba(255,255,255,0.3)] mt-[4px]" style={{ animation: 'shapeFloat4 5s ease-in-out infinite 0.3s' }} />
                  <div className="w-[40px] h-[40px] rounded-[10px] bg-transparent border-[2px] border-[rgba(255,255,255,0.4)] mt-[6px]" style={{ animation: 'shapeFloat1 9s ease-in-out infinite 0.8s' }} />
                </div>

                {/* metric cards */}
                <div className="flex flex-col gap-[10px] relative z-20">
                  {([
                    { key: 'metric1' },
                    { key: 'metric2' },
                    { key: 'metric3' },
                  ] as const).map(({ key }) => (
                    <div key={key} className="bg-[rgba(255,255,255,0.12)] backdrop-blur-[12px] border-[0.5px] border-[rgba(255,255,255,0.2)] rounded-[10px] p-[11px_16px] flex items-center gap-[12px] max-w-[260px] transition-all hover:bg-[rgba(255,255,255,0.18)] hover:-translate-y-[2px] shadow-[0_8px_32px_rgba(0,0,0,0.05)] cursor-default group">
                      <AnimatedCounter
                        value={t(`Hero.${key}.num`)}
                        className="text-[24px] font-extrabold text-white tracking-[-1px] leading-none shrink-0 w-[50px] group-hover:scale-105 transition-transform origin-left inline-block"
                      />
                      <div>
                        <div className="text-[11px] font-bold text-[rgba(255,255,255,0.95)] mb-[1px]">{t(`Hero.${key}.label`)}</div>
                        <div className="text-[10px] text-[rgba(255,255,255,0.6)]">{t(`Hero.${key}.sub`)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            }
            rightFloats={
              <>
                <div className="hidden lg:block absolute top-[15%] right-[15%] w-[80px] h-[80px] border-[0.5px] border-[rgba(255,255,255,0.15)] rounded-full z-[1]" />
                <div className="hidden lg:block absolute bottom-[20%] left-[40%] w-[120px] h-[120px] border-[0.5px] border-[rgba(255,255,255,0.1)] rounded-full z-[1]" />
                <div className="hidden lg:block absolute top-[40%] right-[30%] w-[4px] h-[4px] bg-[rgba(255,255,255,0.4)] rounded-full z-[1]" />
              </>
            }
          />

          {/* WHY */}
          <section id="why" className="bg-[var(--dark)] py-[100px] relative overflow-hidden">
            <AnimatedWatermark
              text={t('Why.watermark')}
              direction="right"
              className="-bottom-[20px] -right-[10px] text-[clamp(80px,16vw,200px)] text-[rgba(247,246,242,0.05)] tracking-[-4px]"
            />
            <PageWrapper className="relative z-10">
              <MotionWrapper type="fadeUp">
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--mg)] mb-[18px]">
                  <i className="w-[18px] h-[1.5px] bg-[var(--mg)] block" />
                  {t('Why.eyebrow')}
                </div>
                <h2 className="text-[clamp(38px,5vw,62px)] font-extrabold leading-[1.08] tracking-[-2px] text-[var(--cream)] mb-[18px]">
                  {t.rich('Why.title', {
                    br: () => <br />,
                    grad: (chunks) => <GradientText>{chunks}</GradientText>
                  })}
                </h2>
                <p className="text-[16px] leading-[1.75] text-[var(--muted-l)] max-w-[560px] mb-[52px]">
                  {t('Why.intro')}
                </p>
              </MotionWrapper>

              <WhyBento cards={t.raw('Why.cards')} />

              <MotionWrapper type="fadeUp" delay={0.2} className="mt-[44px]">
                <a href="#ctaf" className="inline-block text-[14px] font-bold text-[var(--am)] no-underline border-b-[1.5px] border-[rgba(245,166,35,0.35)] pb-[2px] transition-colors hover:border-[var(--am)]">
                  {t('Why.cta')}
                </a>
              </MotionWrapper>
            </PageWrapper>
          </section>

          {/* CASE */}
          <section id="case" className="bg-[var(--cream)] py-[80px]">
            <PageWrapper>
              <CaseStudyBlock
                tag={t('Case.tag')}
                title={
                  t.rich('Case.title', {
                    grad: (chunks) => <GradientText>{chunks}</GradientText>
                  }) as unknown as string
                }
                description={t('Case.body')}
                metrics={t.raw('Case.metrics')}
                linkHref="/case-studies/supertramp"
                linkText={t('Case.cta')}
                imgSrc="/images/home_06_case_hostel.jpg"
                imgTag={t('Case.imgTag')}
                imgNum={t('Case.imgNum')}
                imgSub={t('Case.imgSub')}
              />
            </PageWrapper>
          </section>

          {/* VIDEO TESTIMONIAL — coloca el archivo en public/videos/theo-supertramp.mp4 */}
          <VideoTestimonial
            eyebrow={t('VideoTestimonial.eyebrow')}
            quote={t('VideoTestimonial.quote')}
            author={t('VideoTestimonial.author')}
            role={t('VideoTestimonial.role')}
            videoSrc="https://pub-cde5ab30151d4376815d88eb38481483.r2.dev/Supertramp%20Hostel%20-%20Theo.mp4"
            posterSrc="/images/home_01_supertramp.png"
          />

          {/* STATS */}
          <StatsStrip
            variant="gradient"
            watermarkText={t('Stats.watermark')}
            stats={t.raw('Stats.stats')}
          />

          {/* PACKS */}
          <section id="packs" className="bg-[var(--cream)] py-[100px] relative overflow-hidden">
            <AnimatedWatermark
              text={t('Packs.watermark')}
              direction="left"
              className="-top-[20px] -left-[10px] text-[clamp(80px,16vw,200px)] text-[rgba(28,24,40,0.05)] tracking-[-4px]"
            />
            <PageWrapper className="relative z-10">
              <MotionWrapper type="fadeUp" className="text-center max-w-[600px] mx-auto mb-[60px]">
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[18px] justify-center">
                  <i className="w-[18px] h-[1.5px] bg-[var(--muted)] block" />
                  {t('Packs.eyebrow')}
                  <i className="w-[18px] h-[1.5px] bg-[var(--muted)] block" />
                </div>
                <h2 className="text-[clamp(36px,4.5vw,58px)] font-extrabold tracking-[-2px] leading-[1.08] mb-[18px]">
                  {t.rich('Packs.title', {
                    grad: (chunks) => <GradientText>{chunks}</GradientText>
                  })}
                </h2>
                <p className="text-[16px] leading-[1.75] text-[var(--muted)]">
                  {t('Packs.sub')}
                </p>
              </MotionWrapper>

              <PackBlock items={t.raw('Packs.items')} />
              <PackCta label={locale === 'es' ? '¿No sabés cuál es el tuyo?' : "Not sure which one fits you?"} />

            </PageWrapper>
          </section>

          {/* AUTO */}
          <section id="auto" className="bg-[var(--dark)] py-[100px] relative overflow-hidden">
            <AnimatedWatermark
              text={t('Auto.watermark')}
              direction="left"
              className="-top-[20px] -left-[10px] text-[clamp(80px,16vw,200px)] text-[rgba(247,246,242,0.05)] tracking-[-4px]"
            />
            <PageWrapper className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
              <MotionWrapper type="fadeLeft">
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--mg)] mb-[18px]">
                  <i className="w-[18px] h-[1.5px] bg-[var(--mg)] block" />
                  {t('Auto.eyebrow')}
                </div>
                <h2 className="text-[clamp(38px,5vw,62px)] font-extrabold tracking-[-2px] leading-[1.08] text-[var(--cream)] mb-[18px]">
                  {t.rich('Auto.title', {
                    br: () => <br />,
                    grad: (chunks) => <GradientText>{chunks}</GradientText>
                  })}
                </h2>
                <p className="text-[16px] leading-[1.75] text-[var(--muted-l)] mb-[32px] max-w-[480px]">
                  {t('Auto.intro')}
                </p>
                <Button href="/case-studies/sobremi" variant="primary">{t('Auto.cta')}</Button>
              </MotionWrapper>

              <MotionWrapper type="fadeRight" delay={0.15}>
                <AutoFlow
                  trigger={t('Auto.flow.trigger')}
                  engine={t('Auto.flow.engine')}
                  outputs={t.raw('Auto.flow.outputs')}
                />
                <div className="text-[12px] text-[rgba(247,246,242,0.35)] italic mt-[10px]">
                  {t('Auto.note')}
                </div>
              </MotionWrapper>
            </PageWrapper>
          </section>

          {/* WHOM */}
          <section id="whom" className="bg-[var(--cream)] py-[100px]">
            <PageWrapper>
              <MotionWrapper type="fadeUp">
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[18px]">
                  <i className="w-[18px] h-[1.5px] bg-[var(--muted)] block" />
                  {t('Whom.eyebrow')}
                </div>
                <h2 className="text-[clamp(36px,4.5vw,58px)] font-extrabold tracking-[-2px] leading-[1.08] mb-[52px]">
                  {t.rich('Whom.title', {
                    br: () => <br />,
                    grad: (chunks) => <GradientText>{chunks}</GradientText>
                  })}
                </h2>
              </MotionWrapper>
              <WhoCards cards={t.raw('Whom.cards')} background="light" />
            </PageWrapper>
          </section>

          {/* PORTFOLIO */}
          <section id="port" className="bg-[var(--cream)] py-[100px] border-t-[0.5px] border-[rgba(28,24,40,0.07)]">
            <PageWrapper>
              <MotionWrapper type="fadeUp">
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted)] mb-[18px]">
                  <i className="w-[18px] h-[1.5px] bg-[var(--muted)] block" />
                  {t('Portfolio.eyebrow')}
                </div>
                <h2 className="text-[clamp(36px,4.5vw,58px)] font-extrabold tracking-[-2px] leading-[1.08] mb-[48px]">
                  {t.rich('Portfolio.title', { br: () => <br /> })}
                </h2>
              </MotionWrapper>
              <PortfolioGrid
                projects={[
                  { imgSrc: '/images/home_01_supertramp.png', title: t('Portfolio.items.0.title'), category: t('Portfolio.items.0.tag'), link: t('Portfolio.items.0.link') },
                  { imgSrc: '/images/home_02_sobremi.png', title: t('Portfolio.items.1.title'), category: t('Portfolio.items.1.tag'), link: t('Portfolio.items.1.link') },
                  { imgSrc: '/images/home_03_cocheras.png', title: t('Portfolio.items.2.title'), category: t('Portfolio.items.2.tag'), link: t('Portfolio.items.2.link') }
                ]}
              />
            </PageWrapper>
          </section>

          {/* BLOG / GUÍAS */}
          <BlogPreview
            eyebrow={t('BlogPreview.eyebrow')}
            title={
              t.rich('BlogPreview.title', {
                grad: (chunks) => <GradientText>{chunks}</GradientText>
              }) as unknown as React.ReactNode
            }
            subtitle={t('BlogPreview.subtitle')}
            ctaText={t('BlogPreview.ctaText')}
            ctaHref="/blog"
            posts={t.raw('BlogPreview.posts').map((p: any, idx: number) => ({
              category: p.category,
              categoryColor: idx === 1 ? 'bofu' : 'tofu',
              title: p.title,
              excerpt: p.excerpt,
              href: p.link
            }))}
          />

          {/* FAQ */}
          <FaqSection
            eyebrow={t('FaqSection.eyebrow')}
            title={
              t.rich('FaqSection.title', {
                grad: (chunks) => <GradientText>{chunks}</GradientText>
              }) as unknown as React.ReactNode
            }
            items={t.raw('FaqSection.items').map((f: any) => ({ question: f.q, answer: f.a }))}
          />

          {/* TEAM */}
          <TeamSection
            members={[
              { name: "Germán", role: t('Team.members.0.role'), imageSrc: '/images/home_04_german.png' },
              { name: "Noelia", role: t('Team.members.1.role'), imageSrc: '/images/home_05_noelia.png' }
            ]}
            labels={t.raw('Team.labels')}
            content={
              <>
                <div className="inline-flex items-center gap-[8px] text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--muted-l)] mb-[18px]">
                  <i className="w-[18px] h-[1.5px] bg-[var(--muted-l)] block" />
                  {t('Team.eyebrow')}
                </div>
                <h2 className="text-[clamp(30px,3.8vw,46px)] font-extrabold tracking-[-1.5px] leading-[1.15] text-[var(--cream)] mb-[18px]">
                  {t.rich('Team.title', {
                    br: () => <br />,
                    grad: (chunks) => <GradientText>{chunks}</GradientText>
                  })}
                </h2>
                <p className="text-[15px] leading-[1.75] text-[var(--muted-l)]">
                  {t('Team.body')}
                </p>
              </>
            }
          />

          <CtaFinal
            headline={t('CtaFinal.title')}
            subheadline={t('CtaFinal.subtitle')}
            mainCta={{ label: t('CtaFinal.btn'), href: '#' }}
            disclaimer={t('CtaFinal.disclaimer')}
            watermarkText={t('CtaFinalWatermark')}
          />

          <ExitIntentPopup />

        </main>

        <Footer
          variant="full"
          brandName="Vacare Digital Solutions"
          brandDesc={tLayout('Footer.brandDesc')}
          copyrightText={tLayout('Footer.copyright')}
          langText={tLayout('Footer.lang')}
          columns={[
            {
              title: tLayout('Footer.services'), links: [
                { label: 'Starter Presence', href: locale === 'es' ? '/servicios/starter-presence' : '/services/starter-presence' },
                { label: tLayout('Footer.growthMachine'), href: locale === 'es' ? '/servicios/growth-machine' : '/services/growth-machine' },
                { label: tLayout('Footer.fullFunnel'), href: locale === 'es' ? '/servicios/full-funnel-360' : '/services/full-funnel-360' },
                { label: tLayout('Footer.retainer'), href: locale === 'es' ? '/servicios/automation-retainer' : '/services/automation-retainer' },
                { label: tLayout('Footer.freeCourse'), href: locale === 'es' ? '/curso-web-gratis' : '/free-web-course' }
              ]
            },
            {
              title: tLayout('Footer.legal'), links: [
                { label: tLayout('Footer.privacy'), href: locale === 'es' ? '/auditoria-web-gratuita' : '/free-web-audit' },
                { label: tLayout('Footer.terms'), href: locale === 'es' ? '/auditoria-web-gratuita' : '/free-web-audit' },
                { label: tLayout('Footer.contact'), href: '/#ctaf' }
              ]
            },
            { title: tLayout('Footer.guides.title'), links: tLayout.raw('Footer.guides.items').map((g: any) => ({ label: g.label, href: g.link })) }
          ]}
        />
      </HomeClient>
    </>
  );
}
