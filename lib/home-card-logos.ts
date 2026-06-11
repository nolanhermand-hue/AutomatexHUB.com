import type { CatalogAutomation } from "@/lib/automations-catalog";
import {
  collectAutomationLogos,
  INTEGRATION_LOGO_PATHS,
  type IntegrationLogo,
} from "@/lib/automation-flow-logos";

export type { IntegrationLogo };

const P = INTEGRATION_LOGO_PATHS;

function logos(...items: IntegrationLogo[]): IntegrationLogo[] {
  return items;
}

export type HomePillarId = "leads" | "devis" | "relances" | "drive";

/** Logos sur les 4 cartes « Quatre leviers… » (accueil). */
export const HOME_PILLAR_LOGOS: Record<HomePillarId, IntegrationLogo[]> = {
  leads: logos(
    { src: P.gmail, alt: "Gmail" },
    { src: "/assets/integrations/sms-apple.svg", alt: "Messages (SMS)" },
  ),
  devis: logos(
    { src: P.mistral, alt: "Mistral AI" },
    { src: P.drive, alt: "Google Drive" },
  ),
  relances: logos(
    { src: P.gmail, alt: "Gmail" },
    { src: P.calendar, alt: "Google Calendar" },
  ),
  drive: logos(
    { src: P.drive, alt: "Google Drive" },
    { src: P.gmail, alt: "Gmail" },
  ),
};

const CATEGORY_FALLBACK: Record<string, IntegrationLogo[]> = {
  "appels & terrain btp": logos({ src: P.twilio, alt: "Twilio" }, { src: P.n8n, alt: "n8n" }),
  "relances & suivi": logos({ src: P.gmail, alt: "Gmail" }, { src: P.brevo, alt: "Brevo" }),
  "dictee & terrain": logos({ src: P.twilio, alt: "Twilio" }, { src: P.mistral, alt: "Mistral AI" }),
  "leads & reponses": logos({ src: P.leboncoin, alt: "Portail annonces" }, { src: P.gmail, alt: "Gmail" }),
  "documents & drive": logos({ src: P.gmail, alt: "Gmail" }, { src: P.drive, alt: "Google Drive" }),
  "mails & tri": logos({ src: P.gmail, alt: "Gmail" }, { src: P.mistral, alt: "Mistral AI" }),
  "resumes & planning": logos(
    { src: P.calendar, alt: "Google Calendar" },
    { src: P.gmail, alt: "Gmail" },
    { src: P.telegram, alt: "Telegram" },
  ),
  "suivi & rapports metier": logos(
    { src: P.sheets, alt: "Google Sheets" },
    { src: P.telegram, alt: "Telegram" },
  ),
};

function normalizeCategory(category: string): string {
  return category
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .trim();
}

/** 2–3 logos par carte catalogue accueil (étapes + repli catégorie). */
export function logosForHomeCatalogItem(item: CatalogAutomation): IntegrationLogo[] {
  const fromFlow = collectAutomationLogos(item.steps, 3);
  if (fromFlow.length >= 2) return fromFlow.slice(0, 3);

  const fallback = CATEGORY_FALLBACK[normalizeCategory(item.category)];
  if (!fallback) return fromFlow.length ? fromFlow : logos({ src: P.n8n, alt: "n8n" });

  const merged = [...fromFlow];
  for (const logo of fallback) {
    if (merged.length >= 3) break;
    if (!merged.some((m) => m.src === logo.src)) merged.push(logo);
  }
  return merged.slice(0, 3);
}
