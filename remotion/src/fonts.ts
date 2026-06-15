import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { loadFont as loadJetBrains } from "@remotion/google-fonts/JetBrainsMono";

const inter = loadInter("normal", { weights: ["400", "500", "600", "700"] });
const mono = loadJetBrains("normal", { weights: ["400", "500", "600"] });

export const FONT_BODY = inter.fontFamily;
export const FONT_MONO = mono.fontFamily;
export const fontsReady = Promise.all([inter.waitUntilDone(), mono.waitUntilDone()]);
