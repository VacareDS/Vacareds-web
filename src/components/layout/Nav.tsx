'use client';
import { useState, useEffect, useRef } from 'react';
import { Link, usePathname } from '@/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useMeeting } from '@/components/layout/HomeClient';

interface NavDropItem {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  dropdown?: NavDropItem[];
}

export interface NavProps {
  transparent?: boolean;
  brandName?: string;
  /** Pass `[]` for no links. Omit to use the default nav structure. */
  links?: NavLink[];
  /** @deprecated — lang switcher is now built into Nav automatically */
  langToggleText?: string;
  ctaText?: string;
  ctaHref?: string;
  ctaScrollOnly?: boolean;
  currentPath?: string;
}

function DropdownMenu({ items, onClose }: { items: NavDropItem[]; onClose: () => void }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-[8px] bg-white border-[0.5px] border-[rgba(28,24,40,0.1)] rounded-[14px] shadow-[0_16px_44px_rgba(28,24,40,0.12)] min-w-[200px] overflow-hidden z-[201] py-[6px]">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href as any}
          onClick={onClose}
          className="block px-[16px] py-[10px] text-[13px] font-semibold text-[var(--dark)] no-underline hover:bg-[rgba(232,65,122,0.05)] hover:text-[var(--mg)] transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default function Nav({
  transparent = false,
  brandName = 'Vacare Digital Solutions',
  links,
  ctaText,
  ctaHref,
  ctaScrollOnly = false,
}: NavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [desktopDrop, setDesktopDrop] = useState<string | null>(null);
  const dropRef = useRef<HTMLUListElement>(null);
  const pathname = usePathname() || '/';
  const meeting = useMeeting();
  const currentLocale = useLocale();
  const t = useTranslations('Layout');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    if (!desktopDrop) return;
    function onClickOutside(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDesktopDrop(null);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [desktopDrop]);

  const isEs = currentLocale === 'es';

  // Default nav structure built from translations
  const defaultLinks: NavLink[] = [
    {
      label: t('Nav.services'),
      href: isEs ? '/servicios' : '/services',
      dropdown: [
        { label: t('Nav.servicesDropdown.starter'), href: isEs ? '/servicios/starter-presence' : '/services/starter-presence' },
        { label: t('Nav.servicesDropdown.growth'), href: isEs ? '/servicios/growth-machine' : '/services/growth-machine' },
        { label: t('Nav.servicesDropdown.funnel'), href: isEs ? '/servicios/full-funnel-360' : '/services/full-funnel-360' },
        { label: t('Nav.servicesDropdown.retainer'), href: isEs ? '/servicios/automation-retainer' : '/services/automation-retainer' },
      ],
    },
    {
      label: t('Nav.cases'),
      href: isEs ? '/casos-de-exito' : '/case-studies',
      dropdown: [
        { label: t('Nav.casesDropdown.supertramp'), href: isEs ? '/casos-de-exito/supertramp' : '/case-studies/supertramp' },
        { label: t('Nav.casesDropdown.sobremi'), href: isEs ? '/casos-de-exito/sobremi' : '/case-studies/sobremi' },
      ],
    },
    { label: t('Nav.auto'), href: '/#auto' },
    { label: t('Nav.blog'), href: '/blog' },
    {
      label: t('Nav.resources'),
      href: isEs ? '/auditoria-web-gratuita' : '/free-web-audit',
      dropdown: [
        { label: t('Nav.resourcesDropdown.audit'), href: isEs ? '/auditoria-web-gratuita' : '/free-web-audit' },
        { label: t('Nav.resourcesDropdown.course'), href: isEs ? '/curso-web-gratis' : '/free-web-course' },
      ],
    },
  ];

  const navLinks = links !== undefined ? links : defaultLinks;

  const auditHref = isEs ? '/auditoria-web-gratuita' : '/free-web-audit';
  const resolvedCtaText = ctaText ?? t('Nav.audit');
  const resolvedCtaHref = ctaHref ?? auditHref;

  const bgClass = transparent && !isScrolled && !mobileOpen
    ? 'bg-transparent'
    : 'bg-[rgba(247,246,242,0.96)] backdrop-blur-[18px] border-b-[0.5px] border-[rgba(28,24,40,0.08)]';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-5 md:px-[52px] h-[64px] transition-all duration-300 ${bgClass}`}>
        <Link href="/" className="flex items-center gap-[9px] shrink-0 group">
          <img src="/images/logo.webp" alt={brandName} className="h-[30px] w-auto rounded-[6px]" />
          <span className="text-[14px] font-extrabold text-[var(--dark)] tracking-[-0.3px] leading-none hidden sm:inline group-hover:opacity-80 transition-opacity">{brandName}</span>
        </Link>

        {/* Desktop links */}
        <ul ref={dropRef} className="hidden md:flex gap-[30px] list-none items-center">
          {navLinks.map((link, i) => (
            <li key={i} className="relative">
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => setDesktopDrop(desktopDrop === link.label ? null : link.label)}
                    className="flex items-center gap-[5px] text-[13px] font-medium text-[var(--dark)] opacity-65 hover:opacity-100 transition-opacity bg-transparent border-none cursor-pointer p-0"
                  >
                    {link.label}
                    <svg viewBox="0 0 10 6" className={`w-[8px] h-[8px] transition-transform duration-200 ${desktopDrop === link.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M1 1l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {desktopDrop === link.label && (
                    <DropdownMenu items={link.dropdown} onClose={() => setDesktopDrop(null)} />
                  )}
                </>
              ) : (
                <Link
                  href={link.href as any}
                  className="text-[13px] font-medium text-[var(--dark)] transition-opacity opacity-65 hover:opacity-100"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-[12px] md:gap-[18px]">
          {/* Language switcher */}
          <span className="hidden md:inline-flex items-center gap-[5px] text-[11px] font-bold tracking-[0.08em] uppercase">
            <Link
              href={pathname}
              locale="es"
              className={`transition-colors ${currentLocale === 'es' ? 'text-[var(--mg)]' : 'text-[var(--muted)] opacity-60 hover:opacity-100 hover:text-[var(--dark)]'}`}
            >
              ES
            </Link>
            <span className="text-[var(--muted)] opacity-30 select-none">/</span>
            <Link
              href={pathname}
              locale="en"
              className={`transition-colors ${currentLocale === 'en' ? 'text-[var(--mg)]' : 'text-[var(--muted)] opacity-60 hover:opacity-100 hover:text-[var(--dark)]'}`}
            >
              EN
            </Link>
          </span>

          {/* CTA */}
          <Link
            href={resolvedCtaHref as any}
            className="gb text-white border-none py-[9px] px-[16px] md:px-[20px] rounded-[7px] font-bold text-[12px] md:text-[13px] cursor-pointer hover:opacity-90 transition-opacity whitespace-nowrap no-underline"
          >
            {resolvedCtaText}
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] w-[24px] p-0 bg-transparent border-none cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-full h-[2px] bg-[var(--dark)] transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-full h-[2px] bg-[var(--dark)] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-full h-[2px] bg-[var(--dark)] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[199] bg-[rgba(247,246,242,0.98)] backdrop-blur-[20px] pt-[80px] px-[28px] md:hidden overflow-y-auto">
          <ul className="list-none flex flex-col gap-[4px] mb-[40px]">
            {navLinks.map((link, i) => (
              <li key={i}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                      className="flex items-center justify-between w-full py-[16px] text-[20px] font-extrabold text-[var(--dark)] tracking-[-0.5px] bg-transparent border-none cursor-pointer border-b-[0.5px] border-[rgba(28,24,40,0.07)]"
                    >
                      {link.label}
                      <svg viewBox="0 0 10 6" className={`w-[12px] h-[12px] transition-transform duration-200 ${mobileExpanded === link.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M1 1l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {mobileExpanded === link.label && (
                      <div className="pl-[16px] pb-[8px] flex flex-col gap-[0px]">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href as any}
                            onClick={() => setMobileOpen(false)}
                            className="block py-[10px] text-[15px] font-semibold text-[var(--muted)] hover:text-[var(--mg)] transition-colors no-underline border-b-[0.5px] border-[rgba(28,24,40,0.05)]"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href as any}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center py-[16px] text-[20px] font-extrabold text-[var(--dark)] tracking-[-0.5px] no-underline border-b-[0.5px] border-[rgba(28,24,40,0.07)]"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Language + CTA */}
          <span className="inline-flex items-center gap-[8px] text-[13px] font-bold tracking-[0.08em] uppercase mb-[24px]">
            <Link
              href={pathname}
              locale="es"
              onClick={() => setMobileOpen(false)}
              className={currentLocale === 'es' ? 'text-[var(--mg)]' : 'text-[var(--muted)] opacity-60'}
            >
              ES
            </Link>
            <span className="text-[var(--muted)] opacity-30 select-none">/</span>
            <Link
              href={pathname}
              locale="en"
              onClick={() => setMobileOpen(false)}
              className={currentLocale === 'en' ? 'text-[var(--mg)]' : 'text-[var(--muted)] opacity-60'}
            >
              EN
            </Link>
          </span>
          <Link
            href={resolvedCtaHref as any}
            onClick={() => setMobileOpen(false)}
            className="gb text-white py-[14px] px-[28px] rounded-[10px] font-bold text-[15px] text-center block no-underline hover:opacity-90 transition-opacity"
          >
            {resolvedCtaText}
          </Link>
        </div>
      )}
    </>
  );
}
