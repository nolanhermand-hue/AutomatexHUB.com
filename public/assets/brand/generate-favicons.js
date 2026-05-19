/**
 * Génère les PNG de marque depuis les SVG Orbit (sharp).
 * Usage : npm run brand:favicons
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const dir = __dirname;
const faviconsDir = path.join(dir, "favicons");
const imagesDir = path.join(dir, "..", "images");
const publicRoot = path.join(dir, "..", "..");
const appDir = path.join(publicRoot, "..", "app");

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

  const symbolOnBg = fs.readFileSync(path.join(dir, "logo-orbit-symbol-on-bg.svg"));
  const lockupLight = fs.readFileSync(path.join(dir, "logo-orbit-horizontal-light.svg"));
  const lockupDark = fs.readFileSync(path.join(dir, "logo-orbit-horizontal-dark.svg"));
  const faviconSvg = fs.readFileSync(path.join(dir, "favicon.svg"));
  const ogSvg = fs.readFileSync(path.join(dir, "og-image.svg"));

  for (const { name, size } of iconSizes) {
    const input = name.startsWith("favicon-") && size <= 48 ? faviconSvg : symbolOnBg;
    await sharp(input).resize(size, size).png().toFile(path.join(faviconsDir, name));
    console.log(`✓ favicons/${name}`);
  }

  await sharp(lockupLight).resize(420, 100).png().toFile(path.join(dir, "logo-orbit-lockup-light.png"));
  console.log("✓ logo-orbit-lockup-light.png");

  await sharp(lockupDark).resize(420, 100).png().toFile(path.join(dir, "logo-orbit-lockup-dark.png"));
  console.log("✓ logo-orbit-lockup-dark.png");

  await sharp(symbolOnBg).resize(128, 128).png().toFile(path.join(dir, "logo-orbit-symbol-128.png"));
  console.log("✓ logo-orbit-symbol-128.png");

  const ogOutBrand = path.join(dir, "og-image.png");
  await sharp(ogSvg).resize(1200, 630).png().toFile(ogOutBrand);
  await sharp(ogSvg).resize(1200, 630).png().toFile(path.join(imagesDir, "og-image.png"));
  console.log("✓ og-image.png (brand + assets/images)");

  const favicon32 = path.join(faviconsDir, "favicon-32.png");
  const appleTouch = path.join(faviconsDir, "apple-touch-icon.png");

  fs.copyFileSync(favicon32, path.join(publicRoot, "favicon.png"));
  fs.copyFileSync(appleTouch, path.join(publicRoot, "apple-touch-icon.png"));
  fs.copyFileSync(favicon32, path.join(appDir, "icon.png"));
  fs.copyFileSync(appleTouch, path.join(appDir, "apple-icon.png"));
  console.log("✓ public/favicon.png, public/apple-touch-icon.png");
  console.log("✓ app/icon.png, app/apple-icon.png");

  console.log("Done.");
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
