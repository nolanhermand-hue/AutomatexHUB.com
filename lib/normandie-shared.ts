import { PRICING_REASSURANCE_CARD, SOVEREIGNTY_TRUST_LINE } from "@/lib/constants";
import { RESPONSE_DELAYS } from "@/lib/trust-copy";

export const NORMANDIE_PILIER_PATH = "/normandie" as const;

export type NormandieFaqItem = { readonly q: string; readonly a: string };

/** FAQ communes affichées sous les FAQ locales (HTML + JSON-LD). */
export const NORMANDIE_GENERIC_FAQ: ReadonlyArray<NormandieFaqItem> = [
  {
    q: "Faut-il changer mes outils pour travailler avec Automatex ?",
    a: "Non. On part de Gmail, Google Drive, calendrier et téléphone. Pas de nouvelle appli à maîtriser : les automatisations tournent en arrière-plan pendant que vous êtes sur chantier ou en visite.",
  },
  {
    q: "L’installation se fait comment si je ne suis pas dans l’Orne ?",
    a: "À distance partout en Normandie (et au-delà si besoin). Nolan est basé à Flers : rendez-vous terrain possibles dans l’Orne. Après l’audit de 20 minutes, la mise en place suit le périmètre validé ensemble.",
  },
  {
    q: "Mes données et la conformité RGPD ?",
    a: `${SOVEREIGNTY_TRUST_LINE}. Détail des sous-traitants et hébergement sur /vos-donnees. Pas de revente de données, résiliation en un mail.`,
  },
] as const;

export const NORMANDIE_CTA_REASSURANCE = `${PRICING_REASSURANCE_CARD} · ${RESPONSE_DELAYS.demo}` as const;
