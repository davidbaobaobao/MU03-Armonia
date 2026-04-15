import Image from 'next/image'
import { supabase } from '@/lib/supabase'

export const revalidate = 60

interface GaleriaItem {
  id: string
  image_url: string
  caption: string | null
  category: string | null
  visible: boolean
  sort_order: number
}

export default async function GaleriaGrid() {
  const { data, error } = await supabase
    .from('gallery')
    .select('*')
    .eq('client_id', process.env.NEXT_PUBLIC_CLIENT_ID)
    .eq('visible', true)
    .order('sort_order', { ascending: true })

  if (error || !data || data.length === 0) return null

  // Agrupar por categoría si existen múltiples
  const categories = Array.from(new Set(data.map((item: GaleriaItem) => item.category).filter(Boolean))) as string[]
  const hasCategories = categories.length > 1

  return (
    <section
      aria-labelledby="galeria-grid-heading"
      style={{ background: 'var(--color-surface)' }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 96px 128px',
        }}
        className="galeria-container"
      >
        {hasCategories ? (
          categories.map(cat => {
            const items = (data as GaleriaItem[]).filter(i => i.category === cat)
            return (
              <div key={cat} style={{ marginBottom: '80px' }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: '0.5625rem',
                    letterSpacing: '0.5em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-muted)',
                    marginBottom: '40px',
                  }}
                >
                  {cat}
                </h2>
                <GaleriaItems items={items} />
              </div>
            )
          })
        ) : (
          <GaleriaItems items={data as GaleriaItem[]} />
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .galeria-container { padding: 0 24px 80px !important; }
          .galeria-masonry { columns: 2 !important; }
        }
        @media (max-width: 480px) {
          .galeria-masonry { columns: 1 !important; }
        }
      `}</style>
    </section>
  )
}

function GaleriaItems({ items }: { items: GaleriaItem[] }) {
  return (
    <div
      style={{
        columns: 3,
        columnGap: '4px',
      }}
      className="galeria-masonry"
    >
      {items.map(item => (
        <div
          key={item.id}
          style={{
            breakInside: 'avoid',
            marginBottom: '4px',
            position: 'relative',
            overflow: 'hidden',
          }}
          className="galeria-item"
        >
          <Image
            src={item.image_url}
            alt={item.caption ?? 'Imagen de Escuela Armonía Valencia'}
            width={600}
            height={400}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              filter: 'grayscale(85%)',
              transition: 'filter 600ms cubic-bezier(0.16,1,0.3,1)',
            }}
            className="galeria-img"
          />
          {item.caption && (
            <p
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '8px 12px',
                background: 'rgba(47,52,48,0.7)',
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                fontSize: '0.5625rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-text-inv)',
                opacity: 0,
                transition: 'opacity 300ms cubic-bezier(0.16,1,0.3,1)',
              }}
              className="galeria-caption"
            />
          )}
        </div>
      ))}
      <style>{`
        .galeria-item:hover .galeria-img { filter: grayscale(0%) !important; }
        .galeria-item:hover .galeria-caption { opacity: 1 !important; }
      `}</style>
    </div>
  )
}
