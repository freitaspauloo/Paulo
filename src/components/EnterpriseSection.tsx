import Image from "next/image";
import { enterpriseWork } from "@/src/content/enterprise-work";
import { assetPath } from "@/src/lib/asset-path";

export function EnterpriseSection() {
  return (
    <section className="enterprise-section" aria-labelledby="enterprise-heading">
      <div className="enterprise-intro">
        <div className="enterprise-copy">
          <p className="micro-label">Previously at XIX3D</p>
          <h2 id="enterprise-heading" className="enterprise-headline">
            <span>{enterpriseWork.headline}</span>
            <span className="is-soft">{enterpriseWork.subheadline}</span>
          </h2>
          {enterpriseWork.body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          <ul className="enterprise-clients" aria-label="Clients">
            {enterpriseWork.clients.map((client) => (
              <li key={client}>{client}</li>
            ))}
          </ul>
        </div>
        <div className="enterprise-mosaic">
          <Image
            src={enterpriseWork.mosaic.src}
            alt={enterpriseWork.mosaic.alt}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 42vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="enterprise-highlights">
        {enterpriseWork.highlights.map((item) => (
          <article key={item.client} className="enterprise-card">
            <div className="enterprise-card-media">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 33vw"
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
    </section>
  );
}
