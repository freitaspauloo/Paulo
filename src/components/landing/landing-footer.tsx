import { LandingFooterSocial } from "@/components/landing/landing-footer-social";
import { cn } from "@/lib/utils";

/** Matches joinaligned.ai dev landing footer (09-footer) */
const SITE = "https://joinaligned.ai";

const NAV_LINKS = [
  { label: "Enterprise", href: `${SITE}/org/enterprise` },
  { label: "Benchmarks", href: `${SITE}/documentation/benchmarks` },
  { label: "Pricing", href: `${SITE}/choose-plan` },
] as const;

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: `${SITE}/legal/privacy-policy` },
  { label: "Terms of Service", href: `${SITE}/legal/terms` },
] as const;

export function LandingFooter() {
  return (
    <footer
      data-dl="section"
      data-dl-footer="true"
      className="flex w-full justify-center bg-[#171717] py-9"
    >
      <div className="box-border w-full max-w-[1320px] px-6">
        <div className="flex w-full flex-col items-stretch gap-6">
          <div className="flex w-full flex-col items-stretch gap-[18px] min-[721px]:flex-row min-[721px]:items-center min-[721px]:justify-between min-[721px]:gap-6">
            <nav
              aria-label="Footer"
              className="flex w-full flex-wrap items-center justify-evenly gap-x-1.5 gap-y-1.5 min-[721px]:w-auto min-[721px]:flex-nowrap min-[721px]:justify-start min-[721px]:gap-x-9"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "whitespace-nowrap text-xs font-medium leading-5 text-white/[0.72]",
                    "transition-colors hover:text-white",
                    "min-[721px]:text-sm min-[721px]:leading-5",
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <LandingFooterSocial className="justify-center min-[721px]:justify-end" />
          </div>

          <div className="flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-2.5">
            <p className="m-0 min-w-0 flex-[1_1_auto] text-[13px] font-normal leading-[18px] text-white/[0.48]">
              © 2026 Aligned AI Inc. All rights reserved.
            </p>
            <div
              aria-label="Legal"
              className="flex shrink-0 flex-wrap items-center gap-4 min-[721px]:gap-5"
            >
              {LEGAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "whitespace-nowrap text-[13px] font-normal leading-[18px] text-white/[0.48]",
                    "underline decoration-1 underline-offset-[3px] transition-colors hover:text-white",
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
