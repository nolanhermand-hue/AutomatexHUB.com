"use client";

import Image from "next/image";
import type { ReactNode } from "react";

/** Arrière-plan hero : image WebP statique + dégradé (plus de WebGL). */
export function HeroScene({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 -z-10 min-h-[100svh]">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/35 via-night to-section"
          aria-hidden
        />
        <Image
          src="/assets/images/hero-atmosphere.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40 mix-blend-screen"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
