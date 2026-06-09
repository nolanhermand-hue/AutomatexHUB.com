import { PrimaryDemoCta } from "@/components/shared/PrimaryDemoCta";
import type { NormandieVillePage } from "@/lib/villes-normandie";
import { SOVEREIGNTY_TRUST_LINE } from "@/lib/constants";
import { NORMANDIE_CTA_REASSURANCE } from "@/lib/normandie-shared";

type NormandieLocalHeroProps = {
  ville: NormandieVillePage;
  analyticsId: string;
};

export function NormandieLocalHero({ ville, analyticsId }: NormandieLocalHeroProps) {
  return (
    <section id="hero" className="home-surface relative px-gutter pb-14 pt-24 md:pb-16 md:pt-28">
      <div className="mx-auto max-w-content">
        <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--terracotta)]">
          {ville.heroEyebrow} · {SOVEREIGNTY_TRUST_LINE}
        </p>
        <h1 className="mt-3 max-w-3xl font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-text">
          {ville.h1}
        </h1>
        <p className="mt-6 max-w-xl text-[clamp(1.2rem,2.8vw,1.75rem)] font-semibold leading-snug text-[var(--cream)]">
          {ville.heroAccroche}
        </p>
        <p className="mt-4 max-w-readable text-base leading-relaxed text-muted md:text-lg">
          {ville.heroSub}
        </p>
        <p className="mt-3 text-sm text-[var(--text-subtle)]">{ville.distanceFromFlers}</p>
        <div className="mt-8">
          <PrimaryDemoCta
            analyticsId={analyticsId}
            className="btn-bracket btn-bracket-primary min-h-[48px] w-full justify-center sm:w-auto"
          />
        </div>
        <p className="mt-5 max-w-lg text-xs leading-relaxed text-muted md:text-sm">
          {NORMANDIE_CTA_REASSURANCE}
        </p>
      </div>
    </section>
  );
}
