"use client";

import { DemoVideo } from "@/components/demo/DemoVideo";

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
          <DemoVideo id="lead-immobilier" />
        </div>
      </div>
    </section>
  );
}
