"use client";

/**
 * Bandeau de consentement cookies — conforme CNIL.
 *
 * - Aucun dépôt Google Analytics avant clic explicite sur « Tout accepter ».
 * - Deux boutons de poids visuel égal : « Tout accepter » / « Tout refuser ».
 * - Pas de case pré-cochée. Fermer sans choisir = refus par défaut.
 * - La mesure d'audience anonyme (Plausible) reste exemptée et n'est pas concernée.
 */
import { useConsent } from "@/providers/ConsentProvider";
import Link from "next/link";
import { useEffect, useRef } from "react";

export function CookieConsent() {
  const { bannerOpen, acceptAll, rejectAll, closeBanner } = useConsent();
  const acceptRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!bannerOpen) return;
    acceptRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeBanner();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [bannerOpen, closeBanner]);

  if (!bannerOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[960] px-gutter pb-[max(env(safe-area-inset-bottom),1rem)] pt-3">
      <div
        role="dialog"
        aria-modal="false"
        aria-labelledby="cookie-consent-title"
        aria-describedby="cookie-consent-desc"
        className="mx-auto max-w-content rounded-lg border border-border bg-navbar/95 p-5 shadow-2xl backdrop-blur-2xl sm:p-6"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="min-w-0">
            <p id="cookie-consent-title" className="mb-1 font-heading text-base font-bold text-title">
              Cookies de mesure d&apos;audience
            </p>
            <p id="cookie-consent-desc" className="text-[13px] leading-relaxed text-body">
              On aimerait mesurer l&apos;audience du site avec Google Analytics. Rien n&apos;est déposé
              sans ton accord — la mesure anonyme exemptée reste active.{" "}
              <Link
                href="/politique-confidentialite"
                className="font-medium text-accent underline underline-offset-2 transition hover:text-title"
              >
                Politique de confidentialité
              </Link>
              .
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-row">
            <button
              type="button"
              onClick={rejectAll}
              className="btn-bracket btn-bracket-outline w-full sm:w-auto"
            >
              Tout refuser
            </button>
            <button
              ref={acceptRef}
              type="button"
              onClick={acceptAll}
              className="btn-bracket w-full sm:w-auto"
            >
              Tout accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
