import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Aviso Legal | Escuela Armonía Valencia',
  robots: { index: false },
}

function LegalSection({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '48px' }}>
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 400,
          fontSize: '1.125rem',
          color: 'var(--color-graphite)',
          marginBottom: '16px',
        }}
      >
        {titulo}
      </h2>
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 300,
          fontSize: '0.9375rem',
          lineHeight: '1.75',
          color: 'var(--color-text-muted)',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default function AvisoLegalPage() {
  return (
    <>
      <Navigation />
      <main id="main" style={{ paddingTop: '72px' }}>
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            padding: '96px 48px 128px',
          }}
          className="legal-container"
        >
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(2rem,4vw,3.5rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              color: 'var(--color-graphite-deep)',
              marginBottom: '64px',
            }}
          >
            Aviso legal
          </h1>

          <LegalSection titulo="1. Datos identificativos">
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad
              de la Información y del Comercio Electrónico, se informa:
            </p>
            <br />
            <p><strong>Titular:</strong> Escuela Armonía</p>
            <p><strong>Domicilio:</strong> Valencia, España (dirección completa pendiente de confirmar)</p>
            <p><strong>Teléfono:</strong> 655 544 567</p>
          </LegalSection>

          <LegalSection titulo="2. Objeto y ámbito de aplicación">
            <p>
              El presente Aviso Legal regula el acceso, navegación y uso del sitio web
              de Escuela Armonía. El acceso y uso del sitio web implica la aceptación plena
              y sin reservas de todas las disposiciones incluidas en este Aviso Legal.
            </p>
          </LegalSection>

          <LegalSection titulo="3. Propiedad intelectual e industrial">
            <p>
              Los contenidos del sitio web (textos, fotografías, diseño gráfico, código fuente
              y demás elementos) son propiedad de Escuela Armonía o de sus licenciantes,
              y están protegidos por la normativa española e internacional sobre propiedad
              intelectual e industrial. Queda prohibida su reproducción, distribución,
              comunicación pública o transformación sin autorización expresa.
            </p>
          </LegalSection>

          <LegalSection titulo="4. Responsabilidad">
            <p>
              Escuela Armonía no se responsabiliza de los daños y perjuicios que pudieran
              derivarse del uso del sitio web, de la falta de disponibilidad o de errores
              en los contenidos publicados. Se reserva el derecho de modificar, suspender
              o eliminar, sin previo aviso, los contenidos del sitio.
            </p>
          </LegalSection>

          <LegalSection titulo="5. Ley aplicable y jurisdicción">
            <p>
              El presente Aviso Legal se rige por la legislación española. Para la resolución
              de cualquier controversia, las partes se someten a los juzgados y tribunales
              de Valencia, con renuncia expresa a cualquier otro fuero.
            </p>
          </LegalSection>
        </div>

        <style>{`
          @media (max-width: 767px) {
            .legal-container { padding: 64px 24px 80px !important; }
          }
        `}</style>
      </main>
      <Footer />
    </>
  )
}
