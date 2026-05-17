import { redirect } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === 'en'
      ? 'Ecommerce Pro — Direct Sales Store, No Commissions, Fully Automated | Vacaré'
      : 'Ecommerce Pro — Tienda Directa, Sin Comisiones y Automatizada | Vacaré',
    alternates: {
      canonical: `https://vacaredigitalsolutions.com/${locale}/servicios/ecommerce-pro`,
    },
  };
}

export default async function EcommerceProRedirectPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  redirect(`/${locale}/servicios/ecommerce-pro`);
}
