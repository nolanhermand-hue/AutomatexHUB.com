import { AutomatisationCoconFaq } from "@/components/automatisation-cocon/AutomatisationCoconFaq";
import { AutomatisationCoconPositioningBand } from "@/components/automatisation-cocon/AutomatisationCoconPositioningBand";
import { PrimaryDemoCta } from "@/components/shared/PrimaryDemoCta";
import type { CoconPainPage, CoconTradeSection } from "@/lib/automatisation-cocon";
import { getCoconPainBySlug } from "@/lib/automatisation-cocon";
import { buildAutomatisationCoconPainJsonLd } from "@/lib/json-ld";
import {
  COCON_CTA_REASSURANCE,
  COCON_GENERIC_FAQ,
  COCON_PILIER_PATH,
} from "@/lib/automatisation-cocon-shared";
import { SOVEREIGNTY_TRUST_LINE } from "@/lib/constants";
import Link from "next/link";

function sortTrades(page: CoconPainPage): ReadonlyArray<CoconTradeSection> {
  if (!page.leadFirst) return page.tradeSections;
  const order: CoconTradeSection["id"][] = [
    "diagnostiqueur",
    "couvreur",
    "chauffagiste",
    "courtier",
    "immobilierDiag",
  ];
  const byId = new Map(page.tradeSections.map((s) => [s.id, s]));
  return order.map((id) => byId.get(id)).filter((s): s is CoconTradeSection => !!s);
}

export function AutomatisationCoconPainTemplate({ page }: { page: CoconPainPage }) {
  const faqForLd = [...page.localFaq, ...COCON_GENERIC_FAQ];
  const jsonLd = buildAutomatisationCoconPainJsonLd({
    path: page.path,
    serviceName: page.h1,
    description: page.metaDescription,
    faq: faqForLd,
  });
  const trades = sortTrades(page);

  return (
    <main className="home-page home-surface">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="px-gutter pt-24 text-sm text-muted md:pt-28" aria-label="Fil d'Ariane">
        <div className="mx-auto max-w-content">
          <Link href="/" className="text-primary hover:underline">
            Accueil
          </Link>
          <span aria-hidden> / </span>
          <Link href={COCON_PILIER_PATH} className="text-primary hover:underline">
            Automatisations pro
          </Link>
          <span aria-hidden> / </span>
          <span className="text-text">{page.heroEyebrow}</span>
        </div>
      </nav>
      <section id="hero" className="relative px-gutter pb-10 pt-8 md:pb-12">
        <div className="mx-auto max-w-content">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--terracotta)]">
            {page.heroEyebrow} · {SOVEREIGNTY_TRUST_LINE}
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.08] text-text">
            {page.h1}
          </h1>
          <p className="mt-6 max-w-xl text-lg font-semibold text-[var(--cream)]">{page.heroAccroche}</p>
          <p className="mt-4 max-w-readable text-base leading-relaxed text-muted">{page.heroSub}</p>
          <div className="mt-8">
            <PrimaryDemoCta
              analyticsId={`cocon_${page.slug}_hero`}
              className="btn-bracket btn-bracket-primary min-h-[48px] w-full justify-center sm:w-auto"
            />
          </div>
          <p className="mt-5 text-sm text-muted">{COCON_CTA_REASSURANCE}</p>
        </div>
      </section>
      <section className="px-gutter pb-12">
        <AutomatisationCoconPositioningBand />
      </section>
      <section className="border-t border-border px-gutter py-16 md:py-20">
        <div className="mx-auto max-w-content">
          <h2 className="font-heading text-2xl font-bold text-text">Comment ça marche</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {page.howItWorks.map((step, i) => (
              <li key={step.title} className="rounded-xl border border-border bg-surface p-6">
                <span className="font-mono text-xs text-faint">Étape {i + 1}</span>
                <h3 className="mt-2 font-semibold text-text">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="border-t border-border px-gutter py-16 md:py-20">
        <div className="mx-auto max-w-content space-y-12">
          {trades.map((trade) => (
            <article key={trade.id} className="max-w-readable">
              <h2 className="font-heading text-xl font-bold text-text md:text-2xl">{trade.h2}</h2>
              {trade.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 text-base leading-relaxed text-muted">
                  {p}
                </p>
              ))}
              <p className="mt-4 text-sm text-faint">{trade.toolsLine}</p>
            </article>
          ))}
        </div>
      </section>
      <AutomatisationCoconFaq title="Questions fréquentes" localFaq={page.localFaq} />
      <section className="border-t border-border px-gutter py-12">
        <div className="mx-auto flex max-w-content flex-wrap gap-4">
          <Link href={COCON_PILIER_PATH} className="text-sm text-primary underline">
            ← Toutes les automatisations pro
          </Link>
          {page.relatedSlugs.map((slug) => {
            const related = getCoconPainBySlug(slug);
            if (!related) return null;
            return (
              <Link key={slug} href={related.path} className="text-sm text-muted underline hover:text-text">
                {related.heroEyebrow}
              </Link>
            );
          })}
          <Link href="/automatisations" className="text-sm text-muted underline hover:text-text">
            Catalogue démo
          </Link>
        </div>
      </section>
    </main>
  );
}
