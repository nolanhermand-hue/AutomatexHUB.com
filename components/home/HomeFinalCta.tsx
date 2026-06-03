import { PrimaryDemoCta } from "@/components/shared/PrimaryDemoCta";
import { HOME_FINAL_CTA } from "@/lib/home-copy";

export function HomeFinalCta() {
  return (
    <section id="contact" className="home-surface border-t border-border px-gutter py-16 md:py-20">
      <div className="mx-auto max-w-content text-center">
        <div className="animate-on-scroll section-reveal">
          <h2 className="font-heading text-2xl font-bold text-text md:text-3xl">{HOME_FINAL_CTA.h2}</h2>
          <p className="mx-auto mt-3 max-w-readable text-sm text-muted md:text-base">{HOME_FINAL_CTA.sub}</p>
        </div>
        <div className="animate-on-scroll fade mt-8 flex justify-center">
          <PrimaryDemoCta analyticsId="home_final_cta" className="btn-bracket btn-bracket-primary" />
        </div>
      </div>
    </section>
  );
}
