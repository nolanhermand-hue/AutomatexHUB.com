"use client";

import Link from "next/link";

export default function MerciPage() {
  return (
    <section className="mx-auto max-w-content px-gutter py-20">
      <div className="max-w-readable">
        <p className="label-micro text-accent">Demande reçue</p>
        <h1 className="mt-3 font-heading text-4xl text-text md:text-5xl">
          Merci. Nous vous recontactons sous 24 h.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
          C&apos;est reçu. Nous vous contactons sous 24 h pour fixer les 20 minutes (ou confirmer
          votre résiliation). Pas de relance automatique entre-temps.
        </p>

        <ol className="mt-8 space-y-5">
          <li className="flex items-start gap-4">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
              1
            </span>
            <div>
              <p className="font-semibold text-text">Confirmation sous 24 heures</p>
              <p className="mt-1 text-sm text-muted">
                Nolan confirme le créneau ou la prise en compte de votre demande.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
              2
            </span>
            <div>
              <p className="font-semibold text-text">Échange de 20 minutes (démo)</p>
              <p className="mt-1 text-sm text-muted">
                Démonstration sur votre activité réelle — pas de présentation générique.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
              3
            </span>
            <div>
              <p className="font-semibold text-text">Mise en route après validation du périmètre</p>
              <p className="mt-1 text-sm text-muted">
                Délai cible : 48 h ouvrées une fois accès outils, règles et tests validés. Sans
                engagement. Résiliable en 1 mail (voir /cgv).
              </p>
            </div>
          </li>
        </ol>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="btn-bracket btn-bracket-primary w-full justify-center"
          >
            Retour au site
          </Link>
        </div>
      </div>
    </section>
  );
}
