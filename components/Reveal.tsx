'use client'

import { useEffect, useRef } from 'react'

interface RevealProps {
  children: React.ReactNode
  delay?: number // ms — stagger effect between sections
}

/**
 * Wraps a section with an IntersectionObserver fade-up entrance.
 * When the element enters the viewport, it transitions from
 * opacity:0 + translateY:32px → opacity:1 + translateY:0.
 */
export default function Reveal({ children, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity   = '1'
            el.style.transform = 'translateY(0)'
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.08 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: 'translateY(32px)',
        transition: 'opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      {children}
    </div>
  )
}
