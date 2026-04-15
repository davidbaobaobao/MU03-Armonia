export default function CitaCentral() {
  return (
    <section
      aria-label="Cita de la directora"
      style={{
        background: 'var(--color-surface-low)',
        padding: '192px 96px',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="cita-section"
    >
      {/* Comilla gigante decorativa */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '48px',
          left: '72px',
          fontFamily: 'var(--font-display)',
          fontWeight: 300,
          fontSize: 'clamp(8rem,18vw,16rem)',
          lineHeight: '1',
          color: 'var(--color-surface-highest)',
          pointerEvents: 'none',
          userSelect: 'none',
          letterSpacing: '-0.05em',
        }}
      >
        «
      </span>

      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <blockquote
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(1.5rem,3vw,2.5rem)',
            lineHeight: '1.4',
            letterSpacing: '-0.01em',
            color: 'var(--color-graphite)',
            maxWidth: '28ch',
            marginBottom: '40px',
          }}
        >
          «Tocar el piano es hablar sin palabras. Enseñamos la gramática del alma.»
        </blockquote>

        <cite
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            fontSize: '0.625rem',
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
            fontStyle: 'normal',
          }}
        >
          — Carmen Solís, Directora
        </cite>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cita-section { padding: 96px 24px !important; }
        }
      `}</style>
    </section>
  )
}
