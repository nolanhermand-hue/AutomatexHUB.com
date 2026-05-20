const SITE = "https://automatex-hub.com";

const paths = [
  "/",
  "/immobilier",
  "/btp",
  "/accompagnement",
  "/automatisation-btp-orne",
  "/automatisation-artisan-flers",
  "/mandataires-normandie",
  "/mandataires-flers",
  "/a-propos",
];

console.log("# Coller chaque URL dans Google Search Console (Inspection d’URL)\n");
for (const path of paths) {
  console.log(`${SITE}${path === "/" ? "/" : path}`);
}
