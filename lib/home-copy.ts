import { NAP, SETUP_48H_NUANCE, SOVEREIGNTY_TRUST_LINE } from "@/lib/constants";

export const HOME_META = {
  title: "Automatisation artisans & TPE en Normandie | Automatex",
  description:
    `clients, devis et relances tournent pendant que vous êtes sur chantier. ${SETUP_48H_NUANCE}. Flers, Orne · démo 20 min gratuite.`,
} as const;

export const HOME_HERO = {
  h1: "Automatisation pour artisans et TPE en Normandie",
  accroche: "Vos clients ne vous attendent plus.",
  sub:
    "Réponse aux messages, devis et relances branchés sur vos outils actuels. Nolan installe à distance — vous restez sur le terrain.",
  reassurance: `Sans engagement · résiliable en 1 mail · 30 jours remboursé · ${SOVEREIGNTY_TRUST_LINE}`,
  integrationsLine:
    "On se branche sur ce que vous utilisez déjà. Rien de nouveau à apprendre.",
} as const;

export const HOME_PROBLEM = {
  eyebrow: "Le coût du silence",
  h2: "Combien vous perdez quand vous ne pouvez pas décrocher ?",
  intro:
    "Sur chantier, en visite ou au volant : les messages s’empilent. Sans réponse rapide, le client suivant passe ailleurs.",
  stats: [
    {
      value: "60 %",
      label: "de chances de perdre un chantier si le devis part après 24 h.",
      source: "FFB, 2023",
    },
    {
      value: "2 h / jour",
      label: "d’administratif moyen pour une TPE de 1 à 5 personnes.",
      source: "Ordre de grandeur terrain",
    },
    {
      value: "5 min",
      label: "sans réponse : le prospect contacte souvent un concurrent.",
      source: "Pratique commerciale BTP",
    },
  ],
} as const;

export const HOME_SOLUTION = {
  eyebrow: "Ce qui tourne pour vous",
  h2: "Quatre leviers installés une fois, actifs tous les jours",
  cards: [
    {
      id: "leads",
      title: "Demandes & appels",
      body: "SMS ou mail en moins de 2 minutes quand vous êtes indisponible. Le client sait que vous avez vu son message.",
    },
    {
      id: "devis",
      title: "Devis",
      body: "Notes vocales ou formulaire → PDF prêt à envoyer. Moins de soirées perdues sur Word.",
    },
    {
      id: "relances",
      title: "Relances",
      body: "J+4, J+8 : rappels polis sans que vous ayez à t’en souvenir. Devis et prospects suivis.",
    },
    {
      id: "drive",
      title: "Drive & mails",
      body: "Pièces rangées, mails triés, résumé du soir sur votre téléphone. Vous ouvrez votre boîte, vous savez quoi faire.",
    },
  ],
} as const;

export const HOME_CATALOG = {
  eyebrow: "Catalogue",
  h2: "15 automatisations prêtes pour votre métier",
  sub: "Chaque bloc est configurable sur votre réalité. Le catalogue complet compte 20 scénarios.",
  cta: "Voir les 20 automatisations",
} as const;

export const HOME_HOW = {
  eyebrow: "Mise en route",
  h2: "Comment ça se passe concrètement ?",
  steps: [
    {
      title: "Audit 20 min",
      body: "Vous montrez votre journée type : appels, devis, mails. On choisit 2 à 4 priorités.",
      time: "20 min",
    },
    {
      title: "Installation",
      body: `Branchement sur Gmail, Drive, calendrier. Tests avec de vrais messages. ${SETUP_48H_NUANCE}.`,
      time: "48 h",
    },
    {
      title: "Moins de paperasse",
      body: "Les réponses partent pendant que vous êtes sur le terrain — moins de mails et de devis à rattraper le soir. Chaque activité est différente : on cale le rythme sur votre cas en démo.",
      time: "Au fil des semaines",
    },
  ],
} as const;

export const HOME_PRICING = {
  eyebrow: "Tarifs",
  h2: "3 packs + sur mesure pour artisans et TPE en Normandie",
  sub: "Mise en place + mensualité transparente. Système = pack recommandé pour la plupart des TPE.",
  banner:
    "Sans engagement · résiliable en 1 mail · 30 jours remboursé · RGPD France",
} as const;

export const HOME_FOUNDER = {
  eyebrow: "Qui installe",
  h2: "Du chantier à l’automatisation — Nolan connaît votre cadence",
  storyLead:
    "2 ans sur les chantiers, en menuiserie puis couverture. J’ai vu les patrons interrompus sans arrêt — devis le soir, appels manqués, paperasse. Je me suis formé à l’automatisation pour régler exactement ça.",
  bio: `${NAP.founder} — 19 ans, basé à Flers (Orne). 2 ans sur les chantiers (menuiserie puis couverture), tout en me formant à l’automatisation. Aujourd’hui j’installe des systèmes qui répondent à votre place quand vous ne pouvez pas décrocher.`,
  painSteps: [
    {
      title: "Sur le terrain",
      body: "Appels pendant la visite ou sur le toit : impossible de tout traiter à la main.",
    },
    {
      title: "Le soir",
      body: "Devis et mails qui s’empilent — fatigue, relances oubliées, clients qui passent ailleurs.",
    },
    {
      title: "La solution",
      body: "Réponse rapide, devis et relances branchés sur Gmail et votre téléphone — sans nouvelle appli.",
    },
  ] as const,
  quote:
    "Je ne vends pas un logiciel. Je branche ce qui manque sur ce que vous utilisez déjà — pour que le soir vous bouclez moins de devis à la va-vite.",
} as const;

export const HOME_FAQ_HEADING = {
  h2: "Questions avant de réserver votre démo de 20 minutes",
} as const;

export const HOME_FAQ: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: "Est-ce que je dois changer mes outils ?",
    a: "Non. On part de Gmail, Google Drive, calendrier et téléphone. Pas de nouvelle appli à apprendre : les automatisations tournent en arrière-plan.",
  },
  {
    q: "Combien de temps pour être en ligne ?",
    a: `Après l’audit de 20 minutes, la mise en place standard : ${SETUP_48H_NUANCE}. Vous validez chaque message type avant envoi réel.`,
  },
  {
    q: "C’est quoi le prix au final ?",
    a: "Déclic : 390 € de mise en place puis 99 €/mois. Système (recommandé) : 990 € puis 249 €/mois. Pilote : 1 690 € puis 449 €/mois. Sans engagement, résiliable en un mail.",
  },
  {
    q: "Mes données restent où ?",
    a: `${SOVEREIGNTY_TRUST_LINE}. Hébergement automatisations en UE, traitement linguistique en France. Vos mails restent dans votre boîte. Détail sur /vos-donnees.`,
  },
  {
    q: "Et si ça ne me convient pas ?",
    a: "30 jours remboursés sur la mise en place si le système ne correspond pas au cadrage de l’audit (voir conditions sur /cgv). Ensuite, résiliation en un mail, effet fin de mois.",
  },
  {
    q: "Intervenez-vous seulement en Normandie ?",
    a: `Installations à distance partout en France. ${NAP.founder} est basé à ${NAP.localityLabel} : rendez-vous terrain possibles dans l’Orne.`,
  },
];

export const HOME_FINAL_CTA = {
  h2: "Démo gratuite 20 min sur votre cas",
  sub: "Choisis votre créneau sur la page rendez-vous — Nolan confirme sous 24 h. Sans engagement.",
} as const;
