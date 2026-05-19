"use client";

import { trackCtaClicked } from "@/lib/analytics";
import { BOOKING_CTA_LABEL } from "@/lib/constants";

/**
 * FINAL CTA — seule section fond vert plein (#04342C).
 */
export function FinalCta() {
  return (
    <section
      id="cta-final"
      className="bg-forest px-gutter py-16 text-center md:py-20"
      data-analytics-section="final_cta"
    >
      <div className="mx-auto max-w-content">
        <p className="label-micro text-[rgb(250_249_246/0.55)]">Prochaine étape</p>
        <h2 className="mt-3 mx-auto max-w-readable font-heading text-3xl leading-tight text-cta-fg md:text-5xl">
          20 minutes.{" "}
          <span className="italic text-accent-mid">Aucun engagement.</span> Aucun préparatif.
        </h2>
        <p className="mx-auto mt-4 max-w-readable text-base leading-[1.6] text-[rgb(250_249_246/0.5)] md:text-lg">
          Nolan vous montre en direct ce que la configuration fait sur une activité comme la vôtre.
          Si ça ne vous convient pas, vous partez sans rien.
        </p>

        <a
          href="#contact"
          data-analytics-cta="final_primary"
          onClick={() => trackCtaClicked("final_primary")}
          className="mt-8 inline-flex min-h-[56px] items-center justify-center gap-2 rounded-md bg-cta-fg px-10 py-4 text-base font-semibold tracking-[-0.01em] text-forest shadow-[0_2px_16px_rgb(0_0_0/0.15)] transition-all duration-200 ease-out hover:brightness-95 active:brightness-90"
        >
          {BOOKING_CTA_LABEL}
          <span aria-hidden>→</span>
        </a>

        <p className="mt-8 text-xs text-[rgb(250_249_246/0.35)]">
          🇫🇷 Hébergé en France · 🔒 RGPD · ✋ Sans engagement · 🛡 30 j satisfait ou remboursé
        </p>
      </div>
    </section>
  );
}
