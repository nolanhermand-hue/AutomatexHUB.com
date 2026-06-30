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

const TrustPill: React.FC<{ text: string; start: number; frame: number; fps: number }> = ({
  text,
  start,
  frame,
  fps,
}) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 18px",
      borderRadius: 999,
      background: THEME.navbar,
      border: `1px solid ${THEME.border}`,
      fontSize: 16,
      color: THEME.text,
      opacity: fade(frame, start),
      transform: `translateY(${rise(frame, start, fps)}px)`,
    }}
  >
    <span style={{ color: THEME.success }}>✓</span>
    {text}
  </div>
);

/** Démo motion : transparence RGPD, flux UE, propriété des données (copy alignée /vos-donnees). */
export const VosDonnees: React.FC = () => {
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
        <Label color={THEME.accent}>AutomateX · Vos données</Label>
        <Label>Illustration · pas vos données</Label>
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
        {/* Beat 1 — Gmail */}
        <Sequence from={0} durationInFrames={68}>
          <Panel
            style={{
              width: "100%",
              maxWidth: 920,
              opacity: beatOpacity(0, 68),
              transform: `translateY(${rise(frame, 4, fps)}px)`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <LogoChip name="gmail" alt="Gmail" />
              <div>
                <div style={{ fontSize: 28, fontWeight: 800 }}>Vos mails restent dans Gmail</div>
                <Label>Votre boîte · votre compte Google</Label>
              </div>
            </div>
            <p style={{ fontSize: 18, color: THEME.text, lineHeight: 1.55, marginBottom: 18 }}>
              AutomateX lit et classe en transit. Rien n'est copié sur nos serveurs. Les emails
              professionnels ne sont pas stockés chez nous.
            </p>
            <TrustPill
              frame={frame}
              fps={fps}
              start={28}
              text="En transit · non stockés (cf. registre)"
            />
          </Panel>
        </Sequence>

        {/* Beat 2 — N8N Francfort */}
        <Sequence from={64} durationInFrames={68}>
          <Panel
            style={{
              width: "100%",
              maxWidth: 920,
              opacity: beatOpacity(64, 132),
              transform: `translateY(${rise(frame, 68, fps)}px)`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <LogoChip name="n8n" alt="N8N Cloud" />
              <div>
                <div style={{ fontSize: 28, fontWeight: 800 }}>Automatisations en Union européenne</div>
                <Label>N8N Cloud · Francfort · Allemagne</Label>
              </div>
            </div>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 18 }}>
              <LogoChip name="gmail" alt="Gmail" />
              <LogoChip name="telegram" alt="Telegram" />
              <LogoChip name="google-drive" alt="Google Drive" />
              <LogoChip name="mistral" alt="Mistral" />
            </div>
            <p style={{ fontSize: 18, color: THEME.text, lineHeight: 1.55 }}>
              Orchestration hébergée en UE. RGPD applicable. N8N ne revend pas vos données
              d'exécution. Espace isolé par client.
            </p>
          </Panel>
        </Sequence>

        {/* Beat 3 — Mistral Paris */}
        <Sequence from={128} durationInFrames={68}>
          <Panel
            style={{
              width: "100%",
              maxWidth: 920,
              opacity: beatOpacity(128, 196),
              transform: `translateY(${rise(frame, 132, fps)}px)`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <LogoChip name="mistral" alt="Mistral" />
              <div>
                <div style={{ fontSize: 28, fontWeight: 800 }}>Traitement linguistique à Paris</div>
                <Label>Mistral · France · UE</Label>
              </div>
            </div>
            <p style={{ fontSize: 18, color: THEME.text, lineHeight: 1.55, marginBottom: 16 }}>
              Entreprise française. Compréhension des emails et rédaction des réponses : hébergement
              en France (UE). Pas de transit États-Unis via cette prestation.
            </p>
            <div
              style={{
                padding: "18px 20px",
                borderRadius: 16,
                background: THEME.successSubtle,
                border: `1px solid ${THEME.success}`,
                opacity: fade(frame, 148),
              }}
            >
              <div style={{ fontSize: 17, fontWeight: 700, color: THEME.title }}>
                Vos contenus n'entraînent pas les modèles
              </div>
              <div style={{ marginTop: 8, fontSize: 16, color: THEME.text }}>
                Garanti contractuellement · DPA aligné RGPD
              </div>
            </div>
          </Panel>
        </Sequence>

        {/* Beat 4 — Site Netlify */}
        <Sequence from={192} durationInFrames={68}>
          <Panel
            style={{
              width: "100%",
              maxWidth: 920,
              opacity: beatOpacity(192, 260),
              transform: `translateY(${rise(frame, 196, fps)}px)`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: THEME.surfaceHi,
                  border: `1px solid ${THEME.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                }}
                aria-hidden
              >
                🌍
              </div>
              <div>
                <div style={{ fontSize: 28, fontWeight: 800 }}>Site vitrine · CDN Netlify</div>
                <Label>Pages statiques uniquement</Label>
              </div>
            </div>
            <p style={{ fontSize: 18, color: THEME.text, lineHeight: 1.55 }}>
              automatex-hub.com est un export HTML statique. Aucune donnée personnelle stockée sur
              l'hébergement du site. Les flux métiers passent par l'UE (Francfort · Paris).
            </p>
          </Panel>
        </Sequence>

        {/* Beat 5 — droits & engagements */}
        <Sequence from={256} durationInFrames={74}>
          <Panel
            style={{
              width: "100%",
              maxWidth: 920,
              opacity: beatOpacity(256, 330),
              transform: `translateY(${rise(frame, 260, fps)}px)`,
            }}
          >
            <div style={{ marginBottom: 18 }}>
              <div style={{ fontSize: 28, fontWeight: 800 }}>Vous gardez la main</div>
              <Label>Résiliation · effacement · aucune revente</Label>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <TrustPill frame={frame} fps={fps} start={268} text="Jamais revendu à des tiers" />
              <TrustPill frame={frame} fps={fps} start={278} text="Résiliation · 1 email suffit" />
              <TrustPill
                frame={frame}
                fps={fps}
                start={288}
                text="Effacement complet sous 7 jours"
              />
            </div>
            <p style={{ marginTop: 22, fontSize: 17, color: THEME.faint, lineHeight: 1.5 }}>
              Droits RGPD : accès, rectification, portabilité — nolan.hermand@automatex-hub.com
            </p>
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
            Vos données vous appartiennent.{" "}
            <span style={{ color: THEME.accent }}>On vous dit tout.</span>
          </div>
          <Label>automatex-hub · RGPD</Label>
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
