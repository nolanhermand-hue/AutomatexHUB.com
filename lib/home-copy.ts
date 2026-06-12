import { NAP, SETUP_48H_NUANCE, SOVEREIGNTY_TRUST_LINE } from "@/lib/constants";

export const HOME_META = {
  title: "Automatisation artisans & TPE en Normandie | Automatex",
  description:
    `Demandes, devis et relances avancent pendant que vous êtes en mission, en visite ou au téléphone. ${SETUP_48H_NUANCE}. Flers, Orne · démo 20 min gratuite.`,
} as const;

export const HOME_HERO = {
  seoLine: "Automatisation pour artisans et TPE en Normandie",
  h1: "Vos clients n'attendent plus. Votre système leur répond.",
  sub:
    "Réponses, devis et relances : tout est branché sur vos outils actuels. Nolan installe à distance — vous restez concentré sur vos clients.",
  reassurance: `Démo 20 min gratuite · ${SETUP_48H_NUANCE}`,
  integrationsLine:
    "Branchement sur ce que vous utilisez déjà. Rien de nouveau à apprendre.",
} as const;

export const HOME_PROBLEM = {
  eyebrow: "Le coût du silence",
  h2: "Combien vous perdez quand vous ne pouvez pas décrocher ?",
  intro:
    "En rendez-vous, sur chantier ou derrière votre bureau : les messages s’empilent. Sans réponse rapide, le client suivant passe ailleurs.",
  stats: [
    {
      value: "78 %",
      label: "des clients achètent chez le premier professionnel qui répond correctement.",
      source: "Lead Connect",
    },
    {
      value: "8–12 h",
      label: "d’administratif par semaine pour une TPE ou un indépendant.",
      source: "CAPEB",
    },
    {
      value: "×21",
      label: "plus de chances de qualifier un contact en répondant sous 5 min plutôt qu’après 30 min.",
      source: "MIT / HBR, 2011",
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
      body: "J+4, J+8 : rappels polis sans que vous ayez à vous en souvenir. Devis et dossiers suivis.",
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
  sub: "Chaque bloc est configurable sur votre réalité. Le catalogue complet compte 18 scénarios.",
  cta: "Voir les 18 automatisations",
} as const;

export const HOME_HOW = {
  eyebrow: "Mise en route",
  h2: "Comment ça se passe concrètement ?",
  steps: [
    {
      title: "Audit 20 min",
      body: "Vous montrez votre journée type : appels, devis, mails. Nolan choisit avec vous 2 à 4 priorités.",
      time: "20 min",
    },
    {
      title: "Installation",
      body: "Branchement sur Gmail, Drive, calendrier. Tests avec de vrais messages. Mise en ligne sous 48 h ouvrées.",
      time: "48 h",
    },
    {
      title: "Moins de paperasse",
      body: "Les réponses partent pendant que vous êtes indisponible — moins de mails et de devis à rattraper en fin de journée. Chaque activité est différente : Nolan cale le rythme sur votre cas en démo.",
      time: "Au fil des semaines",
    },
  ],
} as const;

export const HOME_PRICING = {
  eyebrow: "Tarifs",
  h2: "3 packs + sur mesure pour artisans et TPE en Normandie",
  sub: "Mise en place + mensualité transparente. Système = pack recommandé pour la plupart des TPE.",
  banner: "Sans engagement · résiliable en 1 mail · mise en place en 3× sans frais",
} as const;

export const HOME_FOUNDER = {
  eyebrow: "Qui installe",
  h2: "Deux ans sur chantier, aujourd’hui au service des TPE",
  storyLead:
    "2 ans sur les chantiers, en menuiserie puis couverture. Nolan a vu les patrons interrompus sans arrêt — devis le soir, appels manqués, paperasse. Il s’est formé à l’automatisation pour régler exactement ça.",
  bio: `${NAP.founder} — 19 ans, basé à Flers (Orne). 2 ans sur les chantiers (menuiserie puis couverture), tout en se formant à l’automatisation. Aujourd’hui, Nolan installe des systèmes qui répondent à votre place quand vous ne pouvez pas décrocher.`,
  painSteps: [
    {
      title: "Pendant la journée",
      body: "Appels pendant une visite, un chantier ou une réunion : impossible de tout traiter à la main.",
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
    "Je ne vends pas un logiciel. Je branche ce qui manque sur ce que vous utilisez déjà — pour que le soir, vous arrêtiez de boucler vos devis à la va-vite.",
} as const;

export const HOME_FAQ_HEADING = {
  h2: "Questions avant de réserver votre démo de 20 minutes",
} as const;

export const HOME_FAQ: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: "Faut-il changer vos outils ?",
    a: "Non. Automatex part de Gmail, Google Drive, calendrier et téléphone. Pas de nouvelle appli à apprendre : les automatisations tournent en arrière-plan.",
  },
  {
    q: "Combien de temps pour être en ligne ?",
    a: "Après l’audit de 20 minutes, mise en ligne sous 48 h ouvrées. Vous validez chaque message type avant envoi réel.",
  },
  {
    q: "C’est quoi le prix au final ?",
    a: "Déclic : 390 € de mise en place puis 99 €/mois. Système (recommandé) : 990 € puis 249 €/mois. Pilote : 1690 € puis 449 €/mois. Sans engagement, résiliable en un mail.",
  },
  {
    q: "Mes données restent où ?",
    a: `${SOVEREIGNTY_TRUST_LINE}. Hébergement automatisations en UE, traitement linguistique en France. Vos mails restent dans votre boîte. Détail sur /vos-donnees.`,
  },
  {
    q: "Et si ça ne vous convient pas ?",
    a: "Résiliation en un mail, effet en fin de mois. Vos données restent les vôtres ; effacement sous 7 jours après votre départ (détail sur /cgv et /vos-donnees). Les ajustements dans le périmètre validé à l’audit sont inclus dans la mensualité.",
  },
  {
    q: "Intervenez-vous seulement en Normandie ?",
    a: `Installations à distance partout en France. ${NAP.founder} est basé à ${NAP.localityLabel} : rendez-vous terrain possibles dans l’Orne.`,
  },
];

export const HOME_FINAL_CTA = {
  h2: "Démo gratuite 20 min sur votre cas",
  sub: "Choisissez votre créneau sur la page rendez-vous — Nolan confirme sous 24 h. Sans engagement.",
} as const;
