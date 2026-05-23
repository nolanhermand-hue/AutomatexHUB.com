import { BTP_LOCAL_PAGES, type BtpLocalPageDef } from "@/lib/btp-copy";
import type { Metadata } from "next";

export function getBtpLocalPage(path: string): BtpLocalPageDef | undefined {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return BTP_LOCAL_PAGES.find((p) => p.path === normalized);
}

export function btpLocalMetadata(page: BtpLocalPageDef): Metadata {
  const url = `https://automatex-hub.com${page.path}`;
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url,
      type: "website",
      locale: "fr_FR",
    },
  };
}
