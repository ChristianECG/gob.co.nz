# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

---

## Concept

**gob.co.nz** is a static site that publishes a *fe de erratas* — an official corrections register for the tech industry.

Each entry documents one of four things:

- A **position the industry revised** (it used to say X, now it says Y)
- A **promise that was never fulfilled** (someone said X would happen, it didn't)
- A **prediction that failed** (forecasted X, got the opposite)
- A **consensus that dissolved** (everyone agreed on X, they no longer do)

The tone is institutional and dry. No opinion is stated. The format does the talking.

The goal is shareable individual entries — each one a canonical URL that someone sends in a conversation when the topic comes up. `gob.co.nz/errata/microservicios` is a reference, not an article.

---

## Tech stack

- **Framework**: Astro (static generation, zero client-side JS unless needed)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite`
- **Fonts**: to be decided — government document aesthetic (see Design section)
- **Content**: Markdown with YAML frontmatter, Astro Content Layer API
- **Package manager**: pnpm
- **Search**: Pagefind (client-side, static)
- **Deployment**: GitHub Pages or similar static host

---

## URL structure

```
/                       → index — all erratas, filterable by type and year
/errata/:slug           → individual entry
/tipo/:type             → entries filtered by type
/fuente/:source         → entries filtered by source (e.g. "thoughtworks", "wef")
```

Slugs are the markdown filename without extension. They must be unique and use kebab-case in Spanish.

---

## Content schema

Each entry lives in `/content/erratas/` as a `.md` file.

```yaml
---
title: "Microservicios como arquitectura universal"
slug: microservicios
type: posicion-revisada         # posicion-revisada | promesa-incumplida | prediccion-fallida | consenso-disuelto
declaration: >
  "Los microservicios son la arquitectura correcta
  para aplicaciones modernas a escala."
origin: "ThoughtWorks, Martin Fowler et al."
origin_year: 2014
correction: >
  Apropiados únicamente para organizaciones con equipos y dominios
  independientes bien definidos. Añaden complejidad operacional
  significativa que no se justifica en equipos pequeños o sistemas
  con bajo acoplamiento de datos.
cause: >
  Complejidad operacional subestimada en los casos de referencia originales.
  Overhead de red, debugging distribuido y coordinación de deploys ignorados
  como costos reales.
status_since: 2019              # year when the correction became consensus
tags:
  - arquitectura
  - backend
  - distributed-systems
sources:                        # optional, list of URLs or citations
  - "https://martinfowler.com/articles/microservice-premium.html"
---

Cuerpo opcional en markdown. Solo cuando hay contexto que no cabe en los campos.
La mayoría de entradas no necesitan cuerpo — los campos estructurados son suficientes.
```

### Types

| Slug | Label | Meaning |
|---|---|---|
| `posicion-revisada` | Posición revisada | The industry used to say X, now says Y |
| `promesa-incumplida` | Promesa incumplida | Someone said X would happen, it didn't |
| `prediccion-fallida` | Predicción fallida | X was forecasted, the opposite occurred |
| `consenso-disuelto` | Consenso disuelto | Everyone agreed on X, no longer do |

---

## Design direction

The aesthetic is a **government publication** — official, cold, precise. Not a blog.

Key decisions:

- **Light background** — white or near-white (`#f8f8f6`). This differentiates it from `octa.page` (dark) and `atom.site` (dark). Government documents are printed on white.
- **Serif or mono for body** — something that reads like a bureaucratic document. Consider `DM Mono` or `Geist Mono` for metadata, a neutral sans for body text.
- **No decorative elements** — no gradients, no illustrations, no icons beyond what's structural
- **Color used only for type classification** — each entry type gets one muted color label, nothing else
- **Dense information layout** on index — table format, not cards
- **Individual entry pages** look like a printed form: fields are labeled, values are set, nothing more

The user has `octa.page` as a reference for technical precision and `atom.site` for dark SaaS. This site should feel like neither — more like a government gazette that happens to be on the web.

---

## Index page behavior

- Lists all entries in a table: date added, type badge, title, origin, status_since
- Filterable by `type` — URL updates to `/tipo/:type`
- No pagination needed until entries exceed ~200
- Most recent corrections at top by default

---

## Individual entry page

Renders the structured fields as a formal document. Layout:

```
[TYPE BADGE]                              [SLUG / FOLIO]

TITLE
────────────────────────────────────────────────────

Declaración original
  "[declaration]"
  — [origin], [origin_year]

Corrección oficial
  [correction]

Causa
  [cause]

Vigente desde: [status_since]
Fuentes: [sources list, if present]

────────────────────────────────────────────────────
[body markdown if present]
```

No sidebar. No related entries widget. No comments. Just the document.

---

## Content guidelines

- `declaration` must be a direct quote or close paraphrase, attributed. If it can't be attributed, don't publish it.
- `correction` states the current consensus position — not an opinion, not "some say." If there's no clear consensus correction, the entry isn't ready.
- `cause` is factual, not sarcastic. The tone of the whole site depends on this field staying dry.
- Body markdown is for context that can't fit in the structured fields. Keep it short (under 150 words). Most entries have no body.
- Tags are lowercase, kebab-case, in Spanish or in the canonical technical term (e.g. `distributed-systems` not `sistemas-distribuidos`).

---

## Content pipeline

All entries are markdown files in `/content/erratas/`. New entries are added by creating a new `.md` file. No database, no CMS. Contributions via PR are the intended model eventually.

---

## Example entries

See `/content/erratas/` for seed entries that illustrate the format.

---

## What this is NOT

- Not a blog. No author bylines, no "written by."
- Not opinion. The correction must reflect documented consensus, not the site's view.
- Not comprehensive. Entries are added when they're ready — well-sourced and correctable.
- Not sarcastic in tone, even when the subject is absurd. The format carries the humor.
