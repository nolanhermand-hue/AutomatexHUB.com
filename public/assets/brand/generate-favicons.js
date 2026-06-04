/**
 * Génère favicons (PNG + ICO) depuis le symbole marque (cubes cercle ou orbit ardoise).
 * Usage : npm run brand:favicons
 *
 * App Router (prioritaire en dev) :
 *   app/favicon.ico, app/icon.png, app/apple-icon.png
 *
 * Export statique : pas de public/favicon.ico (conflit dev 500 avec app/favicon.ico).
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const toIco = require("to-ico");

const dir = __dirname;
const faviconsDir = path.join(dir, "favicons");
const imagesDir = path.join(dir, "..", "images");
const publicRoot = path.join(dir, "..", "..");
const appDir = path.join(publicRoot, "..", "app");
const masterWebp = path.join(dir, "logo-automatex-circle.webp");
const masterSlateSvg = path.join(dir, "logo-orbit-symbol-on-bg-slate.svg");
const masterPngFallback = path.join(publicRoot, "..", "scripts", "brand-sources", "favicon-master.png");

const SLATE_BG = "#2D3A4A";
/** Partie haute du cercle (cubes + orbites), sans mot AUTOMATEX */
const CIRCLE_MARK_CROP_RATIO = 0.58;

const iconSizes = [
  { name: "favicon-16.png", size: 16 },
  { name: "favicon-32.png", size: 32 },
  { name: "favicon-48.png", size: 48 },
  { name: "favicon-96.png", size: 96 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "android-chrome-192.png", size: 192 },
  { name: "android-chrome-512.png", size: 512 },
];

async function buildFaviconMasterPng() {
  fs.mkdirSync(path.dirname(masterPngFallback), { recursive: true });

  if (fs.existsSync(masterWebp)) {
    const { width, height } = await sharp(masterWebp).metadata();
    const cropH = Math.round(height * CIRCLE_MARK_CROP_RATIO);
    await sharp(masterWebp)
      .extract({ left: 0, top: 0, width, height: cropH })
      .resize(512, 512, { fit: "contain", background: SLATE_BG })
      .png()
      .toFile(masterPngFallback);
    console.log(
      `✓ scripts/brand-sources/favicon-master.png (cubes, fond ${SLATE_BG}, sans wordmark)`,
    );
    return masterPngFallback;
  }

  if (fs.existsSync(masterSlateSvg)) {
    await sharp(masterSlateSvg).resize(512, 512).png().toFile(masterPngFallback);
    console.log(`✓ scripts/brand-sources/favicon-master.png (orbit ardoise SVG)`);
    return masterPngFallback;
  }

  throw new Error(
    `Missing ${masterWebp} or ${masterSlateSvg} — source favicon (cercle WebP ou SVG ardoise).`,
  );
}

function resizeFaviconIcon(masterPath, size) {
  let pipeline = sharp(masterPath).resize(size, size, {
    fit: "fill",
    kernel: sharp.kernel.lanczos3,
  });
  if (size <= 32) {
    pipeline = pipeline.sharpen({ sigma: 0.55, m1: 1, m2: 0.4 });
  }
  return pipeline.png();
}

async function generate() {
  fs.mkdirSync(faviconsDir, { recursive: true });
  fs.mkdirSync(imagesDir, { recursive: true });
  fs.mkdirSync(appDir, { recursive: true });

  const masterPath = await buildFaviconMasterPng();
  console.log(`Source favicon raster: ${path.basename(masterPath)}`);

  const lockupLight = fs.readFileSync(path.join(dir, "logo-orbit-horizontal-light.svg"));
  const lockupDark = fs.readFileSync(path.join(dir, "logo-orbit-horizontal-dark.svg"));
  const ogSvg = fs.readFileSync(path.join(dir, "og-image.svg"));
  const ogBtpSvg = fs.readFileSync(path.join(dir, "og-image-btp.svg"));

  for (const { name, size } of iconSizes) {
    await resizeFaviconIcon(masterPath, size).toFile(path.join(faviconsDir, name));
    console.log(`✓ favicons/${name}`);
  }

  await sharp(lockupLight).resize(420, 100).png().toFile(path.join(dir, "logo-orbit-lockup-light.png"));
  await sharp(lockupLight)
    .resize(840, 200)
    .png()
    .toFile(path.join(dir, "logo-orbit-lockup-light@2x.png"));
  console.log("✓ logo-orbit-lockup-light.png + @2x");

  await sharp(lockupDark).resize(420, 100).png().toFile(path.join(dir, "logo-orbit-lockup-dark.png"));
  await sharp(lockupDark)
    .resize(840, 200)
    .png()
    .toFile(path.join(dir, "logo-orbit-lockup-dark@2x.png"));
  console.log("✓ logo-orbit-lockup-dark.png + @2x");

  await sharp(masterPath).resize(128, 128).png().toFile(path.join(dir, "logo-orbit-symbol-128.png"));
  console.log("✓ logo-orbit-symbol-128.png (from favicon master)");

  const ogOutBrand = path.join(dir, "og-image.png");
  await sharp(ogSvg).resize(1200, 630).png().toFile(ogOutBrand);
  await sharp(ogSvg).resize(1200, 630).png().toFile(path.join(imagesDir, "og-image.png"));
  console.log("✓ og-image.png (brand + assets/images)");

  await sharp(ogBtpSvg).resize(1200, 630).png().toFile(path.join(dir, "og-image-btp.png"));
  console.log("✓ og-image-btp.png");

  const favicon16Path = path.join(faviconsDir, "favicon-16.png");
  const favicon32Path = path.join(faviconsDir, "favicon-32.png");
  const appleTouchPath = path.join(faviconsDir, "apple-touch-icon.png");

  const png16 = fs.readFileSync(favicon16Path);
  const png32 = fs.readFileSync(favicon32Path);
  const icoBuffer = await toIco([png16, png32]);

  const appFaviconIco = path.join(appDir, "favicon.ico");
  const publicFaviconIco = path.join(publicRoot, "favicon.ico");

  fs.writeFileSync(appFaviconIco, icoBuffer);
  if (fs.existsSync(publicFaviconIco)) {
    fs.unlinkSync(publicFaviconIco);
    console.log("✓ removed public/favicon.ico (évite conflit /favicon.ico avec app/ en dev)");
  }

  fs.copyFileSync(favicon32Path, path.join(appDir, "icon.png"));
  fs.copyFileSync(appleTouchPath, path.join(appDir, "apple-icon.png"));

  fs.copyFileSync(favicon32Path, path.join(publicRoot, "favicon.png"));
  fs.copyFileSync(appleTouchPath, path.join(publicRoot, "apple-touch-icon.png"));

  const legacyFaviconSvg = path.join(dir, "favicon.svg");
  if (fs.existsSync(legacyFaviconSvg)) {
    fs.unlinkSync(legacyFaviconSvg);
    console.log("✓ removed favicon.svg (ICO/PNG only — évite SVG + PNG embarqué dégradé)");
  }

  console.log("✓ app/favicon.ico (ICO 16+32)");
  console.log("✓ app/icon.png, app/apple-icon.png");
  console.log("✓ public/favicon.png, public/apple-touch-icon.png");
  console.log("Done.");
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
