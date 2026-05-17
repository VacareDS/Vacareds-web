import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  pathnames: {
    '/': '/',
    '/services': {
      en: '/services',
      es: '/servicios'
    },
    '/free-audit': {
      en: '/free-web-audit',
      es: '/auditoria-web-gratuita'
    },
    '/email-course': {
      en: '/free-web-course',
      es: '/curso-web-gratis'
    },
    '/case-studies': {
      en: '/case-studies',
      es: '/casos-de-exito'
    }
  }
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
