"use client";

import { getMotionController } from "@/lib/motion/MotionController";
import { initMicroInteractions } from "@/lib/motion/microInteractions";
import { useEffect } from "react";

/** Init globale motion (controller + micro-interactions). */
export function MotionBootstrap() {
  useEffect(() => {
    const ctrl = getMotionController();
    ctrl.init();

    let cleanupMicro: (() => void) | void;
    void initMicroInteractions().then((fn) => {
      cleanupMicro = fn;
    });

    return () => {
      cleanupMicro?.();
      ctrl.destroy();
    };
  }, []);

  return null;
}
