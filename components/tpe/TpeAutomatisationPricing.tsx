"use client";

import { PricingPackGrid } from "@/components/pricing/PricingPackGrid";
import { PricingSurMesureBanner } from "@/components/pricing/PricingSurMesureBanner";
import { PRICING_HEADING } from "@/lib/constants";

export function TpeAutomatisationPricing() {
  return (
    <section id="tarifs" className="border-t border-border px-gutter py-16 md:py-20">
      <div className="mx-auto max-w-content">
        <p className="label-micro text-muted">MODULE 04 — TARIFS</p>
        <h2 className="mt-3 font-heading text-3xl text-text md:text-4xl">
          Choisissez votre niveau d&apos;automatisation
        </h2>
        <p className="mt-3 max-w-readable text-muted">
          Mise en place + mensualité transparente. Sur mesure si vous voulez moins ou plus que les
          packs.
        </p>

        <PricingSurMesureBanner />

        <PricingPackGrid audience="tpe" />

        <p className="mx-auto mt-8 max-w-[52ch] text-center text-sm text-muted">
          {PRICING_HEADING.customFitFootnote}
        </p>
        <p className="mt-4 text-center text-sm font-medium text-muted">{PRICING_HEADING.bannerLine}</p>
      </div>
    </section>
  );
}
