"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: React.ReactNode;
  className?: string;
  /** CSS selector for staggered targets inside the wrapper. Defaults to the wrapper itself. */
  targets?: string;
  y?: number;
  stagger?: number;
  delay?: number;
};

/**
 * Scroll-entry reveal. Animates *from* a hidden state so the visible baseline
 * is the DOM as rendered — if JS fails or the trigger never fires, content
 * stays visible. Respects prefers-reduced-motion via gsap.matchMedia.
 */
export function Reveal({
  children,
  className,
  targets,
  y = 24,
  stagger = 0.09,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const items = targets ? gsap.utils.toArray<Element>(targets, el) : [el];
        if (items.length === 0) return;
        gsap.from(items, {
          autoAlpha: 0,
          y,
          duration: 0.7,
          ease: "power3.out",
          stagger,
          delay,
          clearProps: "opacity,visibility,transform",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, [targets, y, stagger, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
