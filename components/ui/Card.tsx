"use client";

import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function Card({
  children,
  className,
  featured,
  dimmed,
  tilt: _tilt = false,
}: {
  children: ReactNode;
  className?: string;
  featured?: boolean;
  dimmed?: boolean;
  tilt?: boolean;
}) {
  return (
    <div
      data-cursor="card"
      className={cn(
        "card relative flex flex-col overflow-hidden p-6 md:p-8",
        featured && "border-primary/50 shadow-lg shadow-primary/10",
        dimmed && "opacity-50",
        className,
      )}
    >
      {children}
    </div>
  );
}
