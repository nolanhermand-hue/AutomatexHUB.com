import { PRIMARY_DEMO_CTA, NAP, SOVEREIGNTY_TRUST_LINE, SUR_MESURE_BOOKING_CTA } from "@/lib/constants";

export const TPE_PAGE_PATH = "/automatisation-ia-tpe" as const;

export const TPE_META = {
  title: "Automatisation pour TPE & PME — Accompagnement humain · Automatex",
  description:
    "Réponses, devis, classement documents et relances sur vos outils actuels. Déclic 390 € + 99 €/mois · Système 990 € + 249 €/mois · Pilote 1 690 € + 449 €/mois. RGPD UE.",
  ogTitle: "Automatisation pour TPE — Sans compétences techniques · Automatex Hub",
  ogDescription:
    "Un système qui travaille à votre place : demandes, devis, Drive, relances. Packs Déclic 390 € + 99 €/mois · Système 990 € + 249 €/mois · Pilote 1 690 € + 449 €/mois.",
} as const;

export const TPE_HERO = {
  eyebrow: "AUTOMATISATION · TPE & PME · FRANCE",
  h1Line1: "40 % de votre temps sur des tâches",
  h1Line2: "qui pourraient se faire toutes seules.",
  statSource: "BCG 2025 (ordre de grandeur TPE)",
  subtitle:
    "Automatex installe un système sur vos outils actuels. Zéro compétence technique de votre côté. Accompagnement mensuel inclus — vous restez sur votre métier.",
  stats: [
    { value: "< 2 min", label: "pour réserver" },
    { value: "48 h", label: "opérationnel" },
    { value: "0", label: "compétence requise" },
    { value: "UE", label: "RGPD · données UE" },
  ] as const,
  ctaPrimary: PRIMARY_DEMO_CTA,
  ctaSecondary: "Voir ce qu'on automatise",
} as const;

export const TPE_PAIN = {
  label: "MODULE 01 — LE PROBLÈME",
  h2: "Ce que ça coûte de ne pas automatiser",
  cards: [
    {
      stat: "40 %",
      label: "du temps des TPE sur des tâches automatisables",
      source: "BCG 2025",
    },
    {
      stat: "26 %",
      label: "des TPE françaises utilisent déjà l'IA en 2026",
      source: "France Num 2026",
      trend: "↑ depuis 13 % en 2024",
    },
    {
      stat: "3 000 €/an",
      label: "d'abonnements SaaS empilés qu'un système unique peut remplacer",
      source: "Estimation interne (ordre de grandeur)",
    },
  ] as const,
  dayLabel: "UNE JOURNÉE SANS AUTOMATEX",
  daySteps: [
    { time: "08h", text: "Répondre aux mails de la veille — 45 min" },
    { time: "10h", text: "Chercher un document dans Drive — 15 min" },
    { time: "12h", text: "Devis pas encore envoyé — client qui attend" },
    { time: "17h", text: "Relances oubliées — prospects qui refroidissent" },
    { time: "20h", text: "Admin du soir — fatigue — erreurs" },
  ] as const,
} as const;

export const TPE_AUTOMATION_DOMAINS = [
  {
    num: "01",
    title: "Réponses & clients",
    desc: "Chaque message entrant reçoit une réponse personnalisée en moins de 2 minutes pendant que vous travaillez.",
    examples: ["demande portail pendant visite", "SMS appel manqué artisan", "Qualification entrante"],
    target: "Immo · BTP · Commerce",
  },
  {
    num: "02",
    title: "Devis & documents",
    desc: "Note vocale en sortie de chantier → devis PDF envoyé. Documents classés dans Drive.",
    examples: ["Devis depuis dictée", "Classement compromis", "Relance devis sans réponse"],
    target: "BTP · Artisans · Libéraux",
  },
  {
    num: "03",
    title: "Relances & suivi",
    desc: "Prospects silencieux relancés automatiquement, poliment, sans que vous y pensiez.",
    examples: ["Relance J+4 / J+8", "Détection silence client", "Suivi signature"],
    target: "Toutes TPE",
  },
  {
    num: "04",
    title: "Programme & résumés",
    desc: "Matin : journée sur Telegram. Soir : ce qui a été fait. Dix secondes pour savoir où vous en êtes.",
    examples: ["Programme matin", "Résumé 19 h", "Rapport mensuel"],
    target: "Toutes TPE",
  },
  {
    num: "05",
    title: "Mails & tri",
    desc: "Boîte mail triée, urgences remontées, brouillons prêts à valider.",
    examples: ["Tri en familles", "Alerte urgent +2 h", "Brouillons prêts"],
    target: "Immo · Libéraux · Services",
  },
  {
    num: "06",
    title: "Pilotage & dossiers",
    desc: "État des dossiers actifs chaque semaine — sans ouvrir cinq outils.",
    examples: ["Récap Telegram hebdo", "Tableau de bord", "Rapport direction"],
    target: "PME · Immo · Services B2B",
  },
] as const;

export const TPE_YEAR_TIMELINE = [
  {
    period: "M1–M3",
    phase: "INSTALLATION",
    what: [
      "Onboarding 20 min — Nolan comprend votre façon de travailler",
      "Configuration sur mesure sur vos outils",
      "2 points téléphoniques — ajustements en direct",
      "Objectif : le système tourne seul avant M3",
    ],
    nolan: "Nolan est en mode intensif — plus de contact, plus de réglages.",
  },
  {
    period: "M4–M6",
    phase: "PREMIER ROI",
    what: [
      "Premier bilan chiffré : clients, devis, heures économisées",
      "Point mensuel inclus — chiffres ensemble",
      "1 ajustement basé sur les données réelles",
      "Montée en formule proposée si le volume le justifie",
    ],
    nolan: "À ce stade, beaucoup de clients ont déjà amorti le setup.",
  },
  {
    period: "M7–M9",
    phase: "OPTIMISATION",
    what: [
      "2ᵉ flux automatisé selon votre activité",
      "Rapport semestriel analysé ensemble",
      "Ajustements de saisonnalité si besoin",
      "Priorité sur les nouvelles fonctions",
    ],
    nolan: "Le système connaît votre façon de travailler — il devient plus précis.",
  },
  {
    period: "M10–M12",
    phase: "FIDÉLISATION",
    what: [
      "Tarif bloqué annoncé pour l'année 2 (selon formule)",
      "Accès prioritaire aux nouvelles automatisations",
      "Témoignage collecté si vous êtes d'accord",
      "Bilan annuel avec ROI calculé",
    ],
    nolan: "Si ça fonctionne, vous restez. Sinon, vous partez — un mail suffit.",
  },
] as const;

export const TPE_INCLUDED_ALL_PLANS = [
  "Point téléphonique mensuel avec Nolan (20 min minimum)",
  "Ajustements en continu — sans surcoût",
  `${SOVEREIGNTY_TRUST_LINE} · ${NAP.hostingProvider}`,
  "Sans engagement — résiliable en un mail",
  "Rapport d'activité mensuel ou trimestriel (selon formule)",
  "Tarif bloqué à partir du 13ᵉ mois (−5 % · programme fidélité)",
  "Résiliable à tout moment — aucun engagement",
  `${NAP.founder} · ${NAP.localityLabel} · ${NAP.phoneDisplay}`,
] as const;

export type TpeDisplayOffer = {
  id: string;
  name: string;
  badge?: string;
  featured?: boolean;
  setup: number;
  monthly: number;
  blurb: string;
  customOffer?: boolean;
  cta: string;
};

export const TPE_DISPLAY_OFFERS: TpeDisplayOffer[] = [
  {
    id: "declic",
    name: "Déclic",
    setup: 390,
    monthly: 99,
    blurb: "1 automatisation sur-mesure · accompagnement Essentiel inclus",
    cta: "Tester sans risque",
  },
  {
    id: "systeme",
    name: "Système",
    badge: "Recommandé",
    featured: true,
    setup: 990,
    monthly: 249,
    blurb: "3–4 automatisations · accompagnement Suivi (point 20 min / mois)",
    cta: "Démarrer en 48 h",
  },
  {
    id: "pilote",
    name: "Pilote",
    setup: 1690,
    monthly: 449,
    blurb: "Ensemble de vos outils + fonction sur mesure · Copilote · réponse 4 h",
    cta: "Ne plus être seul",
  },
  {
    id: "sur-mesure",
    name: "Sur mesure",
    badge: "30 min",
    setup: 0,
    monthly: 0,
    blurb: "Plus léger ou plus complet que les packs — devis après cadrage",
    customOffer: true,
    cta: SUR_MESURE_BOOKING_CTA,
  },
];

export const TPE_SECTORS = [
  { icon: "🏠", label: "Mandataires immobiliers", href: "/immobilier", cta: "Voir la solution →" },
  { icon: "🪖", label: "Artisans BTP", href: "/btp", cta: "Voir la solution →" },
  { icon: "⚖️", label: "Professions libérales", href: "/rendez-vous", cta: "En parler →" },
  { icon: "🛍️", label: "Commerce de proximité", href: "/rendez-vous", cta: "En parler →" },
  { icon: "📸", label: "Artisans tertiaires", href: "/rendez-vous", cta: "En parler →" },
  { icon: "💼", label: "Consultants / formateurs", href: "/rendez-vous", cta: "En parler →" },
] as const;

export const TPE_GEO_BLOCKS = [
  {
    q: "Automatex Hub accompagne-t-il les TPE dans toute la France ?",
    a: `Oui. ${NAP.brand} est fondé par ${NAP.founder}, basé à ${NAP.city} (${NAP.postalCode}) et accompagne des TPE et PME dans toute la France à distance.`,
  },
  {
    q: "Quel est le prix de l'automatisation pour une TPE chez Automatex ?",
    a: "Pack Déclic : mise en place 390 € (1er mois inclus), puis 99 €/mois. Pack Système (recommandé) : 990 € puis 249 €/mois. Pack Pilote : 1 690 € puis 449 €/mois. Accompagnement mensuel inclus sur chaque pack.",
  },
  {
    q: "Automatex utilise-t-il des modèles conformes RGPD ?",
    a: `Oui. ${SOVEREIGNTY_TRUST_LINE}. Mistral (Paris) et automatisations hébergées en UE (${NAP.hostingProvider}). Transparence complète sur /vos-donnees.`,
  },
  {
    q: "En combien de temps une TPE est-elle opérationnelle ?",
    a: "48 h ouvrées après validation du périmètre (accès outils, règles, tests), suite à l'onboarding de 20 min. Nolan configure le système sur vos outils existants (Gmail, Calendar, Telegram). Aucune compétence technique requise.",
  },
] as const;

export const TPE_FAQ = [
  {
    q: "Qu'est-ce que l'automatisation IA pour une TPE concrètement ?",
    a: "Un système qui répond à vos emails, envoie vos devis, classe vos documents et relance vos clients — pendant que vous travaillez. Nolan installe, maintient et ajuste le système chaque mois.",
  },
  {
    q: "Combien coûte l'automatisation IA pour une TPE en 2026 ?",
    a: "Pack Déclic : mise en place 390 € (1er mois inclus), puis 99 €/mois. Pack Système (recommandé) : 990 € puis 249 €/mois. Pack Pilote : 1 690 € puis 449 €/mois. Accompagnement mensuel inclus sur chaque pack. Sur mesure si hors-cadre.",
  },
  {
    q: "Faut-il être technique ?",
    a: "Non. Vous n'installez rien. Le seul geste nouveau : recevoir un résumé Telegram le soir.",
  },
  {
    q: "Quelle différence avec Zapier ou Make ?",
    a: "Zapier et Make sont des outils à bricoler seuls. Automatex, c'est Nolan qui installe et maintient — avec un point mensuel inclus et un tarif bloqué en fidélité.",
  },
  {
    q: "Est-ce conforme RGPD pour une TPE ?",
    a: `${SOVEREIGNTY_TRUST_LINE}. Détails techniques et sous-traitants listés sur la page Vos données.`,
  },
  {
    q: "Combien de temps avant d'être opérationnel ?",
    a: "48 h ouvrées après validation du périmètre, suite à l'onboarding de 20 minutes.",
  },
  {
    q: "Peut-on arrêter à tout moment ?",
    a: "Oui. Un mail suffit. Sans engagement, résiliable à tout moment.",
  },
  {
    q: "Automatex intervient-il hors de l'Orne ?",
    a: "Oui. Installation et maintenance à distance. Point mensuel par téléphone.",
  },
] as const;

export const TPE_FOUNDERS_NOTE =
  "Setup −20 %, prix mensuel bloqué à vie, accès prioritaire aux nouveautés — témoignage filmable avec votre accord.";
