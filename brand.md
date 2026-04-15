# brand.md — Escuela Armonía
# Vitrina Studio · Proyecto MU03 · Actualizado: 14 abril 2026
# Referencia de diseño: "The Resonant Interval" — editorial monocromo, esquinas 0px

---

## Filosofía de marca

**"El Intervalo Resonante"** — En música, el espacio entre notas define la belleza
de la composición. En este diseño, el espacio entre elementos define el prestigio
de la academia.

Sistema editorial de alto nivel. Tipografía dramática, asimetría intencionada,
geometría de esquinas vivas (0px sin excepciones). Nos alejamos de lo digital
y nos acercamos a lo arquitectónico. El espacio en blanco no rellena — dirige.

---

## Paleta de color

```css
:root {
  /* Superficies — jerarquía de materiales apilados */
  --color-surface:              #FAF9F6;   /* Nivel 0 — fondo principal. Marfil, no blanco */
  --color-surface-low:          #F4F4F0;   /* Nivel 1 — secciones alternadas ("Stone") */
  --color-surface-container:    #EDEEEA;   /* Nivel 2 — tarjetas y bloques interiores */
  --color-surface-high:         #E6E9E4;   /* Nivel 3 — elementos elevados */
  --color-surface-highest:      #E0E4DE;   /* Nivel 4 — máximo contraste de superficie */
  --color-surface-white:        #FFFFFF;   /* Blanco puro — solo para layering */
  --color-surface-dim:          #D6DBD5;   /* Superficie oscurecida */

  /* Texto */
  --color-text:                 #2F3430;   /* on_surface — texto principal, suave y legible */
  --color-text-secondary:       #5C605C;   /* on_surface_variant — texto secundario */
  --color-text-muted:           #505050;   /* Slate — metadatos, captions, nav inactivo */
  --color-text-inv:             #FAF7F6;   /* Texto sobre fondos oscuros */

  /* Primarios (escala grafito) */
  --color-primary:              #5F5E5E;   /* Grafito medio */
  --color-primary-dim:          #535252;   /* Grafito oscuro — hover de botón primario */
  --color-graphite:             #2F3430;   /* Grafito profundo — botón primario, headlines */
  --color-graphite-deep:        #1A1A1B;   /* Casi negro — máximo contraste */

  /* Contornos */
  --color-outline:              #777C77;   /* Baseline de inputs */
  --color-outline-variant:      #AFB3AE;   /* Ghost border al 10% opacity */

  /* Semánticos — mapeo al sistema */
  --color-dark:                 #1A1A1B;   /* Negro de marca */
  --color-light:                #FAF9F6;   /* Marfil de marca */
  --color-accent:               #2F3430;   /* Acento = grafito profundo, NO gold */
  --color-neutral:              #AFB3AE;   /* Bordes y divisores */

  /* Error */
  --color-error:                #9F403D;

  /* Sombra ambiente (casi invisible — luz natural en sala con bóveda) */
  --shadow-ambient: 0 16px 64px rgba(47, 52, 48, 0.04);
}
```

### Regla "Sin bordes"
**1px solid borders están estrictamente prohibidos** para seccionar contenido.
Las fronteras estructurales se definen ÚNICAMENTE por cambios de color de fondo.
Ejemplo correcto: bloque en `--color-surface-low` (#F4F4F0) sobre `--color-surface` (#FAF9F6).
Si se necesita separación por accesibilidad: usar `--color-outline-variant` al **10% opacity**.

### Jerarquía de superficies
```
Nivel 0 → --color-surface         #FAF9F6   Fondo base de página
Nivel 1 → --color-surface-low     #F4F4F0   Secciones alternadas
Nivel 2 → --color-surface-container #EDEEEA Tarjetas interiores
```

---

## Tipografía

```css
/* Display & Headlines — Noto Serif */
/* Los "solistas". Escala dramática, tracking ajustado. */
/* Usar en: H1, H2, titulares hero, citas, números decorativos */
font-family: 'Noto Serif', serif;
font-weight: 300;   /* Light — titulares hero de máximo tamaño */
font-weight: 400;   /* Regular — subtítulos, citas, body editorial */
font-weight: 700;   /* Bold — raramente, solo para énfasis puntual */
font-style: italic; /* Itálica — citas, subtítulos, contrapunto al regular */

/* Body, labels, navegación — Manrope */
/* El "acompañamiento". Limpio, utilitario, siempre subordinado al serif. */
font-family: 'Manrope', sans-serif;
font-weight: 300;   /* Light — cuerpo largo */
font-weight: 400;   /* Regular — UI labels */
font-weight: 500;   /* Medium — botones, énfasis nav */
font-weight: 700;   /* Bold — solo en labels uppercase muy pequeños */
```

### Escala tipográfica

```css
:root {
  /* Display — solo Noto Serif */
  --text-display-lg:  clamp(4rem, 9vw, 7.5rem);   /* Hero H1 — 64px → 120px */
  --text-display-md:  clamp(3rem, 6vw, 5rem);      /* H1 interior */
  --text-display-sm:  clamp(2rem, 4vw, 3rem);      /* Números decorativos, pull quotes */

  /* Headlines */
  --text-headline-lg: clamp(1.875rem, 3.5vw, 3rem); /* H2 sección */
  --text-headline-md: clamp(1.5rem, 2.5vw, 2.25rem); /* H3 */
  --text-headline-sm: 1.25rem;                       /* H4 */

  /* Body — Manrope */
  --text-body-lg:   1.125rem;  /* 18px — párrafo principal */
  --text-body-md:   1rem;      /* 16px — párrafo estándar */
  --text-body-sm:   0.875rem;  /* 14px — secundario */

  /* Label — Manrope uppercase */
  --text-label-lg:  0.875rem;  /* 14px */
  --text-label-md:  0.75rem;   /* 12px */
  --text-label-sm:  0.625rem;  /* 10px — tracking 0.4em */
}
```

### Tracking (letter-spacing)
```css
/* Titulares display serif: -0.02em a -0.04em (apretados, impacto) */
/* Labels Manrope uppercase: 0.15em a 0.4em (amplios, elegantes) */
/* Body: sin tracking adicional */
```

### Carga de fuentes (Next.js)

```typescript
import { Noto_Serif, Manrope } from 'next/font/google'

export const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-display',
})

export const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-body',
})
```

---

## Geometría — Escala de redondez

```css
:root {
  --radius: 0px;   /* ESTRICTAMENTE 0px en todo */
                   /* Botones: 0px */
                   /* Tarjetas: 0px */
                   /* Inputs: 0px */
                   /* Modales: 0px */
                   /* SIN EXCEPCIONES */
}
```

La única excepción permitida es `border-radius: 9999px` para pills/badges cuando
el diseño explícitamente lo requiere (p.ej. etiqueta de categoría). Nunca en
elementos estructurales.

---

## Componentes UI

### Botón primario
```css
.btn-primary {
  background:      var(--color-graphite);   /* #2F3430 */
  color:           var(--color-text-inv);   /* #FAF7F6 */
  font-family:     var(--font-body);
  font-weight:     500;
  font-size:       var(--text-label-md);
  letter-spacing:  0.15em;
  text-transform:  uppercase;
  padding:         16px 32px;
  border-radius:   0;
  border:          none;
  min-height:      48px;
  transition:      background 150ms ease-out;
}
.btn-primary:hover {
  background: var(--color-primary-dim);   /* #535252 */
}
```

### Botón secundario (fantasma)
```css
.btn-secondary {
  background:      transparent;
  color:           var(--color-text);
  border:          1px solid rgba(175, 179, 174, 0.4);   /* outline-variant al 40% */
  font-family:     var(--font-body);
  font-weight:     500;
  font-size:       var(--text-label-md);
  letter-spacing:  0.15em;
  text-transform:  uppercase;
  padding:         16px 32px;
  border-radius:   0;
  min-height:      48px;
  transition:      border-color 150ms ease-out;
}
.btn-secondary:hover {
  border-color: var(--color-primary);
}
```

### Botón terciario / enlace
```css
/* Noto Serif, subrayado que se anima desde el centro hacia fuera */
.btn-tertiary {
  font-family:    var(--font-display);
  font-size:      var(--text-label-lg);
  font-style:     normal;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color:          var(--color-text);
  border-bottom:  1px solid var(--color-graphite);
  padding-bottom: 2px;
  background:     none;
  border-radius:  0;
}
```

### Navegación (glassmorphism flotante)
```css
.nav {
  position:        fixed;
  top:             0;
  background:      rgba(250, 249, 246, 0.70);   /* surface al 70% */
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom:   none;   /* Sin bordes — regla "no-line" */
}
/* Sobre fondo oscuro (hero oscuro): */
.nav-dark {
  background: rgba(47, 52, 48, 0.70);
}
```

### Inputs
```css
/* Una sola línea baseline — sin caja, sin borde perimetral */
.input {
  background:    transparent;
  border:        none;
  border-bottom: 1px solid var(--color-outline);   /* #777C77 */
  border-radius: 0;
  padding:       12px 0;
  font-family:   var(--font-body);
  font-size:     var(--text-body-md);
  color:         var(--color-text);
  transition:    border-color 200ms ease;
}
.input:focus {
  outline:       none;
  border-color:  var(--color-primary);   /* #5F5E5E */
}
/* Label flotante — Manrope label-md */
.input-label {
  font-family:    var(--font-body);
  font-size:      var(--text-label-md);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color:          var(--color-text-muted);
  transition:     transform 200ms ease, font-size 200ms ease;
}
```

### Tarjetas editoriales
```css
/* Sin divisores. Separación por espacio vertical mínimo 40px. */
.card-editorial {
  background:    var(--color-surface-low);   /* #F4F4F0 */
  border-radius: 0;
  border:        none;
  padding:       40px;
}
```

---

## Elevación y profundidad

Sin sombras drop-shadow clásicas. La profundidad se logra por **capas de material**.

```css
/* Elemento flotante (modal, overlay) — sombra casi invisible */
--shadow-float: 0 16px 64px rgba(47, 52, 48, 0.04);

/* Ghost border de accesibilidad — se siente, no se ve */
--border-ghost: 1px solid rgba(175, 179, 174, 0.10);
```

---

## Espaciado

```css
:root {
  --space-4:    4px;
  --space-8:    8px;
  --space-12:   12px;
  --space-16:   16px;
  --space-24:   24px;
  --space-32:   32px;
  --space-40:   40px;   /* Ritmo mínimo entre elementos de lista */
  --space-48:   48px;
  --space-64:   64px;
  --space-80:   80px;
  --space-96:   96px;
  --space-128:  128px;
  --space-192:  192px;  /* Secciones de gran respiración */

  /* Secciones */
  --section-py:       128px;   /* Padding vertical estándar entre secciones */
  --section-py-sm:    80px;    /* Móvil */
  --section-px:       96px;    /* Lateral desktop */
  --section-px-sm:    24px;    /* Lateral móvil */
  --container-max:    1440px;
}
```

---

## Layout — Principios

```
ASIMETRÍA INTENCIONADA
  Los titulares pueden comenzar en 1/3 del ancho de pantalla.
  Una foto de piano puede extenderse fuera del borde de la pantalla.
  El grid es de 12 columnas pero los elementos no tienen por qué respetar
  los límites — romper el grid en momentos clave es el diseño.

SCALE BREAKERS
  Una foto de alta calidad del interior de un piano puede extenderse
  más allá del contenedor. Usa overflow-hidden en el padre con cuidado.

FOTOGRAFÍA MONOCROMO
  Toda fotografía debe ser en blanco y negro o muy desaturada.
  Aplicar filter: grayscale(85%) como mínimo.
  Una imagen puede aparecer sin filtro para máximo impacto visual — solo una.

DENSIDAD
  DENSITY:3 — Una idea por pantalla. Si una sección se siente "llena",
  necesita un 50% más de espacio.
```

---

## Motion

```css
:root {
  --ease-out:      cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out:   cubic-bezier(0.4, 0, 0.2, 1);
  --duration-fast: 150ms;
  --duration-base: 300ms;
  --duration-slow: 600ms;
}
/* Underline CTA animado desde el centro */
.btn-tertiary::after {
  content: '';
  display: block;
  width: 0;
  height: 1px;
  background: var(--color-graphite);
  transition: width var(--duration-base) var(--ease-out);
  margin: 0 auto;
}
.btn-tertiary:hover::after { width: 100%; }
```

---

## Logotipo tipográfico

```
Nombre:    ARMONÍA
Subtext:   ESCUELA DE PIANO · VALENCIA
Fuente:    Noto Serif 300 — tracking 0.2em — uppercase
Color:     var(--color-graphite-deep) sobre fondo claro
           var(--color-surface) sobre fondo oscuro
Subtext:   Manrope 400 — tracking 0.4em — uppercase — var(--color-text-muted)
```

No usar gold. No usar color alguno salvo los tokens de grafito e marfil.

---

## Tailwind config — extracto de tokens

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'surface':             '#FAF9F6',
        'surface-low':         '#F4F4F0',
        'surface-container':   '#EDEEEA',
        'surface-high':        '#E6E9E4',
        'surface-highest':     '#E0E4DE',
        'surface-white':       '#FFFFFF',
        'on-surface':          '#2F3430',
        'on-surface-variant':  '#5C605C',
        'text-muted':          '#505050',
        'on-primary':          '#FAF7F6',
        'primary':             '#5F5E5E',
        'primary-dim':         '#535252',
        'graphite':            '#2F3430',
        'graphite-deep':       '#1A1A1B',
        'outline':             '#777C77',
        'outline-variant':     '#AFB3AE',
        'error':               '#9F403D',
      },
      borderRadius: {
        DEFAULT: '0rem',
        lg:      '0rem',
        xl:      '0rem',
        full:    '9999px',   /* Solo para pills explícitos */
      },
      fontFamily: {
        display: ['Noto Serif', 'serif'],
        body:    ['Manrope', 'sans-serif'],
        label:   ['Manrope', 'sans-serif'],
      },
    },
  },
}
```

---

## Modos de color

```
MODO MARFIL (predeterminado — mayoría de páginas)
  fondo:   --color-surface (#FAF9F6)
  texto:   --color-text (#2F3430)
  Usar en: hero claro, cursos, equipo, método, contacto

MODO STONE (secciones alternadas)
  fondo:   --color-surface-low (#F4F4F0)
  texto:   --color-text (#2F3430)
  Usar en: citas destacadas, secciones de transición, footer

MODO GRAFITO (hero oscuro, si se usa imagen oscura)
  fondo:   --color-graphite (#2F3430)
  texto:   --color-text-inv (#FAF7F6)
  Usar en: solo para secciones de máximo impacto — usar con moderación
```

Regla de alternancia: nunca dos secciones del mismo modo seguidas.

---

## Notas críticas de aplicación

```
✗ NUNCA border-radius distinto de 0px en elementos estructurales
✗ NUNCA 1px solid border para seccionar — solo cambios de fondo
✗ NUNCA color dorado / amber / accent cálido — el grafito ES el acento
✗ NUNCA Cormorant Garamond — la fuente display es Noto Serif
✗ NUNCA DM Sans — la fuente body es Manrope
✗ NUNCA sombras drop-shadow visibles — solo --shadow-ambient al 4%
✗ NUNCA fotografía en color — siempre grayscale(85%) mínimo
✗ NUNCA layouts centrados en hero (DESIGN_VARIANCE:7)
✗ NUNCA raw hex en componentes — siempre var(--color-x)

✓ SIEMPRE 0px border-radius
✓ SIEMPRE separación por background-color shift
✓ SIEMPRE Noto Serif para display y headlines
✓ SIEMPRE Manrope para body, labels y navegación
✓ SIEMPRE asimetría en hero: texto a la izquierda, imagen a la derecha-overflow
✓ SIEMPRE uppercase + tracking amplio en labels Manrope
✓ SIEMPRE escala tipográfica dramática: display-lg dwarf body-md
✓ SIEMPRE fotografía B&W o muy desaturada
✓ SIEMPRE 50% más espacio del que parece necesario
```

---

*brand.md — Escuela Armonía · MU03 · Vitrina Studio · Actualizado 14 abril 2026*
*Referencia: DESIGN.md "The Resonant Interval" + design_specifications_color_type.html*
