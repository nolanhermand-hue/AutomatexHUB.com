export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://automatex-hub.com";

/** Formulation officielle souveraineté (alignée /vos-donnees). */
export const SOVEREIGNTY_TRUST_LINE = "IA française · Automations UE · RGPD" as const;

/** Heures administratives non productives estimées par vente sur l'année (ordre de grandeur terrain). */
export const HOURS_LOST_PER_SALE_PER_YEAR = 8;

export const SHOW_CALCULATOR_HOURS_ROW = true;

export const DEFAULT_SALES_PER_YEAR = 12;

export const CALCULATOR_SALES_MIN = 1;
export const CALCULATOR_SALES_MAX = 30;

/**
 * Hypothèse mandataire : commission potentielle ~3 500 € par dossier qualifié
 * (ordre de grandeur marché, pas un gain garanti par Automatex).
 */
export const VALUE_PER_LEAD_EUROS = 3500;

/** Délai standard de mise en ligne — après validation du périmètre client. */
export const SETUP_48H_NUANCE =
  "48 h ouvrées après validation de votre périmètre (accès outils, règles, tests)" as const;

/** Libellé CTA unique — audit / prise de rendez-vous 20 min */
export const BOOKING_CTA_LABEL = "Réserver mon appel avec Nolan" as const;

/** CTA démo 20 min — accueil & landings artisans/TPE */
export const PRIMARY_DEMO_CTA = "Démo gratuite 20 min sur votre cas" as const;
export const PRIMARY_DEMO_CTA_SHORT = "Démo 20 min" as const;

/** Offre sur mesure — entretien de cadrage (distinct de la démo 20 min). */
export const SUR_MESURE_BOOKING_CTA =
  "Réserver un rendez-vous sur mesure — 30 min" as const;

/** CTA carte tarif — prise de RDV 20 min (home + immobilier). */
export const PRICING_CARD_CTA = "Réserver 20 min" as const;

export const PRICING_REASSURANCE_CARD =
  "Sans engagement · résiliable en 1 mail · 30 jours remboursés sur la mise en place · RGPD France" as const;

/** Mots interdits sur tout le site (copy, code visible, JSON-LD). « Automatisations » (catalogue) est autorisé. */
export const FORBIDDEN_WORDS = [
  "IA",
  "intelligence artificielle",
  "enchaînement",
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
  /** Profil professionnel fondateur */
  linkedinUrl: "https://www.linkedin.com/in/nolan-hermand-369958412",
  /** Compte marque */
  tiktokUrl: "https://www.tiktok.com/@automatex_hub",
  /** Hébergeur explicite (signal de souveraineté française) */
  hostingProvider: "Mistral Paris · N8N Francfort (UE)",
} as const;

/** Libellé accessibilité — lien LinkedIn externe */
export const LINKEDIN_PROFILE_ARIA =
  "Profil LinkedIn de Nolan Hermand — s'ouvre dans un nouvel onglet" as const;

export const TIKTOK_PROFILE_ARIA =
  "Compte TikTok Automatex — s'ouvre dans un nouvel onglet" as const;

/** Meta tags : H2 — title ≤ 60 car / description ≤ 160 car, keyword local en début */
export const META = {
  title:
    "Automatex — Artisans, diagnostiqueurs & TPE · Orne · Normandie",
  description:
    "Réponse aux appels et messages, devis et relances pendant que vous êtes sur le terrain. Couvreurs, charpentiers, diagnostiqueurs, TPE. Flers (61). Démo 20 min · Sans engagement.",
  ogTitle: "Automatex — Artisans & TPE en Normandie | Démo 20 min",
  ogDescription:
    "Moins de paperasse le soir, réponses plus rapides sur chantier ou en visite. Installé à Flers (Orne). IA française · Automations UE · RGPD · Sans engagement.",
} as const;

/** Paragraphe définitionnel crawlable (GEO / moteurs génératifs) — sans mots interdits. */
export const GEO_DEFINITION =
  "Automatex est un service d'automatisation français pour artisans BTP, TPE et mandataires immobiliers indépendants (IAD, SAFTI, Capifrance, Optimhome, EffiCity) en Normandie. Basé à Saint-Georges-des-Groseillers (61100, agglomération de Flers), Automatex connecte Gmail, Telegram, Google Drive, portails et téléphone pour répondre aux demandes en moins de 2 minutes, relancer les devis et classer les documents. Automatisations hébergées en UE (Francfort), traitement linguistique en France/UE, conformes RGPD." as const;

export const META_KEYWORDS = [
  "mandataire immobilier Normandie",
  "automatisation mandataire IAD",
  "réponse demandes SeLoger automatique",
  "Flers Orne 61",
  "RGPD France automatisation",
  "mandataire SAFTI Normandie",
  "mandataire Capifrance Orne",
  "clients immobilier perdus solution",
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
      "demande SeLoger reçu à 22h pendant une visite",
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
      "Note vocale → compte-rendu structuré (pack Pilote)",
    ],
  ] as const,
} as const;

/** C10 — Navigation : 4 ancres maximum, plus CTA séparé */
export const NAV_LINKS = [
  { href: "#solution", label: "Comment ça marche" },
  { href: "#pricing", label: "Tarifs" },
  { href: "#faq", label: "FAQ" },
  { href: "/rendez-vous", label: "Contact" },
] as const;

/** Items défilants sous le hero (trust bar). */
export const TRUST_BAR_ITEMS = [
  "IAD · Normandie",
  "SAFTI · Orne",
  "Capifrance",
  "Optimhome",
  "EffiCity",
  SOVEREIGNTY_TRUST_LINE,
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
  badgeHosted: SOVEREIGNTY_TRUST_LINE,
  badgeRgpd: "Conforme RGPD",
  badgeNoCommit: "Sans engagement",
  h1: "Ne perdez plus jamais un client à 3 500 €.",
  subtitle:
    "Pour mandataires IAD, SAFTI, Capifrance en Normandie. Réponse aux demandes en 2 min pendant vos visites. Sans engagement, résiliable en 1 mail.",
  /** A3 + B13 — CTA unique primaire, ≤ 5 mots, verbe d'action */
  ctaPrimary: PRIMARY_DEMO_CTA,
  /** Lien secondaire dégradé en texte simple — pas un bouton */
  ctaSecondary: "Voir comment ça marche",
  /** A8 — Stat anchor visible */
  statAnchor:
    "1 client perdu peut représenter ~3 500 € de commission potentielle (hypothèse marché) — souvent chez le concurrent.",
  /** A10 — Compteur social proof crédible */
  liveCounter: "Onboardings limités pour garder un suivi humain serré — demandez en démo si une place est ouverte",
  /** A15 — Mention hébergeur nommé */
  hostingMention: "Automatisations UE (N8N Francfort) · Mistral Paris",
  /** A7 — Téléphone cliquable */
  socialProof:
    "Conçu pour les mandataires IAD, SAFTI et Capifrance en Orne et Normandie.",
} as const;

/** Carte stats hero (Framer) — chiffres alignés agitation / commission */
export const HERO_STATS = [
  { value: "~3 500 €", label: "Commission potentielle par client (hypothèse marché)" },
  { value: "17 500 €", label: "Sur 5 clients ratés en 12 mois" },
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
  title: "Combien de clients perdez-vous chaque semaine ?",
  subtitle:
    "Déplacez le curseur selon votre nombre de ventes annuelles. Les montants en euros sont une hypothèse (commission potentielle), pas un gain garanti.",
  salesLabel: "Ventes par an",
  outLeadsLabel: "clients perdus par semaine (estimation)",
  outEurosLabel: "Commissions en jeu par an (hypothèse)",
  outHoursLabel: "Heures perdues par an sur l'administratif",
  ctaPrefix: "Récupérer ces clients",
  ctaSuffix: "Réserver 20 min",
  scrollHint: "Automatex les récupère. Voici comment",
} as const;

/** B2 — Headline Problème : douleur palpable */
export const PROBLEM_HEADING = {
  h2: "Pourquoi les mandataires IAD et SAFTI perdent des clients chaque semaine",
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
    title: "Vendredi 22h : une demande reçue, perdue à 9h lundi",
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
  h2: "5 clients ratés en 12 mois = 17 500 € de manque à gagner.",
  body:
    "Sur la base d'une hypothèse de ~3 500 € de commission potentielle par client qualifié, rater 5 opportunités dans l'année représente un manque à gagner important. Ce chiffre illustre l'enjeu, pas un gain garanti par Automatex.",
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
      "Avant chaque réponse automatique, vous validez le ton et les exemples sur vos vrais clients. Vous gardez la main : Automatex propose, vous décidez. C'est votre voix, votre réseau, vos décisions.",
  },
  {
    kicker: "03",
    title: "Ça tourne",
    body:
      "Sous 48 h ouvrées après validation du périmètre, la configuration est active. Chaque demande reçue hors visite obtient une réponse en moins de 2 minutes. Chaque mail important remonte. Chaque document est rangé. Sans rien changer à votre quotidien.",
  },
];

export const SOLUTION_BADGES = [
  SOVEREIGNTY_TRUST_LINE,
  "Données non partagées",
  "Conforme RGPD",
  "Installé en 48 h",
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
      title: "Premier mois serré",
      body: "Ajustements du ton, des relances et des notifications. Suivi humain rapproché.",
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
    "Déclic, Système et Pilote : même socle — suivi 12 mois et bilan trimestriel. Pilote garde la priorité de réponse la plus rapide.",
  surMesure: {
    h2: "Sur mesure · prix sur devis",
    body:
      "Besoin d’un périmètre plus léger (budget serré) ou plus complet que les formules affichées ? C’est possible. Nolan cale un entretien de 30 minutes, puis un devis transparent — sans engagement tant que vous n’avez pas validé.",
    cta: SUR_MESURE_BOOKING_CTA,
  },
  phoneCta: "Appeler Nolan",
  cta: PRIMARY_DEMO_CTA,
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
      "Sur la base d'un mandataire moyen (12 ventes/an à 5 800 € net), récupérer 1 à 2 clients ratés représente +5 800 à +11 600 € de commission nette.",
  },
  {
    icon: "shield",
    stat: "0 client perdu",
    title: "Tranquillité d'esprit",
    body:
      "Plus de stress à 22h le vendredi en pensant aux clients non rappelés. Automatex tient la veille pendant vos week-ends et vos visites.",
  },
  {
    icon: "flag",
    stat: SOVEREIGNTY_TRUST_LINE,
    title: "Données souveraines",
    body:
      "Vos flux métier restent en Union européenne (N8N Francfort, Mistral Paris/UE). Conformité RGPD prouvée, pas déclarative.",
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

/** D1 — 3 packs unifiés (Déclic / Système / Pilote) */
export const PRICING_HEADING = {
  eyebrow: "Tarifs transparents",
  h2: "Tarifs Automatex — 3 packs + sur mesure pour mandataires en Normandie",
  h2SurMesureHint:
    "Mise en place + mensualité transparente. Basculez mensuel ou annuel (−15 %). Suivi humain 12 mois sur chaque pack.",
  chooseCta: PRIMARY_DEMO_CTA,
  toggleMonthly: "Mensuel",
  toggleAnnual: "Annuel",
  /** Paiement 12 mois d'avance : −15 % sur le mensuel */
  annualDiscountLabel: "Économisez 15% · Paiement annuel",
  annualDiscountPercent: 15,
  monthlySuffix: "/mois",
  annualSuffix: "/an",
  bannerLine: PRICING_REASSURANCE_CARD,
  guaranteeLine: "Sans engagement · Résiliable en 1 mail",
  customFitFootnote: "Besoin hors-cadre ? Devis sur-mesure.",
  surMesurePriceLabel: "Prix sur devis",
  surMesureIntro: "Entretien de 30 min pour cadrer périmètre, budget et priorités.",
} as const;

/** Accompagnement inclus par pack (noms internes Essentiel / Suivi / Copilote). */
export const PACK_ACCOMP_BULLETS = {
  declic: [
    "Accompagnement Essentiel : hébergement RGPD, maintenance",
    "1 point mensuel court, ajustements mineurs",
  ],
  systeme: [
    "Accompagnement Suivi : tout Essentiel",
    "Point mensuel 20 min, ajustements continus, évolutions dans le périmètre",
  ],
  pilote: [
    "Accompagnement Copilote : tout Suivi",
    "Réponse prioritaire 4 h, optimisation proactive, priorité nouvelles automatisations",
  ],
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
  /** Tarif annuel (€/an) — 12 mois × mensuel × (1 − 15 %) */
  annual: number;
  benefits: string[];
  roiLine: string;
  cta: string;
};

export type PackId = "declic" | "systeme" | "pilote";

export type PricingDisplayAudience = "home" | "immo" | "tpe";

/** Audience passée aux sections tarifs (home / immo / btp / tpe). */
export type PricingPackAudience = "default" | "home" | "btp" | "tpe";

/** Promesses et encarts ROI affichés sur les cartes (home = artisan, immo = mandataire). */
export const PRICING_OFFER_DISPLAY: Record<
  PackId,
  Record<PricingDisplayAudience, { promise: string; roiEncart: string }>
> = {
  declic: {
    home: {
      promise: "Vous ne ratez plus jamais un client qui vous appelle.",
      roiEncart: "Un seul chantier récupéré rembourse l'année.",
    },
    immo: {
      promise: "Vous ne ratez plus jamais un client pendant vos visites.",
      roiEncart: "1 mandat rentré rembourse l'année.",
    },
    tpe: {
      promise: "Une automatisation cadrée sur votre activité — accompagnement Essentiel inclus.",
      roiEncart: "Un flux récupéré rembourse plusieurs mois de formule.",
    },
  },
  systeme: {
    home: {
      promise: "Votre administratif tourne tout seul, sans vous.",
      roiEncart: "Jusqu'à 8 h par semaine récupérées sur le terrain.",
    },
    immo: {
      promise: "Votre administratif tourne tout seul, sans vous.",
      roiEncart: "Jusqu'à 8 h par semaine récupérées sur la prospection et les visites.",
    },
    tpe: {
      promise: "3 à 4 automatisations — votre administratif avance sans vous bloquer.",
      roiEncart: "Point mensuel 20 min · ajustements dans le périmètre du pack.",
    },
  },
  pilote: {
    home: {
      promise: "Un copilote qui anticipe et répond à votre place.",
      roiEncart: "Réponse sous 4 h · optimisation continue.",
    },
    immo: {
      promise: "Un copilote qui anticipe et répond à votre place.",
      roiEncart: "Réponse sous 4 h · optimisation continue.",
    },
    tpe: {
      promise: "Ensemble de vos outils + fonction sur mesure — priorité et copilote mensuel.",
      roiEncart: "Réponse sous 4 h · évolutions dans le périmètre du pack.",
    },
  },
};

export function pricingDisplayAudience(audience: PricingPackAudience): PricingDisplayAudience {
  if (audience === "home" || audience === "btp") return "home";
  if (audience === "tpe") return "tpe";
  return "immo";
}

export function getPricingOfferDisplay(
  id: PackId,
  audience: PricingPackAudience,
): { promise: string; roiEncart: string } {
  return PRICING_OFFER_DISPLAY[id][pricingDisplayAudience(audience)];
}

/** Bandeau pleine largeur au-dessus de la grille tarifs (home + immobilier). */
export const SUR_MESURE_PRICING_BANNER = {
  title: "Sur mesure",
  priceLabel: "Prix sur devis",
  phrase:
    "Besoin d’un périmètre plus léger ou plus complet que les formules affichées ? Entretien de 30 minutes, puis devis transparent — sans engagement tant que vous n’avez pas validé.",
  cta: SUR_MESURE_BOOKING_CTA,
} as const;

/** D1 — 3 packs unifiés (Déclic / Système / Pilote) + sur mesure */
export const OFFERS: PricingOffer[] = [
  {
    id: "declic",
    name: "Déclic",
    featured: false,
    setup: 390,
    monthly: 99,
    annual: 1010,
    benefits: [
      "1 automatisation sur-mesure (cadrée sur votre activité)",
      "Réponse aux demandes entrantes en moins de 2 minutes",
      "Notification téléphone immédiate sur chaque message urgent",
      "Mise en place en 48 h après l'appel découverte",
      ...PACK_ACCOMP_BULLETS.declic,
      OFFER_YEARLY_HUMAN_BULLET,
    ],
    roiLine: PRICING_OFFER_DISPLAY.declic.immo.roiEncart,
    cta: PRICING_CARD_CTA,
  },
  {
    id: "systeme",
    name: "Système",
    badge: "Recommandé",
    featured: true,
    setup: 990,
    monthly: 249,
    annual: 2540,
    benefits: [
      "3 à 4 automatisations sur-mesure",
      "Tout le périmètre Déclic",
      "Tri des mails et brouillons de réponses prêts à envoyer",
      "Résumé du soir + planning du matin sur le téléphone",
      "Documents classés dans Google Drive dès réception",
      ...PACK_ACCOMP_BULLETS.systeme,
      OFFER_YEARLY_HUMAN_BULLET,
    ],
    roiLine: PRICING_OFFER_DISPLAY.systeme.immo.roiEncart,
    cta: PRICING_CARD_CTA,
  },
  {
    id: "pilote",
    name: "Pilote",
    featured: false,
    setup: 1690,
    monthly: 449,
    annual: 4580,
    benefits: [
      "Ensemble de vos outils + fonction sur mesure",
      "Tout le périmètre Système",
      "Réponse prioritaire sous 4 h en semaine",
      "Note vocale après visite → compte-rendu structuré",
      "Rapport mensuel d'activité + réglages proactifs",
      ...PACK_ACCOMP_BULLETS.pilote,
      OFFER_YEARLY_HUMAN_BULLET,
    ],
    roiLine: PRICING_OFFER_DISPLAY.pilote.immo.roiEncart,
    cta: PRICING_CARD_CTA,
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
      "Même flexibilité : sans engagement, résiliable en 1 mail",
      SOVEREIGNTY_TRUST_LINE + " · vos comptes restent les vôtres",
    ],
    roiLine: "Idéal si vous hésitez entre deux formules ou si votre activité a des besoins spécifiques.",
    cta: SUR_MESURE_BOOKING_CTA,
  },
];

/** D6 / C12 — Tableau comparatif features 3 colonnes */
export type FeatureRow = {
  feature: string;
  declic: boolean | string;
  systeme: boolean | string;
  pilote: boolean | string;
};

export const FEATURE_COMPARISON: ReadonlyArray<FeatureRow> = [
  { feature: "Réponse aux demandes < 2 min", declic: true, systeme: true, pilote: true },
  { feature: "Notification téléphone immédiate", declic: true, systeme: true, pilote: true },
  { feature: "Mise en place en 48 h", declic: true, systeme: true, pilote: true },
  { feature: "Sans engagement · Résiliable en 1 mail", declic: true, systeme: true, pilote: true },
  {
    feature: "Suivi humain 12 mois (bilan trimestriel)",
    declic: true,
    systeme: true,
    pilote: true,
  },
  {
    feature: "Réponse Nolan en semaine (heures ouvrées)",
    declic: "48 h",
    systeme: "24 h",
    pilote: "< 4 h",
  },
  { feature: "Tri des mails matin/soir", declic: false, systeme: true, pilote: true },
  { feature: "Brouillons de réponses prêts", declic: false, systeme: true, pilote: true },
  { feature: "Classement Google Drive automatique", declic: false, systeme: true, pilote: true },
  { feature: "Accès direct fondateur < 4 h", declic: false, systeme: false, pilote: true },
  { feature: "Compte-rendu vocal post-visite", declic: false, systeme: false, pilote: true },
  { feature: "Réglage mensuel + rapport activité", declic: false, systeme: false, pilote: true },
];

export const PAID_OFFERS = OFFERS.filter((o) => !o.customOffer);

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
      "Oui. Nolan installe et configure, vous accompagne de près les 30 premiers jours, puis reste joignable toute la première année. Chaque trimestre, un point de contrôle de 15 à 20 minutes pour revoir le ton, les portails et la charge de visites. Si un scénario coince, vous écrivez ou vous appelez — ce n’est pas une carte livrée puis oubliée. Sans engagement de durée : vous pouvez arrêter en un mail.",
  },
  {
    question: "Est-ce que je dois être à l'aise avec la technologie ?",
    answer:
      "Non. Vous recevez des messages clairs sur Telegram ou par mail, comme aujourd'hui. Vous validez les réponses quand vous le souhaitez. Aucune application à apprendre, aucun logiciel à installer. La configuration se fait à distance pendant que vous êtes sur le terrain.",
  },
  {
    question: "Mes données sont-elles bien protégées en Europe ?",
    answer:
      "Oui. Les automatisations tournent sur N8N Cloud à Francfort (UE). Le modèle de langue est Mistral AI (Paris/UE). Vos emails restent dans votre Gmail ; Automatex ne revend rien. Chaque client a un espace cloisonné. Politique RGPD et registre des traitements disponibles sur /vos-donnees.",
  },
  {
    question: "Combien de temps pour la mise en place ?",
    answer:
      "48 heures ouvrées après notre appel de validation du périmètre (accès outils, règles, tests). Nolan configure, teste deux ou trois scénarios réels avec vous et reste disponible par téléphone pour ajuster le ton. La plupart des mandataires repartent avec leurs premières réponses actives dès le week-end suivant.",
  },
  {
    question: "Et si je veux arrêter ?",
    answer:
      "Vous êtes libre. Aucun engagement de durée, résiliable en un mail. Vos données vous sont restituées et effacées sous 7 jours.",
  },
  {
    question: "Mon CRM réseau (Playiad, Omega) est fermé. Ça marche quand même ?",
    answer:
      "Oui. Les outils Playiad ou Omega restent inchangés : Automatex ne s'y connecte pas. La configuration lit et répond sur votre boîte mail, prévient votre téléphone et classe vos pièces dans votre espace Google. Les demandes qui arrivent par SeLoger, Leboncoin ou votre site passent par le mail comme aujourd'hui — mais la réponse part pendant la visite. Vous recopiez ensuite ce qui doit l'être dans votre CRM en un copier-coller.",
  },
  {
    question: "J'ai déjà essayé des outils qui n'ont pas marché. Pourquoi ce serait différent ?",
    answer:
      "Parce qu'Automatex n'est pas un logiciel à apprendre ni une formation en ligne. C'est une configuration construite manuellement sur vos annonces, votre vocabulaire, votre réseau. Vous restez sans engagement, résiliable en un mail.",
  },
  {
    question: "J'ai mes habitudes — je travaille comme ça depuis 20 ans.",
    answer:
      "Automatex ne change pas vos habitudes. Il travaille dans votre boîte mail, votre Telegram, votre Google Calendar — des outils que vous utilisez déjà. Votre seul nouveau geste : recevoir un message le soir qui dit ce qui a été fait.",
  },
  {
    question: "Il a 19 ans — c'est suffisamment sérieux ?",
    answer:
      "Nolan a 19 ans. Il a aussi un SIRET (103 208 054 00017), une adresse à Flers, et un système testé sur des scénarios réels avant que vous ne signiez.",
  },
  {
    question: "En combien de temps un client non rappelé part-il à la concurrence ?",
    answer:
      "Souvent quelques minutes. Un acquéreur ou un vendeur qui n'a pas de réponse rapide contacte fréquemment d'autres mandataires dans la foulée (ordre de grandeur terrain, pas une loi fixe). Une réponse personnalisée tôt fait la différence. Automatex vise une réponse en moins de 2 minutes sur les demandes entrantes.",
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
    "Aucune donnée métier stockée aux États-Unis via nos prestations (N8N UE, Mistral UE)",
  ],
  always: [
    "Automatisations sur N8N Cloud Francfort (UE)",
    "Chiffrement en transit (HTTPS)",
    "Effacement complet sous 7 jours après votre départ",
    "Confirmation écrite d'effacement sur demande",
  ],
  linkLabel: "En savoir plus sur la sécurité des données →",
} as const;

export const RESILIATION_COPY = {
  h2: "Arrêter ? Un seul mail.",
  body:
    "Sans engagement : pas de formulaire de rétention, pas de période minimale. Un mail suffit — effet en fin de mois en cours. Données effacées sous 7 jours. Garantie 30 jours remboursée sur la mise en place si le système ne correspond pas au cadrage de l’audit (conditions détaillées sur /cgv).",
  emailLine: "nolan.hermand@automatex-hub.com",
  mailHint: "Objet : Résiliation Automatex — indiquez votre prénom et « je souhaite résilier ».",
  cta: "Résilier en ligne →",
  legalNote: "Conformément à la loi n°2022-1158 — voir",
} as const;

export const TRUST_BADGES_FOOTER: ReadonlyArray<{ title: string; subtitle: string }> = [
  { title: SOVEREIGNTY_TRUST_LINE, subtitle: "N8N Francfort · Mistral Paris" },
  { title: "Conforme RGPD", subtitle: "Données souveraines · Jamais revendues" },
  { title: "Sans engagement", subtitle: "Résiliable en 1 mail · Immédiatement" },
  { title: "Résiliable en 1 mail", subtitle: "Sans période minimale · Aucun verrou" },
  { title: "Opérationnel en 48 h", subtitle: "Après validation de votre périmètre" },
  { title: "Vous restez propriétaire", subtitle: "Vos données · Vos outils · Vos décisions" },
] as const;

export const CTA_REASSURANCE_LINE =
  "Sans engagement · résiliable en 1 mail · 30 jours remboursés sur la mise en place · RGPD France" as const;

export const MARKETING_REASSURANCE_BANNER = CTA_REASSURANCE_LINE;

export const CONTACT_COPY = {
  h2: "20 minutes. Aucun engagement. Aucun préparatif.",
  subtitle:
    "On vous montre en direct ce que la configuration fait sur une activité comme la vôtre. Si ça ne vous convient pas, vous partez sans rien. Nolan en direct, pas un ticket anonyme.",
  formTitle: "Vos coordonnées",
  firstNameLabel: "Prénom",
  lastNameLabel: "Nom",
  emailLabel: "Email",
  phoneLabel: "Téléphone",
  networkLabel: "Réseau mandataire",
  networkPlaceholder: "Choisissez votre réseau",
  submitLabel: "Réserver mon appel avec Nolan",
  emailHint: "Votre email ne sera jamais partagé ni revendu.",
  phoneHint: "10 chiffres — affichage 06 45 38 42 33.",
  formFooter: "Nolan, Flers (61).",
  formReassurance: "Sans engagement",
  resiliationSubmitLabel: "Envoyer ma demande de résiliation",
  hubFounderLine: "Fondateur · basé à Flers (Orne)",
  hubFounderSub: "Démo 20 min sur votre cas — Nolan vous rappelle sous 24 h.",
  secteurLabel: "Secteur d'activité",
  secteurPlaceholder: "Choisissez votre secteur",
  hubMetierLabel: "Métier",
  hubMetierPlaceholder: "Choisissez votre métier",
  hubFullNameLabel: "Nom",
  hubEmailLabel: "Email (optionnel)",
  hubEmailHint: "Pour la confirmation de créneau — sinon Nolan vous rappelle au numéro indiqué.",
  zoneOrneLabel: "Zone (Orne, optionnel)",
  zoneOrnePlaceholder: "Où êtes-vous basé ?",
} as const;

/** Badges compacts — page /rendez-vous (variant hub). */
export const HUB_CONTACT_REASSURANCE = [
  "Sans engagement",
  "Résiliable en 1 mail",
  "RGPD France",
  SOVEREIGNTY_TRUST_LINE,
] as const;

export const PROSPECT_SECTEUR_OPTIONS = [
  { value: "artisan", label: "Artisan / BTP (couvreur, charpentier…)" },
  { value: "diagnostiqueur", label: "Diagnostiqueur immobilier" },
  { value: "immobilier", label: "Immobilier (mandataire, agence…)" },
  { value: "tpe", label: "TPE / PME (autre secteur)" },
] as const;

export const ORNE_ZONE_OPTIONS = [
  { value: "61", label: "Tout l'Orne (61)" },
  { value: "arrondissement-alencon", label: "Arrondissement d'Alençon" },
  { value: "arrondissement-argentan", label: "Arrondissement d'Argentan" },
  {
    value: "arrondissement-mortagne-au-perche",
    label: "Arrondissement de Mortagne-au-Perche",
  },
] as const;

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
  tagline: `© 2026 Automatex · ${SOVEREIGNTY_TRUST_LINE}`,
} as const;

/** Maillage interne SEO — pages locales indexables (GSC). */
export const FOOTER_LOCAL_LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/normandie", label: "Normandie" },
  { href: "/normandie/flers", label: "Flers & agglo" },
  { href: "/normandie/alencon", label: "Alençon" },
  { href: "/normandie/argentan", label: "Argentan" },
  { href: "/a-propos", label: "À propos" },
] as const;

export const STICKY_CTA_COPY = {
  label: PRIMARY_DEMO_CTA_SHORT,
} as const;

/** Remplace les faux témoignages — phase bêta */
export const BETA_PHASE_COPY = {
  title: "Phase bêta — places limitées",
  body: "Automatex onboard au maximum quatre mandataires par mois pour garder un suivi humain serré. Pas de témoignages fabricés : des pilotes en cours en Normandie.",
  badge: "Places limitées — statut sur demande en démo",
} as const;

export const SOCIAL_PROOF_DISCLAIMER =
  "Programme pilote 2026 — pas de témoignages inventés sur le site.";

/** Réservé aux futures preuves réelles ; ne pas afficher de citations fictives. */
export const SOCIAL_PROOF_ITEMS: ReadonlyArray<{
  quote: string;
  author: string;
  network: string;
  location: string;
}> = [];

/** B11 + E13 — Story fondateur enrichie */
export const ABOUT_FOUNDER = {
  eyebrow: "À propos de Nolan",
  h2: "Construit par un expert du terrain, pas par une startup.",
  body:
    "Nolan Hermand configure chaque installation à la main à Flers (Google, portails, messagerie). 2 ans sur les chantiers (menuiserie puis couverture), formation autodidacte à l'automatisation en parallèle. Après l’installation, il reste joignable 12 mois : bilan chaque trimestre, réponses selon votre formule — un humain, pas un logiciel abandonné.",
  stats: [
    { value: "< 2 min", label: "Délai de réponse moyen" },
    { value: "48 h", label: "Mise en place après validation périmètre" },
    { value: "Sans engagement", label: "Résiliable en 1 mail" },
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
