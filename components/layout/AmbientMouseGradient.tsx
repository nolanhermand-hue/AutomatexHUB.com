"use client";

import { useReducedMotionPreference } from "@/providers/AppProviders";
import { useEffect, useRef } from "react";

/**
 * Gradient radial très doux qui suit la souris (lerp 0.03). Désactivé si reduced motion ou pointer grossier.
 */
export function AmbientMouseGradient() {
  const reduced = useReducedMotionPreference();
  const enabledRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || reduced) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    let raf = 0;
    const target = { x: 50, y: 50 };
    const current = { x: 50, y: 50 };

    const tick = () => {
      current.x += (target.x - current.x) * 0.03;
      current.y += (target.y - current.y) * 0.03;
      document.body.style.setProperty("--ambient-x", `${current.x}%`);
      document.body.style.setProperty("--ambient-y", `${current.y}%`);
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      target.x = (e.clientX / window.innerWidth) * 100;
      target.y = (e.clientY / window.innerHeight) * 100;
    };

    const apply = () => {
      if (!fine.matches) {
        enabledRef.current = false;
        cancelAnimationFrame(raf);
        document.body.style.removeProperty("--ambient-x");
        document.body.style.removeProperty("--ambient-y");
        return;
      }
      enabledRef.current = true;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };

    apply();
    fine.addEventListener("change", apply);
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      fine.removeEventListener("change", apply);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return null;
}
