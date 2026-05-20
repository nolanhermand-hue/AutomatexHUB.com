#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const base = (process.env.AUDIT_BASE_URL ?? "https://automatex-hub.com").replace(/\/$/, "");
const paths = [
  "/",
  "/immobilier",
  "/btp",
  "/accompagnement",
  "/a-propos",
  "/merci",
  "/mentions-legales",
  "/politique-confidentialite",
  "/cgv",
  "/securite",
  "/mandataires-normandie",
  "/mandataires-flers",
  "/mandataires-alencon",
  "/mandataires-argentan",
  "/automatisation-btp-orne",
  "/automatisation-artisan-flers",
  "/automatisation-artisan-alencon",
  "/automatisation-artisan-argentan",
  "/devis-automatique-artisan",
  "/sitemap.xml",
  "/robots.txt",
];

const lines = [`# Routes — ${base}`, `Date: ${new Date().toISOString()}`, ""];

for (const p of paths) {
  const url = `${base}${p}`;
  try {
    const res = await fetch(url, { redirect: "manual" });
    lines.push(`${res.status} ${p}${res.status >= 300 && res.status < 400 ? ` → ${res.headers.get("location") ?? ""}` : ""}`);
  } catch (e) {
    lines.push(`ERR ${p} ${e.message}`);
  }
}

const out = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "audits", "routes-status.txt");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, lines.join("\n") + "\n");
console.log(lines.join("\n"));
console.log(`\nWritten: ${out}`);
