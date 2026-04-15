'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

/**
 * Transparent hero section — the fixed VideoBackground video shows through.
 * On scroll, the text content fades out and drifts upward.
 * VideoBackground handles the video blur separately.
 */
export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (!contentRef.current) return
      const progress = Math.min(Math.max(window.scrollY / window.innerHeight, 0), 1)
      const opacity  = Math.max(0, 1 - progress * 2.2)
      const y        = progress * -72
      contentRef.current.style.opacity   = String(opacity)
      contentRef.current.style.transform = `translateY(${y}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      aria-label="Presentación"
      style={{
        position: 'relative',
        zIndex: 1,
        height: '100vh',
        background: 'transparent',
      }}
    >
      {/* Dark gradient overlay — does NOT blur, just improves readability */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(15,17,14,0.38) 0%, rgba(15,17,14,0.62) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content — fades + drifts up as user scrolls */}
      <div
        ref={contentRef}
        className="hero-content"
        style={{ willChange: 'opacity, transform' }}
      >
        <h1 className="hero-h1">
          El piano se aprende tocando.
        </h1>

        <p className="hero-sub">
          Clases presenciales en Valencia para todas las edades,
          desde los 8 años.
        </p>

        <Link href="/cursos" className="hero-cta">
          Ver cursos
        </Link>
      </div>

      <style>{`
        @keyframes heroReveal {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 96px 24px 64px;
          animation: heroReveal 1.4s cubic-bezier(0.16,1,0.3,1) both;
        }

        .hero-h1 {
          font-family: var(--font-display);
          font-weight: 300;
          font-size: clamp(2.75rem, 8vw, 7.5rem);
          line-height: 1.0;
          letter-spacing: -0.03em;
          color: var(--color-text-inv);
          margin-bottom: 32px;
          max-width: 14ch;
        }

        .hero-sub {
          font-family: var(--font-body);
          font-weight: 300;
          font-size: 1.0625rem;
          line-height: 1.7;
          color: rgba(250,247,246,0.68);
          margin-bottom: 56px;
          max-width: 40ch;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--color-text-inv);
          color: var(--color-graphite-deep);
          font-family: var(--font-body), sans-serif;
          font-weight: 500;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 16px 40px;
          min-height: 48px;
          border-radius: 0;
          transition: background 150ms cubic-bezier(0.16,1,0.3,1);
        }
        .hero-cta:hover {
          background: rgba(250,249,246,0.84);
        }

        @media (max-width: 767px) {
          .hero-content { padding: 80px 24px 48px; }
          .hero-sub { font-size: 1rem; }
        }
      `}</style>
    </section>
  )
}
