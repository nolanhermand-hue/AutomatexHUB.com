"use client";

import { getMotionController } from "@/lib/motion/MotionController";
import { initMicroInteractions } from "@/lib/motion/microInteractions";
import { useEffect } from "react";

/** Init globale motion (controller + micro-interactions). */
export function MotionBootstrap() {
  useEffect(() => {
    let cancelled = false;
    let cleanupMicro: (() => void) | void;

    const start = () => {
      if (cancelled) return;
      const ctrl = getMotionController();
      ctrl.init();
      void initMicroInteractions().then((fn) => {
        if (!cancelled) cleanupMicro = fn;
      });
    };

    if (typeof requestIdleCallback === "function") {
      const id = requestIdleCallback(start, { timeout: 2500 });
      return () => {
        cancelled = true;
        cancelIdleCallback(id);
        cleanupMicro?.();
        getMotionController().destroy();
      };
    }

    const t = window.setTimeout(start, 1);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
      cleanupMicro?.();
      getMotionController().destroy();
    };
  }, []);

  return null;
}
