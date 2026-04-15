import Image from 'next/image'
import { supabase } from '@/lib/supabase'

export const revalidate = 60

interface Profesor {
  id: string
  name: string
  role: string | null
  bio: string | null
  photo_url: string | null
  visible: boolean
  sort_order: number
}

export default async function TeamList() {
  const { data, error } = await supabase
    .from('team_members')
    .select('*')
    .eq('client_id', process.env.NEXT_PUBLIC_CLIENT_ID)
    .eq('visible', true)
    .order('sort_order', { ascending: true })

  if (error || !data || data.length === 0) return null

  return (
    <section
      aria-labelledby="team-heading"
      style={{ background: 'var(--color-surface)' }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '96px 96px',
        }}
        className="team-container"
      >
        <h2
          id="team-heading"
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            fontSize: '0.5625rem',
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
            marginBottom: '80px',
          }}
        >
          El equipo
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {(data as Profesor[]).map((prof, idx) => (
            <article
              key={prof.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '320px 1fr',
                gap: '0',
                background: idx % 2 === 0
                  ? 'var(--color-surface)'
                  : 'var(--color-surface-low)',
              }}
              className="team-item"
            >
              {/* Foto */}
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '3/4',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                {prof.photo_url ? (
                  <Image
                    src={prof.photo_url}
                    alt={`${prof.name}, ${prof.role ?? 'profesor'} en Escuela Armonía Valencia`}
                    fill
                    sizes="320px"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      filter: 'grayscale(85%)',
                    }}
                  />
                ) : (
                  /* Fallback: inicial en cuadrado grafito */
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      background: 'var(--color-graphite)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 300,
                        fontSize: 'clamp(3rem,8vw,6rem)',
                        color: 'var(--color-text-inv)',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {prof.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>

              {/* Texto */}
              <div
                style={{
                  padding: '56px 64px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 400,
                    fontSize: 'clamp(1.5rem,2.5vw,2.25rem)',
                    lineHeight: '1.15',
                    color: 'var(--color-graphite)',
                    marginBottom: '8px',
                  }}
                >
                  {prof.name}
                </h3>

                {prof.role && (
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                      fontSize: '0.6875rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-muted)',
                      marginBottom: '32px',
                    }}
                  >
                    {prof.role}
                  </p>
                )}

                {prof.bio && (
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 300,
                      fontSize: '1rem',
                      lineHeight: '1.75',
                      color: 'var(--color-text-muted)',
                      maxWidth: '52ch',
                    }}
                  >
                    {prof.bio}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .team-container { padding: 64px 24px !important; }
          .team-item {
            grid-template-columns: 1fr !important;
          }
          .team-item > div:first-child {
            aspect-ratio: 4/3 !important;
          }
          .team-item > div:last-child {
            padding: 32px 24px !important;
          }
        }
      `}</style>
    </section>
  )
}
