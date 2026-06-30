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

const fade = (frame: number, start: number, dur = 14) =>
  interpolate(frame, [start, start + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

const fadeOut = (frame: number, start: number, dur = 12) =>
  interpolate(frame, [start, start + dur], [1, 0], {
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
      padding: 32,
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

const StatRow: React.FC<{ label: string; value: string; start: number; frame: number; fps: number }> = ({
  label,
  value,
  start,
  frame,
  fps,
}) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "14px 18px",
      marginBottom: 10,
      borderRadius: 14,
      background: THEME.navbar,
      border: `1px solid ${THEME.border}`,
      opacity: fade(frame, start),
      transform: `translateY(${rise(frame, start, fps)}px)`,
    }}
  >
    <span style={{ fontSize: 17, color: THEME.text }}>{label}</span>
    <span style={{ fontSize: 18, fontWeight: 700, color: THEME.success }}>{value}</span>
  </div>
);

/** Démo motion : installation, point mensuel, ajustements, ligne directe Flers. */
export const Accompagnement: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const beatOpacity = (from: number, until: number) => {
    const inO = fade(frame, from, 16);
    const outO = frame > until - 14 ? fadeOut(frame, until - 14, 14) : 1;
    return inO * outO;
  };

  return (
    <AbsoluteFill style={{ fontFamily: FONT_FAMILY, color: THEME.title }}>
      <Backdrop />

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
        <Label color={THEME.accent}>AutomateX · Accompagnement</Label>
        <Label>Données de test</Label>
      </div>

      <div
        style={{
          position: "absolute",
          top: 100,
          left: 56,
          right: 56,
          bottom: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Beat 1 — installation */}
        <Sequence from={0} durationInFrames={82}>
          <Panel
            style={{
              width: "100%",
              maxWidth: 920,
              opacity: beatOpacity(0, 82),
              transform: `translateY(${rise(frame, 4, fps)}px)`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <LogoChip name="n8n" alt="Scénarios" />
              <div>
                <div style={{ fontSize: 28, fontWeight: 800 }}>Nolan installe chez toi</div>
                <Label>Sur tes comptes · pas une plateforme fermée</Label>
              </div>
            </div>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <LogoChip name="gmail" alt="Gmail" />
              <LogoChip name="telegram" alt="Telegram" />
              <LogoChip name="google-calendar" alt="Agenda" />
              <LogoChip name="google-drive" alt="Drive" />
            </div>
            <p style={{ marginTop: 22, fontSize: 18, color: THEME.text, lineHeight: 1.5 }}>
              Cadrage à Flers ou à distance · premier scénario en service sous 48 h ouvrées.
            </p>
          </Panel>
        </Sequence>

        {/* Beat 2 — point mensuel */}
        <Sequence from={78} durationInFrames={82}>
          <Panel
            style={{
              width: "100%",
              maxWidth: 920,
              opacity: beatOpacity(78, 160),
              transform: `translateY(${rise(frame, 82, fps)}px)`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
              <LogoChip name="google-calendar" alt="Point mensuel" />
              <div>
                <div style={{ fontSize: 28, fontWeight: 800 }}>Point mensuel · 20 min</div>
                <Label>Nolan t'appelle · chiffres réels</Label>
              </div>
            </div>
            <StatRow frame={frame} fps={fps} start={92} label="Devis partis ce mois" value="14" />
            <StatRow frame={frame} fps={fps} start={104} label="Relances relancées" value="6" />
            <StatRow frame={frame} fps={fps} start={116} label="Appels manqués rattrapés" value="3" />
            <div
              style={{
                marginTop: 16,
                display: "flex",
                alignItems: "center",
                gap: 12,
                opacity: fade(frame, 128),
              }}
            >
              <LogoChip name="telegram" alt="Rapport" />
              <span style={{ fontSize: 16, color: THEME.text }}>
                Résumé envoyé sur Telegram après l'appel
              </span>
            </div>
          </Panel>
        </Sequence>

        {/* Beat 3 — ajustements */}
        <Sequence from={156} durationInFrames={82}>
          <Panel
            style={{
              width: "100%",
              maxWidth: 920,
              opacity: beatOpacity(156, 238),
              transform: `translateY(${rise(frame, 160, fps)}px)`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
              <LogoChip name="google-sheets" alt="Modèles" />
              <div>
                <div style={{ fontSize: 28, fontWeight: 800 }}>Ajustements sans surcoût</div>
                <Label>Nouveau métier · nouvelle zone</Label>
              </div>
            </div>
            <div
              style={{
                padding: "18px 20px",
                borderRadius: 16,
                background: THEME.successSubtle,
                border: `1px solid ${THEME.success}`,
                opacity: fade(frame, 172),
              }}
            >
              <div style={{ fontSize: 17, fontWeight: 700, color: THEME.title }}>
                Modèle de devis rénovation énergétique
              </div>
              <div style={{ marginTop: 8, fontSize: 16, color: THEME.text }}>
                Mis à jour en 48 h · pendant le point mensuel
              </div>
            </div>
            <p style={{ marginTop: 20, fontSize: 17, color: THEME.faint }}>
              Pas de rendez-vous supplémentaire · Nolan modifie pendant l'échange
            </p>
          </Panel>
        </Sequence>

        {/* Beat 4 — ligne directe */}
        <Sequence from={234} durationInFrames={96}>
          <Panel
            style={{
              width: "100%",
              maxWidth: 920,
              opacity: beatOpacity(234, 330),
              transform: `translateY(${rise(frame, 238, fps)}px)`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
              <LogoChip name="google-maps" alt="Flers" />
              <div>
                <div style={{ fontSize: 28, fontWeight: 800 }}>Ligne directe Nolan</div>
                <Label>Flers (61) · Orne</Label>
              </div>
            </div>
            <div
              style={{
                fontSize: 32,
                fontWeight: 800,
                letterSpacing: 1,
                color: THEME.accent,
                opacity: fade(frame, 248),
              }}
            >
              06 45 38 42 33
            </div>
            <div style={{ marginTop: 16, display: "flex", gap: 24, flexWrap: "wrap" }}>
              <div style={{ opacity: fade(frame, 258) }}>
                <Label>Pilote</Label>
                <div style={{ marginTop: 6, fontSize: 18, fontWeight: 600 }}>Réponse sous 4 h</div>
              </div>
              <div style={{ opacity: fade(frame, 268) }}>
                <Label>Déclic · Système</Label>
                <div style={{ marginTop: 6, fontSize: 18, fontWeight: 600 }}>Sous 24 h</div>
              </div>
            </div>
          </Panel>
        </Sequence>
      </div>

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
            Tu installes. <span style={{ color: THEME.accent }}>Nolan reste.</span>
          </div>
          <Label>automatex-hub · Flers (61)</Label>
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
