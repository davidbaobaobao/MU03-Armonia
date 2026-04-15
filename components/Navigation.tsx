'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/cursos',     label: 'Cursos' },
  { href: '/profesores', label: 'Profesores' },
  { href: '/metodo',     label: 'Método' },
  { href: '/#recitales', label: 'Recitales' },
  { href: '/contacto',   label: 'Contacto' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      role="banner"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        background: scrolled ? 'rgba(250,249,246,0.92)' : 'rgba(250,249,246,0.70)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        transition: 'background 300ms cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      {/* Barra principal */}
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 48px',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logotipo */}
        <Link
          href="/"
          aria-label="Escuela Armonía — Inicio"
          style={{ textDecoration: 'none', flexShrink: 0 }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: '1rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-graphite-deep)',
              display: 'block',
              lineHeight: 1.1,
            }}
          >
            Armonía
          </span>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '0.5rem',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              display: 'block',
              marginTop: '3px',
            }}
          >
            Escuela de Piano · Valencia
          </span>
        </Link>

        {/* Desktop: links + CTA — oculto en mobile via media query */}
        <nav
          aria-label="Navegación principal"
          id="desktop-nav"
          style={{ display: 'flex', alignItems: 'center', gap: '40px' }}
        >
          <ul
            role="list"
            id="nav-links"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '40px',
              listStyle: 'none',
            }}
          >
            {navLinks.map(({ href, label }) => {
              const isActive =
                !href.startsWith('/#') &&
                (pathname === href || pathname.startsWith(href + '/'))
              return (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                      fontSize: '0.6875rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      color: isActive ? 'var(--color-graphite)' : 'var(--color-text-muted)',
                      transition: 'color 150ms cubic-bezier(0.16,1,0.3,1)',
                    }}
                    onMouseEnter={e => {
                      ;(e.currentTarget as HTMLElement).style.color =
                        'var(--color-graphite)'
                    }}
                    onMouseLeave={e => {
                      if (!isActive) {
                        ;(e.currentTarget as HTMLElement).style.color =
                          'var(--color-text-muted)'
                      }
                    }}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <Link
            href="/contacto"
            id="nav-cta"
            className="btn-primary"
            style={{ fontSize: '0.6875rem' }}
          >
            Inscríbete
          </Link>
        </nav>

        {/* Hamburger — visible solo en mobile */}
        <button
          id="hamburger"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(v => !v)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '1px',
              background: 'var(--color-graphite)',
              transition: 'transform 300ms cubic-bezier(0.16,1,0.3,1), opacity 300ms',
              transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '1px',
              background: 'var(--color-graphite)',
              opacity: menuOpen ? 0 : 1,
              transition: 'opacity 300ms',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '1px',
              background: 'var(--color-graphite)',
              transition: 'transform 300ms cubic-bezier(0.16,1,0.3,1)',
              transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu drawer */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        style={{
          overflow: 'hidden',
          maxHeight: menuOpen ? '400px' : '0px',
          transition: 'max-height 400ms cubic-bezier(0.16,1,0.3,1)',
          background: 'rgba(250,249,246,0.97)',
          backdropFilter: 'blur(24px)',
        }}
      >
        <nav aria-label="Menú móvil">
          <ul role="list" style={{ listStyle: 'none', padding: '24px 24px 32px' }}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    display: 'block',
                    padding: '16px 0',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li style={{ marginTop: '16px' }}>
              <Link
                href="/contacto"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.75rem' }}
              >
                Inscríbete
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Responsive CSS: mostrar/ocultar desktop vs mobile */}
      <style>{`
        #desktop-nav { display: flex; }
        #hamburger   { display: none !important; }

        @media (max-width: 767px) {
          #desktop-nav { display: none !important; }
          #hamburger   { display: flex !important; }
          header > div { padding: 0 24px !important; }
        }
      `}</style>
    </header>
  )
}
