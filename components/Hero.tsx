import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      aria-label="Presentación"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Imagen de fondo — cubre toda la pantalla */}
      <Image
        src="/images/hero-bg.jpeg"
        alt="Interior de Escuela Armonía, sala de clases de piano en Valencia"
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: 'cover',
          objectPosition: 'center 30%',
          filter: 'grayscale(85%) contrast(1.05)',
        }}
      />

      {/* Overlay oscuro */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(15,17,14,0.55) 0%, rgba(15,17,14,0.70) 100%)',
        }}
      />

      {/* Contenido centrado */}
      <div className="hero-content">
        <h1 className="hero-h1">
          El piano se aprende tocando.
        </h1>

        <p className="hero-sub">
          Clases presenciales en Valencia para todas las edades,
          desde los 8 años.
        </p>

        <Link
          href="/cursos"
          className="hero-cta"
        >
          Ver cursos
        </Link>
      </div>

      <style>{`
        @keyframes heroReveal {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 96px 24px 64px;
          max-width: 860px;
          animation: heroReveal 1.4s cubic-bezier(0.16,1,0.3,1) both;
        }

        .hero-h1 {
          font-family: var(--font-display);
          font-weight: 300;
          font-size: clamp(2.75rem, 8vw, 7.5rem);
          line-height: 1.0;
          letter-spacing: -0.03em;
          color: var(--color-text-inv);
          margin-bottom: 32px;
        }

        .hero-sub {
          font-family: var(--font-body);
          font-weight: 300;
          font-size: 1.0625rem;
          line-height: 1.7;
          color: rgba(250,247,246,0.68);
          margin-bottom: 56px;
          max-width: 40ch;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--color-text-inv);
          color: var(--color-graphite-deep);
          font-family: var(--font-body), sans-serif;
          font-weight: 500;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 16px 40px;
          min-height: 48px;
          border-radius: 0;
          transition: background 150ms cubic-bezier(0.16,1,0.3,1);
        }
        .hero-cta:hover {
          background: rgba(250,249,246,0.84);
        }

        @media (max-width: 767px) {
          .hero-content {
            padding: 80px 24px 48px;
          }
          .hero-sub {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}
