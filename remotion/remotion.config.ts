import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("png");
Config.setOverwriteOutput(true);
// WebM + VP8/VP9 compresse très bien les UI plates et supporte la lecture en boucle légère.
Config.setCodec("vp8");
Config.setPixelFormat("yuv420p");
