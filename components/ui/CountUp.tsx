"use client";

import { useEffect, useRef, useState } from "react";

function easeOutQuad(t: number) {
  return 1 - (1 - t) * (1 - t);
}

export function CountUp({
  value,
  decimals = 0,
}: {
  value: number;
  decimals?: number;
}) {
  const [display, setDisplay] = useState(value);
  const fromRef = useRef(value);

  useEffect(() => {
    const from = fromRef.current;
    const to = value;
    const start = performance.now();
    const duration = 800;
    let raf = 0;

    function frame(now: number) {
      const t = Math.min(1, (now - start) / duration);
      const eased = easeOutQuad(t);
      const cur = from + (to - from) * eased;
      if (decimals === 0) {
        setDisplay(Math.round(cur));
      } else {
        setDisplay(Math.round(cur * 10) / 10);
      }
      if (t < 1) {
        raf = requestAnimationFrame(frame);
      }
    }

    raf = requestAnimationFrame(frame);
    fromRef.current = value;
    return () => cancelAnimationFrame(raf);
  }, [value, decimals]);

  if (decimals === 0) {
    return <>{display.toLocaleString("fr-FR")}</>;
  }
  return <>{display.toLocaleString("fr-FR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</>;
}
