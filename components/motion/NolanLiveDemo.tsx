"use client";

import dynamic from "next/dynamic";
import { sequentialDemoBeats, useGsapDemoLoop } from "@/lib/motion/useGsapDemoLoop";
import { DEMO_STATIC } from "@/lib/demo-loaders";
import Image from "next/image";
import { useRef } from "react";

const MotionDemo = dynamic(
  () => import("@/components/demo/MotionDemo").then((m) => ({ default: m.MotionDemo })),
  { ssr: false },
);

/** Animation Nolan en live (Telegram) + capture statique de repli. */
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
        aria-label="Simulation : Nolan intervient le soir via Telegram sans que l'artisan ait à demander"
      >
        <div className="demo-beat space-y-2 text-sm text-[var(--color-text)]/90">
          <p className="text-xs text-muted">Téléphone · Jeudi · 20 h 47</p>
          <p className="rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] p-3 text-primary">
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

      <figure>
        <div
          className="relative w-full overflow-hidden rounded-xl border border-border bg-surface"
          style={{ aspectRatio: "640 / 420" }}
        >
          <Image
            src={DEMO_STATIC.pointMensuel.src}
            alt={DEMO_STATIC.pointMensuel.alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 480px"
          />
        </div>
        <figcaption className="mt-2 text-xs text-muted">Capture du système — données de test</figcaption>
      </figure>

      <div className="lg:col-span-2">
        <MotionDemo
          demoId="point-mensuel-accompagnement"
          staticSrc={DEMO_STATIC.pointMensuel.src}
          staticAlt={DEMO_STATIC.pointMensuel.alt}
          ariaLabel="Simulation du point mensuel et des relances automatiques"
        />
      </div>
    </div>
  );
}
