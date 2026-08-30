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

      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

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

      return;
    }

    // If footer is being used on another page,
    // return to homepage and open the requested section.
    window.location.href = `/#${targetId}`;
  };

  return (
    <footer className="footer-root">
      <div className="footer-container">

        <div className="footer-grid">

          {/* ==================================================
              COLUMN 1: BRAND INFO & SOCIALS
          =================================================== */}
          <div className="footer-col brand-col">

            <div className="footer-brand">

              <div className="footer-logo">
                <img
                  src={logoImg}
                  alt="Sunny Bears Preschool Logo"
                  className="footer-logo-img"
                />
              </div>

              <div className="footer-brand-title">
                <h3>

                  <span className="word-sunny">
                    <span className="letter-s">S</span>
                    <span className="letter-u">U</span>
                    <span className="letter-n1">N</span>
                    <span className="letter-n2">N</span>
                    <span className="letter-y">Y</span>
                  </span>

                  {/* Extra controlled gap */}
                  <span className="brand-title-gap"></span>

                  <span className="word-bears-preschool">
                    BEARS PRESCHOOL
                  </span>

                </h3>
              </div>

            </div>

            <p className="footer-tagline">
              JUMP • GIGGLE • GROW
            </p>

            <p className="footer-about">
              A warm, joyful preschool in Gerugambakkam, Chennai
              where little learners jump into learning, giggle with
              joy and grow into their best selves.
            </p>

            {/* ==================================================
                SOCIAL LINKS
            =================================================== */}
            <div className="social-links">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/sunnybearspreschool?igsi=cGd1MDIyNjFkc3Vq"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
                aria-label="Sunny Bears Preschool on Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919791751787"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon whatsapp"
                aria-label="Sunny Bears Preschool on WhatsApp"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.301-1.127zm10.741-6.721c-.296-.148-1.751-.864-2.022-.963-.272-.099-.47-.148-.667.148-.198.296-.766.963-.94 1.16-.173.198-.347.223-.643.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.667-1.608-.915-2.204-.241-.579-.487-.501-.667-.51l-.57-.01c-.197 0-.518.074-.79.371-.272.296-1.04 1.015-1.04 2.479 0 1.464 1.065 2.877 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.751-.719 1.998-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.569-.346z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon facebook"
                aria-label="Sunny Bears Preschool on Facebook"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.003 10.125 11.927v-8.432H7.078v-3.495h3.047V9.41c0-3.024 1.792-4.695 4.533-4.695 1.312 0 2.686.235 2.686.235v2.973h-1.514c-1.491 0-1.956.93-1.956 1.887v2.263h3.328l-.532 3.495h-2.796V24C19.612 23.076 24 18.092 24 12.073z" />
                </svg>
              </a>

              {/* Google */}
              <a
                href="https://share.google/D3q1r4Uz3keTMuS4g"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon google"
                aria-label="Sunny Bears Preschool on Google"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="#4285F4"
                    d="M21.35 12.27c0-.79-.07-1.55-.2-2.27H12v4.3h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.42z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 21.73c2.63 0 4.84-.87 6.45-2.35l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.29v2.53A9.73 9.73 0 0 0 12 21.73z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M6.54 13.82A5.85 5.85 0 0 1 6.23 12c0-.63.11-1.24.31-1.82V7.65H3.29A9.74 9.74 0 0 0 2.27 12c0 1.57.38 3.06 1.02 4.35l3.25-2.53z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 6.15c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 3.24 14.63 2.27 12 2.27a9.73 9.73 0 0 0-8.71 5.38l3.25 2.53C7.31 7.87 9.46 6.15 12 6.15z"
                  />
                </svg>
              </a>

            </div>
          </div>


          {/* ==================================================
              COLUMN 2: QUICK LINKS
          =================================================== */}
          <div className="footer-col">

            <h4 className="footer-col-title">
              Quick Links
            </h4>

            <ul className="footer-links">

              <li>
                <a
                  href="/#home"
                  onClick={(e) =>
                    handleNavClick(e, 'home')
                  }
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/#about"
                  onClick={(e) =>
                    handleNavClick(e, 'about')
                  }
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/#programs"
                  onClick={(e) =>
                    handleNavClick(e, 'programs')
                  }
                >
                  Programs
                </a>
              </li>

              <li>
                <a
                  href="/#why-sunny-bears"
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

              <li>
                <a
                  href="/#gallery"
                  onClick={(e) =>
                    handleNavClick(e, 'gallery')
                  }
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="/#admissions"
                  onClick={(e) =>
                    handleNavClick(
                      e,
                      'admissions'
                    )
                  }
                >
                  Admissions
                </a>
              </li>

              <li>
                <a
                  href="/#contact"
                  onClick={(e) =>
                    handleNavClick(e, 'contact')
                  }
                >
                  Contact Us
                </a>
              </li>

            </ul>
          </div>


          {/* ==================================================
              COLUMN 3: PROGRAMS
              These are now simple points/text.
              No routing or page navigation.
          =================================================== */}
          <div className="footer-col">

            <h4 className="footer-col-title">
              Programs
            </h4>

            <ul className="footer-program-list">

              <li>
                <span className="program-bullet"></span>
                <span>Play Group • Pre-KG</span>
              </li>

              <li>
                <span className="program-bullet"></span>
                <span>LKG • UKG</span>
              </li>

              <li>
                <span className="program-bullet"></span>
                <span>Day Care &amp; After-School Care</span>
              </li>

              <li>
                <span className="program-bullet"></span>
                <span>Summer Camp</span>
              </li>

              <li>
                <span className="program-bullet"></span>
                <span>Evening Tuition (KG–8th Std)</span>
              </li>

              <li>
                <span className="program-bullet"></span>
                <span>Extra-Curricular Activities</span>
              </li>

            </ul>
          </div>


          {/* ==================================================
              COLUMN 4: CONTACT INFORMATION
          =================================================== */}
          <div className="footer-col footer-contact-column">

            <h4 className="footer-col-title">
              Contact
            </h4>

            <ul className="footer-contact-info">

              {/* Phone */}
              <li>
                <span className="contact-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>

                <a href="tel:9791751787">
                  97917 51787
                </a>
              </li>


              {/* Email */}
              <li>
                <span className="contact-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-1.1 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>

                <a href="mailto:sunnybearspreschool@gmail.com">
                  sunnybearspreschool@gmail.com
                </a>
              </li>


              {/* Address */}
              <li className="contact-address-item">

                <span className="contact-icon contact-address-icon">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
                    <circle
                      cx="12"
                      cy="10"
                      r="3"
                    />
                  </svg>
                </span>

                <span className="contact-address">
                  15C, Artha Royal Gardenia Phase2,
                  Raniammal, 2nd St, Sri Pachaiammai Nagar,
                  Periyapancheri, Gerugambakkam,
                  Tamil Nadu 600128
                </span>

              </li>

            </ul>


            {/* ==================================================
                OPENING HOURS
            =================================================== */}
            <div className="footer-hours">

              <h5 className="footer-hours-title">
                Working Hours
              </h5>

              <div className="hours-list">

                <div className="hours-row">
                  <span>Mon–Fri</span>
                  <span>8:30 am–8 pm</span>
                </div>

                <div className="hours-row">
                  <span>Saturday</span>
                  <span>9:30 am–1 pm</span>
                </div>

                <div className="hours-row">
                  <span>Sunday</span>
                  <strong>Holiday</strong>
                </div>

              </div>
            </div>


            {/* Google Location */}
            <a
              href="https://share.google/D3q1r4Uz3keTMuS4g"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-google-link"
            >

              <span className="google-link-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="#4285F4"
                    d="M21.35 12.27c0-.79-.07-1.55-.2-2.27H12v4.3h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.42z"
                  />

                  <path
                    fill="#34A853"
                    d="M12 21.73c2.63 0 4.84-.87 6.45-2.35l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.29v2.53A9.73 9.73 0 0 0 12 21.73z"
                  />

                  <path
                    fill="#FBBC05"
                    d="M6.54 13.82A5.85 5.85 0 0 1 6.23 12c0-.63.11-1.24.31-1.82V7.65H3.29A9.74 9.74 0 0 0 2.27 12c0 1.57.38 3.06 1.02 4.35l3.25-2.53z"
                  />

                  <path
                    fill="#EA4335"
                    d="M12 6.15c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 3.24 14.63 2.27 12 2.27a9.73 9.73 0 0 0-8.71 5.38l3.25 2.53C7.31 7.87 9.46 6.15 12 6.15z"
                  />
                </svg>
              </span>

              <span>
                View us on Google
              </span>

            </a>

          </div>

        </div>


        {/* ==================================================
            DEVELOPER CREDIT
        =================================================== */}
        <div className="footer-developer-credit">

          <div className="developer-credit-line">

            <span className="developer-credit-label">
              Designed &amp; Developed by
            </span>

            <a
              href="https://nest-of-codes-e4cl.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="developer-credit-link"
              aria-label="Nest Of Codes"
            >
              Nest Of Codes
            </a>

          </div>

          <span className="developer-credit-tagline">
            Crafting thoughtful digital experiences.
          </span>

        </div>


        {/* ==================================================
            BOTTOM COPYRIGHT BAR
        =================================================== */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Sunny Bears Preschool.
            All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;