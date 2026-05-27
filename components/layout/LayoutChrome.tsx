"use client";

import { Footer } from "@/components/layout/Footer";
import { MegaNav } from "@/components/layout/MegaNav";
import { ReadingProgress } from "@/components/layout/ReadingProgress";
import { StickyCtaMobile } from "@/components/layout/StickyCtaMobile";
import { AppProviders } from "@/providers/AppProviders";
import { ScrollAnimationProvider } from "@/components/ui/ScrollAnimationProvider";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const MotionBootstrap = dynamic(
  () =>
    import("@/components/motion/MotionBootstrap").then((m) => ({
      default: m.MotionBootstrap,
    })),
  { ssr: false },
);

const DeferredPerfChrome = dynamic(
  () =>
    import("@/components/layout/DeferredPerfChrome").then((m) => ({
      default: m.DeferredPerfChrome,
    })),
  { ssr: false },
);

export function LayoutChrome({ children }: { children: ReactNode }) {
  return (
    <AppProviders>
      <MotionBootstrap />
      <DeferredPerfChrome />
      <ReadingProgress />
      <MegaNav />
      <ScrollAnimationProvider>
        <main className="relative z-[10]">{children}</main>
      </ScrollAnimationProvider>
      <Footer />
      <StickyCtaMobile />
    </AppProviders>
  );
}
