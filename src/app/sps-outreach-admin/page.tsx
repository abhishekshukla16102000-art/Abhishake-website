import type { Metadata } from "next";
import SpsOutreachAdmin from "@/components/SpsOutreachAdmin";

export const metadata: Metadata = {
  title: "SPS Nexus Tech Outreach Workspace",
  robots: { index: false, follow: false },
};

export default function SpsOutreachAdminPage() {
  return <SpsOutreachAdmin />;
}
