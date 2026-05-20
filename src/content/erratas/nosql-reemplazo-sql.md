---
title: "NoSQL como reemplazo de bases de datos relacionales"
slug: nosql-reemplazo-sql
type: posicion-revisada
declaration: >
  "Las bases de datos relacionales no pueden escalar para la web moderna.
  NoSQL es el futuro del almacenamiento de datos."
origin: "MongoDB, Amazon DynamoDB, y comunidad web scale, ~2010"
origin_year: 2010
correction: >
  Las bases de datos relacionales, en particular PostgreSQL, siguen siendo
  el estándar para la mayoría de aplicaciones. NoSQL es apropiado para
  patrones de acceso específicos; no es un reemplazo general.
cause: >
  Los casos de referencia originales (Amazon, Google, Facebook) operaban
  a una escala que justificaba los trade-offs de NoSQL. Para aplicaciones
  típicas, la consistencia eventual, la ausencia de transacciones ACID y
  la gestión manual de esquemas añaden complejidad que no se justifica.
  PostgreSQL incorporó además soporte nativo de JSON, absorbiendo parte
  del caso de uso de documentos.
status_since: 2018
tags:
  - bases-de-datos
  - backend
  - arquitectura
sources:
  - "https://www.mongodb.com/resources/basics/databases/nosql-explained/nosql-vs-sql"
  - "https://martinfowler.com/bliki/PolyglotPersistence.html"
---
