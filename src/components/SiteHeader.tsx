import Link from "next/link";
import { site } from "@/src/content/site";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Résumé" },
];

export function SiteHeader() {
  return (
    <header className="slide-top site-header">
      <nav className="site-nav" aria-label="Primary">
        {nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <a href={`mailto:${site.email}`} className="nav-cta">
          Contact
        </a>
      </nav>
    </header>
  );
}
