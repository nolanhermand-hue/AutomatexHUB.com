import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { THEME } from "../theme";

/** Fond signature AutomateX : navy profond, grille fine, halo terracotta animé. */
export const Backdrop: React.FC = () => {
  const frame = useCurrentFrame();
  const glow = interpolate(frame % 180, [0, 90, 180], [0.25, 0.45, 0.25]);

  return (
    <AbsoluteFill style={{ backgroundColor: THEME.navbar }}>
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(${THEME.border} 1px, transparent 1px), linear-gradient(90deg, ${THEME.border} 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          opacity: 0.35,
        }}
      />
      <AbsoluteFill
        style={{
          background: `radial-gradient(60% 50% at 78% 18%, rgba(224,119,87,${glow}) 0%, transparent 60%)`,
        }}
      />
      <AbsoluteFill
        style={{
          background: `linear-gradient(180deg, transparent 55%, ${THEME.navbar} 100%)`,
        }}
      />
    </AbsoluteFill>
  );
};
