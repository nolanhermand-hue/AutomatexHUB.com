/** Contenu long-tail SEO — pages diagnostiqueurs par zone (template futur). */

import { BRAND_SHORT, SOVEREIGNTY_TRUST_LINE } from "@/lib/constants";

export type LocalDiagnostiqueurPageData = {
  slug: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: ReadonlyArray<{ h2: string; paragraphs: ReadonlyArray<string> }>;
  ctaLabel: string;
};

export const LOCAL_DIAGNOSTIQUEUR_PAGES: ReadonlyArray<LocalDiagnostiqueurPageData> = [
  {
    slug: "flers",
    path: "/diagnostiqueurs-flers",
    metaTitle: `Diagnostiqueur immobilier Flers · réponse agences 2 min · ${BRAND_SHORT}`,
    metaDescription:
      `Réponse aux demandes agences en 2 min pour diagnostiqueurs indépendants à Flers et dans le bocage ornais. Mise en place en 48 h ouvrées après validation du périmètre. ${SOVEREIGNTY_TRUST_LINE}.`,
    h1: "Automatisation pour diagnostiqueurs immobiliers à Flers et dans l'Orne",
    intro:
      "Flers et l'agglo concentrent un flux régulier de ventes et de diagnostics avant compromis. Les diagnostiqueurs indépendants y enchaînent DPE, amiante et missions électricité : un mail agence qui attend plus de dix minutes pendant une mission part souvent au confrère de l'annuaire.",
    sections: [
      {
        h2: "Marché local et concurrence",
        paragraphs: [
          "Agences de centre-ville et notaires envoient des demandes de créneaux serrés. La première confirmation structurée — date, adresse, type de diag — garde la mission.",
          "Les diagnostiqueurs flériens couvrent un rayon large vers La Ferté-Macé ou Domfront : la mobilité multiplie les créneaux sans réseau fixe.",
        ],
      },
      {
        h2: "Ce qu'AutomateX installe",
        paragraphs: [
          "Réponse en moins de 2 minutes sur les mails agences et prescripteurs, tri des urgences, classement des rapports et bons de commande dans Google Drive.",
          `La configuration se fait à distance ou en rendez-vous à Flers (61100). Délai cible : 48 h ouvrées après validation du périmètre (accès outils, règles, tests). ${SOVEREIGNTY_TRUST_LINE} ; aucun compte partagé entre clients.`,
        ],
      },
      {
        h2: "Outils déjà en place",
        paragraphs: [
          "Gmail ou Outlook, Google Agenda, Liciel / Alain pour la saisie mission : AutomateX se branche sur la boîte mail existante. Pas de changement visible pour l'agence.",
        ],
      },
    ],
    ctaLabel: "Réserver l'audit 30 min",
  },
  {
    slug: "alencon",
    path: "/diagnostiqueurs-alencon",
    metaTitle: `Diagnostiqueur Alençon · demandes agences · ${BRAND_SHORT}`,
    metaDescription:
      "Ne perds plus de créneaux à Alençon et dans l'Orne. Réponse immédiate pour diagnostiqueurs indépendants. Audit 30 min sur ton cas, sans engagement.",
    h1: "Automatisation pour diagnostiqueurs à Alençon et nord de l'Orne",
    intro:
      "Alençon concentre services, agences et prescripteurs pour tout le nord de l'Orne. Les diagnostiqueurs y gèrent un volume de messages supérieur à la moyenne rurale — souvent pendant des missions longues en pavillon ou en lotissement.",
    sections: [
      {
        h2: "Pression des agences",
        paragraphs: [
          "Ventes avant compromis, dossiers amiante en urgence : l'agence contacte souvent deux ou trois diagnostiqueurs. Celui qui confirme le créneau et le périmètre garde le dossier.",
        ],
      },
      {
        h2: "Installation",
        paragraphs: [
          "Même méthode qu'à Flers : cadrage 30 min, tests sur de vrais mails agences, notifications Telegram pour les urgences.",
        ],
      },
      {
        h2: "Prise de contact",
        paragraphs: [
          "Réserve un audit de 30 minutes depuis cette page ou depuis /immobilier : créneau prioritaire pour les diagnostiqueurs de l'Orne.",
        ],
      },
    ],
    ctaLabel: "Réserver l'audit 30 min",
  },
  {
    slug: "argentan",
    path: "/diagnostiqueurs-argentan",
    metaTitle: "Diagnostiqueur Argentan · réponse agences 2 min",
    metaDescription:
      `Demandes agences à Argentan : réponse en 2 min, tri des mails, rapports classés. Pour diagnostiqueurs Normandie. ${SOVEREIGNTY_TRUST_LINE}. Sans engagement.`,
    h1: "Automatisation pour diagnostiqueurs à Argentan et sud-Orne",
    intro:
      "Argentan relie l'Orne au Calvados : biens de bourg, résidences secondaires, propriétés avec accès difficiles. Les diagnostiqueurs couvrent un rayon large ; les déplacements multiplient les créneaux sans réseau.",
    sections: [
      {
        h2: "Contexte terrain",
        paragraphs: [
          "Agences locales et notaires du secteur envoient des demandes groupées avant les week-ends de visite. Une réponse tardive fait basculer la mission sur un confrère de Caen ou d'Alençon.",
        ],
      },
      {
        h2: "Méthode AutomateX",
        paragraphs: [
          "Orchestration privée configurée diagnostiqueur par diagnostiqueur — pas de catalogue générique. Vous validez le ton et les modèles de confirmation de RDV.",
        ],
      },
    ],
    ctaLabel: "Réserver l'audit 30 min",
  },
  {
    slug: "normandie",
    path: "/diagnostiqueurs-normandie",
    metaTitle: `Diagnostiqueurs immobiliers Normandie · ${BRAND_SHORT}`,
    metaDescription:
      "Service français pour diagnostiqueurs indépendants en Normandie : demandes agences, mails et documents. Flers (61), déploiement Orne et départements voisins.",
    h1: "AutomateX pour les diagnostiqueurs immobiliers en Normandie",
    intro:
      "La Normandie mélange agglo tendue (Caen, Rouen) et axes plus ruraux (Flers–Alençon–Argentan). Les diagnostiqueurs indépendants partagent les mêmes contraintes : mobilité, réactivité sur les mails agences, conformité RGPD.",
    sections: [
      {
        h2: "Ancrage Flers",
        paragraphs: [
          "AutomateX est conçu et opéré depuis Flers (61100) par Nolan Hermand. La proximité terrain avec les diagnostiqueurs ornais informe les scénarios par défaut (confirmation RDV, relances agence, classement rapports).",
        ],
      },
      {
        h2: "Profils couverts",
        paragraphs: [
          "Certifiés indépendants (ADI), salariés de cabinets multi-sites, multi-activité : le paramétrage est adapté à votre flux mail et à vos types de mission (DPE, amiante, électricité, gaz).",
        ],
      },
      {
        h2: "Pages ville",
        paragraphs: [
          "Contenu détaillé par ville : Flers, Alençon, Argentan. Chaque page décrit le marché local et les bénéfices concrets pour les diagnostiqueurs qui y exercent.",
        ],
      },
    ],
    ctaLabel: "Réserver l'audit 30 min",
  },
];

export function getLocalPageBySlug(slug: string): LocalDiagnostiqueurPageData | undefined {
  return LOCAL_DIAGNOSTIQUEUR_PAGES.find((p) => p.slug === slug);
}
