import { useCurrentFrame } from "remotion";
import type { VideoSpec } from "../types";
import { color } from "../theme";

type Props = {
  spec: VideoSpec;
  showSubtitles: boolean;
  fontFamily: string;
};

export function Subtitles({ spec, showSubtitles, fontFamily }: Props) {
  const frame = useCurrentFrame();
  if (!showSubtitles) return null;

  const active = spec.audio.subtitles.find(
    (s) => frame >= s.fromFrame && frame < s.toFrame,
  );
  if (!active) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: 48,
        right: 48,
        bottom: 120,
        fontFamily,
        fontSize: 36,
        fontWeight: 500,
        lineHeight: 1.35,
        color: color(spec, "textPrimary"),
        textAlign: "center",
        padding: "20px 28px",
        backgroundColor: "rgba(10, 14, 26, 0.82)",
        borderRadius: 12,
        border: `1px solid ${color(spec, "surface")}`,
      }}
    >
      {active.text}
    </div>
  );
}
