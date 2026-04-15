import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Política de Cookies | Escuela Armonía Valencia',
  robots: { index: false },
}

function Section({ titulo, children }: { titulo: string; children: React.ReactNode }) {
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

export default function CookiesPage() {
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
            Política de cookies
          </h1>

          <Section titulo="1. ¿Qué son las cookies?">
            <p>
              Las cookies son pequeños ficheros de texto que los sitios web instalan en
              el navegador del usuario. Permiten que el sitio web recuerde información
              sobre tu visita, como el idioma preferido y otras opciones, lo que facilita
              la siguiente visita y hace que el sitio sea más útil.
            </p>
          </Section>

          <Section titulo="2. Cookies que utilizamos">
            <p>
              Este sitio web utiliza exclusivamente cookies técnicas necesarias para el
              funcionamiento básico de la web (navegación, gestión de sesión). No utilizamos
              cookies de seguimiento, analíticas ni publicitarias de terceros.
            </p>
            <br />
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr>
                  {['Cookie', 'Tipo', 'Finalidad', 'Duración'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '8px 0', fontWeight: 500, borderBottom: '1px solid var(--color-outline-variant)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '12px 0', borderBottom: '1px solid var(--color-surface-highest)' }}>_session</td>
                  <td style={{ padding: '12px 0', borderBottom: '1px solid var(--color-surface-highest)' }}>Técnica</td>
                  <td style={{ padding: '12px 0', borderBottom: '1px solid var(--color-surface-highest)' }}>Gestión de sesión</td>
                  <td style={{ padding: '12px 0', borderBottom: '1px solid var(--color-surface-highest)' }}>Sesión</td>
                </tr>
              </tbody>
            </table>
          </Section>

          <Section titulo="3. Cómo gestionar las cookies">
            <p>
              Puedes configurar tu navegador para que rechace todas las cookies o para que
              te avise cuando se envíe una cookie. Sin embargo, si rechazas las cookies técnicas,
              es posible que algunas partes del sitio web no funcionen correctamente.
            </p>
          </Section>

          <Section titulo="4. Actualización">
            <p>
              Podemos actualizar esta política cuando sea necesario. Te recomendamos que
              la revises periódicamente. Última actualización: abril 2026.
            </p>
          </Section>
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
