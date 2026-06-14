/**
 * Génère favicons (PNG + ICO) depuis direction X (favicon.svg / favicon-master.png).
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
const masterSvgPublic = path.join(publicRoot, "favicon.svg");
const masterPngFallback = path.join(publicRoot, "..", "scripts", "brand-sources", "favicon-master.png");

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

  if (fs.existsSync(masterPngFallback)) {
    console.log(`✓ scripts/brand-sources/favicon-master.png (source déposée)`);
    return masterPngFallback;
  }

  if (fs.existsSync(masterSvgPublic)) {
    await sharp(masterSvgPublic).resize(512, 512).png().toFile(masterPngFallback);
    console.log(`✓ scripts/brand-sources/favicon-master.png (from public/favicon.svg)`);
    return masterPngFallback;
  }

  throw new Error(
    `Missing public/favicon.svg or scripts/brand-sources/favicon-master.png — source favicon direction X.`,
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

async function writeLockupFromMaster(masterPath, baseName) {
  const height = 100;
  const width = 420;
  const symbol = await sharp(masterPath).resize(height, height).png().toBuffer();

  const makePng = (w, h) =>
    sharp({
      create: {
        width: w,
        height: h,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      },
    })
      .composite([{ input: symbol, left: 0, top: 0 }])
      .png();

  await makePng(width, height).toFile(path.join(dir, `${baseName}.png`));
  await makePng(width * 2, height * 2).toFile(path.join(dir, `${baseName}@2x.png`));
  console.log(`✓ ${baseName}.png + @2x (symbole seul)`);
}

async function generate() {
  fs.mkdirSync(faviconsDir, { recursive: true });
  fs.mkdirSync(imagesDir, { recursive: true });
  fs.mkdirSync(appDir, { recursive: true });

  const masterPath = await buildFaviconMasterPng();
  console.log(`Source favicon raster: ${path.basename(masterPath)}`);

  const ogSvgPath = path.join(dir, "og-image.svg");
  const ogBtpSvgPath = path.join(dir, "og-image-btp.svg");

  for (const { name, size } of iconSizes) {
    await resizeFaviconIcon(masterPath, size).toFile(path.join(faviconsDir, name));
    console.log(`✓ favicons/${name}`);
  }

  await writeLockupFromMaster(masterPath, "logo-orbit-lockup-light");
  await writeLockupFromMaster(masterPath, "logo-orbit-lockup-dark");

  await sharp(masterPath).resize(128, 128).png().toFile(path.join(dir, "logo-orbit-symbol-128.png"));
  console.log("✓ logo-orbit-symbol-128.png (from favicon master)");

  if (fs.existsSync(ogSvgPath)) {
    const ogOutBrand = path.join(dir, "og-image.png");
    await sharp(ogSvgPath).resize(1200, 630).png().toFile(ogOutBrand);
    await sharp(ogSvgPath).resize(1200, 630).png().toFile(path.join(imagesDir, "og-image.png"));
    console.log("✓ og-image.png (brand + assets/images)");
  }

  if (fs.existsSync(ogBtpSvgPath)) {
    await sharp(ogBtpSvgPath).resize(1200, 630).png().toFile(path.join(dir, "og-image-btp.png"));
    console.log("✓ og-image-btp.png");
  }

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

  console.log("✓ app/favicon.ico (ICO 16+32)");
  console.log("✓ app/icon.png, app/apple-icon.png");
  console.log("✓ public/favicon.png, public/apple-touch-icon.png");
  console.log("✓ public/favicon.svg + public/logo-mono.svg (sources UI, non modifiées)");
  console.log("Done.");
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
