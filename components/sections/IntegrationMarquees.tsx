"use client";

import { Fragment, useCallback, useState, type ReactNode } from "react";

const ICON_BASE = "/assets/integrations";

type Band1Item =
  | { name: string; file: string }
  | { name: string; mistral: true };

/** Stack cible mandataires — DOM réduit vs liste Framer complète. */
const BAND1_ITEMS: Band1Item[] = [
  { name: "n8n", file: "n8n" },
  { name: "Gmail", file: "gmail" },
  { name: "Telegram", file: "telegram" },
  { name: "Google Drive", file: "google-drive" },
  { name: "Google Calendar", file: "google-calendar" },
  { name: "Google Sheets", file: "google-sheets" },
  { name: "Mistral", mistral: true },
];

type Band2Item =
  | { name: string; kind: "icon"; file: string }
  | {
      name: string;
      kind: "card";
      initials: string;
      bg: string;
      text: string;
    };

const BAND2_ITEMS: Band2Item[] = [
  { name: "SeLoger", kind: "card", initials: "SL", bg: "#F0F4FF", text: "#2D4EAA" },
  { name: "Leboncoin", kind: "icon", file: "leboncoin" },
  { name: "Logic-Immo", kind: "card", initials: "LI", bg: "#FFF0F0", text: "#E30613" },
  { name: "PAP.fr", kind: "card", initials: "PAP", bg: "#FFF8E1", text: "#F5A623" },
  { name: "IAD France", kind: "card", initials: "IAD", bg: "#E8F5E9", text: "#2E7D32" },
  { name: "SAFTI", kind: "card", initials: "SAFTI", bg: "#FFF3E8", text: "#E65100" },
  { name: "Capifrance", kind: "card", initials: "CF", bg: "#EDE7F6", text: "#4527A0" },
  { name: "Optimhome", kind: "card", initials: "OH", bg: "#E3F2FD", text: "#1565C0" },
  { name: "EffiCity", kind: "card", initials: "EC", bg: "#FCE4EC", text: "#880E4F" },
];

function initialsFallback(label: string): string {
  const w = label.replace(/[^a-zA-Z0-9àâäéèêëïîôùûüç\s]/g, " ").trim().split(/\s+/);
  if (w.length >= 2 && w[0] && w[1]) {
    return (w[0].charAt(0) + w[1].charAt(0)).toUpperCase();
  }
  return label.slice(0, 2).toUpperCase();
}

function FallbackIconBox({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  const ini = initialsFallback(label);
  return (
    <div
      className={`flex size-6 shrink-0 items-center justify-center rounded-[5px] bg-[#F3F1EC] md:size-7 ${className}`}
      aria-hidden
    >
      <span className="text-[8px] font-semibold leading-none text-[#9B9992] md:text-[9px]">
        {ini}
      </span>
    </div>
  );
}

function Band1Logo({ item }: { item: Band1Item }) {
  if ("mistral" in item) {
    return (
      <div
        className="flex size-6 shrink-0 flex-col items-center justify-center rounded-[5px] bg-[#FFF3E8] px-0.5 md:size-7"
        aria-hidden
      >
        <span className="text-[8px] font-semibold leading-none text-[#FF7000] md:text-[10px] md:font-semibold">
          Mistral
        </span>
      </div>
    );
  }

  return <LocalIcon file={item.file} label={item.name} />;
}

function LocalIcon({ file, label }: { file: string; label: string }) {
  const [failed, setFailed] = useState(false);
  const onError = useCallback(() => setFailed(true), []);
  const src = `${ICON_BASE}/${file}.svg`;

  if (failed) {
    return <FallbackIconBox label={label} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- petits SVG locaux
    <img
      src={src}
      alt=""
      width={28}
      height={28}
      className="size-6 shrink-0 object-contain md:size-7"
      loading="lazy"
      decoding="async"
      onError={onError}
    />
  );
}

function Band2Logo({ item }: { item: Band2Item }) {
  if (item.kind === "card") {
    return (
      <div
        className="flex size-6 shrink-0 items-center justify-center rounded-[5px] md:size-7"
        style={{ backgroundColor: item.bg, color: item.text }}
        aria-hidden
      >
        <span className="max-w-[28px] truncate text-center text-[8px] font-semibold leading-none md:max-w-[32px] md:text-[9px]">
          {item.initials}
        </span>
      </div>
    );
  }

  return <LocalIcon file={item.file} label={item.name} />;
}

function MarqueeSegment({
  children,
  ariaHidden,
}: {
  children: ReactNode;
  ariaHidden?: boolean;
}) {
  return (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={ariaHidden ? true : undefined}
    >
      {children}
    </div>
  );
}

function renderBand1Row(keyPrefix: string) {
  return BAND1_ITEMS.map((item, index) => (
    <Fragment key={`${keyPrefix}-${item.name}-${index}`}>
      {index > 0 ? (
        <span
          className="mx-[18px] shrink-0 select-none text-[#E0DDD6]"
          aria-hidden
        >
          ·
        </span>
      ) : null}
      <div className="flex shrink-0 flex-col items-center justify-center px-3 md:px-0">
        <Band1Logo item={item} />
        <span className="mt-0.5 max-w-[5.5rem] truncate text-center text-[9px] font-medium leading-none text-[#9B9992] md:max-w-[6.5rem] md:text-[10px]">
          {item.name}
        </span>
      </div>
    </Fragment>
  ));
}

function renderBand2Row(keyPrefix: string) {
  return BAND2_ITEMS.map((item, index) => (
    <Fragment key={`${keyPrefix}-${item.name}-${index}`}>
      {index > 0 ? (
        <span
          className="mx-[18px] shrink-0 select-none text-[#E0DDD6]"
          aria-hidden
        >
          ·
        </span>
      ) : null}
      <div className="flex shrink-0 flex-col items-center justify-center px-3 md:px-0">
        <Band2Logo item={item} />
        <span className="mt-0.5 max-w-[5.5rem] truncate text-center text-[9px] font-medium leading-none text-[#9B9992] md:max-w-[6.5rem] md:text-[10px]">
          {item.name}
        </span>
      </div>
    </Fragment>
  ));
}

/**
 * Deux bandeaux marquee — pile après le hero.
 * Fond clair volontaire pour contraster avec le hero sombre.
 */
export function IntegrationMarquees() {
  return (
    <section
      className="border-b border-[#E0DDD6]/80"
      aria-label="Intégrations et outils métiers"
      data-analytics-section="integration-marquees"
    >
      <div className="bg-[#FFFFFF]">
        <p className="px-gutter py-2 font-body text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9B9992]">
          Intégrations &amp; automatisation
        </p>
        <div className="automatex-marquee-strip border-b border-[#E0DDD6]">
          <div className="automatex-marquee-inner automatex-marquee-inner--40">
            <MarqueeSegment>{renderBand1Row("a")}</MarqueeSegment>
            <MarqueeSegment ariaHidden>{renderBand1Row("b")}</MarqueeSegment>
          </div>
        </div>
      </div>

      <div className="bg-[#FAF9F6]">
        <p className="px-gutter py-2 font-body text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9B9992]">
          Outils métier immobilier
        </p>
        <div className="automatex-marquee-strip">
          <div className="automatex-marquee-inner automatex-marquee-inner--50">
            <MarqueeSegment>{renderBand2Row("a")}</MarqueeSegment>
            <MarqueeSegment ariaHidden>{renderBand2Row("b")}</MarqueeSegment>
          </div>
        </div>
      </div>
    </section>
  );
}
