const BASE_URL = 'https://vacaredigitalsolutions.com';

interface Props {
  url: string;
  name: string;
  description: string;
  clientName: string;
  reviewBody: string;
  reviewerName: string;
  reviewerTitle: string;
}

export default function CaseStudyJsonLd({
  url,
  name,
  description,
  clientName,
  reviewBody,
  reviewerName,
  reviewerTitle,
}: Props) {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name,
      description,
      url,
      author: { '@type': 'Organization', '@id': `${BASE_URL}/#organization` },
      about: { '@type': 'Organization', name: clientName },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Review',
      url,
      itemReviewed: { '@type': 'ProfessionalService', '@id': `${BASE_URL}/#service` },
      author: { '@type': 'Person', name: reviewerName, jobTitle: reviewerTitle },
      reviewBody,
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    },
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
