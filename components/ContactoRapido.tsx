import Link from 'next/link'

export default function ContactoRapido() {
  return (
    <section
      aria-labelledby="contacto-rapido-heading"
      style={{ background: 'var(--color-graphite)', color: 'var(--color-text-inv)' }}
    >
      <style>{`
        @media (max-width: 900px) {
          .cr-grid {
            grid-template-columns: 1fr !important;
            padding: 80px 24px !important;
            gap: 64px !important;
          }
        }
      `}</style>

      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '128px 96px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '96px',
          alignItems: 'center',
        }}
        className="cr-grid"
      >
        {/* Izquierda — CTA principal */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '0.5625rem',
              letterSpacing: '0.5em',
              textTransform: 'uppercase',
              color: 'rgba(250,247,246,0.40)',
              marginBottom: '40px',
            }}
          >
            Contacto
          </p>

          <h2
            id="contacto-rapido-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(2rem,4.5vw,4rem)',
              lineHeight: '1.05',
              letterSpacing: '-0.025em',
              color: 'var(--color-text-inv)',
              marginBottom: '20px',
            }}
          >
            ¿Listo para empezar?
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: '1rem',
              lineHeight: '1.7',
              color: 'rgba(250,247,246,0.55)',
              marginBottom: '48px',
              maxWidth: '36ch',
            }}
          >
            Escríbenos y te respondemos en 24 horas. Sin compromiso, sin formularios interminables.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link
              href="/contacto"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--color-text-inv)',
                color: 'var(--color-graphite-deep)',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '16px 32px',
                minHeight: '48px',
              }}
            >
              Contactar
            </Link>
            <a
              href="https://wa.me/34655544567?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20los%20cursos%20de%20piano"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary btn-secondary-inv"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>

        {/* Derecha — horario */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '0.5625rem',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: 'rgba(250,247,246,0.40)',
              marginBottom: '32px',
            }}
          >
            Horario
          </p>

          <dl style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <dt
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '0.625rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(250,247,246,0.40)',
                  marginBottom: '6px',
                }}
              >
                Lunes a viernes
              </dt>
              <dd
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 300,
                  fontSize: '1.375rem',
                  color: 'var(--color-text-inv)',
                  marginLeft: 0,
                }}
              >
                9:00 – 17:00
              </dd>
            </div>
            <div>
              <dt
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '0.625rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(250,247,246,0.40)',
                  marginBottom: '6px',
                }}
              >
                Sábados y domingos
              </dt>
              <dd
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 300,
                  fontSize: '1.375rem',
                  color: 'rgba(250,247,246,0.35)',
                  marginLeft: 0,
                }}
              >
                Cerrado
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
