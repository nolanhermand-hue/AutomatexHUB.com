import { useCurrentFrame } from "remotion";
import type { TypewriterAnim } from "../types";

export function useTypewriterProgress(anim: TypewriterAnim, fullLength: number): number {
  const frame = useCurrentFrame();
  if (frame < anim.startFrame) return 0;
  const elapsed = frame - anim.startFrame;
  const chars = Math.min(fullLength, Math.floor(elapsed * anim.charsPerFrame));
  return chars;
}

export function sliceTypewriter(text: string, visibleChars: number): string {
  return text.slice(0, visibleChars);
}
