const BASE = "/assets/integrations";

/** Bande hero sous le CTA : 3 outils du quotidien (pas le catalogue). */
export const HOME_HERO_INTEGRATION_LOGOS = [
  { id: "gmail", name: "Gmail", src: `${BASE}/gmail.svg` },
  { id: "google-calendar", name: "Google Agenda", src: `${BASE}/google-calendar.svg` },
  {
    id: "sms-apple",
    name: "Messages (SMS)",
    src: `${BASE}/sms-apple.svg`,
  },
] as const;

export type HomeHeroIntegrationLogo = (typeof HOME_HERO_INTEGRATION_LOGOS)[number];

/** 15 outils — barre de confiance (hors hero). */
export const HOME_TECH_LOGOS = [
  { id: "n8n", name: "N8N", src: `${BASE}/n8n.svg`, ring: "hub" as const },
  { id: "mistral", name: "Mistral", src: `${BASE}/mistral.svg`, ring: "inner" as const },
  { id: "gmail", name: "Gmail", src: `${BASE}/gmail.svg`, ring: "inner" as const },
  { id: "google-drive", name: "Google Drive", src: `${BASE}/google-drive.svg`, ring: "inner" as const },
  { id: "google-calendar", name: "Google Calendar", src: `${BASE}/google-calendar.svg`, ring: "inner" as const },
  { id: "google-sheets", name: "Google Sheets", src: `${BASE}/google-sheets.svg`, ring: "inner" as const },
  { id: "google-maps", name: "Google Maps", src: `${BASE}/google-maps.svg`, ring: "inner" as const },
  { id: "brevo", name: "Brevo", src: `${BASE}/brevo.svg`, ring: "outer" as const },
  { id: "twilio", name: "Twilio", src: `${BASE}/twilio.svg`, ring: "outer" as const },
  { id: "telegram", name: "Telegram", src: `${BASE}/telegram.svg`, ring: "outer" as const },
  { id: "leboncoin", name: "Leboncoin", src: `${BASE}/leboncoin.svg`, ring: "outer" as const },
  { id: "linkedin", name: "LinkedIn", src: `${BASE}/linkedin.svg`, ring: "outer" as const },
  { id: "whatsapp", name: "WhatsApp", src: `${BASE}/whatsapp.svg`, ring: "outer" as const },
  { id: "slack", name: "Slack", src: `${BASE}/slack.svg`, ring: "outer" as const },
  { id: "calendly", name: "Calendly", src: `${BASE}/calendly.svg`, ring: "outer" as const },
] as const;

export type HomeTechLogo = (typeof HOME_TECH_LOGOS)[number];

export const HOME_TECH_HUB = HOME_TECH_LOGOS.find((t) => t.ring === "hub")!;
export const HOME_TECH_INNER = HOME_TECH_LOGOS.filter((t) => t.ring === "inner");
export const HOME_TECH_OUTER = HOME_TECH_LOGOS.filter((t) => t.ring === "outer");
