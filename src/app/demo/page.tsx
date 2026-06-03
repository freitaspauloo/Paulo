"use client";

// 🎨 Component demo page — lives at /demo
//
// This page shows every component you have, all on one screen, so you can see
// how they look and behave. Feel free to copy any block from here into your
// home page (src/app/page.tsx). Edit freely — save and the page updates.

import { toast } from "sonner";

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
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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

// A small helper so each section has a consistent heading.
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

export default function DemoPage() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-12 px-6 py-16">
      {/* Page header */}
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          Component demo
        </h1>
        <p className="text-muted-foreground">
          Everything you have installed, on one page. Copy any piece you like
          into your home page.
        </p>
      </header>

      {/* Buttons — try changing the `variant` to see different styles */}
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

      {/* Badges — little status pills */}
      <Section title="Badges">
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </Section>

      {/* Card with a form inside (Input + Label) */}
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

      {/* Tabs — switch between sections of content */}
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

      {/* Interactive bits: Dialog, Dropdown, and a Toast */}
      <Section title="Dialog, dropdown & toast">
        <div className="flex flex-wrap gap-3">
          {/* Dialog — a pop-up modal */}
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
              Open dialog
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogDescription>
                  This is an example dialog. Add any content you like here.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose render={<Button variant="outline" />}>
                  Cancel
                </DialogClose>
                <DialogClose render={<Button />}>Confirm</DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Dropdown menu — a click-to-open menu */}
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

          {/* Toast — a little pop-up notification (powered by Sonner) */}
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
