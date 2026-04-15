import { supabase } from '@/lib/supabase'

export const revalidate = 60

interface Testimonio {
  id: string
  author_name: string
  role: string | null
  body: string
  rating: number
}

export default async function Testimonios() {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .eq('client_id', process.env.NEXT_PUBLIC_CLIENT_ID)
    .eq('visible', true)
    .order('sort_order', { ascending: true })

  if (error || !data || data.length === 0) return null

  return (
    <section
      aria-labelledby="testimonios-heading"
      style={{ background: 'var(--color-surface)' }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '128px 96px',
        }}
        className="testimonios-container"
      >
        <h2
          id="testimonios-heading"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'clamp(1.875rem,3.5vw,3rem)',
            lineHeight: '1.15',
            letterSpacing: '-0.02em',
            color: 'var(--color-graphite-deep)',
            marginBottom: '80px',
            maxWidth: '20ch',
          }}
        >
          Lo que dicen nuestros alumnos.
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2px',
          }}
          className="testimonios-grid"
        >
          {(data as Testimonio[]).map((t) => (
            <article
              key={t.id}
              style={{
                background: 'var(--color-surface-low)',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              {/* Rating como puntos si rating > 0 */}
              {t.rating > 0 && (
                <div
                  aria-label={`${t.rating} de 5 estrellas`}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: 'var(--color-graphite)',
                    letterSpacing: '0.2em',
                  }}
                >
                  {'★'.repeat(t.rating)}
                </div>
              )}

              <blockquote
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: '1.0625rem',
                  lineHeight: '1.65',
                  color: 'var(--color-graphite)',
                  margin: 0,
                }}
              >
                «{t.body}»
              </blockquote>

              <footer style={{ marginTop: 'auto' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: '0.6875rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-on-surface)',
                    marginBottom: t.role ? '4px' : '0',
                  }}
                >
                  {t.author_name}
                </p>
                {t.role && (
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 300,
                      fontSize: '0.75rem',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    {t.role}
                  </p>
                )}
              </footer>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonios-container { padding: 80px 24px !important; }
          .testimonios-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
