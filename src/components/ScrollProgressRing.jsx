import { useEffect, useState } from 'react';

export default function ScrollProgressRing() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setProgress(percent);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Responsive size
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 600;
  const size = isMobile ? 40 : 56;
  const stroke = isMobile ? 3 : 4;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  // Start the progress ring at the top (12 o'clock)
  const offset = circumference * (1 - progress);
  // Arrow points down unless at the very bottom (within 1px)
  const atBottom = Math.abs(progress - 1) < 0.01;


  return (
    <button
      className="scroll-progress-ring"
      aria-label={atBottom ? 'Scroll to top' : 'Scroll to bottom'}
      onClick={() => window.scrollTo({ top: atBottom ? 0 : document.body.scrollHeight, behavior: 'smooth' })}
    >
      <svg width={size} height={size} className="progress-svg" style={{ transform: 'rotate(-90deg)' }}>
        <circle
          className="progress-bg"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          className="progress-bar"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="progress-icon" style={{ transform: 'translate(-50%, -50%)', opacity: 0.6 }}>
        {atBottom ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            {/* Mouse outline - larger */}
            <rect x="8" y="4" width="12" height="18" rx="6" stroke="currentColor" strokeWidth="1.7" fill="none" />
            {/* Animated dot - larger */}
            <circle className="mouse-dot" cx="14" cy="9" r="1.6" fill="currentColor" />
          </svg>
        )}
      </span>
      <style>{`
        .scroll-progress-ring {
          position: fixed;
          right: 2rem;
          bottom: 2rem;
          transform: none;
          z-index: 1050;
          background: none;
          border: none;
          outline: none;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          opacity: 0.6;
        }
        @media (max-width: 600px) {
          .scroll-progress-ring {
            width: 40px;
            height: 40px;
            right: 1rem;
            bottom: 1rem;
          }
        }
        .progress-svg {
          position: absolute;
          top: 0;
          left: 0;
        }
        .progress-bg {
          stroke: #e5e7eb;
          opacity: 0.5;
        }
        .progress-bar {
          stroke: #888;
          transition: stroke-dashoffset 0.2s linear;
        }
        .dark .progress-bar {
          stroke: #fff;
        }
        .progress-icon {
          position: absolute;
          left: 50%;
          top: 50%;
          color: #111;
          pointer-events: none;
        }
        .mouse-dot {
          animation: mouse-dot-move 1.4s cubic-bezier(.4,0,.2,1) infinite;
          opacity: 1;
        }
        /* Ensure mouse icon is visible in dark mode */
        .dark .progress-icon svg,
        .dark .progress-icon {
          color: #fff !important;
          stroke: #fff !important;
        }
        .dark .progress-icon .mouse-dot {
          fill: #fff !important;
        }
        @keyframes mouse-dot-move {
          0% {
            cy: 9;
            opacity: 1;
          }
          70% {
            cy: 17;
            opacity: 0.2;
          }
          100% {
            cy: 9;
            opacity: 0;
          }
        }
        @media (max-width: 400px) {
          .scroll-progress-ring { display: none; }
        }
      `}</style>
    </button>
  );
}
