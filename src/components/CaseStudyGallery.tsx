import Image from "next/image";
import type { CaseGalleryBlock, CaseGallerySlot } from "@/src/content/types";
import { assetPath } from "@/src/lib/asset-path";

type Props = {
  blocks: CaseGalleryBlock[];
};

function GallerySlot({ item }: { item: CaseGallerySlot }) {
  const variant = item.variant ?? "desktop";

  if (item.src) {
    return (
      <figure
        className={`case-gallery__slot case-gallery__slot--${variant} case-gallery__slot--filled`}
      >
        <div className="case-gallery__media">
          <Image
            src={assetPath(item.src)}
            alt={item.alt ?? item.label}
            fill
            unoptimized
            sizes={
              variant === "mobile"
                ? "(max-width: 960px) 40vw, 240px"
                : "(max-width: 960px) 100vw, 720px"
            }
            style={{ objectFit: "cover" }}
          />
        </div>
        <figcaption className="case-gallery__caption">
          <span className="case-gallery__label">{item.label}</span>
          {item.caption ? (
            <span className="case-gallery__note">{item.caption}</span>
          ) : null}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure
      className={`case-gallery__slot case-gallery__slot--${variant} case-gallery__slot--placeholder`}
    >
      <div className="case-gallery__media" aria-hidden="true">
        {variant === "video" ? (
          <span className="case-gallery__play">▶</span>
        ) : null}
        <span className="case-gallery__placeholder-label">{item.label}</span>
      </div>
      <figcaption className="case-gallery__caption">
        <span className="case-gallery__label">{item.label}</span>
        {item.caption ? (
          <span className="case-gallery__note">{item.caption}</span>
        ) : (
          <span className="case-gallery__note">Asset coming soon</span>
        )}
      </figcaption>
    </figure>
  );
}

export function CaseStudyGallery({ blocks }: Props) {
  return (
    <section className="case-gallery" aria-label="Project visuals">
      {blocks.map((block) => (
        <div
          key={block.id}
          className={`case-gallery__block case-gallery__block--${block.layout}`}
        >
          {block.title ? (
            <h2 className="case-gallery__title">{block.title}</h2>
          ) : null}
          <div className="case-gallery__items">
            {block.items.map((item) => (
              <GallerySlot key={item.id} item={item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
