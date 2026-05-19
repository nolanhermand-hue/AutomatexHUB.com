"use client";

import { cn } from "@/lib/cn";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary";

const base =
  "inline-flex min-h-[48px] items-center justify-center rounded-full px-8 py-3.5 text-[15px] font-semibold tracking-[-0.01em] transition-all duration-200 ease-out active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary select-none touch-manipulation";

const variants: Record<Variant, string> = {
  primary:
    "bg-cta text-[var(--color-cta-fg,#fff)] shadow-[0_0_0_0.5px_rgb(255_255_255/0.12),0_4px_24px_color-mix(in_srgb,var(--color-cta)_45%,transparent)] hover:bg-primary hover:shadow-[0_0_0_0.5px_rgb(255_255_255/0.12),0_4px_32px_color-mix(in_srgb,var(--color-cta)_60%,transparent)] hover:scale-[1.02]",
  secondary:
    "border border-white/15 bg-white/[0.06] text-text backdrop-blur-sm shadow-[0_0_0_0.5px_rgb(255_255_255/0.06)] hover:bg-white/[0.1] hover:scale-[1.02]",
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
