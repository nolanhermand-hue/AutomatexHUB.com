"use client";

import { AGITATION_COPY } from "@/lib/constants";
import { SectionCta } from "@/components/ui/SectionCta";

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
        <div className="relative overflow-hidden rounded-xl border border-border bg-bg-card p-8 md:p-12">
          <p className="label-micro text-faint uppercase">{AGITATION_COPY.eyebrow}</p>
          <h2 className="mt-2 max-w-readable font-heading text-3xl leading-tight text-text md:text-5xl">
            {AGITATION_COPY.h2}
          </h2>
          <p className="mt-5 max-w-readable text-base leading-[1.6] text-muted md:text-lg">
            {AGITATION_COPY.body}
          </p>
          <p className="mt-6 text-xs text-stat-caption">{AGITATION_COPY.microNote}</p>
          <div className="mt-8">
            <SectionCta analyticsId="agitation_cta" />
          </div>
        </div>
      </div>
    </section>
  );
}
