"use client";

import { trackCtaClicked } from "@/lib/analytics";
import { STICKY_CTA_COPY } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
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
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-x-0 bottom-0 z-[950] border-t border-border bg-night/95 px-gutter pb-[max(env(safe-area-inset-bottom),1rem)] pt-3 backdrop-blur-2xl lg:hidden"
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <a
            href="#contact"
            data-analytics-cta="sticky_mobile"
            onClick={() => trackCtaClicked("sticky_mobile")}
            className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-cta px-4 py-[18px] text-[15px] font-semibold text-[var(--color-cta-fg,#fff)] shadow-[0_4px_24px_rgb(0_0_0/0.4)] transition-all hover:brightness-110 active:brightness-95"
          >
            {STICKY_CTA_COPY.label}
          </a>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
