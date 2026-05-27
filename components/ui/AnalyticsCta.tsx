"use client";

import { trackCtaClicked } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import type { ComponentProps, ReactNode } from "react";

type AnalyticsCtaProps = ComponentProps<"a"> & {
  analyticsId: string;
  children: ReactNode;
};

/** Lien CTA avec tracking analytics — seul îlot client sur sections statiques. */
export function AnalyticsCta({
  analyticsId,
  onClick,
  className,
  children,
  ...rest
}: AnalyticsCtaProps) {
  return (
    <a
      {...rest}
      data-analytics-cta={analyticsId}
      className={cn(className)}
      onClick={(e) => {
        trackCtaClicked(analyticsId);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
