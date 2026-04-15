import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ContactoForm from '@/components/ContactoForm'

export const metadata: Metadata = {
  title: 'Contacto y Horarios | Escuela Armonía Valencia',
  description: 'Escríbenos a yeyebcn01@gmail.com o por WhatsApp. Lunes a viernes 9:00–17:00.',
  openGraph: {
    title: 'Contacto y Horarios | Escuela Armonía Valencia',
    locale: 'es_ES',
  },
}

export default function ContactoPage() {
  return (
    <>
      <Navigation />
      <main id="main">
        {/* Hero + datos de contacto */}
        <section
          aria-labelledby="contacto-heading"
          style={{
            background: 'var(--color-surface)',
            paddingTop: '72px',
          }}
        >
          <div
            style={{
              maxWidth: '1440px',
              margin: '0 auto',
              padding: '96px 96px 128px',
              display: 'grid',
              gridTemplateColumns: '5fr 7fr',
              gap: '128px',
              alignItems: 'start',
            }}
            className="contacto-layout"
          >
            {/* Columna izquierda — datos */}
            <div>
              <h1
                id="contacto-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 300,
                  fontSize: 'clamp(3rem,7vw,7rem)',
                  lineHeight: '1.0',
                  letterSpacing: '-0.03em',
                  color: 'var(--color-graphite-deep)',
                  marginBottom: '64px',
                }}
              >
                Hablemos.
              </h1>

              <dl style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div>
                  <dt
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                      fontSize: '0.5625rem',
                      letterSpacing: '0.4em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-muted)',
                      marginBottom: '8px',
                    }}
                  >
                    Email
                  </dt>
                  <dd style={{ marginLeft: 0 }}>
                    <a
                      href="mailto:yeyebcn01@gmail.com"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 300,
                        fontSize: '1rem',
                        color: 'var(--color-graphite)',
                        textDecoration: 'none',
                      }}
                    >
                      yeyebcn01@gmail.com
                    </a>
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
                      marginBottom: '8px',
                    }}
                  >
                    Horario
                  </dt>
                  <dd style={{ marginLeft: 0 }}>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 300,
                        fontSize: '0.9375rem',
                        color: 'var(--color-text-muted)',
                        lineHeight: '1.7',
                      }}
                    >
                      Lunes a viernes: 9:00 – 17:00
                      <br />
                      Sábados y domingos: Cerrado
                    </p>
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
                      marginBottom: '16px',
                    }}
                  >
                    WhatsApp
                  </dt>
                  <dd style={{ marginLeft: 0 }}>
                    <a
                      href="https://wa.me/34655544567?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20los%20cursos%20de%20piano"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ display: 'inline-flex' }}
                    >
                      Escríbenos por WhatsApp
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Columna derecha — formulario */}
            <div style={{ paddingTop: '8px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '0.5625rem',
                  letterSpacing: '0.4em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-muted)',
                  marginBottom: '48px',
                }}
              >
                Formulario de contacto
              </p>
              <ContactoForm />
            </div>
          </div>

          <style>{`
            @media (max-width: 900px) {
              .contacto-layout {
                grid-template-columns: 1fr !important;
                padding: 64px 24px 80px !important;
                gap: 64px !important;
              }
            }
          `}</style>
        </section>
      </main>
      <Footer />
    </>
  )
}
