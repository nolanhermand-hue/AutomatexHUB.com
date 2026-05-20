#!/usr/bin/env node
/**
 * URLs à soumettre via GSC > Inspection d’URL > Demander l’indexation.
 * Garder en sync avec app/sitemap.ts (pas /merci — noindex / disallow).
 */
const SITE = "https://automatex-hub.com";

const paths = [
  "/",
  "/mandataires-normandie",
  "/mandataires-flers",
  "/mandataires-alencon",
  "/mandataires-argentan",
  "/a-propos",
  "/securite",
  "/cgv",
  "/mentions-legales",
  "/politique-confidentialite",
];

console.log("# Coller chaque URL dans Google Search Console (Inspection d’URL)\n");
for (const path of paths) {
  console.log(`${SITE}${path === "/" ? "/" : path}`);
}
