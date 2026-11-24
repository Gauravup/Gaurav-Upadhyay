'use client';

/* 
=============================================================================
  📘 ABOUT & EXPERIENCE SLIDE - FULLY RESPONSIVE (GAURAV UPADHYAY)
=============================================================================
*/

import { useState } from 'react';

export default function AboutSlide({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
    {
      role: "Full-Stack Web Developer",
      company: "SAVOIRE MEDIA LLP",
      period: "April 2026 - Present",
      points: [
        "Managed and delivered WordPress, Shopify, Wix, and custom web development projects tailored to diverse client requirements.",
        "Developed and implemented custom features, UI improvements, website redesigns, and performance optimizations.",
        "Managed end-to-end client communication, understanding project requirements, and ensuring timely delivery.",
        "Troubleshot and resolved hosting, domain, DNS, and technical issues (Cpanel/Hpanel)."
      ]
    },
    {
      role: "Web Developer",
      company: "A-websolutions",
      period: "July 2025 - January 2026",
      points: [
        "Developed and delivered responsive, user-friendly websites tailored to diverse client requirements.",
        "Implemented modern UI designs and responsive layouts using HTML, CSS, JavaScript, Bootstrap, and web technologies.",
        "Managed end-to-end website development, requirement analysis, development, testing, and deployment."
      ]
    },
    {
      role: "Web Developer",
      company: "360 Degree Media Connect",
      period: "January 2025 - June 2025",
      points: [
        "Developed and maintained responsive websites for multiple clients from design to deployment.",
        "Executed website redesign and UI enhancement projects, improving visual appeal, usability, and mobile responsiveness.",
        "Managed end-to-end development activities, testing, revisions, and ongoing maintenance."
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science (B.Sc.)",
      institution: "Veer Bahadur Singh Purvanchal University, Jaunpur, Uttar Pradesh",
      period: "July 2020 - May 2023",
      score: "CGPA: 8.21 / 10"
    },
    {
      degree: "Intermediate (12th)",
      institution: "P.V.S.S.I.C Arta Suryabhanpur Bhadohi, Uttar Pradesh",
      period: "June 2019 - March 2020",
      score: "Passed with First Class"
    },
    {
      degree: "High School (10th)",
      institution: "P.V.S.S.I.C Arta Suryabhanpur Bhadohi, Uttar Pradesh",
      period: "June 2017 - March 2018",
      score: "Passed with Distinction"
    }
  ];

  return (
    <div className="container-fluid px-2 px-md-4 px-lg-5 py-2 py-md-3">
      
      {/* Header */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
        <div className="text-start">
          <span className="hero-role-badge mb-1">
            <i className="bi bi-person-workspace text-info"></i>
            Career Journey & Background
          </span>
          <h2 className="display-6 fw-bold text-white m-0" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)' }}>
            About <span className="text-gradient-purple">Gaurav Upadhyay</span>
          </h2>
        </div>

        {/* Tab Switcher: Experience vs Education */}
        <div className="d-flex gap-2">
          <button 
            onClick={() => setActiveTab('experience')}
            className={`btn btn-sm rounded-pill px-3 py-1 ${activeTab === 'experience' ? 'btn-primary-glow' : 'btn-glass'}`}
            style={{ fontSize: '0.8rem' }}
          >
            <i className="bi bi-briefcase me-1"></i> Experience
          </button>
          <button 
            onClick={() => setActiveTab('education')}
            className={`btn btn-sm rounded-pill px-3 py-1 ${activeTab === 'education' ? 'btn-primary-glow' : 'btn-glass'}`}
            style={{ fontSize: '0.8rem' }}
          >
            <i className="bi bi-mortarboard me-1"></i> Education
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="row g-3 g-lg-4 text-start">
        
        {/* Left Side: Summary & Quick Facts */}
        <div className="col-12 col-lg-4">
          <div className="glass-panel h-100">
            <h5 className="text-white fw-bold mb-2">
              <i className="bi bi-person-lines-fill text-info me-2"></i>
              Professional Summary
            </h5>
            <p className="text-secondary small mb-3" style={{ lineHeight: '1.7', fontSize: '0.85rem' }}>
              Motivated Full Stack Web Developer with experience in responsive web development 
              using HTML, CSS, JavaScript, React.js, Python, Django, MySQL, Shopify, WordPress, and Git.
            </p>

            <hr className="border-secondary opacity-25 my-2 my-md-3" />

            <div className="d-flex flex-column gap-1 gap-md-2 small text-secondary" style={{ fontSize: '0.82rem' }}>
              <div><strong className="text-light">Languages:</strong> Hindi, English</div>
              <div><strong className="text-light">Location:</strong> Kalyan, Maharashtra</div>
              <div><strong className="text-light">Email:</strong> gauravupadhyay6095@gmail.com</div>
              <div><strong className="text-light">Phone:</strong> +91 9170648025</div>
            </div>

            <div className="mt-3">
              <a 
                href="/assets/Gaurav-Upadhyay-new-cv.pdf" 
                download="Gaurav-Upadhyay-CV.pdf"
                className="btn btn-sm btn-outline-info rounded-pill w-100 py-1 py-md-2 d-flex align-items-center justify-content-center gap-2"
                style={{ fontSize: '0.82rem' }}
              >
                <i className="bi bi-download"></i> Download Full Resume
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Timeline (Experience or Education) */}
        <div className="col-12 col-lg-8">
          <div className="glass-panel h-100">
            
            {activeTab === 'experience' ? (
              <div>
                <h5 className="text-white fw-bold mb-3">
                  <i className="bi bi-clock-history text-warning me-2"></i>
                  Work Experience
                </h5>

                <div className="d-flex flex-column gap-2 gap-md-3">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="p-2 p-md-3 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <div className="d-flex flex-wrap justify-content-between align-items-center mb-1">
                        <h6 className="text-white fw-bold m-0" style={{ fontSize: '0.92rem' }}>{exp.role}</h6>
                        <span className="badge bg-purple px-2 py-1" style={{ background: 'rgba(168, 85, 247, 0.3)', color: '#c084fc', fontSize: '0.72rem' }}>
                          {exp.period}
                        </span>
                      </div>
                      <div className="text-info small fw-semibold mb-2" style={{ fontSize: '0.82rem' }}>{exp.company}</div>
                      <ul className="text-secondary small mb-0 ps-3" style={{ fontSize: '0.8rem', lineHeight: '1.6' }}>
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx} className="mb-1">{pt}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <h5 className="text-white fw-bold mb-3">
                  <i className="bi bi-award text-warning me-2"></i>
                  Academic Qualifications
                </h5>

                <div className="d-flex flex-column gap-2 gap-md-3">
                  {education.map((edu, idx) => (
                    <div key={idx} className="p-3 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <div className="d-flex flex-wrap justify-content-between align-items-center mb-1">
                        <h6 className="text-white fw-bold m-0" style={{ fontSize: '0.92rem' }}>{edu.degree}</h6>
                        <span className="text-secondary small" style={{ fontSize: '0.75rem' }}>{edu.period}</span>
                      </div>
                      <div className="text-secondary small mb-1" style={{ fontSize: '0.82rem' }}>{edu.institution}</div>
                      <span className="badge bg-success bg-opacity-25 text-success border border-success border-opacity-50" style={{ fontSize: '0.75rem' }}>
                        {edu.score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
