import React from 'react';
import './Admissionbanner.css';

/**
 * AdmissionBanner
 * A continuously scrolling ticker announcing admissions,
 * meant to sit above the main navbar (very top of the page).
 *
 * Usage:
 *   <AdmissionBanner />
 *   <Navbar />
 *   <Hero />
 */

// Change this one line to change what the banner says.
const ANNOUNCEMENT = 'VIJAYADASAMI ADMISSIONS OPEN FOR 2026–2027';

// Repeated enough times to fill the track so the loop never shows a gap.
const REPEAT_COUNT = 8;

const AdmissionBanner = () => {
  const track = Array.from({ length: REPEAT_COUNT }, () => ANNOUNCEMENT);

  return (
    <div className="admission-banner" role="region" aria-label="Admissions announcement">
      <div className="admission-banner-track">
        {track.map((item, index) => (
          <span className="admission-banner-item" key={index}>
            <span className="admission-banner-icon" aria-hidden="true">★</span>
            <span className="admission-banner-text">{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default AdmissionBanner;