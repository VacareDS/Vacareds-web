import { Link } from '@/navigation';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-[6px] text-[12px] text-[var(--muted)] flex-wrap">
      {items.map((item, idx) => (
        <span key={idx} className="flex items-center gap-[6px]">
          {idx > 0 && <span className="opacity-40 select-none">/</span>}
          {item.href ? (
            <Link
              href={item.href as any}
              className="hover:text-[var(--mg)] transition-colors no-underline"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[var(--dark)] font-semibold">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
