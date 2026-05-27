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
const masterPng = path.join(publicRoot, "..", "scripts", "brand-sources", "favicon-master.png");

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

  if (!fs.existsSync(masterPng)) {
    throw new Error(`Missing ${masterPng} — source favicon (hors public/, non déployée).`);
  }

  const symbolOnBg = fs.readFileSync(path.join(dir, "logo-orbit-symbol-on-bg.svg"));
  const lockupLight = fs.readFileSync(path.join(dir, "logo-orbit-horizontal-light.svg"));
  const lockupDark = fs.readFileSync(path.join(dir, "logo-orbit-horizontal-dark.svg"));
  const ogSvg = fs.readFileSync(path.join(dir, "og-image.svg"));

  const rasterSharp = () => sharp(masterPng);

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

  await sharp(symbolOnBg).resize(128, 128).png().toFile(path.join(dir, "logo-orbit-symbol-128.png"));
  console.log("✓ logo-orbit-symbol-128.png");

  const ogOutBrand = path.join(dir, "og-image.png");
  await sharp(ogSvg).resize(1200, 630).png().toFile(ogOutBrand);
  await sharp(ogSvg).resize(1200, 630).png().toFile(path.join(imagesDir, "og-image.png"));
  console.log("✓ og-image.png (brand + assets/images)");

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

  const faviconSvgPath = path.join(dir, "favicon.svg");
  const b64 = png32.toString("base64");
  fs.writeFileSync(
    faviconSvgPath,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="img" aria-label="Automatex Hub"><title>Automatex Hub</title><image href="data:image/png;base64,${b64}" width="32" height="32"/></svg>\n`,
  );
  console.log("✓ favicon.svg (PNG embarqué, sans requête externe)");

  console.log("✓ app/favicon.ico (ICO 16+32)");
  console.log("✓ app/icon.png, app/apple-icon.png");
  console.log("✓ public/favicon.ico, public/favicon.png, public/apple-touch-icon.png");
  console.log("Done.");
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
