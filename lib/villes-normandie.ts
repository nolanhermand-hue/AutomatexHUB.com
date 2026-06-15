import type { NormandieFaqItem } from "@/lib/normandie-shared";
import { NORMANDIE_PILIER_PATH } from "@/lib/normandie-shared";
import { SOVEREIGNTY_TRUST_LINE, FOUNDER_CHANTIER_CREDENTIAL } from "@/lib/constants";

/** Date de révision contenu cluster — mettre à jour manuellement (sitemap). */
export const NORMANDIE_CLUSTER_LAST_MODIFIED = "2026-06-09";

export type NormandieDominantAngle =
  | "couvreur"
  | "diagnostiqueur"
  | "btp-mixte"
  | "immo-urbain";

export type NormandieVillePage = {
  slug: string;
  path: string;
  name: string;
  nameWithArticle: string;
  department: string;
  departmentCode: string;
  populationApprox: string;
  distanceFromFlers: string;
  dominantAngle: NormandieDominantAngle;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroEyebrow: string;
  heroAccroche: string;
  heroSub: string;
  problemH2: string;
  problemIntro: string;
  problemPoints: ReadonlyArray<string>;
  localFaq: ReadonlyArray<NormandieFaqItem>;
  neighborSlugs: ReadonlyArray<string>;
};

export type NormandiePilierPage = {
  path: typeof NORMANDIE_PILIER_PATH;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: ReadonlyArray<string>;
  pilierFaq: ReadonlyArray<NormandieFaqItem>;
};

export const NORMANDIE_PILIER: NormandiePilierPage = {
  path: NORMANDIE_PILIER_PATH,
  metaTitle: "Automatisation artisans & diagnostiqueurs · Normandie",
  metaDescription:
    "Réponse aux appels, devis et relances pour couvreurs, diagnostiqueurs et TPE en Normandie. Basé à Flers (Orne). Démo 30 min gratuite · sans engagement.",
  h1: "Automatisation pour artisans et diagnostiqueurs en Normandie",
  intro: [
    "Couvreurs, charpentiers, diagnostiqueurs immobiliers et TPE : la même galère — être sur le terrain quand le téléphone sonne, et rattraper la paperasse le soir. AutomateX branche des réponses et des relances sur vos outils actuels, sans promesse de chiffre magique.",
    `Nolan Hermand installe depuis Flers (Orne), avec ${FOUNDER_CHANTIER_CREDENTIAL} sur les chantiers. Installations à distance dans toute la Normandie ; pages ci-dessous par ville pour le contexte local.`,
  ],
  pilierFaq: [
    {
      q: "AutomateX couvre-t-il toute la Normandie ?",
      a: "Oui : Calvados, Eure, Manche, Orne et Seine-Maritime. L’ancrage opérationnel est à Flers (61) ; les mises en place se font à distance avec le même interlocuteur.",
    },
    {
      q: "C’est adapté aux diagnostiqueurs comme aux couvreurs ?",
      a: "Oui. Le périmètre est cadré en démo : prise de RDV, réponses aux demandes, classement de pièces, relances — selon votre métier et votre volume de messages.",
    },
    {
      q: "Comment réserver une démo pour votre ville ?",
      a: "Choisis ta ville ci-dessous ou va sur /rendez-vous : nom, téléphone et métier suffisent. Nolan rappelle sous 24 h en semaine pour une démo de 30 minutes sur ton cas.",
    },
  ],
};

const villes: NormandieVillePage[] = [
  {
    slug: "caen",
    path: "/normandie/caen",
    name: "Caen",
    nameWithArticle: "à Caen",
    department: "Calvados",
    departmentCode: "14",
    populationApprox: "~106 000",
    distanceFromFlers: "environ 80 km au nord-ouest de Flers (~1 h)",
    dominantAngle: "diagnostiqueur",
    metaTitle: "Automatisation artisans & diag à Caen (14)",
    metaDescription:
      "Couvreurs, charpentiers et diagnostiqueurs à Caen : réponses et relances pendant vos chantiers. Démo 30 min · Nolan, Flers (Orne). Sans engagement.",
    h1: "Automatisations pour artisans et diagnostiqueurs à Caen",
    heroEyebrow: "Calvados (14) · agglo caennaise",
    heroAccroche: "Entre deux chantiers ou deux diagnostics, personne ne décroche à votre place.",
    heroSub:
      "Caen concentre rénovation de pavillons, copropriétés en centre et lotissements en couronne (Hérouville, Mondeville). Les demandes de devis et de créneau diag s’empilent dès que vous êtes en visite. AutomateX répond et classe pendant que vous restez sur le terrain.",
    problemH2: "Pourquoi les demandes s’encombrent autour de Caen ?",
    problemIntro:
      "L’agglo tire à la fois sur le BTP (extensions, couverture après intempéries) et sur l’immobilier (DPE, diagnostics avant vente). Un seul professionnel sur le toit ou chez le vendeur ne peut pas tenir Gmail et le téléphone en même temps.",
    problemPoints: [
      "Pavillons des années 70–90 : beaucoup de devis comparent 3 artisans — le premier qui confirme un créneau garde souvent le chantier.",
      "Diagnostiqueurs : les agences attendent une confirmation de RDV rapide ; un mail vu 6 h plus tard fait passer le dossier à un confrère.",
      "Traversée Caen–périphérie : les temps de route mangent les créneaux pour rappeler entre deux rendez-vous.",
    ],
    localFaq: [
      {
        q: "Les diagnostiqueurs à Caen ont-ils besoin d’un logiciel métier en plus ?",
        a: "Pas obligatoire. AutomateX se branche sur ce que vous utilisez déjà (mail, calendrier, Drive). L’objectif est de libérer du temps sur les confirmations et relances, pas d’ajouter un écran de plus.",
      },
      {
        q: "Couvreurs et charpentiers de l’agglo : par quoi commencer ?",
        a: "Souvent par un SMS ou mail court quand vous ne décrochez pas, puis par la relance devis. Vous choisissez 2 priorités en démo de 30 min avec Nolan sur vos vrais messages.",
      },
      {
        q: "Peut-on installer depuis Flers si votre entreprise est basée à Caen ?",
        a: "Oui, c’est le fonctionnement habituel : démo à distance, tests sur tes numéros et boîtes mail. Nolan peut se déplacer dans l’Orne si besoin ; pour le Calvados, tout se fait en visio.",
      },
    ],
    neighborSlugs: ["lisieux", "rouen", "le-havre"],
  },
  {
    slug: "rouen",
    path: "/normandie/rouen",
    name: "Rouen",
    nameWithArticle: "à Rouen",
    department: "Seine-Maritime",
    departmentCode: "76",
    populationApprox: "~110 000",
    distanceFromFlers: "environ 130 km au nord de Flers (~1 h 30)",
    dominantAngle: "immo-urbain",
    metaTitle: "Automatisation TPE & diag à Rouen (76)",
    metaDescription:
      "Diagnostiqueurs, artisans et TPE à Rouen Métropole : messages traités pendant vos visites. Démo gratuite 30 min · sans engagement.",
    h1: "Automatisations pour diagnostiqueurs et artisans à Rouen",
    heroEyebrow: "Seine-Maritime (76) · Métropole Rouen Normandie",
    heroAccroche: "Sur la rive droite ou en visite immeuble, les clients ne patientent pas.",
    heroSub:
      "Rouen mélange immeubles anciens, reconversion de friches et communes tendues (Bois-Guillaume, Sotteville). Les diagnostiqueurs et artisans indépendants y subissent un volume de messages plus proche de la grande agglo que du rural ornais.",
    problemH2: "La pression des délais à Rouen Métropole",
    problemIntro:
      "Les acquéreurs et propriétaires comparent vite. Quand vous êtes en diagnostic amiante ou en réfection de toiture en centre-ville, répondre « ce soir » équivaut souvent à « trop tard ».",
    problemPoints: [
      "Immeubles et colocations : plusieurs interlocuteurs par dossier — sans tri mail, une relance notaire ou agence se perd.",
      "Stationnement et accès difficiles : vous êtes plus longtemps « en mission » et moins disponible au téléphone.",
      "Réseaux d’indépendants (immo + BTP) denses : la réactivité perçue compte autant que le prix.",
    ],
    localFaq: [
      {
        q: "Est-ce utile pour un diagnostiqueur qui enchaîne les RDV en hyper-centre ?",
        a: "Oui : accusé de réception et proposition de créneau pendant que vous êtes chez le client. Vous gardez la main sur le contenu des messages types avant envoi.",
      },
      {
        q: "Artisans BTP sur Rouen et la couronne : même principe ?",
        a: "Même logique : appel manqué, devis à relancer, pièces dans Drive. Le métier change, pas le besoin de ne pas tout faire à la main le soir.",
      },
      {
        q: "Distance avec Flers : est-ce un frein ?",
        a: "Non pour l’installation (à distance). L’ancrage à Flers sert de point de contact humain unique, pas de zone limitée à l’Orne.",
      },
    ],
    neighborSlugs: ["le-havre", "evreux", "caen"],
  },
  {
    slug: "le-havre",
    path: "/normandie/le-havre",
    name: "Le Havre",
    nameWithArticle: "au Havre",
    department: "Seine-Maritime",
    departmentCode: "76",
    populationApprox: "~166 000",
    distanceFromFlers: "environ 150 km au nord-ouest de Flers",
    dominantAngle: "couvreur",
    metaTitle: "Automatisation couvreurs & artisans au Havre",
    metaDescription:
      "Couvreurs et artisans au Havre : réponse aux appels pendant le chantier. Démo 30 min · installé depuis Flers (Orne). Sans engagement.",
    h1: "Automatisations pour couvreurs et artisans au Havre",
    heroEyebrow: "Seine-Maritime (76) · littoral",
    heroAccroche: "Vent, sel et pluie : sur le toit, vous ne répondez pas au premier appel.",
    heroSub:
      "Au Havre et sur la côte (Sainte-Adresse, Montivilliers), les couvreurs et façadiers gèrent des urgences fuites et des chantiers longs. Les clients appellent plusieurs entreprises ; un SMS propre en quelques minutes rassure sans vous arracher du chantier.",
    problemH2: "Spécificités littoral havrais",
    problemIntro:
      "Corrosion, toitures plates, remplacements après tempête : les pics d’appels ne tombent pas quand vous êtes au bureau. La paperasse du soir fatigue et les relances devis passent après les urgences.",
    problemPoints: [
      "Logements proches du front de mer : propriétaires anxieux, attente de réponse immédiate.",
      "Agglo portuaire : déplacements longs entre communes — journées sans plage horaire pour l’admin.",
      "Concurrence d’artisans du 76 et du Calvados sur les mêmes mots-clés locaux.",
    ],
    localFaq: [
      {
        q: "Couvreur au Havre : qu’est-ce qui part en premier en démo ?",
        a: "En général accusé d’appel / SMS et relance devis en attente. Nolan adapte le ton à votre façon de parler aux clients du 76.",
      },
      {
        q: "Ça marche pour la façade et l’étanchéité aussi ?",
        a: "Oui tant que le flux passe par téléphone, mail ou formulaire — AutomateX automatise la réponse et le suivi, pas la pose.",
      },
      {
        q: "Données hébergées où ?",
        a: `${SOVEREIGNTY_TRUST_LINE}. Transparence complète sur /vos-donnees (site Netlify, automatisations en UE).`,
      },
    ],
    neighborSlugs: ["rouen", "cherbourg-en-cotentin", "caen"],
  },
  {
    slug: "cherbourg-en-cotentin",
    path: "/normandie/cherbourg-en-cotentin",
    name: "Cherbourg-en-Cotentin",
    nameWithArticle: "à Cherbourg-en-Cotentin",
    department: "Manche",
    departmentCode: "50",
    populationApprox: "~78 000",
    distanceFromFlers: "environ 160 km au nord-ouest de Flers",
    dominantAngle: "couvreur",
    metaTitle: "Automatisation artisans Cherbourg Cotentin (50)",
    metaDescription:
      "Artisans et couvreurs à Cherbourg-en-Cotentin : réponses automatiques sur chantier. Démo 30 min · Nolan Flers. Sans engagement.",
    h1: "Automatisations pour artisans à Cherbourg-en-Cotentin",
    heroEyebrow: "Manche (50) · Cotentin",
    heroAccroche: "Sur la presqu’île, un client qui n’a pas de nouvelles appelle le suivant sur la liste.",
    heroSub:
      "Cherbourg regroupe activité portuaire, habitat dispersé et vent fort. Les artisans couvrent un grand rayon (Valognes, Équeurdreville). Les trajets allongent les journées : encore plus difficile de répondre entre deux interventions.",
    problemH2: "Cotentin : distance et saisonnalité",
    problemIntro:
      "Forte saison des travaux extérieurs, pics après intempéries. Sans filet, les messages du soir s’accumulent et les devis « pour la semaine prochaine » ne partent jamais.",
    problemPoints: [
      "Clients répartis sur des communes éloignées — retour tardif au garage sans avoir ouvert la messagerie.",
      "Toitures et zinguerie : photos et mesures le jour, rédaction devis la nuit si vous n’avez pas d’aide.",
      "Moins de prestataires locaux qu’à Rouen : chaque client raté pèse plus lourd dans le carnet.",
    ],
    localFaq: [
      {
        q: "Vous couvrez tout le Cotentin depuis Cherbourg : c’est pertinent ?",
        a: "Oui si vous recevez appels et mails sur le même téléphone pro. AutomateX automatise la première réponse et le suivi, pas le déplacement.",
      },
      {
        q: "Diagnostiqueurs immobiliers sur le 50 ?",
        a: "Même besoin de confirmations RDV et de relances agences. Le cadrage se fait en démo selon votre planning type.",
      },
      {
        q: "Installation sans déplacement à Cherbourg ?",
        a: "Oui, à distance. Nolan est basé à Flers ; le suivi reste humain par téléphone et visio.",
      },
    ],
    neighborSlugs: ["saint-lo", "le-havre", "caen"],
  },
  {
    slug: "saint-lo",
    path: "/normandie/saint-lo",
    name: "Saint-Lô",
    nameWithArticle: "à Saint-Lô",
    department: "Manche",
    departmentCode: "50",
    populationApprox: "~19 000",
    distanceFromFlers: "environ 70 km à l’ouest de Flers (~1 h)",
    dominantAngle: "btp-mixte",
    metaTitle: "Automatisation artisans à Saint-Lô (50)",
    metaDescription:
      "Artisans et TPE à Saint-Lô et agglo : moins de paperasse le soir. Démo 30 min gratuite · depuis Flers (Orne).",
    h1: "Automatisations pour artisans et TPE à Saint-Lô",
    heroEyebrow: "Manche (50) · préfecture du département",
    heroAccroche: "Préfecture rurale : vous roulez toute la journée, pas le temps de trier les mails.",
    heroSub:
      "Saint-Lô structure un bassin de communes rurales et de PME. Les artisans en maçonnerie, menuiserie ou couverture font des tournées. Les demandes arrivent par Facebook, SMS et mail — trois canaux à rattraper le soir.",
    problemH2: "Administration en tournée autour de Saint-Lô",
    problemIntro:
      "Moins de densité qu’au Havre, mais mêmes attentes clients : une réponse le jour même. Seul sur le chantier, la double tâche terrain + secrétariat use.",
    problemPoints: [
      "Reconstruction et rénovation post-guerre : patrimoine bâti varié, devis longs à rédiger.",
      "Liens forts avec l’agriculture et les commerces : bouche-à-oreille, mais aussi premiers messages sur le portable.",
      "Concurrence d’artisans des Côtes-d’Armor et du Calvados sur les chantiers limitrophes.",
    ],
    localFaq: [
      {
        q: "TPE à Saint-Lô hors BTP : est-ce pour nous ?",
        a: "Oui si vous perdez des demandes faute de réponse rapide (prestataires, services locaux). Le formulaire /rendez-vous inclut « TPE / PME ».",
      },
      {
        q: "Faut-il être à Saint-Lô pour la démo ?",
        a: "Non, visio ou téléphone. 30 minutes sur votre journée type.",
      },
      {
        q: "Engagement minimum ?",
        a: "Sans engagement, résiliable en un mail. Pas de promesse de résultat chiffré sur le site.",
      },
    ],
    neighborSlugs: ["cherbourg-en-cotentin", "alencon", "flers"],
  },
  {
    slug: "lisieux",
    path: "/normandie/lisieux",
    name: "Lisieux",
    nameWithArticle: "à Lisieux",
    department: "Calvados",
    departmentCode: "14",
    populationApprox: "~20 000",
    distanceFromFlers: "environ 55 km au nord-est de Flers (~50 min)",
    dominantAngle: "diagnostiqueur",
    metaTitle: "Automatisation diag & artisans à Lisieux (14)",
    metaDescription:
      "Diagnostiqueurs et artisans du Pays d’Auge : réponses pendant vos visites. Démo 30 min · Nolan à Flers. Sans engagement.",
    h1: "Automatisations pour diagnostiqueurs et artisans à Lisieux",
    heroEyebrow: "Calvados (14) · Pays d’Auge",
    heroAccroche: "Longères et colombages : en visite, vous ne voyez pas les demandes qui tombent.",
    heroSub:
      "Lisieux et l’Auge attirent résidences secondaires et ventes de corps de ferme. Diagnostics avant acte et travaux de toiture sont fréquents. Les propriétaires parisiens attendent des confirmations rapides, pas un rappel le lendemain.",
    problemH2: "Pays d’Auge : ventes et saisonnalité",
    problemIntro:
      "Biens de caractère, accès par chemins : missions longues. Les agences locales envoient des demandes de créneaux serrés.",
    problemPoints: [
      "Diagnostics obligatoires sur l’ancien : volume stable, peu de marge pour oublier une relance.",
      "Artisans couvreur / charpente : toitures complexes, devis à plusieurs postes.",
      "Tourisme et gîtes : propriétaires absents, tout passe par mail.",
    ],
    localFaq: [
      {
        q: "Diagnostiqueur sur le secteur Lisieux–Pont-l’Évêque : cas fréquent ?",
        a: "Oui : enchaînement de RDV sur routes étroites. Accusé automatique + rappel de vos créneaux libres le soir sur le téléphone.",
      },
      {
        q: "Artisan du bâtiment en zone rurale 14 ?",
        a: "Même principe SMS/mail sur appel manqué. Nolan configure vos textes avec vos mots, pas une réponse catalogue.",
      },
      {
        q: "Proximité avec Flers ?",
        a: "Lisieux est plus proche de Flers que Rouen : logique pour un installateur ornais qui connaît le rythme rural normand.",
      },
    ],
    neighborSlugs: ["caen", "alencon", "evreux"],
  },
  {
    slug: "evreux",
    path: "/normandie/evreux",
    name: "Évreux",
    nameWithArticle: "à Évreux",
    department: "Eure",
    departmentCode: "27",
    populationApprox: "~47 000",
    distanceFromFlers: "environ 100 km à l’est de Flers",
    dominantAngle: "diagnostiqueur",
    metaTitle: "Automatisation TPE & diag à Évreux (27)",
    metaDescription:
      "Diagnostiqueurs et artisans à Évreux et l’Eure : réponses et relances automatisées. Démo 30 min · sans engagement.",
    h1: "Automatisations pour diagnostiqueurs et artisans à Évreux",
    heroEyebrow: "Eure (27) · axe Paris–Normandie",
    heroAccroche: "Entre deux pavillons de Vernon ou Évreux, les mails agences s’empilent.",
    heroSub:
      "Évreux est un pôle pour l’Eure : pavillons, zones d’activité, liaisons vers l’Île-de-France. Diagnostiqueurs et artisans y reçoivent des demandes de propriétaires pressés par les délais de financement.",
    problemH2: "Évreux et la couronne : flux péri-urbains",
    problemIntro:
      "Clients parfois moins patients qu'en rural profond — habitude de réactivité type grande couronne. Répondre tard coûte des dossiers.",
    problemPoints: [
      "Zones commerciales et lotissements récents : diagnostics neufs et rénovation énergétique.",
      "TPE de services (hors BTP) avec boîte mail saturée.",
      "Concurrence de prestataires remontant de Rouen et de Paris.",
    ],
    localFaq: [
      {
        q: "Diagnostiqueur 27 : compatible avec les logiciels métiers ?",
        a: "AutomateX ne remplace pas votre outil diag : Nolan traite mail, SMS et calendrier autour. Moins de double saisie manuelle sur les confirmations.",
      },
      {
        q: "Artisan couvreur entre Évreux et Giverny ?",
        a: "Oui, si vos clients arrivent sur mobile. Démo sur vos vrais messages.",
      },
      {
        q: "RGPD pour une TPE de l’Eure ?",
        a: `${SOVEREIGNTY_TRUST_LINE}. Détail sur /vos-donnees.`,
      },
    ],
    neighborSlugs: ["rouen", "caen", "lisieux"],
  },
  {
    slug: "alencon",
    path: "/normandie/alencon",
    name: "Alençon",
    nameWithArticle: "à Alençon",
    department: "Orne",
    departmentCode: "61",
    populationApprox: "~26 000",
    distanceFromFlers: "environ 50 km au nord-est de Flers (~45 min)",
    dominantAngle: "btp-mixte",
    metaTitle: "Automatisation artisans à Alençon (61)",
    metaDescription:
      "Couvreurs, diagnostiqueurs et TPE à Alençon : installé depuis Flers (Orne). Démo 30 min gratuite · sans engagement.",
    h1: "Automatisations pour artisans et diagnostiqueurs à Alençon",
    heroEyebrow: "Orne (61) · préfecture · proche de Flers",
    heroAccroche: "Entre la préfecture et les chantiers du bocage, les appels s’entassent.",
    heroSub:
      "Alençon concentre services, artisans et diagnostiqueurs pour tout le nord de l’Orne. Nolan est à une courte route de Flers : même bassin de vie, mêmes contraintes de mobilité sur les routes départementales.",
    problemH2: "Alençon : hub du nord Orne",
    problemIntro:
      "Vous intervenez sur Damigny, Valframbert ou vers la Suisse normande. Les clients ne distinguent pas « en visite » et « disponible au téléphone ».",
    problemPoints: [
      "Centre-ville et périphérie : rénovation de l’habitat et diagnostics avant vente.",
      "Réseaux d’artisans locaux serrés — réputation et réactivité.",
      "Déplacements fréquents vers Flers ou Argentan pour les chantiers.",
    ],
    localFaq: [
      {
        q: "Pourquoi choisir un installateur basé à Flers pour Alençon ?",
        a: "Même département, mêmes réalités terrain. Nolan a travaillé sur les chantiers ornais avant de monter AutomateX.",
      },
      {
        q: "Rendez-vous possible à Alençon ?",
        a: "Oui si tu préfères le face-à-face pour la démo ; sinon à distance.",
      },
      {
        q: "Diagnostiqueurs immobiliers à Alençon ?",
        a: "Voir aussi /immobilier pour le parcours diagnostiqueur dédié ; cette page cible surtout BTP, diag et TPE en Normandie.",
      },
    ],
    neighborSlugs: ["flers", "argentan", "saint-lo"],
  },
  {
    slug: "flers",
    path: "/normandie/flers",
    name: "Flers",
    nameWithArticle: "à Flers",
    department: "Orne",
    departmentCode: "61",
    populationApprox: "~14 000",
    distanceFromFlers: "base AutomateX — Saint-Georges-des-Groseillers / agglo Flers",
    dominantAngle: "btp-mixte",
    metaTitle: "Automatisation artisans à Flers (61)",
    metaDescription:
      "Couvreurs, charpentiers et diagnostiqueurs à Flers : Nolan installe depuis chez lui. Démo 30 min · sans engagement.",
    h1: "Automatisations pour artisans et diagnostiqueurs à Flers",
    heroEyebrow: "Orne (61) · base Nolan · bocage ornais",
    heroAccroche: "Ici, tout le monde connaît quelqu’un sur les chantiers — et personne ne répond au premier coup.",
    heroSub:
      "Flers et l’agglo (La Ferté-Macé, Domfront-en-Poiraie) vivent au rythme des PME du bâtiment et des diagnostics sur pavillons. AutomateX est installé dans le même bassin : pas de hotline anonyme, un interlocuteur qui connaît la cadence locale.",
    problemH2: "Flers : carnet d’adresses et bouche-à-oreille",
    problemIntro:
      "Les clients appellent souvent le patron directement. Si vous êtes sur la toiture ou chez le vendeur, le répondeur classique ne suffit pas — il faut un message utile tout de suite.",
    problemPoints: [
      "Tissu de sous-traitance local : plusieurs artisans se recommandent, mais le premier rappelé signe.",
      "Zones rurales autour de Flers : trajets longs, peu de pause bureau.",
      "Diagnostiqueurs couvrant le sud Orne depuis Flers ou la 61100.",
    ],
    localFaq: [
      {
        q: "Pouvez-vous voir Nolan en personne à Flers ?",
        a: "Oui pour la démo si tu préfères. Sinon à distance comme partout en Normandie.",
      },
      {
        q: "Couvreur / menuisier du bocage : par où commencer ?",
        a: "En général appels manqués + relance devis. Nolan part de vos messages réels, pas d’un scénario théorique.",
      },
      {
        q: "Lien avec /automatisation-artisan-flers ?",
        a: "Même zone ; cette page est le hub Normandie orienté conversion locale. Le parcours BTP détaillé reste sur /btp.",
      },
    ],
    neighborSlugs: ["alencon", "argentan", "saint-lo"],
  },
  {
    slug: "argentan",
    path: "/normandie/argentan",
    name: "Argentan",
    nameWithArticle: "à Argentan",
    department: "Orne",
    departmentCode: "61",
    populationApprox: "~14 000",
    distanceFromFlers: "environ 35 km au nord de Flers (~35 min)",
    dominantAngle: "couvreur",
    metaTitle: "Automatisation artisans à Argentan (61)",
    metaDescription:
      "Couvreurs et artisans sud Orne à Argentan : réponses sur chantier. Démo 30 min · Nolan à Flers. Sans engagement.",
    h1: "Automatisations pour couvreurs et artisans à Argentan",
    heroEyebrow: "Orne (61) · sud Orne · Suisse normande",
    heroAccroche: "Sur les toits du secteur Argentan–Falaise, le téléphone vibre sans arrêt.",
    heroSub:
      "Argentan relie plaine d’Argentan et communes rurales vers la Suisse normande. Couvreurs et charpentiers y enchaînent les réfections de toiture et les dépannages. Peu de secrétariat : chaque appel manqué est un voisin potentiel qui passe commande ailleurs.",
    problemH2: "Sud Orne : chantiers dispersés",
    problemIntro:
      "Proximité de Flers facilite un suivi humain serré. Le besoin technique est le même qu’en grande ville : ne pas laisser le client sans nouvelle.",
    problemPoints: [
      "Bâtiments de ferme et longères : devis multi-postes, souvent le soir.",
      "Routes vers Vimoutiers ou Putanges : journées sans retour bureau.",
      "Saison des intempéries : pics d’appels concentrés sur quelques jours.",
    ],
    localFaq: [
      {
        q: "Artisan à Argentan, installateur à Flers : logistique ?",
        a: "Installation à distance ; déplacement possible dans l’Orne pour la démo si tu le souhaites.",
      },
      {
        q: "Diagnostiqueur sur le secteur sud Orne ?",
        a: "Oui, confirmations RDV et relances. Cadrage en démo selon votre calendrier.",
      },
      {
        q: "Sans engagement, vraiment ?",
        a: "Oui — résiliable en un mail. Conditions sur /cgv.",
      },
    ],
    neighborSlugs: ["flers", "alencon", "caen"],
  },
];

export const NORMANDIE_VILLES: ReadonlyArray<NormandieVillePage> = villes;

export const NORMANDIE_VILLE_SLUGS = villes.map((v) => v.slug) as readonly string[];

export function getAllNormandieVilleSlugs(): string[] {
  return [...NORMANDIE_VILLE_SLUGS];
}

export function getNormandieVilleBySlug(slug: string): NormandieVillePage | undefined {
  return NORMANDIE_VILLES.find((v) => v.slug === slug);
}

/** Regroupement pour la grille pilier (ordre d’affichage). */
export const NORMANDIE_DEPARTMENTS = [
  { code: "61", label: "Orne", slugs: ["flers", "alencon", "argentan"] as const },
  { code: "14", label: "Calvados", slugs: ["caen", "lisieux"] as const },
  { code: "76", label: "Seine-Maritime", slugs: ["rouen", "le-havre"] as const },
  { code: "50", label: "Manche", slugs: ["cherbourg-en-cotentin", "saint-lo"] as const },
  { code: "27", label: "Eure", slugs: ["evreux"] as const },
] as const;
