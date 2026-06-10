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
    a: "Pack Déclic : mise en place 390 € (1er mois inclus), puis 99 €/mois. Pack Système (recommandé) : 990 € puis 249 €/mois. Pack Pilote : 1 690 € puis 449 €/mois.",
  },
  {
    q: "Les données des artisans sont-elles sécurisées avec Automatex ?",
    a: `Oui. ${SOVEREIGNTY_TRUST_LINE}. Mistral (Paris) et automatisations en UE. Détail sur /vos-donnees.`,
  },
] as const;
