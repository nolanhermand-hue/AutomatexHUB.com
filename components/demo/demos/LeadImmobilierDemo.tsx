"use client";

import type { DemoAnimationProps } from "@/components/demo/MotionDemo";
import { sequentialDemoBeats, useGsapDemoLoop } from "@/lib/motion/useGsapDemoLoop";
import { useCallback, useRef } from "react";

/** Démo 3 — lead immobilier · GSAP + pulse ROI (CSS). */
export function LeadImmobilierDemo({ active }: DemoAnimationProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const build = useCallback(
    (gsap: typeof import("gsap").default, root: HTMLElement) =>
      sequentialDemoBeats(gsap, root, { hold: 1.3, repeatDelay: 0.45 }),
    [],
  );
  useGsapDemoLoop(rootRef, active, build);

  if (!active) return null;

  return (
    <div ref={rootRef} className="demo-gsap-stack">
      <div className="demo-beat flex flex-col items-center gap-2 text-center">
        <p className="text-sm text-[var(--color-text)]">🏠 Visite en cours</p>
        <p className="text-xs text-primary">Demande SeLoger : M. Martin, 3 pièces Flers</p>
      </div>
      <div className="demo-beat text-center text-sm text-[var(--color-text)]">
        Réponse auto en 90 s pendant la visite
      </div>
      <div className="demo-beat text-center">
        <p className="max-w-xs text-xs text-[var(--color-text)]/90">
          Bonjour M. Martin, je suis en visite. Je vous rappelle dans 30 minutes.
        </p>
      </div>
      <div className="demo-beat text-center">
        <p className="text-sm text-[#38a169]">✅ Client engagé · 0 client perdu</p>
        <p className="demo-glow-roi text-lg font-semibold text-primary">3 500 € préservés</p>
      </div>
    </div>
  );
}
