"use client";

import { DemoVideo } from "@/components/demo/DemoVideo";
import { sequentialDemoBeats, useGsapDemoLoop } from "@/lib/motion/useGsapDemoLoop";
import { useRef } from "react";

/** Telegram terrain (GSAP) + démo vidéo accompagnement (point mensuel). */
export function NolanLiveDemo() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGsapDemoLoop(rootRef, true, (gsap, root) =>
    sequentialDemoBeats(gsap, root, { hold: 1.1, repeatDelay: 0.35 }),
  );

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
      <div
        ref={rootRef}
        data-motion="nolan-live"
        data-quality-min="medium"
        className="rounded-xl border border-primary/25 bg-surface p-5 md:p-6"
        role="img"
        aria-label="Exemple : Nolan intervient le soir via Telegram sans que l'artisan ait à demander"
      >
        <div className="demo-beat space-y-2 text-sm text-[var(--color-text)]/90">
          <p className="text-xs text-muted">Téléphone · Jeudi · 20 h 47</p>
          <p className="rounded-lg border border-border bg-night p-3 text-primary">
            Nolan · Telegram
          </p>
          <p className="text-xs leading-relaxed">
            Je vois que 2 devis n&apos;ont pas été relancés. Je m&apos;en occupe ce soir. ✅
          </p>
        </div>
        <div className="demo-beat mt-4 text-xs text-muted">
          Reçu 11 min après la détection · sans appel de votre part
        </div>
        <div className="demo-beat mt-4 text-xs font-semibold text-primary">
          📍 Flers, Orne — Nolan à ~20 min de chez vous
        </div>
      </div>

      <DemoVideo
        id="accompagnement"
        caption="Installation, point mensuel, ajustements — Nolan à Flers (données de test)"
        className="w-full"
      />
    </div>
  );
}
