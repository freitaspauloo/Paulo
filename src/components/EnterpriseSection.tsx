import Image from "next/image";
import { enterpriseWork } from "@/src/content/enterprise-work";
import { assetPath } from "@/src/lib/asset-path";
import { Parallax } from "./motion/Parallax";
import { Reveal } from "./motion/Reveal";
import { SectionIntro } from "./motion/SectionIntro";

export function EnterpriseSection() {
  return (
    <section className="enterprise-section" aria-labelledby="enterprise-heading">
      <SectionIntro
        index="03"
        label="Fortune 500 work"
        aside="Previously at XIX3D"
      />

      <Reveal targets="[data-reveal]" className="enterprise-intro">
        <div className="enterprise-copy" data-reveal>
          <h2 id="enterprise-heading" className="enterprise-headline">
            <span>{enterpriseWork.headline}</span>
            <span className="is-soft">{enterpriseWork.subheadline}</span>
          </h2>
          {enterpriseWork.body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        <div data-reveal>
          <Parallax className="enterprise-mosaic" amount={5}>
            <Image
              src={assetPath(enterpriseWork.mosaic.src)}
              alt={enterpriseWork.mosaic.alt}
              fill
              unoptimized
              sizes="(max-width: 960px) 100vw, 42vw"
              style={{ objectFit: "cover" }}
            />
          </Parallax>
        </div>
      </Reveal>

      <Reveal>
        <ul className="logo-wall" aria-label="Clients">
          {enterpriseWork.clientLogos.map((client) => (
            <li key={client.name}>
              {client.logos.map((logo) => (
                <img key={logo.src} src={assetPath(logo.src)} alt={logo.alt} />
              ))}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal targets=".enterprise-card" stagger={0.12}>
        <div className="enterprise-highlights">
          {enterpriseWork.highlights.map((item) => (
            <article key={item.client} className="enterprise-card">
              <div className="enterprise-card-media">
                <Image
                  src={assetPath(item.image.src)}
                  alt={item.image.alt}
                  fill
                  unoptimized
                  sizes="(max-width: 960px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="enterprise-card-body">
                <div className="enterprise-card-logos">
                  {item.logos.map((logo) => (
                    <img key={logo.src} src={assetPath(logo.src)} alt={logo.alt} />
                  ))}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
