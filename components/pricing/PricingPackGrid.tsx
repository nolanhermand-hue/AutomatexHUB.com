"use client";

import type { PricingPackAudience } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { useEffect } from "react";
import { PricingPackCard } from "@/components/pricing/PricingPackCard";
import { PAID_OFFERS } from "@/lib/constants";
import { trackOfferViewed } from "@/lib/analytics";

type PricingPackGridProps = {
  audience: PricingPackAudience;
  variant?: "default" | "home";
  className?: string;
};

export function PricingPackGrid({
  audience,
  variant = "default",
  className,
}: PricingPackGridProps) {
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
    <div className={cn("mt-8 grid gap-6 md:grid-cols-3", className)}>
      {PAID_OFFERS.map((offer, offerIndex) => (
        <div
          key={offer.id}
          id={`pricing-${offer.id}`}
          data-offer-id={offer.id}
          className={cn(
            "h-full animate-on-scroll scale scroll-mt-24",
            offer.featured && "md:z-10 md:-translate-y-3 md:scale-[1.04]",
          )}
          style={{ transitionDelay: `${offerIndex * 100}ms` }}
        >
          <PricingPackCard
            offer={offer}
            level={offerIndex + 1}
            audience={audience}
            variant={variant}
          />
        </div>
      ))}
    </div>
  );
}
