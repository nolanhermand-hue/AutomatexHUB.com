import { SOVEREIGNTY_TRUST_LINE } from "@/lib/constants";

/** Grille lisible — remplace le ticker d'abréviations (C05). */
export const IMMOBILIER_DAILY_FEATURES = [
  {
    icon: "⚡",
    title: "Réponse en moins de 2 minutes",
    desc: "Une demande arrive par mail agence ou portail pendant ta visite. La réponse part avant que tu sortes de la maison.",
  },
  {
    icon: "📲",
    title: "Notification immédiate",
    desc: "Chaque message urgent remonte sur votre téléphone. Vous savez en temps réel, sans ouvrir votre boîte mail.",
  },
  {
    icon: "🔁",
    title: "Relance J+1 automatique",
    desc: "Si le prospect n'a pas rappelé le lendemain, une relance part toute seule.",
  },
  {
    icon: "🎯",
    title: "Détection des demandes chaudes",
    desc: "Budget précis, date de visite ou urgence — signalés en priorité.",
  },
  {
    icon: "🌅",
    title: "Programme du matin 7h30",
    desc: "RDV du jour, demandes en attente, relances prioritaires — en une notification Telegram.",
  },
  {
    icon: "🌙",
    title: "Résumé du soir 19h",
    desc: "Ce qui a été traité, ce qui attend votre attention — 10 secondes.",
  },
  {
    icon: "📂",
    title: "Tri en 7 familles",
    desc: "Acheteurs, vendeurs, diagnostics, offres, relances, administratif, divers.",
  },
  {
    icon: "✍️",
    title: "Brouillons prêts à envoyer",
    desc: "Confirmation de visite, relance vendeur, demande de doc — vous relisez et envoyez.",
  },
  {
    icon: "🗂️",
    title: "Classement Drive automatique",
    desc: "Diagnostics, offres, compromis — rangés dans le bon dossier dès réception.",
  },
  {
    icon: "🎙️",
    title: "Note vocale → compte-rendu",
    desc: "(Pack Pilote) Compte-rendu structuré dans Telegram en sortant de visite.",
  },
  {
    icon: "📊",
    title: "Rapport mensuel",
    desc: "clients, réponses, documents classés — avec Nolan pour analyser.",
  },
  {
    icon: "🔒",
    title: SOVEREIGNTY_TRUST_LINE,
    desc: "Mistral (Paris) · automatisations UE · jamais revendu. Registre RGPD sur demande.",
  },
] as const;
