import { site } from "@/src/content/site";

export function SiteFooter() {
  return (
    <footer className="slide-footer site-footer">
      <span>{site.builtWith}</span>
      <span>
        <a href={site.linkedin}>LinkedIn</a>
        {" · "}
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </span>
    </footer>
  );
}
