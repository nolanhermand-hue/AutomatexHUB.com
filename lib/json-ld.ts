import {
  FAQ_ITEMS,
  GUARANTEE_COPY,
  NAP,
  OFFERS,
  SITE_URL,
  SOLUTION_HEADING,
  SOLUTION_STEPS,
} from "@/lib/constants";
import { BRAND, brandAbsolute } from "@/lib/brand";

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

/**
 * JSON-LD — H3 (ProfessionalService validé), H4 (FAQPage),
 *           H5 (HowTo), guarantee Offer.
 */
export function buildJsonLdGraph() {
  const businessId = `${SITE_URL}#business`;
  const personId = `${SITE_URL}#person-nolan`;

  // H4 — FAQPage
  const faqEntities = FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));

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
  const offerCatalog = OFFERS.map((offer) => ({
    "@type": "Offer",
    name: `${offer.name} — ${offer.monthly} €/mois`,
    description: offer.roiLine,
    price: String(offer.monthly),
    priceCurrency: "EUR",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: String(offer.monthly),
      priceCurrency: "EUR",
      referenceQuantity: { "@type": "QuantitativeValue", value: "1", unitCode: "MON" },
    },
  }));

  const logoUrl = brandAbsolute(BRAND.favicons.android512, SITE_URL);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": businessId,
        name: NAP.brand,
        description:
          "Automatex installe une réponse immédiate aux leads, un tri de mails et un classement des documents pour mandataires immobiliers indépendants en Normandie et dans l'Orne.",
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
          streetAddress: "61100 Flers, Normandie",
          addressLocality: NAP.city,
          postalCode: NAP.postalCode,
          addressRegion: NAP.region,
          addressCountry: NAP.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 48.7483,
          longitude: -0.5711,
        },
        areaServed,
        founder: { "@id": personId },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Formules Automatex pour mandataires immobiliers",
          itemListElement: offerCatalog,
        },
        // Garantie comme offre additionnelle structurée
        makesOffer: {
          "@type": "Offer",
          name: GUARANTEE_COPY.h2,
          description: GUARANTEE_COPY.body,
          eligibleDuration: {
            "@type": "QuantitativeValue",
            value: 30,
            unitCode: "DAY",
          },
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
        sameAs: [
          "https://www.linkedin.com/in/nolan-hermand",
        ],
      },
      // H4 — FAQPage : rich results éligibles
      {
        "@type": "FAQPage",
        mainEntity: faqEntities,
      },
      // H5 — HowTo : rich results pour Solution en 3 étapes
      {
        "@type": "HowTo",
        name: `${SOLUTION_HEADING.h2.replace(/\.$/, "")} en Normandie`,
        description:
          "Automatex installe une réponse immédiate et un tri des mails pour mandataires immobiliers à Flers (Orne) et en Normandie. Mise en place en 48 heures, sans engagement.",
        totalTime: "PT48H",
        step: howToSteps,
      },
      // Service schema
      {
        "@type": "Service",
        name: "Réponse automatique aux leads immobiliers pour mandataires",
        provider: { "@id": businessId },
        description:
          "Service de réponse immédiate aux leads entrants, tri des mails et classement des documents pour mandataires IAD, SAFTI, Capifrance en Normandie et dans l'Orne.",
        areaServed,
        serviceType: "Automatisation administrative pour mandataires immobiliers",
        offers: offerCatalog,
      },
      buildBreadcrumbList([{ name: "Accueil", path: "/" }]),
      {
        "@type": "SoftwareApplication",
        name: "Automatex — réponse aux leads mandataires",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        image: logoUrl,
        description:
          "Service de réponse immédiate aux leads et continuité de pipeline pour mandataires immobiliers en Normandie.",
        provider: { "@id": businessId },
        offers: {
          "@type": "Offer",
          price: String(OFFERS[0]?.monthly ?? 99),
          priceCurrency: "EUR",
        },
      },
    ],
  };
}
