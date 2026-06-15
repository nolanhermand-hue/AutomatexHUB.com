import type { ReactNode } from "react";

/** Hero shell — fond plat (pas d’effet nébuleuse / WebGL). */
export function HeroScene({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-0 overflow-hidden bg-night md:min-h-[100svh]">
      <div className="relative z-10">{children}</div>
    </div>
  );
}
