import type { PricingOffer } from "@/lib/constants";
import { SOVEREIGNTY_TRUST_LINE, SUR_MESURE_BOOKING_CTA } from "@/lib/constants";

/** Landing BTP — ton terrain, sans jargon « logiciel / formation ». */
export const BTP_HERO = {
  h1: "Vos devis partent tout seuls. Vos clients ont une réponse en 90 secondes. Vous, vous finissez votre chantier.",
  sub:
    "Un système automatique installé sur vos outils actuels. Vous n'apprenez rien de nouveau. On s'occupe de tout — et on reste là.",
  ctaDemo: "Nolan m'appelle demain — démo 20 min gratuite",
  ctaHow: "Voir comment ça marche — 2 minutes",
  priceFrom: "Mise en place 390€ (1er mois inclus), puis 99€/mois · sans engagement",
  localBandeau:
    "Plombier, maçon, électricien dans l'Orne ? Même système — Nolan installe à distance en 48 h.",
  badges: [
    SOVEREIGNTY_TRUST_LINE,
    "RGPD — vos données restent chez vous",
    "Basé à Flers, Orne",
    "Démo sous 24 h · Pilote : réponse 4 h (sem.)",
  ],
} as const;

export const BTP_DAY_PAIN = {
  h2: "Vous reconnaissez cette journée ?",
  steps: [
    { time: "06h00", text: "Réveil. Déjà 3 messages WhatsApp de clients." },
    { time: "07h00", text: "Chantier. Le téléphone sonne. Impossible de décrocher." },
    { time: "12h00", text: "Pause. 2 appels manqués. Un prospect ne rappellera plus." },
    { time: "17h00", text: "Fin de chantier. Il faut faire le devis de ce matin." },
    { time: "19h00", text: "Devis pas encore fait. La fatigue gagne." },
    { time: "21h00", text: "Le devis n'est pas parti. Le client a pris quelqu'un d'autre." },
  ],
  stat: "Un devis envoyé après 24 h = 60 % de chances de perdre le chantier.",
  source: "Source : Fédération Française du Bâtiment, 2023.",
} as const;

export const BTP_AUTOMATIONS = {
  h2: "Ce que le système fait à votre place",
  items: [
    {
      id: "appel",
      title: "Appel manqué",
      body:
        "Un client appelle pendant que vous êtes sous une dalle. Il reçoit un SMS en 90 secondes : « Bonjour, c'est [Prénom]. J'ai bien reçu votre message. Je vous rappelle avant 18 h. » Vous n'avez rien fait.",
    },
    {
      id: "devis",
      title: "Devis automatique",
      body:
        "Vous revenez d'une visite. Vous dictez 2 minutes dans votre téléphone. Le devis est mis en page, en PDF, et envoyé au client.",
    },
    {
      id: "relance",
      title: "Relances sans honte",
      body:
        "Le client n'a pas répondu à votre devis depuis 4 jours. Le système lui envoie un message poli à J+4 et J+8. Vous ne vous souvenez même pas d'avoir relancé.",
    },
    {
      id: "resume",
      title: "Résumé de journée",
      body:
        "À 18 h, vous recevez sur Telegram : 2 devis envoyés, 1 relance automatique, 1 appel en attente de rappel. Votre journée, en 10 secondes.",
    },
  ],
} as const;

export const BTP_ACCOMPANIMENT = {
  h2: "Le système, c'est nous. Pas vous.",
  body:
    "Vous n'avez pas à comprendre comment ça fonctionne. Vous n'avez pas à l'installer. Vous n'avez pas à le former. Et si quelque chose coince un jeudi soir — vous envoyez un message à Nolan.",
  pillars: [
    {
      title: "Point mensuel inclus",
      body: "Chaque mois, Nolan vous appelle. On regarde ce qui marche, ce qu'on ajuste. 20 minutes. Pas de surprise.",
    },
    {
      title: "Ajustements en continu",
      body: "Votre activité change. Le système change avec vous. Nouveau type de chantier ? On adapte. Sans surcoût.",
    },
    {
      title: "Un vrai interlocuteur local",
      body: "Nolan est à Flers. Pas une hotline. 06 45 38 42 33 — réponse sous 4 h en semaine (pack Pilote).",
    },
  ],
  quote:
    "Je construis ce système pour des gens qui n'ont pas le temps de s'en occuper. Mon travail, c'est que vous n'y pensiez plus. Et si un jour vous avez besoin de moi — je suis là.",
} as const;

export const BTP_PRICING_HEADING = {
  h2: "Choisissez votre niveau de tranquillité",
  sub: "Grille transparente. Besoin de moins ou de plus que les packs ? Formule sur mesure — prix sur devis après 30 min. Pas d'engagement annuel.",
  toggleMonthly: "Mensuel",
  toggleAnnual: "Annuel",
  annualDiscountLabel: "Économisez 15% · Paiement annuel",
} as const;

export type BtpOffer = PricingOffer & {
  systemLine: string;
  nolanLine: string;
};

export const BTP_PILOTE_HIGHLIGHT =
  "Accompagnement Copilote · Point mensuel 20 min · Réponse sous 4 h · Rapport mensuel Telegram. Nolan suit votre activité chaque mois.";

export const BTP_SOCIAL_PROOF = {
  stats: [
    "60 % des devis envoyés après 24 h ne sont pas signés. (FFB 2023)",
    "Les artisans qui relancent sous 48 h signent 2× plus. (CAPEB 2022)",
  ],
  founderQuote:
    "J'ai construit ce système en pensant à mon père, électricien pendant 20 ans. Il a perdu des centaines d'heures sur des tâches qui auraient pu se faire toutes seules. C'est pour lui, et pour tous les artisans de l'Orne, que j'ai créé Automatex.",
  stackLabels: ["N8N", "Mistral AI", "Google Workspace", "OVHcloud France"] as const,
  /** Affichage public — sans jargon technique. */
  publicHostingLabels: ["OVHcloud France", "Google Workspace"] as const,
} as const;

export const BTP_OFFERS: BtpOffer[] = [
  {
    id: "declic",
    name: "Déclic",
    featured: false,
    setup: 390,
    monthly: 99,
    annual: 1010,
    systemLine: "1 automatisation sur-mesure — ex. SMS ~90 s sur appel manqué au chantier.",
    nolanLine: "Nolan installe, règle le message à votre prénom, accompagnement Essentiel inclus.",
    benefits: [],
    roiLine: "1 chantier récupéré = plusieurs mois de formule amortis.",
    cta: "Tester sans risque",
  },
  {
    id: "systeme",
    name: "Système",
    badge: "Recommandé",
    featured: true,
    setup: 990,
    monthly: 249,
    annual: 2540,
    systemLine: "3 à 4 automatisations : appels manqués, devis, relances, résumé du soir.",
    nolanLine: "Accompagnement Suivi : point mensuel 20 min, ajustements continus dans le périmètre.",
    benefits: [],
    roiLine: "1 devis récupéré à temps = formule rentabilisée en ~2 semaines.",
    cta: "Récupérer mes devis",
  },
  {
    id: "pilote",
    name: "Pilote",
    featured: false,
    setup: 1690,
    monthly: 449,
    annual: 4580,
    systemLine: "Stack complet + brique métier (pilotage dossiers, rapports, volume élevé).",
    nolanLine: "Accompagnement Copilote : réponse 4 h, optimisation proactive, priorité nouveaux flux.",
    benefits: [],
    roiLine: "10+ chantiers / an : Nolan suit votre activité chaque mois.",
    cta: "Ne plus être seul",
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
    systemLine: "Périmètre plus léger ou plus complet que les 3 packs.",
    nolanLine: "Entretien de cadrage, puis devis transparent avant tout engagement.",
    benefits: [],
    roiLine: "Idéal si votre activité ne rentre pas dans une case standard.",
    cta: SUR_MESURE_BOOKING_CTA,
  },
];

export const BTP_FAQ = {
  h2: "Ce que vous vous demandez sûrement",
  items: [
    {
      q: "J'ai mes habitudes — je travaille comme ça depuis 20 ans.",
      a: "Automatex ne change pas vos habitudes. Il travaille dans votre boîte mail, votre Telegram, votre Google Calendar — des outils que vous utilisez déjà ou qui s'y ajoutent sans effort. Votre seul nouveau geste : recevoir un message le soir qui dit ce qui a été fait.",
    },
    {
      q: "Je ne suis pas doué avec la technologie.",
      a: "C'est exactement pour ça qu'on est là. Vous n'installez rien. Nolan s'occupe de tout. Votre seul outil nouveau : recevoir un message Telegram le soir.",
    },
    {
      q: "J'ai déjà payé pour des trucs qui ne marchaient pas.",
      a: "On commence par une démo sur votre propre cas — vos vrais appels, vos vrais chantiers. Vous voyez avant de signer.",
    },
    {
      q: "Et si ça tombe en panne ?",
      a: "Vous écrivez à Nolan. Réponse sous 4 h en semaine (pack Pilote). Chaque mois, un point pour anticiper les blocages.",
    },
    {
      q: "C'est quoi le vrai prix ?",
      a: "Setup unique + mensuel fixe. Aucun coût caché. Vous pouvez arrêter — on vous explique comment récupérer vos données.",
    },
    {
      q: "Mes données sont en sécurité ?",
      a: `${SOVEREIGNTY_TRUST_LINE}. Mistral (Paris) et automatisations en UE. Vos devis et contacts : vous et Nolan uniquement.`,
    },
    {
      q: "Je travaille seul, sans secrétaire — c'est vraiment pour moi ?",
      a: "C'est exactement pour ça que c'est conçu. Automatex remplace ce que ferait une secrétaire — répondre aux appels, envoyer les devis, relancer les clients. Sans embauche, sans formation, sans charges. Et Nolan est là si quelque chose coince.",
    },
    {
      q: "Il a 19 ans — c'est suffisamment sérieux ?",
      a: "Juste : Nolan a 19 ans. Ce qu'il a aussi, c'est un SIRET (103 208 054 00017), une adresse à Flers, un système testé sur des scénarios réels. Et une garantie : si ça ne fonctionne pas dans les 30 premiers jours, vous êtes remboursé sans question.",
    },
    {
      q: "Et si j'ai un problème un vendredi soir ?",
      a: "Pack Pilote : réponse sous 4 h en semaine. Déclic et Système : réponse le jour ouvré suivant. Dans tous les cas : vous n'êtes jamais seul.",
    },
  ],
} as const;

export const BTP_BETA = {
  title: "Lancement dans l'Orne — tarif fondateur",
  body: "Les 5 premiers artisans bénéficient d'un tarif fondateur bloqué à vie, mentionné au contrat. Pas de faux avis : Nolan préfère 5 clients bien accompagnés qu'une vitrine pleine de logos.",
  slots: "Places limitées — demandez si le tarif fondateur est encore ouvert.",
} as const;

export const BTP_DECLIC_HINT =
  "La plupart des artisans solo commencent par Déclic : mise en place 390€ (1er mois inclus), puis 99€/mois." as const;

export const BTP_CONTACT = {
  h2: "Prêt à récupérer 2 h par jour ?",
  sub: "Nolan vous appelle sous 24 h. 20 minutes. Il vous montre sur vos propres chantiers ce que le système ferait.",
  cta: "Réserver mon appel avec Nolan",
  foot: "Démo gratuite · Sans engagement · Basé à Flers, Orne",
} as const;

export const BTP_METIERS = [
  "Maçon",
  "Plombier",
  "Électricien",
  "Couvreur",
  "Menuisier",
  "Peintre",
  "Carreleur",
  "Autre",
] as const;

export const ACCOMPANIMENT_PAGE = {
  h1: "Vous n'êtes jamais seul avec votre système.",
  sub:
    "L'accompagnement est inclus dans chaque formule — pas en option. Les grilles mandataires et artisans sont transparentes ; si vous voulez moins ou plus que les packs affichés, on part sur une formule sur mesure (prix sur devis après 30 min de cadrage).",
  monthlyIntro:
    "20 minutes. On regarde les chiffres ensemble : combien de leads ou de chantiers récupérés, combien de devis partis, ce qui bloque encore. Puis on ajuste — immédiatement, sans rendez-vous supplémentaire.",
  timelineHorizontal: [
    { month: "Mois 1", text: "Installation · premier point · premiers ajustements" },
    { month: "Mois 2", text: "Le système tourne · premiers résultats mesurés" },
    { month: "Mois 3", text: "Vous n'y pensez plus · rapport automatique" },
    { month: "Mois 6", text: "Bilan semestriel · nouveaux automatismes si besoin" },
    { month: "Mois 12", text: "ROI calculé ensemble · renouveler — votre choix" },
  ],
  roi: {
    h2: "Objectif sur 12 mois (ordre de grandeur)",
    body: "Un artisan qui ne perd plus ses appels manqués peut récupérer 2 à 3 chantiers par an qu'il aurait perdus. Sur l'Orne, avec une marge moyenne de 25 % sur 15 000 € de CA par chantier, cela représente environ 7 500 € récupérés. À 249 €/mois (pack Système), la formule se rentabilise en moins de 2 semaines si un devis part à temps.",
  },
  sections: [
    {
      h2: "Le point mensuel",
      body: "Chaque mois, Nolan vous appelle. 20 minutes. Combien de devis partis, ce qui bloque encore. Puis on ajuste.",
    },
    {
      h2: "Les ajustements en continu",
      body: "Nouveau type de client ? Nouvelle zone ? On reconfigure sans surcoût. Exemple : adapter un template de devis en 48 h.",
    },
    {
      h2: "La ligne directe",
      body: "06 45 38 42 33 — Nolan Hermand, Flers. Réponse sous 4 h en semaine (Pilote). Lendemain matin (Déclic et Système).",
    },
    {
      h2: "Ce que ça change sur 12 mois",
      body: "Mois 1 : installation. Mois 3 : le système tourne seul. Mois 12 : ROI calculé ensemble — renouveler ou non, votre choix.",
    },
  ],
} as const;

export type BtpLocalPageDef = {
  path: string;
  city: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  localHook: string;
  /** Paragraphe unique SEO local (zones, quartiers). */
  localDetail: string;
  distanceFromFlers?: string;
};

export const BTP_LOCAL_PAGES: BtpLocalPageDef[] = [
  {
    path: "/automatisation-btp-orne",
    city: "Orne",
    h1: "Automatisation BTP dans l'Orne — Flers, Argentan, Alençon",
    metaTitle: "Automatisation BTP Orne — devis, appels, relances · Automatex Hub",
    metaDescription:
      "Automatex Hub automatise les devis, les réponses aux appels manqués et les relances clients pour les artisans BTP dans l'Orne (61). Basé à Flers. Packs dès 99€/mois (mise en place incluant le 1er mois).",
    localHook:
      "De Flers à Alençon, Argentan et les zones artisanales de l'Orne : un interlocuteur local, pas une hotline parisienne.",
    localDetail:
      "Les artisans des bassins de Flers, d'Alençon et d'Argentan partagent les mêmes contraintes : chantier le jour, administratif le soir. Automatex Hub est basé à Flers (61100) et intervient dans tout le département.",
    distanceFromFlers: "Siège à Flers — déplacements dans l'Orne",
  },
  {
    path: "/automatisation-artisan-flers",
    city: "Flers",
    h1: "Automatisation pour artisans à Flers — Orne",
    metaTitle: "Automatisation artisan Flers (61) — devis & appels · Automatex",
    metaDescription:
      "Automatisation pour artisans à Flers : devis depuis note vocale, SMS appels manqués, relances clients. Nolan à Flers (61100). Packs dès 99€/mois (mise en place incluant le 1er mois).",
    localHook: "Siège à Saint-Georges-des-Groseillers — Nolan intervient sur Flers et l'agglo en 20 minutes.",
    localDetail:
      "Les artisans de la zone industrielle des Provinces, du centre-ville de Flers et de l'agglo : devis le soir, appels manqués en journée — le système répond pendant que vous êtes sur le chantier.",
    distanceFromFlers: "Nolan est à Flers — même commune",
  },
  {
    path: "/automatisation-artisan-alencon",
    city: "Alençon",
    h1: "Automatisation pour artisans à Alençon",
    metaTitle: "Automatisation artisan Alençon (61) — devis automatiques · Automatex",
    metaDescription:
      "Automatisation pour artisans à Alençon : appels manqués, devis vocaux, relances. Nolan à Flers, 35 min. Packs dès 99€/mois (mise en place incluant le 1er mois).",
    localHook: "Artisans du quartier Saint-Léonard et de la zone d'activités : même numéro, même suivi.",
    localDetail:
      "Les artisans du quartier Saint-Léonard, de la zone des Fourches et des chantiers périphériques d'Alençon : un prestataire à Flers, à 35 minutes, pas une hotline parisienne.",
    distanceFromFlers: "Flers est à environ 35 minutes d'Alençon",
  },
  {
    path: "/automatisation-artisan-argentan",
    city: "Argentan",
    h1: "Automatisation pour artisans à Argentan",
    metaTitle: "Automatisation artisan Argentan (61) — appels & devis · Automatex",
    metaDescription:
      "Automatisation pour artisans à Argentan et zone Ar'Nor : devis, relances, SMS appels manqués. Basé à Flers. Packs dès 99€/mois (mise en place incluant le 1er mois).",
    localHook: "Zone Ar'Nor et centre-ville d'Argentan : prestataire basé à Flers, à 35 minutes.",
    localDetail:
      "Les artisans de la zone Ar'Nor et du centre-ville d'Argentan : Nolan Hermand installe et suit le système depuis Flers, avec le même numéro direct.",
    distanceFromFlers: "Flers est à environ 35 minutes d'Argentan",
  },
  {
    path: "/devis-automatique-artisan-orne",
    city: "Orne",
    h1: "Devis automatique pour artisans dans l'Orne",
    metaTitle: "Devis automatique artisan Orne — depuis note vocale · Automatex",
    metaDescription:
      "Devis automatique pour artisans dans l'Orne : dictée vocale, PDF, envoi mail le jour même. Flers, Alençon, Argentan. Logiciel devis artisan sans soirée admin.",
    localHook:
      "Page ressource pour artisans qui perdent des chantiers faute de devis le jour même — générer un devis artisan automatiquement depuis le chantier.",
    localDetail:
      "Que vous soyez plombier à Flers, électricien à Alençon ou maçon à Argentan : la note vocale devient un devis chiffré et envoyé avant le retour à la maison.",
    distanceFromFlers: "Configuration par Nolan · siège Flers (61100)",
  },
  {
    path: "/devis-automatique-artisan",
    city: "Normandie",
    h1: "Devis envoyés automatiquement après vos visites",
    metaTitle: "Devis artisan automatique · Orne · Automatex Hub",
    metaDescription:
      "Comment envoyer vos devis plus vite : dictée vocale, PDF, envoi mail — sans soirée administratif. Orne et Normandie.",
    localHook: "Page ressource pour artisans qui perdent des chantiers faute de devis le jour même.",
    localDetail:
      "Que vous soyez à Flers, Alençon ou Argentan : la dictée vocale en sortie de chantier devient un PDF envoyé le jour même — Nolan configure le modèle avec vous.",
    distanceFromFlers: "Basé à Flers, Orne (61100)",
  },
];
