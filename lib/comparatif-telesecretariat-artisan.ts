import { BRAND_SHORT } from "@/lib/constants";
import { COMPARATIF_LAST_UPDATED } from "@/lib/comparatif-shared";

export const COMPARATIF_TELESECRETARIAT = {
  path: "/comparatif/telesecretariat-artisan",
  lastModified: COMPARATIF_LAST_UPDATED,
  metaTitle: "Télésecrétariat artisan vs réponse automatique : comparatif 2026",
  metaDescription:
    "Secrétaire externalisée ou système sur vos outils ? Coûts, délais, RGPD et cas BTP — comparatif pour artisans en Normandie.",
  h1: "Télésecrétariat pour artisan ou réponse automatique sur vos outils : que choisir en 2026 ?",
  intro:
    `Un télésecrétariat prend tes appels à ta place ; ${BRAND_SHORT} installe des réponses SMS et mail sur ton numéro et ta messagerie existants. Les deux visent à ne plus perdre de demandes quand tu es sur chantier — avec des coûts et des niveaux de contrôle différents.`,
  sections: [
    {
      h2: "Combien coûte un télésecrétariat pour artisan ?",
      answerFirst:
        "Comptez souvent entre 80 € et 250 € par mois pour un volume modeste (forfait minutes ou formule mensuelle), hors frais de mise en place ou options horaires étendues.",
      body:
        "Les offres généralistes facturent au forfait d’appels ou à la minute. Vous payez dès le premier mois, même si le secrétariat ne connaît pas vos devis types ni votre ton chantier. Pour un artisan BTP en Normandie, l’enjeu est surtout la réactivité sur appel manqué et la qualification rapide — pas un standard 24 h/24 générique.",
    },
    {
      h2: "Que fait une réponse automatique côté artisan BTP ?",
      answerFirst:
        "En moins de 2 minutes, le client reçoit un SMS ou un mail personnalisé (prénom, créneau de rappel) pendant que vous restez sur le chantier.",
      body:
        "Le message est calibré sur votre activité (couverture, plomberie, etc.). Les relances devis et le résumé du soir peuvent s’ajouter sur les formules Système et Pilote. Nolan installe et ajuste chaque mois — vous ne formez pas une équipe externe à vos prix ni à vos délais.",
    },
    {
      h2: "Tableau comparatif",
      answerFirst:
        `Le télésecrétariat externalise la voix ; ${BRAND_SHORT} automatise SMS, mails et relances sur tes outils, avec des packs à partir de 390 € à la mise en place puis 99 €/mois.`,
      table: {
        headers: ["Critère", "Télésecrétariat classique", `${BRAND_SHORT} (packs BTP)`],
        rows: [
          ["Réponse appel manqué", "Humain au standard", "SMS < 2 min + notification"],
          ["Devis / relances", "Rarement inclus", "Inclus dès pack Système"],
          ["Connaissance métier", "Variable selon équipe", "Config sur votre vocabulaire"],
          ["Engagement", "Souvent 12 mois", "Sans engagement · 1 mail pour résilier"],
          ["Tarifs publics", "Sur devis secrétariat", "Grille /btp#pricing"],
        ],
      },
    },
    {
      h2: "RGPD et données : où est la différence ?",
      answerFirst:
        `${BRAND_SHORT} documente hébergement UE (automatisations Francfort, Mistral Paris) sur /vos-donnees ; un secrétariat doit aussi t'indiquer où sont enregistrés les messages clients.`,
      body:
        `Avant de confier tes contacts chantier, demande le sous-traitant, la durée de conservation et le DPA. ${BRAND_SHORT} ne revend pas les données et efface les flux de démo sous 30 jours maximum.`,
    },
  ],
  cta: {
    label: "Voir les formules artisans BTP",
    href: "/btp#pricing",
  },
  internalLinks: [
    { href: "/btp", label: "Automatisation artisans BTP" },
    { href: "/accompagnement", label: "Accompagnement mensuel inclus" },
    { href: "/automatisations", label: "Catalogue des 18 automatisations" },
  ],
} as const;
