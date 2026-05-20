export type MotionQuality = "low" | "medium" | "high";

/** Détection légère avant chargement GSAP / WebGL (R7 brief motion). */
export function detectMotionQuality(): MotionQuality {
  if (typeof window === "undefined") return "medium";

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return "low";

  const cores = navigator.hardwareConcurrency ?? 4;
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;

  if (cores <= 2 || memory <= 2) return "low";
  if (window.devicePixelRatio >= 2 && memory >= 4 && cores >= 4) return "high";
  return "medium";
}
