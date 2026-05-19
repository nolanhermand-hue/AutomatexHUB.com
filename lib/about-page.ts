import { NAP } from "@/lib/constants";

/** Faits bruts citables (GEO, extraits structurés) — page À propos. */
export const ABOUT_PAGE = {
  metaTitle: "À propos d'Automatex — fondateur, méthode, RGPD",
  metaDescription:
    "Automatex : fondé en 2025 à Flers (61100). Nolan Hermand, mandataires Normandie. Orchestration privée, hébergement OVHcloud France, RGPD.",
  h1: "À propos d'Automatex",
  facts: [
    { label: "Raison sociale / marque", value: NAP.brand },
    { label: "Fondateur", value: `${NAP.founder}, ${NAP.role}` },
    { label: "Date de fondation", value: "2025" },
    { label: "Siège opérationnel", value: `${NAP.city}, ${NAP.postalCode}, ${NAP.region}, France` },
    { label: "Effectif", value: "1 personne (fondateur + prestataires ponctuels)" },
    { label: "Activité", value: "Configuration d'automatisation administrative pour mandataires immobiliers indépendants" },
    { label: "Méthode technique", value: "Orchestration privée (n8n) sur infrastructure dédiée, sans catalogue générique partagé entre clients" },
    { label: "Hébergement des données", value: NAP.hostingProvider },
    { label: "Distribution du site", value: "Netlify (CDN) + export statique Next.js" },
    { label: "Conservation des données", value: "Durée limitée au mandat de traitement ; suppression sur demande sous 30 jours" },
    { label: "Contact", value: `${NAP.email} · ${NAP.phoneDisplay}` },
  ],
  narrative: [
    "Automatex est né d'observations terrain auprès de mandataires en Orne : leads non rappelés à temps, boîtes mail saturées, pièces éparpillées avant compromis.",
    "Le fondateur, Nolan Hermand, configure chaque installation manuellement depuis Flers. Les scénarios couvrent la réponse aux portails (SeLoger, Leboncoin), le tri des demandes et, sur les formules avancées, le classement documentaire.",
    "Engagement commercial : 30 jours satisfait ou remboursé sur les offres publiées ; onboardings limités à quatre par mois pour maintenir la qualité de suivi.",
  ],
} as const;
