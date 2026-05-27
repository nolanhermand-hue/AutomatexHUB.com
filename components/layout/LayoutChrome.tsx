"use client";

import { Footer } from "@/components/layout/Footer";
import { MegaNav } from "@/components/layout/MegaNav";
import { ReadingProgress } from "@/components/layout/ReadingProgress";
import { StickyCtaMobile } from "@/components/layout/StickyCtaMobile";
import { ScrollDepthTracker } from "@/components/seo/ScrollDepthTracker";
import { UtmCapture } from "@/components/seo/UtmCapture";
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

const CustomCursor = dynamic(
  () =>
    import("@/components/layout/CustomCursor").then((m) => ({
      default: m.CustomCursor,
    })),
  { ssr: false },
);

export function LayoutChrome({ children }: { children: ReactNode }) {
  return (
    <AppProviders>
      <MotionBootstrap />
      <CustomCursor />
      <ReadingProgress />
      <ScrollDepthTracker />
      <UtmCapture />
      <MegaNav />
      <ScrollAnimationProvider>
        <main className="relative z-[10]">{children}</main>
      </ScrollAnimationProvider>
      <Footer />
      <StickyCtaMobile />
    </AppProviders>
  );
}
