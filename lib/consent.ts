/**
 * Consentement cookies — logique pure (sans React), conforme CNIL.
 *
 * Principe : aucun dépôt de mesure Google Analytics tant que l'utilisateur
 * n'a pas explicitement cliqué « Tout accepter ». Le choix est conservé en
 * localStorage avec date + version, et redemandé au-delà de ~6 mois.
 */
export const CONSENT_STORAGE_KEY = "automatex-consent";
export const CONSENT_VERSION = 1;
/** Durée de vie du choix (~6 mois) — au-delà, on redemande. */
export const CONSENT_MAX_AGE_DAYS = 182;

export type ConsentDecision = {
  /** true = mesure Google Analytics autorisée. */
  analytics: boolean;
  /** Date ISO du choix. */
  date: string;
  /** Version du dispositif de consentement. */
  version: number;
};

const MAX_AGE_MS = CONSENT_MAX_AGE_DAYS * 24 * 60 * 60 * 1000;

/** Lit un choix valide et non expiré, sinon null (= à redemander). */
export function readStoredConsent(): ConsentDecision | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentDecision>;
    if (
      typeof parsed.analytics !== "boolean" ||
      typeof parsed.date !== "string" ||
      parsed.version !== CONSENT_VERSION
    ) {
      return null;
    }
    const ageMs = Date.now() - new Date(parsed.date).getTime();
    if (Number.isNaN(ageMs) || ageMs > MAX_AGE_MS) return null;
    return { analytics: parsed.analytics, date: parsed.date, version: parsed.version };
  } catch {
    return null;
  }
}

/** Persiste le choix et renvoie la décision normalisée. */
export function writeStoredConsent(analytics: boolean): ConsentDecision {
  const decision: ConsentDecision = {
    analytics,
    date: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(decision));
  } catch {
    // Stockage indisponible : on garde le choix en mémoire pour la session.
  }
  return decision;
}
