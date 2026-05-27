/**
 * Plausible Analytics — I1
 *
 * RGPD-friendly et exempté de bandeau cookie par la CNIL (sous conditions,
 * cf. délibération « solutions de mesure d'audience »). I2 — Microsoft Clarity
 * est chargé conditionnellement si NEXT_PUBLIC_CLARITY_ID est défini.
 *
 * Variables d'env :
 *   NEXT_PUBLIC_PLAUSIBLE_DOMAIN  (ex: automatex-hub.com)
 *   NEXT_PUBLIC_CLARITY_ID        (optionnel — heatmaps Clarity)
 */
import Script from "next/script";

export function Plausible() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <>
      {domain ? (
        <Script
          defer
          data-domain={domain}
          src="https://plausible.io/js/script.outbound-links.js"
          strategy="lazyOnload"
        />
      ) : null}

      {clarityId ? (
        <Script
          id="clarity-snippet"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${clarityId}");`,
          }}
        />
      ) : null}
    </>
  );
}
