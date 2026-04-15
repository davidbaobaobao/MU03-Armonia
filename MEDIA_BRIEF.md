# MEDIA_BRIEF.md — Escuela Armonía
# Vitrina Studio · Proyecto MU03 · Abril 2026
# Activos visuales + prompts Meta AI para generación de imágenes
# Todos los activos: blanco y negro o muy desaturados. Sin texto superpuesto.

---

## RESUMEN RÁPIDO

| ID | Página / Sección | Formato | Ratio | Prioridad | Estado |
|---|---|---|---|---|---|
| hero-bg | / Hero | JPG + MP4 opcional | 3:4 | 🔴 | ⬜ |
| about-01 | / Sobre la escuela (izquierda) | JPG | 4:5 | 🔴 | ⬜ |
| about-02 | / Sobre la escuela (derecha, offset) | JPG | 1:1 | 🟡 | ⬜ |
| teacher-01 | /profesores — Carmen Solís | JPG | 3:4 | 🔴 | ⬜ |
| teacher-02 | /profesores — Marcos Ibáñez | JPG | 3:4 | 🟡 | ⬜ |
| teacher-03 | /profesores — Laura Ferri | JPG | 3:4 | 🟡 | ⬜ |
| method-01 | /metodo — Sección 1 | JPG | 16:9 | 🟡 | ⬜ |
| method-02 | /metodo — Sección 2 | JPG | 16:9 | 🟡 | ⬜ |
| gallery-01 | /galeria — Instalaciones | JPG | 16:9 | 🟢 | ⬜ |
| gallery-02 | /galeria — Clases | JPG | 4:5 | 🟢 | ⬜ |
| gallery-03 | /galeria — Recitales | JPG | 16:9 | 🟢 | ⬜ |
| gallery-04 | /galeria — Instalaciones | JPG | 1:1 | 🟢 | ⬜ |
| gallery-05 | /galeria — Clases | JPG | 4:5 | 🟢 | ⬜ |
| gallery-06 | /galeria — Recitales | JPG | 4:5 | 🟢 | ⬜ |

**Prioridad:** 🔴 Crítico — sin este activo el sitio no puede lanzarse
           🟡 Importante — mejora significativa de calidad
           🟢 Opcional — enriquece la galería

**Estado:** ⬜ Pendiente · ✅ Listo · ⚠️ Sustituido por generación AI

---

## REGLAS GLOBALES DE TRATAMIENTO

```
PALETA:       Blanco y negro puro, o desaturación ≥ 85%
              Sombras cálidas (casi negras) — luces casi blancas
              No grises fríos / azulados

ESTILO:       Fotografía fine art / editorial. No stock.
              Luz natural preferida. Sin flash duro.
              Profundidad de campo — bokeh sutil en fondos

PERSONAS:     No mostrar caras de menores identificables sin permiso
              Planos de manos, espaldas, encuadres generales son seguros
              Profesores: retrato desde el pecho — consentimiento implícito

COMPOSICIÓN: Espacio en blanco generoso — tema principal no centrado
              Dejar "aire" en el lado donde irá el texto de la web
              Evitar composiciones simétricas y centradas

TÉCNICO:      Resolución mínima: 1200px en el lado más corto
              Formato de entrega: JPG calidad 85–90%, máx 4MB
              Nombrar exactamente como figura en la columna ID arriba
              Guardar en carpeta media_assets/
```

---

## ACTIVOS CRÍTICOS 🔴

---

### hero-bg — Hero principal, página de inicio

**Dónde aparece:** Columna derecha del hero — aspect ratio 3:4, puede desbordar el grid
**Uso:** Primera impresión del sitio. Define el tono visual completo.

```
PROMPT META AI (versión A — piano de cola):
"Grand piano in a high-ceilinged rehearsal room, Valencia Spain, viewed from the side
at a slight angle, dramatic natural light from tall arched windows casting long shadows
across the polished wooden floor, the piano lid open, music stand empty, no people,
architectural fine art photography, black and white, deep rich shadows with bright
highlights, shallow depth of field on the piano body, cinematic composition with
subject off-center toward the right third, generous empty space on the left,
no text, no watermarks, photorealistic"

PROMPT META AI (versión B — detalle dramático de teclado):
"Extreme close-up of grand piano keys shot at a very low angle, dramatic raking
side light creating sharp shadows between each key, the keys recede into soft
bokeh in the background, monochromatic black and white, high contrast fine art
photography, ultra sharp foreground, architectural precision, no hands, no people,
no text, no watermarks, photorealistic"

PROMPT META AI (versión C — sala vacía):
"Empty piano practice room, wooden upright piano against a white plaster wall,
single tall window with soft afternoon light, wooden chair beside the piano,
minimalist interior, fine art architectural photography, black and white with
warm shadow tones, no people, quiet and contemplative atmosphere, generous
whitespace on the left side of the frame, no text, no watermarks, photorealistic"
```

**Instrucción de uso:**
- Generar las 3 versiones
- Elegir la que mejor contraste con el titular de texto a la izquierda
- Si el cliente entrega foto real: usar esa, aplicar grayscale en CSS

---

### about-01 — Sobre la escuela, imagen izquierda

**Dónde aparece:** Sección "Sobre la escuela" en inicio — columna izquierda grande, aspect 4:5
**Uso:** Representa el espacio físico de la escuela

```
PROMPT META AI:
"Interior of a small intimate music school, upright piano against a white wall,
natural light from the side creating soft shadows, wooden flooring, a music stand
with open sheet music, high ceiling, minimalist and calm, black and white fine art
photography, architectural style, no people, warm shadow tones, crisp whites,
subject filling most of the frame with slight headroom at the top,
no text, no watermarks, photorealistic"
```

---

### about-02 — Sobre la escuela, imagen derecha (offset)

**Dónde aparece:** Sección "Sobre la escuela" — columna derecha pequeña, desplazada 32px hacia abajo
**Uso:** Detalle complementario — contrasta con about-01

```
PROMPT META AI:
"Close detail of an open piano, the internal strings and hammers visible from above,
dramatic raking light from the side illuminating the golden strings against dark
interior, fine art photography, black and white with rich tonal range, shallow
depth of field, no people, no text, no watermarks, photorealistic"
```

---

## ACTIVOS IMPORTANTES 🟡

---

### teacher-01 — Retrato Carmen Solís (directora)

**Dónde aparece:** /profesores — primera ficha, posición destacada
**Uso:** Layout editorial: foto aspect 3:4 izquierda, texto biográfico derecha

```
PROMPT META AI:
"Professional portrait of a woman in her 40s, piano teacher and school director,
standing beside a grand piano in a music school, arms relaxed at her sides,
looking directly at the camera with quiet confidence and warmth, professional
attire in neutral tones, soft natural window light from the side, blurred
rehearsal room background, fine art portrait photography, black and white,
high contrast with soft shadows, no text, no watermarks, photorealistic"
```

**Nota para uso real:** Si Carmen Solís tiene foto profesional, usar esa.
El retrato AI es solo para el lanzamiento inicial.

---

### teacher-02 — Retrato Marcos Ibáñez

**Dónde aparece:** /profesores — segunda ficha

```
PROMPT META AI:
"Professional portrait of a man in his 30s, piano and musicology teacher,
seated at a grand piano with hands resting on the keyboard, looking at the camera
with a relaxed and approachable expression, smart casual attire, natural light,
blurred music school interior background, fine art black and white portrait
photography, no text, no watermarks, photorealistic"
```

---

### teacher-03 — Retrato Laura Ferri

**Dónde aparece:** /profesores — tercera ficha

```
PROMPT META AI:
"Professional portrait of a young woman in her late 20s, piano teacher specializing
in children's methodology, standing in a brightly lit music practice room, warm and
approachable expression, light neutral clothing, soft diffused natural light,
fine art black and white portrait photography, no text, no watermarks, photorealistic"
```

---

### method-01 — Nuestro método, sección 1

**Dónde aparece:** /metodo — sección "Aprender a escuchar antes que a tocar"
**Uso:** Imagen editorial de acompañamiento al texto

```
PROMPT META AI:
"Open sheet music on a piano music stand, soft ambient side light, the notes and
staves slightly out of focus in the background, a pianist's hands at rest just
below frame, fine art photography, black and white, calm and contemplative mood,
no readable text visible on the sheet music, generous empty space on one side,
no watermarks, photorealistic"
```

---

### method-02 — Nuestro método, sección 2 o 3

**Dónde aparece:** /metodo — sección "Un recital al año para cada alumno"
**Uso:** Atmósfera de recital íntimo

```
PROMPT META AI:
"Small intimate concert venue, a baby grand piano on a modest wooden stage,
single warm spotlight from above illuminating the piano, rows of empty wooden
chairs in the background receding into darkness, quiet anticipation before a
performance, fine art black and white photography, cinematic atmosphere,
no people, no text, no watermarks, photorealistic"
```

---

## GALERÍA 🟢

Estas 6 imágenes pueblan la sección /galeria dividida en 3 categorías.
Generar todas para tener la galería lista en el lanzamiento.

---

### gallery-01 — Instalaciones (horizontal)

```
PROMPT META AI:
"Music school main rehearsal room, grand piano centered in the room, tall windows
along one wall with soft natural light flooding in, hardwood floors, high white
ceiling with simple moldings, empty music stands arranged in a semicircle,
architectural fine art photography, black and white, wide angle lens,
no people, no text, no watermarks, photorealistic"
```

---

### gallery-02 — Clases (vertical)

```
PROMPT META AI:
"Piano lesson in progress, view from behind and slightly above, a student's hands
on the piano keys and a teacher's hand pointing to the sheet music on the stand,
faces not visible, warm natural light from the side, intimate and focused
atmosphere, fine art photography, black and white, shallow depth of field,
no text, no watermarks, photorealistic"
```

---

### gallery-03 — Recitales (horizontal)

```
PROMPT META AI:
"Student recital in a small concert hall, a young pianist performing on stage,
viewed from the audience perspective with silhouettes of seated listeners in the
foreground, soft stage lighting on the piano and performer, intimate and warm
atmosphere, fine art black and white photography, cinematic depth,
no text, no watermarks, photorealistic"
```

---

### gallery-04 — Instalaciones (cuadrado)

```
PROMPT META AI:
"Close-up detail of a Yamaha grand piano, the brass pedals at the base reflecting
the room light, the curved body of the piano extending out of frame, polished
black lacquer surface with subtle reflections, fine art detail photography,
black and white, very shallow depth of field, no people, no text,
no watermarks, photorealistic"
```

---

### gallery-05 — Clases (vertical)

```
PROMPT META AI:
"Child's hands on piano keys during a lesson, close-up from slightly above,
both hands positioned correctly on the keys, soft diffused natural light,
the keys recede into soft bokeh in the background, fine art photography,
black and white with warm shadow tones, no faces visible, no text,
no watermarks, photorealistic"
```

---

### gallery-06 — Recitales (vertical)

```
PROMPT META AI:
"After a recital, a young student standing beside a grand piano receiving a bouquet
of flowers, viewed from behind, the audience visible as blurred figures in the
background, warm stage lighting, celebratory and intimate mood, fine art
black and white photography, no faces fully visible from behind,
no text, no watermarks, photorealistic"
```

---

## INSTRUCCIONES DE USO CON META AI

```
1. Ir a meta.ai o usar Meta AI en Instagram/WhatsApp
2. Escribir el prompt completo tal como aparece arriba
3. Generar 4 variantes por prompt — elegir la mejor
4. Si el resultado no es B&W: añadir al prompt "convert to black and white,
   high contrast monochrome, rich blacks and bright whites"
5. Si aparece texto superpuesto: añadir "absolutely no text overlay,
   no typography, no numbers, no words of any kind"
6. Descargar en máxima resolución disponible
7. Si es necesario recortar: usar el ratio indicado en la tabla de arriba
8. Guardar con el nombre exacto del ID (ej: hero-bg.jpg, teacher-01.jpg)
9. Colocar todos los archivos en media_assets/

POST-PROCESO RECOMENDADO (Lightroom / Snapseed / VSCO):
  - Confirmar que está en B&W o aplicar desaturación completa
  - Subir ligeramente el contraste: Claros +15, Sombras –10
  - Temperatura de sombras: ligeramente cálida (no fría/azulada)
  - Exportar JPG calidad 85, máximo 4MB por imagen
```

---

## ACTIVO OPCIONAL — Logo tipográfico

El cliente no tiene logo. Claude Code generará un logo tipográfico en SVG con:

```
Texto principal:  ARMONÍA
Fuente:           Noto Serif Light (300)
Tracking:         letter-spacing: 0.2em
Transform:        uppercase
Color:            #2F3430 (sobre fondo claro) / #FAF9F6 (sobre fondo oscuro)

Texto secundario: ESCUELA DE PIANO · VALENCIA
Fuente:           Manrope Regular (400)
Tracking:         letter-spacing: 0.4em
Transform:        uppercase
Color:            #505050

Formato entrega:  logo_typo.svg — guardar en brand_assets/
```

---

## PARA CLAUDE CODE — detección automática de activos

```
Orden de detección por sección:
  hero-bg:    hero-bg.mp4 > hero-bg.webm > hero-bg.jpg > hero-bg.png
  about-xx:   about-01.jpg > about-01.png > about-02.jpg
  teacher-xx: teacher-01.jpg > teacher-02.jpg > teacher-03.jpg
  method-xx:  method-01.jpg > method-02.jpg
  gallery-xx: gallery-01.jpg ... gallery-06.jpg

Sin activo → placeholder con var(--color-surface-low) y comentario:
  /* TODO: replace with real image — [filename] */
  NUNCA usar placehold.co en producción

Tratamiento obligatorio en CSS para todas las fotos:
  filter: grayscale(85%);
  transition: filter 400ms ease;

Hover en galería (solo /galeria):
  filter: grayscale(0%);
```

---

*MEDIA_BRIEF.md — Escuela Armonía · MU03 · Vitrina Studio · Abril 2026*
