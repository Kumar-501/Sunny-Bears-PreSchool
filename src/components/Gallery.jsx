import React, { useState } from 'react';
import './Gallery.css';

/*
 * Gallery16.jpeg -> Used in About Us / Founder section
 * Gallery17.jpeg -> Used in Hero section
 *
 * Gallery page uses the remaining 17 images:
 * Gallery01 - Gallery15
 * Gallery18
 * Gallery19
 */

// ============================================================
// GALLERY IMAGES
// ============================================================

import gallery01Img from '../assets/Gallery01.jpeg';
import gallery02Img from '../assets/Gallery02.jpeg';
import gallery03Img from '../assets/Gallery03.jpeg';
import gallery04Img from '../assets/Gallery04.jpeg';
import gallery05Img from '../assets/Gallery05.jpeg';
import gallery06Img from '../assets/Gallery06.jpeg';
import gallery07Img from '../assets/Gallery07.jpeg';
import gallery08Img from '../assets/Gallery08.jpeg';
import gallery09Img from '../assets/Gallery09.jpeg';
import gallery10Img from '../assets/Gallery10.jpeg';
import gallery11Img from '../assets/Gallery11.jpeg';
import gallery12Img from '../assets/Gallery12.jpeg';
import gallery13Img from '../assets/Gallery13.jpeg';
import gallery14Img from '../assets/Gallery14.jpeg';
import gallery15Img from '../assets/Gallery15.jpeg';
import gallery18Img from '../assets/Gallery18.jpeg';
import gallery19Img from '../assets/Gallery19.jpeg';

// ============================================================
// GALLERY DATA
// ============================================================

const GALLERY_IMAGES = [
  {
    id: 1,
    title: 'Sunny Bears School Celebration',
    category: 'Celebration',
    src: gallery01Img,
    doodle: '⭐',
  },
  {
    id: 2,
    title: 'Fun Classroom Activities',
    category: 'Activities',
    src: gallery02Img,
    doodle: '🎨',
  },
  {
    id: 3,
    title: 'Creative Learning Moments',
    category: 'Learning',
    src: gallery03Img,
    doodle: '🌈',
  },
  {
    id: 4,
    title: 'Happy Learning Together',
    category: 'Learning',
    src: gallery04Img,
    doodle: '💛',
  },
  {
    id: 5,
    title: 'Children at Sunny Bears',
    category: 'School Life',
    src: gallery05Img,
    doodle: '🧸',
  },
  {
    id: 6,
    title: 'Playful Learning Experience',
    category: 'Activities',
    src: gallery06Img,
    doodle: '🎈',
  },
  {
    id: 7,
    title: 'Sunny Bears School Moments',
    category: 'School Life',
    src: gallery07Img,
    doodle: '✨',
  },
  {
    id: 8,
    title: 'Sunny Bears Memories',
    category: 'Memories',
    src: gallery08Img,
    doodle: '💖',
  },
  {
    id: 9,
    title: 'Learning Through Experience',
    category: 'Learning',
    src: gallery09Img,
    doodle: '🌟',
  },
  {
    id: 10,
    title: 'Happy Children at School',
    category: 'School Life',
    src: gallery10Img,
    doodle: '😊',
  },
  {
    id: 11,
    title: 'Joyful Classroom Moments',
    category: 'Classroom',
    src: gallery11Img,
    doodle: '🎉',
  },
  {
    id: 12,
    title: 'Creative School Celebration',
    category: 'Celebration',
    src: gallery12Img,
    doodle: '🌸',
  },
  {
    id: 13,
    title: 'Fun With Friends',
    category: 'Activities',
    src: gallery13Img,
    doodle: '🤝',
  },
  {
    id: 14,
    title: 'Together We Learn',
    category: 'Learning',
    src: gallery14Img,
    doodle: '📚',
  },
  {
    id: 15,
    title: 'Special Sunny Bears Moment',
    category: 'Memories',
    src: gallery15Img,
    doodle: '💫',
  },
  {
    id: 18,
    title: 'Celebration at Sunny Bears',
    category: 'Celebration',
    src: gallery18Img,
    doodle: '🎊',
  },
  {
    id: 19,
    title: 'Happy Moments With Our Children',
    category: 'School Life',
    src: gallery19Img,
    doodle: '🌼',
  },
];

// ============================================================
// GALLERY COMPONENT
// ============================================================

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // ==========================================================
  // OPEN LIGHTBOX
  // ==========================================================

  const openModal = (img) => {
    setSelectedImage(img);
  };

  // ==========================================================
  // CLOSE LIGHTBOX
  // ==========================================================

  const closeModal = () => {
    setSelectedImage(null);
  };

  // ==========================================================
  // ESC KEY SUPPORT
  // ==========================================================

  React.useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedImage]);

  return (
    <section className="gallery-section" id="gallery">

      {/* ======================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      <div className="gallery-doodles">

        {/* Top-Left Sun */}
        <div className="gallery-sun" aria-hidden="true">
          <svg
            viewBox="0 0 100 100"
            width="85"
            height="85"
          >
            <circle
              cx="50"
              cy="50"
              r="24"
              fill="#FFC72C"
            />

            <path
              d="
                M50 10 L50 20
                M50 80 L50 90
                M10 50 L20 50
                M80 50 L90 50
                M22 22 L29 29
                M71 71 L78 78
                M22 78 L29 71
                M71 22 L78 29
              "
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

      {/* ======================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="gallery-container">

        {/* ====================================================
            HEADER
        ==================================================== */}

        <div className="gallery-header">

          <div className="gallery-tag">
            <span>\</span>
            <span>GALLERY</span>
            <span>/</span>
          </div>

          <h2 className="gallery-title">
            Happy Moments at Sunny Bears
          </h2>

          <p className="gallery-subtitle">
            Glimpses of the laughter, learning, and little
            victories that fill our classrooms every day.
          </p>

        </div>

        {/* ====================================================
            NORMAL IMAGE GRID
            ALL 17 IMAGES ARE DISPLAYED HERE
        ==================================================== */}

        <div className="gallery-grid">

          {GALLERY_IMAGES.map((item) => (

            <article
              key={item.id}
              className="gallery-card"
              onClick={() => openModal(item)}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title}`}
              onKeyDown={(event) => {
                if (
                  event.key === 'Enter' ||
                  event.key === ' '
                ) {
                  event.preventDefault();
                  openModal(item);
                }
              }}
            >

              {/* Image */}
              <div className="card-image-wrap">

                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                />

                {/* Hover Overlay */}
                <div className="card-overlay">

                  <span className="view-btn">
                    <span className="view-icon">
                      🔍
                    </span>

                    <span>
                      View Photo
                    </span>
                  </span>

                </div>

              </div>

              {/* Small Decorative Doodle */}
              {item.doodle && (
                <span
                  className="floating-doodle"
                  aria-hidden="true"
                >
                  {item.doodle}
                </span>
              )}

            </article>

          ))}

        </div>

        {/* ====================================================
            BOTTOM GROUND DECORATION
        ==================================================== */}

        <div
          className="gallery-bottom-ground"
          aria-hidden="true"
        >
          <div className="ground-flower">
            🌸
          </div>

          <div className="ground-flower">
            🌼
          </div>

          <div className="ground-plane">
            ✈️
          </div>

          <div className="ground-flower">
            🌺
          </div>
        </div>

      </div>

      {/* ======================================================
          FULLSCREEN LIGHTBOX
      ====================================================== */}

      {selectedImage && (

        <div
          className="gallery-lightbox"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
        >

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close Button */}
            <button
              type="button"
              className="lightbox-close"
              onClick={closeModal}
              aria-label="Close image preview"
            >
              ×
            </button>

            {/* Large Image */}
            <div className="lightbox-img-wrapper">

              <img
                src={selectedImage.src}
                alt={selectedImage.title}
              />

            </div>

            {/* Caption */}
            <div className="lightbox-caption">

              <h3>
                {selectedImage.title}
              </h3>

              <p>
                {selectedImage.category}
              </p>

            </div>

          </div>

        </div>

      )}

    </section>
  );
};

export default Gallery;