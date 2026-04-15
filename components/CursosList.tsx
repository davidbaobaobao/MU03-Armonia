import { supabase } from '@/lib/supabase'

export const revalidate = 60

interface Curso {
  id: string
  name: string
  description: string | null
  price: number | null
  price_label: string | null
  visible: boolean
  sort_order: number
}

export default async function CursosList() {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('client_id', process.env.NEXT_PUBLIC_CLIENT_ID)
    .eq('visible', true)
    .order('sort_order', { ascending: true })

  if (error || !data || data.length === 0) return null

  return (
    <section
      aria-labelledby="lista-cursos-heading"
      style={{ background: 'var(--color-surface-low)' }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '96px 96px',
        }}
        className="cursos-list-container"
      >
        <h2
          id="lista-cursos-heading"
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            fontSize: '0.5625rem',
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
            marginBottom: '64px',
          }}
        >
          Todos los cursos
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {(data as Curso[]).map((curso, idx) => (
            <article
              key={curso.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto',
                gap: '48px',
                alignItems: 'start',
                padding: '40px 0',
                borderTop: idx === 0 ? 'none' : 'none',
                background: idx % 2 === 0
                  ? 'var(--color-surface)'
                  : 'var(--color-surface-low)',
                paddingLeft: '40px',
                paddingRight: '40px',
              }}
              className="curso-item"
            >
              {/* Número */}
              <span
                aria-hidden="true"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 300,
                  fontSize: 'clamp(2.5rem,4vw,3.5rem)',
                  lineHeight: '1',
                  color: 'var(--color-surface-highest)',
                  letterSpacing: '-0.02em',
                  paddingTop: '4px',
                }}
              >
                {String(idx + 1).padStart(2, '0')}
              </span>

              {/* Nombre + descripción */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 400,
                    fontSize: 'clamp(1.25rem,2.5vw,2rem)',
                    lineHeight: '1.2',
                    color: 'var(--color-graphite)',
                    marginBottom: '12px',
                  }}
                >
                  {curso.name}
                </h3>
                {curso.description && (
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 300,
                      fontSize: '0.9375rem',
                      lineHeight: '1.7',
                      color: 'var(--color-text-muted)',
                      maxWidth: '60ch',
                    }}
                  >
                    {curso.description}
                  </p>
                )}
              </div>

              {/* Precio */}
              <div style={{ textAlign: 'right', paddingTop: '4px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 300,
                    fontSize: '1.125rem',
                    color: 'var(--color-graphite)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {curso.price_label
                    ? curso.price_label
                    : curso.price !== null
                    ? `${Number(curso.price).toLocaleString('es-ES', { minimumFractionDigits: 0 })} €/mes`
                    : null}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .cursos-list-container { padding: 64px 24px !important; }
          .curso-item {
            grid-template-columns: 48px 1fr !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .curso-item > div:last-child { grid-column: 2; margin-top: 8px; text-align: left !important; }
        }
      `}</style>
    </section>
  )
}
