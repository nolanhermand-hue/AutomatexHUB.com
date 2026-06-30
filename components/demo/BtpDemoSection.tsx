import { CatalogDemoVideo } from "@/components/catalog/CatalogDemoVideo";
import { BRAND_SHORT } from "@/lib/constants";
import { AUTOMATIONS_CATALOG } from "@/lib/automations-catalog";

const BTP_DEMO_IDS = ["appel-manque-sms-btp", "note-vocale-devis-btp"] as const;

function demoTitle(id: (typeof BTP_DEMO_IDS)[number]): string {
  return AUTOMATIONS_CATALOG.find((a) => a.id === id)?.title ?? id;
}

export function BtpDemoSection() {
  return (
    <section id="demo" className="bg-night px-gutter py-12 md:py-16">
      <div className="mx-auto max-w-content">
        <h2 className="font-heading text-3xl text-text">Voici ce qui change avec {BRAND_SHORT}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {BTP_DEMO_IDS.map((id) => (
            <figure
              key={id}
              className="overflow-hidden rounded-xl border border-border bg-surface"
            >
              <CatalogDemoVideo id={id} title={demoTitle(id)} />
              <figcaption className="px-4 py-3 text-xs text-muted">
                {demoTitle(id)} — données de test
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
