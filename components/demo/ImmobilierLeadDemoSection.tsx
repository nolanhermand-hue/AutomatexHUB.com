"use client";

import dynamic from "next/dynamic";
import { DEMO_STATIC, loadLeadImmobilier } from "@/lib/demo-loaders";

const MotionDemo = dynamic(
  () => import("@/components/demo/MotionDemo").then((m) => ({ default: m.MotionDemo })),
  {
    ssr: false,
    loading: () => (
      <div
        className="w-full overflow-hidden rounded-2xl border border-border bg-section/80 p-8"
        aria-hidden="true"
      >
        <div className="mb-6 h-4 w-32 animate-pulse rounded bg-border" />
        <div className="space-y-3">
          <div className="h-12 animate-pulse rounded-xl bg-border/80" />
          <div className="h-12 animate-pulse rounded-xl bg-border/60 opacity-90" />
          <div className="h-12 animate-pulse rounded-xl bg-border/40 opacity-75" />
        </div>
      </div>
    ),
  },
);

export function ImmobilierLeadDemoSection() {
  return (
    <section className="bg-night px-gutter py-12 md:py-16">
      <div className="mx-auto max-w-content">
        <h2 className="font-heading text-2xl text-text md:text-3xl">
          Pendant que vous êtes en visite
        </h2>
        <p className="mt-3 max-w-readable text-muted">
          Un lead reçoit une réponse en moins de 2 minutes — vous terminez la visite sereinement.
        </p>
        <div className="mt-8">
          <MotionDemo
            demoId="lead-immobilier"
            staticSrc={DEMO_STATIC.leadImmobilier.src}
            ariaLabel="Lead immobilier traité automatiquement pendant une visite"
            staticAlt={DEMO_STATIC.leadImmobilier.alt}
            loadAnimation={loadLeadImmobilier}
          />
        </div>
      </div>
    </section>
  );
}
