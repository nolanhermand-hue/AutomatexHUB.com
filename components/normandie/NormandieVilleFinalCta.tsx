import { PrimaryDemoCta } from "@/components/shared/PrimaryDemoCta";
import { NORMANDIE_CTA_REASSURANCE } from "@/lib/normandie-shared";
import type { NormandieVillePage } from "@/lib/villes-normandie";

export function NormandieVilleFinalCta({ ville }: { ville: NormandieVillePage }) {
  return (
    <section id="contact" className="home-surface border-t border-border px-gutter py-16 md:py-20">
      <div className="mx-auto max-w-content">
        <div className="glass-panel mx-auto max-w-xl p-8 text-center md:p-10">
          <h2 className="font-heading text-2xl font-bold text-text md:text-3xl">
            Démo gratuite 30 min — {ville.name}
          </h2>
          <p className="mx-auto mt-3 max-w-readable text-sm text-muted md:text-base">
            Nolan cale le scénario sur ton métier {ville.nameWithArticle}. Il confirme sous 24 h en
            semaine.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryDemoCta
              analyticsId={`normandie_${ville.slug}_final`}
              className="btn-bracket btn-bracket-primary min-h-[48px] w-full justify-center sm:w-auto"
            />
          </div>
          <p className="mt-5 text-xs leading-relaxed text-muted">{NORMANDIE_CTA_REASSURANCE}</p>
        </div>
      </div>
    </section>
  );
}
