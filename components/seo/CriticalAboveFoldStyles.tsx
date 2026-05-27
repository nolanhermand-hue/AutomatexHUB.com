/** CSS critique hero / shell — peinture avant la feuille globale (LCP). */
export function CriticalAboveFoldStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
html{background-color:#080d1a;color-scheme:dark}
body{margin:0;min-height:100vh;background-color:#080d1a;color:#e8edf5;font-family:system-ui,-apple-system,sans-serif;-webkit-font-smoothing:antialiased}
.dark,html.dark{color-scheme:dark}
#hero,[id="hero"]{position:relative}
.font-heading{font-family:var(--font-inter),system-ui,sans-serif}
        `.trim(),
      }}
    />
  );
}
