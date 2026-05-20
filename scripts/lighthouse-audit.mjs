#!/usr/bin/env node
/**
 * Audit Lighthouse reproductible.
 * Usage:
 *   AUDIT_BASE_URL=https://automatex-hub.com node scripts/lighthouse-audit.mjs mobile baseline-mobile
 *   AUDIT_BASE_URL=https://automatex-hub.com node scripts/lighthouse-audit.mjs desktop baseline-desktop
 *   AUDIT_BASE_URL=https://automatex-hub.com node scripts/lighthouse-audit.mjs mobile production-mobile html
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const auditsDir = path.join(root, "audits");

const baseUrl = process.env.AUDIT_BASE_URL ?? "https://automatex-hub.com";
const formFactor = process.argv[2] ?? "mobile";
const outputBase = process.argv[3] ?? "audit";
const alsoHtml = process.argv.includes("html") || process.argv[4] === "html";

if (!fs.existsSync(auditsDir)) fs.mkdirSync(auditsDir, { recursive: true });

const url = baseUrl.replace(/\/$/, "") + "/";

const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless", "--no-sandbox"] });

const options = {
  logLevel: "error",
  output: "json",
  port: chrome.port,
  onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
  formFactor: formFactor === "desktop" ? "desktop" : "mobile",
  screenEmulation:
    formFactor === "desktop"
      ? { mobile: false, width: 1350, height: 940, deviceScaleFactor: 1 }
      : undefined,
};

const runnerResult = await lighthouse(url, options);
await chrome.kill();

const jsonPath = path.join(auditsDir, `${outputBase}.json`);
fs.writeFileSync(jsonPath, runnerResult.report);

const lhr = runnerResult.lhr;
const scores = {
  performance: Math.round((lhr.categories.performance?.score ?? 0) * 100),
  accessibility: Math.round((lhr.categories.accessibility?.score ?? 0) * 100),
  bestPractices: Math.round((lhr.categories["best-practices"]?.score ?? 0) * 100),
  seo: Math.round((lhr.categories.seo?.score ?? 0) * 100),
};

console.log(`Lighthouse ${formFactor} — ${url}`);
console.log(JSON.stringify(scores, null, 2));
console.log(`Written: ${jsonPath}`);

if (alsoHtml) {
  const chrome2 = await chromeLauncher.launch({ chromeFlags: ["--headless", "--no-sandbox"] });
  const htmlResult = await lighthouse(url, { ...options, output: "html", port: chrome2.port });
  await chrome2.kill();
  const htmlPath = path.join(auditsDir, `${outputBase}.html`);
  fs.writeFileSync(htmlPath, htmlResult.report);
  console.log(`Written: ${htmlPath}`);
}
