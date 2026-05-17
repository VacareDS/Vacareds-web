import type { Metadata } from 'next';
import { routing } from '@/navigation';

const BASE_URL = 'https://vacaredigitalsolutions.com';

type Locale = typeof routing.locales[number];
type PathKey = keyof typeof routing.pathnames;

function resolvedPath(pathKey: PathKey, locale: Locale): string {
  const entry = routing.pathnames[pathKey];
  if (typeof entry === 'string') return entry;
  return (entry as Record<string, string>)[locale];
}

export function pageUrl(locale: Locale, pathKey: PathKey): string {
  return `${BASE_URL}/${locale}${resolvedPath(pathKey, locale)}`;
}

export function buildPageMeta(locale: Locale, pathKey: PathKey): Pick<Metadata, 'alternates'> {
  const canonical = pageUrl(locale, pathKey);
  const languages: Record<string, string> = {};

  for (const loc of routing.locales) {
    languages[loc as string] = pageUrl(loc, pathKey);
  }
  languages['x-default'] = pageUrl(routing.defaultLocale as Locale, pathKey);

  return {
    alternates: { canonical, languages },
  };
}

export const noindex: Metadata['robots'] = {
  index: false,
  follow: true,
};
