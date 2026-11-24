'use client';

/* 
=============================================================================
  📘 HOME SLIDE - FULLY RESPONSIVE (GAURAV UPADHYAY)
=============================================================================
*/

import { useState, useEffect } from 'react';

export default function HomeSlide({ onNavigate }) {
  const roles = [
    "Full Stack Web Developer",
    "Frontend Web Developer",
    "Python & Django Developer",
    "PHP & MySQL Developer",
    "WordPress Developer"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(85);

        if (displayText === fullText) {
          setIsDeleting(true);
          setTypingSpeed(1600);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(45);

        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(400);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <div className="container-fluid px-2 px-md-4 px-lg-5 py-2 py-md-3">
      <div className="row align-items-center g-4 g-lg-5">
        
        {/* 
          =================================================================
          👈 LEFT SIDE: CONTENT (On mobile: below photo or first)
          =================================================================
        */}
        <div className="col-12 col-lg-7 text-center text-lg-start order-2 order-lg-1">
          
          <div className="d-flex flex-wrap justify-content-center justify-content-lg-start align-items-center gap-2 mb-2 mb-md-3 anim-fade-up-1">
            <span className="hero-role-badge">
              <i className="bi bi-code-slash text-info"></i>
              Full Stack Web Developer
            </span>
            <span className="badge rounded-pill bg-dark border border-secondary text-light px-2 px-md-3 py-1 py-md-2" style={{ fontSize: '0.75rem' }}>
              <i className="bi bi-geo-alt-fill text-danger me-1"></i>
              Kalyan, Maharashtra
            </span>
          </div>

          <h1 className="hero-main-title mb-2 anim-fade-up-1">
            Hi, I'm <span className="text-gradient-purple">Gaurav Arvind Upadhyay</span>
          </h1>

          {/* Dynamic Animated Typing Text */}
          <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-2 mb-md-3 anim-fade-up-2" style={{ minHeight: '34px' }}>
            <span className="fs-5 fs-md-4 fw-bold text-light">I am a </span>
            <span className="fs-5 fs-md-4 fw-bold text-info ms-2">
              {displayText}
            </span>
            <span className="typing-cursor"></span>
          </div>

          {/* Real CV Summary */}
          <p className="text-secondary mb-3 mb-md-4 mx-auto mx-lg-0 anim-fade-up-2" style={{ maxWidth: '640px', fontSize: 'clamp(0.88rem, 1.6vw, 1.05rem)', lineHeight: '1.7' }}>
            Motivated Full Stack Web Developer experienced in building scalable web applications, 
            integrating Razorpay APIs, and crafting responsive UI with <strong>HTML5, CSS3, JavaScript, React.js, Python, Django, PHP & MySQL</strong>.
          </p>

          {/* Tech Stack Pills from CV */}
          <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-1 gap-md-2 mb-3 mb-md-4 anim-fade-up-3">
            <span className="tech-tag"><i className="bi bi-filetype-jsx text-info"></i> React.js</span>
            <span className="tech-tag"><i className="bi bi-lightning-charge text-warning"></i> Next.js</span>
            <span className="tech-tag"><i className="bi bi-filetype-py text-success"></i> Python & Django</span>
            <span className="tech-tag"><i className="bi bi-database text-info"></i> PHP & MySQL</span>
            <span className="tech-tag"><i className="bi bi-wordpress text-primary"></i> WordPress</span>
            <span className="tech-tag"><i className="bi bi-bag-check-fill text-success"></i> Shopify</span>
            <span className="tech-tag"><i className="bi bi-credit-card-2-front text-warning"></i> Razorpay API</span>
          </div>

          {/* Action Buttons */}
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-2 gap-md-3 anim-fade-up-3">
            <button 
              onClick={() => onNavigate(4)} 
              className="btn-primary-glow"
            >
              <span>Get In Touch</span>
              <i className="bi bi-arrow-right"></i>
            </button>

            <a 
              href="/assets/Gaurav-Upadhyay-new-cv.pdf" 
              download="Gaurav-Upadhyay-CV.pdf"
              className="btn-glass"
              title="Download Gaurav's Official Resume"
            >
              <i className="bi bi-file-earmark-pdf-fill text-danger"></i>
              <span>Hire Me</span>
            </a>

            <button 
              onClick={() => onNavigate(3)} 
              className="btn-glass"
            >
              <i className="bi bi-code-slash"></i>
              <span>Projects</span>
            </button>
          </div>

        </div>

        {/* 
          =================================================================
          👉 RIGHT SIDE: GAURAV'S PHOTO WITH ANIMATED HALO AURA
          =================================================================
        */}
        <div className="col-12 col-lg-5 order-1 order-lg-2">
          <div className="hero-image-container">
            
            <div className="hero-image-aura"></div>

            <div className="hero-image-frame">
              <img
                src="/assets/gaurav-image.jpg"
                alt="Gaurav Arvind Upadhyay - Full Stack Web Developer in Mumbai"
                title="Gaurav Arvind Upadhyay - Full Stack Web Developer Portfolio"
                loading="eager"
                itemProp="image"
                className="hero-avatar-img"
              />
            </div>

            <div className="floating-exp-badge d-flex align-items-center gap-2">
              <span className="badge rounded-circle bg-success p-1">
                <span className="visually-hidden">Online</span>
              </span>
              <span className="small text-white fw-bold">Open to Opportunities</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
