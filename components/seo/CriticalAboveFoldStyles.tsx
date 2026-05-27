/** CSS critique hero / shell — aligné sur globals avant peinture complète (CLS hub). */
export function CriticalAboveFoldStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
html{background-color:#080d1a;color-scheme:dark}
body{margin:0;min-height:100vh;background-color:#080d1a;color:#e8edf5;font-family:var(--font-inter),system-ui,-apple-system,sans-serif;font-size:15px;line-height:1.6;-webkit-font-smoothing:antialiased}
.dark,html.dark{color-scheme:dark}
.font-heading,.hub-entry-hero h1{font-family:var(--font-inter),system-ui,sans-serif}
.font-mono{font-family:var(--font-mono-jetbrains),ui-monospace,monospace}
.max-w-content{width:100%;max-width:1140px;margin-inline:auto}
.px-gutter{padding-inline:1.5rem}
header[class*="sticky"]{min-height:60px}
.hub-entry-hero{display:flex;flex-direction:column;justify-content:center;min-height:85svh;padding:6rem 0 4rem}
@media (min-width:768px){.hub-entry-hero{padding-top:7rem}}
.hub-entry-hero h1{max-width:56rem;font-weight:700;line-height:1.05;letter-spacing:-0.03em}
.badge{display:inline-flex;align-items:center;gap:5px;padding:3px 8px;font-size:10px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;border:1px solid #2a3a5c;border-radius:3px}
.badge-default{color:#94a3b8;background:transparent}
#hero,[id="hero"]{position:relative}
        `.trim(),
      }}
    />
  );
}
