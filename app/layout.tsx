import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { SiteFooter } from "@/src/components/SiteFooter";
import { site } from "@/src/content/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  metadataBase: new URL(site.url),
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <div className="page">
          <main className="page-main">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
