/** Page pédagogique — /automatisation-c-est-quoi */
export const AUTOMATISATION_CEST_QUOI_PATH = "/automatisation-c-est-quoi" as const;

/** dateModified JSON-LD / sitemap — mettre à jour à chaque édition substantielle. */
export const AUTOMATISATION_CEST_QUOI_LAST_MODIFIED = "2026-06-12" as const;

export const AUTOMATISATION_CEST_QUOI_META = {
  title: "C'est quoi une automatisation ? Guide simple TPE",
  description:
    "Une tâche répétitive que votre ordinateur exécute à votre place — exemple appel manqué, relance devis. Sans nouvelle appli à maîtriser. À partir de 390 € + 99 €/mois.",
} as const;

export const AUTOMATISATION_CEST_QUOI_HERO = {
  h1: "C'est quoi une automatisation ?",
  geoAnswer:
    "Une automatisation, c'est une tâche répétitive que votre ordinateur exécute à votre place, à chaque fois que le déclencheur se produit. Exemple : un client vous appelle, vous êtes sur un chantier, vous ne décrochez pas. Sans automatisation : appel perdu. Avec : il reçoit un SMS dans la minute, avec votre nom, et un lien pour laisser sa demande. Vous n'avez rien fait.",
  subline:
    "Pas de nouvelle appli à maîtriser. Vos outils actuels — téléphone, mails, agenda — connectés entre eux.",
} as const;

export const AUTOMATISATION_CEST_QUOI_ANALOGY = {
  h2: "C'est comme un gabarit d'atelier.",
  body:
    "En menuiserie, vous ne retraciez pas chaque découpe à la main. Vous fabriquez un gabarit une fois, et chaque pièce sort identique, sans réfléchir. Une automatisation, c'est pareil : on règle la tâche une fois, elle s'exécute ensuite à chaque fois, sans erreur, sans y penser.",
} as const;

export const AUTOMATISATION_CEST_QUOI_BEFORE_AFTER = {
  roiLine:
    "Un appel manqué peut coûter cher : BT Business l'estime autour de 1 200 € pour une petite entreprise.",
  avant: [
    "Client appelle",
    "Vous êtes sur le toit",
    "Pas de réponse",
    "Il appelle le concurrent",
    "Chantier perdu",
  ],
  apres: [
    "Client appelle",
    "Pas de réponse",
    "SMS auto en 60 secondes",
    "Il laisse sa demande",
    "Vous rappelez ce soir",
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
      body: "Devis envoyé, pas de réponse → relance automatique à J+3 et J+7 → vous ne relancez plus jamais à la main.",
    },
  ],
} as const;

export const AUTOMATISATION_CEST_QUOI_NOT = {
  h2: "Et ce que ce n'est pas.",
  items: [
    "Cela ne remplace personne. Cela enlève la paperasse, pas le métier.",
    "Cela ne parle pas à votre place. Vous validez ce qui part, comme vous le souhaitez.",
    "Cela ne demande rien à apprendre. Vous gardez votre téléphone, vos mails, votre agenda.",
  ],
} as const;

export type AutomatisationCestQuoiFaqItem = { readonly q: string; readonly a: string };

/** Réponses JSON-LD (texte brut, sans lien HTML). */
export const AUTOMATISATION_CEST_QUOI_FAQ_LD: ReadonlyArray<AutomatisationCestQuoiFaqItem> = [
  {
    q: "Combien de temps pour mettre en place une automatisation ?",
    a: "Quelques jours pour la première, une fois votre fonctionnement compris. Vous n'avez rien à installer.",
  },
  {
    q: "Il faut être à l'aise avec l'informatique ?",
    a: "Non. Tout passe par vos outils actuels : SMS, mail, agenda. Si vous savez lire un SMS, vous savez l'utiliser.",
  },
  {
    q: "Et vos données ?",
    a: "Automatisations et traitements métier en Union européenne, conformes RGPD. Vos données restent les vôtres, même si vous arrêtez.",
  },
  {
    q: "Combien ça coûte ?",
    a: "À partir de 390 € de mise en place puis 99 €/mois. Le détail est sur la page tarifs (section Tarifs sur automatex-hub.com).",
  },
  {
    q: "C'est quoi la différence avec un logiciel ?",
    a: "Un logiciel, vous devez l'ouvrir et vous en servir. Une automatisation tourne en arrière-plan.",
  },
];

export const AUTOMATISATION_CEST_QUOI_CTA = {
  title: "Vous voulez voir ce que cela donne sur votre activité ?",
  button: "Démo gratuite 20 min sur votre cas",
  subline: "Pas de démo générique. Nolan part de vos appels, vos devis, vos journées.",
} as const;

export const AUTOMATISATION_CEST_QUOI_LINKS = {
  pricingHref: "/#pricing",
  pricingLabel: "page tarifs",
  catalogHref: "/automatisations",
  catalogLabel: "catalogue des 18 automatisations",
  founderHref: "/a-propos",
  founderLabel: "qui installe chez Automatex",
} as const;
