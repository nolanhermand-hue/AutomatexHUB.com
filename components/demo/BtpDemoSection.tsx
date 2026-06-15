"use client";

import { BRAND_SHORT } from "@/lib/constants";
import { DemoVideo } from "@/components/demo/DemoVideo";

export function BtpDemoSection() {
  return (
    <section id="demo" className="bg-night px-gutter py-12 md:py-16">
      <div className="mx-auto max-w-content">
        <h2 className="font-heading text-3xl text-text">Voici ce qui change avec {BRAND_SHORT}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <DemoVideo id="appel-manque" />
          <DemoVideo id="devis-auto" />
        </div>
      </div>
    </section>
  );
}
