import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS } from "../theme";
import { FONT_BODY, FONT_MONO } from "../fonts";

/** Fond commun : navy + grille fine + lueur terracotta + en-tête marque. */
export const Backdrop: React.FC<{
  label: string;
  title: string;
  children: React.ReactNode;
  outroStart: number;
  durationInFrames: number;
  padding?: number;
}> = ({ label, title, children, outroStart, durationInFrames, padding = 64 }) => {
  const frame = useCurrentFrame();
  const headerIn = interpolate(frame, [2, 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const outro = interpolate(frame, [outroStart, durationInFrames - 1], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, opacity: outro }}>
      {/* grille */}
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(${COLORS.border} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.border} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          opacity: 0.5,
        }}
      />
      {/* lueur haute */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(80% 50% at 50% -8%, ${COLORS.primary}26 0%, transparent 60%)`,
        }}
      />
      <AbsoluteFill
        style={{
          padding,
          display: "flex",
          flexDirection: "column",
          fontFamily: FONT_BODY,
        }}
      >
        <div style={{ opacity: headerIn, transform: `translateY(${(1 - headerIn) * -8}px)` }}>
          <div
            style={{
              fontFamily: FONT_MONO,
              fontSize: 18,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: COLORS.primary,
              fontWeight: 600,
            }}
          >
            {label}
          </div>
          <div
            style={{
              marginTop: 10,
              fontSize: 38,
              lineHeight: 1.1,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: COLORS.text,
            }}
          >
            {title}
          </div>
        </div>
        <div style={{ flex: 1, position: "relative", marginTop: 36 }}>{children}</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontFamily: FONT_MONO,
            fontSize: 16,
            color: COLORS.faint,
            opacity: headerIn,
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 3,
              background: COLORS.primary,
              boxShadow: `0 0 10px ${COLORS.primary}`,
            }}
          />
          AutomateX — exemple, données de test
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
