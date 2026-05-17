import { redirect } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === 'en'
      ? 'Growth Machine — Automated Lead Capture & Nurturing System | Vacaré'
      : 'Growth Machine — Sistema Automatizado de Captación de Leads | Vacaré',
    alternates: {
      canonical: `https://vacaredigitalsolutions.com/${locale}/servicios/growth-machine`,
    },
  };
}

export default async function GrowthMachineRedirectPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  redirect(`/${locale}/servicios/growth-machine`);
}
