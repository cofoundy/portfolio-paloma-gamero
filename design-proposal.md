# Propuesta de Diseño: Paloma Gamero Kubota

## Identidad
Paloma es una creadora visual bilingüe de herencia peruana-japonesa que construye puentes culturales entre marcas y comunidades hispanas en Estados Unidos. No es solo una marketer — es una storyteller visual que combina diseño gráfico, producción audiovisual y estrategia bilingüe para conectar con audiencias multiculturales. A punto de graduarse (mayo 2026), su portfolio debe posicionarla como una profesional lista para el mercado, no como una estudiante.

## Audiencia
- Hiring managers de agencias de marketing y empresas con presencia multicultural en US
- Directores de marketing que buscan talento bilingüe EN/ES
- Clientes potenciales de marketing para comunidades hispanas

## Metáfora Visual
El mundo de Paloma se siente como una **galería moderna de arte pop** — limpia y sofisticada pero con destellos de color que capturan atención. Como un feed de Instagram bien curado: cada pieza tiene propósito, cada color comunica. La intersección entre profesionalismo americano y calidez latina.

## Paleta (6 colores)

**Referencia:** Paloma envió como ejemplo judithdavila.cofoundy.dev — estilo clean/minimal, blanco base, grays, accent turquesa, IBM Plex Mono. Tomamos esa estética como punto de partida pero con calidez y personalidad propia.

```typescript
colors: {
  primaryDark: "#111827",    // Gray-900 — headings, footer bg. Clean y profesional como el ejemplo.
  primary: "#374151",        // Gray-700 — texto secundario, bordes
  primaryLight: "#e5e7eb",   // Gray-200 — shimmer, lines, dividers
  accent: "#0d9488",         // Teal-600 — similar al turquesa del ejemplo pero ligeramente más cálido. CTAs, stats, dots.
  surface: "#f9fafb",        // Gray-50 — section backgrounds, cards
  surfaceLight: "#ffffff",   // White — hero, main bg
}
```

**Justificación:** Paloma eligió el estilo de Judith (clean/minimal/turquesa). Mantenemos la estética blanca + grays + accent teal, pero con teal ligeramente más cálido (#0d9488 vs #0891b2) para reflejar su personalidad approachable. La base neutra permite que su trabajo visual (fotos, gráficos) sea el protagonista.

## Tipografía
- **Headings:** IBM Plex Mono (600, 700) — monospace como el ejemplo que le gustó. Da un toque tech-moderno a marketing.
- **Body:** Inter (400, 500) — legibilidad máxima para el contenido largo. Contraste serif vs mono.

## Efecto Visual Único
**"Campaign Showcase"** — galería interactiva de trabajos con hover que revela detalles de la campaña (cliente, tipo de contenido, resultado). Cada pieza visual tiene una card que al hover muestra un overlay con contexto. Esto es único porque muestra su TRABAJO real, no solo texto describiendo lo que hizo.

**Visualización de idiomas** — tres barras animadas que muestran EN/ES/DE con nivel de proficiencia. Nativo en 2, avanzado en 1. Diferenciador visual inmediato.

## Secciones Propuestas (en orden)

### 1. Hero — "The Bridge Builder"
```
┌─────────────────────────────────┐
│  MOBILE (375px)                 │
│  ┌───────────────────────────┐  │
│  │     [Foto Paloma]         │  │
│  │     circle crop, large    │  │
│  └───────────────────────────┘  │
│                                 │
│  PALOMA GAMERO                  │
│  Bilingual Marketing            │
│  Creative                       │
│                                 │
│  "Connecting brands with        │
│   multicultural communities     │
│   through visual storytelling"  │
│                                 │
│  ┌─────┐ ┌─────┐ ┌─────┐      │
│  │ 10  │ │  3  │ │  3  │      │
│  │accts│ │lang │ │roles│      │
│  └─────┘ └─────┘ └─────┘      │
│                                 │
│  [View My Work]  [LinkedIn]    │
└─────────────────────────────────┘

DESKTOP:
┌──────────────────────────────────────────────┐
│  Left 60%              │  Right 40%          │
│  PALOMA                │  ┌──────────────┐   │
│  GAMERO                │  │              │   │
│                        │  │  [Foto]      │   │
│  Bilingual Marketing   │  │  portrait    │   │
│  Creative              │  │              │   │
│                        │  └──────────────┘   │
│  "Connecting brands.." │                     │
│                        │                     │
│  [10 accounts] [3 lang]│                     │
│  [View Work] [LinkedIn]│                     │
└──────────────────────────────────────────────┘
```
**Por qué:** Hero con stats de impacto inmediato. Los 10 accounts gestionados y 3 idiomas son su diferenciador. Foto prominente porque su imagen profesional es parte de su marca.

### 2. Campaign Showcase — "My Work" (SECCIÓN ÚNICA)
```
MOBILE:
┌─────────────────────────────────┐
│  MY WORK                        │
│  "Visual campaigns that         │
│   connect cultures"             │
│                                 │
│  [Filter: All|Graphics|Photo|   │
│   Video]                        │
│                                 │
│  ┌───────────────────────────┐  │
│  │  [Campaign image]         │  │
│  │  ────────────────────     │  │
│  │  Fresco Marketing         │  │
│  │  Social media campaign    │  │
│  │  for La Michoacana KC     │  │
│  └───────────────────────────┘  │
│                                 │
│  ┌───────────────────────────┐  │
│  │  [Campaign image]         │  │
│  │  ────────────────────     │  │
│  │  HBSA Event               │  │
│  │  Promotional materials    │  │
│  └───────────────────────────┘  │
│                                 │
│  (más items...)                 │
└─────────────────────────────────┘

DESKTOP:
┌──────────────────────────────────────────────┐
│  MY WORK                                     │
│  ┌──────┐ ┌──────┐ ┌──────┐                │
│  │ img  │ │ img  │ │ img  │                │
│  │      │ │      │ │      │                │
│  │hover:│ │      │ │      │                │
│  │overlay│ │      │ │      │                │
│  │+info │ │      │ │      │                │
│  └──────┘ └──────┘ └──────┘                │
│  ┌──────┐ ┌──────┐ ┌──────┐                │
│  │ img  │ │ img  │ │ img  │                │
│  └──────┘ └──────┘ └──────┘                │
└──────────────────────────────────────────────┘
```
**Por qué:** Esta es LA sección que hace este portfolio Premium. Paloma dijo que tiene gráficos, fotos y videos. Su trabajo visual ES su carta de presentación. Grid con hover overlay mostrando contexto de cada pieza. NOTA: Necesitamos sus assets reales — por ahora diseñamos la estructura y usamos placeholders que se reemplazarán.

### 3. About — "The Story"
```
MOBILE:
┌─────────────────────────────────┐
│  ABOUT ME                       │
│                                 │
│  ┌───────────────────────────┐  │
│  │ "Marketing is about       │  │
│  │  telling stories that     │  │
│  │  resonate across          │  │
│  │  cultures"                │  │
│  └───────────────────────────┘  │
│                                 │
│  [Bio paragraph: peruana-       │
│   japonesa, Kansas, bilingual   │
│   marketing, connects brands    │
│   with Hispanic communities]    │
│                                 │
│  🌐 EN │ 🌐 ES │ 🌐 DE        │
│  Native  Native  Advanced       │
│  ████████ ████████ ██████░░     │
└─────────────────────────────────┘
```
**Por qué:** Quote que posiciona + bio concisa + language visualization. Los idiomas son un diferenciador enorme en marketing US.

### 4. Experience — "The Journey"
```
MOBILE:
┌─────────────────────────────────┐
│  EXPERIENCE                     │
│                                 │
│  ● Fresco Marketing             │
│  │ Marketing Associate          │
│  │ Jun 2025 - Present           │
│  │ ┌─────────────────────────┐  │
│  │ │ 10 accounts managed     │  │
│  │ │ Bilingual campaigns     │  │
│  │ │ Photo + video direction │  │
│  │ └─────────────────────────┘  │
│  │                              │
│  ● HBSA - Marketing Director   │
│  │ Aug 2023 - Present           │
│  │ ┌─────────────────────────┐  │
│  │ │ Campaigns, events       │  │
│  │ └─────────────────────────┘  │
│  │                              │
│  ● KU Peruvian Assoc            │
│  │ Marketing Director           │
│  ○                              │
└─────────────────────────────────┘
```
**Por qué:** Timeline vertical con cards expandibles. Cada posición tiene highlight bullets, no párrafos. Limpio y escaneable.

### 5. Skills & Tools — "The Toolkit"
```
MOBILE:
┌─────────────────────────────────┐
│  TOOLKIT                        │
│                                 │
│  ┌──────────┐ ┌──────────┐     │
│  │ Photoshop│ │  Canva   │     │
│  └──────────┘ └──────────┘     │
│  ┌──────────┐ ┌──────────┐     │
│  │  Excel   │ │  Asana   │     │
│  └──────────┘ └──────────┘     │
│  ┌──────────┐                   │
│  │  Teams   │                   │
│  └──────────┘                   │
│                                 │
│  Marketing · Graphic Design ·   │
│  Social Media · Video · Photo   │
└─────────────────────────────────┘
```
**Por qué:** Sección compacta. Tools como pills/cards con iconos. Competencies como tags fluidos debajo.

### 6. Education
```
┌─────────────────────────────────┐
│  EDUCATION                      │
│                                 │
│  ┌───────────────────────────┐  │
│  │ 🎓 University of Kansas   │  │
│  │ B.S. Marketing            │  │
│  │ + Professional Selling    │  │
│  │ GPA 3.5 · May 2026       │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```
**Por qué:** Una sola institución, una card limpia. No necesita más.

### 7. Footer/Contact
```
┌─────────────────────────────────┐
│  ████████████████████████████   │
│  LET'S CONNECT                  │
│                                 │
│  palomaapgk@yahoo.com          │
│  [LinkedIn] [Instagram]         │
│                                 │
│  Lawrence, KS · Kansas City, MO│
│  ████████████████████████████   │
└─────────────────────────────────┘
```
**Por qué:** Dark footer con accent color. Simple y directo.

## Secciones que NO incluir
- **Services** — No es freelancer, es empleada/estudiante. No vende servicios directos.
- **CTA shimmer** — No tiene servicio que vender. El CTA es "contáctame" en el footer.
- **Testimonials** — No tiene testimonios de clientes aún.
- **Blog** — No tiene contenido de blog/publicaciones.

## Resumen de lo que hace este portfolio PREMIUM
1. **Campaign Showcase** — galería visual interactiva de su trabajo real (SECCIÓN ÚNICA)
2. **Language Visualization** — barras animadas EN/ES/DE (efecto único)
3. **Stats en Hero** — 10 accounts, 3 languages, impacto inmediato
4. **Paleta warm terracotta + navy** — evoca multiculturalidad con sofisticación
5. **Plus Jakarta Sans** — tipografía moderna que dice "creative professional"
