/** Copy hub d’entrée — vocabulaire mandataire-safe (pas « automatisation »). */
import { SOVEREIGNTY_TRUST_LINE } from "@/lib/constants";

export const HUB_ENTRY_COPY = {
  eyebrow: "Automatex Hub · Flers, Orne",
  headlineLine1: "Vous perdez du temps sur des tâches",
  headlineLine2: "qui pourraient se faire toutes seules.",
  subline:
    "On les prend en charge. Vous vous concentrez sur votre vrai travail. Et on reste là — chaque mois — pour que ça tourne.",
  badges: [
    SOVEREIGNTY_TRUST_LINE,
    "RGPD",
    "Basé à Flers, Orne",
    "Démo sous 24 h · Pilote : réponse 4 h (sem.)",
  ] as const,
  blockImmobilier: {
    title: "Je suis mandataire immobilier",
    quote:
      "Je perds des clients pendant mes visites. Je ne peux pas rappeler tout le monde.",
    cta: "Voir ma solution",
  },
  blockBtp: {
    title: "Je suis artisan / chef de chantier",
    quote:
      "Mes devis traînent et je perds des chantiers parce que je rappelle trop tard.",
    cta: "Voir ma solution",
  },
  footerNote:
    "Dans les deux cas : démo gratuite 20 min sur votre cas réel. Nolan rappelle sous 24 h.",
  ctaImmobilier: "Démo mandataire — Nolan m'appelle",
  ctaBtp: "Démo artisan — Nolan m'appelle",
  priceHintBtp: "Artisans : démo 20 min · tarifs sur la landing BTP",
} as const;

export const HUB_ACCOMPANIMENT = {
  h2: "On ne vous vend pas un outil. On prend en charge le problème.",
  pillars: [
    {
      title: "Point mensuel inclus",
      body: "Chaque mois, Nolan vous appelle. 20 minutes. On regarde ce qui marche, ce qu'on ajuste. Pas de surprise. Pas de frais cachés.",
    },
    {
      title: "Ajustements en continu",
      body: "Votre activité change ? Le système change avec vous. Sans surcoût. Sans rendez-vous.",
    },
    {
      title: "Un interlocuteur local",
      body: "Nolan est à Flers. 06 45 38 42 33. Pas une hotline. Démo sous 24 h · réponse sous 4 h en semaine (pack Pilote).",
    },
  ],
  linkLabel: "Tout sur l'accompagnement",
} as const;

export const HUB_META = {
  title: "Automatex Hub — Immobilier & artisans BTP en Orne",
  description:
    `Système automatique et accompagnement humain à Flers pour mandataires immobiliers et artisans du BTP en Orne et Normandie. ${SOVEREIGNTY_TRUST_LINE}.`,
} as const;
