import { BTP_FAQ } from "@/lib/btp-copy";
import { TPE_FAQ, TPE_PAGE_PATH } from "@/lib/automatisation-ia-tpe-content";
import { FAQ_ITEMS, GUARANTEE_COPY, NAP, OFFERS, SITE_URL, SOVEREIGNTY_TRUST_LINE, SOLUTION_HEADING, SOLUTION_STEPS, } from "@/lib/constants";
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
  const offerCatalog = OFFERS.filter((offer) => !offer.customOffer).map((offer) => ({
    "@type": "Offer",
    name: `${offer.name} — ${offer.annual} €/an`,
    description: offer.roiLine,
    price: String(offer.annual),
    priceCurrency: "EUR",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: String(offer.annual),
      priceCurrency: "EUR",
      referenceQuantity: { "@type": "QuantitativeValue", value: "1", unitCode: "ANN" },
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
        knowsAbout: [
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
        ],
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
        name: "Automatex",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        image: logoUrl,
        description:
          "Réponse aux leads en moins de 2 minutes, tri des emails et classement Google Drive pour mandataires IAD, SAFTI et Capifrance en Normandie.",
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
    ],
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
    priceRange: "99€–449€/mois",
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
    offers: [
      { "@type": "Offer", name: "Formule Départ BTP", price: "99", priceCurrency: "EUR" },
      { "@type": "Offer", name: "Formule Essentiel BTP", price: "249", priceCurrency: "EUR" },
      { "@type": "Offer", name: "Formule Full BTP", price: "449", priceCurrency: "EUR" },
    ],
  };

  const btpFaq = {
    "@type": "FAQPage",
    mainEntity: BTP_FAQ.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [professional, btpService, btpFaq],
  };
}

/** JSON-LD page pilier TPE — Service + FAQPage. */
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
          priceRange: "99€–449€/mois",
        },
        areaServed: { "@type": "Country", name: "France" },
        audience: {
          "@type": "BusinessAudience",
          audienceType: "TPE PME indépendants artisans professions libérales",
        },
        offers: [
          { "@type": "Offer", name: "Formule Départ", price: "99", priceCurrency: "EUR" },
          { "@type": "Offer", name: "Formule Essentiel", price: "249", priceCurrency: "EUR" },
          { "@type": "Offer", name: "Formule Full", price: "449", priceCurrency: "EUR" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: TPE_FAQ.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
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
