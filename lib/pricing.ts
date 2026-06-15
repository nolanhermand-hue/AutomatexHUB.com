/** Tarification catalogue — affichage client (mensuel uniquement). */

/** Copy client : mise en place + mensuel (format prospect officiel). */
export function formatMiseEnPlacePuisMensuel(setup: number, monthly: number): string {
  return `${setup.toLocaleString("fr-FR")} € à la mise en place, puis ${monthly.toLocaleString("fr-FR")} €/mois.`;
}
