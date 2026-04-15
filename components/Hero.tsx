import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      aria-label="Presentación"
      style={{
        background: 'var(--color-surface)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Responsive layout via CSS */}
      <style>{`
        .hero-outer {
          max-width: 1440px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 7fr 5fr;
          min-height: 100svh;
          padding-top: 72px;
        }
        .hero-text-col {
          padding: 80px 64px 80px 96px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .hero-image-col {
          position: relative;
          overflow: hidden;
        }
        .hero-image-wrap {
          position: absolute;
          inset: 0;
          right: -64px;
        }
        .hero-quote {
          position: absolute;
          bottom: 64px;
          left: -32px;
          z-index: 2;
          background: var(--color-surface);
          border: 1px solid rgba(175,179,174,0.12);
          padding: 28px 36px;
          max-width: 320px;
          box-shadow: var(--shadow-ambient);
        }
        @media (max-width: 900px) {
          .hero-outer {
            grid-template-columns: 1fr;
            min-height: auto;
            padding-top: 72px;
          }
          .hero-text-col {
            padding: 56px 24px 48px 24px;
            order: 1;
          }
          .hero-image-col {
            order: 2;
            height: 65vw;
            position: relative;
          }
          .hero-image-wrap {
            position: absolute;
            inset: 0;
            right: 0;
          }
          .hero-quote {
            display: none;
          }
        }
      `}</style>

      <div className="hero-outer">
        {/* Columna texto */}
        <div className="hero-text-col">
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '0.5625rem',
              letterSpacing: '0.5em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              display: 'block',
              marginBottom: '48px',
            }}
          >
            Escuela de Piano · Valencia
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(3rem,7.5vw,7rem)',
              lineHeight: '1.0',
              letterSpacing: '-0.03em',
              color: 'var(--color-graphite-deep)',
              marginBottom: '40px',
              maxWidth: '14ch',
            }}
          >
            El piano se aprende tocando.
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: '1.0625rem',
              lineHeight: '1.7',
              color: 'var(--color-text-muted)',
              marginBottom: '52px',
              maxWidth: '38ch',
            }}
          >
            Clases presenciales en Valencia para todas las edades,
            desde los 8 años.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/cursos" className="btn-primary">
              Ver cursos
            </Link>
            <a href="tel:+34655544567" className="btn-secondary">
              655 544 567
            </a>
          </div>
        </div>

        {/* Columna imagen */}
        <div className="hero-image-col">
          <div className="hero-image-wrap">
            <Image
              src="/images/hero-bg.jpeg"
              alt="Interior de Escuela Armonía, sala de clases de piano en Valencia"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 42vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center 30%',
                filter: 'grayscale(80%) contrast(1.05)',
              }}
            />
            {/* Overlay muy sutil */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(47,52,48,0.04)',
              }}
            />
          </div>

          {/* Cita flotante desktop */}
          <div className="hero-quote">
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: '0.875rem',
                lineHeight: '1.6',
                color: 'var(--color-graphite)',
              }}
            >
              «El intervalo no es silencio; es la tensión entre lo que fue y lo que será.»
            </p>
          </div>
        </div>
      </div>

      {/* Cita visible en mobile — debajo del hero */}
      <div
        style={{
          display: 'none',
          padding: '40px 24px',
          background: 'var(--color-surface-low)',
        }}
        className="hero-quote-mobile"
      >
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: '0.9375rem',
            lineHeight: '1.6',
            color: 'var(--color-graphite)',
          }}
        >
          «El intervalo no es silencio; es la tensión entre lo que fue y lo que será.»
        </p>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .hero-quote-mobile { display: block !important; }
        }
      `}</style>
    </section>
  )
}
