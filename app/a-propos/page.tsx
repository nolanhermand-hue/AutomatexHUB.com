import { ABOUT_PAGE } from "@/lib/about-page";
import { buildAboutPageJsonLd } from "@/lib/json-ld";
import { FounderTrustBlock } from "@/components/ui/FounderTrustBlock";
import { NAP, SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: ABOUT_PAGE.metaTitle,
  description: ABOUT_PAGE.metaDescription,
  alternates: { canonical: `${SITE_URL}/a-propos` },
};

export default function AProposPage() {
  const json = buildAboutPageJsonLd();

  return (
    <article className="mx-auto max-w-content px-gutter py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
      <nav className="text-sm text-muted" aria-label="Fil d'Ariane">
        <Link href="/" className="text-primary underline">
          Accueil
        </Link>
        <span aria-hidden> / </span>
        <span className="text-text">À propos</span>
      </nav>
      <h1 className="mt-6 font-heading text-4xl text-text">{ABOUT_PAGE.h1}</h1>

      <div className="mt-8 max-w-readable">
        <FounderTrustBlock />
      </div>

      <dl className="mt-10 grid gap-4 border-y border-border py-8 md:grid-cols-2">
        {ABOUT_PAGE.facts.map((fact) => (
          <div key={fact.label}>
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
              {fact.label}
            </dt>
            <dd className="mt-1 text-base text-text">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <div className="max-w-readable space-y-4 text-base leading-relaxed text-muted">
        {ABOUT_PAGE.narrative.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-3">
        {ABOUT_PAGE.stats.map((stat) => (
          <li
            key={stat.label}
            className="rounded-lg border border-border bg-bg-card px-4 py-3 text-center"
          >
            <p className="font-heading text-2xl font-semibold text-primary">{stat.value}</p>
            <p className="mt-1 text-xs text-muted">{stat.label}</p>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-muted">
        {ABOUT_PAGE.directContact}{" "}
        <a href={`tel:${NAP.phoneE164}`} className="font-semibold text-primary underline">
          {NAP.phoneDisplay}
        </a>
      </p>

      <p className="mt-6 text-muted">
        <Link href="/btp#contact" className="text-primary underline">
          Prendre contact
        </Link>
        {" · "}
        <Link href="/cgv" className="text-primary underline">
          CGV
        </Link>
      </p>
    </article>
  );
}
