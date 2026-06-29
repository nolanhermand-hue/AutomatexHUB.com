/** Charte officielle AutomateX — alignée sur app/globals.css (@theme). */
export const THEME = {
  navbar: "#070D1B",
  body: "#1B2330",
  surface: "#222C3C",
  surfaceHi: "#2A3648",
  border: "#2A3444",
  borderHi: "#3A4658",
  accent: "#E07757",
  accentHover: "#C75D3D",
  accentSubtle: "rgba(224,119,87,0.12)",
  success: "#5FA88C",
  successSubtle: "rgba(95,168,140,0.12)",
  title: "#FBFFFF",
  text: "#ADB9C9",
  faint: "#97A1B0",
} as const;

export const VIDEO = {
  width: 1280,
  height: 800,
  fps: 30,
  durationInFrames: 330,
} as const;

export const FONT = {
  mono: "ui-monospace, 'JetBrains Mono', SFMono-Regular, Menlo, monospace",
} as const;
