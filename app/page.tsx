import { HubEntry } from "@/components/hub/HubEntry";
import { HUB_META } from "@/lib/hub-copy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: HUB_META.title,
  description: HUB_META.description,
  alternates: { canonical: "https://automatex-hub.com/" },
  openGraph: {
    title: HUB_META.title,
    description: HUB_META.description,
    url: "https://automatex-hub.com/",
  },
};

export default function HomePage() {
  return <HubEntry />;
}
