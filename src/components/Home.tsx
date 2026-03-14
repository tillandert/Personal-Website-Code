import { Link } from "react-router-dom";
import { homeHighlights, homeStats, profileLinks } from "../data/siteContent";

const resumeHref = `${import.meta.env.BASE_URL}TaylorTillanderResume.pdf`;

const Home = () => {
  return (
    <section className="intro-layout">
      <div className="fade-in-up">
        <div className="intro-panel fade-in-up">
          <p className="eyebrow">Software portfolio</p>
          <h2 className="intro-title">
            Taylor Tillander builds disciplined software with a runner&apos;s
            mindset
          </h2>

          <div className="button-row">
            <Link className="button button-secondary" to="/experience">
              View experience
            </Link>
            <Link className="button button-secondary" to="/projects">
              Explore projects
            </Link>
            <a
              className="button button-secondary"
              href={resumeHref}
              rel="noreferrer"
              target="_blank"
            >
              Open resume
            </a>
          </div>

          <div className="stat-row">
            {homeStats.map((stat) => (
              <div className="stat-pill" key={stat.label}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="link-strip fade-in-up">
          {profileLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                className="profile-link"
                href={link.href}
                key={link.label}
                rel="noreferrer"
                target="_blank"
              >
                <Icon className="profile-link-icon" />
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      <div className="home-grid">
        {homeHighlights.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              className="content-card interactive-card fade-in-up"
              key={item.title}
              to={item.path}
            >
              <div className="card-icon-wrap">
                <Icon className="card-icon" />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <span className="card-link">Open section</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
