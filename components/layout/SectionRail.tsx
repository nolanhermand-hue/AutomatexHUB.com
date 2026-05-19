"use client";

import { cn } from "@/lib/cn";
import { useEffect, useState } from "react";

const RAIL = [
  { id: "problem", label: "Problème" },
  { id: "solution", label: "Méthode" },
  { id: "pricing", label: "Tarifs" },
  { id: "contact", label: "Contact" },
] as const;

export function SectionRail() {
  const [active, setActive] = useState<string>(RAIL[0]?.id ?? "problem");
  const [hoverId, setHoverId] = useState<string | null>(null);

  useEffect(() => {
    const els = RAIL.map((s) => document.getElementById(s.id)).filter(
      Boolean,
    ) as HTMLElement[];
    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = vis[0]?.target?.id;
        if (id) setActive(id);
      },
      { rootMargin: "-38% 0px -42% 0px", threshold: [0, 0.15, 0.35, 0.55] },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 76;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav
      className="pointer-events-auto fixed right-3 top-1/2 z-[850] hidden -translate-y-1/2 flex-col items-end gap-3 opacity-25 transition-opacity duration-200 hover:opacity-80 md:flex"
      aria-label="Sections du récit"
    >
      {RAIL.map((s) => {
        const on = active === s.id;
        return (
          <button
            key={s.id}
            type="button"
            data-cursor="nav"
            onClick={() => go(s.id)}
            onMouseEnter={() => setHoverId(s.id)}
            onMouseLeave={() => setHoverId(null)}
            className={cn(
              "group/rail relative flex items-center justify-center rounded-full transition-[width,padding,background-color] duration-300 ease-in-out",
              on
                ? "border border-border bg-bg-card px-3 py-1.5 shadow-sm"
                : "h-11 w-11 border border-border bg-bg-card/90 hover:border-primary/30",
            )}
          >
            <span
              className={cn(
                "absolute right-[calc(100%+0.5rem)] whitespace-nowrap rounded-md border border-border bg-bg-card px-2 py-1 font-body text-[11px] font-semibold text-text shadow-lg transition-all duration-200",
                hoverId === s.id
                  ? "translate-x-0 opacity-100"
                  : "pointer-events-none translate-x-2 opacity-0",
              )}
            >
              {s.label}
            </span>
            {!on ? (
              <span
                className="h-2 w-2 rounded-full bg-muted shadow-[0_0_10px_rgb(93_202_165/0.35)] group-hover/rail:bg-accent"
                aria-hidden
              />
            ) : null}
            {on ? (
              <span className="flex items-center gap-2">
                <span className="font-body text-[10px] font-semibold uppercase tracking-wide text-text">
                  {s.label}
                </span>
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-cta [animation:section-rail-dot_2s_ease-in-out_infinite]"
                  aria-hidden
                />
              </span>
            ) : null}
          </button>
        );
      })}
    </nav>
  );
}
