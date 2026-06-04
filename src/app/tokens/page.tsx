// 🎨 Design tokens page — lives at /tokens
//
// These are the Aligned AI tokens pulled from Figma and wired into the theme
// (see src/app/globals.css). Every component automatically uses them.

import { Badge } from "@/components/ui/badge";

// Consistent section heading.
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function TokensPage() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-12 px-6 py-16">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Design tokens</h1>
        <p className="text-muted-foreground">
          The Aligned AI palette, status colors, and core theme — pulled from
          Figma. Looking for components?{" "}
          <a href="/components" className="font-medium text-foreground underline">
            See the components page →
          </a>
        </p>
      </header>

      {/* Core semantic colors that drive every component */}
      <Section title="Core colors">
        <div className="flex flex-wrap gap-3">
          {[
            { name: "Background", cls: "bg-background border" },
            { name: "Card", cls: "bg-card border" },
            { name: "Muted", cls: "bg-muted" },
            { name: "Primary", cls: "bg-primary text-primary-foreground" },
            { name: "Secondary", cls: "bg-secondary text-secondary-foreground" },
            { name: "Accent", cls: "bg-accent text-accent-foreground" },
          ].map((c) => (
            <div
              key={c.name}
              className={`flex h-16 w-28 items-center justify-center rounded-[var(--radius)] text-sm font-medium ${c.cls}`}
            >
              {c.name}
            </div>
          ))}
        </div>
      </Section>

      {/* Palette tokens */}
      <Section title="Palette tokens">
        <div className="flex flex-wrap gap-3">
          {[
            { name: "Purple", bg: "bg-purple-bg", text: "text-purple" },
            { name: "Pink", bg: "bg-pink-bg", text: "text-pink" },
            { name: "Cyan", bg: "bg-cyan-bg", text: "text-cyan" },
            { name: "Mint", bg: "bg-mint-bg", text: "text-mint" },
            { name: "Orange", bg: "bg-orange-bg", text: "text-orange" },
            { name: "Brown", bg: "bg-brown-bg", text: "text-brown" },
          ].map((c) => (
            <div
              key={c.name}
              className={`flex h-16 w-24 items-center justify-center rounded-[var(--radius)] text-sm font-medium ${c.bg} ${c.text}`}
            >
              {c.name}
            </div>
          ))}
        </div>
      </Section>

      {/* Status tokens */}
      <Section title="Status tokens">
        <div className="flex flex-wrap gap-3">
          <Badge className="bg-progress-subtle text-progress">Progress</Badge>
          <Badge className="bg-success-subtle text-success">Success</Badge>
          <Badge className="bg-warning-subtle text-warning">Warning</Badge>
          <Badge className="bg-destructive/10 text-destructive">Error</Badge>
        </div>
      </Section>

      {/* Radius + type */}
      <Section title="Radius & type">
        <div className="flex flex-wrap items-end gap-6">
          <div className="space-y-2">
            <div className="h-20 w-20 rounded-[var(--radius)] bg-secondary" />
            <p className="text-xs text-muted-foreground">radius 12px</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-semibold tracking-tight">Inter</p>
            <p className="text-sm text-muted-foreground">
              The Aligned AI typeface.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
