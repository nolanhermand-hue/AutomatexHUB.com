/**
 * Test multi-devices — iPhone SE, iPhone 14 Pro/Max, iPad Mini/Air/Pro, Galaxy S21, Pixel 7, Desktop
 * Capture screenshot Hero + chaque section + menu mobile + formulaire
 */

import { chromium, devices } from "playwright";
import { mkdirSync } from "node:fs";
import { join } from "node:path";

const BASE_URL = process.env.AUDIT_BASE_URL ?? process.env.BASE_URL ?? "http://localhost:3000";
const OUT_DIR = "/tmp/automatex-device-tests";
mkdirSync(OUT_DIR, { recursive: true });

const DEVICE_LIST = [
  { name: "iPhone_SE", ...devices["iPhone SE"] },
  { name: "iPhone_14_Pro", ...devices["iPhone 14 Pro"] },
  { name: "iPhone_14_Pro_Max", ...devices["iPhone 14 Pro Max"] },
  { name: "iPad_Mini", ...devices["iPad Mini"] },
  { name: "iPad_Pro_11", ...devices["iPad Pro 11"] },
  { name: "Galaxy_S21", ...devices["Galaxy S21"] },
  { name: "Desktop_1440", viewport: { width: 1440, height: 900 }, userAgent: "Mozilla/5.0 (Macintosh) AppleWebKit/537.36 Chrome/120 Safari/537.36", deviceScaleFactor: 2, isMobile: false, hasTouch: false },
];

const SECTIONS = ["hero", "problem", "solution", "automations", "pricing", "faq", "contact"];

const issues = [];

async function scrollTo(page, sectionId) {
  await page.evaluate((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
    else window.scrollTo(0, 0);
  }, sectionId);
  await page.waitForTimeout(500);
}

async function getBBox(page, selector) {
  return page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { x: r.x, y: r.y, width: r.width, height: r.height };
  }, selector);
}

async function testDevice(browser, device) {
  const { name, ...cfg } = device;
  const vp = cfg.viewport ?? { width: 1440, height: 900 };
  console.log(`\n📱  ${name} — ${vp.width}×${vp.height}`);

  const ctx = await browser.newContext({ ...cfg, colorScheme: "dark", reducedMotion: "no-preference" });
  const consoleErrors = [];
  const page = await ctx.newPage();
  page.on("console", (m) => { if (m.type() === "error") consoleErrors.push(m.text()); });
  page.on("pageerror", (e) => consoleErrors.push(`JS: ${e.message}`));

  try {
    await page.goto(BASE_URL, { waitUntil: "load", timeout: 30000 });
    await page.waitForTimeout(1800);

    // ── 1. Navbar ──────────────────────────────────────────────
    const navRect = await getBBox(page, "header");
    if (!navRect || navRect.height < 1) {
      issues.push({ name, issue: "Navbar introuvable ou invisible" });
      console.log("  ✗ Navbar invisible");
    } else {
      console.log(`  ✓ Navbar ${Math.round(navRect.height)}px`);
    }

    // ── 2. Hero screenshot ─────────────────────────────────────
    await page.screenshot({ path: join(OUT_DIR, `${name}--hero.png`) });
    console.log("  ✓ Hero");

    // ── 3. Overflow horizontal (bug classique mobile) ──────────
    const overflowX = await page.evaluate(() => document.body.scrollWidth > window.innerWidth + 4);
    if (overflowX) {
      issues.push({ name, issue: `Overflow horizontal (body: ${await page.evaluate(() => document.body.scrollWidth)}px vs vp: ${vp.width}px)` });
      console.log("  ✗ Overflow horizontal !");
    } else {
      console.log("  ✓ Pas d'overflow horizontal");
    }

    // ── 4. Screenshots par section ────────────────────────────
    for (const id of SECTIONS) {
      await scrollTo(page, id);
      await page.screenshot({ path: join(OUT_DIR, `${name}--${id}.png`) });
    }
    console.log(`  ✓ ${SECTIONS.length} sections capturées`);

    // ── 5. Menu mobile ────────────────────────────────────────
    if (cfg.isMobile) {
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(300);

      const btnVisible = await page.evaluate(() => {
        const btn = document.querySelector("button[aria-controls='mobile-menu']");
        if (!btn) return false;
        const r = btn.getBoundingClientRect();
        return r.width > 0 && r.height > 0 && r.top >= 0 && r.top < window.innerHeight;
      });

      if (btnVisible) {
        await page.locator("button[aria-controls='mobile-menu']").first().tap();
        await page.waitForTimeout(500);
        await page.screenshot({ path: join(OUT_DIR, `${name}--menu-open.png`) });
        console.log("  ✓ Menu mobile ouvert");

        // Vérifier que les liens sont cliquables (tap target ≥ 44px)
        const linksOk = await page.evaluate(() => {
          const links = [...document.querySelectorAll("#mobile-menu a")];
          return links.every((a) => {
            const r = a.getBoundingClientRect();
            return r.height >= 40 && r.width > 0;
          });
        });
        if (!linksOk) issues.push({ name, issue: "Liens menu mobile: tap target < 40px" });

        await page.locator("button[aria-controls='mobile-menu']").first().tap();
        await page.waitForTimeout(300);
      } else {
        issues.push({ name, issue: "Bouton hamburger invisible" });
        console.log("  ✗ Hamburger non visible");
      }
    }

    // ── 6. Sticky CTA mobile ──────────────────────────────────
    if (cfg.isMobile) {
      await page.evaluate(() => window.scrollBy(0, window.innerHeight * 1.5));
      await page.waitForTimeout(800);
      const stickyRect = await getBBox(page, ".fixed.bottom-0, [class*='fixed'][class*='bottom-0']");
      if (!stickyRect || stickyRect.height < 10) {
        issues.push({ name, issue: "Sticky CTA mobile: non visible après scroll" });
        console.log("  ✗ Sticky CTA absent");
      } else {
        if (stickyRect.width > vp.width + 2) {
          issues.push({ name, issue: `Sticky CTA trop large (${Math.round(stickyRect.width)} > ${vp.width})` });
        } else {
          console.log(`  ✓ Sticky CTA ${Math.round(stickyRect.height)}px`);
        }
      }
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(400);
    }

    // ── 7. Contact form — focus input ────────────────────────
    await scrollTo(page, "contact");
    const inputVisible = await page.evaluate(() => {
      const inp = document.querySelector("#firstName");
      if (!inp) return false;
      const r = inp.getBoundingClientRect();
      return r.width > 0 && r.height >= 40;
    });
    if (!inputVisible) {
      issues.push({ name, issue: "Input #firstName non visible ou trop petit (< 40px)" });
    } else {
      if (cfg.isMobile) await page.locator("#firstName").tap();
      else await page.locator("#firstName").click();
      await page.waitForTimeout(400);
      await page.screenshot({ path: join(OUT_DIR, `${name}--contact-focus.png`) });
      console.log("  ✓ Contact form focus");
    }

    // ── 8. Erreurs console ────────────────────────────────────
    if (consoleErrors.length > 0) {
      const relevant = consoleErrors.filter((e) => !e.includes("favicon") && !e.includes("404"));
      if (relevant.length > 0) {
        issues.push({ name, issue: `Console: ${relevant.slice(0, 2).join(" | ")}` });
        console.log(`  ⚠ ${relevant.length} erreur(s) console`);
      }
    } else {
      console.log("  ✓ 0 erreur console");
    }

  } catch (err) {
    issues.push({ name, issue: `CRASH: ${err.message.split("\n")[0]}` });
    console.log(`  ✗ Crash: ${err.message.split("\n")[0]}`);
    try { await page.screenshot({ path: join(OUT_DIR, `${name}--CRASH.png`) }); } catch {}
  } finally {
    await ctx.close();
  }
}

async function warmUp(browser) {
  console.log("⏳ Warm-up: compilation Turbopack en cours...");
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await ctx.newPage();
  try {
    // Attend que la page charge sans erreur 500
    let attempts = 0;
    while (attempts < 12) {
      const resp = await page.goto(BASE_URL, { waitUntil: "load", timeout: 30000 }).catch(() => null);
      if (resp && resp.status() === 200) {
        await page.waitForTimeout(3000); // laisse Turbopack finir les chunks
        console.log("✅ Warm-up terminé — serveur prêt\n");
        break;
      }
      console.log(`   Tentative ${attempts + 1}/12 — attente 5s...`);
      await page.waitForTimeout(5000);
      attempts++;
    }
  } finally {
    await ctx.close();
  }
}

async function main() {
  console.log("╔══════════════════════════════════════════════════════╗");
  console.log("║   Automatex — Multi-Device Test Suite                ║");
  console.log("╚══════════════════════════════════════════════════════╝");
  console.log(`   URL     : ${BASE_URL}`);
  console.log(`   Devices : ${DEVICE_LIST.length}`);
  console.log(`   Output  : ${OUT_DIR}\n`);

  const browser = await chromium.launch({ headless: true });
  await warmUp(browser);
  for (const d of DEVICE_LIST) await testDevice(browser, d);
  await browser.close();

  console.log("\n" + "═".repeat(58));
  console.log("RÉSUMÉ");
  console.log("═".repeat(58));
  if (issues.length === 0) {
    console.log("✅  Aucun problème sur les " + DEVICE_LIST.length + " appareils testés !");
  } else {
    console.log(`⚠   ${issues.length} problème(s) :\n`);
    for (const { name, issue } of issues) {
      console.log(`  [${name}]`);
      console.log(`    → ${issue}`);
    }
  }
  console.log(`\n📸  Screenshots : ${OUT_DIR}`);
  console.log("═".repeat(58));
}

main().catch((e) => { console.error("Fatal:", e); process.exit(1); });
