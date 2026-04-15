'use client'

import { useState } from 'react'

interface FormState {
  nombre: string
  email: string
  telefono: string
  mensaje: string
  rgpd: boolean
}

interface Errors {
  nombre?: string
  email?: string
  telefono?: string
  mensaje?: string
  rgpd?: string
}

export default function ContactoForm() {
  const [form, setForm] = useState<FormState>({
    nombre: '', email: '', telefono: '', mensaje: '', rgpd: false,
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
    if (field === 'mensaje' && !value) return 'Campo obligatorio'
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
    ;(['nombre', 'email', 'mensaje', 'rgpd'] as (keyof FormState)[]).forEach(f => {
      const err = validate(f, form[f])
      if (err) newErrors[f] = err
    })
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setLoading(true)
    // Simular envío (en producción: llamada a API route)
    await new Promise(r => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
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

  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    fontSize: '0.625rem',
    letterSpacing: '0.06em',
    textTransform: 'uppercase' as const,
    color: 'var(--color-text-muted)',
    marginBottom: '8px',
  }

  if (submitted) {
    return (
      <div
        style={{
          background: 'var(--color-surface-container)',
          padding: '48px 40px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: '1.25rem',
            color: 'var(--color-graphite)',
            marginBottom: '12px',
          }}
        >
          Mensaje recibido.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: '0.9375rem',
            color: 'var(--color-text-muted)',
          }}
        >
          Respondemos en 24 horas.
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
        <label htmlFor="nombre" style={labelStyle}>
          Nombre *
        </label>
        <input
          id="nombre"
          type="text"
          autoComplete="name"
          value={form.nombre}
          onChange={e => setForm(p => ({ ...p, nombre: e.target.value }))}
          onBlur={() => handleBlur('nombre')}
          style={inputStyle(!!errors.nombre)}
          aria-describedby={errors.nombre ? 'nombre-error' : undefined}
          aria-invalid={!!errors.nombre}
        />
        {errors.nombre && (
          <p
            id="nombre-error"
            role="alert"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '0.75rem',
              color: 'var(--color-error)',
              marginTop: '6px',
            }}
          >
            {errors.nombre}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" style={labelStyle}>
          Email *
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
          onBlur={() => handleBlur('email')}
          style={inputStyle(!!errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p
            id="email-error"
            role="alert"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '0.75rem',
              color: 'var(--color-error)',
              marginTop: '6px',
            }}
          >
            {errors.email}
          </p>
        )}
      </div>

      {/* Teléfono (opcional) */}
      <div>
        <label htmlFor="telefono" style={labelStyle}>
          Teléfono
        </label>
        <input
          id="telefono"
          type="tel"
          autoComplete="tel"
          value={form.telefono}
          onChange={e => setForm(p => ({ ...p, telefono: e.target.value }))}
          style={inputStyle(false)}
        />
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="mensaje" style={labelStyle}>
          Mensaje *
        </label>
        <textarea
          id="mensaje"
          rows={5}
          value={form.mensaje}
          onChange={e => setForm(p => ({ ...p, mensaje: e.target.value }))}
          onBlur={() => handleBlur('mensaje')}
          style={{
            ...inputStyle(!!errors.mensaje),
            resize: 'none',
            paddingTop: '12px',
            lineHeight: '1.6',
          }}
          aria-describedby={errors.mensaje ? 'mensaje-error' : undefined}
          aria-invalid={!!errors.mensaje}
        />
        {errors.mensaje && (
          <p
            id="mensaje-error"
            role="alert"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '0.75rem',
              color: 'var(--color-error)',
              marginTop: '6px',
            }}
          >
            {errors.mensaje}
          </p>
        )}
      </div>

      {/* Checkbox RGPD */}
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
            aria-describedby={errors.rgpd ? 'rgpd-error' : undefined}
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
          <p
            id="rgpd-error"
            role="alert"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '0.75rem',
              color: 'var(--color-error)',
              marginTop: '6px',
            }}
          >
            {errors.rgpd}
          </p>
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
          {loading ? 'Enviando…' : 'Enviar mensaje'}
        </button>
      </div>
    </form>
  )
}
