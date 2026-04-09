# Landing Starter Kit

Reusable React starter for building landing pages fast.

## Included

- React + Vite
- React Router (`/` and `/components` out of the box)
- Tailwind CSS v4 support
- Design tokens (`src/theme/tokens.css`)
- Reusable components (`primitives`, `composites`, `layout`, `blocks`)
- Loop carousel (autoplay + drag)
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
