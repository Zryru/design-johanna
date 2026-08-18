/* =============================================================
   Extractor de paleta + tipografía + componentes
   Uso: pegar como función en Chrome DevTools (evaluate_script)
        sobre la página de referencia ya cargada.

   Devuelve un JSON con:
     - vars      : custom properties de :root / html / body
     - colors    : colores de fondo y texto ordenados por frecuencia
                   real de uso en elementos visibles
     - fonts     : familias cargadas y usadas, con peso y estilo
     - type      : muestras de texto reales por tamaño (escala tipográfica)
     - buttons   : bg, color, radio, padding, tracking de los CTA
     - sections  : ritmo de fondos de sección en orden de documento
     - shape     : border-radius y sombras en uso

   Nota: algunos builders (Showit, Wix) escalan el canvas con
   transform: scale(). El campo designPx deshace ese escalado.
   ============================================================= */

async function extractDesignTokens() {
  await document.fonts.ready;

  const inc = (o, k) => { if (k) o[k] = (o[k] || 0) + 1; };
  const top = (o, n) => Object.entries(o).sort((a, b) => b[1] - a[1]).slice(0, n);

  // deshace transform: scale() acumulado de los ancestros
  const scaleOf = (el) => {
    let s = 1, n = el;
    while (n && n !== document.body) {
      const tr = getComputedStyle(n).transform;
      if (tr && tr !== 'none') {
        const m = tr.match(/matrix\(([-\d.]+)/);
        if (m) s *= parseFloat(m[1]);
      }
      n = n.parentElement;
    }
    return s;
  };

  const visible = (el) => {
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  };

  // ---------- 1. custom properties ----------
  const vars = {};
  for (const sheet of document.styleSheets) {
    let rules;
    try { rules = sheet.cssRules; } catch (e) { continue; }   // CORS
    if (!rules) continue;
    for (const r of rules) {
      if (!r.style || !r.selectorText) continue;
      if (!/^(:root|html|body)/.test(r.selectorText)) continue;
      for (let i = 0; i < r.style.length; i++) {
        const p = r.style[i];
        // se ignoran los presets de WordPress/Gutenberg, no son de marca
        if (p.startsWith('--') && !p.startsWith('--wp')) {
          vars[p] = r.style.getPropertyValue(p).trim();
        }
      }
    }
  }

  // ---------- 2. colores por frecuencia real ----------
  const bg = {}, fg = {}, fonts = {}, radii = {}, shadows = {};
  document.querySelectorAll('*').forEach(el => {
    if (!visible(el)) return;
    const cs = getComputedStyle(el);
    if (cs.backgroundColor && cs.backgroundColor !== 'rgba(0, 0, 0, 0)') inc(bg, cs.backgroundColor);
    if (el.textContent && el.textContent.trim()) inc(fg, cs.color);
    inc(fonts, cs.fontFamily);
    if (cs.borderRadius && cs.borderRadius !== '0px') inc(radii, cs.borderRadius);
    if (cs.boxShadow && cs.boxShadow !== 'none') inc(shadows, cs.boxShadow);
  });

  // ---------- 3. escala tipográfica con texto de muestra ----------
  const seen = new Set();
  const type = [];
  document.querySelectorAll('h1,h2,h3,h4,p,span,div,a,li,blockquote').forEach(el => {
    if (el.children.length) return;                 // solo hojas
    const t = (el.textContent || '').trim();
    if (!t || t.length > 90) return;
    if (!visible(el)) return;
    const cs = getComputedStyle(el);
    const key = [cs.fontFamily, cs.fontSize, cs.fontWeight, cs.fontStyle, cs.letterSpacing, cs.color].join('|');
    if (seen.has(key)) return;
    seen.add(key);
    const s = scaleOf(el);
    type.push({
      sample: t.slice(0, 48),
      tag: el.tagName,
      family: cs.fontFamily,
      px: parseFloat(cs.fontSize),
      designPx: +(parseFloat(cs.fontSize) / s).toFixed(1),
      weight: cs.fontWeight,
      style: cs.fontStyle,
      lineHeight: cs.lineHeight,
      tracking: cs.letterSpacing,
      transform: cs.textTransform,
      color: cs.color
    });
  });
  type.sort((a, b) => b.designPx - a.designPx);

  // ---------- 4. botones / CTA ----------
  const buttons = [];
  document.querySelectorAll('a,button,[class*=btn],[class*=button],[role=button]').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.width < 70 || r.height < 20 || r.height > 90) return;
    const cs = getComputedStyle(el);
    const hasBg = cs.backgroundColor !== 'rgba(0, 0, 0, 0)';
    const hasBorder = cs.borderTopWidth !== '0px';
    if (!hasBg && !hasBorder) return;               // enlace pelado, no CTA
    buttons.push({
      text: (el.textContent || '').trim().slice(0, 32),
      bg: cs.backgroundColor,
      color: cs.color,
      border: cs.border,
      radius: cs.borderRadius,
      padding: cs.padding,
      size: `${Math.round(r.width)}x${Math.round(r.height)}`,
      family: cs.fontFamily,
      px: cs.fontSize,
      weight: cs.fontWeight,
      tracking: cs.letterSpacing,
      transform: cs.textTransform
    });
  });

  // ---------- 5. ritmo de secciones ----------
  const sections = [];
  document.querySelectorAll('section,div,main>*').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.width < innerWidth * 0.9 || r.height < 150) return;
    const cs = getComputedStyle(el);
    if (cs.backgroundColor === 'rgba(0, 0, 0, 0)') return;
    sections.push({ bg: cs.backgroundColor, height: Math.round(r.height) });
  });

  // ---------- 6. @font-face realmente cargadas ----------
  const loaded = [...document.fonts]
    .filter(f => f.status === 'loaded')
    .map(f => `${f.family} ${f.weight} ${f.style}`);

  return {
    url: location.href,
    title: document.title,
    viewport: `${innerWidth}x${innerHeight}`,
    vars,
    colors: { backgrounds: top(bg, 20), text: top(fg, 15) },
    fonts: { used: top(fonts, 10), loaded: [...new Set(loaded)] },
    type: type.slice(0, 30),
    buttons: buttons.slice(0, 12),
    sections: sections.slice(0, 20),
    shape: { radii: top(radii, 8), shadows: top(shadows, 6) }
  };
}

return extractDesignTokens();
