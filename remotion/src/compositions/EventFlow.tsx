import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, toneColor } from "../theme";
import { FONT_BODY, FONT_MONO } from "../fonts";
import { Backdrop } from "../components/Backdrop";
import type { EventDemo } from "../lib/eventDemos";

export const FLOW_TIMING = { intro: 6, step: 24, hold: 50, outro: 22 };

export function eventFlowDuration(events: number): number {
  const { intro, step, hold, outro } = FLOW_TIMING;
  return intro + events * step + hold + outro;
}

const EventCard: React.FC<{ event: EventDemo["events"][number]; appear: number; last: boolean }> = ({
  event,
  appear,
  last,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - appear, fps, config: { damping: 16, mass: 0.7 } });
  const accent = toneColor(event.tone);

  return (
    <div style={{ display: "flex", gap: 22, opacity: s, transform: `translateY(${(1 - s) * 22}px)` }}>
      {/* rail + node */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 56 }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 16,
            background: COLORS.surface2,
            border: `1px solid ${event.result ? COLORS.primary : COLORS.borderLight}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 28,
            boxShadow: event.result ? `0 0 24px ${COLORS.primary}55` : "none",
          }}
        >
          {event.icon}
        </div>
        {!last && (
          <div
            style={{
              width: 2,
              flex: 1,
              marginTop: 6,
              background: `linear-gradient(${accent}, ${COLORS.border})`,
              opacity: 0.7,
            }}
          />
        )}
      </div>
      {/* carte */}
      <div
        style={{
          flex: 1,
          background: event.result ? `${COLORS.primary}14` : COLORS.surface,
          border: `1px solid ${event.result ? COLORS.primary + "66" : COLORS.border}`,
          borderRadius: 14,
          padding: "18px 22px",
          marginBottom: 18,
        }}
      >
        {event.lines.map((line, i) => (
          <p
            key={i}
            style={{
              margin: i === 0 ? 0 : "8px 0 0",
              fontSize: line.sub ? 19 : 23,
              fontWeight: line.sub ? 400 : 600,
              lineHeight: 1.4,
              color: line.tone ? toneColor(line.tone) : line.sub ? COLORS.muted : COLORS.text,
              fontFamily: line.sub ? FONT_MONO : FONT_BODY,
            }}
          >
            {line.text}
          </p>
        ))}
        {event.roi && <RoiBadge appear={appear} value={event.roi} />}
      </div>
    </div>
  );
};

const RoiBadge: React.FC<{ appear: number; value: string }> = ({ appear, value }) => {
  const frame = useCurrentFrame();
  const glow = 0.5 + 0.5 * Math.sin((frame - appear) / 6);
  return (
    <p
      style={{
        margin: "12px 0 0",
        fontSize: 30,
        fontWeight: 700,
        color: COLORS.primary,
        textShadow: `0 0 ${10 + glow * 14}px ${COLORS.primary}aa`,
      }}
    >
      {value}
    </p>
  );
};

export const EventFlow: React.FC<{ demo: EventDemo }> = ({ demo }) => {
  const { durationInFrames } = useVideoConfig();
  const outroStart = durationInFrames - FLOW_TIMING.outro;

  return (
    <Backdrop
      label={demo.label}
      title={demo.title}
      outroStart={outroStart}
      durationInFrames={durationInFrames}
    >
      <AbsoluteFill style={{ justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {demo.events.map((event, i) => (
            <EventCard
              key={i}
              event={event}
              appear={FLOW_TIMING.intro + i * FLOW_TIMING.step}
              last={i === demo.events.length - 1}
            />
          ))}
        </div>
      </AbsoluteFill>
    </Backdrop>
  );
};
