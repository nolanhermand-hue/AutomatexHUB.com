"use client";

import Link from "next/link";
import { useEffect } from "react";

// H24 — GA4 conversion event au chargement de la page
function ConversionTracker() {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        event_category: "contact",
        event_label: "form_submit",
      });
    }
  }, []);
  return null;
}

export default function MerciPage() {
  return (
    <>
      <ConversionTracker />
      <section className="mx-auto max-w-content px-gutter py-20">
        <div className="max-w-readable">
          <p className="label-micro text-accent">Demande reçue</p>
          <h1 className="mt-3 font-heading text-4xl text-text md:text-5xl">
            Merci. Nolan vous rappelle sous 24h.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            Votre créneau de 20 minutes est réservé. Voici ce qui se passe maintenant :
          </p>

          <ol className="mt-8 space-y-5">
            <li className="flex items-start gap-4">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cta/20 text-sm font-bold text-cta">
                1
              </span>
              <div>
                <p className="font-semibold text-text">Nolan vous rappelle sous 24 heures</p>
                <p className="mt-1 text-sm text-muted">
                  Il confirme le créneau et prépare un scénario sur vos annonces avant l&apos;appel.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cta/20 text-sm font-bold text-cta">
                2
              </span>
              <div>
                <p className="font-semibold text-text">Vous évaluez en direct</p>
                <p className="mt-1 text-sm text-muted">
                  Pendant les 20 minutes, Nolan vous montre exactement ce que la configuration ferait sur votre activité. Aucune présentation générique.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cta/20 text-sm font-bold text-cta">
                3
              </span>
              <div>
                <p className="font-semibold text-text">Opérationnel en 48h si vous décidez de démarrer</p>
                <p className="mt-1 text-sm text-muted">
                  Aucun engagement. Si ce n&apos;est pas fait pour vous, l&apos;appel reste gratuit.
                </p>
              </div>
            </li>
          </ol>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-cta px-8 py-3 text-[15px] font-semibold text-white shadow-[0_4px_24px_rgb(29_158_117/0.4)] transition-all duration-200 hover:opacity-90 hover:shadow-[0_6px_32px_rgb(29_158_117/0.55)] active:scale-[0.98]"
            >
              Retour au site
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
