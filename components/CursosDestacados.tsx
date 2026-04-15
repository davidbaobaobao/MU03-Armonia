import Link from 'next/link'

const cursos = [
  {
    num: '01',
    nombre: 'Iniciación',
    desc: 'Para quienes se acercan al piano por primera vez. Aprendemos a leer notas, a colocar las manos, a escuchar antes de tocar. El primer año sienta las bases de todo lo que viene después.',
    edad: 'Desde los 8 años',
    formato: '1 clase semanal · 50 min',
    precio: '89',
    detalle: 'Lectura de notas · Postura · Primeras piezas · Ritmo básico',
  },
  {
    num: '02',
    nombre: 'Intermedio',
    desc: 'Repertorio progresivo, lectura a dos manos, armonía funcional y preparación para los exámenes oficiales ABRSM. Para alumnos con base técnica que quieren avanzar con rigor.',
    edad: 'Todos los niveles',
    formato: '1 clase semanal · 60 min',
    precio: '95',
    detalle: 'Repertorio clásico · Dos manos · Armonía · Preparación ABRSM',
  },
  {
    num: '03',
    nombre: 'Adultos',
    desc: 'Sin prisa, sin presión. Método adaptado para empezar o retomar el piano en cualquier etapa de la vida. Progresamos desde lo que tú ya sabes, con objetivos que tú eliges.',
    edad: 'Sin límite de edad',
    formato: '1 clase semanal · 60 min',
    precio: '89',
    detalle: 'Ritmo propio · Repertorio elegido · Sin exámenes obligatorios',
  },
]

/**
 * Dark-themed section — sits directly on top of the blurred VideoBackground.
 * rgba(15,17,14,0.82) overlay lets the blurred video show through while
 * keeping content readable. Uses light/ivory text throughout.
 */
export default function CursosDestacados() {
  return (
    <section
      aria-labelledby="cursos-heading"
      style={{
        position: 'relative',
        zIndex: 1,
        background: 'rgba(15,17,14,0.82)',
      }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '128px 96px',
        }}
        className="cursos-container"
      >
        {/* Cabecera */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '80px',
          }}
          className="cursos-header"
        >
          <h2
            id="cursos-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(2rem,4vw,3.5rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              color: 'var(--color-text-inv)',
              maxWidth: '12ch',
            }}
          >
            Encuentra tu nivel.
          </h2>
          <Link
            href="/cursos"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(250,247,246,0.55)',
              textDecoration: 'none',
              flexShrink: 0,
              transition: 'color 150ms cubic-bezier(0.16,1,0.3,1)',
            }}
            className="cursos-ver-link"
          >
            Ver todos los cursos
          </Link>
        </div>

        {/* Tarjetas */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
          }}
          className="cursos-grid"
        >
          {cursos.map(({ num, nombre, desc, edad, formato, precio, detalle }) => (
            <div
              key={num}
              style={{
                background: 'rgba(250,249,246,0.05)',
                border: '1px solid rgba(250,249,246,0.09)',
                padding: '48px 40px 44px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Número decorativo */}
              <span
                aria-hidden="true"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 300,
                  fontSize: 'clamp(2.5rem,5vw,4rem)',
                  lineHeight: '1',
                  color: 'rgba(250,249,246,0.12)',
                  letterSpacing: '-0.02em',
                  display: 'block',
                  marginBottom: '32px',
                }}
              >
                {num}
              </span>

              {/* Nombre */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontSize: '1.375rem',
                  lineHeight: '1.2',
                  color: 'var(--color-text-inv)',
                  marginBottom: '20px',
                }}
              >
                {nombre}
              </h3>

              {/* Descripción */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  fontSize: '0.9375rem',
                  lineHeight: '1.7',
                  color: 'rgba(250,247,246,0.65)',
                  marginBottom: '28px',
                }}
              >
                {desc}
              </p>

              {/* Detalle */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  fontSize: '0.8125rem',
                  lineHeight: '1.7',
                  color: 'rgba(250,247,246,0.35)',
                  marginBottom: 'auto',
                  paddingBottom: '32px',
                }}
              >
                {detalle}
              </p>

              {/* Footer tarjeta */}
              <div
                style={{
                  borderTop: '1px solid rgba(250,249,246,0.10)',
                  paddingTop: '24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 300,
                      fontSize: '1.75rem',
                      lineHeight: '1',
                      color: 'var(--color-text-inv)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    €{precio}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 300,
                      fontSize: '0.75rem',
                      color: 'rgba(250,247,246,0.45)',
                      marginLeft: '6px',
                    }}
                  >
                    / mes
                  </span>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                      fontSize: '0.5625rem',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: 'rgba(250,247,246,0.40)',
                      display: 'block',
                      marginBottom: '4px',
                    }}
                  >
                    {formato}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                      fontSize: '0.5625rem',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: 'rgba(250,247,246,0.40)',
                      display: 'block',
                    }}
                  >
                    {edad}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: '64px',
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
          }}
          className="cursos-footer"
        >
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: '1rem',
              color: 'rgba(250,247,246,0.50)',
            }}
          >
            ¿No sabes qué nivel elegir? Te ayudamos.
          </p>
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
              flexShrink: 0,
            }}
          >
            Inscríbete
          </Link>
        </div>
      </div>

      <style>{`
        .cursos-ver-link:hover { color: rgba(250,247,246,0.85) !important; }
        @media (max-width: 1024px) {
          .cursos-grid { grid-template-columns: 1fr !important; gap: 1px !important; }
        }
        @media (max-width: 900px) {
          .cursos-container { padding: 80px 24px !important; }
          .cursos-header { flex-direction: column; align-items: flex-start; gap: 32px; }
          .cursos-footer { flex-direction: column; align-items: flex-start; gap: 24px; }
        }
      `}</style>
    </section>
  )
}
