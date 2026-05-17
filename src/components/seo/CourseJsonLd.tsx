const BASE_URL = 'https://vacaredigitalsolutions.com';

interface Props {
  url: string;
  name: string;
  description: string;
}

export default function CourseJsonLd({ url, name, description }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
    },
    courseMode: 'online',
    educationalLevel: 'beginner',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
