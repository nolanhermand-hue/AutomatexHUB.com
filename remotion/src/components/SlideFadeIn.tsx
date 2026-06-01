import { Easing, interpolate, useCurrentFrame } from "remotion";
import type { SlideFadeInAnim } from "../types";

const EASE = Easing.bezier(0.16, 1, 0.3, 1);

export function useSlideFadeIn(anim: SlideFadeInAnim): { opacity: number; translateY: number } {
  const frame = useCurrentFrame();
  if (frame < anim.startFrame) {
    return { opacity: 0, translateY: anim.fromY };
  }
  const progress = interpolate(
    frame,
    [anim.startFrame, anim.startFrame + anim.durationInFrames],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: EASE },
  );
  return {
    opacity: progress,
    translateY: interpolate(progress, [0, 1], [anim.fromY, 0]),
  };
}
