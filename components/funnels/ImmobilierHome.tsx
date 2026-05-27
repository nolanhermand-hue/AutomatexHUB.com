"use client";

import { AccompanimentPillars } from "@/components/sections/AccompanimentPillars";
import { DataTrustSection } from "@/components/sections/DataTrustSection";
import { FAQ } from "@/components/sections/FAQ";
import { GuaranteeXL } from "@/components/sections/GuaranteeXL";
import { Hero } from "@/components/sections/Hero";
import { LocalGeoLinks } from "@/components/sections/LocalGeoLinks";
import { ResiliationSection } from "@/components/sections/ResiliationSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { StickyMobileCta } from "@/components/ui/StickyMobileCta";
import { BOOKING_CTA_LABEL } from "@/lib/constants";
import { IMMOBILIER_ACCOMPANIMENT } from "@/lib/immobilier-accompaniment-copy";
import dynamic from "next/dynamic";

const sectionPulse = (className: string) => (
  <div className={`h-[400px] animate-pulse ${className}`} aria-hidden />
);

const Agitation = dynamic(
  () => import("@/components/sections/Agitation").then((m) => ({ default: m.Agitation })),
  { ssr: false, loading: () => sectionPulse("bg-[#080D1A]") },
);

const Problem = dynamic(
  () => import("@/components/sections/Problem").then((m) => ({ default: m.Problem })),
  { ssr: false, loading: () => sectionPulse("bg-[#080D1A]") },
);

const Solution = dynamic(
  () => import("@/components/sections/Solution").then((m) => ({ default: m.Solution })),
  { ssr: false, loading: () => sectionPulse("bg-[#080D1A]") },
);

const Pricing = dynamic(
  () => import("@/components/sections/Pricing").then((m) => ({ default: m.Pricing })),
  { ssr: false, loading: () => sectionPulse("bg-[#080D1A]") },
);

const Contact = dynamic(
  () => import("@/components/sections/Contact").then((m) => ({ default: m.Contact })),
  { ssr: false, loading: () => sectionPulse("bg-night") },
);

const ImmobilierLiveDemoSection = dynamic(
  () =>
    import("@/components/demo/ImmobilierLiveDemoSection").then((m) => ({
      default: m.ImmobilierLiveDemoSection,
    })),
  { loading: () => <div className="min-h-48 animate-pulse bg-bg-card" aria-hidden /> },
);

const ImmobilierLeadDemoSection = dynamic(
  () =>
    import("@/components/demo/ImmobilierLeadDemoSection").then((m) => ({
      default: m.ImmobilierLeadDemoSection,
    })),
  { loading: () => <div className="min-h-64 animate-pulse bg-night" aria-hidden /> },
);

const FeaturedAutomationsSection = dynamic(
  () =>
    import("@/components/sections/FeaturedAutomationsSection").then((m) => ({
      default: m.FeaturedAutomationsSection,
    })),
  { loading: () => <div className="min-h-40 animate-pulse bg-night" aria-hidden /> },
);

const RoiCounter = dynamic(
  () => import("@/components/motion/RoiCounter").then((m) => ({ default: m.RoiCounter })),
  { loading: () => <div className="min-h-32 animate-pulse bg-surface" aria-hidden /> },
);

const IntegrationMarquees = dynamic(
  () =>
    import("@/components/sections/IntegrationMarquees").then((m) => ({
      default: m.IntegrationMarquees,
    })),
  { loading: () => <div className="min-h-24 animate-pulse bg-night" aria-hidden /> },
);

const AutomationsFeatureGrid = dynamic(
  () =>
    import("@/components/sections/AutomationsFeatureGrid").then((m) => ({
      default: m.AutomationsFeatureGrid,
    })),
  { loading: () => <div className="min-h-48 animate-pulse bg-night" aria-hidden /> },
);

/** Parcours mandataires — pricing et accompagnement remontés avant intégrations. */
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
        ctaLabel={BOOKING_CTA_LABEL}
        analyticsId="sticky_demo_immo"
      />
    </>
  );
}
