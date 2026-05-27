"use client";

import { useScrollAnimation } from "@/lib/use-scroll-animation";
import type { ReactNode } from "react";

/** IO global pour `.animate-on-scroll` et `.mock-section` (hors hero). */
export function ScrollAnimationProvider({ children }: { children: ReactNode }) {
  useScrollAnimation();
  return <>{children}</>;
}
