export type PaletteKey =
  | "bg"
  | "surface"
  | "textPrimary"
  | "textMuted"
  | "accentAlert"
  | "accentResult";

export type VideoSpec = {
  meta: {
    width: number;
    height: number;
    fps: number;
    durationInFrames: number;
    title: string;
  };
  brand: {
    fontFamily: string;
    palette: Record<PaletteKey, string>;
    cursor: { color: string; blinkPerSecond: number };
    rules: string[];
  };
  assets: {
    logoUrl: string;
    voiceoverUrl: string;
  };
  audio: {
    voiceover: string;
    backgroundMusic: string;
    subtitles: { fromFrame: number; toFrame: number; text: string }[];
  };
  scenes: SceneSpec[];
};

export type SceneSpec = {
  id: string;
  startFrame: number;
  durationInFrames: number;
  background: PaletteKey;
  elements: ElementSpec[];
};

export type ElementSpec =
  | TerminalLineElement
  | MailCardElement
  | TimestampElement
  | TextElement
  | HeroNumberElement
  | CtaCardElement;

type BaseStyle = {
  fontSize?: number;
  weight?: number;
  color?: PaletteKey | string;
  x?: "center" | number;
  y?: number;
  lineWidth?: number;
  w?: number;
  radius?: number;
  surface?: PaletteKey;
  border?: PaletteKey;
  labelColor?: PaletteKey;
  labelSize?: number;
};

type TerminalLineElement = {
  type: "terminalLine";
  prompt: string;
  content: string;
  highlight?: { text: string; color: PaletteKey };
  suffix?: string;
  style: BaseStyle;
  animation: { in: TypewriterAnim };
  cursor?: boolean;
};

type MailCardElement = {
  type: "mailCard";
  header: string;
  meta: string;
  timestamp: string;
  style: BaseStyle & { w: number; radius: number };
  animation: {
    in: SlideFadeInAnim;
    state?: GreyOutAnim;
  };
};

type TimestampElement = {
  type: "timestamp";
  content: string;
  tickTo: string;
  style: BaseStyle;
  animation: { in: TimestampTickAnim };
};

type TextElement = {
  type: "text";
  content: string;
  style: BaseStyle;
  animation: { in: SlideFadeInAnim | TypewriterAnim };
};

type HeroNumberElement = {
  type: "heroNumber";
  from: number;
  to: number;
  suffix: string;
  label: string;
  style: BaseStyle & { labelColor: PaletteKey; labelSize: number };
  animation: {
    in: CountUpAnim;
    pop: ScalePopAnim;
  };
};

type CtaCardElement = {
  type: "ctaCard";
  content: string;
  style: BaseStyle & { w: number; radius: number; border: PaletteKey };
  animation: { in: ScalePopAnim };
  cursor?: boolean;
};

export type TypewriterAnim = {
  type: "Typewriter";
  startFrame: number;
  charsPerFrame: number;
};

export type SlideFadeInAnim = {
  type: "SlideFadeIn";
  startFrame: number;
  durationInFrames: number;
  fromY: number;
};

export type GreyOutAnim = {
  type: "GreyOut";
  startFrame: number;
  durationInFrames: number;
};

export type CountUpAnim = {
  type: "CountUp";
  startFrame: number;
  durationInFrames: number;
};

export type ScalePopAnim = {
  type: "ScalePop";
  startFrame: number;
  spring: { damping: number; stiffness: number };
};

export type TimestampTickAnim = {
  type: "TimestampTick";
  startFrame: number;
  durationInFrames: number;
};
