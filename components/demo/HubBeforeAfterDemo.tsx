"use client";

import { cn } from "@/lib/cn";
import { useEffect, useRef, useState } from "react";

type Mode = "avant" | "apres";

export function HubBeforeAfterDemo() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [reduced, setReduced] = useState(true);
  const [mode, setMode] = useState<Mode>("avant");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced || !rootRef.current) return;
    const el = rootRef.current;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setActive(true);
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduced]);

  const showStatic = reduced || !active;

  return (
    <section
      ref={rootRef}
      className="border-t border-border bg-bg-card px-gutter py-12 md:py-16"
      aria-label="Comparaison journée sans et avec Automatex"
    >
      <div className="mx-auto max-w-content">
        <h2 className="text-center font-heading text-2xl text-text md:text-3xl">
          Une journée type — avant et après
        </h2>
        <div className="mt-6 flex justify-center gap-2 md:hidden">
          <button
            type="button"
            role="tab"
            aria-selected={mode === "avant"}
            onClick={() => setMode("avant")}
            className={cn(
              "min-h-[44px] rounded-md px-4 text-sm font-semibold",
              mode === "avant" ? "bg-[#e53e3e]/20 text-[#e53e3e]" : "border border-border text-muted",
            )}
          >
            Avant
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "apres"}
            onClick={() => setMode("apres")}
            className={cn(
              "min-h-[44px] rounded-md px-4 text-sm font-semibold",
              mode === "apres" ? "bg-[#38a169]/20 text-[#38a169]" : "border border-border text-muted",
            )}
          >
            Après
          </button>
        </div>
        <figure className="mt-8" role="img">
          <img
            src="/assets/demos/avant-apres-static.png"
            alt="Comparaison : journée stressée sans système versus journée sereine avec réponses et devis automatiques"
            className={cn("mx-auto w-full max-w-4xl rounded-xl", !showStatic && "hidden")}
            width={640}
            height={420}
            loading="lazy"
          />
          {!showStatic ? (
            <div className="grid gap-4 md:grid-cols-2" aria-hidden>
              <div
                className={cn(
                  "demo-root demo-loop-14 rounded-xl border border-[#e53e3e]/40 bg-[#0d0d0d] p-6",
                  mode === "apres" && "hidden md:block",
                  mode === "avant" && "block",
                )}
              >
                <p className="mb-4 text-center text-sm font-semibold text-[#e53e3e]">Avant</p>
                <ul className="space-y-3 text-xs text-[#f5f4f1]/90">
                  <li>07 h — Appel manqué</li>
                  <li>12 h — Devis pas fait</li>
                  <li>18 h — Relance oubliée</li>
                  <li>21 h — Client parti ailleurs</li>
                  <li className="demo-pulse-red text-base font-bold">−3 500 €</li>
                </ul>
              </div>
              <div
                className={cn(
                  "demo-root demo-loop-14 rounded-xl border border-[#38a169]/40 bg-[#0d0d0d] p-6",
                  mode === "avant" && "hidden md:block",
                  mode === "apres" && "block",
                )}
              >
                <p className="mb-4 text-center text-sm font-semibold text-[#38a169]">Après</p>
                <ul className="space-y-3 text-xs text-[#f5f4f1]/90">
                  <li>07 h — Réponse auto 90 s ✅</li>
                  <li>12 h — Devis envoyé ✅</li>
                  <li>18 h — Relance auto ✅</li>
                  <li>21 h — Résumé Telegram ✅</li>
                  <li className="text-base font-bold text-[#38a169]">+3 500 €</li>
                </ul>
              </div>
            </div>
          ) : null}
        </figure>
      </div>
    </section>
  );
}
