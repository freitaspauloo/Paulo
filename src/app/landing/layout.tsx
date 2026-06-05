import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aligned AI — Landing (Figma rebuild)",
  description:
    "Faithful Aligned-2 landing page rebuild with layered sections and design tokens.",
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
