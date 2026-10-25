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
const fine = (part, sw = 1.2) => ({ ...part, sw });
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
    const color = p.fill ? `<g transform="translate(${ILLO_OFFSET} ${ILLO_OFFSET})"><${p.tag} ${a} fill="${p.fill}"/></g>` : '';
    const outline = `<${p.tag} ${a} fill="none" stroke="${ILLO_INK}" stroke-width="${p.sw || 2.4}" stroke-linejoin="round"/>`;
    return knock + color + outline;
  }).join('');
}

function illoShade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const ch = s => Math.max(0, Math.min(255, Math.round(((n >> s) & 255) * (1 + amt))));
  return '#' + [16, 8, 0].map(s => ch(s).toString(16).padStart(2, '0')).join('');
}

// Short native-script label for packaging (a few characters fit on a jar)
function illoLabel(o, width) {
  const raw = (o.label || '').split(/[\/(（]/)[0].trim();
  if (!raw) return [];
  const chars = Array.from(raw);
  const isWide = /[　-鿿가-힯]/.test(raw);
  const max = isWide ? Math.max(2, Math.floor(width / 7)) : Math.floor(width / 4.4);
  const text = chars.slice(0, max).join('').replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const len = Math.min(chars.length, max);
  const size = isWide ? Math.min(11, (width - 4) / len) : Math.min(8, (width - 4) / (len * 0.62));
  return [text, Math.max(5, size)];
}

function labelText(o, w, cx, cy) {
  const lab = illoLabel(o, w);
  return lab.length ? [T(lab[0], cx, cy, lab[1])] : [];
}

function labelParts(o, x, y, w, h) {
  return [P(`M${x} ${y} h${w} v${h} h-${w}z`, ILLO_PAPER, { sw: 1.8 }), ...labelText(o, w, x + w / 2, y + h / 2)];
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
    ...labelParts(o, 37, 56, 26, 22)
  ],
  tallBottle: o => [
    P('M45 4 h10 v9 h-10z', o.cap || IC.darkBrown),
    P('M46 13 h8 v18 c0 5 9 7 9 14 v42 c0 3-2 5-5 5 h-16 c-3 0-5-2-5-5 v-42 c0-7 9-9 9-14z', o.color),
    L('M40 48 v6', { stroke: ILLO_PAPER, width: 2.2 }),
    ...labelParts(o, 39, 58, 22, 22)
  ],
  squeeze: o => [
    P('M48.5 18 l1.5-10 l1.5 10z', o.cap || IC.herb),
    P('M43 32 l4-14 h6 l4 14z', o.cap || IC.herb),
    P('M34 38 c0-5 4-7 8-7 h16 c4 0 8 2 8 7 v46 c0 3-2 5-5 5 h-22 c-3 0-5-2-5-5z', o.color),
    ...labelParts(o, 38, 50, 24, 20)
  ],
  jar: o => [
    P('M29 18 h42 v12 h-42z', o.cap || IC.red),
    P('M31 30 h38 c2 0 3 1.5 3 4 v46 c0 5-3 8-8 8 h-28 c-5 0-8-3-8-8 v-46 c0-2.5 1-4 3-4z', o.color),
    ...(o.dots ? scatter(7, 50, 79, 15, 4, 3).map(([x, y]) => fine(Ci(x, y, 3.2, o.dots))) : []),
    ...labelParts(o, 34, 44, 32, 22)
  ],
  smallJar: o => [
    P('M34 32 h32 v10 h-32z', o.cap || IC.darkBrown),
    P('M35 42 h30 c2 0 3 1.5 3 4 v34 c0 4-3 7-7 7 h-22 c-4 0-7-3-7-7 v-34 c0-2.5 1-4 3-4z', o.color),
    ...labelParts(o, 37, 54, 26, 18)
  ],
  tub: o => [
    P('M20 30 h60 v9 h-60z', o.cap || IC.red),
    P('M23 39 h54 l-4 43 c-0.3 3-2 5-5 5 h-36 c-3 0-4.7-2-5-5z', o.color),
    ...labelParts(o, 33, 50, 34, 22)
  ],
  tube: o => [
    P('M30 70 h40 l-4 16 h-32z', o.cap || IC.herb),
    P('M30 70 l4-46 c0-3 3-4 5-4 h22 c2 0 5 1 5 4 l4 46z', o.color),
    L('M36 20 h28', { width: 2.4 }),
    ...labelParts(o, 38, 34, 24, 22)
  ],
  can: o => [
    P('M28 22 v60 a22 6 0 0 0 44 0 v-60z', o.color),
    P('M28 22 a22 6 0 1 0 44 0 a22 6 0 1 0 -44 0z', IC.metal),
    ...labelParts(o, 28, 42, 44, 26)
  ],
  bottleLow: o => [ // a squat bottle for thick sauces (oyster, hoisin)
    P('M42 10 h16 v10 h-16z', o.cap || IC.red),
    P('M43 20 h14 v6 c0 4 13 6 13 14 v42 c0 4-3 6-6 6 h-28 c-3 0-6-2-6-6 v-42 c0-8 13-10 13-14z', o.color),
    ...labelParts(o, 36, 52, 28, 24)
  ],
  bag: o => [
    P('M26 14 h48 v8 h-48z', o.cap || IC.red),
    L('M30 14 v8 M36 14 v8 M42 14 v8 M48 14 v8 M54 14 v8 M60 14 v8 M66 14 v8 M72 14 v8', { width: 1 }),
    P('M26 22 h48 l4 62 c0.2 3-2 5-5 5 h-46 c-3 0-5.2-2-5-5z', o.color),
    ...(o.grains
      ? [P('M36 40 h28 v32 h-28z', ILLO_PAPER, { sw: 1.8 }),
         ...scatter(10, 50, 56, 10, 12, 5).map(([x, y, r]) => fine(E(x, y, 1.8, 3.4, o.grains, r * 180), 1))]
      : labelParts(o, 34, 40, 32, 30))
  ],
  box: o => [
    P('M22 34 l20 -12 h38 l-20 12z', illoShade(o.color, 0.25)),
    P('M60 34 l20 -12 v50 l-20 12z', illoShade(o.color, -0.2)),
    P('M22 34 h38 v50 h-38z', o.color),
    ...labelParts(o, 26, 46, 30, 22)
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
      ...labelText(o, 28, 50, 50)
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
    const pts = scatter(o.count || 22, 50, 56, 26, 14, shape.length * 3);
    return [
      E(50, 66, 38, 13, IC.cream),
      ...pts.map(([x, y, r]) => fine(shape === 'round' ? Ci(x, y - 4, o.size || 3, o.color)
        : shape === 'oval' ? E(x, y - 4, 1.8, 4.4, o.color, r * 180)
        : shape === 'bean' ? E(x, y - 4, 4.4, 3.4, o.color, r * 180)
        : shape === 'nut' ? P(`M${x - 5} ${y - 4} c0-6 10-6 10-2 c-3 0-6 2-6 6 c-3 0-4-2-4-4z`, o.color)
        : shape === 'pearl' ? Ci(x, y - 4, 4, o.color)
        : P(`M${x - 4} ${y - 6} l6 -2 l3 6 l-6 3z`, o.color), 1.3))
    ];
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
  flakes: o => [E(50, 68, 36, 11, IC.cream), ...scatter(22, 50, 56, 24, 12, 41).map(([x, y, r]) => fine(P(`M${x - 5} ${y - 3} l8 -3 l3 5 l-7 4z`, r > 0.5 ? o.color : illoShade(o.color, 0.18)), 1.3))],
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
  [/perilla|shiso|kkaennip/i, 'leaf', { color: IC.herb }],
  [/lemongrass/i, 'stalks', { color: IC.paleGreen, thick: true, base: IC.cream }],
  [/chives/i, 'stalks', { color: IC.deepGreen, thin: true }],
  [/scallion|green onion|negi|leek/i, 'stalks', { color: IC.herb, base: IC.white }],
  [/culantro|sawtooth|lao dill/i, 'herbs', { color: IC.herb, leaf: 'blade' }],
  [/cilantro|coriander/i, 'herbs', { color: IC.herb, leaf: 'frilly' }],
  [/thai basil/i, 'herbs', { color: IC.deepGreen, cap: IC.purple }],
  [/basil|mint/i, 'herbs', { color: IC.herb }],
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
