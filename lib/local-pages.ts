/** Contenu long-tail SEO — pages mandataires par zone. */
import { SOVEREIGNTY_TRUST_LINE } from "@/lib/constants";

export type LocalMandatairesPageData = {
  slug: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  city: string;
  areaServedLabel: string;
  intro: string;
  sections: ReadonlyArray<{ title: string; paragraphs: ReadonlyArray<string> }>;
};

export const LOCAL_MANDATAIRES_PAGES: ReadonlyArray<LocalMandatairesPageData> = [
  {
    slug: "flers",
    path: "/mandataires-flers",
    metaTitle: "Mandataires immobiliers à Flers (61100) | Automatex",
    metaDescription:
      `Réponse aux leads en 2 min pour mandataires IAD, SAFTI et Capifrance à Flers et dans le bocage ornais. Installé en 48 h. ${SOVEREIGNTY_TRUST_LINE}.`,
    h1: "Automatisation pour mandataires immobiliers à Flers et dans l'Orne",
    city: "Flers",
    areaServedLabel: "Flers, bocage ornais, Suisse normande (61)",
    intro:
      "Flers concentre un marché résidentiel dense : maisons de ville, pavillons en lotissement et biens de caractère vers La Ferté-Macé. Les mandataires y enchaînent visites, estimations et signatures : un lead SeLoger ou Leboncoin qui attend plus de dix minutes part souvent chez un confrère.",
    sections: [
      {
        title: "Typologie de biens autour de Flers",
        paragraphs: [
          "Le parc se partage entre transactions de pavillons (110–220 m²), appartements du centre-ville et maisons de campagne sur les communes périphériques (La Ferté-Macé, Condeau, Domfront). Les acquéreurs sont souvent des familles en mobilité depuis Caen ou l'Île-de-France, sensibles à la réactivité du premier contact.",
          "Les mandataires IAD et SAFTI dominent l'offre indépendante ; Capifrance et Optimhome complètent le paysage. La concurrence sur un même bien se joue parfois en quelques heures : la première réponse structurée fait la différence.",
        ],
      },
      {
        title: "Pourquoi les leads se perdent en visite",
        paragraphs: [
          "Pendant une visite de 45 minutes, trois notifications peuvent arriver : estimation, demande de visite, relance notaire. Sans accroche automatique, le prospect reçoit un silence interprété comme un manque d'intérêt.",
          "Automatex envoie une réponse personnalisée en moins de deux minutes, qualifie le besoin (budget, délai, financement) et vous notifie sur mobile. Vous rappelez avec le contexte déjà posé.",
        ],
      },
      {
        title: "Mise en place depuis Flers",
        paragraphs: [
          `La configuration se fait à distance ou en rendez-vous à Flers (61100). Délai annoncé : 48 heures entre la démo et la première réponse live. ${SOVEREIGNTY_TRUST_LINE} ; aucun compte partagé avec d'autres mandataires.`,
          "Garantie 30 jours satisfait ou remboursé sur les packs Déclic, Système et Pilote. Onboardings limités à quatre par mois pour garder un suivi humain.",
        ],
      },
      {
        title: "Réseaux et outils déjà utilisés",
        paragraphs: [
          "Les mandataires flériens s'appuient sur SeLoger, Leboncoin, les portails réseau (IAD, SAFTI) et souvent Google Agenda + Gmail ou Outlook. Automatex se branche sur votre boîte mail existante : pas de changement d'outil visible pour le client.",
          "Le tri des pièces (mandats, diagnostics, offres) peut être activé sur le pack Système ou Pilote pour éviter les dossiers incomplets avant compromis.",
        ],
      },
    ],
  },
  {
    slug: "alencon",
    path: "/mandataires-alencon",
    metaTitle: "Mandataires immobiliers à Alençon | Automatex Normandie",
    metaDescription:
      "Ne perdez plus de leads à Alençon et dans l'Orne. Réponse immédiate pour mandataires indépendants. Audit 20 min, satisfait ou remboursé 30 jours.",
    h1: "Mandataires immobiliers à Alençon : réponse aux leads pendant vos visites",
    city: "Alençon",
    areaServedLabel: "Alençon, agglomération, Orne (61)",
    intro:
      "Alençon est le pôle administratif et commercial de l'Orne : flux régulier de maisons de ville, programmes neufs en périphérie et biens ruraux vers Sées ou Mortagne. Les mandataires y gèrent un volume de messages supérieur à la moyenne départementale.",
    sections: [
      {
        title: "Marché local et profils d'acheteurs",
        paragraphs: [
          "Le centre historique attire des acquéreurs en quête de pierre et de surfaces modérées ; les lotissements de Semallé ou Saint-Germain-du-Corbéis ciblent les primo-accédants. Les délais de vente restent raisonnables quand le bien est bien exposé et que le premier échange est rapide.",
          "Les réseaux nationaux (IAD, SAFTI, Capifrance) y sont bien représentés ; la différenciation passe par la disponibilité perçue, pas seulement par le mandat exclusif.",
        ],
      },
      {
        title: "Charge administrative réelle",
        paragraphs: [
          "Relances vendeur, pièces manquantes, demandes de visite le samedi : la boîte mail devient un second métier. Automatex classe les demandes entrantes, répond aux leads standards et vous laisse les dossiers à fort enjeu.",
          "Objectif terrain : moins de « je vous rappelle » sans contexte, plus de conversations déjà qualifiées.",
        ],
      },
      {
        title: "Zone desservie depuis Alençon",
        paragraphs: [
          "Service pensé pour l'agglomération alençonnaise et les communes jusqu'à Flers, Argentan et la Suisse normande. Support en français, par téléphone direct avec le fondateur (06 45 38 42 33).",
          "Conformité RGPD : traitement des données en Union européenne, politique de confidentialité publiée, droit d'accès et de suppression sur simple demande.",
        ],
      },
      {
        title: "Tarification claire",
        paragraphs: [
          "Trois formules (99 €, 199 € et 449 € par mois) avec remise annuelle affichée en pourcentage. Un lead récupéré à 3 500 € de commission potentielle rentabilise plusieurs mois de service.",
          "Réservez une audit de 20 minutes depuis cette page ou depuis l'accueil : créneau prioritaire pour les mandataires de l'Orne.",
        ],
      },
    ],
  },
  {
    slug: "argentan",
    path: "/mandataires-argentan",
    metaTitle: "Mandataires à Argentan et Suisse normande | Automatex",
    metaDescription:
      `Leads immobiliers à Argentan : réponse en 2 min, tri des mails, documents classés. Pour mandataires Normandie. ${SOVEREIGNTY_TRUST_LINE}. 30 jours garantis.`,
    h1: "Mandataires immobiliers à Argentan et en Suisse normande",
    city: "Argentan",
    areaServedLabel: "Argentan, Suisse normande, Orne et Calvados limitrophe",
    intro:
      "Argentan relie l'Orne au Calvados : marché mixte entre maisons de bourg, propriétés équestres et résidences secondaires vers les lacs. Les mandataires couvrent un rayon large ; les déplacements multiplient les créneaux sans réseau.",
    sections: [
      {
        title: "Spécificités du secteur Argentan",
        paragraphs: [
          "Biens de caractère et parcelles plus grandes qu'à Flers : les acquéreurs posent plus de questions avant la visite. Une réponse automatique qui reprend le type de bien, le quartier et les créneaux proposés rassure et filtre les curieux.",
          "Saisonnalité modérée : pics au printemps et en septembre, comme sur le reste de la Normandie intérieure.",
        ],
      },
      {
        title: "Concurrence inter-réseaux",
        paragraphs: [
          "Plusieurs mandataires peuvent présenter des biens comparables sur les mêmes portails. Celui qui confirme la prise en charge et propose un créneau précis garde la relation.",
          "Automatex ne remplace pas votre négociation : il verrouille la première impression et vous transmet un résumé actionnable.",
        ],
      },
      {
        title: "Sécurité et souveraineté des données",
        paragraphs: [
          "Flux mail traités sur infrastructure française (OVHcloud). Pas de revente de données, pas d'entraînement de modèle public sur vos conversations clients.",
          "Méthode : orchestration privée (n8n) configurée mandataire par mandataire, pas de catalogue générique « one size fits all ».",
        ],
      },
      {
        title: "Passer à l'action",
        paragraphs: [
          "Audit gratuit de 20 minutes, sans engagement. Installation cible en 48 h après validation du périmètre (boîtes mail, modèles de réponse, règles de qualification).",
          "Retour à l'accueil pour comparer les formules et la garantie étendue affichée sur le site.",
        ],
      },
    ],
  },
  {
    slug: "normandie",
    path: "/mandataires-normandie",
    metaTitle: "Mandataires immobiliers en Normandie | Automatex",
    metaDescription:
      "Service français pour mandataires IAD, SAFTI, Capifrance en Normandie. Leads, mails, documents. Flers (61), déploiement Orne et départements voisins.",
    h1: "Automatex pour les mandataires immobiliers en Normandie",
    city: "Normandie",
    areaServedLabel: "Normandie (priorité Orne, Calvados, Manche limitrophe)",
    intro:
      "La Normandie regroupe des marchés contrastés : pression forte autour de Caen et Rouen, rythme plus lent sur l'axe Flers–Alençon–Argentan. Les mandataires indépendants y partagent les mêmes contraintes : mobilité, réactivité sur les portails, conformité RGPD.",
    sections: [
      {
        title: "Pourquoi un acteur ancré dans l'Orne",
        paragraphs: [
          "Automatex est conçu et opéré depuis Flers (61100) par Nolan Hermand. La proximité terrain avec les mandataires ornais informe les scénarios par défaut (SeLoger, Leboncoin, relances vendeur, demandes de visite).",
          "Extension progressive vers le Calvados et la Manche selon les onboardings mensuels (quota de quatre pour conserver la qualité de configuration).",
        ],
      },
      {
        title: "Ce que fait le service (sans jargon)",
        paragraphs: [
          "Réponse immédiate aux nouveaux leads avec ton professionnel aligné sur votre marque personnelle.",
          "Tri et priorisation des mails entrants pour traiter d'abord ce qui rapporte.",
          "Classement des pièces et rappels sur les formules supérieures.",
        ],
      },
      {
        title: "Réseaux accompagnés",
        paragraphs: [
          "Configurations déjà testées pour des profils IAD, SAFTI, Capifrance, Optimhome et EffiCity. Chaque réseau a ses habitudes de notification : le paramétrage est adapté, pas copié-collé.",
          "Témoignages issus du programme pilote 2026 ; mention affichée sur le site.",
        ],
      },
      {
        title: "Pages locales",
        paragraphs: [
          "Contenu détaillé par ville : Flers, Alençon, Argentan. Chaque page décrit le marché local et les bénéfices concrets pour les mandataires qui y exercent.",
          "Contact : formulaire sur l'accueil, téléphone 06 45 38 42 33, email nolan.hermand@automatex-hub.com.",
        ],
      },
    ],
  },
] as const;

export function getLocalPageBySlug(slug: string): LocalMandatairesPageData | undefined {
  return LOCAL_MANDATAIRES_PAGES.find((p) => p.slug === slug);
}
