import Image from 'next/image'
import Link from 'next/link'

/**
 * Replaces SobreEscuela — "La escuela" section as a gallery layout.
 * Center: editorial text block.
 * Surrounding: school / gallery photos arranged asymmetrically.
 */
export default function GaleriaEscuela() {
  return (
    <section
      aria-labelledby="galeria-escuela-heading"
      style={{ background: 'var(--color-surface)', overflow: 'hidden' }}
    >
      {/* ── Main: flanking images + center text ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr 1fr',
          gap: '4px',
          minHeight: '600px',
        }}
        className="galeria-main"
      >
        {/* Left — tall photo */}
        <div style={{ position: 'relative', minHeight: '500px', overflow: 'hidden' }}>
          <Image
            src="/images/about-01.jpeg"
            alt="Sala de piano en Escuela Armonía Valencia"
            fill
            sizes="(max-width: 900px) 100vw, 25vw"
            style={{ objectFit: 'cover', objectPosition: 'center', filter: 'grayscale(85%)' }}
          />
        </div>

        {/* Center — text */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '96px 64px',
            background: 'var(--color-surface)',
          }}
          className="galeria-text"
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
            La escuela
          </span>

          <h2
            id="galeria-escuela-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(1.875rem,3vw,3rem)',
              lineHeight: '1.15',
              letterSpacing: '-0.02em',
              color: 'var(--color-graphite-deep)',
              maxWidth: '18ch',
              marginBottom: '32px',
            }}
          >
            Más de diez años enseñando lo que amamos.
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: '1rem',
              lineHeight: '1.75',
              color: 'var(--color-text-muted)',
              maxWidth: '38ch',
              marginBottom: '48px',
            }}
          >
            Nuestra sala está en el corazón de Valencia. Cada espacio ha sido preparado
            para que el sonido del piano llegue limpio, sin interferencias. Trabajamos
            con instrumentos Yamaha y Steinway seleccionados.
          </p>

          <Link href="/metodo" className="btn-primary">
            Conoce la escuela
          </Link>
        </div>

        {/* Right — tall photo */}
        <div style={{ position: 'relative', minHeight: '500px', overflow: 'hidden' }}>
          <Image
            src="/images/about-02.jpeg"
            alt="Detalle de teclado en Escuela Armonía Valencia"
            fill
            sizes="(max-width: 900px) 100vw, 25vw"
            style={{ objectFit: 'cover', objectPosition: 'center', filter: 'grayscale(85%)' }}
          />
        </div>
      </div>

      {/* ── Bottom: gallery strip ── */}
      <div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4px', marginTop: '4px' }}
        className="galeria-strip"
      >
        {[
          { src: '/images/gallery-1.jpeg', alt: 'Clase de piano en Escuela Armonía Valencia' },
          { src: '/images/gallery-2.jpeg', alt: 'Alumno practicando piano en Valencia' },
          { src: '/images/gallery-3.jpeg', alt: 'Recital de piano en Escuela Armonía' },
          { src: '/images/gallery-4.jpeg', alt: 'Detalle de partitura en clase de piano' },
        ].map(({ src, alt }) => (
          <div
            key={src}
            style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}
            className="galeria-strip-img"
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 900px) 50vw, 25vw"
              style={{
                objectFit: 'cover',
                filter: 'grayscale(85%)',
                transition: 'filter 600ms cubic-bezier(0.16,1,0.3,1), transform 600ms cubic-bezier(0.16,1,0.3,1)',
              }}
              className="galeria-img"
            />
          </div>
        ))}
      </div>

      <style>{`
        .galeria-img:hover {
          filter: grayscale(0%) !important;
          transform: scale(1.03);
        }
        @media (max-width: 900px) {
          .galeria-main {
            grid-template-columns: 1fr !important;
          }
          .galeria-main > div:first-child { min-height: 240px !important; aspect-ratio: 4/3; }
          .galeria-main > div:last-child  { min-height: 240px !important; aspect-ratio: 4/3; }
          .galeria-text { padding: 64px 24px !important; }
          .galeria-strip { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
