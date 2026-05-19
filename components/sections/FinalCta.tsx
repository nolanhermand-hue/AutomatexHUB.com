"use client";

import { trackCtaClicked } from "@/lib/analytics";
import { ABOUT_FOUNDER, NAP } from "@/lib/constants";

/**
 * FINAL CTA — C4
 * CTA final dupliqué + signature humaine (nom + photo + téléphone du fondateur).
 * Placé en fin de page, avant le footer.
 */
export function FinalCta() {
  return (
    <section
      id="cta-final"
      className="bg-night px-gutter py-16 md:py-20"
      data-analytics-section="final_cta"
    >
      <div className="mx-auto max-w-content">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-cta/15 via-night to-section p-8 text-center shadow-[0_0_0_0.5px_rgb(255_255_255/0.05),0_20px_64px_rgb(0_0_0/0.5)] md:p-14">
          <p className="label-micro text-accent">Prochaine étape</p>
          <h2 className="mt-3 max-w-readable mx-auto font-heading text-3xl leading-tight text-text md:text-5xl">
            20 minutes. Aucun engagement. Aucun préparatif.
          </h2>
          <p className="mt-4 max-w-readable mx-auto text-base text-muted md:text-lg leading-[1.6]">
            Nolan vous montre en direct ce que la configuration fait sur une activité comme la vôtre.
            Si ça ne vous convient pas, vous partez sans rien.
          </p>

          <a
            href="#contact"
            data-analytics-cta="final_primary"
            onClick={() => trackCtaClicked("final_primary")}
            className="mt-8 inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-cta px-10 py-4 text-base font-semibold tracking-[-0.01em] text-[var(--color-cta-fg,#fff)] shadow-[0_0_0_0.5px_rgb(255_255_255/0.12),0_6px_28px_rgb(0_0_0/0.4)] transition-all duration-200 ease-out hover:scale-[1.02] hover:bg-primary active:scale-[0.97]"
          >
            Réserver ma démo 15 min
            <span aria-hidden>→</span>
          </a>

          {/* Signature humaine fondateur */}
          <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-3 border-t border-white/[0.06] pt-8 md:flex-row md:gap-5 md:text-left">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cta/20 text-xl font-bold text-cta ring-2 ring-cta/30">
              NH
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm font-semibold text-text">
                {NAP.founder} · {NAP.role}
              </p>
              <p className="mt-1 text-sm text-muted">
                {ABOUT_FOUNDER.directContact.replace("06 45 38 42 33", "")}
                <a
                  href={`tel:${NAP.phoneE164}`}
                  data-analytics-cta="final_phone"
                  onClick={() => trackCtaClicked("final_phone")}
                  className="font-semibold text-accent underline underline-offset-2 hover:text-cta"
                >
                  {NAP.phoneDisplay}
                </a>
              </p>
            </div>
          </div>

          <p className="mt-4 text-xs text-muted/70">
            🇫🇷 Hébergé en France · 🔒 RGPD · ✋ Sans engagement · 🛡 30 j satisfait ou remboursé
          </p>
        </div>
      </div>
    </section>
  );
}
