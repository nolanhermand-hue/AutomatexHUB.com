import { Config } from "@remotion/cli/config";

// Les logos d'intégration vivent dans le public/ du site principal.
Config.setPublicDir("../public");
Config.setVideoImageFormat("jpeg");
Config.setConcurrency(2);
