"use client";

import { BRAND_SHORT } from "@/lib/constants";
import { cn } from "@/lib/cn";

type Mode = "avant" | "apres";

const AVANT_LINES = [
  { time: "07h", text: "Appel manqué sur le chantier" },
  { time: "12h", text: "Devis pas encore fait" },
  { time: "18h", text: "Relance oubliée" },
  { time: "21h", text: "Le client a signé ailleurs" },
] as const;

const APRES_LINES = [
  { time: "07h", text: "Réponse automatique — < 2 min" },
  { time: "12h", text: "Devis PDF envoyé" },
  { time: "18h", text: "Relance automatique" },
  { time: "21h", text: "Résumé Telegram reçu" },
] as const;

type Demo4AvantApresProps = {
  mode: Mode;
  className?: string;
};

export function Demo4AvantApres({ mode, className }: Demo4AvantApresProps) {
  return (
    <div
      data-motion="demo-avant-apres"
      className={cn("grid max-w-4xl grid-cols-1 gap-4 sm:mx-auto sm:grid-cols-2", className)}
    >
      <div
        className={cn(
          "overflow-hidden rounded-xl border border-border bg-surface animate-on-scroll from-left",
          mode === "apres" && "hidden sm:block",
          mode === "avant" && "block",
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <span className="font-mono text-[11px] uppercase tracking-widest text-danger/90">
            Sans {BRAND_SHORT}
          </span>
          <span className="h-2 w-2 rounded-full bg-danger/60" aria-hidden="true" />
        </div>
        <ul className="space-y-2 px-5 py-4">
          {AVANT_LINES.map((item) => (
            <li key={item.time} className="flex items-center gap-3">
              <span className="w-8 shrink-0 font-mono text-[11px] tabular-nums text-faint">{item.time}</span>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-danger/50" aria-hidden="true" />
              <span className="text-[13px] text-muted">{item.text}</span>
            </li>
          ))}
        </ul>
        <div className="border-t border-border bg-bg px-5 py-4">
          <p className="font-mono text-2xl font-bold tabular-nums text-danger">− 220 €</p>
          <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-faint">
            Mission perdue
          </p>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden rounded-xl border border-primary/30 bg-surface animate-on-scroll from-right",
          mode === "avant" && "hidden sm:block",
          mode === "apres" && "block",
        )}
      >
        <div className="flex items-center justify-between border-b border-primary/20 px-5 py-3">
          <span className="font-mono text-[11px] uppercase tracking-widest text-primary">
            Avec {BRAND_SHORT}
          </span>
          <span className="h-2 w-2 animate-pulse rounded-full bg-success" aria-hidden="true" />
        </div>
        <ul className="space-y-2 px-5 py-4">
          {APRES_LINES.map((item) => (
            <li key={item.time} className="flex items-center gap-3">
              <span className="w-8 shrink-0 font-mono text-[11px] tabular-nums text-faint">{item.time}</span>
              <svg
                className="h-3 w-3 shrink-0 text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[13px] text-muted">{item.text}</span>
            </li>
          ))}
        </ul>
        <div className="border-t border-primary/20 bg-bg px-5 py-4">
          <p className="font-mono text-2xl font-bold tabular-nums text-success">+ 220 €</p>
          <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-faint">
            Mission préservée
          </p>
        </div>
      </div>
    </div>
  );
}
