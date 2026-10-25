// Field guide illustrations — every ingredient is drawn from a small set of
// specimen forms (bottle, jar, herb bunch, root…) tinted with its own color.
// Style: ink outline over a flat fill printed slightly off-register, like a
// risograph plate. Shapes are authored on a 100×100 canvas.

const ILLO_INK = '#2C2A24';
const ILLO_PAPER = '#FAF5E9';
const ILLO_OFFSET = 2.5;

const IC = {
  soy: '#3B2418', soyLight: '#7A4A25', amber: '#B87A2E', gold: '#D4A23A', oil: '#C98F2A',
  vinegar: '#D9C9A0', blackVinegar: '#3A2A22', wine: '#B07A3A', clear: '#E6E2D3',
  red: '#B8442F', chili: '#C2412C', brickRed: '#8E3A26', orange: '#D9822B', yellow: '#E2B53E',
  mustard: '#C9A227', herb: '#6F8A3A', deepGreen: '#4E6B34', paleGreen: '#B4C27E',
  lime: '#8DAA3B', seaweed: '#2F3B2A', cream: '#F2EAD6', white: '#F7F3EA', tan: '#C8A878',
  brown: '#8A5A35', darkBrown: '#5A3A22', pink: '#D99A8A', salmon: '#E0907A',
  purple: '#6E4A7A', lilac: '#9C7AA8', metal: '#C9C2B0', black: '#2C2A24', grey: '#9A9484',
  teal: '#4F7F78', blue: '#3F5E86'
};

// --- Drawing primitives -----------------------------------------------------
const P = (d, fill, extra) => ({ tag: 'path', attrs: { d }, fill, ...extra });
const E = (cx, cy, rx, ry, fill, rot) => ({
  tag: 'ellipse', attrs: { cx, cy, rx, ry, ...(rot ? { transform: `rotate(${rot} ${cx} ${cy})` } : {}) }, fill
});
const Ci = (cx, cy, r, fill) => ({ tag: 'circle', attrs: { cx, cy, r }, fill });
const fine = (part, sw = 1.2) => ({ ...part, sw, off: 1.2 }); // small parts get a lighter line and a tighter plate offset
const L = (d, opts = {}) => ({ line: d, ...opts });
const T = (text, x, y, size) => ({ text, x, y, size });
const G = (transform, parts) => ({ group: transform, parts });

function illoAttrs(attrs) {
  return Object.entries(attrs).map(([k, v]) => `${k}="${v}"`).join(' ');
}

function illoRender(parts) {
  return parts.map(p => {
    if (p.parts) return p.group ? `<g transform="${p.group}">${illoRender(p.parts)}</g>` : illoRender(p.parts);
    if (p.line) {
      return `<path d="${p.line}" fill="none" stroke="${p.stroke || ILLO_INK}" stroke-width="${p.width || 1.6}" stroke-linecap="round" stroke-linejoin="round"${p.opacity ? ` opacity="${p.opacity}"` : ''}/>`;
    }
    if (p.text !== undefined) {
      return `<text x="${p.x}" y="${p.y}" font-size="${p.size}" text-anchor="middle" dominant-baseline="central" fill="${ILLO_INK}" font-family="system-ui, sans-serif" font-weight="600">${p.text}</text>`;
    }
    const a = illoAttrs(p.attrs);
    if (p.noStroke) return `<${p.tag} ${a} fill="${p.fill}"/>`; // specks and pores: no plate offset
    const knock = `<${p.tag} ${a} fill="${ILLO_PAPER}"/>`;
    const off = p.off ?? ILLO_OFFSET;
    const color = p.fill ? `<g transform="translate(${off} ${off})"><${p.tag} ${a} fill="${p.fill}"/></g>` : '';
    const outline = `<${p.tag} ${a} fill="none" stroke="${ILLO_INK}" stroke-width="${p.sw || 2.4}" stroke-linejoin="round"/>`;
    return knock + color + outline;
  }).join('');
}

function illoShade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const ch = s => Math.max(0, Math.min(255, Math.round(((n >> s) & 255) * (1 + amt))));
  return '#' + [16, 8, 0].map(s => ch(s).toString(16).padStart(2, '0')).join('');
}

// Native-script label for packaging. Width is estimated per grapheme by
// script (Thai and Devanagari vowel marks don't take their own space), long
// labels wrap onto two lines at word boundaries, and anything that still
// won't fit is cut at a word, never mid-word.
const illoSegmenter = g => (typeof Intl !== 'undefined' && Intl.Segmenter ? new Intl.Segmenter(undefined, { granularity: g }) : null);
const illoGraphemes = illoSegmenter('grapheme');
const illoWords = illoSegmenter('word');

function illoSplit(str, seg) {
  if (seg) return Array.from(seg.segment(str), x => x.segment);
  return seg === illoWords ? str.split(/(\s+)/) : Array.from(str);
}

// Text width in ems. In the browser, measure with the reader's own fonts; the
// per-script estimate is only a fallback.
let illoCtx;
function illoEm(str) {
  if (illoCtx === undefined) {
    try { illoCtx = document.createElement('canvas').getContext('2d'); illoCtx.font = '600 100px system-ui, sans-serif'; } catch (e) { illoCtx = null; }
  }
  if (illoCtx) return illoCtx.measureText(str).width / 100 * 1.06; // a little air at the label edges
  return illoSplit(str, illoGraphemes).reduce((sum, g) => sum + (
    /[\u3000-\u9fff\uac00-\ud7af\uff00-\uffef]/.test(g) ? 1
    : /[\u0e00-\u0eff]/.test(g) ? 0.84
    : /[\u0900-\u097f]/.test(g) ? 0.76
    : /\s/.test(g) ? 0.3
    : /[A-Z\u0110]/.test(g) ? 0.74 : 0.62), 0);
}

function illoLabelLines(o, w, h) {
  const raw = (o.label || '').split(/[\/(\uff08]/)[0].trim();
  if (!raw) return [];
  const avail = w - 4;
  const cap = /[\u3000-\u9fff\uac00-\ud7af]/.test(raw) ? 12 : 9;
  const one = Math.min(cap, h * 0.5, avail / illoEm(raw));
  let best = { lines: [raw], size: one };

  const parts = illoSplit(raw, illoWords);
  if (parts.filter(x => x.trim()).length > 1) {
    for (let i = 1; i < parts.length; i++) {
      const a = parts.slice(0, i).join('').trim(), b = parts.slice(i).join('').trim();
      if (!a || !b) continue;
      const size = Math.min(cap, h * 0.36, avail / Math.max(illoEm(a), illoEm(b)));
      if (size > best.size * 1.15 && (best.lines.length === 1 || size > best.size)) best = { lines: [a, b], size };
    }
  }
  if (best.size < 5.5) { // still too small: keep the leading whole words that fit
    let text = '';
    for (const part of parts) {
      if (text.trim() && illoEm((text + part).trim()) * 5.5 > avail) break;
      text += part;
    }
    text = text.trim();
    best = { lines: [text], size: Math.min(cap, h * 0.5, avail / illoEm(text)) };
  }
  const esc = t => t.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  return best.lines.map(t => [esc(t), +best.size.toFixed(2)]);
}

function labelText(o, w, cx, cy, h = 14) {
  const lines = illoLabelLines(o, w, h);
  return lines.map(([text, size], i) => T(text, cx, cy + (i - (lines.length - 1) / 2) * size * 1.15, size));
}

function labelParts(o, x, y, w, h) {
  return [P(`M${x} ${y} h${w} v${h} h-${w}z`, ILLO_PAPER, { sw: 1.8 }), ...labelText(o, w, x + w / 2, y + h / 2, h)];
}

// Blend two hex colors (t = 0 keeps a, 1 gives b)
function illoMix(a, b, t) {
  const ch = (h, s) => (parseInt(h.slice(1), 16) >> s) & 255;
  return '#' + [16, 8, 0].map(s => Math.round(ch(a, s) + (ch(b, s) - ch(a, s)) * t).toString(16).padStart(2, '0')).join('');
}

// A dish holding a heap of something: the heap reads as one shape, so the
// seeds or flakes drawn on top can stay few and legible. Dark seeds sit on a
// lighter heap, light seeds on a darker one.
function dishMound(color) {
  const n = parseInt(color.slice(1), 16);
  const lum = (0.3 * (n >> 16) + 0.59 * ((n >> 8) & 255) + 0.11 * (n & 255)) / 255;
  return [
    E(50, 70, 40, 11, IC.cream),
    P('M18 69 c4-28 60-28 64 0 c-14 6-50 6-64 0z', lum < 0.35 ? illoMix(color, ILLO_PAPER, 0.4) : illoMix(color, ILLO_INK, 0.22))
  ];
}

// Deterministic points spread over the face of a dishMound heap
function moundPoints(n, seed) {
  return scatter(n * 3, 50, 58, 30, 11, seed)
    .filter(([x, y]) => { const u = (x - 50) / 30; return Math.abs(u) < 0.95 && y > 69 - 20 * (1 - u * u) + 3 && y < 67; })
    .slice(0, n).sort((a, b) => a[1] - b[1]);
}

function scatter(n, cx, cy, rx, ry, seed) {
  // Deterministic jittered points inside an ellipse
  const pts = [];
  let s = seed || 7;
  const rnd = () => (s = (s * 9301 + 49297) % 233280) / 233280;
  for (let i = 0; i < n; i++) {
    const a = rnd() * Math.PI * 2, r = Math.sqrt(rnd());
    pts.push([cx + Math.cos(a) * r * rx, cy + Math.sin(a) * r * ry, rnd()]);
  }
  return pts;
}

// --- Specimen forms ---------------------------------------------------------
const ILLO_FORMS = {
  bottle: o => [
    P('M43 6 h14 v10 h-14z', o.cap || IC.red),
    P('M44 16 h12 v10 c0 5 11 8 11 16 v44 c0 3-2 5-5 5 h-24 c-3 0-5-2-5-5 v-44 c0-8 11-11 11-16z', o.color),
    L('M38 46 v6', { stroke: ILLO_PAPER, width: 2.2 }),
    ...labelParts(o, 35, 54, 30, 26)
  ],
  tallBottle: o => [
    P('M45 4 h10 v9 h-10z', o.cap || IC.darkBrown),
    P('M46 13 h8 v18 c0 5 9 7 9 14 v42 c0 3-2 5-5 5 h-16 c-3 0-5-2-5-5 v-42 c0-7 9-9 9-14z', o.color),
    L('M40 48 v6', { stroke: ILLO_PAPER, width: 2.2 }),
    ...labelParts(o, 38, 56, 24, 26)
  ],
  squeeze: o => [
    P('M48.5 18 l1.5-10 l1.5 10z', o.cap || IC.herb),
    P('M43 32 l4-14 h6 l4 14z', o.cap || IC.herb),
    P('M34 38 c0-5 4-7 8-7 h16 c4 0 8 2 8 7 v46 c0 3-2 5-5 5 h-22 c-3 0-5-2-5-5z', o.color),
    ...labelParts(o, 37, 48, 26, 26)
  ],
  jar: o => [
    P('M29 18 h42 v12 h-42z', o.cap || IC.red),
    P('M31 30 h38 c2 0 3 1.5 3 4 v46 c0 5-3 8-8 8 h-28 c-5 0-8-3-8-8 v-46 c0-2.5 1-4 3-4z', o.color),
    ...(o.dots ? scatter(7, 50, 79, 15, 4, 3).map(([x, y]) => fine(Ci(x, y, 3.2, o.dots))) : []),
    ...labelParts(o, 32, 42, 36, 26)
  ],
  smallJar: o => [
    P('M34 32 h32 v10 h-32z', o.cap || IC.darkBrown),
    P('M35 42 h30 c2 0 3 1.5 3 4 v34 c0 4-3 7-7 7 h-22 c-4 0-7-3-7-7 v-34 c0-2.5 1-4 3-4z', o.color),
    ...labelParts(o, 35, 52, 30, 22)
  ],
  tub: o => [
    P('M20 30 h60 v9 h-60z', o.cap || IC.red),
    P('M23 39 h54 l-4 43 c-0.3 3-2 5-5 5 h-36 c-3 0-4.7-2-5-5z', o.color),
    ...labelParts(o, 30, 48, 40, 26)
  ],
  tube: o => [
    P('M30 70 h40 l-4 16 h-32z', o.cap || IC.herb),
    P('M30 70 l4-46 c0-3 3-4 5-4 h22 c2 0 5 1 5 4 l4 46z', o.color),
    L('M36 20 h28', { width: 2.4 }),
    ...labelParts(o, 36, 32, 28, 26)
  ],
  can: o => [
    P('M28 22 v60 a22 6 0 0 0 44 0 v-60z', o.color),
    P('M28 22 a22 6 0 1 0 44 0 a22 6 0 1 0 -44 0z', IC.metal),
    ...labelParts(o, 28, 42, 44, 26)
  ],
  bottleLow: o => [ // a squat bottle for thick sauces (oyster, hoisin)
    P('M42 10 h16 v10 h-16z', o.cap || IC.red),
    P('M43 20 h14 v6 c0 4 13 6 13 14 v42 c0 4-3 6-6 6 h-28 c-3 0-6-2-6-6 v-42 c0-8 13-10 13-14z', o.color),
    ...labelParts(o, 34, 50, 32, 26)
  ],
  bag: o => [
    P('M26 14 h48 v8 h-48z', o.cap || IC.red),
    L('M30 14 v8 M36 14 v8 M42 14 v8 M48 14 v8 M54 14 v8 M60 14 v8 M66 14 v8 M72 14 v8', { width: 1 }),
    P('M26 22 h48 l4 62 c0.2 3-2 5-5 5 h-46 c-3 0-5.2-2-5-5z', o.color),
    ...(o.grains
      ? [P('M36 40 h28 v32 h-28z', ILLO_PAPER, { sw: 1.8 }),
         ...scatter(10, 50, 56, 10, 12, 5).map(([x, y, r]) => fine(E(x, y, 1.8, 3.4, o.grains, r * 180), 1))]
      : labelParts(o, 32, 38, 36, 32))
  ],
  box: o => [
    P('M22 34 l20 -12 h38 l-20 12z', illoShade(o.color, 0.25)),
    P('M60 34 l20 -12 v50 l-20 12z', illoShade(o.color, -0.2)),
    P('M22 34 h38 v50 h-38z', o.color),
    ...labelParts(o, 25, 44, 32, 26)
  ],

  // Noodles and rice
  bundle: o => {
    const step = o.wide ? 7 : 3.5;
    const lines = [];
    for (let x = 36 + step / 2; x < 64; x += step) lines.push(`M${x.toFixed(1)} 20 q${(50 - x) / 6} 30 0 60`);
    return [
      P('M32 16 h36 c-3 12-6 20-6 34 c0 14 3 22 6 34 h-36 c3-12 6-20 6-34 c0-14-3-22-6-34z', o.color),
      L(lines.join(' '), { width: o.wide ? 1.4 : 0.9, opacity: 0.7 }),
      P('M35 43 h30 v14 h-30z', ILLO_PAPER),
      L('M35 45 h30 M35 55 h30', { width: 2, stroke: o.cap || IC.red }),
      ...labelText(o, 28, 50, 50, 10)
    ];
  },
  nest: o => {
    const rows = [];
    for (let y = 30; y <= 74; y += 6) {
      const half = Math.sqrt(Math.max(0, 30 * 30 - (y - 52) * (y - 52))) - 4;
      const x0 = 50 - half;
      const n = Math.max(1, Math.floor((half * 2) / 8));
      rows.push(`M${x0.toFixed(1)} ${y}` + ' q2 -4 4 0 t4 0'.repeat(n));
    }
    return [
      E(50, 52, 32, 30, o.color),
      L(rows.join(' '), { width: o.wide ? 2.4 : 1.2, opacity: 0.75 })
    ];
  },
  riceBowl: o => [
    E(50, 50, 30, 10, o.color),
    ...scatter(18, 50, 46, 22, 7, 11).map(([x, y, r]) => fine(E(x, y, 1.4, 2.8, ILLO_PAPER, r * 180), 1)),
    P('M18 52 h64 c0 18-14 32-32 32 c-18 0-32-14-32-32z', o.bowl || IC.blue),
    L('M28 64 h44', { stroke: ILLO_PAPER, width: 2 })
  ],
  bowl: o => [
    E(50, 52, 32, 8, o.color),
    ...(o.bits ? scatter(10, 50, 52, 24, 5, 9).map(([x, y]) => fine(Ci(x, y, 2.4, o.bits))) : []),
    P('M18 54 h64 c0 16-14 30-32 30 c-18 0-32-14-32-30z', o.bowl || IC.cream)
  ],
  cakes: o => [ // tteok — little cylinders
    ...[[30, 56, -20], [52, 64, 10], [42, 42, 30], [64, 46, -10]].map(([x, y, r]) =>
      G(`rotate(${r} ${x} ${y})`, [P(`M${x - 14} ${y - 5} h28 a3 5 0 0 1 0 10 h-28 a3 5 0 0 1 0-10z`, o.color),
        E(x + 14, y, 3, 5, illoShade(o.color, -0.08))]))
  ],

  // Flat goods
  sheets: o => [
    ...[0, 1, 2, 3].map(i => E(50, 66 - i * 6, 34, 12, i === 3 ? o.color : illoShade(o.color, -0.06 * (3 - i)))),
    ...(o.hatch ? [L('M30 46 l40 0 M26 48 l48 0 M36 42 l28 0 M34 50 l32 0', { width: 0.8, opacity: 0.5 })] : [])
  ],
  squares: o => [
    ...[0, 1, 2, 3].map(i => G(`rotate(${-8 + i * 5} 50 ${60 - i * 4})`, [P(`M24 ${38 - i * 4} h52 v40 h-52z`, i === 3 ? o.color : illoShade(o.color, -0.05 * (3 - i)))])),
    ...(o.ridges ? [L('M30 30 v32 M38 30 v32 M46 30 v32 M54 30 v32 M62 30 v32 M70 30 v32', { width: 0.8, opacity: 0.5, stroke: ILLO_PAPER })] : [])
  ],
  block: o => [
    P('M20 40 l30 -14 l30 14 l-30 14z', illoShade(o.color, 0.12)),
    P('M20 40 v28 l30 14 v-28z', o.color),
    P('M80 40 v28 l-30 14 v-28z', illoShade(o.color, -0.15)),
    ...(o.holes ? scatter(6, 34, 58, 8, 8, 4).map(([x, y]) => ({ ...Ci(x, y, 1.2, IC.darkBrown), noStroke: true })) : [])
  ],
  cubes: o => [[34, 62], [62, 66], [48, 44]].map(([x, y]) => G(`translate(${x - 50} ${y - 54}) scale(0.55) translate(${(50 * 0.45) / 0.55} ${(54 * 0.45) / 0.55})`, ILLO_FORMS.block(o))),
  lump: o => [
    P('M22 66 c-2-14 6-26 16-30 c10-6 24-6 34 2 c8 6 10 18 6 28 c-4 10-14 16-28 16 c-14 0-26-6-28-16z', o.color),
    L('M34 50 l6 6 M56 46 l-4 8 M62 64 l6 2', { width: 1.2, opacity: 0.6 })
  ],
  discs: o => [
    ...[0, 1, 2].map(i => P(`M24 ${70 - i * 12} a26 9 0 0 0 52 0 v-8 a26 9 0 0 0 -52 0z`, illoShade(o.color, -0.08 * (2 - i)))),
    E(50, 38, 26, 9, illoShade(o.color, 0.1))
  ],
  crystals: o => [
    P('M24 70 l8-20 l14 -4 l6 14 l-10 16z', o.color),
    P('M50 74 l4-24 l16 -6 l8 18 l-12 16z', illoShade(o.color, -0.06)),
    P('M36 46 l10-18 l14 6 l-2 16 l-14 4z', illoShade(o.color, 0.08)),
    L('M32 50 l10 26 M54 50 l12 20 M46 28 l0 22', { width: 1, opacity: 0.5 })
  ],

  // Produce
  herbs: o => {
    if (o.kind) return ILLO_HERBS[o.kind](o);
    const leaf = o.leaf || 'round';
    const tips = [[30, 30, -30], [40, 22, -15], [52, 18, 0], [62, 24, 15], [70, 34, 30], [46, 34, -8], [58, 36, 10]];
    const stems = tips.map(([x, y]) => `M50 86 Q${(50 + x) / 2} ${(86 + y) / 2 + 6} ${x} ${y + 6}`).join(' ');
    const leaves = tips.flatMap(([x, y, r], i) => {
      if (leaf === 'frilly') return [Ci(x - 4, y + 2, 5, o.color), Ci(x + 4, y + 2, 5, o.color), Ci(x, y - 3, 5.5, o.color)];
      if (leaf === 'blade') return [E(x, y + 2, 4, 13, o.color, r)];
      return [E(x, y + 4, 7, 10, i % 2 ? o.color : illoShade(o.color, -0.1), r)];
    });
    return [L(stems, { width: 2, stroke: illoShade(o.color, -0.25) }), ...leaves, P('M45 72 h10 v6 h-10z', o.cap || IC.tan, { sw: 1.6 })];
  },
  stalks: o => { // scallions, chives, lemongrass, leeks
    const n = o.thin ? 9 : o.thick ? 3 : 5;
    const span = o.thick ? 22 : 28;
    const w = o.thin ? 1.6 : o.thick ? 7 : 4;
    const parts = [];
    for (let i = 0; i < n; i++) {
      const x = 50 - span / 2 + (span * i) / (n - 1);
      const top = 10 + (i % 2) * 6;
      const lean = (x - 50) * 0.35;
      parts.push(P(`M${x - w / 2} 88 L${x - w / 2 + lean} ${top} L${x + w / 2 + lean} ${top + 2} L${x + w / 2} 88z`, o.color, { sw: o.thin ? 1.4 : 2 }));
      if (o.base) parts.push(P(`M${x - w / 2 - 0.6} 88 L${x - w / 2 + lean * 0.3 - 0.4} 64 L${x + w / 2 + lean * 0.3 + 0.4} 64 L${x + w / 2 + 0.6} 88z`, o.base, { sw: o.thin ? 1.4 : 2 }));
    }
    return parts;
  },
  greens: o => { // bok choy by default; o.kind picks another leafy green
    if (o.kind) return ILLO_GREENS[o.kind](o);
    const leaf = r => G(`rotate(${r} 50 88)`, [
      E(50, 38, 13, 24, o.color),
      P('M45 52 c0 16 2 28 5 36 c3-8 5-20 5-36z', o.stem || IC.paleGreen),
      L('M50 22 v30', { width: 1.2, stroke: o.stem || IC.paleGreen })
    ]);
    return [leaf(-26), leaf(26), leaf(-10), leaf(10)];
  },
  cabbage: o => [
    P('M30 84 c-6-24-4-52 8-66 c6-6 18-6 24 0 c12 14 14 42 8 66 c-6 4-34 4-40 0z', o.stem || IC.cream),
    P('M30 50 c-2-14 2-28 10-34 c6-4 14-4 20 0 c8 6 12 20 10 34 c-4-6-10-8-20-8 c-10 0-16 2-20 8z', o.color),
    L('M50 30 v52 M42 40 c2 14 4 28 4 42 M58 40 c-2 14-4 28-4 42', { width: 1.2, opacity: 0.6 })
  ],
  sprouts: o => {
    const lines = [], heads = [];
    for (let i = 0; i < 9; i++) {
      const x = 26 + i * 6, y = 20 + (i % 3) * 8;
      lines.push(`M${x} ${y} c${i % 2 ? 6 : -6} 20 ${i % 2 ? -6 : 6} 40 ${i % 2 ? 2 : -2} 60`);
      heads.push(E(x, y - 2, 3, 4, o.cap || IC.yellow, i * 10));
    }
    return [L(lines.join(' '), { width: 3.4, stroke: ILLO_INK }), L(lines.join(' '), { width: 1.8, stroke: o.color }), ...heads];
  },
  root: o => [
    P('M18 60 c0-10 10-14 18-12 c2-8 12-12 18-6 c6-6 18-2 18 8 c8 2 10 14 2 18 c-2 8-14 10-20 6 c-8 6-22 4-24-4 c-8 0-12-4-12-10z', o.color),
    L('M30 56 c2 3 2 6 0 9 M48 50 c2 3 2 7 0 10 M62 56 c2 3 2 6 0 9 M72 66 c-1 3-3 5-6 6', { width: 1.2, opacity: 0.55 }),
    ...(o.inner ? [E(64, 50, 6, 5, o.inner)] : [])
  ],
  fingers: o => [
    ...[[-38, 0], [-18, 4], [0, 0], [18, 4], [38, 0]].map(([r]) => G(`rotate(${r} 50 30)`, [E(50, 58, 6, 26, o.color)])),
    E(50, 30, 10, 7, illoShade(o.color, -0.1))
  ],
  longRoot: o => [
    ...(o.leaves !== false ? [L('M48 24 c-6-8-10-14-14-18 M50 24 v-18 M52 24 c6-8 10-14 14-18', { width: 3, stroke: IC.herb })] : []),
    P(o.thin ? 'M46 22 h8 c0 24-2 48-4 70 c-2-22-4-46-4-70z' : o.stubby
      ? 'M34 24 h32 c4 20 2 44-6 60 c-4 6-16 6-20 0 c-8-16-10-40-6-60z'
      : 'M38 22 h24 c2 24 0 46-6 64 c-2 4-10 4-12 0 c-6-18-8-40-6-64z', o.color),
    ...(o.top ? [P(o.stubby ? 'M34 24 h32 c1 6 1.5 12 1.5 18 h-35 c0-6 0.5-12 1.5-18z' : 'M38 22 h24 c0.6 5 0.8 9 0.8 13 h-25.6 c0-4 0.2-8 0.8-13z', o.top)] : []),
    L(o.thin ? 'M48 40 h4 M48 56 h4 M49 72 h2' : 'M42 46 h6 M54 58 h5 M44 70 h5', { width: 1.2, opacity: 0.55 })
  ],
  bulb: o => [
    P('M50 20 c4 8 26 18 26 38 c0 14-12 26-26 26 c-14 0-26-12-26-26 c0-20 22-30 26-38z', o.color),
    L('M50 30 c-8 12-10 30-6 52 M50 30 c8 12 10 30 6 52', { width: 1.2, opacity: 0.5 }),
    L('M44 84 l-2 6 M50 84 v6 M56 84 l2 6', { width: 1.4 }),
    L('M50 20 c-1-4 0-8 2-12', { width: 2 })
  ],
  bulbs: o => [G('translate(-14 6) scale(0.8) translate(12 10)', ILLO_FORMS.bulb(o)), G('translate(18 10) scale(0.7) translate(20 18)', ILLO_FORMS.bulb(o))],
  chili: o => {
    const pod = (t, c) => G(t, [
      P('M34 26 c8 4 14 18 18 34 c4 16 10 24 20 30 c-12 2-26-8-32-24 c-5-12-8-28-6-40z', c),
      P('M30 22 c2-4 6-6 8-2 c2 3 0 6-4 6z', IC.herb),
      L('M32 21 c-2-4-2-8 0-12', { width: 2, stroke: IC.deepGreen })
    ]);
    if (o.many) return [pod('translate(-12 -2) scale(0.75) translate(14 10)', o.color), pod('translate(14 4) scale(0.75) translate(10 6)', o.alt || o.color), pod('translate(0 10) scale(0.7) translate(20 20)', o.color)];
    return [pod('', o.color)];
  },
  mushroom: o => {
    if (o.kind === 'enoki') {
      const s = [], c = [];
      for (let i = 0; i < 9; i++) { const x = 32 + i * 4.5; const y = 18 + (i % 3) * 5; s.push(`M50 86 Q${(50 + x) / 2} 60 ${x} ${y + 3}`); c.push(E(x, y, 3.4, 2.6, o.color)); }
      return [P('M40 74 h20 l-2 14 h-16z', IC.tan), L(s.join(' '), { width: 3.4 }), L(s.join(' '), { width: 1.8, stroke: o.color }), ...c];
    }
    if (o.kind === 'ear') return [P('M20 56 c-4-16 10-30 26-28 c6-10 26-8 30 6 c10 6 8 22-2 28 c-4 12-22 16-30 8 c-12 4-24-2-24-14z', o.color), L('M34 50 c6 4 10 4 16 0 M50 40 c4 6 4 12 0 18 M60 56 c4 2 6 6 4 10', { width: 1.2, stroke: ILLO_PAPER, opacity: 0.6 })];
    const one = (t, c) => G(t, [
      P('M42 50 h16 l2 30 c0 3-4 5-10 5 c-6 0-10-2-10-5z', IC.cream),
      P('M22 52 c0-18 12-30 28-30 c16 0 28 12 28 30 c-8 3-48 3-56 0z', c),
      ...(o.kind === 'dried' ? [L('M36 36 l6 6 M56 32 l-4 8 M62 42 l-6 2 M44 30 l2 6', { width: 1.6, stroke: ILLO_PAPER })] : [])
    ]);
    if (o.kind === 'cluster') return [one('translate(-16 6) scale(0.7) translate(16 20)', o.color), one('translate(16 8) scale(0.65) translate(22 24)', o.color), one('translate(0 -6) scale(0.75) translate(16 14)', o.color)];
    return [one('', o.color)];
  },
  fruit: o => [
    Ci(50, 54, o.small ? 22 : 30, o.color),
    ...(o.eyes ? [Ci(44, 46, 2.4, IC.darkBrown), Ci(56, 46, 2.4, IC.darkBrown), Ci(50, 56, 2.4, IC.darkBrown)] : []),
    ...(o.stripes ? [L('M30 46 c10 6 30 6 40 0 M28 58 c12 6 32 6 44 0 M34 70 c10 4 22 4 32 0', { width: 1.2, opacity: 0.5, stroke: ILLO_PAPER })] : []),
    ...(o.rings ? [L('M28 46 c12 4 32 4 44 0 M24 58 c14 4 38 4 52 0 M30 70 c12 4 28 4 40 0', { width: 1.2, opacity: 0.6 })] : []),
    L(`M50 ${o.small ? 32 : 24} c0-4 1-8 4-10`, { width: 2.2 }),
    ...(o.leaf !== false ? [E(o.small ? 60 : 62, o.small ? 26 : 18, 8, 4, IC.herb, -20)] : []),
    E(40, 44, 4, 6, ILLO_PAPER, 30)
  ],
  smallFruits: o => [[34, 62], [62, 64], [48, 42]].map(([x, y]) => G(`translate(${x - 50} ${y - 54}) scale(0.55) translate(${(50 * 0.45) / 0.55} ${(54 * 0.45) / 0.55})`, ILLO_FORMS.fruit({ ...o, small: false }))),
  pear: o => [
    P('M50 24 c8 0 10 10 12 18 c8 6 14 14 14 24 c0 12-12 20-26 20 c-14 0-26-8-26-20 c0-10 6-18 14-24 c2-8 4-18 12-18z', o.color),
    L('M50 24 c0-6 2-10 6-12', { width: 2.2 }), E(64, 14, 8, 4, IC.herb, -20),
    ...scatter(8, 50, 64, 16, 12, 2).map(([x, y]) => Ci(x, y, 0.9, IC.darkBrown))
  ],
  gourd: o => {
    const shape = o.round ? 'M50 18 c18 0 30 18 30 36 c0 18-12 32-30 32 c-18 0-30-14-30-32 c0-18 12-36 30-36z'
      : o.thin ? 'M44 16 c6-2 12-2 14 4 c4 20 4 44 0 62 c-2 6-12 6-14 0 c-4-18-4-42 0-66z'
      : 'M42 16 c10-4 18 0 20 8 c6 20 8 40 2 56 c-4 8-20 8-24 0 c-6-16-6-40 2-64z';
    return [
      P(shape, o.color),
      ...(o.bumps ? scatter(18, 52, 52, 7, 26, 6).map(([x, y]) => E(x, y, 1.8, 3, illoShade(o.color, 0.25))) : []),
      ...(o.stripes ? [L('M46 22 c-4 20-4 40 0 58 M54 22 c4 20 4 40 0 58', { width: 1.4, stroke: ILLO_PAPER, opacity: 0.6 })] : []),
      P(o.round ? 'M42 20 c4-6 12-6 16 0 l-4 4 h-8z' : 'M42 18 c4-6 14-6 18 0 l-4 5 h-10z', o.cap || IC.herb),
      L(o.round ? 'M50 14 v-6' : 'M51 13 v-7', { width: 2.4 })
    ];
  },
  beans: o => { // long beans / moringa pods
    const lines = o.straight
      ? 'M24 84 L60 14 M32 86 L68 18 M40 88 L76 22'
      : 'M50 20 c26 0 30 26 6 30 c-24 4-26 28 0 30 c20 2 24-10 18-18 M40 22 c-20 6-16 26 6 28';
    return [L(lines, { width: 7, stroke: ILLO_INK }), L(lines, { width: 4, stroke: o.color })];
  },
  pod: o => [
    P('M20 66 c-2-10 6-14 12-12 c2-10 12-12 18-6 c6-8 18-6 20 4 c8-2 14 8 10 14 c-6 12-20 6-24 4 c-6 6-18 6-22-2 c-6 4-14 4-14-2z', o.color),
    L('M30 58 c2 4 2 8 0 10 M48 52 c2 4 2 8 0 12 M64 54 c2 4 2 8 0 10', { width: 1.2, opacity: 0.5 }),
    L('M78 64 c4 2 8 2 10-2', { width: 2 })
  ],
  peapod: o => [...[[-12, 0], [10, 8]].map(([dx, dy]) => G(`translate(${dx} ${dy}) rotate(-24 50 50)`, [
    P('M22 50 c0-8 6-10 12-10 h32 c6 0 12 2 12 10 c0 8-6 10-12 10 h-32 c-6 0-12-2-12-10z', o.color),
    L('M34 46 c2 4 2 4 0 8 M48 46 c2 4 2 4 0 8 M62 46 c2 4 2 4 0 8', { width: 1.4, opacity: 0.5 })
  ]))],
  cluster: o => [ // pea eggplant / green peppercorns
    L('M50 12 c0 20-6 36-14 52 M50 30 c6 10 14 18 22 22 M44 46 c-8 4-16 6-22 4', { width: 2.2, stroke: IC.deepGreen }),
    ...scatter(16, 50, 56, 22, 22, 13).map(([x, y]) => fine(Ci(x, y, o.small ? 3.4 : 5.2, o.color), o.small ? 1.2 : 1.8))
  ],
  lotus: o => [
    Ci(50, 52, 32, o.color),
    Ci(50, 52, 6, ILLO_PAPER),
    ...[0, 1, 2, 3, 4, 5, 6].map(i => { const a = (i / 7) * Math.PI * 2; return E(50 + Math.cos(a) * 19, 52 + Math.sin(a) * 19, 6, 5, ILLO_PAPER); })
  ],
  shoot: o => [
    P('M34 86 c-4-20 2-48 16-70 c14 22 20 50 16 70z', o.color),
    L('M36 74 c8-6 20-6 28 0 M38 60 c6-6 18-6 24 0 M42 46 c4-4 12-4 16 0 M45 32 c2-2 8-2 10 0', { width: 1.4 })
  ],
  blossom: o => [
    P('M50 12 c18 14 26 34 22 52 c-2 12-12 22-22 22 c-10 0-20-10-22-22 c-4-18 4-38 22-52z', o.color),
    L('M50 24 c-10 14-14 30-12 48 M50 24 c10 14 14 30 12 48 M50 26 v56', { width: 1.2, opacity: 0.5, stroke: ILLO_PAPER })
  ],
  coconut: o => [
    Ci(50, 54, 30, IC.brown),
    P('M24 44 c8-6 44-6 52 0 c-4 4-48 4-52 0z', IC.white),
    L('M30 66 l6 4 M44 72 l4 6 M60 70 l4-4 M66 60 l6 2', { width: 1.2, opacity: 0.6, stroke: ILLO_PAPER }),
    Ci(44, 36, 2.2, IC.darkBrown), Ci(56, 36, 2.2, IC.darkBrown)
  ],

  // Leaves
  leaf: o => {
    if (o.kind === 'double') return [G('rotate(-30 50 50)', [E(50, 32, 10, 18, o.color), E(50, 66, 12, 20, illoShade(o.color, -0.08)), L('M50 14 v72', { width: 1.2, opacity: 0.6 })])];
    if (o.kind === 'heart') return [P('M50 86 c-20-14-34-30-30-48 c2-12 18-16 30-4 c12-12 28-8 30 4 c4 18-10 34-30 48z', o.color), L('M50 34 v50 M50 50 l-14-8 M50 50 l14-8 M50 64 l-12-6 M50 64 l12-6', { width: 1.2, opacity: 0.5 })];
    if (o.kind === 'blades') return [...[-24, -10, 6, 20].map((r, i) => G(`rotate(${r} 50 88)`, [P('M46 88 c-2-24-1-50 4-76 c5 26 6 52 4 76z', i % 2 ? o.color : illoShade(o.color, -0.1))]))];
    if (o.kind === 'sprig') return [L('M50 88 c-2-24 0-50 4-74', { width: 2, stroke: IC.deepGreen }), ...[22, 32, 42, 52, 62, 72].flatMap((y, i) => [E(42, y, 4, 7, o.color, -50 + i * 2), E(58, y + 4, 4, 7, o.color, 50 - i * 2)])];
    // serrated broad leaf (perilla / shiso)
    return [P('M50 88 c-24-10-34-30-30-50 l4 2 l0-6 l4 2 l2-6 l4 2 l4-6 l4 2 l4-8 l4 8 l4-2 l4 6 l4-2 l2 6 l4-2 l0 6 l4-2 c4 20-6 40-30 50z', o.color), L('M50 86 v-60 M50 50 l-14-10 M50 50 l14-10 M50 66 l-12-8 M50 66 l12-8', { width: 1.2, opacity: 0.5 })];
  },

  // Spices
  powder: o => [
    E(50, 72, 38, 11, IC.cream),
    P('M22 70 c4-22 52-22 56 0 c-10 6-46 6-56 0z', o.color),
    ...scatter(10, 50, 60, 16, 4, 17).map(([x, y]) => ({ ...Ci(x, y, 0.9, illoShade(o.color, -0.3)), noStroke: true }))
  ],
  seeds: o => {
    const shape = o.shape || 'round';
    const n = { round: 16, oval: 14, bean: 10, nut: 8, pearl: 10, flake: 12 }[shape];
    const seed = ([x, y, r]) => fine(shape === 'round' ? Ci(x, y, (o.size || 3) * 1.15, o.color)
      : shape === 'oval' ? E(x, y, 2, 5, o.color, r * 180)
      : shape === 'bean' ? E(x, y, 5, 3.8, o.color, r * 180)
      : shape === 'nut' ? P(`M${x - 6} ${y} c0-7 12-7 12-2 c-3.5 0-7 2.4-7 7 c-3.5 0-5-2.4-5-5z`, o.color)
      : shape === 'pearl' ? Ci(x, y, 4.6, o.color)
      : P(`M${x - 4} ${y - 2} l6 -2.4 l3.4 6 l-6.6 3.4z`, o.color), 1.1);
    return [...dishMound(o.color), ...moundPoints(n, shape.length * 3 + 1).map(seed)];
  },
  star: o => {
    let d = '';
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2, b = a + Math.PI / 8, c = a - Math.PI / 8;
      d += `${i ? 'L' : 'M'}${(50 + Math.cos(c) * 8).toFixed(1)} ${(52 + Math.sin(c) * 8).toFixed(1)} L${(50 + Math.cos(a) * 32).toFixed(1)} ${(52 + Math.sin(a) * 32).toFixed(1)} L${(50 + Math.cos(b) * 8).toFixed(1)} ${(52 + Math.sin(b) * 8).toFixed(1)} `;
    }
    return [P(d + 'z', o.color), ...[0, 2, 4, 6].map(i => { const a = (i / 8) * Math.PI * 2 + Math.PI / 8; return Ci(50 + Math.cos(a) * 14, 52 + Math.sin(a) * 14, 2.2, IC.amber); })];
  },
  sticks: o => [[-20, 0], [-8, 10], [6, -4]].map(([r, dy]) => G(`rotate(${r} 50 50) translate(0 ${dy})`, [
    P('M20 44 h56 a4 7 0 0 1 0 14 h-56 a4 7 0 0 1 0-14z', o.color),
    L('M76 46 c-3 2-3 8 0 10', { width: 1.2 })
  ])),
  pods: o => scatter(7, 50, 54, 22, 18, 21).map(([x, y, r]) => G(`rotate(${r * 180} ${x} ${y})`, [P(`M${x - 9} ${y} c4-6 14-6 18 0 c-4 6-14 6-18 0z`, o.color), L(`M${x - 5} ${y} h10`, { width: 0.9, opacity: 0.5 })])),
  cloves: o => scatter(7, 50, 54, 22, 18, 25).map(([x, y, r]) => G(`rotate(${r * 360} ${x} ${y})`, [
    L(`M${x} ${y} v16`, { width: 4.2 }), L(`M${x} ${y} v16`, { width: 2.2, stroke: o.color }),
    Ci(x, y - 2, 3.6, o.color)
  ])),
  threads: o => [
    E(50, 66, 34, 11, IC.cream),
    L('M30 62 c6-14 12-10 14-24 M40 64 c4-10 12-12 12-26 M50 64 c4-12 14-10 16-24 M58 66 c2-8 10-10 12-18 M34 66 c10-6 16-4 22-12', { width: 2.4, stroke: o.color })
  ],

  // Seafood and meat
  fish: o => scatter(o.many ? 5 : 1, 50, 52, o.many ? 20 : 0, o.many ? 20 : 0, 31).map(([x, y, r]) => {
    const s = o.many ? 0.5 : 1;
    return G(`translate(${x} ${y}) rotate(${o.many ? r * 60 - 30 : -10}) scale(${s}) translate(-50 -50)`, [
      P('M16 50 c10-16 36-20 56-8 l14-10 c-2 8-2 28 0 36 l-14-10 c-20 12-46 8-56-8z', o.color),
      Ci(28, 47, 2.4, ILLO_INK), L('M40 40 c4 6 4 14 0 20', { width: 1.2, opacity: 0.6 })
    ]);
  }),
  shrimp: o => {
    const one = t => G(t, [
      P('M64 26 c14 6 20 22 14 36 c-6 14-22 22-38 18 l-8 6 c-2-6 0-10 4-12 c12 2 24-4 28-14 c4-10 0-20-8-24z', o.color),
      L('M70 34 l-6 4 M74 46 l-8 2 M72 58 l-8 0 M64 68 l-6-2', { width: 1.2, opacity: 0.6 }),
      L('M64 26 c-10-6-24-6-34 0 M66 30 c-8-2-18 0-24 6', { width: 1.2 })
    ]);
    return o.many ? [one('translate(-14 -2) scale(0.6) translate(20 30)'), one('translate(10 18) scale(0.6) translate(20 20)'), one('translate(14 -12) scale(0.55) translate(24 30)')] : [one('')];
  },
  squid: o => [
    P('M50 10 l14 22 c4 20 2 36-4 46 h-20 c-6-10-8-26-4-46z', o.color),
    L('M42 78 c-4 6-4 10-8 12 M48 78 c0 6-2 10-2 12 M52 78 c0 6 2 10 2 12 M58 78 c4 6 4 10 8 12', { width: 2.2, stroke: o.color }),
    L('M42 78 c-4 6-4 10-8 12 M48 78 c0 6-2 10-2 12 M52 78 c0 6 2 10 2 12 M58 78 c4 6 4 10 8 12', { width: 0.8 })
  ],
  fishcake: o => o.kind === 'kamaboko'
    ? [P('M18 70 c0-26 64-26 64 0z', IC.white), P('M18 70 c0-26 64-26 64 0 c-3 0-4 0-6 0 c-2-20-50-20-52 0z', IC.salmon), P('M14 70 h72 v8 h-72z', IC.tan)]
    : [...[0, 1, 2].map(i => G(`rotate(${-10 + i * 8} 50 50)`, [P(`M22 ${40 + i * 10} h56 c3 0 4 2 4 4 v4 c0 2-1 4-4 4 h-56 c-3 0-4-2-4-4 v-4 c0-2 1-4 4-4z`, illoShade(o.color, i * 0.06))]))],
  flakes: o => [...dishMound(o.color), ...moundPoints(12, 41).map(([x, y, r]) => fine(P(`M${x - 6} ${y - 1} l9 -3.6 l3.4 6 l-8.4 4.4z`, r > 0.5 ? o.color : illoShade(o.color, 0.18)), 1.1))],
  sausage: o => [
    ...[[0, 0], [8, 14]].map(([dx, dy]) => G(`translate(${dx} ${dy}) rotate(-20 50 50)`, [
      P('M18 42 h64 a6 7 0 0 1 0 14 h-64 a6 7 0 0 1 0-14z', o.color),
      ...scatter(8, 50, 49, 26, 3, dx + 3).map(([x, y]) => ({ ...Ci(x, y, 1.5, IC.cream), noStroke: true }))
    ])),
    L('M12 36 c-2 4-2 8 2 10', { width: 1.6 })
  ],
  slab: o => [ // pork belly: layered slab
    P('M18 40 l30-12 h36 l-30 12z', illoShade(o.color, 0.1)),
    P('M18 40 h36 v34 h-36z', o.color),
    P('M54 40 l30-12 v34 l-30 12z', illoShade(o.color, -0.12)),
    L('M18 50 h36 M18 58 c12-2 24 2 36 0 M18 66 h36', { width: 2.2, stroke: IC.cream }),
    L('M18 50 h36 M18 58 c12-2 24 2 36 0 M18 66 h36', { width: 0.8 })
  ],
  slices: o => [0, 1, 2].map(i => G(`rotate(${-14 + i * 12} 50 60) translate(0 ${i * 8 - 8})`, [
    P('M20 50 c10-8 50-8 60 0 c-4 6-14 8-30 8 c-16 0-26-2-30-8z', i % 2 ? illoShade(o.color, -0.1) : o.color),
    L('M30 50 c8-2 32-2 40 0', { width: 1, stroke: IC.cream, opacity: 0.8 })
  ])),
  ribs: o => [...[[0, 0], [10, 16]].map(([dx, dy]) => G(`translate(${dx - 4} ${dy - 6})`, [
    P('M18 40 h52 c4 0 6 3 6 6 v10 c0 3-2 6-6 6 h-52 c-4 0-6-3-6-6 v-10 c0-3 2-6 6-6z', o.color),
    P('M76 46 h10 a3 4 0 0 1 0 8 h-10z', IC.cream),
    L('M22 46 c8 4 16 4 24 0', { width: 1, stroke: IC.cream })
  ]))],
  skewer: o => [
    L('M14 86 L86 14', { width: 4, stroke: ILLO_INK }), L('M14 86 L86 14', { width: 2, stroke: IC.tan }),
    ...[[34, 66], [50, 50], [66, 34]].map(([x, y]) => G(`rotate(-45 ${x} ${y})`, [P(`M${x - 11} ${y - 8} h22 c2 0 3 2 3 4 v8 c0 2-1 4-3 4 h-22 c-2 0-3-2-3-4 v-8 c0-2 1-4 3-4z`, o.color), L(`M${x - 6} ${y - 8} v16 M${x + 4} ${y - 8} v16`, { width: 1.6, stroke: IC.darkBrown })]))
  ],
  wrapped: o => [ // cha lua — a log wrapped in banana leaf
    P('M16 40 h56 v30 h-56z', IC.herb),
    L('M24 40 v30 M36 40 v30 M48 40 v30 M60 40 v30', { width: 1, opacity: 0.5 }),
    E(72, 55, 10, 15, o.color),
    E(16, 55, 10, 15, IC.deepGreen)
  ],
  eggs: o => [[36, 58, -14], [62, 60, 12], [48, 38, 4]].map(([x, y, r]) => G(`rotate(${r} ${x} ${y})`, [
    E(x, y, 13, 16, o.color),
    ...scatter(6, x, y, 9, 11, x).map(([sx, sy, sr]) => ({ ...E(sx, sy, 2.4 * sr + 1, 1.6 * sr + 1, IC.brown), noStroke: true }))
  ]))
};

// Leafy greens, each drawn from its shelf silhouette so they don't blur together
const stem = (d, color, w = 4) => [L(d, { width: w + 2.4 }), L(d, { width: w, stroke: color })];
const tie = () => P('M44 74 h12 v7 h-12z', IC.tan, { sw: 1.6 });

const ILLO_GREENS = {
  // Gai lan: thick pale stems, broad blue-green leaves, white flower buds
  gailan: o => [
    ...stem('M48 90 C46 70 40 50 36 30 M50 90 C50 64 50 42 52 20 M52 90 C56 70 62 52 66 32', IC.paleGreen, 5),
    E(28, 54, 11, 18, o.color, -30), E(72, 56, 11, 18, o.color, 30), E(44, 42, 9, 15, illoShade(o.color, 0.12), -10),
    L('M22 64 L34 44 M78 66 L66 46 M42 54 L46 30', { width: 1.2, stroke: IC.paleGreen }),
    ...[[36, 26], [52, 16], [66, 28]].flatMap(([x, y]) => [fine(Ci(x - 3, y + 1, 3, IC.paleGreen)), fine(Ci(x + 3, y + 1, 3, IC.paleGreen)), fine(Ci(x, y - 3, 3.2, IC.white))]),
    tie()
  ],
  // Choy sum: slim stems, narrow oval leaves, little yellow flowers on top
  choysum: o => [
    ...stem('M48 90 C44 66 38 44 34 22 M50 90 C50 64 50 40 50 14 M52 90 C56 66 62 44 66 24', IC.paleGreen, 3),
    E(32, 58, 7, 14, o.color, -28), E(68, 58, 7, 14, o.color, 28), E(40, 40, 6, 12, illoShade(o.color, -0.1), -14), E(60, 42, 6, 12, illoShade(o.color, -0.1), 14),
    ...[[34, 18], [50, 10], [66, 20]].flatMap(([x, y]) => [fine(Ci(x - 3, y, 2.6, IC.yellow)), fine(Ci(x + 3, y, 2.6, IC.yellow)), fine(Ci(x, y - 4, 2.6, IC.yellow))]),
    tie()
  ],
  // Water spinach (kangkong / ong choy): long hollow stems, arrow-shaped leaves
  kangkong: o => {
    const arrow = (x, y, r) => G(`translate(${x} ${y}) rotate(${r})`, [P('M0 -17 C6 -9 7 -1 6 5 L1.5 1.5 L0 6 L-1.5 1.5 L-6 5 C-7 -1 -6 -9 0 -17z', o.color, { sw: 1.8 })]);
    const stems = 'M46 90 C42 68 32 48 26 30 M50 90 C50 66 49 46 48 24 M54 90 C58 68 66 50 74 32';
    return [
      ...stem(stems, IC.paleGreen, 2.6),
      arrow(26, 28, -24), arrow(48, 22, -4), arrow(74, 30, 26),
      arrow(30, 52, -58), arrow(68, 54, 58), arrow(40, 40, -36), arrow(60, 42, 36),
      tie()
    ];
  },
  // Korean spinach (sigeumchi): spoon-shaped leaves fanning from a pink root
  spinach: o => [
    ...[-50, -30, -10, 10, 30, 50].map((r, i) => G(`rotate(${r} 50 78)`, [
      L('M50 78 V50', { width: 2.4, stroke: IC.paleGreen }),
      E(50, 38, 9, 14, i % 2 ? o.color : illoShade(o.color, 0.1)),
      L('M50 27 V50', { width: 1, stroke: IC.paleGreen })
    ])),
    P('M42 76 c2-6 14-6 16 0 l-6 14 h-4z', IC.pink),
    L('M48 90 l-2 6 M50 90 v6 M52 90 l2 6', { width: 1.2 })
  ],
  // Taiwanese mustard greens: big ruffled leaves with thick pale ribs
  mustard: o => {
    const leaf = (t, c) => G(t, [
      P('M50 88 c-14-6-28-20-30-40 c-2-6 2-8 4-12 c-2-6 4-10 8-12 c2-6 10-8 14-6 c4-4 12-4 16 0 c6 0 10 6 10 10 c6 4 6 10 4 14 c4 6 2 10 0 14 c-4 16-14 26-26 32z', c),
      P('M46 88 c0-20 2-44 4-64 c2 20 4 44 4 64z', IC.cream, { sw: 1.6 }),
      L('M50 50 l-16-10 M50 62 l-18-8 M51 50 l16-10 M51 62 l18-8', { width: 1.2, stroke: IC.cream })
    ]);
    return [leaf('rotate(-18 50 88)', illoShade(o.color, -0.08)), leaf('rotate(16 50 88)', o.color)];
  },
  // Fernbrake (gosari): brown stems ending in curled fiddleheads
  gosari: o => {
    const d = [[30, -10], [42, -4], [54, 4], [66, 10]].map(([x, dx], i) =>
      `M${x + 10} 90 C${x + 8} 66 ${x + dx} 50 ${x + dx} ${28 + (i % 2) * 8} c0-8 10-8 10 0 c0 5-6 5-6 0`).join(' ');
    return [...stem(d, o.color, 3.2), tie()];
  }
};

// --- Leafy herbs ------------------------------------------------------------
// Leaf outline pointing up from (0,0) to (0,-len). teeth > 0 gives a serrated
// edge; tip < 1 makes a blunter, rounder leaf.
function leafPath(len, w, { teeth = 0, tip = 1 } = {}) {
  const n = teeth ? teeth * 2 : 16;
  const half = t => w * Math.pow(Math.sin(Math.PI * Math.pow(t, 0.85)), 0.8) * (1 - 0.35 * t * tip);
  const right = [], left = [];
  for (let i = 1; i < n; i++) {
    const t = i / n, notch = teeth && i % 2 ? 0.8 : 1;
    right.push([half(t) * notch, -len * t]);
  }
  right.forEach(([x, y]) => left.unshift([-x, y]));
  const pts = [[0, 0], ...right, [0, -len], ...left];
  return 'M' + pts.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(' L') + 'z';
}

function leafAt(x, y, rot, len, w, color, opts = {}) {
  return G(`translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${rot.toFixed(1)})`, [
    P(leafPath(len, w, opts), color, { sw: opts.sw || (len < 30 ? 1.4 : 1.8), off: len < 30 ? 1.3 : undefined }),
    ...(opts.rib === false ? [] : [L(`M0 -1 V${(-len * 0.8).toFixed(1)}`, { width: len < 30 ? 0.7 : 0.9, stroke: opts.rib || IC.paleGreen })]),
    ...(opts.mark || [])
  ]);
}

// A point and heading (degrees, 0 = up) along a cubic stem
function stemAt([p0, p1, p2, p3], t) {
  const u = 1 - t;
  const pt = i => u * u * u * p0[i] + 3 * u * u * t * p1[i] + 3 * u * t * t * p2[i] + t * t * t * p3[i];
  const d = i => 3 * u * u * (p1[i] - p0[i]) + 6 * u * t * (p2[i] - p1[i]) + 3 * t * t * (p3[i] - p2[i]);
  return [pt(0), pt(1), Math.atan2(d(0), -d(1)) * 180 / Math.PI];
}
const cubic = c => `M${c[0]} C${c[1]} ${c[2]} ${c[3]}`;

// A stem with leaf pairs (or alternating leaves) along it
function sprig(c, { stem: stemColor, width = 2.6, at, len, w, color, spread = 50, alternate = false, leaf = {} }) {
  const leaves = at.flatMap((t, i) => {
    const [x, y, a] = stemAt(c, t);
    const k = 1 - 0.25 * t; // leaves shrink toward the tip
    const sides = alternate ? [i % 2 ? 1 : -1] : [-1, 1];
    return sides.map(s => leafAt(x, y, a + s * spread, len * k, w * k, typeof color === 'function' ? color(i, s) : color, leaf));
  });
  return [...stem(cubic(c), stemColor, width), ...leaves];
}

const ILLO_HERBS = {
  // Thai basil: glossy pointed leaves on purple stems, purple flower spikes
  thaiBasil: o => {
    const stems = [[[50, 92], [46, 72], [34, 52], [26, 36]], [[50, 92], [52, 68], [54, 46], [56, 28]], [[50, 92], [58, 76], [70, 62], [78, 48]]];
    const spike = c => { const [x, y, a] = stemAt(c, 1); return G(`translate(${x} ${y}) rotate(${a})`, [0, 1, 2, 3].map(i => fine(E(0, -3 - i * 5, 4.4 - i * 0.7, 2.6, i % 2 ? IC.lilac : IC.purple), 1.3))); };
    return [
      ...stems.flatMap(c => sprig(c, { stem: IC.purple, at: [0.35, 0.6, 0.85], len: 17, w: 7, color: o.color, spread: 58, leaf: { rib: IC.lilac } })),
      ...stems.slice(0, 2).map(spike)
    ];
  },
  // Holy basil: small toothed leaves, many pairs, slender green flower spikes
  holyBasil: o => {
    const stems = [[[48, 92], [44, 70], [34, 52], [26, 34]], [[50, 92], [50, 66], [50, 42], [50, 20]], [[52, 92], [58, 72], [66, 54], [74, 36]]];
    const spike = c => { const [x, y, a] = stemAt(c, 1); return G(`translate(${x} ${y}) rotate(${a})`, [L('M0 0 V-16', { width: 1.4, stroke: IC.paleGreen }), ...[0, 1, 2, 3, 4].map(i => fine(Ci(i % 2 ? 2 : -2, -3 - i * 3.4, 2.1, i < 2 ? IC.purple : IC.lilac), 0.9))]); };
    return [
      ...stems.flatMap(c => sprig(c, { stem: IC.brickRed, width: 2, at: [0.3, 0.58, 0.84], len: 13, w: 6, color: (i, s) => (i + (s > 0 ? 1 : 0)) % 2 ? o.color : '#6E6A44', spread: 62, leaf: { teeth: 4, sw: 1.5 } })),
      ...stems.map(spike)
    ];
  },
  // Vietnamese mint (rau răm): narrow lance leaves, each with a dark chevron
  vietMint: o => {
    const chevron = [L('M-3.4 -11 L0 -7 L3.4 -11', { width: 2.2, stroke: IC.brickRed })];
    const stems = [[[46, 92], [42, 70], [32, 50], [24, 30]], [[50, 92], [52, 66], [50, 40], [52, 14]], [[54, 92], [60, 72], [70, 54], [78, 36]]];
    return stems.flatMap(c => sprig(c, { stem: IC.brickRed, width: 2, at: [0.3, 0.52, 0.74, 0.95], len: 23, w: 6, color: o.color, spread: 42, alternate: true, leaf: { mark: chevron, tip: 1.3, rib: false } }));
  },
  // Lao mint: stacked pairs of round, wrinkled, toothed leaves
  laoMint: o => {
    const veins = [L('M0 -4 l-3 -2 M0 -7 l3 -2 M0 -9 l-2.6 -1.6', { width: 0.8, stroke: IC.paleGreen })];
    const stems = [[[44, 92], [42, 68], [36, 46], [32, 22]], [[56, 92], [58, 70], [62, 50], [66, 28]]];
    return stems.flatMap(c => [
      ...sprig(c, { stem: IC.paleGreen, width: 3, at: [0.22, 0.48, 0.74, 1], len: 14, w: 9, color: (i, s) => s > 0 ? o.color : illoShade(o.color, -0.1), spread: 70, leaf: { teeth: 7, tip: 0.4, mark: veins } })
    ]);
  },
  // Lao dill: feathery thread-like fronds and a yellow umbrella of flowers
  laoDill: o => {
    const frond = (c, n) => {
      const lines = [];
      for (let i = 1; i <= n; i++) {
        const [x, y, a] = stemAt(c, i / (n + 1));
        const r = a * Math.PI / 180, l = 10 - i * 0.6;
        for (const s of [-1, 1]) {
          const b = r + s * 1.0;
          lines.push(`M${x.toFixed(1)} ${y.toFixed(1)} l${(Math.sin(b) * l).toFixed(1)} ${(-Math.cos(b) * l).toFixed(1)}`);
        }
      }
      return [L(cubic(c), { width: 1.6, stroke: o.color }), L(lines.join(' '), { width: 1.1, stroke: o.color })];
    };
    const umbel = [];
    for (let i = 0; i < 7; i++) {
      const a = (-60 + i * 20) * Math.PI / 180, ex = 50 + Math.sin(a) * 16, ey = 26 - Math.cos(a) * 12;
      umbel.push(L(`M50 30 L${ex.toFixed(1)} ${ey.toFixed(1)}`, { width: 1.1, stroke: o.color }), fine(Ci(ex, ey, 2.4, IC.yellow), 1));
    }
    return [
      ...stem('M50 92 C50 70 50 50 50 30', IC.paleGreen, 2.6),
      ...frond([[50, 86], [42, 82], [30, 78], [16, 70]], 6),
      ...frond([[50, 84], [58, 80], [70, 76], [84, 68]], 6),
      ...frond([[50, 76], [40, 70], [28, 62], [18, 48]], 7),
      ...frond([[50, 70], [60, 64], [72, 56], [82, 42]], 7),
      ...frond([[50, 60], [42, 56], [34, 50], [28, 40]], 5),
      ...frond([[50, 54], [58, 50], [66, 44], [72, 34]], 5),
      ...umbel
    ];
  },
  // Cilantro: lobed flat leaves on fine stems, sold with white roots attached
  cilantro: o => {
    const lobed = (x, y, r, rot) => {
      const pts = [];
      for (let i = 0; i < 72; i++) { // three rounded lobes, each softly scalloped
        const t = (i / 72) * Math.PI * 2;
        const rr = r * (0.76 + 0.24 * Math.cos(3 * t)) * (0.9 + 0.1 * Math.abs(Math.cos(6 * t)));
        pts.push(`${(Math.sin(t) * rr).toFixed(1)} ${(-Math.cos(t) * rr).toFixed(1)}`);
      }
      return G(`translate(${x} ${y}) rotate(${rot})`, [P('M' + pts.join(' L') + 'z', o.color, { sw: 1.5, off: 1.4 }), L(`M0 ${r * 0.9} V${-r * 0.4}`, { width: 0.8, stroke: IC.paleGreen })]);
    };
    const tops = [[24, 34, -40, 9.5], [36, 20, -20, 10], [50, 14, 0, 10.5], [64, 20, 20, 10], [76, 34, 40, 9.5], [42, 42, -10, 8.5], [58, 42, 12, 8.5]];
    return [
      ...stem(tops.map(([x, y]) => `M50 76 Q${(50 + x) / 2} ${(76 + y) / 2 + 8} ${x} ${y + 6}`).join(' '), IC.paleGreen, 1.8),
      ...tops.map(([x, y, rot, r]) => lobed(x, y, r, rot)),
      ...['M44 80 c-2 6-3 10-6 16 c4-4 8-9 10-16z', 'M48 80 c0 7 0 11 2 17 c2-6 2-10 2-17z', 'M52 80 c2 7 3 11 7 15 c-1-6-2-10-3-15z'].map(d => P(d, IC.cream, { sw: 1.3, off: 1 })),
      L('M41 90 l-3 1 M50 92 l3 2 M57 90 l3 0', { width: 0.8 }),
      P('M43 75 h14 v6 h-14z', IC.tan, { sw: 1.4 })
    ];
  },
  // Culantro / sawtooth coriander: a rosette of long saw-edged blades
  culantro: o => [
    ...[-46, -28, -10, 10, 28, 46].map((r, i) => leafAt(50, 90, r, 74 - Math.abs(r) * 0.4, 9, i % 2 ? o.color : illoShade(o.color, -0.1), { teeth: 16, tip: 0.2, sw: 1.8 })),
    leafAt(50, 90, -2, 60, 8.5, illoShade(o.color, 0.08), { teeth: 14, tip: 0.2, sw: 1.8 }),
    P('M44 86 c2-4 10-4 12 0 l-4 8 h-4z', IC.cream, { sw: 1.4 })
  ],
  // Korean perilla (kkaennip): a stack of big round toothed leaves
  kkaennip: o => {
    const veins = (len) => [L(`M0 ${-len * 0.35} l-9 -6 M0 ${-len * 0.35} l9 -6 M0 ${-len * 0.6} l-7 -5 M0 ${-len * 0.6} l7 -5`, { width: 0.9, stroke: IC.paleGreen })];
    return [
      leafAt(46, 86, -22, 62, 24, illoShade(o.color, -0.18), { teeth: 14, tip: 0.5, mark: veins(62) }),
      leafAt(54, 86, 20, 62, 24, illoShade(o.color, -0.08), { teeth: 14, tip: 0.5, mark: veins(62) }),
      leafAt(50, 88, -2, 66, 26, o.color, { teeth: 14, tip: 0.5, mark: veins(66) })
    ];
  },
  // Japanese shiso: crisp, sharply toothed leaves with a long point (green
  // aojiso in front of purple akajiso)
  shiso: o => [
    leafAt(44, 88, -24, 60, 19, IC.purple, { teeth: 16, tip: 1.2, rib: IC.lilac }),
    leafAt(54, 88, 14, 64, 20, o.color, { teeth: 16, tip: 1.2 })
  ],
  // Vietnamese perilla (tía tô): green on top, purple underneath
  tiaTo: o => sprig([[50, 92], [48, 70], [52, 46], [50, 18]], {
    stem: IC.purple, width: 2.6, at: [0.25, 0.55, 0.85], len: 26, w: 12, spread: 62,
    color: (i, s) => (i + (s > 0 ? 1 : 0)) % 2 ? IC.purple : o.color, leaf: { teeth: 9, tip: 0.6, rib: IC.lilac }
  })
};

// --- Ingredient → form rules ------------------------------------------------
// First match wins. Patterns are tested against the English name, so they can
// be as narrow as one ingredient; anything unmatched falls back by category.
const ILLO_RULES = [
  // Soy sauces and other dark seasoning sauces
  [/thick soy|black soy|sweet dark soy|kecap/i, 'bottleLow', { color: IC.soy, cap: IC.red }],
  [/dark soy/i, 'bottle', { color: IC.soy, cap: IC.darkBrown }],
  [/soy sauce|shoyu|ganjang|toyo|golden mountain/i, 'bottle', { color: IC.soyLight, cap: IC.red }],
  [/soybean sauce|yellow bean/i, 'jar', { color: IC.amber, cap: IC.yellow }],
  [/oyster sauce/i, 'bottleLow', { color: IC.darkBrown, cap: IC.red }],
  [/hoisin/i, 'jar', { color: IC.brickRed, cap: IC.red }],
  [/tonkatsu/i, 'bottle', { color: IC.darkBrown, cap: IC.yellow }],
  [/mentsuyu|ponzu/i, 'tallBottle', { color: IC.soyLight, cap: IC.yellow }],

  // Fish sauces and fermented seafood
  [/padaek|fermented fish/i, 'jar', { color: IC.grey, cap: IC.brown, dots: IC.darkBrown }],
  [/fish sauce|patis|aekjeot/i, 'bottle', { color: IC.amber, cap: IC.red }],
  [/shrimp paste \(kapi\)|^shrimp paste/i, 'block', { color: IC.lilac }],
  [/bagoong|shrimp paste|saeujeot/i, 'jar', { color: IC.pink, cap: IC.red }],
  [/dried anchov/i, 'fish', { color: IC.metal, many: true }],
  [/dried squid/i, 'squid', { color: IC.tan }],
  [/dried scallop/i, 'seeds', { color: IC.gold, shape: 'bean', count: 9 }],
  [/dried shrimp/i, 'shrimp', { color: IC.salmon, many: true }],
  [/katsuobushi|bonito/i, 'flakes', { color: IC.pink }],
  [/kamaboko/i, 'fishcake', { kind: 'kamaboko' }],
  [/fish cake|eomuk/i, 'fishcake', { color: IC.tan }],

  // Vinegars, wines and oils
  [/black vinegar|chinkiang/i, 'tallBottle', { color: IC.blackVinegar, cap: IC.red }],
  [/chili vinegar/i, 'jar', { color: IC.vinegar, cap: IC.red, dots: IC.chili }],
  [/vinegar/i, 'tallBottle', { color: IC.vinegar, cap: IC.red }],
  [/shaoxing|rice wine|sake|mirin/i, 'tallBottle', { color: IC.wine, cap: IC.darkBrown }],
  [/chili oil|gochu-gireum/i, 'jar', { color: IC.chili, cap: IC.darkBrown, dots: IC.brickRed }],
  [/coconut oil|ghee/i, 'jar', { color: IC.cream, cap: IC.gold }],
  [/sesame oil|perilla oil/i, 'bottle', { color: IC.oil, cap: IC.red }],
  [/mustard oil/i, 'bottle', { color: IC.mustard, cap: IC.yellow }],

  // Chili sauces and pastes
  [/sriracha|vietnamese chili sauce/i, 'squeeze', { color: IC.chili, cap: IC.herb }],
  [/mayonnaise/i, 'squeeze', { color: IC.cream, cap: IC.red }],
  [/sweet chili sauce/i, 'bottle', { color: IC.orange, cap: IC.red }],
  [/gochujang|ssamjang/i, 'tub', { color: IC.brickRed, cap: IC.red }],
  [/doenjang/i, 'tub', { color: IC.brown, cap: IC.darkBrown }],
  [/miso/i, 'tub', { color: IC.tan, cap: IC.red }],
  [/doubanjiang|nam prik pao|roasted chili paste|curry paste|xo sauce|shacha|satay/i, 'jar', { color: IC.brickRed, cap: IC.red }],
  [/sesame paste/i, 'jar', { color: IC.tan, cap: IC.red }],
  [/tamarind paste/i, 'block', { color: IC.darkBrown }],
  [/fermented tofu/i, 'jar', { color: IC.salmon, cap: IC.red, dots: IC.cream }],
  [/fermented black beans/i, 'seeds', { color: IC.black, shape: 'bean' }],
  [/kimchi/i, 'jar', { color: IC.chili, cap: IC.white, dots: IC.cream }],
  [/mango pickle/i, 'jar', { color: IC.orange, cap: IC.red, dots: IC.yellow }],
  [/umeboshi/i, 'jar', { color: IC.salmon, cap: IC.white, dots: IC.red }],
  [/pickled garlic/i, 'jar', { color: IC.vinegar, cap: IC.red, dots: IC.cream }],
  [/beni shoga/i, 'jar', { color: IC.red, cap: IC.white }],
  [/pickled ginger|gari/i, 'jar', { color: IC.pink, cap: IC.white }],
  [/pickled mustard|preserved radish/i, 'jar', { color: IC.mustard, cap: IC.red }],
  [/yuzu kosho/i, 'smallJar', { color: IC.paleGreen, cap: IC.yellow }],
  [/wasabi/i, 'tube', { color: IC.paleGreen, cap: IC.herb }],
  [/corn syrup/i, 'bottle', { color: IC.gold, cap: IC.yellow }],
  [/condensed milk/i, 'can', { color: IC.blue }],
  [/coconut milk|coconut cream/i, 'can', { color: IC.herb }],
  [/mint chutney/i, 'bowl', { color: IC.herb, bowl: IC.cream }],
  [/raita|yogurt|dahi/i, 'bowl', { color: IC.white, bowl: IC.blue, bits: IC.herb }],
  [/nước chấm|nuoc cham/i, 'bowl', { color: IC.amber, bowl: IC.cream, bits: IC.chili }],
  [/jeow/i, 'bowl', { color: IC.brickRed, bowl: IC.cream, bits: IC.chili }],
  [/dashi\b/i, 'bowl', { color: IC.gold, bowl: IC.darkBrown }],

  // Sugars
  [/palm sugar/i, 'discs', { color: IC.gold }],
  [/jaggery/i, 'lump', { color: IC.amber }],
  [/rock sugar/i, 'crystals', { color: IC.clear }],

  // Spices
  [/star anise/i, 'star', { color: IC.brown }],
  [/cinnamon|cassia/i, 'sticks', { color: IC.brown }],
  [/cardamom/i, 'pods', { color: IC.paleGreen }],
  [/cloves/i, 'cloves', { color: IC.darkBrown }],
  [/saffron/i, 'threads', { color: IC.chili }],
  [/sichuan pepper/i, 'seeds', { color: IC.brickRed, size: 3.4 }],
  [/green peppercorn/i, 'cluster', { color: IC.herb, small: true }],
  [/white pepper/i, 'seeds', { color: IC.cream, size: 2.6 }],
  [/mustard seed/i, 'seeds', { color: IC.darkBrown, size: 2.4 }],
  [/coriander seed/i, 'seeds', { color: IC.tan, size: 3.4 }],
  [/cumin|fennel/i, 'seeds', { color: IC.tan, shape: 'oval' }],
  [/fenugreek/i, 'seeds', { color: IC.mustard, shape: 'flake' }],
  [/annatto/i, 'seeds', { color: IC.brickRed, size: 2.8 }],
  [/sesame seed/i, 'seeds', { color: IC.cream, shape: 'oval', count: 26 }],
  [/chili flakes|prik pon|gochugaru/i, 'flakes', { color: IC.chili }],
  [/turmeric powder|^turmeric$/i, 'powder', { color: IC.yellow }],
  [/chili powder|prik bon|kashmiri/i, 'powder', { color: IC.chili }],
  [/garam masala|five spice|curry powder/i, 'powder', { color: IC.brown }],
  [/amchur|mango powder|asafoetida/i, 'powder', { color: IC.tan }],
  [/rice powder|khao khua|kinako/i, 'powder', { color: IC.tan }],
  [/furikake/i, 'flakes', { color: IC.seaweed }],
  [/fried garlic|fried shallot/i, 'flakes', { color: IC.gold }],

  // Dried goods
  [/nori|gim|roasted seaweed/i, 'squares', { color: IC.seaweed }],
  [/kombu|kelp|dashima/i, 'squares', { color: IC.seaweed, ridges: true }],
  [/wakame/i, 'flakes', { color: IC.seaweed }],
  [/dried shiitake/i, 'mushroom', { color: IC.darkBrown, kind: 'dried' }],
  [/wood ear/i, 'mushroom', { color: IC.black, kind: 'ear' }],
  [/jujube/i, 'smallFruits', { color: IC.brickRed, leaf: false }],
  [/cashew|peanut|pine nut/i, 'seeds', { color: IC.tan, shape: 'nut', count: 12 }],
  [/chickpea flour|flour|cornstarch|tapioca starch|semolina|rava|pancake mix|panko|atta/i, 'bag', { color: IC.white, cap: IC.red }],
  [/chickpeas/i, 'seeds', { color: IC.tan, shape: 'pearl', count: 16 }],
  [/^mung bean|dal\b|lentil/i, 'seeds', { color: IC.mustard, shape: 'bean', count: 22 }],
  [/tapioca pearl/i, 'seeds', { color: IC.clear, shape: 'pearl', count: 18 }],
  [/papad/i, 'discs', { color: IC.cream }],
  [/curry roux/i, 'box', { color: IC.orange }],
  [/coffee/i, 'bag', { color: IC.darkBrown, cap: IC.red }],
  [/dumpling wrapper/i, 'sheets', { color: IC.white }],
  [/wonton wrapper/i, 'squares', { color: IC.yellow }],
  [/rice paper/i, 'sheets', { color: IC.clear, hatch: true }],
  [/lao dried chil/i, 'chili', { color: IC.brickRed, many: true }],

  // Tofu and protein
  [/silken tofu/i, 'block', { color: IC.white }],
  [/tofu puff|aburaage/i, 'cubes', { color: IC.gold }],
  [/dried tofu|dougan/i, 'block', { color: IC.brown }],
  [/tofu skin|yuba/i, 'squares', { color: IC.gold }],
  [/tofu|dubu/i, 'block', { color: IC.cream }],
  [/paneer/i, 'block', { color: IC.white, holes: true }],
  [/natto/i, 'seeds', { color: IC.tan, shape: 'bean', count: 20 }],
  [/quail egg/i, 'eggs', { color: IC.cream }],
  [/sausage|lap cheong/i, 'sausage', { color: IC.red }],
  [/pork belly/i, 'slab', { color: IC.salmon }],
  [/bulgogi/i, 'slices', { color: IC.brickRed }],
  [/short rib|galbi/i, 'ribs', { color: IC.brickRed }],
  [/grilled pork/i, 'skewer', { color: IC.brown }],
  [/pork loaf/i, 'wrapped', { color: IC.pink }],

  // Noodles
  [/ramyeon|instant/i, 'bag', { color: IC.red, cap: IC.black }],
  [/sujebi|hand-torn/i, 'bowl', { color: IC.gold, bowl: IC.cream, bits: IC.white }],
  [/shirataki/i, 'nest', { color: IC.clear }],
  [/glass noodle|dangmyeon|woon sen|sweet potato noodle/i, 'bundle', { color: IC.clear, cap: IC.red }],
  [/kanom jeen|fermented rice noodle/i, 'nest', { color: IC.white }],
  [/fresh egg|ramen|egg noodle|ba mee|canton/i, 'nest', { color: IC.yellow }],
  [/udon|knife-cut|kalguksu/i, 'nest', { color: IC.cream, wide: true }],
  [/naengmyeon|cold noodle/i, 'nest', { color: IC.grey }],
  [/soba/i, 'bundle', { color: IC.grey, cap: IC.red }],
  [/wide rice|sen yai|phở|pho\b|hủ tiếu|bánh canh/i, 'bundle', { color: IC.white, cap: IC.red, wide: true }],
  [/noodle|vermicelli|bihon|somen|sen mee|khao poon/i, 'bundle', { color: IC.white, cap: IC.red }],

  // Rice
  [/tteok|rice cake/i, 'cakes', { color: IC.white }],
  [/rice flour|poha|flattened rice/i, 'bag', { color: IC.white, cap: IC.herb }],
  [/glutinous|sticky|sweet rice|mochi rice|malagkit|chapssal/i, 'bag', { color: IC.white, cap: IC.herb, grains: IC.white }],
  [/rice\b/i, 'bag', { color: IC.cream, cap: IC.red, grains: IC.white }],

  // Produce
  [/kaffir lime leaves/i, 'leaf', { color: IC.deepGreen, kind: 'double' }],
  [/pandan/i, 'leaf', { color: IC.herb, kind: 'blades' }],
  [/betel|lolot/i, 'leaf', { color: IC.deepGreen, kind: 'heart' }],
  [/curry leaves/i, 'leaf', { color: IC.deepGreen, kind: 'sprig' }],
  [/kkaennip/i, 'herbs', { kind: 'kkaennip', color: IC.herb }],
  [/tía tô|^perilla\/shiso/i, 'herbs', { kind: 'tiaTo', color: IC.herb }],
  [/perilla|shiso/i, 'herbs', { kind: 'shiso', color: IC.herb }],
  [/lemongrass/i, 'stalks', { color: IC.paleGreen, thick: true, base: IC.cream }],
  [/chives/i, 'stalks', { color: IC.deepGreen, thin: true }],
  [/scallion|green onion|negi|leek/i, 'stalks', { color: IC.herb, base: IC.white }],
  [/culantro|sawtooth/i, 'herbs', { kind: 'culantro', color: IC.deepGreen }],
  [/lao dill|pak si/i, 'herbs', { kind: 'laoDill', color: IC.herb }],
  [/cilantro|coriander/i, 'herbs', { kind: 'cilantro', color: IC.herb }],
  [/thai basil/i, 'herbs', { kind: 'thaiBasil', color: IC.deepGreen }],
  [/holy basil|krapao/i, 'herbs', { kind: 'holyBasil', color: IC.herb }],
  [/vietnamese mint|rau răm/i, 'herbs', { kind: 'vietMint', color: IC.herb }],
  [/mint/i, 'herbs', { kind: 'laoMint', color: '#7FA040' }],
  [/kangkong|water spinach|ong choy/i, 'greens', { kind: 'kangkong', color: IC.deepGreen }],
  [/spinach|sigeumchi/i, 'greens', { kind: 'spinach', color: IC.deepGreen }],
  [/choy sum/i, 'greens', { kind: 'choysum', color: IC.herb }],
  [/gai lan|chinese broccoli/i, 'greens', { kind: 'gailan', color: '#4A6B4F' }],
  [/mustard green/i, 'greens', { kind: 'mustard', color: '#7E9A45' }],
  [/fernbrake|gosari/i, 'greens', { kind: 'gosari', color: IC.brown }],
  [/bok choy/i, 'greens', { color: IC.deepGreen, stem: IC.white }],
  [/napa|cabbage|baechu/i, 'cabbage', { color: IC.paleGreen, stem: IC.cream }],
  [/bean sprout/i, 'sprouts', { color: IC.white }],
  [/galangal/i, 'root', { color: IC.pink }],
  [/fingerroot|krachai/i, 'fingers', { color: IC.tan }],
  [/turmeric/i, 'root', { color: IC.tan, inner: IC.orange }],
  [/myoga/i, 'shoot', { color: IC.pink }],
  [/ginger/i, 'root', { color: IC.tan, inner: IC.yellow }],
  [/garlic/i, 'bulb', { color: IC.white }],
  [/shallot/i, 'bulbs', { color: IC.salmon }],
  [/onion/i, 'bulb', { color: IC.gold }],
  [/korean radish|\bmu\b/i, 'longRoot', { color: IC.white, top: IC.paleGreen, stubby: true }],
  [/daikon/i, 'longRoot', { color: IC.white, top: IC.paleGreen }],
  [/carrot/i, 'longRoot', { color: IC.orange }],
  [/gobo|burdock/i, 'longRoot', { color: IC.brown, thin: true, leaves: false }],
  [/bellflower|doraji/i, 'longRoot', { color: IC.cream, thin: true, leaves: false }],
  [/drumstick|moringa/i, 'beans', { color: IC.herb, straight: true }],
  [/long bean/i, 'beans', { color: IC.herb }],
  [/edamame/i, 'peapod', { color: IC.herb }],
  [/pea eggplant/i, 'cluster', { color: IC.herb }],
  [/thai eggplant/i, 'fruit', { color: IC.paleGreen, stripes: true }],
  [/bird's eye|fresh chil/i, 'chili', { color: IC.chili, alt: IC.herb, many: true }],
  [/green chil/i, 'chili', { color: IC.herb }],
  [/bitter melon|ampalaya/i, 'gourd', { color: IC.herb, bumps: true }],
  [/winter melon/i, 'gourd', { color: IC.teal, round: true }],
  [/green papaya/i, 'gourd', { color: IC.lime, stripes: true }],
  [/cucumber/i, 'gourd', { color: IC.paleGreen, thin: true }],
  [/zucchini|aehobak/i, 'gourd', { color: IC.paleGreen, stripes: true }],
  [/enoki/i, 'mushroom', { color: IC.white, kind: 'enoki' }],
  [/shimeji/i, 'mushroom', { color: IC.tan, kind: 'cluster' }],
  [/shiitake/i, 'mushroom', { color: IC.brown }],
  [/lotus root|renkon/i, 'lotus', { color: IC.cream }],
  [/bamboo shoot/i, 'shoot', { color: IC.yellow }],
  [/banana blossom/i, 'blossom', { color: IC.purple }],
  [/fresh coconut/i, 'coconut', {}],
  [/tamarind/i, 'pod', { color: IC.brown }],
  [/calamansi/i, 'smallFruits', { color: IC.lime }],
  [/lime/i, 'fruit', { color: IC.lime }],
  [/asian pear|\bbae\b/i, 'pear', { color: IC.gold }],
  [/tomato/i, 'fruit', { color: IC.red }],
  [/taro/i, 'fruit', { color: IC.tan, rings: true, leaf: false }],
  [/ube|purple yam/i, 'root', { color: IC.purple, inner: IC.lilac }],

];

const ILLO_FALLBACKS = {
  'Sauces & Condiments': ['bottle', { color: IC.amber }],
  'Spices': ['powder', { color: IC.brown }],
  'Produce': ['herbs', { color: IC.herb }],
  'Noodles & Rice': ['bundle', { color: IC.white }],
  'Proteins & Tofu': ['block', { color: IC.cream }],
  'Proteins & Seafood': ['block', { color: IC.cream }],
  'Pantry Staples': ['jar', { color: IC.tan }]
};

function illustrationSpec(entry) {
  const rule = ILLO_RULES.find(([re]) => re.test(entry.name || ''));
  const [form, opts] = rule ? rule.slice(1) : (ILLO_FALLBACKS[entry.category] || ['jar', { color: IC.tan }]);
  return { form, opts: { ...opts, label: entry.native || '' } };
}

const illoCache = {};
function illustrationSvg(entry) {
  const cacheKey = `${entry.name}|${entry.native || ''}`; // shared ids can carry a different native label per country
  if (!illoCache[cacheKey]) {
    const { form, opts } = illustrationSpec(entry);
    illoCache[cacheKey] = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${(entry.name || '').replace(/"/g, '&quot;')}">${illoRender(ILLO_FORMS[form](opts))}</svg>`;
  }
  return illoCache[cacheKey];
}

// --- Technique illustrations ------------------------------------------------
// Each cooking technique is drawn as its equipment in action, from the same
// plate style as the ingredients. Keyed by technique id.
const IT = {
  steel: '#5E605C', iron: '#3A3936', clay: '#8E5A3C', onggi: '#6B4A32', curry: '#C9772E',
  green: '#7E9A45', broth: '#D9B46A', caramel: '#7A3E1C', oil: '#E2B53E'
};

const tFlame = (x, y, s = 1) => G(`translate(${x} ${y}) scale(${s})`, [
  P('M0 0 c-8-4-10-14-3-24 c0 7 4 9 6 4 c3 7 9 9 6 20 c-2 2-7 2-9 0z', IC.orange, { sw: 1.8 }),
  P('M0 -2 c-3-2-4-7-1-11 c0 3 2 4 3 2 c2 4 3 5 2 9z', IC.yellow, { sw: 1.2, off: 1 })
]);
const tSteam = (x, y) => L(`M${x} ${y} c-4-5 4-8 0-13 M${x + 8} ${y + 2} c-4-5 4-8 0-13 M${x + 16} ${y} c-4-5 4-8 0-13`, { width: 1.6, stroke: IC.grey });
const tWok = (fill, y = 0) => G(`translate(0 ${y})`, [
  P('M84 46 l14 -6 v4 l-12 7z', IT.iron, { sw: 1.8 }),
  P('M10 44 h80 c-4 20-20 28-40 28 c-20 0-36-8-40-28z', IT.steel),
  ...(fill ? [E(50, 44, 38, 5, fill)] : [])
]);
const tPot = (fill, { lid = false, color = IT.steel } = {}) => [
  P('M18 44 h-6 v6 h6z M82 44 h6 v6 h-6z', IT.iron, { sw: 1.8 }),
  P('M20 38 h60 v38 c0 6-4 10-10 10 h-40 c-6 0-10-4-10-10z', color),
  ...(lid ? [P('M18 32 h64 v6 h-64z', illoShade(color, 0.15)), P('M44 26 h12 v6 h-12z', IT.iron, { sw: 1.8 })] : [E(50, 38, 30, 5, fill || IT.broth)])
];
const tPan = (fill, x = 0, y = 0) => G(`translate(${x} ${y})`, [
  P('M74 52 l22 -8 v5 l-20 8z', IT.iron, { sw: 1.8 }),
  P('M14 50 h62 c-2 12-12 18-31 18 c-19 0-29-6-31-18z', IT.iron),
  E(45, 50, 31, 6, fill || IT.steel)
]);
const tDish = (x, y, r, fill, rim = IC.cream) => G(`translate(${x} ${y})`, [Ci(0, 0, r, rim), fine(Ci(0, 0, r * 0.7, fill), 1.4)]);
const tMortar = (fill, stone = IC.grey) => [
  G('rotate(28 66 40)', [P('M60 10 h10 c2 0 3 2 3 4 l-2 36 c0 3-3 5-6 5 c-3 0-6-2-6-5 l-2-36 c0-2 1-4 3-4z', illoShade(stone, 0.15))]),
  P('M20 54 h60 c0 20-12 32-30 32 c-18 0-30-12-30-32z', stone),
  E(50, 54, 30, 6, fill)
];

const ILLO_TECHNIQUES = {
  // China
  'stir-frying': () => [
    tFlame(40, 92, 0.7), tFlame(52, 94, 0.9), tFlame(64, 92, 0.7),
    tWok(IC.brown, 6),
    ...[[30, 34, IC.red], [44, 24, IC.herb], [58, 30, IC.yellow], [68, 20, IC.salmon]].map(([x, y, c]) => fine(P(`M${x} ${y} l7 -2 l2 5 l-7 3z`, c), 1.3)),
    L('M24 40 c4-12 14-20 26-22 M62 26 c8 2 14 8 16 16', { width: 1.2, opacity: 0.5 })
  ],
  velveting: () => [
    E(50, 54, 32, 8, IC.cream),
    ...[[34, 54, -20], [48, 50, 10], [60, 56, -6], [44, 58, 24]].map(([x, y, r]) => G(`rotate(${r} ${x} ${y})`, [P(`M${x - 10} ${y - 3} h20 c2 0 3 1 3 3 c0 2-1 3-3 3 h-20 c-2 0-3-1-3-3 c0-2 1-3 3-3z`, IC.salmon, { sw: 1.5 })])),
    L('M34 50 c6 4 12-4 18 0 c6 4 10-2 14 2', { width: 2, stroke: ILLO_PAPER }),
    P('M18 56 h64 c0 16-14 28-32 28 c-18 0-32-12-32-28z', IC.cream),
    G('translate(70 8)', [P('M0 0 c8 0 12 8 12 16 c0 6-5 10-12 10 c-7 0-12-4-12-10 c0-8 4-16 12-16z', IC.white, { sw: 1.8 })])
  ],
  'sauce-building': () => [
    tDish(30, 40, 15, IC.soy), tDish(68, 36, 13, IC.vinegar), tDish(50, 70, 15, IC.chili),
    G('rotate(-30 70 74)', [P('M60 72 c0-5 12-5 12 0 c0 4-12 4-12 0z M72 72 h20 v3 h-20z', IC.metal, { sw: 1.6 })])
  ],
  'wok-station': () => [
    P('M10 30 h80 v50 h-80z', IC.tan, { sw: 1.8 }),
    L('M10 44 h80 M10 64 h80', { width: 0.8, opacity: 0.35 }),
    tDish(26, 42, 9, IC.white), tDish(50, 42, 9, IC.herb), tDish(74, 42, 9, IC.yellow),
    tDish(26, 66, 9, IC.soy), tDish(50, 66, 9, IC.chili), tDish(74, 66, 9, IC.salmon)
  ],
  'cornstarch-thickening': () => [
    E(46, 58, 30, 7, IC.white),
    P('M14 60 h64 c0 16-14 26-32 26 c-18 0-32-10-32-26z', IC.cream),
    G('rotate(-35 60 40)', [P('M48 18 c0-6 12-6 12 0 v4 c0 5-12 5-12 0z M52 24 h4 v34 h-4z', IC.metal, { sw: 1.6 })]),
    P('M66 52 c0 6-2 10 0 14 c2-4 0-8 0-14z', IC.white, { sw: 1.4 })
  ],

  // Japan
  'dashi-building': () => [
    ...tPot(IC.gold),
    G('rotate(-8 40 36)', [P('M30 30 h20 v12 h-20z', IC.seaweed, { sw: 1.6 })]),
    ...[[56, 36], [64, 38], [60, 33]].map(([x, y]) => fine(P(`M${x} ${y} l6 -2 l2 4 l-6 2z`, IC.pink), 1.2)),
    tSteam(36, 22)
  ],
  'teriyaki-glaze': () => [
    tPan(IT.iron, 0, 12),
    P('M24 56 c0-10 12-14 22-12 c10-4 22 0 22 10 c0 8-10 12-22 10 c-12 2-22-2-22-8z', IT.caramel),
    L('M30 52 c8-4 18-4 28-2', { width: 2, stroke: '#E8C9A0' }),
    G('rotate(-40 70 24)', [P('M66 6 h6 v24 h-6z', IC.tan, { sw: 1.6 }), P('M64 30 h10 l-1 10 h-8z', IT.caramel, { sw: 1.6 })])
  ],
  'tempura-technique': () => [
    P('M14 70 l12 -40 h48 l12 40z', IC.white, { sw: 1.8 }),
    L('M22 62 l56 0 M26 50 l48 0 M30 38 l40 0', { width: 0.8, opacity: 0.35 }),
    ...[[-24, 46, 56], [18, 54, 50]].map(([r, x, y]) => G(`rotate(${r} ${x} ${y})`, [
      P(`M${x - 22} ${y} c0-6 6-9 12-9 l3 -3 l3 3 l3 -3 l3 3 l3 -3 l3 3 l3 -3 l3 3 c6 0 9 4 9 9 c0 5-4 9-9 9 h-24 c-6 0-12-3-12-9z`, IC.gold),
      P(`M${x + 20} ${y - 3} l8 -6 l-2 9 l2 9 l-8 -6z`, IC.salmon, { sw: 1.5 })
    ]))
  ],
  'rice-preparation': () => [
    ...ILLO_FORMS.riceBowl({ color: IC.white, bowl: IC.blue }),
    L('M58 10 L80 44 M66 8 L84 42', { width: 4.2 }), L('M58 10 L80 44 M66 8 L84 42', { width: 2.2, stroke: IC.red })
  ],
  'knife-cuts': () => [
    G('rotate(-18 50 40)', [P('M14 34 h52 c6 0 10 4 12 10 h-64z', IC.metal), P('M66 36 h24 v6 h-24z', IT.iron, { sw: 1.8 }), L('M18 40 h44', { width: 0.8, opacity: 0.4 })]),
    ...[0, 1, 2, 3, 4, 5].map(i => G(`rotate(${-6 + i * 3} ${30 + i * 8} 74)`, [P(`M${27 + i * 8} 60 h5 v26 h-5z`, IC.orange, { sw: 1.3, off: 1.2 })]))
  ],

  // Korea
  'kimchi-fermentation': () => [
    P('M30 22 h40 c4 0 6 3 6 6 v4 h-52 v-4 c0-3 2-6 6-6z', illoShade(IT.onggi, 0.12)),
    P('M26 32 h48 c10 6 14 18 14 30 c0 14-10 24-24 24 h-28 c-14 0-24-10-24-24 c0-12 4-24 14-30z', IT.onggi),
    L('M20 58 c18 4 42 4 60 0', { width: 1.2, stroke: IC.tan }),
    P('M36 32 c2-8 10-12 14-10 c4-2 12 2 14 10z', IC.chili, { sw: 1.6 })
  ],
  'korean-bbq': () => [
    Ci(50, 54, 36, IT.iron),
    Ci(50, 54, 30, IT.steel),
    L('M24 42 h52 M22 50 h56 M22 58 h56 M24 66 h52 M32 34 v40 M50 26 v56 M68 34 v40', { width: 1.2, stroke: IT.iron }),
    ...[[38, 46, -20], [58, 50, 15], [44, 62, 8]].map(([x, y, r]) => G(`rotate(${r} ${x} ${y})`, [P(`M${x - 11} ${y - 4} h22 c2 0 3 2 3 4 c0 2-1 4-3 4 h-22 c-2 0-3-2-3-4 c0-2 1-4 3-4z`, IC.brickRed, { sw: 1.5 }), L(`M${x - 6} ${y - 4} v8 M${x + 4} ${y - 4} v8`, { width: 1.2, stroke: IT.iron })])),
    tFlame(20, 94, 0.5), tFlame(80, 94, 0.5)
  ],
  'gochujang-sauces': () => [
    G('translate(-16 -6) scale(0.62) translate(10 6)', ILLO_FORMS.tub({ color: IC.brickRed, cap: IC.red, label: '고추장' })),
    tDish(66, 66, 20, IC.chili),
    G('rotate(30 72 40)', [P('M66 20 c0-5 10-5 10 0 v3 c0 4-10 4-10 0z M69 25 h4 v26 h-4z', IC.metal, { sw: 1.5 })])
  ],
  'banchan-philosophy': () => [
    ...[[24, 30, IC.chili], [50, 26, IC.herb], [76, 30, IC.yellow], [24, 62, IC.tan], [50, 66, IC.deepGreen], [76, 62, IC.salmon]].map(([x, y, c]) => tDish(x, y, 11, c))
  ],
  'jjigae-technique': () => [
    P('M14 84 h72 v4 h-72z', IC.tan, { sw: 1.6 }),
    P('M16 44 h68 c0 22-12 38-34 38 c-22 0-34-16-34-38z', IT.iron),
    E(50, 44, 34, 7, IC.chili),
    ...[[38, 42], [56, 44]].map(([x, y]) => fine(P(`M${x} ${y - 4} h8 v6 h-8z`, IC.white), 1.3)),
    fine(Ci(66, 41, 2.6, IC.red), 1), fine(Ci(30, 45, 2.2, IC.herb), 1),
    tSteam(36, 30)
  ],

  // Thailand
  'curry-paste': () => tMortar(IC.chili, IC.grey),
  'flavor-balance': () => [
    tDish(50, 22, 13, IC.gold), tDish(24, 52, 13, IC.lime), tDish(76, 52, 13, IC.chili), tDish(50, 80, 13, IC.amber),
    L('M50 38 v26 M38 52 h24', { width: 1.2, opacity: 0.4 })
  ],
  'coconut-curry-technique': () => [
    tDish(44, 54, 34, IT.green),
    L('M24 54 c6-6 12 4 18-2 c6-6 12 4 18-2 M30 64 c6-4 10 2 16-1', { width: 2.4, stroke: IC.white }),
    fine(E(36, 44, 3, 5, IC.deepGreen, -30), 1.2), fine(E(52, 66, 3, 5, IC.deepGreen, 20), 1.2), fine(E(58, 46, 5, 2, IC.chili, -20), 1.2),
    G('translate(64 70)', [P('M0 0 a15 15 0 0 1 30 0z', IC.brown, { sw: 1.8 }), P('M3 0 a12 12 0 0 1 24 0z', IC.white, { sw: 1.2, off: 0 })])
  ],
  'nam-prik': () => [
    E(50, 56, 42, 30, IC.cream),
    ...[[18, 52, -70, IC.paleGreen], [24, 34, -40, IC.herb], [76, 36, 40, IC.herb], [82, 56, 70, IC.paleGreen], [30, 76, -120, IC.lime], [70, 76, 120, IC.lime]].map(([x, y, r, c]) => G(`rotate(${r} ${x} ${y})`, [P(`M${x - 3} ${y - 9} h6 v18 h-6z`, c, { sw: 1.4, off: 1.2 })])),
    tDish(50, 56, 16, IC.brickRed, IC.white),
    ...[[46, 52], [54, 58]].map(([x, y]) => fine(Ci(x, y, 1.8, IC.chili), 0.9))
  ],
  'wok-techniques-thai': () => [
    tFlame(30, 60, 1.3), tFlame(46, 50, 1.6), tFlame(64, 58, 1.2),
    tWok(null, 18),
    ...[[30, 54], [64, 50]].map(([x, y]) => fine(E(x, y, 4, 6, IC.deepGreen, 30), 1.2))
  ],

  // Vietnam
  'nuoc-cham': () => [
    tDish(44, 56, 30, IC.amber),
    ...[[36, 50], [48, 60], [54, 48]].map(([x, y]) => fine(Ci(x, y, 2.6, IC.chili), 1)),
    ...[[40, 62], [30, 56]].map(([x, y]) => fine(Ci(x, y, 2.2, IC.white), 1)),
    G('rotate(20 80 28)', [P('M66 28 a14 14 0 0 1 28 0z', IC.lime), L('M70 28 l10 -10 M80 28 v-12 M90 28 l-10 -10', { width: 1, stroke: IC.paleGreen })])
  ],
  'pho-broth': () => [
    ...tPot(IT.broth, { color: IC.metal }),
    G('translate(42 36) scale(0.22) translate(-50 -52)', ILLO_FORMS.star({ color: IC.brown })),
    fine(Ci(60, 38, 3, IC.tan), 1.2),
    G('translate(62 72)', [P('M0 16 a16 16 0 0 1 32 0z', IT.iron, { sw: 1.8 }), P('M4 16 a12 12 0 0 1 24 0z', IC.lilac, { sw: 1.3, off: 0 }), L('M9 16 a7 7 0 0 1 14 0', { width: 1.2, stroke: IC.white })]),
    tSteam(34, 26)
  ],
  'fresh-rolls': () => [
    ...[[34, 58, -14], [64, 50, -14]].map(([x, y, r]) => G(`rotate(${r} ${x} ${y})`, [
      P(`M${x - 22} ${y - 10} h44 a8 10 0 0 1 0 20 h-44 a8 10 0 0 1 0-20z`, IC.clear),
      fine(E(x - 6, y - 2, 6, 4, IC.salmon), 1), fine(E(x + 8, y - 1, 6, 4, IC.salmon), 1),
      L(`M${x - 18} ${y + 4} c8-4 16 4 24 0 c6-3 10 2 14 0`, { width: 2.2, stroke: IC.herb })
    ]))
  ],
  caramelization: () => [
    E(50, 40, 32, 6, IT.caramel),
    fine(E(40, 39, 7, 5, IC.white), 1.3), fine(E(58, 40, 7, 5, IC.white), 1.3),
    fine(E(40, 38, 3, 2.6, IC.yellow), 0.9), fine(E(58, 39, 3, 2.6, IC.yellow), 0.9),
    P('M16 42 h68 c2 20-12 40-34 40 c-22 0-36-20-34-40z', IT.clay),
    L('M22 54 c16 4 40 4 56 0', { width: 1.4, stroke: IC.tan }),
    P('M10 40 h8 v-6 h-8z M82 40 h8 v-6 h-8z', IT.clay, { sw: 1.6 }),
    G('rotate(14 74 18)', [P('M58 14 h32 v6 h-32z', illoShade(IT.clay, 0.15), { sw: 1.6 })])
  ],
  'herb-plate': () => [
    E(50, 58, 40, 24, IC.cream),
    E(50, 58, 32, 18, IC.white),
    ...[[30, 54, -30, IC.herb], [40, 48, -10, IC.deepGreen], [54, 50, 10, IC.herb], [44, 64, 20, IC.paleGreen]].map(([x, y, r, c]) => leafAt(x, y + 8, r, 18, 6, c, { sw: 1.4 })),
    G('translate(64 56)', [P('M0 6 a10 10 0 0 1 20 0z', IC.lime, { sw: 1.6 })]),
    fine(E(70, 70, 6, 2.4, IC.chili, -20), 1.2)
  ],

  // India
  tadka: () => [
    P('M70 52 l26 -12 v5 l-24 12z', IT.iron, { sw: 1.8 }),
    P('M22 50 h50 c0 14-10 22-25 22 c-15 0-25-8-25-22z', IT.iron),
    E(47, 50, 25, 5, IT.oil),
    ...[[38, 49], [46, 51], [54, 48], [42, 47]].map(([x, y]) => fine(Ci(x, y, 2, IC.darkBrown), 0.9)),
    fine(E(56, 51, 5, 2, IC.deepGreen, -10), 1),
    ...[[34, 34], [48, 26], [60, 32], [42, 18]].map(([x, y]) => fine(Ci(x, y, 1.8, IC.darkBrown), 0.9)),
    L('M30 40 l-4 -4 M64 40 l4 -4 M47 38 v-4', { width: 1.2 })
  ],
  'curry-base': () => [
    L('M14 46 c-8-2-10 10 0 10 M86 46 c8-2 10 10 0 10', { width: 5 }), L('M14 46 c-8-2-10 10 0 10 M86 46 c8-2 10 10 0 10', { width: 2.6, stroke: IT.steel }),
    P('M12 44 h76 c-2 20-18 32-38 32 c-20 0-36-12-38-32z', IT.iron),
    E(50, 44, 36, 6, IC.brickRed),
    ...[[34, 43], [46, 45], [58, 42], [66, 44]].map(([x, y], i) => fine(P(`M${x - 4} ${y} c0-3 8-3 8 0 c0 2-8 2-8 0z`, i % 2 ? IC.red : IC.lilac), 1.1)),
    ...[[40, 42], [62, 46]].map(([x, y]) => fine(E(x, y, 3, 1.4, IC.herb, 20), 0.9))
  ],
  'spice-toasting': () => [
    tPan(IT.steel, 0, 12),
    G('translate(28 60) scale(0.22) translate(-50 -52)', ILLO_FORMS.star({ color: IC.brown })),
    G('rotate(-12 50 62)', [P('M40 60 h20 a2 3 0 0 1 0 6 h-20 a2 3 0 0 1 0-6z', IC.brown, { sw: 1.4 })]),
    ...[[58, 56], [62, 60], [66, 57], [54, 64]].map(([x, y]) => fine(E(x, y, 1.6, 3, IC.tan, 30), 0.9)),
    L('M30 40 c-4-6 4-10 0-16 M46 36 c-4-6 4-10 0-16 M62 40 c-4-6 4-10 0-16', { width: 1.6, stroke: IC.grey })
  ],
  'masala-formulas': () => [
    Ci(50, 52, 38, IC.metal),
    ...[[50, 52, IC.yellow], [50, 28, IC.chili], [71, 40, IC.brown], [71, 64, IC.darkBrown], [50, 76, IC.tan], [29, 64, IC.mustard], [29, 40, IC.paleGreen]].map(([x, y, c]) => tDish(x, y, 10, c, IC.white))
  ],
  'rice-techniques': () => [
    P('M14 46 c0-6 72-6 72 0 v4 h-72z', IC.white, { sw: 1.6 }),
    ...tPot(null, { lid: true, color: IT.clay }),
    ...scatter(8, 72, 86, 12, 3, 9).map(([x, y, r]) => fine(E(x, y, 1.4, 3.6, IC.white, r * 180 + 60), 0.9))
  ]
};

const techniqueCache = {};
function techniqueSvg(id, name = '') {
  if (!techniqueCache[id]) {
    const draw = ILLO_TECHNIQUES[id] || ILLO_TECHNIQUES['stir-frying'];
    techniqueCache[id] = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${name.replace(/"/g, '&quot;')}">${illoRender(draw())}</svg>`;
  }
  return techniqueCache[id];
}

// --- Dish illustrations -----------------------------------------------------
// Each dish is drawn as it's served: a vessel (bowl, plate, pot, skewers)
// plus the toppings you'd recognize it by. Keyed by dish id.
const ID = {
  clearBroth: '#E6CF95', milkyBroth: '#F1E6CF', redBroth: '#D2582E', curryYellow: '#E0A53A', curryOrange: '#D97A33',
  greenCurry: '#93A856', brownSauce: '#7A4524', darkSauce: '#4A2A1A', noodle: '#F2E3B3', eggNoodle: '#E8C25A',
  rice: '#FBF8EF', pork: '#E6A58F', beef: '#9B4A3A', crisp: '#D49A3C', stone: '#3E3B36', bamboo: '#D8BE84', leaf: '#5E8A3A'
};

// Vessels: each returns [behind, front] so toppings can sit between them
// Bowls and pots are seen three-quarters from above so the whole surface
// (broth color, noodles, toppings) shows; the front wall is a crescent below it.
const vBowl = (broth, bowl = IC.cream) => [
  [P('M38 82 h24 v6 h-24z', illoShade(bowl, -0.1), { sw: 1.8 }), E(50, 44, 42, 21, bowl), E(50, 44, 37, 17, broth)],
  [P('M8 44 A42 21 0 0 0 92 44 C92 66 74 84 50 84 C26 84 8 66 8 44z', bowl)]
];
const vPot = (stew, pot = IT.iron) => [
  [P('M8 86 h84 v4 h-84z', IC.tan, { sw: 1.6 }), E(50, 44, 42, 20, pot), E(50, 44, 37, 16, stew)],
  [P('M8 44 A42 20 0 0 0 92 44 V70 C92 80 74 86 50 86 C26 86 8 80 8 70z', pot)]
];
const vPlate = (plate = IC.white) => [[E(50, 64, 44, 17, illoShade(plate, -0.06)), E(50, 62, 36, 12, plate)], []];
const dishOf = ([back, front], toppings) => [...back, ...(front.length ? [G('translate(0 4)', toppings)] : toppings), ...front];

// Toppings
const dNoodles = (color, rows = [[28, 72, 34], [20, 80, 40], [20, 80, 46], [26, 74, 52]], w = 2.6) => {
  const d = rows.map(([x0, x1, y]) => `M${x0} ${y}` + ' q2.5 -3 5 0 t5 0'.repeat(Math.floor((x1 - x0) / 10))).join(' ');
  return [L(d, { width: w + 1.8 }), L(d, { width: w, stroke: color })];
};
const dEgg = (x, y, r = 6, yolk = IC.orange) => G(`translate(${x} ${y})`, [E(0, 0, r, r * 0.8, IC.white), fine(Ci(0, 0, r * 0.45, yolk), 1)]);
const dSlices = (x, y, color, n = 3, rot = -10) => G(`rotate(${rot} ${x} ${y})`, Array.from({ length: n }, (_, i) =>
  P(`M${x - 9 + i * 6} ${y - 4} c4-3 10-3 12 0 c1 3-1 6-6 6 c-5 0-7-3-6-6z`, i % 2 ? illoShade(color, -0.08) : color, { sw: 1.4, off: 1.2 })));
const dChashu = (x, y) => G(`translate(${x} ${y})`, [E(0, 0, 8, 6, ID.pork), fine(E(0, 0, 5, 3.4, '#F2C7B5'), 1)]);
const dScallion = (pts) => pts.map(([x, y]) => fine(Ci(x, y, 2, IC.paleGreen), 1));
const dLeaf = (x, y, rot, color = IC.herb, len = 12) => leafAt(x, y, rot, len, len * 0.4, color, { sw: 1.3 });
const dChili = (pts, color = IC.chili) => pts.map(([x, y, r = 0]) => fine(E(x, y, 1.8, 3.6, color, r), 1));
const dCube = (x, y, color = IC.white, s = 5) => fine(P(`M${x - s} ${y - s} h${s * 2} v${s * 2} h-${s * 2}z`, color), 1.3);
const dShrimp = (x, y, s = 0.32, rot = 0) => G(`translate(${x} ${y}) rotate(${rot}) scale(${s}) translate(-56 -54)`, ILLO_FORMS.shrimp({ color: IC.salmon }));
const dLime = (x, y, rot = 0) => G(`rotate(${rot} ${x} ${y})`, [P(`M${x - 8} ${y} a8 8 0 0 1 16 0z`, IC.lime, { sw: 1.6 }), L(`M${x} ${y} v-6 M${x} ${y} l-5 -4 M${x} ${y} l5 -4`, { width: 0.8, stroke: IC.paleGreen })]);
const dDots = (pts, color, r = 1.6) => pts.map(([x, y]) => fine(Ci(x, y, r, color), 0.9));
const dRice = (x, y, w = 16, h = 9) => [P(`M${x - w} ${y} c0-${h * 1.6} ${w * 2} -${h * 1.6} ${w * 2} 0z`, ID.rice, { sw: 1.8 }), ...scatter(6, x, y - h * 0.5, w * 0.55, h * 0.3, x).map(([gx, gy, r]) => L(`M${gx.toFixed(1)} ${gy.toFixed(1)} l${(2 * Math.cos(r * 3)).toFixed(1)} ${(1.4 * Math.sin(r * 3)).toFixed(1)}`, { width: 0.8, opacity: 0.4 }))];
const dChunks = (pts, color, s = 5) => pts.map(([x, y, r = 0]) => G(`rotate(${r} ${x} ${y})`, [P(`M${x - s} ${y - s * 0.7} l${s * 1.6} -${s * 0.3} l${s * 0.4} ${s * 1.4} l-${s * 1.6} ${s * 0.3}z`, color, { sw: 1.4, off: 1.2 })]));
const dSwirl = (x, y, color = IC.white) => L(`M${x - 10} ${y} c4-4 8 4 12 0 c3-3 6 2 8 0`, { width: 2.2, stroke: color });
const dDrum = (x, y, color, rot = 0) => G(`rotate(${rot} ${x} ${y})`, [P(`M${x - 10} ${y - 6} c6-6 18-4 18 4 c0 6-8 8-14 6 l-8 6 l-3 -3 l6 -7 c-3-2-3-4 1-6z`, color, { sw: 1.6 }), fine(Ci(x - 14, y + 9, 2.2, IC.white), 1)]);
const dSkewers = (n, color, { y0 = 30, piece = 'cube' } = {}) => Array.from({ length: n }, (_, i) => G(`translate(${(i - (n - 1) / 2) * 14} ${i * 4}) rotate(-28 50 50)`, [
  L('M16 50 H90', { width: 3.4 }), L('M16 50 H90', { width: 1.6, stroke: IC.tan }),
  ...[30, 44, 58, 72].map(x => piece === 'ball' ? fine(E(x, 50, 6.5, 5.5, color), 1.4) : P(`M${x - 6} 44 h12 v12 h-12z`, color, { sw: 1.4, off: 1.2 }))
]));
const dSideDish = (x, y, r, fill) => G(`translate(${x} ${y})`, [Ci(0, 0, r, IC.cream), fine(Ci(0, 0, r * 0.7, fill), 1.2)]);

const ILLO_DISHES = {
  // China
  jiaozi: () => [...vPlate()[0], ...[[30, 58], [48, 54], [66, 58], [38, 68], [58, 68]].map(([x, y]) => G(`translate(${x} ${y})`, [P('M-10 2 c0-10 20-10 20 0 c-4 3-16 3-20 0z', ID.noodle, { sw: 1.5 }), L('M-6 -3 l1 3 M-2 -5 l0.5 3 M2 -5 l-0.5 3 M6 -3 l-1 3', { width: 0.8, opacity: 0.6 })])), dSideDish(84, 36, 10, IC.blackVinegar)],
  'zhajiang-mian': () => dishOf(vBowl(ID.noodle, IC.white), [...dNoodles(ID.eggNoodle), P('M34 42 c2-10 26-10 30 0 c-8 4-22 4-30 0z', ID.brownSauce, { sw: 1.6 }), ...dDots([[42, 38], [50, 36], [56, 39]], ID.darkSauce, 1.4), ...[[62, 44, 60], [66, 42, 70], [70, 45, 80]].map(([x, y, r]) => G(`rotate(${r} ${x} ${y})`, [P(`M${x - 6} ${y - 1} h12 v2.4 h-12z`, IC.paleGreen, { sw: 1, off: 0.8 })]))]),
  'lamb-skewers': () => [...dSkewers(3, ID.beef), ...dDots([[36, 40], [52, 34], [62, 52], [44, 56], [70, 40]], IC.tan, 1)],
  'mapo-tofu': () => dishOf(vBowl(IC.chili, IC.white), [dCube(34, 42), dCube(46, 38), dCube(58, 42), dCube(68, 38), dCube(52, 46), ...dDots([[40, 46], [62, 46], [56, 36]], IC.brickRed, 1.6), ...dScallion([[44, 44], [64, 42], [38, 38]])]),
  'kung-pao-chicken': () => [...vPlate()[0], ...dChunks([[34, 58, 10], [46, 54, -10], [58, 60, 20], [66, 54, 0], [42, 66, 30], [56, 68, -20]], ID.crisp), ...dDots([[38, 62], [52, 60], [62, 64], [50, 52]], IC.tan, 2.2), ...dChili([[30, 52, 40], [70, 62, -30], [48, 70, 70]], IC.brickRed)],
  'dan-dan-noodles': () => dishOf(vBowl(IC.chili, IC.white), [...dNoodles(ID.noodle), P('M40 40 c2-6 14-6 16 0 c-4 3-12 3-16 0z', ID.brownSauce, { sw: 1.4 }), dLeaf(66, 46, -60, IC.deepGreen, 14), dLeaf(28, 44, 50, IC.deepGreen, 12), ...dScallion([[50, 37]])]),
  'char-siu': () => [P('M12 60 h76 v18 h-76z', ID.bamboo), L('M12 66 h76', { width: 0.8, opacity: 0.4 }), ...[0, 1, 2, 3].map(i => G(`translate(${22 + i * 15} 52) rotate(-12)`, [P('M-6 -8 h12 c2 0 3 2 3 4 v10 c0 2-1 3-3 3 h-12 c-2 0-3-1-3-3 v-10 c0-2 1-4 3-4z', '#E8A08A', { sw: 1.5 }), L('M-8 -6 h15 M-8 7 h15', { width: 2.4, stroke: IC.red })]))],
  'steamed-fish': () => [E(50, 64, 46, 18, IC.white), G('translate(50 58) scale(0.78) translate(-50 -50)', ILLO_FORMS.fish({ color: IC.metal })), ...[[36, 54], [46, 50], [56, 54], [64, 50]].map(([x, y], i) => L(`M${x} ${y} l8 ${i % 2 ? -2 : 2}`, { width: 1.6, stroke: i % 2 ? IC.paleGreen : IC.yellow })), E(50, 72, 30, 3, IC.soyLight)],
  'wonton-noodles': () => dishOf(vBowl(ID.clearBroth, IC.white), [...dNoodles(ID.eggNoodle, [[22, 78, 44], [26, 74, 48]], 2), ...[[34, 38], [52, 36], [66, 40]].map(([x, y]) => G(`translate(${x} ${y})`, [P('M-7 2 c-2-8 6-10 7-6 c1-4 9-2 7 6 c-4 3-10 3-14 0z', '#F3E7D0', { sw: 1.4 }), fine(Ci(0, 0, 2.2, IC.salmon), 0.8)])), dLeaf(46, 46, -70, IC.deepGreen, 12)]),
  'steamed-fish-head': () => [E(50, 64, 46, 18, IC.white), P('M18 64 c4-18 30-26 52-18 l12 -8 v32 l-12 -8 c-22 8-48 2-52 2z', IC.metal), ...scatter(20, 46, 56, 20, 7, 3).map(([x, y]) => fine(P(`M${x} ${y} l3 -1 l1 3 l-3 1z`, IC.chili), 0.8)), Ci(26, 58, 2.4, ILLO_INK)],
  'red-braised-pork': () => dishOf(vBowl(ID.darkSauce, IC.white), [...[[32, 40], [48, 36], [62, 40], [42, 46], [58, 46]].map(([x, y]) => G(`translate(${x} ${y})`, [P('M-7 -6 h14 v12 h-14z', '#8E3A26', { sw: 1.4 }), L('M-7 -2 h14 M-7 2 h14', { width: 1.6, stroke: IC.cream })])), ...dScallion([[52, 32], [38, 34]])]),
  'lion-s-head': () => dishOf(vPot(ID.clearBroth, IT.clay), [dLeaf(26, 50, 60, IC.paleGreen, 20), dLeaf(74, 50, -60, IC.paleGreen, 20), Ci(38, 36, 12, ID.brownSauce), Ci(62, 38, 12, illoShade(ID.brownSauce, 0.1)), L('M32 30 c3-2 6-2 8 0 M56 32 c3-2 6-2 8 0', { width: 1.2, stroke: IC.tan })]),

  // Japan
  tonkatsu: () => [...vPlate()[0], P('M52 52 c4-8 18-8 26 0 c4 6 2 14-6 14 h-14 c-8 0-10-8-6-14z', IC.paleGreen), L('M56 54 l6 6 M62 52 l6 8 M68 54 l4 6', { width: 1, stroke: IC.white }), ...[0, 1, 2, 3].map(i => G(`translate(${20 + i * 8} ${58 - i}) rotate(-8)`, [P('M0 -8 h7 v18 h-7z', ID.crisp, { sw: 1.4 }), L('M1 -6 h5', { width: 1.6, stroke: '#F6E3C8' })])), L('M20 50 c8-3 18-3 28 0', { width: 2.4, stroke: ID.darkSauce })],
  soba: () => [P('M12 40 h56 v40 h-56z', ID.bamboo), L('M12 46 h56 M12 52 h56 M12 58 h56 M12 64 h56 M12 70 h56', { width: 0.8, opacity: 0.35 }), ...dNoodles(IC.grey, [[18, 62, 50], [18, 62, 56], [20, 60, 62], [22, 58, 68]], 2.2), ...[[30, 46], [40, 44], [50, 47]].map(([x, y]) => fine(P(`M${x} ${y} h6 v2 h-6z`, IC.seaweed), 0.8)), G('translate(80 56)', [P('M-10 -10 h20 l-2 22 h-16z', IC.blue, { sw: 1.8 }), E(0, -10, 10, 3, ID.darkSauce)])],
  okonomiyaki: () => [...vPlate()[0], E(50, 56, 32, 14, ID.crisp), E(50, 54, 28, 11, ID.brownSauce), L('M26 50 l6 6 l6 -8 l6 8 l6 -8 l6 8 l6 -8 l6 8 l4 -4', { width: 1.6, stroke: IC.white }), ...scatter(8, 50, 52, 18, 6, 7).map(([x, y]) => fine(P(`M${x} ${y} l4 -2 l1 3 l-4 1z`, IC.pink), 0.8)), ...dDots([[38, 48], [58, 56], [46, 58], [64, 50]], IC.herb, 1)],
  'kitsune-udon': () => dishOf(vBowl(ID.clearBroth, IC.red), [...dNoodles(ID.noodle, [[22, 78, 42], [24, 76, 47]], 4), P('M30 42 l20 -16 l12 18z', ID.crisp, { sw: 1.8 }), G('translate(70 38)', [Ci(0, 0, 6, IC.white), L('M-3 0 a3 3 0 1 1 3 3', { width: 1.2, stroke: IC.pink })]), ...dScallion([[60, 44], [64, 46], [44, 46]])]),
  'hakata-ramen': () => dishOf(vBowl(ID.milkyBroth, IT.iron), [...dNoodles(ID.noodle, [[22, 78, 44], [26, 74, 48]], 1.4), dChashu(36, 40), P('M58 28 h10 v16 h-10z', IC.seaweed, { sw: 1.4 }), ...dScallion([[50, 40], [54, 44], [46, 44], [62, 46]]), ...dDots([[70, 42], [72, 44], [68, 45]], IC.red, 1.4)]),
  'miso-ramen': () => dishOf(vBowl(IC.tan, IC.white), [...dNoodles(ID.eggNoodle, [[22, 78, 46]], 2.2), ...dDots([[32, 40], [34, 43], [30, 44], [36, 41]], IC.yellow, 1.8), P('M46 34 h8 v6 h-8z', IC.yellow, { sw: 1.4 }), dChashu(64, 40), L('M40 44 c2-4 4-6 4-10 M44 46 c1-4 3-6 2-10', { width: 1.4, stroke: IC.white }), dEgg(50, 44, 5)]),
  'goya-champuru': () => [...vPlate()[0], ...[[30, 58, 20], [46, 54, -10], [62, 60, 30], [40, 66, -30], [58, 68, 10]].map(([x, y, r]) => G(`rotate(${r} ${x} ${y})`, [P(`M${x - 8} ${y} a8 5 0 0 0 16 0 a8 3 0 0 1 -16 0z`, IC.herb, { sw: 1.4 })])), ...[[36, 54], [52, 62], [68, 54]].map(([x, y]) => fine(P(`M${x} ${y} c2-4 8-4 8 0 c-2 3-6 3-8 0z`, IC.yellow), 1)), dCube(48, 54, IC.white, 3.4)],

  // Korea
  bulgogi: () => [P('M10 70 h80 v6 h-80z', ID.bamboo, { sw: 1.6 }), E(50, 60, 40, 14, IT.iron), ...[[30, 56, -10], [44, 52, 10], [58, 58, -20], [68, 52, 15], [40, 62, 25]].map(([x, y, r]) => G(`rotate(${r} ${x} ${y})`, [P(`M${x - 8} ${y - 3} c4-3 12-3 16 0 c-2 4-12 5-16 0z`, ID.beef, { sw: 1.4 })])), ...[[50, 64], [36, 52]].map(([x, y]) => L(`M${x - 5} ${y} c3-3 7-3 10 0`, { width: 1.6, stroke: IC.white })), ...dScallion([[62, 64], [52, 54]]), tSteam(36, 36)],
  japchae: () => [...vPlate()[0], ...dNoodles(IC.clear, [[22, 78, 56], [24, 74, 61], [28, 70, 66]], 1.6), ...[[30, 52, 20, IC.orange], [42, 50, -10, IC.deepGreen], [56, 52, 30, IC.brown], [66, 58, -20, IC.orange], [48, 62, 10, IC.deepGreen], [36, 64, -30, IC.brown]].map(([x, y, r, c]) => G(`rotate(${r} ${x} ${y})`, [P(`M${x - 6} ${y - 1} h12 v2.6 h-12z`, c, { sw: 1, off: 0.8 })])), ...dDots([[44, 56], [58, 62], [50, 54]], IC.cream, 1)],
  samgyetang: () => dishOf(vPot(ID.milkyBroth, IT.iron), [P('M32 42 c-2-12 8-18 18-16 c12-2 20 6 18 16z', '#F2DFC0', { sw: 1.8 }), L('M40 30 c4 4 12 4 18 0', { width: 1, opacity: 0.4 }), ...dDots([[30, 44], [70, 42]], IC.red, 2.4), G('rotate(-30 68 34)', [P('M64 26 h4 l1 16 h-6z', IC.cream, { sw: 1.3 })]), ...dScallion([[44, 44], [56, 44]])]),
  bibimbap: () => dishOf(vBowl(ID.rice, ID.stone), [...[[30, 44, IC.orange], [40, 38, IC.deepGreen], [60, 38, IC.brown], [70, 44, IC.paleGreen], [36, 48, IC.chili]].map(([x, y, c]) => fine(E(x, y, 6, 3.4, c), 1.2)), dEgg(52, 44, 7, IC.yellow), fine(Ci(62, 48, 3, IC.brickRed), 1)]),
  'kimchi-jjigae': () => dishOf(vPot(IC.chili, IT.iron), [...[[30, 42], [64, 40]].map(([x, y]) => dCube(x, y, IC.white, 4.4)), dSlices(46, 40, ID.pork, 3, 0), P('M60 46 c2-4 10-4 12 0z', IC.paleGreen, { sw: 1.2 }), ...dScallion([[38, 38], [56, 36]]), tSteam(38, 28)]),
  'dwaeji-gukbap': () => dishOf(vBowl(ID.milkyBroth, IT.iron), [dSlices(36, 40, ID.pork, 3, -6), dSlices(60, 42, ID.pork, 2, 10), ...dScallion([[48, 44], [52, 40], [44, 38], [66, 38]]), ...dDots([[70, 44], [72, 41]], IC.brickRed, 1.6)]),

  // Thailand
  'pad-thai': () => [...vPlate()[0], ...dNoodles(ID.crisp, [[22, 78, 56], [24, 76, 61], [28, 72, 66]], 3.4), dShrimp(36, 52, 0.28, -20), dShrimp(58, 54, 0.28, 10), ...dDots([[46, 56], [50, 60], [64, 62], [42, 64]], IC.tan, 2), ...[[66, 50], [70, 54]].map(([x, y]) => L(`M${x} ${y} l8 -6`, { width: 2.4, stroke: IC.white })), dLime(78, 66, 20)],
  'green-curry': () => dishOf(vBowl(ID.greenCurry, IC.white), [dSwirl(40, 44), ...[[30, 42], [62, 44]].map(([x, y]) => fine(Ci(x, y, 4.4, IC.paleGreen), 1.2)), ...dChunks([[48, 40], [70, 40]], IC.cream, 4), dLeaf(54, 46, 30, IC.deepGreen, 10), dLeaf(36, 36, -40, IC.deepGreen, 10), ...dChili([[58, 38, 60]])]),
  'tom-yum-goong': () => dishOf(vBowl(ID.redBroth, IC.white), [dShrimp(36, 40, 0.28, 0), dShrimp(60, 42, 0.28, 30), ...[[48, 38], [70, 44]].map(([x, y]) => fine(P(`M${x - 4} ${y} a4 3 0 0 1 8 0z`, IC.cream), 1)), G('rotate(-20 46 44)', [P('M38 43 h16 v3 h-16z', IC.paleGreen, { sw: 1 })]), dLeaf(28, 46, 60, IC.deepGreen, 9), ...dChili([[52, 46, 50], [66, 38, 20]])]),
  'khao-soi': () => dishOf(vBowl(ID.curryYellow, IC.white), [dDrum(44, 42, ID.brownSauce, -10), ...dNoodles(ID.eggNoodle, [[30, 50, 47]], 2), L('M52 34 l4 -6 l3 6 l4 -7 l3 7 l4 -6 l2 6 M50 38 l5 -4 l4 4 l5 -5 l4 5 l4 -4', { width: 3.6 }), L('M52 34 l4 -6 l3 6 l4 -7 l3 7 l4 -6 l2 6 M50 38 l5 -4 l4 4 l5 -5 l4 5 l4 -4', { width: 2, stroke: ID.crisp }), dLime(28, 44, -30)]),
  'som-tam': () => [...vPlate()[0], ...scatter(26, 48, 58, 22, 8, 5).map(([x, y, r]) => L(`M${x.toFixed(1)} ${y.toFixed(1)} l${(6 * Math.cos(r * 6)).toFixed(1)} ${(3 * Math.sin(r * 6)).toFixed(1)}`, { width: 1.6, stroke: IC.paleGreen })), ...[[34, 54], [62, 60]].map(([x, y]) => fine(P(`M${x - 5} ${y} a5 5 0 0 1 10 0z`, IC.red), 1.2)), ...dDots([[46, 52], [52, 64], [58, 54]], IC.tan, 2), ...[[66, 50], [72, 54]].map(([x, y]) => L(`M${x} ${y} l10 -4`, { width: 2.6, stroke: IC.herb })), dLime(28, 66, 0)],
  larb: () => [...vPlate()[0], P('M20 66 c-2-16 20-22 34-14 c14-8 30 0 28 14 c-14 6-46 6-62 0z', IC.paleGreen), ...scatter(16, 50, 58, 18, 6, 9).map(([x, y]) => fine(Ci(x, y, 2, ID.brownSauce), 0.8)), dLeaf(40, 56, -30, IC.herb, 10), dLeaf(60, 54, 30, IC.herb, 10), ...dChili([[50, 54, 30]]), ...dDots([[44, 62], [56, 62]], IC.tan, 1.2)],
  'massaman-curry': () => dishOf(vBowl(ID.curryOrange, IC.white), [...[[34, 40], [58, 38]].map(([x, y]) => fine(P(`M${x - 6} ${y} c0-6 12-6 12 0 c0 5-12 5-12 0z`, IC.yellow), 1.3)), ...dChunks([[46, 44], [68, 44]], ID.beef, 4.4), ...dDots([[40, 46], [52, 40], [62, 46], [30, 46]], IC.tan, 2.2), dSwirl(48, 36, IC.cream)]),

  // Vietnam
  'pho-bo': () => dishOf(vBowl(ID.clearBroth, IC.white), [...dNoodles(ID.noodle, [[22, 78, 44], [26, 74, 48]], 2), dSlices(40, 39, IC.pink, 3, -6), ...[[58, 38], [64, 42]].map(([x, y]) => L(`M${x - 5} ${y} c3-3 7-3 10 0`, { width: 1.6, stroke: IC.white })), dLeaf(70, 40, -50, IC.herb, 12), ...dScallion([[52, 44], [30, 44]]), G('translate(84 70) scale(0.7)', [P('M-8 0 a8 8 0 0 1 16 0z', IC.lime, { sw: 1.8 })])]),
  'bun-cha': () => [...dishOf(vBowl(IC.amber, IC.white), [...[[34, 40], [52, 38], [64, 42]].map(([x, y]) => fine(E(x, y, 7, 4.4, ID.brownSauce), 1.3)), ...dChili([[44, 44, 30]]), ...[[58, 46], [40, 46]].map(([x, y]) => fine(Ci(x, y, 2.6, IC.paleGreen), 0.9))]), dLeaf(84, 30, 30, IC.herb, 12), dLeaf(88, 40, 60, IC.deepGreen, 10)],
  'bun-bo-hue': () => dishOf(vBowl(ID.redBroth, IC.white), [...dNoodles(IC.white, [[22, 78, 46]], 3.4), dSlices(36, 40, ID.beef, 3, -6), G('translate(60 38)', [Ci(0, 0, 7, ID.pork), fine(Ci(0, 0, 2.6, IC.cream), 1)]), dLeaf(70, 44, -40, IC.herb, 10), ...dScallion([[48, 44], [52, 38]]), dLime(26, 44, -20)]),
  'banh-xeo': () => [...vPlate()[0], dLeaf(26, 70, 60, IC.paleGreen, 22), P('M22 62 c0-22 56-22 56 0z', IC.yellow), L('M24 60 c10-6 40-6 52 0', { width: 1, opacity: 0.4 }), ...dDots([[34, 52], [62, 54], [48, 46]], IC.crisp, 1.6), dShrimp(44, 58, 0.24, 0), dShrimp(58, 56, 0.24, 20), ...[[30, 58], [70, 58]].map(([x, y]) => L(`M${x} ${y} l2 -6`, { width: 1.6, stroke: IC.white }))],
  'com-tam': () => [...vPlate()[0], ...dRice(34, 66, 16, 10), P('M50 60 c2-8 20-10 28-4 c4 4 0 10-6 10 h-16 c-4 0-8-2-6-6z', ID.brownSauce), L('M56 58 l12 4 M58 64 l10 -2', { width: 1.2, stroke: IT.iron, opacity: 0.6 }), dEgg(40, 52, 7, IC.yellow), ...[[70, 50], [76, 54]].map(([x, y]) => fine(Ci(x, y, 3.6, IC.paleGreen), 1)), fine(P('M64 46 a4 4 0 0 1 8 0z', IC.red), 1)],
  'goi-cuon': () => [G('translate(4 -4) scale(0.9)', ILLO_TECHNIQUES['fresh-rolls']()), dSideDish(78, 80, 12, IC.brown)],

  // India
  'butter-chicken': () => dishOf(vBowl(ID.curryOrange, IT.steel), [dSwirl(42, 42, IC.cream), ...dChunks([[30, 40], [56, 38], [64, 44]], ID.crisp, 4.4), ...dDots([[48, 38], [36, 46], [60, 46]], IC.herb, 1.2), G('rotate(-24 76 26)', [P('M60 20 c4-6 28-6 32 2 c-4 6-28 8-32-2z', IC.tan, { sw: 1.6 }), ...dDots([[70, 18], [80, 20], [74, 23]], IC.darkBrown, 1)])]),
  'dal-makhani': () => dishOf(vBowl(ID.darkSauce, IT.steel), [dSwirl(44, 42, IC.cream), ...scatter(10, 50, 44, 26, 5, 3).map(([x, y]) => fine(Ci(x, y, 1.6, '#2A1A14'), 0.8)), P('M54 36 h8 v5 h-8z', IC.yellow, { sw: 1.3 }), ...dDots([[36, 38], [64, 44]], IC.herb, 1.2)]),
  biryani: () => dishOf(vPot(ID.rice, IC.metal), [P('M20 46 c4-20 56-20 60 0z', ID.rice, { sw: 1.6 }), ...scatter(24, 50, 37, 24, 7, 21).map(([x, y], i) => L(`M${x.toFixed(1)} ${y.toFixed(1)} l4 -1.4`, { width: 2, stroke: i % 3 ? IC.yellow : IC.orange })), dDrum(56, 36, ID.crisp, 10), dEgg(34, 38, 5, IC.yellow), ...dDots([[44, 30], [68, 40], [40, 44]], ID.brownSauce, 1.6), dLeaf(48, 44, -30, IC.herb, 9)]),
  dosa: () => [...vPlate()[0], G('rotate(-8 50 52)', [P('M10 48 h80 c4 0 6 4 6 7 c0 3-2 7-6 7 h-80 c-4 0-6-4-6-7 c0-3 2-7 6-7z', ID.crisp), L('M14 52 c20 2 50 2 74 0', { width: 1, opacity: 0.45 })]), dSideDish(30, 74, 8, IC.white), dSideDish(50, 78, 8, IC.chili), dSideDish(70, 74, 8, ID.curryOrange)],
  sambar: () => dishOf(vBowl(ID.curryOrange, IT.steel), [...[[30, 30, 30], [62, 28, -20]].map(([x, y, r]) => G(`rotate(${r} ${x} ${y})`, [P(`M${x - 2} ${y} h4 v18 h-4z`, IC.herb, { sw: 1.3 })])), ...dChunks([[44, 42], [58, 44]], IC.yellow, 4), dLeaf(36, 44, 50, IC.deepGreen, 8), dLeaf(68, 42, -50, IC.deepGreen, 8), ...dDots([[50, 38], [40, 38]], IC.darkBrown, 1.2)]),
  'machher-jhol': () => dishOf(vBowl(ID.curryYellow, IT.steel), [...[[36, 40], [60, 40]].map(([x, y]) => G(`translate(${x} ${y})`, [P('M-9 0 c0-6 18-6 18 0 c0 5-18 5-18 0z', IC.metal, { sw: 1.5 }), fine(Ci(0, 0, 2, IC.white), 0.8)])), fine(P('M44 46 c0-4 8-4 8 0 c0 3-8 3-8 0z', IC.yellow), 1.2), ...dChili([[70, 44, 70], [28, 46, -60]], IC.herb)]),
  'pav-bhaji': () => [...vPlate()[0], P('M20 64 c2-14 30-16 36 0 c-8 4-28 4-36 0z', ID.curryOrange), P('M34 52 h8 v5 h-8z', IC.yellow, { sw: 1.3 }), ...dDots([[26, 60], [48, 60], [38, 62]], IC.lilac, 1.4), ...[[66, 56], [76, 62]].map(([x, y]) => G(`translate(${x} ${y})`, [P('M-10 4 c0-10 20-10 20 0z', ID.crisp, { sw: 1.6 }), L('M-6 0 h12', { width: 0.8, opacity: 0.4 })])), dLime(46, 72, 0)],
  'goan-fish-curry': () => dishOf(vBowl(IC.orange, IC.cream), [dSwirl(36, 44, IC.cream), ...[[44, 40], [62, 42]].map(([x, y]) => G(`translate(${x} ${y})`, [P('M-8 0 c0-5 16-5 16 0 c0 4-16 4-16 0z', IC.metal, { sw: 1.4 })])), ...dChili([[30, 40, 60]], IC.herb), fine(P('M66 34 c2-4 8-2 6 2z', IC.purple), 1)]),
  vindaloo: () => dishOf(vBowl(IC.brickRed, IT.steel), [...dChunks([[32, 40], [48, 38], [62, 42], [42, 46]], ID.pork, 4.4), ...dChili([[56, 46, 40], [70, 40, -20], [30, 46, 70]], IC.chili), ...dDots([[54, 36], [38, 36]], IC.herb, 1.2)]),

  // Taiwan
  'l-r-u-f-n': () => dishOf(vBowl(ID.rice, IC.white), [P('M20 40 c6-14 54-14 60 0 c-12 8-48 8-60 0z', ID.brownSauce, { sw: 1.5 }), ...dDots([[30, 38], [40, 34], [50, 36], [58, 33], [34, 42], [48, 42]], ID.darkSauce, 2), G('translate(64 38)', [E(0, 0, 8, 6, IC.brown), fine(E(0, 0, 3.6, 2.8, IC.yellow), 0.9)]), fine(P('M24 48 h12 v4 h-12z', IC.yellow), 1), fine(P('M38 50 h12 v4 h-12z', IC.yellow), 1)]),
  'oyster-vermicelli': () => dishOf(vBowl(ID.brownSauce, IC.white), [...dNoodles('#C98F5A', [[22, 78, 42], [24, 76, 47]], 1.4), ...[[34, 40], [54, 38], [64, 44]].map(([x, y]) => fine(P(`M${x - 5} ${y} c0-4 10-4 10 0 c-2 3-8 3-10 0z`, IC.grey), 1.2)), ...dDots([[44, 44], [60, 40], [72, 42]], IC.herb, 1.4)]),
  'pepper-buns': () => [P('M8 74 h84 v6 h-84z', IC.tan, { sw: 1.6 }), ...[[30, 60], [66, 60], [48, 46]].map(([x, y]) => G(`translate(${x} ${y})`, [P('M-16 8 c0-20 32-20 32 0 c-6 4-26 4-32 0z', ID.crisp), ...scatter(8, 0, -2, 9, 4, x).map(([sx, sy]) => fine(E(sx, sy, 1.2, 0.8, IC.white), 0.6))]))],
  'milkfish-congee': () => dishOf(vBowl(ID.milkyBroth, IC.blue), [...[[38, 40], [58, 42]].map(([x, y]) => fine(P(`M${x - 7} ${y} c0-4 14-4 14 0 c0 3-14 3-14 0z`, IC.white), 1.2)), ...dScallion([[48, 38], [52, 44], [66, 38]]), ...dDots([[44, 44], [32, 44], [62, 36]], ID.crisp, 1.6)]),
  'coffin-bread': () => [...vPlate()[0], P('M24 40 h44 v26 h-44z', ID.crisp), P('M28 44 h36 v8 h-36z', IC.cream, { sw: 1.4 }), ...dDots([[36, 47], [48, 46], [58, 48]], IC.orange, 1.6), G('rotate(-24 66 34)', [P('M50 30 h28 v6 h-28z', '#E9C98A', { sw: 1.6 })])],

  // Philippines
  'chicken-adobo': () => [...vPlate()[0], ...dRice(68, 66, 13, 8), dDrum(36, 56, ID.darkSauce, -10), dDrum(48, 66, illoShade(ID.darkSauce, 0.15), 20), ...dDots([[28, 64], [54, 56]], IC.cream, 2.2), dLeaf(58, 50, 60, IC.deepGreen, 8), E(40, 70, 14, 2.6, ID.darkSauce)],
  'sinigang-na-baboy': () => dishOf(vBowl(ID.clearBroth, IC.white), [dSlices(32, 40, ID.pork, 2, 0), ...[[54, 42], [64, 38]].map(([x, y]) => fine(Ci(x, y, 4.4, IC.white), 1.2)), fine(P('M44 40 a4 4 0 0 1 8 0z', IC.red), 1), dLeaf(70, 44, -60, IC.deepGreen, 12), dLeaf(40, 46, 70, IC.deepGreen, 10), ...dChili([[58, 46, 70]], IC.herb)]),
  'kare-kare': () => dishOf(vPot(ID.curryOrange, IT.clay), [...dChunks([[34, 40], [52, 36]], ID.beef, 5), dLeaf(64, 40, -40, IC.deepGreen, 12), fine(E(70, 44, 6, 3, IC.purple), 1.2), ...dDots([[44, 42], [58, 44], [30, 44]], IC.tan, 1.4), dSideDish(86, 30, 8, IC.pink)]),
  'lechon-kawali': () => [...vPlate()[0], ...[[34, 58], [52, 54], [66, 60], [46, 66]].map(([x, y]) => G(`translate(${x} ${y}) rotate(${x % 3 * 8 - 8})`, [P('M-8 -7 h16 v14 h-16z', ID.pork, { sw: 1.4 }), P('M-8 -7 h16 v4 h-16z', ID.crisp, { sw: 1.2, off: 0.8 }), L('M-8 1 h16', { width: 1.4, stroke: IC.cream })])), dSideDish(80, 46, 8, IC.brown)],
  'la-paz-batchoy': () => dishOf(vBowl(ID.clearBroth, IC.white), [...dNoodles(ID.eggNoodle, [[22, 78, 44], [26, 74, 48]], 2), dSlices(38, 39, ID.pork, 2, -4), ...scatter(8, 58, 38, 8, 3, 5).map(([x, y]) => fine(P(`M${x} ${y} l3 -1 l1 3 l-3 1z`, ID.crisp), 0.8)), ...dScallion([[50, 44], [66, 42], [30, 44]]), dEgg(64, 44, 4.4, IC.yellow)]),
  'chicken-inasal': () => [P('M8 64 c10-16 74-16 84 0 c-10 14-74 14-84 0z', ID.leaf), L('M12 64 h76 M24 58 l8 6 M44 56 l6 8 M64 56 l-6 8', { width: 1, stroke: IC.paleGreen }), dDrum(48, 56, IC.orange, -12), L('M34 52 l20 2 M38 58 l20 2', { width: 1.6, stroke: ID.brownSauce, opacity: 0.7 }), ...[[70, 62], [76, 58], [74, 66]].map(([x, y]) => fine(Ci(x, y, 3.2, IC.lime), 1))],
  'beef-tapa': () => [...vPlate()[0], ...dRice(34, 66, 15, 9), ...dDots([[30, 56], [38, 58]], IC.gold, 1.2), dEgg(66, 66, 8, IC.yellow), ...[[52, 54, -20], [62, 52, 10], [72, 56, 30]].map(([x, y, r]) => G(`rotate(${r} ${x} ${y})`, [P(`M${x - 8} ${y - 2} h16 v4 h-16z`, '#6E2E22', { sw: 1.4 })]))],
  satti: () => [...dSkewers(3, ID.brownSauce, { piece: 'ball' }), dSideDish(80, 78, 13, IC.chili)],

  // Laos
  laab: () => [...vPlate()[0], P('M18 66 c4-12 34-14 42 0 c-10 4-32 4-42 0z', ID.brownSauce), ...scatter(10, 38, 60, 14, 3, 13).map(([x, y]) => fine(Ci(x, y, 1.4, IC.tan), 0.7)), dLeaf(30, 58, -30, IC.herb, 9), dLeaf(46, 56, 30, IC.herb, 9), ...dChili([[38, 56, 30]]), G('translate(72 58)', [P('M-12 -14 c0-6 24-6 24 0 v14 c0 8-24 8-24 0z', ID.bamboo), L('M-12 -8 h24 M-12 -2 h24 M-12 4 h24', { width: 0.8, opacity: 0.5 }), P('M-12 -14 c4-8 20-8 24 0z', ID.rice, { sw: 1.4 })])],
  'tam-mak-hoong': () => [...ILLO_TECHNIQUES['curry-paste']().slice(0, 1), P('M20 54 h60 c0 20-12 32-30 32 c-18 0-30-12-30-32z', IT.clay), E(50, 54, 30, 6, '#B8B07A'), ...scatter(10, 50, 50, 20, 3, 4).map(([x, y, r]) => L(`M${x.toFixed(1)} ${y.toFixed(1)} l${(5 * Math.cos(r * 6)).toFixed(1)} -2`, { width: 1.4, stroke: IC.paleGreen })), ...dChili([[36, 48, 60], [62, 50, -40]]), fine(P('M44 50 a4 4 0 0 1 8 0z', IC.red), 1)],
  'khao-piak-sen': () => dishOf(vBowl('#EDE2C4', IC.white), [...dNoodles(IC.white, [[22, 78, 44], [26, 74, 48]], 3.6), ...dChunks([[36, 40], [56, 38]], IC.cream, 4.4), ...dDots([[46, 38], [64, 44], [30, 44]], ID.crisp, 1.8), dLeaf(68, 40, -40, IC.herb, 10), ...dScallion([[50, 44]])]),
  'or-lam': () => dishOf(vPot('#8A7A3A', IT.clay), [...[[32, 42, 10], [60, 40, -20]].map(([x, y, r]) => G(`rotate(${r} ${x} ${y})`, [P(`M${x - 8} ${y - 2} h16 v4 h-16z`, IC.brown, { sw: 1.3 }), L(`M${x - 6} ${y} h12`, { width: 0.8, opacity: 0.5 })])), fine(E(46, 44, 6, 3.4, IC.purple), 1.2), dLeaf(70, 42, -50, IC.deepGreen, 12), dLeaf(40, 40, 50, IC.deepGreen, 10), fine(P('M52 38 a4 3 0 0 1 8 0z', IC.tan), 1)]),
  'ping-kai': () => [L('M50 92 V8', { width: 5 }), L('M50 92 V8', { width: 3, stroke: IC.tan }), P('M36 22 c4-6 24-6 28 0 c10 4 16 14 12 22 l-6 -2 c2 8 2 16-2 22 l6 14 l-8 2 l-6 -12 h-20 l-6 12 l-8 -2 l6 -14 c-4-6-4-14-2-22 l-6 2 c-4-8 2-18 12-22z', ID.crisp), L('M38 36 c8 4 16 4 24 0 M38 48 c8 4 16 4 24 0', { width: 1.2, stroke: ID.brownSauce, opacity: 0.6 }), L('M30 26 H70 M28 62 H72', { width: 4 }), L('M30 26 H70 M28 62 H72', { width: 2, stroke: IC.tan })],
  'khao-jee': () => [...[[-1, 30], [0, 50], [1, 70]].map(([i, y]) => G(`translate(0 ${y - 50}) rotate(${i * 6} 50 50)`, [L('M12 50 H88', { width: 3.4 }), L('M12 50 H88', { width: 1.6, stroke: IC.tan }), P('M30 42 h40 c4 0 6 4 6 8 c0 4-2 8-6 8 h-40 c-4 0-6-4-6-8 c0-4 2-8 6-8z', IC.gold), ...dDots([[40, 48], [52, 52], [62, 47]], ID.crisp, 1.4)]))]
};

const dishCache = {};
function dishSvg(id, name = '') {
  if (!dishCache[id]) {
    const draw = ILLO_DISHES[id];
    const parts = draw ? draw() : ILLO_FORMS.bowl({ color: IC.amber, bowl: IC.cream });
    dishCache[id] = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${name.replace(/"/g, '&quot;')}">${illoRender(parts)}</svg>`;
  }
  return dishCache[id];
}
