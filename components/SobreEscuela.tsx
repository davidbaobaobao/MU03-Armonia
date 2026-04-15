import Image from 'next/image'
import Link from 'next/link'

export default function SobreEscuela() {
  return (
    <section
      aria-labelledby="sobre-heading"
      style={{ background: 'var(--color-surface)' }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '128px 96px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '96px',
          alignItems: 'center',
        }}
        className="sobre-grid"
      >
        {/* Columna texto — izquierda */}
        <div>
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
            La escuela
          </span>

          <h2
            id="sobre-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(1.875rem,3.5vw,3rem)',
              lineHeight: '1.15',
              letterSpacing: '-0.02em',
              color: 'var(--color-graphite-deep)',
              marginBottom: '32px',
              maxWidth: '16ch',
            }}
          >
            Más de diez años enseñando lo que amamos.
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: '1.0625rem',
              lineHeight: '1.75',
              color: 'var(--color-text-muted)',
              maxWidth: '42ch',
              marginBottom: '48px',
            }}
          >
            Nuestra sala está en el corazón de Valencia. Cada espacio ha sido preparado
            para que el sonido del piano llegue limpio, sin interferencias. Trabajamos
            con instrumentos Yamaha y Steinway seleccionados.
          </p>

          <Link href="/metodo" className="btn-tertiary">
            Conoce la escuela
          </Link>
        </div>

        {/* Columna imágenes — derecha, asimétrica */}
        <div
          style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '0',
          }}
          className="sobre-images"
        >
          {/* Imagen superior */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4/3',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/images/about-01.jpeg"
              alt="Sala principal de Escuela Armonía con piano de cola en Valencia"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'grayscale(85%)',
              }}
            />
          </div>

          {/* Imagen inferior — con offset hacia abajo y a la izquierda */}
          <div
            style={{
              position: 'relative',
              width: '75%',
              aspectRatio: '3/4',
              overflow: 'hidden',
              marginTop: '-48px',
              marginLeft: 'auto',
            }}
            className="sobre-img-bottom"
          >
            <Image
              src="/images/about-02.jpeg"
              alt="Detalle de teclado de piano en Escuela Armonía Valencia"
              fill
              sizes="(max-width: 900px) 50vw, 30vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'grayscale(85%)',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .sobre-grid {
            grid-template-columns: 1fr !important;
            padding: 80px 24px !important;
            gap: 48px !important;
          }
          .sobre-images {
            display: block !important;
          }
          .sobre-img-bottom {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}
