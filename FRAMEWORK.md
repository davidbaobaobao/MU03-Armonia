# FRAMEWORK.md — Escuela Armonía
# Vitrina Studio · Proyecto MU03 · Abril 2026

---

## Qué es este proyecto

Escuela Armonía es el tercer proyecto activo de Vitrina Studio (MU03).
Es una academia de piano en Valencia, España. Plan Avanzado — sin límite de páginas.

Este repositorio contiene todos los archivos necesarios para que Claude Code
construya el sitio de producción sin necesidad de contexto adicional.

---

## El negocio — contexto para Claude Code

Vitrina Studio es un servicio de diseño web por suscripción para pymes españolas.
El modelo es "done-for-you" — el cliente no toca código ni diseño.

El flujo completo:
1. El cliente rellenó el formulario en yele.design
2. Los archivos de este proyecto fueron generados por el workflow tool
3. Claude Code construye el sitio Next.js sección a sección
4. Se despliega en Vercel y se conecta al dominio del cliente
5. El cliente gestiona su contenido desde app.yele.design

---

## Datos del cliente

```
Nombre:          Escuela Armonía
UUID Supabase:   5ea84e0a-8575-44f6-be47-b55c2a74bc11
Email:           yeyebcn01@gmail.com
Teléfono:        655 544 567
Ciudad:          Valencia, España
Horario:         Lunes a viernes, 9:00 – 17:00
Plan:            Avanzada
Estado:          building
```

---

## Infraestructura

```
Frontend:        Next.js 14 (App Router) — desplegado en Vercel
Base de datos:   Supabase — proyecto wdnwacdkoowrrnyaskjl.supabase.co
Dashboard:       app.yele.design — el cliente gestiona su contenido aquí
Dominio final:   pendiente — el cliente confirmará su dominio
```

---

## Archivos de este proyecto

```
CLAUDE.md                    ← Cerebro del estudio. Reglas de diseño. No tocar.
FRAMEWORK.md                 ← Este archivo. Contexto de negocio.
BUILD.md                     ← Brief del cliente. Fuente de verdad para el sitio.
DESIGN.md                    ← Sistema de diseño "The Resonant Interval" (referencia)
design_specifications_color_type.html  ← Paleta y tipografía exactas (referencia)
code.html                    ← Componentes HTML de referencia (nav, hero, footer)

brand_assets/
  brand.md                   ← Tokens CSS completos para este cliente
  brand_sheet.png            ← Referencia visual generada (pendiente)
  logo_typo.svg              ← Logo tipográfico generado (pendiente)

media_assets/
  MEDIA_LIST.md              ← Lista de activos necesarios
  MEDIA_BRIEF.md             ← Versión para el cliente (pendiente)
  IMAGE_PROMPTS.md           ← Prompts Meta AI para generar imágenes
  [fotos del cliente]        ← Se añadirán cuando el cliente las entregue

.env.local                   ← Variables de entorno Supabase (NUNCA commitear)
```

---

## Secciones dinámicas — resumen rápido

Estas secciones fetchen de Supabase en runtime (revalidate: 60).
El cliente las gestiona desde app.yele.design.

```
services       → /cursos — lista de cursos
team_members   → /profesores — fichas de profesores
testimonials   → / — sección de testimonios
faqs           → /metodo — preguntas frecuentes
offers         → / — recitales y eventos
gallery        → /galeria — galería fotográfica
```

Todas tienen datos iniciales ya insertados en Supabase (ver SEED.sql).

---

## Orientación para Claude Code — pegar al inicio de cada sesión

```
Lee CLAUDE.md completamente. Luego lee BUILD.md. Luego lee brand_assets/brand.md.
Lee también DESIGN.md y code.html como referencia de componentes.
Comprueba brand_assets/ para logos o fotos disponibles.
Comprueba .env.local para confirmar que las credenciales de Supabase están presentes.

Dime:
1. Los tres dials de diseño (VARIANCE/MOTION/DENSITY) y dirección estética
2. Qué secciones en BUILD.md están marcadas dynamic: true y a qué tabla de Supabase mapea cada una
3. Confirma que entiendes el patrón de fetch dinámico de CLAUDE.md

Luego construimos sección a sección. Empieza con tailwind.config.js + variables CSS + fuentes.
```

---

## Checklist antes de deploy

```
□ npm run build — cero errores
□ Todas las secciones dinámicas muestran datos de Supabase
□ Estado vacío testado — secciones desaparecen limpiamente sin datos
□ Todo el texto en español — ningún inglés visible
□ 0px border-radius en todo elemento estructural
□ Ningún raw hex en componentes — solo var(--color-x)
□ Tipografía: Noto Serif (display) + Manrope (body) — sin excepciones
□ Fotografías en grayscale(85%) mínimo
□ Nav glassmorphism funcionando
□ Formulario de contacto con checkbox RGPD
□ /aviso-legal + /privacidad + /cookies — todas generadas
□ Footer con enlaces legales
□ Google PageSpeed 85+ en móvil
□ .env.local NO commitado a git
□ NEXT_PUBLIC_CLIENT_ID = 5ea84e0a-8575-44f6-be47-b55c2a74bc11
```

---

*FRAMEWORK.md — Escuela Armonía · MU03 · Vitrina Studio · Abril 2026*
