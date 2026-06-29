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
        "inline-flex items-center rounded-full border border-default bg-navbar px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-body",
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
        "badge badge-orange",
        className,
      )}
    >
      {children}
    </span>
  );
}
