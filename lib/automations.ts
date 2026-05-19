export type AutomationCategoryId =
  | "leads"
  | "daily"
  | "docs"
  | "clients"
  | "reporting"
  | "terrain"
  | "custom";

export type AutomationCategory = {
  id: AutomationCategoryId;
  label: string;
  /** Token couleur badge (classe Tailwind) */
  badgeClass: string;
};

export const AUTOMATION_CATEGORIES: AutomationCategory[] = [
  { id: "leads", label: "Leads & réactivité", badgeClass: "bg-cta/25 text-accent border-cta/40" },
  { id: "daily", label: "Organisation quotidienne", badgeClass: "bg-primary/30 text-text border-primary/50" },
  { id: "docs", label: "Documents & fichiers", badgeClass: "bg-accent/15 text-muted border-accent/40" },
  { id: "clients", label: "Suivi clients & prospects", badgeClass: "bg-section text-muted border-primary/40" },
  { id: "reporting", label: "Reporting & pilotage", badgeClass: "bg-primary/20 text-text border-cta/30" },
  { id: "terrain", label: "Gain de temps terrain", badgeClass: "bg-cta/15 text-accent border-accent/50" },
  { id: "custom", label: "Sur mesure", badgeClass: "bg-muted/10 text-muted border-muted/40" },
];

export type AutomationItem = {
  id: string;
  categoryId: AutomationCategoryId;
  title: string;
  description: string;
  iconId: AutomationIconId;
};

export type AutomationIconId =
  | "bolt"
  | "bell"
  | "mail"
  | "calendar"
  | "folder"
  | "users"
  | "chart"
  | "mic"
  | "spark";

export const AUTOMATIONS: AutomationItem[] = [
  { id: "a01", categoryId: "leads", iconId: "bolt", title: "Réponse en 90 secondes", description: "Mail personnalisé avec prénom dès qu’un lead entre pendant votre visite." },
  { id: "a02", categoryId: "leads", iconId: "bell", title: "Notification téléphone instantanée", description: "Vous êtes prévenu à chaque nouveau lead classé urgent." },
  { id: "a03", categoryId: "leads", iconId: "mail", title: "Relance J+1 sans réponse", description: "Message de relance si le lead ne répond pas sous vingt-quatre heures." },
  { id: "a04", categoryId: "leads", iconId: "users", title: "Détection des leads chauds", description: "Plusieurs mails du même contact : priorité remontée en tête de liste." },
  { id: "a05", categoryId: "leads", iconId: "folder", title: "Entrées SeLoger + LBC + PAP", description: "Agrégation des annonces dans un flux unique à traiter." },
  { id: "a06", categoryId: "daily", iconId: "calendar", title: "Programme du matin 7h30", description: "Rendez-vous du jour et rappels de leads à joindre avant 10h." },
  { id: "a07", categoryId: "daily", iconId: "mail", title: "Résumé du soir à 19h", description: "Offres, relances et urgences synthétisées sur le téléphone." },
  { id: "a08", categoryId: "daily", iconId: "folder", title: "Tri en sept familles", description: "Boîte mail rangée selon les catégories validées avec vous." },
  { id: "a09", categoryId: "daily", iconId: "spark", title: "Brouillons pour mails récurrents", description: "Réponses types prêtes pour mandats, estimations, demandes de pièces." },
  { id: "a10", categoryId: "daily", iconId: "bell", title: "Alerte mail urgent non lu", description: "Relance si « offre », « compromis » ou « urgent » reste sans lecture deux heures." },
  { id: "a11", categoryId: "docs", iconId: "folder", title: "Classement Drive automatique", description: "Pièces reçues par mail renommées et rangées par dossier." },
  { id: "a12", categoryId: "docs", iconId: "bolt", title: "Diagnostics manquants", description: "Liste des pièces absentes avant compromis pour chaque vente." },
  { id: "a13", categoryId: "docs", iconId: "spark", title: "Données clés du mandat", description: "Extraction structurée à partir d’un mandat reçu en pièce jointe." },
  { id: "a14", categoryId: "docs", iconId: "chart", title: "Archivage dossiers dormants", description: "Dossiers sans activité depuis six mois déplacés vers l’archive." },
  { id: "a15", categoryId: "docs", iconId: "users", title: "Récap dossier en un clic", description: "Liste des pièces disponibles et manquantes pour une annonce." },
  { id: "a16", categoryId: "clients", iconId: "mail", title: "Relance après visite", description: "Séquence J+2, J+7 et J+30 pour les acquéreurs en recherche." },
  { id: "a17", categoryId: "clients", iconId: "calendar", title: "Anniversaires de signature", description: "Rappel pour contacter les vendeurs à date annuelle." },
  { id: "a18", categoryId: "clients", iconId: "bell", title: "Avis de valeur sans retour", description: "Relance automatique le troisième jour si aucune réponse." },
  { id: "a19", categoryId: "clients", iconId: "users", title: "Silence acheteur", description: "Alerte lorsqu’un contact ne répond plus depuis X jours." },
  { id: "a20", categoryId: "clients", iconId: "chart", title: "Synthèse pipeline hebdo", description: "Prospects actifs, visites prévues et relances en retard." },
  { id: "a21", categoryId: "reporting", iconId: "chart", title: "Rapport mensuel", description: "Ventes signées, leads entrants, délai moyen de réponse." },
  { id: "a22", categoryId: "reporting", iconId: "bell", title: "Tableau Telegram temps réel", description: "Indicateurs mis à jour lors des événements marquants." },
  { id: "a23", categoryId: "reporting", iconId: "bolt", title: "Alerte sous-objectif", description: "Notification si le cumul du mois passe sous le seuil défini." },
  { id: "a24", categoryId: "reporting", iconId: "folder", title: "Compteur de piges", description: "Bilan hebdomadaire des fiches traitées." },
  { id: "a25", categoryId: "reporting", iconId: "spark", title: "Export Google Sheets", description: "Envoi automatique des chiffres clés chaque lundi matin." },
  { id: "a26", categoryId: "terrain", iconId: "mic", title: "Note vocale → compte-rendu", description: "Après visite, résumé structuré envoyé au vendeur par mail." },
  { id: "a27", categoryId: "terrain", iconId: "calendar", title: "Dictée vers agenda", description: "Créneaux et rappels ajoutés dans Google Calendar sans saisie." },
  { id: "a28", categoryId: "terrain", iconId: "users", title: "Carte de visite → contact", description: "Photo OCR : fiche contact créée dans votre espace mail." },
  { id: "a29", categoryId: "terrain", iconId: "mail", title: "Messages vocaux WhatsApp", description: "Transcription texte et rangée dans le dossier prospect." },
  { id: "a30", categoryId: "terrain", iconId: "folder", title: "Résumé PDF diagnostic", description: "Cinq points saillants extraits d’un diagnostic technique reçu." },
  { id: "a31", categoryId: "custom", iconId: "spark", title: "Tâche répétée trois fois / semaine", description: "Tout ce que vous refaites à la main est candidat à un scénario dédié." },
  { id: "a32", categoryId: "custom", iconId: "bolt", title: "Connexion Gmail · Calendar · Drive · Telegram", description: "Les outils que vous utilisez déjà, reliés sans changer vos habitudes." },
];

export function getCategoryById(id: AutomationCategoryId): AutomationCategory | undefined {
  return AUTOMATION_CATEGORIES.find((c) => c.id === id);
}
