'use client';

/* 
=============================================================================
  📘 HERO SECTION COMPONENT EXPLANATION (सिखने के लिए जरूरी जानकारी):
=============================================================================
  1. User Requirement:
     - Reference image jaisa hero section design karna hai.
     - Image ko bilkul LEFT me shift kiya hai (col-lg-5).
     - 'About me' ka section remove karke right side me main hero content diya hai.
     - Image: 'gaurav-image.jpg' from assets.
     - Animations: Floating avatar effect, pulsing halo aura, typing text effect, 
       mouse scroll bounce, aur glowing buttons.

  2. Typewriter Effect Logic:
     - 'useState' aur 'useEffect' ka use karke roles (jaise 'Full Stack Developer',
       'Next.js Specialist') ek-ek letter karke type hote hain aur delete hote hain.
=============================================================================
*/

import { useState, useEffect } from 'react';

export default function HeroSection({ onReplayIntro }) {
  // -------------------------------------------------------------------------
  // 1. DYNAMIC TYPEWRITER EFFECT STATES
  // -------------------------------------------------------------------------
  const roles = [
    "Full Stack Developer",
    "React & Next.js Specialist",
    "Software Engineer",
    "UI/UX & Animation Enthusiast"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward: Agla character add karo
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(90);

        // Jab poora word type ho jaye to 1.5s ruko
        if (displayText === fullText) {
          setIsDeleting(true);
          setTypingSpeed(1500);
        }
      } else {
        // Deleting backward: Ek character hatao
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(45);

        // Jab word poora delete ho jaye to agle word par switch karo
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(400);
        }
      }
    }, typingSpeed);

    // Cleanup: Timer clear karna zaruri hai
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section className="hero-wrapper">
      
      {/* Background Glowing Ambient Orbs */}
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>

      {/* 
        =====================================================================
        🔝 TOP NAVBAR (Reference Design ke mutabiq)
        =====================================================================
      */}
      <nav className="container-fluid px-lg-4 py-2 position-relative z-3">
        <div className="d-flex align-items-center justify-content-between">
          
          {/* Left: Brand Logo Box with Letter 'G' */}
          <a href="#" className="nav-logo-box" title="Gaurav Portfolio">
            <span>G</span>
          </a>

          {/* Center: Frosted Glass Capsule / Pill Navigation */}
          <div className="d-none d-md-flex nav-pill-center align-items-center gap-2">
            <a href="#home" className="nav-link-custom active">Home</a>
            <a href="#about" className="nav-link-custom">About</a>
            <a href="#skills" className="nav-link-custom">Skills</a>
            <a href="#projects" className="nav-link-custom">Projects</a>
            <a href="#contact" className="nav-link-custom">Contact</a>
          </div>

          {/* Right Action Icons & Replay Loader Button */}
          <div className="d-flex align-items-center gap-2">
            {/* Replay Intro Video Button */}
            <button 
              onClick={onReplayIntro}
              className="nav-icon-btn" 
              title="Replay Video & Greetings Loader (Step 1)"
            >
              <i className="bi bi-arrow-clockwise"></i>
            </button>

            {/* Search Icon Button */}
            <button className="nav-icon-btn" title="Search">
              <i className="bi bi-search"></i>
            </button>

            {/* Menu Hamburger Button */}
            <button className="nav-icon-btn d-md-none" title="Menu">
              <i className="bi bi-list fs-5"></i>
            </button>
          </div>

        </div>
      </nav>

      {/* 
        =====================================================================
        🎯 MAIN HERO CONTENT AREA (Image on LEFT, Content on RIGHT)
        =====================================================================
      */}
      <div className="container-fluid px-lg-5 my-auto py-4 position-relative z-2">
        <div className="row align-items-center g-5">
          
          {/* 
            =================================================================
            👈 LEFT SIDE: GAURAV'S IMAGE WITH ANIMATED AURA & FLOATING EFFECT
            =================================================================
          */}
          <div className="col-12 col-lg-5 order-2 order-lg-1">
            <div className="hero-image-container">
              
              {/* Glowing Purple Halo Aura behind photo */}
              <div className="hero-image-aura"></div>

              {/* Animated Floating Image Frame */}
              <div className="hero-image-frame">
                <img
                  src="/assets/gaurav-image.jpg"
                  alt="Gaurav"
                  className="hero-avatar-img"
                  onError={(e) => {
                    // Fallback agar image path me koi issue aaye
                    e.currentTarget.src = "/assets/gaurav-image.jpg";
                  }}
                />
              </div>

              {/* Floating Experience / Status Badge */}
              <div className="floating-exp-badge d-flex align-items-center gap-2">
                <span className="badge rounded-circle bg-success p-1">
                  <span className="visually-hidden">Online</span>
                </span>
                <span className="small text-white fw-bold">Available for Projects</span>
              </div>

            </div>
          </div>

          {/* 
            =================================================================
            👉 RIGHT SIDE: MAIN HERO TEXT & CALL TO ACTIONS
            =================================================================
          */}
          <div className="col-12 col-lg-7 order-1 order-lg-2 text-start ps-lg-4">
            
            {/* Top Subheading Badge */}
            <div className="mb-3">
              <span className="hero-role-badge">
                <i className="bi bi-stars text-warning"></i>
                Welcome to my creative space
              </span>
            </div>

            {/* Main Title Heading */}
            <h1 className="hero-main-title mb-3">
              Hi, I'm <span className="text-gradient-purple">Gaurav</span>
            </h1>

            {/* Dynamic Animated Typing Text */}
            <div className="d-flex align-items-center mb-4" style={{ minHeight: '40px' }}>
              <span className="fs-3 fw-bold text-light">I build </span>
              <span className="fs-3 fw-bold text-info ms-2">
                {displayText}
              </span>
              <span className="typing-cursor"></span>
            </div>

            {/* Bio Description */}
            <p className="lead text-secondary mb-4" style={{ maxWidth: '620px', fontSize: '1.1rem', lineHeight: '1.7' }}>
              Specialized in crafting animated, interactive, and high-performance modern web applications 
              with seamless user interfaces and clean architecture.
            </p>

            {/* Tech Stack Mini Tags */}
            <div className="d-flex flex-wrap gap-2 mb-5">
              <span className="tech-tag"><i className="bi bi-filetype-jsx text-info"></i> React.js</span>
              <span className="tech-tag"><i className="bi bi-lightning-charge-fill text-warning"></i> Next.js</span>
              <span className="tech-tag"><i className="bi bi-bootstrap-fill text-primary"></i> Bootstrap 5</span>
              <span className="tech-tag"><i className="bi bi-filetype-js text-warning"></i> JavaScript</span>
              <span className="tech-tag"><i className="bi bi-palette-fill text-info"></i> UI/UX</span>
            </div>

            {/* CTA Buttons (Matching Reference Design: Glowing primary & glass secondary) */}
            <div className="d-flex flex-wrap align-items-center gap-3">
              
              {/* Primary Glowing Action Button */}
              <a href="#contact" className="btn-primary-glow">
                <span>Get In Touch</span>
                <i className="bi bi-arrow-right"></i>
              </a>

              {/* Secondary Glass Action Button */}
              <a href="#cv" className="btn-glass">
                <i className="bi bi-download"></i>
                <span>Hire Me</span>
              </a>

            </div>

          </div>

        </div>
      </div>

      {/* 
        =====================================================================
        🔻 BOTTOM BAR: COPYRIGHT, MOUSE SCROLL INDICATOR, SOCIAL ICONS
        =====================================================================
      */}
      <div className="container-fluid px-lg-4 py-3 position-relative z-3">
        <div className="row align-items-center justify-content-between g-3">
          
          {/* Left: Copyright text (Matching Reference) */}
          <div className="col-12 col-md-4 text-center text-md-start">
            <small className="text-secondary" style={{ fontSize: '0.85rem' }}>
              @2026 Gaurav all right reserved
            </small>
          </div>

          {/* Center: Animated Mouse Scroll Indicator (Matching Reference) */}
          <div className="col-12 col-md-4 text-center">
            <div className="mouse-scroll-indicator" title="Scroll down">
              <div className="mouse-dot"></div>
            </div>
          </div>

          {/* Right: Colorful Social Icons (Matching Reference) */}
          <div className="col-12 col-md-4 text-center text-md-end">
            <div className="d-inline-flex align-items-center gap-2">
              
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-btn social-facebook" title="Facebook">
                <i className="bi bi-facebook"></i>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn social-instagram" title="Instagram">
                <i className="bi bi-instagram"></i>
              </a>

              {/* Twitter / X */}
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-btn social-twitter" title="X (Twitter)">
                <i className="bi bi-twitter-x"></i>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn social-linkedin" title="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>

              {/* GitHub */}
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon-btn social-github" title="GitHub">
                <i className="bi bi-github"></i>
              </a>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

