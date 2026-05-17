import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import { routing } from '@/navigation';
import ScrollObserver from '@/components/layout/ScrollObserver';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
import '../globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://vacaredigitalsolutions.com'),
  title: {
    default: 'Vacare Digital Solutions',
    template: '%s | Vacare Digital Solutions',
  },
  description: 'Sistemas digitales que generan ingresos. Web, SEO y automatizaciones para negocios en LATAM, España y Estados Unidos.',
  icons: {
    icon: '/images/logo.webp',
    apple: '/images/logo.webp',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'es' | 'en')) notFound();

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ScrollObserver />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <WhatsAppFloat />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
