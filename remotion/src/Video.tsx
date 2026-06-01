import type { FC } from "react";
import { AbsoluteFill, Audio, staticFile, useVideoConfig } from "remotion";
import { ElementRenderer, LogoMark } from "./elements/ElementRenderer";
import { Subtitles } from "./components/Subtitles";
import { color } from "./theme";
import type { VideoSpec } from "./types";

export type VideoProps = {
  spec: VideoSpec;
  showSubtitles?: boolean;
  fontFamily: string;
};

export const Video: FC<VideoProps> = ({
  spec,
  showSubtitles = true,
  fontFamily,
}) => {
  const { width, height } = useVideoConfig();
  const voice = spec.assets.voiceoverUrl?.trim();
  const audioSrc =
    voice && !voice.includes("<<")
      ? voice.startsWith("http")
        ? voice
        : staticFile(voice.replace(/^\//, ""))
      : null;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: color(spec, "bg"),
        fontFamily,
        width,
        height,
      }}
    >
      {/* Scanlines discrètes */}
      <AbsoluteFill
        style={{
          opacity: 0.04,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 3px)",
          pointerEvents: "none",
        }}
      />

      <LogoMark spec={spec} fontFamily={fontFamily} />

      <div
        style={{
          position: "absolute",
          left: 48,
          top: 140,
          fontFamily,
          fontSize: 22,
          color: color(spec, "textMuted"),
        }}
      >
        {"> "}console.automatex
      </div>

      {spec.scenes.flatMap((scene) =>
        scene.elements.map((el, idx) => (
          <ElementRenderer
            key={`${scene.id}-${idx}`}
            spec={spec}
            element={el}
            fontFamily={fontFamily}
          />
        )),
      )}

      <Subtitles spec={spec} showSubtitles={showSubtitles} fontFamily={fontFamily} />

      {audioSrc ? <Audio src={audioSrc} /> : null}
    </AbsoluteFill>
  );
};
