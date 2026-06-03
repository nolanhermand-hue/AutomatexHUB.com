import { SITE_URL } from "@/lib/constants";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

/**
 * Sitemap généré au build (Next.js) — format attendu par Google Search Console.
 * Ne pas dupliquer avec public/sitemap.xml.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/immobilier`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/btp`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/automatisation-ia-tpe`, lastModified, changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE_URL}/automatisations`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/accompagnement`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/rendez-vous`, lastModified, changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE_URL}/automatisation-btp-orne`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/automatisation-artisan-flers`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/automatisation-artisan-alencon`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/automatisation-artisan-argentan`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/devis-automatique-artisan`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/devis-automatique-artisan-orne`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/mandataires-normandie`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/mandataires-flers`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/mandataires-alencon`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/mandataires-argentan`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/a-propos`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/vos-donnees`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/securite`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/cgv`, lastModified, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/mentions-legales`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/politique-confidentialite`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];

  return entries;
}
