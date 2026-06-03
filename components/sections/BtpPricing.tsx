"use client";

import { BillingSwitch } from "@/components/ui/BillingSwitch";
import { Card } from "@/components/ui/Card";
import { FeaturedBadge } from "@/components/ui/Badge";
import {
  BTP_OFFERS,
  BTP_PILOTE_HIGHLIGHT,
  BTP_PRICING_HEADING,
} from "@/lib/btp-copy";
import { cn } from "@/lib/cn";
import { annualPrepayTotal, formatMiseEnPlacePuisMensuel } from "@/lib/pricing";
import { PRICING_HEADING } from "@/lib/constants";
import { rendezVousHref } from "@/lib/hub-nav";
import { PricingProgramNotes } from "@/components/sections/PricingProgramNotes";
import { useState } from "react";

type BillingCycle = "monthly" | "annual";

function PricingOfferCard({
  offer,
  cycle,
}: {
  offer: (typeof BTP_OFFERS)[number];
  cycle: BillingCycle;
}) {
  const isCustom = offer.customOffer === true;
  const displayPrice = isCustom
    ? null
    : cycle === "monthly"
      ? offer.monthly.toLocaleString("fr-FR")
      : annualPrepayTotal(offer.monthly).toLocaleString("fr-FR");
  const priceSuffix = isCustom ? null : cycle === "monthly" ? "/mois" : "/an";
  const isPilote = offer.id === "pilote";
  return (
    <div className={cn("h-full", offer.featured && "lg:-translate-y-1")}>
      <Card featured={offer.featured} className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-xl text-text">{offer.name}</h3>
          {offer.badge ? <FeaturedBadge>{offer.badge}</FeaturedBadge> : null}
        </div>
        {isCustom ? (
          <>
            <p className="mt-4 text-sm text-muted">{PRICING_HEADING.surMesureIntro}</p>
            <p className="mt-2 text-2xl font-bold text-text">{PRICING_HEADING.surMesurePriceLabel}</p>
          </>
        ) : (
          <>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {formatMiseEnPlacePuisMensuel(offer.setup, offer.monthly)}
            </p>
            {cycle === "annual" ? (
              <p className="mt-2 text-2xl font-bold text-text">
                {displayPrice} €
                <span className="text-sm font-medium text-muted">{priceSuffix}</span>
              </p>
            ) : null}
            <p className="mt-2 text-xs text-muted">{PRICING_HEADING.bannerLine}</p>
          </>
        )}
        <div className="mt-4 flex-1 space-y-3 text-sm text-muted">
          <p>
            <span className="font-semibold text-text">Le système : </span>
            {offer.systemLine}
          </p>
          <p>
            <span className="font-semibold text-primary">Nolan : </span>
            {offer.nolanLine}
          </p>
          <p className="text-primary">{offer.roiLine}</p>
        </div>
        {isPilote ? (
          <p className="mt-4 rounded-lg border border-primary/30 bg-primary/10 p-3 text-xs leading-relaxed text-primary">
            {BTP_PILOTE_HIGHLIGHT}
          </p>
        ) : null}
        <a
          href={rendezVousHref({ offre: offer.id })}
          className={cn(
            "mt-5 btn-bracket w-full justify-center",
            offer.featured || isCustom ? "btn-bracket-primary" : "btn-bracket-outline",
          )}
        >
          {offer.cta}
        </a>
      </Card>
    </div>
  );
}

export function BtpPricing() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

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

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BTP_OFFERS.map((offer) => (
            <PricingOfferCard key={offer.id} offer={offer} cycle={cycle} />
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-[52ch] text-center text-sm text-muted">
          {PRICING_HEADING.customFitFootnote}
        </p>
        <p className="mt-4 text-center text-sm font-medium text-muted">{PRICING_HEADING.bannerLine}</p>

        <PricingProgramNotes foundersSegment="artisans" />
      </div>
    </section>
  );
}
