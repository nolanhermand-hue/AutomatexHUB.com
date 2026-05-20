module.exports = {
  ci: {
    collect: {
      startServerCommand: "npx serve out -l 3000",
      startServerReadyPattern: "Accepting connections",
      startServerReadyTimeout: 60000,
      url: [
        "http://127.0.0.1:3000/",
        "http://127.0.0.1:3000/btp",
        "http://127.0.0.1:3000/immobilier",
        "http://127.0.0.1:3000/accompagnement",
      ],
      numberOfRuns: 2,
      settings: { formFactor: "mobile", throttlingMethod: "simulate" },
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.95 }],
        "categories:accessibility": ["error", { minScore: 1 }],
        "categories:best-practices": ["error", { minScore: 0.98 }],
        "categories:seo": ["error", { minScore: 1 }],
      },
    },
    upload: { target: "temporary-public-storage" },
  },
};
