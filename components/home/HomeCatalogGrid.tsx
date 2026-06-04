import { PrimaryDemoCta } from "@/components/shared/PrimaryDemoCta";
import { AnalyticsCta } from "@/components/ui/AnalyticsCta";
import { IntegrationLogos } from "@/components/shared/IntegrationLogos";
import { AUTOMATIONS_CATALOG } from "@/lib/automations-catalog";
import { HOME_CATALOG_IDS } from "@/lib/home-catalog-ids";
import { HOME_CATALOG } from "@/lib/home-copy";
import { logosForHomeCatalogItem } from "@/lib/home-card-logos";

const catalogById = new Map(AUTOMATIONS_CATALOG.map((item) => [item.id, item]));

export function HomeCatalogGrid() {
  const items = HOME_CATALOG_IDS.map((id) => catalogById.get(id)).filter(Boolean);

  return (
    <section id="catalogue" className="border-t border-border px-gutter py-16 md:py-20">
      <div className="mx-auto max-w-content">
        <div className="animate-on-scroll section-reveal">
          <p className="label-micro text-muted">{HOME_CATALOG.eyebrow}</p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-text md:text-3xl">{HOME_CATALOG.h2}</h2>
          <p className="mt-3 max-w-readable text-sm text-muted md:text-base">{HOME_CATALOG.sub}</p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            if (!item) return null;
            const roiLine = item.impact ?? item.tagline;
            const cardLogos = logosForHomeCatalogItem(item);
            return (
              <li
                key={item.id}
                className="glass-panel-strong animate-on-scroll fade flex flex-col p-5"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <IntegrationLogos logos={cardLogos} className="mb-3" />
                <p className="text-[10px] font-mono uppercase tracking-widest text-faint">{item.category}</p>
                <h3 className="mt-2 text-base font-semibold text-text">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{roiLine}</p>
              </li>
            );
          })}
        </ul>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <PrimaryDemoCta analyticsId="home_catalog_demo" className="btn-bracket btn-bracket-primary" />
          <AnalyticsCta
            href="/automatisations"
            analyticsId="home_catalog_automatisations"
            className="text-sm text-muted underline underline-offset-4 hover:text-text"
          >
            {HOME_CATALOG.cta} →
          </AnalyticsCta>
        </div>
      </div>
    </section>
  );
}
