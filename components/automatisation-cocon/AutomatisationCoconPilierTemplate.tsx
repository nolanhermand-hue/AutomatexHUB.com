import { AutomatisationCoconFaq } from "@/components/automatisation-cocon/AutomatisationCoconFaq";
import { AutomatisationCoconPositioningBand } from "@/components/automatisation-cocon/AutomatisationCoconPositioningBand";
import { PrimaryDemoCta } from "@/components/shared/PrimaryDemoCta";
import { COCON_PAIN_PAGES, COCON_PILIER } from "@/lib/automatisation-cocon";
import { buildAutomatisationCoconPilierJsonLd } from "@/lib/json-ld";
import { COCON_CTA_REASSURANCE } from "@/lib/automatisation-cocon-shared";
import { SOVEREIGNTY_TRUST_LINE } from "@/lib/constants";
import Link from "next/link";

export function AutomatisationCoconPilierTemplate() {
  const pilier = COCON_PILIER;
  const jsonLd = buildAutomatisationCoconPilierJsonLd({
    description: pilier.metaDescription,
    faq: pilier.pilierFaq,
  });

  return (
    <main className="home-page home-surface">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section id="hero" className="relative px-gutter pb-10 pt-24 md:pt-28">
        <div className="mx-auto max-w-content">
          <nav className="text-sm text-muted" aria-label="Fil d'Ariane">
            <Link href="/" className="text-primary hover:underline">
              Accueil
            </Link>
            <span aria-hidden> / </span>
            <span className="text-text">Automatisations pro</span>
          </nav>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-[var(--terracotta)]">
            Artisans & indépendants · {SOVEREIGNTY_TRUST_LINE}
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold clienting-[1.08] text-text">
            {pilier.h1}
          </h1>
          {pilier.intro.map((p) => (
            <p key={p.slice(0, 48)} className="mt-4 max-w-readable text-base clienting-relaxed text-muted md:text-lg">
              {p}
            </p>
          ))}
          <div className="mt-8">
            <PrimaryDemoCta
              analyticsId="cocon_pilier_hero"
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
          <h2 className="font-heading text-2xl font-bold text-text md:text-3xl">
            Automatisations par douleur métier
          </h2>
          <p className="mt-3 max-w-readable text-sm text-muted md:text-base">
            Chaque page décrit un cas concret — relance, SMS, demande, RDV — sans vendre un logiciel de métier.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {COCON_PAIN_PAGES.map((pain) => (
              <li key={pain.slug}>
                <Link
                  href={pain.path}
                  className="block h-full rounded-lg border border-border bg-surface p-5 transition hover:border-primary/40 hover:bg-surface-2"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-faint">
                    {pain.heroEyebrow}
                  </span>
                  <span className="mt-2 block font-semibold text-text">{pain.h1}</span>
                  <span className="mt-2 block text-xs text-muted">{pain.heroAccroche}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">
            Scénarios détaillés avec messages exemples :{" "}
            <Link href="/automatisations" className="text-primary underline">
              catalogue complet
            </Link>
            .
          </p>
        </div>
      </section>
      <AutomatisationCoconFaq title="Questions fréquentes — hub automatisations" localFaq={pilier.pilierFaq} />
    </main>
  );
}
