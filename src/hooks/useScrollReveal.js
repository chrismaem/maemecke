import { useEffect, useRef, useState } from 'react'

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  useEffect(() => {
    if (isIntersecting) {
      const timer = setTimeout(() => setIsVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [isIntersecting])

  return [ref, isVisible]
}
