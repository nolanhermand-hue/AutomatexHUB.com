"use client";

import { LIVE_DEMOS, type LiveDemoStep, type LiveDemoVariant } from "@/lib/live-demo";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type LiveDemoBlockProps = {
  variant: LiveDemoVariant;
  ctaHref?: string;
  ctaLabel?: string;
};

function stepBorder(step: LiveDemoStep): string {
  if (step.color.includes("38a169")) return "border-l-success";
  if (
    step.color.includes("primary") ||
    step.color.includes("e07856") ||
    step.color.includes("ff8200")
  )
    return "border-l-primary";
  if (step.color.includes("e53e3e")) return "border-l-danger";
  return "border-l-border";
}

function stepBadgeClass(step: LiveDemoStep): string {
  if (step.color.includes("38a169")) return "border-success/20 bg-success/10 text-success";
  if (step.color.includes("primary") || step.color.includes("e07856") || step.color.includes("ff8200"))
    return "border-primary/20 bg-primary/10 text-primary";
  return "border-border bg-surface-2 text-faint";
}

export function LiveDemoBlock({
  variant,
  ctaHref = "/rendez-vous",
  ctaLabel = "Voir comment ça s'installe sur votre activité",
}: LiveDemoBlockProps) {
  const demo = LIVE_DEMOS[variant];
  const containerRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const [visibleSteps, setVisibleSteps] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const narrow = window.matchMedia("(max-width: 767px)").matches;
    if (reduced || narrow) {
      setVisibleSteps(demo.steps.length);
      return;
    }
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started.current) return;
        started.current = true;
        demo.steps.forEach((_, i) => {
          window.setTimeout(() => setVisibleSteps(i + 1), i * 650);
        });
      },
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [demo.steps]);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden rounded-xl border border-border bg-bg shadow-2xl shadow-black/50"
    >
      <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-danger/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-warning/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
          </div>
          <span className="ml-2 font-mono text-[11px] text-faint">{demo.title}</span>
        </div>
        <span className="rounded border border-border bg-surface-2 px-2 py-0.5 font-mono text-[10px] uppercase text-faint">
          démo
        </span>
      </div>

      <div className="divide-y divide-border/60">
        {demo.steps.slice(0, visibleSteps).map((step) => (
          <div key={`${step.time}-${step.label}`} className={`border-l-2 px-5 py-4 ${stepBorder(step)} animate-fade-up`}>
            <div className="mb-2 flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="text-base leading-none" aria-hidden="true">
                  {step.icon}
                </span>
                <span className="font-mono text-[11px] text-muted">{step.label}</span>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <span className={`rounded border px-2 py-0.5 font-mono text-[10px] ${stepBadgeClass(step)}`}>
                  {step.badge}
                </span>
                <span className="font-mono text-[10px] tabular-nums text-faint">{step.time}</span>
              </div>
            </div>
            <pre className="whitespace-pre-wrap rounded-lg border border-border bg-[#060a12] px-4 py-3 font-mono text-xs leading-relaxed text-muted">
              {step.message}
            </pre>
          </div>
        ))}
      </div>

      <div className="border-t border-border bg-surface/80 px-5 py-3">
        <p className="font-mono text-[10px] italic text-faint">{demo.note}</p>
        {ctaHref ? (
          <p className="mt-3">
            <Link href={ctaHref} className="font-mono text-[11px] uppercase tracking-wide text-primary hover:underline">
              {ctaLabel} →
            </Link>
          </p>
        ) : null}
      </div>
    </div>
  );
}
