"use client";

import { BillingSwitch } from "@/components/ui/BillingSwitch";
import { PricingPackGrid } from "@/components/pricing/PricingPackGrid";
import { PricingSurMesureBanner } from "@/components/pricing/PricingSurMesureBanner";
import { PRICING_HEADING } from "@/lib/constants";
import { HOME_PRICING } from "@/lib/home-copy";
import { cn } from "@/lib/cn";
import { SectionCta } from "@/components/ui/SectionCta";
import { useState } from "react";
import type { PricingBillingCycle } from "@/components/pricing/PricingPackCard";

type PricingProps = {
  audience?: "default" | "home";
};

export function Pricing({ audience = "default" }: PricingProps) {
  const isHome = audience === "home";
  const [cycle, setCycle] = useState<PricingBillingCycle>("monthly");
  const packAudience = isHome ? "home" : "default";

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
        <p className="label-micro text-accent">
          {isHome ? HOME_PRICING.eyebrow : PRICING_HEADING.eyebrow}
        </p>
        <h2 className="mt-2 font-heading text-3xl text-text md:text-4xl">
          {isHome ? HOME_PRICING.h2 : PRICING_HEADING.h2}
        </h2>
        <p className="mt-3 max-w-[52ch] text-sm font-medium leading-relaxed text-muted md:text-[15px]">
          {isHome ? HOME_PRICING.sub : PRICING_HEADING.h2SurMesureHint}
        </p>

        <BillingSwitch
          isAnnual={cycle === "annual"}
          onChange={(annual) => setCycle(annual ? "annual" : "monthly")}
          monthlyLabel={PRICING_HEADING.toggleMonthly}
          annualLabel={PRICING_HEADING.toggleAnnual}
          discountLabel={PRICING_HEADING.annualDiscountLabel}
          className="mt-8"
        />

        <PricingSurMesureBanner />

        <PricingPackGrid
          cycle={cycle}
          audience={packAudience}
          variant={isHome ? "home" : "default"}
        />

        {!isHome ? (
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
