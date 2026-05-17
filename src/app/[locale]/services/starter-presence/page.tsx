import { redirect } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === 'en'
      ? 'Starter Presence — Professional Website That Ranks on Google | Vacaré'
      : 'Starter Presence — Web Profesional que Aparece en Google | Vacaré',
    alternates: {
      canonical: `https://vacaredigitalsolutions.com/${locale}/servicios/starter-presence`,
    },
  };
}

export default async function StarterPresenceRedirectPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  redirect(`/${locale}/servicios/starter-presence`);
}
