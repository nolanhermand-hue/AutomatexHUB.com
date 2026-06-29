import { HomeFAQ } from "@/components/home/HomeFAQ";
import { HomeFinalCta } from "@/components/home/HomeFinalCta";
import { HomeFounder } from "@/components/home/HomeFounder";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeHowItWorks } from "@/components/home/HomeHowItWorks";
import { HomeProblem } from "@/components/home/HomeProblem";
import { HomeProof } from "@/components/home/HomeProof";
import { HomeSolution } from "@/components/home/HomeSolution";
import { HomeVoiceDevis } from "@/components/home/HomeVoiceDevis";
import { Pricing } from "@/components/sections/Pricing";

export function HomePage() {
  return (
    <main className="home-page home-surface">
      <HomeHero />
      <HomeFounder />
      <HomeProblem />
      <HomeVoiceDevis />
      <HomeSolution />
      <HomeHowItWorks />
      <HomeProof />
      <Pricing audience="home" />
      <HomeFAQ />
      <HomeFinalCta />
    </main>
  );
}
