/** Tarification catalogue — affichage client (mensuel uniquement). */

/** Copy client : mise en place (1er mois inclus) + mensuel. */
export function formatMiseEnPlacePuisMensuel(setup: number, monthly: number): string {
  return `Mise en place ${setup.toLocaleString("fr-FR")}€ (1er mois inclus), puis ${monthly.toLocaleString("fr-FR")}€/mois.`;
}
