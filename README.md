# gob.co.nz — Boletín

Fe de erratas de la industria tecnológica. Correcciones documentadas a posiciones, predicciones y promesas que no se sostuvieron.

→ **[gob.co.nz](https://gob.co.nz)**

---

## Qué es esto

Cada entrada del Boletín documenta uno de cuatro casos:

| Tipo | Descripción |
|---|---|
| `posicion-revisada` | La industria decía X. Ahora dice Y. |
| `promesa-incumplida` | Alguien dijo que X ocurriría. No ocurrió. |
| `prediccion-fallida` | Se pronosticó X. Ocurrió lo contrario. |
| `consenso-disuelto` | Todos acordaban X. Ya no lo hacen. |

El tono es institucional. Sin opinión, sin sarcasmo. El formato hace el trabajo.

---

## Desarrollo

```bash
pnpm install
pnpm dev
```

El servidor de desarrollo corre en `http://localhost:4321`. Pagefind no está disponible en desarrollo — solo en el build.

```bash
pnpm build     # genera dist/ y construye el índice de búsqueda
pnpm preview   # sirve el build estático localmente
```

---

## Agregar una entrada

Crear un archivo `.md` en `src/content/erratas/` con el slug como nombre:

```
src/content/erratas/nombre-del-slug.md
```

Frontmatter requerido:

```yaml
---
title: "Título de la entrada"
slug: nombre-del-slug
type: posicion-revisada   # ver tabla arriba
declaration: >
  "La declaración original, entre comillas, con atribución implícita."
origin: "Quien lo dijo"
origin_year: 2016
correction: >
  El estado actual del consenso. Sin opinión propia.
cause: >
  Por qué el consenso cambió. Factual, no editorial.
status_since: 2021
tags:
  - etiqueta-en-kebab-case
sources:
  - "https://..."
---
```

Reglas:
- `declaration` debe poder atribuirse. Si no tiene autor, no está lista.
- `correction` refleja consenso documentado, no la opinión del autor.
- `cause` es factual. Sin sarcasmo.
- Las fuentes deben ser URLs que existen y son accesibles.
- El cuerpo markdown es opcional y para contexto que no cabe en los campos. Máximo 150 palabras.

---

## Stack

- [Astro 6](https://astro.build) — generación estática
- [Tailwind CSS v4](https://tailwindcss.com) — estilos vía `@tailwindcss/vite`
- [iA Writer Quattro](https://github.com/iaolo/iA-Fonts) — tipografía
- [Pagefind](https://pagefind.app) — búsqueda client-side estática
- GitHub Pages — despliegue

---

## Despliegue

El sitio se despliega automáticamente en cada push a `main` via GitHub Actions. El workflow está en `.github/workflows/deploy.yml`.

---

## Feeds y datos

| Endpoint | Formato |
|---|---|
| `/rss.xml` | RSS 2.0 |
| `/feed.json` | JSON Feed 1.1 |
| `/data.json` | Dataset completo en JSON |
| `/sitemap-index.xml` | Sitemap XML |

---

## Contribuir

Las contribuciones son bienvenidas via pull request. Cada entrada nueva debe cumplir los criterios de contenido descritos arriba: atribuible, corrección documentada, causa factual, fuentes accesibles.

Ver [cómo contribuir](https://gob.co.nz/como-contribuir) para la guía completa.

---

Autor: [Christian Elías](https://christianecg.com)
