import { Img, staticFile } from "remotion";
import { BlinkingCursor } from "../components/BlinkingCursor";
import { formatEuro, useCountUp } from "../components/CountUp";
import { useGreyOut } from "../components/GreyOut";
import { useScalePop } from "../components/ScalePop";
import { useSlideFadeIn } from "../components/SlideFadeIn";
import { useTimestampTick } from "../components/TimestampTick";
import { sliceTypewriter, useTypewriterProgress } from "../components/Typewriter";
import { color, layoutX } from "../theme";
import type { ElementSpec, VideoSpec } from "../types";

type Props = {
  spec: VideoSpec;
  element: ElementSpec;
  fontFamily: string;
};

export function ElementRenderer({ spec, element, fontFamily }: Props) {
  switch (element.type) {
    case "terminalLine":
      return <TerminalLine spec={spec} el={element} fontFamily={fontFamily} />;
    case "mailCard":
      return <MailCard spec={spec} el={element} fontFamily={fontFamily} />;
    case "timestamp":
      return <TimestampEl spec={spec} el={element} fontFamily={fontFamily} />;
    case "text":
      return <TextEl spec={spec} el={element} fontFamily={fontFamily} />;
    case "heroNumber":
      return <HeroNumber spec={spec} el={element} fontFamily={fontFamily} />;
    case "ctaCard":
      return <CtaCard spec={spec} el={element} fontFamily={fontFamily} />;
    default:
      return null;
  }
}

function TerminalLine({
  spec,
  el,
  fontFamily,
}: {
  spec: VideoSpec;
  el: Extract<ElementSpec, { type: "terminalLine" }>;
  fontFamily: string;
}) {
  const parts = [
    { text: el.prompt, color: undefined as string | undefined },
    { text: el.content, color: undefined },
    { text: el.highlight?.text ?? "", color: el.highlight?.color },
    { text: el.suffix ?? "", color: undefined },
  ];
  const full = parts.map((p) => p.text).join("");
  const visible = useTypewriterProgress(el.animation.in, full.length);
  const lineWidth = el.style.lineWidth ?? 900;
  const left = layoutX(spec, el.style.x, lineWidth);

  const segments: { text: string; color?: string }[] = [];
  let pos = 0;
  for (const part of parts) {
    const take = Math.max(0, Math.min(part.text.length, visible - pos));
    if (take > 0) segments.push({ text: part.text.slice(0, take), color: part.color });
    pos += part.text.length;
  }

  return (
    <div
      style={{
        position: "absolute",
        left,
        top: el.style.y,
        width: lineWidth,
        fontFamily,
        fontSize: el.style.fontSize,
        fontWeight: el.style.weight,
        color: color(spec, el.style.color),
        lineHeight: 1.25,
      }}
    >
      {segments.map((seg, i) => (
        <span key={i} style={{ color: seg.color ? color(spec, seg.color) : undefined }}>
          {seg.text}
        </span>
      ))}
      {el.cursor && visible >= full.length ? (
        <BlinkingCursor spec={spec} height={el.style.fontSize ?? 64} />
      ) : null}
    </div>
  );
}

function MailCard({
  spec,
  el,
  fontFamily,
}: {
  spec: VideoSpec;
  el: Extract<ElementSpec, { type: "mailCard" }>;
  fontFamily: string;
}) {
  const slide = useSlideFadeIn(el.animation.in);
  const grey = useGreyOut(el.animation.state);
  const w = el.style.w;
  const left = layoutX(spec, el.style.x, w);

  return (
    <div
      style={{
        position: "absolute",
        left,
        top: el.style.y,
        width: w,
        opacity: slide.opacity * grey.opacity,
        transform: `translateY(${slide.translateY}px)`,
        filter: `saturate(${grey.saturate})`,
        backgroundColor: color(spec, el.style.surface ?? "surface"),
        borderRadius: el.style.radius,
        padding: "32px 36px",
        border: `1px solid ${color(spec, "textMuted")}33`,
      }}
    >
      <div style={{ fontFamily, fontSize: 44, fontWeight: 700, color: color(spec, "textPrimary") }}>
        {el.header}
      </div>
      <div
        style={{
          fontFamily,
          fontSize: 32,
          marginTop: 12,
          color: color(spec, "textMuted"),
        }}
      >
        {el.meta}
      </div>
      <div
        style={{
          fontFamily,
          fontSize: 28,
          marginTop: 20,
          color: color(spec, "accentAlert"),
        }}
      >
        {el.timestamp}
      </div>
    </div>
  );
}

function TimestampEl({
  spec,
  el,
  fontFamily,
}: {
  spec: VideoSpec;
  el: Extract<ElementSpec, { type: "timestamp" }>;
  fontFamily: string;
}) {
  const label = useTimestampTick(el.animation.in, el.content, el.tickTo);
  const slide = useSlideFadeIn({
    type: "SlideFadeIn",
    startFrame: el.animation.in.startFrame,
    durationInFrames: 12,
    fromY: 20,
  });

  return (
    <div
      style={{
        position: "absolute",
        left: layoutX(spec, el.style.x, 200),
        top: el.style.y,
        width: "100%",
        textAlign: "center",
        fontFamily,
        fontSize: el.style.fontSize,
        color: color(spec, el.style.color),
        opacity: slide.opacity,
        transform: `translateY(${slide.translateY}px)`,
      }}
    >
      {label}
    </div>
  );
}

function TextEl({
  spec,
  el,
  fontFamily,
}: {
  spec: VideoSpec;
  el: Extract<ElementSpec, { type: "text" }>;
  fontFamily: string;
}) {
  const anim = el.animation.in;
  if (anim.type === "Typewriter") {
    return <TextElTypewriter spec={spec} el={el} anim={anim} fontFamily={fontFamily} />;
  }
  return <TextElSlide spec={spec} el={el} anim={anim} fontFamily={fontFamily} />;
}

function TextElTypewriter({
  spec,
  el,
  anim,
  fontFamily,
}: {
  spec: VideoSpec;
  el: Extract<ElementSpec, { type: "text" }>;
  anim: import("../types").TypewriterAnim;
  fontFamily: string;
}) {
  const visible = useTypewriterProgress(anim, el.content.length);
  const text = sliceTypewriter(el.content, visible);
  const lineWidth = el.style.lineWidth ?? 900;
  return (
    <div
      style={{
        position: "absolute",
        left: layoutX(spec, el.style.x, lineWidth),
        top: el.style.y,
        width: lineWidth,
        fontFamily,
        fontSize: el.style.fontSize,
        fontWeight: el.style.weight,
        color: color(spec, el.style.color),
        lineHeight: 1.3,
      }}
    >
      {text}
    </div>
  );
}

function TextElSlide({
  spec,
  el,
  anim,
  fontFamily,
}: {
  spec: VideoSpec;
  el: Extract<ElementSpec, { type: "text" }>;
  anim: import("../types").SlideFadeInAnim;
  fontFamily: string;
}) {
  const slide = useSlideFadeIn(anim);
  return (
    <div
      style={{
        position: "absolute",
        left: layoutX(spec, el.style.x, 900),
        top: el.style.y,
        width: 900,
        textAlign: "center",
        fontFamily,
        fontSize: el.style.fontSize,
        fontWeight: el.style.weight,
        color: color(spec, el.style.color),
        opacity: slide.opacity,
        transform: `translateY(${slide.translateY}px)`,
      }}
    >
      {el.content}
    </div>
  );
}

function HeroNumber({
  spec,
  el,
  fontFamily,
}: {
  spec: VideoSpec;
  el: Extract<ElementSpec, { type: "heroNumber" }>;
  fontFamily: string;
}) {
  const value = useCountUp(el.animation.in, el.from, el.to);
  const pop = useScalePop(el.animation.pop);
  const slide = useSlideFadeIn({
    type: "SlideFadeIn",
    startFrame: el.animation.in.startFrame - 8,
    durationInFrames: 14,
    fromY: 24,
  });

  return (
    <div
      style={{
        position: "absolute",
        left: layoutX(spec, el.style.x, 900),
        top: el.style.y,
        width: 900,
        textAlign: "center",
        opacity: slide.opacity,
        transform: `scale(${pop.scale}) translateY(${slide.translateY}px)`,
        transformOrigin: "center top",
      }}
    >
        <div
          style={{
            fontFamily,
            fontSize: el.style.fontSize,
            fontWeight: el.style.weight,
            color: color(spec, el.style.color),
            letterSpacing: "-0.02em",
          }}
        >
          {formatEuro(value)}
          {el.suffix}
        </div>
        <div
          style={{
            marginTop: 16,
            fontFamily,
            fontSize: el.style.labelSize,
            color: color(spec, el.style.labelColor),
            fontWeight: 500,
          }}
        >
          {el.label}
        </div>
    </div>
  );
}

function CtaCard({
  spec,
  el,
  fontFamily,
}: {
  spec: VideoSpec;
  el: Extract<ElementSpec, { type: "ctaCard" }>;
  fontFamily: string;
}) {
  const pop = useScalePop(el.animation.in);
  const w = el.style.w;
  const left = layoutX(spec, el.style.x, w);
  const visible = pop.opacity > 0.01;

  return (
    <div
      style={{
        position: "absolute",
        left,
        top: el.style.y,
        width: w,
        opacity: pop.opacity,
        transform: `scale(${pop.scale})`,
        transformOrigin: "center center",
        backgroundColor: color(spec, el.style.surface ?? "surface"),
        borderRadius: el.style.radius,
        border: `2px solid ${color(spec, el.style.border)}`,
        padding: "28px 32px",
        textAlign: "center",
        fontFamily,
        fontSize: el.style.fontSize,
        fontWeight: el.style.weight,
        color: color(spec, el.style.color),
        lineHeight: 1.25,
      }}
    >
      {visible ? el.content : ""}
      {el.cursor && visible ? (
        <div style={{ marginTop: 8 }}>
          <BlinkingCursor spec={spec} height={el.style.fontSize ?? 52} width={12} />
        </div>
      ) : null}
    </div>
  );
}

export function LogoMark({ spec, fontFamily }: { spec: VideoSpec; fontFamily: string }) {
  const url = spec.assets.logoUrl?.trim();
  if (!url) return null;
  const src = url.startsWith("http") ? url : staticFile(url.replace(/^\//, ""));

  return (
    <div style={{ position: "absolute", top: 72, left: 0, right: 0, alignItems: "center", display: "flex", justifyContent: "center" }}>
      <Img src={src} style={{ height: 48, objectFit: "contain" }} />
      <span
        style={{
          marginLeft: 16,
          fontFamily,
          fontSize: 22,
          color: color(spec, "textMuted"),
          letterSpacing: "0.12em",
        }}
      >
        AUTOMATEX
      </span>
    </div>
  );
}
