import type { PricingOffer } from "@/lib/constants";
import {
  PRIMARY_DEMO_CTA,
  PRICING_CARD_CTA,
  SOVEREIGNTY_TRUST_LINE,
  SUR_MESURE_BOOKING_CTA,
} from "@/lib/constants";

/** Landing BTP — ton terrain, sans jargon « logiciel / formation ». */
export const BTP_HERO = {
  h1: "Le premier qui répond signe le chantier. Fais que ce soit toi.",
  sub:
    "Tes devis dictés partent en PDF, tes appels manqués reçoivent une réponse en moins de 2 minutes, tes relances tournent seules. Branché sur ton téléphone, installé en 48 h ouvrées. Rien de nouveau à apprendre.",
  ctaDemo: PRIMARY_DEMO_CTA,
  ctaHow: "Voir comment ça marche — 2 minutes",
  priceFrom: "Sans engagement · voir la grille Déclic · Système · Pilote ci-dessous",
  localBandeau:
    "Plombier, maçon, électricien dans l'Orne ? Même système — Nolan installe à distance ; mise en ligne en 48 h ouvrées après validation du périmètre.",
  badges: [
    "Sans engagement",
    "Basé à Flers, Orne",
  ],
} as const;

export const BTP_DAY_PAIN = {
  h2: "Tu reconnais cette journée ?",
  steps: [
    { time: "06h00", text: "Réveil. Déjà 3 messages WhatsApp de clients." },
    { time: "07h00", text: "Chantier. Le téléphone sonne. Impossible de décrocher." },
    { time: "12h00", text: "Pause. 2 appels manqués. Un prospect ne rappellera plus." },
    { time: "17h00", text: "Fin de chantier. Il faut faire le devis de ce matin." },
    { time: "19h00", text: "Devis pas encore fait. La fatigue gagne." },
    { time: "21h00", text: "Le devis n'est pas parti. Le client a pris quelqu'un d'autre." },
  ],
  stat:
    "×21 plus de chances de qualifier un contact en répondant sous 5 min plutôt qu'après 30 min.",
  source: "Source : MIT / HBR, 2011.",
} as const;

export const BTP_AUTOMATIONS = {
  h2: "Ce que le système fait à ta place",
  answerFirst:
    "Quatre leviers couvrent l’essentiel du terrain : SMS sur appel manqué, devis depuis la voix, relances polies et résumé du soir sur Telegram.",
  items: [
    {
      id: "appel",
      title: "Appel manqué",
      body:
        "Un client appelle pendant que tu es sous une dalle. Il reçoit un SMS en moins de 2 minutes : « Bonjour, c'est [Prénom]. J'ai bien reçu ton message. Je te rappelle avant 18 h. » Tu n'as rien fait.",
    },
    {
      id: "devis",
      title: "Devis automatique",
      body:
        "Tu reviens d'une visite. Tu dictes 2 minutes dans ton téléphone. Le devis est mis en page, en PDF, et envoyé au client.",
    },
    {
      id: "relance",
      title: "Relances sans honte",
      body:
        "Le client n'a pas répondu à ton devis depuis 4 jours. Le système lui envoie un message poli à J+4 et J+8. Tu ne te souviens même pas d'avoir relancé.",
    },
    {
      id: "resume",
      title: "Résumé de journée",
      body:
        "À 18 h, tu reçois sur Telegram : 2 devis envoyés, 1 relance automatique, 1 appel en attente de rappel. Ta journée, en 10 secondes.",
    },
  ],
} as const;

export const BTP_ACCOMPANIMENT = {
  h2: "Le système, c'est nous. Pas toi.",
  teaser:
    "Point mensuel, ajustements et ligne directe Nolan à Flers — inclus dans chaque formule. Pas de vidéo en double ici : le détail (timeline, pérennité, sortie) est sur la page accompagnement.",
  body:
    "Tu n'as pas à comprendre comment ça fonctionne. Tu n'as pas à l'installer. Tu n'as pas à le former. Et si quelque chose coince un jeudi soir — tu envoies un message à Nolan.",
  pillars: [
    {
      title: "Point mensuel inclus",
      body: "Chaque mois, Nolan t'appelle. Il regarde ce qui marche et ce qu'il ajuste. 20 minutes. Pas de surprise.",
    },
    {
      title: "Ajustements en continu",
      body: "Ton activité change. Le système change avec toi. Nouveau type de chantier ? Nolan adapte. Sans surcoût.",
    },
    {
      title: "Un vrai interlocuteur local",
      body: "Nolan est à Flers. Pas une hotline. 06 45 38 42 33 — réponse sous 4 h en semaine (pack Pilote).",
    },
  ],
  quote:
    "Je construis ce système pour des gens qui n'ont pas le temps de s'en occuper. Mon travail, c'est que tu n'y penses plus. Et si un jour tu as besoin de moi — je suis là.",
} as const;

export const BTP_PRICING_HEADING = {
  h2: "Choisis ton niveau de tranquillité",
  sub: "Grille transparente. Besoin de moins ou de plus que les packs ? Formule sur mesure — prix sur devis après 30 min. Sans engagement.",
} as const;

export type BtpOffer = PricingOffer & {
  systemLine: string;
  nolanLine: string;
};

export const BTP_PILOTE_HIGHLIGHT =
  "Accompagnement Copilote · Point mensuel 20 min · Réponse sous 4 h · Rapport mensuel Telegram. Nolan suit ton activité chaque mois.";

export const BTP_SOCIAL_PROOF = {
  stats: [
    "Un devis qui traîne refroidit le client — des relances polies à J+4 et J+8 rappellent ton dossier sans que tu y penses.",
  ],
  founderQuote:
    "J'ai construit ce système en pensant aux artisans de l'Orne : devis le soir, appels manqués, paperasse. AutomateX enlève ce qui peut tourner sans toi — pour que tu restes sur le chantier.",
  stackLabels: ["Automatisations UE", "Mistral UE", "Google Workspace"] as const,
  /** Affichage public — aligné mentions légales / vos-donnees. */
  publicHostingLabels: ["CDN Netlify (site vitrine)", "Données métier en UE"] as const,
} as const;

export const BTP_OFFERS: BtpOffer[] = [
  {
    id: "declic",
    name: "Déclic",
    featured: false,
    setup: 390,
    monthly: 99,
    systemLine: "1 automatisation sur-mesure — ex. SMS en moins de 2 min sur appel manqué au chantier.",
    nolanLine: "Nolan installe, règle le message à ton prénom, accompagnement Essentiel inclus.",
    benefits: [],
    roiLine: "Un SMS propre quand tu ne peux pas décrocher — le client sait que tu as vu son message.",
    cta: PRICING_CARD_CTA,
  },
  {
    id: "systeme",
    name: "Système",
    badge: "Recommandé",
    featured: true,
    setup: 990,
    monthly: 249,
    systemLine: "3 à 4 automatisations : appels manqués, devis, relances, résumé du soir.",
    nolanLine: "Accompagnement Suivi : point mensuel 20 min, ajustements continus dans le périmètre.",
    benefits: [],
    roiLine: "Devis et relances qui avancent sans te coller au téléphone le soir.",
    cta: PRICING_CARD_CTA,
  },
  {
    id: "pilote",
    name: "Pilote",
    featured: false,
    setup: 1690,
    monthly: 449,
    systemLine: "Ensemble de tes outils + fonction sur mesure (pilotage dossiers, rapports, volume élevé).",
    nolanLine: "Accompagnement Copilote : réponse 4 h, optimisation proactive, priorité nouveaux flux.",
    benefits: [],
    roiLine: "Volume élevé : Nolan suit ton activité chaque mois et ajuste les flux.",
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
    systemLine: "Périmètre plus léger ou plus complet que les 3 packs.",
    nolanLine: "Entretien de cadrage, puis devis transparent avant tout engagement.",
    benefits: [],
    roiLine: "Idéal si ton activité ne rentre pas dans une case standard.",
    cta: SUR_MESURE_BOOKING_CTA,
  },
];

export const BTP_FAQ = {
  h2: "Ce que tu te demandes sûrement",
  items: [
    {
      q: "Tu as tes habitudes — tu travailles ainsi depuis 20 ans.",
      a: "AutomateX ne change pas tes habitudes. Il travaille dans ta boîte mail, ton Telegram, ton Google Calendar — des outils que tu utilises déjà ou qui s'y ajoutent sans effort. Ton seul nouveau geste : recevoir un message le soir qui dit ce qui a été fait.",
    },
    {
      q: "Tu n'es pas à l'aise avec la technologie.",
      a: "C'est exactement pour ça qu'on est là. Tu n'installes rien. Nolan s'occupe de tout. Ton seul outil nouveau : recevoir un message Telegram le soir.",
    },
    {
      q: "Tu as déjà payé pour des outils qui n'ont pas marché.",
      a: "L'audit commence sur ton propre cas — tes vrais appels, tes vrais chantiers. Tu vois avant de signer.",
    },
    {
      q: "Et si ça tombe en panne ?",
      a: "Tu écris à Nolan. Réponse sous 4 h en semaine (pack Pilote). Chaque mois, un point pour anticiper les blocages.",
    },
    {
      q: "C'est quoi le vrai prix ?",
      a: "Frais de mise en place unique + mensuel fixe. Aucun coût caché. Tu peux arrêter — Nolan t'explique comment récupérer tes données.",
    },
    {
      q: "Mes données sont en sécurité ?",
      a: `${SOVEREIGNTY_TRUST_LINE}. Mistral (Paris) et automatisations en UE. Tes devis et contacts : toi et Nolan uniquement.`,
    },
    {
      q: "Tu travailles seul, sans secrétaire — est-ce fait pour toi ?",
      a: "C'est exactement pour ça que c'est conçu. AutomateX remplace ce que ferait une secrétaire — répondre aux appels, envoyer les devis, relancer les clients. Sans embauche, sans formation, sans charges. Et Nolan est là si quelque chose coince.",
    },
    {
      q: "Nolan a 19 ans — est-ce suffisamment sérieux ?",
      a: "Juste : Nolan a 19 ans. Ce qu'il a aussi, c'est un SIRET (103 208 054 00017), une adresse à Flers, un système testé sur des scénarios réels.",
    },
    {
      q: "Et si tu as un problème un vendredi soir ?",
      a: "Pack Pilote : réponse sous 4 h en semaine. Déclic et Système : réponse le jour ouvré suivant. Dans tous les cas : tu n'es jamais seul.",
    },
  ],
} as const;

export const BTP_BETA = {
  title: "Phase de lancement dans l'Orne",
  body: "AutomateX onboard au rythme humain pour garder un suivi serré. Pas de faux avis — Nolan préfère des clients bien accompagnés qu'une vitrine pleine de logos.",
} as const;

export const BTP_DECLIC_HINT =
  "Beaucoup d'artisans solo commencent par Déclic — détails et tarifs sur la grille ci-dessous." as const;

export const BTP_CONTACT = {
  h2: "Prêt à voir ce que ça change sur tes chantiers ?",
  sub: "Nolan t'appelle sous 24 h. 30 minutes. Il te montre sur tes propres chantiers ce que le système ferait.",
  cta: PRIMARY_DEMO_CTA,
  foot: "Audit gratuit · Sans engagement · Basé à Flers, Orne",
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
  h1: "Tu n'es jamais seul avec ton système.",
  sub:
    "L'accompagnement est inclus dans chaque formule — pas en option. Les grilles diagnostiqueurs et artisans sont transparentes ; si tu veux moins ou plus que les packs affichés, Nolan part sur une formule sur mesure (prix sur devis après 30 min de cadrage).",
  monthlyIntro:
    "Chaque mois, Nolan t'appelle. 20 minutes : devis partis, relances, ce qui bloque encore. Puis il ajuste — sans rendez-vous supplémentaire.",
  timelineHorizontal: [
    { month: "Mois 1", text: "Installation · premier point · premiers ajustements" },
    { month: "Mois 2", text: "Le système tourne · Nolan ajuste avec tes retours terrain" },
    { month: "Mois 3", text: "Tu n'y penses plus · rapport automatique" },
    { month: "Mois 6", text: "Bilan semestriel · nouveaux automatismes si besoin" },
    { month: "Mois 12", text: "Bilan ensemble · renouveler ou non — ton choix" },
  ],
  roi: {
    h2: "Ce qu’on vise sur 12 mois",
    body: "Moins de temps perdu sur l’admin le soir, des réponses plus rapides quand tu es sur le chantier, des relances qui ne dépendent plus de ta mémoire. Pas de promesse de chiffre : Nolan part de ton audit et ajuste mois après mois.",
  },
  sections: [
    {
      h2: "Le point mensuel",
      body: "Chaque mois, Nolan t'appelle. 20 minutes. Combien de devis partis, ce qui bloque encore. Puis il ajuste.",
    },
    {
      h2: "Les ajustements en continu",
      body: "Nouveau type de client ? Nouvelle zone ? Nolan reconfigure sans surcoût. Exemple : adapter un modèle de devis sous 48 h ouvrées.",
    },
    {
      h2: "La ligne directe",
      body: "06 45 38 42 33 — Nolan Hermand, Flers. Réponse sous 4 h en semaine (Pilote). Sous 24 h (Déclic et Système).",
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
    metaTitle: "Automatisation BTP Orne — devis, appels, relances",
    metaDescription:
      "AutomateX-HUB automatise les devis, les réponses aux appels manqués et les relances clients pour les artisans BTP dans l'Orne (61). Basé à Flers. 390 € à la mise en place, puis 99 €/mois · 990 € / 249 € · 1690 € / 449 €.",
    localHook:
      "De Flers à Alençon, Argentan et les zones artisanales de l'Orne : un interlocuteur local, pas une hotline parisienne.",
    localDetail:
      "Les artisans des bassins de Flers, d'Alençon et d'Argentan partagent les mêmes contraintes : chantier le jour, administratif le soir. AutomateX-HUB est basé à Flers (61100) et intervient dans tout le département.",
    distanceFromFlers: "Siège à Flers — déplacements dans l'Orne",
  },
  {
    path: "/automatisation-artisan-flers",
    city: "Flers",
    h1: "Automatisation pour artisans à Flers — Orne",
    metaTitle: "Automatisation artisan Flers (61) — devis & appels",
    metaDescription:
      "Automatisation pour artisans à Flers : devis depuis note vocale, SMS appels manqués, relances clients. Nolan à Flers (61100). 390 € à la mise en place, puis 99 €/mois · 990 € / 249 € · 1690 € / 449 €.",
    localHook: "Siège à Saint-Georges-des-Groseillers — Nolan intervient sur Flers et l'agglo en 20 minutes.",
    localDetail:
      "Les artisans de la zone industrielle des Provinces, du centre-ville de Flers et de l'agglo : devis le soir, appels manqués en journée — le système répond pendant que tu es sur le chantier.",
    distanceFromFlers: "Nolan est à Flers — même commune",
  },
  {
    path: "/automatisation-artisan-alencon",
    city: "Alençon",
    h1: "Automatisation pour artisans à Alençon",
    metaTitle: "Automatisation artisan Alençon (61) — devis automatiques",
    metaDescription:
      "Automatisation pour artisans à Alençon : appels manqués, devis vocaux, relances. Nolan à Flers, 35 min. 390 € à la mise en place, puis 99 €/mois · 990 € / 249 € · 1690 € / 449 €.",
    localHook: "Artisans du quartier Saint-Léonard et de la zone d'activités : même numéro, même suivi.",
    localDetail:
      "Les artisans du quartier Saint-Léonard, de la zone des Fourches et des chantiers périphériques d'Alençon : un prestataire à Flers, à 35 minutes, pas une hotline parisienne.",
    distanceFromFlers: "Flers est à environ 35 minutes d'Alençon",
  },
  {
    path: "/automatisation-artisan-argentan",
    city: "Argentan",
    h1: "Automatisation pour artisans à Argentan",
    metaTitle: "Automatisation artisan Argentan (61) — appels & devis",
    metaDescription:
      "Automatisation pour artisans à Argentan et zone Ar'Nor : devis, relances, SMS appels manqués. Basé à Flers. 390 € à la mise en place, puis 99 €/mois · 990 € / 249 € · 1690 € / 449 €.",
    localHook: "Zone Ar'Nor et centre-ville d'Argentan : prestataire basé à Flers, à 35 minutes.",
    localDetail:
      "Les artisans de la zone Ar'Nor et du centre-ville d'Argentan : Nolan Hermand installe et suit le système depuis Flers, avec le même numéro direct.",
    distanceFromFlers: "Flers est à environ 35 minutes d'Argentan",
  },
];
