import { supabase } from '@/lib/supabase'
import FAQsClient from './FAQs'

export const revalidate = 60

interface FAQ {
  id: string
  question: string
  answer: string
  visible: boolean
  sort_order: number
}

export default async function FAQsSection() {
  const { data, error } = await supabase
    .from('faqs')
    .select('*')
    .eq('client_id', process.env.NEXT_PUBLIC_CLIENT_ID)
    .eq('visible', true)
    .order('sort_order', { ascending: true })

  if (error || !data || data.length === 0) return null

  return (
    <section
      aria-labelledby="faqs-heading"
      style={{ background: 'var(--color-surface-low)' }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '128px 96px',
        }}
        className="faqs-container"
      >
        <h2
          id="faqs-heading"
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
          Preguntas frecuentes.
        </h2>

        <FAQsClient faqs={data as FAQ[]} />
      </div>

      <style>{`
        @media (max-width: 767px) {
          .faqs-container { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  )
}
