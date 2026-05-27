"use client";

import { useReducedMotionPreference } from "@/providers/AppProviders";
import { useEffect, useState } from "react";

const WATCH_IDS = [
  "calculator",
  "problem",
  "solution",
  "automations",
  "pricing",
  "faq",
  "contact",
];

export function ReadingProgress() {
  const reduceMotion = useReducedMotionPreference();
  const [progress, setProgress] = useState(0);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = WATCH_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (els.length === 0) return;

    let lastId = "";
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting || e.intersectionRatio < 0.35) continue;
          const id = e.target.id;
          if (!id || id === lastId) continue;
          lastId = id;
          if (!reduceMotion) {
            setPulse(true);
            window.setTimeout(() => setPulse(false), 220);
          }
          break;
        }
      },
      { threshold: [0.35, 0.5], rootMargin: "-15% 0px -15% 0px" },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [reduceMotion]);

  return (
    <div
      className={`reading-progress-bar pointer-events-none fixed left-0 right-0 top-0 z-[1000] h-0.5 origin-left bg-gradient-to-r from-primary to-primary/70${pulse ? " reading-progress-bar--pulse" : ""}`}
      style={{ transform: `scaleX(${progress})` }}
      aria-hidden
    />
  );
}
