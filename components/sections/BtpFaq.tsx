import { BTP_FAQ } from "@/lib/btp-copy";

/** FAQ BTP SSR + accessible (C11). */
export function BtpFaq() {
  return (
    <section id="faq" className="bg-bg-card px-gutter py-12 md:py-16">
      <div className="mx-auto max-w-content">
        <h2 className="font-heading text-3xl text-text">{BTP_FAQ.h2}</h2>
        <p className="mt-2 text-sm text-muted">Questions fréquentes des artisans avant de démarrer.</p>
        <div className="mt-8 space-y-2">
          {BTP_FAQ.items.map((item) => (
            <details
              key={item.q}
              className="group overflow-hidden rounded-xl border border-border bg-night"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-sm font-medium text-text transition-colors hover:bg-bg-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                {item.q}
                <svg
                  className="ml-3 h-4 w-4 shrink-0 text-faint transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 pt-1">
                <p className="text-sm leading-relaxed text-muted">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
