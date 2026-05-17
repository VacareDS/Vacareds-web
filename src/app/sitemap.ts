import type { MetadataRoute } from 'next';
import { routing } from '@/navigation';
import { pageUrl } from '@/lib/seo';

type Locale = typeof routing.locales[number];

const BASE_URL = 'https://vacaredigitalsolutions.com';

type PageEntry = {
  pathKey: keyof typeof routing.pathnames;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
};

// Routes tracked in navigation.ts
const routedPages: PageEntry[] = [
  { pathKey: '/',             changeFrequency: 'monthly', priority: 1.0 },
  { pathKey: '/services',     changeFrequency: 'monthly', priority: 0.9 },
  { pathKey: '/case-studies', changeFrequency: 'monthly', priority: 0.8 },
  { pathKey: '/free-audit',   changeFrequency: 'weekly',  priority: 0.8 },
  { pathKey: '/email-course', changeFrequency: 'monthly', priority: 0.7 },
];

// Additional routes not in navigation.ts pathnames
const staticRoutes: Array<{
  es: string;
  en: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
}> = [
  // Blog
  { es: '/blog', en: '/blog', changeFrequency: 'weekly', priority: 0.8 },
  { es: '/blog/seo-errores-comunes', en: '/blog/seo-errores-comunes', changeFrequency: 'monthly', priority: 0.6 },
  { es: '/blog/n8n-vs-zapier', en: '/blog/n8n-vs-zapier', changeFrequency: 'monthly', priority: 0.6 },
  { es: '/blog/dejar-de-depender-de-instagram', en: '/blog/dejar-de-depender-de-instagram', changeFrequency: 'monthly', priority: 0.6 },
  // Case studies
  { es: '/casos-de-exito', en: '/case-studies', changeFrequency: 'monthly', priority: 0.8 },
  { es: '/casos-de-exito/supertramp', en: '/case-studies/supertramp', changeFrequency: 'monthly', priority: 0.7 },
  { es: '/casos-de-exito/sobremi', en: '/case-studies/sobremi', changeFrequency: 'monthly', priority: 0.6 },
  // Service landing pages
  { es: '/servicios/starter-presence', en: '/services/starter-presence', changeFrequency: 'monthly', priority: 0.8 },
  { es: '/servicios/growth-machine', en: '/services/growth-machine', changeFrequency: 'monthly', priority: 0.8 },
  { es: '/servicios/full-funnel-360', en: '/services/full-funnel-360', changeFrequency: 'monthly', priority: 0.8 },
  { es: '/servicios/automation-retainer', en: '/services/automation-retainer', changeFrequency: 'monthly', priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routedEntries = routedPages.map(({ pathKey, changeFrequency, priority }) => {
    const languages: Record<string, string> = {};
    for (const loc of routing.locales) {
      languages[loc as string] = pageUrl(loc, pathKey);
    }
    return {
      url: pageUrl(routing.defaultLocale as Locale, pathKey),
      lastModified: now,
      changeFrequency,
      priority,
      alternates: { languages },
    };
  });

  const staticEntries = staticRoutes.map(({ es, en, changeFrequency, priority }) => ({
    url: `${BASE_URL}/es${es}`,
    lastModified: now,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        es: `${BASE_URL}/es${es}`,
        en: `${BASE_URL}/en${en}`,
      },
    },
  }));

  return [...routedEntries, ...staticEntries];
}
