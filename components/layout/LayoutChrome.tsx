"use client";

import { CustomCursor } from "@/components/layout/CustomCursor";
import { MotionBootstrap } from "@/components/motion/MotionBootstrap";
import { Footer } from "@/components/layout/Footer";
import { MegaNav } from "@/components/layout/MegaNav";
import { ReadingProgress } from "@/components/layout/ReadingProgress";
import { StickyCtaMobile } from "@/components/layout/StickyCtaMobile";
import { ScrollDepthTracker } from "@/components/seo/ScrollDepthTracker";
import { UtmCapture } from "@/components/seo/UtmCapture";
import { AppProviders } from "@/providers/AppProviders";
import type { ReactNode } from "react";

export function LayoutChrome({ children }: { children: ReactNode }) {
  return (
    <AppProviders>
      <MotionBootstrap />
      <CustomCursor />
      <ReadingProgress />
      <ScrollDepthTracker />
      <UtmCapture />
      <MegaNav />
      <main className="relative z-[10]">{children}</main>
      <Footer />
      <StickyCtaMobile />
    </AppProviders>
  );
}
