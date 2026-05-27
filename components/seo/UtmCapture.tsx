"use client";

import { scheduleIdleTask } from "@/lib/schedule-idle";
import { captureUtmFromUrl } from "@/lib/utm";
import { useEffect } from "react";

/**
 * I14 — Capture UTM après rendu interactif (TBT).
 */
export function UtmCapture() {
  useEffect(() => scheduleIdleTask(() => captureUtmFromUrl(), { timeout: 2000 }), []);
  return null;
}
