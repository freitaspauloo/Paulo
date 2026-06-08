import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aligned AI — Enterprise (v4)",
  description:
    "Frontier-class AI, at a fraction of the cost — Evernote structure with lime hero.",
};

export default function LandingV4Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
