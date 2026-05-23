"use client";

import { trackCtaClicked } from "@/lib/analytics";
import { NAP } from "@/lib/constants";

type StickyMobileCtaProps = {
  ctaHref: string;
  ctaLabel: string;
  analyticsId: string;
};

/** Barre fixe mobile — rappel + appel direct. */
export function StickyMobileCta({ ctaHref, ctaLabel, analyticsId }: StickyMobileCtaProps) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg-card/95 px-gutter py-3 shadow-[0_-4px_24px_rgb(26_26_24/0.08)] backdrop-blur-md md:hidden"
      role="region"
      aria-label="Actions rapides"
    >
      <div className="mx-auto flex max-w-content gap-2">
        <a
          href={`tel:${NAP.phoneE164}`}
          className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-md border border-border text-sm font-semibold text-text"
          onClick={() => trackCtaClicked("sticky_call")}
        >
          Appeler
        </a>
        <a
          href={ctaHref}
          className="btn-bracket btn-bracket-primary"
          data-analytics-cta={analyticsId}
          onClick={() => trackCtaClicked(analyticsId)}
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}
