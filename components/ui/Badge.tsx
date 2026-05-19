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
        "inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted backdrop-blur-sm",
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
        "inline-flex items-center rounded-full bg-cta/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-cta",
        className,
      )}
    >
      {children}
    </span>
  );
}
