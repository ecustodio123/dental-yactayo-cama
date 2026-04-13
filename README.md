# Landing Starter Kit

Reusable React starter for building landing pages fast.

## Included

- React + Vite
- React Router (`/` and `/components` out of the box)
- Tailwind CSS v4 support
- Design tokens (`src/theme/tokens.css`)
- Reusable components (`primitives`, `composites`, `layout`, `blocks`)
- Loop carousel (click + drag, with mobile autoplay)
- Cloudflare SPA fallback (`public/_redirects`)

## Structure

```txt
src/
  app/
  components/
    primitives/
    composites/
    layout/
    blocks/
  data/
  pages/
  theme/
```

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## EmailJS Setup (white-label)

Este starter incluye integración de EmailJS en `ContactBlock`.

1. Copia variables de entorno:

```bash
cp .env.example .env.local
```

2. Completa tus valores en `.env.local`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

3. Reinicia el servidor (`npm run dev`) si estaba corriendo.

Notas:

- `.env.local` no se versiona.
- `.env.example` sí se versiona para mantener la plantilla.
- Si falta configuración, el formulario muestra un mensaje de `configError`.

## Reusable Components Detected From `aliaga-salud`

Componentes recomendados para portar cuando un nuevo proyecto lo necesite:

- `TrustStatsBlock`: métricas de confianza para secciones above-the-fold.
- `CarePathBlock`: pasos del proceso (ideal para servicios médicos/consultoría).
- `FaqBlock`: preguntas frecuentes reutilizables por rubro.
- `StaffBlock` + `StaffCard`: perfiles de equipo/profesionales.
- `ContactBlock` variante con panel de canales (teléfono, WhatsApp, dirección, horario).

Estos bloques son opcionales y deben activarse según el tipo de landing que estés construyendo.

## Deploy to Cloudflare Pages

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`

This project includes:

```txt
public/_redirects
/* /index.html 200
```

for SPA route refresh support.

## White App Workflow (usar este repo como base)

Este proyecto está pensado como **white app / starter kit**:

1. Clonas este repo base.
2. Creas un nuevo proyecto (nuevo nombre, nuevo branding, nuevo contenido).
3. Publicas ese proyecto en **otro repositorio** de GitHub.
4. Mantienes este repo como base reusable.

### Cambiar remotos sin tocar el repo base

Si ya clonaste `landing-starter-kit` y quieres publicar en un repo nuevo:

```bash
# 1) Renombrar remoto actual (base) para conservar referencia
git remote rename origin upstream

# 2) Agregar el repo nuevo como origin
git remote add origin https://github.com/<tu-usuario>/<nuevo-repo>.git

# 3) Verificar
git remote -v
```

Debes ver:

- `origin` -> repo nuevo (destino del proyecto actual)
- `upstream` -> `landing-starter-kit` (base)

### Primer push al repo nuevo

```bash
git add .
git commit -m "Initial <nombre-del-proyecto> landing"
git push -u origin main
```

Con esto publicas en el repo nuevo y **no sobrescribes** el starter base.

### Checklist rápido (20 segundos)

Antes de hacer `git push`:

```bash
git remote -v
git branch --show-current
```

Confirma:

- el branch actual es el esperado (ej. `main`)
- `origin` apunta al repo del proyecto actual
- `upstream` apunta al repo base `landing-starter-kit`

## Prompt Maestro Para Nuevos Repos White-Label

Usa este prompt al abrir un chat nuevo en el repo clonado/customizado.

### Prompt Maestro (copiar y pegar)

```txt
Actúa como mi partner técnico para este repositorio.

Contexto obligatorio:
- Este repositorio es un proyecto derivado de un white-label starter.
- Este repo actual es independiente del repo base.
- Nunca debes asumir cambios en el repo base; trabaja solo en este repo actual.
- Objetivo general: construir un sitio para {{tipoDeProyecto}}.

Modo de arquitectura del sitio (obligatorio):
- Site mode: {{siteMode}} 
  - Opciones: `single-page` | `multi-page` | `hybrid`
- Navegación principal: {{navigationMode}}
  - Opciones: `anchors` | `routes` | `mixed`
- Definición explícita de menú/header:
  - {{headerMap}}
  - Ejemplo anchors: `Inicio->/#home, Servicios->/#services, Reseñas->/#testimonials, Contacto->/#contact`
  - Ejemplo routes: `Inicio->/, Servicios->/servicios, Nosotros->/nosotros, Contacto->/contacto`
- Regla de scroll/offset para sticky header:
  - {{headerOffsetStrategy}}
  - Opciones: `css-only` | `dynamic-js` | `both`
- Rutas permitidas adicionales (si aplica):
  - {{rutasAdicionales}}
  - Ejemplo: `/privacy, /terms, /gracias`

Objetivo del proyecto:
- Marca: {{nombreMarca}}
- Industria: {{tipoDeProyecto}}
- Público objetivo: {{publicoObjetivo}}
- Idiomas: {{idiomas}} (ej: `en, es`)
- CTA principal: {{ctaPrincipal}}
- URL/acción del CTA principal: {{ctaPrincipalDestino}}
- CTA secundario (opcional): {{ctaSecundario}}
- Estilo visual deseado: {{estiloVisual}}
- Secciones requeridas: {{seccionesRequeridas}}

Contenido y datos:
- Fuente de contenido: {{contentSource}}
  - Opciones: `placeholder` | `brand-provided` | `mixed`
- Datos de negocio confirmados:
  - Teléfono: {{telefono}}
  - WhatsApp: {{whatsapp}}
  - Dirección: {{direccion}}
  - Horario: {{horario}}
- Integraciones:
  - Formulario: {{formMode}}
  - Opciones: `emailjs` | `webhook` | `disabled`

Reglas de trabajo:
1. Mantén enfoque white-label reusable: componentes configurables y contenido desacoplado.
2. Antes de editar, revisa estructura y propone cambios concretos por archivo.
3. Implementa directamente los cambios, luego valida con lint/build.
4. Si algo requiere credenciales (ej: EmailJS), usa `.env.local` y conserva `.env.example` como plantilla.
5. Prioriza responsive (mobile-first) y accesibilidad básica.
6. Si detectas mejoras reutilizables para futuros proyectos, proponlas como bloques opcionales.
7. Si `siteMode=single-page`, evita crear rutas nuevas salvo `{{rutasAdicionales}}`.
8. Si `siteMode=multi-page`, define y respeta estructura de rutas/vistas.
9. Si `navigationMode` usa anchors, asegura offset correcto con header sticky.

Formato de respuesta esperado:
- Resumen corto de lo que harás.
- Cambios aplicados por archivo.
- Validación ejecutada (lint/build).
- Siguientes pasos recomendados.
```

### Prompt Corto (rápido)

```txt
Este repo es una derivación white-label independiente del starter base. Quiero construir una landing para {{tipoDeProyecto}} con estilo {{estiloVisual}} e idiomas {{idiomas}}. Trabaja con enfoque reusable, implementa cambios directamente, y valida con lint/build.
```

### Ejemplos de uso

Ejemplo 1 (Clínica):

```txt
Este repo es una derivación white-label independiente del starter base. Quiero construir una landing para clínica de salud integral con estilo profesional/minimalista e idiomas es,en. Secciones: Hero, Especialidades, Equipo médico, FAQs, Contacto con EmailJS. Trabaja con enfoque reusable, implementa cambios directamente, y valida con lint/build.
```

Ejemplo 2 (Salón de belleza):

```txt
Este repo es una derivación white-label independiente del starter base. Quiero construir una landing para salón de belleza con estilo elegante/moderno e idiomas es,en. Secciones: Hero, Servicios, Galería, Testimonios, Contacto con WhatsApp y EmailJS. Trabaja con enfoque reusable, implementa cambios directamente, y valida con lint/build.
```

Ejemplo 3 (Servicio de limpieza):

```txt
Este repo es una derivación white-label independiente del starter base. Quiero construir una landing para servicio de limpieza residencial/comercial con estilo limpio/corporativo e idiomas es,en. Secciones: Hero, Planes, Cobertura, Testimonios, FAQs, Contacto. Trabaja con enfoque reusable, implementa cambios directamente, y valida con lint/build.
```

### Variables sugeridas para reemplazar

- `{{tipoDeProyecto}}`: clínica, salón de belleza, limpieza, abogado, etc.
- `{{nombreMarca}}`: nombre comercial final.
- `{{publicoObjetivo}}`: segmento principal.
- `{{idiomas}}`: `es,en` o `en` únicamente.
- `{{ctaPrincipal}}`: “Agendar cita”, “Solicitar cotización”, etc.
- `{{estiloVisual}}`: minimalista, elegante, corporativo, moderno.
- `{{seccionesRequeridas}}`: lista de bloques obligatorios.
