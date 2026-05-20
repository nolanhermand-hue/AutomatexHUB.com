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
import { IMMOBILIER_ACCOMPANIMENT } from "@/lib/immobilier-accompaniment-copy";

/** Parcours mandataires (ex-accueil). */
export function ImmobilierHome() {
  return (
    <>
      <Hero />
      <TrustBar />
      <LocalGeoLinks />
      <Problem />
      <IntegrationMarquees />
      <Agitation />
      <Solution />
      <ImmobilierLeadDemoSection />
      <AccompanimentPillars
        h2={IMMOBILIER_ACCOMPANIMENT.h2}
        pillars={IMMOBILIER_ACCOMPANIMENT.pillars}
        className="bg-section"
      />
      <Automations />
      <Pricing />
      <DataTrustSection />
      <GuaranteeXL />
      <FAQ />
      <ResiliationSection />
      <Contact variant="immobilier" />
    </>
  );
}
