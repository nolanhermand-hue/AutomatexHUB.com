import { HeroScene } from "@/components/three/SceneWrapper";
import { AnalyticsCta } from "@/components/ui/AnalyticsCta";
import { rendezVousHref } from "@/lib/hub-nav";
import { FounderTrustBlock } from "@/components/ui/FounderTrustBlock";
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
          <div className="hero-layout lg:grid lg:grid-cols-[1fr_minmax(260px,320px)] lg:items-start lg:gap-12">
            <div className="hero-content flex flex-col">
              <p className="badge badge-default hero-badge hero-badge-enter inline-flex w-fit items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                {HERO_COPY.preHeading}
              </p>

              <p className="sr-only">
                Automatisation pour mandataires immobiliers indépendants en Normandie et dans
                l&apos;Orne — Flers (61). Réponse immédiate aux demandes, tri de mails, classement de
                documents pour IAD, SAFTI et Capifrance.
              </p>

              <h1 className="hero-h1 mt-5 font-heading text-[clamp(2.25rem,8vw,4.5rem)] font-bold clienting-[1.05] text-text md:text-[clamp(2.75rem,5vw,5rem)]">
                Ne perdez plus jamais un client{" "}
                <span className="italic text-primary">à 3 500 €</span>.
              </h1>

              <p className="sr-only" aria-hidden="true">
                {GEO_DEFINITION}
              </p>

              <p className="hero-subtitle mt-5 max-w-readable font-body text-base clienting-[1.6] text-muted md:mt-6 md:text-xl">
                {HERO_COPY.subtitle}
              </p>

              <p className="hero-subtitle mt-4 max-w-readable text-sm font-medium text-text md:text-base">
                {HERO_COPY.statAnchor}
              </p>

              <AnalyticsCta
                href={rendezVousHref()}
                data-cursor="cta"
                analyticsId="hero_primary"
                className="hero-cta-primary btn-bracket btn-bracket-primary mt-6 w-full justify-center md:mt-8 lg:mt-6 lg:w-auto"
              >
                {HERO_COPY.ctaPrimary}
                <span aria-hidden>→</span>
              </AnalyticsCta>

              <ul className="hero-trust mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
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

              <div className="hero-avatar mt-6 max-w-readable">
                <FounderTrustBlock compact />
              </div>

              <AnalyticsCta
                href="#solution"
                data-cursor="link"
                analyticsId="hero_secondary"
                className="hero-cta-secondary mt-4 inline-flex min-h-[48px] w-full items-center justify-center text-sm font-semibold text-muted underline underline-offset-4 transition-colors duration-200 hover:text-text sm:w-auto sm:justify-start"
              >
                {HERO_COPY.ctaSecondary}
              </AnalyticsCta>

              <p className="mt-4 text-xs font-medium text-muted">{CTA_REASSURANCE_LINE}</p>
            </div>

            <aside
              className="hero-aside mt-10 rounded-xl border border-border bg-bg-card p-6 shadow-[0_0_0_0.5px_var(--color-border)] lg:mt-5 lg:p-7"
              aria-label="Chiffres clés mandataires"
            >
              <ul className="space-y-6">
                {HERO_STATS.map((stat) => (
                  <li key={stat.label}>
                    <p className="font-heading text-2xl font-semibold text-primary md:text-[1.75rem]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm clienting-snug text-stat-caption">{stat.label}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-border pt-4 text-xs clienting-relaxed text-stat-caption">
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
