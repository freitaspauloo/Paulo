import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import { Toaster } from "@/components/ui/sonner";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

// Inter is the typeface used in the Aligned AI Figma design.
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paulo — shadcn/ui starter",
  description: "A shadcn/ui starter built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full antialiased">
        <SidebarProvider>
          {/* Left navigation sidebar — switches between pages */}
          <AppSidebar />
          <SidebarInset>
            {/* Small top bar holds the collapse/expand toggle */}
            <header className="flex h-12 items-center gap-2 border-b px-4">
              <SidebarTrigger />
            </header>
            {children}
          </SidebarInset>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
