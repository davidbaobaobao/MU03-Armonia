# BUILD.md — Escuela Armonía
# Vitrina Studio · Proyecto MU03 · Actualizado: 14 abril 2026

---

## Identidad del cliente

```
Nombre:          Escuela Armonía
Sector:          Academia de música / Escuela de piano
Ciudad:          Valencia, España
Teléfono:        655 544 567
Email:           yeyebcn01@gmail.com
Contacto:        Email preferido
Web actual:      No
Plan:            Avanzada (sin límite de páginas)
Client UUID:     5ea84e0a-8575-44f6-be47-b55c2a74bc11
Idioma:          Español — todo el contenido visible, copy, UI, meta tags y legales
```

---

## Descripción del negocio

Escuela Armonía es una academia de piano en Valencia que ofrece clases presenciales
para estudiantes de todas las edades, desde los 8 años. La enseñanza combina técnica
clásica rigurosa con un enfoque pedagógico cercano y motivador. Cada alumno avanza
a su propio ritmo, con profesores que adaptan el método a su nivel y objetivos.

---

## Personalidad de marca

```
Tono:            Serio, experto, cercano. Nunca corporativo, nunca infantil.
Estilo visual:   "El Intervalo Resonante" — editorial de alto nivel, monócromo.
                 Referencia: bespoke monograph, programa de sala de conciertos.
                 Asimetría deliberada. Escala tipográfica dramática. 0px en todo.
Valores:         Rigor técnico, paciencia, progreso real, pasión por la música.
Voz:             Primera persona del plural — "Enseñamos", "Trabajamos".
                 Específico y honesto. Nunca marketing genérico.
Anti-copy:       NO usar "eleva", "transforma", "experiencia única", "apasionante".
                 SÍ usar "El piano se aprende tocando.", "Respondo en 24 horas."
```

---

## Design Dials

```
DESIGN_VARIANCE:   7   — Asimétrico. Titulares que invaden la imagen. Grid que se rompe.
MOTION_INTENSITY:  4   — Revelados al scroll, underline animado en CTAs. Sin excesos.
VISUAL_DENSITY:    3   — Una idea por pantalla. Si parece lleno, añadir 50% más espacio.
```

**Dirección estética:** Drama editorial monocromo. Ivory (#FAF9F6) como lienzo.
Grafito profundo (#2F3430) como color de acción. Noto Serif para los titulares solos.
Manrope para todo lo utilitario. 0px en absolutamente todo. Fotografía B&W.

**Referencia visual:** ver `brand_assets/brand.md` y archivos de referencia adjuntos:
- DESIGN.md — "The Resonant Interval" design system
- design_specifications_color_type.html — paleta y tipografía exactas
- code.html — componentes de referencia HTML (nav, hero, secciones, footer)

---

## Arquitectura del sitio (Plan Avanzada)

```
/                    → Inicio
/cursos              → Cursos y niveles
/profesores          → Equipo docente
/galeria             → Galería
/metodo              → Nuestro método
/contacto            → Contacto y localización
/aviso-legal         → Aviso legal
/privacidad          → Política de privacidad
/cookies             → Política de cookies
```

---

## Navegación

```
Menú:        Cursos · Profesores · Método · Recitales · Contacto
CTA nav:     "Inscríbete" → /contacto
Estilo:      Glassmorphism flotante — rgba(250,249,246,0.70) backdrop-blur-2xl
             Sin border-bottom — regla no-line
             Logo: "ARMONÍA" Noto Serif 300 tracking-[0.2em] uppercase
             Links: Manrope 500 uppercase tracking-[0.15em] color text-muted
             Hover: transición a on-surface
```

---

## Secciones por página

### / — Inicio

**Hero** — static
```
Titular H1:    "El piano se aprende tocando."
               Noto Serif 300 — display-lg — tracking-tighter
               Alineado a la izquierda — col-span 7 de 12
Subtítulo:     "Clases presenciales en Valencia para todas las edades,
                desde los 8 años."
               Manrope 300 — body-lg — color text-muted
CTA principal: "Ver cursos" → /cursos
               Botón primario: fondo #2F3430, texto #FAF7F6, 0px, uppercase tracking-[0.15em]
CTA sec:       "Llámanos" → tel:+34655544567
               Botón secundario fantasma
Imagen:        hero-bg.jpg — col-span 5 derecho, aspect-[3/4]
               Puede extenderse ligeramente fuera del grid derecho (scale-breaker)
               Aplicar filter: grayscale(85%) + overlay rgba(47,52,48,0.05)
Fondo hero:    --color-surface (#FAF9F6)
Detalle:       Bloque flotante inferior izquierdo con cita en itálica Noto Serif
               sobre fondo --color-surface con ghost border
               "«El intervalo no es silencio; es la tensión entre lo que fue
                y lo que será.»"
```

**Cursos destacados** — static
```
Fondo:         --color-surface-low (#F4F4F0)
Titular:       "Encuentra tu nivel."  — Noto Serif headline-lg
3 tarjetas:    Iniciación · Intermedio · Adultos
               Fondo tarjeta: --color-surface (#FAF9F6)
               Sin bordes — separación por color
               Número decorativo: Noto Serif display-sm color surface-highest
CTA:           "Ver todos los cursos" → /cursos — botón terciario underline
```

**Sobre la escuela** — static
```
Fondo:         --color-surface (#FAF9F6)
Layout:        2 columnas — texto izquierda, 2 imágenes derecha (grid asimétrico)
               Imagen superior normal, imagen inferior con offset de 32px hacia abajo
Titular H2:    "Más de diez años enseñando lo que amamos."
               Noto Serif headline-lg
Texto:         "Nuestra sala está en el corazón de Valencia. Cada espacio ha sido
                preparado para que el sonido del piano llegue limpio, sin interferencias.
                Trabajamos con instrumentos Yamaha y Steinway seleccionados."
               Manrope 300 body-lg color text-muted max-w-md leading-relaxed
Enlace:        "Conoce la escuela" → /metodo — botón terciario
Imágenes:      about-01.jpg + about-02.jpg — ambas grayscale(85%)
```

**Cita central** — static
```
Fondo:         --color-surface-low (#F4F4F0)
Padding:       py-48 — espacio extremo
Texto:         Noto Serif italic — display-sm centered — max-w-3xl
               "«Tocar el piano es hablar sin palabras.
                 Enseñamos la gramática del alma.»"
Autor:         Manrope — text-label-sm — uppercase — tracking-[0.5em] — text-muted
               "— CARMEN SOLÍS, DIRECTORA"
Decoración:    Comilla gigante Noto Serif — color surface-highest — decorativa
```

**Testimonios** — dynamic: true
```
table:         testimonials
Fondo:         --color-surface (#FAF9F6)
Titular:       "Lo que dicen nuestros alumnos."
Layout:        Grid 2 columnas desktop, 1 móvil
Tarjeta:       Fondo surface-low, 0px, sin borde, padding 40px
               Texto testimonio: Noto Serif 400 italic body-lg
               Nombre: Manrope 500 uppercase tracking-[0.1em]
               Nivel: Manrope 300 text-label-md text-muted
               Estrellas: si rating > 0 — mostrar como puntos o texto "★★★★★"
```

**Recitales y avisos** — dynamic: true
```
table:         offers
Fondo:         --color-surface-low (#F4F4F0)
Titular:       "Próximos eventos."
Renderizar:    badge_text como pill (única excepción border-radius: full)
               Pill fondo: rgba(47,52,48,0.08), texto: on-surface, 0 border
               valid_until: "Hasta [fecha]" — Manrope label-sm text-muted
Si vacío:      → return null, la sección desaparece
```

**Contacto rápido** — static
```
Fondo:         --color-graphite (#2F3430) — sección oscura de impacto
Texto:         --color-text-inv (#FAF7F6)
Teléfono:      655 544 567 — Noto Serif display-sm — enlace tel:
Email:         yeyebcn01@gmail.com
Horario:       Lunes a viernes, 9:00 – 17:00
               Sábados y domingos: Cerrado
CTA WhatsApp:  "Escríbenos por WhatsApp" → wa.me/34655544567
               Botón secundario fantasma sobre fondo oscuro
```

---

### /cursos — Cursos y niveles

**Hero de página** — static
```
Fondo:         --color-surface (#FAF9F6)
Titular H1:    "Encuentra tu nivel."
Subtítulo:     "Desde el primer acorde hasta el repertorio avanzado."
               Manrope 300 body-lg text-muted
Layout:        Asimétrico — H1 col 7/12, subtítulo col 4/12 offset
```

**Lista de cursos** — dynamic: true
```
table:         services
Fondo:         --color-surface-low (#F4F4F0)
Renderizar:    Cada curso como fila editorial — NO tarjeta en caja
               Número: Noto Serif display-sm color surface-highest (01, 02, 03…)
               Nombre: Noto Serif headline-md on-surface
               Descripción: Manrope 300 body-md text-muted
               Precio: price_label si existe, si no price, nunca null visible
               Separación: 40px vertical entre items — SIN líneas divisorias
Si vacío:      → return null
```

**3 pilares — metodología breve** — static
```
Fondo:         --color-surface (#FAF9F6)
3 pilares:     Técnica · Lectura · Repertorio
               Número grande Noto Serif, título Noto Serif headline-sm,
               descripción Manrope body-md text-muted
               Sin iconos — solo tipografía
```

**CTA inscripción** — static
```
Fondo:         --color-surface-low (#F4F4F0)
Texto:         "¿Dudas sobre qué nivel es el tuyo? Escríbenos."
               Noto Serif italic headline-md
CTA:           "Contactar" → /contacto
```

---

### /profesores — Equipo docente

**Hero de página** — static
```
Titular H1:    "Profesores con vocación, no solo con título."
Fondo:         --color-surface (#FAF9F6)
```

**Fichas de profesores** — dynamic: true
```
table:         team_members
Fondo:         --color-surface (#FAF9F6) alternando con --color-surface-low
Renderizar:    Layout editorial — foto izquierda (aspect-[3/4] grayscale), texto derecha
               Si no hay photo_url: inicial del nombre en cuadrado (#2F3430 fondo,
               #FAF7F6 texto, Noto Serif display-sm, 0px)
               Nombre: Noto Serif headline-md
               Rol: Manrope 500 uppercase tracking-[0.15em] text-muted
               Bio: Manrope 300 body-md text-muted leading-relaxed
Si vacío:      → return null
```

---

### /galeria — Galería

**Galería fotográfica** — dynamic: true
```
table:         gallery
Fondo:         --color-surface (#FAF9F6)
Titular H1:    "La escuela en imágenes."
Layout:        Grid masonry 3 columnas desktop, 2 tablet, 1 móvil
               Todas las imágenes: grayscale(85%) — hover: grayscale(0%) transition
               Agrupar por category si existen múltiples (Clases, Recitales, Instalaciones)
               Caption: Manrope label-sm text-muted uppercase tracking-[0.1em]
Si vacío:      → return null
```

---

### /metodo — Nuestro método

**Contenido editorial** — static
```
Fondo:         Alternancia surface / surface-low por sección
H1:            "Escuchar antes de tocar."
Sección 1:     "Aprender a escuchar antes que a tocar"
               Texto: Manrope 300 body-lg leading-relaxed max-w-lg
Sección 2:     "La técnica al servicio de la expresión"
Sección 3:     "Un recital al año para cada alumno"
Layout:        Texto asimétrico — no centrado, no simétrico.
               Alterna texto a izquierda/derecha con imagen offset.
```

**FAQs** — dynamic: true
```
table:         faqs
Fondo:         --color-surface-low (#F4F4F0)
Titular:       "Preguntas frecuentes."
Renderizar:    Acordeón — pregunta Noto Serif headline-sm, respuesta Manrope body-md
               Sin borde entre items — separación por padding 40px
               Icono de apertura: solo texto "+" / "−" en Manrope
Si vacío:      → return null
```

---

### /contacto — Contacto

**Datos de contacto** — static
```
Fondo:         --color-surface (#FAF9F6)
H1:            "Hablemos."
Datos:
  Teléfono:    655 544 567 — Noto Serif display-sm — enlace tel:+34655544567
  Email:       yeyebcn01@gmail.com
  Horario:     Lunes a viernes, 9:00 – 17:00
               Sábados y domingos: Cerrado
  Dirección:   Valencia (completar cuando el cliente confirme dirección exacta)
WhatsApp CTA:  "Escríbenos por WhatsApp" — botón primario
```

**Formulario de contacto** — static
```
Fondo:         --color-surface-low (#F4F4F0)
Campos:        Nombre · Email · Teléfono · Mensaje · Checkbox RGPD
Estilo:        Inputs baseline-only (sin caja) — ver brand.md
               Labels: Manrope uppercase tracking-[0.06em] color text-muted
               Label flota al hacer focus
Validación:    En blur — nunca en keystroke
RGPD:          "He leído y acepto la Política de privacidad" — obligatorio
CTA:           "Enviar mensaje" — botón primario
```

---

## Copy UI — español en todo

```
Navegación:    Cursos · Profesores · Método · Recitales · Contacto · Inscríbete
Botones:       "Ver cursos" · "Llámanos" · "Inscríbete" · "Enviar mensaje"
               "Escríbenos por WhatsApp" · "Conoce la escuela"
Formulario:    Nombre · Email · Teléfono · Mensaje · Enviar
               "Campo obligatorio" · "Email no válido — comprueba que incluye @"
Footer:        "Aviso legal" · "Política de privacidad" · "Política de cookies"
               "© 2026 Escuela Armonía. Valencia."
Meta H1:       "Escuela Armonía | Clases de Piano en Valencia"
```

---

## SEO — todo en español

```
/:
  title:       "Escuela Armonía | Clases de Piano en Valencia"
  description: "Escuela de piano en Valencia para todas las edades desde los 8 años.
                Clases presenciales individuales, técnica clásica, preparación ABRSM."

/cursos:
  title:       "Cursos de Piano — Todos los Niveles | Escuela Armonía Valencia"
  description: "Iniciación, intermedio, adultos y preparación ABRSM.
                Clases individuales de piano en Valencia."

/profesores:
  title:       "Profesores de Piano | Escuela Armonía Valencia"

/metodo:
  title:       "Nuestro Método de Enseñanza | Escuela Armonía Valencia"

/contacto:
  title:       "Contacto y Horarios | Escuela Armonía Valencia"
  description: "Llámanos al 655 544 567 o escríbenos. Lunes a viernes 9:00–17:00."
```

---

## Contacto y CTA patterns

```jsx
// Teléfono — siempre clickable
<a href="tel:+34655544567">655 544 567</a>

// WhatsApp
<a href="https://wa.me/34655544567?text=Hola%2C%20me%20gustaría%20información%20sobre%20los%20cursos%20de%20piano"
   target="_blank" rel="noopener noreferrer">
  Escríbenos por WhatsApp
</a>

// Horario
Lunes a viernes: 9:00 – 17:00
Sábados y domingos: Cerrado
```

---

## Anti-patrones para este cliente

```
NO usar: Border-radius en ningún elemento estructural — siempre 0px
NO usar: Gold, amber, o cualquier tono cálido de acento — el acento es grafito
NO usar: Noto Serif en cuerpo largo — Manrope para todo el body text
NO usar: Sombras drop-shadow visibles — solo shadow-ambient al 4%
NO usar: Bordes de 1px para seccionar — solo cambios de fondo
NO usar: Fotografía en color — siempre grayscale(85%) mínimo
NO usar: Layout centrado en hero — siempre asimétrico (DESIGN_VARIANCE:7)
NO usar: Estética "academia infantil" con colores vivos
NO usar: Exclamaciones o lenguaje de marketing agresivo
NO usar: "¡Apúntate ya!" — escribir "Inscríbete en el próximo curso"
NO usar: Iconos para todo — preferir text labels en Manrope label-sm
NO usar: Contenido crowded — si parece lleno, añadir 50% más espacio
```

---

*BUILD.md — Escuela Armonía · MU03 · Vitrina Studio · Actualizado 14 abril 2026*
