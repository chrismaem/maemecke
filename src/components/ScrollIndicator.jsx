import React from 'react'

export default function ScrollIndicator() {
  return (
    <div className="w-full flex flex-col items-center mt-12 mb-2 pointer-events-none select-none relative">
      <span className="text-sm font-normal text-neutral-900 dark:text-neutral-100 tracking-wider uppercase opacity-60">Scroll down to reveal</span>
      <div className="w-px h-16 md:h-24 bg-neutral-400 dark:bg-neutral-700 opacity-60 animate-float-updown mt-1" />
    </div>
  )
}
