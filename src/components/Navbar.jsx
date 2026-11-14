import { useEffect, useState } from 'react';
import { NAV_DROPDOWNS } from '../data.js';

export default function Navbar({ current, onNavigate }) {
  const [openMenu, setOpenMenu] = useState(null);

  // Close any open dropdown when clicking anywhere else
  useEffect(() => {
    const close = () => setOpenMenu(null);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  const toggleMenu = (e, id) => {
    e.stopPropagation();
    setOpenMenu((prev) => (prev === id ? null : id));
  };

  return (
    <nav className="navbar">
      <span className="navbar-brand" onClick={() => onNavigate('landing')}>
        <span>MY PORTFOLIO</span>
      </span>
      <div className="navbar-links">
        <button
          className={`nav-link${current === 'home' ? ' active' : ''}`}
          onClick={() => onNavigate('home')}
        >
          PROFILE
        </button>
        <button
          className={`nav-link${current === 'skills' ? ' active' : ''}`}
          onClick={() => onNavigate('skills')}
        >
          SKILLS
        </button>

        {NAV_DROPDOWNS.map((menu) => (
          <div className="dropdown" key={menu.id}>
            <button
              className={`nav-link dropdown-btn${openMenu === menu.id ? ' open' : ''}`}
              onClick={(e) => toggleMenu(e, menu.id)}
            >
              {menu.label} <span className="dropdown-arrow">&#9660;</span>
            </button>
            <ul className={`dropdown-menu${openMenu === menu.id ? ' show' : ''}`}>
              {menu.items.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.label}
                    </a>
                  ) : (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(item.target);
                        setOpenMenu(null);
                      }}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
