import { LiveDemoBlock } from "@/components/demo/LiveDemoBlock";

export function ImmobilierLiveDemoSection() {
  return (
    <section id="demo" className="scroll-mt-24 bg-bg-card px-gutter py-12 md:scroll-mt-28 md:py-16">
      <div className="mx-auto max-w-content">
        <h2 className="font-heading text-2xl text-text md:text-3xl">
          Concrètement — ce qui se passe à 22h
        </h2>
        <p className="mt-3 max-w-readable text-sm text-muted">
          Voici le déroulement exact quand un client arrive pendant votre visite. Les messages sont
          personnalisés avec votre prénom lors de l&apos;onboarding.
        </p>
        <div className="mt-8">
          <LiveDemoBlock variant="immobilier" ctaHref="/rendez-vous" />
        </div>
      </div>
    </section>
  );
}
