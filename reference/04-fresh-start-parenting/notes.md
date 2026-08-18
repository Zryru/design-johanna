# 04 — Fresh Start Parenting

- **URL analizada:** https://www.freshstartparenting.com/
- **Fecha:** 2026-08-18
- **Stack:** Wix Website Builder
- **Viewport de medición:** 1440 × 900
- **Contexto:** terapia **infantil** en Raleigh, NC — no NYC, no adultos

## El hallazgo que importa

**El color vivo no está en el CSS. Está en la fotografía.**

El cromo del sitio es casi todo blanco (12 de 22 fondos) con verde apagado. Pero el
hero es una foto de piezas de tangram — magenta, azul, lima, naranja, turquesa — con
la mano de un niño. Toda la vitalidad viene de ahí.

Es **el mismo mecanismo que en Ostler Therapy**, donde la energía venía del campo de
caléndulas. Dos de cuatro referencias consiguen su viveza por fotografía, no por
paleta. Eso ya no es casualidad: es la palanca más eficaz y la más barata de aplicar,
porque no compromete la legibilidad del texto.

## Ventaja técnica de este sitio

Wix expone la **paleta completa del tema** en custom properties, incluidos los colores
que nunca se usan. Salen cuatro familias:

| Familia | Rango | ¿Se usa? |
|---|---|---|
| Verde | `#C9D8BF` → `#151F19` (10 pasos) | sí, es la única |
| Terracota | `#DDC1B2` → `#3C1D0D` (5 pasos) | **no** |
| Periwinkle / azul | `#B6BADB` → `#131737` (5 pasos) | **no** |
| Neutros | blanco → negro | sí |

Las dos familias sin usar son lo más aprovechable del archivo. La combinación
**verde + periwinkle + terracota** tiene bastante más nervio que cualquier cosa que el
sitio llegue a mostrar. `tokens.css` la deja preparada con la saturación subida.

## Problemas reales de ejecución

Es el más flojo de los cuatro. Conviene saber qué no copiar:

**El CTA apenas se lee como botón.** Rectángulo transparente con borde de 1px y
`border-radius: 0`. Comparado con el pill cítrico de Ostler, no compite.

**Arial es la fuente más usada de la página: 409 veces.** Por encima de
brandon-grot (147) y caudex (15). El fallback de Wix se está filtrando por todas partes.

**Dos de las cuatro webfonts declaradas nunca cargan.** `belinda` (script, para el
estilo *body-large* de 27px) y `din-next-light` no llegan a descargarse, así que esos
estilos caen a fallback sin que nadie lo note.

**Los botones tienen `color: rgb(0, 0, 238)`** — el azul de enlace por defecto del
navegador — con `font-size: 10px` en Arial. El `<a>` está sin estilar y el texto real
vive en un `<span>` anidado.

**Texto de cuerpo en negro puro `#000`** (260 usos). Duro, sin temperatura de marca.

**`line-height: 1.4em` en toda la escala**, del titular de 42px al texto de 12px. Los
titulares grandes piden menos y el cuerpo más.

**Ancho de sitio 980px.** Se nota anticuado en pantallas actuales.

**Texto del hero sobre foto muy ocupada.** Verde oscuro centrado sobre las piezas de
tangram: riesgo de contraste según la zona.

## Tipografías

| Rol | Fuente | Licencia | Sustituto libre |
|---|---|---|---|
| Display | **Caudex** | Google Fonts, **libre** | — |
| Cuerpo | **Brandon Grotesque Light** | de pago (licencia Wix) | Jost 300 · Poppins 300 · Questrial |
| *body-large* | Belinda (script) | de pago, **no carga** | — |
| Menor | DIN Next Light | de pago, **no carga** | — |

El logo es Caudex espaciado en gris con una rodaja de limón dibujada y filetes finos.
Delicado pero fechado.

## Comparativa de las cuatro referencias

| | 01 Manhattan | 02 myTherapy | 03 Ostler | 04 Fresh Start |
|---|---|---|---|---|
| Radio botón | `0` | `30px` pill | `300px` pill | `0` + borde 1px |
| Sombras | 1 en todo | difusas | ninguna | ninguna |
| Fuerza del CTA | media | media | **alta** | **muy baja** |
| Origen del color | paleta | paleta | **foto** + paleta | **foto** |
| Licencias | ⚠ Agne no comercial | ⚠ Roxborough pago | ✅ todas libres | ⚠ Brandon pago |
| Encaje con brief | bajo | medio | **alto** | bajo |

Ostler sigue siendo la referencia más sólida: es la única con las tres tipografías
libres y el CTA más fuerte.

## Archivos

- `tokens.css` — paleta completa del tema Wix + tríada derivada
- `hero.webp` — captura de la parte superior
