// Rend les 7 démos en WebM (boucle) + un poster PNG, dans public/assets/demos/video/.
// Usage : node render-all.mjs   (lancer avec un node arm64 sur Apple Silicon)
import { execFileSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ENTRY = path.join(__dirname, "src", "index.ts");
const OUT = path.join(__dirname, "..", "public", "assets", "demos", "video");
mkdirSync(OUT, { recursive: true });

// poster = frame « tout visible » (avant le fondu de sortie)
const DEMOS = [
  { id: "appel-manque", poster: 132 },
  { id: "devis-auto", poster: 156 },
  { id: "lead-immobilier", poster: 132 },
  { id: "point-mensuel", poster: 132 },
  { id: "immobilier", poster: 184 },
  { id: "btp-appel", poster: 184 },
  { id: "btp-devis", poster: 184 },
];

const remotion = path.join(__dirname, "node_modules", ".bin", "remotion");

for (const { id, poster } of DEMOS) {
  console.log(`\n▶ ${id} — vidéo`);
  execFileSync(remotion, ["render", ENTRY, id, path.join(OUT, `${id}.webm`)], {
    stdio: "inherit",
    cwd: __dirname,
  });
  console.log(`▶ ${id} — poster (frame ${poster})`);
  execFileSync(
    remotion,
    ["still", ENTRY, id, path.join(OUT, `${id}.png`), `--frame=${poster}`],
    { stdio: "inherit", cwd: __dirname },
  );
}

console.log(`\n✅ ${DEMOS.length} démos rendues dans ${OUT}`);
