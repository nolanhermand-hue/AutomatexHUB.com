import { NAP, PRIMARY_DEMO_CTA, SETUP_48H_NUANCE, SOVEREIGNTY_TRUST_LINE, FOUNDER_CHANTIER_CREDENTIAL } from "@/lib/constants";

export const HOME_META = {
  title: "Automatisation artisans & TPE en Normandie",
  description:
    `Demandes, devis et relances avancent pendant que tu es en mission, en visite ou au téléphone. ${SETUP_48H_NUANCE}. Flers, Orne · démo 30 min gratuite.`,
} as const;

export const HOME_HERO = {
  seoLine: "Automatisation pour artisans et TPE en Normandie",
  h1: "Tes clients n'attendent plus. Ton système leur répond.",
  sub:
    "Réponses, devis et relances : tout est branché sur tes outils actuels. Nolan installe à distance — tu restes concentré sur tes clients.",
  reassurance: `Démo 30 min gratuite · ${SETUP_48H_NUANCE}`,
  integrationsLine:
    "Branchement sur ce que tu utilises déjà. Rien de nouveau à apprendre.",
} as const;

export const HOME_PROBLEM = {
  eyebrow: "Le coût du silence",
  h2: "Combien tu perds quand tu ne peux pas décrocher ?",
  intro:
    "En rendez-vous, sur chantier ou derrière ton bureau : les messages s'empilent. Sans réponse rapide, le client suivant passe ailleurs.",
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
      body: "SMS ou mail en moins de 2 minutes quand tu es indisponible. Le client sait que tu as vu son message.",
    },
    {
      id: "devis",
      title: "Devis",
      body: "Notes vocales ou formulaire → PDF prêt à envoyer. Moins de soirées perdues sur Word.",
    },
    {
      id: "relances",
      title: "Relances",
      body: "J+4, J+8 : rappels polis sans que tu aies à t'en souvenir. Devis et dossiers suivis.",
    },
    {
      id: "drive",
      title: "Drive & mails",
      body: "Pièces rangées, mails triés, résumé du soir sur ton téléphone. Tu ouvres ta boîte, tu sais quoi faire.",
    },
  ],
} as const;

export const HOME_HOW = {
  eyebrow: "Mise en route",
  h2: "Comment ça se passe concrètement ?",
  steps: [
    {
      title: "Démo 30 min",
      body: "Tu montres ta journée type : appels, devis, mails. Nolan choisit avec toi 2 à 4 priorités.",
      time: "30 min",
    },
    {
      title: "Installation",
      body: "Branchement sur Gmail, Drive, calendrier. Tests avec de vrais messages. Mise en ligne sous 48 h ouvrées.",
      time: "48 h",
    },
    {
      title: "Moins de paperasse",
      body: "Les réponses partent pendant que tu es indisponible — moins de mails et de devis à rattraper en fin de journée. Chaque activité est différente : Nolan cale le rythme sur ton cas en démo.",
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
    `${FOUNDER_CHANTIER_CREDENTIAL} sur chantier. Nolan a vu les patrons interrompus sans arrêt — devis le soir, appels manqués, paperasse. Il s’est formé à l’automatisation pour régler exactement ça.`,
  bio: `${NAP.founder} — 19 ans, basé à Flers (Orne). ${FOUNDER_CHANTIER_CREDENTIAL}, tout en se formant à l'automatisation. Aujourd'hui, Nolan installe des systèmes qui répondent à ta place quand tu ne peux pas décrocher.`,
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
    "Je ne vends pas un logiciel. Je branche ce qui manque sur ce que tu utilises déjà — pour que le soir tu boucles tes devis sans les bricoler à minuit.",
} as const;

export const HOME_FAQ_HEADING = {
  h2: "Questions avant de réserver ta démo de 30 minutes",
} as const;

export const HOME_FAQ: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: "Faut-il changer tes outils ?",
    a: "Non. AutomateX part de Gmail, Google Drive, calendrier et téléphone. Pas de nouvelle appli à apprendre : les automatisations tournent en arrière-plan.",
  },
  {
    q: "Combien de temps pour être en ligne ?",
    a: "Après la démo de 30 minutes, mise en ligne sous 48 h ouvrées. Tu valides chaque message type avant envoi réel.",
  },
  {
    q: "C'est quoi le prix au final ?",
    a: "Déclic : 390 € à la mise en place, puis 99 €/mois. Système (recommandé) : 990 € à la mise en place, puis 249 €/mois. Pilote : 1690 € à la mise en place, puis 449 €/mois. Sans engagement, résiliable en un mail.",
  },
  {
    q: "Mes données restent où ?",
    a: `${SOVEREIGNTY_TRUST_LINE}. Automatisations N8N Francfort (UE), traitement linguistique Mistral Paris (UE), site vitrine CDN Netlify. Tes mails restent dans ta boîte. Détail sur /vos-donnees.`,
  },
  {
    q: "Et si ça ne te convient pas ?",
    a: "Résiliation en un mail, effet en fin de mois. Tes données restent les tiennes ; effacement sous 7 jours après ton départ (détail sur /cgv et /vos-donnees). Les ajustements dans le périmètre validé en démo sont inclus dans la mensualité.",
  },
  {
    q: "Intervenez-vous seulement en Normandie ?",
    a: `Installations à distance partout en France. ${NAP.founder} est basé à ${NAP.localityLabel} : rendez-vous terrain possibles dans l'Orne.`,
  },
];

export const HOME_FINAL_CTA = {
  h2: PRIMARY_DEMO_CTA,
  sub: "Choisis ton créneau sur la page rendez-vous — Nolan te confirme sous 24 h. Sans engagement.",
} as const;
