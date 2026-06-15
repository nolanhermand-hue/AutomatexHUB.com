/** Jetons couleur — miroir du thème sombre de app/globals.css (îlots démo). */
export const COLORS = {
  bg: "#080d1a",
  surface: "#0d1526",
  surface2: "#111e35",
  surface3: "#162240",
  border: "#1a2540",
  borderLight: "#2a3a5c",
  primary: "#e07856",
  primaryDark: "#b85a3a",
  text: "#e8edf5",
  muted: "#94a3b8",
  faint: "#8892a4",
  success: "#38a169",
  danger: "#e53e3e",
} as const;

export type Tone = "neutral" | "primary" | "success" | "danger" | "muted";

export function toneColor(tone: Tone): string {
  switch (tone) {
    case "primary":
      return COLORS.primary;
    case "success":
      return COLORS.success;
    case "danger":
      return COLORS.danger;
    case "muted":
      return COLORS.muted;
    default:
      return COLORS.text;
  }
}

export const VIDEO = {
  fps: 30,
  /** Démos « flux d'événements » (4 cartes) — paysage net (2x de 640×420). */
  event: { width: 1280, height: 840 },
  /** Timelines « terminal » (live demos) — portrait haut. */
  terminal: { width: 1120, height: 1500 },
} as const;
