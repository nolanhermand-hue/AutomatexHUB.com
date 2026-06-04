"use client";

import { BillingSwitch } from "@/components/ui/BillingSwitch";
import { PricingPackGrid } from "@/components/pricing/PricingPackGrid";
import { PricingSurMesureBanner } from "@/components/pricing/PricingSurMesureBanner";
import { PricingProgramNotes } from "@/components/sections/PricingProgramNotes";
import { TPE_FOUNDERS_NOTE } from "@/lib/automatisation-ia-tpe-content";
import { PRICING_HEADING } from "@/lib/constants";
import { formatFoundersAvailability } from "@/lib/pricing";
import { useState } from "react";
import type { PricingBillingCycle } from "@/components/pricing/PricingPackCard";

export function TpeAutomatisationPricing() {
  const [cycle, setCycle] = useState<PricingBillingCycle>("monthly");

  return (
    <section id="tarifs" className="border-t border-border px-gutter py-16 md:py-20">
      <div className="mx-auto max-w-content">
        <p className="label-micro text-muted">MODULE 04 — TARIFS</p>
        <h2 className="mt-3 font-heading text-3xl text-text md:text-4xl">
          Choisissez votre niveau d&apos;automatisation
        </h2>
        <p className="mt-3 max-w-readable text-muted">
          Mise en place + mensualité transparente. Basculez mensuel ou annuel (−15 %). Sur mesure si
          vous voulez moins ou plus que les packs.
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

        <PricingPackGrid cycle={cycle} audience="tpe" />

        <p className="mt-8 text-sm text-muted">
          <span className="font-semibold text-text">Places fondateur : </span>
          {TPE_FOUNDERS_NOTE}{" "}
          <span className="font-mono text-text">({formatFoundersAvailability()})</span>
        </p>

        <p className="mx-auto mt-8 max-w-[52ch] text-center text-sm text-muted">
          {PRICING_HEADING.customFitFootnote}
        </p>
        <p className="mt-4 text-center text-sm font-medium text-muted">{PRICING_HEADING.bannerLine}</p>

        <PricingProgramNotes />
      </div>
    </section>
  );
}
