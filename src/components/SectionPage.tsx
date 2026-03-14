import type { SectionContent } from '../data/siteContent';

type SectionPageProps = {
  section: SectionContent;
};

const SectionPage = ({ section }: SectionPageProps) => {
  return (
    <section className="section-page">
      <div className="section-hero fade-in-up">
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

      <div className="section-grid">
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
            </article>
          );
        })}
      </div>

      {section.links.length > 0 ? (
        <div className="link-grid">
          {section.links.map((link) => {
            const Icon = link.icon;

            return (
              <a className="link-card fade-in-up" href={link.href} key={link.label} rel="noreferrer" target="_blank">
                <div className="card-icon-wrap">
                  <Icon className="card-icon" />
                </div>
                <div>
                  <h3>{link.label}</h3>
                  <p>{link.description}</p>
                </div>
                <span className="inline-link">Open link</span>
              </a>
            );
          })}
        </div>
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
              <p className="media-caption">{item.caption}</p>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default SectionPage;