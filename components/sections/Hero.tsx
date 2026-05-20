"use client";

import { trackCtaClicked } from "@/lib/analytics";
import { HeroScene } from "@/components/three/SceneWrapper";
import { HeroScrollHint } from "@/components/ui/HeroScrollHint";
import { GEO_DEFINITION, HERO_COPY, HERO_STATS, HERO_STATS_SOURCE, CTA_REASSURANCE_LINE } from "@/lib/constants";

function ReassuranceIcon({ kind }: { kind: "fr" | "lock" | "hand" }) {
  const common = "h-4 w-4 shrink-0 text-primary";
  if (kind === "fr") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 9h18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "lock") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M8 11V8a4 4 0 118 0v3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 11V8a5 5 0 0110 0v3M5 11h14v8H5v-8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative [scroll-margin-top:60px] lg:[scroll-margin-top:72px]">
      <HeroScene>
        <div className="mx-auto max-w-content px-gutter pb-8 pt-[76px] lg:pb-12 lg:pt-[96px]">
          <div className="lg:grid lg:grid-cols-[1fr_minmax(260px,320px)] lg:items-start lg:gap-12">
            <div>
              <p className="label-micro inline-flex w-fit items-center gap-2 rounded-full bg-accent-light px-3 py-1.5 text-primary">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                {HERO_COPY.preHeading}
              </p>

              <p className="sr-only">
                Automatisation pour mandataires immobiliers indépendants en Normandie et dans
                l&apos;Orne — Flers (61). Réponse immédiate aux leads, tri de mails, classement de
                documents pour IAD, SAFTI et Capifrance.
              </p>

              <h1 className="mt-5 font-heading text-[clamp(2.25rem,8vw,4.5rem)] font-bold leading-[1.05] text-text md:text-[clamp(2.75rem,5vw,5rem)]">
                Ne perdez plus jamais un lead{" "}
                <span className="italic text-primary">à 3 500 €</span>.
              </h1>

              <p className="mt-4 max-w-readable text-sm leading-relaxed text-muted md:text-base">
                {GEO_DEFINITION}
              </p>

              <p className="mt-5 max-w-readable font-body text-base leading-[1.6] text-muted md:mt-6 md:text-xl">
                {HERO_COPY.subtitle}
              </p>

              <p className="mt-4 max-w-readable text-sm font-medium text-text md:text-base">
                {HERO_COPY.statAnchor}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-8">
                <a
                  href="#contact"
                  data-cursor="cta"
                  data-analytics-cta="hero_primary"
                  onClick={() => trackCtaClicked("hero_primary")}
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md bg-cta px-8 py-3.5 text-[15px] font-semibold tracking-[-0.01em] text-cta-fg shadow-[0_2px_12px_rgb(26_26_24/0.12)] transition-all duration-200 ease-out hover:brightness-110 active:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {HERO_COPY.ctaPrimary}
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="#solution"
                  data-cursor="link"
                  data-analytics-cta="hero_secondary"
                  onClick={() => trackCtaClicked("hero_secondary")}
                  className="inline-flex min-h-[48px] items-center justify-center text-sm font-semibold text-muted underline underline-offset-4 transition-colors duration-200 hover:text-text"
                >
                  {HERO_COPY.ctaSecondary}
                </a>
              </div>

              <ul className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
                <li className="inline-flex items-center gap-1.5">
                  <ReassuranceIcon kind="fr" />
                  {HERO_COPY.badgeHosted}
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <ReassuranceIcon kind="lock" />
                  {HERO_COPY.badgeRgpd}
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <ReassuranceIcon kind="hand" />
                  {HERO_COPY.badgeNoCommit}
                </li>
              </ul>

              <p className="mt-4 text-xs font-medium text-muted">{CTA_REASSURANCE_LINE}</p>
            </div>

            <aside
              className="mt-10 rounded-xl border border-border bg-bg-card p-6 shadow-[0_0_0_0.5px_var(--color-border)] lg:mt-5 lg:p-7"
              aria-label="Chiffres clés mandataires"
            >
              <ul className="space-y-6">
                {HERO_STATS.map((stat) => (
                  <li key={stat.label}>
                    <p className="font-heading text-2xl font-semibold text-primary md:text-[1.75rem]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-stat-caption">{stat.label}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-stat-caption">
                {HERO_STATS_SOURCE}
              </p>
            </aside>
          </div>

          <HeroScrollHint />
        </div>
      </HeroScene>
    </section>
  );
}
