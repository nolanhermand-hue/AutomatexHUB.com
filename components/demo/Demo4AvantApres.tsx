"use client";

import { cn } from "@/lib/cn";
import { detectMotionQuality } from "@/lib/motion/quality";
import { initDemo4ColumnPulse, initDemo4Timeline } from "@/lib/motion/demo4Timeline";
import { useEffect, useRef } from "react";

type Mode = "avant" | "apres";

const AVANT_LINES = [
  { time: "07 h", text: "Appel manqué sur le chantier", problem: true },
  { time: "12 h", text: "Devis pas encore fait", problem: true },
  { time: "18 h", text: "Relance oubliée", problem: true },
  { time: "21 h", text: "Le client a signé ailleurs", problem: true },
] as const;

const APRES_LINES = [
  { time: "07 h", text: "Réponse auto en 90 s", ok: true },
  { time: "12 h", text: "Devis PDF envoyé", ok: true },
  { time: "18 h", text: "Relance automatique", ok: true },
  { time: "21 h", text: "Résumé Telegram", ok: true },
] as const;

type Demo4AvantApresProps = {
  mode: Mode;
  className?: string;
};

/**
 * Démo 4 — split avant/après · GSAP ScrollTrigger (desktop) · pulse colonne (mobile)
 */
export function Demo4AvantApres({ mode, className }: Demo4AvantApresProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<Awaited<ReturnType<typeof initDemo4Timeline>> | null>(null);
  const mobileCleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const quality = detectMotionQuality();
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    if (quality === "low" || !isDesktop) return;

    let cancelled = false;
    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting) || cancelled) return;
        void initDemo4Timeline(root, { scrub: false }).then((handle) => {
          if (cancelled) {
            handle.destroy();
            return;
          }
          timelineRef.current = handle;
        });
        obs.disconnect();
      },
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" },
    );
    obs.observe(root);

    const onVis = () => {
      if (document.hidden) timelineRef.current?.pause();
      else timelineRef.current?.resume();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelled = true;
      obs.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      timelineRef.current?.destroy();
      timelineRef.current = null;
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (reduced || isDesktop) return;

    mobileCleanupRef.current?.();
    const col = root.querySelector<HTMLElement>(mode === "avant" ? ".avant-col" : ".apres-col");
    if (!col) return;

    void initDemo4ColumnPulse(col).then((cleanup) => {
      mobileCleanupRef.current = cleanup;
    });

    return () => {
      mobileCleanupRef.current?.();
      mobileCleanupRef.current = null;
    };
  }, [mode]);

  return (
    <div
      ref={rootRef}
      data-motion="demo-avant-apres"
      data-quality-min="medium"
      className={cn("demo4-root relative grid gap-4 md:grid-cols-[1fr_auto_1fr]", className)}
    >
      <div
        className={cn(
          "avant-col rounded-xl border border-[#e53e3e]/45 bg-[#0d0d0d] p-5 md:p-6",
          mode === "apres" && "hidden md:block",
          mode === "avant" && "block",
        )}
      >
        <p className="mb-4 text-center text-sm font-semibold text-[#e53e3e]">Avant</p>
        <ul className="space-y-3">
          {AVANT_LINES.map((line) => (
            <li
              key={line.time}
              className="timeline-item flex items-start gap-2 text-xs text-[#f5f4f1]/90 md:text-sm"
            >
              <span
                className="icon-problem mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e53e3e]/25 text-[10px] font-bold text-[#e53e3e]"
                aria-hidden
              >
                !
              </span>
              <span>
                <time className="font-mono font-semibold text-[#f5f4f1]/70">{line.time}</time>
                {" — "}
                {line.text}
              </span>
            </li>
          ))}
        </ul>
        <p className="result-negative demo-pulse-red mt-6 text-center font-heading text-xl font-bold text-[#e53e3e] md:text-2xl">
          −3 500 €
        </p>
      </div>

      <div
        className="demo4-divider hidden w-px self-stretch bg-[#2a2a2a] opacity-30 md:block"
        aria-hidden
      />

      <div
        className={cn(
          "apres-col rounded-xl border border-[#38a169]/45 bg-[#0d0d0d] p-5 md:p-6",
          mode === "avant" && "hidden md:block",
          mode === "apres" && "block",
        )}
      >
        <p className="mb-4 text-center text-sm font-semibold text-[#38a169]">Après</p>
        <ul className="space-y-3">
          {APRES_LINES.map((line) => (
            <li
              key={line.time}
              className="timeline-item flex items-start gap-2 text-xs text-[#f5f4f1]/90 md:text-sm"
            >
              <span
                className="icon-success mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#38a169]/25 text-[10px] text-[#38a169]"
                aria-hidden
              >
                ✓
              </span>
              <span>
                <time className="font-mono font-semibold text-[#f5f4f1]/70">{line.time}</time>
                {" — "}
                {line.text}
              </span>
            </li>
          ))}
        </ul>
        <p className="result-positive mt-6 text-center font-heading text-xl font-bold text-[#38a169] md:text-2xl">
          +3 500 €
        </p>
      </div>
    </div>
  );
}
