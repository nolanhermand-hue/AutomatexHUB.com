"use client";

import { BillingSwitch } from "@/components/ui/BillingSwitch";
import { PricingPackGrid } from "@/components/pricing/PricingPackGrid";
import { PricingSurMesureBanner } from "@/components/pricing/PricingSurMesureBanner";
import { PricingProgramNotes } from "@/components/sections/PricingProgramNotes";
import { BTP_PRICING_HEADING } from "@/lib/btp-copy";
import { PRICING_HEADING } from "@/lib/constants";
import { useState } from "react";
import type { PricingBillingCycle } from "@/components/pricing/PricingPackCard";

export function BtpPricing() {
  const [cycle, setCycle] = useState<PricingBillingCycle>("monthly");

  return (
    <section id="pricing" className="bg-bg-card px-gutter py-12 md:py-16">
      <div className="mx-auto max-w-content">
        <h2 className="font-heading text-3xl text-text md:text-4xl">{BTP_PRICING_HEADING.h2}</h2>
        <p className="mt-3 max-w-readable text-sm text-muted md:text-base">{BTP_PRICING_HEADING.sub}</p>

        <BillingSwitch
          isAnnual={cycle === "annual"}
          onChange={(annual) => setCycle(annual ? "annual" : "monthly")}
          monthlyLabel={BTP_PRICING_HEADING.toggleMonthly}
          annualLabel={BTP_PRICING_HEADING.toggleAnnual}
          discountLabel={BTP_PRICING_HEADING.annualDiscountLabel}
          className="mt-8"
        />

        <PricingSurMesureBanner />

        <PricingPackGrid cycle={cycle} audience="btp" />

        <p className="mx-auto mt-10 max-w-[52ch] text-center text-sm text-muted">
          {PRICING_HEADING.customFitFootnote}
        </p>
        <p className="mt-4 text-center text-sm font-medium text-muted">{PRICING_HEADING.bannerLine}</p>

        <PricingProgramNotes foundersSegment="artisans" />
      </div>
    </section>
  );
}
