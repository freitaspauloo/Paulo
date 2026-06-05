"use client";

// 🤖 Agent page — shadcn-compatible AgentChat from Agent Elements (21st.dev).
// Interactive demo with local state (no API route). Wire to Vercel AI SDK later.

import * as React from "react";
import type { ChatStatus, UIMessage } from "ai";

import { AgentChat } from "@/components/agent-elements/agent-chat";

const STARTER_SUGGESTIONS = [
  {
    id: "summarize",
    label: "Summarize Aligned AI",
    value: "What is Aligned AI in one paragraph?",
  },
  {
    id: "hero",
    label: "Homepage hero ideas",
    value: "Give me three homepage hero headline options.",
  },
  {
    id: "safety",
    label: "Safety overview",
    value: "How does Aligned AI approach safety?",
  },
];

const WELCOME: UIMessage = {
  id: "welcome",
  role: "assistant",
  parts: [
    {
      type: "text",
      text: "Hi — I'm the **Agent** demo on your design system site. Ask anything below, or pick a suggestion. Replies are simulated locally until you connect a real model.",
    },
  ],
};

function makeId() {
  return globalThis.crypto?.randomUUID?.() ?? `msg-${Date.now()}`;
}

function userMessage(content: string): UIMessage {
  return {
    id: makeId(),
    role: "user",
    parts: [{ type: "text", text: content }],
  };
}

function assistantMessage(content: string): UIMessage {
  return {
    id: makeId(),
    role: "assistant",
    parts: [{ type: "text", text: content }],
  };
}

function demoReply(userText: string): string {
  const lower = userText.toLowerCase();
  if (lower.includes("aligned") || lower.includes("safety")) {
    return "Aligned AI routes each request to strong models, keeps conversations private by default, and builds safety into the product architecture—not as an afterthought. This page uses the **AgentChat** component from the shadcn-compatible Agent Elements registry.";
  }
  if (lower.includes("hero") || lower.includes("headline")) {
    return "Here are three directions:\n\n1. **AI that stays aligned with you** — privacy-first assistance for work and life.\n2. **The assistant you can trust** — no ads, no training on your chats by default.\n3. **Better answers, fewer repeats** — memory and routing that adapt to what you're doing.";
  }
  return `You said: “${userText}”\n\nThis is a **local demo** response. Connect \`useChat\` or \`createAgentChat\` from the \`ai\` package to stream from your API when you're ready.`;
}

export default function AgentPage() {
  const [messages, setMessages] = React.useState<UIMessage[]>([WELCOME]);
  const [status, setStatus] = React.useState<ChatStatus>("ready");
  const replyTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    return () => {
      if (replyTimer.current) clearTimeout(replyTimer.current);
    };
  }, []);

  const onSend = React.useCallback(
    (message: { role: "user"; content: string }) => {
      const text = message.content.trim();
      if (!text || status === "streaming" || status === "submitted") return;

      setMessages((prev) => [...prev, userMessage(text)]);
      setStatus("submitted");

      replyTimer.current = setTimeout(() => {
        setStatus("streaming");
        replyTimer.current = setTimeout(() => {
          setMessages((prev) => [...prev, assistantMessage(demoReply(text))]);
          setStatus("ready");
        }, 600);
      }, 400);
    },
    [status],
  );

  const onStop = React.useCallback(() => {
    if (replyTimer.current) clearTimeout(replyTimer.current);
    setStatus("ready");
  }, []);

  return (
    <main className="mx-auto w-full max-w-3xl space-y-6 px-6 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Agent</h1>
        <p className="text-muted-foreground">
          Built with{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
            AgentChat
          </code>{" "}
          from{" "}
          <a
            href="https://agent-elements.21st.dev/"
            className="underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            Agent Elements
          </a>{" "}
          (installable via the shadcn CLI).
        </p>
      </header>

      <div className="h-[min(72vh,720px)] overflow-hidden rounded-2xl border bg-card shadow-sm">
        <AgentChat
          className="h-full"
          messages={messages}
          status={status}
          onSend={onSend}
          onStop={onStop}
          suggestions={STARTER_SUGGESTIONS}
          emptyStatePosition="center"
          emptySuggestionsPlacement="both"
          showCopyToolbar
        />
      </div>
    </main>
  );
}
