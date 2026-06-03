import { AnalyticsCta } from "@/components/ui/AnalyticsCta";
import { PRIMARY_DEMO_CTA } from "@/lib/constants";
import { HOME_HERO } from "@/lib/home-copy";
import { rendezVousHref } from "@/lib/hub-nav";

export function HomeHero() {
  return (
    <section id="hero" className="relative px-gutter pb-16 pt-24 md:pb-20 md:pt-28">
      <div className="mx-auto grid max-w-content gap-10 lg:grid-cols-[1fr_minmax(240px,360px)] lg:items-center">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--terracotta)]">
            Automatex · Orne · Normandie
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-tight tracking-tight text-text">
            {HOME_HERO.h1}
          </h1>
          <p className="mt-6 max-w-xl text-[clamp(1.35rem,3vw,2rem)] font-semibold leading-snug text-[var(--cream)]">
            {HOME_HERO.accroche}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {HOME_HERO.sub}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <AnalyticsCta
              href={rendezVousHref()}
              analyticsId="home_hero_demo"
              className="btn-bracket btn-bracket-primary"
            >
              {PRIMARY_DEMO_CTA}
            </AnalyticsCta>
          </div>
          <p className="mt-6 max-w-lg text-xs leading-relaxed text-[var(--text-subtle)] md:text-sm">
            {HOME_HERO.reassurance}
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/brand/cubes-fallback.svg"
            alt=""
            width={360}
            height={360}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="mx-auto w-full max-w-[320px] opacity-90 lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
