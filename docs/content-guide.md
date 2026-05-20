# Guía de contenido

## Qué es una errata válida

Una entrada es válida cuando cumple las tres condiciones:

1. **La declaración original es atribuible** — tiene origen, autor o institución identificable, y año aproximado.
2. **La corrección refleja consenso documentado** — no es una opinión del sitio, es lo que la industria acepta actualmente. Si el debate sigue abierto, la entrada no está lista.
3. **La causa es factual** — explica por qué ocurrió el cambio sin sarcasmo ni juicio de valor.

## Qué NO es una errata válida

- Una opinión personal sobre una tecnología o práctica
- Un debate abierto donde no hay corrección establecida
- Una crítica disfrazada de corrección
- Algo que "todo el mundo sabe" pero nadie documentó

## Cómo escribir cada campo

### `declaration`
Cita directa o paráfrasis cercana. Siempre con atribución. Si no puedes citar la fuente, no la publiques.

Mal: `"Todo el mundo creía que los microservicios eran la solución"`
Bien: `"Los microservicios son la arquitectura correcta para aplicaciones modernas." — Martin Fowler et al., ~2014`

### `correction`
Estado actual del consenso. Sin "pero", sin "sin embargo", sin matices editoriales. Solo lo que la industria dice ahora.

### `cause`
Por qué cambió. Factual, sin ironía. El lector puede sacar sus propias conclusiones — no hace falta guiarlo.

### `status_since`
El año en que la corrección se volvió posición dominante. Aproximado está bien. Si no hay año claro, pon la década: `2020` para "en algún punto de los 2020s."

### `body` (opcional)
Solo si hay contexto que no cabe en los campos estructurados. Máximo 150 palabras. La mayoría de entradas no lo necesitan.

## Tono

El sitio no tiene voz. No hay "nosotros", no hay "creemos", no hay humor explícito. El humor, si existe, emerge del contraste entre la solemnidad del formato y lo que dice el contenido. No se escribe para ser gracioso — se escribe para ser preciso.

## Proceso para agregar una entrada

1. Crear `/content/erratas/nombre-en-kebab-case.md`
2. Completar todos los campos requeridos (`title`, `slug`, `type`, `declaration`, `origin`, `origin_year`, `correction`, `cause`, `status_since`, `tags`)
3. Verificar que al menos una `source` esté citada
4. El slug debe coincidir con el nombre del archivo

## Tipos de entrada

| Tipo | Cuándo usarlo |
|---|---|
| `posicion-revisada` | La industria decía X, ahora dice Y. Hay una corrección clara. |
| `promesa-incumplida` | Alguien prometió que X ocurriría. No ocurrió. |
| `prediccion-fallida` | Se pronosticó X. Pasó lo contrario o nada. |
| `consenso-disuelto` | Todos acordaban X. Ya no hay acuerdo. |
