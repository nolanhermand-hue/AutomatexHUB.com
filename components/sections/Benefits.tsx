"use client";

import { BENEFITS_HEADING, BENEFITS_ITEMS } from "@/lib/constants";

/**
 * BENEFITS — C2
 * 4 cards, une stat chiffrée par bénéfice. Chiffres ancrés sur calculs
 * conditionnels honnêtes (cf. lib/constants — BENEFITS_ITEMS).
 */

const ICONS: Record<typeof BENEFITS_ITEMS[number]["icon"], React.ReactNode> = {
  clock: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" />
    </svg>
  ),
  money: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M3 7h18M3 12h18M3 17h18" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  flag: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M5 4v17" strokeLinecap="round" />
      <path d="M5 4h12l-3 4 3 4H5" strokeLinejoin="round" />
    </svg>
  ),
};

export function Benefits() {
  return (
    <section
      id="benefices"
      className="bg-section px-gutter py-12 md:py-16"
      data-analytics-section="benefits"
    >
      <div className="mx-auto max-w-content">
        <p className="label-micro text-accent">{BENEFITS_HEADING.eyebrow}</p>
        <h2 className="mt-2 font-heading text-3xl text-text md:text-4xl">
          {BENEFITS_HEADING.h2}
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS_ITEMS.map((b) => (
            <article
              key={b.title}
              className="group/benefit relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 shadow-[0_0_0_0.5px_rgb(255_255_255/0.04),0_6px_24px_rgb(0_0_0/0.25)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_8px_36px_rgb(0_0_0/0.4)]"
            >
              <div className="text-cta">{ICONS[b.icon]}</div>
              <p className="mt-4 font-heading text-2xl font-bold text-cta">{b.stat}</p>
              <h3 className="mt-1 text-base font-semibold text-text">{b.title}</h3>
              <p className="mt-2 text-sm leading-[1.6] text-muted">{b.body}</p>
            </article>
          ))}
        </div>

        {/* C8 — Micro-CTA bas de section */}
        <a
          href="#contact"
          data-analytics-cta="benefits_micro"
          className="mt-10 inline-flex items-center gap-1 text-sm font-semibold text-accent underline underline-offset-4 transition-colors hover:text-cta"
        >
          Récupérer ces heures dès cette semaine <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
