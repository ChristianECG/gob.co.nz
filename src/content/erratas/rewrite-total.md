---
title: "El rewrite total como solución a deuda técnica"
slug: rewrite-total
type: prediccion-fallida
declaration: >
  "Reescribir el sistema desde cero eliminará la deuda técnica acumulada
  y permitirá avanzar más rápido."
origin: "Práctica recurrente en equipos de ingeniería, sin origen único atribuible"
origin_year: 1990
correction: >
  Los rewrites totales reproducen la deuda técnica original en el nuevo sistema,
  frecuentemente con retrasos de meses o años y pérdida de casos edge documentados
  implícitamente en el código anterior. La mayoría no cumple las expectativas
  de velocidad post-lanzamiento.
cause: >
  El código antiguo acumula soluciones a problemas que ya no son visibles como
  problemas. Al reescribir, esos problemas se redescubren en producción.
  La deuda técnica que se ve es menor que la que no se ve.
status_since: 2000
tags:
  - arquitectura
  - deuda-técnica
  - ingeniería
sources:
  - "https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/"
---
