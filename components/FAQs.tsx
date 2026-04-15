'use client'

import { useState } from 'react'

interface FAQ {
  id: string
  question: string
  answer: string
}

export default function FAQsClient({ faqs }: { faqs: FAQ[] }) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {faqs.map((faq, idx) => {
        const isOpen = openId === faq.id
        return (
          <div
            key={faq.id}
            style={{
              background: idx % 2 === 0
                ? 'var(--color-surface-low)'
                : 'var(--color-surface)',
            }}
          >
            <button
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${faq.id}`}
              id={`faq-question-${faq.id}`}
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '32px 40px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                gap: '24px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontSize: 'clamp(1rem,1.5vw,1.25rem)',
                  lineHeight: '1.3',
                  color: 'var(--color-graphite)',
                }}
              >
                {faq.question}
              </span>
              <span
                aria-hidden="true"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  fontSize: '1.25rem',
                  color: 'var(--color-text-muted)',
                  flexShrink: 0,
                  lineHeight: 1,
                  transition: 'transform 300ms cubic-bezier(0.16,1,0.3,1)',
                  display: 'inline-block',
                  transform: isOpen ? 'rotate(45deg)' : 'none',
                }}
              >
                +
              </span>
            </button>

            <div
              id={`faq-answer-${faq.id}`}
              role="region"
              aria-labelledby={`faq-question-${faq.id}`}
              style={{
                overflow: 'hidden',
                maxHeight: isOpen ? '1000px' : '0',
                transition: 'max-height 400ms cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  fontSize: '0.9375rem',
                  lineHeight: '1.75',
                  color: 'var(--color-text-muted)',
                  padding: '0 40px 32px',
                  maxWidth: '65ch',
                }}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
