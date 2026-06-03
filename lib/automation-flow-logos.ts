const BASE = "/assets/integrations";

export type FlowNodeVisual =
  | { kind: "logo"; src: string; alt: string }
  | { kind: "initials"; initials: string; alt: string };

const LOGO = {
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
    return logo(LOGO.n8n, "n8n");
  }
  if (
    n.includes("moteur") ||
    n.includes("synthese") ||
    n.includes("nlp") ||
    n.includes("score") ||
    n.includes("transcript")
  ) {
    return logo(LOGO.mistral, "Mistral AI");
  }
  if (n.includes("gmail") || n.includes("mail") || n.includes("outlook") || n.includes("boite") || n.includes("brouillon")) {
    return logo(LOGO.gmail, "Gmail");
  }
  if (n.includes("drive") || n.includes("dossier") || n.includes("historique") || n.includes("pilotage")) {
    return logo(LOGO.drive, "Google Drive");
  }
  if (n.includes("agenda") || n.includes("google cal") || n.includes("calendrier")) {
    return logo(LOGO.calendar, "Google Calendar");
  }
  if (n.includes("crm") || n.includes("sheet") || n.includes("notion") || n.includes("excel") || n.includes("erp")) {
    return logo(LOGO.sheets, "Google Sheets");
  }
  if (n.includes("telegram")) {
    return logo(LOGO.telegram, "Telegram");
  }
  if (n.includes("sms") || n.includes("standard") || n.includes("telephone") || n.includes("mobile") || n.includes("twilio")) {
    return logo(LOGO.twilio, "Twilio");
  }
  if (n.includes("portail") || n.includes("web") || n.includes("seloger") || n.includes("leboncoin")) {
    return logo(LOGO.leboncoin, "Portail annonces");
  }
  if (n.includes("client") || n.includes("equipe") || n.includes("direction")) {
    return logo(LOGO.brevo, "Email");
  }
  if (n.includes("terrain") || n.includes("vocal") || n.includes("micro")) {
    return logo(LOGO.maps, "Terrain");
  }
  if (n.includes("devis")) {
    return logo(LOGO.drive, "Devis");
  }
  if (n.includes("labels")) {
    return logo(LOGO.gmail, "Gmail");
  }

  return null;
}

function fromIcon(icon: string): FlowNodeVisual | null {
  switch (icon) {
    case "mail":
    case "inbox":
    case "edit":
    case "paperclip":
      return logo(LOGO.gmail, "Gmail");
    case "spark":
    case "chart":
    case "wrench":
      return logo(LOGO.mistral, "Mistral AI");
    case "calendar":
    case "clock":
      return logo(LOGO.calendar, "Google Calendar");
    case "folder":
    case "file":
    case "archive":
      return logo(LOGO.drive, "Google Drive");
    case "send":
    case "message":
    case "alert":
    case "bell":
    case "moon":
      return logo(LOGO.telegram, "Telegram");
    case "phone":
    case "mic":
      return logo(LOGO.twilio, "Twilio");
    case "bolt":
    case "database":
    case "task":
    case "flag":
    case "check":
    case "tag":
    case "users":
      return logo(LOGO.n8n, "n8n");
    case "table":
      return logo(LOGO.sheets, "Google Sheets");
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
