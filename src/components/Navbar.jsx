import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logoImg from '../assets/Sunnybearslogo.png';

const THEMES = [
  { id: 'sunny-day', name: 'Sunny Day', icon: '☀️' },
  { id: 'rainbow-play', name: 'Rainbow Play', icon: '🌈' },
  { id: 'teddy-bear', name: 'Teddy Bear', icon: '🧸' },
  { id: 'nature-garden', name: 'Nature Garden', icon: '🌿' },
  { id: 'ocean-adventure', name: 'Ocean Adventure', icon: '🫧' },
  { id: 'magical-dreams', name: 'Magical Dreams', icon: '🦄' },
  { id: 'candy-land', name: 'Candy Land', icon: '🍭' },
  { id: 'moonlight', name: 'Moonlight', icon: '🌙' },
];

const SECTIONS = [
  'home',
  'about',
  'programs',
  'why-sunny-bears',
  'gallery',
  'admissions',
  'contact',
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem('sunny_bears_theme') || 'sunny-day';
  });

  const dropdownRef = useRef(null);

  // Apply Theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', activeTheme);
    localStorage.setItem('sunny_bears_theme', activeTheme);
  }, [activeTheme]);

  // Click outside listener for theme dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsThemeDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // IntersectionObserver Scroll Spy
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -40% 0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;

          setActiveSection(sectionId);

          window.history.replaceState(
            null,
            null,
            `#${sectionId}`
          );
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersect,
      observerOptions
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);

      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleThemeSelect = (themeId) => {
    setActiveTheme(themeId);
    setIsThemeDropdownOpen(false);
  };

  // Smooth Scroll Helper Function
  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    setIsMobileMenuOpen(false);
    setActiveSection(targetId);

    const element = document.getElementById(targetId);

    if (element) {
      const navbarHeight = 80;

      const elementPosition =
        element.getBoundingClientRect().top +
        window.pageYOffset;

      const offsetPosition =
        elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      window.history.pushState(
        null,
        null,
        `#${targetId}`
      );
    }
  };

  return (
    <header className="navbar-header">
      <nav className="navbar-container">

        {/* Brand Logo & Title */}
        <a
          href="#home"
          className="brand-container"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <div className="logo-icon">
            <img
              src={logoImg}
              alt="Sunny Bears Preschool Logo"
              className="brand-logo-img"
            />
          </div>

          <div className="brand-text">
            <h1 className="brand-title">

              <span className="word-sunny">
                <span className="letter-s">S</span>
                <span className="letter-u">U</span>
                <span className="letter-n1">N</span>
                <span className="letter-n2">N</span>
                <span className="letter-y">Y</span>
              </span>

              <span className="word-bears-preschool">
                BEARS PRESCHOOL
              </span>

            </h1>

            <p className="brand-subtitle">
              JUMP • GIGGLE • GROW
            </p>
          </div>
        </a>

        {/* Mobile Toggle Button */}
        <button
          className={`mobile-toggle ${
            isMobileMenuOpen ? 'open' : ''
          }`}
          onClick={() =>
            setIsMobileMenuOpen(!isMobileMenuOpen)
          }
          aria-label="Toggle Navigation Menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation Wrapper */}
        <div
          className={`nav-content ${
            isMobileMenuOpen ? 'active' : ''
          }`}
        >
          <ul className="nav-menu">

            <li
              className={`nav-item ${
                activeSection === 'home'
                  ? 'active-link'
                  : ''
              }`}
            >
              <a
                href="#home"
                onClick={(e) =>
                  handleNavClick(e, 'home')
                }
              >
                Home
              </a>
            </li>

            <li
              className={`nav-item ${
                activeSection === 'about'
                  ? 'active-link'
                  : ''
              }`}
            >
              <a
                href="#about"
                onClick={(e) =>
                  handleNavClick(e, 'about')
                }
              >
                About Us
              </a>
            </li>

            <li
              className={`nav-item ${
                activeSection === 'programs'
                  ? 'active-link'
                  : ''
              }`}
            >
              <a
                href="#programs"
                onClick={(e) =>
                  handleNavClick(e, 'programs')
                }
              >
                Programs
              </a>
            </li>

            <li
              className={`nav-item ${
                activeSection === 'why-sunny-bears'
                  ? 'active-link'
                  : ''
              }`}
            >
              <a
                href="#why-sunny-bears"
                onClick={(e) =>
                  handleNavClick(
                    e,
                    'why-sunny-bears'
                  )
                }
              >
                Why Sunny Bears
              </a>
            </li>

            <li
              className={`nav-item ${
                activeSection === 'gallery'
                  ? 'active-link'
                  : ''
              }`}
            >
              <a
                href="#gallery"
                onClick={(e) =>
                  handleNavClick(e, 'gallery')
                }
              >
                Gallery
              </a>
            </li>

            <li
              className={`nav-item ${
                activeSection === 'admissions'
                  ? 'active-link'
                  : ''
              }`}
            >
              <a
                href="#admissions"
                onClick={(e) =>
                  handleNavClick(e, 'admissions')
                }
              >
                Admissions
              </a>
            </li>

            <li
              className={`nav-item ${
                activeSection === 'contact'
                  ? 'active-link'
                  : ''
              }`}
            >
              <a
                href="#contact"
                onClick={(e) =>
                  handleNavClick(e, 'contact')
                }
              >
                Contact Us
              </a>
            </li>

          </ul>

          {/* Action Buttons & Theme Switcher */}
          <div className="nav-actions">

            {/* Theme Selector */}
            <div
              className="theme-switcher-container"
              ref={dropdownRef}
            >
              <button
                className="theme-palette-btn"
                onClick={() =>
                  setIsThemeDropdownOpen(
                    !isThemeDropdownOpen
                  )
                }
                title="Choose Theme"
                aria-label="Choose Theme"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle
                    cx="13.5"
                    cy="6.5"
                    r=".5"
                    fill="currentColor"
                  />

                  <circle
                    cx="17.5"
                    cy="10.5"
                    r=".5"
                    fill="currentColor"
                  />

                  <circle
                    cx="8.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  />

                  <circle
                    cx="6.5"
                    cy="12.5"
                    r=".5"
                    fill="currentColor"
                  />

                  <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.21-.64-1.67-.38-.42-.6-.97-.6-1.58 0-1.24 1.01-2.25 2.25-2.25H17c2.76 0 5-2.24 5-5 0-4.42-4.03-8-10-8z" />
                </svg>
              </button>

              {/* Theme Dropdown */}
              {isThemeDropdownOpen && (
                <div className="theme-dropdown-menu">

                  <div className="theme-dropdown-header">
                    Choose Theme
                  </div>

                  {THEMES.map((t) => (
                    <button
                      key={t.id}
                      className={`theme-option ${
                        activeTheme === t.id
                          ? 'active'
                          : ''
                      }`}
                      onClick={() =>
                        handleThemeSelect(t.id)
                      }
                    >
                      <span className="theme-icon">
                        {t.icon}
                      </span>

                      <span className="theme-name">
                        {t.name}
                      </span>

                      {activeTheme === t.id && (
                        <span className="theme-check-mark">
                          ✓
                        </span>
                      )}
                    </button>
                  ))}

                </div>
              )}
            </div>

            {/* Phone Button */}
            <a
              href="tel:9791751787"
              className="btn-phone"
            >
              <svg
                className="phone-icon"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>

              <span>97917 51787</span>
            </a>

            {/* Enquire Now Button */}
            <a
              href="#enquire"
              className="btn-enquire"
              onClick={(e) =>
                handleNavClick(e, 'enquire')
              }
            >
              Enquire
              <br />
              Now
            </a>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;