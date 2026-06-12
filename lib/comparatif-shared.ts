/** Date de révision visible + JSON-LD dateModified des pages comparatif. */
export const COMPARATIF_LAST_UPDATED = "2026-06-12" as const;

export function formatComparatifUpdatedLabel(iso: string = COMPARATIF_LAST_UPDATED): string {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
