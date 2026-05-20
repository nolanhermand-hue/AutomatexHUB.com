"use client";

import { cn } from "@/lib/cn";
import { useEffect, useRef, useState } from "react";

type RoiCounterProps = {
  variant: "immobilier" | "btp";
  className?: string;
};

/**
 * Animation 8 — ancrage ROI honnête (pas de faux agrégat clients).
 * 1 lead / 1 devis récupéré ≈ 3 500 € — ordre de grandeur.
 */
export function RoiCounter({ variant, className }: RoiCounterProps) {
  const ref = useRef<HTMLElement>(null);
  const [display, setDisplay] = useState("0");
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay("3 500");
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting) || played) return;
        setPlayed(true);
        void (async () => {
          const gsap = (await import("gsap")).default;
          const counter = { v: 0 };
          gsap.to(counter, {
            v: 3500,
            duration: 2.2,
            ease: "power2.out",
            onUpdate: () => setDisplay(Math.round(counter.v).toLocaleString("fr-FR")),
          });
        })();
        obs.disconnect();
      },
      { threshold: 0.35 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [played]);

  const label =
    variant === "immobilier"
      ? "Commission moyenne préservée si 1 lead est rattrapé à temps"
      : "Ordre de grandeur si 1 devis part pendant que vous êtes sur le chantier";

  const foot =
    variant === "immobilier"
      ? "1 lead ≈ 3 500 € · Formule Essentiel rentable dès le premier lead récupéré."
      : "1 chantier récupéré peut représenter plusieurs mois de formule Essentiel.";

  return (
    <section
      ref={ref}
      data-motion="roi-counter"
      data-quality-min="low"
      className={cn(
        "border-y border-border bg-night px-gutter py-10 md:py-12",
        className,
      )}
    >
      <div className="mx-auto max-w-content text-center">
        <p className="text-sm font-medium text-muted">{label}</p>
        <p className="demo-glow-roi mt-3 font-heading text-4xl font-bold text-primary md:text-5xl">
          {display} €
        </p>
        <p className="mx-auto mt-4 max-w-readable text-sm text-muted">{foot}</p>
      </div>
    </section>
  );
}
