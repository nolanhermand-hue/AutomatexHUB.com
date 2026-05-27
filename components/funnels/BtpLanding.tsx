import { BtpGeoInternalNav } from "@/components/sections/BtpGeoInternalNav";
import { BtpHeroSection } from "@/components/funnels/BtpHeroSection";
import { StickyMobileCta } from "@/components/ui/StickyMobileCta";
import { BTP_CONTACT, BTP_DEPART_HINT } from "@/lib/btp-copy";
import dynamic from "next/dynamic";

const sectionPulse = (minH: string, bg: string) => (
  <div className={`${minH} animate-pulse ${bg}`} aria-hidden />
);

const BtpDayPainSection = dynamic(
  () => import("@/components/funnels/BtpDayPainSection").then((m) => ({ default: m.BtpDayPainSection })),
  { ssr: true, loading: () => sectionPulse("min-h-[320px]", "bg-bg-card") },
);

const BtpDemoSection = dynamic(
  () => import("@/components/demo/BtpDemoSection").then((m) => ({ default: m.BtpDemoSection })),
  { ssr: true, loading: () => sectionPulse("min-h-64", "bg-night") },
);

const BtpSolutionSection = dynamic(
  () => import("@/components/funnels/BtpSolutionSection").then((m) => ({ default: m.BtpSolutionSection })),
  { ssr: true, loading: () => sectionPulse("min-h-[400px]", "bg-bg-card") },
);

const FeaturedAutomationsSection = dynamic(
  () =>
    import("@/components/sections/FeaturedAutomationsSection").then((m) => ({
      default: m.FeaturedAutomationsSection,
    })),
  { ssr: true, loading: () => sectionPulse("min-h-40", "bg-night") },
);

const BtpAccompanimentSection = dynamic(
  () =>
    import("@/components/funnels/BtpAccompanimentSection").then((m) => ({
      default: m.BtpAccompanimentSection,
    })),
  { ssr: true, loading: () => sectionPulse("min-h-[360px]", "bg-surface") },
);

const BtpRoiStats = dynamic(
  () => import("@/components/sections/BtpRoiStats").then((m) => ({ default: m.BtpRoiStats })),
  { ssr: true, loading: () => sectionPulse("min-h-32", "bg-bg-card") },
);

const BtpPricing = dynamic(
  () => import("@/components/sections/BtpPricing").then((m) => ({ default: m.BtpPricing })),
  { ssr: true, loading: () => sectionPulse("min-h-[480px]", "bg-bg-card") },
);

const BtpFaq = dynamic(
  () => import("@/components/sections/BtpFaq").then((m) => ({ default: m.BtpFaq })),
  { ssr: true, loading: () => sectionPulse("min-h-[300px]", "bg-night") },
);

const BtpSocialProof = dynamic(
  () => import("@/components/sections/BtpSocialProof").then((m) => ({ default: m.BtpSocialProof })),
  { ssr: true, loading: () => sectionPulse("min-h-48", "bg-night") },
);

const Contact = dynamic(
  () => import("@/components/sections/Contact").then((m) => ({ default: m.Contact })),
  { ssr: true, loading: () => sectionPulse("min-h-[400px]", "bg-night") },
);

export function BtpLanding() {
  return (
    <>
      <BtpHeroSection />
      <BtpDayPainSection />
      <BtpDemoSection />
      <BtpSolutionSection />
      <FeaturedAutomationsSection variant="btp" />
      <BtpAccompanimentSection />
      <BtpRoiStats />
      <BtpPricing />
      <p className="bg-bg-card px-gutter pb-8 text-center text-sm font-medium text-muted">
        {BTP_DEPART_HINT}
      </p>
      <BtpFaq />
      <BtpSocialProof />
      <BtpGeoInternalNav />
      <Contact variant="btp" />
      <div className="h-20 md:hidden" aria-hidden />
      <StickyMobileCta
        ctaHref="#contact"
        ctaLabel={BTP_CONTACT.cta}
        analyticsId="sticky_demo_btp"
      />
    </>
  );
}
