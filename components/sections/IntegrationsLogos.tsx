"use client";

import { HERO_COPY, INTEGRATIONS_LOGOS } from "@/lib/constants";

/** Bandeau outils + preuves sous le hero (compteur + hébergeur déplacés ici). */
export function IntegrationsLogos() {
  return (
    <section
      aria-label="Outils intégrés"
      className="border-y border-white/[0.04] bg-night/60 px-gutter py-8 backdrop-blur-sm md:py-10"
      data-analytics-section="integrations"
    >
      <div className="mx-auto max-w-content">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 text-xs text-muted backdrop-blur-sm">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          {HERO_COPY.liveCounter}
        </p>
        <p className="mt-2 text-xs text-muted/70">{HERO_COPY.hostingMention}</p>
        <p className="label-micro mt-6 text-muted/60 md:text-left">
          Fonctionne avec vos outils du quotidien
        </p>
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-muted/80 md:justify-start md:gap-x-10">
          {INTEGRATIONS_LOGOS.map((logo) => (
            <li
              key={logo.iconKey}
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              {logo.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
