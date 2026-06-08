import { LandingFooterSocial } from "@/components/landing/landing-footer-social";
import { landing } from "@/components/landing/landing-primitives";
import { cn } from "@/lib/utils";

const NAV_LINKS = ["Enterprise", "Benchmarks", "Pricing", "FAQ"] as const;

export function LandingFooter() {
  return (
    <footer className="bg-[#202020] px-6 py-14 text-white">
      <div className={cn(landing.page, "flex flex-col gap-10")}>
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/70 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>
          <LandingFooterSocial />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-white/60">
          <p>© 2026 Aligned AI Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="underline underline-offset-[3px] transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="underline underline-offset-[3px] transition-colors hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
