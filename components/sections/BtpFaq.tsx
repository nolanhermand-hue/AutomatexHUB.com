import { BTP_FAQ } from "@/lib/btp-copy";
import { MARKETING_REASSURANCE_BANNER } from "@/lib/constants";

/** FAQ BTP SSR + accessible (C11) — aligné FAQ immo. */
export function BtpFaq() {
  return (
    <section id="faq" className="border-t border-border px-gutter py-16 md:py-20">
      <div className="mx-auto max-w-content">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-muted">
          QUESTIONS FRÉQUENTES
        </p>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-text md:text-3xl">{BTP_FAQ.h2}</h2>
        <p className="mb-10 text-sm text-muted">Questions fréquentes des artisans avant de démarrer.</p>
        <div className="divide-y divide-border overflow-hidden rounded-xl border border-border">
          {BTP_FAQ.items.map((item) => (
            <details
              key={item.q}
              className="group bg-surface transition-colors hover:bg-surface-2"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-sm font-medium text-text marker:content-none md:text-base [&::-webkit-details-marker]:hidden">
                {item.q}
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
                <p className="text-[13px] leading-relaxed text-muted md:text-[15px]">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
        <p className="mt-8 text-center text-xs font-medium text-muted">{MARKETING_REASSURANCE_BANNER}</p>
      </div>
    </section>
  );
}
