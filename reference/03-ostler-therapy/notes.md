# 03 — Ostler Therapy

- **URL analizada:** https://www.ostlertherapy.com/
- **Fecha:** 2026-08-18
- **Stack:** Squarespace (tipografía fluida — de ahí los `font-size` con decimales)
- **Viewport de medición:** 1440 × 900
- **Encargo específico:** extraer el estilo pero **sin los oscuros**. Brillante y vivo sí.

## De dónde sale la energía de este sitio

Esto es lo importante, porque es lo que hay que replicar. **No viene del fondo
oscuro.** Viene de cuatro decisiones independientes del color de base:

1. **Fotografía hipersaturada de borde a borde.** El hero es un campo de caléndulas naranjas y
   rojas, desenfocado, ocupando el 100% del viewport. Aporta casi toda la vitalidad.
2. **Un pill cítrico** (`#E1DF66`) como único CTA. Chillón, imposible de ignorar.
3. **Iconos de línea dibujados a mano** con destellos y estrellas de cuatro puntas.
   Arco de arcoíris, círculos de Venn, corazón, asterisco. Es lo que quita seriedad.
4. **Cursiva como énfasis dentro del titular.** «Relational therapy for *real*
   connection» — Instrument Serif recta con una sola palabra en cursiva.

El chocolate `#310902` es solo el lienzo sobre el que pasa todo eso. Se puede sustituir
sin perder nada. Es exactamente lo que hace la adaptación en `tokens.css`.

## Paleta original

| Color | Hex | Uso real |
|---|---|---|
| Chocolate casi negro | `#310902` | fondo dominante (10/22) y texto (216 usos) |
| Azul polvo | `#95BCD0` | segundo fondo estructural |
| Cítrico | `#E1DF66` | **el acento** — pill de todos los CTA |
| Crema | `#F3ECE3` | fondo claro y texto sobre oscuro |
| Naranja maravilla | `#E07338` | acento secundario, un solo botón |

## Forma

- **`border-radius: 300px`** en 10 de 13 radios medidos. Pill total, sin excepción.
- **`30px`** en tarjetas e imágenes.
- **Cero sombras.** Ni una en toda la página. La profundidad es color plano.
- Color blocking sin degradados ni transiciones.

## Tipografías

| Rol | Fuente | Licencia | Nota |
|---|---|---|---|
| Display | **Instrument Serif** 400 + *italic* | Google Fonts, libre | la cursiva es la firma |
| UI / CTA | **Oswald** 400 uppercase | Google Fonts, libre | condensada, solo CTA |
| Cuerpo | **Lato** 400/700 | Google Fonts, libre | tracking **negativo** (-0.01em) |
| Logo | display groovy/retro | servido como imagen, no webfont | ver alternativas abajo |

Las tres webfonts son libres, así que este sitio no tiene el problema de licencia
que tenía Manhattan Wellness con Agne.

El logo usa un display retro de letras blandas que no está entre las fuentes cargadas
(va como imagen). Alternativas libres con ese aire: **Rubik Puddles**,
**Bagel Fat One**, **Climate Crisis**.

## Problema de accesibilidad en el original

El CTA de la cabecera es cítrico `#E1DF66` con texto azul polvo `#95BCD0`. Ese par se
queda en **~1.4:1** de contraste: prácticamente ilegible. En la adaptación lo cambié a
cítrico con tinta verde oscura, que da **~9:1**.

## La adaptación luminosa

`tokens.css` trae dos bloques. `[data-palette="source"]` documenta el original;
`:root` es la propuesta para Johanna:

- El chocolate se sustituye por **verde savia** `#C4DBC4` como segundo estructural.
- El azul cielo sube a `#A8D0E2` y gana un velo suave `#DCEEF5`.
- Los acentos se **saturan más**, no menos: cítrico `#E4E356`, naranja `#F07A32`,
  coral `#F2593F` (sacado de las propias flores del hero).
- La tinta pasa a verde muy oscuro `#1F3D2B` en vez de chocolate.

Ritmo propuesto, sin ningún bloque oscuro:

```
cream → sky → cream → sage → FOTO de borde a borde → sky-soft → cream
```

## Encaje con el brief de Johanna

De las tres referencias, esta es la que más se acerca a «dynamic, engaging, warm, zero
aburrida» del brief. Los destellos y los iconos de línea son el recurso que faltaba en
las otras dos, que son más sobrias. Con la paleta aclarada, es la base más prometedora.

## Archivos

- `tokens.css` — original + adaptación luminosa
- `hero.webp` — captura de la parte superior
