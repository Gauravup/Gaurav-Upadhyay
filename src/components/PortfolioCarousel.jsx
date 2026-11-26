'use client';

/* 
=============================================================================
  📘 CINEMATIC CAROUSEL ENGINE - SMOOTH 3D DEPTH & PARALLAX TRANSITIONS
=============================================================================
  1. 3D Scale & Depth Zoom: Active slide scales up to 1.0; inactive slides scale to 0.93 with soft blur.
  2. Keyboard Arrow Support: Left & Right arrow keys navigate slides.
  3. Floating Ambient Glow Shift: Background lighting moves dynamically with the active slide.
  4. Floating Glass Arrow Navigation on left and right for seamless desktop navigation.
  5. Slide Index Indicator in bottom footer (01 / 05 • HOME).
=============================================================================
*/

import { useState, useEffect, useRef } from 'react';
import HomeSlide from './slides/HomeSlide';
import AboutSlide from './slides/AboutSlide';
import SkillsSlide from './slides/SkillsSlide';
import ProjectsSlide from './slides/ProjectsSlide';
import ContactSlide from './slides/ContactSlide';

export default function PortfolioCarousel({ onReplayIntro }) {
  const [activeSlide, setActiveSlide] = useState(0);

  // Touch Swipe tracking for Mobile phones
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const navItems = [
    { name: "Home", index: 0, label: "01 / 05 • HOME" },
    { name: "About & Experience", index: 1, shortName: "About", label: "02 / 05 • ABOUT" },
    { name: "Skills", index: 2, shortName: "Skills", label: "03 / 05 • SKILLS" },
    { name: "Projects", index: 3, shortName: "Projects", label: "04 / 05 • PROJECTS" },
    { name: "Contact", index: 4, shortName: "Contact", label: "05 / 05 • CONTACT" }
  ];

  // Dynamic ambient glow themes that evolve smoothly as the user slides across sections
  const slideGlowThemes = [
    { g1: 'rgba(168, 85, 247, 0.45)', g2: 'rgba(56, 189, 248, 0.35)' }, // Home: Purple & Cyan
    { g1: 'rgba(139, 92, 246, 0.42)', g2: 'rgba(16, 185, 129, 0.32)' }, // About: Violet & Emerald
    { g1: 'rgba(6, 182, 212, 0.45)', g2: 'rgba(234, 179, 8, 0.32)' },   // Skills: Cyan & Gold
    { g1: 'rgba(236, 72, 153, 0.45)', g2: 'rgba(168, 85, 247, 0.35)' }, // Projects: Magenta & Purple
    { g1: 'rgba(59, 130, 246, 0.45)', g2: 'rgba(168, 85, 247, 0.35)' }  // Contact: Blue & Violet
  ];

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % navItems.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? navItems.length - 1 : prev - 1));
  };

  // Keyboard Arrow Navigation (Desktop feeling)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if user is typing in form inputs/textarea
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        handleNextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        handlePrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Touch Handlers for Mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      if (activeSlide < navItems.length - 1) {
        setActiveSlide((prev) => prev + 1);
      }
    } else if (distance < -minSwipeDistance) {
      if (activeSlide > 0) {
        setActiveSlide((prev) => prev - 1);
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div 
      className="app-viewport"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      
      {/* Dynamic Ambient Background Glowing Orbs (Shifts position & glowing colors smoothly per slide) */}
      <div 
        className="ambient-glow-1"
        style={{
          background: `radial-gradient(circle, ${slideGlowThemes[activeSlide]?.g1 || 'rgba(168, 85, 247, 0.45)'} 0%, transparent 70%)`,
          transform: `translate(${activeSlide * 40}px, ${activeSlide % 2 === 0 ? '0px' : '35px'}) scale(${1 + (activeSlide % 2) * 0.1})`
        }}
      ></div>
      <div 
        className="ambient-glow-2"
        style={{
          background: `radial-gradient(circle, ${slideGlowThemes[activeSlide]?.g2 || 'rgba(56, 189, 248, 0.28)'} 0%, transparent 70%)`,
          transform: `translate(${-activeSlide * 45}px, ${activeSlide % 2 === 0 ? '0px' : '-25px'}) scale(${1 + ((activeSlide + 1) % 2) * 0.1})`
        }}
      ></div>

      {/* 
        =====================================================================
        🔝 PERSISTENT RESPONSIVE TOP NAVBAR
        =====================================================================
      */}
      <header className="container-fluid px-3 px-lg-4 py-2 py-lg-3 position-relative z-3">
        <div className="d-flex align-items-center justify-content-between">
          
          {/* Brand Logo Box with Letter 'G' */}
          <button 
            onClick={() => setActiveSlide(0)} 
            className="nav-logo-box border-0" 
            title="Gaurav Upadhyay Portfolio (Home)"
          >
            <span>G</span>
          </button>

          {/* Desktop Capsule Navigation */}
          <div className="d-none d-lg-flex nav-pill-center">
            {navItems.map((item) => (
              <button
                key={item.index}
                onClick={() => setActiveSlide(item.index)}
                className={`nav-btn-link ${activeSlide === item.index ? 'active' : ''}`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Right Action Icons & CV Download Button */}
          <div className="d-flex align-items-center gap-2">
            
            {/* Direct CV Download Pill Button in Navbar */}
            <a 
              href="/assets/Gaurav-Upadhyay-new-cv.pdf" 
              download="Gaurav-Upadhyay-CV.pdf"
              className="btn btn-sm btn-outline-info rounded-pill px-3 py-1 d-inline-flex align-items-center gap-1"
              title="Download Gaurav's Official Resume"
              style={{ fontSize: '0.82rem' }}
            >
              <i className="bi bi-file-earmark-arrow-down-fill text-danger"></i>
              <span>CV</span>
            </a>

            {/* Replay Intro Video Button (Step 1 Loader) */}
            <button 
              onClick={onReplayIntro}
              className="nav-icon-btn" 
              title="Replay Video & Greetings Loader (Step 1)"
            >
              <i className="bi bi-arrow-clockwise"></i>
            </button>

            {/* Next Section Slide Quick Button */}
            <button 
              onClick={handleNextSlide} 
              className="nav-icon-btn" 
              title="Slide to Next Section"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>

        </div>

        {/* Mobile & Tablet Scrollable Navigation Bar */}
        <div className="d-flex d-lg-none justify-content-center mt-2">
          <div className="nav-pill-center py-1 px-2 w-100 justify-content-around">
            {navItems.map((item) => (
              <button
                key={item.index}
                onClick={() => setActiveSlide(item.index)}
                className={`nav-btn-link py-1 px-2 small ${activeSlide === item.index ? 'active' : ''}`}
                style={{ fontSize: '0.76rem' }}
              >
                {item.shortName || item.name}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* 
        =====================================================================
        🎠 HORIZONTAL CAROUSEL VIEWPORT & SLIDER TRACK
        =====================================================================
      */}
      <main className="carousel-viewport">
        
        {/* Floating Left Arrow (Desktop / Tablet) */}
        {activeSlide > 0 && (
          <button 
            onClick={handlePrevSlide} 
            className="carousel-floating-nav carousel-nav-prev"
            title="Previous Section (Arrow Left)"
          >
            <i className="bi bi-arrow-left"></i>
          </button>
        )}

        {/* Floating Right Arrow (Desktop / Tablet) */}
        {activeSlide < navItems.length - 1 && (
          <button 
            onClick={handleNextSlide} 
            className="carousel-floating-nav carousel-nav-next"
            title="Next Section (Arrow Right)"
          >
            <i className="bi bi-arrow-right"></i>
          </button>
        )}

        <div 
          className="carousel-track"
          style={{
            transform: `translateX(-${activeSlide * 100}vw)`
          }}
        >
          {navItems.map((item, idx) => {
            const diff = idx - activeSlide;
            const stateClass = diff === 0 
              ? 'slide-active' 
              : diff < 0 
                ? 'slide-inactive slide-prev' 
                : 'slide-inactive slide-next';

            return (
              <div key={item.name} className="carousel-slide">
                <div className={`carousel-slide-inner ${stateClass}`}>
                  {idx === 0 && <HomeSlide onNavigate={(i) => setActiveSlide(i)} />}
                  {idx === 1 && <AboutSlide onNavigate={(i) => setActiveSlide(i)} />}
                  {idx === 2 && <SkillsSlide onNavigate={(i) => setActiveSlide(i)} />}
                  {idx === 3 && <ProjectsSlide onNavigate={(i) => setActiveSlide(i)} />}
                  {idx === 4 && <ContactSlide onNavigate={(i) => setActiveSlide(i)} />}
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* 
        =====================================================================
        🔻 PERSISTENT RESPONSIVE BOTTOM FOOTER BAR
        =====================================================================
      */}
      <footer className="container-fluid px-3 px-lg-4 py-2 position-relative z-3">
        <div className="row align-items-center justify-content-between g-2">
          
          {/* Left: Copyright */}
          <div className="col-12 col-md-4 text-center text-md-start order-2 order-md-1">
            <small className="text-secondary" style={{ fontSize: '0.78rem' }}>
              © 2026 Gaurav Upadhyay • All Rights Reserved
            </small>
          </div>

          {/* Center: Slide Indicator Pill (Interactive & Animated) */}
          <div className="col-12 col-md-4 text-center order-3 order-md-2">
            <button 
              onClick={handleNextSlide} 
              className="slide-indicator-pill border-0"
              title="Click to slide to next section"
            >
              <i className="bi bi-disc text-info"></i>
              <span>{navItems[activeSlide].label}</span>
              <i className="bi bi-chevron-right small text-secondary"></i>
            </button>
          </div>

          {/* Right: Contact & Social Media Links */}
          <div className="col-12 col-md-4 text-center text-md-end order-1 order-md-3">
            <div className="d-inline-flex align-items-center gap-2">
              
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/gaurav_upadhyay2002/" 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon-btn social-instagram" 
                title="Instagram: @gaurav_upadhyay2002"
              >
                <i className="bi bi-instagram"></i>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/gauravup" 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon-btn social-github" 
                title="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>

              {/* Email */}
              <a 
                href="mailto:gauravupadhyay6095@gmail.com" 
                className="social-icon-btn" 
                style={{ background: '#ea4335' }}
                title="Email"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/919170648025" 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon-btn" 
                style={{ background: '#25d366' }}
                title="WhatsApp"
              >
                <i className="bi bi-whatsapp"></i>
              </a>

              {/* Portfolio */}
              <a 
                href="https://gauravup.github.io/gauravupadhyay" 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon-btn social-linkedin" 
                title="Portfolio"
              >
                <i className="bi bi-globe"></i>
              </a>

            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
