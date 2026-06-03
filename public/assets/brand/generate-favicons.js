/**
 * Génère favicons (PNG + ICO) depuis scripts/brand-sources/favicon-master.png — sharp + to-ico.
 * Usage : npm run brand:favicons
 *
 * App Router (prioritaire) :
 *   app/favicon.ico, app/icon.png, app/apple-icon.png
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

async function generate() {
  fs.mkdirSync(faviconsDir, { recursive: true });
  fs.mkdirSync(imagesDir, { recursive: true });
  fs.mkdirSync(appDir, { recursive: true });

  const masterPath = fs.existsSync(masterWebp)
    ? masterWebp
    : fs.existsSync(masterPngFallback)
      ? masterPngFallback
      : null;
  if (!masterPath) {
    throw new Error(
      `Missing ${masterWebp} or ${masterPngFallback} — source favicon (cercle WebP ou PNG master).`,
    );
  }

  if (fs.existsSync(masterWebp)) {
    fs.mkdirSync(path.dirname(masterPngFallback), { recursive: true });
    await sharp(masterWebp).resize(512, 512).png().toFile(masterPngFallback);
    console.log(`✓ scripts/brand-sources/favicon-master.png (512×512 RGBA from circle WebP)`);
  }

  console.log(`Source favicon: ${path.basename(masterPath)}`);

  const lockupLight = fs.readFileSync(path.join(dir, "logo-orbit-horizontal-light.svg"));
  const lockupDark = fs.readFileSync(path.join(dir, "logo-orbit-horizontal-dark.svg"));
  const ogSvg = fs.readFileSync(path.join(dir, "og-image.svg"));
  const ogBtpSvg = fs.readFileSync(path.join(dir, "og-image-btp.svg"));

  const rasterSharp = () => sharp(masterPath);

  for (const { name, size } of iconSizes) {
    await rasterSharp().resize(size, size).png().toFile(path.join(faviconsDir, name));
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
  console.log("✓ logo-orbit-symbol-128.png (from circle master)");

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
  fs.writeFileSync(publicFaviconIco, icoBuffer);
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
  console.log("✓ public/favicon.ico, public/favicon.png, public/apple-touch-icon.png");
  console.log("Done.");
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
