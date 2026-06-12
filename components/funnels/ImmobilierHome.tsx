import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Problem } from "@/components/sections/Problem";
import { Agitation } from "@/components/sections/Agitation";
import { Solution } from "@/components/sections/Solution";
import { AccompanimentPillars } from "@/components/sections/AccompanimentPillars";
import { Pricing } from "@/components/sections/Pricing";
import { DataTrustSection } from "@/components/sections/DataTrustSection";
import { FAQ } from "@/components/sections/FAQ";
import { LocalGeoLinks } from "@/components/sections/LocalGeoLinks";
import { ResiliationSection } from "@/components/sections/ResiliationSection";
import { ImmobilierLiveDemoSection } from "@/components/demo/ImmobilierLiveDemoSection";
import { ImmobilierLeadDemoSection } from "@/components/demo/ImmobilierLeadDemoSection";
import { FeaturedAutomationsSection } from "@/components/sections/FeaturedAutomationsSection";
import { RoiCounter } from "@/components/motion/RoiCounter";
import { IntegrationMarquees } from "@/components/sections/IntegrationMarquees";
import { AutomationsFeatureGrid } from "@/components/sections/AutomationsFeatureGrid";
import { StickyMobileCta } from "@/components/ui/StickyMobileCta";
import { IMMOBILIER_ACCOMPANIMENT } from "@/lib/immobilier-accompaniment-copy";
import { RENDEZ_VOUS_PATH } from "@/lib/hub-nav";

/** Parcours diagnostiqueurs — HTML complet au build (évite CLS skeleton / dynamic). */
export function ImmobilierHome() {
  return (
    <div className="funnel-surface">
      <Hero />
      <TrustBar />
      <Problem />
      <Agitation />
      <Solution />
      <ImmobilierLiveDemoSection />
      <ImmobilierLeadDemoSection />
      <FeaturedAutomationsSection variant="immo" />
      <AccompanimentPillars
        h2={IMMOBILIER_ACCOMPANIMENT.h2}
        pillars={IMMOBILIER_ACCOMPANIMENT.pillars}
        variant="highlight"
        showFounder
      />
      <RoiCounter variant="immobilier" />
      <Pricing />
      <DataTrustSection />
      <FAQ />
      <LocalGeoLinks />
      <IntegrationMarquees />
      <AutomationsFeatureGrid />
      <ResiliationSection />
      <div className="h-20 md:hidden" aria-hidden />
      <StickyMobileCta
        ctaHref={RENDEZ_VOUS_PATH}
        ctaLabel="Nolan me rappelle demain"
        analyticsId="sticky_demo_immo"
        observeHeroPrimary
        singleCtaBar
      />
    </div>
  );
}
