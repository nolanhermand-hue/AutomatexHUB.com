export type AutomationStep = {
  from: string;
  to: string;
  icon: string;
  message: string;
  delay?: number;
  type: "in" | "out" | "system" | "result";
};

export type CatalogAutomation = {
  id: string;
  category: string;
  title: string;
  tagline: string;
  target: "immo" | "btp" | "both";
  formula: "declic" | "systeme" | "pilote";
  steps: AutomationStep[];
  impact?: string;
};

export const AUTOMATIONS_CATALOG: CatalogAutomation[] = [
  {
    id: "client-reponse-90s",
    category: "Demandes & réponses",
    title: "Réponse aux demandes en moins de 2 minutes",
    tagline: "Premier mail personnalisé avant la visite suivante.",
    target: "immo",
    formula: "pilote",
    steps: [
      { from: "Portail", to: "AutomateX", icon: "bolt", message: "Nouvelle demande agence — M. Martin, 3P Flers · DPE avant compromis.", type: "in" },
      { from: "AutomateX", to: "Moteur", icon: "spark", message: "Prénom, bien et source extraits pour le template.", type: "system", delay: 5 },
      { from: "Moteur", to: "Outlook", icon: "mail", message: "Envoi à M. Martin : créneaux dispo + lien Calendly (Argentan demain 14h).", type: "out" },
      { from: "AutomateX", to: "CRM", icon: "check", message: "Demande étiquetée « contacté < 2 min ».", type: "result" },
    ],
    impact: "Moins de demandes froides, plus de rendez-vous terrain.",
  },
  {
    id: "client-relance-j1",
    category: "Demandes & réponses",
    title: "Relance J+1 sans réponse",
    tagline: "Si aucun signe de lecture avant demain matin.",
    target: "both",
    formula: "systeme",
    steps: [
      { from: "Mail envoyé", to: "AutomateX", icon: "mail", message: "Aucune ouverture ni clic sous 24 h.", type: "in", delay: 86400 },
      { from: "AutomateX", to: "Moteur", icon: "bell", message: "Brouillon court : rappel bien + question fermée.", type: "system" },
      { from: "Moteur", to: "Boîte", icon: "mail", message: "Relance programmée à 9 h avec sujet différent.", type: "out" },
      { from: "AutomateX", to: "CRM", icon: "flag", message: "Statut « relance J+1 » enregistré.", type: "result" },
    ],
  },
  {
    id: "client-detection-chaud",
    category: "Demandes & réponses",
    title: "Détection client chaud",
    tagline: "Remontée prioritaire quand l’intérêt se confirme.",
    target: "immo",
    formula: "pilote",
    steps: [
      { from: "Web", to: "AutomateX", icon: "users", message: "3e mail du même mail sur une même annonce.", type: "in" },
      { from: "AutomateX", to: "Score", icon: "chart", message: "Score +30 : pré-qualifié à chaud.", type: "system", delay: 2 },
      { from: "AutomateX", to: "Téléphone", icon: "bell", message: "Push + rappel agenda dans 15 min.", type: "out" },
      { from: "AutomateX", to: "Vous", icon: "check", message: "Tâche « appeler tout de suite » créée.", type: "result" },
    ],
    impact: "Les dossiers sérieux sortent du bruit.",
  },
  {
    id: "tri-7-familles",
    category: "Mails & tri",
    title: "Tri « 7 familles »",
    tagline: "Boîte rangée selon vos étiquettes maison.",
    target: "both",
    formula: "systeme",
    steps: [
      { from: "Gmail", to: "AutomateX", icon: "inbox", message: "Entrant non classé analysé par expéditeur et mots-clés.", type: "in" },
      { from: "AutomateX", to: "Labels", icon: "folder", message: "Classement : demandes agences / missions / fournisseurs / urgent…", type: "system", delay: 3 },
      { from: "AutomateX", to: "Boîte", icon: "tag", message: "Étoile + libellé cohérent avec la règle J+0.", type: "result" },
    ],
  },
  {
    id: "brouillons-prets",
    category: "Mails & tri",
    title: "Brouillons pour mails récurrents",
    tagline: "Mandat, estimation, demande de pièces : prêt à valider.",
    target: "both",
    formula: "pilote",
    steps: [
      { from: "Action", to: "AutomateX", icon: "mail", message: "Modèle « demande d’estimation » déclenché.", type: "in" },
      { from: "AutomateX", to: "Moteur", icon: "spark", message: "Champs dossier injectés (adresse, ref, contact).", type: "system" },
      { from: "Moteur", to: "Brouillons", icon: "edit", message: "Brouillon prêt : vous ne corrigez qu’un détail.", type: "out" },
      { from: "AutomateX", to: "Vous", icon: "check", message: "Notification : 1 brouillon à envoyer.", type: "result" },
    ],
  },
  {
    id: "alerte-mail-urgent-2h",
    category: "Mails & tri",
    title: "Alerte mail urgent non lu depuis +2h",
    tagline: "Une offre d'achat est arrivée. Si vous ne l'avez pas ouverte sous 2h, Telegram vous prévient.",
    target: "immo",
    formula: "systeme",
    steps: [
      {
        from: "AutomateX",
        to: "",
        icon: "clock",
        type: "system",
        delay: 8280,
        message:
          "Surveillance : mail de M. Garcia (offre d'achat, 3P Flers · 185 000 €) arrivé à 8h42\nNon ouvert depuis 2h18\n→ Alerte déclenchée",
      },
      {
        from: "Telegram",
        to: "Vous",
        icon: "alert",
        type: "result",
        message:
          "Mail urgent non lu — 2h18\n\nM. Garcia · Offre d'achat\nReçu : 8h42 · Non ouvert\n\n→ Ouvrir Gmail maintenant",
      },
    ],
    impact: "Plus jamais une offre d'achat lue trop tard",
  },
  {
    id: "classement-drive-auto",
    category: "Documents & Drive",
    title: "Classement Drive automatique",
    tagline: "Pièces renommées et rangées par affaire.",
    target: "both",
    formula: "pilote",
    steps: [
      { from: "Mail avec PJ", to: "AutomateX", icon: "paperclip", message: "PDF diagnostics reçu sur Gmail.", type: "in" },
      { from: "AutomateX", to: "Drive", icon: "folder", message: "Dossier `2026-Affaire_Paris-15` ciblé par ref annonce.", type: "system", delay: 5 },
      { from: "AutomateX", to: "Drive", icon: "file", message: "Fichier renommé `dpe_2026-05_renard-flers.pdf` et archivé.", type: "out" },
      { from: "AutomateX", to: "Notion/Sheet", icon: "check", message: "Ligne « pièce reçue » cochée.", type: "result" },
    ],
    impact: "Zéro pièce perdue dans la messagerie.",
  },
  {
    id: "recap-dossier-telegram",
    category: "Documents & Drive",
    title: "Récap dossier complet en un message",
    tagline: 'Avant un rendez-vous notaire, vous tapez "recap Garcia". Tout est résumé sur Telegram en 30 secondes.',
    target: "immo",
    formula: "pilote",
    steps: [
      {
        from: "Vous",
        to: "Telegram",
        icon: "message",
        type: "in",
        message: "recap Garcia",
      },
      {
        from: "AutomateX",
        to: "Telegram",
        icon: "file",
        type: "out",
        delay: 30,
        message:
          "Dossier Garcia — Récap\n\nBien : 3P Flers · 185 000 € · Signé 18/03\nAcquéreur : M. Garcia · Jean · 06XX\nVendeur : Mme Renard · Christine\n\nDocuments :\n✅ Compromis signé\n✅ DPE (D · 195 kWh)\n✅ Diagnostics amiante\n⚠️ Manque : acte de propriété\n\nProchain RDV : notaire 28/05 · 14h",
      },
    ],
    impact: "Préparer un dossier complet en 30 secondes au lieu de 20 minutes",
  },
  {
    id: "programme-matin",
    category: "Résumés & planning",
    title: "Programme du matin 7 h 30",
    tagline: "Visites, rappels et clients prioritaires avant 10 h.",
    target: "both",
    formula: "systeme",
    steps: [
      { from: "Agenda", to: "AutomateX", icon: "calendar", message: "Lecture Google Calendar + CRM du jour.", type: "in" },
      { from: "AutomateX", to: "Synthèse", icon: "spark", message: "Tri : rendez-vous, relances téléphoniques, urgences.", type: "system", delay: 10 },
      { from: "AutomateX", to: "Telegram", icon: "send", message: "Message : 5 lignes actionnables, ordre de passage.", type: "out" },
      { from: "AutomateX", to: "Vous", icon: "check", message: "Brief lu en moins d’une minute.", type: "result" },
    ],
  },
  {
    id: "resume-soir",
    category: "Résumés & planning",
    title: "Résumé du soir 19 h",
    tagline: "Offres, relances et anomalies du jour.",
    target: "both",
    formula: "systeme",
    steps: [
      { from: "CRM + Mail", to: "AutomateX", icon: "inbox", message: "Agrégation activité 8 h–19 h.", type: "in" },
      { from: "AutomateX", to: "Moteur", icon: "chart", message: "Priorisation : 3 sujets max + retard CRM.", type: "system", delay: 15 },
      { from: "AutomateX", to: "Mobile", icon: "phone", message: "Push + mail court « bilan noir sur blanc ».", type: "out" },
      { from: "AutomateX", to: "Vous", icon: "moon", message: "Coup d’œil avant de couper la journée.", type: "result" },
    ],
  },
  {
    id: "rapport-mensuel",
    category: "Suivi & Rapports Métier",
    title: "Rapport mensuel direction",
    tagline: "Ventes signées, clients, délai moyen de réponse.",
    target: "both",
    formula: "pilote",
    steps: [
      { from: "CRM", to: "AutomateX", icon: "database", message: "Export clos / en cours / perdus du mois.", type: "in" },
      { from: "AutomateX", to: "Moteur", icon: "chart", message: "Calcul KPI + comparaison M-1.", type: "system", delay: 60 },
      { from: "AutomateX", to: "Drive", icon: "file", message: "PDF « Mai 2026 – Synthèse » déposé dans Rapports/.", type: "out" },
      { from: "AutomateX", to: "Équipe", icon: "mail", message: "Lien partagé + 3 constats en ligne d’objet.", type: "result" },
    ],
    impact: "Pilotage sans tableur manuel le week-end.",
  },
  {
    id: "silence-acheteur",
    category: "Relances & suivi",
    title: "Silence acheteur",
    tagline: "Alerte quand un contact se coupe depuis X jours.",
    target: "immo",
    formula: "pilote",
    steps: [
      { from: "CRM", to: "AutomateX", icon: "users", message: "Dernière interaction acheteur > J+10.", type: "in" },
      { from: "AutomateX", to: "Règle", icon: "bell", message: "Seuil « silence » = 14 jours paramétrable.", type: "system" },
      { from: "AutomateX", to: "Telegram", icon: "alert", message: "Alerte : fiche Dupont, annonce ref 4521.", type: "out" },
      { from: "AutomateX", to: "CRM", icon: "task", message: "Tâche « rappel téléphone doux » créée.", type: "result" },
    ],
  },
  {
    id: "anniversaire-signature",
    category: "Relances & suivi",
    title: "Rappel anniversaire de dossier vente",
    tagline:
      "Un an après un acte noté chez une agence partenaire, tu reçois un rappel pour reprendre contact et proposer un nouveau diagnostic.",
    target: "immo",
    formula: "pilote",
    steps: [
      {
        from: "AutomateX",
        to: "Telegram · Vous",
        icon: "calendar",
        type: "out",
        message:
          "Anniversaire dossier vente — 1 an\n\nM. & Mme Dupont · Maison Condé-sur-Noireau\nActe : 22/05/2025 · dossier agence ref. 4521\n\nReprendre contact · Demander si revente prévue\nou recommandation à des proches\n\nBrouillon généré dans Gmail →",
      },
    ],
    impact: "Transformer d'anciens acquéreurs en nouvelles demandes agences",
  },
  {
    id: "relance-devis-btp",
    category: "Relances & suivi",
    title: "Relance devis non répondu",
    tagline: "Chantier en attente : séquence J+2 / J+7.",
    target: "btp",
    formula: "pilote",
    steps: [
      { from: "Devis envoyé", to: "AutomateX", icon: "file", message: "Statut « envoyé » sans retour 48 h.", type: "in", delay: 172800 },
      { from: "AutomateX", to: "Moteur", icon: "mail", message: "Mail court : montant + planning équipe maintenu 7 jours.", type: "system" },
      { from: "Moteur", to: "Client", icon: "send", message: "Relance envoyée avec accusé lecture.", type: "out" },
      { from: "AutomateX", to: "Dossiers", icon: "flag", message: "Étape « relance 1 » CRM BTP.", type: "result" },
    ],
  },
  {
    id: "note-vocale-compte-rendu",
    category: "Dictée & terrain",
    title: "Note vocale → compte-rendu",
    tagline: "Après visite, le vendeur reçoit un résumé propre.",
    target: "immo",
    formula: "pilote",
    steps: [
      { from: "Ton micro", to: "AutomateX", icon: "mic", message: "Vocal < 2 min : points forts, objections.", type: "in" },
      { from: "AutomateX", to: "Transcript", icon: "spark", message: "Texte structuré : contexte, synthèse, next step.", type: "system", delay: 30 },
      { from: "AutomateX", to: "Mail", icon: "mail", message: "CR envoyé au vendeur, copie CRM.", type: "out" },
      { from: "AutomateX", to: "Dossier", icon: "check", message: "Pièce jointe automatique sur fiche bien.", type: "result" },
    ],
    impact: "Fins de journée sans ressaisie.",
  },
  {
    id: "note-vocale-devis-btp",
    category: "Dictée & terrain",
    title: "Vocal chantier → ligne de devis",
    tagline: "Quantités et contraintes dictées → brouillon chiffrable.",
    target: "btp",
    formula: "pilote",
    steps: [
      { from: "Terrain", to: "AutomateX", icon: "mic", message: "M2, accès camion, délais fournisseur énoncés.", type: "in" },
      { from: "AutomateX", to: "Parseur", icon: "wrench", message: "Extraction unités + liste risques chantier.", type: "system", delay: 20 },
      { from: "AutomateX", to: "Excel/ERP", icon: "table", message: "Brouillon ligne avec code interne lot.", type: "out" },
      { from: "AutomateX", to: "Conducteur", icon: "check", message: "À valider avant envoi client.", type: "result" },
    ],
  },
  {
    id: "appel-manque-sms-btp",
    category: "Appels & terrain BTP",
    title: "Appel manqué = SMS pro",
    tagline: "Le chef de chantier sait que vous rappelerez.",
    target: "btp",
    formula: "systeme",
    steps: [
      { from: "Standard", to: "AutomateX", icon: "phone", message: "Appel client non décroché (durée 0 s).", type: "in" },
      { from: "AutomateX", to: "Règle", icon: "clock", message: "Attente 2 min pour éviter double envoi.", type: "system", delay: 120 },
      { from: "AutomateX", to: "SMS", icon: "message", message: "SMS : « rappel sous 1 h, réf devis D-442 ».", type: "out" },
      { from: "AutomateX", to: "CRM", icon: "check", message: "Trace horodatée pour le suivi litige.", type: "result" },
    ],
  },
  {
    id: "dictee-agenda",
    category: "Dictée & terrain",
    title: "Dictée vers agenda",
    tagline: "Créneaux et rappels sans toucher le clavier.",
    target: "both",
    formula: "pilote",
    steps: [
      { from: "Vocal", to: "AutomateX", icon: "mic", message: "« Mardi 14 h réunion fourniture + rappel J-1 ».", type: "in" },
      { from: "AutomateX", to: "NLP", icon: "spark", message: "Date/heure normalisées + fuseau Europe/Paris.", type: "system", delay: 8 },
      { from: "AutomateX", to: "Google Cal", icon: "calendar", message: "Événement créé avec invité si mail détecté.", type: "out" },
      { from: "AutomateX", to: "Vous", icon: "bell", message: "Confirmation Telegram « RDV OK ».", type: "result" },
    ],
  },
];

const CATEGORY_ANCHORS: Record<string, string> = {
  "Demandes & réponses": "leads-reponses",
  "Mails & tri": "mails-tri",
  "Documents & Drive": "documents-drive",
  "Résumés & planning": "resumes-planning",
  "Relances & suivi": "relances-suivi",
  "Dictée & terrain": "dictee-terrain",
  "Appels & terrain BTP": "appels-terrain-btp",
  "Suivi & Rapports Métier": "suivi-rapports",
};

export function categoryToAnchor(category: string): string {
  return CATEGORY_ANCHORS[category] ?? category.toLowerCase().replace(/\s+/g, "-");
}

/** Catégorie catalogue — libellé métier (ancre #suivi-rapports). */
export const CATEGORY_SUIVI_RAPPORTS = "Suivi & Rapports Métier" as const;

/** Catégories uniques, ordre d’affichage fixe. */
export const CATEGORIES: string[] = [
  "Demandes & réponses",
  "Mails & tri",
  "Documents & Drive",
  "Résumés & planning",
  "Relances & suivi",
  "Dictée & terrain",
  "Appels & terrain BTP",
  "Suivi & Rapports Métier",
];

export function getByCategory(category: string): CatalogAutomation[] {
  return AUTOMATIONS_CATALOG.filter((item) => item.category === category);
}

export const FEATURED_IMMO: string[] = [
  "client-reponse-90s",
  "tri-7-familles",
  "programme-matin",
  "note-vocale-compte-rendu",
  "resume-soir",
];

export const FEATURED_BTP: string[] = [
  "appel-manque-sms-btp",
  "note-vocale-devis-btp",
  "relance-devis-btp",
  "resume-soir",
  "programme-matin",
];
