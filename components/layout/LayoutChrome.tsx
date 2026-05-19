"use client";

import { AmbientMouseGradient } from "@/components/layout/AmbientMouseGradient";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ReadingProgress } from "@/components/layout/ReadingProgress";
import { SectionRail } from "@/components/layout/SectionRail";
import { StickyCtaMobile } from "@/components/layout/StickyCtaMobile";
import { ScrollDepthTracker } from "@/components/seo/ScrollDepthTracker";
import { UtmCapture } from "@/components/seo/UtmCapture";
import { AppProviders } from "@/providers/AppProviders";
import type { ReactNode } from "react";

export function LayoutChrome({ children }: { children: ReactNode }) {
  return (
    <AppProviders>
      <AmbientMouseGradient />
      <CustomCursor />
      <ReadingProgress />
      <SectionRail />
      <ScrollDepthTracker />
      <UtmCapture />
      <Navbar />
      <main className="relative z-[10]">{children}</main>
      <Footer />
      <StickyCtaMobile />
    </AppProviders>
  );
}
