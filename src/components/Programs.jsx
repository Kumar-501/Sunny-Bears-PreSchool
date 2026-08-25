import React from 'react';
import './Programs.css';

const PROGRAMS_DATA = [
  {
    id: 'play-group',
    title: 'Play Group',
    ageBadge: '2–3 YEARS',
    badgeColor: 'badge-yellow',
    iconColor: 'icon-yellow',
    linkColor: 'link-yellow',
    borderColor: 'card-border-yellow',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=500&q=80',
    description: 'For little learners beginning their journey into social interaction, play, movement and exploration.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3"></line>
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3"></line>
      </svg>
    ),
  },
  {
    id: 'pre-kg',
    title: 'Pre-KG',
    ageBadge: '3–4 YEARS',
    badgeColor: 'badge-blue',
    iconColor: 'icon-blue',
    linkColor: 'link-blue',
    borderColor: 'card-border-blue',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80',
    description: 'A joyful introduction to structured learning through activities, stories, creativity and early communication.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"></rect>
        <rect x="14" y="3" width="7" height="7" rx="1"></rect>
        <rect x="14" y="14" width="7" height="7" rx="1"></rect>
        <rect x="3" y="14" width="7" height="7" rx="1"></rect>
      </svg>
    ),
  },
  {
    id: 'lkg',
    title: 'LKG',
    ageBadge: '4–5 YEARS',
    badgeColor: 'badge-green',
    iconColor: 'icon-green',
    linkColor: 'link-green',
    borderColor: 'card-border-green',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=500&q=80',
    description: 'Building confidence through language, phonics, numbers, creativity and interactive learning.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
  },
  {
    id: 'ukg',
    title: 'UKG',
    ageBadge: '5–6 YEARS',
    badgeColor: 'badge-pink',
    iconColor: 'icon-pink',
    linkColor: 'link-pink',
    borderColor: 'card-border-pink',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=500&q=80',
    description: 'Preparing confident young learners with strong foundations for their next educational journey.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
      </svg>
    ),
  },
  {
    id: 'day-care',
    title: 'Day Care',
    ageBadge: 'FROM 1 YEAR ONWARDS',
    badgeColor: 'badge-orange',
    iconColor: 'icon-orange',
    linkColor: 'link-orange',
    borderColor: 'card-border-orange',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=500&q=80',
    description: 'A safe, caring and engaging environment with supervised activities and after-school care.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    ),
  },
  {
    id: 'summer-camp',
    title: 'Summer Camp',
    ageBadge: 'AGES 2+ YEARS',
    badgeColor: 'badge-cyan',
    iconColor: 'icon-cyan',
    linkColor: 'link-cyan',
    borderColor: 'card-border-cyan',
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=500&q=80',
    description: 'Fun-filled learning experiences with creative activities, games and exciting experiences.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    ),
  },
  {
    id: 'evening-tuition',
    title: 'Evening Tuition',
    ageBadge: 'KG – 8TH STD',
    badgeColor: 'badge-purple',
    iconColor: 'icon-purple',
    linkColor: 'link-purple',
    borderColor: 'card-border-purple',
    image: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=500&q=80',
    description: 'Evening tuition and homework support for children from kindergarten to 8th standard.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
      </svg>
    ),
  },
  {
    id: 'extra-curricular',
    title: 'Extra Curricular Activities',
    ageBadge: null, // No age badge!
    badgeColor: '',
    iconColor: 'icon-coral',
    linkColor: 'link-coral',
    borderColor: 'card-border-coral',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=500&q=80',
    description: 'Engaging holistic activities including art & craft, music, dance, movement, storytelling, and physical fitness.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
  },
];

const Programs = () => {
  return (
    <section className="programs-section" id="programs">
      {/* Background Decorative Doodles */}
      <div className="programs-doodles">
        <div className="doodle-sun">
          <svg viewBox="0 0 100 100" width="85" height="85">
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
        <span className="prog-doodle plane">✈️</span>
        <span className="prog-doodle star">⭐</span>
        <span className="prog-doodle heart">💖</span>

        {/* ABC Blocks Top Right */}
        <div className="abc-blocks">
          <div className="block block-a">A</div>
          <div className="block block-b">B</div>
          <div className="block block-c">C</div>
        </div>
      </div>

      <div className="programs-container">
        {/* Header Title Section */}
        <div className="programs-header">
          <div className="programs-top-tag">
            <span>🍃</span>
            <span>OUR PROGRAMS</span>
            <span>🍃</span>
          </div>
          <h2 className="programs-main-title">
            Every Age. <span className="title-green">A </span>
            <span className="title-blue">New </span>
            <span className="title-orange">Adventure.</span>
          </h2>
          <p className="programs-subtitle">
            Thoughtfully designed programs that grow with your child — from their very first play group to confident school readiness.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="programs-grid">
          {PROGRAMS_DATA.map((prog) => (
            <div key={prog.id} className={`program-card ${prog.borderColor}`}>
              {/* Card Header Info */}
              <div className="card-top-header">
                <div className={`program-icon-wrap ${prog.iconColor}`}>
                  {prog.icon}
                </div>
                <h3 className="program-card-title">{prog.title}</h3>
                {prog.ageBadge && (
                  <span className={`age-badge ${prog.badgeColor}`}>{prog.ageBadge}</span>
                )}
              </div>

              {/* Program Photo */}
              <div className="program-image-frame">
                <img src={prog.image} alt={prog.title} />
              </div>

              {/* Description */}
              <p className="program-card-desc">{prog.description}</p>

              {/* Action Link */}
              <a href="#enquire" className={`program-link ${prog.linkColor}`}>
                <span>Learn More</span>
                <span className="arrow">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Flowers & Ground Bar */}
        <div className="programs-bottom-ground">
          <div className="flower-item">🌸</div>
          <div className="flower-item">🌼</div>
          <div className="flower-item">🌸</div>
        </div>
      </div>
    </section>
  );
};

export default Programs;