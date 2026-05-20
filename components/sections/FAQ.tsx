import { FAQ_HEADING, FAQ_ITEMS } from "@/lib/constants";
import { SectionCta } from "@/components/ui/SectionCta";

function defaultOpen(index: number): boolean {
  const crmIndex = FAQ_ITEMS.findIndex((item) => item.question.includes("CRM réseau"));
  return index === 1 || index === (crmIndex >= 0 ? crmIndex : 5);
}

/** FAQ en `<details>` natif : toutes les réponses présentes dans le HTML initial. */
export function FAQ() {
  return (
    <section id="faq" className="border-t border-border bg-night px-gutter py-12 md:py-16">
      <div className="mx-auto max-w-content">
        <h2 className="font-heading text-3xl text-text md:text-4xl">{FAQ_HEADING.h2}</h2>
        <div className="mt-8 overflow-hidden rounded-xl border border-border">
          {FAQ_ITEMS.map((item, index) => (
            <details
              key={item.question}
              open={defaultOpen(index)}
              className="group border-b border-border bg-bg-card px-5 last:border-0 md:px-7"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-medium text-text marker:content-none md:text-lg [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-light text-lg font-light leading-none text-primary transition-transform duration-200 group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-muted md:text-[16px]">
                {item.answer}
              </p>
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
