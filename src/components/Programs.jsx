import React, { useEffect } from 'react';
import './Programs.css';

import playGroupImage from '../assets/playgroup.jpg';
import preKgImage from '../assets/prekg.jpg';
import lkgImage from '../assets/lkg.jpg';
import ukgImage from '../assets/ukg.jpg';
import dayCareImage from '../assets/daycare.jpg';
import summerCampImage from '../assets/summercamp (2).jpg';
import eveningTuitionImage from '../assets/kg-8.jpg';
import extraCurricularImage from '../assets/extracurricular.jpg';

const PROGRAMS_DATA = [
  {
    id: 'play-group',
    title: 'Play Group',
    ageBadge: '2–3 YEARS',
    badgeColor: 'badge-yellow',
    iconColor: 'icon-yellow',
    linkColor: 'link-yellow',
    borderColor: 'card-border-yellow',
    image:
      playGroupImage,
    alt:
      'Play Group children learning through play at Sunny Bears Preschool in Gerugambakkam, Chennai',
    description:
      'Our Play Group program gives young children a gentle introduction to preschool through play, movement, social interaction, stories and exploration. Children begin developing communication, confidence and independence in a warm and nurturing environment.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
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
    image:
      preKgImage,
    alt:
      'Pre-KG children participating in classroom activities at Sunny Bears Preschool Chennai',
    description:
      'The Pre-KG program introduces children to structured learning through stories, language activities, creativity, early communication and hands-on exploration. Learning experiences are designed to build curiosity while keeping children engaged and happy.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
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
    image:
      lkgImage,
    alt:
      'LKG children learning language, phonics and numbers at Sunny Bears Preschool',
    description:
      'Our LKG program supports children as they develop stronger foundations in language, phonics, early mathematics, creativity and communication. Interactive activities encourage children to participate, express ideas and learn with growing confidence.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
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
    image:
      ukgImage,
    alt:
      'UKG children developing school readiness skills at Sunny Bears Preschool in Chennai',
    description:
      'The UKG program helps children strengthen their early academic foundations, communication, confidence and independence. Through engaging classroom experiences, children develop skills that support a smooth transition to their next stage of schooling.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
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
    image:
      dayCareImage,
    alt:
      'Children participating in supervised daycare activities at Sunny Bears Preschool Gerugambakkam',
    description:
      'Sunny Bears Day Care provides a caring and engaging environment for children from 1 year onwards. Supervised activities, play, interaction and childcare support provide families with a flexible care option in Gerugambakkam, Chennai.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
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
    image:
      summerCampImage,
    alt:
      'Children enjoying creative summer camp activities at Sunny Bears Preschool Chennai',
    description:
      'Our Summer Camp offers fun-filled experiences with creative activities, games, storytelling, movement and hands-on learning. It gives children opportunities to explore new interests while enjoying an active and social holiday experience.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
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
    image:
      eveningTuitionImage,
    alt:
      'Children receiving evening tuition and homework support at Sunny Bears',
    description:
      'Evening tuition provides additional learning and homework support for children from kindergarten to 8th standard. The program is designed to give children focused guidance and a supportive environment for their everyday learning needs.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
      </svg>
    ),
  },

  {
    id: 'extra-curricular',
    title: 'Extra Curricular Activities',
    ageBadge: null,
    badgeColor: '',
    iconColor: 'icon-coral',
    linkColor: 'link-coral',
    borderColor: 'card-border-coral',
    image:
      extraCurricularImage,
    alt:
      'Children participating in art, music, movement and extracurricular activities at Sunny Bears Preschool',
    description:
      'Children explore their interests through art and craft, music, dance, movement, storytelling, games and physical activities. These experiences encourage creativity, self-expression, communication, confidence and social development.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
  },
];

const Programs = () => {
  /*
   * ============================================================
   * SEO METADATA
   *
   * This applies the dedicated Programs SEO title/description
   * only when the component is opened at /programs.
   *
   * The homepage keeps its own metadata.
   * ============================================================
   */
  useEffect(() => {
    const isProgramsPage =
      window.location.pathname === '/programs' ||
      window.location.pathname === '/programs/';

    if (!isProgramsPage) {
      return undefined;
    }

    const originalTitle = document.title;

    const existingDescription = document.querySelector(
      'meta[name="description"]'
    );

    const originalDescription = existingDescription
      ? existingDescription.getAttribute('content')
      : null;

    document.title =
      'Preschool Programs in Gerugambakkam, Chennai | Sunny Bears Preschool';

    if (existingDescription) {
      existingDescription.setAttribute(
        'content',
        'Explore Play Group, Pre-KG, LKG, UKG, Day Care and activity programs at Sunny Bears Preschool in Gerugambakkam, Chennai. Discover joyful, play-based early learning for children.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content =
        'Explore Play Group, Pre-KG, LKG, UKG, Day Care and activity programs at Sunny Bears Preschool in Gerugambakkam, Chennai. Discover joyful, play-based early learning for children.';
      document.head.appendChild(meta);
    }

    return () => {
      document.title = originalTitle;

      if (existingDescription && originalDescription) {
        existingDescription.setAttribute(
          'content',
          originalDescription
        );
      }
    };
  }, []);

  /*
   * ============================================================
   * PROGRAM STRUCTURED DATA
   *
   * Added only for the dedicated /programs page.
   * ============================================================
   */
  useEffect(() => {
    const isProgramsPage =
      window.location.pathname === '/programs' ||
      window.location.pathname === '/programs/';

    if (!isProgramsPage) {
      return undefined;
    }

    const script = document.createElement('script');

    script.type = 'application/ld+json';
    script.id = 'sunny-bears-programs-schema';

    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Sunny Bears Preschool Programs',
      description:
        'Preschool, daycare and learning programs offered by Sunny Bears Preschool in Gerugambakkam, Chennai.',
      numberOfItems: PROGRAMS_DATA.length,
      itemListElement: PROGRAMS_DATA.map((program, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: program.title,
        url: `https://www.sunnybearspreschool.com/programs#${program.id}`,
      })),
    });

    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById(
        'sunny-bears-programs-schema'
      );

      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  /*
   * ============================================================
   * PROGRAM CTA
   *
   * On homepage:
   *     #enquire
   *
   * On dedicated Programs page:
   *     /contact
   *
   * This keeps existing homepage functionality while making
   * the standalone Programs page navigate correctly.
   * ============================================================
   */
  const getEnquiryLink = () => {
    const isProgramsPage =
      window.location.pathname === '/programs' ||
      window.location.pathname === '/programs/';

    return isProgramsPage ? '/contact' : '#enquire';
  };

  const isProgramsPage =
    window.location.pathname === '/programs' ||
    window.location.pathname === '/programs/';

  return (
    <section
      className="programs-section"
      id="programs"
    >
      {/* =====================================================
          BACKGROUND DECORATIVE DOODLES
      ====================================================== */}
      <div className="programs-doodles">
        <div className="doodle-sun">
          <svg
            viewBox="0 0 100 100"
            width="85"
            height="85"
            aria-hidden="true"
          >
            <circle
              cx="50"
              cy="50"
              r="24"
              fill="#FFC72C"
            />

            <path
              d="M50 10 L50 20 M50 80 L50 90 M10 50 L20 50 M80 50 L90 50 M22 22 L29 29 M71 71 L78 78 M22 78 L29 71 M71 22 L78 29"
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

        <span
          className="prog-doodle plane"
          aria-hidden="true"
        >
          ✈️
        </span>

        <span
          className="prog-doodle star"
          aria-hidden="true"
        >
          ⭐
        </span>

        <span
          className="prog-doodle heart"
          aria-hidden="true"
        >
          💖
        </span>

        {/* ABC Blocks Top Right */}
        <div className="abc-blocks">
          <div className="block block-a">A</div>
          <div className="block block-b">B</div>
          <div className="block block-c">C</div>
        </div>
      </div>

      <div className="programs-container">

        {/* ===================================================
            SEO / PAGE HEADER
        ==================================================== */}
        <div className="programs-header">

          <div className="programs-top-tag">
            <span aria-hidden="true">🍃</span>
            <span>
              {isProgramsPage
                ? 'PRESCHOOL PROGRAMS IN CHENNAI'
                : 'OUR PROGRAMS'}
            </span>
            <span aria-hidden="true">🍃</span>
          </div>

          {isProgramsPage ? (
            <h1 className="programs-main-title">
              Preschool Programs in{' '}
              <span className="title-green">
                Gerugambakkam,
              </span>{' '}
              <span className="title-blue">
                Chennai
              </span>
            </h1>
          ) : (
            <h2 className="programs-main-title">
              Every Age.{' '}
              <span className="title-green">
                A{' '}
              </span>
              <span className="title-blue">
                New{' '}
              </span>
              <span className="title-orange">
                Adventure.
              </span>
            </h2>
          )}

          <p className="programs-subtitle">
            Explore thoughtfully designed early learning
            programs at Sunny Bears Preschool in
            Gerugambakkam, Chennai — from Play Group and
            Pre-KG to LKG, UKG, Day Care and engaging
            enrichment activities.
          </p>

          {isProgramsPage && (
            <p className="programs-seo-intro">
              Sunny Bears Preschool offers age-appropriate
              learning experiences for children aged 2–6
              years, along with Day Care from 1 year
              onwards. Our programs encourage children to
              learn through play, exploration, creativity,
              communication and meaningful everyday
              experiences in a warm and nurturing
              environment.
            </p>
          )}
        </div>

        {/* ===================================================
            PROGRAMS GRID
        ==================================================== */}
        <div className="programs-grid">
          {PROGRAMS_DATA.map((prog) => (
            <article
              key={prog.id}
              className={`program-card ${prog.borderColor}`}
              id={isProgramsPage ? prog.id : undefined}
            >
              {/* Card Header Info */}
              <div className="card-top-header">
                <div
                  className={`program-icon-wrap ${prog.iconColor}`}
                  aria-hidden="true"
                >
                  {prog.icon}
                </div>

                <h3 className="program-card-title">
                  {prog.title}
                </h3>

                {prog.ageBadge && (
                  <span
                    className={`age-badge ${prog.badgeColor}`}
                  >
                    {prog.ageBadge}
                  </span>
                )}
              </div>

              {/* Program Photo */}
              <div className="program-image-frame">
                <img
                  src={prog.image}
                  alt={prog.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Description */}
              <p className="program-card-desc">
                {prog.description}
              </p>

              {/* Action Link */}
              <a
                href={getEnquiryLink()}
                className={`program-link ${prog.linkColor}`}
                aria-label={`Enquire about ${prog.title}`}
              >
                <span>
                  {isProgramsPage
                    ? `Enquire About ${prog.title}`
                    : 'Learn More'}
                </span>

                <span
                  className="arrow"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            </article>
          ))}
        </div>

        {/* ===================================================
            SEO SUPPORTING CONTENT
        ==================================================== */}
        {isProgramsPage && (
          <section
            className="programs-seo-content"
            aria-labelledby="programs-learning-heading"
          >
            <div className="programs-seo-content-inner">

              <span className="programs-seo-kicker">
                EARLY LEARNING IN GERUGAMBAKKAM
              </span>

              <h2 id="programs-learning-heading">
                Learning Programs Designed for
                Growing Minds
              </h2>

              <p>
                Choosing the right preschool program is
                an important part of a child's early
                learning journey. At Sunny Bears
                Preschool, each age group is given
                experiences suited to their stage of
                development, interests and growing
                independence.
              </p>

              <p>
                Our Play Group, Pre-KG, LKG and UKG
                programs combine play, communication,
                creativity, exploration and age-
                appropriate learning experiences. We
                also offer Day Care and additional
                activities for families looking for
                flexible childcare and enrichment
                options in Gerugambakkam, Chennai.
              </p>

              <div className="programs-seo-highlights">

                <div>
                  <strong>
                    Play-Based Learning
                  </strong>

                  <span>
                    Children discover concepts through
                    play, stories, activities and
                    exploration.
                  </span>
                </div>

                <div>
                  <strong>
                    Age-Appropriate Programs
                  </strong>

                  <span>
                    Programs are organized around
                    children's different stages of early
                    development.
                  </span>
                </div>

                <div>
                  <strong>
                    Holistic Development
                  </strong>

                  <span>
                    Activities support communication,
                    creativity, confidence, social skills
                    and independence.
                  </span>
                </div>

                <div>
                  <strong>
                    Day Care Support
                  </strong>

                  <span>
                    Flexible childcare support is
                    available for little ones from 1 year
                    onwards.
                  </span>
                </div>

              </div>

              <div className="programs-seo-cta">
                <p>
                  Looking for the right preschool program
                  for your child?
                </p>

                <a
                  href="/contact"
                  className="programs-seo-button"
                >
                  Enquire About Admissions →
                </a>
              </div>

            </div>
          </section>
        )}

        {/* ===================================================
            BOTTOM DECORATIVE FLOWERS & GROUND BAR
        ==================================================== */}
        <div className="programs-bottom-ground">
          <div
            className="flower-item"
            aria-hidden="true"
          >
            🌸
          </div>

          <div
            className="flower-item"
            aria-hidden="true"
          >
            🌼
          </div>

          <div
            className="flower-item"
            aria-hidden="true"
          >
            🌸
          </div>
        </div>

      </div>
    </section>
  );
};

export default Programs;