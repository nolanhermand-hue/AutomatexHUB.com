#!/usr/bin/env node
/**
 * Post-build: fail if any HTML file has != 1 FAQPage in JSON-LD scripts.
 * Usage: node scripts/check-faqpage-html.mjs [outDir]
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.argv[2] ?? "out";
const failures = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith(".html")) checkFile(p);
  }
}

function checkFile(filePath) {
  if (filePath.endsWith(`${outDir}/404.html`) || filePath.endsWith("/404.html")) return;
  const html = readFileSync(filePath, "utf8");
  const matches = [...html.matchAll(/"@type"\s*:\s*"FAQPage"/g)];
  if (matches.length !== 1) {
    failures.push({ file: filePath, count: matches.length });
  }
}

walk(outDir);

if (failures.length) {
  console.error("FAQPage count must be 1 per HTML file:\n");
  for (const f of failures) {
    console.error(`  ${f.file}: ${f.count}`);
  }
  process.exit(1);
}

console.log(`OK — FAQPage ×1 in all HTML under ${outDir}/`);
