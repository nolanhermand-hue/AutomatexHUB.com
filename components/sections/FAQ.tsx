import { FAQ_HEADING, FAQ_ITEMS } from "@/lib/constants";
import { SectionCta } from "@/components/ui/SectionCta";

function defaultOpen(index: number): boolean {
  const crmIndex = FAQ_ITEMS.findIndex((item) => item.question.includes("CRM réseau"));
  return index === 1 || index === (crmIndex >= 0 ? crmIndex : 5);
}

/** FAQ en `<details>` natif — style ORIS. */
export function FAQ() {
  return (
    <section id="faq" className="border-t border-border px-gutter py-16 md:py-20">
      <div className="mx-auto max-w-content">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-muted">
          QUESTIONS FRÉQUENTES
        </p>
        <h2 className="mb-10 text-2xl font-bold tracking-tight text-text md:text-3xl">
          {FAQ_HEADING.h2}
        </h2>
        <div className="divide-y divide-border overflow-hidden rounded-xl border border-border">
          {FAQ_ITEMS.map((item, index) => (
            <details
              key={item.question}
              open={defaultOpen(index)}
              className="group bg-surface transition-colors hover:bg-surface-2"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-sm font-medium text-text marker:content-none md:text-base [&::-webkit-details-marker]:hidden">
                {item.question}
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
                <p className="text-[13px] leading-relaxed text-muted md:text-[15px]">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <SectionCta analyticsId="faq_cta" />
        </div>
      </div>
    </section>
  );
}
