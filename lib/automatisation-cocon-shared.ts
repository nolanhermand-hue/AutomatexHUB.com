import { PRICING_REASSURANCE_CARD } from "@/lib/constants";
import { RESPONSE_DELAYS } from "@/lib/trust-copy";

export const COCON_PILIER_PATH = "/automatisation-pour-artisans" as const;

export type CoconFaqItem = { readonly q: string; readonly a: string };

export const COCON_POSITIONING_LINE =
  "Compatible avec ton outil actuel — on automatise ce qu'il ne fait pas : relances, rappels, tri, pas la saisie métier à sa place." as const;

export const COCON_POSITIONING_DETAIL =
  "Liciel, ORIS, Tolteck, Obat, Batappli, ProDevis : tu gardes ton logiciel. Automatex branche des relances et des réponses par-dessus Gmail, SMS et calendrier." as const;

export const COCON_CTA_REASSURANCE = `${PRICING_REASSURANCE_CARD} · ${RESPONSE_DELAYS.demo}` as const;

export const COCON_GENERIC_FAQ: ReadonlyArray<CoconFaqItem> = [
  {
    q: "Automatex remplace-t-il mon logiciel métier ?",
    a: "Non. On ne vend pas de logiciel de devis, de DPE ou de chiffrage. On enchaîne des relances, des SMS et des mails à partir de ce que tu as déjà saisi ou envoyé.",
  },
  {
    q: "Comment on cale le périmètre ?",
    a: "Démo gratuite 20 min : nom, téléphone, métier. Nolan valide avec toi les déclencheurs (délai, ton, canal) avant mise en place.",
  },
  {
    q: "Où sont hébergées les automatisations ?",
    a: "Détail sur /vos-donnees. Pas de revente de données, résiliation en un mail.",
  },
] as const;

/** Date de révision contenu cocon — mettre à jour manuellement (sitemap). */
export const COCON_CLUSTER_LAST_MODIFIED = "2026-06-09";
