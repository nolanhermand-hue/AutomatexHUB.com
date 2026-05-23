"use client";

import { USE_CASES_HEADING, USE_CASES_ITEMS } from "@/lib/constants";

/**
 * USE CASES — C7 / B12
 * Trois scénarios terrain concrets, sans nom de client.
 * Format : heure → situation → résultat mesurable.
 */
export function UseCases() {
  return (
    <section
      id="cas-usage"
      className="bg-night px-gutter py-12 md:py-16"
      data-analytics-section="use_cases"
    >
      <div className="mx-auto max-w-content">
        <p className="label-micro text-accent">{USE_CASES_HEADING.eyebrow}</p>
        <h2 className="mt-2 font-heading text-3xl text-text md:text-4xl">
          {USE_CASES_HEADING.h2}
        </h2>

        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {USE_CASES_ITEMS.map((u, i) => (
            <li
              key={u.time}
              className="relative overflow-hidden rounded-2xl border border-border bg-bg-card p-6 shadow-[0_0_0_0.5px_rgb(255_255_255/0.04),0_6px_24px_rgb(0_0_0/0.25)] backdrop-blur-sm"
            >
              <span
                className="absolute -right-3 -top-6 font-heading text-[5rem] font-bold leading-none text-primary/[0.08] tabular-nums"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative">
                <p className="btn-bracket btn-bracket-primary w-full justify-center">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                  {u.time}
                </p>
                <p className="mt-4 text-sm font-semibold text-text leading-[1.6]">
                  {u.scenario}
                </p>
                <p className="mt-3 text-sm text-muted leading-[1.6]">
                  <span className="font-semibold text-accent">→ </span>
                  {u.result}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
