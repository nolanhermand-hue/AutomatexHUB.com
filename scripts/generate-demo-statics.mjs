#!/usr/bin/env node
/**
 * Génère les PNG fallback pour les démos motion (640×420).
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const outDir = path.join(process.cwd(), "public", "assets", "demos");
const demos = [
  { file: "appel-manque-static.png", title: "Appel manqué → SMS 90 s" },
  { file: "devis-auto-static.png", title: "Dictée → Devis PDF → envoi" },
  { file: "lead-immobilier-static.png", title: "Lead traité en visite" },
  { file: "avant-apres-static.png", title: "Avant / Après — journée type" },
  { file: "point-mensuel-static.png", title: "Point mensuel Nolan" },
];

fs.mkdirSync(outDir, { recursive: true });

const svgFor = (title) => `
<svg width="640" height="420" xmlns="http://www.w3.org/2000/svg">
  <rect width="640" height="420" fill="#0D0D0D"/>
  <rect x="40" y="40" width="560" height="340" rx="12" fill="#1A1A1A" stroke="#2A2A2A"/>
  <text x="320" y="200" fill="#F5F4F1" font-family="system-ui,sans-serif" font-size="22" text-anchor="middle">${title}</text>
  <text x="320" y="240" fill="#FF8200" font-family="system-ui,sans-serif" font-size="14" text-anchor="middle">Automatex Hub · Flers</text>
</svg>`;

for (const demo of demos) {
  const buf = Buffer.from(svgFor(demo.title));
  const out = path.join(outDir, demo.file);
  await sharp(buf).png({ compressionLevel: 9 }).toFile(out);
  const webpName = demo.file.replace(/\.png$/, ".webp");
  await sharp(buf).webp({ quality: 85 }).toFile(path.join(outDir, webpName));
  console.log("✓", demo.file, "+", webpName);
}

// Minimal SVG assets (< 80 KiB) for optional use
const svgMinimal = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="28" fill="#FF8200" opacity="0.2"/></svg>`;
fs.writeFileSync(path.join(outDir, "placeholder.svg"), svgMinimal);
console.log("Done.");
