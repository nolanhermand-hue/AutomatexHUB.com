import { AboutFounder } from "@/components/sections/AboutFounder";
import { AccompanimentYear } from "@/components/sections/AccompanimentYear";
import { Agitation } from "@/components/sections/Agitation";
import { Automations } from "@/components/sections/Automations";
import { Calculator } from "@/components/sections/Calculator";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { FeatureComparison } from "@/components/sections/FeatureComparison";
import { FinalCta } from "@/components/sections/FinalCta";
import { GuaranteeXL } from "@/components/sections/GuaranteeXL";
import { Hero } from "@/components/sections/Hero";
import { IntegrationMarquees } from "@/components/sections/IntegrationMarquees";
import { IntegrationsLogos } from "@/components/sections/IntegrationsLogos";
import { Pricing } from "@/components/sections/Pricing";
import { Problem } from "@/components/sections/Problem";
import { ResponseTimeline } from "@/components/sections/ResponseTimeline";
import { Solution } from "@/components/sections/Solution";
import { TrustBar } from "@/components/sections/TrustBar";

/** Séquence allégée : 12 blocs de contenu (+ FinalCta). */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <IntegrationsLogos />
      <Problem />
      <IntegrationMarquees />
      <Agitation />
      <Calculator />
      <Solution />
      <ResponseTimeline />
      <Automations />
      <AccompanimentYear />
      <Pricing />
      <FeatureComparison />
      <GuaranteeXL />
      <AboutFounder />
      <FAQ />
      <Contact />
      <FinalCta />
    </>
  );
}
