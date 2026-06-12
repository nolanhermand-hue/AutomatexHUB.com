"use client";

import { useReducedMotionPreference } from "@/providers/AppProviders";

const CUBES = [
  {
    key: "trigger",
    fill: "var(--color-slate)",
    stroke: "var(--color-slate-deep)",
    label: "DÉCLENCHEUR",
    quote: "Il se passe quelque chose",
    detail: "Un appel manqué, un mail reçu, un formulaire rempli.",
    icon: "phone" as const,
  },
  {
    key: "action",
    fill: "var(--color-terracotta)",
    stroke: "var(--color-primary)",
    label: "ACTION",
    quote: "Votre système réagit seul",
    detail: "Le système exécute : SMS, mail, devis, rappel.",
    icon: "gear" as const,
  },
  {
    key: "result",
    fill: "var(--color-forest)",
    stroke: "#3d7a66",
    label: "RÉSULTAT",
    quote: "Le client est traité, pas vous",
    detail: "Client répondu. Vous, toujours sur votre chantier.",
    icon: "check" as const,
  },
] as const;

function CubeIcon({ kind }: { kind: (typeof CUBES)[number]["icon"] }) {
  const cls = "h-7 w-7 text-cream";
  if (kind === "phone") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M6.5 3h3l1.2 4.5-2.2 1.3a12 12 0 005.5 5.5l1.3-2.2L19 13v3a1.5 1.5 0 01-1.5 1.5C9.8 17.5 6.5 14.2 6.5 8.5A1.5 1.5 0 018 7V3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (kind === "gear") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12.5l4.5 4.5L19 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AutomatisationPrincipleDiagram() {
  const reduced = useReducedMotionPreference();

  return (
    <figure className="mt-12">
      <div
        className="flex flex-col items-stretch gap-6 md:flex-row md:items-center md:justify-center md:gap-3"
        role="img"
        aria-label="Schéma : déclencheur, action automatique, résultat pour le client"
      >
        {CUBES.map((cube, index) => (
          <div key={cube.key} className="flex flex-col items-center md:flex-row md:gap-3">
            <div className="w-full max-w-[280px] rounded-2xl border border-border-light bg-surface-2 p-5 shadow-[0_8px_24px_rgb(0_0_0/0.25)] md:max-w-[220px]">
              <div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl"
                style={{ backgroundColor: cube.fill, boxShadow: `inset 0 -4px 0 ${cube.stroke}` }}
              >
                <CubeIcon kind={cube.icon} />
              </div>
              <p className="mt-4 text-center font-mono text-[10px] font-semibold tracking-widest text-faint">
                {cube.label}
              </p>
              <p className="mt-2 text-center text-sm font-medium text-text">&ldquo;{cube.quote}&rdquo;</p>
              <p className="mt-2 text-center text-xs leading-relaxed text-muted">{cube.detail}</p>
            </div>
            {index < CUBES.length - 1 ? (
              <div className="flex h-10 w-full items-center justify-center md:h-auto md:w-14 md:flex-col" aria-hidden>
                <svg
                  className="h-6 w-full max-w-[120px] md:h-14 md:w-14 md:max-w-none"
                  viewBox="0 0 120 24"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <linearGradient id="flow-line-h" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="var(--color-terracotta)" stopOpacity="0.35" />
                      <stop offset="50%" stopColor="var(--color-terracotta)" stopOpacity="1" />
                      <stop offset="100%" stopColor="var(--color-terracotta)" stopOpacity="0.35" />
                    </linearGradient>
                  </defs>
                  <line
                    x1="4"
                    y1="12"
                    x2="116"
                    y2="12"
                    stroke="url(#flow-line-h)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className={reduced ? undefined : "automation-flow-line"}
                  />
                  <polygon points="116,8 120,12 116,16" fill="var(--color-terracotta)" />
                </svg>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <figcaption className="mx-auto mt-8 max-w-readable text-center text-sm leading-relaxed text-muted">
        Toute automatisation suit ce schéma. Le reste, c&apos;est du sur-mesure pour votre métier.
      </figcaption>
    </figure>
  );
}
