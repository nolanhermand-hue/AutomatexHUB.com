"use client";

import { trackCtaClicked } from "@/lib/analytics";
import { GUARANTEE_COPY } from "@/lib/constants";

/**
 * GUARANTEE XL — B6 / C3 / E1
 * Section encadré pleine largeur, icône bouclier, garantie en toutes lettres.
 * À placer juste avant la FAQ.
 */
export function GuaranteeXL() {
  return (
    <section
      id="garantie"
      className="bg-night px-gutter py-12 md:py-16"
      data-analytics-section="guarantee"
    >
      <div className="mx-auto max-w-content">
        <div className="relative grid gap-8 overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-br from-accent/10 via-night to-section p-8 shadow-[0_0_0_0.5px_rgb(93_202_165/0.2),0_16px_56px_rgb(0_0_0/0.4)] md:grid-cols-[auto_1fr] md:items-center md:gap-12 md:p-12">
          {/* Icône bouclier */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse rounded-full bg-accent/15 blur-2xl" aria-hidden />
              <svg
                viewBox="0 0 80 80"
                width="120"
                height="120"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="relative text-accent"
                aria-hidden
              >
                <path d="M40 8l28 10v20c0 14-9.5 24-28 30C21.5 62 12 52 12 38V18l28-10z" />
                <path
                  d="M28 40l8 8 16-18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div>
            <p className="label-micro text-accent">{GUARANTEE_COPY.eyebrow}</p>
            <h2 className="mt-2 font-heading text-3xl leading-tight text-text md:text-4xl">
              {GUARANTEE_COPY.h2}
            </h2>
            <p className="mt-4 max-w-readable text-base leading-[1.6] text-muted md:text-lg">
              {GUARANTEE_COPY.body}
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted md:text-base">
              {GUARANTEE_COPY.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-1 shrink-0 text-accent" aria-hidden>
                    ✓
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              data-analytics-cta="guarantee_xl"
              onClick={() => trackCtaClicked("guarantee_xl")}
              className="mt-7 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-cta px-8 py-3.5 text-[15px] font-semibold tracking-[-0.01em] text-[var(--color-cta-fg,#fff)] shadow-[0_0_0_0.5px_rgb(255_255_255/0.12),0_4px_24px_rgb(0_0_0/0.35)] transition-all duration-200 ease-out hover:scale-[1.02] hover:bg-primary active:scale-[0.97]"
            >
              {GUARANTEE_COPY.cta}
              <span aria-hidden>→</span>
            </a>

            <p className="mt-3 text-xs text-muted/60">{GUARANTEE_COPY.microNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
