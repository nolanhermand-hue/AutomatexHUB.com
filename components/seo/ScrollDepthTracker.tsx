"use client";

import { trackScrollDepth } from "@/lib/analytics";
import { useEffect, useRef } from "react";

/**
 * I10 — Scroll depth tracker
 * Fire un event à 25 / 50 / 75 / 90 % de scroll, une seule fois par session.
 * Léger : passive listener, RAF throttle, aucune dépendance.
 */
export function ScrollDepthTracker() {
  const fired = useRef<Set<25 | 50 | 75 | 90>>(new Set());
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        ticking.current = false;
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        if (max <= 0) return;
        const pct = (window.scrollY / max) * 100;
        ([25, 50, 75, 90] as const).forEach((threshold) => {
          if (pct >= threshold && !fired.current.has(threshold)) {
            fired.current.add(threshold);
            trackScrollDepth(threshold);
          }
        });
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
