import { supabase } from '@/lib/supabase'

export const revalidate = 60

interface Oferta {
  id: string
  title: string
  description: string | null
  badge_text: string | null
  valid_until: string | null
  active: boolean
}

function formatFecha(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default async function Recitales() {
  const { data, error } = await supabase
    .from('offers')
    .select('*')
    .eq('client_id', process.env.NEXT_PUBLIC_CLIENT_ID)
    .eq('active', true)
    .or('valid_until.is.null,valid_until.gt.' + new Date().toISOString())
    .order('sort_order', { ascending: true })

  if (error || !data || data.length === 0) return null

  return (
    <section
      id="recitales"
      aria-labelledby="recitales-heading"
      style={{ background: 'var(--color-surface-low)' }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '128px 96px',
        }}
        className="recitales-container"
      >
        <h2
          id="recitales-heading"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'clamp(1.875rem,3.5vw,3rem)',
            lineHeight: '1.15',
            letterSpacing: '-0.02em',
            color: 'var(--color-graphite-deep)',
            marginBottom: '64px',
          }}
        >
          Próximos eventos.
        </h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
          }}
        >
          {(data as Oferta[]).map((item) => (
            <article
              key={item.id}
              style={{
                background: 'var(--color-surface)',
                padding: '40px',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '32px',
              }}
              className="recital-item"
            >
              <div style={{ flex: 1 }}>
                {/* Badge pill — única excepción border-radius:full */}
                {item.badge_text && (
                  <span
                    style={{
                      display: 'inline-block',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                      fontSize: '0.5625rem',
                      letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                      color: 'var(--color-on-surface)',
                      background: 'rgba(47,52,48,0.08)',
                      padding: '6px 12px',
                      borderRadius: '9999px',
                      marginBottom: '16px',
                    }}
                  >
                    {item.badge_text}
                  </span>
                )}

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 400,
                    fontSize: '1.25rem',
                    lineHeight: '1.3',
                    color: 'var(--color-graphite)',
                    marginBottom: item.description ? '12px' : '0',
                  }}
                >
                  {item.title}
                </h3>

                {item.description && (
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 300,
                      fontSize: '0.9375rem',
                      lineHeight: '1.65',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    {item.description}
                  </p>
                )}
              </div>

              {item.valid_until && (
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 300,
                    fontSize: '0.6875rem',
                    letterSpacing: '0.08em',
                    color: 'var(--color-text-muted)',
                    flexShrink: 0,
                    paddingTop: '4px',
                  }}
                >
                  Hasta {formatFecha(item.valid_until)}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .recitales-container { padding: 80px 24px !important; }
          .recital-item { flex-direction: column !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  )
}
