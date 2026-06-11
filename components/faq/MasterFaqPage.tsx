import { AnalyticsCta } from "@/components/ui/AnalyticsCta";
import { PRIMARY_DEMO_CTA } from "@/lib/constants";
import {
  GEO_MASTER_FAQ_CATEGORY_LABELS,
  GEO_MASTER_FAQ_CATEGORY_ORDER,
  faqItemsByCategory,
} from "@/lib/geo-master-faq";
import { rendezVousHref } from "@/lib/hub-nav";

export function MasterFaqPage() {
  return (
    <div className="mx-auto max-w-content">
      <header className="animate-on-scroll section-reveal max-w-2xl">
        <p className="label-micro text-muted">Centre d&apos;aide</p>
        <h1 className="mt-2 font-heading text-3xl font-bold text-text md:text-4xl">
          40 réponses sur Automatex
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
          Questions fréquentes des artisans, mandataires et TPE — réponses courtes, vérifiables,
          citables. Pour aller plus vite : réservez une démo de 20 minutes sur votre cas.
        </p>
      </header>

      <div className="mt-12 space-y-14">
        {GEO_MASTER_FAQ_CATEGORY_ORDER.map((category) => {
          const items = faqItemsByCategory(category);
          const { title, subtitle } = GEO_MASTER_FAQ_CATEGORY_LABELS[category];
          return (
            <section key={category} aria-labelledby={`faq-cat-${category}`}>
              <div className="animate-on-scroll section-reveal mb-6">
                <h2 id={`faq-cat-${category}`} className="text-xl font-bold text-text md:text-2xl">
                  {title}
                </h2>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-faint">
                  {subtitle}
                </p>
              </div>
              <div className="divide-y divide-border overflow-hidden rounded-xl border border-border">
                {items.map((item, index) => (
                  <details
                    key={item.id}
                    className="animate-on-scroll fade group bg-surface transition-colors hover:bg-surface-2"
                    style={{ transitionDelay: `${index * 40}ms` }}
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-sm font-medium text-text marker:content-none md:text-base [&::-webkit-details-marker]:hidden">
                      <span>
                        <span className="mr-2 font-mono text-faint">{item.id}.</span>
                        {item.q}
                      </span>
                      <svg
                        className="ml-4 h-3 w-3 shrink-0 text-faint transition-transform group-open:rotate-180"
                        viewBox="0 0 10 6"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M0 0l5 6 5-6z" />
                      </svg>
                    </summary>
                    <div className="border-t border-border px-6 pb-4 pt-1">
                      <p className="text-[13px] leading-relaxed text-muted md:text-[15px]">
                        {item.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="animate-on-scroll fade mt-14 flex flex-col items-center gap-4 border-t border-border pt-12">
        <AnalyticsCta
          href={rendezVousHref()}
          analyticsId="faq_master_demo"
          className="btn-bracket btn-bracket-primary"
        >
          {PRIMARY_DEMO_CTA}
        </AnalyticsCta>
        <p className="text-center text-sm text-muted">
          Sans engagement · résiliable en 1 mail · RGPD France
        </p>
      </div>
    </div>
  );
}
