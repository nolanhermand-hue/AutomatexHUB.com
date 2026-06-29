import { AnalyticsCta } from "@/components/ui/AnalyticsCta";
import { HOME_FAQ, HOME_FAQ_HEADING, HOME_PRIMARY_CTA } from "@/lib/home-copy";
import { rendezVousHref } from "@/lib/hub-nav";
import Link from "next/link";

export function HomeFAQ() {
  return (
    <section id="faq" className="border-t border-border px-gutter py-16 md:py-20">
      <div className="mx-auto max-w-content">
        <div className="animate-on-scroll section-reveal mb-10">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-muted">
            Questions fréquentes
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-text md:text-3xl">
            {HOME_FAQ_HEADING.h2}
          </h2>
        </div>
        <div className="divide-y divide-border overflow-hidden rounded-xl border border-border">
          {HOME_FAQ.map((item, index) => (
            <details
              key={item.q}
              open={index === 0}
              className="animate-on-scroll fade group bg-surface transition-colors hover:bg-surface-2"
              style={{ transitionDelay: `${index * 55}ms` }}
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
        <p className="animate-on-scroll fade mt-6 text-center">
          <Link
            href="/faq"
            className="text-sm font-semibold text-text underline-offset-4 hover:underline"
            data-cursor="link"
          >
            Voir les 40 réponses →
          </Link>
        </p>
        <div className="animate-on-scroll fade mt-10 flex justify-center">
          <AnalyticsCta
            href={rendezVousHref()}
            analyticsId="home_faq_demo"
            className="btn-bracket btn-bracket-primary"
          >
            {HOME_PRIMARY_CTA}
          </AnalyticsCta>
        </div>
      </div>
    </section>
  );
}
