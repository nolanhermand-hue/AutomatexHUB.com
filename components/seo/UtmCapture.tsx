"use client";

import { captureUtmFromUrl } from "@/lib/utm";
import { useEffect } from "react";

/**
 * I14 — Capture UTM dès le premier render client.
 */
export function UtmCapture() {
  useEffect(() => {
    captureUtmFromUrl();
  }, []);
  return null;
}
