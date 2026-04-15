import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import InscripcionForm from '@/components/InscripcionForm'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Inscripción | Escuela Armonía Valencia',
  description:
    'Solicita tu plaza en Escuela Armonía. Iniciación, intermedio, adultos y preparación ABRSM. Plazas limitadas — clases individuales en Valencia.',
  openGraph: {
    title: 'Inscripción | Escuela Armonía Valencia',
    locale: 'es_ES',
  },
}

const pasos = [
  {
    num: '01',
    titulo: 'Rellena el formulario',
    desc: 'Cuéntanos el curso que te interesa, la edad del alumno y cualquier detalle que nos ayude a orientarte.',
  },
  {
    num: '02',
    titulo: 'Te contactamos en 24 h',
    desc: 'Un profesor revisará tu solicitud y te escribirá para concretar el horario y resolver cualquier duda.',
  },
  {
    num: '03',
    titulo: 'Primera clase de prueba',
    desc: 'La primera clase es gratuita y sin compromiso. Si encaja, confirmamos la plaza y empezamos.',
  },
]

export default function InscribetePage() {
  return (
    <>
      <Navigation />
      <main id="main">

        {/* ── Hero ── */}
        <section
          aria-label="Inscripción en Escuela Armonía"
          style={{ background: 'var(--color-surface)', paddingTop: '72px' }}
        >
          <div
            style={{ maxWidth: '1440px', margin: '0 auto', padding: '96px 96px 80px' }}
            className="inscribete-hero"
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
              Plazas
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
                marginBottom: '32px',
              }}
            >
              Reserva tu plaza.
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '1.0625rem',
                lineHeight: '1.7',
                color: 'var(--color-text-muted)',
                maxWidth: '44ch',
              }}
            >
              Las plazas son limitadas — clases individuales con atención personalizada. Rellena el formulario y te contactamos en menos de 24 horas.
            </p>
          </div>
          <style>{`
            @media (max-width: 767px) {
              .inscribete-hero { padding: 64px 24px 48px !important; }
            }
          `}</style>
        </section>

        {/* ── Cómo funciona el proceso ── */}
        <section
          aria-labelledby="pasos-heading"
          style={{ background: 'var(--color-graphite)' }}
        >
          <div
            style={{ maxWidth: '1440px', margin: '0 auto', padding: '96px 96px' }}
            className="pasos-container"
          >
            <h2
              id="pasos-heading"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '0.5625rem',
                letterSpacing: '0.5em',
                textTransform: 'uppercase',
                color: 'rgba(250,247,246,0.45)',
                marginBottom: '64px',
              }}
            >
              Cómo funciona
            </h2>

            <div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '64px' }}
              className="pasos-grid"
            >
              {pasos.map(({ num, titulo, desc }) => (
                <div key={num}>
                  <span
                    aria-hidden="true"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 300,
                      fontSize: 'clamp(2.5rem,5vw,4rem)',
                      lineHeight: '1',
                      color: 'rgba(250,247,246,0.10)',
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
                      fontSize: '1.125rem',
                      lineHeight: '1.25',
                      color: 'var(--color-text-inv)',
                      marginBottom: '12px',
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
                      color: 'rgba(250,247,246,0.55)',
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
              .pasos-container { padding: 64px 24px !important; }
              .pasos-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
            }
          `}</style>
        </section>

        {/* ── Formulario + lateral ── */}
        <section
          aria-labelledby="formulario-heading"
          style={{ background: 'var(--color-surface-low)' }}
        >
          <div
            style={{
              maxWidth: '1440px',
              margin: '0 auto',
              padding: '128px 96px',
              display: 'grid',
              gridTemplateColumns: '4fr 7fr',
              gap: '128px',
              alignItems: 'start',
            }}
            className="formulario-layout"
          >
            {/* Lateral izquierdo */}
            <div style={{ position: 'sticky', top: '96px' }}>
              <h2
                id="formulario-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 300,
                  fontSize: 'clamp(1.5rem,2.5vw,2.25rem)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                  color: 'var(--color-graphite-deep)',
                  marginBottom: '32px',
                }}
              >
                Primera clase gratuita y sin compromiso.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  fontSize: '0.9375rem',
                  lineHeight: '1.75',
                  color: 'var(--color-text-muted)',
                  marginBottom: '40px',
                }}
              >
                Antes de comprometerte, queremos que conozcas al profesor y que el alumno se sienta cómodo. La primera sesión no tiene coste.
              </p>

              <dl style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <dt
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                      fontSize: '0.5625rem',
                      letterSpacing: '0.4em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-muted)',
                      marginBottom: '4px',
                    }}
                  >
                    Horario de atención
                  </dt>
                  <dd
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 300,
                      fontSize: '0.9375rem',
                      color: 'var(--color-text-muted)',
                      lineHeight: '1.6',
                      marginLeft: 0,
                    }}
                  >
                    Lunes a viernes: 9:00 – 17:00
                  </dd>
                </div>

                <div>
                  <dt
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                      fontSize: '0.5625rem',
                      letterSpacing: '0.4em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-muted)',
                      marginBottom: '12px',
                    }}
                  >
                    ¿Prefieres WhatsApp?
                  </dt>
                  <dd style={{ marginLeft: 0 }}>
                    <a
                      href="https://wa.me/34655544567?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20los%20cursos%20de%20piano"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ display: 'inline-flex' }}
                    >
                      Escríbenos
                    </a>
                  </dd>
                </div>
              </dl>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  fontSize: '0.8125rem',
                  color: 'var(--color-text-muted)',
                  marginTop: '48px',
                  lineHeight: '1.6',
                }}
              >
                ¿Quieres ver primero los cursos?{' '}
                <Link
                  href="/cursos"
                  style={{ color: 'var(--color-graphite)', textDecoration: 'underline' }}
                >
                  Ver niveles y precios
                </Link>
              </p>
            </div>

            {/* Formulario */}
            <div>
              <InscripcionForm />
            </div>
          </div>

          <style>{`
            @media (max-width: 900px) {
              .formulario-layout {
                grid-template-columns: 1fr !important;
                padding: 80px 24px !important;
                gap: 64px !important;
              }
              .formulario-layout > div:first-child {
                position: static !important;
              }
            }
          `}</style>
        </section>

      </main>
      <Footer />
    </>
  )
}
