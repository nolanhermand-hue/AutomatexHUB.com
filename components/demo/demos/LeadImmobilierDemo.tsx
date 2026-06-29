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
        <p className="text-sm text-[var(--color-text)]">🏠 Mission DPE en cours</p>
        <p className="text-xs text-primary">Mail agence : DPE urgent avant compromis — Flers</p>
      </div>
      <div className="demo-beat text-center text-sm text-[var(--color-text)]">
        Réponse auto en moins de 2 min pendant la mission
      </div>
      <div className="demo-beat text-center">
        <p className="max-w-xs text-xs text-[var(--color-text)]/90">
          Bonjour, je suis en mission sur le terrain. Je confirme un créneau dans 30 minutes.
        </p>
      </div>
      <div className="demo-beat text-center">
        <p className="text-sm text-success">✅ Créneau confirmé · 0 demande perdue</p>
        <p className="demo-glow-roi text-lg font-semibold text-primary">~220 € préservés</p>
      </div>
    </div>
  );
}
