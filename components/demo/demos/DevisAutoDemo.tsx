"use client";

import { LottiePlayer } from "@/components/motion/LottiePlayer";
import type { DemoAnimationProps } from "@/components/demo/MotionDemo";
import { sequentialDemoBeats, useGsapDemoLoop } from "@/lib/motion/useGsapDemoLoop";
import { useCallback, useRef } from "react";

function DevisAutoGsap({ active }: DemoAnimationProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const build = useCallback(
    (gsap: typeof import("gsap").default, root: HTMLElement) =>
      sequentialDemoBeats(gsap, root, { hold: 1.05, repeatDelay: 0.4 }),
    [],
  );
  useGsapDemoLoop(rootRef, active, build);

  if (!active) return null;

  return (
    <div ref={rootRef} className="demo-gsap-stack">
      <div className="demo-beat text-center text-sm text-[#f5f4f1]">🎙️ Dictée en sortie de chantier</div>
      <div className="demo-beat text-center text-xs text-[#f5f4f1]/90">
        Pose carrelage 40 m², salle de bain, 2 jours…
      </div>
      <div className="demo-beat text-center">
        <p className="text-sm text-[#ff8200]">→ Devis PDF n°2024-47</p>
        <p className="text-xs text-[#f5f4f1]">Total TTC : 3 840 €</p>
      </div>
      <div className="demo-beat text-center text-sm text-[#f5f4f1]">
        📧 Envoyé à m.dupont@gmail.com · 17 h 23
      </div>
      <div className="demo-beat text-center text-sm text-[#38a169]">✅ Devis accepté</div>
    </div>
  );
}

export function DevisAutoDemo({ active }: DemoAnimationProps) {
  return (
    <LottiePlayer
      src="/assets/demos/lottie/demo-2-devis-auto.json"
      active={active}
      fallback={<DevisAutoGsap active={active} />}
    />
  );
}
