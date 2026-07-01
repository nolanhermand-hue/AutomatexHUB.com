/** Tarifs unitaires catalogue (/automatisations) — distinct des packs site-wide. */

export const CATALOG_UNIT_TIERS = [
  { tier: "N1", setup: 390, monthly: 99, label: "1 automatisation" },
  { tier: "N2", setup: 590, monthly: 129, label: "2 automatisations (addition)" },
  { tier: "N3", setup: 890, monthly: 169, label: "3–4 automatisations" },
] as const;

export const CATALOG_CATEGORY_ANSWER: Record<string, string> = {
  "Demandes & réponses":
    "Chaque scénario envoie un premier message personnalisé en moins de 2 minutes quand une demande arrive pendant que vous êtes indisponible.",
  "Mails & tri":
    "Les entrants sont classés selon vos règles maison pour que vous ouvriez la boîte en sachant quoi traiter en premier.",
  "Documents & Drive":
    "Les pièces reçues par mail atterrissent dans le bon dossier Drive sans copier-coller le soir.",
  "Résumés & planning":
    "Vous recevez le soir ce qui s’est passé et le matin les priorités du jour sur votre téléphone.",
  "Relances & suivi":
    "Les devis et dossiers sans réponse déclenchent des relances polies aux dates que vous validez.",
  "Dictée & terrain":
    "Une note vocale après visite devient compte-rendu ou devis structuré sans ressaisie.",
  "Appels & terrain BTP":
    "Un appel manqué sur chantier déclenche un SMS pro en moins de 2 minutes pour rassurer le client.",
  "Suivi & Rapports Métier":
    "Un rapport périodique résume l’activité pour ajuster le ton et les règles avec Nolan.",
};

export const CATALOG_COMPOSITION_INTRO =
  "Tarifs unitaires ci-dessous : chaque scénario du catalogue se facture à part (N1, N2, N3). Les pages immobilier et BTP affichent des packs Déclic / Système / Pilote qui regroupent plusieurs scénarios à prix fixe — souvent plus avantageux que la somme unitaire. 1 scénario ≈ Déclic (390 € + 99 €/mois). 2 scénarios = addition N1. 3 à 4 ≈ Système (990 € + 249 €/mois). 5+ = Pilote ou devis sur mesure.";

export const CATALOG_JSONLD_UNIT_OFFERS = CATALOG_UNIT_TIERS.map(({ tier, setup, monthly, label }) => ({
  name: `Catalogue ${tier} — ${label}`,
  setup,
  monthly,
}));
