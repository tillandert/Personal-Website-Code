import { NavLink, Outlet } from 'react-router-dom';
import { navItems, profileLinks } from '../data/siteContent';

const AppLayout = () => {
  return (
    <div className="app-shell">
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />

      <div className="site-frame">
        <header className="site-header fade-in-up">
          <div className="brand-lockup">
            <span className="brand-kicker">Taylor Tillander</span>
            <h1 className="brand-title">Software engineer with product discipline and range.</h1>
            <p className="brand-subtitle">
              Built to present work clearly, deploy cleanly on GitHub Pages, and grow with new projects, writing, and a hosted resume.
            </p>
          </div>

          <div className="header-actions">
            {profileLinks.slice(0, 2).map((link) => (
              <a className="button button-ghost" href={link.href} key={link.label} rel="noreferrer" target="_blank">
                {link.label}
              </a>
            ))}
          </div>
        </header>

        <nav aria-label="Primary navigation" className="site-nav fade-in-up">
          {navItems.map((item) => (
            <NavLink
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              end={item.path === '/'}
              key={item.path}
              to={item.path}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <main className="site-main">
          <Outlet />
        </main>

        <footer className="site-footer">
          Hosted-ready for GitHub Pages. Add `public/resume.pdf` when you want a first-party resume link instead of an external document host.
        </footer>
      </div>
    </div>
  );
};

export default AppLayout;