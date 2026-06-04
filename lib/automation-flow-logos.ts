const BASE = "/assets/integrations";

export type FlowNodeVisual =
  | { kind: "logo"; src: string; alt: string }
  | { kind: "initials"; initials: string; alt: string };

export const INTEGRATION_LOGO_PATHS = {
  n8n: `${BASE}/n8n.svg`,
  mistral: `${BASE}/mistral.svg`,
  gmail: `${BASE}/gmail.svg`,
  drive: `${BASE}/google-drive.svg`,
  calendar: `${BASE}/google-calendar.svg`,
  sheets: `${BASE}/google-sheets.svg`,
  telegram: `${BASE}/telegram.svg`,
  twilio: `${BASE}/twilio.svg`,
  brevo: `${BASE}/brevo.svg`,
  leboncoin: `${BASE}/leboncoin.svg`,
  maps: `${BASE}/google-maps.svg`,
} as const;

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .trim();
}

function initialsFrom(label: string): string {
  const parts = label.split(/[\s·/+\-]+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

function logo(src: string, alt: string): FlowNodeVisual {
  return { kind: "logo", src, alt };
}

function fromLabel(label: string): FlowNodeVisual | null {
  const n = normalize(label);
  if (!n) return null;

  if (n.includes("automatex") || n === "regle" || n.includes("calcul") || n.includes("parseur")) {
    return logo(INTEGRATION_LOGO_PATHS.n8n, "n8n");
  }
  if (
    n.includes("moteur") ||
    n.includes("synthese") ||
    n.includes("nlp") ||
    n.includes("score") ||
    n.includes("transcript")
  ) {
    return logo(INTEGRATION_LOGO_PATHS.mistral, "Mistral AI");
  }
  if (
    n.includes("gmail") ||
    n.includes("mail") ||
    n.includes("outlook") ||
    n.includes("boite") ||
    n.includes("brouillon") ||
    n.includes("pj")
  ) {
    return logo(INTEGRATION_LOGO_PATHS.gmail, "Gmail");
  }
  if (
    n.includes("drive") ||
    n.includes("dossier") ||
    n.includes("historique") ||
    n.includes("pilotage") ||
    n.includes("devis envoye")
  ) {
    return logo(INTEGRATION_LOGO_PATHS.drive, "Google Drive");
  }
  if (n.includes("agenda") || n.includes("google cal") || n.includes("calendrier")) {
    return logo(INTEGRATION_LOGO_PATHS.calendar, "Google Calendar");
  }
  if (n.includes("crm") || n.includes("sheet") || n.includes("notion") || n.includes("excel") || n.includes("erp")) {
    return logo(INTEGRATION_LOGO_PATHS.sheets, "Google Sheets");
  }
  if (n.includes("telegram")) {
    return logo(INTEGRATION_LOGO_PATHS.telegram, "Telegram");
  }
  if (
    n.includes("sms") ||
    n.includes("standard") ||
    n.includes("telephone") ||
    n.includes("mobile") ||
    n.includes("twilio") ||
    n.includes("appel")
  ) {
    return logo(INTEGRATION_LOGO_PATHS.twilio, "Twilio");
  }
  if (n.includes("portail") || n.includes("web") || n.includes("seloger") || n.includes("leboncoin")) {
    return logo(INTEGRATION_LOGO_PATHS.leboncoin, "Portail annonces");
  }
  if (n.includes("client") || n.includes("equipe") || n.includes("direction")) {
    return logo(INTEGRATION_LOGO_PATHS.brevo, "Email");
  }
  if (n.includes("terrain") || n.includes("vocal") || n.includes("micro")) {
    return logo(INTEGRATION_LOGO_PATHS.maps, "Terrain");
  }
  if (n.includes("devis")) {
    return logo(INTEGRATION_LOGO_PATHS.drive, "Devis");
  }
  if (n.includes("labels")) {
    return logo(INTEGRATION_LOGO_PATHS.gmail, "Gmail");
  }

  return null;
}

function fromIcon(icon: string): FlowNodeVisual | null {
  switch (icon) {
    case "mail":
    case "inbox":
    case "edit":
    case "paperclip":
      return logo(INTEGRATION_LOGO_PATHS.gmail, "Gmail");
    case "spark":
    case "chart":
    case "wrench":
      return logo(INTEGRATION_LOGO_PATHS.mistral, "Mistral AI");
    case "calendar":
    case "clock":
      return logo(INTEGRATION_LOGO_PATHS.calendar, "Google Calendar");
    case "folder":
    case "file":
    case "archive":
      return logo(INTEGRATION_LOGO_PATHS.drive, "Google Drive");
    case "send":
    case "message":
    case "alert":
    case "bell":
    case "moon":
      return logo(INTEGRATION_LOGO_PATHS.telegram, "Telegram");
    case "phone":
    case "mic":
      return logo(INTEGRATION_LOGO_PATHS.twilio, "Twilio");
    case "bolt":
    case "database":
    case "task":
    case "flag":
    case "check":
    case "tag":
    case "users":
      return logo(INTEGRATION_LOGO_PATHS.n8n, "n8n");
    case "table":
      return logo(INTEGRATION_LOGO_PATHS.sheets, "Google Sheets");
    default:
      return null;
  }
}

/** Résout un nœud (from/to) vers logo officiel ou initiales. */
export function resolveFlowNode(label: string, icon: string): FlowNodeVisual {
  const trimmed = label.trim();
  const fromText = trimmed ? fromLabel(trimmed) : null;
  if (fromText) return fromText;

  const fromIco = fromIcon(icon);
  if (fromIco) return fromIco;

  const alt = trimmed || "Étape";
  return { kind: "initials", initials: initialsFrom(alt), alt };
}

export type IntegrationLogo = { src: string; alt: string };

/** Logos uniques (couleur) dérivés des étapes d’une automatisation. */
export function collectAutomationLogos(
  steps: { from: string; to: string; icon: string }[],
  max = 4,
): IntegrationLogo[] {
  const seen = new Set<string>();
  const out: IntegrationLogo[] = [];

  for (const step of steps) {
    for (const label of [step.from, step.to]) {
      const trimmed = label.trim();
      if (!trimmed) continue;
      const visual = resolveFlowNode(trimmed, step.icon);
      if (visual.kind !== "logo" || seen.has(visual.src)) continue;
      seen.add(visual.src);
      out.push({ src: visual.src, alt: visual.alt });
      if (out.length >= max) return out;
    }
  }

  return out;
}
