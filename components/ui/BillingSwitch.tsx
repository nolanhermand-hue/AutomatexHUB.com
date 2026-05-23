"use client";

import { cn } from "@/lib/cn";
import type { KeyboardEvent } from "react";

type BillingSwitchProps = {
  isAnnual: boolean;
  onChange: (annual: boolean) => void;
  monthlyLabel: string;
  annualLabel: string;
  discountLabel: string;
  className?: string;
};

export function BillingSwitch({
  isAnnual,
  onChange,
  monthlyLabel,
  annualLabel,
  discountLabel,
  className,
}: BillingSwitchProps) {
  const toggle = () => onChange(!isAnnual);
  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isAnnual}
      aria-label={`Facturation ${isAnnual ? "annuelle" : "mensuelle"} — cliquer pour basculer`}
      onClick={toggle}
      onKeyDown={onKeyDown}
      className={cn(
        "inline-flex min-h-[48px] items-center gap-3 rounded-md border border-border bg-night px-4 py-2 text-sm font-semibold",
        className,
      )}
    >
      <span className={cn(!isAnnual ? "text-text" : "text-muted")}>{monthlyLabel}</span>
      <span
        className={cn(
          "relative h-7 w-12 shrink-0 rounded-full border border-border bg-bg-card transition-colors",
          isAnnual && "bg-primary/20",
        )}
        aria-hidden
      >
        <span
          className={cn(
            "absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-primary transition-transform duration-200",
            isAnnual && "translate-x-5",
          )}
        />
      </span>
      <span className={cn(isAnnual ? "text-text" : "text-muted")}>
        {annualLabel}
        <span className="ml-2 badge badge-orange">
          {discountLabel}
        </span>
      </span>
    </button>
  );
}
