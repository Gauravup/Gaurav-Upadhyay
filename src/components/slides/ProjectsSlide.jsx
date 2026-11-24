'use client';

/* 
=============================================================================
  📘 PROJECTS SLIDE - FULLY RESPONSIVE (GAURAV UPADHYAY)
=============================================================================
*/

export default function ProjectsSlide({ onNavigate }) {
  const projects = [
    {
      title: "Pink Empress",
      category: "E-Commerce & Full Stack Web App",
      badge: "E-Commerce",
      desc: "Full Stack e-commerce web platform engineered for seamless shopping experience with product catalog, cart management, and secure Razorpay payment gateway integration.",
      techStack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Razorpay API", "Bootstrap"],
      features: [
        "Dynamic Product Catalog & Filtering",
        "Razorpay Payment Gateway Integration",
        "Responsive, mobile-friendly design"
      ],
      icon: "bi-bag-heart-fill",
      color: "#ec4899"
    },
    {
      title: "DermaGLO Laser Skin Clinic",
      category: "Healthcare & Clinic Web Application",
      badge: "Healthcare",
      desc: "Fully responsive healthcare platform featuring a custom-built Admin Panel for managing clinic treatment services, patient offers, and an automated newsletter campaign dashboard.",
      techStack: ["PHP", "MySQL", "JavaScript", "Razorpay API", "Bootstrap", "HTML5/CSS3"],
      features: [
        "Custom-built Clinic Admin Management Panel",
        "Automated Newsletter & Email Campaign System",
        "Dynamic treatment service listings & enquiry flow"
      ],
      icon: "bi-hospital-fill",
      color: "#06b6d4"
    },
    {
      title: "The Mentors Circle",
      category: "Study Abroad Consultancy Platform",
      badge: "Consultancy",
      desc: "Professional consultancy website showcasing international education services, university partnerships, destination guides, student testimonials, and interactive booking forms.",
      techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Razorpay API", "HTML5/CSS3"],
      features: [
        "Interactive Student Enquiry & Consultation Forms",
        "University partnerships & Destination showcase",
        "Performance optimized responsive mobile UX"
      ],
      icon: "bi-globe-americas",
      color: "#a855f7"
    }
  ];

  return (
    <div className="container-fluid px-2 px-md-4 px-lg-5 py-2 py-md-3">
      
      {/* Header */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-2 mb-md-3 gap-2">
        <div className="text-start">
          <span className="hero-role-badge mb-1">
            <i className="bi bi-code-square text-info"></i>
            Real-World Client Work
          </span>
          <h2 className="display-6 fw-bold text-white m-0" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)' }}>
            Featured <span className="text-gradient-purple">Projects</span>
          </h2>
        </div>
        <div>
          <button onClick={() => onNavigate(4)} className="btn btn-sm btn-primary-glow py-1 px-3" style={{ fontSize: '0.82rem' }}>
            <span>Hire Me</span>
            <i className="bi bi-arrow-right ms-1"></i>
          </button>
        </div>
      </div>

      {/* Project Cards */}
      <div className="row g-3 g-lg-4 text-start">
        {projects.map((proj, idx) => (
          <div key={idx} className="col-12 col-md-6 col-lg-4">
            <div className="project-card h-100 d-flex flex-column justify-content-between p-3 p-md-4">
              
              <div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="badge px-2 px-md-3 py-1 rounded-pill" style={{ background: 'rgba(168, 85, 247, 0.2)', color: '#c084fc', fontSize: '0.72rem' }}>
                    {proj.badge}
                  </span>
                  <i className={`bi ${proj.icon} fs-5`} style={{ color: proj.color }}></i>
                </div>

                <h6 className="text-white fw-bold mb-1" style={{ fontSize: '1rem' }}>{proj.title}</h6>
                <small className="text-info d-block mb-2" style={{ fontSize: '0.75rem' }}>
                  {proj.category}
                </small>

                <p className="text-secondary small mb-2 mb-md-3" style={{ lineHeight: '1.6', fontSize: '0.8rem' }}>
                  {proj.desc}
                </p>

                <div className="mb-3 d-none d-sm-block">
                  <strong className="text-light small d-block mb-1" style={{ fontSize: '0.76rem' }}>Key Highlights:</strong>
                  <ul className="text-secondary small mb-0 ps-3" style={{ fontSize: '0.74rem', lineHeight: '1.5' }}>
                    {proj.features.map((f, fIdx) => (
                      <li key={fIdx} className="mb-1">{f}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="d-flex flex-wrap gap-1 mb-3">
                  {proj.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag" style={{ fontSize: '0.68rem', padding: '2px 7px' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="d-flex gap-2">
                  <button 
                    onClick={() => onNavigate(4)}
                    className="btn btn-sm btn-outline-info rounded-pill px-3 w-100 py-1"
                    style={{ fontSize: '0.78rem' }}
                  >
                    <i className="bi bi-chat-dots me-1"></i> Inquire About This
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
