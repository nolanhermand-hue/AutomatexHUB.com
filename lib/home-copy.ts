import { NAP, SOVEREIGNTY_TRUST_LINE } from "@/lib/constants";

export const HOME_META = {
  title: "Automatisation artisans & TPE en Normandie | Automatex",
  description:
    "Leads, devis et relances tournent pendant que tu es sur chantier. Installé en 48 h, sans engagement. Flers, Orne · démo 20 min gratuite.",
} as const;

export const HOME_HERO = {
  h1: "Automatisation pour artisans et TPE en Normandie",
  accroche: "Tes leads ne t'attendent plus.",
  sub:
    "Réponse aux messages, devis et relances branchés sur tes outils actuels. Nolan installe à distance — tu restes sur le terrain.",
  reassurance: `Sans engagement · résiliable en 1 mail · 30 jours remboursé · ${SOVEREIGNTY_TRUST_LINE}`,
} as const;

export const HOME_PROBLEM = {
  eyebrow: "Le coût du silence",
  h2: "Combien tu perds quand tu ne peux pas décrocher ?",
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
  eyebrow: "Ce qui tourne pour toi",
  h2: "Quatre leviers installés une fois, actifs tous les jours",
  cards: [
    {
      id: "leads",
      title: "Leads & appels",
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
      body: "J+4, J+8 : rappels polis sans que tu doives t’en souvenir. Devis et prospects suivis.",
    },
    {
      id: "drive",
      title: "Drive & mails",
      body: "Pièces rangées, mails triés, résumé du soir sur ton téléphone. Tu ouvres ta boîte, tu sais quoi faire.",
    },
  ],
} as const;

export const HOME_CATALOG = {
  eyebrow: "Catalogue",
  h2: "15 automatisations prêtes pour ton métier",
  sub: "Chaque bloc est configurable sur ta réalité. Le catalogue complet compte 20 scénarios.",
  cta: "Voir les 20 automatisations",
} as const;

export const HOME_HOW = {
  eyebrow: "Mise en route",
  h2: "Comment ça se passe concrètement ?",
  steps: [
    {
      title: "Audit 20 min",
      body: "Tu montres ta journée type : appels, devis, mails. On choisit 2 à 4 priorités.",
      time: "20 min",
    },
    {
      title: "Installation",
      body: "Branchement sur Gmail, Drive, calendrier. Tests avec de vrais messages. Mise en ligne sous 48 h.",
      time: "48 h",
    },
    {
      title: "Temps gagné",
      body: "En moyenne 1 à 2 h par jour en moins sur l’admin dès la 2e semaine — tu restes joignable sans rester collé au téléphone.",
      time: "Semaine 2",
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
  h2: "Trois ans dans le BTP — il connaît le chantier",
  bio: `${NAP.founder} — 19 ans, basé à Flers (Orne). Trois ans en menuiserie sur chantier avant Automatex. Aujourd’hui il installe des systèmes qui répondent à ta place quand tu ne peux pas décrocher.`,
  quote:
    "Je ne vends pas un logiciel. Je branche ce qui manque sur ce que tu utilises déjà — pour que le soir tu closes moins de devis à la va-vite.",
} as const;

export const HOME_FAQ_HEADING = {
  h2: "Questions avant de réserver ta démo de 20 minutes",
} as const;

export const HOME_FAQ: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: "Est-ce que je dois changer mes outils ?",
    a: "Non. On part de Gmail, Google Drive, calendrier et téléphone. Pas de nouvelle appli à apprendre : les automatisations tournent en arrière-plan.",
  },
  {
    q: "Combien de temps pour être en ligne ?",
    a: "Après l’audit de 20 minutes, la mise en place standard prend 48 h ouvrées. Tu valides chaque message type avant envoi réel.",
  },
  {
    q: "C’est quoi le prix au final ?",
    a: "Déclic : 390 € de mise en place puis 99 €/mois. Système (recommandé) : 990 € puis 249 €/mois. Pilote : 1 690 € puis 449 €/mois. Sans engagement, résiliable en un mail.",
  },
  {
    q: "Mes données restent où ?",
    a: `${SOVEREIGNTY_TRUST_LINE}. Hébergement automatisations en UE, traitement linguistique en France. Tes mails restent dans ta boîte. Détail sur /vos-donnees.`,
  },
  {
    q: "Et si ça ne me convient pas ?",
    a: "30 jours remboursés sur la mise en place si le système ne correspond pas au cadrage de l’audit. Ensuite, résiliation en un mail, effet fin de mois.",
  },
  {
    q: "Tu interviens seulement en Normandie ?",
    a: `Installations à distance partout en France. ${NAP.founder} est basé à ${NAP.localityLabel} : rendez-vous terrain possibles dans l’Orne.`,
  },
];

export const HOME_FINAL_CTA = {
  h2: "Démo gratuite 20 min sur ton cas",
  sub: "Choisis ton créneau sur la page rendez-vous — Nolan confirme sous 24 h. Sans engagement.",
} as const;
