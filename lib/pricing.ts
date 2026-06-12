/** Tarification catalogue, loyalty, toggle annuel et places fondateurs. */

export const PRICING_CONFIG = {
  /** −15 % sur le mensuel · paiement 12 mois d'avance */
  annualDiscount: 0.15,
  annualDiscountLabel: "Économisez 15% · Paiement annuel",

  loyalty: {
    /** Mois 1–12 : prix catalogue */
    catalogMonths: 12,
    /** À partir du mois 13 */
    m12: { fromMonth: 13, discount: 0.05, label: "-5% dès 1 an" },
    /** À partir du mois 37 */
    m36: { fromMonth: 37, discount: 0.15, label: "-15% dès 3 ans" },
  },

  founders: {
    artisans: {
      total: 5,
      /** Mettre à jour manuellement à chaque signature */
      taken: 0,
      setupDiscount: 0.2,
      label: "Artisans BTP fondateurs",
    },
    diagnostiqueurs: {
      total: 5,
      taken: 0,
      setupDiscount: 0.2,
      label: "Diagnostiqueurs fondateurs",
    },
  },
} as const;

export const FOUNDERS_BENEFITS = [
  "Prix setup −20 %",
  "Prix mensuel bloqué à vie (même pendant les paliers loyalty futurs)",
  "Accès prioritaire aux nouvelles automatisations",
  "Point mensuel renforcé les 3 premiers mois (2 appels M1, M2, M3)",
  "Témoignage filmable demandé en échange (avec accord explicite)",
] as const;

export const LOYALTY_LINES = [
  "M1–M12 : prix catalogue (pas de remise loyalty)",
  "M13+ : −5 % sur le mensuel · prix bloqué",
  "M37+ : −15 % sur le mensuel · prix bloqué définitif",
] as const;

export function annualPrepayTotal(monthly: number): number {
  if (monthly <= 0) return 0;
  return Math.round(monthly * 12 * (1 - PRICING_CONFIG.annualDiscount));
}

export function founderSetupPrice(
  setup: number,
  segment: keyof typeof PRICING_CONFIG.founders,
): number {
  const rate = PRICING_CONFIG.founders[segment].setupDiscount;
  return Math.round(setup * (1 - rate));
}

function segmentSlotsLabel(
  segment: keyof typeof PRICING_CONFIG.founders,
): string {
  const f = PRICING_CONFIG.founders[segment];
  const left = Math.max(0, f.total - f.taken);
  const noun = segment === "artisans" ? "artisans" : "diagnostiqueurs";
  return `${left} place${left > 1 ? "s" : ""} ${noun}`;
}

/** Compteur honnête — deux segments */
export function formatFoundersAvailability(): string {
  const art = PRICING_CONFIG.founders.artisans;
  const diag = PRICING_CONFIG.founders.diagnostiqueurs;
  const artLeft = art.total - art.taken;
  const diagLeft = diag.total - diag.taken;

  if (artLeft === art.total && diagLeft === diag.total) {
    return `${art.total} places artisans · ${diag.total} places diagnostiqueurs · toutes disponibles`;
  }
  return `${segmentSlotsLabel("artisans")} · ${segmentSlotsLabel("diagnostiqueurs")}`;
}

/** Copy client : mise en place (1er mois inclus) + mensuel. */
export function formatMiseEnPlacePuisMensuel(setup: number, monthly: number): string {
  return `Mise en place ${setup.toLocaleString("fr-FR")}€ (1er mois inclus), puis ${monthly.toLocaleString("fr-FR")}€/mois.`;
}

export function formatFoundersSegment(
  segment: keyof typeof PRICING_CONFIG.founders,
): string {
  const f = PRICING_CONFIG.founders[segment];
  const left = Math.max(0, f.total - f.taken);
  if (left === f.total) {
    return `${f.total} places · toutes disponibles`;
  }
  return `${left} place${left > 1 ? "s" : ""} restante${left > 1 ? "s" : ""}`;
}
