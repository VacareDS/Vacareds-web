const BASE_URL = 'https://vacaredigitalsolutions.com';

const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '8 The Green, Suite B',
  addressLocality: 'Dover',
  addressRegion: 'DE',
  postalCode: '19901',
  addressCountry: 'US',
};

export default function JsonLd() {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'Vacare Digital Solutions',
    legalName: 'Vacare Digital Solutions LLC',
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/logo.png`,
      width: 200,
      height: 60,
    },
    foundingDate: '2024',
    founders: [
      { '@type': 'Person', name: 'Germán', jobTitle: 'Co-founder & Lead Developer' },
      { '@type': 'Person', name: 'Noelia', jobTitle: 'Co-founder & Strategy' },
    ],
    address: ADDRESS,
    areaServed: ['AR', 'US', 'ES', 'MX', 'CL', 'CO', 'PE'],
    sameAs: [
      'https://www.linkedin.com/company/vacare-digital-solutions',
      'https://www.instagram.com/vacaredigitalsolutions',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['es', 'en'],
      email: 'hola@vacaredigitalsolutions.com',
    },
  };

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BASE_URL}/#localbusiness`,
    name: 'Vacare Digital Solutions LLC',
    url: BASE_URL,
    priceRange: '$$$',
    address: ADDRESS,
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hola@vacaredigitalsolutions.com',
      contactType: 'customer service',
      availableLanguage: ['es', 'en'],
    },
    sameAs: [
      'https://www.linkedin.com/company/vacare-digital-solutions',
      'https://www.instagram.com/vacaredigitalsolutions',
    ],
  };

  const service = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BASE_URL}/#service`,
    name: 'Vacare Digital Solutions',
    url: BASE_URL,
    description:
      'Sistemas digitales que generan ingresos. Web, SEO, automatizaciones y funnels para negocios que quieren crecer sin depender de referidos ni redes sociales.',
    priceRange: '$$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Credit Card, Wire Transfer',
    address: ADDRESS,
    areaServed: {
      '@type': 'GeoShape',
      name: 'Global — Spanish & English speaking markets',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Paquetes de servicios digitales',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Starter Presence',
            description: 'Web profesional + SEO local + stack de medición',
            offers: { '@type': 'Offer', price: '1500', priceCurrency: 'USD' },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Growth Machine',
            description:
              'Web estratégica + automatizaciones n8n + lead magnet + calendario integrado',
            offers: { '@type': 'Offer', price: '3000', priceCurrency: 'USD' },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Full Funnel 360',
            description:
              'Todo lo anterior + SEO estratégico + optimización para LLMs + funnel completo',
            offers: { '@type': 'Offer', price: '5000', priceCurrency: 'USD' },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Automation Retainer',
            description:
              'Mantenimiento continuo: flujos nuevos en n8n, mejoras, sin contratar un dev',
            offers: { '@type': 'Offer', price: '500', priceCurrency: 'USD' },
          },
        },
      ],
    },
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: 'Vacare Digital Solutions',
    description:
      'Agencia digital especializada en web, SEO y automatizaciones para negocios en crecimiento',
    inLanguage: ['es', 'en'],
    publisher: { '@id': `${BASE_URL}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${BASE_URL}/#webpage`,
    url: BASE_URL,
    name: 'Vacare Digital Solutions — Web, SEO y Automatizaciones',
    description:
      'Sistemas digitales que generan ingresos para negocios en LATAM, España y Estados Unidos.',
    isPartOf: { '@id': `${BASE_URL}/#website` },
    about: { '@id': `${BASE_URL}/#organization` },
    inLanguage: 'es',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Inicio',
          item: BASE_URL,
        },
      ],
    },
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cuánto cuesta trabajar con Vacare?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nuestros paquetes arrancan desde $1,500 USD (Starter Presence) hasta $5,000 USD (Full Funnel 360). También ofrecemos un retainer mensual desde $500 USD/mes.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuánto tiempo tarda en estar listo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Un proyecto típico tarda entre 30 y 45 días desde la estrategia hasta publicado. Proyectos más simples pueden estar listos en 2-3 semanas.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Necesito saber de tecnología?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Nos encargamos de todo lo técnico: hosting, dominio, SSL, DNS, deploys y mantenimiento. Vos te enfocás en tu negocio.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué incluye el mantenimiento mensual?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El Automation Retainer incluye hasta 6 o 12 horas de desarrollo mensual: flujos nuevos en n8n, mejoras en la web, y documentación de cada cambio.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Trabajan con negocios fuera de Argentina?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Somos una LLC en Delaware, EEUU. Trabajamos con clientes en toda Latinoamérica, España y Estados Unidos. Facturamos en USD vía Stripe.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué diferencia a Vacare de otras agencias?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nos especializamos en sistemas digitales integrados: web + automatizaciones + SEO trabajando juntos. No vendemos diseño, vendemos resultados medibles. Cada proyecto arranca con una sesión de estrategia.',
        },
      },
    ],
  };

  const video = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Supertramp Hostels: 30% de facturación desde la web propia',
    description:
      'Theo, Manager General de Supertramp Hostels, explica cómo el 30% de su facturación ahora proviene de su propia web tras trabajar con Vacare Digital Solutions.',
    thumbnailUrl: `${BASE_URL}/images/home_01_supertramp.png`,
    uploadDate: '2026-01-01',
    publisher: { '@id': `${BASE_URL}/#organization` },
    contentUrl: `${BASE_URL}/videos/theo-supertramp.mp4`,
  };

  const schemas = [org, localBusiness, service, website, webpage, faq, video];

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
