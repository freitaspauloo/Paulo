/* eslint-disable @next/next/no-img-element */
import { BookOpen, Check, Lock, Mic, Users } from "lucide-react";

import {
  FloatCard,
  LayeredScene,
  PhotoPlate,
  StatusPill,
} from "@/components/landing/landing-primitives";

export function PrivateVisual() {
  return (
    <LayeredScene tint="bg-purple-bg">
      <PhotoPlate src="/enterprise/photo-private.png" alt="" className="opacity-95" />
      <StatusPill className="left-4 top-4 sm:left-8">
        <Lock className="size-3 text-purple" /> Secured
      </StatusPill>
      <StatusPill className="-left-2 top-1/3 hidden sm:inline-flex">
        <Lock className="size-3 text-purple" /> Shielded
      </StatusPill>
      <StatusPill className="bottom-16 right-6 sm:right-10">
        <Lock className="size-3 text-purple" /> Protected
      </StatusPill>
      <FloatCard className="right-2 top-6 w-[min(100%,16.5rem)] sm:right-8 sm:w-[18rem]">
        <div className="mb-2 flex items-center justify-between text-xs text-[#646464]">
          <span>New conversation</span>
          <span className="inline-flex items-center gap-1 text-purple">
            <Lock className="size-3" /> Private
          </span>
        </div>
        <p className="mb-3 rounded-[12px] bg-[#f9f9f9] p-2.5 text-xs leading-5 text-[#646464]">
          This conversation is private. Messages stay between you and Nova.
        </p>
        <div className="space-y-2 text-xs leading-5">
          <p className="ml-auto max-w-[90%] rounded-[12px] bg-[#f2f2f2] px-2.5 py-2">
            Can we keep this one just between us?
          </p>
          <p className="text-[#646464]">
            <span className="font-medium text-foreground">Nova · Agent</span> — Of
            course. This conversation is private.
          </p>
        </div>
      </FloatCard>
      <FloatCard className="bottom-6 left-2 w-[min(100%,17rem)] sm:left-8 sm:w-[19rem]">
        <p className="text-sm font-semibold">Your data, your call</p>
        <p className="mt-1 text-xs text-[#646464]">Decide what Nova keeps.</p>
        <ul className="mt-3 space-y-2.5 text-xs">
          {[
            { icon: Mic, title: "Remember preferences", on: true },
            { icon: BookOpen, title: "Use chats to improve models", on: false },
            { icon: Users, title: "Share with my team", on: false },
          ].map((row) => (
            <li key={row.title} className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 text-[#646464]">
                <row.icon className="size-3.5 shrink-0" />
                {row.title}
              </span>
              <span
                className={
                  row.on
                    ? "h-5 w-9 rounded-full bg-[#202020] p-0.5"
                    : "h-5 w-9 rounded-full bg-[#e8e8e8] p-0.5"
                }
              >
                <span
                  className={
                    row.on
                      ? "block size-4 translate-x-4 rounded-full bg-white"
                      : "block size-4 rounded-full bg-white"
                  }
                />
              </span>
            </li>
          ))}
        </ul>
      </FloatCard>
    </LayeredScene>
  );
}

export function AnswersVisual() {
  return (
    <LayeredScene tint="bg-cyan-bg">
      <PhotoPlate src="/enterprise/photo-answers.png" alt="" />
      <StatusPill className="left-6 top-6">
        <Check className="size-3 text-cyan" /> Reviewed
      </StatusPill>
      <StatusPill className="bottom-20 right-8">
        <Check className="size-3 text-cyan" /> Examined
      </StatusPill>
      <FloatCard className="right-4 top-10 hidden w-[17rem] sm:block">
        <p className="text-xs font-semibold text-cyan">Checking this answer</p>
        <p className="mt-2 text-[11px] text-[#646464]">2 of 3 claims verified</p>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#e8e8e8]">
          <div className="h-full w-2/3 rounded-full bg-cyan" />
        </div>
      </FloatCard>
    </LayeredScene>
  );
}

export function PowerfulVisual() {
  return (
    <LayeredScene tint="bg-mint-bg">
      <PhotoPlate src="/enterprise/photo-powerful.png" alt="" />
      <FloatCard className="right-3 top-8 w-[min(100%,15rem)] sm:right-10 sm:w-[16.5rem]">
        <p className="text-sm font-semibold">Saturday, an unhurried evening</p>
        <p className="text-xs text-[#646464]">Jun 7 · for you &amp; Sam</p>
      </FloatCard>
      <FloatCard className="bottom-8 left-3 w-[min(100%,14rem)] sm:left-10 sm:w-[15rem]">
        <p className="text-xs font-medium">Focus block — no meetings</p>
        <p className="text-[11px] text-[#646464]">14:00 · protected afternoon</p>
      </FloatCard>
    </LayeredScene>
  );
}

export function FamilyVisual() {
  return (
    <LayeredScene tint="bg-[#e9f4ec]">
      <PhotoPlate src="/enterprise/photo-safe.png" alt="" />
      <FloatCard className="left-3 top-6 w-[min(100%,11rem)] space-y-2 sm:left-8">
        {[
          ["You", "Full Access", "bg-mint-bg text-mint"],
          ["Nicole", "Limited Access", "bg-orange-bg text-orange"],
          ["Maya", "Safe Topics Only", "bg-brown-bg text-brown"],
        ].map(([name, badge, badgeClass]) => (
          <div
            key={name}
            className="flex items-center justify-between gap-2 rounded-[12px] bg-white/90 px-2.5 py-2 text-xs"
          >
            <span className="font-medium">{name}</span>
            <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${badgeClass}`}>
              {badge}
            </span>
          </div>
        ))}
      </FloatCard>
      <FloatCard className="bottom-8 left-1/2 w-[min(92%,18rem)] -translate-x-1/2 bg-white/90 backdrop-blur-md">
        <p className="text-sm font-semibold">Family member added</p>
        <p className="text-xs text-[#646464]">Maya has been added to your account</p>
      </FloatCard>
    </LayeredScene>
  );
}
