import { HeroToolsSchema } from "@/components/home/HeroToolsSchema";
import { AnalyticsCta } from "@/components/ui/AnalyticsCta";
import { PRIMARY_DEMO_CTA } from "@/lib/constants";
import { HOME_HERO } from "@/lib/home-copy";
import { rendezVousHref } from "@/lib/hub-nav";

export function HomeHero() {
  return (
    <section id="hero" className="relative px-gutter pb-16 pt-24 md:pb-20 md:pt-28">
      <div className="mx-auto max-w-content">
        <div className="hero-enter max-w-3xl">
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
          <HeroToolsSchema />
        </div>
      </div>
    </section>
  );
}
