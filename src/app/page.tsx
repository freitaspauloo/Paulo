import Link from "next/link";

import { Button } from "@/components/ui/button";

// 👋 This is your home page. Everything between the <main> tags below is what
// shows up on screen. Edit the text, swap the buttons, or paste in new shadcn
// components here. Save the file and the page updates automatically.
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
      {/* The big heading — change this text to whatever you like */}
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Hello, shadcn 👋
      </h1>

      {/* A short subtitle */}
      <p className="max-w-md text-muted-foreground">
        Your blank canvas is ready. Edit{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
          src/app/page.tsx
        </code>{" "}
        to start designing.
      </p>

      {/* Two shadcn buttons. Try changing variant to "outline", "secondary",
          "ghost", or "destructive" to see different styles. */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button>Primary button</Button>
        <Button variant="outline">Outline button</Button>
      </div>

      {/* Link to the component demo page (src/app/demo/page.tsx) */}
      <Button variant="link" render={<Link href="/demo" />}>
        See all components →
      </Button>
    </main>
  );
}
