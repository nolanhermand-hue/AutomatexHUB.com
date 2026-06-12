"use client";

import { PricingPackGrid } from "@/components/pricing/PricingPackGrid";
import { PricingSurMesureBanner } from "@/components/pricing/PricingSurMesureBanner";
import { PRICING_HEADING } from "@/lib/constants";
import { HOME_PRICING } from "@/lib/home-copy";
import { BTP_PRICING_HEADING } from "@/lib/btp-copy";
import { cn } from "@/lib/cn";
import { SectionCta } from "@/components/ui/SectionCta";
import type { PricingPackAudience } from "@/lib/constants";

type PricingProps = {
  audience?: PricingPackAudience;
};

export function Pricing({ audience = "default" }: PricingProps) {
  const isHome = audience === "home";
  const isBtp = audience === "btp";

  const eyebrow = isHome ? HOME_PRICING.eyebrow : PRICING_HEADING.eyebrow;
  const h2 = isBtp ? BTP_PRICING_HEADING.h2 : isHome ? HOME_PRICING.h2 : PRICING_HEADING.h2;
  const sub = isBtp
    ? BTP_PRICING_HEADING.sub
    : isHome
      ? HOME_PRICING.sub
      : PRICING_HEADING.h2SurMesureHint;

  return (
    <section
      id="pricing"
      className={cn(
        "px-gutter py-12 md:py-16",
        isHome ? "home-surface" : "bg-bg-card",
      )}
      data-analytics-section="pricing"
    >
      <div className="mx-auto max-w-content">
        <p className="label-micro text-accent">{eyebrow}</p>
        <h2 className="mt-2 font-heading text-3xl text-text md:text-4xl">{h2}</h2>
        <p className="mt-3 max-w-[52ch] text-sm font-medium leading-relaxed text-muted md:text-[15px]">
          {sub}
        </p>

        <PricingSurMesureBanner />

        <PricingPackGrid audience={audience} variant={isHome ? "home" : "default"} />

        {!isHome && !isBtp ? (
          <p className="mx-auto mt-10 max-w-[52ch] text-center text-sm leading-relaxed text-muted md:text-[15px]">
            {PRICING_HEADING.customFitFootnote}
          </p>
        ) : null}

        <p className="mt-6 text-center text-sm font-medium text-muted">
          {isHome ? HOME_PRICING.banner : PRICING_HEADING.bannerLine}
        </p>

        <div className="mt-8 flex justify-center">
          <SectionCta analyticsId="pricing_cta" />
        </div>
      </div>
    </section>
  );
}
