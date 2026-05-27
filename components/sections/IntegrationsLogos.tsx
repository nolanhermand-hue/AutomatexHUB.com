"use client";

import { HERO_COPY } from "@/lib/constants";

/** Bandeau outils + preuves sous le hero (compteur + hébergeur déplacés ici). */
export function IntegrationsLogos() {
  return (
    <section
      aria-label="Outils intégrés"
      className="border-y border-border bg-night px-gutter py-8 md:py-10"
      data-analytics-section="integrations"
    >
      <div className="mx-auto max-w-content">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-bg-card px-3 py-1.5 text-xs text-muted backdrop-blur-sm">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-muted" aria-hidden />
          {HERO_COPY.liveCounter}
        </p>
        <p className="mt-2 text-xs text-muted">{HERO_COPY.hostingMention}</p>
      </div>
    </section>
  );
}
