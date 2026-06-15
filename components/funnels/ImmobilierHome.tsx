import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Problem } from "@/components/sections/Problem";
import { Agitation } from "@/components/sections/Agitation";
import { AccompanimentPillars } from "@/components/sections/AccompanimentPillars";
import { Pricing } from "@/components/sections/Pricing";
import { DataTrustSection } from "@/components/sections/DataTrustSection";
import { FAQ } from "@/components/sections/FAQ";
import { LocalGeoLinks } from "@/components/sections/LocalGeoLinks";
import { ResiliationSection } from "@/components/sections/ResiliationSection";
import { IMMOBILIER_ACCOMPANIMENT } from "@/lib/immobilier-accompaniment-copy";
import dynamic from "next/dynamic";

const sectionPulse = (minH: string, bg: string) => (
  <div className={`${minH} animate-pulse ${bg}`} aria-hidden />
);

const Solution = dynamic(
  () => import("@/components/sections/Solution").then((m) => ({ default: m.Solution })),
  { ssr: true, loading: () => sectionPulse("min-h-[400px]", "bg-night") },
);

const ImmobilierLiveDemoSection = dynamic(
  () =>
    import("@/components/demo/ImmobilierLiveDemoSection").then((m) => ({
      default: m.ImmobilierLiveDemoSection,
    })),
  { ssr: true, loading: () => sectionPulse("min-h-64", "bg-bg-card") },
);

const ImmobilierLeadDemoSection = dynamic(
  () =>
    import("@/components/demo/ImmobilierLeadDemoSection").then((m) => ({
      default: m.ImmobilierLeadDemoSection,
    })),
  { ssr: true, loading: () => sectionPulse("min-h-64", "bg-night") },
);

const FeaturedAutomationsSection = dynamic(
  () =>
    import("@/components/sections/FeaturedAutomationsSection").then((m) => ({
      default: m.FeaturedAutomationsSection,
    })),
  { ssr: true, loading: () => sectionPulse("min-h-40", "bg-night") },
);

const RoiCounter = dynamic(
  () => import("@/components/motion/RoiCounter").then((m) => ({ default: m.RoiCounter })),
  { ssr: true, loading: () => sectionPulse("min-h-32", "bg-bg-card") },
);

const IntegrationMarquees = dynamic(
  () =>
    import("@/components/sections/IntegrationMarquees").then((m) => ({
      default: m.IntegrationMarquees,
    })),
  { ssr: true, loading: () => sectionPulse("min-h-24", "bg-night") },
);

const AutomationsFeatureGrid = dynamic(
  () =>
    import("@/components/sections/AutomationsFeatureGrid").then((m) => ({
      default: m.AutomationsFeatureGrid,
    })),
  { ssr: true, loading: () => sectionPulse("min-h-48", "bg-bg-card") },
);

/** Parcours diagnostiqueurs — sections lourdes chargées à la demande (perf mobile). */
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
    </div>
  );
}
