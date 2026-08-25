import React from 'react';
import './Contact.css';

const Contact = () => {
  const googleMapsEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2753909796065!2d80.1345!3d13.0185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260f1c9d8a54b%3A0x6b8f3e0987e4a123!2sGerugambakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin';

  const directionsUrl = 'https://maps.app.goo.gl/hvc7AZuCZ3mFQxaW6';

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Header Section */}
        <div className="contact-header">
          <span className="contact-tag">CONTACT US</span>
          <h2 className="contact-title">Let's Begin a Happy Learning Journey</h2>
          <p className="contact-subtitle">
            Have a question about admissions, programs or day care? Reach out — we'd love to hear from you.
          </p>
        </div>

        {/* 3 Contact Info Cards */}
        <div className="contact-cards-grid">
          {/* Card 1: Call Us */}
          <div className="contact-card">
            <div className="contact-icon-wrapper circle-yellow">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3 className="contact-card-title">Call Us</h3>
            <a href="tel:9791751787" className="contact-card-link">
              97917 51787
            </a>
          </div>

          {/* Card 2: Email Us */}
          <div className="contact-card">
            <div className="contact-icon-wrapper circle-blue">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3 className="contact-card-title">Email Us</h3>
            <a href="mailto:Sunnybearpreschool@gmail.com" className="contact-card-link text-break">
              Sunnybearpreschool@gmail.com
            </a>
          </div>

          {/* Card 3: Visit Us */}
          <div className="contact-card">
            <div className="contact-icon-wrapper circle-pink">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 className="contact-card-title">Visit Us</h3>
            <p className="contact-address">
              15C, Artha Royal Gardenia Phase 2, Raniammai 2nd Street, Sri Pachaiammai Nagar, Gerugambakkam, Chennai – 600128
            </p>
            <span className="landmark-tag">LANDMARK: OPP. KOCHAR ARJUN GARDEN</span>
          </div>
        </div>

        {/* Embedded Interactive Map */}
        <div className="map-frame-wrapper">
          <iframe
            title="Sunny Bears Preschool Location Map"
            src={googleMapsEmbedUrl}
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Get Directions Button linked directly to https://maps.app.goo.gl/hvc7AZuCZ3mFQxaW6 */}
        <div className="directions-btn-wrapper">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-get-directions"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2">
              <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
            </svg>
            <span>Get Directions</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;