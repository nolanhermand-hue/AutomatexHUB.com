import { NAP, SITE_URL } from "@/lib/constants";

/** Métadonnées communes aux documents légaux (LCEN, RGPD, CGV). */
export const LEGAL = {
  lastUpdated: "19 mai 2026",
  siret: NAP.siret,
  nic: NAP.nic,
  ape: NAP.ape,
  apeLabel: NAP.apeLabel,
  status: "Entrepreneur individuel (EI)",
  foundingYear: "2026",
  siteUrl: SITE_URL,
  netlify: {
    name: "Netlify Inc.",
    street: "2325 3rd Street, Suite 215",
    city: "San Francisco, CA 94107",
    country: "États-Unis",
    url: "https://www.netlify.com",
  },
  ovh: {
    name: "OVHcloud SAS",
    street: "2 rue Kellermann",
    city: "59100 Roubaix, France",
    rcs: "RCS Lille Métropole 424 761 419 00045",
    url: "https://www.ovhcloud.com",
  },
  mediator: {
    name: "CM2C — Centre de médiation de la consommation de conciliateurs de justice",
    url: "https://www.cm2c.net",
  },
  tvaNotice:
    "TVA non applicable — article 293 B du CGI (franchise en base de TVA).",
} as const;

export function legalContactBlock() {
  return {
    email: NAP.email,
    phone: NAP.phoneDisplay,
    phoneE164: NAP.phoneE164,
    street: NAP.streetAddress,
    address: `${NAP.streetAddress}, ${NAP.postalCode} ${NAP.city}, ${NAP.region}, France`,
    cityLine: `${NAP.city}, ${NAP.postalCode}, ${NAP.region}, France`,
    founder: NAP.founder,
    brand: NAP.brand,
    siret: NAP.siret,
  };
}
