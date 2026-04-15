import type { Metadata } from 'next'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FAQsSection from '@/components/FAQsSection'

// ISR — FAQs se refrescan cada 60 segundos
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Nuestro Método de Enseñanza | Escuela Armonía Valencia',
  description:
    'Descubre el método pedagógico de Escuela Armonía: escuchar antes de tocar, técnica al servicio de la expresión, un recital al año para cada alumno.',
  openGraph: {
    title: 'Nuestro Método de Enseñanza | Escuela Armonía Valencia',
    locale: 'es_ES',
  },
}

const secciones = [
  {
    num: '01',
    titulo: 'Aprender a escuchar antes que a tocar',
    texto:
      'El oído es el instrumento principal. Antes de leer una partitura, el alumno aprende a escuchar intervalos, ritmos y dinámicas. Tocamos lo que oímos. Esta es la diferencia entre interpretar y reproducir.',
    imagen: '/images/method-01.jpeg',
    alt: 'Alumno escuchando en clase de piano en Escuela Armonía Valencia',
    imgDerecha: false,
  },
  {
    num: '02',
    titulo: 'La técnica al servicio de la expresión',
    texto:
      'No enseñamos escalas para enseñar escalas. Cada ejercicio técnico tiene un propósito musical directo. La postura, la digitación y el peso del brazo se trabajan para que el alumno pueda decir lo que la música quiere decir.',
    imagen: '/images/method-02.jpeg',
    alt: 'Detalle de manos sobre el teclado durante clase de piano en Valencia',
    imgDerecha: true,
  },
  {
    num: '03',
    titulo: 'Un recital al año para cada alumno',
    texto:
      'Cada alumno tiene su propio momento en el escenario, una vez al año. No como examen. Como celebración. Preparar y tocar en público consolida todo el trabajo del curso y construye confianza musical real.',
    imagen: null,
    alt: null,
    imgDerecha: false,
  },
]

export default function MetodoPage() {
  return (
    <>
      <Navigation />
      <main id="main">
        {/* Hero */}
        <section
          aria-label="Cabecera de método"
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
            }}
            className="metodo-hero"
          >
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontSize: 'clamp(2.5rem,6vw,6rem)',
                lineHeight: '1.0',
                letterSpacing: '-0.03em',
                color: 'var(--color-graphite-deep)',
                maxWidth: '14ch',
              }}
            >
              Escuchar antes de tocar.
            </h1>
          </div>

          <style>{`
            @media (max-width: 767px) {
              .metodo-hero { padding: 64px 24px 48px !important; }
            }
          `}</style>
        </section>

        {/* Secciones editoriales */}
        {secciones.map(({ num, titulo, texto, imagen, alt, imgDerecha }, i) => (
          <section
            key={num}
            aria-labelledby={`metodo-sec-${num}`}
            style={{
              background: i % 2 === 0
                ? 'var(--color-surface)'
                : 'var(--color-surface-low)',
            }}
          >
            <div
              style={{
                maxWidth: '1440px',
                margin: '0 auto',
                padding: '128px 96px',
                display: 'grid',
                gridTemplateColumns: imagen ? '1fr 1fr' : '7fr 5fr',
                gap: '96px',
                alignItems: 'center',
              }}
              className="metodo-section-grid"
            >
              {/* Texto — a veces izquierda, a veces derecha */}
              <div style={{ order: imgDerecha ? 1 : 2 }} className="metodo-text-col">
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 300,
                    fontSize: 'clamp(2rem,4vw,3.5rem)',
                    lineHeight: '1',
                    color: 'var(--color-surface-highest)',
                    letterSpacing: '-0.02em',
                    display: 'block',
                    marginBottom: '32px',
                  }}
                >
                  {num}
                </span>
                <h2
                  id={`metodo-sec-${num}`}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 300,
                    fontSize: 'clamp(1.5rem,2.5vw,2.25rem)',
                    lineHeight: '1.2',
                    color: 'var(--color-graphite-deep)',
                    marginBottom: '24px',
                  }}
                >
                  {titulo}
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 300,
                    fontSize: '1.0625rem',
                    lineHeight: '1.75',
                    color: 'var(--color-text-muted)',
                    maxWidth: '44ch',
                  }}
                >
                  {texto}
                </p>
              </div>

              {/* Imagen */}
              {imagen && (
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '4/3',
                    overflow: 'hidden',
                    order: imgDerecha ? 2 : 1,
                  }}
                >
                  <Image
                    src={imagen}
                    alt={alt ?? ''}
                    fill
                    sizes="(max-width: 900px) 100vw, 44vw"
                    style={{
                      objectFit: 'cover',
                      filter: 'grayscale(85%)',
                    }}
                  />
                </div>
              )}
            </div>

            <style>{`
              @media (max-width: 900px) {
                .metodo-section-grid {
                  grid-template-columns: 1fr !important;
                  padding: 80px 24px !important;
                  gap: 40px !important;
                }
                .metodo-text-col { order: 2 !important; }
                .metodo-section-grid > div:not(.metodo-text-col) { order: 1 !important; }
              }
            `}</style>
          </section>
        ))}

        {/* FAQs dinámicas */}
        <FAQsSection />
      </main>
      <Footer />
    </>
  )
}
