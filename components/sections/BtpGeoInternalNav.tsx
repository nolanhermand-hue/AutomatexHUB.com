import { BTP_GEO_INTERNAL_LINKS } from "@/lib/mega-nav-data";
import Link from "next/link";

/** Maillage interne SEO local BTP (landing + pages Orne). */
export function BtpGeoInternalNav() {
  return (
    <nav
      aria-label="Zones géographiques couvertes"
      className="border-t border-border bg-bg-card px-gutter py-10"
    >
      <div className="mx-auto max-w-content">
        <p className="text-xs text-muted">Automatex Hub intervient dans l&apos;Orne :</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {BTP_GEO_INTERNAL_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-primary/40 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
