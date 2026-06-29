#!/usr/bin/env node
/**
 * Rend les démos AutomateX en .webm (boucle muette) + poster .webp.
 *  - voix-devis  → public/assets/demos/video/voix-devis.{webm,webp}
 *  - auto-<id>   → public/assets/demos/video/catalog/<id>.{webm,webp}
 *
 * Usage : cd remotion && npm install && npm run render
 * (Télécharge Chromium headless au 1er lancement ; ffmpeg intégré à Remotion.)
 */
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { bundle } from "@remotion/bundler";
import { getCompositions, renderMedia, renderStill } from "@remotion/renderer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const videoDir = path.join(publicDir, "assets", "demos", "video");
const catalogDir = path.join(videoDir, "catalog");

fs.mkdirSync(catalogDir, { recursive: true });

const outFor = (id) =>
  id.startsWith("auto-")
    ? path.join(catalogDir, id.replace(/^auto-/, ""))
    : path.join(videoDir, id);

console.log("• Bundling Remotion project…");
const serveUrl = await bundle({
  entryPoint: path.join(__dirname, "src", "index.ts"),
  publicDir,
});

const comps = await getCompositions(serveUrl);
console.log(`• ${comps.length} composition(s) à rendre.`);

let done = 0;
for (const composition of comps) {
  const base = outFor(composition.id);
  const webm = `${base}.webm`;
  const poster = `${base}.webp`;

  await renderMedia({
    composition,
    serveUrl,
    codec: "vp9",
    outputLocation: webm,
    muted: true,
    imageFormat: "jpeg",
  });

  await renderStill({
    composition,
    serveUrl,
    output: poster,
    frame: Math.max(0, composition.durationInFrames - 10),
    imageFormat: "webp",
  });

  done += 1;
  console.log(`  ✓ [${done}/${comps.length}] ${composition.id}`);
}

console.log("Done.");
