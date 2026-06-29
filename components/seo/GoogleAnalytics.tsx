"use client";

/**
 * Google Analytics 4 — chargé UNIQUEMENT après consentement explicite (CNIL).
 *
 * Tant que l'utilisateur n'a pas cliqué « Tout accepter », aucun script gtag
 * ni cookie GA n'est injecté (le composant ne rend rien). À l'acceptation,
 * Consent Mode v2 passe analytics_storage à « granted » dès la session courante.
 */
import { useConsent } from "@/providers/ConsentProvider";
import Script from "next/script";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export function GoogleAnalytics() {
  const { analyticsAllowed } = useConsent();
  if (!gaId || !analyticsAllowed) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', { analytics_storage: 'denied' });
          gtag('consent', 'update', { analytics_storage: 'granted' });
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
