'use client'

import { useState } from 'react'

interface FormState {
  nombre: string
  email: string
  telefono: string
  curso: string
  edad: string
  experiencia: string
  notas: string
  rgpd: boolean
}

interface Errors {
  nombre?: string
  email?: string
  curso?: string
  rgpd?: string
}

const cursos = [
  { value: 'iniciacion',   label: 'Iniciación — desde los 8 años · 89 €/mes' },
  { value: 'intermedio',   label: 'Intermedio — todos los niveles · 95 €/mes' },
  { value: 'adultos',      label: 'Adultos — sin límite de edad · 89 €/mes' },
  { value: 'abrsm',        label: 'Preparación ABRSM — Grado 1–8 · Consultar' },
  { value: 'no-se',        label: 'No sé cuál es el mío — me orientáis' },
]

const labelStyle = {
  display: 'block' as const,
  fontFamily: 'var(--font-body)',
  fontWeight: 500 as const,
  fontSize: '0.625rem' as const,
  letterSpacing: '0.06em',
  textTransform: 'uppercase' as const,
  color: 'var(--color-text-muted)',
  marginBottom: '8px',
}

const inputStyle = (hasError: boolean) => ({
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: `1px solid ${hasError ? 'var(--color-error)' : 'var(--color-outline)'}`,
  borderRadius: 0,
  padding: '12px 0',
  fontFamily: 'var(--font-body)',
  fontSize: '1rem',
  fontWeight: 300,
  color: 'var(--color-text)',
  outline: 'none',
  transition: 'border-color 200ms cubic-bezier(0.4,0,0.2,1)',
})

const errorStyle = {
  fontFamily: 'var(--font-body)',
  fontWeight: 400,
  fontSize: '0.75rem',
  color: 'var(--color-error)',
  marginTop: '6px',
}

export default function InscripcionForm() {
  const [form, setForm] = useState<FormState>({
    nombre: '', email: '', telefono: '', curso: '',
    edad: '', experiencia: '', notas: '', rgpd: false,
  })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = (field: keyof FormState, value: string | boolean): string | undefined => {
    if (field === 'nombre' && !value) return 'Campo obligatorio'
    if (field === 'email') {
      if (!value) return 'Campo obligatorio'
      if (typeof value === 'string' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return 'Email inválido — comprueba que incluye @'
    }
    if (field === 'curso' && !value) return 'Selecciona un curso'
    if (field === 'rgpd' && !value) return 'Debes aceptar la política de privacidad'
    return undefined
  }

  const handleBlur = (field: keyof FormState) => {
    const error = validate(field, form[field])
    setErrors(prev => ({ ...prev, [field]: error }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Errors = {}
    ;(['nombre', 'email', 'curso', 'rgpd'] as (keyof FormState)[]).forEach(f => {
      const err = validate(f, form[f])
      if (err) newErrors[f as keyof Errors] = err
    })
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        style={{
          background: 'var(--color-surface-container)',
          padding: '48px 40px',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: '1.375rem',
            color: 'var(--color-graphite)',
            marginBottom: '16px',
            lineHeight: '1.3',
          }}
        >
          Solicitud recibida.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: '0.9375rem',
            color: 'var(--color-text-muted)',
            lineHeight: '1.7',
          }}
        >
          Nos pondremos en contacto contigo en menos de 24 horas para confirmar tu plaza y concretar el horario.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
    >
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 300,
          fontSize: '0.75rem',
          color: 'var(--color-text-muted)',
        }}
      >
        * Campos obligatorios
      </p>

      {/* Nombre */}
      <div>
        <label htmlFor="ins-nombre" style={labelStyle}>Nombre completo *</label>
        <input
          id="ins-nombre"
          type="text"
          autoComplete="name"
          value={form.nombre}
          onChange={e => setForm(p => ({ ...p, nombre: e.target.value }))}
          onBlur={() => handleBlur('nombre')}
          style={inputStyle(!!errors.nombre)}
          aria-describedby={errors.nombre ? 'ins-nombre-error' : undefined}
          aria-invalid={!!errors.nombre}
        />
        {errors.nombre && (
          <p id="ins-nombre-error" role="alert" style={errorStyle}>{errors.nombre}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="ins-email" style={labelStyle}>Email *</label>
        <input
          id="ins-email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
          onBlur={() => handleBlur('email')}
          style={inputStyle(!!errors.email)}
          aria-describedby={errors.email ? 'ins-email-error' : undefined}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p id="ins-email-error" role="alert" style={errorStyle}>{errors.email}</p>
        )}
      </div>

      {/* Teléfono */}
      <div>
        <label htmlFor="ins-telefono" style={labelStyle}>Teléfono</label>
        <input
          id="ins-telefono"
          type="tel"
          autoComplete="tel"
          value={form.telefono}
          onChange={e => setForm(p => ({ ...p, telefono: e.target.value }))}
          style={inputStyle(false)}
        />
      </div>

      {/* Curso */}
      <div>
        <label htmlFor="ins-curso" style={labelStyle}>Curso de interés *</label>
        <select
          id="ins-curso"
          value={form.curso}
          onChange={e => {
            setForm(p => ({ ...p, curso: e.target.value }))
            setErrors(prev => ({ ...prev, curso: undefined }))
          }}
          onBlur={() => handleBlur('curso')}
          style={{
            ...inputStyle(!!errors.curso),
            appearance: 'none',
            WebkitAppearance: 'none',
            cursor: 'pointer',
            paddingRight: '24px',
          }}
          aria-describedby={errors.curso ? 'ins-curso-error' : undefined}
          aria-invalid={!!errors.curso}
        >
          <option value="" disabled>Seleccionar…</option>
          {cursos.map(c => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>
        {errors.curso && (
          <p id="ins-curso-error" role="alert" style={errorStyle}>{errors.curso}</p>
        )}
      </div>

      {/* Edad o nivel */}
      <div>
        <label htmlFor="ins-edad" style={labelStyle}>Edad del alumno</label>
        <input
          id="ins-edad"
          type="text"
          value={form.edad}
          onChange={e => setForm(p => ({ ...p, edad: e.target.value }))}
          style={inputStyle(false)}
          placeholder="ej. 12 años / adulto"
        />
      </div>

      {/* Experiencia previa */}
      <div>
        <label htmlFor="ins-experiencia" style={labelStyle}>Experiencia previa con el piano</label>
        <input
          id="ins-experiencia"
          type="text"
          value={form.experiencia}
          onChange={e => setForm(p => ({ ...p, experiencia: e.target.value }))}
          style={inputStyle(false)}
          placeholder="ej. ninguna / 2 años con otro profesor"
        />
      </div>

      {/* Notas */}
      <div>
        <label htmlFor="ins-notas" style={labelStyle}>Notas adicionales</label>
        <textarea
          id="ins-notas"
          rows={4}
          value={form.notas}
          onChange={e => setForm(p => ({ ...p, notas: e.target.value }))}
          style={{
            ...inputStyle(false),
            resize: 'none',
            paddingTop: '12px',
            lineHeight: '1.6',
          }}
          placeholder="Disponibilidad horaria, dudas, cualquier cosa que quieras comentar…"
        />
      </div>

      {/* RGPD */}
      <div>
        <label
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
            cursor: 'pointer',
          }}
        >
          <input
            type="checkbox"
            checked={form.rgpd}
            onChange={e => {
              setForm(p => ({ ...p, rgpd: e.target.checked }))
              setErrors(prev => ({ ...prev, rgpd: undefined }))
            }}
            style={{
              width: '16px',
              height: '16px',
              flexShrink: 0,
              marginTop: '2px',
              accentColor: 'var(--color-graphite)',
            }}
            aria-describedby={errors.rgpd ? 'ins-rgpd-error' : undefined}
            aria-invalid={!!errors.rgpd}
          />
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: '0.8125rem',
              lineHeight: '1.55',
              color: 'var(--color-text-muted)',
            }}
          >
            He leído y acepto la{' '}
            <a
              href="/privacidad"
              style={{ color: 'var(--color-graphite)', textDecoration: 'underline' }}
            >
              Política de privacidad
            </a>
            *
          </span>
        </label>
        {errors.rgpd && (
          <p id="ins-rgpd-error" role="alert" style={errorStyle}>{errors.rgpd}</p>
        )}
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          className="btn-primary"
          disabled={loading}
          style={{
            opacity: loading ? 0.6 : 1,
            cursor: loading ? 'wait' : 'pointer',
          }}
        >
          {loading ? 'Enviando…' : 'Solicitar plaza'}
        </button>
      </div>
    </form>
  )
}
