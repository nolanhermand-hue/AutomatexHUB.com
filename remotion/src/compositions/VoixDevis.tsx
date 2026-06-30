import React from "react";
import {
  AbsoluteFill,
  Img,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Backdrop } from "../components/Backdrop";
import { THEME, FONT } from "../theme";
import { FONT_FAMILY } from "../fonts";

const logo = (name: string) => staticFile(`assets/integrations/${name}.svg`);

const DICTATION = [
  "Pose carrelage 40 m²",
  "Salle de bain — colle incluse",
  "2 jours de pose · joint époxy",
];

const QUOTE_LINES: Array<{ label: string; price: string }> = [
  { label: "Carrelage 40 m²", price: "1 600 €" },
  { label: "Joint époxy", price: "240 €" },
  { label: "Pose (2 j)", price: "560 €" },
];

const fade = (frame: number, start: number, dur = 14) =>
  interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

const rise = (frame: number, start: number, fps: number) => {
  const s = spring({ frame: frame - start, fps, config: { damping: 200 } });
  return interpolate(s, [0, 1], [18, 0]);
};

const LogoChip: React.FC<{ name: string; alt: string }> = ({ name, alt }) => (
  <div
    style={{
      width: 56,
      height: 56,
      borderRadius: 14,
      background: THEME.surface,
      border: `1px solid ${THEME.border}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Img src={logo(name)} alt={alt} style={{ width: 34, height: 34 }} />
  </div>
);

const Panel: React.FC<{
  style?: React.CSSProperties;
  children: React.ReactNode;
}> = ({ style, children }) => (
  <div
    style={{
      background: THEME.surface,
      border: `1px solid ${THEME.border}`,
      borderRadius: 24,
      padding: 28,
      boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
      ...style,
    }}
  >
    {children}
  </div>
);

const Label: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color = THEME.faint,
}) => (
  <span
    style={{
      fontFamily: FONT.mono,
      fontSize: 16,
      letterSpacing: 2,
      textTransform: "uppercase",
      color,
    }}
  >
    {children}
  </span>
);

export const VoixDevis: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Forme d'onde animée (dictée vocale)
  const bars = Array.from({ length: 28 });

  return (
    <AbsoluteFill style={{ fontFamily: FONT_FAMILY, color: THEME.title }}>
      <Backdrop />

      {/* En-tête */}
      <div
        style={{
          position: "absolute",
          top: 44,
          left: 56,
          right: 56,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Label color={THEME.accent}>AutomateX · Démo</Label>
        <Label>Données de test</Label>
      </div>

      <div
        style={{
          position: "absolute",
          top: 96,
          left: 48,
          right: 48,
          bottom: 96,
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
          gap: 20,
          zIndex: 1,
        }}
      >
        {/* Panneau gauche — dictée vocale */}
        <Sequence from={6}>
          <Panel
            style={{
              flex: 1,
              minWidth: 0,
              maxHeight: "100%",
              overflow: "hidden",
              opacity: fade(frame, 6),
              transform: `translateY(${rise(frame, 6, fps)}px)`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
              <LogoChip name="twilio" alt="Appel / voix" />
              <div>
                <div style={{ fontSize: 22, fontWeight: 700 }}>Note vocale</div>
                <Label>Entre deux chantiers</Label>
              </div>
            </div>

            {/* Waveform */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                height: 48,
                marginBottom: 16,
              }}
            >
              {bars.map((_, i) => {
                const h = 14 + Math.abs(Math.sin((frame * 0.18) + i * 0.6)) * 46;
                return (
                  <div
                    key={i}
                    style={{
                      width: 7,
                      height: h,
                      borderRadius: 4,
                      background: i % 4 === 0 ? THEME.accent : THEME.borderHi,
                    }}
                  />
                );
              })}
            </div>

            {DICTATION.map((line, i) => {
              const start = 24 + i * 22;
              return (
                <div
                  key={line}
                  style={{
                    opacity: fade(frame, start),
                    transform: `translateY(${rise(frame, start, fps)}px)`,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px 16px",
                    marginBottom: 10,
                    borderRadius: 14,
                    background: THEME.navbar,
                    border: `1px solid ${THEME.border}`,
                    fontSize: 17,
                    color: THEME.text,
                  }}
                >
                  <span style={{ color: THEME.accent }}>“</span>
                  {line}
                </div>
              );
            })}
          </Panel>
        </Sequence>

        {/* Connecteur central — mise en forme (Mistral) */}
        <Sequence from={92}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              flexShrink: 0,
              width: 72,
              opacity: fade(frame, 92),
            }}
          >
            <LogoChip name="mistral" alt="Mise en forme" />
            <Label color={THEME.accent}>Mise en forme</Label>
            <div style={{ fontSize: 32, color: THEME.accent, lineHeight: 1 }}>→</div>
          </div>
        </Sequence>

        {/* Panneau droit — devis PDF */}
        <Sequence from={150}>
          <Panel
            style={{
              flex: 1,
              minWidth: 0,
              maxHeight: "100%",
              overflow: "hidden",
              opacity: fade(frame, 150),
              transform: `translateY(${rise(frame, 150, fps)}px)`,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 22, fontWeight: 700 }}>Devis · PDF</div>
                <Label>Prêt à envoyer</Label>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <LogoChip name="google-drive" alt="Google Drive" />
                <LogoChip name="gmail" alt="Gmail" />
              </div>
            </div>

            {QUOTE_LINES.map((row, i) => {
              const start = 168 + i * 20;
              return (
                <div
                  key={row.label}
                  style={{
                    opacity: fade(frame, start),
                    transform: `translateY(${rise(frame, start, fps)}px)`,
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "12px 4px",
                    borderBottom: `1px solid ${THEME.border}`,
                    fontSize: 17,
                    color: THEME.text,
                  }}
                >
                  <span>{row.label}</span>
                  <span style={{ fontFamily: FONT.mono, color: THEME.title }}>{row.price}</span>
                </div>
              );
            })}

            <div
              style={{
                opacity: fade(frame, 236),
                transform: `translateY(${rise(frame, 236, fps)}px)`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 18,
                padding: "16px 18px",
                borderRadius: 14,
                background: THEME.accentSubtle,
                border: `1px solid ${THEME.accent}`,
              }}
            >
              <span style={{ fontSize: 20, fontWeight: 700 }}>Total TTC</span>
              <span style={{ fontFamily: FONT.mono, fontSize: 26, fontWeight: 700, color: THEME.accent }}>
                2 880 €
              </span>
            </div>

            <div
              style={{
                opacity: fade(frame, 262),
                marginTop: 18,
                display: "flex",
                alignItems: "center",
                gap: 10,
                color: THEME.success,
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 999,
                  background: THEME.successSubtle,
                  border: `1px solid ${THEME.success}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ✓
              </span>
              Devis envoyé · accepté en 18 min
            </div>
          </Panel>
        </Sequence>
      </div>

      {/* Titre / signature bas */}
      <Sequence from={278}>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 2,
            padding: "20px 48px 28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 24,
            background: `linear-gradient(to top, ${THEME.body} 65%, transparent)`,
            opacity: fade(frame, 278),
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: -0.5, lineHeight: 1.15 }}>
            Tu dictes. <span style={{ color: THEME.accent }}>Le devis part.</span>
          </div>
          <Label>automatex-hub · Flers (61)</Label>
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
