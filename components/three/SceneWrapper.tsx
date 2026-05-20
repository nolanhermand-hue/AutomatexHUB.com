import type { ReactNode } from "react";

/** Arrière-plan hero : dégradés CSS (pas d’image LCP — évite 404 et ~57 KiB). */
export function HeroScene({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-[100svh] overflow-hidden">
      <div className="hero-atmosphere absolute inset-0 -z-10 min-h-[100svh]" aria-hidden />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
