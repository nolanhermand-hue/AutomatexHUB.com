import { ABOUT_PAGE } from "@/lib/about-page";
import { buildAboutPageJsonLd } from "@/lib/json-ld";
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

      <dl className="mt-10 grid gap-4 border-y border-white/[0.06] py-8 md:grid-cols-2">
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

      <p className="mt-10 text-muted">
        <Link href="/#contact" className="text-primary underline">
          Prendre contact
        </Link>
        {" · "}
        <a href={`tel:${NAP.phoneE164}`} className="text-primary underline">
          {NAP.phoneDisplay}
        </a>
      </p>
    </article>
  );
}
