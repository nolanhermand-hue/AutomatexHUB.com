import { CatalogDemoVideo } from "@/components/catalog/CatalogDemoVideo";
import { AUTOMATIONS_CATALOG } from "@/lib/automations-catalog";
import Link from "next/link";
import { rendezVousHref } from "@/lib/hub-nav";

const LEAD_DEMO_ID = "client-reponse-90s";

export function ImmobilierLiveDemoSection() {
  const automation = AUTOMATIONS_CATALOG.find((a) => a.id === LEAD_DEMO_ID);
  const title = automation?.title ?? "Réponse aux demandes";

  return (
    <section id="demo" className="scroll-mt-24 bg-bg-card px-gutter py-12 md:scroll-mt-28 md:py-16">
      <div className="mx-auto max-w-content">
        <h2 className="font-heading text-2xl text-text md:text-3xl">
          Concrètement — ce qui se passe à 22h
        </h2>
        <p className="mt-3 max-w-readable text-sm text-muted">
          Voici le déroulement exact quand un client arrive pendant votre visite. Les messages sont
          personnalisés avec votre prénom lors de l&apos;onboarding.
        </p>
        <figure className="mt-8 overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/50">
          <CatalogDemoVideo id={LEAD_DEMO_ID} title={title} />
          <figcaption className="border-t border-border bg-surface/80 px-5 py-3">
            <p className="font-mono text-[10px] italic text-faint">
              Exemple basé sur une configuration type diagnostiqueur indépendant en Normandie.
            </p>
            <p className="mt-3">
              <Link
                href={rendezVousHref()}
                className="font-mono text-[11px] uppercase tracking-wide text-primary hover:underline"
              >
                Voir comment ça s&apos;installe sur votre activité →
              </Link>
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
