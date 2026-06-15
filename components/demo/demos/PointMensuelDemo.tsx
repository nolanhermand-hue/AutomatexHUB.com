"use client";

import { LottiePlayer } from "@/components/motion/LottiePlayer";
import type { DemoAnimationProps } from "@/components/demo/MotionDemo";
import { sequentialDemoBeats, useGsapDemoLoop } from "@/lib/motion/useGsapDemoLoop";
import { useCallback, useRef } from "react";

function PointMensuelGsap({ active }: DemoAnimationProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const build = useCallback(
    (gsap: typeof import("gsap").default, root: HTMLElement) =>
      sequentialDemoBeats(gsap, root, { hold: 1.2, repeatDelay: 0.5 }),
    [],
  );
  useGsapDemoLoop(rootRef, active, build);

  if (!active) return null;

  return (
    <div ref={rootRef} className="demo-gsap-stack">
      <div className="demo-beat text-center text-sm text-[var(--color-text)]">📅 J+30 — Point mensuel Nolan</div>
      <div className="demo-beat text-center">
        <p className="text-sm text-primary">📊 Rapport Telegram</p>
        <p className="text-xs text-[var(--color-text)]/90">8 appels traités · 12 devis · 14 h récupérées</p>
      </div>
      <div className="demo-beat text-center">
        <p className="max-w-xs text-xs text-[var(--color-text)]/90">
          Nolan : on améliore le template devis cette semaine.
        </p>
      </div>
      <div className="demo-beat text-center text-sm text-[#38a169]">
        ✅ Système mis à jour — sans que vous ayez demandé
      </div>
    </div>
  );
}

export function PointMensuelDemo({ active }: DemoAnimationProps) {
  return (
    <LottiePlayer
      src="/assets/demos/lottie/demo-5-point-mensuel.json"
      active={active}
      fallback={<PointMensuelGsap active={active} />}
    />
  );
}
