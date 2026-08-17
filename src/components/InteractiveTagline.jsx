import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── TAGLINE CONFIG ─────────────────────────────────────────────────────────
// Edit the tagline segments below. Add `color`, `italic`, and `note` to
// highlight a word and attach a tooltip annotation.
const tagline = [
  { text: "Hi, I am " },
  { text: "Chris" , bold: true },
  { text: " — a senior PM with the " },
  { text: "experience", color: "#4ade80", italic: true, note: "Delivering value across commerce, payments, and digital transformation" },
  { text: " and " },
  { text: "creativity", color: "#60a5fa", italic: true, note: "From workshop facilitation to innovative product strategies" },
  { text: " to deliver " },
  { text: "human-centric solutions.", color: "#f472b6", italic: true, note: "Always designed with and for end-users" },
]
// ─────────────────────────────────────────────────────────────────────────────

export default function InteractiveTagline() {
  const [activeNote, setActiveNote] = useState(null)

  const handleInteraction = (segment) => {
    if (!segment.note) return
    setActiveNote((prev) => (prev === segment.note ? null : segment.note))
  }

  return (
    <div className="max-w-3xl mx-auto">
      <p className="text-3xl md:text-5xl font-bold leading-tight text-left">
        {tagline.map((segment, i) =>
          segment.color ? (
            <span
              key={i}
              className="relative inline cursor-pointer transition-all duration-200 hover:brightness-125 hover:scale-105"
              style={{
                color: segment.color,
                fontStyle: segment.italic ? 'italic' : 'normal',
                display: 'inline',
              }}
              onMouseEnter={() => setActiveNote(segment.note)}
              onMouseLeave={() => setActiveNote(null)}
              onClick={() => handleInteraction(segment)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleInteraction(segment)}
            >
              {segment.text}
            </span>
          ) : (
            <span key={i} className={`text-neutral-900 dark:text-neutral-100 ${segment.bold ? 'font-black' : ''}`}>
              {segment.text}
            </span>
          )
        )}
      </p>

      {/* Annotation tooltip */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {activeNote && (
            <motion.p
              key={activeNote}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
              className="absolute top-2 right-0 text-sm font-mono text-neutral-500 text-right"
            >
              ↳ {activeNote}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
