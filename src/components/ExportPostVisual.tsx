"use client";

import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import {
  POST_EXPORT_HEIGHT,
  POST_EXPORT_WIDTH,
  type SocialPost,
} from "@/src/content/social-posts";
import { PostVisual } from "@/src/components/PostVisual";

async function waitForAssets(root: HTMLElement) {
  await document.fonts.ready;
  await Promise.all(
    Array.from(root.querySelectorAll("img")).map(async (img) => {
      if (!img.complete) {
        await new Promise<void>((resolve) => {
          img.onload = () => resolve();
          img.onerror = () => resolve();
        });
      }
      if (img.decode) {
        try {
          await img.decode();
        } catch {
          /* ignore decode errors */
        }
      }
    }),
  );
}

async function waitForPaint() {
  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });
}

export function ExportPostVisual({ post }: { post: SocialPost }) {
  const previewRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "busy" | "done">("idle");

  async function exportPng() {
    const node = previewRef.current;
    if (!node || state === "busy") return;

    setState("busy");

    const prevWidth = node.style.width;
    const prevHeight = node.style.height;
    const prevAspectRatio = node.style.aspectRatio;

    node.style.width = `${POST_EXPORT_WIDTH}px`;
    node.style.height = `${POST_EXPORT_HEIGHT}px`;
    node.style.aspectRatio = "auto";
    node.classList.add("is-exporting");

    try {
      await waitForAssets(node);
      await waitForPaint();

      const dataUrl = await toPng(node, {
        width: POST_EXPORT_WIDTH,
        height: POST_EXPORT_HEIGHT,
        pixelRatio: 1,
        cacheBust: true,
        skipAutoScale: true,
        backgroundColor: "#ffffff",
      });

      const link = document.createElement("a");
      link.download = `${post.number}-${post.slug}.png`;
      link.href = dataUrl;
      link.click();
      setState("done");
      window.setTimeout(() => setState("idle"), 1600);
    } catch {
      setState("idle");
    } finally {
      node.classList.remove("is-exporting");
      node.style.width = prevWidth;
      node.style.height = prevHeight;
      node.style.aspectRatio = prevAspectRatio;
    }
  }

  const label =
    state === "busy" ? "Exporting…" : state === "done" ? "Exported" : "Export PNG";

  return (
    <div className="post-visual-export">
      <div
        className={`pv-frame pv-frame--preview pv-frame--${post.kind}`}
        ref={previewRef}
      >
        <PostVisual post={post} />
      </div>

      <button type="button" className="post-export" onClick={exportPng}>
        {label}
      </button>
    </div>
  );
}
