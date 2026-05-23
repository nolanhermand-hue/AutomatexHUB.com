"use client";

import dynamic from "next/dynamic";
import type { CSSProperties } from "react";

const HeroMotionBackdrop = dynamic(
  () =>
    import("@/components/motion/HeroMotionBackdrop").then((m) => ({
      default: m.HeroMotionBackdrop,
    })),
  {
    ssr: false,
    loading: () => (
      <div
        className="absolute inset-0"
        style={{
          background:
            "var(--lazy-hero-fallback, radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,130,0,0.06), transparent))",
        }}
        aria-hidden
      />
    ),
  },
);

type LazyHeroMotionBackdropProps = {
  motionId?: string;
  /** CSS gradient fallback while WebGL loads */
  fallbackGradient?: string;
};

export function LazyHeroMotionBackdrop({
  motionId,
  fallbackGradient,
}: LazyHeroMotionBackdropProps) {
  return (
    <div
      className="contents"
      style={
        fallbackGradient
          ? ({ ["--lazy-hero-fallback" as string]: fallbackGradient } as CSSProperties)
          : undefined
      }
    >
      <HeroMotionBackdrop motionId={motionId} />
    </div>
  );
}
