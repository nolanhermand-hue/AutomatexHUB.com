export type LiveDemoVariant = "immobilier" | "btp-appel" | "btp-devis";

export type LiveDemoStep = {
  time: string;
  label: string;
  icon: string;
  message: string;
  color: string;
  badge: string;
  badgeClass: string;
};

export type LiveDemoConfig = {
  title: string;
  steps: LiveDemoStep[];
  note: string;
};

const badgeOrange = "bg-primary/20 text-primary";
const badgeGreen = "bg-[#38a169]/20 text-[#38a169]";
const badgeRed = "bg-[#e53e3e]/20 text-[#e53e3e]";
const badgeMuted = "bg-[#2a2a2a] text-[rgba(245,244,241,0.55)]";

export const LIVE_DEMOS: Record<LiveDemoVariant, LiveDemoConfig> = {
  immobilier: {
    title: "Ce qui se passe quand un client arrive à 22h",
    note: "Simulation basée sur une configuration type mandataire IAD/SAFTI en Normandie.",
    steps: [
      {
        time: "22h03",
        label: "Nouvelle demande entrant · SeLoger",
        icon: "📩",
        message:
          "M. Martin, 3 pièces Flers, budget 180 000 €\nTéléphone : 06 XX XX XX XX",
        color: "border-primary",
        badge: "Demande entrante",
        badgeClass: badgeOrange,
      },
      {
        time: "22h03",
        label: "Traitement automatique",
        icon: "⚡",
        message: "Détection · Qualification · Rédaction de la réponse…",
        color: "border-[#2a2a2a]",
        badge: "< 90 secondes",
        badgeClass: badgeMuted,
      },
      {
        time: "22h04",
        label: "Mail envoyé automatiquement · Gmail",
        icon: "✉️",
        message: `Bonjour M. Martin,

Merci pour votre message. J'ai bien noté votre demande pour un 3 pièces à Flers dans votre budget.

Je suis actuellement en visite — je vous rappelle demain matin avant 9h.

Cordialement,
[Votre prénom]
Mandataire IAD · Orne`,
        color: "border-[#38a169]",
        badge: "Mail envoyé",
        badgeClass: badgeGreen,
      },
      {
        time: "22h04",
        label: "Notification · Telegram",
        icon: "📲",
        message:
          "✅ client traité : M. Martin (3P Flers, 180k)\nRéponse envoyée · Rappel : demain avant 9h\n\nVous pouvez continuer votre visite.",
        color: "border-[#2a2a2a]",
        badge: "Telegram",
        badgeClass: badgeMuted,
      },
    ],
  },
  "btp-appel": {
    title: "Ce qui se passe quand vous ne pouvez pas décrocher",
    note: "Simulation basée sur une configuration type artisan BTP solo dans l'Orne.",
    steps: [
      {
        time: "10h17",
        label: "Appel manqué — vous êtes sur le chantier",
        icon: "📞",
        message: "Appel manqué\n+33 6 XX XX XX XX",
        color: "border-[#e53e3e]",
        badge: "Appel manqué",
        badgeClass: badgeRed,
      },
      {
        time: "10h18",
        label: "Détection et réponse automatique",
        icon: "⚡",
        message: "Numéro détecté · SMS de rappel en cours…",
        color: "border-[#2a2a2a]",
        badge: "< 90 secondes",
        badgeClass: badgeMuted,
      },
      {
        time: "10h18",
        label: "SMS envoyé au client",
        icon: "💬",
        message: `Bonjour, c'est [Prénom], artisan à Flers.

J'ai bien reçu votre appel. Je suis sur un chantier — je vous rappelle avant 18h.

[Prénom] · [Téléphone]`,
        color: "border-[#38a169]",
        badge: "SMS envoyé",
        badgeClass: badgeGreen,
      },
      {
        time: "18h00",
        label: "Résumé de fin de journée · Telegram",
        icon: "📲",
        message:
          "📊 Résumé · Mercredi\n\n✅ 2 appels manqués traités\n✅ 1 devis envoyé (Dupont · 2 400 €)\n⏳ 1 rappel en attente\n\nBonne soirée.",
        color: "border-[#2a2a2a]",
        badge: "18h · Telegram",
        badgeClass: badgeMuted,
      },
    ],
  },
  "btp-devis": {
    title: "De la note vocale au devis envoyé — 4 minutes",
    note: "Simulation. Le template devis est personnalisé lors de l'onboarding avec vos tarifs.",
    steps: [
      {
        time: "17h34",
        label: "Note vocale en sortant du chantier",
        icon: "🎤",
        message:
          '🎙️ Note vocale (1 min 47s)\n\n"Dupont · pose carrelage 40m² · salle de bain · colle incluse · 2 jours de pose · joint époxy"',
        color: "border-primary",
        badge: "Note vocale",
        badgeClass: badgeOrange,
      },
      {
        time: "17h35",
        label: "Transcription et génération du devis",
        icon: "⚡",
        message: "Transcription · structuration · mise en page PDF…",
        color: "border-[#2a2a2a]",
        badge: "< 2 minutes",
        badgeClass: badgeMuted,
      },
      {
        time: "17h37",
        label: "Devis PDF envoyé · Gmail",
        icon: "📄",
        message: `Objet : Devis pose carrelage

Poste carrelage 40m² ......... 1 600 €
Joint époxy ...................... 240 €
Pose (2 j) ....................... 560 €
────────────────────
Total HT ........................ 2 400 €
Total TTC ...................... 2 880 €`,
        color: "border-[#38a169]",
        badge: "Devis envoyé",
        badgeClass: badgeGreen,
      },
      {
        time: "17h52",
        label: "Réponse du client",
        icon: "✅",
        message: "Bonjour, devis reçu, c'est parfait.\nOn peut démarrer lundi prochain ?",
        color: "border-[#38a169]",
        badge: "Accepté",
        badgeClass: badgeGreen,
      },
    ],
  },
};
