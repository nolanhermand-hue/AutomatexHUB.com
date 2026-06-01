import { loadFont } from "@remotion/google-fonts/JetBrainsMono";
import { Composition } from "remotion";
import type { FC } from "react";
import specJson from "./spec.json";
import { Video } from "./Video";
import type { VideoSpec } from "./types";

const spec = specJson as VideoSpec;
const { fontFamily } = loadFont();

export const RemotionRoot: FC = () => {
  return (
    <>
      <Composition
        id="MandataireLead"
        component={Video}
        durationInFrames={spec.meta.durationInFrames}
        fps={spec.meta.fps}
        width={spec.meta.width}
        height={spec.meta.height}
        defaultProps={{
          spec,
          showSubtitles: true,
          fontFamily,
        }}
      />
      <Composition
        id="MandataireLeadNoSubs"
        component={Video}
        durationInFrames={spec.meta.durationInFrames}
        fps={spec.meta.fps}
        width={spec.meta.width}
        height={spec.meta.height}
        defaultProps={{
          spec,
          showSubtitles: false,
          fontFamily,
        }}
      />
    </>
  );
};
