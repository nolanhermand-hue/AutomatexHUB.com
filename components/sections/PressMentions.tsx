"use client";

import { PRESS_MENTIONS } from "@/lib/constants";

/**
 * PRESS MENTIONS — C15 / E14
 * Rend une bande "Vu sur" si PRESS_MENTIONS est rempli, sinon rien.
 * Évite l'effet "vide" tant qu'aucune mention presse réelle n'est obtenue.
 */
export function PressMentions() {
  if (PRESS_MENTIONS.length === 0) return null;

  return (
    <section
      aria-label="Mentions presse"
      className="border-y border-white/[0.04] bg-night/70 px-gutter py-8 backdrop-blur-sm md:py-10"
      data-analytics-section="press"
    >
      <div className="mx-auto max-w-content">
        <p className="label-micro text-muted/60 text-center md:text-left">Vu sur</p>
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 md:justify-start">
          {PRESS_MENTIONS.map((m) => (
            <li key={m.url}>
              <a
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-muted/80 transition hover:text-text"
              >
                {m.outlet}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
