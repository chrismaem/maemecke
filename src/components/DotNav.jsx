import { useEffect, useRef } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'clients', label: 'Clients' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export default function DotNav() {
  const btnRefs = useRef([]);

  useEffect(() => {
    const handleClick = (id) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    btnRefs.current.forEach((btn, i) => {
      if (btn) {
        btn.onclick = () => handleClick(sections[i].id);
      }
    });
    // IntersectionObserver for active state
    const observer = new window.IntersectionObserver((entries) => {
      let mostVisible = null;
      let maxRatio = 0;
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          mostVisible = entry.target;
          maxRatio = entry.intersectionRatio;
        }
      });
      if (mostVisible) {
        const id = mostVisible.getAttribute('id');
        btnRefs.current.forEach((btn, i) => {
          btn?.classList.toggle('active', sections[i].id === id);
        });
      }
    }, {
      threshold: Array.from({length: 21}, (_, i) => i / 20)
    });
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="dot-nav" aria-label="Section navigation">
      {sections.map((section, i) => (
        <button
          key={section.id}
          className="dot-nav-btn"
          ref={el => btnRefs.current[i] = el}
          aria-label={section.label}
        >
          <span className="dot-label">{section.label}</span>
        </button>
      ))}
      {/* Back to Top as last dot */}
      <button
        className="dot-nav-btn back-to-top-dot"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dot-nav-arrow"><polyline points="18 15 12 9 6 15"></polyline></svg>
        <span className="dot-label">Back to Top</span>
      </button>
      <style>{`
        .dot-nav {
          position: fixed;
          top: 50%;
          right: 2rem;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          z-index: 1000;
        }
        .dot-nav-btn {
          position: relative;
          width: 10px;
          height: 10px;
          background: #444;
          border-radius: 999px;
          border: none;
          outline: none;
          cursor: pointer;
          transition: background 0.2s, width 0.3s, height 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }
        .dot-nav-btn.active {
          background: #f5f5f5;
          width: 10px;
          height: 28px;
          border-radius: 999px;
          transition: background 0.2s, width 0.3s, height 0.3s;
        }
        .dot-nav-btn .dot-label {
          position: absolute;
          right: 120%;
          top: 50%;
          transform: translateY(-50%) scale(0.95);
          background: #222;
          color: #f5f5f5;
          font-size: 0.85rem;
          padding: 0.18em 0.6em;
          border-radius: 0.5em;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s, transform 0.2s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          letter-spacing: 0.05em;
        }
        .dot-nav-btn:hover .dot-label,
        .dot-nav-btn:focus .dot-label {
          opacity: 1;
          transform: translateY(-50%) scale(1);
        }
        .dot-nav-btn.active {
          background: #f5f5f5;
        }
        .dot-nav-btn.active .dot-label {
          color: #111;
          background: #f5f5f5;
        }
        .dot-nav-btn.back-to-top-dot {
          background: #444;
          width: 10px;
          height: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .dot-nav-btn.back-to-top-dot .dot-nav-arrow {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
        }
        @media (max-width: 600px) {
          .dot-nav { display: none; }
        }
      `}</style>
    </nav>
  );
}
