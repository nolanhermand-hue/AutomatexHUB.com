"use client";

import { trackCtaClicked } from "@/lib/analytics";
import { BOOKING_CTA_LABEL } from "@/lib/constants";
import { cn } from "@/lib/cn";

type SectionCtaProps = {
  analyticsId: string;
  className?: string;
  variant?: "primary" | "link";
};

export function SectionCta({
  analyticsId,
  className,
  variant = "primary",
}: SectionCtaProps) {
  const isPrimary = variant === "primary";
  return (
    <a
      href="#contact"
      data-analytics-cta={analyticsId}
      onClick={() => trackCtaClicked(analyticsId)}
      className={cn(
        isPrimary
          ? "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-cta px-8 py-3 text-[15px] font-semibold text-cta-fg shadow-[0_2px_12px_rgb(26_26_24/0.12)] transition-all duration-200 hover:brightness-110"
          : "inline-flex min-h-[48px] items-center gap-1 text-sm font-semibold text-muted underline underline-offset-4 transition-colors hover:text-text",
        className,
      )}
    >
      {BOOKING_CTA_LABEL}
      <span aria-hidden>→</span>
    </a>
  );
}
