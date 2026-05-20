"use client";

import { createDataFlowBackground } from "@/lib/motion/dataFlowBackground";
import { ParticlesCanvas } from "@/lib/motion/particlesCanvas";
import { detectMotionQuality } from "@/lib/motion/quality";
import { useEffect, useRef } from "react";

type HeroMotionBackdropProps = {
  /** data-motion id for controller */
  motionId?: string;
};

/**
 * Hero background — particules (medium) + shader data-flow (high).
 * Lazy · pas au LCP · opacity faible sur fond clair du site.
 */
export function HeroMotionBackdrop({ motionId = "hero-background-shader" }: HeroMotionBackdropProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const particleRef = useRef<HTMLCanvasElement>(null);
  const webglRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const quality = detectMotionQuality();
    if (quality === "low") return;

    let particles: ParticlesCanvas | null = null;
    let dataFlow: Awaited<ReturnType<typeof createDataFlowBackground>> | null = null;
    let cancelled = false;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting);
        if (visible) {
          particles?.start();
          dataFlow?.resume();
        } else {
          particles?.pause();
          dataFlow?.pause();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(wrap);

    if (particleRef.current) {
      particles = new ParticlesCanvas(particleRef.current);
      particles.init(quality === "high" ? 900 : 600);
    }

    if (quality === "high" && webglRef.current) {
      void createDataFlowBackground(webglRef.current).then((df) => {
        if (cancelled) {
          df.destroy();
          return;
        }
        dataFlow = df;
        df.resume();
      });
    }

    const onVis = () => {
      if (document.hidden) {
        particles?.pause();
        dataFlow?.pause();
      } else {
        particles?.start();
        dataFlow?.resume();
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelled = true;
      obs.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      particles?.destroy();
      dataFlow?.destroy();
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      data-motion={motionId}
      data-quality-min="medium"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-[0.35]"
      aria-hidden
    >
      <canvas ref={particleRef} className="absolute inset-0 h-full w-full" />
      <canvas ref={webglRef} className="absolute inset-0 h-full w-full mix-blend-multiply" />
    </div>
  );
}
