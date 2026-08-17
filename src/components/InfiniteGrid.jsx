import { useEffect } from 'react'
import { motion, useMotionValue, useMotionTemplate, useAnimationFrame } from 'framer-motion'

export default function InfiniteGrid() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    const handleTouchMove = (e) => {
      const touch = e.touches[0]
      if (touch) {
        mouseX.set(touch.clientX)
        mouseY.set(touch.clientY)
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [mouseX, mouseY])

  const gridOffsetX = useMotionValue(0)
  const gridOffsetY = useMotionValue(0)

  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + 0.3) % 40)
    gridOffsetY.set((gridOffsetY.get() + 0.3) % 40)
  })

  const maskImage = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, black, transparent)`

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Faint always-visible grid */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} id="grid-bg" />
      </div>

      {/* Mouse-reveal grid */}
      <motion.div
        className="absolute inset-0 opacity-30 dark:opacity-40"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} id="grid-reveal" />
      </motion.div>
    </div>
  )
}

function GridPattern({ offsetX, offsetY, id }) {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id={id}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-neutral-400 dark:text-neutral-600"
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
