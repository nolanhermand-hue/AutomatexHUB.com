import { HomeCatalogGrid } from "@/components/home/HomeCatalogGrid";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { HomeFinalCta } from "@/components/home/HomeFinalCta";
import { HomeFounder } from "@/components/home/HomeFounder";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeHowItWorks } from "@/components/home/HomeHowItWorks";
import { HomeProblem } from "@/components/home/HomeProblem";
import { HomeSolution } from "@/components/home/HomeSolution";
import { TechTrustBar } from "@/components/home/TechTrustBar";
import { Pricing } from "@/components/sections/Pricing";

export function HomePage() {
  return (
    <main className="home-surface">
      <HomeHero />
      <TechTrustBar />
      <HomeProblem />
      <HomeSolution />
      <HomeCatalogGrid />
      <HomeHowItWorks />
      <Pricing audience="home" />
      <HomeFounder />
      <HomeFAQ />
      <HomeFinalCta />
    </main>
  );
}
