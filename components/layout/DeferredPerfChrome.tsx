"use client";

import { ScrollDepthTracker } from "@/components/seo/ScrollDepthTracker";
import { UtmCapture } from "@/components/seo/UtmCapture";
import { scheduleIdleTask } from "@/lib/schedule-idle";
import { useEffect, useState } from "react";

/** Analytics non critiques — après idle (TBT desktop). */
export function DeferredPerfChrome() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    return scheduleIdleTask(() => setReady(true), { timeout: 3500 });
  }, []);

  if (!ready) return null;

  return (
    <>
      <ScrollDepthTracker />
      <UtmCapture />
    </>
  );
}
