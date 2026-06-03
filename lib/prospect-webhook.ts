const WEBHOOK_FORMULAIRE_PROSPECTS_URL =
  process.env.NEXT_PUBLIC_WEBHOOK_FORMULAIRE_PROSPECTS_URL?.trim() ?? "";

/** Honeypot field name — must match form inputs and `data-netlify-honeypot`. */
export const PROSPECT_HONEYPOT_FIELD = "company_website";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const;

type SubmitProspectPayloadArgs = {
  formData: FormData;
  formName: string;
  variant?: string;
};

export type ProspectWebhookPayload = {
  webhookName: "WebHook Formulaire prospects";
  formName: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  page: string;
  offer: string;
  context: string;
  timestamp: string;
  utm: Partial<Record<(typeof UTM_KEYS)[number], string>>;
  fields: Record<string, string>;
};

export type ProspectWebhookResult =
  | { ok: true; honeypot?: boolean }
  | { ok: false; error: string };

function getStringValue(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function buildUtmMap(formData: FormData) {
  return UTM_KEYS.reduce<Partial<Record<(typeof UTM_KEYS)[number], string>>>((acc, key) => {
    const value = getStringValue(formData, key);
    if (value) acc[key] = value;
    return acc;
  }, {});
}

function formDataToObject(formData: FormData) {
  const fields: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (typeof value !== "string") continue;
    if (key === PROSPECT_HONEYPOT_FIELD) continue;
    fields[key] = value;
  }
  return fields;
}

export function isProspectHoneypotTriggered(formData: FormData): boolean {
  return getStringValue(formData, PROSPECT_HONEYPOT_FIELD) !== "";
}

function resolvePageLocation(): string {
  if (typeof window === "undefined") return "";
  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}

export function buildProspectWebhookPayload({
  formData,
  formName,
  variant,
}: SubmitProspectPayloadArgs): ProspectWebhookPayload {
  const prenom = getStringValue(formData, "prenom");
  const nom = getStringValue(formData, "nom");
  const legacyName = getStringValue(formData, "name");
  const name = [prenom, nom].filter(Boolean).join(" ").trim() || legacyName;
  const email = getStringValue(formData, "email");
  const phone = getStringValue(formData, "telephone");
  const message = getStringValue(formData, "message");
  const offer = getStringValue(formData, "offre");
  const subject = getStringValue(formData, "sujet");
  const metier = getStringValue(formData, "metier");
  const activite = getStringValue(formData, "activite");
  const segment = getStringValue(formData, "segment") || variant || "";

  const context = [segment, subject, metier || activite].filter(Boolean).join(" | ");

  return {
    webhookName: "WebHook Formulaire prospects",
    formName,
    name,
    email,
    phone,
    message,
    page: resolvePageLocation(),
    offer,
    context,
    timestamp: new Date().toISOString(),
    utm: buildUtmMap(formData),
    fields: formDataToObject(formData),
  };
}

export async function submitProspectFromFormData(
  args: SubmitProspectPayloadArgs,
): Promise<ProspectWebhookResult> {
  if (isProspectHoneypotTriggered(args.formData)) {
    return { ok: true, honeypot: true };
  }
  const payload = buildProspectWebhookPayload(args);
  return submitProspectToWebhook(payload);
}

export async function submitProspectToWebhook(payload: ProspectWebhookPayload): Promise<ProspectWebhookResult> {
  if (!WEBHOOK_FORMULAIRE_PROSPECTS_URL) {
    return { ok: false, error: "Le webhook prospect n'est pas configuré." };
  }

  try {
    const response = await fetch(WEBHOOK_FORMULAIRE_PROSPECTS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return { ok: false, error: "Le webhook prospect a retourné une erreur." };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "Impossible d'envoyer vos informations pour le moment." };
  }
}
