vi.mock("@calcom/lib/next-seo.config", () => ({
  default: {
    headSeo: {
      siteName: "Null Chapter VITAP",
    },
    defaultNextSeo: {
      title: "Null Chapter VITAP",
      description: "Scheduling platform for Null Chapter VIT-AP cybersecurity community.",
    },
  },
  seoConfig: {
    headSeo: {
      siteName: "Null Chapter VITAP",
    },
  },
  buildSeoMeta: vi.fn().mockReturnValue({}),
}));
