import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import WaitlistClient from '@/components/waitlist/WaitlistClient';

export default async function EmailCourseWaitlistPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== 'en') notFound();
  setRequestLocale(locale);

  return (
    <WaitlistClient
      type="course"
      locale="en"
      list="curso"
      apiEndpoint={process.env.NEXT_PUBLIC_N8N_WEBHOOK_WAITLIST ?? ''}
    />
  );
}
