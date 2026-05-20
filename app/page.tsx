import { Agitation } from "@/components/sections/Agitation";
import { Automations } from "@/components/sections/Automations";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCta } from "@/components/sections/FinalCta";
import { GuaranteeXL } from "@/components/sections/GuaranteeXL";
import { Hero } from "@/components/sections/Hero";
import { IntegrationMarquees } from "@/components/sections/IntegrationMarquees";
import { Pricing } from "@/components/sections/Pricing";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { TrustBar } from "@/components/sections/TrustBar";

/** Parcours court : une section majeure ≈ un CTA vers #contact. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Problem />
      <IntegrationMarquees />
      <Agitation />
      <Solution />
      <Automations />
      <Pricing />
      <GuaranteeXL />
      <FAQ />
      <Contact />
      <FinalCta />
    </>
  );
}
