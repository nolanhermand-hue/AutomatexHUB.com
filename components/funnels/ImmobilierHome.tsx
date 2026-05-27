import { CardSkeleton, SectionSkeletonGrid } from "@/components/ui/CardSkeleton";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { StickyMobileCta } from "@/components/ui/StickyMobileCta";
import { IMMOBILIER_ACCOMPANIMENT } from "@/lib/immobilier-accompaniment-copy";
import dynamic from "next/dynamic";

const sectionSkeleton = (cols = 1) =>
  cols > 1 ? (
    <SectionSkeletonGrid cols={cols as 2 | 3} />
  ) : (
    <div className="mx-auto max-w-content px-gutter py-12" aria-hidden>
      <CardSkeleton className="min-h-[280px]" />
    </div>
  );

const Problem = dynamic(
  () => import("@/components/sections/Problem").then((m) => ({ default: m.Problem })),
  { ssr: true, loading: () => sectionSkeleton() },
);

const Agitation = dynamic(
  () => import("@/components/sections/Agitation").then((m) => ({ default: m.Agitation })),
  { ssr: true, loading: () => sectionSkeleton() },
);

const Solution = dynamic(
  () => import("@/components/sections/Solution").then((m) => ({ default: m.Solution })),
  { ssr: true, loading: () => sectionSkeleton() },
);

const AccompanimentPillars = dynamic(
  () =>
    import("@/components/sections/AccompanimentPillars").then((m) => ({
      default: m.AccompanimentPillars,
    })),
  { ssr: true, loading: () => sectionSkeleton() },
);

const Pricing = dynamic(
  () => import("@/components/sections/Pricing").then((m) => ({ default: m.Pricing })),
  { ssr: true, loading: () => sectionSkeleton(3) },
);

const GuaranteeXL = dynamic(
  () => import("@/components/sections/GuaranteeXL").then((m) => ({ default: m.GuaranteeXL })),
  { ssr: true, loading: () => sectionSkeleton() },
);

const DataTrustSection = dynamic(
  () =>
    import("@/components/sections/DataTrustSection").then((m) => ({
      default: m.DataTrustSection,
    })),
  { ssr: true, loading: () => sectionSkeleton() },
);

const FAQ = dynamic(
  () => import("@/components/sections/FAQ").then((m) => ({ default: m.FAQ })),
  { ssr: true, loading: () => sectionSkeleton() },
);

const LocalGeoLinks = dynamic(
  () => import("@/components/sections/LocalGeoLinks").then((m) => ({ default: m.LocalGeoLinks })),
  { ssr: true, loading: () => sectionSkeleton() },
);

const ResiliationSection = dynamic(
  () =>
    import("@/components/sections/ResiliationSection").then((m) => ({
      default: m.ResiliationSection,
    })),
  { ssr: true, loading: () => sectionSkeleton() },
);

const Contact = dynamic(
  () => import("@/components/sections/Contact").then((m) => ({ default: m.Contact })),
  { ssr: true, loading: () => sectionSkeleton() },
);

const ImmobilierLiveDemoSection = dynamic(
  () =>
    import("@/components/demo/ImmobilierLiveDemoSection").then((m) => ({
      default: m.ImmobilierLiveDemoSection,
    })),
  { ssr: true, loading: () => sectionSkeleton() },
);

const ImmobilierLeadDemoSection = dynamic(
  () =>
    import("@/components/demo/ImmobilierLeadDemoSection").then((m) => ({
      default: m.ImmobilierLeadDemoSection,
    })),
  { ssr: true, loading: () => sectionSkeleton() },
);

const FeaturedAutomationsSection = dynamic(
  () =>
    import("@/components/sections/FeaturedAutomationsSection").then((m) => ({
      default: m.FeaturedAutomationsSection,
    })),
  { ssr: true, loading: () => sectionSkeleton() },
);

const RoiCounter = dynamic(
  () => import("@/components/motion/RoiCounter").then((m) => ({ default: m.RoiCounter })),
  { ssr: true, loading: () => sectionSkeleton() },
);

const IntegrationMarquees = dynamic(
  () =>
    import("@/components/sections/IntegrationMarquees").then((m) => ({
      default: m.IntegrationMarquees,
    })),
  { ssr: true, loading: () => sectionSkeleton() },
);

const AutomationsFeatureGrid = dynamic(
  () =>
    import("@/components/sections/AutomationsFeatureGrid").then((m) => ({
      default: m.AutomationsFeatureGrid,
    })),
  { ssr: true, loading: () => sectionSkeleton() },
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
