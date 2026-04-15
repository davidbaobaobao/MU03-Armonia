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
 * Fully transparent — the blurred VideoBackground plays seamlessly
 * through both this section and the Hero above it.
 * Each card is an independent dark-glass block with a visible gap between.
 */
export default function CursosDestacados() {
  return (
    <section
      aria-labelledby="cursos-heading"
      style={{ position: 'relative', zIndex: 1, background: 'transparent' }}
    >
      <div
        style={{ maxWidth: '1440px', margin: '0 auto', padding: '96px 96px 128px' }}
        className="cursos-container"
      >
        {/* Cabecera */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '56px',
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
            }}
          >
            Encuentra tu nivel.
          </h2>
          <Link href="/cursos" className="cursos-ver-link">
            Ver todos los cursos
          </Link>
        </div>

        {/* Cards — independent, each floating on the video */}
        <div
          style={{ display: 'flex', gap: '12px', alignItems: 'stretch' }}
          className="cursos-grid"
        >
          {cursos.map(({ num, nombre, desc, edad, formato, precio, detalle }) => (
            <div
              key={num}
              style={{
                flex: '1 1 0%',
                background: 'rgba(10,12,10,0.76)',
                border: '1px solid rgba(250,249,246,0.08)',
                padding: '48px 36px 40px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 300,
                  fontSize: 'clamp(2.5rem,5vw,4rem)',
                  lineHeight: '1',
                  color: 'rgba(250,249,246,0.10)',
                  letterSpacing: '-0.02em',
                  display: 'block',
                  marginBottom: '28px',
                }}
              >
                {num}
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontSize: '1.375rem',
                  lineHeight: '1.2',
                  color: 'var(--color-text-inv)',
                  marginBottom: '16px',
                }}
              >
                {nombre}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  fontSize: '0.9375rem',
                  lineHeight: '1.7',
                  color: 'rgba(250,247,246,0.62)',
                  marginBottom: '20px',
                }}
              >
                {desc}
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  fontSize: '0.8125rem',
                  lineHeight: '1.7',
                  color: 'rgba(250,247,246,0.30)',
                  marginBottom: 'auto',
                  paddingBottom: '28px',
                }}
              >
                {detalle}
              </p>

              <div
                style={{
                  borderTop: '1px solid rgba(250,249,246,0.08)',
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
                      color: 'rgba(250,247,246,0.40)',
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
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'rgba(250,247,246,0.35)',
                      display: 'block',
                      marginBottom: '3px',
                    }}
                  >
                    {formato}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                      fontSize: '0.5625rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'rgba(250,247,246,0.35)',
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
          style={{ marginTop: '48px', display: 'flex', alignItems: 'center', gap: '40px' }}
          className="cursos-footer"
        >
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: '1rem',
              color: 'rgba(250,247,246,0.45)',
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
        .cursos-ver-link {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(250,247,246,0.45);
          text-decoration: none;
          flex-shrink: 0;
          transition: color 150ms cubic-bezier(0.16,1,0.3,1);
        }
        .cursos-ver-link:hover { color: rgba(250,247,246,0.85); }
        @media (max-width: 1024px) {
          .cursos-grid { flex-direction: column !important; }
        }
        @media (max-width: 900px) {
          .cursos-container { padding: 64px 24px 96px !important; }
          .cursos-header { flex-direction: column; align-items: flex-start; gap: 24px; }
          .cursos-footer { flex-direction: column; align-items: flex-start; gap: 20px; }
        }
      `}</style>
    </section>
  )
}
