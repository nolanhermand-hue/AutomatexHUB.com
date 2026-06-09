import { HomeFounder } from "@/components/home/HomeFounder";
import { HomeHowItWorks } from "@/components/home/HomeHowItWorks";
import { NormandieLocalFaq } from "@/components/normandie/NormandieLocalFaq";
import { NormandieLocalHero } from "@/components/normandie/NormandieLocalHero";
import { NormandieLocalProblem } from "@/components/normandie/NormandieLocalProblem";
import { NormandieNearbyLinks } from "@/components/normandie/NormandieNearbyLinks";
import { NormandieVilleFinalCta } from "@/components/normandie/NormandieVilleFinalCta";
import { buildNormandieVilleJsonLd } from "@/lib/json-ld";
import {
  NORMANDIE_GENERIC_FAQ,
} from "@/lib/normandie-shared";
import type { NormandieVillePage } from "@/lib/villes-normandie";
import Link from "next/link";
import { NORMANDIE_PILIER_PATH } from "@/lib/normandie-shared";

export function NormandieVilleTemplate({ ville }: { ville: NormandieVillePage }) {
  const faqForLd = [...ville.localFaq, ...NORMANDIE_GENERIC_FAQ];
  const jsonLd = buildNormandieVilleJsonLd({
    path: ville.path,
    cityName: ville.name,
    department: ville.department,
    description: ville.metaDescription,
    faq: faqForLd,
  });

  return (
    <main className="home-page home-surface">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="px-gutter pt-24 text-sm text-muted md:pt-28" aria-label="Fil d'Ariane">
        <div className="mx-auto max-w-content">
          <Link href="/" className="text-primary hover:underline">
            Accueil
          </Link>
          <span aria-hidden> / </span>
          <Link href={NORMANDIE_PILIER_PATH} className="text-primary hover:underline">
            Normandie
          </Link>
          <span aria-hidden> / </span>
          <span className="text-text">{ville.name}</span>
        </div>
      </nav>
      <NormandieLocalHero ville={ville} analyticsId={`normandie_${ville.slug}_hero`} />
      <HomeFounder />
      <NormandieLocalProblem ville={ville} />
      <HomeHowItWorks />
      <NormandieLocalFaq cityName={ville.name} localFaq={ville.localFaq} />
      <NormandieVilleFinalCta ville={ville} />
      <NormandieNearbyLinks currentSlug={ville.slug} neighborSlugs={ville.neighborSlugs} />
    </main>
  );
}
