import type { PaletteKey, VideoSpec } from "./types";

export function color(spec: VideoSpec, key: PaletteKey | string | undefined): string {
  if (!key) return spec.brand.palette.textPrimary;
  if (key in spec.brand.palette) {
    return spec.brand.palette[key as PaletteKey];
  }
  return key;
}

export function centerX(width: number, contentWidth: number): number {
  return (width - contentWidth) / 2;
}

export function layoutX(
  spec: VideoSpec,
  x: "center" | number | undefined,
  contentWidth: number,
): number {
  if (x === "center" || x === undefined) {
    return centerX(spec.meta.width, contentWidth);
  }
  return x;
}
