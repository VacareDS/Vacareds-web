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
      en: '/free-audit',
      es: '/auditoria-web-gratuita'
    },
    '/email-course': {
      en: '/email-course',
      es: '/curso-web-gratis'
    },
    '/case-studies': {
      en: '/case-studies',
      es: '/casos-de-exito'
    },
    '/blog': {
      en: '/blog',
      es: '/blog'
    },
    '/services/starter-presence': { en: '/services/starter-presence', es: '/servicios/starter-presence' },
    '/services/growth-machine': { en: '/services/growth-machine', es: '/servicios/growth-machine' },
    '/services/full-funnel-360': { en: '/services/full-funnel-360', es: '/servicios/full-funnel-360' },
    '/services/ecommerce-pro': { en: '/services/ecommerce-pro', es: '/servicios/ecommerce-pro' },
    '/services/automation-retainer': { en: '/services/automation-retainer', es: '/servicios/automation-retainer' }
  }
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
