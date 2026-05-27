"use client";

import { BillingSwitch } from "@/components/ui/BillingSwitch";
import { Card } from "@/components/ui/Card";
import { FeaturedBadge } from "@/components/ui/Badge";
import { PricingProgramNotes } from "@/components/sections/PricingProgramNotes";
import { TPE_DISPLAY_OFFERS, TPE_FOUNDERS_NOTE } from "@/lib/automatisation-ia-tpe-content";
import { cn } from "@/lib/cn";
import { PRICING_HEADING } from "@/lib/constants";
import { annualPrepayTotal, formatFoundersAvailability } from "@/lib/pricing";
import { useState } from "react";

type BillingCycle = "monthly" | "annual";

export function TpeAutomatisationPricing() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  return (
    <section id="tarifs" className="border-t border-border px-gutter py-16 md:py-20">
      <div className="mx-auto max-w-content">
        <p className="label-micro text-muted">MODULE 04 — TARIFS</p>
        <h2 className="mt-3 font-heading text-3xl text-text md:text-4xl">
          Choisissez votre niveau d&apos;automatisation
        </h2>
        <p className="mt-3 max-w-readable text-muted">
          Pas d&apos;engagement. Même accompagnement humain sur toutes les formules. Sur mesure si
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

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {TPE_DISPLAY_OFFERS.map((offer) => {
            const isCustom = offer.customOffer === true;
            const displayPrice = isCustom
              ? null
              : cycle === "monthly"
                ? offer.monthly.toLocaleString("fr-FR")
                : annualPrepayTotal(offer.monthly).toLocaleString("fr-FR");
            const suffix = isCustom ? null : cycle === "monthly" ? "/mois" : "/an";
            return (
              <Card key={offer.id} featured={offer.featured} className="flex h-full flex-col">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading text-lg text-text">{offer.name}</h3>
                  {offer.badge ? <FeaturedBadge>{offer.badge}</FeaturedBadge> : null}
                </div>
                {isCustom ? (
                  <>
                    <p className="mt-3 text-sm text-muted">{PRICING_HEADING.surMesureIntro}</p>
                    <p className="mt-2 text-xl font-bold text-primary">
                      {PRICING_HEADING.surMesurePriceLabel}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="mt-2 font-mono text-sm text-muted">
                      Setup {offer.setup.toLocaleString("fr-FR")} €
                    </p>
                    <p className="mt-1 font-mono text-2xl font-bold text-text">
                      {displayPrice} €
                      <span className="text-sm font-medium text-muted">{suffix}</span>
                    </p>
                  </>
                )}
                <p className="mt-3 flex-1 text-sm text-muted">{offer.blurb}</p>
                <a
                  href={`#contact?offre=${offer.id}`}
                  className={cn(
                    "mt-4 btn-bracket w-full justify-center text-sm",
                    offer.featured || isCustom ? "btn-bracket-primary" : "btn-bracket-outline",
                  )}
                >
                  {offer.cta}
                </a>
              </Card>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-muted">
          <span className="font-semibold text-text">Places fondateur : </span>
          {TPE_FOUNDERS_NOTE}{" "}
          <span className="font-mono text-text">({formatFoundersAvailability()})</span>
        </p>

        <PricingProgramNotes />
      </div>
    </section>
  );
}
