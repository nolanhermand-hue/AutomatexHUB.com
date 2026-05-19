import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-section px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function FeaturedBadge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-accent-light px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary",
        className,
      )}
    >
      {children}
    </span>
  );
}
