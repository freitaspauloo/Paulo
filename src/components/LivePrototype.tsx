import type { CasePrototype } from "@/src/content/types";

type Props = {
  prototype: CasePrototype;
};

export function LivePrototype({ prototype }: Props) {
  const embed = prototype.embed !== false;

  return (
    <section className="case-study__prototype" aria-labelledby="prototype-heading">
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
        <a href={prototype.url} target="_blank" rel="noopener noreferrer">
          {prototype.label} ↗
        </a>
      </p>
    </section>
  );
}
