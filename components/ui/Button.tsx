"use client";

import { cn } from "@/lib/cn";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary";

const base =
  "inline-flex min-h-[48px] items-center justify-center rounded-md px-8 py-3.5 text-[15px] font-semibold tracking-[-0.01em] transition-all duration-200 ease-out active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary select-none touch-manipulation";

const variants: Record<Variant, string> = {
  primary:
    "bg-cta text-cta-fg rounded-md shadow-[0_2px_12px_rgb(26_26_24/0.12)] hover:brightness-110 active:brightness-95",
  secondary:
    "border border-border bg-bg-card text-text rounded-md shadow-[0_0_0_0.5px_var(--color-border)] hover:bg-accent-light hover:text-accent-dark",
};

type AnchorButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant: Variant;
  href: string;
};

export function AnchorButton({
  className,
  variant,
  href,
  children,
  ...rest
}: AnchorButtonProps) {
  return (
    <a href={href} className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </a>
  );
}

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: Variant;
};

export function NativeButton({
  className,
  variant,
  type = "button",
  children,
  ...rest
}: NativeButtonProps) {
  return (
    <button
      type={type}
      className={cn(base, variants[variant], "w-full md:w-auto", className)}
      {...rest}
    >
      {children}
    </button>
  );
}
