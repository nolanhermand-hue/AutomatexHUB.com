import { LocalStructuredData } from "@/components/seo/LocalStructuredData";
import type { LocalMandatairesPageData } from "@/lib/local-pages";
import { NAP } from "@/lib/constants";
import Link from "next/link";

export function MandatairesLocalPage({ page }: { page: LocalMandatairesPageData }) {
  const wordCount = [
    page.intro,
    ...page.sections.flatMap((s) => [s.title, ...s.paragraphs]),
  ].join(" ").split(/\s+/).length;

  return (
    <article className="mx-auto max-w-content px-gutter py-16">
      <LocalStructuredData
        path={page.path}
        pageName={page.h1}
        city={page.city}
        description={page.metaDescription}
      />
      <nav className="text-sm text-muted" aria-label="Fil d'Ariane">
        <Link href="/" className="text-primary underline">
          Accueil
        </Link>
        <span aria-hidden> / </span>
        <span className="text-text">{page.city}</span>
      </nav>
      <p className="label-micro mt-6 text-accent">{page.areaServedLabel}</p>
      <h1 className="mt-3 font-heading text-3xl text-text md:text-4xl">{page.h1}</h1>
      <p className="mt-6 max-w-readable text-lg leading-relaxed text-muted">{page.intro}</p>

      <div className="mt-12 space-y-10">
        {page.sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-heading text-2xl text-text">{section.title}</h2>
            {section.paragraphs.map((p) => (
              <p
                key={p.slice(0, 48)}
                className="mt-4 max-w-readable text-base leading-relaxed text-muted"
              >
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>

      <div className="mt-14 rounded-2xl border border-primary/30 bg-section/80 p-8">
        <h2 className="font-heading text-xl text-text">Réserver une démo</h2>
        <p className="mt-3 text-muted">
          Mandataires {page.city} : audit 20 minutes, mise en route en 48 h.{" "}
          <a className="text-primary underline" href={`tel:${NAP.phoneE164}`}>
            {NAP.phoneDisplay}
          </a>
          .
        </p>
        <Link
          href="/immobilier#contact"
          className="mt-6 inline-flex rounded-full bg-cta px-6 py-3 text-sm font-semibold text-cta-fg"
        >
          Contacter Automatex
        </Link>
      </div>

      <p className="sr-only" aria-hidden>
        {wordCount} mots
      </p>
    </article>
  );
}
