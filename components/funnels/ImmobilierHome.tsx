import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { StickyMobileCta } from "@/components/ui/StickyMobileCta";
import { IMMOBILIER_ACCOMPANIMENT } from "@/lib/immobilier-accompaniment-copy";
import dynamic from "next/dynamic";

const sectionPulse = (className: string) => (
  <div className={`h-[400px] animate-pulse ${className}`} aria-hidden />
);

const Problem = dynamic(
  () => import("@/components/sections/Problem").then((m) => ({ default: m.Problem })),
  { ssr: true, loading: () => sectionPulse("bg-[#080D1A]") },
);

const Agitation = dynamic(
  () => import("@/components/sections/Agitation").then((m) => ({ default: m.Agitation })),
  { ssr: true, loading: () => sectionPulse("bg-[#080D1A]") },
);

const Solution = dynamic(
  () => import("@/components/sections/Solution").then((m) => ({ default: m.Solution })),
  { ssr: true, loading: () => sectionPulse("bg-[#080D1A]") },
);

const AccompanimentPillars = dynamic(
  () =>
    import("@/components/sections/AccompanimentPillars").then((m) => ({
      default: m.AccompanimentPillars,
    })),
  { ssr: true, loading: () => sectionPulse("bg-night") },
);

const Pricing = dynamic(
  () => import("@/components/sections/Pricing").then((m) => ({ default: m.Pricing })),
  { ssr: true, loading: () => sectionPulse("bg-[#080D1A]") },
);

const GuaranteeXL = dynamic(
  () => import("@/components/sections/GuaranteeXL").then((m) => ({ default: m.GuaranteeXL })),
  { ssr: true, loading: () => sectionPulse("bg-night") },
);

const DataTrustSection = dynamic(
  () =>
    import("@/components/sections/DataTrustSection").then((m) => ({
      default: m.DataTrustSection,
    })),
  { ssr: true, loading: () => sectionPulse("bg-night") },
);

const FAQ = dynamic(
  () => import("@/components/sections/FAQ").then((m) => ({ default: m.FAQ })),
  { ssr: true, loading: () => sectionPulse("bg-night") },
);

const LocalGeoLinks = dynamic(
  () => import("@/components/sections/LocalGeoLinks").then((m) => ({ default: m.LocalGeoLinks })),
  { ssr: true, loading: () => sectionPulse("bg-night") },
);

const ResiliationSection = dynamic(
  () =>
    import("@/components/sections/ResiliationSection").then((m) => ({
      default: m.ResiliationSection,
    })),
  { ssr: true, loading: () => sectionPulse("bg-night") },
);

const Contact = dynamic(
  () => import("@/components/sections/Contact").then((m) => ({ default: m.Contact })),
  { ssr: true, loading: () => sectionPulse("bg-night") },
);

const ImmobilierLiveDemoSection = dynamic(
  () =>
    import("@/components/demo/ImmobilierLiveDemoSection").then((m) => ({
      default: m.ImmobilierLiveDemoSection,
    })),
  { ssr: true, loading: () => <div className="min-h-48 animate-pulse bg-bg-card" aria-hidden /> },
);

const ImmobilierLeadDemoSection = dynamic(
  () =>
    import("@/components/demo/ImmobilierLeadDemoSection").then((m) => ({
      default: m.ImmobilierLeadDemoSection,
    })),
  { ssr: true, loading: () => <div className="min-h-64 animate-pulse bg-night" aria-hidden /> },
);

const FeaturedAutomationsSection = dynamic(
  () =>
    import("@/components/sections/FeaturedAutomationsSection").then((m) => ({
      default: m.FeaturedAutomationsSection,
    })),
  { ssr: true, loading: () => <div className="min-h-40 animate-pulse bg-night" aria-hidden /> },
);

const RoiCounter = dynamic(
  () => import("@/components/motion/RoiCounter").then((m) => ({ default: m.RoiCounter })),
  { ssr: true, loading: () => <div className="min-h-32 animate-pulse bg-surface" aria-hidden /> },
);

const IntegrationMarquees = dynamic(
  () =>
    import("@/components/sections/IntegrationMarquees").then((m) => ({
      default: m.IntegrationMarquees,
    })),
  { ssr: true, loading: () => <div className="min-h-24 animate-pulse bg-night" aria-hidden /> },
);

const AutomationsFeatureGrid = dynamic(
  () =>
    import("@/components/sections/AutomationsFeatureGrid").then((m) => ({
      default: m.AutomationsFeatureGrid,
    })),
  { ssr: true, loading: () => <div className="min-h-48 animate-pulse bg-night" aria-hidden /> },
);

/** Parcours mandataires — code-splitting + HTML SSR pour le SEO. */
export function ImmobilierHome() {
  return (
    <>
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
      <GuaranteeXL />
      <DataTrustSection />
      <FAQ />
      <LocalGeoLinks />
      <IntegrationMarquees />
      <AutomationsFeatureGrid />
      <ResiliationSection />
      <Contact variant="immobilier" />
      <div className="h-20 md:hidden" aria-hidden />
      <StickyMobileCta
        ctaHref="#contact"
        ctaLabel="Nolan me rappelle demain"
        analyticsId="sticky_demo_immo"
        observeHeroPrimary
        singleCtaBar
      />
    </>
  );
}
