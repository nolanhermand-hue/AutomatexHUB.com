import { interpolate, useCurrentFrame } from "remotion";
import type { TimestampTickAnim } from "../types";

function parseTime(s: string): number {
  const [h, m] = s.split(":").map(Number);
  return (h ?? 0) * 60 + (m ?? 0);
}

function formatTime(totalMinutes: number): string {
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  return `${h}:${m.toString().padStart(2, "0")}`;
}

export function useTimestampTick(
  anim: TimestampTickAnim,
  from: string,
  to: string,
): string {
  const frame = useCurrentFrame();
  if (frame < anim.startFrame) return from;
  const end = anim.startFrame + anim.durationInFrames;
  const fromMin = parseTime(from);
  const toMin = parseTime(to);
  const current = interpolate(frame, [anim.startFrame, end], [fromMin, toMin], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return formatTime(Math.round(current));
}
