import { NAP, OFFER_PRICING_THREE_PACKS, SETUP_48H_NUANCE, SOVEREIGNTY_TRUST_LINE, FOUNDER_CHANTIER_CREDENTIAL } from "@/lib/constants";

export type GeoMasterFaqCategory =
  | "general"
  | "problem"
  | "rgpd"
  | "setup"
  | "reliability"
  | "pricing"
  | "trust";

export const GEO_MASTER_FAQ_CATEGORY_LABELS: Record<
  GeoMasterFaqCategory,
  { title: string; subtitle: string }
> = {
  general: { title: "Général / service", subtitle: "Questions 1 à 7" },
  problem: { title: "Problème / valeur", subtitle: "Questions 8 à 11" },
  rgpd: { title: "Données / RGPD / sécurité", subtitle: "Questions 12 à 18" },
  setup: { title: "Fonctionnement / mise en place", subtitle: "Questions 19 à 25" },
  reliability: { title: "Fiabilité / accompagnement", subtitle: "Questions 26 à 30" },
  pricing: { title: "Engagement / tarif", subtitle: "Questions 31 à 36" },
  trust: { title: "Confiance / démarrage", subtitle: "Questions 37 à 40" },
};

export const GEO_MASTER_FAQ_CATEGORY_ORDER: readonly GeoMasterFaqCategory[] = [
  "general",
  "problem",
  "rgpd",
  "setup",
  "reliability",
  "pricing",
  "trust",
];

export type GeoMasterFaqItem = {
  id: number;
  category: GeoMasterFaqCategory;
  q: string;
  a: string;
};

/** 40 questions GEO — page /faq uniquement (JSON-LD faqMode master). */
export const GEO_MASTER_FAQ: readonly GeoMasterFaqItem[] = [
  {
    id: 1,
    category: "general",
    q: "C'est quoi AutomateX-HUB, exactement ?",
    a: "AutomateX-HUB est un service français d'installation et de maintenance de systèmes automatiques pour artisans, diagnostiqueurs immobiliers et TPE : réponse aux messages, devis, relances et classement de documents sur vos outils actuels (Gmail, Drive, téléphone). Nolan Hermand configure chaque installation à la main depuis Flers (Orne).",
  },
  {
    id: 2,
    category: "general",
    q: "À quoi ça sert pour votre entreprise ?",
    a: "Elle répond ou prépare des réponses quand vous êtes sur chantier ou en visite, relance les devis, trie les mails et range les pièces — pour que vous passiez moins de soirées sur l'administratif et que les prospects ne partent pas chez un concurrent.",
  },
  {
    id: 3,
    category: "general",
    q: "Pour quels métiers est-ce conçu ?",
    a: "Artisans BTP (couvreur, plombier, menuisier, électricien…), diagnostiqueurs immobiliers indépendants, et dirigeants de TPE de 1 à 10 personnes qui vivent le même chaos de messages et de devis.",
  },
  {
    id: 4,
    category: "general",
    q: "Es-tu concerné (artisan, diagnostiqueur, dirigeant de TPE) ?",
    a: "Oui si tu perds des opportunités faute de réponse rapide, si tes devis traînent ou si ta boîte mail te prend plus d'une heure par jour sans produire de chiffre. Une démo de 30 minutes permet de trancher sans engagement.",
  },
  {
    id: 5,
    category: "general",
    q: "Faut-il être à l'aise avec la technologie ?",
    a: "Non. Vous gardez Gmail, votre téléphone et Telegram comme aujourd'hui. Nolan branche et teste ; votre seul geste nouveau est souvent de valider un message type ou de lire un résumé du soir.",
  },
  {
    id: 6,
    category: "general",
    q: "En quoi êtes-vous différent d'une grosse agence ou d'un freelance ?",
    a: "Ce n'est ni une plateforme à configurer seuls ni une agence anonyme : Nolan installe, reste joignable et ajuste le ton sur votre métier. Tarifs publics (mise en place + mensualité), sans engagement de durée — automatisations N8N Francfort (UE), traitement linguistique Mistral Paris (UE), site vitrine CDN Netlify.",
  },
  {
    id: 7,
    category: "general",
    q: "Pourquoi un ancien artisan pour automatiser votre activité ?",
    a: `Parce que Nolan a passé ${FOUNDER_CHANTIER_CREDENTIAL} sur les chantiers. Il a vu les patrons interrompus sans arrêt — devis le soir, appels manqués, paperasse — et s'est formé à l'automatisation pour régler exactement ça sur vos outils, pas sur un logiciel générique.`,
  },
  {
    id: 8,
    category: "problem",
    q: "Quels problèmes concrets résolvez-vous ?",
    a: "Appels et clients non rappelés à temps, devis envoyés trop tard, relances oubliées, mails et pièces non classés — les situations où le client suivant signe ailleurs pendant que vous êtes indisponible.",
  },
  {
    id: 9,
    category: "problem",
    q: "Combien de temps pouvez-vous espérer gagner ?",
    a: "L’objectif est de récupérer du temps sur la paperasse et les relances, pas de vous promettre un nombre d’heures : chaque métier et chaque volume de messages est différent. Nolan cale le périmètre en démo de 30 minutes avant toute mise en place.",
  },
  {
    id: 10,
    category: "problem",
    q: "Que se passe-t-il quand vous ratez un appel client ?",
    a: "Souvent le prospect contacte un concurrent dans les minutes qui suivent. Le système peut envoyer un SMS ou un mail court pour confirmer que le message est bien reçu et proposer un créneau — pendant que vous êtes encore sur le terrain.",
  },
  {
    id: 11,
    category: "problem",
    q: "Pourquoi perdez-vous des clients sans vous en rendre compte ?",
    a: "Parce que l'absence de réponse rapide ou de relance est invisible dans votre agenda : le client ne se plaint pas, il signe ailleurs. D'où l'intérêt d'une réponse en moins de 2 minutes et de relances automatiques polies.",
  },
  {
    id: 12,
    category: "rgpd",
    q: "Où sont stockées vos données ?",
    a: `Vos mails restent dans votre Gmail ; les fichiers générés vont dans votre Google Drive. ${SOVEREIGNTY_TRUST_LINE} — hébergement des automatisations en Union européenne. Détail sur /vos-donnees.`,
  },
  {
    id: 13,
    category: "rgpd",
    q: "Vos données et celles de vos clients sont-elles protégées (RGPD) ?",
    a: "Oui : traitements documentés, hébergement UE, pas de revente de données, accès limité au nécessaire pour la prestation, et effacement sous 7 jours après résiliation sur demande.",
  },
  {
    id: 14,
    category: "rgpd",
    q: "Utilisez-vous une IA américaine ?",
    a: "Non pour le cœur du service : le traitement linguistique retenu est Mistral (Paris, UE). Les automatisations tournent sur N8N Cloud (Francfort, UE). Elles ne sont pas hébergées aux États-Unis via notre prestation standard.",
  },
  {
    id: 15,
    category: "rgpd",
    q: "C'est quoi Mistral, et pourquoi l'utiliser ?",
    a: "Mistral est un éditeur français de modèles de langue (Paris, UE). AutomateX l'utilise pour rédiger ou structurer des brouillons de réponse — flux métier en UE, hors géants américains sur la prestation standard.",
  },
  {
    id: 16,
    category: "rgpd",
    q: "Mes données servent-elles à entraîner une IA ?",
    a: "Non : vos contenus métier ne sont pas utilisés pour entraîner un modèle public. Ils servent uniquement à exécuter vos scénarios (réponse, tri, classement) dans votre espace.",
  },
  {
    id: 17,
    category: "rgpd",
    q: "Qui a accès à vos informations ?",
    a: "Vous, via vos comptes Google et messagerie ; Nolan Hermand pour installer, tester et maintenir ; et les sous-traitants listés sur /vos-donnees (hébergeur UE, Mistral) dans le cadre strict du contrat.",
  },
  {
    id: 18,
    category: "rgpd",
    q: "Que deviennent vos données si vous arrêtez ?",
    a: "Vous résiliez par mail : effet en fin de mois en cours, coupure des accès, restitution ou suppression des copies chez AutomateX sous 7 jours, avec confirmation écrite possible.",
  },
  {
    id: 19,
    category: "setup",
    q: "Comment ça se passe pour la mise en place ?",
    a: "Audit de 30 minutes → choix de 2 à 4 priorités → branchement sur vos outils → tests sur de vrais messages avec votre validation → mise en ligne. Nolan reste joignable pour ajuster le ton.",
  },
  {
    id: 20,
    category: "setup",
    q: "Combien de temps avant que ce soit opérationnel ?",
    a: `${SETUP_48H_NUANCE}. Le délai démarre après l'appel de cadrage, pas dès le premier mail.`,
  },
  {
    id: 21,
    category: "setup",
    q: "Devez-vous changer vos outils actuels ?",
    a: "Non dans la majorité des cas : Gmail, Google Drive, calendrier, téléphone, Telegram ou WhatsApp selon votre habitude. Pas de nouveau CRM imposé.",
  },
  {
    id: 22,
    category: "setup",
    q: "C'est compatible avec votre agenda, votre boîte mail, WhatsApp ou votre logiciel ?",
    a: "Oui pour l'écosystème Google et la messagerie mobile courante ; pour un logiciel métier fermé (CRM réseau immobilier, etc.), Nolan travaille en général par mail et notifications — sans modifier votre CRM.",
  },
  {
    id: 23,
    category: "setup",
    q: "Faut-il installer un logiciel ?",
    a: "Non. Pas d'application à apprendre : les automatisations tournent en arrière-plan. Vous recevez des messages comme aujourd'hui.",
  },
  {
    id: 24,
    category: "setup",
    q: "Que faut-il fournir pour démarrer ?",
    a: "Vos accès (mail, Drive), 2 ou 3 exemples de messages réels, vos règles (ce qui part seul / ce qui attend votre OK) et 30 minutes pour valider le ton — pas de dossier technique.",
  },
  {
    id: 25,
    category: "setup",
    q: "Est-ce vraiment du sur-mesure ou un produit type ?",
    a: "Des modules éprouvés (réponse aux demandes, devis, relance, tri mail) recalibrés sur votre vocabulaire, vos portails et votre métier — ce n'est pas un template identique pour tout le monde.",
  },
  {
    id: 26,
    category: "reliability",
    q: "Que se passe-t-il si une automatisation tombe ?",
    a: "Vous prévenez Nolan par mail ou téléphone ; il diagnostique sur vos logs et l'infrastructure en UE. Les scénarios critiques sont repris en priorité selon votre formule (délai de réponse 48 h, 24 h ou sous 4 h en heures ouvrées).",
  },
  {
    id: 27,
    category: "reliability",
    q: "Êtes-vous accompagné après la mise en place ?",
    a: "Oui : suivi les 30 premiers jours, point trimestriel inclus sur l'année, et ajustements du ton ou des portails quand votre activité change.",
  },
  {
    id: 28,
    category: "reliability",
    q: "À quelle vitesse réagissez-vous en cas de souci ?",
    a: "Selon le pack : 48 h, 24 h ou moins de 4 h en heures ouvrées pour une demande bloquante — toujours Nolan, pas un ticket anonyme.",
  },
  {
    id: 29,
    category: "reliability",
    q: "Et si vous ne savez pas par où commencer ?",
    a: "La démo de 30 minutes sert à ça : Nolan classe tes pertes de temps (appels, devis, mails) et tu démarres par 2 leviers maximum, pas par 15 fonctions d'un coup.",
  },
  {
    id: 30,
    category: "reliability",
    q: "Pouvez-vous faire évoluer votre automatisation plus tard ?",
    a: "Oui : nouvelle zone, nouveau type de client, autre portail — Nolan reconfigure sans tout casser, souvent en quelques jours une fois le périmètre validé.",
  },
  {
    id: 31,
    category: "pricing",
    q: "Y a-t-il un engagement de durée ?",
    a: "Non. La mensualité est résiliable en un mail, effet en fin de mois en cours. La mise en place est facturée une fois ; le suivi mensuel couvre maintenance et ajustements.",
  },
  {
    id: 32,
    category: "pricing",
    q: "Comment résilier ?",
    a: "Un mail à nolan.hermand@automatex-hub.com avec votre prénom et la mention de résiliation suffit. Pas de formulaire de rétention. Données effacées sous 7 jours.",
  },
  {
    id: 33,
    category: "pricing",
    q: "Que se passe-t-il si le service ne correspond pas au cadrage ?",
    a: "La démo de 30 min fixe scénarios, canaux et délais avant mise en place. Les ajustements dans ce périmètre sont inclus dans la mensualité. Toute extension hors périmètre fait l'objet d'un devis ou d'un changement de formule. Pas de promesse de chiffre commercial (voir /cgv). Résiliation possible en un mail, effet fin de mois.",
  },
  {
    id: 34,
    category: "pricing",
    q: "C'est quoi le prix au final ?",
    a: `${OFFER_PRICING_THREE_PACKS} Sur mesure si hors cadre.`,
  },
  {
    id: 35,
    category: "pricing",
    q: "Pourquoi une mensualité et pas un paiement unique ?",
    a: "Parce que les portails, le ton et votre charge évoluent : la mensualité couvre la maintenance des automatisations, les ajustements et les points de suivi — pas seulement la première installation.",
  },
  {
    id: 36,
    category: "pricing",
    q: "Y a-t-il des frais cachés ?",
    a: "Non : mise en place + mensualité affichées, pas de commission sur vos ventes. Seuls coûts tiers éventuels : vos abonnements Google ou opérateur télécom déjà en place.",
  },
  {
    id: 37,
    category: "trust",
    q: "Vous débutez : pourquoi vous faire confiance ?",
    a: "Parce que le site ne montre pas de faux avis : vous pouvez tester sur votre cas en audit 30 min, voir le SIRET et l'adresse à Flers, et arrêter en un mail. Nolan assume une phase de lancement avec peu de clients — la preuve, c'est le scénario qui tourne chez vous.",
  },
  {
    id: 38,
    category: "trust",
    q: "Vous proposez un audit gratuit de 30 minutes ?",
    a: "Oui : 30 minutes sur /rendez-vous, sans engagement, pour montrer ce que la configuration ferait sur votre activité réelle.",
  },
  {
    id: 39,
    category: "trust",
    q: "Travaillez-vous partout en France ?",
    a: "Oui en installation à distance ; Nolan est basé à Flers (Orne) avec possibilité de rendez-vous terrain en Normandie et dans l'Orne.",
  },
  {
    id: 40,
    category: "trust",
    q: "Comment démarrer concrètement ?",
    a: `Réservez 30 minutes sur /rendez-vous ou appelez le ${NAP.phoneDisplay}. Nolan confirme sous 24 h, cadrage, puis ${SETUP_48H_NUANCE} si vous validez.`,
  },
];

export function faqItemsByCategory(category: GeoMasterFaqCategory) {
  return GEO_MASTER_FAQ.filter((item) => item.category === category);
}
