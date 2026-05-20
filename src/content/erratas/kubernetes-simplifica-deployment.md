---
title: "Kubernetes simplifica el despliegue de aplicaciones"
slug: kubernetes-simplifica-deployment
type: promesa-incumplida
declaration: >
  "Kubernetes abstrae la complejidad de infraestructura y simplifica
  el despliegue y operación de aplicaciones en producción."
origin: "Google, CNCF, 2014–2016"
origin_year: 2015
correction: >
  Kubernetes introduce una capa de complejidad operacional significativa.
  Es apropiado para organizaciones con equipos de plataforma dedicados y
  cargas de trabajo que justifican la orquestación. Para la mayoría de
  aplicaciones, opciones gestionadas (Railway, Render, Fly.io) o
  serverless tienen menor costo operacional.
cause: >
  Kubernetes fue diseñado para resolver los problemas de infraestructura
  de Google, que opera a una escala excepcional. Su modelo de configuración
  declarativa y la superficie de API (600+ tipos de recursos en 1.28)
  requieren especialización que la mayoría de equipos no tiene ni necesita.
status_since: 2021
tags:
  - kubernetes
  - infraestructura
  - devops
sources:
  - "https://pythonspeed.com/articles/dont-need-kubernetes/"
  - "https://dev.to/anderson_leite/kubernetes-overkill-when-your-architecture-is-more-complex-than-your-business-17gn"
---
