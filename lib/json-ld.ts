import { BTP_FAQ } from "@/lib/btp-copy";
import { TPE_FAQ, TPE_PAGE_PATH } from "@/lib/automatisation-ia-tpe-content";
import { GEO_MASTER_FAQ } from "@/lib/geo-master-faq";
import { HOME_FAQ } from "@/lib/home-copy";
import {
  FAQ_ITEMS,
  getPricingOfferDisplay,
  NAP,
  PAID_OFFERS,
  SITE_URL,
  SOVEREIGNTY_TRUST_LINE,
  SOLUTION_HEADING,
  SOLUTION_STEPS,
  type PackId,
} from "@/lib/constants";
import { BRAND, brandAbsolute } from "@/lib/brand";

const JSONLD_PACKS = [
  { name: "Pack Déclic", setup: 390, monthly: 99 },
  { name: "Pack Système", setup: 990, monthly: 249 },
  { name: "Pack Pilote", setup: 1690, monthly: 449 },
] as const;

const JSONLD_PRICE_RANGE = "390€–1690€ mise en place · 99€–449€/mois";

function buildJsonLdPackOffers(nameSuffix = "") {
  return JSONLD_PACKS.map(({ name, setup, monthly }) => ({
    "@type": "Offer" as const,
    name: nameSuffix ? `${name} ${nameSuffix}` : name,
    price: String(setup),
    priceCurrency: "EUR",
    description: `Mise en place ${setup}€ (1er mois inclus), puis ${monthly}€/mois`,
    priceSpecification: [
      {
        "@type": "UnitPriceSpecification",
        name: "Mise en place",
        price: String(setup),
        priceCurrency: "EUR",
      },
      {
        "@type": "UnitPriceSpecification",
        name: "Mensualité",
        price: String(monthly),
        priceCurrency: "EUR",
        referenceQuantity: { "@type": "QuantitativeValue", value: "1", unitCode: "MON" },
      },
    ],
  }));
}

export function buildBreadcrumbList(
  items: ReadonlyArray<{ name: string; path: string }>,
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function buildAboutPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Accueil", path: "/" },
        { name: "À propos", path: "/a-propos" },
      ]),
      {
        "@type": "AboutPage",
        name: "À propos d'Automatex",
        url: `${SITE_URL}/a-propos`,
        description:
          "Automatex, service français pour mandataires immobiliers en Normandie. Fondé en 2025 à Flers par Nolan Hermand.",
      },
    ],
  };
}

/** JSON-LD page locale mandataires + fil d'Ariane. */
export function buildLocalMandatairesJsonLd(opts: {
  path: string;
  pageName: string;
  city: string;
  description: string;
}) {
  const businessId = `${SITE_URL}#business`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Accueil", path: "/" },
        { name: opts.pageName, path: opts.path },
      ]),
      {
        "@type": "Service",
        name: `Automatex — mandataires immobiliers ${opts.city}`,
        provider: { "@id": businessId },
        description: opts.description,
        areaServed: [opts.city, "Orne", "Normandie"],
        serviceType: "Réponse immédiate aux leads pour mandataires",
      },
    ],
  };
}

/** FAQ JSON-LD variant for the global layout graph (0 or 1 FAQPage per HTML document). */
export type JsonLdFaqMode = "none" | "mandataires" | "btp" | "tpe" | "home" | "master";

const BTP_JSONLD_PATHS = [
  "/btp",
  "/automatisation-btp-orne",
  "/automatisation-artisan-flers",
  "/automatisation-artisan-alencon",
  "/automatisation-artisan-argentan",
] as const;

export const JSON_LD_FAQ_MODE_BY_PATH: Readonly<Record<string, JsonLdFaqMode>> = {
  "": "home",
  "/": "home",
  "/faq": "master",
  [TPE_PAGE_PATH]: "tpe",
  ...Object.fromEntries(BTP_JSONLD_PATHS.map((p) => [p, "btp" as const])),
};

export type BuildJsonLdGraphOptions = {
  faqMode?: JsonLdFaqMode;
};

function buildFaqMainEntity(mode: JsonLdFaqMode) {
  if (mode === "none") {
    return null;
  }
  if (mode === "master") {
    return GEO_MASTER_FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }));
  }
  if (mode === "home") {
    return HOME_FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }));
  }
  if (mode === "btp") {
    return BTP_FAQ.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }));
  }
  if (mode === "tpe") {
    return TPE_FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }));
  }
  return FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));
}

/**
 * JSON-LD — H3 (ProfessionalService validé), H4 (FAQPage),
 *           H5 (HowTo), guarantee Offer.
 */
export function buildJsonLdGraph(options?: BuildJsonLdGraphOptions) {
  const faqMode = options?.faqMode ?? "mandataires";
  const isHome = faqMode === "home";
  const businessId = `${SITE_URL}#business`;
  const localBusinessId = `${SITE_URL}#local-business`;
  const personId = `${SITE_URL}#person-nolan`;

  const faqEntities = buildFaqMainEntity(faqMode);

  // H5 — HowTo
  const howToSteps = SOLUTION_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.title,
    text: `${step.body} Source : Automatex, Flers (Orne), Normandie.`,
  }));

  // H9 — Géographie couverte
  const areaServed = [
    "Orne",
    "Normandie",
    "Calvados",
    "Manche",
    "Eure",
    "Seine-Maritime",
    "Flers",
    "Alençon",
    "Argentan",
    "L'Aigle",
    "Domfront",
    "Mortagne-au-Perche",
    "Vimoutiers",
  ];

  // Offer catalog mappé sur les 3 offres réelles (D1)
  const jsonLdAudience = isHome ? "home" : "default";
  const offerCatalog = PAID_OFFERS.map((offer) => ({
    "@type": "Offer",
    name: `${offer.name} — ${offer.annual} €/an`,
    description: getPricingOfferDisplay(offer.id as PackId, jsonLdAudience).roiEncart,
    price: String(offer.annual),
    priceCurrency: "EUR",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: String(offer.annual),
      priceCurrency: "EUR",
      referenceQuantity: { "@type": "QuantitativeValue", value: "1", unitCode: "ANN" },
    },
  }));

  const logoUrl = brandAbsolute(BRAND.symbolCircle, SITE_URL);

  const businessDescription = isHome
    ? "Automatex installe réponse aux leads, devis automatiques, relances et classement Drive pour artisans et TPE en Normandie et dans l'Orne. Démo 20 min ; mise en place en 48 h ouvrées après validation du périmètre."
    : "Automatex installe une réponse immédiate aux leads, un tri de mails et un classement des documents pour mandataires immobiliers indépendants en Normandie et dans l'Orne. Mise en place en 48 h ouvrées après validation du périmètre.";

  const knowsAbout = isHome
    ? [
        "Automatisation artisan BTP",
        "Devis automatique TPE",
        "Relances clients",
        "Appels manqués SMS",
        "Google Drive classement",
        "Gmail automatisation",
        "RGPD automatisation",
        SOVEREIGNTY_TRUST_LINE,
        NAP.hostingProvider,
      ]
    : [
        "Automatisation mandataire immobilier",
        "Leads immobilier perdus",
        "IAD France",
        "SAFTI",
        "Capifrance",
        "Optimhome",
        "EffiCity",
        "Gmail automatisation",
        "Telegram immobilier",
        "RGPD automatisation",
        SOVEREIGNTY_TRUST_LINE,
        NAP.hostingProvider,
      ];

  const offerCatalogName = isHome
    ? "Formules Automatex pour artisans et TPE"
    : "Formules Automatex pour mandataires immobiliers";

  const graph: Record<string, unknown>[] = [
      {
        "@type": "ProfessionalService",
        "@id": businessId,
        name: NAP.brand,
        description: businessDescription,
        url: SITE_URL,
        telephone: NAP.phoneE164,
        email: NAP.email,
        image: logoUrl,
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
          width: 512,
          height: 512,
        },
        priceRange: "€€",
        openingHours: "Mo-Fr 09:00-18:00",
        address: {
          "@type": "PostalAddress",
          streetAddress: NAP.streetAddress,
          addressLocality: NAP.city,
          postalCode: NAP.postalCode,
          addressRegion: `${NAP.department}, ${NAP.region}`,
          addressCountry: NAP.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 48.7483,
          longitude: -0.5711,
        },
        areaServed,
        knowsAbout,
        founder: { "@id": personId },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: offerCatalogName,
          itemListElement: offerCatalog,
        },
      },
      // Person — fondateur
      {
        "@type": "Person",
        "@id": personId,
        name: NAP.founder,
        jobTitle: NAP.role,
        telephone: NAP.phoneE164,
        email: NAP.email,
        worksFor: { "@id": businessId },
        address: {
          "@type": "PostalAddress",
          addressLocality: NAP.city,
          addressRegion: NAP.region,
          addressCountry: NAP.country,
        },
        sameAs: [NAP.linkedinUrl],
      },
      {
        "@type": "LocalBusiness",
        "@id": localBusinessId,
        name: NAP.brand,
        description: businessDescription,
        url: SITE_URL,
        telephone: NAP.phoneE164,
        email: NAP.email,
        image: logoUrl,
        priceRange: "€€",
        openingHours: "Mo-Fr 09:00-18:00",
        address: {
          "@type": "PostalAddress",
          streetAddress: NAP.streetAddress,
          addressLocality: NAP.city,
          postalCode: NAP.postalCode,
          addressRegion: `${NAP.department}, ${NAP.region}`,
          addressCountry: NAP.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 48.7483,
          longitude: -0.5711,
        },
        areaServed,
        founder: { "@id": personId },
      },
      // H5 — HowTo : rich results pour Solution en 3 étapes
      {
        "@type": "HowTo",
        name: isHome
          ? `${SOLUTION_HEADING.h2.replace(/\.$/, "")} pour artisans et TPE en Normandie`
          : `${SOLUTION_HEADING.h2.replace(/\.$/, "")} en Normandie`,
        description: isHome
          ? "Automatex installe réponse aux messages, devis et relances pour artisans et TPE à Flers (Orne) et en Normandie. 48 h ouvrées après validation du périmètre, sans engagement."
          : "Automatex installe une réponse immédiate et un tri des mails pour mandataires immobiliers à Flers (Orne) et en Normandie. 48 h ouvrées après validation du périmètre, sans engagement.",
        totalTime: "P2D",
        step: howToSteps,
      },
      // Service schema
      {
        "@type": "Service",
        name: isHome
          ? "Automatisation leads, devis et relances pour artisans et TPE"
          : "Réponse automatique aux leads immobiliers pour mandataires",
        provider: { "@id": businessId },
        description: isHome
          ? "Service de réponse aux leads, devis, relances et classement documents pour artisans BTP et TPE en Normandie et dans l'Orne."
          : "Service de réponse immédiate aux leads entrants, tri des mails et classement des documents pour mandataires IAD, SAFTI, Capifrance en Normandie et dans l'Orne.",
        areaServed,
        serviceType: isHome
          ? "Automatisation administrative pour artisans et TPE"
          : "Automatisation administrative pour mandataires immobiliers",
        offers: offerCatalog,
      },
      buildBreadcrumbList([{ name: "Accueil", path: "/" }]),
      {
        "@type": "SoftwareApplication",
        name: "Automatex",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        image: logoUrl,
        description: isHome
          ? "Réponse aux leads en moins de 2 minutes, devis, relances et classement Google Drive pour artisans et TPE en Normandie."
          : "Réponse aux leads en moins de 2 minutes, tri des emails et classement Google Drive pour mandataires IAD, SAFTI et Capifrance en Normandie.",
        provider: { "@id": businessId },
        featureList: [
          "Réponse aux leads en moins de 2 minutes",
          "Notification téléphone sur chaque message urgent",
          "Tri des emails et brouillons de réponse",
          "Résumé du soir et planning du matin sur Telegram",
          "Classement automatique des documents dans Google Drive",
          SOVEREIGNTY_TRUST_LINE,
          "Conforme RGPD",
        ],
        offers: offerCatalog,
      },
  ];

  if (faqEntities) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqEntities,
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

/** JSON-LD landing BTP — ProfessionalService + Service/offers sur /btp. */
export function buildBtpServiceJsonLd(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const pageUrl = `${SITE_URL}${normalized}`.replace(/\/$/, "") || `${SITE_URL}/btp`;
  const isBtpLanding = normalized === "/btp" || normalized === "/btp/";

  const professional = {
    "@type": "ProfessionalService",
    name: "Automatex Hub",
    description:
      `Système pour mandataires immobiliers et artisans BTP dans l'Orne et Normandie. Devis, appels manqués, accompagnement mensuel. ${SOVEREIGNTY_TRUST_LINE}.`,
    url: isBtpLanding ? `${SITE_URL}/btp` : pageUrl,
    telephone: NAP.phoneE164,
    email: NAP.email,
    founder: {
      "@type": "Person",
      name: NAP.founder,
      jobTitle: "Fondateur et dirigeant",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: NAP.city,
      addressRegion: NAP.department,
      postalCode: NAP.postalCode,
      addressCountry: "FR",
      streetAddress: NAP.streetAddress,
    },
    areaServed: [
      { "@type": "City", name: "Flers" },
      { "@type": "City", name: "Alençon" },
      { "@type": "City", name: "Argentan" },
      { "@type": "AdministrativeArea", name: "Orne" },
      { "@type": "AdministrativeArea", name: "Normandie" },
    ],
    serviceType: [
      "Système TPE immobilier",
      "Système TPE BTP",
      "Gestion devis artisan",
      "Réponse appels manqués",
      "Accompagnement numérique PME",
    ],
    priceRange: JSONLD_PRICE_RANGE,
  };

  if (!isBtpLanding) {
    return { "@context": "https://schema.org", ...professional };
  }

  const btpService = {
    "@type": "Service",
    name: "Système artisans BTP — Orne",
    provider: { "@type": "Organization", name: "Automatex Hub" },
    areaServed: { "@type": "AdministrativeArea", name: "Orne" },
    audience: { "@type": "Audience", audienceType: "Artisans BTP TPE" },
    offers: buildJsonLdPackOffers("BTP"),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [professional, btpService],
  };
}

/** JSON-LD page pilier TPE — Service (FAQPage via layout StructuredData). */
export function buildTpeAutomatisationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Accueil", path: "/" },
        { name: "Automatisation IA TPE", path: TPE_PAGE_PATH },
      ]),
      {
        "@type": "Service",
        name: "Automatisation IA pour TPE et PME — Automatex Hub",
        url: `${SITE_URL}${TPE_PAGE_PATH}`,
        description:
          "Système d'automatisation pour TPE et PME : réponses automatiques, devis, classement documents, relances. Accompagnement humain mensuel inclus.",
        provider: {
          "@type": "LocalBusiness",
          name: NAP.brand,
          founder: { "@type": "Person", name: NAP.founder },
          address: {
            "@type": "PostalAddress",
            addressLocality: NAP.city,
            addressRegion: NAP.department,
            postalCode: NAP.postalCode,
            addressCountry: NAP.country,
            streetAddress: NAP.streetAddress,
          },
          telephone: NAP.phoneE164,
          priceRange: JSONLD_PRICE_RANGE,
        },
        areaServed: { "@type": "Country", name: "France" },
        audience: {
          "@type": "BusinessAudience",
          audienceType: "TPE PME indépendants artisans professions libérales",
        },
        offers: buildJsonLdPackOffers(),
      },
    ],
  };
}

export function buildLocalBtpJsonLd(opts: {
  path: string;
  pageName: string;
  city: string;
  description: string;
}) {
  const businessId = `${SITE_URL}#business`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Accueil", path: "/" },
        { name: opts.pageName, path: opts.path },
      ]),
      {
        "@type": "Service",
        name: `Automatex — artisans BTP ${opts.city}`,
        provider: { "@id": businessId },
        description: opts.description,
        areaServed: [opts.city, "Orne", "Normandie"],
        serviceType: "Devis et appels manqués pour artisans",
      },
    ],
  };
}

function buildFaqPageFromItems(items: ReadonlyArray<{ q: string; a: string }>) {
  return {
    "@type": "FAQPage" as const,
    mainEntity: items.map((item) => ({
      "@type": "Question" as const,
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: item.a,
      },
    })),
  };
}

/** JSON-LD page ville cluster /normandie/{slug}. */
export function buildNormandieVilleJsonLd(opts: {
  path: string;
  cityName: string;
  department: string;
  description: string;
  faq: ReadonlyArray<{ q: string; a: string }>;
}) {
  const businessId = `${SITE_URL}#business`;
  const localBusinessId = `${SITE_URL}#local-business`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Accueil", path: "/" },
        { name: "Normandie", path: "/normandie" },
        { name: opts.cityName, path: opts.path },
      ]),
      {
        "@type": "Service",
        name: `Automatex — artisans et diagnostiqueurs ${opts.cityName}`,
        provider: { "@id": businessId },
        description: opts.description,
        areaServed: [opts.cityName, opts.department, "Normandie", "France"],
        serviceType: "Automatisation administrative pour artisans et diagnostiqueurs",
      },
      {
        "@type": "LocalBusiness",
        "@id": localBusinessId,
        name: NAP.brand,
        description: opts.description,
        url: `${SITE_URL}${opts.path}`,
        telephone: NAP.phoneE164,
        address: {
          "@type": "PostalAddress",
          addressLocality: NAP.city,
          postalCode: NAP.postalCode,
          addressRegion: `${NAP.department}, ${NAP.region}`,
          addressCountry: NAP.country,
        },
        areaServed: [opts.cityName, opts.department],
      },
      buildFaqPageFromItems(opts.faq),
    ],
  };
}

/** JSON-LD pilier /normandie. */
export function buildNormandiePilierJsonLd(opts: {
  description: string;
  faq: ReadonlyArray<{ q: string; a: string }>;
}) {
  const businessId = `${SITE_URL}#business`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Accueil", path: "/" },
        { name: "Normandie", path: "/normandie" },
      ]),
      {
        "@type": "Service",
        name: "Automatex — automatisation artisans et diagnostiqueurs Normandie",
        provider: { "@id": businessId },
        description: opts.description,
        areaServed: ["Normandie", "Orne", "Calvados", "Manche", "Eure", "Seine-Maritime"],
        serviceType: "Automatisation pour artisans BTP, diagnostiqueurs et TPE",
      },
      buildFaqPageFromItems(opts.faq),
    ],
  };
}

/** JSON-LD pilier cocon /automatisation-pour-artisans. */
export function buildAutomatisationCoconPilierJsonLd(opts: {
  description: string;
  faq: ReadonlyArray<{ q: string; a: string }>;
}) {
  const businessId = `${SITE_URL}#business`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Accueil", path: "/" },
        { name: "Automatisations pro", path: "/automatisation-pour-artisans" },
      ]),
      {
        "@type": "Service",
        name: "Automatex — automatisations pour artisans et indépendants",
        provider: { "@id": businessId },
        description: opts.description,
        areaServed: ["Normandie", "Orne", "France"],
        serviceType: "Relances, réponses et rappels sans remplacer le logiciel métier",
      },
      buildFaqPageFromItems(opts.faq),
    ],
  };
}

/** JSON-LD page douleur cocon. */
export function buildAutomatisationCoconPainJsonLd(opts: {
  path: string;
  serviceName: string;
  description: string;
  faq: ReadonlyArray<{ q: string; a: string }>;
}) {
  const businessId = `${SITE_URL}#business`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbList([
        { name: "Accueil", path: "/" },
        { name: "Automatisations pro", path: "/automatisation-pour-artisans" },
        { name: opts.serviceName, path: opts.path },
      ]),
      {
        "@type": "Service",
        name: opts.serviceName,
        provider: { "@id": businessId },
        description: opts.description,
        areaServed: ["Normandie", "Orne", "France"],
        serviceType: "Automatisation administrative pour indépendants",
      },
      buildFaqPageFromItems(opts.faq),
    ],
  };
}
