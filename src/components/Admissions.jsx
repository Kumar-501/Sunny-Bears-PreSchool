import React, { useState } from 'react';
import './Admissions.css';

const FAQ_ITEMS = [
  {
    id: 1,
    question: 'What is the admission age at Sunny Bears Preschool?',
    answer:
      'Sunny Bears Preschool welcomes children for school programs between 2 and 6 years of age. Day care is available for little ones from 1 year onwards.',
  },
  {
    id: 2,
    question: 'Which programs are available?',
    answer:
      'We offer Playgroup (PG), Pre-KG, Lower Kindergarten (LKG), Upper Kindergarten (UKG), Day Care, Summer Camp, and Evening Tuition from KG to 8th standard.',
  },
  {
    id: 3,
    question: 'How can I apply for admission?',
    answer:
      'You can apply by filling out our online Admission Enquiry Form above or by calling us directly at 9791751787. Our admissions team will happily guide you through the next steps.',
  },
  {
    id: 4,
    question: 'Can parents visit the preschool?',
    answer:
      'Yes! We warmly invite parents to visit our campus located at 15C, Artha Royal Gardenia Phase 2, Raniammai 2nd Street, Sri Pachaiammai Nagar, Gerugambakkam, Chennai - 600128. Please contact us to schedule a tour.',
  },
  {
    id: 5,
    question: 'Is day care available?',
    answer:
      'Yes, daycare services are available from 1 year onwards with flexible care options. Our operating hours are Monday to Friday (8:30 AM – 7:00 PM) and Saturday (10:00 AM – 1:00 PM).',
  },
  {
    id: 6,
    question: 'What activities do children participate in?',
    answer:
      'Children engage in fun-filled activities including art, music, movement, storytelling, play-based learning, phonics, numbers, STEM toys, and supervised outdoor games.',
  },
  {
    id: 7,
    question: 'What is the location of Sunny Bears Preschool?',
    answer:
      'We are located at 15C, Artha Royal Gardenia Phase 2, Raniammai 2nd Street, Sri Pachaiammai Nagar, Gerugambakkam, Chennai, Tamil Nadu - 600128 (Phone: 9791751787).',
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'Sunny Bears has been a second home for my daughter. The teachers are extraordinarily patient, caring, and supportive. Her confidence has grown immensely!',
    parentName: 'Priya R.',
    subtext: 'PARENT OF A PLAY GROUP STUDENT',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'The learning environment is so vibrant and safe. My son loves going to school every morning. Highly recommend Sunny Bears to all parents in Gerugambakkam!',
    parentName: 'Karthik M.',
    subtext: 'PARENT OF AN LKG STUDENT',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'As working parents, finding a reliable day care was crucial for us. Sunny Bears provides clean facilities, wonderful activities, and complete peace of mind.',
    parentName: 'Deepa & Vijay S.',
    subtext: 'PARENT OF A DAY CARE CHILD',
    rating: 5,
  },
];

const INITIAL_FORM_DATA = {
  parentName: '',
  email: '',
  phone: '',
  alternatePhone: '',
  childName: '',
  childAge: '',
  program: '',
  contactTime: 'Any time',
  message: '',
  agree: false,
};

const Admissions = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [openFaq, setOpenFaq] = useState(1);

  // Success popup state
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Loading state to prevent multiple submissions
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const scrollToEnquiryForm = () => {
    const formElement = document.getElementById('enquire');

    if (formElement) {
      const navbarHeight = 80;

      const elementPosition =
        formElement.getBoundingClientRect().top + window.pageYOffset;

      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    const payload = {
      access_key: '4fd7c766-cfdc-4707-a3b8-63616d1aadbe',

      subject: `New Admission Enquiry for ${formData.childName}`,

      from_name: 'Sunny Bears Admissions Form',

      parentName: formData.parentName,

      email: formData.email,

      phone: formData.phone,

      alternatePhone: formData.alternatePhone || 'Not provided',

      childName: formData.childName,

      childAge: formData.childAge,

      program: formData.program,

      contactTime: formData.contactTime,

      message: formData.message || 'No additional message provided',
    };

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },

          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (result.success) {
        // Reset the form
        setFormData(INITIAL_FORM_DATA);

        // Show success popup
        setShowSuccessPopup(true);
      } else {
        alert(
          'Failed to send your admission enquiry. Please call us directly at 97917 51787.'
        );
      }
    } catch (error) {
      console.error('Error submitting form:', error);

      alert(
        'Network error. Please try again or call us directly at 97917 51787.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="admissions-root" id="admissions">

      {/* SUCCESS POPUP */}
      {showSuccessPopup && (
        <div
          className="admission-success-overlay"
          onClick={closeSuccessPopup}
        >
          <div
            className="admission-success-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="success-popup-close"
              onClick={closeSuccessPopup}
              aria-label="Close success popup"
            >
              ×
            </button>

            <div className="success-popup-icon">
              ✓
            </div>

            <h3>Application Submitted Successfully!</h3>

            <p>
              Thank you for applying to Sunny Bears Preschool.
            </p>

            <p className="success-popup-subtext">
              Our admissions team has received your enquiry and will contact
              you shortly.
            </p>

            <button
              type="button"
              className="success-popup-btn"
              onClick={closeSuccessPopup}
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* SECTION 1: ADMISSION ENQUIRY FORM */}
      <section className="admissions-section" id="enquire">
        <div className="admissions-container">
          <div className="admissions-grid">

            {/* LEFT COLUMN */}
            <div className="admissions-left-col">

              <span className="admissions-tag">
                ADMISSIONS OPEN 2026–27
              </span>

              <h2 className="admissions-main-title">
                Start Your Child's Sunny Journey
              </h2>

              <p className="admissions-description">
                Fill in the form and our team will get in touch with you
                regarding admissions. We welcome children aged 2–6 years for
                our school programs, and little ones from 1 year onwards for
                day care.
              </p>

              <ul className="admissions-check-list">
                <li>
                  <span className="check-badge">✓</span>
                  <span>Programs from Play Group to UKG</span>
                </li>

                <li>
                  <span className="check-badge">✓</span>
                  <span>Day care &amp; after-school care available</span>
                </li>

                <li>
                  <span className="check-badge">✓</span>
                  <span>Evening tuition for KG to 8th standard</span>
                </li>

                <li>
                  <span className="check-badge">✓</span>
                  <span>
                    Friendly guidance to help you choose the right program
                  </span>
                </li>
              </ul>

              <div className="direct-call-box">
                <p className="call-box-title">
                  Prefer to talk to us directly?
                </p>

                <a
                  href="tel:9791751787"
                  className="call-box-btn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>

                  <span>Call Us: 97917 51787</span>
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN - FORM */}
            <div className="admissions-form-card">

              <h3 className="form-title">
                Admission Enquiry Form
              </h3>

              <p className="form-subtitle">
                Fields marked * are required.
              </p>

              <form
                onSubmit={handleSubmit}
                className="enquiry-form"
              >

                {/* Parent Name + Email */}
                <div className="form-row">

                  <div className="form-group">
                    <label>
                      Parent / Guardian Name *
                    </label>

                    <input
                      type="text"
                      name="parentName"
                      placeholder="Enter your name"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      Email Address *
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* MOBILE NUMBER 01 + 02 */}
                <div className="form-row">

                  <div className="form-group">
                    <label>
                      Mobile Number *
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      pattern="[0-9]{10}"
                      inputMode="numeric"
                      maxLength="10"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      Alternate Mobile Number
                      <span className="optional-label">
                        {' '}(Optional)
                      </span>
                    </label>

                    <input
                      type="tel"
                      name="alternatePhone"
                      placeholder="Mobile number 02"
                      value={formData.alternatePhone}
                      onChange={handleInputChange}
                      pattern="[0-9]{10}"
                      inputMode="numeric"
                      maxLength="10"
                    />
                  </div>
                </div>

                {/* CHILD NAME */}
                <div className="form-group full-width">
                  <label>
                    Child's Name *
                  </label>

                  <input
                    type="text"
                    name="childName"
                    placeholder="Enter child's name"
                    value={formData.childName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* AGE + PROGRAM */}
                <div className="form-row">

                  <div className="form-group">
                    <label>
                      Child's Age *
                    </label>

                    <select
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">
                        Select age
                      </option>

                      <option value="1-2">
                        1 to 2 Years
                      </option>

                      <option value="2-3">
                        2 to 3 Years
                      </option>

                      <option value="3-4">
                        3 to 4 Years
                      </option>

                      <option value="4-5">
                        4 to 5 Years
                      </option>

                      <option value="5-6">
                        5 to 6 Years
                      </option>

                      <option value="6+">
                        Above 6 Years
                      </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>
                      Program of Interest *
                    </label>

                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">
                        Select program
                      </option>

                      <option value="Play Group">
                        Play Group (2-3 Yrs)
                      </option>

                      <option value="Pre-KG">
                        Pre-KG (3-4 Yrs)
                      </option>

                      <option value="LKG">
                        LKG (4-5 Yrs)
                      </option>

                      <option value="UKG">
                        UKG (5-6 Yrs)
                      </option>

                      <option value="Day Care">
                        Day Care (1+ Yrs)
                      </option>

                      <option value="Summer Camp">
                        Summer Camp (2+ Yrs)
                      </option>

                      <option value="Evening Tuition">
                        Evening Tuition (KG - 8th Std)
                      </option>
                    </select>
                  </div>
                </div>

                {/* CONTACT TIME */}
                <div className="form-group full-width">
                  <label>
                    Preferred Contact Time
                    <span className="optional-label">
                      {' '}(Optional)
                    </span>
                  </label>

                  <select
                    name="contactTime"
                    value={formData.contactTime}
                    onChange={handleInputChange}
                  >
                    <option value="Any time">
                      Any time
                    </option>

                    <option value="Morning (9 AM - 12 PM)">
                      Morning (9 AM - 12 PM)
                    </option>

                    <option value="Afternoon (12 PM - 4 PM)">
                      Afternoon (12 PM - 4 PM)
                    </option>

                    <option value="Evening (4 PM - 7 PM)">
                      Evening (4 PM - 7 PM)
                    </option>
                  </select>
                </div>

                {/* ADDITIONAL MESSAGE */}
                <div className="form-group full-width">
                  <label>
                    Additional Message
                    <span className="optional-label">
                      {' '}(Optional)
                    </span>
                  </label>

                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Tell us anything you would like us to know..."
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                {/* AGREEMENT */}
                <div className="form-checkbox-group">

                  <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleInputChange}
                    required
                  />

                  <label htmlFor="agree">
                    I agree to be contacted by Sunny Bears Preschool regarding
                    my admission enquiry.
                  </label>
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="form-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? 'Submitting Your Application...'
                    : 'Submit Admission Enquiry'}
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ADMISSION PROCESS */}
      <section className="process-section">
        <div className="process-container">

          <div className="section-header-center">
            <span className="sub-tag">
              ADMISSION PROCESS
            </span>

            <h2 className="section-main-title">
              Four Simple Steps to Join Us
            </h2>
          </div>

          <div className="process-steps-wrapper">

            <div className="step-card">
              <div className="step-icon step-yellow">
                📋
              </div>

              <span className="step-num">
                STEP 1
              </span>

              <h4>
                Submit Enquiry
              </h4>

              <p>
                Fill in the admission enquiry form online or contact our team
                directly.
              </p>
            </div>

            <div className="step-card">
              <div className="step-icon step-blue">
                💬
              </div>

              <span className="step-num">
                STEP 2
              </span>

              <h4>
                Talk to Our Team
              </h4>

              <p>
                Our team contacts the parent, answers questions, and shares
                program details.
              </p>
            </div>

            <div className="step-card">
              <div className="step-icon step-green">
                🏫
              </div>

              <span className="step-num">
                STEP 3
              </span>

              <h4>
                Visit Sunny Bears
              </h4>

              <p>
                Parents visit the campus to explore our safe and joyful
                learning environment.
              </p>
            </div>

            <div className="step-card">
              <div className="step-icon step-pink">
                ❇️
              </div>

              <span className="step-num">
                STEP 4
              </span>

              <h4>
                Begin The Journey
              </h4>

              <p>
                Complete the admission process and welcome your child to Sunny
                Bears!
              </p>
            </div>

          </div>

          <div className="process-cta-center">

            <button
              type="button"
              className="btn-process-cta"
              onClick={scrollToEnquiryForm}
            >
              Submit Admission Enquiry
            </button>

          </div>
        </div>
      </section>

      {/* SECTION 3: TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="testimonials-container">

          <div className="section-header-center">

            <span className="sub-tag">
              PARENT TESTIMONIALS
            </span>

            <h2 className="section-main-title">
              Loved by Little Learners &amp; Their Families
            </h2>

            <div className="rating-badge">
              ⭐ 4.9 / 5 Rating based on Parent Reviews
            </div>

          </div>

          <div className="testimonials-grid">

            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="testimonial-card"
              >
                <div className="quote-mark">
                  “
                </div>

                <div className="quote-box">
                  <p>
                    {t.quote}
                  </p>
                </div>

                <div className="parent-info">

                  <h5 className="parent-name">
                    {t.parentName}
                  </h5>

                  <span className="parent-subtext">
                    {t.subtext}
                  </span>

                </div>
              </div>
            ))}

          </div>

          <p className="testimonial-footer-note">
            Are you a Sunny Bears parent? We'd love to hear your story too!
            Share it with our team on your next visit.
          </p>

        </div>
      </section>

      {/* SECTION 4: FAQ */}
      <section
        className="faqs-section"
        id="faqs"
      >
        <div className="faqs-container">

          <div className="section-header-center">

            <span className="sub-tag">
              FAQS
            </span>

            <h2 className="section-main-title">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="faqs-list">

            {FAQ_ITEMS.map((faq) => (
              <div
                key={faq.id}
                className={`faq-item ${
                  openFaq === faq.id ? 'open' : ''
                }`}
              >

                <button
                  className="faq-question-btn"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span>
                    {faq.question}
                  </span>

                  <span className="faq-chevron">
                    {openFaq === faq.id ? '▲' : '▼'}
                  </span>
                </button>

                {openFaq === faq.id && (
                  <div className="faq-answer-content">
                    <p>
                      {faq.answer}
                    </p>
                  </div>
                )}

              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
};

export default Admissions;