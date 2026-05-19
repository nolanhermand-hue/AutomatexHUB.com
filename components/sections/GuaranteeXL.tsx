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
        <div className="relative grid gap-8 overflow-hidden rounded-xl border border-accent-mid bg-accent-light p-8 md:grid-cols-[auto_1fr] md:items-center md:gap-12 md:p-12">
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
                className="relative text-primary"
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
            <p className="label-micro text-primary">{GUARANTEE_COPY.eyebrow}</p>
            <h2 className="mt-2 font-heading text-3xl leading-tight text-accent-dark md:text-4xl">
              {GUARANTEE_COPY.h2}
            </h2>
            <p className="mt-4 max-w-readable text-base leading-[1.6] text-primary md:text-lg">
              {GUARANTEE_COPY.body}
            </p>
            <ul className="mt-5 space-y-2 text-sm text-primary md:text-base">
              {GUARANTEE_COPY.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-1 shrink-0 text-primary" aria-hidden>
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
              className="mt-7 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md bg-cta px-8 py-3.5 text-[15px] font-semibold tracking-[-0.01em] text-cta-fg shadow-[0_2px_12px_rgb(26_26_24/0.12)] transition-all duration-200 ease-out hover:brightness-110 active:brightness-95"
            >
              {GUARANTEE_COPY.cta}
              <span aria-hidden>→</span>
            </a>

            <p className="mt-3 text-xs text-accent-dark/80">{GUARANTEE_COPY.microNote}</p>
            <p className="mt-4 text-sm leading-relaxed text-accent-dark">
              {GUARANTEE_COPY.humanFollowLine}{" "}
              <a
                href="#accompagnement"
                className="font-semibold text-primary underline underline-offset-2 hover:opacity-80"
              >
                {GUARANTEE_COPY.humanFollowLinkLabel}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
