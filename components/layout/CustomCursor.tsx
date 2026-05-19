"use client";

import { useReducedMotionPreference } from "@/providers/AppProviders";
import { useEffect, useRef, useState } from "react";

const RING_LERP = 0.14;

/** Halo minimaliste — pas de labels ni gadget. */
export function CustomCursor() {
  const reduced = useReducedMotionPreference();
  const [enabled, setEnabled] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || reduced) return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const apply = () => setEnabled(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add("cursor-custom");
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const tick = () => {
      ring.current.x += (pos.current.x - ring.current.x) * RING_LERP;
      ring.current.y += (pos.current.y - ring.current.y) * RING_LERP;
      const px = pos.current.x;
      const py = pos.current.y;
      const rx = ring.current.x;
      const ry = ring.current.y;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${px}px, ${py}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("cursor-custom");
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled || reduced) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-accent mix-blend-difference"
        aria-hidden
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-5 w-5 rounded-full border border-accent/80 bg-cta/10 shadow-[0_0_20px_rgb(93_202_165/0.35)]"
        aria-hidden
      />
    </>
  );
}
