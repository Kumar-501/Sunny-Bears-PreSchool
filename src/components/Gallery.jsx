import React, { useState } from 'react';
import './Gallery.css';

// Importing local images from assets
import independenceDayImg from '../assets/IndependenceDayClassroom.png';
import studentsRunningImg from '../assets/StudentsRunning.png';
import redColourDayImg from '../assets/SunnyBearsredcolourday.png';
import drawingsImg from '../assets/drawings.png';
import superheroesImg from '../assets/Superheroes.png';
import summerCampImg from '../assets/SummerCamp.png';
import lunchTimeImg from '../assets/Sunnybearslunchtime.png';

const GALLERY_IMAGES = [
  {
    id: 1,
    title: 'Independence Day Classroom Celebration',
    category: 'Celebration',
    src: independenceDayImg,
    doodle: '⭐',
  },
  {
    id: 2,
    title: 'Outdoor Sports & Fun Games',
    category: 'Activities',
    src: studentsRunningImg,
    doodle: '🏃‍♂️',
  },
  {
    id: 3,
    title: 'Sunny Bears Red Colour Day',
    category: 'Celebration',
    src: redColourDayImg,
    doodle: '💖',
  },
  {
    id: 4,
    title: 'Creative Art & Expression',
    category: 'Art & Crafts',
    src: drawingsImg,
    doodle: '🎨',
  },
  {
    id: 5,
    title: 'Superheroes Fancy Dress Day',
    category: 'Theme Day',
    src: superheroesImg,
    doodle: '✨',
  },
  {
    id: 6,
    title: 'Summer Camp Fun & Learning',
    category: 'Camp Fun',
    src: summerCampImg,
    doodle: '🧡',
  },
  {
    id: 7,
    title: 'Sunny Bears Meal & Lunch Time',
    category: 'Daily Routine',
    src: lunchTimeImg,
    doodle: '🌸',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="gallery-section" id="gallery">
      {/* Background Decorative Doodles */}
      <div className="gallery-doodles">
        {/* Top-Left Sun */}
        <div className="gallery-sun">
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

        {/* Top-Right Rainbow */}
        <div className="gallery-rainbow">
          <svg viewBox="0 0 120 70" width="110" height="65" fill="none">
            <path d="M10 60 A50 50 0 0 1 110 60" stroke="#FF5964" strokeWidth="6" strokeLinecap="round" />
            <path d="M20 60 A40 40 0 0 1 100 60" stroke="#FFCA3A" strokeWidth="6" strokeLinecap="round" />
            <path d="M30 60 A30 30 0 0 1 90 60" stroke="#8AC926" strokeWidth="6" strokeLinecap="round" />
            <path d="M40 60 A20 20 0 0 1 80 60" stroke="#1982C4" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </div>

        {/* Top-Right Peeking Bear */}
        <div className="peeking-bear">
          <svg viewBox="0 0 100 100" width="75" height="75">
            <circle cx="28" cy="30" r="13" fill="#C06C28" />
            <circle cx="28" cy="30" r="7" fill="#FDE68A" />
            <circle cx="72" cy="30" r="13" fill="#C06C28" />
            <circle cx="72" cy="30" r="7" fill="#FDE68A" />
            <ellipse cx="50" cy="54" rx="34" ry="29" fill="#C06C28" />
            <ellipse cx="50" cy="61" rx="18" ry="14" fill="#FDE68A" />
            <ellipse cx="50" cy="52" rx="7" ry="5" fill="#3B1E08" />
            <circle cx="38" cy="45" r="3.5" fill="#3B1E08" />
            <circle cx="62" cy="45" r="3.5" fill="#3B1E08" />
          </svg>
        </div>
      </div>

      <div className="gallery-container">
        {/* Header Formatting */}
        <div className="gallery-header">
          <div className="gallery-tag">
            <span>\</span>
            <span>GALLERY</span>
            <span>/</span>
          </div>
          <h2 className="gallery-title">Happy Moments at Sunny Bears</h2>
          <p className="gallery-subtitle">
            Glimpses of the laughter, learning, and little victories that fill our classrooms every day.
          </p>
        </div>

        {/* Photo Grid Layout */}
        <div className="gallery-grid">
          {/* Top Row: 3 Landscape Images */}
          <div className="gallery-row row-top">
            {GALLERY_IMAGES.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="gallery-card"
                onClick={() => openModal(item)}
              >
                <div className="card-image-wrap">
                  <img src={item.src} alt={item.title} loading="lazy" />
                  <div className="card-overlay">
                    <span className="view-btn">🔍 View Photo</span>
                  </div>
                </div>
                {item.doodle && <span className="floating-doodle">{item.doodle}</span>}
              </div>
            ))}
          </div>

          {/* Bottom Row: 4 Landscape Images */}
          <div className="gallery-row row-bottom">
            {GALLERY_IMAGES.slice(3, 7).map((item) => (
              <div
                key={item.id}
                className="gallery-card"
                onClick={() => openModal(item)}
              >
                <div className="card-image-wrap">
                  <img src={item.src} alt={item.title} loading="lazy" />
                  <div className="card-overlay">
                    <span className="view-btn">🔍 View Photo</span>
                  </div>
                </div>
                {item.doodle && <span className="floating-doodle">{item.doodle}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Left Sitting Teddy Bear Graphic */}
        <div className="sitting-teddy-graphic">
          <svg viewBox="0 0 100 100" width="90" height="90">
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

        {/* Bottom Ground Decoration */}
        <div className="gallery-bottom-ground">
          <div className="ground-flower">🌸</div>
          <div className="ground-flower">🌼</div>
          <div className="ground-plane">✈️</div>
          <div className="ground-flower">🌺</div>
        </div>
      </div>

      {/* Lightbox Fullscreen Modal */}
      {selectedImage && (
        <div className="gallery-lightbox" onClick={closeModal}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeModal}>×</button>
            <div className="lightbox-img-wrapper">
              <img src={selectedImage.src} alt={selectedImage.title} />
            </div>
            <div className="lightbox-caption">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;