import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const exts = new Set([
  ".tsx",
  ".ts",
  ".js",
  ".mjs",
  ".css",
  ".json",
  ".html",
  ".md",
]);

const IGNORE_DIRS = new Set(["node_modules", ".git", ".next", "out"]);

const PATTERNS = [
  { label: "IA", re: /\bIA\b/ },
  { label: "intelligence artificielle", re: /intelligence artificielle/i },
  { label: "workflow", re: /workflow/i },
  { label: "API", re: /\bAPI\b/ },
  { label: "SaaS", re: /\bSaaS\b/ },
  { label: "abonnement", re: /abonnement/i },
  { label: "LLM", re: /\bLLM\b/ },
  { label: "no-code", re: /no-code/i },
  { label: "chatbot", re: /chatbot/i },
  { label: "robot", re: /\brobot\b/i },
  { label: "bot", re: /\bbot\b/i },
  { label: "algorithme", re: /algorithme/i },
  { label: "machine learning", re: /machine learning/i },
];

function walk(dir, acc) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (IGNORE_DIRS.has(entry.name)) continue;
      walk(full, acc);
      continue;
    }
    if (entry.name === "package-lock.json") continue;
    const ext = path.extname(entry.name);
    if (!exts.has(ext)) continue;
    acc.push(full);
  }
}

const files = [];
walk(root, files);

let failed = false;
for (const file of files) {
  const rel = path.relative(root, file);
  if (rel === path.join("scripts", "check-forbidden-words.mjs")) continue;
  if (rel === path.join("lib", "constants.ts")) continue;
  const text = fs.readFileSync(file, "utf8");
  for (const { label, re } of PATTERNS) {
    if (re.test(text)) {
      console.error(`Mot interdit "${label}" détecté dans ${rel}`);
      failed = true;
    }
  }
}

if (failed) {
  process.exit(1);
}

console.log("check-forbidden-words : OK");
