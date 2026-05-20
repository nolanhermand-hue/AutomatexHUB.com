#!/usr/bin/env node
/**
 * Console 4xx/5xx + screenshots before (375 + 1440).
 * Usage: AUDIT_BASE_URL=https://automatex-hub.com node scripts/audit-console-screenshots.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const base = (process.env.AUDIT_BASE_URL ?? "https://automatex-hub.com").replace(/\/$/, "") + "/";
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const shotDir = path.join(root, "audits", "screenshots", "before");
const consoleLog = path.join(root, "audits", "console-errors.txt");

fs.mkdirSync(shotDir, { recursive: true });

const browser = await chromium.launch();
const lines = [`# Console & network failures — ${base}`, `Date: ${new Date().toISOString()}`, ""];

for (const { name, width, height } of [
  { name: "mobile-375", width: 375, height: 812 },
  { name: "desktop-1440", width: 1440, height: 900 },
]) {
  const page = await browser.newPage({ viewport: { width, height } });
  const failures = [];

  page.on("console", (msg) => {
    if (msg.type() === "error") failures.push(`[console.error] ${msg.text()}`);
  });
  page.on("response", (res) => {
    const s = res.status();
    if (s >= 400) failures.push(`[${s}] ${res.url()}`);
  });

  await page.goto(base, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(shotDir, `${name}.png`), fullPage: true });

  lines.push(`## ${name}`);
  if (failures.length === 0) lines.push("(aucune erreur console / 4xx capturée)");
  else failures.forEach((f) => lines.push(f));
  lines.push("");

  await page.close();
}

await browser.close();
fs.writeFileSync(consoleLog, lines.join("\n") + "\n");
console.log(`Screenshots: ${shotDir}`);
console.log(`Console log: ${consoleLog}`);
