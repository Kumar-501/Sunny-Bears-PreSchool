import React from 'react';
import './best-preschool-in-chennai.css';

// Existing Sunny Bears assets
import gallery16Img from '../assets/Gallery16.jpeg';
import gallery01Img from '../assets/Gallery01.jpeg';
import gallery02Img from '../assets/Gallery02.jpeg';
import gallery03Img from '../assets/Gallery03.jpeg';
import gallery04Img from '../assets/Gallery04.jpeg';
import gallery05Img from '../assets/Gallery05.jpeg';
import gallery06Img from '../assets/Gallery06.jpeg';

const BestPreschoolInChennai = () => {
  return (
    <main className="best-preschool-page">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="bpc-hero">
        <div className="bpc-hero-decoration bpc-sun">
          <span>☀️</span>
        </div>

        <div className="bpc-container bpc-hero-grid">

          {/* Hero Content */}
          <div className="bpc-hero-content">

            <div className="bpc-eyebrow">
              <span>⭐</span>
              <span>EARLY CHILDHOOD LEARNING IN CHENNAI</span>
            </div>

            <p className="bpc-location-label">
              <span>Gerugambakkam</span>
              <span>•</span>
              <span>Chennai</span>
            </p>

            <h1>
              Best Preschool in Chennai for
              <span> Happy Early Learning</span>
            </h1>

            <p className="bpc-hero-description">
              Sunny Bears Preschool is a warm and joyful preschool in
              Gerugambakkam, Chennai, where children learn through play,
              exploration, creativity and meaningful everyday experiences.
            </p>

            <p className="bpc-hero-supporting-text">
              With programs for Play Group, Pre-KG, LKG and UKG, along with
              daycare and engaging activities, we create a nurturing beginning
              for children as they learn, discover and grow.
            </p>
<div className="bpc-hero-actions">
  <a
    href="/contact"
    className="bpc-btn bpc-btn-primary"
  >
    Enquire for Admission
    <span>→</span>
  </a>

  <a
    href="/programs"
    className="bpc-btn bpc-btn-secondary"
  >
    Explore Programs
  </a>
</div>

            <div className="bpc-trust-row">
              <div>
                <strong>2–6</strong>
                <span>School Programs</span>
              </div>

              <div>
                <strong>1+</strong>
                <span>Daycare Age</span>
              </div>

              <div>
                <strong>2026–27</strong>
                <span>Admissions Open</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="bpc-hero-image-area">

            <div className="bpc-image-card">
              <img
                src={gallery01Img}
                alt="Children learning and playing at Sunny Bears Preschool in Gerugambakkam, Chennai"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            <div className="bpc-floating-card">
              <span className="bpc-floating-icon">💛</span>

              <div>
                <strong>Safe • Caring • Nurturing</strong>
                <small>Every child's early years matter.</small>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="bpc-section bpc-intro-section">
        <div className="bpc-container">

          <div className="bpc-section-heading">
            <span className="bpc-section-kicker">
              SUNNY BEARS PRESCHOOL
            </span>

            <h2>
              A Happy Beginning for a Brighter Future
            </h2>
          </div>

          <div className="bpc-intro-content">

            <div className="bpc-intro-main">
              <p>
                Choosing the right preschool is an important decision for
                every parent. The early years are a time when children begin
                developing confidence, communication, independence, social
                skills and a love for learning.
              </p>

              <p>
                At Sunny Bears Preschool, we believe children learn best when
                they feel safe, respected, encouraged and happy. Our preschool
                environment gives little learners opportunities to explore,
                play, communicate, create and discover at their own pace.
              </p>

              <p>
                Located in Gerugambakkam, Chennai, Sunny Bears Preschool
                provides early childhood learning experiences for children
                between 2 and 6 years, with daycare available for little ones
                from 1 year onwards.
              </p>
            </div>

            <div className="bpc-intro-highlight">
              <div className="bpc-quote-mark">“</div>

              <p>
                Every child is unique, capable and full of possibilities.
              </p>

              <span>
                — Sunny Bears Preschool
              </span>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          WHY SUNNY BEARS
      ====================================================== */}
      <section className="bpc-section bpc-why-section">
        <div className="bpc-container">

          <div className="bpc-section-heading center">
            <span className="bpc-section-kicker">
              WHY SUNNY BEARS
            </span>

            <h2>
              What Makes Sunny Bears a Special Place to Learn?
            </h2>

            <p>
              We focus on creating an environment where children can learn
              with joy while developing the skills they need for the next
              stage of their journey.
            </p>
          </div>

          <div className="bpc-why-grid">

            <article className="bpc-info-card">
              <div className="bpc-card-icon green">
                🌱
              </div>

              <h3>Learning Through Play</h3>

              <p>
                Children explore concepts through play, hands-on activities,
                stories, creativity and everyday experiences that make
                learning enjoyable.
              </p>
            </article>

            <article className="bpc-info-card">
              <div className="bpc-card-icon blue">
                🛡️
              </div>

              <h3>Safe & Caring Environment</h3>

              <p>
                We aim to provide a clean, secure and nurturing environment
                where children feel comfortable, supported and encouraged.
              </p>
            </article>

            <article className="bpc-info-card">
              <div className="bpc-card-icon yellow">
                😊
              </div>

              <h3>Happy Childhood Experiences</h3>

              <p>
                From classroom activities to celebrations and creative
                experiences, we encourage children to enjoy their early
                learning years.
              </p>
            </article>

            <article className="bpc-info-card">
              <div className="bpc-card-icon purple">
                👩‍🏫
              </div>

              <h3>Caring Educators</h3>

              <p>
                Our child-friendly approach encourages teachers to understand
                children's individual needs and support their development.
              </p>
            </article>

            <article className="bpc-info-card">
              <div className="bpc-card-icon orange">
                🎨
              </div>

              <h3>Creative Activities</h3>

              <p>
                Art, craft, music, dance, movement, storytelling and other
                activities help children express themselves and discover
                their interests.
              </p>
            </article>

            <article className="bpc-info-card">
              <div className="bpc-card-icon coral">
                💕
              </div>

              <h3>Holistic Development</h3>

              <p>
                We encourage social, emotional, cognitive and physical
                development alongside early academic foundations.
              </p>
            </article>

          </div>
        </div>
      </section>


      {/* =====================================================
          PROGRAMS
      ====================================================== */}
      <section className="bpc-section bpc-program-section">
        <div className="bpc-container">

          <div className="bpc-section-heading center">
            <span className="bpc-section-kicker">
              OUR PRESCHOOL PROGRAMS
            </span>

            <h2>
              Programs Designed Around Every Stage of Early Learning
            </h2>

            <p>
              Our programs are designed to grow with children as they develop
              new interests, skills and confidence.
            </p>
          </div>

          <div className="bpc-program-grid">

            <article className="bpc-program-card">
              <div className="bpc-program-number">01</div>

              <div className="bpc-program-image">
                <img
                  src={gallery02Img}
                  alt="Play Group learning activity at Sunny Bears Preschool"
                  loading="lazy"
                />
              </div>

              <div className="bpc-program-content">
                <span>2–3 YEARS</span>

                <h3>Play Group</h3>

                <p>
                  A gentle introduction to preschool where children begin
                  exploring social interaction, movement, play and discovery.
                </p>

                <a href="/#enquire">
                  Enquire about Play Group →
                </a>
              </div>
            </article>


            <article className="bpc-program-card">
              <div className="bpc-program-number">02</div>

              <div className="bpc-program-image">
                <img
                  src={gallery03Img}
                  alt="Pre-KG activity at Sunny Bears Preschool Chennai"
                  loading="lazy"
                />
              </div>

              <div className="bpc-program-content">
                <span>3–4 YEARS</span>

                <h3>Pre-KG</h3>

                <p>
                  Children experience structured learning through stories,
                  activities, creativity, communication and playful
                  exploration.
                </p>

                <a href="/#enquire">
                  Enquire about Pre-KG →
                </a>
              </div>
            </article>


            <article className="bpc-program-card">
              <div className="bpc-program-number">03</div>

              <div className="bpc-program-image">
                <img
                  src={gallery04Img}
                  alt="LKG classroom learning at Sunny Bears Preschool"
                  loading="lazy"
                />
              </div>

              <div className="bpc-program-content">
                <span>4–5 YEARS</span>

                <h3>LKG</h3>

                <p>
                  Children build confidence through language, phonics, numbers,
                  creativity and interactive learning experiences.
                </p>

                <a href="/#enquire">
                  Enquire about LKG →
                </a>
              </div>
            </article>


            <article className="bpc-program-card">
              <div className="bpc-program-number">04</div>

              <div className="bpc-program-image">
                <img
                  src={gallery05Img}
                  alt="UKG learning experience at Sunny Bears Preschool"
                  loading="lazy"
                />
              </div>

              <div className="bpc-program-content">
                <span>5–6 YEARS</span>

                <h3>UKG</h3>

                <p>
                  A supportive learning experience that helps children build
                  strong foundations and confidence for their next educational
                  journey.
                </p>

                <a href="/#enquire">
                  Enquire about UKG →
                </a>
              </div>
            </article>


            <article className="bpc-program-card">
              <div className="bpc-program-number">05</div>

              <div className="bpc-program-image">
                <img
                  src={gallery06Img}
                  alt="Daycare activities at Sunny Bears Preschool Gerugambakkam"
                  loading="lazy"
                />
              </div>

              <div className="bpc-program-content">
                <span>FROM 1 YEAR ONWARDS</span>

                <h3>Day Care</h3>

                <p>
                  A safe and engaging environment with supervised activities
                  and childcare support for families who need flexible care.
                </p>

                <a href="/#enquire">
                  Enquire about Daycare →
                </a>
              </div>
            </article>


            <article className="bpc-program-card bpc-program-card-simple">
              <div className="bpc-program-simple-icon">
                ✨
              </div>

              <div className="bpc-program-content">
                <span>AGES 2+ YEARS</span>

                <h3>Creative & Extra Activities</h3>

                <p>
                  Children can explore art and craft, music, dance, movement,
                  storytelling, games and other engaging experiences that
                  support holistic development.
                </p>

                <a href="/#programs">
                  Explore All Activities →
                </a>
              </div>
            </article>

          </div>

          <div className="bpc-centered-link">
            <a href="/#programs">
              View All Sunny Bears Programs →
            </a>
          </div>

        </div>
      </section>


      {/* =====================================================
          LEARNING APPROACH
      ====================================================== */}
      <section className="bpc-section bpc-learning-section">
        <div className="bpc-container bpc-learning-grid">

          <div className="bpc-learning-images">

            <div className="bpc-learning-image large">
              <img
                src={gallery16Img}
                alt="Sunny Bears Preschool founder and learning environment in Chennai"
                loading="lazy"
              />
            </div>

            <div className="bpc-learning-small-grid">

              <img
                src={gallery01Img}
                alt="Children enjoying a learning activity at Sunny Bears"
                loading="lazy"
              />

              <img
                src={gallery03Img}
                alt="Preschool classroom activity at Sunny Bears"
                loading="lazy"
              />

            </div>
          </div>


          <div className="bpc-learning-content">

            <span className="bpc-section-kicker">
              OUR APPROACH
            </span>

            <h2>
              Learning With Curiosity, Creativity & Confidence
            </h2>

            <p>
              Sunny Bears Preschool was founded with a simple vision: to
              create a joyful, nurturing and stimulating environment where
              children feel loved, respected and encouraged to learn.
            </p>

            <p>
              Our approach combines Montessori-inspired principles with
              hands-on experiences, creativity, independence and joyful
              learning. Children are encouraged to explore, discover,
              express themselves and grow at their own pace.
            </p>

            <div className="bpc-learning-points">

              <div>
                <span>✓</span>
                <div>
                  <strong>Curiosity</strong>
                  <p>
                    Encouraging children to ask, explore and discover.
                  </p>
                </div>
              </div>

              <div>
                <span>✓</span>
                <div>
                  <strong>Independence</strong>
                  <p>
                    Giving children opportunities to make choices and try
                    things for themselves.
                  </p>
                </div>
              </div>

              <div>
                <span>✓</span>
                <div>
                  <strong>Creativity</strong>
                  <p>
                    Supporting imagination through art, stories, music and
                    activities.
                  </p>
                </div>
              </div>

              <div>
                <span>✓</span>
                <div>
                  <strong>Confidence</strong>
                  <p>
                    Helping children communicate, participate and grow with
                    confidence.
                  </p>
                </div>
              </div>

            </div>

            <a
              href="/#why-sunny-bears"
              className="bpc-text-link"
            >
              Discover Why Sunny Bears →
            </a>

          </div>

        </div>
      </section>


      {/* =====================================================
          FOUNDER
      ====================================================== */}
      <section className="bpc-section bpc-founder-section">
        <div className="bpc-container">

          <div className="bpc-founder-card">

            <div className="bpc-founder-image">
              <img
                src={gallery16Img}
                alt="Founder and Center Head of Sunny Bears Preschool"
                loading="lazy"
              />
            </div>

            <div className="bpc-founder-content">

              <span className="bpc-section-kicker">
                MEET OUR FOUNDER
              </span>

              <h2>
                A Vision Built Around Happy Learning
              </h2>

              <h3>
                Mrs. Kayalvizhi Nandakumar
              </h3>

              <p className="bpc-founder-qualification">
                B.Tech, Advanced Diploma in Montessori And Primary Education
              </p>

              <p>
                Sunny Bears Preschool was founded with the belief that the
                early years of a child's life can create a strong foundation
                for lifelong learning.
              </p>

              <p>
                The school aims to combine care, creativity, independence,
                hands-on experiences and joyful learning so that children can
                enjoy their early educational journey while developing
                confidence and positive values.
              </p>

              <blockquote>
                “To build a preschool where children don't just prepare for
                school — they learn to love learning.”
              </blockquote>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          LOCATION / LOCAL SEO
      ====================================================== */}
      <section className="bpc-section bpc-location-section">
        <div className="bpc-container">

          <div className="bpc-location-grid">

            <div className="bpc-location-content">

              <span className="bpc-section-kicker">
                PRESCHOOL IN GERUGAMBAKKAM
              </span>

              <h2>
                A Convenient Early Learning Centre in Chennai
              </h2>

              <p>
                Sunny Bears Preschool is located in Gerugambakkam, Chennai,
                providing early childhood learning and daycare for families
                in the local community.
              </p>

              <p>
                If you are looking for a preschool in Gerugambakkam or an
                early learning centre around this part of Chennai, you can
                visit Sunny Bears to understand our programs, learning
                environment and admission process.
              </p>

              <div className="bpc-address-box">

                <strong>Sunny Bears Preschool</strong>

                <p>
                  15C, Artha Royal Gardenia Phase 2,
                  <br />
                  Raniammai 2nd Street,
                  <br />
                  Sri Pachaiammai Nagar,
                  <br />
                  Gerugambakkam, Chennai – 600128
                </p>

                <p>
                  <strong>Landmark:</strong> Opp. Kochar Arjun Garden
                </p>

                <a href="tel:9791751787">
                  📞 97917 51787
                </a>

              </div>

              <a
                href="https://maps.app.goo.gl/hvc7AZuCZ3mFQxaW6"
                target="_blank"
                rel="noopener noreferrer"
                className="bpc-btn bpc-btn-primary"
              >
                Get Directions →
              </a>

            </div>


            <div className="bpc-location-visual">

              <div className="bpc-location-card">
                <div className="bpc-location-pin">
                  📍
                </div>

                <h3>
                  Sunny Bears Preschool
                </h3>

                <p>
                  Gerugambakkam, Chennai
                </p>

                <span>
                  Tamil Nadu, India
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          ACTIVITIES
      ====================================================== */}
      <section className="bpc-section bpc-activity-section">
        <div className="bpc-container">

          <div className="bpc-section-heading center">

            <span className="bpc-section-kicker">
              LEARNING THROUGH EXPERIENCE
            </span>

            <h2>
              More Than Classroom Learning
            </h2>

            <p>
              Children learn through experiences. Our activities encourage
              creativity, communication, movement, curiosity and interaction.
            </p>

          </div>

          <div className="bpc-activity-grid">

            <div className="bpc-activity-card">
              <img
                src={gallery02Img}
                alt="Creative activity at Sunny Bears Preschool"
                loading="lazy"
              />

              <div>
                <h3>Creative Activities</h3>
                <p>
                  Art, craft and hands-on activities encourage imagination and
                  self-expression.
                </p>
              </div>
            </div>

            <div className="bpc-activity-card">
              <img
                src={gallery04Img}
                alt="Children learning together at Sunny Bears Preschool"
                loading="lazy"
              />

              <div>
                <h3>Interactive Learning</h3>
                <p>
                  Children participate, communicate and learn through engaging
                  classroom experiences.
                </p>
              </div>
            </div>

            <div className="bpc-activity-card">
              <img
                src={gallery05Img}
                alt="Happy children at Sunny Bears Preschool Chennai"
                loading="lazy"
              />

              <div>
                <h3>Play & Movement</h3>
                <p>
                  Movement and play help children develop confidence,
                  coordination and social interaction.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FAQ
      ====================================================== */}
      <section className="bpc-section bpc-faq-section">
        <div className="bpc-container">

          <div className="bpc-section-heading center">

            <span className="bpc-section-kicker">
              PARENT FAQ
            </span>

            <h2>
              Frequently Asked Questions About Sunny Bears Preschool
            </h2>

            <p>
              Here are some common questions parents may have when exploring
              preschool and daycare options in Chennai.
            </p>

          </div>

          <div className="bpc-faq-list">

            <details open>
              <summary>
                What age group does Sunny Bears Preschool accept?
                <span>+</span>
              </summary>

              <p>
                Sunny Bears Preschool welcomes children for school programs
                between 2 and 6 years of age. Daycare is available for little
                ones from 1 year onwards, subject to current availability and
                admission requirements.
              </p>
            </details>


            <details>
              <summary>
                Which preschool programs are available?
                <span>+</span>
              </summary>

              <p>
                Sunny Bears offers Play Group, Pre-KG, LKG and UKG programs.
                The school also provides daycare and other learning and
                activity options.
              </p>
            </details>


            <details>
              <summary>
                Where is Sunny Bears Preschool located?
                <span>+</span>
              </summary>

              <p>
                Sunny Bears Preschool is located at 15C, Artha Royal Gardenia
                Phase 2, Raniammai 2nd Street, Sri Pachaiammai Nagar,
                Gerugambakkam, Chennai – 600128.
              </p>
            </details>


            <details>
              <summary>
                Does Sunny Bears provide daycare?
                <span>+</span>
              </summary>

              <p>
                Yes. Sunny Bears provides daycare for little ones from 1 year
                onwards. Parents can contact the school to confirm current
                availability, timings and admission details.
              </p>
            </details>


            <details>
              <summary>
                What learning approach does Sunny Bears follow?
                <span>+</span>
              </summary>

              <p>
                Sunny Bears focuses on joyful, hands-on and play-based learning
                with Montessori-inspired principles, creativity, exploration,
                independence and age-appropriate experiences.
              </p>
            </details>


            <details>
              <summary>
                How can parents enquire about admission?
                <span>+</span>
              </summary>

              <p>
                Parents can enquire through the admission form on the Sunny
                Bears website or contact the school directly at 97917 51787.
              </p>
            </details>

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="bpc-final-cta">

        <div className="bpc-container">

          <div className="bpc-final-cta-content">

            <span className="bpc-final-emoji">
              🌟
            </span>

            <h2>
              Looking for a Preschool in Chennai?
            </h2>

            <p>
              Give your child a joyful beginning at Sunny Bears Preschool in
              Gerugambakkam, Chennai.
            </p>

            <div className="bpc-final-actions">

              <a
                href="/#contact"
                className="bpc-btn bpc-btn-white"
              >
                Enquire for Admission
              </a>

              <a
                href="tel:9791751787"
                className="bpc-btn bpc-btn-outline-white"
              >
                Call 97917 51787
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default BestPreschoolInChennai;