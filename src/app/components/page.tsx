"use client";

// 🧩 Components page — lives at /components
//
// Real, interactive shadcn components, all styled with the Aligned AI tokens.
// We start with the Pop-up (Dialog). Copy any block into your own pages.

import { toast } from "sonner";

import { CalendarDays, Globe, Hash, ListTodo, Sparkles } from "lucide-react";

import { AlignedPopup } from "@/components/aligned-popup";
import { Chip } from "@/components/aligned-chip";
import { Tag } from "@/components/aligned-tag";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

export default function ComponentsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-12 px-6 py-16">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Components</h1>
        <p className="text-muted-foreground">
          Interactive shadcn components, styled with your Aligned AI tokens.{" "}
          <a href="/tokens" className="font-medium text-foreground underline">
            See the design tokens →
          </a>
        </p>
      </header>

      {/* ⭐ Aligned AI Pop-up — rebuilt from Figma, in all three variants */}
      <Section title="Pop-up (from Figma)">
        <div className="flex flex-wrap items-start gap-6">
          <AlignedPopup
            variant="banner"
            onDismiss={() => toast("Dismissed")}
            onLearnMore={() => toast("Learn more clicked")}
          />
          <AlignedPopup
            variant="wrapped"
            onDismiss={() => toast("Dismissed")}
            onLearnMore={() => toast("Learn more clicked")}
          />
          <AlignedPopup
            variant="no-image"
            onDismiss={() => toast("Dismissed")}
            onLearnMore={() => toast("Learn more clicked")}
          />
        </div>
      </Section>

      {/* Chip — tappable suggestion pills */}
      <Section title="Chip (from Figma)">
        <div className="flex flex-wrap items-center gap-2">
          <Chip onClick={() => toast("Make an App")}>Make an App</Chip>
          <Chip icon={<Globe />} onClick={() => toast("Search the web")}>
            Search the web
          </Chip>
          <Chip
            icon={<CalendarDays />}
            selected
            onClick={() => toast("Schedule my week")}
          >
            Schedule my week
          </Chip>
          <Chip icon={<ListTodo />} disabled>
            Make a to-do list
          </Chip>
        </div>
      </Section>

      {/* Tag — labeled metadata pills */}
      <Section title="Tag (from Figma)">
        <div className="flex flex-wrap items-center gap-2">
          <Tag palette="purple" icon={<Hash />}>
            planning
          </Tag>
          <Tag palette="pink" icon={<Hash />}>
            code review
          </Tag>
          <Tag palette="cyan" icon={<Hash />}>
            research
          </Tag>
          <Tag palette="mint" icon={<Hash />}>
            writing
          </Tag>
          <Tag palette="orange" icon={<Sparkles />}>
            urgent
          </Tag>
          <Tag palette="default">backlog</Tag>
          <Tag palette="purple" onRemove={() => toast("Removed tag")}>
            removable
          </Tag>
        </div>
      </Section>

      {/* Buttons */}
      <Section title="Buttons">
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </Section>

      {/* Badges */}
      <Section title="Badges">
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </Section>

      {/* Card + form fields */}
      <Section title="Card + form fields">
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Create account</CardTitle>
            <CardDescription>
              A card containing labelled input fields.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Jane Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="jane@example.com" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Sign up</Button>
          </CardFooter>
        </Card>
      </Section>

      {/* Tabs */}
      <Section title="Tabs">
        <Tabs defaultValue="overview" className="max-w-md">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="pt-3 text-sm text-muted-foreground">
            This is the overview tab.
          </TabsContent>
          <TabsContent value="details" className="pt-3 text-sm text-muted-foreground">
            This is the details tab.
          </TabsContent>
          <TabsContent value="settings" className="pt-3 text-sm text-muted-foreground">
            This is the settings tab.
          </TabsContent>
        </Tabs>
      </Section>

      {/* Dropdown + toast */}
      <Section title="Dropdown & toast">
        <div className="flex flex-wrap gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
              Open menu
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="secondary"
            onClick={() =>
              toast("Saved!", {
                description: "Your changes have been saved.",
              })
            }
          >
            Show toast
          </Button>
        </div>
      </Section>
    </main>
  );
}
