import { LocalStructuredData } from "@/components/seo/LocalStructuredData";
import type { LocalDiagnostiqueurPageData } from "@/lib/local-pages";
import { NAP } from "@/lib/constants";
import Link from "next/link";

export function DiagnostiqueurLocalPage({ page }: { page: LocalDiagnostiqueurPageData }) {
  const wordCount = [
    page.intro,
    ...page.sections.flatMap((s) => [s.h2, ...s.paragraphs]),
  ].join(" ").split(/\s+/).length;

  return (
    <article className="funnel-surface mx-auto max-w-content px-gutter py-16 pt-[88px] md:pt-[100px]">
      <LocalStructuredData
        path={page.path}
        pageName={page.h1}
        city={page.slug}
        description={page.metaDescription}
      />
      <nav className="text-sm text-muted" aria-label="Fil d'Ariane">
        <Link href="/" className="text-primary underline">
          Accueil
        </Link>
        <span aria-hidden> / </span>
        <span className="text-text">{page.h1}</span>
      </nav>
      <h1 className="mt-6 font-heading text-3xl text-text md:text-4xl">{page.h1}</h1>
      <p className="mt-6 max-w-readable text-lg leading-relaxed text-muted">{page.intro}</p>

      <div className="mt-12 space-y-10">
        {page.sections.map((section) => (
          <section key={section.h2}>
            <h2 className="font-heading text-2xl text-text">{section.h2}</h2>
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

      <div className="mt-14 rounded-lg border border-primary/30 bg-surface p-8">
        <h2 className="font-heading text-xl text-text">Réserver une démo</h2>
        <p className="mt-3 text-muted">
          Diagnostiqueurs en Normandie : démo 30 min sur ton cas, mise en route en 48 h.{" "}
          <a className="text-primary underline" href={`tel:${NAP.phoneE164}`}>
            {NAP.phoneDisplay}
          </a>
          .
        </p>
        <Link
          href="/rendez-vous"
          className="mt-6 btn-bracket btn-bracket-primary w-full justify-center"
        >
          {page.ctaLabel}
        </Link>
      </div>

      <p className="sr-only" aria-hidden>
        {wordCount} mots
      </p>
    </article>
  );
}
