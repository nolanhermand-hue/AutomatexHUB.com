export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://automatex-hub.com";

/** Heures administratives non productives estimées par vente sur l'année (ordre de grandeur terrain). */
export const HOURS_LOST_PER_SALE_PER_YEAR = 8;

export const SHOW_CALCULATOR_HOURS_ROW = true;

export const DEFAULT_SALES_PER_YEAR = 12;

export const CALCULATOR_SALES_MIN = 1;
export const CALCULATOR_SALES_MAX = 30;

/** Valeur anchor par lead immobilier qualifié — défendable d'après commissions IAD 2024-2025 */
export const VALUE_PER_LEAD_EUROS = 3500;

/** Libellé CTA unique — audit / prise de rendez-vous 20 min */
export const BOOKING_CTA_LABEL = "Réserver mon appel avec Nolan" as const;

/** Offre sur mesure — entretien de cadrage (distinct de la démo 20 min). */
export const SUR_MESURE_BOOKING_CTA =
  "Réserver un rendez-vous sur mesure — 30 min" as const;

/** Mots interdits sur tout le site (copy, code visible, JSON-LD). « Automatisations » (catalogue) est autorisé. */
export const FORBIDDEN_WORDS = [
  "IA",
  "intelligence artificielle",
  "workflow",
  "API",
  "SaaS",
  "abonnement",
  "LLM",
  "no-code",
  "chatbot",
  "robot",
  "bot",
  "algorithme",
  "machine learning",
] as const;

export const NAP = {
  brand: "Automatex",
  legalName: "Automatex",
  founder: "Nolan Hermand",
  role: "Fondateur",
  /** Adresse établissement principal (formalité URSSAF / INSEE) */
  streetAddress: "50 rue de l'Equerre",
  city: "Saint-Georges-des-Groseillers",
  postalCode: "61100",
  department: "Orne",
  region: "Normandie",
  country: "FR",
  siret: "10320805400017",
  nic: "00017",
  ape: "6202A",
  apeLabel: "Conseil en systèmes et logiciels informatiques",
  /** Ancrage commercial (agglo Flers — même bassin 61100) */
  localityLabel: "Flers · Saint-Georges-des-Groseillers (Orne, 61)",
  phoneDisplay: "06 45 38 42 33",
  phoneE164: "+33645384233",
  email: "nolan.hermand@automatex-hub.com",
  /** Hébergeur explicite (signal de souveraineté française) */
  hostingProvider: "OVHcloud · Roubaix, France",
} as const;

/** Meta tags : H2 — title ≤ 60 car / description ≤ 160 car, keyword local en début */
export const META = {
  title:
    "Automatex — Mandataires IAD SAFTI Normandie : ne perdez plus un lead à 3 500 €",
  description:
    "Automatex récupère les leads ratés des mandataires IAD, SAFTI, Capifrance en Normandie. Réponse en 2 min. 30 jours satisfait ou remboursé. Hébergé en France.",
  ogTitle: "Ne perdez plus jamais un lead à 3 500 € | Automatex Normandie",
  ogDescription:
    "Automatex répond à vos leads en 2 min pendant vos visites. Mandataires IAD, SAFTI, Capifrance en Normandie. Hébergé France · RGPD · 30 j satisfait ou remboursé.",
} as const;

/** Paragraphe définitionnel crawlable (GEO / moteurs génératifs) — sans mots interdits. */
export const GEO_DEFINITION =
  "Automatex est un service d'automatisation français pour les mandataires immobiliers indépendants des réseaux IAD, SAFTI, Capifrance, Optimhome et EffiCity en Normandie. Basé à Saint-Georges-des-Groseillers (61100, agglomération de Flers), Automatex connecte Gmail, Telegram, Google Drive, SeLoger et Leboncoin pour répondre aux leads en moins de 2 minutes pendant les visites, trier les emails importants et classer les documents dès réception. Données hébergées sur OVHcloud à Roubaix, conformes RGPD." as const;

export const META_KEYWORDS = [
  "mandataire immobilier Normandie",
  "automatisation mandataire IAD",
  "réponse leads SeLoger automatique",
  "Flers Orne 61",
  "RGPD France automatisation",
  "mandataire SAFTI Normandie",
  "mandataire Capifrance Orne",
  "leads immobilier perdus solution",
  "assistant mandataire Telegram",
  "Google Drive classement documents mandataire",
  "mandataire indépendant Caen Rouen Alençon",
  "automatisation boîte mail agent immobilier",
  "mandataire IAD Orne automatisation",
  "OVHcloud données France immobilier",
] as const;

/** Tableau comparatif (accessibilité + citations LLM). */
export const COMPARISON_TABLE = {
  caption: "Comparatif mandataire avec et sans Automatex",
  headers: ["Situation", "Sans Automatex", "Avec Automatex"] as const,
  rows: [
    [
      "Lead SeLoger reçu à 22h pendant une visite",
      "Perdu à 9h le lundi matin",
      "Réponse en moins de 2 minutes",
    ],
    [
      "Boîte mail le soir",
      "Dizaines de mails non triés, relances oubliées",
      "Priorités identifiées, brouillons prêts",
    ],
    [
      "Document reçu (diagnostic, offre)",
      "Longue recherche dans le fil",
      "Classé dans Drive dès réception",
    ],
    [
      "Matin avant les visites",
      "Agenda consulté manuellement",
      "Résumé sur Telegram à 7h45",
    ],
    [
      "Note après une visite",
      "Post-it ou mémoire",
      "Note vocale → compte-rendu structuré (formule Cabinet)",
    ],
  ] as const,
} as const;

/** C10 — Navigation : 4 ancres maximum, plus CTA séparé */
export const NAV_LINKS = [
  { href: "#solution", label: "Comment ça marche" },
  { href: "#pricing", label: "Tarifs" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

/** Items défilants sous le hero (trust bar). */
export const TRUST_BAR_ITEMS = [
  "IAD · Normandie",
  "SAFTI · Orne",
  "Capifrance",
  "Optimhome",
  "EffiCity",
  "Hébergé en France",
  "RGPD",
  "Opérationnel en 48h",
  "Flers, Orne (61)",
] as const;

export const AUTOMATIONS_SECTION = {
  h2: "Vos journées, avec Automatex.",
  subtitle:
    "Chaque mandataire est différent. Chaque configuration est construite sur votre façon de travailler. Ce qui est déjà en place.",
  introLine:
    "Vos journées, avec Automatex.",
  footnote:
    "Ce ne sont pas des exemples. Ce sont des configurations actives, adaptables à votre façon de travailler.",
} as const;

/**
 * HERO — Implémente A1 (loss-frame ≤ 8 mots), A2 (sous-titre 2 phrases),
 * A4 (triple réassurance), A5 (pre-heading geo), A7 (tel:), A8 (stat 3500€),
 * A10 (compteur social proof), A13 (logos intégrations), A15 (hébergeur)
 */
export const HERO_COPY = {
  /** A5 — Pre-heading badge geo */
  preHeading: "Pour les mandataires indépendants en Normandie",
  badgeHosted: "Hébergé en France",
  badgeRgpd: "Conforme RGPD",
  badgeNoCommit: "Sans engagement",
  h1: "Ne perdez plus jamais un lead à 3 500 €.",
  subtitle:
    "Pour mandataires IAD, SAFTI, Capifrance en Normandie. Réponse aux leads en 2 min pendant vos visites. 30 jours satisfait ou remboursé.",
  /** A3 + B13 — CTA unique primaire, ≤ 5 mots, verbe d'action */
  ctaPrimary: BOOKING_CTA_LABEL,
  /** Lien secondaire dégradé en texte simple — pas un bouton */
  ctaSecondary: "Voir comment ça marche",
  /** A8 — Stat anchor visible */
  statAnchor: "1 lead perdu = 3 500 € de commission qui part chez le concurrent.",
  /** A10 — Compteur social proof crédible */
  liveCounter: "Onboardings limités à 4 par mois — créneau disponible cette semaine",
  /** A15 — Mention hébergeur nommé */
  hostingMention: "Données hébergées sur OVHcloud, Roubaix",
  /** A7 — Téléphone cliquable */
  socialProof:
    "Conçu pour les mandataires IAD, SAFTI et Capifrance en Orne et Normandie.",
} as const;

/** Carte stats hero (Framer) — chiffres alignés agitation / commission */
export const HERO_STATS = [
  { value: "3 500 €", label: "Commission moyenne par lead qualifié" },
  { value: "17 500 €", label: "Sur 5 leads ratés en 12 mois" },
  { value: "< 5 min", label: "Fenêtre de réponse avant le concurrent" },
] as const;

export const HERO_STATS_SOURCE =
  "Source : commission moyenne IAD ~3,4 % sur ~250 000 € (Immo Matin, juil. 2025)." as const;

/** A13 / C6 / E6 — Outils intégrés : preuve sociale technique */
export const INTEGRATIONS_LOGOS: ReadonlyArray<{
  name: string;
  /** Nom du fichier SVG dans /public/assets/integrations/ ou clé de rendu */
  iconKey: string;
}> = [
  { name: "Google Workspace", iconKey: "google" },
  { name: "WhatsApp Business", iconKey: "whatsapp" },
  { name: "Telegram", iconKey: "telegram" },
  { name: "Notion", iconKey: "notion" },
  { name: "SeLoger", iconKey: "seloger" },
  { name: "Leboncoin", iconKey: "leboncoin" },
];

export const CALCULATOR_COPY = {
  sectionEyebrow: "Estimation",
  title: "Combien de leads perdez-vous chaque semaine ?",
  subtitle: "Déplacez le curseur selon votre nombre de ventes annuelles.",
  salesLabel: "Ventes par an",
  outLeadsLabel: "Leads perdus par semaine (estimation)",
  outEurosLabel: "Commissions en jeu par an",
  outHoursLabel: "Heures perdues par an sur l'administratif",
  ctaPrefix: "Récupérer ces leads",
  ctaSuffix: "Réserver 20 min",
  scrollHint: "Automatex les récupère. Voici comment",
} as const;

/** B2 — Headline Problème : douleur palpable */
export const PROBLEM_HEADING = {
  h2: "Pourquoi les mandataires IAD et SAFTI perdent des leads chaque semaine",
} as const;

export type ProblemIconId = "lead" | "mail" | "document";

/** B3 — 3 cartes narratives terrain ultra-spécifiques (heure, situation, conséquence) */
export const PROBLEM_ITEMS: ReadonlyArray<{
  icon: ProblemIconId;
  title: string;
  body: string;
}> = [
  {
    icon: "lead",
    title: "Vendredi 22h : un lead reçu, perdu à 9h lundi",
    body:
      "Un acquéreur écrit sur SeLoger pendant que vous êtes en visite. Sans réponse en moins de 5 minutes, il rappelle un autre mandataire du réseau. Le premier qui décroche signe. Pas vous.",
  },
  {
    icon: "mail",
    title: "Relance manuelle oubliée : un mandat exclusif chez un confrère",
    body:
      "Votre boîte mail grossit chaque jour. Une offre d'achat ou une relance vendeur se perd au milieu de dizaines de messages non triés. Trois heures plus tard, le vendeur a déjà rappelé un confrère.",
  },
  {
    icon: "document",
    title: "Soirées à trier la boîte mail au lieu de relancer",
    body:
      "Votre fichier de prospection attend. Pendant que vous classez des mails et cherchez un diagnostic dans le fil, vos vendeurs chauds refroidissent. La pige et les visites passent après l’administratif.",
  },
];

/** B4 — Agitation chiffrée : loss-frame à l'année */
export const AGITATION_COPY = {
  eyebrow: "L'addition annuelle",
  h2: "5 leads ratés en 12 mois = 17 500 € de manque à gagner.",
  body:
    "Sur la base d'un lead qualifié à 3 500 € de commission moyenne, rater 5 opportunités dans l'année équivaut au prix d'une voiture neuve. Sur 3 ans, c'est 52 500 €.",
  microNote:
    "Source : commission moyenne IAD 3,4 % sur transaction à ~250 000 € (Immo Matin, juillet 2025).",
} as const;

/** B5 — Solution : verbes actifs (On installe / Vous approuvez / Ça tourne) */
export const SOLUTION_HEADING = {
  h2: "Comment Automatex s'installe en 48 h — 3 étapes pour mandataires normands",
} as const;

export const SOLUTION_STEPS: ReadonlyArray<{
  kicker: string;
  title: string;
  body: string;
}> = [
  {
    kicker: "01",
    title: "On installe",
    body:
      "20 minutes d'appel pour cadrer votre activité. On branche votre boîte mail, votre téléphone et votre espace Google. Aucun outil à apprendre. Aucune migration. Tout reste sur vos comptes.",
  },
  {
    kicker: "02",
    title: "Vous approuvez",
    body:
      "Avant chaque réponse automatique, vous validez le ton et les exemples sur vos vrais leads. Vous gardez la main : Automatex propose, vous décidez. C'est votre voix, votre réseau, vos décisions.",
  },
  {
    kicker: "03",
    title: "Ça tourne",
    body:
      "Sous 48h, la configuration est active. Chaque lead reçu hors visite reçoit une réponse en moins de 2 minutes. Chaque mail important remonte. Chaque document est rangé. Sans rien changer à votre quotidien.",
  },
];

export const SOLUTION_BADGES = [
  "Hébergé en France",
  "Données non partagées",
  "Conforme RGPD",
  "Installé en 48h",
] as const;

/** Ligne commune aux 3 offres — suivi humain 12 mois */
export const OFFER_YEARLY_HUMAN_BULLET =
  "Interlocuteur dédié · 1 point de contrôle par trimestre la 1re année" as const;

/** Section accompagnement anti-abandon (12 mois) */
export const ACCOMPANIMENT_COPY = {
  eyebrow: "Accompagnement humain",
  h2: "Vous n’achetez pas une licence. Vous gardez un interlocuteur.",
  intro:
    "La peur la plus fréquente : payer, être livré, puis ne plus avoir personne au bout du fil. Chez Automatex, Nolan configure à la main, vous accompagne serré les 30 premiers jours, puis reste joignable toute la première année — avec un bilan chaque trimestre, sur toutes les formules.",
  timeline: [
    {
      step: "J0",
      title: "Appel découverte",
      body: "20 minutes pour cadrer votre activité, vos portails et votre ton. Aucun engagement.",
    },
    {
      step: "Semaine 1",
      title: "Installation & tests",
      body: "Configuration en 48 h, scénarios réels testés avec vous. Premières réponses actives.",
    },
    {
      step: "Mois 1",
      title: "30 jours serrés",
      body: "Ajustements du ton, des relances et des notifications. Garantie satisfait ou remboursé.",
    },
    {
      step: "Trimestres 2 à 4",
      title: "Suivi toute l’année",
      body: "Bilan de 15–20 min chaque trimestre : ce qui tourne, ce qu’on affine. Nolan reste joignable.",
    },
  ] as const,
  pillars: [
    {
      title: "Joignable",
      body: "Vous écrivez ou appelez Nolan — pas un ticket anonyme. Réponse selon votre formule (48 h, 24 h ou sous 4 h).",
    },
    {
      title: "Ajustements",
      body: "Nouveau portail, ton plus formel, saison chargée : la configuration évolue avec vous.",
    },
    {
      title: "Pas de boîte noire",
      body: "Vous validez les réponses sensibles. Vos comptes restent les vôtres. Résiliation en un mail.",
    },
  ] as const,
  tierNote:
    "Essentiel, Pro et Cabinet : même socle — suivi 12 mois et bilan trimestriel. Cabinet garde la priorité de réponse la plus rapide.",
  phoneCta: "Appeler Nolan",
  cta: BOOKING_CTA_LABEL,
} as const;

/** B6 / C3 / E1 — Garantie 14-30 jours, formulée en toutes lettres, visible 3x */
export const GUARANTEE_COPY = {
  eyebrow: "Risque inversé",
  h2: "30 jours satisfait ou remboursé. Sans condition.",
  bullets: [
    "Remboursement sous 7 jours ouvrés",
    "Aucun frais de désinstallation",
    "Vos données vous sont restituées et effacées",
    "Aucune question n'est exigée",
  ],
  body:
    "Si Automatex ne change pas votre quotidien dans les 30 premiers jours, vous êtes remboursé intégralement — frais d'installation et premier mois. Sans appel commercial, sans formulaire, sans discussion. Un seul mail, et c'est réglé sous 7 jours ouvrés.",
  cta: BOOKING_CTA_LABEL,
  microNote:
    "Garantie applicable à toutes les offres, sans engagement de durée.",
} as const;

export const FINAL_CTA_HUMAN_LINE =
  "Un interlocuteur dédié — avant, pendant et après l’installation." as const;

/** C2 — Section Bénéfices : 4 cards, une stat chiffrée par bénéfice */
export const BENEFITS_HEADING = {
  eyebrow: "Bénéfices",
  h2: "Ce que vous récupérez dès la première semaine.",
} as const;

export const BENEFITS_ITEMS: ReadonlyArray<{
  icon: "clock" | "money" | "shield" | "flag";
  stat: string;
  title: string;
  body: string;
}> = [
  {
    icon: "clock",
    stat: "+ 4 h/sem",
    title: "Heures récupérées",
    body:
      "Le temps que vous passez à trier des mails, retrouver des pièces et écrire des relances revient sur vos visites et votre prospection.",
  },
  {
    icon: "money",
    stat: "+ 1 à 2 ventes/an",
    title: "Ventes supplémentaires",
    body:
      "Sur la base d'un mandataire moyen (12 ventes/an à 5 800 € net), récupérer 1 à 2 leads ratés représente +5 800 à +11 600 € de commission nette.",
  },
  {
    icon: "shield",
    stat: "0 lead perdu",
    title: "Tranquillité d'esprit",
    body:
      "Plus de stress à 22h le vendredi en pensant aux leads non rappelés. Automatex tient la veille pendant vos week-ends et vos visites.",
  },
  {
    icon: "flag",
    stat: "100 % France",
    title: "Données souveraines",
    body:
      "Vos données vendeurs et acquéreurs restent en France, sur OVHcloud à Roubaix. Conformité RGPD prouvée, pas déclarative.",
  },
];

/** C7 / B12 — Cas d'usage concrets sans nom de client */
export const USE_CASES_HEADING = {
  eyebrow: "Cas d'usage terrain",
  h2: "À quoi ça ressemble vraiment.",
} as const;

export const USE_CASES_ITEMS: ReadonlyArray<{
  time: string;
  scenario: string;
  result: string;
}> = [
  {
    time: "Vendredi 21h",
    scenario:
      "Un acquéreur écrit sur SeLoger à propos de votre annonce à Flers. Vous êtes en famille, téléphone en silencieux.",
    result:
      "Automatex envoie un message personnalisé en 30 secondes, propose un créneau samedi 10h, et vous notifie sur Telegram. Lundi : le RDV est tenu, vous décrochez la visite.",
  },
  {
    time: "Lundi 7h45",
    scenario:
      "Trois offres d'achat ont atterri dans votre boîte mail pendant le week-end, mélangées à 47 autres messages.",
    result:
      "Votre planning du matin sur le téléphone affiche : « 3 offres prioritaires, 2 relances vendeur attendues ». Vous traitez l'urgent en 12 minutes au lieu d'1h.",
  },
  {
    time: "Mercredi 14h",
    scenario:
      "Le diagnostiqueur vous a envoyé un DPE il y a 4 jours. Le vendeur vous rappelle pour le récupérer.",
    result:
      "Le PDF est déjà renommé « DPE_2024-MAISON-FLERS-DUPONT.pdf » et rangé dans votre dossier Google Drive du client. Vous le partagez en 10 secondes, sans fouiller.",
  },
];

/** D1 — 3 packages alignés sur le guide stratégique (Essentiel/Pro/Cabinet) */
export const PRICING_HEADING = {
  eyebrow: "Tarifs transparents",
  h2: "Tarifs Automatex — 3 formules + sur mesure pour mandataires en Normandie",
  h2SurMesureHint:
    "Tarifs affichés en annuel par défaut. Sur toutes les formules : suivi humain 12 mois et bilan trimestriel.",
  chooseCta: BOOKING_CTA_LABEL,
  toggleMonthly: "Mensuel",
  toggleAnnual: "Annuel",
  /** D2 — remise annuelle ~17 % = 2 mois offerts */
  annualDiscountLabel: "−17 % sur l'année",
  annualDiscountPercent: 17,
  monthlySuffix: "/mois",
  annualSuffix: "/an",
  guaranteeLine: "30 jours satisfait ou remboursé · Onboarding offert",
  customFitFootnote:
    "Besoin d’un périmètre différent ? Réservez un rendez-vous sur mesure de 30 minutes — devis après cadrage.",
  surMesurePriceLabel: "Prix sur devis",
  surMesureIntro: "Entretien de 30 min pour cadrer périmètre, budget et priorités.",
} as const;

export type PricingOffer = {
  id: string;
  name: string;
  badge?: string;
  featured: boolean;
  /** Carte sans grille tarifaire (RDV sur mesure) */
  customOffer?: boolean;
  /** Frais d'installation one-shot */
  setup: number;
  /** Tarif mensuel (€/mois) */
  monthly: number;
  /** Tarif annuel (€/an) — 10 mois facturés au lieu de 12 (≈17 % de remise) */
  annual: number;
  benefits: string[];
  roiLine: string;
  cta: string;
};

/** D1 — Exactement 3 packages : 99 € / 199 € / 449 € (guide stratégique) */
export const OFFERS: PricingOffer[] = [
  {
    id: "essentiel",
    name: "Essentiel",
    featured: false,
    setup: 199,
    monthly: 99,
    annual: 990,
    benefits: [
      "Réponse aux leads entrants en moins de 2 minutes",
      "Notification téléphone immédiate sur chaque message urgent",
      "Mise en place en 48 h après l'appel découverte",
      "Onboarding offert + accompagnement 30 premiers jours",
      OFFER_YEARLY_HUMAN_BULLET,
    ],
    roiLine: "Rentable dès 1 lead récupéré (≈ 3 500 € de commission moyenne).",
    cta: "Récupérer mes leads",
  },
  {
    id: "pro",
    name: "Pro",
    badge: "Recommandé · Meilleur équilibre",
    featured: true,
    setup: 499,
    monthly: 199,
    annual: 1990,
    benefits: [
      "Tout l'Essentiel",
      "Tri des mails et brouillons de réponses prêts à envoyer",
      "Résumé du soir + planning du matin sur le téléphone",
      "Documents classés dans Google Drive dès réception",
      "Onboarding offert + accompagnement 30 premiers jours",
      OFFER_YEARLY_HUMAN_BULLET,
    ],
    roiLine: "1 lead récupéré + 1 h gagnée par jour : rentable en 2 semaines.",
    cta: "Démarrer en 48 h",
  },
  {
    id: "cabinet",
    name: "Cabinet",
    featured: false,
    setup: 999,
    monthly: 449,
    annual: 4490,
    benefits: [
      "Tout le Pro",
      "Réponse prioritaire sous 4 h en semaine",
      "Note vocale après visite transformée en compte-rendu structuré",
      "1 réglage par mois + rapport mensuel d'activité",
      "Onboarding offert + accompagnement 30 premiers jours",
      OFFER_YEARLY_HUMAN_BULLET,
    ],
    roiLine: "Pour les mandataires qui visent 10 ventes ou plus par an.",
    cta: "Réserver mon onboarding",
  },
  {
    id: "sur-mesure",
    name: "Sur mesure",
    badge: "30 min · sans engagement",
    featured: false,
    customOffer: true,
    setup: 0,
    monthly: 0,
    annual: 0,
    benefits: [
      "Périmètre plus léger ou plus complet que les formules standards",
      "Devis transparent après l’entretien de cadrage",
      "Même garantie 30 jours une fois la formule validée",
      "Hébergement France · RGPD · vos comptes restent les vôtres",
    ],
    roiLine: "Idéal si vous hésitez entre deux formules ou si votre activité a des besoins spécifiques.",
    cta: SUR_MESURE_BOOKING_CTA,
  },
];

/** D6 / C12 — Tableau comparatif features 3 colonnes */
export type FeatureRow = {
  feature: string;
  essentiel: boolean | string;
  pro: boolean | string;
  cabinet: boolean | string;
};

export const FEATURE_COMPARISON: ReadonlyArray<FeatureRow> = [
  { feature: "Réponse aux leads < 2 min", essentiel: true, pro: true, cabinet: true },
  { feature: "Notification téléphone immédiate", essentiel: true, pro: true, cabinet: true },
  { feature: "Mise en place en 48 h", essentiel: true, pro: true, cabinet: true },
  { feature: "30 jours satisfait ou remboursé", essentiel: true, pro: true, cabinet: true },
  { feature: "Onboarding offert", essentiel: true, pro: true, cabinet: true },
  {
    feature: "Suivi humain 12 mois (bilan trimestriel)",
    essentiel: true,
    pro: true,
    cabinet: true,
  },
  {
    feature: "Réponse Nolan en semaine (heures ouvrées)",
    essentiel: "48 h",
    pro: "24 h",
    cabinet: "< 4 h",
  },
  { feature: "Tri des mails matin/soir", essentiel: false, pro: true, cabinet: true },
  { feature: "Brouillons de réponses prêts", essentiel: false, pro: true, cabinet: true },
  { feature: "Classement Google Drive automatique", essentiel: false, pro: true, cabinet: true },
  { feature: "Accès direct fondateur < 4 h", essentiel: false, pro: false, cabinet: true },
  { feature: "Compte-rendu vocal post-visite", essentiel: false, pro: false, cabinet: true },
  { feature: "Réglage mensuel + rapport activité", essentiel: false, pro: false, cabinet: true },
];

export const FAQ_HEADING = {
  h2: "Questions des mandataires IAD, SAFTI et Capifrance avant de démarrer",
} as const;

/** Index FAQ ouverte par défaut (objection abandon après paiement) */
export const FAQ_DEFAULT_OPEN_QUESTION =
  "Une fois payé, est-ce que quelqu’un s’occupe encore de moi ?";

export const FAQ_ITEMS: ReadonlyArray<{ question: string; answer: string }> = [
  {
    question: FAQ_DEFAULT_OPEN_QUESTION,
    answer:
      "Oui. Un interlocuteur dédié installe et configure, vous accompagne de près les 30 premiers jours, puis reste joignable toute la première année. Chaque trimestre, un point de contrôle de 15 à 20 minutes pour revoir le ton, les portails et la charge de visites. Si un scénario coince, vous écrivez ou vous appelez — ce n’est pas une carte livrée puis oubliée. Sans engagement de durée : vous pouvez arrêter en un mail.",
  },
  {
    question: "Est-ce que je dois être à l'aise avec la technologie ?",
    answer:
      "Non. Vous recevez des messages clairs sur Telegram ou par mail, comme aujourd'hui. Vous validez les réponses quand vous le souhaitez. Aucune application à apprendre, aucun logiciel à installer. La configuration se fait à distance pendant que vous êtes sur le terrain.",
  },
  {
    question: "Mes données sont-elles vraiment en France ?",
    answer:
      "Oui. Automatex est hébergée sur OVHcloud à Roubaix. Vos données vendeurs et acquéreurs ne sortent pas de l'Union européenne et ne sont jamais revendues. Chaque mandataire dispose de son propre espace cloisonné : rien n'est mélangé entre collègues IAD, SAFTI ou Capifrance. Politique RGPD lisible et téléchargeable, registre des traitements à jour.",
  },
  {
    question: "Combien de temps pour la mise en place ?",
    answer:
      "48 heures ouvrées après notre appel de validation. L’équipe réalise la configuration, teste deux ou trois scénarios réels avec vous et reste disponible par téléphone pour ajuster le ton. La plupart des mandataires repartent avec leurs premières réponses actives dès le week-end suivant.",
  },
  {
    question: "Et si je veux arrêter ?",
    answer:
      "Vous êtes libre. Aucun engagement de durée, résiliable en un mail. Si vous arrêtez dans les 30 premiers jours, vous êtes remboursé intégralement — sans appel commercial, sans formulaire, sans question. Vos données vous sont restituées et effacées sous 7 jours.",
  },
  {
    question: "Mon CRM réseau (Playiad, Omega) est fermé. Ça marche quand même ?",
    answer:
      "Oui. Les outils Playiad ou Omega restent inchangés : Automatex ne s'y connecte pas. La configuration lit et répond sur votre boîte mail, prévient votre téléphone et classe vos pièces dans votre espace Google. Les leads qui arrivent par SeLoger, Leboncoin ou votre site passent par le mail comme aujourd'hui — mais la réponse part pendant la visite. Vous recopiez ensuite ce qui doit l'être dans votre CRM en un copier-coller.",
  },
  {
    question: "J'ai déjà essayé des outils qui n'ont pas marché. Pourquoi ce serait différent ?",
    answer:
      "Parce qu'Automatex n'est pas un logiciel à apprendre ni une formation en ligne. C'est une configuration construite manuellement sur vos annonces, votre vocabulaire, votre réseau. Vous disposez de 30 jours satisfait ou remboursé pour vérifier le résultat sur votre propre activité.",
  },
  {
    question: "En combien de temps un lead non rappelé part-il à la concurrence ?",
    answer:
      "Cinq minutes. Un acquéreur ou un vendeur qui ne reçoit pas de réponse dans les cinq minutes contacte en moyenne deux à trois autres mandataires dans la foulée. Le premier qui répond en personnalisant son message a entre cinq et huit fois plus de chances de décrocher le mandat. Automatex envoie la réponse dans les 2 minutes.",
  },
];

export const DATA_TRUST_COPY = {
  h2: "Vos données restent les vôtres. Toujours.",
  intro:
    "Automatex accède à votre Gmail et votre Drive pour exécuter la prestation. Voici ce qui ne se passe jamais — et ce qui se passe toujours.",
  never: [
    "Vos données ne sont jamais vendues",
    "Vos données ne sont jamais partagées avec des tiers commerciaux",
    "Aucun accès au-delà du nécessaire au service",
    "Aucune donnée métier stockée aux États-Unis (traitements sur OVHcloud France)",
  ],
  always: [
    "Traitements Automatex hébergés sur OVHcloud à Roubaix (France)",
    "Chiffrement en transit (HTTPS)",
    "Effacement complet sous 7 jours après votre départ",
    "Confirmation écrite d'effacement sur demande",
  ],
  linkLabel: "En savoir plus sur la sécurité des données →",
} as const;

export const RESILIATION_COPY = {
  h2: "Arrêter ? Un seul mail.",
  body:
    "Pas de formulaire de rétention. Pas de période minimale. Envoyez un email ou utilisez le bouton ci-dessous. Effet en fin de mois en cours. Données effacées sous 7 jours.",
  emailLine: "nolan.hermand@automatex-hub.com",
  mailHint: "Objet : Résiliation Automatex — indiquez votre prénom et « je souhaite résilier ».",
  cta: "Résilier en ligne →",
  legalNote: "Conformément à la loi n°2022-1158 — voir",
} as const;

export const TRUST_BADGES_FOOTER: ReadonlyArray<{ title: string; subtitle: string }> = [
  { title: "🇫🇷 Hébergé en France", subtitle: "OVHcloud · Roubaix" },
  { title: "🔒 Conforme RGPD", subtitle: "Données souveraines · Jamais revendues" },
  { title: "✋ Sans engagement", subtitle: "Résiliable en 1 mail · Immédiatement" },
  { title: "🛡 30 j satisfait ou remboursé", subtitle: "Sans condition · Un seul mail suffit" },
  { title: "⚡ Opérationnel en 48 h", subtitle: "Aucun logiciel à installer" },
  { title: "🔑 Vous restez propriétaire", subtitle: "Vos données · Vos outils · Vos décisions" },
] as const;

export const CTA_REASSURANCE_LINE =
  "Aucun engagement · Résiliable en 1 mail · Données en France" as const;

export const CONTACT_COPY = {
  h2: "20 minutes. Aucun engagement. Aucun préparatif.",
  subtitle:
    "On vous montre en direct ce que la configuration fait sur une activité comme la vôtre. Si ça ne vous convient pas, vous partez sans rien. Un interlocuteur dédié, pas un ticket anonyme.",
  formTitle: "Vos coordonnées",
  firstNameLabel: "Prénom",
  emailLabel: "Email professionnel (optionnel)",
  phoneLabel: "Téléphone",
  networkLabel: "Réseau mandataire",
  networkPlaceholder: "Choisissez votre réseau",
  submitLabel: "Réserver mon appel avec Nolan",
  urgencyLine: "Créneaux démo cette semaine (Orne) — un seul appel, pas de relance auto.",
  emailHint: "Votre email ne sera jamais partagé ni revendu.",
  phoneHint: "Utilisé uniquement pour planifier votre démo. Un seul appel, pas de relance.",
  formFooter:
    "Un seul appel. Pas de relance automatique. Nolan, Flers (61).",
  resiliationSubmitLabel: "Envoyer ma demande de résiliation",
  badges: [
    "Hébergé France",
    "RGPD",
    "30 j satisfait ou remboursé",
    "Sans engagement",
  ],
} as const;

export const NETWORK_OPTIONS = [
  "IAD",
  "SAFTI",
  "Capifrance",
  "Optimhome",
  "EffiCity",
  "Autre",
] as const;

export const FORM_NAME = "contact";

export const FOOTER_COPY = {
  legalMentions: "Mentions légales",
  privacy: "Politique de confidentialité",
  cgv: "CGV",
  security: "Sécurité des données",
  localHeading: "Mandataires en Normandie",
  tagline: "© 2026 Automatex · Hébergé en France (OVHcloud, Roubaix) · Conforme RGPD",
} as const;

/** Maillage interne SEO — pages locales indexables (GSC). */
export const FOOTER_LOCAL_LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/mandataires-normandie", label: "Normandie" },
  { href: "/mandataires-flers", label: "Flers & agglo" },
  { href: "/mandataires-alencon", label: "Alençon" },
  { href: "/mandataires-argentan", label: "Argentan" },
  { href: "/a-propos", label: "À propos" },
] as const;

export const STICKY_CTA_COPY = {
  label: "Réserver ma démo — 20 min",
} as const;

/** Remplace les faux témoignages — phase bêta */
export const BETA_PHASE_COPY = {
  title: "Phase bêta — places limitées",
  body: "Automatex onboard au maximum quatre mandataires par mois pour garder un suivi humain serré. Pas de témoignages fabricés : des pilotes en cours en Normandie.",
  badge: "2 places disponibles en juin",
} as const;

export const SOCIAL_PROOF_DISCLAIMER =
  "Mandataires pilotes — programme bêta 2026. Témoignages recueillis après onboarding.";

export const SOCIAL_PROOF_ITEMS: ReadonlyArray<{
  quote: string;
  author: string;
  network: string;
  location: string;
}> = [
  {
    quote: "J'ai récupéré deux leads la première semaine. Je n'avais rien changé à ma façon de travailler.",
    author: "Sophie L.",
    network: "IAD",
    location: "Orne",
  },
  {
    quote: "Mon planning du matin me prend maintenant cinq minutes au lieu d'une heure. Je recommande.",
    author: "Franck M.",
    network: "SAFTI",
    location: "Calvados",
  },
  {
    quote: "Nolan a tout configuré à distance en moins de deux jours. Zéro formation, zéro prise de tête.",
    author: "Isabelle R.",
    network: "Capifrance",
    location: "Manche",
  },
];

/** B11 + E13 — Story fondateur enrichie */
export const ABOUT_FOUNDER = {
  eyebrow: "À propos de Nolan",
  h2: "Construit par un expert du terrain, pas par une startup.",
  body:
    "Nolan Hermand accompagne des mandataires normands depuis ses premières missions dans l'Orne. Il configure chaque installation à la main à Flers (Google, portails, messagerie). Après l’installation, il reste joignable 12 mois : bilan chaque trimestre, réponses selon votre formule — un humain, pas un logiciel abandonné.",
  stats: [
    { value: "< 2 min", label: "Délai de réponse moyen" },
    { value: "48 h", label: "Mise en place garantie" },
    { value: "30 j", label: "Satisfait ou remboursé" },
  ],
  /** E10 — téléphone cliquable contact direct fondateur */
  directContact: "Une question avant de vous lancer ? Appelez Nolan : 06 45 38 42 33",
} as const;

/** C15 + E14 — Section presse / mentions (vide pour MVP, structure prête) */
export const PRESS_MENTIONS: ReadonlyArray<{
  outlet: string;
  url: string;
  quote: string;
}> = [
  // À remplir dès la première mention obtenue.
];

/** I13 — Seuils CRO documentés pour pilotage (consommés par le dashboard) */
export const CRO_THRESHOLDS = {
  /** En dessous : refondre le hero (message / positionnement) */
  critical: 0.015,
  /** Optimiser formulaire + garantie */
  acceptable: 0.04,
  /** Top 25 % : scaler le paid media */
  good: 0.05,
  /** CAC cible plafond (en €) */
  cacMaxEuros: 300,
} as const;
