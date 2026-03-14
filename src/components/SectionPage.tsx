import type { SectionContent } from '../data/siteContent';

type SectionPageProps = {
  section: SectionContent;
};

const SectionPage = ({ section }: SectionPageProps) => {
  return (
    <section className="section-page">
      <div className="section-header fade-in-up">
        <span className="section-eyebrow">{section.eyebrow}</span>
        <h2 className="section-title">{section.title}</h2>
        <p className="section-summary">{section.summary}</p>
        <p className="section-intro">{section.intro}</p>

        <div className="badge-row">
          {section.badges.map((badge) => (
            <span className="badge" key={badge}>
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="section-card-grid">
        {section.cards.map((card) => {
          const Icon = card.icon;

          return (
            <article className="content-card fade-in-up" key={card.title}>
              <div className="card-icon-wrap">
                <Icon className="card-icon" />
              </div>
              <div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>

              {card.links?.length ? (
                <div className="link-card-actions">
                  {card.links.map((resource) => (
                    <a
                      className="inline-link"
                      href={resource.href}
                      key={`${card.title}-${resource.label}`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {resource.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          );
        })}

        {section.links.map((link) => {
          const Icon = link.icon;

          return (
            <article className="link-card fade-in-up" key={link.label}>
              <div className="card-icon-wrap">
                <Icon className="card-icon" />
              </div>
              <div>
                <h3>{link.label}</h3>
                <p>{link.description}</p>
              </div>

              <div className="link-card-actions">
                <a
                  className="inline-link"
                  download={link.download}
                  href={link.href}
                  rel={link.download ? undefined : 'noreferrer'}
                  target={link.download ? undefined : '_blank'}
                >
                  {link.download ? 'Download file' : 'Open link'}
                </a>

                {link.qrSrc ? (
                  <details className="qr-details">
                    <summary>View QR code</summary>
                    <img alt={`${link.label} QR code`} className="inline-qr" src={link.qrSrc} />
                  </details>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>

      {section.resume ? (
        <article className="resume-card fade-in-up">
          <div className="resume-card-copy">
            <h3>{section.resume.title}</h3>
            <p>{section.resume.description}</p>
          </div>

          <div className="resume-actions">
            <a className="button button-primary" href={section.resume.href} rel="noreferrer" target="_blank">
              Open PDF
            </a>
            <a className="button button-secondary" download href={section.resume.href}>
              Download PDF
            </a>
          </div>
        </article>
      ) : null}

      {section.media.length > 0 ? (
        <div className="media-grid">
          {section.media.map((item) => (
            <article className="media-card fade-in-up" key={item.title}>
              <h3>{item.title}</h3>
              {item.kind === 'iframe' ? (
                <iframe allow="autoplay" className="media-frame" src={item.src} title={item.title} />
              ) : (
                <img alt={item.alt} className="media-image" src={item.src} />
              )}
              {item.caption ? <p className="media-caption">{item.caption}</p> : null}
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default SectionPage;