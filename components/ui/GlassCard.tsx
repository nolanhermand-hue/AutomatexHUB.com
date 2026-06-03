import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

type GlassCardProps = ComponentProps<"div"> & {
  strong?: boolean;
};

export function GlassCard({ className, strong, ...rest }: GlassCardProps) {
  return (
    <div
      className={cn(strong ? "glass-panel-strong" : "glass-panel", className)}
      {...rest}
    />
  );
}
