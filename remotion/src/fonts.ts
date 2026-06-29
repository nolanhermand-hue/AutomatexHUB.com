import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

const inter = loadInter();

/** Pile de polices à utiliser dans les compositions (Inter chargée via @remotion/google-fonts). */
export const FONT_FAMILY = inter.fontFamily;
export const { waitUntilDone } = inter;
