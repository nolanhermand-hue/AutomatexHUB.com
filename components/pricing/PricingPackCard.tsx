"use client";

import { AnalyticsCta } from "@/components/ui/AnalyticsCta";
import { Card } from "@/components/ui/Card";
import {
  getPricingOfferDisplay,
  PRICING_CARD_CTA,
  PRICING_REASSURANCE_CARD,
  type PackId,
  type PricingOffer,
  type PricingPackAudience,
} from "@/lib/constants";
import { cn } from "@/lib/cn";
import { formatMiseEnPlacePuisMensuel } from "@/lib/pricing";
import { rendezVousHref } from "@/lib/hub-nav";

type PricingPackCardProps = {
  offer: PricingOffer;
  level: number;
  audience: PricingPackAudience;
  /** Variante home : panneaux glass */
  variant?: "default" | "home";
};

export function PricingPackCard({
  offer,
  level,
  audience,
  variant = "default",
}: PricingPackCardProps) {
  const display = getPricingOfferDisplay(offer.id as PackId, audience);

  const isFeatured = offer.featured;
  const isHomeVariant = variant === "home";

  return (
    <Card
      featured={isFeatured}
      className={cn(
        "flex h-full flex-col",
        isHomeVariant &&
          "glass-panel border-[var(--glass-border)] bg-transparent shadow-none",
        isHomeVariant &&
          isFeatured &&
          "border-[var(--color-terracotta)] bg-[rgb(224_120_86/0.1)] shadow-lg shadow-black/20",
        !isHomeVariant &&
          isFeatured &&
          "border-[var(--color-terracotta)] bg-[color-mix(in_srgb,var(--color-terracotta)_9%,var(--color-surface))] shadow-lg shadow-[var(--color-terracotta)]/12",
      )}
    >
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
        N{level} — {String(level).padStart(2, "0")}
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
