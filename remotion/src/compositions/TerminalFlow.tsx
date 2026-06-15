import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, toneColor } from "../theme";
import { FONT_BODY, FONT_MONO } from "../fonts";
import { Backdrop } from "../components/Backdrop";
import type { LiveDemo, LiveStep } from "../lib/liveDemos";

export const TERM_TIMING = { intro: 8, step: 34, hold: 64, outro: 24 };

export function terminalFlowDuration(steps: number): number {
  const { intro, step, hold, outro } = TERM_TIMING;
  return intro + steps * step + hold + outro;
}

const dot = (c: string) => (
  <span style={{ width: 13, height: 13, borderRadius: "50%", background: c, display: "inline-block" }} />
);

const Step: React.FC<{ step: LiveStep; appear: number }> = ({ step, appear }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - appear, fps, config: { damping: 18, mass: 0.6 } });
  const accent = toneColor(step.tone);

  return (
    <div
      style={{
        opacity: s,
        transform: `translateY(${(1 - s) * 18}px)`,
        borderLeft: `3px solid ${accent}`,
        padding: "18px 24px",
        borderBottom: `1px solid ${COLORS.border}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 24 }}>{step.icon}</span>
        <span style={{ fontFamily: FONT_MONO, fontSize: 18, color: COLORS.muted, flex: 1 }}>
          {step.label}
        </span>
        <span
          style={{
            fontFamily: FONT_MONO,
            fontSize: 14,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: accent,
            border: `1px solid ${accent}55`,
            background: `${accent}1f`,
            borderRadius: 6,
            padding: "3px 9px",
          }}
        >
          {step.badge}
        </span>
        <span style={{ fontFamily: FONT_MONO, fontSize: 16, color: COLORS.faint }}>{step.time}</span>
      </div>
      <pre
        style={{
          margin: "14px 0 0",
          whiteSpace: "pre-wrap",
          fontFamily: FONT_MONO,
          fontSize: 18,
          lineHeight: 1.55,
          color: COLORS.text,
          background: COLORS.bg,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 10,
          padding: "16px 18px",
        }}
      >
        {step.message}
      </pre>
    </div>
  );
};

export const TerminalFlow: React.FC<{ demo: LiveDemo }> = ({ demo }) => {
  const { durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();
  const outroStart = durationInFrames - TERM_TIMING.outro;
  const noteIn = interpolate(
    frame,
    [TERM_TIMING.intro + demo.steps.length * TERM_TIMING.step, outroStart],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <Backdrop
      label="Démo en direct"
      title={demo.title}
      outroStart={outroStart}
      durationInFrames={durationInFrames}
      padding={56}
    >
      <AbsoluteFill style={{ justifyContent: "center" }}>
        <div
          style={{
            background: COLORS.surface,
            border: `1px solid ${COLORS.borderLight}`,
            borderRadius: 18,
            overflow: "hidden",
            boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
          }}
        >
          {/* chrome */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              padding: "16px 22px",
              background: COLORS.surface2,
              borderBottom: `1px solid ${COLORS.border}`,
            }}
          >
            {dot(COLORS.danger)}
            {dot(COLORS.primary)}
            {dot(COLORS.success)}
            <span style={{ fontFamily: FONT_MONO, fontSize: 16, color: COLORS.faint, marginLeft: 10 }}>
              {demo.id}
            </span>
          </div>
          {demo.steps.map((step, i) => (
            <Step key={i} step={step} appear={TERM_TIMING.intro + i * TERM_TIMING.step} />
          ))}
          {/* note */}
          <div style={{ padding: "16px 24px", opacity: noteIn }}>
            <p style={{ margin: 0, fontFamily: FONT_MONO, fontSize: 15, fontStyle: "italic", color: COLORS.faint }}>
              {demo.note}
            </p>
          </div>
        </div>
      </AbsoluteFill>
    </Backdrop>
  );
};
