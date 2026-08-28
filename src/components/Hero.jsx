import React from 'react';
import './Hero.css';

// Gallery image
import gallery17HeroImg from '../assets/Gallery17.jpeg';

const Hero = () => {
  return (
    <section className="hero-container" id="home">

      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}
      <div className="hero-bg-decorations">

        {/* Smiling Sun Top-Left */}
        <div className="sun-decoration" title="Sunny Day">
          <svg viewBox="0 0 100 100" width="70" height="70">
            <circle
              cx="50"
              cy="50"
              r="24"
              fill="#FFC72C"
            />

            <path
              d="M50 10 L50 20
                 M50 80 L50 90
                 M10 50 L20 50
                 M80 50 L90 50
                 M22 22 L29 29
                 M71 71 L78 78
                 M22 78 L29 71
                 M71 22 L78 29"
              stroke="#FF9F1C"
              strokeWidth="5"
              strokeLinecap="round"
            />

            <circle
              cx="43"
              cy="46"
              r="2.5"
              fill="#3D261C"
            />

            <circle
              cx="57"
              cy="46"
              r="2.5"
              fill="#3D261C"
            />

            <path
              d="M44 54 Q50 58 56 54"
              stroke="#3D261C"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

      </div>


      {/* =====================================================
          MAIN HERO WRAPPER
      ====================================================== */}
      <div className="hero-wrapper">

        {/* =================================================
            LEFT COLUMN
        ================================================== */}
        <div className="hero-text-content">

          {/* Admissions Badge */}
          <div className="admissions-badge">
            <span className="star-icon">⭐</span>

            <span>
              ADMISSIONS OPEN FOR 2026–27
            </span>
          </div>


          {/* =================================================
              SEO INTERNAL LINK
          ================================================== */}
          <div className="hero-seo-location">

            <a
              href="/best-preschool-in-chennai"
              className="hero-best-preschool-link"
              aria-label="Best Preschool in Chennai"
            >
              Best Preschool in Chennai
            </a>

            <span className="hero-seo-dot">
              •
            </span>

            <span className="hero-location-text">
              Gerugambakkam
            </span>

          </div>


          {/* Main Heading */}
          <h1 className="hero-main-title">

            Where Little Minds
            <br className="desktop-break" />

            <span className="text-jump">
              Jump,
            </span>{' '}

            <span className="text-giggle">
              Giggle
            </span>{' '}

            <span className="text-grow">
              &amp; Grow!
            </span>

          </h1>


          {/* Subtitle */}
          <h2 className="hero-sub-title">
            A Happy Beginning for a Brighter Future
          </h2>


          {/* Description */}
          <p className="hero-description">
            Sunny Bears Preschool provides a warm, safe and joyful
            environment where little learners explore, play, discover
            and grow with confidence every day.
          </p>


          {/* Age Group */}
          <div className="age-group-tag">

            <span className="check-icon">
              ✓
            </span>

            <span>
              For Children Aged 2–6 Years
            </span>

          </div>


          {/* =================================================
              CTA BUTTONS
          ================================================== */}
          <div className="hero-cta-group">

            {/* Primary CTA */}
            <a
              href="#enquire"
              className="hero-btn-primary"
            >

              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 20h9"></path>

                <path
                  d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                ></path>
              </svg>

              <span>
                Enquire for Admission
              </span>

            </a>


            {/* Secondary CTA */}
            <a
              href="#programs"
              className="hero-btn-secondary"
            >

              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >

                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="18"
                  rx="2"
                ></rect>

                <line
                  x1="16"
                  y1="2"
                  x2="16"
                  y2="6"
                ></line>

                <line
                  x1="8"
                  y1="2"
                  x2="8"
                  y2="6"
                ></line>

                <line
                  x1="3"
                  y1="10"
                  x2="21"
                  y2="10"
                ></line>

              </svg>

              <span>
                Explore Our Programs
              </span>

            </a>

          </div>

        </div>


        {/* =================================================
            RIGHT COLUMN
        ================================================== */}
        <div className="hero-image-container">

          {/* Image */}
          <div className="image-frame">

            <img
              src={gallery17HeroImg}
              alt="Sunny Bears Preschool children group activity in Gerugambakkam Chennai"
              className="hero-kids-image"
            />

          </div>


          {/* Floating Badge */}
          <div className="floating-cloud-badge">

            <div className="cloud-text">

              <span>
                Safe
              </span>

              <span className="dot">
                •
              </span>

              <span>
                Caring
              </span>

              <span className="dot">
                •
              </span>

              <span>
                Nurturing
              </span>

            </div>

            <div className="heart-icon">
              💛
            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          6 FEATURE CARDS
      ====================================================== */}
      <div className="hero-features-bar">


        {/* =================================================
            FEATURE 1
        ================================================== */}
        <div className="feature-item-card">

          <div className="feature-icon-wrapper circle-coral">

            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 10v6"></path>

              <path d="M2 10l10-5 10 5-10 5z"></path>

              <path
                d="M6 12v5c3 3 9 3 12 0v-5"
              ></path>

            </svg>

          </div>

          <div className="feature-item-info">

            <h4>
              Programs for Ages 2–6
            </h4>

            <p>
              Play Group to UKG
            </p>

          </div>

        </div>


        {/* =================================================
            FEATURE 2
        ================================================== */}
        <div className="feature-item-card">

          <div className="feature-icon-wrapper circle-green">

            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >

              <path
                d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
              ></path>

              <path
                d="M9 12l2 2 4-4"
              ></path>

            </svg>

          </div>

          <div className="feature-item-info">

            <h4>
              Safe &amp; Caring Environment
            </h4>

            <p>
              Your child's safety is our priority
            </p>

          </div>

        </div>


        {/* =================================================
            FEATURE 3
        ================================================== */}
        <div className="feature-item-card">

          <div className="feature-icon-wrapper circle-yellow">

            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >

              <circle
                cx="12"
                cy="12"
                r="10"
              />

              <path
                d="M8 14s1.5 2 4 2 4-2 4-2"
              />

              <line
                x1="9"
                y1="9"
                x2="9.01"
                y2="9"
                strokeWidth="3"
              />

              <line
                x1="15"
                y1="9"
                x2="15.01"
                y2="9"
                strokeWidth="3"
              />

            </svg>

          </div>

          <div className="feature-item-info">

            <h4>
              Fun Learning Activities
            </h4>

            <p>
              Learn through play &amp; explore
            </p>

          </div>

        </div>


        {/* =================================================
            FEATURE 4
        ================================================== */}
        <div className="feature-item-card">

          <div className="feature-icon-wrapper circle-purple">

            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >

              <path
                d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
              ></path>

              <circle
                cx="9"
                cy="7"
                r="4"
              ></circle>

              <path
                d="M23 21v-2a4 4 0 0 0-3-3.87"
              ></path>

              <path
                d="M16 3.13a4 4 0 0 1 0 7.75"
              ></path>

            </svg>

          </div>

          <div className="feature-item-info">

            <h4>
              Caring &amp; Qualified Teachers
            </h4>

            <p>
              Experienced &amp; child-friendly staff
            </p>

          </div>

        </div>


        {/* =================================================
            FEATURE 5
        ================================================== */}
        <div className="feature-item-card">

          <div className="feature-icon-wrapper circle-blue">

            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >

              <circle
                cx="12"
                cy="12"
                r="10"
              ></circle>

              <polyline
                points="12 6 12 12 16 14"
              ></polyline>

            </svg>

          </div>

          <div className="feature-item-info">

            <h4>
              Day Care &amp; After-School Care
            </h4>

            <p>
              Flexible care for working parents
            </p>

          </div>

        </div>


        {/* =================================================
            FEATURE 6
        ================================================== */}
        <div className="feature-item-card">

          <div className="feature-icon-wrapper circle-orange">

            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >

              <polygon
                points="
                  12 2
                  15.09 8.26
                  22 9.27
                  17 14.14
                  18.18 21.02
                  12 17.77
                  5.82 21.02
                  7 14.14
                  2 9.27
                  8.91 8.26
                  12 2
                "
              ></polygon>

            </svg>

          </div>

          <div className="feature-item-info">

            <h4>
              Admissions Open 2026–27
            </h4>

            <p>
              Limited seats. Enroll today!
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;