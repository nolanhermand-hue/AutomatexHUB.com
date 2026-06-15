import { BRAND_SHORT, OFFER_PRICING_COPY } from "@/lib/constants";
import { COMPARATIF_LAST_UPDATED } from "@/lib/comparatif-shared";

export const COMPARATIF_DEMANDES_AGENCES = {
  path: "/comparatif/demandes-agences-diagnostiqueur",
  lastModified: COMPARATIF_LAST_UPDATED,
  metaTitle: "Demandes agences diagnostiqueur : secrétariat vs réponse auto",
  metaDescription:
    "Mail agence pendant une mission DPE : télésecrétariat, assistant humain ou réponse en 2 min ? Comparatif coûts et délais pour diagnostiqueurs indépendants.",
  h1: "Demandes agences pour diagnostiqueur indépendant : télésecrétariat, assistant ou réponse automatique ?",
  intro:
    "Quand une agence envoie un créneau pendant que vous êtes en mission, le premier diagnostiqueur qui répond correctement prend souvent le dossier. Vous pouvez déléguer à un secrétariat, embaucher de l’aide ou installer une réponse automatique alignée sur vos portails et votre ton.",
  sections: [
    {
      h2: "Pourquoi les demandes agences se perdent-elles ?",
      answerFirst:
        "Parce que le mail arrive en pleine visite : sans réponse sous quelques minutes, l’agence passe au confrère suivant sur l’annuaire.",
      body:
        "Les diagnostiqueurs indépendants en Normandie jonglent entre DPE, amiante et trajets. Le tri de boîte le soir ne rattrape pas un créneau perdu à 14 h. L’objectif n’est pas d’envoyer un template générique, mais une réponse personnalisée (bien, source, créneaux) avant la fin de la visite en cours.",
    },
    {
      h2: "Télésecrétariat ou assistant vs automatisation",
      answerFirst:
        `Un humain au téléphone ou en back-office coûte en général plus cher qu’un pack Système ${BRAND_SHORT} (${OFFER_PRICING_COPY.systeme}) dès que tu traites plusieurs demandes par semaine.`,
      body:
        `Le secrétariat ne voit pas toujours tes mails agences. ${BRAND_SHORT} se branche sur ta messagerie et tes règles métier : réponse < 2 min, relance J+1, tri « 7 familles », classement Drive. Nolan reste joignable pour ajuster le ton après chaque retour agence.`,
    },
    {
      h2: "Tableau comparatif",
      answerFirst:
        "La réponse automatique cible le mail agence et le créneau ; le télésecrétariat couvre surtout la voix et la prise de message.",
      table: {
        headers: ["Critère", "Secrétariat / assistant", `${BRAND_SHORT} immobilier`],
        rows: [
          ["Demande mail agence", "Relecture manuelle", "Réponse < 2 min + brouillon"],
          ["Disponibilité", "Heures bureau", "24 h/24 sur les flux configurés"],
          ["Drive / pièces mission", "Non géré par défaut", "Classement auto (pack Système+)"],
          ["Coût récurrent", "Salaire ou forfait secrétariat", "Grille /immobilier#pricing"],
          ["Résiliation", "Préavis contrat emploi", "1 mail · sans engagement"],
        ],
      },
    },
    {
      h2: "Quelle formule diagnostiqueur choisir ?",
      answerFirst:
        "Une seule automatisation (réponse demandes) correspond au pack Déclic ; 3–4 flux (tri, relances, Drive) au pack Système recommandé.",
      body:
        "Réservez 30 minutes de démo : Nolan montre le scénario sur un mail agence réel (données anonymisées). Vous validez le ton avant envoi production.",
    },
  ],
  cta: {
    label: "Voir les formules diagnostiqueurs",
    href: "/immobilier#pricing",
  },
  internalLinks: [
    { href: "/immobilier", label: "Offre diagnostiqueurs" },
    { href: "/automatisations", label: "18 automatisations détaillées" },
    { href: "/faq", label: "FAQ tarifs et résiliation" },
  ],
} as const;
