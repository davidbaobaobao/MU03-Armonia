import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{ background: 'var(--color-surface-low)' }}
    >
      <style>{`
        .footer-legal a:hover { color: var(--color-graphite) !important; }
      `}</style>

      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '64px 96px',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'end',
          gap: '48px',
        }}
        className="footer-grid"
      >
        {/* Izquierda — marca + copyright */}
        <div>
          <Link
            href="/"
            style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}
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

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: '0.8125rem',
              color: 'var(--color-text-muted)',
              lineHeight: '1.6',
            }}
          >
            © 2026 Escuela Armonía. Valencia.
          </p>
        </div>

        {/* Derecha — links legales */}
        <nav aria-label="Pie de página — legal" className="footer-legal">
          <ul
            role="list"
            style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              alignItems: 'flex-end',
            }}
            className="footer-legal-links"
          >
            {[
              { href: '/privacidad',  label: 'Política de privacidad' },
              { href: '/aviso-legal', label: 'Aviso legal' },
              { href: '/cookies',     label: 'Política de cookies' },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 400,
                    fontSize: '0.6875rem',
                    letterSpacing: '0.05em',
                    color: 'var(--color-text-muted)',
                    textDecoration: 'none',
                    transition: 'color 150ms cubic-bezier(0.16,1,0.3,1)',
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            padding: 48px 24px !important;
            gap: 40px !important;
          }
          .footer-legal-links { align-items: flex-start !important; }
        }
      `}</style>
    </footer>
  )
}
