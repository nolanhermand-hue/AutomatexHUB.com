"use client";

import dynamic from "next/dynamic";
import { DEMO_STATIC, loadLeadImmobilier } from "@/lib/demo-loaders";

const MotionDemo = dynamic(
  () => import("@/components/demo/MotionDemo").then((m) => ({ default: m.MotionDemo })),
  {
    ssr: false,
    loading: () => (
      <div
        className="relative w-full overflow-hidden rounded-xl border border-border bg-surface p-4 md:p-6"
        style={{ minHeight: "min(100%, 520px)" }}
        aria-hidden="true"
      >
        <div
          className="mx-auto w-full max-w-[640px] animate-pulse rounded-lg bg-border/50"
          style={{ aspectRatio: "640 / 420" }}
        />
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
          Une demande reçoit une réponse en moins de 2 minutes — vous terminez la visite sereinement.
        </p>
        <div className="mt-8">
          <MotionDemo
            demoId="lead-immobilier"
            staticSrc={DEMO_STATIC.leadImmobilier.src}
            ariaLabel="Demande immobilière traitée automatiquement pendant une visite"
            staticAlt={DEMO_STATIC.leadImmobilier.alt}
            loadAnimation={loadLeadImmobilier}
          />
        </div>
      </div>
    </section>
  );
}
