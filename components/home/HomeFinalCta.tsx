import { HOME_FINAL_CTA } from "@/lib/home-copy";
import { HomeLeadForm } from "@/components/home/HomeLeadForm";

export function HomeFinalCta() {
  return (
    <section id="contact" className="home-surface border-t border-border px-gutter py-16 md:py-20">
      <div className="mx-auto max-w-content text-center">
        <div className="animate-on-scroll section-reveal">
          <h2 className="font-heading text-2xl font-bold text-text md:text-3xl">{HOME_FINAL_CTA.h2}</h2>
          <p className="mx-auto mt-3 max-w-readable text-sm text-muted md:text-base">{HOME_FINAL_CTA.sub}</p>
        </div>
        <div className="animate-on-scroll fade mt-8">
          <HomeLeadForm />
        </div>
      </div>
    </section>
  );
}
