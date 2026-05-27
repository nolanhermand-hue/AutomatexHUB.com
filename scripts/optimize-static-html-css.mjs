/**
 * Export statique : la feuille Next reste render-blocking.
 * Charge la CSS en async (media=print + onload) après preload — LCP moins bloqué.
 */
import fs from "node:fs";
import path from "node:path";

const OUT_DIR = path.join(process.cwd(), "out");

const STYLESHEET_RE =
  /<link rel="stylesheet" href="(\/_next\/static\/css\/[^"]+\.css)" data-precedence="next"\/>/g;

function walkHtmlFiles(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtmlFiles(full, acc);
    else if (entry.name.endsWith(".html")) acc.push(full);
  }
  return acc;
}

function deferStylesheet(html) {
  return html.replace(STYLESHEET_RE, (_match, href) => {
    return [
      `<link rel="preload" href="${href}" as="style" />`,
      `<link rel="stylesheet" href="${href}" media="print" onload="this.media='all'" />`,
      `<noscript><link rel="stylesheet" href="${href}" /></noscript>`,
    ].join("");
  });
}

if (!fs.existsSync(OUT_DIR)) {
  console.error("optimize-static-html-css: dossier out/ introuvable");
  process.exit(1);
}

let changed = 0;
for (const file of walkHtmlFiles(OUT_DIR)) {
  const before = fs.readFileSync(file, "utf8");
  const after = deferStylesheet(before);
  if (after !== before) {
    fs.writeFileSync(file, after);
    changed += 1;
  }
}

console.log(`optimize-static-html-css: ${changed} fichier(s) HTML mis à jour`);
