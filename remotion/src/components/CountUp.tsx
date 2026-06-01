import { interpolate, useCurrentFrame } from "remotion";
import type { CountUpAnim } from "../types";

export function useCountUp(anim: CountUpAnim, from: number, to: number): number {
  const frame = useCurrentFrame();
  if (frame < anim.startFrame) return from;
  const end = anim.startFrame + anim.durationInFrames;
  return Math.round(
    interpolate(frame, [anim.startFrame, end], [from, to], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
  );
}

export function formatEuro(n: number): string {
  return n.toLocaleString("fr-FR");
}
