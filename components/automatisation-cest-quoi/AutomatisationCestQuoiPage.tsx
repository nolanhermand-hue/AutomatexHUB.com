import { AutomatisationBeforeAfterDiagram } from "@/components/automatisation-cest-quoi/AutomatisationBeforeAfterDiagram";
import { AutomatisationPrincipleDiagram } from "@/components/automatisation-cest-quoi/AutomatisationPrincipleDiagram";
import { AnalyticsCta } from "@/components/ui/AnalyticsCta";
import {
  AUTOMATISATION_CEST_QUOI_ANALOGY,
  AUTOMATISATION_CEST_QUOI_CTA,
  AUTOMATISATION_CEST_QUOI_EXAMPLES,
  AUTOMATISATION_CEST_QUOI_FAQ_LD,
  AUTOMATISATION_CEST_QUOI_HERO,
  AUTOMATISATION_CEST_QUOI_LAST_MODIFIED,
  AUTOMATISATION_CEST_QUOI_LINKS,
  AUTOMATISATION_CEST_QUOI_META,
  AUTOMATISATION_CEST_QUOI_NOT,
  AUTOMATISATION_CEST_QUOI_PATH,
} from "@/lib/automatisation-cest-quoi";
import { buildAutomatisationCestQuoiJsonLd } from "@/lib/json-ld";
import { rendezVousHref } from "@/lib/hub-nav";
import Link from "next/link";

function CrossIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function AutomatisationCestQuoiPage() {
  const jsonLd = buildAutomatisationCestQuoiJsonLd({
    description: AUTOMATISATION_CEST_QUOI_META.description,
    dateModified: AUTOMATISATION_CEST_QUOI_LAST_MODIFIED,
    faq: AUTOMATISATION_CEST_QUOI_FAQ_LD,
  });

  return (
    <main className="funnel-surface min-h-screen px-gutter pb-20 pt-[88px] md:pt-[100px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="mx-auto max-w-content pb-6 text-sm text-muted" aria-label="Fil d'Ariane">
        <Link href="/" className="text-primary hover:underline">
          Accueil
        </Link>
        <span className="mx-2 text-faint" aria-hidden>
          /
        </span>
        <span className="text-muted">C&apos;est quoi une automatisation ?</span>
      </nav>

      <section className="mx-auto max-w-content">
        <h1 className="font-heading text-3xl font-bold text-text md:text-4xl">
          {AUTOMATISATION_CEST_QUOI_HERO.h1}
        </h1>
        <p className="mt-6 max-w-readable text-base leading-relaxed text-text md:text-lg">
          {AUTOMATISATION_CEST_QUOI_HERO.geoAnswer}
        </p>
        <p className="mt-4 max-w-readable text-sm font-medium text-muted md:text-base">
          {AUTOMATISATION_CEST_QUOI_HERO.subline}
        </p>
      </section>

      <section className="mx-auto max-w-content border-t border-border py-16 md:py-20">
        <AutomatisationPrincipleDiagram />
      </section>

      <section className="mx-auto max-w-content border-t border-border py-16 md:py-20">
        <h2 className="font-heading text-2xl font-bold text-text md:text-3xl">
          {AUTOMATISATION_CEST_QUOI_ANALOGY.h2}
        </h2>
        <p className="mt-5 max-w-readable text-base leading-relaxed text-muted">
          {AUTOMATISATION_CEST_QUOI_ANALOGY.body}
        </p>
      </section>

      <section className="mx-auto max-w-content border-t border-border py-16 md:py-20">
        <h2 className="font-heading text-2xl font-bold text-text md:text-3xl">
          Appel manqué : avant et après
        </h2>
        <p className="mt-3 max-w-readable text-sm text-muted">
          Le cas le plus fréquent chez les artisans et indépendants.
        </p>
        <AutomatisationBeforeAfterDiagram />
      </section>

      <section className="mx-auto max-w-content border-t border-border py-16 md:py-20">
        <h2 className="font-heading text-2xl font-bold text-text md:text-3xl">
          {AUTOMATISATION_CEST_QUOI_EXAMPLES.h2}
        </h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {AUTOMATISATION_CEST_QUOI_EXAMPLES.cards.map((card) => (
            <li key={card.title} className="glass-panel-strong flex flex-col p-6">
              <h3 className="text-base font-semibold text-text">{card.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{card.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-readable text-sm leading-relaxed text-muted">
          Pour aller plus loin : consultez la{" "}
          <Link href={AUTOMATISATION_CEST_QUOI_LINKS.pricingHref} className="text-primary underline">
            {AUTOMATISATION_CEST_QUOI_LINKS.pricingLabel}
          </Link>
          , le{" "}
          <Link href={AUTOMATISATION_CEST_QUOI_LINKS.catalogHref} className="text-primary underline">
            {AUTOMATISATION_CEST_QUOI_LINKS.catalogLabel}
          </Link>{" "}
          et découvre{" "}
          <Link href={AUTOMATISATION_CEST_QUOI_LINKS.founderHref} className="text-primary underline">
            {AUTOMATISATION_CEST_QUOI_LINKS.founderLabel}
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto max-w-content border-t border-border py-16 md:py-20">
        <h2 className="font-heading text-2xl font-bold text-text md:text-3xl">
          {AUTOMATISATION_CEST_QUOI_NOT.h2}
        </h2>
        <ul className="mt-8 space-y-4">
          {AUTOMATISATION_CEST_QUOI_NOT.items.map((line) => (
            <li key={line} className="flex gap-3 text-base leading-relaxed text-muted">
              <CrossIcon />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="faq" className="mx-auto max-w-content border-t border-border py-16 md:py-20">
        <h2 className="font-heading text-2xl font-bold text-text md:text-3xl">Questions fréquentes</h2>
        <div className="mt-8 divide-y divide-border overflow-hidden rounded-xl border border-border">
          {AUTOMATISATION_CEST_QUOI_FAQ_LD.map((item, index) => (
            <details
              key={item.q}
              open={index === 0}
              className="group bg-surface transition-colors hover:bg-surface-2"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-sm font-medium text-text marker:content-none md:text-base [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="text-faint transition-transform group-open:rotate-180" aria-hidden>
                  ▾
                </span>
              </summary>
              <div className="border-t border-border px-6 pb-4 pt-1">
                {item.q === "Combien ça coûte ?" ? (
                  <p className="text-[15px] leading-relaxed text-muted">
                    À partir de 390 € de mise en place puis 99 €/mois. Le détail est sur notre{" "}
                    <Link href={AUTOMATISATION_CEST_QUOI_LINKS.pricingHref} className="text-primary underline">
                      page tarifs
                    </Link>
                    .
                  </p>
                ) : (
                  <p className="text-[15px] leading-relaxed text-muted">{item.a}</p>
                )}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-content border-t border-border py-16 text-center md:py-20">
        <h2 className="font-heading text-2xl font-bold text-text md:text-3xl">
          {AUTOMATISATION_CEST_QUOI_CTA.title}
        </h2>
        <AnalyticsCta
          href={rendezVousHref()}
          analyticsId="automatisation_cest_quoi_cta"
          className="btn-bracket btn-bracket-primary mx-auto mt-8 inline-flex"
        >
          {AUTOMATISATION_CEST_QUOI_CTA.button}
        </AnalyticsCta>
        <p className="mx-auto mt-5 max-w-readable text-sm text-muted">
          {AUTOMATISATION_CEST_QUOI_CTA.subline}
        </p>
        <p className="sr-only">
          Page pédagogique {AUTOMATISATION_CEST_QUOI_PATH} — dernière mise à jour{" "}
          {AUTOMATISATION_CEST_QUOI_LAST_MODIFIED}
        </p>
      </section>
    </main>
  );
}
