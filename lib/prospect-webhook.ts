import { normalizeFrenchPhoneDigits } from "@/lib/phone-fr";

const WEBHOOK_FORMULAIRE_PROSPECTS_URL =
  process.env.NEXT_PUBLIC_WEBHOOK_FORMULAIRE_PROSPECTS_URL?.trim() ?? "";

/** Honeypot field name — must match form inputs and `data-netlify-honeypot`. */
export const PROSPECT_HONEYPOT_FIELD = "company_website";

type SubmitProspectPayloadArgs = {
  formData: FormData;
  formName: string;
  variant?: string;
};

/** Minimal JSON body for n8n — no duplicates, no honeypot, no UTM. */
export type ProspectWebhookPayload = {
  prenom: string;
  nom: string;
  telephone: string;
  email: string;
  precisions?: string;
  secteur?: string;
  zone_orne?: string;
};

export type ProspectWebhookResult =
  | { ok: true; honeypot?: boolean }
  | { ok: false; error: string };

function getStringValue(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export function isProspectHoneypotTriggered(formData: FormData): boolean {
  return getStringValue(formData, PROSPECT_HONEYPOT_FIELD) !== "";
}

export function buildProspectWebhookPayload({
  formData,
}: SubmitProspectPayloadArgs): ProspectWebhookPayload {
  const prenom = getStringValue(formData, "prenom");
  const nom = getStringValue(formData, "nom");
  const email = getStringValue(formData, "email");
  const telephone = normalizeFrenchPhoneDigits(getStringValue(formData, "telephone"));
  const precisions =
    getStringValue(formData, "precisions") ||
    getStringValue(formData, "message");

  const payload: ProspectWebhookPayload = {
    prenom,
    nom,
    telephone,
    email,
  };

  if (precisions) payload.precisions = precisions;

  const secteur = getStringValue(formData, "secteur");
  const zone_orne = getStringValue(formData, "zone_orne");
  if (secteur) payload.secteur = secteur;
  if (zone_orne) payload.zone_orne = zone_orne;

  return payload;
}

export async function submitProspectFromFormData(
  args: SubmitProspectPayloadArgs,
): Promise<ProspectWebhookResult> {
  if (isProspectHoneypotTriggered(args.formData)) {
    return { ok: true, honeypot: true };
  }

  const prenom = getStringValue(args.formData, "prenom");
  const nom = getStringValue(args.formData, "nom");
  const email = getStringValue(args.formData, "email");
  const telephoneRaw = getStringValue(args.formData, "telephone");

  if (!prenom || !nom || !email || !normalizeFrenchPhoneDigits(telephoneRaw)) {
    return { ok: false, error: "Merci de remplir tous les champs obligatoires." };
  }

  const payload = buildProspectWebhookPayload(args);
  return submitProspectToWebhook(payload);
}

export async function submitProspectToWebhook(payload: ProspectWebhookPayload): Promise<ProspectWebhookResult> {
  if (!WEBHOOK_FORMULAIRE_PROSPECTS_URL) {
    return {
      ok: false,
      error:
        "Envoi indisponible : l’URL du webhook n’est pas configurée. Définissez NEXT_PUBLIC_WEBHOOK_FORMULAIRE_PROSPECTS_URL dans Netlify, puis relancez un déploiement complet.",
    };
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
