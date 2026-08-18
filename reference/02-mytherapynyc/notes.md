# 02 — myTherapyNYC

- **URL analizada:** https://mytherapynyc.com/
- **Fecha:** 2026-08-18
- **Stack:** WordPress + Elementor (sin canvas escalado, medidas directas)
- **Viewport de medición:** 1440 × 900

## Lo que define este diseño

**Teal + melocotón.** El eje es una pareja frío/cálido: azul petróleo apagado
(`#466774`) para autoridad, melocotón (`#F2BFA1`) para calidez. El melocotón es el
color que se recuerda, y aparece tanto como fondo de sección (`#FFE3D2`) como en el
botón primario.

**Todo redondeado.** Botones pill de `30px` sin excepción, tarjetas e imágenes a
`50px`. Es el opuesto exacto de Manhattan Wellness. Transmite blandura y accesibilidad.

**Tracking muy abierto en los display.** Los `h2` van a 3–4.5px de `letter-spacing`
sobre un serif. Esa combinación es la firma tipográfica del sitio, más que el tamaño.

**Pesos de nav muy finos.** Montserrat 200–300 en la navegación. Ligero hasta el
límite de la legibilidad.

**Botón primario de bajo contraste.** Fondo melocotón con texto teal: deliberadamente
poco agresivo. ⚠️ Ese par no supera el contraste 4.5:1 de WCAG AA para texto normal;
si adoptamos el patrón hay que oscurecer el texto.

**Contraste suave también en outline.** Botones transparentes con borde blanco de 1px
sobre fotografía.

## Tipografías

| Rol | Fuente original | Licencia | Sustituto libre |
|---|---|---|---|
| Display | **Abhaya Libre** 400–700 | Google Fonts, libre | — |
| UI / CTA | **Montserrat** 200–700 | Google Fonts, libre | — |
| Tarjetas | **Roxborough** | de pago (CDN Elementor) | Gilda Display · Cormorant |
| Cuerpo | pila de sistema + Roboto | libre | — |

Buena parte del cuerpo cae en la pila de sistema (`-apple-system`, etc.). Es rápido
pero rompe la consistencia entre plataformas: el sitio se ve distinto en Mac y Windows.
No lo copiaría.

## Ritmo de secciones

```
peach-bg → white → peach-bg → TEAL → cream → TEAL
```

El teal se usa dos veces: como banda de corte estrecha (152px) y como pie ancho.
Más recurrente que el verde de Manhattan Wellness, que solo aparece una vez.

## Contraste con el sitio 01

| | Manhattan Wellness | myTherapyNYC |
|---|---|---|
| Radio | `0` — recto, editorial | `30–50px` — pill, blando |
| Sombras | ninguna | difusas, casi invisibles |
| Acento | verde bosque, uno solo | teal + melocotón, pareja |
| Titulares | minúsculas forzadas | tracking muy abierto |
| Temperatura | fría con base crema | cálida dominante |

Son dos extremos útiles: sirven de anclas opuestas para las propuestas.

## Archivos

- `tokens.css` — variables listas para copiar
- `hero.webp` — captura de la parte superior
