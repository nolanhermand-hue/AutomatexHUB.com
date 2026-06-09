import { SITE_URL, SOVEREIGNTY_TRUST_LINE } from "@/lib/constants";

/** Une ligne marketing / meta — site vs données métier (défendable, aligné mentions légales). */
export const PUBLIC_HOSTING_ONE_LINER =
  `Site sur CDN Netlify · automatisations et données métier en UE · ${SOVEREIGNTY_TRUST_LINE}` as const;

/** Transparence infra — alignée sur /vos-donnees (pages légales). */
export const LEGAL_SITE_CDN_TRANSPARENCY =
  "Le site vitrine automatex-hub.com est un export statique (HTML, CSS, images, JavaScript). Il est distribué via le CDN global de Netlify (infrastructure américaine, points de présence Edge mondiaux) pour des performances de chargement typiquement inférieures à 100 ms. Aucun identifiant client, cookie traceur publicitaire ni donnée personnelle n'y est stocké : seuls des fichiers publics sont servis." as const;

export const LEGAL_BUSINESS_DATA_ROUTING =
  "Les flux métiers critiques — soumissions de formulaires, automatisations, traitements de messages et documents — sont routés vers des environnements Union européenne : automatisations N8N Cloud (Francfort, Allemagne, UE) et traitement linguistique Mistral AI (Paris, France, UE). Aucune revente de données. Détail des sous-traitants et registre : page Vos données." as const;

export const LEGAL_VOS_DONNEES_HREF = `${SITE_URL}/vos-donnees` as const;
