const SITE = "https://automatex-hub.com";

const paths = [
  "/",
  "/immobilier",
  "/btp",
  "/automatisations",
  "/accompagnement",
  "/automatisation-btp-orne",
  "/automatisation-artisan-flers",
  "/automatisation-artisan-alencon",
  "/automatisation-artisan-argentan",
  "/devis-automatique-artisan-orne",
  "/normandie",
  "/normandie/flers",
  "/a-propos",
];

console.log("# Coller chaque URL dans Google Search Console (Inspection d’URL)\n");
for (const path of paths) {
  console.log(`${SITE}${path === "/" ? "/" : path}`);
}
