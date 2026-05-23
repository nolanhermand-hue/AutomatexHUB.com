"use client";

import dynamic from "next/dynamic";
import { DEMO_STATIC, loadLeadImmobilier } from "@/lib/demo-loaders";

const MotionDemo = dynamic(
  () => import("@/components/demo/MotionDemo").then((m) => ({ default: m.MotionDemo })),
  {
    ssr: false,
    loading: () => <div className="h-64 animate-pulse rounded-2xl bg-section" aria-hidden />,
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
