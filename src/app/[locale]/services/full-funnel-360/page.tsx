import { redirect } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === 'en'
      ? 'Full Funnel 360 — Organic Client Channel, SEO & AI Visibility | Vacaré'
      : 'Full Funnel 360 — Canal Orgánico de Clientes, SEO y Visibilidad en IA | Vacaré',
    alternates: {
      canonical: `https://vacaredigitalsolutions.com/${locale}/servicios/full-funnel-360`,
    },
  };
}

export default async function FullFunnel360RedirectPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  redirect(`/${locale}/servicios/full-funnel-360`);
}
