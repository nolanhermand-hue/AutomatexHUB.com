module.exports = {
  ci: {
    collect: {
      startServerCommand: "npx serve out -l 3000",
      startServerReadyPattern: "Accepting connections",
      startServerReadyTimeout: 60000,
      url: [
        "http://127.0.0.1:3000/",
        "http://127.0.0.1:3000/immobilier",
        "http://127.0.0.1:3000/btp",
        "http://127.0.0.1:3000/accompagnement",
        "http://127.0.0.1:3000/automatisations",
        "http://127.0.0.1:3000/a-propos",
      ],
      numberOfRuns: 2,
      settings: {
        formFactor: "mobile",
        throttlingMethod: "simulate",
        screenEmulation: {
          mobile: true,
          width: 375,
          height: 812,
          deviceScaleFactor: 2,
        },
      },
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.9 }],
        "categories:accessibility": ["error", { minScore: 1 }],
        "categories:best-practices": ["error", { minScore: 0.98 }],
        "categories:seo": ["error", { minScore: 1 }],
        "largest-contentful-paint": ["warn", { maxNumericValue: 3000 }],
        "cumulative-layout-shift": ["error", { maxNumericValue: 0.1 }],
        "total-blocking-time": ["warn", { maxNumericValue: 300 }],
      },
    },
    upload: { target: "temporary-public-storage" },
  },
};
