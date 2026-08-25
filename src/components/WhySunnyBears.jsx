import React from 'react';
import './WhySunnyBears.css';

const WHY_FEATURES = [
  {
    id: 1,
    title: 'Safe & Secure Environment',
    desc: "Your child's safety is our top priority in a clean, secure and caring space.",
    iconClass: 'circle-gold',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Caring & Qualified Teachers',
    desc: 'Experienced and passionate educators who nurture every child with care.',
    iconClass: 'circle-pink',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Play-Based Learning',
    desc: 'We make learning fun through play, exploration and creativity.',
    iconClass: 'circle-blue',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Holistic Development',
    desc: 'Fostering social, emotional, cognitive and physical growth together.',
    iconClass: 'circle-green',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6"></path>
        <path d="M10 22h4"></path>
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.55.64 2.95 1.7 3.95.7.67 1.13 1.42 1.3 2.05"></path>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Values & Character Building',
    desc: 'We instill strong values, kindness, confidence and independence in every child.',
    iconClass: 'circle-purple',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Flexible Care Options',
    desc: 'Day care and after-school care available to support busy parents.',
    iconClass: 'circle-orange',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
  },
];

const WhySunnyBears = () => {
  return (
    <section className="why-section" id="why-sunny-bears">
      {/* Background Decorative Doodles */}
      <div className="why-doodles">
        {/* Top-Left Sun */}
        <div className="why-sun">
          <svg viewBox="0 0 100 100" width="80" height="80">
            <circle cx="50" cy="50" r="24" fill="#FFC72C" />
            <path
              d="M50 10 L50 20 M50 80 L50 90 M10 50 L20 50 M80 50 L90 50 M22 22 L29 29 M71 71 L78 78 M22 78 L29 71 M71 22 L78 29"
              stroke="#FF9F1C"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle cx="43" cy="46" r="2.5" fill="#3D261C" />
            <circle cx="57" cy="46" r="2.5" fill="#3D261C" />
            <path d="M44 54 Q50 58 56 54" stroke="#3D261C" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </svg>
        </div>

        {/* Floating Doodles */}
        <span className="why-doodle heart-left">💖</span>
        <span className="why-doodle star-left">⭐</span>
        <span className="why-doodle plane-right">✈️</span>
        <span className="why-doodle bee-right">🐝</span>

        {/* Top-Right Rainbow */}
        <div className="why-rainbow">
          <svg viewBox="0 0 120 70" width="100" height="60" fill="none">
            <path d="M10 60 A50 50 0 0 1 110 60" stroke="#FF5964" strokeWidth="6" strokeLinecap="round" />
            <path d="M20 60 A40 40 0 0 1 100 60" stroke="#FFCA3A" strokeWidth="6" strokeLinecap="round" />
            <path d="M30 60 A30 30 0 0 1 90 60" stroke="#8AC926" strokeWidth="6" strokeLinecap="round" />
            <path d="M40 60 A20 20 0 0 1 80 60" stroke="#1982C4" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <div className="why-container">
        {/* Header Section */}
        <div className="why-header">
          <h2 className="why-title">
            WHY <span className="title-sunny">SUNNY</span> BEARS
          </h2>
          <p className="why-subtitle">
            A happy place where little learners grow with love, learn with joy and shine with confidence every day.
          </p>
        </div>

        {/* 6 Feature Items Row with Dashed Dividers */}
        <div className="why-features-grid">
          {WHY_FEATURES.map((item, index) => (
            <div key={item.id} className="why-feature-col">
              <div className={`why-icon-box ${item.iconClass}`}>
                {item.icon}
              </div>
              <h3 className="why-feature-title">{item.title}</h3>
              <p className="why-feature-desc">{item.desc}</p>

              {/* Dashed vertical divider for desktop layout */}
              {index < WHY_FEATURES.length - 1 && (
                <div className="why-divider"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Waving Teddy Bear Illustration */}
        <div className="why-teddy-illustration">
          <svg viewBox="0 0 100 100" width="95" height="95">
            <circle cx="28" cy="28" r="13" fill="#C06C28" />
            <circle cx="28" cy="28" r="7" fill="#FDE68A" />
            <circle cx="72" cy="28" r="13" fill="#C06C28" />
            <circle cx="72" cy="28" r="7" fill="#FDE68A" />
            <ellipse cx="50" cy="70" rx="30" ry="25" fill="#C06C28" />
            <ellipse cx="50" cy="50" rx="32" ry="26" fill="#C06C28" />
            <ellipse cx="50" cy="57" rx="16" ry="12" fill="#FDE68A" />
            <ellipse cx="50" cy="51" rx="6" ry="4" fill="#3B1E08" />
            <circle cx="38" cy="44" r="3.5" fill="#3B1E08" />
            <circle cx="62" cy="44" r="3.5" fill="#3B1E08" />
            <path d="M45 58 Q50 62 55 58" stroke="#3B1E08" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <polygon points="40,68 50,72 40,76" fill="#FF4757" />
            <polygon points="60,68 50,72 60,76" fill="#FF4757" />
            <circle cx="50" cy="72" r="3" fill="#FF4757" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default WhySunnyBears;