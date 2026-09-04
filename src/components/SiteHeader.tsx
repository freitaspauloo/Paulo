import Link from "next/link";
import { site } from "@/src/content/site";
import { SwapLabel } from "@/src/components/SwapLabel";

const nav = [
  { href: "/work", label: "work" },
  { href: "/work/frameline", label: "fun" },
  { href: "/about", label: "about" },
  { href: "/resume", label: "resume" },
];

function SparkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="21.5 11 7 7"
      aria-hidden
      className="frame-bar__spark"
    >
      <path
        d="M21.919 14.249L23.137 13.755C23.645 13.549 24.049 13.145 24.255 12.636L24.749 11.419C24.84 11.193 25.16 11.193 25.251 11.419L25.745 12.636C25.951 13.145 26.355 13.549 26.864 13.755L28.081 14.249C28.306 14.34 28.306 14.66 28.081 14.751L26.864 15.245C26.355 15.451 25.951 15.855 25.745 16.365L25.251 17.581C25.16 17.806 24.84 17.806 24.749 17.581L24.255 16.365C24.049 15.855 23.645 15.451 23.137 15.245L21.919 14.751C21.694 14.66 21.694 14.34 21.919 14.249Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="frame-bar frame-bar--header">
      <div className="frame-bar__inner">
        <Link href="/" className="frame-bar__brand">
          <span className="frame-bar__brand-name">{site.name.toUpperCase()}</span>
          <span className="frame-bar__brand-role">{site.title}</span>
        </Link>

        <nav className="frame-bar__nav" aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="frame-bar__link">
              <SwapLabel>{item.label}</SwapLabel>
            </Link>
          ))}
        </nav>

        <div className="frame-bar__end">
          <SparkIcon />
          <span className="frame-bar__link">paulo llm</span>
        </div>
      </div>
    </header>
  );
}
