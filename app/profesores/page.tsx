import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ProfesoresHome from '@/components/ProfesoresHome'
import TeamList from '@/components/TeamList'
import Link from 'next/link'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Profesores de Piano | Escuela Armonía Valencia',
  description:
    'Conoce al equipo docente de Escuela Armonía. Carmen Solís, Marcos Ferrer y Ana Ruiz — profesores con vocación y formación académica en Valencia.',
  openGraph: {
    title: 'Profesores de Piano | Escuela Armonía Valencia',
    locale: 'es_ES',
  },
}

export default function ProfesoresPage() {
  return (
    <>
      <Navigation />
      <main id="main">

        {/* ── Hero ── */}
        <section
          aria-label="Cabecera de profesores"
          style={{ background: 'var(--color-surface)', paddingTop: '72px' }}
        >
          <div
            style={{ maxWidth: '1440px', margin: '0 auto', padding: '96px 96px 64px' }}
            className="prof-page-hero"
          >
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '0.5625rem',
                letterSpacing: '0.5em',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
                display: 'block',
                marginBottom: '40px',
              }}
            >
              El equipo
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontSize: 'clamp(2.5rem,6vw,6rem)',
                lineHeight: '1.0',
                letterSpacing: '-0.03em',
                color: 'var(--color-graphite-deep)',
                maxWidth: '20ch',
              }}
            >
              Profesores con vocación, no solo con título.
            </h1>
          </div>
          <style>{`
            @media (max-width: 767px) {
              .prof-page-hero { padding: 64px 24px 48px !important; }
            }
          `}</style>
        </section>

        {/* ── Accordion interactivo ── */}
        <ProfesoresHome />

        {/* ── Fichas detalladas (dinámico Supabase) — visible cuando haya datos ── */}
        <TeamList />

        {/* ── Filosofía docente ── */}
        <section
          aria-label="Filosofía"
          style={{ background: 'var(--color-surface-low)' }}
        >
          <div
            style={{
              maxWidth: '1440px',
              margin: '0 auto',
              padding: '128px 96px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '96px',
              alignItems: 'start',
            }}
            className="filosofia-grid"
          >
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 300,
                  fontSize: 'clamp(1.875rem,3.5vw,3rem)',
                  lineHeight: '1.15',
                  letterSpacing: '-0.02em',
                  color: 'var(--color-graphite-deep)',
                  marginBottom: '32px',
                }}
              >
                No enseñamos piano. Enseñamos a amar la música.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  color: 'var(--color-text-muted)',
                  maxWidth: '44ch',
                  marginBottom: '48px',
                }}
              >
                Cada profesor de Escuela Armonía ha sido elegido no solo por su formación académica, sino por su capacidad de conectar con el alumno. Porque la técnica se aprende — la pasión se contagia.
              </p>
              <Link href="/contacto" className="btn-primary">
                Solicitar información
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {[
                { titulo: 'Formación continua', desc: 'Todos nuestros profesores actualizan su formación pedagógica cada año. Los métodos de enseñanza evolucionan — nosotros también.' },
                { titulo: 'Seguimiento individualizado', desc: 'Cada alumno tiene un cuaderno de progreso personal. El profesor registra avances, dificultades y objetivos en cada clase.' },
                { titulo: 'Comunicación con las familias', desc: 'Informamos puntualmente del progreso de los alumnos menores. Las familias son parte del proceso de aprendizaje.' },
              ].map(({ titulo, desc }) => (
                <div key={titulo}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 400,
                      fontSize: '1.125rem',
                      color: 'var(--color-graphite)',
                      marginBottom: '8px',
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
            @media (max-width: 900px) {
              .filosofia-grid { grid-template-columns: 1fr !important; padding: 80px 24px !important; gap: 56px !important; }
            }
          `}</style>
        </section>

      </main>
      <Footer />
    </>
  )
}
