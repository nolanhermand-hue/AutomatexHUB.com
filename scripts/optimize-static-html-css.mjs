/**
 * Export statique : preload font Inter (woff2).
 * Ne pas différer le CSS global — provoque ~0,33 CLS sur le hero hub.
 */
import fs from "node:fs";
import path from "node:path";

const OUT_DIR = path.join(process.cwd(), "out");

function walkHtmlFiles(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtmlFiles(full, acc);
    else if (entry.name.endsWith(".html")) acc.push(full);
  }
  return acc;
}

function findInterPreloadHref() {
  const mediaDir = path.join(OUT_DIR, "_next", "static", "media");
  if (!fs.existsSync(mediaDir)) return null;
  const files = fs.readdirSync(mediaDir).filter((f) => f.endsWith(".woff2"));
  const interLatin = files.find(
    (f) => f.includes("inter") && (f.includes("latin") || f.includes("400")),
  );
  const pick = interLatin ?? files.find((f) => f.toLowerCase().includes("inter")) ?? files[0];
  if (!pick) return null;
  return `/_next/static/media/${pick}`;
}

function injectFontPreload(html, fontHref) {
  if (!fontHref || html.includes(fontHref)) return html;
  const tag = `<link rel="preload" href="${fontHref}" as="font" type="font/woff2" crossorigin="anonymous" />`;
  return html.replace("<head>", `<head>${tag}`);
}

if (!fs.existsSync(OUT_DIR)) {
  console.error("optimize-static-html-css: dossier out/ introuvable");
  process.exit(1);
}

const fontHref = findInterPreloadHref();
let changed = 0;
for (const file of walkHtmlFiles(OUT_DIR)) {
  let html = fs.readFileSync(file, "utf8");
  const before = html;
  html = injectFontPreload(html, fontHref);
  if (html !== before) {
    fs.writeFileSync(file, html);
    changed += 1;
  }
}

console.log(
  `optimize-static-html-css: ${changed} fichier(s) HTML mis à jour${fontHref ? ` · font ${fontHref}` : ""}`,
);
