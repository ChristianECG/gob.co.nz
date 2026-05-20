---
title: "Serverless como arquitectura universal para backend"
slug: serverless-arquitectura-universal
type: posicion-revisada
declaration: >
  "Con serverless, no necesitas gestionar servidores. Es la arquitectura
  por defecto para el backend moderno: escala automáticamente y solo
  pagas por lo que usas."
origin: "Amazon Web Services, Google Cloud, 2016–2018"
origin_year: 2017
correction: >
  Serverless es apropiado para cargas de trabajo event-driven, pipelines
  de procesamiento y APIs de bajo tráfico con alta variabilidad. Para
  servicios de tráfico sostenido, las funciones con cold starts, el
  vendor lock-in, la complejidad de debugging y el costo a escala
  superan los beneficios.
cause: >
  Los cold starts introducen latencia impredecible. El modelo de ejecución
  stateless complica patrones comunes (websockets, sesiones, caché local).
  El debugging y el observability son significativamente más difíciles que
  en aplicaciones de larga ejecución. A escala, el costo puede ser
  superior al de instancias dedicadas.
status_since: 2020
tags:
  - serverless
  - arquitectura
  - cloud
  - backend
sources:
  - "https://builtin.com/articles/serverless-architecture-challenges"
  - "https://www.prisma.io/dataguide/serverless/serverless-challenges"
---
