import Image from 'next/image'
import Link from 'next/link'

const profesores = [
  {
    id: 'carmen',
    nombre: 'Carmen Solís',
    rol: 'Directora · Profesora de Piano',
    bio: 'Graduada en el Conservatorio Superior de Música de Valencia. Doce años formando alumnos de todas las edades, con especial atención al repertorio del siglo XX y a la pedagogía de iniciación. Directora artística de los recitales anuales de la escuela.',
    imagen: '/images/teacher-01.jpeg',
    alt: 'Carmen Solís, directora y profesora de piano en Escuela Armonía Valencia',
  },
  {
    id: 'marcos',
    nombre: 'Marcos Ferrer',
    rol: 'Profesor de Piano y Armonía',
    bio: 'Pianista y compositor formado en Valencia y Ámsterdam. Especialista en repertorio contemporáneo y jazz armónico. Trabaja con alumnos de nivel intermedio y avanzado que buscan ampliar su lenguaje musical más allá del repertorio clásico.',
    imagen: '/images/teacher-02.jpeg',
    alt: 'Marcos Ferrer, profesor de piano y armonía en Escuela Armonía Valencia',
  },
  {
    id: 'ana',
    nombre: 'Ana Ruiz',
    rol: 'Profesora de Piano · Iniciación',
    bio: 'Profesora certificada en el método ABRSM con más de ocho años de experiencia en enseñanza infantil y juvenil. Especialista en hacer del primer contacto con el piano una experiencia sólida y duradera. Adapta cada clase al ritmo del alumno.',
    imagen: '/images/teacher-03.jpeg',
    alt: 'Ana Ruiz, profesora de piano e iniciación en Escuela Armonía Valencia',
  },
]

export default function ProfesoresHome() {
  return (
    <section
      aria-labelledby="profesores-home-heading"
      style={{ background: 'var(--color-surface)' }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '128px 96px',
        }}
        className="prof-container"
      >
        {/* Cabecera */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '80px',
          }}
          className="prof-header"
        >
          <h2
            id="profesores-home-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(2rem,4vw,3.5rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              color: 'var(--color-graphite-deep)',
              maxWidth: '20ch',
            }}
          >
            Profesores con vocación, no solo con título.
          </h2>
          <Link href="/profesores" className="btn-tertiary" style={{ flexShrink: 0 }}>
            Conoce al equipo
          </Link>
        </div>

        {/* Fichas */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2px',
          }}
          className="prof-grid"
        >
          {profesores.map(({ id, nombre, rol, bio, imagen, alt }) => (
            <div
              key={id}
              style={{
                background: 'var(--color-surface-low)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Foto */}
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '3/4',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={imagen}
                  alt={alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    filter: 'grayscale(85%)',
                    transition: 'filter 600ms cubic-bezier(0.16,1,0.3,1)',
                  }}
                  className="prof-photo"
                />
              </div>

              {/* Texto */}
              <div
                style={{
                  padding: '40px 36px 44px',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 400,
                    fontSize: '1.25rem',
                    lineHeight: '1.2',
                    color: 'var(--color-graphite)',
                    marginBottom: '8px',
                  }}
                >
                  {nombre}
                </h3>

                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: '0.5625rem',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-muted)',
                    display: 'block',
                    marginBottom: '24px',
                  }}
                >
                  {rol}
                </span>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 300,
                    fontSize: '0.9375rem',
                    lineHeight: '1.7',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  {bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .prof-photo:hover { filter: grayscale(0%) !important; }
        @media (max-width: 1024px) {
          .prof-grid { grid-template-columns: 1fr !important; gap: 2px !important; }
        }
        @media (max-width: 900px) {
          .prof-container { padding: 80px 24px !important; }
          .prof-header { flex-direction: column; align-items: flex-start; gap: 32px; }
        }
      `}</style>
    </section>
  )
}
