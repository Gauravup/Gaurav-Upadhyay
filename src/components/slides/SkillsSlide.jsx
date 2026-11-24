'use client';

/* 
=============================================================================
  📘 SKILLS SLIDE - FULLY RESPONSIVE (GAURAV UPADHYAY)
=============================================================================
*/

export default function SkillsSlide({ onNavigate }) {
  const skillGroups = [
    {
      title: "Frontend Development",
      icon: "bi-window-desktop",
      color: "text-info",
      skills: [
        { name: "React.js & Next.js", level: "90%", desc: "Component architecture, SSR, hooks" },
        { name: "JavaScript (ES6+)", level: "92%", desc: "Async/await, DOM, APIs, logic" },
        { name: "Bootstrap 5 & CSS3", level: "95%", desc: "Responsive grids, flexbox, animations" },
        { name: "HTML5 Semantic", level: "95%", desc: "Clean semantic markup, accessibility" }
      ]
    },
    {
      title: "Backend & Databases",
      icon: "bi-server",
      color: "text-success",
      skills: [
        { name: "PHP & Django (Python)", level: "85%", desc: "Server logic, MVC architecture" },
        { name: "MySQL & SQL", level: "88%", desc: "Relational database modeling, queries" },
        { name: "Supabase & Cloud DB", level: "80%", desc: "Realtime data, auth, cloud storage" },
        { name: "Razorpay Payment API", level: "90%", desc: "Payment gateways, webhooks, checkout" }
      ]
    },
    {
      title: "CMS, Hosting & Tools",
      icon: "bi-gear-wide-connected",
      color: "text-warning",
      skills: [
        { name: "WordPress, Shopify & Wix", level: "92%", desc: "Custom themes, plugins, e-commerce" },
        { name: "Cpanel & Hpanel Hosting", level: "88%", desc: "DNS management, SSL, deployments" },
        { name: "Git, GitHub & Vercel", level: "90%", desc: "Version control, CI/CD deployment" },
        { name: "VsCode & Modern IDEs", level: "95%", desc: "Modern developer environment" }
      ]
    }
  ];

  return (
    <div className="container-fluid px-2 px-md-4 px-lg-5 py-2 py-md-3">
      
      {/* Header */}
      <div className="text-start mb-2 mb-md-3">
        <span className="hero-role-badge mb-1">
          <i className="bi bi-cpu text-info"></i>
          Technical Expertise & Stack
        </span>
        <h2 className="display-6 fw-bold text-white m-0" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)' }}>
          Skills & <span className="text-gradient-purple">Competencies</span>
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="row g-3 g-lg-4 text-start">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="col-12 col-md-6 col-lg-4">
            <div className="glass-panel h-100 p-3 p-md-4">
              
              <div className="d-flex align-items-center gap-2 mb-2 mb-md-3">
                <i className={`bi ${group.icon} fs-5 ${group.color}`}></i>
                <h6 className="text-white fw-bold m-0" style={{ fontSize: '0.95rem' }}>{group.title}</h6>
              </div>

              <div className="d-flex flex-column gap-2 gap-md-3">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <span className="text-light fw-semibold" style={{ fontSize: '0.82rem' }}>{skill.name}</span>
                      <span className="text-info fw-bold" style={{ fontSize: '0.78rem' }}>{skill.level}</span>
                    </div>
                    <div className="skill-bar-track my-1">
                      <div className="skill-bar-fill" style={{ width: skill.level }}></div>
                    </div>
                    <small className="text-secondary d-block" style={{ fontSize: '0.7rem' }}>
                      {skill.desc}
                    </small>
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-3 text-start">
        <button onClick={() => onNavigate(3)} className="btn-primary-glow">
          <span>See Projects Built with These</span>
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>

    </div>
  );
}
