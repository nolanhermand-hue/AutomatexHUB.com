import { useCurrentFrame } from "remotion";
import type { VideoSpec } from "../types";

type Props = {
  spec: VideoSpec;
  height: number;
  width?: number;
};

export function BlinkingCursor({ spec, height, width = 14 }: Props) {
  const frame = useCurrentFrame();
  const fps = spec.brand.cursor.blinkPerSecond;
  const visible = Math.floor(frame / (30 / fps)) % 2 === 0;

  return (
    <span
      style={{
        display: "inline-block",
        width,
        height: height * 0.85,
        marginLeft: 4,
        verticalAlign: "text-bottom",
        backgroundColor: spec.brand.cursor.color,
        opacity: visible ? 1 : 0,
      }}
    />
  );
}
