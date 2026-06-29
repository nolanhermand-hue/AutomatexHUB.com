import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Backdrop } from "../components/Backdrop";
import { THEME, FONT } from "../theme";
import { FONT_FAMILY } from "../fonts";
import type { CatalogAutomation, AutomationStep } from "../../../lib/automations-catalog";
import { resolveFlowNode } from "../../../lib/automation-flow-logos";

export const INTRO = 18;
export const PER_STEP = 38;
export const OUTRO = 34;

export const durationForAutomation = (a: CatalogAutomation): number =>
  INTRO + a.steps.length * PER_STEP + OUTRO;

const asset = (src: string) => staticFile(src.replace(/^\//, ""));

const ACCENT: Record<AutomationStep["type"], string> = {
  in: THEME.accent,
  system: THEME.faint,
  out: THEME.success,
  result: THEME.accent,
};

const TYPE_LABEL: Record<AutomationStep["type"], string> = {
  in: "Déclencheur",
  system: "Traitement",
  out: "Action",
  result: "Résultat",
};

const fade = (frame: number, start: number, dur = 12) =>
  interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

const NodeChip: React.FC<{ label: string; icon: string }> = ({ label, icon }) => {
  const visual = resolveFlowNode(label, icon);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, width: 96 }}>
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: 16,
          background: THEME.surface,
          border: `1px solid ${THEME.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {visual.kind === "logo" ? (
          <Img src={asset(visual.src)} alt={visual.alt} style={{ width: 34, height: 34 }} />
        ) : (
          <span style={{ fontFamily: FONT.mono, fontSize: 18, fontWeight: 700, color: THEME.text }}>
            {visual.initials}
          </span>
        )}
      </div>
      <span
        style={{
          fontFamily: FONT.mono,
          fontSize: 13,
          color: THEME.faint,
          maxWidth: 96,
          textAlign: "center",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    </div>
  );
};

export const AutomationFlow: React.FC<{ automation: CatalogAutomation }> = ({ automation }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ fontFamily: FONT_FAMILY, color: THEME.title }}>
      <Backdrop />

      {/* En-tête */}
      <div style={{ position: "absolute", top: 56, left: 64, right: 64 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 14,
            opacity: fade(frame, 0),
          }}
        >
          <span
            style={{
              fontFamily: FONT.mono,
              fontSize: 16,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: THEME.accent,
            }}
          >
            {automation.category}
          </span>
          <span style={{ fontFamily: FONT.mono, fontSize: 14, letterSpacing: 2, color: THEME.faint }}>
            AUTOMATEX · DÉMO
          </span>
        </div>
        <div style={{ fontSize: 38, fontWeight: 800, letterSpacing: -0.5, opacity: fade(frame, 4), maxWidth: 1000 }}>
          {automation.title}
        </div>
      </div>

      {/* Étapes */}
      <div
        style={{
          position: "absolute",
          top: 190,
          left: 64,
          right: 64,
          bottom: 64,
          display: "flex",
          flexDirection: "column",
          gap: 14,
          justifyContent: "center",
        }}
      >
        {automation.steps.map((step, i) => {
          const start = INTRO + i * PER_STEP;
          const s = spring({ frame: frame - start, fps, config: { damping: 200 } });
          const y = interpolate(s, [0, 1], [22, 0]);
          const showTo = Boolean(step.to?.trim());
          const accent = ACCENT[step.type];

          return (
            <div
              key={`${step.from}-${i}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 22,
                opacity: fade(frame, start),
                transform: `translateY(${y}px)`,
                background: THEME.surface,
                border: `1px solid ${THEME.border}`,
                borderLeft: `4px solid ${accent}`,
                borderRadius: 18,
                padding: "18px 24px",
              }}
            >
              <NodeChip label={step.from} icon={step.icon} />
              {showTo ? (
                <>
                  <span style={{ fontSize: 30, color: accent, lineHeight: 1 }}>→</span>
                  <NodeChip label={step.to} icon={step.icon} />
                </>
              ) : null}

              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: FONT.mono,
                    fontSize: 13,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    color: accent,
                    marginBottom: 6,
                  }}
                >
                  {TYPE_LABEL[step.type]}
                </div>
                <div
                  style={{
                    fontSize: 19,
                    lineHeight: 1.4,
                    color: THEME.text,
                    whiteSpace: "pre-wrap",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {step.message}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Impact / signature */}
      {automation.impact ? (
        <div
          style={{
            position: "absolute",
            bottom: 26,
            left: 64,
            right: 64,
            fontFamily: FONT.mono,
            fontSize: 18,
            color: THEME.accent,
            opacity: fade(frame, INTRO + automation.steps.length * PER_STEP),
          }}
        >
          → {automation.impact}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
