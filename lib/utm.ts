/**
 * I14 — UTM persistence
 * Capture les paramètres UTM au premier load et les stocke en sessionStorage.
 * Ré-injecté dans le formulaire de contact pour attribution.
 *
 * Convention :
 *   utm_source     (ex: google, linkedin, facebook, direct)
 *   utm_medium     (ex: cpc, organic, social, email)
 *   utm_campaign   (ex: pige-froide-2026, awareness-orne)
 *   utm_term       (mot-clé Google Ads)
 *   utm_content    (variation A/B)
 *   gclid          (Google click ID — preuve d'attribution Google Ads)
 *   fbclid         (Facebook click ID)
 */
const KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const;

const STORAGE_KEY = "ax-utm";

export function captureUtmFromUrl(): void {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const captured: Record<string, string> = {};
  KEYS.forEach((k) => {
    const v = params.get(k);
    if (v) captured[k] = v;
  });
  if (Object.keys(captured).length === 0) return;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(captured));
  } catch {
    /* storage indispo, on ignore */
  }
}

export function readUtm(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
