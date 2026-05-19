"use client";

import { useReducedMotionPreference } from "@/providers/AppProviders";
import gsap from "gsap";
import { useEffect, useRef } from "react";

function formatInt(n: number): string {
  return Math.round(n).toLocaleString("fr-FR");
}

function formatDec(n: number): string {
  return n.toLocaleString("fr-FR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}

export function MatrixNumber({
  value,
  decimals = 0,
  className,
}: {
  value: number;
  decimals?: 0 | 1;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotionPreference();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fmt = (v: number) =>
      decimals === 0 ? formatInt(v) : formatDec(Math.round(v * 10) / 10);

    if (reduced) {
      el.textContent = fmt(value);
      return;
    }

    let alive = true;
    const amp = Math.max(Math.abs(value) * 2.4, 8000);
    const state = { _: 0 };

    gsap.to(state, {
      _: 1,
      duration: 0.62,
      ease: "none",
      onUpdate: () => {
        if (!alive) return;
        el.textContent = fmt(Math.random() * amp);
      },
      onComplete: () => {
        if (!alive) return;
        el.textContent = fmt(value);
      },
    });

    return () => {
      alive = false;
    };
  }, [value, reduced, decimals]);

  return <span ref={ref} className={className} />;
}
