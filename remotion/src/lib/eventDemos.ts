import type { Tone } from "../theme";

export type EventLine = {
  text: string;
  /** Petite police mono / secondaire. */
  sub?: boolean;
  tone?: Tone;
};

export type DemoEvent = {
  icon: string;
  tone: Tone;
  lines: EventLine[];
  /** Met en valeur (lueur terracotta) — réservé au résultat. */
  result?: boolean;
  /** Valeur ROI affichée en grand sous l'événement résultat. */
  roi?: string;
};

export type EventDemo = {
  id: string;
  label: string;
  title: string;
  events: DemoEvent[];
};

/** Contenu fidèle aux anciennes démos GSAP (composants demos/*.tsx). */
export const EVENT_DEMOS: Record<string, EventDemo> = {
  "appel-manque": {
    id: "appel-manque",
    label: "BTP · Appel manqué",
    title: "Appel manqué traité en moins de 2 min",
    events: [
      { icon: "📞", tone: "neutral", lines: [{ text: "Appel entrant — Client Dupont" }] },
      {
        icon: "📵",
        tone: "danger",
        lines: [{ text: "Appel manqué — vous êtes sur le chantier", tone: "danger" }],
      },
      {
        icon: "✉️",
        tone: "primary",
        lines: [
          { text: "SMS en moins de 2 min", tone: "primary" },
          {
            text: "Bonjour M. Dupont, j'ai bien reçu votre appel. Je vous rappelle avant 18 h.",
            sub: true,
          },
        ],
      },
      {
        icon: "✅",
        tone: "success",
        result: true,
        lines: [
          { text: "Client rassuré · Rappel planifié", tone: "success" },
          { text: "Résumé Telegram · 18 h", sub: true },
        ],
      },
    ],
  },
  "devis-auto": {
    id: "devis-auto",
    label: "BTP · Devis",
    title: "De la dictée vocale au devis envoyé",
    events: [
      { icon: "🎙️", tone: "neutral", lines: [{ text: "Dictée en sortie de chantier" }] },
      {
        icon: "💬",
        tone: "muted",
        lines: [{ text: "Pose carrelage 40 m², salle de bain, 2 jours…", sub: true }],
      },
      {
        icon: "📄",
        tone: "primary",
        lines: [
          { text: "Devis PDF n°2024-47", tone: "primary" },
          { text: "Total TTC : 3 840 €", sub: true },
        ],
      },
      {
        icon: "📧",
        tone: "neutral",
        lines: [{ text: "Envoyé à m.dupont@gmail.com · 17 h 23" }],
      },
      {
        icon: "✅",
        tone: "success",
        result: true,
        lines: [{ text: "Devis accepté", tone: "success" }],
      },
    ],
  },
  "lead-immobilier": {
    id: "lead-immobilier",
    label: "Immobilier · Lead",
    title: "Lead traité pendant votre mission DPE",
    events: [
      {
        icon: "🏠",
        tone: "neutral",
        lines: [
          { text: "Mission DPE en cours" },
          { text: "Mail agence : DPE urgent avant compromis — Flers", sub: true, tone: "primary" },
        ],
      },
      {
        icon: "⚡",
        tone: "primary",
        lines: [{ text: "Réponse auto en moins de 2 min pendant la mission", tone: "primary" }],
      },
      {
        icon: "💬",
        tone: "neutral",
        lines: [
          {
            text: "Bonjour, je suis en mission sur le terrain. Je confirme un créneau dans 30 minutes.",
            sub: true,
          },
        ],
      },
      {
        icon: "✅",
        tone: "success",
        result: true,
        roi: "~220 € préservés",
        lines: [{ text: "Créneau confirmé · 0 demande perdue", tone: "success" }],
      },
    ],
  },
  "point-mensuel": {
    id: "point-mensuel",
    label: "Accompagnement · J+30",
    title: "Le point mensuel avec Nolan",
    events: [
      { icon: "📅", tone: "neutral", lines: [{ text: "J+30 — Point mensuel Nolan" }] },
      {
        icon: "📊",
        tone: "primary",
        lines: [
          { text: "Rapport Telegram", tone: "primary" },
          { text: "8 appels traités · 12 devis · 14 h récupérées", sub: true },
        ],
      },
      {
        icon: "💬",
        tone: "neutral",
        lines: [{ text: "Nolan : on améliore le template devis cette semaine.", sub: true }],
      },
      {
        icon: "✅",
        tone: "success",
        result: true,
        lines: [{ text: "Système mis à jour — sans que vous ayez demandé", tone: "success" }],
      },
    ],
  },
};
