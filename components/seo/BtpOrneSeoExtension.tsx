import Link from "next/link";
import { SOVEREIGNTY_TRUST_LINE } from "@/lib/constants";

const METIERS = [
  "Maçon Orne",
  "Plombier Orne",
  "Électricien Orne",
  "Couvreur Orne",
  "Menuisier Orne",
  "Peintre Orne",
] as const;

const TOP_THREE = [
  {
    title: "1. Réponse automatique aux appels manqués (< 90 secondes)",
    body: "Vous êtes sur un chantier à Flers ou Argentan. Un client potentiel appelle. En moins de 90 secondes, il reçoit un SMS : vous avez bien reçu son appel, vous le rappelez avant 18 h. Le client attend au lieu d'appeler un concurrent.",
  },
  {
    title: "2. Devis automatique depuis note vocale",
    body: "Vous dictez 2 minutes dans Telegram en sortant du chantier. Le devis est mis en page en PDF et envoyé au client avant que vous soyez rentré. Objectif terrain : signer le devis avant la fin de journée, pas le lendemain.",
  },
  {
    title: "3. Relance automatique devis non répondus (J+4, J+8)",
    body: "Si votre devis n'a pas eu de réponse après 4 jours, un message de relance part automatiquement. Et encore un à J+8 si toujours pas de réponse. Vous n'avez rien fait. Votre client a été relancé.",
  },
] as const;

export const BTP_ORNE_SEO_FAQ = [
  {
    q: "Quel est le coût d'une automatisation pour un artisan BTP dans l'Orne ?",
    a: "Pack Déclic : mise en place 390 € (1er mois inclus), puis 99 €/mois. Pack Système (recommandé) : 990 € puis 249 €/mois. Pack Pilote : 1 690 € puis 449 €/mois. Un chantier récupéré grâce à une réponse rapide couvre généralement plusieurs mois de pack.",
  },
  {
    q: "Faut-il être informaticien pour utiliser l'automatisation BTP ?",
    a: "Non. Nolan Hermand installe et maintient le système. L'artisan utilise uniquement Telegram — une application qu'il a probablement déjà sur son téléphone. Aucune formation requise.",
  },
  {
    q: "L'automatisation BTP est-elle conforme au RGPD ?",
    a: `Oui. ${SOVEREIGNTY_TRUST_LINE}. Transparence complète sur /vos-donnees.`,
  },
  {
    q: "Automatex Hub intervient-il dans toute l'Orne ?",
    a: "Oui. Nolan est basé à Flers (61100) et accompagne les artisans BTP dans tout le département de l'Orne : Flers, Argentan, Alençon, Mortagne-au-Perche, L'Aigle, Vire.",
  },
] as const;

/** Contenu SEO long-form pour la page pilier BTP Orne. */
export function BtpOrneSeoExtension() {
  return (
    <>
      <section className="mt-14 border-t border-border pt-14">
        <h2 className="font-heading text-2xl text-text">
          Qu&apos;est-ce que l&apos;automatisation pour un artisan BTP ?
        </h2>
        <p className="mt-4 max-w-readable text-base leading-relaxed text-muted">
          L&apos;automatisation pour un artisan BTP dans l&apos;Orne, ce n&apos;est pas un logiciel à
          apprendre. C&apos;est un système qui travaille à votre place pendant que vous êtes sur le
          chantier : il répond à vos appels manqués, envoie vos devis depuis une note vocale, et
          relance vos clients si vous n&apos;avez pas eu de réponse.
        </p>
        <p className="mt-4 max-w-readable text-base leading-relaxed text-muted">
          Nolan Hermand, basé à Flers (61), installe et maintient ce système pour les artisans de
          l&apos;Orne et de Normandie. Un point téléphonique mensuel est inclus dans chaque formule.
        </p>
      </section>

      <section className="mt-14 border-t border-border pt-14">
        <h2 className="font-heading text-2xl text-text">Pour quels artisans BTP dans l&apos;Orne ?</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {METIERS.map((metier) => (
            <div
              key={metier}
              className="rounded-xl border border-border px-4 py-3 text-sm font-medium text-text"
            >
              {metier}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 border-t border-border pt-14">
        <h2 className="font-heading text-2xl text-text">
          Les 3 automatisations les plus utiles pour un artisan BTP en Orne
        </h2>
        <div className="mt-8 space-y-8">
          {TOP_THREE.map((block) => (
            <div key={block.title}>
              <h3 className="font-heading text-lg font-bold text-text">{block.title}</h3>
              <p className="mt-2 max-w-readable text-sm leading-relaxed text-muted">{block.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 border-t border-border pt-14">
        <h2 className="font-heading text-2xl text-text">
          Questions fréquentes — Automatisation BTP Orne
        </h2>
        <div className="mt-6 space-y-2">
          {BTP_ORNE_SEO_FAQ.map((item) => (
            <details
              key={item.q}
              className="group overflow-hidden rounded-xl border border-border"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-sm font-medium text-text hover:bg-section">
                {item.q}
                <span
                  className="ml-3 shrink-0 text-muted transition-transform group-open:rotate-180"
                  aria-hidden
                >
                  ▾
                </span>
              </summary>
              <div className="border-t border-border px-5 pb-4 pt-2">
                <p className="text-sm leading-relaxed text-muted">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-primary/30 bg-section/80 p-8 text-center">
        <h2 className="font-heading text-xl text-text">Vous êtes artisan BTP dans l&apos;Orne ?</h2>
        <p className="mt-3 text-sm text-muted">
          Nolan vous appelle sous 24 h. 20 minutes. Il vous montre sur votre propre activité.
        </p>
        <Link
          href="/rendez-vous"
          className="mt-6 btn-bracket btn-bracket-primary w-full justify-center"
        >
          Réserver une démo gratuite →
        </Link>
      </section>
    </>
  );
}
