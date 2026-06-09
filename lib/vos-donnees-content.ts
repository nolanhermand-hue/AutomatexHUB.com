export type InfraStackItem = {
  id: string;
  role: string;
  provider: string;
  location: string;
  flag: string;
  dataType: string;
  rgpd: boolean;
  note: string;
  action?: string;
  certifications?: string[];
  docs?: string;
};

export const VOS_DONNEES_INFRA_STACK: InfraStackItem[] = [
  {
    id: "01",
    role: "Site web & landing pages",
    provider: "Netlify",
    location: "CDN mondial · Données serveur : USA",
    flag: "🌍",
    dataType: "Pages statiques uniquement · Aucune donnée personnelle stockée",
    rgpd: true,
    note: "Le site est un fichier HTML statique. Aucune donnée utilisateur n'est stockée sur Netlify.",
  },
  {
    id: "02",
    role: "Formulaires de contact",
    provider: "Netlify Forms",
    location: "USA (AWS)",
    flag: "🇺🇸",
    dataType: "Prénom · Téléphone · Activité professionnelle",
    rgpd: true,
    note: "Les soumissions de formulaires sont stockées temporairement sur Netlify (USA). Nolan les consulte et les supprime après traitement. Durée de conservation : 30 jours maximum.",
    action: "Migration vers hébergement EU envisagée en 2026",
  },
  {
    id: "03",
    role: "Moteur d'automatisation",
    provider: "N8N Cloud",
    location: "Francfort · Allemagne · Union Européenne",
    flag: "🇩🇪",
    dataType: "Flux de données professionnelles (emails, devis, contacts clients)",
    rgpd: true,
    note: "N8N Cloud héberge les enchaînements en Allemagne (UE). Conforme RGPD. Pas de Cloud Act américain. Données d'exécution non exploitées par N8N.",
    certifications: ["SOC 2 Type II", "ISO 27001"],
    docs: "https://docs.n8n.io/privacy-security/",
  },
  {
    id: "04",
    role: "Intelligence artificielle",
    provider: "Mistral AI",
    location: "Paris · France · Union Européenne",
    flag: "🇫🇷",
    dataType: "Transcriptions vocales · Classification emails · Rédaction automatique",
    rgpd: true,
    note: "Mistral AI est une entreprise française, fondée à Paris. Hébergement en France et Allemagne. Données non utilisées pour entraîner les modèles. Contrats DPA alignés RGPD.",
    docs: "https://mistral.ai/privacy/",
  },
  {
    id: "05",
    role: "Stockage documents (clients Pro+)",
    provider: "Google Drive",
    location: "UE (option régionale) · USA possible",
    flag: "🌍",
    dataType: "Documents professionnels du client (devis, factures, contrats)",
    rgpd: true,
    note: "Google Drive appartient au client — Automatex y accède uniquement pour classer les documents du client. Aucune copie sur les serveurs Automatex. Le client contrôle son Drive.",
  },
];

export const VOS_DONNEES_RIGHTS = [
  {
    right: "Droit d'accès",
    article: "Art. 15 RGPD",
    what: "Obtenir la liste de toutes vos données traitées par Automatex Hub.",
    how: "Un email à nolan.hermand@automatex-hub.com · Réponse sous 30 jours.",
  },
  {
    right: "Droit de rectification",
    article: "Art. 16 RGPD",
    what: "Corriger des données inexactes vous concernant.",
    how: "Un email · Correction sous 72h.",
  },
  {
    right: "Droit à l'effacement",
    article: "Art. 17 RGPD",
    what: "Supprimer toutes vos données de nos systèmes.",
    how: "Un email · Suppression confirmée sous 7 jours · Vous recevez confirmation.",
  },
  {
    right: "Droit à la portabilité",
    article: "Art. 20 RGPD",
    what: "Récupérer vos données dans un format lisible (CSV ou JSON).",
    how: "Un email · Export fourni sous 7 jours.",
  },
  {
    right: "Droit d'opposition",
    article: "Art. 21 RGPD",
    what: "S'opposer au traitement de vos données à tout moment.",
    how: "Un email · Traitement arrêté immédiatement.",
  },
  {
    right: "Droit de résiliation",
    article: "Contrat Automatex",
    what: "Mettre fin au service et récupérer toutes vos données.",
    how: "Un seul email suffit. Aucun délai de préavis. Aucun frais.",
  },
] as const;

export const VOS_DONNEES_NEVER = [
  "Revendre vos données à des tiers",
  "Utiliser vos données pour de la publicité",
  "Partager vos données avec d'autres clients",
  "Entraîner nos modèles IA avec vos données",
  "Stocker des données sensibles (numéros CB, mots de passe, données médicales)",
  "Accéder à vos données sans votre accord explicite",
  "Transférer vos données hors de l'Union Européenne via nos prestations (hors outils que vous choisissez, ex. Gmail)",
] as const;

export const VOS_DONNEES_COLLECTION_ROWS = [
  {
    data: "Prénom · Téléphone",
    why: "Prendre contact pour la démo",
    retention: "Jusqu'à la démo · 30j max",
  },
  {
    data: "Emails professionnels",
    why: "Traitement automatique (tri, réponses)",
    retention: "En transit · Non stockés",
  },
  {
    data: "Contacts clients du client",
    why: "Automatisation relances / réponses",
    retention: "Dans les outils du client (Drive, Gmail)",
  },
  {
    data: "Notes vocales",
    why: "Génération devis / compte-rendu",
    retention: "Traitées · Non stockées · Résultat envoyé",
  },
  {
    data: "Logs des automatisations",
    why: "Débogage et amélioration du service",
    retention: "30 jours · Puis suppression auto N8N",
  },
] as const;

export const VOS_DONNEES_FAQ = [
  {
    q: "Mes emails passent-ils par des serveurs américains ?",
    a: "Non via Automatex. Le traitement est fait par Mistral AI (Paris/Allemagne). L'orchestration est faite par N8N Cloud (Francfort, Allemagne). Vos emails ne transitent pas par les États-Unis via nos prestations. Ils restent dans votre boîte Gmail — Google est américain, c'est un choix que vous avez fait avant Automatex.",
  },
  {
    q: "Nolan peut-il lire mes emails ?",
    a: "Techniquement, Nolan a accès aux enchaînements N8N qui traitent vos emails. Il peut voir les logs d'exécution pendant le débogage. Il s'engage contractuellement à ne pas lire le contenu de vos emails sauf si vous lui demandez explicitement de l'aide pour résoudre un problème.",
  },
  {
    q: "Que se passe-t-il à la résiliation ?",
    a: "Vos enchaînements N8N sont désactivés et supprimés sous 48h. Les logs sont effacés. Vous récupérez tous vos fichiers Drive et Google Calendar intacts — ils ne vous ont jamais appartenu qu'à vous. Automatex ne conserve rien.",
  },
  {
    q: "Mes données de clients (leurs noms, leurs emails) sont-elles partagées ?",
    a: "Non. Les données de vos clients sont traitées dans votre espace N8N dédié, isolé des autres clients Automatex. Nolan ne les voit pas sauf en cas de débogage explicitement demandé. Elles ne sont jamais partagées avec d'autres clients.",
  },
  {
    q: "Mistral apprend-il à partir de mes données ?",
    a: "Non. Mistral AI ne réutilise pas les données envoyées via API pour entraîner ses modèles. C'est garanti contractuellement dans leur Data Processing Agreement (DPA), aligné RGPD.",
  },
  {
    q: "Puis-je exporter toutes mes données avant de partir ?",
    a: "Oui. Sur demande, vous recevez un export de toutes vos données dans les 7 jours : logs d'automatisation, configurations, et tout ce qui vous appartient. Format CSV ou JSON selon votre préférence.",
  },
  {
    q: "Y a-t-il des cookies sur le site ?",
    a: "Le site automatex-hub.com utilise uniquement des cookies techniques nécessaires au fonctionnement (pas de tracking, pas de publicité). Si une solution d'analytics est activée, elle est anonymisée et RGPD-conforme (Plausible ou équivalent sans cookie).",
  },
] as const;

export const VOS_DONNEES_HERO_BADGES = [
  { icon: "🇫🇷", label: "Modèle français · Mistral · Paris" },
  { icon: "🇩🇪", label: "Automatisations · Francfort · UE" },
  { icon: "🔒", label: "RGPD natif" },
  { icon: "🚫", label: "Jamais revendu" },
  { icon: "✋", label: "Vous restez propriétaire" },
] as const;
