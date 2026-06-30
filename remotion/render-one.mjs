#!/usr/bin/env node
/**
 * Rend une seule composition Remotion → public/assets/demos/video/…
 * Usage : node render-one.mjs voix-devis
 *         node render-one.mjs auto-client-reponse-90s
 */
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { bundle } from "@remotion/bundler";
import { getCompositions, renderMedia, renderStill } from "@remotion/renderer";

const id = process.argv[2];
if (!id) {
  console.error("Usage: node render-one.mjs <composition-id>");
  process.exit(1);
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const videoDir = path.join(publicDir, "assets", "demos", "video");
const catalogDir = path.join(videoDir, "catalog");

fs.mkdirSync(catalogDir, { recursive: true });

const outFor = (compId) =>
  compId.startsWith("auto-")
    ? path.join(catalogDir, compId.replace(/^auto-/, ""))
    : path.join(videoDir, compId);

console.log(`• Bundling Remotion project…`);
const serveUrl = await bundle({
  entryPoint: path.join(__dirname, "src", "index.ts"),
  publicDir,
});

const comps = await getCompositions(serveUrl);
const composition = comps.find((c) => c.id === id);
if (!composition) {
  console.error(`Composition introuvable: ${id}`);
  console.error(`Disponibles: ${comps.map((c) => c.id).join(", ")}`);
  process.exit(1);
}

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

console.log(`✓ ${composition.id} → ${webm}`);
