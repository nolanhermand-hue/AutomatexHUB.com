import { DemoVideo } from "@/components/demo/DemoVideo";
import { AnalyticsCta } from "@/components/ui/AnalyticsCta";
import { HOME_HERO, HOME_PRIMARY_CTA, HOME_VOICE } from "@/lib/home-copy";
import { rendezVousHref } from "@/lib/hub-nav";

export function HomeHero() {
  return (
    <section id="hero" className="relative px-gutter pb-16 pt-24 md:pb-20 md:pt-28">
      <div className="mx-auto grid max-w-content items-center gap-10 lg:grid-cols-2">
        <div className="hero-enter">
          <p className="text-base font-medium leading-relaxed text-muted md:text-lg">
            {HOME_HERO.seoLine}
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-tight tracking-tight text-text">
            {HOME_HERO.h1}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {HOME_HERO.sub}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <AnalyticsCta
              href={rendezVousHref()}
              analyticsId="home_hero_demo"
              className="btn-bracket btn-bracket-primary"
            >
              {HOME_PRIMARY_CTA}
            </AnalyticsCta>
          </div>
          <p className="mt-6 max-w-lg text-xs leading-relaxed text-[var(--text-subtle)] md:text-sm">
            {HOME_HERO.reassurance}
          </p>
        </div>
        <DemoVideo
          id="voix-devis"
          caption={HOME_VOICE.figureCaption}
          className="hero-enter mx-auto w-full max-w-lg lg:max-w-none"
        />
      </div>
    </section>
  );
}
