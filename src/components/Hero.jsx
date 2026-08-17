import { useState, useEffect } from 'react'
import InteractiveTagline from './InteractiveTagline'
import { useTheme } from '../context/ThemeContext'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const { dark } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 800)
    return () => clearTimeout(timer)
  }, [])

  // Detect dark mode using a media query or class

  // Use ThemeContext for dark mode

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-24 md:pt-0 overflow-hidden">
      <div className="relative max-w-5xl w-full flex-1 flex flex-col justify-center">
        {loaded ? (
          <div>
            <div className="flex flex-col md:flex-row items-start gap-12 mb-12">
              <div className="flex-1">
                <InteractiveTagline />
              </div>
              <div className="shrink-0 relative">
                <img
                  src="/profile.jpg"
                  alt="Christoph Mämecke"
                  className="w-56 h-56 md:w-72 md:h-72 rounded-2xl object-cover"
                />
                <img
                  src="/open-for-work.png"
                  alt="Open for work"
                  className="absolute -bottom-8 -right-8 w-28 h-28 md:w-36 md:h-36 animate-spin-slow open-for-work-glow"
                  style={dark
                    ? {
                        filter: 'brightness(0) saturate(100%) invert(1)'
                      }
                    : {
                        filter: 'brightness(0) saturate(100%) drop-shadow(0 0 6px #b5fafe) drop-shadow(0 0 14px #b5fafe) drop-shadow(0 0 24px #b5fafe) drop-shadow(0 0 32px #fff8)'
                      }
                  }
                />
                <style>{`
                  .open-for-work-glow {
                    /* No glow by default, only neon in dark mode */
                  }
                  .open-for-work-neon {
                    filter:
                      brightness(0) saturate(100%) invert(1)
                      drop-shadow(0 0 12px #b5fafe)
                      drop-shadow(0 0 28px #b5fafe)
                      drop-shadow(0 0 48px #b5fafe)
                      drop-shadow(0 0 72px #b5fafe)
                      drop-shadow(0 0 96px #fff8)
                      drop-shadow(0 0 128px #b5fafe);
                  }
                `}</style>
              </div>
            </div>
            {/* Buttons - mobile only (below photo, above lorem ipsum) */}
            <div className="flex gap-4 mb-12 md:hidden">
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-semibold rounded-md hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors duration-200 text-sm uppercase tracking-wider"
              >
                Get in Touch
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 border border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 font-semibold rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200 text-sm uppercase tracking-wider"
              >
                Resume
              </a>
            </div>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-12">
              With 10+ years driving digital commerce at Heineken and Accenture, I turn complex business challenges into products people genuinely love to use. From B2B platforms generating billions in revenue to payments that just work, I bring strategy, creativity, and deep user empathy to every challenge. I'm open to a new role at a digital product company that believes outstanding customer experience and real value — for humans, planet, and society — are a competitive advantage, not a trade-off.
            </p>
            {/* Buttons - desktop only (below lorem ipsum) */}
            <div className="hidden md:flex gap-4">
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-semibold rounded-md hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors duration-200 text-sm uppercase tracking-wider"
              >
                Get in Touch
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 border border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 font-semibold rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200 text-sm uppercase tracking-wider"
              >
                Resume
              </a>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-col md:flex-row items-start gap-12 mb-12">
              <div className="flex-1">
                <div className="space-y-4">
                  <div className="h-12 skeleton-shimmer rounded w-[70%]" />
                  <div className="h-12 skeleton-shimmer rounded w-full" />
                  <div className="h-12 skeleton-shimmer rounded w-[55%]" />
                </div>
              </div>
              <div className="shrink-0">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl skeleton-shimmer" />
              </div>
            </div>
            <div className="space-y-3 mb-12">
              <div className="h-5 skeleton-shimmer rounded w-full" />
              <div className="h-5 skeleton-shimmer rounded w-full" />
              <div className="h-5 skeleton-shimmer rounded w-3/4" />
            </div>
            <div>
              <div className="h-14 w-40 skeleton-shimmer rounded-md" />
            </div>
          </div>
        )}
      </div>
      {/* ScrollIndicator removed */}
    </section>
  )
}





