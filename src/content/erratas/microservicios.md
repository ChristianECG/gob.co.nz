---
title: "Microservicios como arquitectura universal"
slug: microservicios
type: posicion-revisada
declaration: >
  "Los microservicios son la arquitectura correcta para aplicaciones modernas.
  Permiten escalar equipos y sistemas de forma independiente."
origin: "ThoughtWorks, Martin Fowler et al."
origin_year: 2014
correction: >
  Apropiados únicamente para organizaciones con equipos y dominios independientes
  bien definidos. En equipos pequeños o sistemas con bajo acoplamiento de datos,
  la complejidad operacional supera los beneficios.
cause: >
  Los casos de referencia originales (Netflix, Amazon) operaban a una escala y con
  una madurez organizacional que no es representativa. El overhead de red, el
  debugging distribuido y la coordinación de deploys fueron subestimados como
  costos reales en el caso general.
status_since: 2019
tags:
  - arquitectura
  - backend
  - distributed-systems
sources:
  - "https://martinfowler.com/bliki/MicroservicePremium.html"
  - "https://martinfowler.com/bliki/MonolithFirst.html"
---
