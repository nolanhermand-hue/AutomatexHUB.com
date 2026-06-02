import { trackCtaClicked } from "@/lib/analytics";
import { BOOKING_CTA_LABEL, SOVEREIGNTY_TRUST_LINE } from "@/lib/constants";

/**
 * FINAL CTA — bandeau ORIS (navy + accent orange).
 */
export function FinalCta() {
  return (
    <section
      id="cta-final"
      className="border-y border-border bg-surface px-gutter py-16 text-center md:py-20"
      data-analytics-section="final_cta"
    >
      <div className="mx-auto max-w-content">
        <p className="label-micro text-muted">Prochaine étape</p>
        <h2 className="mt-3 mx-auto max-w-readable font-heading text-3xl leading-tight text-text md:text-5xl">
          20 minutes.{" "}
          <span className="italic text-primary">Aucun engagement.</span> Aucun préparatif.
        </h2>
        <p className="mx-auto mt-4 max-w-readable text-base leading-[1.6] text-muted md:text-lg">
          On vous montre en direct ce que la configuration fait sur une activité comme la vôtre.
          Si ça ne vous convient pas, vous partez sans rien.
        </p>

        <a
          href="#contact"
          data-analytics-cta="final_primary"
          onClick={() => trackCtaClicked("final_primary")}
          className="mt-8 btn-bracket btn-bracket-primary"
        >
          {BOOKING_CTA_LABEL}
          <span aria-hidden>→</span>
        </a>

        <p className="mt-8 text-xs text-faint">
          {SOVEREIGNTY_TRUST_LINE} · 🔒 RGPD · ✋ Sans engagement · 📩 Résiliable en 1 mail
        </p>
      </div>
    </section>
  );
}
