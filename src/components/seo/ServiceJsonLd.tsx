const BASE_URL = 'https://vacaredigitalsolutions.com';

interface Props {
  url: string;
  name: string;
  description: string;
  price?: string;
}

export default function ServiceJsonLd({ url, name, description, price }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'ProfessionalService',
      '@id': `${BASE_URL}/#service`,
    },
    ...(price !== undefined && {
      offers: { '@type': 'Offer', price, priceCurrency: 'USD' },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
