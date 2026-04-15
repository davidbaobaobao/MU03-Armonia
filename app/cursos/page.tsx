import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CursosList from '@/components/CursosList'
import Reveal from '@/components/Reveal'
import Link from 'next/link'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Cursos de Piano — Todos los Niveles | Escuela Armonía Valencia',
  description:
    'Iniciación, intermedio, adultos y preparación ABRSM. Clases individuales de piano en Valencia desde €89/mes.',
  openGraph: {
    title: 'Cursos de Piano — Todos los Niveles | Escuela Armonía Valencia',
    description: 'Iniciación, intermedio, adultos y preparación ABRSM.',
    locale: 'es_ES',
  },
}

const cursosEstaticos = [
  {
    num: '01',
    nombre: 'Iniciación',
    precio: '89 €/mes',
    formato: '1 clase semanal · 50 min',
    edad: 'Desde los 8 años',
    desc: 'Para quienes se acercan al piano por primera vez. Empezamos por el oído: antes de leer una nota, aprendemos a escucharla. La postura, la digitación y el primer repertorio se construyen en paralelo, sin prisa, sin presión.',
    incluye: ['Lectura de notas y ritmo', 'Postura y técnica básica', 'Primeras piezas de repertorio', 'Material didáctico incluido'],
  },
  {
    num: '02',
    nombre: 'Intermedio',
    precio: '95 €/mes',
    formato: '1 clase semanal · 60 min',
    edad: 'Todos los niveles',
    desc: 'Para alumnos con base técnica que quieren avanzar con rigor. Trabajamos repertorio clásico, lectura fluida a dos manos, armonía funcional y preparación para los grados de Trinity o ABRSM si el alumno lo desea.',
    incluye: ['Repertorio del Barroco al siglo XX', 'Lectura a dos manos', 'Armonía y análisis básico', 'Preparación opcional ABRSM'],
  },
  {
    num: '03',
    nombre: 'Adultos',
    precio: '89 €/mes',
    formato: '1 clase semanal · 60 min',
    edad: 'Sin límite de edad',
    desc: 'Sin prisa, sin presión. El método se adapta a tu ritmo, a tu disponibilidad y a tus objetivos. Tanto si empiezas desde cero como si retomas el piano después de años, encontramos el punto exacto desde el que avanzar.',
    incluye: ['Método adaptado al ritmo del alumno', 'Repertorio elegido por el alumno', 'Sin exámenes obligatorios', 'Horario flexible'],
  },
  {
    num: '04',
    nombre: 'Preparación ABRSM',
    precio: 'Consultar',
    formato: '1–2 clases semanales',
    edad: 'Nivel Grado 1–8',
    desc: 'Preparación específica para los exámenes oficiales del Associated Board of the Royal Schools of Music. Trabajamos las escalas, piezas y teoría de cada grado con rigor y método. Historial de aprobados del 100%.',
    incluye: ['Piezas de examen del grado correspondiente', 'Escalas y arpegios reglamentarios', 'Teoría musical integrada', 'Simulacros de examen'],
  },
]

const pilares = [
  {
    num: '01',
    titulo: 'Técnica',
    desc: 'Postura, digitación, pedal, peso del brazo. La técnica no es un fin — es el vehículo. La trabajamos para que nunca sea un obstáculo entre el alumno y la música.',
  },
  {
    num: '02',
    titulo: 'Lectura',
    desc: 'Solmización, ritmo, comprensión armónica. Leer música con fluidez libera al intérprete para centrarse en la expresión. Es la diferencia entre descifrar y interpretar.',
  },
  {
    num: '03',
    titulo: 'Repertorio',
    desc: 'Cada alumno trabaja piezas que le motivan. Del Barroco al jazz, del clásico al pop. El repertorio define la identidad musical de cada alumno y consolida lo aprendido.',
  },
]

export default function CursosPage() {
  return (
    <>
      <Navigation />
      <main id="main">

        {/* ── Hero ── */}
        <section
          aria-label="Cabecera de cursos"
          style={{ background: 'var(--color-surface)', paddingTop: '72px' }}
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
              Desde el primer acorde hasta el repertorio avanzado. Clases individuales, método adaptado a cada alumno.
            </p>
          </div>
          <style>{`
            @media (max-width: 767px) {
              .cursos-hero-grid { grid-template-columns: 1fr !important; padding: 64px 24px 48px !important; gap: 24px !important; }
            }
          `}</style>
        </section>

        {/* ── Cursos dinámicos (Supabase) — si hay datos ── */}
        <CursosList />

        {/* ── Cursos estáticos — siempre visibles ── */}
        <section
          aria-labelledby="cursos-estaticos-heading"
          style={{ background: 'var(--color-surface-low)' }}
        >
          <div
            style={{ maxWidth: '1440px', margin: '0 auto', padding: '96px 96px' }}
            className="cursos-estaticos-container"
          >
            <h2
              id="cursos-estaticos-heading"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '0.5625rem',
                letterSpacing: '0.5em',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
                marginBottom: '72px',
              }}
            >
              Niveles y precios
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {cursosEstaticos.map((curso, idx) => (
                <Reveal key={curso.num} delay={idx * 80}>
                  <article
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '80px 1fr 280px',
                      gap: '48px',
                      alignItems: 'start',
                      padding: '48px 40px',
                      background: idx % 2 === 0 ? 'var(--color-surface)' : 'var(--color-surface-low)',
                    }}
                    className="curso-card"
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 300,
                        fontSize: 'clamp(2rem,4vw,3.5rem)',
                        lineHeight: '1',
                        color: 'var(--color-surface-highest)',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {curso.num}
                    </span>

                    <div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 400,
                          fontSize: 'clamp(1.25rem,2.5vw,2rem)',
                          lineHeight: '1.2',
                          color: 'var(--color-graphite)',
                          marginBottom: '8px',
                        }}
                      >
                        {curso.nombre}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontWeight: 500,
                          fontSize: '0.5625rem',
                          letterSpacing: '0.3em',
                          textTransform: 'uppercase',
                          color: 'var(--color-text-muted)',
                          marginBottom: '20px',
                        }}
                      >
                        {curso.formato} · {curso.edad}
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontWeight: 300,
                          fontSize: '0.9375rem',
                          lineHeight: '1.7',
                          color: 'var(--color-text-muted)',
                          maxWidth: '58ch',
                          marginBottom: '24px',
                        }}
                      >
                        {curso.desc}
                      </p>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {curso.incluye.map(item => (
                          <li
                            key={item}
                            style={{
                              fontFamily: 'var(--font-body)',
                              fontWeight: 300,
                              fontSize: '0.875rem',
                              color: 'var(--color-text-muted)',
                              paddingLeft: '16px',
                              position: 'relative',
                            }}
                          >
                            <span
                              aria-hidden="true"
                              style={{
                                position: 'absolute',
                                left: 0,
                                color: 'var(--color-outline)',
                              }}
                            >
                              —
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ textAlign: 'right', paddingTop: '4px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 300,
                          fontSize: '1.5rem',
                          color: 'var(--color-graphite)',
                          letterSpacing: '-0.02em',
                          display: 'block',
                          marginBottom: '4px',
                        }}
                      >
                        {curso.precio}
                      </span>
                      <Link href="/contacto" className="btn-tertiary">
                        Consultar plaza
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) {
              .cursos-estaticos-container { padding: 64px 24px !important; }
              .curso-card { grid-template-columns: 48px 1fr !important; padding: 32px 0 !important; }
              .curso-card > div:last-child { grid-column: 2; text-align: left !important; }
            }
          `}</style>
        </section>

        {/* ── 3 pilares metodológicos ── */}
        <section
          aria-labelledby="pilares-heading"
          style={{ background: 'var(--color-surface)' }}
        >
          <div
            style={{ maxWidth: '1440px', margin: '0 auto', padding: '128px 96px' }}
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
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '64px' }}
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

        {/* ── CTA inscripción ── */}
        <section
          aria-label="Inscripción"
          style={{ background: 'var(--color-surface-low)', padding: '96px' }}
          className="cta-section"
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
              ¿Dudas sobre qué nivel es el tuyo? Escríbenos y te orientamos sin compromiso.
            </p>
            <Link href="/contacto" className="btn-primary" style={{ flexShrink: 0 }}>
              Contactar
            </Link>
          </div>
          <style>{`
            @media (max-width: 767px) {
              .cta-section { padding: 64px 24px !important; }
              .cta-inner { flex-direction: column; align-items: flex-start !important; gap: 32px !important; }
            }
          `}</style>
        </section>

      </main>
      <Footer />
    </>
  )
}
