"use client";

import { BRAND_SHORT } from "@/lib/constants";
import { MotionDemo } from "@/components/demo/MotionDemo";
import { DEMO_STATIC, loadAppelManque, loadDevisAuto } from "@/lib/demo-loaders";

export function BtpDemoSection() {
  return (
    <section id="demo" className="bg-night px-gutter py-12 md:py-16">
      <div className="mx-auto max-w-content">
        <h2 className="font-heading text-3xl text-text">Voici ce qui change avec {BRAND_SHORT}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <MotionDemo
            demoId="appel-manque"
            staticSrc={DEMO_STATIC.appelManque.src}
            ariaLabel="Appel manqué traité par une réponse automatique en moins de 2 minutes"
            staticAlt={DEMO_STATIC.appelManque.alt}
            loadAnimation={loadAppelManque}
          />
          <MotionDemo
            demoId="devis-auto"
            staticSrc={DEMO_STATIC.devisAuto.src}
            ariaLabel="Devis généré après dictée vocale"
            staticAlt={DEMO_STATIC.devisAuto.alt}
            loadAnimation={loadDevisAuto}
          />
        </div>
      </div>
    </section>
  );
}
