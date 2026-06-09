import type { CoconFaqItem } from "@/lib/automatisation-cocon-shared";
import { COCON_PILIER_PATH } from "@/lib/automatisation-cocon-shared";

export type CoconTradeId =
  | "diagnostiqueur"
  | "couvreur"
  | "chauffagiste"
  | "courtier"
  | "mandataireImmo";

export type CoconTradeSection = {
  id: CoconTradeId;
  h2: string;
  paragraphs: ReadonlyArray<string>;
  toolsLine: string;
};

export type CoconPainPage = {
  slug: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroEyebrow: string;
  heroAccroche: string;
  heroSub: string;
  howItWorks: ReadonlyArray<{ title: string; body: string }>;
  localFaq: ReadonlyArray<CoconFaqItem>;
  tradeSections: ReadonlyArray<CoconTradeSection>;
  relatedSlugs: ReadonlyArray<string>;
  /** Métiers J1 en tête sur la page lead */
  leadFirst?: boolean;
};

export type CoconPilierPage = {
  path: typeof COCON_PILIER_PATH;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: ReadonlyArray<string>;
  pilierFaq: ReadonlyArray<CoconFaqItem>;
};

export const COCON_PILIER: CoconPilierPage = {
  path: COCON_PILIER_PATH,
  metaTitle: "Automatisations pour artisans et indépendants",
  metaDescription:
    "Relances de devis, SMS appels manqués, leads, RDV — sans remplacer Liciel, Tolteck ou ton logiciel métier. Basé à Flers (Orne). Démo 20 min.",
  h1: "Automatisations pour artisans et indépendants — sans changer ton logiciel métier",
  intro: [
    "Tu as déjà un outil pour chiffrer, diagnostiquer ou monter un dossier. Le trou, c'est souvent après : relancer, répondre quand tu es sur le terrain, rappeler un lead ou bloquer un livrable tant qu'une pièce manque.",
    "Automatex branche des enchaînements par-dessus Gmail, SMS et calendrier. Pas de promesse magique : on cadre le périmètre en démo de 20 minutes.",
  ],
  pilierFaq: [
    {
      q: "Est-ce un logiciel de devis ou de DPE ?",
      a: "Non. On ne remplace pas ProDevis, Tolteck, Liciel ou ORIS. On automatise relances, réponses et rappels autour de ce que tu fais déjà dans ces outils.",
    },
    {
      q: "Quelles automatisations sont prêtes en premier ?",
      a: "Relance de devis, SMS sur appel manqué, relance impayés ou livrable, réponse lead, prise de RDV — chaque page décrit un cas métier concret.",
    },
    {
      q: "Comment démarrer ?",
      a: "Page /rendez-vous : nom, téléphone, métier. Nolan rappelle sous 24 h en semaine pour une démo de 20 minutes.",
    },
  ],
};

const pains: CoconPainPage[] = [
  {
    slug: "relance-devis-automatique",
    path: `${COCON_PILIER_PATH}/relance-devis-automatique`,
    metaTitle: "Relance de devis automatique pour artisans",
    metaDescription:
      "Devis envoyé sans réponse ? Relance mail ou SMS selon tes règles — compatible Tolteck, Obat, Batappli. Pas un logiciel de chiffrage. Démo 20 min.",
    h1: "Relance de devis automatique — quand le client ne répond plus",
    heroEyebrow: "Relances & suivi",
    heroAccroche: "Le devis est parti. Le silence aussi.",
    heroSub:
      "On déclenche une relance propre après le délai que tu choisis, sans réécrire le même mail chaque soir. [À VÉRIFIER KEYWORD PLANNER]",
    howItWorks: [
      {
        title: "Tu marques le devis comme envoyé",
        body: "Dans ton habitude actuelle (mail, export PDF, statut dans ton outil). Pas besoin de changer de logiciel.",
      },
      {
        title: "Automatex surveille le délai",
        body: "Exemple : 48 h sans réponse. Un message court part avec ta signature et la référence du dossier.",
      },
      {
        title: "Tu gardes la main",
        body: "Relance 1, puis 2 si tu veux. Notification sur mobile. Le client chaud te rappelle — les autres ne tombent pas dans l'oubli.",
      },
    ],
    localFaq: [
      {
        q: "Ça remplace mon logiciel de devis ?",
        a: "Non. La relance part autour du devis déjà produit dans Tolteck, Obat, Batappli ou ProDevis. On ne refait pas le chiffrage à ta place.",
      },
      {
        q: "Et si le client a déjà signé ailleurs ?",
        a: "La relance reste factuelle : rappel du devis et question simple. Tu coupes la séquence dès qu'il répond.",
      },
    ],
    tradeSections: [
      {
        id: "couvreur",
        h2: "Couvreur / charpentier — situation de travaux",
        paragraphs: [
          "Après une visite pour une situation de travaux, le devis part le soir… ou jamais. Même quand il part, le client compare trois couvreurs et ne répond pas.",
          "Une relance automatique rappelle le chantier et la date du devis — tu restes présent sans harceler.",
        ],
        toolsLine: "Branchement typique : devis issu de Tolteck ou Obat, relance par mail/SMS.",
      },
      {
        id: "diagnostiqueur",
        h2: "Diagnostiqueur — missions et prescripteurs",
        paragraphs: [
          "Les agences et prescripteurs attendent un retour rapide sur le devis de mission. Un silence de plusieurs jours fait passer le dossier à un confrère.",
          "Relance ciblée sur la mission (adresse, type de diag) sans reprendre toute la saisie Liciel ou ORIS.",
        ],
        toolsLine: "Compatible avec ton flux Liciel / ORIS — relance seulement.",
      },
      {
        id: "chauffagiste",
        h2: "Chauffagiste — devis entretien ou remplacement",
        paragraphs: [
          "Devis Cerfa ou entretien annuel : le client lit le mail et oublie. La relance rappelle l'échéance contrat ou la proposition de remplacement.",
        ],
        toolsLine: "Relance autour de ton outil devis / contrat d'entretien habituel.",
      },
      {
        id: "courtier",
        h2: "Courtier — pièces et complétude dossier",
        paragraphs: [
          "Avant même l'impayé, c'est souvent le devis honoraires ou la liste de pièces qui dort. Relance DDA-friendly : rappel des pièces manquantes liées au devis envoyé.",
        ],
        toolsLine: "Mail/SMS en complément de ton logiciel dossier — pas de DDA à notre place.",
      },
    ],
    relatedSlugs: ["sms-appel-manque", "relance-impayes-livrable"],
  },
  {
    slug: "sms-appel-manque",
    path: `${COCON_PILIER_PATH}/sms-appel-manque`,
    metaTitle: "SMS automatique sur appel manqué — artisans",
    metaDescription:
      "Sur le chantier, tu ne décroches pas. Un SMS pro part tout de suite avec ta signature. Compatible avec ton téléphone et ton CRM. Démo 20 min.",
    h1: "SMS automatique quand tu manques un appel sur le chantier",
    heroEyebrow: "Appels & terrain",
    heroAccroche: "Le client appelle. Tu poses. Il raccroche.",
    heroSub:
      "Un SMS personnalisé part en quelques secondes : tu rappelleras, avec la référence devis si tu veux. [À VÉRIFIER KEYWORD PLANNER]",
    howItWorks: [
      { title: "Appel non décroché détecté", body: "Via ton standard, mobile pro ou règle opérateur — on cale ça en démo." },
      { title: "SMS immédiat", body: "Texte validé avec toi : prénom, délai de rappel, numéro direct." },
      { title: "Trace dans ta journée", body: "Résumé sur Telegram ou mail selon ton pack — tu rappelles au bon moment." },
    ],
    localFaq: [
      {
        q: "Le client voit un numéro bizarre ?",
        a: "On utilise ton numéro professionnel ou un expéditeur validé avec toi. Pas de spam massif : un SMS par appel manqué utile.",
      },
    ],
    tradeSections: [
      {
        id: "couvreur",
        h2: "Couvreur — toiture et urgence",
        paragraphs: [
          "Appel pour une fuite pendant que tu es en hauteur : le SMS rassure et évite que le client appelle le suivant sur PagesJaunes.",
        ],
        toolsLine: "SMS + ton mobile pro ; devis toujours dans Tolteck / Obat.",
      },
      {
        id: "diagnostiqueur",
        h2: "Diagnostiqueur — prise de mission",
        paragraphs: [
          "Un prescripteur appelle entre deux visites. Le SMS confirme que tu as vu l'appel et proposes un créneau de rappel.",
        ],
        toolsLine: "Compatible missions Liciel / ORIS — pas de saisie diag automatique.",
      },
      {
        id: "chauffagiste",
        h2: "Chauffagiste — panne ou entretien",
        paragraphs: [
          "Hiver : appels en rafale. SMS sur appel manqué avec mention contrat d'entretien si le numéro est reconnu.",
        ],
        toolsLine: "Relie ton annuaire client et ton outil contrat — sans le remplacer.",
      },
      {
        id: "courtier",
        h2: "Courtier — premier contact emprunteur",
        paragraphs: [
          "Appel manqué sur un dossier en montage : SMS professionnel, invitation à envoyer pièces par le canal habituel.",
        ],
        toolsLine: "Complète ton logiciel dossier — pas de simulation de crédit.",
      },
    ],
    relatedSlugs: ["relance-devis-automatique", "rappel-lead-instantane"],
  },
  {
    slug: "relance-impayes-livrable",
    path: `${COCON_PILIER_PATH}/relance-impayes-livrable`,
    metaTitle: "Relance impayés et blocage livrable",
    metaDescription:
      "Facture impayée ou rapport bloqué faute de pièce ? Relances factuelles, pas de recouvrement agressif. Compatible avec tes outils. Démo 20 min.",
    h1: "Relance impayés et blocage livrable — sans harceler",
    heroEyebrow: "Relances & pièces",
    heroAccroche: "Tu livres quand c'est payé — ou quand le dossier est complet.",
    heroSub:
      "Rappels automatiques sur facture en attente ou pièce manquante, avec le ton que tu valides. [À VÉRIFIER KEYWORD PLANNER]",
    howItWorks: [
      { title: "Tu définis le déclencheur", body: "J+7 impayé, rapport diag sans paiement, dossier crédit incomplet." },
      { title: "Message factuel", body: "Montant, référence, pièce attendue — pas de menace, pas de jargon huissier." },
      { title: "Escalade humaine", body: "Si le client répond, la séquence s'arrête. Sinon tu décides du prochain pas." },
    ],
    localFaq: [
      {
        q: "Est-ce du recouvrement juridique ?",
        a: "Non. Rappels administratifs que tu aurais faits à la main. Pour les litiges, tu gardes ton process habituel.",
      },
    ],
    tradeSections: [
      {
        id: "couvreur",
        h2: "Couvreur — acompte et solde chantier",
        paragraphs: [
          "Situation de travaux livrée, solde qui traîne. Relance mail rappelant le devis signé et l'échéance — tu restes ferme et pro.",
        ],
        toolsLine: "Autour de ton devis/chantier Tolteck ou Obat.",
      },
      {
        id: "diagnostiqueur",
        h2: "Diagnostiqueur — rapport bloqué",
        paragraphs: [
          "Pas de rapport final tant que la mission n'est pas réglée ou qu'une pièce agence manque. Relance prescripteur et client selon ta règle.",
        ],
        toolsLine: "Liciel / ORIS inchangés — relance et statut seulement.",
      },
      {
        id: "chauffagiste",
        h2: "Chauffagiste — contrat d'entretien impayé",
        paragraphs: [
          "Cerfa et contrat annuel : relance avant coupure de prestation, ton neutre.",
        ],
        toolsLine: "Compatible avec ton suivi contrat existant.",
      },
      {
        id: "courtier",
        h2: "Courtier — pièces justificatives DDA",
        paragraphs: [
          "Dossier bloqué : relance listant les pièces manquantes pour complétude DDA, sans reformuler le conseil.",
        ],
        toolsLine: "Mail/SMS en plus de ton outil dossier.",
      },
    ],
    relatedSlugs: ["relance-devis-automatique", "prise-rdv-automatique"],
  },
  {
    slug: "rappel-lead-instantane",
    path: `${COCON_PILIER_PATH}/rappel-lead-instantane`,
    metaTitle: "Réponse lead instantanée — diagnostiqueurs et artisans",
    metaDescription:
      "Premier contact prospect pendant que tu es en mission. Mail ou SMS de prise en charge — pas un portail immo. J1 : diag et couvreurs. Démo 20 min.",
    h1: "Réponse lead instantanée — pendant que tu es en mission",
    heroEyebrow: "Leads & réponses",
    heroAccroche: "Le prospect écrit. Tu es sur le terrain.",
    heroSub:
      "Un message de prise en charge part tout de suite — créneau de rappel ou question fermée. [À VÉRIFIER KEYWORD PLANNER]",
    leadFirst: true,
    howItWorks: [
      { title: "Lead entrant", body: "Mail, formulaire ou portail — on lit ce qui arrive déjà dans ta boîte." },
      { title: "Réponse en moins de 2 minutes", body: "Texte personnalisé validé avec toi — pas un paragraphe générique." },
      { title: "Tu rappelles avec le contexte", body: "Notification mobile : source, bien ou chantier, niveau d'urgence." },
    ],
    localFaq: [
      {
        q: "C'est pour les mandataires immobiliers en priorité ?",
        a: "Non. Cible J1 : diagnostiqueurs et artisans BTP. Le mandataire immo est un cas parmi d'autres — voir /immobilier pour le funnel dédié immo.",
      },
    ],
    tradeSections: [
      {
        id: "diagnostiqueur",
        h2: "Diagnostiqueur — demandes agences et prescripteurs",
        paragraphs: [
          "Mission urgente pour une vente : l'agence contacte trois diagnostics. La première réponse structurée garde le créneau.",
        ],
        toolsLine: "Boîte mail + calendrier — saisie mission reste dans Liciel / ORIS.",
      },
      {
        id: "couvreur",
        h2: "Couvreur — demande devis toiture",
        paragraphs: [
          "Lead site ou recommandation : accusé de réception immédiat avec délai de visite terrain.",
        ],
        toolsLine: "Compatible devis Tolteck / Obat ensuite — pas de chiffrage auto ici.",
      },
      {
        id: "chauffagiste",
        h2: "Chauffagiste — demande entretien ou depannage",
        paragraphs: [
          "Pic hivernal : réponse automatique qui qualifie urgence et contrat existant.",
        ],
        toolsLine: "Téléphone et mail actuels — pas de nouveau CRM imposé.",
      },
      {
        id: "courtier",
        h2: "Courtier — premier contact emprunteur",
        paragraphs: [
          "Lead formulaire : réponse avec liste des pièces à préparer — tu rappelles sur dossier déjà cadré.",
        ],
        toolsLine: "Complète ton outil dossier crédit.",
      },
      {
        id: "mandataireImmo",
        h2: "Mandataire immo — mention secondaire",
        paragraphs: [
          "Même mécanique sur un lead SeLoger ou Leboncoin : réponse rapide pendant la visite. Pour un parcours immo complet, le hub dédié reste /immobilier.",
        ],
        toolsLine: "Mail existant — pas de remplacement Playiad / Omega.",
      },
    ],
    relatedSlugs: ["prise-rdv-automatique", "sms-appel-manque"],
  },
  {
    slug: "prise-rdv-automatique",
    path: `${COCON_PILIER_PATH}/prise-rdv-automatique`,
    metaTitle: "Prise de RDV automatique pour pros",
    metaDescription:
      "Créneaux de visite, mission diag ou rappel client : proposition automatique depuis ta disponibilité. Compatible calendrier existant. Démo 20 min.",
    h1: "Prise de RDV automatique — créneaux sans aller-retour",
    heroEyebrow: "Agenda & terrain",
    heroAccroche: "Cinq mails pour trouver un créneau, c'est cinq soirées perdues.",
    heroSub:
      "On propose des plages depuis ton calendrier ou tes règles, le client choisit, tu reçois la confirmation. [À VÉRIFIER KEYWORD PLANNER]",
    howItWorks: [
      { title: "Demande de RDV", body: "Mail ou SMS entrant après lead ou relance." },
      { title: "Créneaux proposés", body: "Lien ou liste courte alignée sur Google Calendar / Outlook." },
      { title: "Confirmation", body: "Entrée agenda + rappel J-1 si tu veux." },
    ],
    localFaq: [
      {
        q: "Le client réserve sans me parler ?",
        a: "Tu fixes les plages ouvertes et la durée. Les créneaux hors dispo chantier restent bloqués.",
      },
    ],
    tradeSections: [
      {
        id: "diagnostiqueur",
        h2: "Diagnostiqueur — créneaux mission",
        paragraphs: [
          "L'agence propose trois logements : tu envoies automatiquement tes plages de visite diag disponibles.",
        ],
        toolsLine: "Calendrier + mail — mission saisie ensuite dans Liciel / ORIS.",
      },
      {
        id: "couvreur",
        h2: "Couvreur — visite toiture",
        paragraphs: [
          "Après un lead, proposition de visite situation de travaux sans 8 mails de ping-pong.",
        ],
        toolsLine: "S'ajoute à ton flux devis Tolteck / Obat.",
      },
      {
        id: "chauffagiste",
        h2: "Chauffagiste — entretien annuel",
        paragraphs: [
          "Rappel contrat + lien de prise de RDV entretien sur les créneaux que tu autorises.",
        ],
        toolsLine: "Compatible contrat d'entretien / Cerfa existant.",
      },
      {
        id: "courtier",
        h2: "Courtier — rendez-vous pièces",
        paragraphs: [
          "Premier RDV collecte pièces : créneaux en ligne, liste DDA envoyée après confirmation.",
        ],
        toolsLine: "En complément de ton logiciel dossier.",
      },
    ],
    relatedSlugs: ["rappel-lead-instantane", "relance-devis-automatique"],
  },
];

export const COCON_PAIN_PAGES: ReadonlyArray<CoconPainPage> = pains;

export function getAllCoconPainSlugs(): string[] {
  return pains.map((p) => p.slug);
}

export function getCoconPainBySlug(slug: string): CoconPainPage | undefined {
  return pains.find((p) => p.slug === slug);
}

export function getCoconPainByPath(path: string): CoconPainPage | undefined {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return pains.find((p) => p.path === normalized);
}
