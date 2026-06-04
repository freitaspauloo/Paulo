"use client";

// 🧰 Component library — a broad set of shadcn components added in our
// "base-nova" style, all inheriting the Aligned AI design system (tokens).

import * as React from "react";
import { Bold, ChevronDown, Italic, Star, Underline } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

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

export default function LibraryPage() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-12 px-6 py-16">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          Component library
        </h1>
        <p className="text-muted-foreground">
          A broad set of shadcn components, all wearing the Aligned AI design
          system.
        </p>
      </header>

      <Section title="Accordion">
        <Accordion className="w-full max-w-md">
          <AccordionItem value="1">
            <AccordionTrigger>What is Aligned AI?</AccordionTrigger>
            <AccordionContent>
              A design system rebuilt from Figma into shadcn components.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionTrigger>Can I theme it?</AccordionTrigger>
            <AccordionContent>
              Yes — every component reads from the shared tokens.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      <Section title="Alert">
        <div className="space-y-3">
          <Alert>
            <Star />
            <AlertTitle>Heads up</AlertTitle>
            <AlertDescription>
              This alert uses the default Aligned styling.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>Something went wrong</AlertTitle>
            <AlertDescription>Your changes were not saved.</AlertDescription>
          </Alert>
        </div>
      </Section>

      <Section title="Alert dialog">
        <AlertDialog>
          <AlertDialogTrigger render={<Button variant="outline" />}>
            Delete project
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This permanently deletes the project and all of its data.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Section>

      <Section title="Avatar">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback>AL</AvatarFallback>
          </Avatar>
          <AvatarGroup>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>MK</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>RS</AvatarFallback>
            </Avatar>
          </AvatarGroup>
        </div>
      </Section>

      <Section title="Breadcrumb">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Projects</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Homepage</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Section>

      <Section title="Checkbox, radio, switch">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Checkbox id="terms" defaultChecked />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
          <RadioGroup defaultValue="standard" className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="standard" id="r1" />
              <Label htmlFor="r1">Standard</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="priority" id="r2" />
              <Label htmlFor="r2">Priority</Label>
            </div>
          </RadioGroup>
          <div className="flex items-center gap-2">
            <Switch id="notify" defaultChecked />
            <Label htmlFor="notify">Email notifications</Label>
          </div>
        </div>
      </Section>

      <Section title="Collapsible">
        <Collapsible className="w-full max-w-md space-y-2">
          <CollapsibleTrigger
            render={
              <Button variant="outline" className="w-full justify-between" />
            }
          >
            Toggle details
            <ChevronDown />
          </CollapsibleTrigger>
          <CollapsibleContent className="rounded-lg border p-3 text-sm text-muted-foreground">
            Hidden content revealed on toggle.
          </CollapsibleContent>
        </Collapsible>
      </Section>

      <Section title="Hover card & popover">
        <div className="flex flex-wrap gap-3">
          <HoverCard>
            <HoverCardTrigger render={<Button variant="link" />}>
              @aligned
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="text-sm">The Aligned AI design system.</p>
            </HoverCardContent>
          </HoverCard>

          <Popover>
            <PopoverTrigger render={<Button variant="outline" />}>
              Open popover
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>
                <PopoverTitle>Dimensions</PopoverTitle>
                <PopoverDescription>
                  Set the layout dimensions.
                </PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        </div>
      </Section>

      <Section title="Pagination">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Section>

      <Section title="Progress & slider">
        <div className="max-w-md space-y-6">
          <Progress value={62} />
          <Slider defaultValue={[40]} max={100} step={1} />
        </div>
      </Section>

      <Section title="Select">
        <Select defaultValue="apple">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Pick a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="cherry">Cherry</SelectItem>
          </SelectContent>
        </Select>
      </Section>

      <Section title="Toggle & toggle group">
        <div className="flex flex-wrap items-center gap-4">
          <Toggle aria-label="Star">
            <Star />
          </Toggle>
          <ToggleGroup defaultValue={["bold"]} className="gap-1">
            <ToggleGroupItem value="bold" aria-label="Bold">
              <Bold />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
              <Italic />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
              <Underline />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </Section>

      <Section title="Textarea">
        <Textarea
          placeholder="Type your message…"
          className="max-w-md"
          rows={3}
        />
      </Section>

      <Section title="Table">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Tasks</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Homepage hero</TableCell>
              <TableCell>In progress</TableCell>
              <TableCell className="text-right">2 / 4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Onboarding flow</TableCell>
              <TableCell>Done</TableCell>
              <TableCell className="text-right">8 / 8</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Section>

      <Section title="Aspect ratio">
        <div className="max-w-sm">
          <AspectRatio ratio={16 / 9}>
            <div className="size-full rounded-lg bg-gradient-to-br from-purple-bg to-cyan-bg" />
          </AspectRatio>
        </div>
      </Section>
    </main>
  );
}
