# The Asian Grocery Field Guide

What to buy at the Asian grocery store and how to use it.

## Run

Open `index.html` in a browser. There is no build step and nothing to install.

## Check

```
node check.js
```

Validates the data, renders every page in Node and follows every internal link. Run it before you commit.

## Files

| File | Holds |
| --- | --- |
| `index.html` | The page shell and the search dialog |
| `style.css` | Every style, with the colors as variables at the top |
| `app.js` | Indexes the data, saves the list and pantry, renders each route |
| `illustrations.js` | Draws each ingredient, dish and technique as SVG |
| `data/ingredients.js` | `INGREDIENTS`: cuisine, then category, then entries |
| `data/dishes.js` | `DISHES`: cuisine, then region, then dishes |
| `data/techniques.js` | `TECHNIQUES`: cuisine, then techniques |
| `data/starter.js` | `STARTER`: the home page's pantry and first recipes |
| `check.js` | The check above |

## Routes

`#/` home, `#/c/china` cuisine, `#/i/china/light-soy` ingredient, `#/d/china/mapo-tofu` dish, `#/t/china/stir-frying` technique, `#/list` list and pantry. Anything else shows the home page.

## How it works

- Each page is a function in `app.js` that returns `{ title, html }`. `route()` picks one.
- Links are plain hash URLs. Buttons carry `data-action` and `data-id`, and `ACTIONS` in `app.js` handles them. Nothing uses inline `onclick`.
- One `row()` shows ingredients, dishes, techniques and search results.
- Dish ingredients and "Pairs with" items link to entries by name through `match()`. When a name links to the wrong entry, add it to `INGREDIENT_ALIASES`.
- The list and pantry live in `localStorage` under `agsg-shopping-list` and `agsg-favorites`. Keep those keys and shapes or saved lists disappear.

## Rules

- No taglines, helper text or secondary labels. If a screen needs them to make sense, fix the layout.
- One column, one row, one button style. Add a style to `style.css` only when no existing one fits.
- Ingredient ids are unique within a cuisine. `check.js` enforces this.

## Adding content

- **Ingredient:** add it under its cuisine and category in `data/ingredients.js` with every field the others have. Its drawing comes from its name (`ILLO_RULES` in `illustrations.js`).
- **Dish:** add it under its cuisine and region in `data/dishes.js`. Its id is its name in lowercase with dashes. Add a drawing under that id in `ILLO_DISHES`, or it gets a plain bowl.
- **Technique:** add it in `data/techniques.js`. The optional sections it can have are listed in `TECHNIQUE_SECTIONS` in `app.js`.

Then run `node check.js`.
