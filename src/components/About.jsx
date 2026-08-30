import React from 'react';
import './About.css';

// ============================================================
// ABOUT IMAGES
// ============================================================

// Gallery16 is reserved for Meet Our Founder
import founderImg from '../assets/Gallery16.jpeg';

// Use existing Gallery images for the three About Us cards.
// These files already exist in your Gallery.
import nurturingEnvironmentImg from '../assets/Gallery01.jpeg';
import holisticLearningImg from '../assets/Gallery02.jpeg';
import buildingBrightFuturesImg from '../assets/Gallery03.jpeg';

// ============================================================
// ABOUT COMPONENT
// ============================================================

const About = () => {
  return (
    <section className="about-section" id="about">

      {/* ======================================================
          BACKGROUND FLOATING DOODLES
      ====================================================== */}

      <div className="about-doodles">
        <span className="doodle paper-plane">✈️</span>
        <span className="doodle star-1">⭐</span>
        <span className="doodle star-2">✨</span>
        <span className="doodle heart-1">💖</span>
        <span className="doodle heart-2">💕</span>
        <span className="doodle paw-print">🐾</span>
      </div>

      <div className="about-container">

        {/* ====================================================
            TOP HEADER
        ==================================================== */}

        <div className="about-header-box">

          <div className="about-tag">
            <span className="about-tag-dot" />
            WELCOME TO SUNNY BEARS
          </div>

          <h2 className="about-main-title">
            About <span className="title-us">Us</span>
          </h2>

          <h3 className="about-subtitle">
            A Warm Beginning for a Lifetime of Learning
          </h3>

          <p className="about-description">
            Sunny Bears Preschool is a place where children feel
            happy, safe, and inspired to learn every single day.
            We believe that every child is unique and has the
            potential to shine in their own way.
          </p>

        </div>

        {/* ====================================================
            MEET OUR FOUNDER
        ==================================================== */}

        <div className="founder-card-wrapper">

          <div className="founder-card">

            {/* LEFT COLUMN */}

            <div className="founder-image-col">

              <div className="founder-img-frame">

                <img
                  src={founderImg}
                  alt="Sunny Bears Preschool Founder and  Head"
                  className="founder-img"
                  loading="lazy"
                />

                <div className="founder-badge">
                  <span>
                    Founder &amp;  Head
                  </span>
                </div>

              </div>

              <div className="founder-meta">

                <h4 className="founder-name">
                  Mrs. Kayalvizhi Nandakumar
                </h4>

                <p className="founder-degree">
                  B.Tech, Advanced Diploma in Montessori
                  And Primary Education
                </p>

                <div className="founder-role-tag">
                  Sunny Bears Preschool
                </div>

              </div>

            </div>

            {/* RIGHT COLUMN */}

            <div className="founder-content-col">

              <div className="founder-section-tag">
                <span className="star-icon">
                  🌟
                </span>

                MEET OUR FOUNDER
              </div>

              <blockquote className="founder-highlight-quote">
                “Every child is unique, capable and full of possibilities.”
              </blockquote>

              <div className="founder-bio-text">

                <p>
                  Sunny Bears Preschool was founded with a simple
                  yet meaningful vision — to create a joyful,
                  nurturing and stimulating environment where
                  every child feels loved, respected and encouraged
                  to learn.
                </p>

                <p>
                  As the Founder and  Head, Mrs. Kayalvizhi
                  Nandakumar believes that the early years of a
                  child lay the foundation for lifelong learning.
                  Her approach combines the principles of Montessori
                  education with hands-on experiences, creativity,
                  independence and joyful learning.
                </p>

                <p>
                  At Sunny Bears, children are encouraged to explore,
                  discover, express and grow at their own pace.
                  The school strives to make every child's early
                  learning journey meaningful, confident and happy.
                </p>

              </div>

              {/* VISION */}

              <div className="founder-vision-box">

                <div className="vision-icon">
                  🎯
                </div>

                <div className="vision-content">

                  <span className="vision-title">
                    Her Vision
                  </span>

                  <p className="vision-quote">
                    “To build a preschool where children don't
                    just prepare for school — they learn to love
                    learning.”
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ====================================================
            OUR CORE VALUES
        ==================================================== */}

        <div className="core-values-wrapper">

          <h3 className="core-values-heading">
            Our Core Values
          </h3>

          <div className="core-values-grid">

            {/* LOVE & CARE */}

            <div className="value-item">

              <div className="value-icon circle-pink">

                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>

              </div>

              <span>
                Love &amp; Care
              </span>

            </div>

            {/* SAFETY */}

            <div className="value-item">

              <div className="value-icon circle-yellow">

                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>

              </div>

              <span>
                Safety First
              </span>

            </div>

            {/* LEARNING */}

            <div className="value-item">

              <div className="value-icon circle-green">

                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>

              </div>

              <span>
                Learning Through Play
              </span>

            </div>

            {/* RESPECT */}

            <div className="value-item">

              <div className="value-icon circle-blue">

                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>

              </div>

              <span>
                Respect &amp; Kindness
              </span>

            </div>

            {/* EXCELLENCE */}

            <div className="value-item">

              <div className="value-icon circle-purple">

                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <polygon
                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                  />
                </svg>

              </div>

              <span>
                Excellence in Everything
              </span>

            </div>

          </div>

        </div>

        {/* ====================================================
            EDUCATIONAL PILLARS
        ==================================================== */}

        <div className="about-pillars-grid">

          {/* ==================================================
              PILLAR 1 — NURTURING ENVIRONMENT
          ================================================== */}

          <div className="pillar-card border-purple">

            <div className="pillar-img-wrap">

              <img
                src={nurturingEnvironmentImg}
                alt="Nurturing Environment at Sunny Bears Preschool"
                loading="lazy"
              />

            </div>

            <h4 className="pillar-title text-purple">
              Nurturing Environment
            </h4>

            <p className="pillar-desc">
              A safe, caring and joyful space where children
              feel loved and encouraged.
            </p>

            <div className="pillar-heart heart-purple">
              💜
            </div>

          </div>

          {/* ==================================================
              PILLAR 2 — HOLISTIC LEARNING
          ================================================== */}

          <div className="pillar-card border-green">

            <div className="pillar-img-wrap">

              <img
                src={holisticLearningImg}
                alt="Holistic Learning at Sunny Bears Preschool"
                loading="lazy"
              />

            </div>

            <h4 className="pillar-title text-green">
              Holistic Learning
            </h4>

            <p className="pillar-desc">
              We focus on the overall development of each child
              through play and exploration.
            </p>

            <div className="pillar-heart heart-green">
              💚
            </div>

          </div>

          {/* ==================================================
              PILLAR 3 — BUILDING BRIGHT FUTURES
          ================================================== */}

          <div className="pillar-card border-orange">

            <div className="pillar-img-wrap">

              <img
                src={buildingBrightFuturesImg}
                alt="Building Bright Futures at Sunny Bears Preschool"
                loading="lazy"
              />

            </div>

            <h4 className="pillar-title text-orange">
              Building Bright Futures
            </h4>

            <p className="pillar-desc">
              We prepare children with confidence, curiosity
              and strong values for tomorrow.
            </p>

            <div className="pillar-heart heart-orange">
              🧡
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;