"use client";

import { trackCtaClicked } from "@/lib/analytics";
import { NAP } from "@/lib/constants";
import { useEffect, useRef, useState } from "react";

type StickyMobileCtaProps = {
  ctaHref: string;
  ctaLabel: string;
  analyticsId: string;
  /** Affiche la barre seulement quand le CTA hero sort du viewport (mobile). */
  observeHeroPrimary?: boolean;
  /** Barre unique pleine largeur (sans bouton Appeler). */
  singleCtaBar?: boolean;
};

/** Barre fixe mobile — rappel + appel direct, ou CTA unique observé depuis le hero. */
export function StickyMobileCta({
  ctaHref,
  ctaLabel,
  analyticsId,
  observeHeroPrimary = false,
  singleCtaBar = false,
}: StickyMobileCtaProps) {
  const stickyRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!observeHeroPrimary || typeof window === "undefined") return;
    const hero = document.querySelector(".hero-cta-primary");
    const sticky = stickyRef.current;
    if (!hero || !sticky) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [observeHeroPrimary]);

  if (singleCtaBar && observeHeroPrimary) {
    return (
      <div
        ref={stickyRef}
        className={`sticky-cta-mobile md:hidden ${visible ? "visible" : ""}`}
        role="region"
        aria-label="Réserver un appel"
      >
        <a
          href={ctaHref}
          className="btn-bracket btn-bracket-primary w-full justify-center"
          data-analytics-cta={analyticsId}
          onClick={() => trackCtaClicked(analyticsId)}
        >
          {ctaLabel}
        </a>
      </div>
    );
  }

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
