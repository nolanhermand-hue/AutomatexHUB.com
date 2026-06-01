# Remotion — Script 1 (mandataire · number-reveal)

Vidéo verticale **1080×1920**, **30 fps**, **25 s** (750 frames). Tout est piloté par `src/spec.json`.

## Installation

```bash
cd remotion
npm install
```

## Slots assets (`src/spec.json`)

```json
"assets": {
  "logoUrl": "",
  "voiceoverUrl": ""
}
```

- **logoUrl** : chemin sous `remotion/public/` (ex. `logo.png`) ou URL HTTPS.
- **voiceoverUrl** : ex. `voiceover.mp3` dans `public/`.

## Preview

```bash
npm run dev
```

Ouvre Remotion Studio → composition **MandataireLead** (sous-titres) ou **MandataireLeadNoSubs**.

## Rendu MP4

```bash
npm run render
```

Sortie : `remotion/out/mandataire-lead.mp4` (H.264).

## Réutilisation

Dupliquez ou éditez uniquement `src/spec.json` (textes, `heroNumber.to`, sous-titres, scènes). Le code React ne change pas.
