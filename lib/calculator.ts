import { HOURS_LOST_PER_SALE_PER_YEAR, VALUE_PER_LEAD_EUROS } from "./constants";

/** Leads perdus estimés par semaine (moyenne terrain 2,3 sur une visite type). */
export function calculateLeadsLostPerWeek(nbVentes: number): number {
  return Math.round(((nbVentes * 2.3) / 52) * 7 * 10) / 10;
}

/** CA mission potentiellement en jeu sur 12 mois (hypothèse prudentielle 15 % de missions perdues). */
export function calculateEurosLostPerYear(nbVentes: number): number {
  return Math.round(nbVentes * VALUE_PER_LEAD_EUROS * 0.15);
}

/** Heures perdues sur l’administratif non productif (ordre de grandeur diagnostiqueur). */
export function calculateHoursLostPerYear(nbVentes: number): number {
  return nbVentes * HOURS_LOST_PER_SALE_PER_YEAR;
}

export function calculateBreakevenLeads(setup: number, monthly: number): number {
  return Math.ceil((setup + monthly) / VALUE_PER_LEAD_EUROS);
}
