"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";

/** Arrière-plan hero : atmosphère vivante + image WebP. */
export function HeroScene({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();

  return (
    <div className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 -z-10 min-h-[100svh]">
        <div className="absolute inset-0 bg-night" aria-hidden />
        {!reduced ? (
          <motion.div
            className="absolute -inset-[15%] opacity-40"
            aria-hidden
            animate={{ opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(circle at var(--ambient-x, 50%) var(--ambient-y, 50%), rgba(26, 26, 24, 0.04), transparent 55%)",
            }}
          />
        ) : null}
        <Image
          src="/assets/images/hero-atmosphere.webp"
          alt="Automatex — système automatisé pour mandataires immobiliers en Normandie"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.12]"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
