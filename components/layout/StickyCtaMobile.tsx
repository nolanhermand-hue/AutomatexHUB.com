"use client";

import { trackCtaClicked } from "@/lib/analytics";
import { NAP, STICKY_CTA_COPY } from "@/lib/constants";
import { rendezVousHref } from "@/lib/hub-nav";
import { cn } from "@/lib/cn";
import { useEffect, useState } from "react";

export function StickyCtaMobile() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const update = () => {
      const heroRect = hero.getBoundingClientRect();
      const heroVisible =
        heroRect.bottom > window.innerHeight * 0.12 && heroRect.top < window.innerHeight;

      const contact = document.getElementById("contact");
      let bottomZoneVisible = false;
      if (contact) {
        const contactRect = contact.getBoundingClientRect();
        bottomZoneVisible =
          contactRect.top < window.innerHeight * 0.92 && contactRect.bottom > 0;
      } else {
        bottomZoneVisible =
          window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 120;
      }

      setVisible(!heroVisible && !bottomZoneVisible);
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
      <div className="mx-auto flex max-w-content gap-2">
        <a
          href={`tel:${NAP.phoneE164}`}
          className="inline-flex min-h-[48px] min-w-[5.5rem] flex-1 items-center justify-center rounded-md border border-border text-sm font-semibold text-text"
          onClick={() => trackCtaClicked("sticky_call")}
          tabIndex={visible ? 0 : -1}
          aria-label={`Appeler ${NAP.phoneDisplay}`}
        >
          Appeler
        </a>
        <a
          href={rendezVousHref()}
          data-analytics-cta="sticky_mobile"
          onClick={() => trackCtaClicked("sticky_mobile")}
          className="btn-bracket btn-bracket-primary min-h-[48px] min-w-0 flex-[1.35] justify-center"
          tabIndex={visible ? 0 : -1}
        >
          {STICKY_CTA_COPY.label}
        </a>
      </div>
    </div>
  );
}
