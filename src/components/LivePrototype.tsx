import Image from "next/image";
import type { CasePrototype } from "@/src/content/types";
import { assetPath } from "@/src/lib/asset-path";
import { BtnArrow } from "./BtnArrow";

type Props = {
  prototype: CasePrototype;
  cover?: { src: string; alt: string };
  variant?: "default" | "hero";
};

function prototypeHost(url: string) {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function LivePrototype({ prototype, cover, variant = "default" }: Props) {
  const embed = prototype.embed !== false;
  const isHero = variant === "hero";
  const host = prototypeHost(prototype.url);

  if (isHero && !embed) {
    return (
      <section
        className="case-study__prototype case-study__prototype--hero"
        aria-labelledby="prototype-heading"
      >
        <h2 id="prototype-heading" className="sr-only">
          Live prototype
        </h2>
        <a
          href={prototype.url}
          target="_blank"
          rel="noopener noreferrer"
          className="prototype-launch"
        >
          <div className="prototype-launch__chrome" aria-hidden="true">
            <span className="prototype-launch__dots">
              <span />
              <span />
              <span />
            </span>
            <span className="prototype-launch__url">{host}</span>
          </div>
          <div className="prototype-launch__preview">
            {cover ? (
              <Image
                src={assetPath(cover.src)}
                alt={cover.alt}
                fill
                unoptimized
                sizes="(max-width: 960px) 100vw, 1200px"
                style={{ objectFit: "cover" }}
              />
            ) : null}
            <span className="prototype-launch__cta">
              {prototype.label}
              <BtnArrow size={13} />
            </span>
          </div>
        </a>
      </section>
    );
  }

  return (
    <section
      className={`case-study__prototype${isHero ? " case-study__prototype--hero" : ""}`}
      aria-labelledby="prototype-heading"
    >
      <h2 id="prototype-heading">Live prototype</h2>
      {embed ? (
        <div className="prototype-embed">
          <iframe
            src={prototype.url}
            title={prototype.label}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      ) : null}
      <p className="prototype-open">
        <a
          href={prototype.url}
          target="_blank"
          rel="noopener noreferrer"
          className="arrow-link"
        >
          {prototype.label}
          <BtnArrow size={13} />
        </a>
      </p>
    </section>
  );
}
