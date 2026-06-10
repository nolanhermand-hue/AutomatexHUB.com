/** Page pédagogique — /automatisation-c-est-quoi */
export const AUTOMATISATION_CEST_QUOI_PATH = "/automatisation-c-est-quoi" as const;

/** dateModified JSON-LD / sitemap — mettre à jour à chaque édition substantielle. */
export const AUTOMATISATION_CEST_QUOI_LAST_MODIFIED = "2026-06-09" as const;

export const AUTOMATISATION_CEST_QUOI_META = {
  title: "C'est quoi une automatisation ? Guide simple TPE",
  description:
    "Une tâche répétitive que ton ordinateur fait à ta place — exemple appel manqué, relance devis. Sans nouvelle appli à maîtriser. À partir de 390 € + 99 €/mois.",
} as const;

export const AUTOMATISATION_CEST_QUOI_HERO = {
  h1: "C'est quoi une automatisation ?",
  geoAnswer:
    "Une automatisation, c'est une tâche répétitive que ton ordinateur fait à ta place, tout seul, à chaque fois. Exemple : un client t'appelle, tu es sur un chantier, tu ne décroches pas. Sans automatisation : appel perdu. Avec : il reçoit un SMS dans la minute, avec ton nom, et un lien pour laisser sa demande. Tu n'as rien fait.",
  subline: "Pas de nouvelle appli à maîtriser. Tes outils actuels — téléphone, mails, agenda — connectés entre eux.",
} as const;

export const AUTOMATISATION_CEST_QUOI_ANALOGY = {
  h2: "C'est comme un gabarit d'atelier.",
  body: "En menuiserie, tu ne retraces pas chaque découpe à la main. Tu fais un gabarit une fois, et chaque pièce sort identique, sans réfléchir. Une automatisation, c'est pareil : on règle la tâche une fois, elle s'exécute ensuite à chaque fois, sans erreur, sans y penser.",
} as const;

export const AUTOMATISATION_CEST_QUOI_BEFORE_AFTER = {
  roiLine:
    "Un appel manqué peut coûter cher : BT Business l'estime autour de 1 200 € pour une petite entreprise.",
  avant: [
    "Client appelle",
    "Tu es sur le toit",
    "Pas de réponse",
    "Il appelle le concurrent",
    "Chantier perdu",
  ],
  apres: [
    "Client appelle",
    "Pas de réponse",
    "SMS auto en 60 secondes",
    "Il laisse sa demande",
    "Tu rappelles ce soir",
    "Devis envoyé",
  ],
} as const;

export const AUTOMATISATION_CEST_QUOI_EXAMPLES = {
  h2: "Trois exemples chez nos métiers.",
  cards: [
    {
      title: "Couvreur",
      body: "Appel manqué pendant un chantier → SMS automatique au client → demande récupérée le soir même.",
    },
    {
      title: "Diagnostiqueur",
      body: "Mail d'agence reçu → infos extraites automatiquement → fiche de mission créée → confirmation envoyée. Zéro ressaisie.",
    },
    {
      title: "Toute TPE",
      body: "Devis envoyé, pas de réponse → relance automatique à J+3 et J+7 → tu ne relances plus jamais à la main.",
    },
  ],
} as const;

export const AUTOMATISATION_CEST_QUOI_NOT = {
  h2: "Et ce que ça n'est pas.",
  items: [
    "Ça ne remplace personne. Ça enlève la paperasse, pas le métier.",
    "Ça ne parle pas à ta place. Tu valides ce qui part, comme tu veux.",
    "Ça ne demande rien à apprendre. Tu gardes ton téléphone, tes mails, ton agenda.",
  ],
} as const;

export type AutomatisationCestQuoiFaqItem = { readonly q: string; readonly a: string };

/** Réponses JSON-LD (texte brut, sans lien HTML). */
export const AUTOMATISATION_CEST_QUOI_FAQ_LD: ReadonlyArray<AutomatisationCestQuoiFaqItem> = [
  {
    q: "Combien de temps pour mettre en place une automatisation ?",
    a: "Quelques jours pour la première, une fois ton fonctionnement compris. Tu n'as rien à installer.",
  },
  {
    q: "Il faut être à l'aise avec l'informatique ?",
    a: "Non. Tout passe par tes outils actuels : SMS, mail, agenda. Si tu sais lire un SMS, tu sais l'utiliser.",
  },
  {
    q: "Et mes données ?",
    a: "Tout est hébergé en France, conforme RGPD. Tes données restent les tiennes, même si tu arrêtes.",
  },
  {
    q: "Combien ça coûte ?",
    a: "À partir de 390 € de mise en place puis 99 €/mois. Le détail est sur la page tarifs (section Tarifs sur automatex-hub.com).",
  },
  {
    q: "C'est quoi la différence avec un logiciel ?",
    a: "Un logiciel, tu dois l'ouvrir et t'en servir. Une automatisation travaille sans toi, en arrière-plan.",
  },
];

export const AUTOMATISATION_CEST_QUOI_CTA = {
  title: "Tu veux voir ce que ça donne sur ton activité ?",
  button: "Réserver 20 minutes — on regarde ton cas, gratuitement.",
  subline: "Pas de démo générique. On part de tes appels, tes devis, tes journées.",
} as const;

export const AUTOMATISATION_CEST_QUOI_LINKS = {
  pricingHref: "/#pricing",
  pricingLabel: "page tarifs",
  catalogHref: "/automatisations",
  catalogLabel: "catalogue des 18 automatisations",
  founderHref: "/a-propos",
  founderLabel: "qui installe chez Automatex",
} as const;
