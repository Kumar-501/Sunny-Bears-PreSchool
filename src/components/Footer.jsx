import React from 'react';
import './Footer.css';
import logoImg from '../assets/Sunnybearslogo.png';

const Footer = () => {
  // Smooth scroll helper for footer links
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      window.history.pushState(null, null, `#${targetId}`);
    }
  };

  return (
    <footer className="footer-root">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1: Brand Info & Socials */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={logoImg} alt="Sunny Bears Preschool Logo" className="footer-logo-img" />
              </div>
              <div className="footer-brand-title">
                <h3>
                  <span className="word-sunny">
                    <span className="letter-s">S</span>
                    <span className="letter-u">U</span>
                    <span className="letter-n1">N</span>
                    <span className="letter-n2">N</span>
                    <span className="letter-y">Y</span>
                  </span>{' '}
                  <span className="word-bears-preschool">BEARS PRESCHOOL</span>
                </h3>
              </div>
            </div>
            <p className="footer-tagline">JUMP • GIGGLE • GROW</p>
            <p className="footer-about">
              A warm, joyful preschool in Gerugambakkam, Chennai where little learners jump into learning, giggle with joy and grow into their best selves.
            </p>

            <div className="social-links">
              {/* Modern Instagram Icon */}
              <a
                href="https://www.instagram.com/sunnybearspreschool?igsi=cGd1MDIyNjFkc3Vq"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Modern WhatsApp Icon */}
              <a
                href="https://wa.me/919791751787"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon whatsapp"
                aria-label="WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.301-1.127zm10.741-6.721c-.296-.148-1.751-.864-2.022-.963-.272-.099-.47-.148-.667.148-.198.296-.766.963-.94 1.16-.173.198-.347.223-.643.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.667-1.608-.915-2.204-.241-.579-.487-.501-.667-.51l-.57-.01c-.197 0-.518.074-.79.371-.272.296-1.04 1.015-1.04 2.479 0 1.464 1.065 2.877 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.751-.719 1.998-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.569-.346z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Us</a></li>
              <li><a href="#programs" onClick={(e) => handleNavClick(e, 'programs')}>Programs</a></li>
              <li><a href="#why-sunny-bears" onClick={(e) => handleNavClick(e, 'why-sunny-bears')}>Why Sunny Bears</a></li>
              <li><a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')}>Gallery</a></li>
              <li><a href="#admissions" onClick={(e) => handleNavClick(e, 'admissions')}>Admissions</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div className="footer-col">
            <h4 className="footer-col-title">Programs</h4>
            <ul className="footer-links">
              <li><a href="#programs" onClick={(e) => handleNavClick(e, 'programs')}>Play Group • Pre-KG</a></li>
              <li><a href="#programs" onClick={(e) => handleNavClick(e, 'programs')}>LKG • UKG</a></li>
              <li><a href="#programs" onClick={(e) => handleNavClick(e, 'programs')}>Day Care &amp; After-School Care</a></li>
              <li><a href="#programs" onClick={(e) => handleNavClick(e, 'programs')}>Summer Camp</a></li>
              <li><a href="#programs" onClick={(e) => handleNavClick(e, 'programs')}>Evening Tuition (KG–8th Std)</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-contact-info">
              <li>
                <span className="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </span>
                <a href="tel:9791751787">97917 51787</a>
              </li>
              <li>
                <span className="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </span>
                <a href="mailto:sunnybearspreschool@gmail.com">sunnybearspreschool@gmail.com</a>
              </li>
              <li>
                <span className="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                <span>Gerugambakkam, Chennai</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Sunny Bears Preschool. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;