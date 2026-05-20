import { ImmobilierLeadDemoSection } from "@/components/demo/ImmobilierLeadDemoSection";
import { AccompanimentPillars } from "@/components/sections/AccompanimentPillars";
import { Agitation } from "@/components/sections/Agitation";
import { Automations } from "@/components/sections/Automations";
import { Contact } from "@/components/sections/Contact";
import { DataTrustSection } from "@/components/sections/DataTrustSection";
import { FAQ } from "@/components/sections/FAQ";
import { GuaranteeXL } from "@/components/sections/GuaranteeXL";
import { Hero } from "@/components/sections/Hero";
import { IntegrationMarquees } from "@/components/sections/IntegrationMarquees";
import { LocalGeoLinks } from "@/components/sections/LocalGeoLinks";
import { Pricing } from "@/components/sections/Pricing";
import { Problem } from "@/components/sections/Problem";
import { ResiliationSection } from "@/components/sections/ResiliationSection";
import { Solution } from "@/components/sections/Solution";
import { TrustBar } from "@/components/sections/TrustBar";
import { StickyMobileCta } from "@/components/ui/StickyMobileCta";
import { RoiCounter } from "@/components/motion/RoiCounter";
import { BOOKING_CTA_LABEL } from "@/lib/constants";
import { IMMOBILIER_ACCOMPANIMENT } from "@/lib/immobilier-accompaniment-copy";

/** Parcours mandataires — pricing et accompagnement remontés avant intégrations. */
export function ImmobilierHome() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Problem />
      <Agitation />
      <Solution />
      <ImmobilierLeadDemoSection />
      <AccompanimentPillars
        h2={IMMOBILIER_ACCOMPANIMENT.h2}
        pillars={IMMOBILIER_ACCOMPANIMENT.pillars}
        variant="highlight"
        showFounder
      />
      <RoiCounter variant="immobilier" />
      <Pricing />
      <GuaranteeXL />
      <DataTrustSection />
      <FAQ />
      <LocalGeoLinks />
      <IntegrationMarquees />
      <Automations />
      <ResiliationSection />
      <Contact variant="immobilier" />
      <div className="h-20 md:hidden" aria-hidden />
      <StickyMobileCta
        ctaHref="#contact"
        ctaLabel={BOOKING_CTA_LABEL}
        analyticsId="sticky_demo_immo"
      />
    </>
  );
}
