'use client'

import { useEffect, useRef } from 'react'

/**
 * Fixed video layer that lives behind all sections (z-index: 0).
 * A passive scroll listener blurs the video progressively over the
 * first viewport-height of scroll (0 → 20px blur at scrollY === innerHeight).
 * Sections that follow use opaque backgrounds to naturally cover it.
 */
export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (!videoRef.current) return
      const progress = Math.min(Math.max(window.scrollY / window.innerHeight, 0), 1)
      const blur  = progress * 20
      const scale = 1 + progress * 0.04
      videoRef.current.style.filter    = `blur(${blur}px)`
      videoRef.current.style.transform = `scale(${scale})`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // sync on mount
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <video
      ref={videoRef}
      src="/videos/hero-bg.mp4"
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        zIndex: 0,
        willChange: 'filter, transform',
        transformOrigin: 'center center',
      }}
    />
  )
}
