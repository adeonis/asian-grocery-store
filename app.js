// The Asian Grocery Field Guide
//
// data/*.js defines INGREDIENTS, DISHES, TECHNIQUES and STARTER; illustrations.js
// draws every ingredient, dish and technique. This file indexes the data, keeps
// the list and pantry in localStorage and turns each route into an HTML string.
// Pages are plain functions of the route and saved state, so check.js can render
// every one of them in Node. Links are hash URLs; buttons carry data-action.

const SITE = 'The Asian Grocery Field Guide';

/* Catalog ----------------------------------------------------------------- */

const CUISINES = Object.keys(INGREDIENTS); // display order
const ingredients = [], dishes = [], techniques = [];
const ingredientByKey = {}, ingredientById = {}, ingredientByName = {}, dishByKey = {}, techniqueByKey = {};

const slugify = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function entry(kind, item, country, id, summary, extra) {
  const route = { ingredient: 'i', dish: 'd', technique: 't' }[kind];
  return { ...item, ...extra, kind, id, country, key: `${country}/${id}`, href: `#/${route}/${country}/${id}`, summary };
}

for (const [country, { categories }] of Object.entries(INGREDIENTS)) {
  for (const [category, items] of Object.entries(categories)) {
    for (const item of items) {
      const e = entry('ingredient', item, country, item.id, item.quickDesc, { category });
      ingredients.push(e);
      ingredientByKey[e.key] = e;
      ingredientById[e.id] ??= e;
      ingredientByName[e.name.toLowerCase()] ??= e;
    }
  }
}
for (const [country, regions] of Object.entries(DISHES)) {
  for (const items of Object.values(regions)) {
    for (const item of items) {
      const e = entry('dish', item, country, slugify(item.name), item.desc);
      dishes.push(e);
      dishByKey[e.key] = e;
    }
  }
}
for (const [country, group] of Object.entries(TECHNIQUES)) {
  for (const item of group.techniques) {
    const e = entry('technique', item, country, item.id, item.subtitle);
    techniques.push(e);
    techniqueByKey[e.key] = e;
  }
}

/* Matching a free-text ingredient name to an entry ------------------------- */
// Dish lists say "Cream" or "Peanuts"; the guide has "Coconut Cream" and
// "Roasted Peanuts". A link is only made when both name the same thing.

const INGREDIENT_ALIASES = {
  'annatto oil': 'philippines/ph-annatto',
  'thai chilies': 'thailand/thai-chilies',
  'kashmiri chilies': 'india/kashmiri-mirch',
  // Taiwan's only local soy entry is the thick paste; plain soy sauce is light soy
  'taiwan:soy sauce': 'china/light-soy',
  // Patis is fish sauce, but only its gloss says so, and glosses don't count
  // as the local version (Padaek's gloss is also "Lao Fish Sauce")
  'philippines:fish sauce': 'philippines/ph-fish-sauce'
};
// Plain staples and catch-alls: only an exact name links them
const MATCH_EXACT_ONLY = ['shrimp', 'chicken', 'pork', 'beef', 'lamb', 'duck', 'egg', 'fish', 'squid', 'crab', 'flour', 'sugar', 'salt', 'butter', 'onion', 'rice', 'noodle', 'cucumber', 'carrot', 'mushroom', 'spinach', 'cabbage', 'herb', 'green', 'water', 'oyster', 'curry'];
// Generic words that name a different product in another cuisine's entry
// ("Cream" is not Thai coconut cream), so they never match across cuisines
const MATCH_LOCAL_ONLY = ['cream', 'milk', 'vinegar', 'peppercorn', 'bean', 'mango', 'potato', 'sweet potato', 'sesame', 'bread', 'lemon', 'coconut', 'mustard', 'eggplant', 'mint', 'pickle', 'dipping sauce'];
// Words that name the form an ingredient is sold in ("Cumin Seeds" is cumin);
// "oil" is deliberately absent: coconut oil is not coconut
const MATCH_FORM_WORDS = ['seed', 'powder', 'paste', 'leave', 'leaf', 'noodle', 'sauce', 'pearl', 'starch', 'radish', 'root', 'stalk', 'broth', 'stock'];
// A query can name its ingredient plus what's made from it ("Lime juice",
// "Garlic oil"); the reverse is not true ("Coconut" is not coconut oil)
const MATCH_QUERY_SUFFIXES = [...MATCH_FORM_WORDS, 'juice', 'oil'];
// Words that only say whose version an ingredient is or the state it's sold
// in: "Korean Sesame Oil", "Fresh Ginger" and "Toasted Sesame Oil" are still
// sesame oil and ginger. Any other word may make it a different product
// ("Fried Garlic", "Fermented Tofu", "Silken Tofu")
const MATCH_PLAIN_WORDS = ['fresh', 'toasted', 'chinese', 'japanese', 'korean', 'thai', 'vietnamese', 'indian', 'taiwanese', 'filipino', 'lao'];

function matchWords(s) {
  return s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim().split(' ')
    .map(w => w.replace(/ies$/, 'i').replace(/oes$/, 'o').replace(/(?<!s)s$/, '')).join(' ');
}

const entriesByCountry = {};
function countryEntries(country) {
  return entriesByCountry[country] || (entriesByCountry[country] = ingredients.filter(e => e.country === country));
}

// Every name an entry goes by: full name, name without the parenthetical,
// the parenthetical, and each "/" alternative
const entryFormsCache = new Map();
function entryForms(e) {
  if (!entryFormsCache.has(e)) {
    const base = e.name.replace(/\([^)]*\)/g, ' ');
    const paren = (e.name.match(/\(([^)]*)\)/) || [])[1] || '';
    entryFormsCache.set(e, [e.name, base, paren, ...base.split('/')].map(matchWords).filter(Boolean));
  }
  return entryFormsCache.get(e);
}

// An entry is the same kind of thing when the query is its head noun
// ("Roasted Peanuts" for "Peanuts") or it is the query plus a form word
// ("Tamarind Paste" for "Tamarind"); the first such entry wins, since each
// cuisine lists its everyday version first. Failing that, the longest entry
// name that is the query's own head noun ("Urad Dal" in "Black urad dal")
// or the query minus a suffix ("Kinako" in "Kinako powder").
function bestSameKind(candidates, qw) {
  const tail = ' ' + qw;
  const withForm = new Set(MATCH_FORM_WORDS.map(w => qw + ' ' + w));
  const kind = candidates.find(e => entryForms(e).some(f => f.endsWith(tail) || withForm.has(f)));
  if (kind) return kind;
  const stems = new Set(MATCH_QUERY_SUFFIXES.filter(w => qw.endsWith(' ' + w)).map(w => qw.slice(0, -w.length - 1)));
  const within = f => qw.endsWith(' ' + f) || stems.has(f);
  let pick = null, len = 0;
  candidates.forEach(e => entryForms(e).forEach(f => { if (within(f) && f.length > len) { pick = e; len = f.length; } }));
  return pick;
}

// A cuisine's own plain version of the query, judged by its main name and
// never by a gloss ("Myoga (Japanese Ginger)" is not ginger): the query
// behind plain words ("Korean Sesame Oil") or before a form word ("Turmeric
// Powder"). Stricter than bestSameKind, because it beats an exact name in
// another cuisine.
function localVersion(local, qw) {
  const withForm = new Set(MATCH_FORM_WORDS.map(w => qw + ' ' + w));
  const plain = f => withForm.has(f)
    || (f.endsWith(' ' + qw) && f.slice(0, -qw.length - 1).split(' ').every(w => MATCH_PLAIN_WORDS.includes(w)));
  return local.find(e => e.name.replace(/\([^)]*\)/g, ' ').split('/').map(matchWords).some(plain));
}

const matchCache = new Map();
function match(name, country) {
  const key = `${country}|${name}`;
  if (!matchCache.has(key)) matchCache.set(key, matchIngredient(name, country));
  return matchCache.get(key);
}

function matchIngredient(name, country) {
  if (name.includes('/')) {
    for (const part of name.split('/')) { const m = matchIngredient(part, country); if (m) return m; }
    return null;
  }
  const q = name.toLowerCase().trim();
  const qw = matchWords(name.replace(/\([^)]*\)/g, ' '));
  const alias = INGREDIENT_ALIASES[`${country}:${q}`] || INGREDIENT_ALIASES[q];
  if (alias) return ingredientByKey[alias] || null;
  const named = e => entryForms(e).includes(qw);
  const local = countryEntries(country);
  const exact = local.find(e => e.name.toLowerCase() === q) || local.find(named);
  if (exact) return exact;
  if (qw.length < 4 || MATCH_EXACT_ONLY.includes(qw)) return ingredientByName[q] || ingredients.find(named) || null;
  // The dish's own version beats an exact name elsewhere: a Chinese dish's
  // "Ginger" is China's Fresh Ginger, not Vietnam's Ginger
  return localVersion(local, qw)
    || ingredientByName[q]
    || bestSameKind(local, qw)
    || ingredients.find(named)
    || (MATCH_LOCAL_ONLY.includes(qw) ? null : bestSameKind(ingredients, qw))
    || null;
}

// A dish's ingredients, each with the entry it links to (or null)
const dishItems = d => d.ingredients.map(name => ({ name, e: match(name, d.country) }));

/* Search ------------------------------------------------------------------- */
// Best hits first. Points for where the query appears:
//   [name is it, name starts with it, name has it, native/pronunciation, summary, longer text]
const SEARCH_POINTS = {
  ingredient: [100, 80, 60, 50, 30, 10],
  dish: [95, 75, 55, 35, 35, 0],
  technique: [90, 70, 50, 25, 25, 0]
};
function search(query) {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const has = (...fields) => fields.some(s => s && String(s).toLowerCase().includes(q));
  const score = e => {
    const name = e.name.toLowerCase(), points = SEARCH_POINTS[e.kind];
    const tier = name === q ? 0 : name.startsWith(q) ? 1 : name.includes(q) ? 2
      : has(e.native, e.pronunciation) ? 3 : has(e.summary) ? 4
      : e.kind === 'ingredient' && has(e.whatIsIt, e.substitutes, e.pairsWith.join(' ')) ? 5 : -1;
    return tier < 0 ? 0 : points[tier];
  };
  return [...ingredients, ...dishes, ...techniques]
    .map(e => [score(e), e]).filter(([s]) => s > 0)
    .sort((a, b) => b[0] - a[0]).slice(0, 30).map(([, e]) => e);
}

/* Saved state: the list and the pantry ------------------------------------ */
// Keys and shapes predate this file; keep them so saved lists survive.

const LIST_KEY = 'agsg-shopping-list';  // [{ id, name, category, checked, country? }]
const PANTRY_KEY = 'agsg-favorites';    // [ingredient id]

function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; }
}
function save() {
  try {
    localStorage.setItem(LIST_KEY, JSON.stringify(list));
    localStorage.setItem(PANTRY_KEY, JSON.stringify([...pantry]));
  } catch { /* private mode: keep working in memory */ }
}

let list = load(LIST_KEY, []);
const pantry = new Set(load(PANTRY_KEY, []));

const onList = id => list.some(i => i.id === id);
const inPantry = e => pantry.has(e.id);
const listEntry = item => ingredientByKey[`${item.country}/${item.id}`] || ingredientById[item.id];

const listItem = (e, name) => e
  ? { id: e.id, name: e.name, category: e.category, country: e.country, checked: false }
  : { id: 'misc-' + slugify(name), name, category: 'Other', checked: false };

// What a dish still needs: its ingredients minus what's in the pantry
const dishNeeds = d => dishItems(d).filter(({ e }) => !(e && inPantry(e))).map(({ name, e }) => listItem(e, name));
const dishOnList = d => dishNeeds(d).every(i => onList(i.id));

const ACTIONS = {
  list(key) {
    const e = ingredientByKey[key];
    list = onList(e.id) ? list.filter(i => i.id !== e.id) : [...list, listItem(e)];
  },
  pantry(key) {
    const e = ingredientByKey[key];
    inPantry(e) ? pantry.delete(e.id) : pantry.add(e.id);
  },
  dish(key) {
    const d = dishByKey[key], needs = dishNeeds(d);
    if (dishOnList(d)) list = list.filter(i => !needs.some(n => n.id === i.id));
    else list = [...list, ...needs.filter(n => !onList(n.id))];
  },
  check(id) { list = list.map(i => i.id === id ? { ...i, checked: !i.checked } : i); },
  remove(id) { list = list.filter(i => i.id !== id); },
  'clear-checked'() { list = list.filter(i => !i.checked); },
  'clear-all'() { list = []; }
};

/* Components --------------------------------------------------------------- */

const attr = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const flag = country => `<span aria-hidden="true">${INGREDIENTS[country].flag}</span>`;
const place = country => `${flag(country)} ${INGREDIENTS[country].name}`;

const art = e => e.kind === 'dish' ? dishSvg(e.id, e.name)
  : e.kind === 'technique' ? techniqueSvg(e.id, e.name)
  : illustrationSvg(e);
const thumb = (e, size = '') => `<span class="thumb ${size}" aria-hidden="true">${art(e)}</span>`;
const star = e => e.kind === 'ingredient' && inPantry(e)
  ? ' <span class="star"><span aria-hidden="true">★</span><span class="sr-only">In pantry</span></span>' : '';

function row(e, { sub = e.summary, title = e.name, attrs = '', mark = true } = {}) {
  return `<a class="row" href="${e.href}"${attrs}>${thumb(e)}<span class="row-text">` +
    `<span class="row-title">${title}${mark ? star(e) : ''}</span>${sub ? `<span class="row-sub">${sub}</span>` : ''}</span></a>`;
}
const rows = entries => entries.length ? `<div class="rows">${entries.map(e => row(e)).join('')}</div>` : '';
const section = (title, body) => body ? `<section><h2>${title}</h2>${body}</section>` : '';
const bullets = items => items && items.length ? `<ul class="bullets">${items.map(i => `<li>${i}</li>`).join('')}</ul>` : '';
const steps = items => items && items.length ? `<ol class="steps">${items.map(i => `<li>${i}</li>`).join('')}</ol>` : '';
const prose = text => text ? `<p>${text}</p>` : '';

// [term, detail, value] items, e.g. ["Cornstarch", "Tenderizes and seals", "1 tbsp"]
function terms(items, ordered = false) {
  const tag = ordered ? 'ol' : 'ul';
  return `<${tag} class="terms${ordered ? ' steps' : ''}">${items.map(([term, detail, value]) =>
    `<li><div class="term">${term}${value ? `<span class="value">${value}</span>` : ''}</div><div class="detail">${detail}</div></li>`).join('')}</${tag}>`;
}

function toggle(action, key, pressed, label, off, on) {
  return `<button class="btn" data-action="${action}" data-id="${key}" aria-pressed="${pressed}">` +
    `<span aria-hidden="true">${pressed ? on : off}</span> ${label}</button>`;
}

function hero(e, meta, actions = '') {
  meta = meta.filter(Boolean);
  return `<a class="context" href="#/c/${e.country}">${place(e.country)}</a>
    <div class="hero">${thumb(e, 'lg')}<div class="hero-text">
      <h1>${e.name}</h1>
      ${meta.length ? `<p class="meta">${meta.join(' · ')}</p>` : ''}
      ${actions ? `<div class="actions">${actions}</div>` : ''}
    </div></div>`;
}

const videos = links => links && links.length ? `<ul class="links">${links.map(v =>
  `<li><a href="${attr(v.url)}" target="_blank" rel="noopener">${v.title}<span aria-hidden="true"> ↗</span></a></li>`).join('')}</ul>` : '';

/* Pages: each returns { title, html } -------------------------------------- */

function homePage() {
  const cuisines = CUISINES.map(c =>
    `<a href="#/c/${c}"><span class="flag" aria-hidden="true">${INGREDIENTS[c].flag}</span>${INGREDIENTS[c].name}</a>`).join('');
  const recipes = STARTER.recipes.map(r => `<details class="recipe">
      <summary><span class="thumb flag" aria-hidden="true">${INGREDIENTS[r.country].flag}</span><span class="grow">${r.name}</span><span class="meta">${r.time}</span></summary>
      <div class="recipe-body">${bullets(r.ingredients)}${steps(r.steps)}</div>
    </details>`).join('');
  return {
    title: '',
    html: `<h1 class="sr-only">${SITE}</h1>
      ${section('Cuisines', `<nav class="cuisines">${cuisines}</nav>`)}
      ${section('Starter pantry', rows(STARTER.pantry.map(key => ingredientByKey[key])))}
      ${section('First recipes', `<div>${recipes}</div>`)}`
  };
}

function cuisinePage(country) {
  const { name, categories } = INGREDIENTS[country];
  const here = entries => entries.filter(e => e.country === country);
  return {
    title: name,
    html: `<h1>${flag(country)} ${name}</h1>
      ${section('Dishes', rows(here(dishes)))}
      ${Object.keys(categories).map(c => section(c, rows(here(ingredients).filter(e => e.category === c)))).join('')}
      ${section('Techniques', rows(here(techniques)))}`
  };
}

function ingredientPage(e) {
  const pairs = e.pairsWith.map(name => {
    const m = match(name, e.country);
    return m && m.id !== e.id ? `<a href="${m.href}">${name}</a>` : name;
  }).join(', ');
  const actions = toggle('list', e.key, onList(e.id), 'List', '+', '✓') + toggle('pantry', e.key, inPantry(e), 'Pantry', '☆', '★');
  return {
    title: e.name,
    html: `${hero(e, [e.native, e.pronunciation], actions)}
      <p class="lead">${e.whatIsIt}</p>
      ${section('How to use', bullets(e.howToUse))}
      ${section('Tip', prose(e.proTip))}
      ${section('Pairs with', prose(pairs))}
      ${section('Storage', prose(e.storage))}
      ${section('Substitutes', prose(e.substitutes))}
      ${section('Videos', videos(e.youtube))}`
  };
}

function dishPage(d) {
  const items = dishItems(d);
  const found = items.filter(i => i.e).map(({ name, e }) => row(e, { title: name }));
  const other = items.filter(i => !i.e).map(({ name }) =>
    `<div class="row"><span class="thumb none"></span><span class="row-text"><span class="row-title">${name}</span></span></div>`);
  const actions = dishNeeds(d).length ? toggle('dish', d.key, dishOnList(d), 'List', '+', '✓') : '';
  const source = d.source ? `<p class="source"><a href="${attr(d.source)}" target="_blank" rel="noopener">Full recipe: ${d.sourceName || 'source'}<span aria-hidden="true"> ↗</span></a></p>` : '';
  return {
    title: d.name,
    html: `${hero(d, [d.native], actions)}
      <p class="lead">${d.desc}</p>
      ${section('Ingredients', `<div class="rows">${[...found, ...other].join('')}</div>`)}
      ${section('Method', steps(d.steps) + source)}`
  };
}

// A technique's optional sections, in page order: [field, heading, item → [term, detail, value] or text]
const DIAGRAMS = {
  process: d => terms(d.steps.map(s => [s.label, s.detail]), true),
  formula: d => terms(d.components.map(c => [c.name, c.detail, c.amount])) + (d.result ? `<p class="result">${d.result}</p>` : ''),
  matrix: d => terms(d.categories.map(c => [c.name, c.items.join(', ')])),
  layout: d => terms(d.zones.map(z => [z.name, z.items.join(', ')]))
};
const TECHNIQUE_SECTIONS = [
  ['principles', 'Principles', p => [p.title, p.description]],
  ['formulas', 'Ratios', f => [f.name, f.ratio]],
  ['commonMistakes', 'Common mistakes', m => m],
  ['equipment', 'Equipment', e => [e.name, e.note]],
  ['variations', 'Variations', v => [v.name, v.description]],
  ['dishes', 'Dishes', d => [d.name, d.description]],
  ['uses', 'Uses', u => [u.dish, u.description]],
  ['meats', 'Cuts', m => [m.name, m.description]],
  ['spiceBlend', 'Spice blend', s => [s.spice, s.note, s.amount]],
  ['examples', 'Examples', x => [x.dish, x.balance]],
  ['fillings', 'Fillings', f => [f.name, f.description]],
  ['commonTadkas', 'Regional tadkas', t => [t.name, t.description]],
  ['spiceGroups', 'Toasting', g => [g.group, g.spices]]
];

function techniquePage(t) {
  const sections = TECHNIQUE_SECTIONS.map(([field, heading, item]) => {
    const items = (t[field] || []).map(item);
    if (!items.length) return '';
    return section(heading, typeof items[0] === 'string' ? bullets(items) : terms(items));
  }).join('');
  return {
    title: t.name,
    html: `${hero(t, [t.native, t.pronunciation])}
      <p class="lead">${t.intro}</p>
      ${t.diagram ? section(t.diagram.title, DIAGRAMS[t.diagram.type](t.diagram)) : ''}
      ${sections}
      ${section('Videos', videos(t.youtube))}`
  };
}

// The list is grouped in the order you walk the store
const AISLES = [
  ['Produce', ['Produce']],
  ['Sauces & condiments', ['Sauces & Condiments']],
  ['Noodles & rice', ['Noodles & Rice']],
  ['Dry goods', ['Pantry Staples']],
  ['Spices', ['Spices']],
  ['Fridge & freezer', ['Proteins & Tofu', 'Proteins & Seafood']],
  ['Other', []]
];
const aisleOf = item => (AISLES.find(([, cats]) => cats.includes(item.category)) || AISLES[AISLES.length - 1])[0];

function listPage() {
  const item = i => {
    const e = listEntry(i), id = attr(i.id), box = `item-${id}`;
    return `<li class="check">
      <input type="checkbox" id="${box}" data-action="check" data-id="${id}"${i.checked ? ' checked' : ''}>
      ${e ? `<a class="thumb" href="${e.href}" aria-label="${attr(e.name)}">${art(e)}</a>` : '<span class="thumb none"></span>'}
      <label for="${box}">${i.name}</label>
      <button class="icon-btn" data-action="remove" data-id="${id}" aria-label="Remove ${attr(i.name)}">×</button>
    </li>`;
  };
  const groups = AISLES.map(([aisle]) => {
    const items = list.filter(i => aisleOf(i) === aisle);
    return section(aisle, items.length && `<ul class="checks">${items.map(item).join('')}</ul>`);
  }).join('');
  const toolbar = `<div class="toolbar">
      ${list.some(i => i.checked) ? '<button class="text-btn" data-action="clear-checked">Clear checked</button>' : ''}
      <button class="text-btn" data-action="clear-all">Clear all</button>
      <button class="text-btn" data-action="print">Print</button>
    </div>`;
  const kept = [...pantry].map(id => ingredientById[id]).filter(Boolean).map(e => `<li class="item">${row(e, { sub: place(e.country), mark: false })}
      <button class="icon-btn" data-action="pantry" data-id="${e.key}" aria-label="Remove ${attr(e.name)} from pantry">★</button></li>`).join('');
  return {
    title: 'List',
    html: `<h1>List</h1>
      ${list.length ? groups + toolbar : '<p class="empty">Your list is empty.</p>'}
      <div class="no-print">${section('Pantry', kept && `<ul class="items">${kept}</ul>`)}</div>`
  };
}

/* Routes ------------------------------------------------------------------- */
// #/  #/c/china  #/i/china/light-soy  #/d/china/mapo-tofu  #/t/china/stir-frying  #/list
// Anything else (including the old #/tab/... links) shows the home page.

function route(hash) {
  const [view, country, id] = hash.replace(/^#\/?/, '').split('/').map(decodeURIComponent);
  const key = `${country}/${id}`;
  if (view === 'c' && INGREDIENTS[country]) return cuisinePage(country);
  if (view === 'i' && ingredientByKey[key]) return ingredientPage(ingredientByKey[key]);
  if (view === 'd' && dishByKey[key]) return dishPage(dishByKey[key]);
  if (view === 't' && techniqueByKey[key]) return techniquePage(techniqueByKey[key]);
  if (view === 'list') return listPage();
  return homePage();
}

function header() {
  const count = list.filter(i => !i.checked).length;
  return `<header class="bar"><div class="wrap">
    <a class="brand" href="#/">${SITE}</a>
    <button class="icon-btn" data-action="search" aria-label="Search" aria-keyshortcuts="/">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
    </button>
    <a class="list-link" href="#/list">List${count ? `<span class="count"><span class="sr-only">, </span>${count}</span>` : ''}</a>
  </div></header>`;
}

/* Browser ------------------------------------------------------------------ */

function boot() {
  const app = document.getElementById('app');
  const dialog = document.getElementById('search');
  const input = document.getElementById('q');
  const results = document.getElementById('results');

  function render() {
    const { title, html } = route(location.hash);
    document.title = title ? `${title} — ${SITE}` : SITE;
    const { action, id } = document.activeElement?.dataset || {};
    app.innerHTML = header() + `<main class="wrap">${html}</main>`;
    // Keep keyboard focus on the control that was just used
    if (action) app.querySelector(`[data-action="${action}"]${id ? `[data-id="${CSS.escape(id)}"]` : ''}`)?.focus();
  }

  // Back and forward return to where you were on the page
  history.scrollRestoration = 'manual';
  let pendingScroll;
  addEventListener('scroll', () => {
    clearTimeout(pendingScroll);
    pendingScroll = setTimeout(() => history.replaceState({ y: scrollY }, ''), 150);
  }, { passive: true });
  addEventListener('hashchange', () => {
    clearTimeout(pendingScroll);
    if (dialog.open) dialog.close();
    render();
    scrollTo(0, history.state?.y || 0);
  });

  document.addEventListener('click', event => {
    const el = event.target.closest('[data-action]');
    if (!el) return;
    const { action, id } = el.dataset;
    if (action === 'search') return openSearch();
    if (action === 'print') return print();
    if (action === 'clear-all' && !confirm('Clear your list?')) return;
    ACTIONS[action](id);
    save();
    render();
  });

  // Search: "/" or ⌘K opens it; arrows move, Enter opens, Esc closes
  const KIND_LABEL = { ingredient: '', dish: ' · Dish', technique: ' · Technique' };
  let hits = [], active = 0;
  function openSearch() {
    input.value = '';
    showHits();
    dialog.showModal();
  }
  function showHits() {
    hits = search(input.value);
    results.innerHTML = hits.length
      ? hits.map((e, i) => row(e, { sub: place(e.country) + KIND_LABEL[e.kind], attrs: ` role="option" id="hit-${i}"` })).join('')
      : input.value.trim().length > 1 ? '<p class="empty">No results</p>' : '';
    input.setAttribute('aria-expanded', hits.length > 0);
    highlight(0);
  }
  function highlight(i) {
    const options = results.querySelectorAll('[role="option"]');
    active = options.length ? (i + options.length) % options.length : 0;
    options.forEach((o, n) => o.setAttribute('aria-selected', n === active));
    if (options.length) {
      input.setAttribute('aria-activedescendant', options[active].id);
      options[active].scrollIntoView({ block: 'nearest' });
    } else input.removeAttribute('aria-activedescendant');
  }
  input.addEventListener('input', showHits);
  // The pointer moves the one selection, so hover and arrow keys never disagree
  results.addEventListener('mousemove', e => {
    const option = e.target.closest('[role="option"]');
    if (option && option.getAttribute('aria-selected') !== 'true') highlight([...results.children].indexOf(option));
  });
  input.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); highlight(active + (e.key === 'ArrowDown' ? 1 : -1)); }
    if (e.key === 'Enter' && hits[active]) { e.preventDefault(); dialog.close(); location.hash = hits[active].href; }
  });
  results.addEventListener('click', e => { if (e.target.closest('a')) dialog.close(); });
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); }); // backdrop
  document.addEventListener('keydown', e => {
    if (dialog.open || /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName)) return;
    if (e.key === '/' || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) { e.preventDefault(); openSearch(); }
  });

  render();
  if (history.state?.y) scrollTo(0, history.state.y);
}

if (typeof document !== 'undefined') boot();
