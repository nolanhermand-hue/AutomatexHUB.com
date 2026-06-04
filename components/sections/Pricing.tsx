"use client";

import { BillingSwitch } from "@/components/ui/BillingSwitch";
import { trackOfferViewed } from "@/lib/analytics";
import { Card } from "@/components/ui/Card";
import {
  getPricingOfferDisplay,
  PAID_OFFERS,
  PRICING_CARD_CTA,
  PRICING_HEADING,
  PRICING_REASSURANCE_CARD,
  SUR_MESURE_PRICING_BANNER,
  type PackId,
  type PricingOffer,
} from "@/lib/constants";
import { HOME_PRICING } from "@/lib/home-copy";
import { cn } from "@/lib/cn";
import { annualPrepayTotal, formatMiseEnPlacePuisMensuel } from "@/lib/pricing";
import { SectionCta } from "@/components/ui/SectionCta";
import { AnalyticsCta } from "@/components/ui/AnalyticsCta";
import { rendezVousHref } from "@/lib/hub-nav";
import { useEffect, useState } from "react";

type BillingCycle = "monthly" | "annual";

type PricingProps = {
  audience?: "default" | "home";
};

function PricingPackCard({
  offer,
  level,
  cycle,
  audience,
}: {
  offer: PricingOffer;
  level: number;
  cycle: BillingCycle;
  audience: "default" | "home";
}) {
  const display = getPricingOfferDisplay(offer.id as PackId, audience);
  const displayPrice =
    cycle === "monthly"
      ? offer.monthly.toLocaleString("fr-FR")
      : annualPrepayTotal(offer.monthly).toLocaleString("fr-FR");
  const priceSuffix =
    cycle === "monthly" ? PRICING_HEADING.monthlySuffix : PRICING_HEADING.annualSuffix;

  const isFeatured = offer.featured;
  const isHomeAudience = audience === "home";

  return (
    <Card
      featured={isFeatured}
      className={cn(
        "flex h-full flex-col",
        isHomeAudience &&
          "glass-panel border-[var(--glass-border)] bg-transparent shadow-none",
        isHomeAudience &&
          isFeatured &&
          "border-[var(--color-terracotta)] bg-[rgb(224_120_86/0.1)] shadow-lg shadow-black/20",
        !isHomeAudience &&
          isFeatured &&
          "border-[var(--color-terracotta)] bg-[color-mix(in_srgb,var(--color-terracotta)_9%,var(--color-surface))] shadow-lg shadow-[var(--color-terracotta)]/12",
      )}
    >
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
        NIVEAU — {String(level).padStart(2, "0")}
      </p>
      {isFeatured && offer.badge ? (
        <p className="mt-2 inline-flex w-fit rounded-full border border-[var(--color-terracotta)]/45 bg-[var(--color-terracotta)]/15 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--color-terracotta)]">
          {offer.badge}
        </p>
      ) : null}
      <h3 className="mt-2 font-heading text-xl font-bold text-text">{offer.name}</h3>
      <p className="mt-3 text-sm font-medium leading-snug text-text">{display.promise}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        {formatMiseEnPlacePuisMensuel(offer.setup, offer.monthly)}
      </p>
      {cycle === "annual" ? (
        <p className="mt-2 flex items-baseline gap-1 text-2xl font-bold text-text">
          {displayPrice} €
          <span className="text-base font-medium text-muted">{priceSuffix}</span>
        </p>
      ) : null}
      <p className="mt-3 text-xs leading-relaxed text-muted">{PRICING_REASSURANCE_CARD}</p>
      <div className="mt-4 border-l-4 border-[var(--color-terracotta)]/55 pl-4 text-sm font-medium text-text">
        {display.roiEncart}
      </div>
      <AnalyticsCta
        href={rendezVousHref({ offre: offer.id })}
        analyticsId={`pricing_${offer.id}`}
        className={cn(
          "mt-5 btn-bracket w-full justify-center",
          isFeatured ? "btn-bracket-primary" : "btn-bracket-outline",
        )}
      >
        {PRICING_CARD_CTA}
      </AnalyticsCta>
      <details className="group mt-4 border-t border-border/40 pt-4">
        <summary className="cursor-pointer list-none text-sm font-medium text-primary marker:content-none [&::-webkit-details-marker]:hidden">
          Voir le détail ↓
        </summary>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
          {offer.benefits.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </details>
    </Card>
  );
}

export function Pricing({ audience = "default" }: PricingProps) {
  const isHome = audience === "home";
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  useEffect(() => {
    const seen = new Set<string>();
    const elements = PAID_OFFERS.map((o) =>
      document.querySelector(`[data-offer-id="${o.id}"]`),
    ).filter(Boolean) as Element[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute("data-offer-id");
          if (!id || seen.has(id)) return;
          seen.add(id);
          trackOfferViewed(id);
        });
      },
      { threshold: 0.35 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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

        <div
          className="mt-8 rounded-xl border p-6 md:p-8"
          style={{
            backgroundColor: "#2D3A4A",
            borderColor: "#E07856",
          }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-heading text-xl font-bold text-cream">
                {SUR_MESURE_PRICING_BANNER.title}
              </h3>
              <p className="mt-1 text-lg font-bold text-[var(--color-terracotta)]">
                {SUR_MESURE_PRICING_BANNER.priceLabel}
              </p>
              <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-text-subtle">
                {SUR_MESURE_PRICING_BANNER.phrase}
              </p>
            </div>
            <AnalyticsCta
              href={rendezVousHref({ offre: "sur-mesure" })}
              analyticsId="pricing_sur_mesure_banner"
              className="btn-bracket btn-bracket-primary shrink-0 justify-center md:min-w-[14rem]"
            >
              {SUR_MESURE_PRICING_BANNER.cta}
            </AnalyticsCta>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {PAID_OFFERS.map((offer, offerIndex) => (
            <div
              key={offer.id}
              id={`pricing-${offer.id}`}
              data-offer-id={offer.id}
              className={cn(
                "h-full animate-on-scroll scale scroll-mt-24",
                offer.featured && "md:-translate-y-2",
              )}
              style={{ transitionDelay: `${offerIndex * 100}ms` }}
            >
              <PricingPackCard
                offer={offer}
                level={offerIndex + 1}
                cycle={cycle}
                audience={audience}
              />
            </div>
          ))}
        </div>

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
