import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Recitales from '@/components/Recitales'
import Link from 'next/link'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Recitales y Eventos | Escuela Armonía Valencia',
  description:
    'Cada alumno de Escuela Armonía tiene su propio recital al año. No como examen — como celebración. Consulta los próximos eventos.',
  openGraph: {
    title: 'Recitales y Eventos | Escuela Armonía Valencia',
    locale: 'es_ES',
  },
}

const formato = [
  {
    num: '01',
    titulo: 'Un recital para cada alumno',
    desc: 'Una vez al año, cada alumno tiene su propio momento en el escenario. No es un examen. Es una celebración del trabajo del curso — el resultado natural de meses de preparación.',
  },
  {
    num: '02',
    titulo: 'El repertorio lo elige el alumno',
    desc: 'Cada intérprete presenta las piezas que ha trabajado durante el curso. El programa refleja su nivel, su estilo y su progreso real. No hay piezas impuestas.',
  },
  {
    num: '03',
    titulo: 'Abierto a familias y amigos',
    desc: 'Los recitales son eventos íntimos, en sala reducida, abiertos a las familias. El ambiente es cálido y cercano — lejos del nerviosismo de un examen formal.',
  },
]

export default function RecitalesPage() {
  return (
    <>
      <Navigation />
      <main id="main">

        {/* ── Hero ── */}
        <section
          aria-label="Cabecera de recitales"
          style={{ background: 'var(--color-surface)', paddingTop: '72px' }}
        >
          <div
            style={{ maxWidth: '1440px', margin: '0 auto', padding: '96px 96px 80px' }}
            className="recitales-hero"
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
              Eventos
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontSize: 'clamp(2.5rem,6vw,6rem)',
                lineHeight: '1.0',
                letterSpacing: '-0.03em',
                color: 'var(--color-graphite-deep)',
                maxWidth: '16ch',
              }}
            >
              El escenario como celebración.
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '1.0625rem',
                lineHeight: '1.7',
                color: 'var(--color-text-muted)',
                maxWidth: '44ch',
                marginTop: '32px',
              }}
            >
              En Escuela Armonía cada alumno toca en público una vez al año. No como prueba — como demostración de lo que ha aprendido, ante quienes más le apoyan.
            </p>
          </div>
          <style>{`
            @media (max-width: 767px) {
              .recitales-hero { padding: 64px 24px 48px !important; }
            }
          `}</style>
        </section>

        {/* ── Próximos eventos (dinámico) ── */}
        <Recitales />

        {/* ── Formato del recital ── */}
        <section
          aria-labelledby="formato-heading"
          style={{ background: 'var(--color-surface)' }}
        >
          <div
            style={{ maxWidth: '1440px', margin: '0 auto', padding: '128px 96px' }}
            className="formato-container"
          >
            <h2
              id="formato-heading"
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
              Cómo funciona
            </h2>

            <div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '64px' }}
              className="formato-grid"
            >
              {formato.map(({ num, titulo, desc }) => (
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
                      fontSize: '1.25rem',
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
              .formato-container { padding: 80px 24px !important; }
              .formato-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            }
          `}</style>
        </section>

        {/* ── Cita directora ── */}
        <section
          aria-label="Cita sobre recitales"
          style={{ background: 'var(--color-graphite)', padding: '128px 96px' }}
          className="recital-cita"
        >
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <blockquote
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(1.375rem,2.5vw,2.25rem)',
                lineHeight: '1.4',
                color: 'var(--color-text-inv)',
                marginBottom: '40px',
              }}
            >
              «Tocar en público no es el objetivo — es la consecuencia natural de haber trabajado bien. Cuando el alumno sube al escenario, ya sabe que está preparado.»
            </blockquote>
            <cite
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '0.625rem',
                letterSpacing: '0.5em',
                textTransform: 'uppercase',
                color: 'rgba(250,247,246,0.45)',
                fontStyle: 'normal',
              }}
            >
              — Carmen Solís, Directora
            </cite>
          </div>
          <style>{`
            @media (max-width: 900px) {
              .recital-cita { padding: 80px 24px !important; }
            }
          `}</style>
        </section>

        {/* ── CTA ── */}
        <section
          aria-label="Inscripción recitales"
          style={{ background: 'var(--color-surface-low)', padding: '96px' }}
          className="recital-cta"
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
            className="recital-cta-inner"
          >
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(1.25rem,2.5vw,2rem)',
                lineHeight: '1.3',
                color: 'var(--color-graphite)',
                maxWidth: '36ch',
              }}
            >
              ¿Te gustaría que tu hijo participase en el próximo recital?
            </p>
            <Link href="/contacto" className="btn-primary" style={{ flexShrink: 0 }}>
              Preguntar por plazas
            </Link>
          </div>
          <style>{`
            @media (max-width: 767px) {
              .recital-cta { padding: 64px 24px !important; }
              .recital-cta-inner { flex-direction: column; align-items: flex-start !important; gap: 32px !important; }
            }
          `}</style>
        </section>

      </main>
      <Footer />
    </>
  )
}
