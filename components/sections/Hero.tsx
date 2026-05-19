"use client";

import { trackCtaClicked } from "@/lib/analytics";
import { HeroScene } from "@/components/three/SceneWrapper";
import { HeroScrollHint } from "@/components/ui/HeroScrollHint";
import { SplitHeroTitle } from "@/components/ui/SplitHeroTitle";
import { HERO_COPY, NAP } from "@/lib/constants";

function ReassuranceIcon({ kind }: { kind: "fr" | "lock" | "hand" }) {
  const common = "h-4 w-4 shrink-0 text-accent";
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
        <div className="mx-auto flex max-w-content flex-col px-gutter pb-8 pt-[76px] lg:pb-12 lg:pt-[96px]">
          <p className="label-micro inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-accent backdrop-blur-sm">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-cta" aria-hidden />
            {HERO_COPY.preHeading}
          </p>

          <p className="sr-only">
            Automatisation pour mandataires immobiliers indépendants en Normandie et dans l&apos;Orne
            — Flers (61). Réponse immédiate aux leads, tri de mails, classement de documents pour
            IAD, SAFTI et Capifrance.
          </p>

          <SplitHeroTitle
            text={HERO_COPY.h1}
            className="mt-5 max-w-[20ch] font-heading font-bold leading-[0.95] text-text [font-size:clamp(2.25rem,8vw,7.5rem)] md:max-w-none"
          />

          <p className="mt-5 max-w-readable font-body text-base leading-[1.6] text-muted md:mt-6 md:text-xl">
            {HERO_COPY.subtitle}
          </p>

          <p className="mt-4 max-w-readable text-sm font-semibold text-accent md:text-base">
            {HERO_COPY.statAnchor}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-8">
            <a
              href="#contact"
              data-cursor="cta"
              data-analytics-cta="hero_primary"
              onClick={() => trackCtaClicked("hero_primary")}
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-cta px-8 py-3.5 text-[15px] font-semibold tracking-[-0.01em] text-[var(--color-cta-fg,#fff)] shadow-[0_0_0_0.5px_rgb(255_255_255/0.12),0_4px_24px_rgb(0_0_0/0.35)] transition-all duration-200 ease-out hover:scale-[1.02] hover:bg-primary active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {HERO_COPY.ctaPrimary}
              <span aria-hidden>→</span>
            </a>
            <a
              href="#solution"
              data-cursor="link"
              data-analytics-cta="hero_secondary"
              onClick={() => trackCtaClicked("hero_secondary")}
              className="inline-flex min-h-[44px] items-center justify-center text-sm font-semibold text-muted underline underline-offset-4 transition-colors duration-200 hover:text-text"
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

          <p className="mt-4 text-sm text-muted">
            {HERO_COPY.phoneCta}{" "}
            <a
              href={`tel:${NAP.phoneE164}`}
              data-analytics-cta="hero_phone"
              onClick={() => trackCtaClicked("hero_phone")}
              className="font-semibold text-accent underline underline-offset-2 hover:text-cta"
            >
              {NAP.phoneDisplay}
            </a>
          </p>

          <HeroScrollHint />
        </div>
      </HeroScene>
    </section>
  );
}
