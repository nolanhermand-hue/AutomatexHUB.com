"use client";

import { AGITATION_COPY } from "@/lib/constants";

/**
 * AGITATION — B4 / B9
 * Encadré chiffré post-Problème : loss-frame à l'année, ancrage émotionnel fort.
 */
export function Agitation() {
  return (
    <section
      id="agitation"
      className="bg-night px-gutter py-12 md:py-16"
      data-analytics-section="agitation"
    >
      <div className="mx-auto max-w-content">
        <div className="relative overflow-hidden rounded-3xl border border-cta/30 bg-gradient-to-br from-cta/10 via-night to-section p-8 shadow-[0_0_0_0.5px_rgb(29_158_117/0.25),0_12px_48px_rgb(0_0_0/0.4)] md:p-12">
          <p className="label-micro text-accent">{AGITATION_COPY.eyebrow}</p>
          <h2 className="mt-2 max-w-readable font-heading text-3xl leading-tight text-text md:text-5xl">
            {AGITATION_COPY.h2}
          </h2>
          <p className="mt-5 max-w-readable text-base leading-[1.6] text-muted md:text-lg">
            {AGITATION_COPY.body}
          </p>
          <p className="mt-6 text-xs text-muted/60">{AGITATION_COPY.microNote}</p>
        </div>
      </div>
    </section>
  );
}
