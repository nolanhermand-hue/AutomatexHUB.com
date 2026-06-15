"use client";

import { Demo4AvantApres } from "@/components/demo/Demo4AvantApres";
import { cn } from "@/lib/cn";
import { useState } from "react";

type Mode = "avant" | "apres";

export function HubBeforeAfterDemo() {
  const [mode, setMode] = useState<Mode>("avant");

  return (
    <section
      className="border-t border-border px-gutter py-16 md:py-20"
      aria-label="Comparaison journée sans et avec AutomateX"
    >
      <div className="mx-auto max-w-content">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-muted">
          COMPARAISON — MÊME JOURNÉE
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-text">
          Une journée type — avant et après
        </h2>
        <p className="mt-3 max-w-readable text-sm text-muted">
          Même journée sur le terrain — avec ou sans le système qui répond pendant que vous travaillez.
        </p>

        <div className="mt-6 flex justify-center gap-2 sm:hidden" role="tablist" aria-label="Avant ou après">
          <button
            type="button"
            role="tab"
            aria-selected={mode === "avant"}
            onClick={() => setMode("avant")}
            className={cn(
              "min-h-[44px] rounded-md px-4 font-mono text-[11px] uppercase tracking-wider",
              mode === "avant" ? "border border-danger/40 bg-danger/10 text-danger" : "border border-border text-muted",
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
              "min-h-[44px] rounded-md px-4 font-mono text-[11px] uppercase tracking-wider",
              mode === "apres" ? "border border-primary/40 bg-primary/10 text-primary" : "border border-border text-muted",
            )}
          >
            Après
          </button>
        </div>

        <div className="mt-10">
          <Demo4AvantApres mode={mode} />
        </div>
      </div>
    </section>
  );
}
