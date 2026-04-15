import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import TeamList from '@/components/TeamList'

// ISR — fichas de profesores se refrescan cada 60 segundos
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Profesores de Piano | Escuela Armonía Valencia',
  description:
    'Conoce al equipo docente de Escuela Armonía. Profesores con vocación y formación académica en Valencia.',
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
        {/* Hero de página */}
        <section
          aria-label="Cabecera de profesores"
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
            className="prof-hero"
          >
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
              .prof-hero { padding: 64px 24px 48px !important; }
            }
          `}</style>
        </section>

        {/* Fichas de profesores — dinámico */}
        <TeamList />
      </main>
      <Footer />
    </>
  )
}
