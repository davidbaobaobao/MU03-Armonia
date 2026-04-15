import Link from 'next/link'

const cursos = [
  {
    num: '01',
    nombre: 'Iniciación',
    desc: 'Para quienes se acercan al piano por primera vez. Lectura de notas, postura, primeras piezas.',
    edad: 'Desde los 8 años',
  },
  {
    num: '02',
    nombre: 'Intermedio',
    desc: 'Repertorio progresivo, lectura a dos manos, armonía básica y preparación para ABRSM.',
    edad: 'Todos los niveles',
  },
  {
    num: '03',
    nombre: 'Adultos',
    desc: 'Sin prisa, sin presión. Método adaptado para empezar o retomar el piano en cualquier etapa de la vida.',
    edad: 'Sin límite de edad',
  },
]

export default function CursosDestacados() {
  return (
    <section
      aria-labelledby="cursos-heading"
      style={{ background: 'var(--color-surface-low)' }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '128px 96px',
        }}
        className="section-container"
      >
        {/* Cabecera de sección */}
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
              color: 'var(--color-graphite-deep)',
              maxWidth: '12ch',
            }}
          >
            Encuentra tu nivel.
          </h2>
          <Link href="/cursos" className="btn-tertiary" style={{ flexShrink: 0 }}>
            Ver todos los cursos
          </Link>
        </div>

        {/* Tarjetas de cursos */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2px', // Separación mínima — el fondo actúa como separador
          }}
          className="cursos-grid"
        >
          {cursos.map(({ num, nombre, desc, edad }) => (
            <div
              key={num}
              style={{
                background: 'var(--color-surface)',
                padding: '48px 40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
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
                  color: 'var(--color-surface-highest)',
                  letterSpacing: '-0.02em',
                  display: 'block',
                }}
              >
                {num}
              </span>

              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 400,
                    fontSize: '1.375rem',
                    lineHeight: '1.2',
                    color: 'var(--color-graphite)',
                    marginBottom: '16px',
                  }}
                >
                  {nombre}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 300,
                    fontSize: '1rem',
                    lineHeight: '1.65',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  {desc}
                </p>
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '0.625rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-muted)',
                  marginTop: 'auto',
                }}
              >
                {edad}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .section-container { padding: 80px 24px !important; }
          .cursos-header { flex-direction: column; align-items: flex-start; gap: 32px; }
          .cursos-grid { grid-template-columns: 1fr !important; gap: 2px !important; }
        }
      `}</style>
    </section>
  )
}
