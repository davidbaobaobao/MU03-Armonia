import Link from 'next/link'

const pilares = [
  {
    num: '01',
    titulo: 'Escuchar antes de tocar',
    texto:
      'El oído es el instrumento principal. Antes de leer una partitura, el alumno aprende a distinguir intervalos, ritmos y dinámicas. Tocamos lo que oímos. Esta es la diferencia entre interpretar y reproducir.',
  },
  {
    num: '02',
    titulo: 'La técnica al servicio de la expresión',
    texto:
      'No enseñamos escalas para enseñar escalas. Cada ejercicio técnico tiene un propósito musical directo. La postura, la digitación y el peso del brazo se trabajan para que el alumno pueda decir lo que la música quiere decir.',
  },
  {
    num: '03',
    titulo: 'Un recital al año para cada alumno',
    texto:
      'Cada alumno tiene su propio momento en el escenario, una vez al año. No como examen. Como celebración. Preparar y tocar en público consolida el trabajo del curso y construye confianza musical real.',
  },
]

export default function MetodoHome() {
  return (
    <section
      aria-labelledby="metodo-home-heading"
      style={{ background: 'var(--color-surface-low)' }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '128px 96px',
        }}
        className="metodo-home-container"
      >
        {/* Cabecera */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '96px',
            alignItems: 'end',
            marginBottom: '96px',
          }}
          className="metodo-home-header"
        >
          <h2
            id="metodo-home-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(2rem,4vw,3.5rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              color: 'var(--color-graphite-deep)',
            }}
          >
            Escuchar antes de tocar.
          </h2>
          <div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '1.0625rem',
                lineHeight: '1.7',
                color: 'var(--color-text-muted)',
                marginBottom: '32px',
              }}
            >
              Nuestro método no sigue una partitura fija. Se adapta a cada alumno, a su oído, a su ritmo y a sus objetivos. El resultado es siempre el mismo: músicos que entienden lo que tocan.
            </p>
            <Link href="/metodo" className="btn-tertiary">
              Conoce el método completo
            </Link>
          </div>
        </div>

        {/* Tres pilares */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2px',
          }}
          className="metodo-home-grid"
        >
          {pilares.map(({ num, titulo, texto }) => (
            <div
              key={num}
              style={{
                background: 'var(--color-surface)',
                padding: '56px 40px 52px',
              }}
            >
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
                  marginBottom: '40px',
                }}
              >
                {num}
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontSize: '1.25rem',
                  lineHeight: '1.25',
                  color: 'var(--color-graphite)',
                  marginBottom: '20px',
                }}
              >
                {titulo}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  fontSize: '0.9375rem',
                  lineHeight: '1.7',
                  color: 'var(--color-text-muted)',
                }}
              >
                {texto}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .metodo-home-grid { grid-template-columns: 1fr !important; gap: 2px !important; }
        }
        @media (max-width: 900px) {
          .metodo-home-container { padding: 80px 24px !important; }
          .metodo-home-header {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            margin-bottom: 64px !important;
          }
        }
      `}</style>
    </section>
  )
}
