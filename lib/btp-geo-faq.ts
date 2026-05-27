import { SOVEREIGNTY_TRUST_LINE } from "@/lib/constants";

/** Blocs Q/R pour moteurs IA — pages BTP. */
export const BTP_GEO_FAQ = [
  {
    q: "Automatex Hub travaille-t-il avec les artisans de l'Orne ?",
    a: "Oui. Automatex Hub est fondé par Nolan Hermand, basé à Flers (61100). Il accompagne les artisans et TPE du BTP dans tout le département de l'Orne et en Normandie.",
  },
  {
    q: "Faut-il être informaticien pour utiliser le système Automatex ?",
    a: "Non. Le système est entièrement installé et maintenu par Nolan Hermand. L'artisan utilise uniquement Telegram pour recevoir ses résumés quotidiens.",
  },
  {
    q: "Combien coûte l'envoi automatique de devis pour un artisan ?",
    a: "Les formules Automatex Hub démarrent à 99 €/mois (setup unique 199 €). La formule Essentiel recommandée pour un solo chargé est à 249 €/mois.",
  },
  {
    q: "Les données des artisans sont-elles sécurisées avec Automatex ?",
    a: `Oui. ${SOVEREIGNTY_TRUST_LINE}. Mistral (Paris) et automatisations en UE. Détail sur /vos-donnees.`,
  },
] as const;
