import { SITE_URL } from "@/lib/constants";
import { AUTOMATISATION_CEST_QUOI_LAST_MODIFIED } from "@/lib/automatisation-cest-quoi";
import { COCON_CLUSTER_LAST_MODIFIED } from "@/lib/automatisation-cocon-shared";
import { COCON_PAIN_PAGES, COCON_PILIER } from "@/lib/automatisation-cocon";
import {
  NORMANDIE_CLUSTER_LAST_MODIFIED,
  NORMANDIE_PILIER,
  NORMANDIE_VILLES,
} from "@/lib/villes-normandie";
import { COMPARATIF_LAST_UPDATED } from "@/lib/comparatif-shared";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

/**
 * Sitemap généré au build (Next.js) — format attendu par Google Search Console.
 * Ne pas dupliquer avec public/sitemap.xml.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const normandieLastMod = new Date(NORMANDIE_CLUSTER_LAST_MODIFIED);
  const coconLastMod = new Date(COCON_CLUSTER_LAST_MODIFIED);

  const coconEntries: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}${COCON_PILIER.path}`,
      lastModified: coconLastMod,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    ...COCON_PAIN_PAGES.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: coconLastMod,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  const normandieEntries: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}${NORMANDIE_PILIER.path}`,
      lastModified: normandieLastMod,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    ...NORMANDIE_VILLES.map((v) => ({
      url: `${SITE_URL}${v.path}`,
      lastModified: normandieLastMod,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];

  const entries: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/immobilier`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/btp`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/automatisation-ia-tpe`, lastModified, changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE_URL}/automatisations`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    {
      url: `${SITE_URL}/comparatif/telesecretariat-artisan`,
      lastModified: new Date(COMPARATIF_LAST_UPDATED),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/comparatif/demandes-agences-diagnostiqueur`,
      lastModified: new Date(COMPARATIF_LAST_UPDATED),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/automatisation-c-est-quoi`,
      lastModified: new Date(AUTOMATISATION_CEST_QUOI_LAST_MODIFIED),
      changeFrequency: "monthly",
      priority: 0.88,
    },
    { url: `${SITE_URL}/faq`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/accompagnement`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/rendez-vous`, lastModified, changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE_URL}/automatisation-btp-orne`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/automatisation-artisan-flers`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/automatisation-artisan-alencon`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/automatisation-artisan-argentan`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    ...coconEntries,
    { url: `${SITE_URL}/a-propos`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/vos-donnees`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/securite`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/cgv`, lastModified, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/mentions-legales`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/politique-confidentialite`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    ...normandieEntries,
  ];

  return entries;
}
