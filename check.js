// Checks the guide without a browser: `node check.js`
// Validates the data, renders every page and follows every internal link.
// Exits 1 and lists the problems if anything is wrong.

const fs = require('fs');
const vm = require('vm');

// A saved list and pantry, so the list page renders real rows
const saved = {
  'agsg-shopping-list': JSON.stringify([
    { id: 'fish-sauce', name: 'Fish Sauce', category: 'Sauces & Condiments', checked: false },
    { id: 'ginger', name: 'Fresh Ginger', category: 'Produce', country: 'india', checked: true },
    { id: 'misc-ground-pork', name: 'Ground pork', category: 'Other', checked: false }
  ]),
  'agsg-favorites': JSON.stringify(['light-soy', 'fish-sauce'])
};
const context = vm.createContext({ console, localStorage: { getItem: k => saved[k] ?? null, setItem() {} } });
for (const file of ['data/ingredients.js', 'data/dishes.js', 'data/techniques.js', 'data/starter.js', 'illustrations.js', 'app.js']) {
  vm.runInContext(fs.readFileSync(`${__dirname}/${file}`, 'utf8'), context, { filename: file });
}
const app = vm.runInContext(`({ INGREDIENTS, STARTER, ingredients, dishes, techniques, ingredientByKey, route, search, ACTIONS, dishByKey, match })`, context);

const problems = [];
const expect = (ok, message) => { if (!ok) problems.push(message); };

// Data
const REQUIRED = {
  ingredient: ['id', 'name', 'native', 'pronunciation', 'quickDesc', 'whatIsIt', 'howToUse', 'pairsWith', 'storage', 'substitutes', 'proTip'],
  dish: ['name', 'desc', 'ingredients'],
  technique: ['id', 'name', 'subtitle', 'intro']
};
for (const list of [app.ingredients, app.dishes, app.techniques]) {
  const seen = new Set();
  for (const e of list) {
    expect(!seen.has(e.key), `duplicate ${e.kind} ${e.key}`);
    seen.add(e.key);
    for (const field of REQUIRED[e.kind]) {
      const v = e[field];
      expect(Array.isArray(v) ? v.length : v, `${e.kind} ${e.key} is missing ${field}`);
    }
  }
}
for (const key of app.STARTER.pantry) expect(app.ingredientByKey[key], `starter pantry ref ${key} does not exist`);
for (const r of app.STARTER.recipes) expect(app.INGREDIENTS[r.country], `recipe ${r.name} has unknown country ${r.country}`);

// Pages
const hrefs = [
  '#/', '#/list',
  ...Object.keys(app.INGREDIENTS).map(c => `#/c/${c}`),
  ...[...app.ingredients, ...app.dishes, ...app.techniques].map(e => e.href)
];
const isHome = html => html.includes('<h1 class="sr-only">');
let links = 0;
for (const href of hrefs) {
  let page;
  try { page = app.route(href); } catch (err) { problems.push(`${href} throws: ${err.message}`); continue; }
  expect(href === '#/' || !isHome(page.html), `${href} falls through to the home page`);
  expect(!/undefined|NaN|\[object Object\]/.test(page.html), `${href} renders undefined, NaN or [object Object]`);
  for (const [, link] of page.html.matchAll(/href="(#\/[^"]*)"/g)) {
    links++;
    expect(link === '#/' || !isHome(app.route(link).html), `${href} links to missing page ${link}`);
  }
}

// Ingredient links: a dish's own cuisine beats the same name elsewhere, but
// only with its plain version of the thing
const linkOf = (dishKey, name) => {
  const d = app.dishByKey[dishKey];
  return d.ingredients.includes(name) ? app.match(name, d.country)?.key : `no "${name}" in ${dishKey}`;
};
expect(linkOf('china/jiaozi', 'Ginger') === 'china/ginger', "Jiaozi's ginger should link to China's Fresh Ginger");
expect(linkOf('china/jiaozi', 'Sesame oil') === 'china/sesame-oil', "Jiaozi's sesame oil should link to China's Toasted Sesame Oil");
expect(!['thailand/fried-garlic', undefined].includes(linkOf('thailand/som-tam', 'Garlic')), "Som tam's garlic should link to garlic, not Fried Garlic");
expect(!['laos/la-padaek', undefined].includes(linkOf('laos/laab', 'Fish sauce')), "Laab's fish sauce should link to fish sauce, not Padaek");

// Search and actions
expect(app.search('gochujang')[0]?.name === 'Gochujang', 'search for "gochujang" should find Gochujang first');
expect(app.search('mapo')[0]?.kind === 'dish', 'search for "mapo" should find Mapo Tofu');
expect(app.search('x').length === 0, 'one-letter searches should return nothing');
const dish = app.dishByKey['china/jiaozi'];
app.ACTIONS.dish(dish.key);
expect(app.route('#/list').html.includes('Dumpling Wrappers'), 'adding Jiaozi should put dumpling wrappers on the list');
expect(!app.route('#/list').html.includes('Light Soy Sauce</label>'), 'adding Jiaozi should skip soy sauce, which is in the pantry');
app.ACTIONS.dish(dish.key);
expect(!app.route('#/list').html.includes('Dumpling Wrappers'), 'pressing List again on Jiaozi should take its ingredients off');

if (problems.length) {
  console.error(problems.join('\n'));
  console.error(`\n${problems.length} problem${problems.length === 1 ? '' : 's'}`);
  process.exit(1);
}
console.log(`ok: ${app.ingredients.length} ingredients, ${app.dishes.length} dishes, ${app.techniques.length} techniques, ${hrefs.length} pages, ${links} links`);
