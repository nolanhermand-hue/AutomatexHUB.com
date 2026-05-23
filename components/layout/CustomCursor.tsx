"use client";

import { useReducedMotionPreference } from "@/providers/AppProviders";
import { useEffect, useRef, useState } from "react";

const HALO_LERP = 0.1;
const RING_LERP = 0.18;

/** Halo bleu qui suit la souris (desktop, pointeur fin). */
export function CustomCursor() {
  const reduced = useReducedMotionPreference();
  const [enabled, setEnabled] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const halo = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const haloRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

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
      halo.current.x += (pos.current.x - halo.current.x) * HALO_LERP;
      halo.current.y += (pos.current.y - halo.current.y) * HALO_LERP;
      ring.current.x += (pos.current.x - ring.current.x) * RING_LERP;
      ring.current.y += (pos.current.y - ring.current.y) * RING_LERP;

      const px = pos.current.x;
      const py = pos.current.y;
      const hx = halo.current.x;
      const hy = halo.current.y;
      const rx = ring.current.x;
      const ry = ring.current.y;

      if (haloRef.current) {
        haloRef.current.style.transform = `translate3d(${hx}px, ${hy}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${px}px, ${py}px, 0) translate(-50%, -50%)`;
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
        ref={haloRef}
        className="pointer-events-none fixed left-0 top-0 z-[9997] h-[140px] w-[140px] rounded-full opacity-90 will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgb(59 130 246 / 0.35) 0%, rgb(37 99 235 / 0.12) 45%, transparent 70%)",
          filter: "blur(8px)",
        }}
        aria-hidden
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-9 w-9 rounded-full border border-[rgb(96_165_250/0.55)] bg-[rgb(59_130_246/0.08)] shadow-[0_0_24px_rgb(59_130_246/0.45),0_0_48px_rgb(37_99_235/0.2)] will-change-transform"
        aria-hidden
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-[rgb(147_197_253/0.95)] shadow-[0_0_10px_rgb(59_130_246/0.8)] will-change-transform"
        aria-hidden
      />
    </>
  );
}
