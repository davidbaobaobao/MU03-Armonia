import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GaleriaGrid from '@/components/GaleriaGrid'

// ISR — galería se refresca cada 60 segundos
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Galería | Escuela Armonía Valencia',
  description: 'Fotografías de las instalaciones, clases y recitales de Escuela Armonía en Valencia.',
  openGraph: {
    title: 'Galería | Escuela Armonía Valencia',
    locale: 'es_ES',
  },
}

export default function GaleriaPage() {
  return (
    <>
      <Navigation />
      <main id="main">
        {/* Hero de página */}
        <section
          aria-label="Cabecera de galería"
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
            className="galeria-hero"
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
              La escuela en imágenes.
            </h1>
          </div>

          <style>{`
            @media (max-width: 767px) {
              .galeria-hero { padding: 64px 24px 48px !important; }
            }
          `}</style>
        </section>

        {/* Galería fotográfica — dinámica */}
        <GaleriaGrid />
      </main>
      <Footer />
    </>
  )
}
