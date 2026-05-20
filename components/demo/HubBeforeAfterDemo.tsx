"use client";

import { Demo4AvantApres } from "@/components/demo/Demo4AvantApres";
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
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" },
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
        <p className="mx-auto mt-3 max-w-readable text-center text-sm text-muted">
          Même journée sur le terrain — avec ou sans le système qui répond pendant que vous travaillez.
        </p>
        <div className="mt-6 flex justify-center gap-2 md:hidden" role="tablist" aria-label="Avant ou après">
          <button
            type="button"
            role="tab"
            aria-selected={mode === "avant"}
            onClick={() => setMode("avant")}
            className={cn(
              "min-h-[44px] rounded-md px-4 text-sm font-semibold motion-safe:transition-transform motion-safe:duration-200",
              mode === "avant" ? "bg-[#e53e3e]/20 text-[#e53e3e]" : "border border-border text-muted",
            )}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            Avant
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "apres"}
            onClick={() => setMode("apres")}
            className={cn(
              "min-h-[44px] rounded-md px-4 text-sm font-semibold motion-safe:transition-transform motion-safe:duration-200",
              mode === "apres" ? "bg-[#38a169]/20 text-[#38a169]" : "border border-border text-muted",
            )}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            Après
          </button>
        </div>
        <figure className="mt-8 motion-container" role="img">
          <img
            src="/assets/demos/avant-apres-static.png"
            alt="Comparaison : journée stressée sans système versus journée sereine avec réponses et devis automatiques"
            className={cn("mx-auto w-full max-w-4xl rounded-xl", !showStatic && "hidden")}
            width={640}
            height={420}
            loading="lazy"
          />
          {!showStatic ? (
            <div className="motion-canvas mx-auto max-w-4xl" aria-hidden={false}>
              <Demo4AvantApres mode={mode} />
            </div>
          ) : null}
        </figure>
      </div>
    </section>
  );
}
