'use client'

import { useEffect, useRef } from 'react'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  /**
   * When true, the wrapper is invisible and each direct child gets a
   * staggered fade-up animation (120ms apart) when the container enters view.
   * Children must be block or flex items — not inline text nodes.
   */
  stagger?: boolean
}

/**
 * Scroll-reveal wrapper. Uses IntersectionObserver so the animation fires
 * only once, the first time the element enters the viewport.
 *
 * Plain mode  (stagger=false): the whole wrapper fades+slides up.
 * Stagger mode (stagger=true): each direct child fades+slides up in sequence.
 */
export default function Reveal({ children, delay = 0, stagger = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (stagger) {
      // Hide all direct children immediately on mount
      const kids = Array.from(el.children) as HTMLElement[]
      kids.forEach(k => {
        k.style.opacity = '0'
        k.style.transform = 'translateY(28px)'
        k.style.transition =
          'opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)'
      })

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            kids.forEach((k, i) => {
              const ms = delay + i * 120
              k.style.transitionDelay = `${ms}ms`
              // Force reflow so the delay is applied before the transition
              void k.offsetHeight
              k.style.opacity = '1'
              k.style.transform = 'translateY(0)'
            })
            observer.unobserve(el)
          }
        },
        { threshold: 0.06 }
      )
      observer.observe(el)
      return () => observer.disconnect()
    }

    // Plain mode — animate the wrapper itself
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.06 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, stagger])

  return (
    <div
      ref={ref}
      style={
        stagger
          ? {} // children handle their own visibility
          : {
              opacity: 0,
              transform: 'translateY(32px)',
              transition: `opacity 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
            }
      }
    >
      {children}
    </div>
  )
}
