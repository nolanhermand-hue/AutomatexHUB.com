import { interpolate, useCurrentFrame } from "remotion";
import type { GreyOutAnim } from "../types";

export function useGreyOut(anim: GreyOutAnim | undefined): { opacity: number; saturate: number } {
  if (!anim) return { opacity: 1, saturate: 1 };
  const frame = useCurrentFrame();
  if (frame < anim.startFrame) return { opacity: 1, saturate: 1 };
  const end = anim.startFrame + anim.durationInFrames;
  const opacity = interpolate(frame, [anim.startFrame, end], [1, 0.4], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const saturate = interpolate(frame, [anim.startFrame, end], [1, 0.25], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return { opacity, saturate };
}
