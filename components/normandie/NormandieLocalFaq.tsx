import {
  NORMANDIE_GENERIC_FAQ,
  type NormandieFaqItem,
} from "@/lib/normandie-shared";

type NormandieLocalFaqProps = {
  cityName: string;
  localFaq: ReadonlyArray<NormandieFaqItem>;
};

export function NormandieLocalFaq({ cityName, localFaq }: NormandieLocalFaqProps) {
  const items = [...localFaq, ...NORMANDIE_GENERIC_FAQ];

  return (
    <section id="faq" className="border-t border-border px-gutter py-16 md:py-20">
      <div className="mx-auto max-w-content">
        <h2 className="font-heading text-2xl font-bold text-text md:text-3xl">
          Questions fréquentes — {cityName}
        </h2>
        <div className="mt-8 divide-y divide-border overflow-hidden rounded-xl border border-border">
          {items.map((item, index) => (
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
                <p className="text-[15px] leading-relaxed text-muted">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
