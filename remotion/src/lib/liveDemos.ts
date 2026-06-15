import type { Tone } from "../theme";

export type LiveStep = {
  time: string;
  label: string;
  icon: string;
  message: string;
  tone: Tone;
  badge: string;
};

export type LiveDemo = {
  id: string;
  title: string;
  steps: LiveStep[];
  note: string;
};

/** Fidèle à lib/live-demo.ts (les couleurs hex y sont mappées en tons). */
export const LIVE_DEMOS: Record<string, LiveDemo> = {
  immobilier: {
    id: "immobilier",
    title: "Ce qui se passe quand un client arrive à 22 h",
    note: "Exemple basé sur une configuration type diagnostiqueur indépendant en Normandie.",
    steps: [
      {
        time: "22h03",
        label: "Nouvelle demande agence · Gmail",
        icon: "📩",
        message:
          "Agence Dupont Immo — DPE urgent avant compromis\n12 rue des Tilleuls, Flers · 06 XX XX XX XX",
        tone: "primary",
        badge: "Demande entrante",
      },
      {
        time: "22h03",
        label: "Traitement automatique",
        icon: "⚡",
        message: "Détection · Qualification · Rédaction de la réponse…",
        tone: "muted",
        badge: "< 2 min",
      },
      {
        time: "22h04",
        label: "Mail envoyé automatiquement · Gmail",
        icon: "✉️",
        message:
          "Bonjour,\n\nMerci pour votre demande de DPE à Flers avant compromis.\n\nJe suis en mission sur le terrain — je confirme un créneau demain matin avant 9 h par retour de mail.\n\nCordialement,\n[Votre prénom] · Diagnostiqueur · Orne",
        tone: "success",
        badge: "Mail envoyé",
      },
      {
        time: "22h04",
        label: "Notification · Telegram",
        icon: "📲",
        message:
          "✅ Mission traitée : DPE Flers (agence Dupont)\nRéponse envoyée · Créneau : demain avant 9 h\n\nVous pouvez continuer votre mission.",
        tone: "muted",
        badge: "Telegram",
      },
    ],
  },
  "btp-appel": {
    id: "btp-appel",
    title: "Ce qui se passe quand vous ne pouvez pas décrocher",
    note: "Exemple basé sur une configuration type artisan BTP solo dans l'Orne.",
    steps: [
      {
        time: "10h17",
        label: "Appel manqué — vous êtes sur le chantier",
        icon: "📞",
        message: "Appel manqué\n+33 6 XX XX XX XX",
        tone: "danger",
        badge: "Appel manqué",
      },
      {
        time: "10h18",
        label: "Détection et réponse automatique",
        icon: "⚡",
        message: "Numéro détecté · SMS de rappel en cours…",
        tone: "muted",
        badge: "< 2 min",
      },
      {
        time: "10h18",
        label: "SMS envoyé au client",
        icon: "💬",
        message:
          "Bonjour, c'est [Prénom], artisan à Flers.\n\nJ'ai bien reçu votre appel. Je suis sur un chantier — je vous rappelle avant 18 h.\n\n[Prénom] · [Téléphone]",
        tone: "success",
        badge: "SMS envoyé",
      },
      {
        time: "18h00",
        label: "Résumé de fin de journée · Telegram",
        icon: "📲",
        message:
          "📊 Résumé · Mercredi\n\n✅ 2 appels manqués traités\n✅ 1 devis envoyé (Dupont · 2 400 €)\n⏳ 1 rappel en attente\n\nBonne soirée.",
        tone: "muted",
        badge: "18 h · Telegram",
      },
    ],
  },
  "btp-devis": {
    id: "btp-devis",
    title: "De la note vocale au devis envoyé — 4 minutes",
    note: "Exemple type. Le template devis est personnalisé lors de l'onboarding avec vos tarifs.",
    steps: [
      {
        time: "17h34",
        label: "Note vocale en sortant du chantier",
        icon: "🎤",
        message:
          '🎙️ Note vocale (1 min 47 s)\n\n"Dupont · pose carrelage 40 m² · salle de bain · colle incluse · 2 jours de pose · joint époxy"',
        tone: "primary",
        badge: "Note vocale",
      },
      {
        time: "17h35",
        label: "Transcription et génération du devis",
        icon: "⚡",
        message: "Transcription · structuration · mise en page PDF…",
        tone: "muted",
        badge: "< 2 minutes",
      },
      {
        time: "17h37",
        label: "Devis PDF envoyé · Gmail",
        icon: "📄",
        message:
          "Objet : Devis pose carrelage\n\nPoste carrelage 40 m² ......... 1 600 €\nJoint époxy ...................... 240 €\nPose (2 j) ....................... 560 €\n────────────────────\nTotal HT ........................ 2 400 €\nTotal TTC ...................... 2 880 €",
        tone: "success",
        badge: "Devis envoyé",
      },
      {
        time: "17h52",
        label: "Réponse du client",
        icon: "✅",
        message: "Bonjour, devis reçu, c'est parfait.\nOn peut démarrer lundi prochain ?",
        tone: "success",
        badge: "Accepté",
      },
    ],
  },
};
