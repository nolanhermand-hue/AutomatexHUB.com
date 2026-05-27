"use client";

import { useReducedMotionPreference } from "@/providers/AppProviders";
import { useEffect, useRef, useState } from "react";

const HALO_LERP = 0.1;
const RING_LERP = 0.18;

function usePointerAndMotionGate(): boolean | null {
  const [ok, setOk] = useState<boolean | null>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hoverCapable = window.matchMedia("(hover: hover)");

    const apply = () => {
      setOk(isFinePointer.matches && hoverCapable.matches && !prefersReducedMotion.matches);
    };
    apply();
    isFinePointer.addEventListener("change", apply);
    prefersReducedMotion.addEventListener("change", apply);
    hoverCapable.addEventListener("change", apply);
    return () => {
      isFinePointer.removeEventListener("change", apply);
      prefersReducedMotion.removeEventListener("change", apply);
      hoverCapable.removeEventListener("change", apply);
    };
  }, []);

  return ok;
}

/** Halo bleu qui suit la souris (desktop, pointeur fin). */
export function CustomCursor() {
  const reduced = useReducedMotionPreference();
  const pointerGate = usePointerAndMotionGate();
  const [haloEnabled, setHaloEnabled] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const halo = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const haloRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  const enabled = pointerGate === true && !reduced;

  useEffect(() => {
    if (!enabled) return;
    const isFinePointer = window.matchMedia("(pointer: fine)");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cores = navigator.hardwareConcurrency ?? 4;
    const saveData =
      "connection" in navigator &&
      (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData ===
        true;
    const applyHalo = () => {
      setHaloEnabled(
        isFinePointer.matches && !prefersReducedMotion.matches && cores >= 4 && !saveData,
      );
    };
    applyHalo();
    isFinePointer.addEventListener("change", applyHalo);
    prefersReducedMotion.addEventListener("change", applyHalo);
    return () => {
      isFinePointer.removeEventListener("change", applyHalo);
      prefersReducedMotion.removeEventListener("change", applyHalo);
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add("cursor-custom");
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const tick = () => {
      if (haloEnabled) {
        halo.current.x += (pos.current.x - halo.current.x) * HALO_LERP;
        halo.current.y += (pos.current.y - halo.current.y) * HALO_LERP;
      }
      ring.current.x += (pos.current.x - ring.current.x) * RING_LERP;
      ring.current.y += (pos.current.y - ring.current.y) * RING_LERP;

      const px = pos.current.x;
      const py = pos.current.y;
      const hx = halo.current.x;
      const hy = halo.current.y;
      const rx = ring.current.x;
      const ry = ring.current.y;

      if (haloEnabled && haloRef.current) {
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
  }, [enabled, haloEnabled]);

  if (pointerGate === null) return null;
  if (!enabled) return null;

  return (
    <>
      {haloEnabled ? (
        <div
          ref={haloRef}
          className="pointer-events-none fixed left-0 top-0 z-[9997] h-[280px] w-[280px] rounded-full opacity-100 will-change-transform"
          style={{
            background:
              "radial-gradient(circle, rgb(147 197 253 / 0.55) 0%, rgb(96 165 250 / 0.28) 40%, rgb(59 130 246 / 0.1) 55%, transparent 72%)",
            filter: "blur(14px)",
          }}
          aria-hidden
        />
      ) : null}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-9 w-9 rounded-full border border-[rgb(147_197_253/0.75)] bg-[rgb(147_197_253/0.15)] shadow-[0_0_32px_rgb(96_165_250/0.55),0_0_64px_rgb(59_130_246/0.25)] will-change-transform"
        aria-hidden
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-[rgb(219_234_254/0.98)] shadow-[0_0_14px_rgb(147_197_253/0.95),0_0_28px_rgb(96_165_250/0.5)] will-change-transform"
        aria-hidden
      />
    </>
  );
}
