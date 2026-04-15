import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Escuela Armonía Valencia',
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

export default function PrivacidadPage() {
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
            Política de privacidad
          </h1>

          <Section titulo="1. Responsable del tratamiento">
            <p><strong>Responsable:</strong> Escuela Armonía</p>
            <p><strong>Contacto:</strong> yeyebcn01@gmail.com · 655 544 567</p>
          </Section>

          <Section titulo="2. Datos que recopilamos">
            <p>
              A través del formulario de contacto del sitio web, recopilamos los siguientes
              datos personales: nombre, dirección de correo electrónico, número de teléfono
              (opcional) y el contenido del mensaje. No recopilamos datos sensibles.
            </p>
          </Section>

          <Section titulo="3. Finalidad del tratamiento">
            <p>
              Los datos facilitados se utilizan exclusivamente para atender la solicitud
              de contacto o información enviada por el usuario, y para establecer comunicación
              comercial relacionada con los servicios de la escuela.
            </p>
          </Section>

          <Section titulo="4. Base jurídica">
            <p>
              El tratamiento se basa en el consentimiento del interesado, prestado mediante
              la aceptación de la presente política al enviar el formulario (art. 6.1.a RGPD).
            </p>
          </Section>

          <Section titulo="5. Conservación de datos">
            <p>
              Los datos se conservarán mientras exista una relación contractual o de interés
              legítimo, o hasta que el interesado solicite su supresión. Una vez cancelada
              la relación, los datos serán bloqueados durante los plazos legales aplicables.
            </p>
          </Section>

          <Section titulo="6. Comunicación a terceros">
            <p>
              Los datos no serán cedidos a terceros salvo obligación legal. No se realizan
              transferencias internacionales de datos.
            </p>
          </Section>

          <Section titulo="7. Derechos del interesado">
            <p>
              Puedes ejercer los derechos de acceso, rectificación, supresión, oposición,
              limitación y portabilidad escribiendo a yeyebcn01@gmail.com, adjuntando copia
              de tu documento de identidad. También tienes derecho a presentar una reclamación
              ante la Agencia Española de Protección de Datos (aepd.es).
            </p>
          </Section>

          <Section titulo="8. Cookies">
            <p>
              Para información sobre el uso de cookies, consulta nuestra{' '}
              <a href="/cookies" style={{ color: 'var(--color-graphite)', textDecoration: 'underline' }}>
                Política de cookies
              </a>.
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
