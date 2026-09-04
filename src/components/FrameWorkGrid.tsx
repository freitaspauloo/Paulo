import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/src/lib/asset-path";
import { SwapLabel } from "@/src/components/SwapLabel";
import { Reveal } from "./motion/Reveal";

export type FrameWorkProject = {
  title: string;
  client: string;
  href: string;
  image: { src: string; alt: string };
};

type Props = {
  projects: FrameWorkProject[];
  label?: string;
};

export function FrameWorkGrid({ projects, label = "Selected work" }: Props) {
  return (
    <section className="frame-work" aria-label={label}>
      <Reveal targets=".frame-work__card" stagger={0.08}>
        <div className="frame-work__grid">
          {projects.map((project) => (
            <Link
              key={`${project.href}-${project.title}`}
              href={project.href}
              className="frame-work__card"
            >
              <div className="frame-work__media">
                <Image
                  src={assetPath(project.image.src)}
                  alt={project.image.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 960px) 100vw, 612px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="frame-work__meta">
                <span className="frame-work__title">
                  <SwapLabel>{project.title}</SwapLabel>
                </span>
                <span className="frame-work__role">{project.client}</span>
              </div>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
