import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import type { ScalePopAnim } from "../types";

export function useScalePop(
  anim: ScalePopAnim,
): { scale: number; opacity: number } {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  if (frame < anim.startFrame) {
    return { scale: 0, opacity: 0 };
  }
  const progress = spring({
    frame: frame - anim.startFrame,
    fps,
    config: {
      damping: anim.spring.damping,
      stiffness: anim.spring.stiffness,
    },
  });
  return { scale: progress, opacity: Math.min(1, progress * 1.2) };
}
