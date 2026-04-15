import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CursosList from '@/components/CursosList'
import Link from 'next/link'

// ISR — lista de cursos se refresca cada 60 segundos
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Cursos de Piano — Todos los Niveles | Escuela Armonía Valencia',
  description:
    'Iniciación, intermedio, adultos y preparación ABRSM. Clases individuales de piano en Valencia.',
  openGraph: {
    title: 'Cursos de Piano — Todos los Niveles | Escuela Armonía Valencia',
    description: 'Iniciación, intermedio, adultos y preparación ABRSM.',
    locale: 'es_ES',
  },
}

const pilares = [
  {
    num: '01',
    titulo: 'Técnica',
    desc: 'Postura, digitación, pedal. La técnica no es un fin — es el vehículo. La enseñamos para que nunca sea un obstáculo.',
  },
  {
    num: '02',
    titulo: 'Lectura',
    desc: 'Solmización, ritmo, comprensión armónica. Leer música con fluidez libera al intérprete para centrarse en la expresión.',
  },
  {
    num: '03',
    titulo: 'Repertorio',
    desc: 'Cada alumno trabaja piezas que le motivan. Del Barroco al jazz, del clásico al pop. El repertorio define la identidad musical.',
  },
]

export default function CursosPage() {
  return (
    <>
      <Navigation />
      <main id="main">
        {/* Hero de página */}
        <section
          aria-label="Cabecera de cursos"
          style={{
            background: 'var(--color-surface)',
            paddingTop: '72px',
          }}
        >
          <div
            style={{
              maxWidth: '1440px',
              margin: '0 auto',
              padding: '96px 96px 80px',
              display: 'grid',
              gridTemplateColumns: '7fr 5fr',
              gap: '64px',
              alignItems: 'end',
            }}
            className="cursos-hero-grid"
          >
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontSize: 'clamp(2.5rem,6vw,6rem)',
                lineHeight: '1.0',
                letterSpacing: '-0.03em',
                color: 'var(--color-graphite-deep)',
              }}
            >
              Encuentra tu nivel.
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '1.0625rem',
                lineHeight: '1.7',
                color: 'var(--color-text-muted)',
                alignSelf: 'end',
                paddingBottom: '8px',
              }}
            >
              Desde el primer acorde hasta el repertorio avanzado.
            </p>
          </div>

          <style>{`
            @media (max-width: 767px) {
              .cursos-hero-grid {
                grid-template-columns: 1fr !important;
                padding: 64px 24px 48px !important;
                gap: 24px !important;
              }
            }
          `}</style>
        </section>

        {/* Lista de cursos dinámica */}
        <CursosList />

        {/* 3 pilares — estático */}
        <section
          aria-labelledby="pilares-heading"
          style={{ background: 'var(--color-surface)' }}
        >
          <div
            style={{
              maxWidth: '1440px',
              margin: '0 auto',
              padding: '128px 96px',
            }}
            className="pilares-container"
          >
            <h2
              id="pilares-heading"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '0.5625rem',
                letterSpacing: '0.5em',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
                marginBottom: '80px',
              }}
            >
              Metodología
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '64px',
              }}
              className="pilares-grid"
            >
              {pilares.map(({ num, titulo, desc }) => (
                <div key={num}>
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
                      marginBottom: '24px',
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
                      color: 'var(--color-graphite)',
                      marginBottom: '16px',
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
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @media (max-width: 767px) {
              .pilares-container { padding: 80px 24px !important; }
              .pilares-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            }
          `}</style>
        </section>

        {/* CTA inscripción */}
        <section
          aria-label="Inscripción"
          style={{ background: 'var(--color-surface-low)', padding: '96px' }}
          className="cta-inscripcion"
        >
          <div
            style={{
              maxWidth: '1440px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '48px',
            }}
            className="cta-inner"
          >
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(1.25rem,2.5vw,2rem)',
                lineHeight: '1.3',
                color: 'var(--color-graphite)',
                maxWidth: '32ch',
              }}
            >
              ¿Dudas sobre qué nivel es el tuyo? Escríbenos.
            </p>
            <Link href="/contacto" className="btn-primary" style={{ flexShrink: 0 }}>
              Contactar
            </Link>
          </div>

          <style>{`
            @media (max-width: 767px) {
              .cta-inscripcion { padding: 64px 24px !important; }
              .cta-inner { flex-direction: column; align-items: flex-start !important; gap: 32px !important; }
            }
          `}</style>
        </section>
      </main>
      <Footer />
    </>
  )
}
