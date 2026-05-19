"use client";

import { Fragment, useCallback, useState, type ReactNode } from "react";

const CDN_BASE = "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/svg";

type Band1Item =
  | { name: string; file: string }
  | { name: string; mistral: true };

const BAND1_ITEMS: Band1Item[] = [
  { name: "n8n", file: "n8n" },
  { name: "Gmail", file: "gmail" },
  { name: "Telegram", file: "telegram" },
  { name: "Google Drive", file: "google-drive" },
  { name: "Google Calendar", file: "google-calendar" },
  { name: "Google Sheets", file: "google-sheets" },
  { name: "Google Docs", file: "google-docs" },
  { name: "Notion", file: "notion" },
  { name: "WhatsApp", file: "whatsapp" },
  { name: "Slack", file: "slack" },
  { name: "Airtable", file: "airtable" },
  { name: "Trello", file: "trello" },
  { name: "HubSpot", file: "hubspot" },
  { name: "Typeform", file: "typeform" },
  { name: "Stripe", file: "stripe" },
  { name: "OpenAI", file: "openai" },
  { name: "Discord", file: "discord" },
  { name: "GitHub", file: "github" },
  { name: "WordPress", file: "wordpress" },
  { name: "Dropbox", file: "dropbox" },
  { name: "Mistral", mistral: true },
];

type Band2Item =
  | { name: string; kind: "cdn"; file: string }
  | {
      name: string;
      kind: "card";
      initials: string;
      bg: string;
      text: string;
    };

const BAND2_ITEMS: Band2Item[] = [
  { name: "SeLoger", kind: "card", initials: "SL", bg: "#F0F4FF", text: "#2D4EAA" },
  { name: "Leboncoin", kind: "cdn", file: "leboncoin" },
  { name: "Logic-Immo", kind: "card", initials: "LI", bg: "#FFF0F0", text: "#E30613" },
  { name: "PAP.fr", kind: "card", initials: "PAP", bg: "#FFF8E1", text: "#F5A623" },
  { name: "IAD France", kind: "card", initials: "IAD", bg: "#E8F5E9", text: "#2E7D32" },
  { name: "SAFTI", kind: "card", initials: "SAFTI", bg: "#FFF3E8", text: "#E65100" },
  { name: "Capifrance", kind: "card", initials: "CF", bg: "#EDE7F6", text: "#4527A0" },
  { name: "Optimhome", kind: "card", initials: "OH", bg: "#E3F2FD", text: "#1565C0" },
  { name: "EffiCity", kind: "card", initials: "EC", bg: "#FCE4EC", text: "#880E4F" },
  { name: "Playiad CRM", kind: "card", initials: "PL", bg: "#F1F8E9", text: "#33691E" },
  { name: "Omega CRM", kind: "card", initials: "Ω", bg: "#E8EAF6", text: "#283593" },
  { name: "MeilleursAgents", kind: "card", initials: "MA", bg: "#FFFDE7", text: "#F57F17" },
  { name: "Bien'ici", kind: "card", initials: "BI", bg: "#E0F2F1", text: "#00695C" },
  { name: "Google Maps", kind: "cdn", file: "google-maps" },
  { name: "DocuSign", kind: "cdn", file: "docusign" },
  { name: "DVF / Etalab", kind: "card", initials: "DVF", bg: "#E8F5E9", text: "#2E7D32" },
  { name: "NotaImmo", kind: "card", initials: "NI", bg: "#FFF3E0", text: "#E65100" },
  { name: "PriceHubble", kind: "card", initials: "PH", bg: "#F3E5F5", text: "#6A1B9A" },
  { name: "OVHcloud", kind: "card", initials: "OVH", bg: "#E1F5FE", text: "#01579B" },
  { name: "Pige Online", kind: "card", initials: "PO", bg: "#FFF9C4", text: "#F9A825" },
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

  const src = `${CDN_BASE}/${item.file}.svg`;

  return <CdnIcon src={src} label={item.name} />;
}

function CdnIcon({ src, label }: { src: string; label: string }) {
  const [failed, setFailed] = useState(false);
  const onError = useCallback(() => setFailed(true), []);

  if (failed) {
    return <FallbackIconBox label={label} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- SVG externe favicon-size
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

  const src = `${CDN_BASE}/${item.file}.svg`;
  return <CdnIcon src={src} label={item.name} />;
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
  const cells = BAND1_ITEMS.map((item, index) => (
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
  return cells;
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
 * Deux bandeaux marquee (style Framer) — pile après le hero.
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
