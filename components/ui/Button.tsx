"use client";

import { cn } from "@/lib/cn";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary";

const variants: Record<Variant, string> = {
  primary: "btn-bracket btn-bracket-primary",
  secondary: "btn-bracket btn-bracket-outline",
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
    <a href={href} className={cn(variants[variant], className)} {...rest}>
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
    <button type={type} className={cn(variants[variant], "w-full md:w-auto", className)} {...rest}>
      {children}
    </button>
  );
}
