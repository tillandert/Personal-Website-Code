import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { NavLink, Outlet } from 'react-router-dom';
import { navItems, profileLinks } from '../data/siteContent';

type ThemeMode = 'light' | 'dark';

const getInitialTheme = (): ThemeMode => {
  const storedTheme = window.localStorage.getItem('theme-mode');

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const AppLayout = () => {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme-mode', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  const ThemeIcon = theme === 'light' ? FiMoon : FiSun;

  return (
    <div className="app-shell">
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />

      <div className="site-frame">
        <header className="site-header fade-in-up">
          <div className="brand-lockup">
            <h1 className="brand-name">Taylor Tillander</h1>
            <p className="brand-title">Software Engineer from Tallahassee, FL</p>
          </div>

          <div className="header-actions">
            <button aria-label="Toggle dark mode" className="button button-ghost theme-toggle" onClick={toggleTheme} type="button">
              <ThemeIcon className="button-icon" />
              <span>{theme === 'light' ? 'Dark mode' : 'Light mode'}</span>
            </button>

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
      </div>
    </div>
  );
};

export default AppLayout;