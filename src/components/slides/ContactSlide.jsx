'use client';

/* 
=============================================================================
  📘 CONTACT SLIDE - MODERN DESIGN & ANIMATED SUCCESS MESSAGE
=============================================================================
  1. Animated Success Confirmation Card with glowing pulse checkmark.
  2. Redesigned modern glassmorphism contact form with input icons.
  3. Location: Kalyan, Maharashtra.
  4. Instagram: https://www.instagram.com/gaurav_upadhyay2002/
=============================================================================
*/

import { useState } from 'react';

export default function ContactSlide({ onNavigate }) {
  // Form input states
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  // UI status states
  const [isSending, setIsSending] = useState(false);
  const [submittedData, setSubmittedData] = useState(null); // Stores name & email when successfully sent
  const [errorMessage, setErrorMessage] = useState('');

  // -------------------------------------------------------------------------
  // Form Submit Handler
  // -------------------------------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // Show the beautiful success message card
        setSubmittedData({
          name: formState.name,
          email: formState.email,
        });
        setFormState({ name: '', email: '', message: '' });
      } else {
        setErrorMessage(data.error || 'Message send nahi ho paya. Kripya dobara koshish karein.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setErrorMessage('Network error: Server se connect nahi ho paya. Kripya connection check karein.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="container-fluid px-2 px-md-4 px-lg-5 py-2 py-md-3">
      <div className="row g-3 g-lg-4 align-items-center">
        
        {/* 
          =================================================================
          👈 LEFT SIDE: REAL CONTACT INFORMATION & LOCATION
          =================================================================
        */}
        <div className="col-12 col-lg-5 text-start">
          
          <div className="mb-2">
            <span className="hero-role-badge">
              <i className="bi bi-envelope-heart-fill text-danger"></i>
              Get in Touch with Gaurav
            </span>
          </div>

          <h2 className="display-6 fw-bold text-white mb-2 mb-md-3" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)' }}>
            Let's Collaborate & <span className="text-gradient-purple">Work Together</span>
          </h2>

          <p className="text-secondary small mb-3 mb-md-4" style={{ lineHeight: '1.65', fontSize: '0.85rem' }}>
            Seeking opportunities to contribute to innovative development teams. 
            Available for full-time roles, freelance projects, and custom web development.
          </p>

          {/* Contact Details Cards */}
          <div className="d-flex flex-column gap-2 mb-3 mb-md-4">
            
            {/* Direct Email */}
            <a 
              href="mailto:gauravupadhyay6095@gmail.com" 
              className="d-flex align-items-center gap-2 gap-md-3 text-decoration-none p-2 rounded-3"
              style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)' }}
            >
              <div className="nav-icon-btn text-info" style={{ width: '36px', height: '36px' }}>
                <i className="bi bi-envelope-at-fill"></i>
              </div>
              <div className="text-truncate">
                <small className="text-secondary d-block" style={{ fontSize: '0.7rem' }}>Direct Email</small>
                <span className="text-white fw-medium small text-truncate d-block">gauravupadhyay6095@gmail.com</span>
              </div>
            </a>

            {/* Phone / WhatsApp */}
            <a 
              href="https://wa.me/919170648025" 
              target="_blank" 
              rel="noreferrer"
              className="d-flex align-items-center gap-2 gap-md-3 text-decoration-none p-2 rounded-3"
              style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)' }}
            >
              <div className="nav-icon-btn text-success" style={{ width: '36px', height: '36px' }}>
                <i className="bi bi-whatsapp"></i>
              </div>
              <div>
                <small className="text-secondary d-block" style={{ fontSize: '0.7rem' }}>Phone & WhatsApp</small>
                <span className="text-white fw-medium small">+91 9170648025</span>
              </div>
            </a>

            {/* Location: Kalyan, Maharashtra */}
            <div 
              className="d-flex align-items-center gap-2 gap-md-3 p-2 rounded-3"
              style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)' }}
            >
              <div className="nav-icon-btn text-warning" style={{ width: '36px', height: '36px' }}>
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <small className="text-secondary d-block" style={{ fontSize: '0.7rem' }}>Current Location</small>
                <span className="text-white fw-medium small">Kalyan, Maharashtra, India</span>
              </div>
            </div>

            {/* Instagram Profile */}
            <a 
              href="https://www.instagram.com/gaurav_upadhyay2002/" 
              target="_blank" 
              rel="noreferrer"
              className="d-flex align-items-center gap-2 gap-md-3 text-decoration-none p-2 rounded-3"
              style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)' }}
            >
              <div className="nav-icon-btn text-danger" style={{ width: '36px', height: '36px' }}>
                <i className="bi bi-instagram"></i>
              </div>
              <div>
                <small className="text-secondary d-block" style={{ fontSize: '0.7rem' }}>Instagram</small>
                <span className="text-white fw-medium small">@gaurav_upadhyay2002</span>
              </div>
            </a>

          </div>

          <div className="d-flex gap-2">
            <button onClick={() => onNavigate(0)} className="btn btn-sm btn-glass py-1 px-3" style={{ fontSize: '0.8rem' }}>
              <i className="bi bi-arrow-left me-1"></i> Home
            </button>
            <a 
              href="/assets/Gaurav-Upadhyay-new-cv.pdf" 
              download="Gaurav-Upadhyay-CV.pdf"
              className="btn btn-sm btn-outline-info rounded-pill px-3 py-1"
              style={{ fontSize: '0.8rem' }}
            >
              <i className="bi bi-download me-1"></i> Hire Me
            </a>
          </div>

        </div>

        {/* 
          =================================================================
          👉 RIGHT SIDE: REDESIGNED MODERN FORM & ANIMATED SUCCESS MESSAGE
          =================================================================
        */}
        <div className="col-12 col-lg-7">
          <div className="modern-contact-card text-start">
            
            {/* If Form Submitted Successfully -> Show Beautiful Celebration Card */}
            {submittedData ? (
              <div className="success-celebration-card my-2">
                <div className="success-icon-pulse">
                  <i className="bi bi-check-lg"></i>
                </div>
                
                <h3 className="text-white fw-bold mb-2" style={{ fontSize: '1.4rem' }}>
                  Thank you, <span className="text-gradient-purple">{submittedData.name}</span>! 🎉
                </h3>

                <p className="text-light mb-3" style={{ fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '480px', margin: '0 auto' }}>
                  Aapka message successfully Gaurav ke Gmail inbox me deliver ho gaya hai. 
                  Gaurav aapse jaldi hi <strong className="text-info">{submittedData.email}</strong> par contact karenge!
                </p>

                <div className="d-flex justify-content-center gap-2 mt-4">
                  <button 
                    onClick={() => setSubmittedData(null)}
                    className="btn btn-sm btn-outline-light rounded-pill px-4 py-2"
                    style={{ fontSize: '0.85rem' }}
                  >
                    <i className="bi bi-pencil-square me-1"></i> Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              /* Modern Interactive Form */
              <div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div>
                    <h5 className="text-white fw-bold m-0" style={{ fontSize: '1.15rem' }}>
                      <i className="bi bi-chat-heart text-info me-2"></i>
                      Send a Direct Message
                    </h5>
                    <small className="text-secondary" style={{ fontSize: '0.78rem' }}>
                      Delivered straight to Gaurav's private inbox
                    </small>
                  </div>
                  <span className="badge rounded-pill bg-success bg-opacity-25 text-success border border-success border-opacity-50 px-2 py-1" style={{ fontSize: '0.72rem' }}>
                    <i className="bi bi-lightning-charge-fill me-1"></i> Fast Reply
                  </span>
                </div>

                {/* Error Alert */}
                {errorMessage && (
                  <div className="alert alert-danger bg-opacity-25 border-danger text-white py-2 rounded-3 mb-3" style={{ fontSize: '0.85rem' }}>
                    <i className="bi bi-exclamation-triangle-fill text-danger me-2"></i>
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    
                    {/* Name Input with Icon */}
                    <div className="col-12 col-md-6">
                      <label className="form-label text-secondary small fw-medium" style={{ fontSize: '0.78rem' }}>
                        Your Full Name *
                      </label>
                      <div className="input-icon-group">
                        <i className="bi bi-person input-icon-prefix"></i>
                        <input 
                          type="text" 
                          required 
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="form-control form-control-modern w-100" 
                          placeholder="e.g. Rahul Sharma"
                          disabled={isSending}
                        />
                      </div>
                    </div>

                    {/* Email Input with Icon */}
                    <div className="col-12 col-md-6">
                      <label className="form-label text-secondary small fw-medium" style={{ fontSize: '0.78rem' }}>
                        Your Email Address *
                      </label>
                      <div className="input-icon-group">
                        <i className="bi bi-envelope input-icon-prefix"></i>
                        <input 
                          type="email" 
                          required 
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="form-control form-control-modern w-100" 
                          placeholder="name@company.com"
                          disabled={isSending}
                        />
                      </div>
                    </div>

                    {/* Message Area with Icon */}
                    <div className="col-12">
                      <label className="form-label text-secondary small fw-medium" style={{ fontSize: '0.78rem' }}>
                        Your Project Inquiry or Message *
                      </label>
                      <div className="input-icon-group">
                        <i className="bi bi-chat-text textarea-icon-prefix"></i>
                        <textarea 
                          rows="3" 
                          required 
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="form-control form-control-modern w-100" 
                          placeholder="Hi Gaurav, I have a web development project / role I would like to discuss..."
                          disabled={isSending}
                        ></textarea>
                      </div>
                    </div>

                    {/* Modern Send Button with Loading Spinner */}
                    <div className="col-12 mt-3">
                      <button 
                        type="submit" 
                        disabled={isSending}
                        className="btn-send-modern"
                      >
                        {isSending ? (
                          <>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span>Sending Directly to Gaurav's Gmail...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <i className="bi bi-send-fill"></i>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
