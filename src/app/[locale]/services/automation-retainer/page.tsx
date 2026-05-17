import { redirect } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === 'en'
      ? 'Automation Retainer — Monthly n8n Automations That Build Your Operating System | Vacaré'
      : 'Automation Retainer — Automatizaciones Mensuales que Construyen tu Sistema Operativo | Vacaré',
    alternates: {
      canonical: `https://vacaredigitalsolutions.com/${locale}/servicios/automation-retainer`,
    },
  };
}

export default async function AutomationRetainerRedirectPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  redirect(`/${locale}/servicios/automation-retainer`);
}
