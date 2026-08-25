import React from 'react';
import './About.css';

// Import local images from src/assets
import aboutMainImg from '../assets/About.png';
import pillarArtImg from '../assets/drawings.png';
import pillarRedDayImg from '../assets/SunnyBearsredcolourday.png';
import pillarOutdoorImg from '../assets/StudentsRunning.png';

const About = () => {
  return (
    <section className="about-section" id="about">
      {/* Background Floating Doodles */}
      <div className="about-doodles">
        <span className="doodle paper-plane">✈️</span>
        <span className="doodle star-1">⭐</span>
        <span className="doodle star-2">✨</span>
        <span className="doodle heart-1">💖</span>
        <span className="doodle heart-2">💕</span>
        <span className="doodle paw-print">🐾</span>
      </div>

      <div className="about-container">
        {/* Main 2-Column Section */}
        <div className="about-grid">
          
          {/* LEFT COLUMN: Text Content, Mission & Core Values */}
          <div className="about-left-col">
            <div className="about-title-box">
              <h2 className="about-main-title">
                About <span className="title-us">Us</span>
              </h2>
              <h3 className="about-subtitle">
                A Warm Beginning for a Lifetime of Learning
              </h3>
            </div>

            <p className="about-description">
              Sunny Bears Preschool is a place where children feel happy, safe, and inspired
              to learn every single day. We believe that every child is unique and has the
              potential to shine in their own way.
            </p>

            {/* Mission Card Callout */}
            <div className="mission-card">
              <div className="mission-heart-icon">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="#FF4757">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <p className="mission-text">
                Our mission is to nurture young minds with{' '}
                <span className="highlight-love">love</span>,{' '}
                <span className="highlight-creativity">creativity</span> and{' '}
                <span className="highlight-values">strong values</span>, building a strong
                foundation for a bright future.
              </p>
            </div>

            {/* Our Core Values Grid */}
            <div className="core-values-wrapper">
              <h3 className="core-values-heading">Our Core Values</h3>
              <div className="core-values-grid">
                
                <div className="value-item">
                  <div className="value-icon circle-pink">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                  <span>Love &amp; Care</span>
                </div>

                <div className="value-item">
                  <div className="value-icon circle-yellow">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      <path d="M12 8v4M12 16h.01"></path>
                    </svg>
                  </div>
                  <span>Safety First</span>
                </div>

                <div className="value-item">
                  <div className="value-icon circle-green">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  </div>
                  <span>Learning Through Play</span>
                </div>

                <div className="value-item">
                  <div className="value-icon circle-blue">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <span>Respect &amp; Kindness</span>
                </div>

                <div className="value-item">
                  <div className="value-icon circle-purple">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <span>Excellence in Everything</span>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Classroom Photo & 3 Educational Pillars */}
          <div className="about-right-col">
            
            {/* Main Classroom Image with Badge */}
            <div className="about-main-image-wrap">
              <img
                src={aboutMainImg}
                alt="Sunny Bears Preschool Learning and Activity Environment"
                className="about-main-img"
              />
              <div className="cloud-minds-badge">
                <p>Where Little Minds Grow Big Dreams</p>
                <span className="badge-heart">💛</span>
              </div>
            </div>

            {/* 3 Pillar Feature Cards */}
            <div className="about-pillars-grid">
              
              {/* Pillar 1 */}
              <div className="pillar-card border-purple">
                <div className="pillar-img-wrap">
                  <img
                    src={pillarArtImg}
                    alt="Nurturing Environment and Creative Expression"
                  />
                </div>
                <h4 className="pillar-title text-purple">Nurturing Environment</h4>
                <p className="pillar-desc">
                  A safe, caring and joyful space where children feel loved and encouraged.
                </p>
                <div className="pillar-heart heart-purple">💜</div>
              </div>

              {/* Pillar 2 */}
              <div className="pillar-card border-green">
                <div className="pillar-img-wrap">
                  <img
                    src={pillarRedDayImg}
                    alt="Holistic learning and celebration activities"
                  />
                </div>
                <h4 className="pillar-title text-green">Holistic Learning</h4>
                <p className="pillar-desc">
                  We focus on the overall development of each child through play and exploration.
                </p>
                <div className="pillar-heart heart-green">💚</div>
              </div>

              {/* Pillar 3 */}
              <div className="pillar-card border-orange">
                <div className="pillar-img-wrap">
                  <img
                    src={pillarOutdoorImg}
                    alt="Children playing outdoors and building confidence"
                  />
                </div>
                <h4 className="pillar-title text-orange">Building Bright Futures</h4>
                <p className="pillar-desc">
                  We prepare children with confidence, curiosity and strong values for tomorrow.
                </p>
                <div className="pillar-heart heart-orange">🧡</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;