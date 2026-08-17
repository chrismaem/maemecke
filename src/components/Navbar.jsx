import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { label: 'Get in touch', href: '#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { dark, toggle } = useTheme()

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a href="#hero" className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 hover:opacity-60 transition-opacity">
          Christoph Mämecke <span className="text-neutral-600 dark:text-neutral-300 font-normal normal-case tracking-normal">Senior Product Manager @Heineken, Ex-Accenture</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="toggle-switch"
            tabIndex={0}
            type="button"
          >
            <span className={`toggle-track ${dark ? 'toggle-dark' : 'toggle-light'}`}></span>
            <span className={`toggle-thumb ${dark ? 'toggle-thumb-dark' : 'toggle-thumb-light'}`}>
              <span style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',height:'100%'}}>
                {dark ? (
                  // Moon icon (B&W, public domain)
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display:'block',margin:'auto'}} aria-hidden="true">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" fill="white"/>
                    <path d="M21 12.79A9 9 0 1 1 11.21 3" />
                  </svg>
                ) : (
                  // Sun icon (B&W, public domain)
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display:'block',margin:'auto'}} aria-hidden="true">
                    <circle cx="12" cy="12" r="5" fill="white"/>
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                )}
              </span>
            </span>
            <span className="sr-only">Toggle dark mode</span>
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="toggle-switch"
            tabIndex={0}
            type="button"
          >
            <span className={`toggle-track ${dark ? 'toggle-dark' : 'toggle-light'}`}></span>
            <span className={`toggle-thumb ${dark ? 'toggle-thumb-dark' : 'toggle-thumb-light'}`}>
              {dark ? (
                // Moon icon (B&W, public domain)
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display:'block'}} aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" fill="white"/>
                  <path d="M21 12.79A9 9 0 1 1 11.21 3" />
                </svg>
              ) : (
                // Sun icon (B&W, public domain)
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display:'block'}} aria-hidden="true">
                  <circle cx="12" cy="12" r="5" fill="white"/>
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </span>
            <span className="sr-only">Toggle dark mode</span>
          </button>
                <style>{`
                  .toggle-switch {
                    position: relative;
                    width: 44px;
                    height: 24px;
                    display: inline-flex;
                    align-items: center;
                    background: none;
                    border: none;
                    outline: none;
                    cursor: pointer;
                    padding: 0;
                    margin-left: 0.5rem;
                  }
                  .toggle-track {
                    width: 44px;
                    height: 24px;
                    border-radius: 999px;
                    background: linear-gradient(90deg, #e5e7eb 0%, #cbd5e1 100%);
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                    transition: background 0.3s;
                    display: block;
                  }
                  .toggle-dark {
                    background: linear-gradient(90deg, #222 0%, #444 100%);
                  }
                  .toggle-thumb {
                    position: absolute;
                    top: 2px;
                    left: 2px;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #fff;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.12), 0 0 0 2px #e0e7ef;
                    transition: left 0.3s, background 0.3s;
                  }
                  .toggle-thumb-dark {
                    left: 22px;
                    background: #222;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.18), 0 0 0 2px #444;
                  }
                  .toggle-thumb-light {
                    left: 2px;
                    background: #fff;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.12), 0 0 0 2px #e0e7ef;
                  }
                `}</style>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="p-2 hover:opacity-60 transition-opacity"
          >
            <svg className="w-5 h-5 text-neutral-900 dark:text-neutral-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md"
        >
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}





