import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aligned AI — Enterprise",
  description:
    "Frontier-class AI, hosted in the US, at a fraction of the cost.",
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
