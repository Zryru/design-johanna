# 01 — Manhattan Wellness

- **URL analizada:** https://manhattanwellness.org/therapy-in-manhattan/
- **Fecha:** 2026-08-18
- **Stack:** WordPress + Showit (canvas de diseño fijo, escalado con `transform: scale()`)
- **Viewport de medición:** 1440 × 900

## Advertencia de método

Showit renderiza un lienzo de tamaño fijo y lo escala al viewport. Los `font-size`
computados salen mucho más pequeños de lo que se ve. El extractor calcula `designPx`
deshaciendo el `scale()` acumulado; `tokens.css` documenta el valor medido **y** el
valor reescalado para uso real.

## Lo que define este diseño

**Verde bosque profundo sobre crema.** Un solo acento cromático, muy saturado y muy
oscuro (`#284132`), contra dos cálidos casi blancos. No hay tercer color.

**Esquinas rectas.** `border-radius: 0` en botones y tarjetas. Solo el CTA flotante es
pill y los avatares círculos. Esto le da el aire editorial / boutique.

**Cero sombras.** Una sola sombra en todo el sitio, en el CTA flotante. La separación
entre secciones se hace alternando fondo blanco y crema, no con elevación.

**Doble línea de 1px** como separador decorativo recurrente.

**Todo en minúsculas** en los titulares (`text-transform: lowercase`), incluso el logo.
Es la decisión más distintiva y la que más rebaja la formalidad.

## Tipografías

| Rol | Fuente original | Licencia | Sustituto libre |
|---|---|---|---|
| Display | **Agne** / Agne Web | CC BY-NC-ND 3.0 — **no apta comercialmente** | Playfair Display 700 · Bodoni Moda 700 · Instrument Serif |
| Acento | Newsreader 500 *italic* | Google Fonts, libre | — |
| Cuerpo | Noto Sans 400/700 | Google Fonts, libre | — |
| UI / nav | Montserrat 400–700 | Google Fonts, libre | — |

⚠️ **Agne no se puede usar en un sitio de cliente.** Se distribuye bajo
CC BY-NC-ND: prohíbe uso comercial y obras derivadas. `tokens.css` ya apunta a
Playfair Display como sustituto por defecto.

## Ritmo de secciones

```
cream → white → white → cream → white → cream → white → FOREST → ivory
```

El verde profundo aparece **una sola vez**, como bloque de clímax justo antes del pie.

## Archivos

- `tokens.css` — variables listas para copiar
- `preview.html` — muestrario visual (abrir en navegador)
- `hero.webp` — captura de la parte superior
