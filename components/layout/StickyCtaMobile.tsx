"use client";

import { trackCtaClicked } from "@/lib/analytics";
import { STICKY_CTA_COPY } from "@/lib/constants";
import { RENDEZ_VOUS_PATH } from "@/lib/hub-nav";
import { cn } from "@/lib/cn";
import { useEffect, useState } from "react";

export function StickyCtaMobile() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const contact = document.getElementById("contact");
    if (!hero || !contact) return;

    const update = () => {
      const heroRect = hero.getBoundingClientRect();
      const contactRect = contact.getBoundingClientRect();
      const heroVisible =
        heroRect.bottom > window.innerHeight * 0.12 && heroRect.top < window.innerHeight;
      const contactVisible =
        contactRect.top < window.innerHeight * 0.92 && contactRect.bottom > 0;
      setVisible(!heroVisible && !contactVisible);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className={cn(
        "sticky-cta-bar fixed inset-x-0 bottom-0 z-[950] border-t border-border bg-night/95 px-gutter pb-[max(env(safe-area-inset-bottom),1rem)] pt-3 backdrop-blur-2xl lg:hidden",
        visible && "sticky-cta-bar--visible",
      )}
      aria-hidden={!visible}
    >
      <a
        href={RENDEZ_VOUS_PATH}
        data-analytics-cta="sticky_mobile"
        onClick={() => trackCtaClicked("sticky_mobile")}
        className="btn-bracket btn-bracket-primary"
        tabIndex={visible ? 0 : -1}
      >
        {STICKY_CTA_COPY.label}
      </a>
    </div>
  );
}
