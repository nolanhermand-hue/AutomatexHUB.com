/**
 * Analytics — I3-I15
 * Tracking double : Google Analytics (gtag) + Plausible (event-based).
 * Tous les events sont dual-fired pour comparer.
 */
const GA_EVENT_CALCULATOR = "calculateur_utilise";
const GA_EVENT_CTA = "cta_clique";
const GA_EVENT_FORM = "formulaire_soumis";
const GA_EVENT_OFFER = "offre_vue";
const GA_EVENT_SCROLL = "scroll_depth";

function getGtag(): typeof window.gtag | undefined {
  if (typeof window === "undefined") return undefined;
  return window.gtag;
}

function getPlausible(): ((event: string, opts?: { props?: Record<string, string | number> }) => void) | undefined {
  if (typeof window === "undefined") return undefined;
  return window.plausible;
}

export function trackCalculatorUsed(): void {
  getGtag()?.("event", GA_EVENT_CALCULATOR);
  getPlausible()?.(GA_EVENT_CALCULATOR);
}

export function trackCtaClicked(sectionOrigin: string): void {
  getGtag()?.("event", GA_EVENT_CTA, { section_origine: sectionOrigin });
  getPlausible()?.(GA_EVENT_CTA, { props: { origin: sectionOrigin } });
}

export function trackFormSubmitted(): void {
  getGtag()?.("event", GA_EVENT_FORM);
  getPlausible()?.(GA_EVENT_FORM);
}

export function trackOfferViewed(offerId: string): void {
  getGtag()?.("event", GA_EVENT_OFFER, { offer_id: offerId });
  getPlausible()?.(GA_EVENT_OFFER, { props: { offer: offerId } });
}

/** I10 — Scroll depth tracking (déclenchés depuis ScrollTracker) */
export function trackScrollDepth(percent: 25 | 50 | 75 | 90): void {
  getGtag()?.("event", GA_EVENT_SCROLL, { percent });
  getPlausible()?.(`${GA_EVENT_SCROLL}_${percent}`);
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    plausible?: (event: string, opts?: { props?: Record<string, string | number> }) => void;
  }
}
