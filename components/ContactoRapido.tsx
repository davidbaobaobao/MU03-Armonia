export default function ContactoRapido() {
  return (
    <section
      aria-labelledby="contacto-rapido-heading"
      style={{
        background: 'var(--color-graphite)',
        color: 'var(--color-text-inv)',
      }}
    >
      <style>{`
        .cr-tel:hover  { opacity: 0.7; }
        .cr-email:hover { color: var(--color-text-inv) !important; }
        @media (max-width: 900px) {
          .contacto-grid {
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
        className="contacto-grid"
      >
        {/* Izquierda — teléfono + email + WhatsApp */}
        <div>
          <h2
            id="contacto-rapido-heading"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '0.5625rem',
              letterSpacing: '0.5em',
              textTransform: 'uppercase',
              color: 'rgba(250,247,246,0.45)',
              display: 'block',
              marginBottom: '40px',
            }}
          >
            Contacto
          </h2>

          <a
            href="tel:+34655544567"
            className="cr-tel"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(2rem,5vw,4rem)',
              lineHeight: '1.05',
              letterSpacing: '-0.02em',
              color: 'var(--color-text-inv)',
              textDecoration: 'none',
              display: 'block',
              marginBottom: '16px',
              transition: 'opacity 150ms cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            655 544 567
          </a>

          <a
            href="mailto:yeyebcn01@gmail.com"
            className="cr-email"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: '0.9375rem',
              color: 'rgba(250,247,246,0.6)',
              textDecoration: 'none',
              display: 'block',
              marginBottom: '40px',
              transition: 'color 150ms cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            yeyebcn01@gmail.com
          </a>

          <a
            href="https://wa.me/34655544567?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20los%20cursos%20de%20piano"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary btn-secondary-inv"
          >
            Escríbenos por WhatsApp
          </a>
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
              color: 'rgba(250,247,246,0.45)',
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
                  color: 'rgba(250,247,246,0.45)',
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
                  color: 'rgba(250,247,246,0.45)',
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
                  color: 'rgba(250,247,246,0.4)',
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
