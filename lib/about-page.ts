import { NAP } from "@/lib/constants";

/** Page À propos — version transparente (légal / confiance). */
export const ABOUT_PAGE = {
  metaTitle: "À propos — Automatex · Flers, Normandie",
  metaDescription:
    "Automatex Hub : accompagnement et systèmes pour mandataires immobiliers et artisans BTP en Orne. Conçu à Flers, données OVHcloud France, RGPD.",
  h1: "Construit à Flers, pour les mandataires et artisans de l'Orne",
  facts: [
    { label: "Marque", value: NAP.brand },
    { label: "Éditeur", value: `${NAP.founder} — ${NAP.role}, 19 ans` },
    { label: "Création", value: "2026" },
    { label: "Siège", value: `${NAP.streetAddress}, ${NAP.postalCode} ${NAP.city}` },
    { label: "SIRET", value: NAP.siret },
    { label: "Code APE", value: `${NAP.ape} — ${NAP.apeLabel}` },
    {
      label: "Activité",
      value: "Systèmes automatiques + accompagnement pour mandataires immobiliers et artisans BTP",
    },
    { label: "Hébergement données", value: NAP.hostingProvider },
    { label: "Site", value: "Export statique Next.js · CDN Netlify" },
    { label: "Contact", value: `${NAP.email} · ${NAP.phoneDisplay}` },
  ],
  narrative: [
    "Nolan Hermand a passé des mois à échanger avec des mandataires indépendants et des artisans du BTP dans l'Orne — IAD, SAFTI, Capifrance, plombiers, électriciens, maçons — pour comprendre où leur activité perd du temps et de l'argent.",
    "Le constat revient souvent : les leads ou appels pendant le chantier, les devis qui traînent le soir, les mails qui s'accumulent, les documents introuvables au moment où le client rappelle.",
    "Automatex Hub est né de ce terrain-là, pas d'un pitch générique. Chaque configuration est construite manuellement, testée sur des scénarios réels, puis ajustée chaque mois avec vous.",
    "Si ça ne fonctionne pas pour vous dans les 30 premiers jours, vous êtes remboursé — frais d'installation et premier mois — sans discussion.",
  ],
  stats: [
    { value: "< 2 min", label: "Délai de réponse cible (leads)" },
    { value: "48 h", label: "Mise en place garantie" },
    { value: "30 j", label: "Satisfait ou remboursé" },
  ],
  directContact: "Une question avant de vous lancer ? Appelez :",
} as const;
