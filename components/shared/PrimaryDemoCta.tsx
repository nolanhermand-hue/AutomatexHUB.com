"use client";

import { AnalyticsCta } from "@/components/ui/AnalyticsCta";
import { PRIMARY_DEMO_CTA, PRIMARY_DEMO_CTA_SHORT } from "@/lib/constants";
import { rendezVousHref } from "@/lib/hub-nav";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type PrimaryDemoCtaProps = {
  analyticsId: string;
  className?: string;
  children?: ReactNode;
  short?: boolean;
};

export function PrimaryDemoCta({ analyticsId, className, children, short }: PrimaryDemoCtaProps) {
  return (
    <AnalyticsCta
      href={rendezVousHref()}
      analyticsId={analyticsId}
      className={cn(className)}
    >
      {children ?? (short ? PRIMARY_DEMO_CTA_SHORT : PRIMARY_DEMO_CTA)}
    </AnalyticsCta>
  );
}
