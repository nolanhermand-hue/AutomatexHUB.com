import { AboutFounder } from "@/components/sections/AboutFounder";
import { Agitation } from "@/components/sections/Agitation";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { FeatureComparison } from "@/components/sections/FeatureComparison";
import { FinalCta } from "@/components/sections/FinalCta";
import { GuaranteeXL } from "@/components/sections/GuaranteeXL";
import { Hero } from "@/components/sections/Hero";
import { IntegrationsLogos } from "@/components/sections/IntegrationsLogos";
import { Pricing } from "@/components/sections/Pricing";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { TrustBar } from "@/components/sections/TrustBar";

/** Séquence allégée : 11 blocs de contenu (+ FinalCta). */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <IntegrationsLogos />
      <Problem />
      <Agitation />
      <Solution />
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
