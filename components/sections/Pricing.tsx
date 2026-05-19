"use client";

import { trackCtaClicked, trackOfferViewed } from "@/lib/analytics";
import { Card } from "@/components/ui/Card";
import { FeaturedBadge } from "@/components/ui/Badge";
import { OFFERS, PRICING_HEADING } from "@/lib/constants";
import { calculateBreakevenLeads } from "@/lib/calculator";
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type BillingCycle = "monthly" | "annual";

/**
 * PRICING — D1 (3 offres), D2 (toggle annuel/mensuel ~17 %),
 *           D3 (badge Recommandé), D4 (prix transparents),
 *           D5 (garantie/carte), D7 (pré-remplissage offre),
 *           D8 (ROI/carte), D9 (onboarding offert),
 *           D10 (ancres directes), D11 (toggle au-dessus),
 *           D12 (stack vertical mobile), D15 (accès direct)
 */
export function Pricing() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  useEffect(() => {
    const seen = new Set<string>();
    const elements = OFFERS.map((o) =>
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
      className="bg-night px-gutter py-12 md:py-16"
      data-analytics-section="pricing"
    >
      <div className="mx-auto max-w-content">
        <p className="label-micro text-accent">{PRICING_HEADING.eyebrow}</p>
        <h2 className="mt-2 font-heading text-3xl text-text md:text-4xl">
          {PRICING_HEADING.h2}
        </h2>

        {/* D11 — Toggle visible AU-DESSUS des cards */}
        <div className="mt-8 inline-flex rounded-full border border-white/[0.08] bg-white/[0.03] p-1 text-sm font-semibold backdrop-blur-sm">
          <button
            type="button"
            onClick={() => setCycle("monthly")}
            aria-pressed={cycle === "monthly"}
            data-analytics-cta="pricing_toggle_monthly"
            className={cn(
              "min-h-[44px] rounded-full px-5 transition-all duration-200",
              cycle === "monthly"
                ? "bg-cta text-[var(--color-cta-fg,#fff)] shadow-[0_2px_12px_rgb(0_0_0/0.25)]"
                : "text-muted hover:text-text",
            )}
          >
            {PRICING_HEADING.toggleMonthly}
          </button>
          <button
            type="button"
            onClick={() => setCycle("annual")}
            aria-pressed={cycle === "annual"}
            data-analytics-cta="pricing_toggle_annual"
            className={cn(
              "min-h-[44px] rounded-full px-5 transition-all duration-200",
              cycle === "annual"
                ? "bg-cta text-[var(--color-cta-fg,#fff)] shadow-[0_2px_12px_rgb(0_0_0/0.25)]"
                : "text-muted hover:text-text",
            )}
          >
            {PRICING_HEADING.toggleAnnual}
            <span className="ml-2 inline-flex items-center rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
              {PRICING_HEADING.annualDiscountLabel}
            </span>
          </button>
        </div>

        {/* D12 — Stack vertical strict sur mobile, grid sur md+ */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {OFFERS.map((offer) => {
            const breakeven = calculateBreakevenLeads(offer.setup, offer.monthly);
            const reinvest = (offer.setup + offer.monthly).toLocaleString("fr-FR");
            const displayPrice =
              cycle === "monthly"
                ? offer.monthly.toLocaleString("fr-FR")
                : offer.annual.toLocaleString("fr-FR");
            const priceSuffix =
              cycle === "monthly"
                ? PRICING_HEADING.monthlySuffix
                : PRICING_HEADING.annualSuffix;
            return (
              <motion.div
                key={offer.id}
                id={`pricing-${offer.id}`}
                data-offer-id={offer.id}
                layout
                className={cn(
                  "h-full transition duration-200 scroll-mt-24",
                  offer.featured ? "md:-translate-y-2 md:scale-[1.02]" : "",
                )}
              >
                <Card
                  featured={offer.featured}
                  className={cn(
                    "h-full",
                    offer.featured && "ring-2 ring-cta shadow-[0_8px_40px_rgb(0_0_0/0.35)]",
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading text-2xl text-text">
                      {offer.name}
                    </h3>
                    {offer.badge ? (
                      <FeaturedBadge>{offer.badge}</FeaturedBadge>
                    ) : null}
                  </div>

                  {/* Prix : D4 transparent, mis à jour selon cycle */}
                  <p className="mt-4 text-sm text-muted">
                    {offer.setup.toLocaleString("fr-FR")} € d&apos;installation
                  </p>
                  <p className="mt-1 flex items-baseline gap-1 text-3xl font-bold text-text">
                    {displayPrice} €
                    <span className="text-base font-medium text-muted">
                      {priceSuffix}
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    Sans engagement · Résiliable en 1 mail
                  </p>

                  {/* Bénéfices */}
                  <ul className="mt-5 space-y-2 text-sm text-muted md:text-[15px]">
                    {offer.benefits.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1 shrink-0 text-cta" aria-hidden>
                          ✓
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* D8 — ROI line */}
                  <p className="mt-5 text-sm font-semibold text-cta">
                    Rentable dès {breakeven} lead{breakeven > 1 ? "s" : ""} récupéré
                    {breakeven > 1 ? "s" : ""} (≈ {reinvest} € investis au départ).
                  </p>
                  <p className="mt-1 text-sm text-muted">{offer.roiLine}</p>

                  {/* D5 — Garantie inline dans chaque carte */}
                  <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
                    <span aria-hidden>🛡</span> 30 jours satisfait ou remboursé
                  </p>

                  {/* D7 — Lien avec query string pour pré-remplissage formulaire */}
                  <a
                    href={`#contact?offre=${offer.id}`}
                    onClick={() => trackCtaClicked(`pricing_${offer.id}`)}
                    data-analytics-cta={`pricing_${offer.id}`}
                    className={cn(
                      "mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-full px-4 py-3 text-[15px] font-semibold transition-all duration-200 active:scale-[0.97]",
                      offer.featured
                        ? "bg-cta text-[var(--color-cta-fg,#fff)] shadow-[0_4px_20px_rgb(0_0_0/0.3)] hover:bg-primary"
                        : "border border-white/15 bg-white/[0.05] text-text backdrop-blur-sm hover:border-cta/50 hover:bg-cta/10 hover:text-cta",
                    )}
                  >
                    {offer.cta}
                  </a>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Garantie globale sous le tableau pricing */}
        <p className="mt-8 text-center text-sm text-muted">
          {PRICING_HEADING.guaranteeLine}
        </p>
      </div>
    </section>
  );
}

// Suppression du type OfferTag et FilterChoice : 3 offres = filtres inutiles
export {};
