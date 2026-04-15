'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const profesores = [
  {
    id: 'carmen',
    nombre: 'Carmen Solís',
    rol: 'Directora · Profesora de Piano',
    bio: 'Graduada en el Conservatorio Superior de Música de Valencia. Doce años formando alumnos de todas las edades, con especial atención al repertorio del siglo XX y a la pedagogía de iniciación. Directora artística de los recitales anuales de la escuela.',
    imagen: '/images/teacher-01.jpeg',
    alt: 'Carmen Solís, directora y profesora de piano en Escuela Armonía Valencia',
  },
  {
    id: 'marcos',
    nombre: 'Marcos Ferrer',
    rol: 'Profesor de Piano y Armonía',
    bio: 'Pianista y compositor formado en Valencia y Ámsterdam. Especialista en repertorio contemporáneo y jazz armónico. Trabaja con alumnos de nivel intermedio y avanzado que buscan ampliar su lenguaje musical más allá del repertorio clásico.',
    imagen: '/images/teacher-02.jpeg',
    alt: 'Marcos Ferrer, profesor de piano y armonía en Escuela Armonía Valencia',
  },
  {
    id: 'ana',
    nombre: 'Ana Ruiz',
    rol: 'Profesora de Piano · Iniciación',
    bio: 'Profesora certificada en el método ABRSM con más de ocho años de experiencia en enseñanza infantil y juvenil. Especialista en hacer del primer contacto con el piano una experiencia sólida y duradera.',
    imagen: '/images/teacher-03.jpeg',
    alt: 'Ana Ruiz, profesora de piano e iniciación en Escuela Armonía Valencia',
  },
]

export default function ProfesoresHome() {
  const [active, setActive] = useState(0)

  return (
    <section
      aria-labelledby="prof-home-heading"
      style={{ background: 'var(--color-surface)' }}
    >
      {/* Header */}
      <div
        style={{ maxWidth: '1440px', margin: '0 auto', padding: '96px 96px 64px' }}
        className="prof-home-header-wrap"
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
          className="prof-home-header"
        >
          <h2
            id="prof-home-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(2rem,4vw,3.5rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              color: 'var(--color-graphite-deep)',
              maxWidth: '22ch',
            }}
          >
            Profesores con vocación, no solo con título.
          </h2>
          <Link href="/profesores" className="btn-tertiary" style={{ flexShrink: 0 }}>
            Conoce al equipo
          </Link>
        </div>
      </div>

      {/* Horizontal accordion */}
      <div
        style={{ display: 'flex', height: '72vh', gap: '2px', overflow: 'hidden' }}
        className="prof-accordion"
        onMouseLeave={() => setActive(0)}
      >
        {profesores.map((prof, i) => (
          <div
            key={prof.id}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            style={{
              flex: active === i ? '6 0 0%' : '1 0 0%',
              transition: 'flex 600ms cubic-bezier(0.16,1,0.3,1)',
              overflow: 'hidden',
              position: 'relative',
              cursor: 'default',
            }}
          >
            {/* Photo */}
            <Image
              src={prof.imagen}
              alt={prof.alt}
              fill
              sizes="(max-width: 900px) 100vw, 60vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center top',
                filter: active === i ? 'grayscale(30%)' : 'grayscale(85%)',
                transition: 'filter 600ms cubic-bezier(0.16,1,0.3,1)',
              }}
            />

            {/* Bottom gradient */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(10,12,10,0.92) 0%, rgba(10,12,10,0.30) 45%, transparent 100%)',
              }}
            />

            {/* Collapsed: vertical first name */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                opacity: active === i ? 0 : 1,
                transition: 'opacity 250ms cubic-bezier(0.16,1,0.3,1)',
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '0.625rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'rgba(250,247,246,0.55)',
                }}
              >
                {prof.nombre.split(' ')[0]}
              </span>
            </div>

            {/* Expanded: full content */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '48px 44px',
                opacity: active === i ? 1 : 0,
                transform: active === i ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 400ms cubic-bezier(0.16,1,0.3,1), transform 400ms cubic-bezier(0.16,1,0.3,1)',
                transitionDelay: active === i ? '180ms' : '0ms',
                pointerEvents: active === i ? 'auto' : 'none',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '0.5625rem',
                  letterSpacing: '0.35em',
                  textTransform: 'uppercase',
                  color: 'rgba(250,247,246,0.50)',
                  marginBottom: '12px',
                }}
              >
                {prof.rol}
              </p>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 300,
                  fontSize: 'clamp(1.75rem,2.5vw,2.75rem)',
                  lineHeight: '1.05',
                  letterSpacing: '-0.025em',
                  color: 'var(--color-text-inv)',
                  marginBottom: '20px',
                }}
              >
                {prof.nombre}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  fontSize: '0.9375rem',
                  lineHeight: '1.65',
                  color: 'rgba(250,247,246,0.62)',
                  maxWidth: '38ch',
                }}
              >
                {prof.bio}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .prof-home-header-wrap { padding: 64px 24px 48px !important; }
          .prof-home-header { flex-direction: column; align-items: flex-start; gap: 24px; }
          .prof-accordion {
            flex-direction: column !important;
            height: auto !important;
          }
          .prof-accordion > div {
            flex: 0 0 56vw !important;
            height: 56vw;
          }
        }
      `}</style>
    </section>
  )
}
