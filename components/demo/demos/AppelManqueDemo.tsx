"use client";

import { LottiePlayer } from "@/components/motion/LottiePlayer";
import type { DemoAnimationProps } from "@/components/demo/MotionDemo";
import { sequentialDemoBeats, useGsapDemoLoop } from "@/lib/motion/useGsapDemoLoop";
import { useCallback, useRef } from "react";

function AppelManqueGsap({ active }: DemoAnimationProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const build = useCallback(
    (gsap: typeof import("gsap").gsap, root: HTMLElement) =>
      sequentialDemoBeats(gsap, root, { hold: 1.25, repeatDelay: 0.35 }),
    [],
  );
  useGsapDemoLoop(rootRef, active, build);

  if (!active) return null;

  return (
    <div ref={rootRef} className="demo-gsap-stack">
      <div className="demo-beat flex flex-col items-center gap-2 text-center">
        <span className="text-2xl" aria-hidden>
          📞
        </span>
        <p className="text-sm text-[var(--color-text)]">Appel entrant — Client Dupont</p>
      </div>
      <div className="demo-beat">
        <p className="demo-pulse-red text-center text-sm">Appel manqué — vous êtes sur le chantier</p>
      </div>
      <div className="demo-beat flex flex-col items-center gap-2 text-center">
        <p className="text-sm text-[#ff8200]">SMS en 90 s</p>
        <p className="max-w-xs text-xs text-[var(--color-text)]/90">
          Bonjour M. Dupont, j&apos;ai bien reçu votre appel. Je vous rappelle avant 18 h.
        </p>
      </div>
      <div className="demo-beat text-center">
        <p className="text-sm text-[#38a169]">✅ Client rassuré · Rappel planifié</p>
        <p className="text-xs text-[var(--color-text)]/80">Résumé Telegram 18 h</p>
      </div>
    </div>
  );
}

export function AppelManqueDemo({ active }: DemoAnimationProps) {
  return (
    <LottiePlayer
      src="/assets/demos/lottie/demo-1-appel-manque.json"
      active={active}
      fallback={<AppelManqueGsap active={active} />}
    />
  );
}
