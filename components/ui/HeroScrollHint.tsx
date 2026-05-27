"use client";

import { useReducedMotionPreference } from "@/providers/AppProviders";
import { useEffect, useState } from "react";

export function HeroScrollHint() {
  const reduce = useReducedMotionPreference();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const onScroll = () => setHide(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (reduce || hide) return null;

  return (
    <div
      className="hero-scroll-hint pointer-events-none mt-10 flex flex-col items-center gap-1 pb-2 text-faint"
      aria-hidden
    >
      <span className="hero-scroll-hint-chevron text-lg leading-none">⌄</span>
      <span className="hero-scroll-hint-chevron hero-scroll-hint-chevron--delay text-lg leading-none -mt-2">
        ⌄
      </span>
    </div>
  );
}
