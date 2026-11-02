// Cooking techniques by cuisine (#/t/china/stir-frying). Optional sections are
// listed in TECHNIQUE_SECTIONS in app.js; `diagram` is one of process, formula,
// matrix or layout.
const TECHNIQUES = {
  china: {
    techniques: [
      {
        id: "stir-frying",
        name: "Stir Frying",
        native: "炒",
        pronunciation: "chǎo",
        subtitle: "Wok hei, the smoky 'breath of the wok'",
        intro: "Stir frying is one of the most common methods in Chinese cooking. Done right, it produces the smoky, charred flavor called 'wok hei' that marks restaurant-quality Chinese food. It takes extreme heat, constant motion and precise timing.",
        diagram: {
          type: "process",
          title: "The Stir Fry Sequence",
          steps: [
            { label: "Heat Wok", detail: "Smoking hot, 2-3 minutes over high heat" },
            { label: "Add Oil", detail: "Swirl to coat sides, 10-15 seconds" },
            { label: "Aromatics", detail: "Garlic, ginger, scallion whites for 30 seconds" },
            { label: "Protein First", detail: "Spread flat, sear 1 min, then toss" },
            { label: "Vegetables", detail: "Hardest first, add in waves" },
            { label: "Sauce + Finish", detail: "Down the sides, toss to coat" }
          ]
        },
        principles: [
          {
            title: "Mise en Place",
            description: "Everything cut and measured before you start. Once the wok is hot, there's no time to prep."
          },
          {
            title: "Wok Hei",
            description: "The 'breath of the wok': a smoky, slightly charred flavor you can only get with extreme heat (over 1200°F in restaurants)."
          },
          {
            title: "Small Batches",
            description: "Never crowd the wok. Cook 1/2 lb protein max at a time. Overcrowding creates steam, not sear."
          },
          {
            title: "Constant Motion",
            description: "Toss and flip every 10-15 seconds. The wok's curved shape lets you push food up the sides and return to the heat zone."
          }
        ],
        commonMistakes: [
          "Using a cold wok instead of waiting until it smokes",
          "Adding sauce too early (creates steam)",
          "Overcrowding the wok",
          "Not having everything prepped before starting"
        ],
        equipment: [
          { name: "Carbon Steel Wok", note: "14-inch flat bottom for home stoves" },
          { name: "Wok Spatula", note: "Metal with curved edge" },
          { name: "Spider Strainer", note: "For blanching and draining" }
        ],
        youtube: [
          { title: "Three Core Stir-Frying Techniques — Chinese Cooking Demystified", url: "https://www.youtube.com/watch?v=X6JE7W8Z6Hs" },
          { title: "Stir Frying 101: Pork and Chili — Chinese Cooking Demystified", url: "https://www.youtube.com/watch?v=WujehK7kYLM" }
        ]
      },
      {
        id: "velveting",
        name: "Velveting",
        native: "上浆",
        pronunciation: "shàng jiāng",
        subtitle: "How Chinese restaurants get meat silky and tender",
        intro: "Velveting is a Chinese method of pre-treating meat so it cooks up tender and silky. It's why chicken at a Chinese restaurant tastes different from most home-cooked chicken: it's been velveted.",
        diagram: {
          type: "formula",
          title: "The Velvet Marinade",
          components: [
            { name: "Protein", amount: "1 lb", detail: "Chicken, beef, pork or shrimp, sliced thin" },
            { name: "Egg White", amount: "1", detail: "Creates protective coating" },
            { name: "Cornstarch", amount: "1 tbsp", detail: "Tenderizes and seals" },
            { name: "Shaoxing Wine", amount: "1 tbsp", detail: "Removes gamey odors" },
            { name: "Salt", amount: "½ tsp", detail: "Seasons and tenderizes" },
            { name: "Oil", amount: "1 tsp", detail: "Prevents sticking" }
          ],
          result: "Marinate 30 min → Blanch in water OR oil → Stir fry"
        },
        principles: [
          {
            title: "Water vs Oil Velveting",
            description: "Water velveting (pass through 180°F water) is healthier and easier at home. Oil velveting (pass through 275°F oil) is traditional and yields slightly better texture."
          },
          {
            title: "Slice Against the Grain",
            description: "Always cut meat against the muscle fibers, about ¼ inch thick. This mechanically tenderizes the meat."
          },
          {
            title: "Don't Skip the Rest",
            description: "The marinade needs 20-30 minutes to work. The cornstarch and salt break down proteins, while the egg white forms a protective seal."
          }
        ],
        commonMistakes: [
          "Skipping the resting time",
          "Using whole eggs instead of egg whites (too rich)",
          "Water too hot when blanching (over 180°F cooks the meat)",
          "Not draining well before stir-frying"
        ],
        equipment: [
          { name: "Bowl", note: "For marinating" },
          { name: "Pot or Wok", note: "For blanching" },
          { name: "Spider Strainer", note: "To remove protein from water/oil" }
        ],
        youtube: [
          { title: "How to Velvet Chicken — Chinese Cooking Demystified", url: "https://www.youtube.com/watch?v=nM1GQNJU6LQ" },
          { title: "How to Velvet Any Protein — Woks of Life", url: "https://www.youtube.com/watch?v=odGG8AEf0LU" }
        ]
      },
      {
        id: "sauce-building",
        name: "The Secrets of Sauce",
        native: "调味",
        pronunciation: "tiáo wèi",
        subtitle: "Building flavor through the Chinese sauce matrix",
        intro: "Chinese sauces are built by balancing salty, sweet, sour and umami ingredients. Once you know this matrix, you can make most Chinese sauces from memory.",
        diagram: {
          type: "matrix",
          title: "The Sauce Building Blocks",
          categories: [
            {
              name: "Salty Base",
              items: ["Light soy sauce", "Dark soy sauce", "Salt", "Oyster sauce"]
            },
            {
              name: "Sweet",
              items: ["Sugar", "Rock sugar", "Hoisin sauce", "Sweet bean paste"]
            },
            {
              name: "Sour/Acid",
              items: ["Chinkiang vinegar", "Rice vinegar", "Shaoxing wine", "Tomato"]
            },
            {
              name: "Umami Boost",
              items: ["MSG", "Fermented black beans", "Doubanjiang", "Dried shrimp"]
            },
            {
              name: "Aromatic",
              items: ["Garlic", "Ginger", "Scallions", "Sesame oil (finish)"]
            },
            {
              name: "Thickener",
              items: ["Cornstarch slurry", "Reduction", "Egg"]
            }
          ]
        },
        formulas: [
          {
            name: "Basic Stir-Fry Sauce",
            ratio: "2 tbsp soy : 1 tbsp wine : 1 tsp sugar : 1 tsp cornstarch + 2 tbsp water"
          },
          {
            name: "Kung Pao Sauce",
            ratio: "1 tbsp soy : 1 tbsp vinegar : 1 tbsp sugar : 1 tsp cornstarch"
          },
          {
            name: "Black Bean Sauce",
            ratio: "1 tbsp fermented black beans : 1 tbsp soy : 1 tbsp wine : aromatics"
          },
          {
            name: "Sweet & Sour",
            ratio: "3 tbsp sugar : 3 tbsp vinegar : 2 tbsp ketchup : 1 tbsp soy"
          }
        ],
        principles: [
          {
            title: "Pre-mix Your Sauce",
            description: "Combine all sauce ingredients in a bowl before cooking. Once the wok is hot, there's no time to measure."
          },
          {
            title: "Add Sauce Last",
            description: "Pour sauce down the sides of the wok (not on food) in the last 30 seconds. This lets it hit the hot metal and sizzle."
          },
          {
            title: "Cornstarch Slurry",
            description: "Always mix cornstarch with cold water first (1:2 ratio). Adding directly causes clumps."
          }
        ],
        youtube: [
          { title: "Chinese Sauce Science — Chinese Cooking Demystified", url: "https://www.youtube.com/watch?v=i9dP-MmC25I" },
          { title: "Essential Chinese Sauce Combinations — Chinese Cooking Demystified", url: "https://www.youtube.com/watch?v=J2-1ZErtS7A" }
        ]
      },
      {
        id: "wok-station",
        name: "The Wok Station",
        native: "锅台",
        pronunciation: "guō tái",
        subtitle: "Setting up your mise en place for wok cooking",
        intro: "Professional Chinese kitchens move fast because everything is organized and within arm's reach. Set up a proper wok station at home and you can work the same way.",
        diagram: {
          type: "layout",
          title: "The Home Wok Station",
          zones: [
            {
              name: "Prep Zone",
              items: ["Sliced proteins (velveted)", "Vegetables (cut by cook time)", "Aromatics (garlic, ginger, scallions)"]
            },
            {
              name: "Heat Zone",
              items: ["Wok on high heat", "Wok spatula ready", "Lid within reach"]
            },
            {
              name: "Sauce Zone",
              items: ["Pre-mixed sauce in bowl", "Oil bottle", "Finishing ingredients (sesame oil, scallion greens)"]
            },
            {
              name: "Within Reach",
              items: ["Salt", "White pepper", "MSG (optional)", "Shaoxing wine"]
            }
          ]
        },
        principles: [
          {
            title: "Cut by Cook Time",
            description: "Group vegetables by how long they take to cook: hard (carrots, celery) → medium (peppers, snap peas) → soft (leafy greens, tomatoes)."
          },
          {
            title: "Oil Ready",
            description: "Keep your oil in a squeeze bottle or small pitcher. You'll add oil 2-3 times during cooking and need to do it fast."
          },
          {
            title: "Empty Plates for Parking",
            description: "Have empty plates ready to 'park' cooked ingredients while you cook the next batch, then combine at the end."
          }
        ],
        equipment: [
          { name: "Small bowls", note: "For prepped ingredients (ramekins work great)" },
          { name: "Large plate", note: "For parking cooked items" },
          { name: "Squeeze bottle", note: "For oil" },
          { name: "Kitchen towels", note: "For hot handles" }
        ],
        youtube: [
          { title: "Wok Setup for the Home Cook — Epicurious", url: "https://www.youtube.com/watch?v=g5q27t7M3c4" },
          { title: "Mise en Place for Wok Cooking — Chinese Cooking Demystified", url: "https://www.youtube.com/watch?v=i2w77ip9tiM" }
        ]
      },
      {
        id: "cornstarch-thickening",
        name: "Cornstarch Thickening",
        native: "勾芡",
        pronunciation: "gōu qiàn",
        subtitle: "Creating the glossy, clingy sauces of Chinese cuisine",
        intro: "That glossy, clingy sauce coating every piece of Kung Pao Chicken? That's cornstarch at work. Chinese cooking uses cornstarch slurries to create sauces that coat rather than pool.",
        diagram: {
          type: "formula",
          title: "Mixing the Slurry",
          components: [
            { name: "Cornstarch", amount: "1 part", detail: "Pure thickening power" },
            { name: "Cold Water", amount: "2 parts", detail: "Must be cold to prevent clumping" }
          ],
          result: "Mix until smooth → Add to hot liquid → Stir constantly → Cooks in 30 seconds"
        },
        principles: [
          {
            title: "Cold Liquid First",
            description: "Always dissolve cornstarch in cold water or stock first. Hot liquid causes instant clumping."
          },
          {
            title: "Stir Before Adding",
            description: "Cornstarch settles quickly. Always give the slurry a stir right before adding to the wok."
          },
          {
            title: "Add Gradually",
            description: "You can always add more, but you can't remove it. Start with half your slurry and add more if needed."
          },
          {
            title: "High Heat Activation",
            description: "Cornstarch thickens at about 200°F. Once it goes in, keep the heat high and stir constantly for 30 seconds."
          }
        ],
        commonMistakes: [
          "Making slurry with hot water (causes lumps)",
          "Adding too much at once (gluey texture)",
          "Not stirring constantly (creates stringy patches)",
          "Cooking too long (sauce thins out again)"
        ],
        formulas: [
          {
            name: "Light Glaze",
            ratio: "1 tsp cornstarch : 2 tsp water per cup of liquid"
          },
          {
            name: "Medium Coating",
            ratio: "1 tbsp cornstarch : 2 tbsp water per cup of liquid"
          },
          {
            name: "Thick Gravy",
            ratio: "2 tbsp cornstarch : 4 tbsp water per cup of liquid"
          }
        ],
        youtube: [
          { title: "Chinese Cornstarch Slurry Technique — Wok with Tak", url: "https://www.youtube.com/watch?v=rKav7iKX-Ug" },
          { title: "Thickening Chinese Sauces — Chinese Cooking Demystified", url: "https://www.youtube.com/watch?v=i9dP-MmC25I" }
        ]
      }
    ]
  },

  japan: {
    techniques: [
      {
        id: "dashi-building",
        name: "Dashi Building",
        native: "出汁",
        pronunciation: "dashi",
        subtitle: "The stock behind most Japanese cooking",
        intro: "Dashi is the base stock of Japanese cooking, a delicate broth that adds umami without overwhelming other flavors. Once you can make dashi, you can make miso soup, noodle broths, simmered dishes and more.",
        diagram: {
          type: "formula",
          title: "Primary Dashi (Ichiban Dashi)",
          components: [
            { name: "Water", amount: "4 cups", detail: "Soft or filtered water preferred" },
            { name: "Kombu", amount: "1 piece (4×4 inch)", detail: "Dried kelp (wipe, don't wash)" },
            { name: "Katsuobushi", amount: "1 cup packed", detail: "Bonito flakes, added after the kombu comes out" }
          ],
          result: "Steep kombu 30 min → Heat to 170°F → Remove kombu → Add bonito → Steep 5 min → Strain"
        },
        principles: [
          {
            title: "Never Boil Kombu",
            description: "Boiling kombu releases bitter compounds and makes the dashi slimy. Remove it just before the water boils (around 170°F)."
          },
          {
            title: "Don't Squeeze the Bonito",
            description: "Pressing or squeezing katsuobushi extracts bitter flavors. Let it drip naturally through the strainer."
          },
          {
            title: "Second Dashi (Niban)",
            description: "The strained kombu and bonito can make a second, lighter dashi. Simmer 10 minutes with fresh water for everyday cooking."
          }
        ],
        variations: [
          {
            name: "Vegetarian Dashi",
            description: "Kombu + dried shiitake mushrooms, steeped overnight in cold water"
          },
          {
            name: "Iriko Dashi",
            description: "Small dried sardines: stronger, fishier, great for miso soup"
          },
          {
            name: "Awase Dashi",
            description: "Mixed: kombu + katsuobushi + iriko for deeper flavor"
          }
        ],
        youtube: [
          { title: "How to Make Dashi — Just One Cookbook", url: "https://www.youtube.com/watch?v=Uq-0jBpKRTU" },
          { title: "Dashi Fundamentals — Just One Cookbook", url: "https://www.youtube.com/watch?v=5qBAcsM31Rg" }
        ]
      },
      {
        id: "teriyaki-glaze",
        name: "Teriyaki Technique",
        native: "照り焼き",
        pronunciation: "teriyaki",
        subtitle: "Building a glossy glaze",
        intro: "Traditional teriyaki is a cooking technique. The word means 'shining grilled,' after the glossy lacquer you get by brushing on a simple glaze and letting it reduce as the food cooks.",
        diagram: {
          type: "formula",
          title: "Traditional Teriyaki Ratio",
          components: [
            { name: "Soy Sauce", amount: "1 part", detail: "Use Japanese soy (less salty)" },
            { name: "Mirin", amount: "1 part", detail: "Sweet rice wine (real mirin, not aji-mirin)" },
            { name: "Sake", amount: "1 part", detail: "Adds depth, helps tenderize" },
            { name: "Sugar", amount: "½ part", detail: "Optional: adjust sweetness to taste" }
          ],
          result: "Simmer until slightly reduced → Brush on protein → Grill/pan-fry → Brush again → Repeat 3-4 times"
        },
        principles: [
          {
            title: "Build Layers",
            description: "Brush the glaze on in thin layers, letting each one caramelize before adding the next. This creates the signature lacquered finish."
          },
          {
            title: "Watch Your Heat",
            description: "Teriyaki burns easily due to the sugar content. Use medium-high heat and stay attentive."
          },
          {
            title: "Fresh Glaze for Service",
            description: "Make extra glaze and keep some 'clean' for brushing on after cooking. Don't use the glaze that touched raw meat."
          }
        ],
        youtube: [
          { title: "Authentic Teriyaki Technique — Just One Cookbook", url: "https://www.youtube.com/watch?v=n88PT1dSVn8" },
          { title: "How to Make Real Teriyaki — Sudachi Recipes", url: "https://www.youtube.com/watch?v=A4yY7rkzATI" }
        ]
      },
      {
        id: "tempura-technique",
        name: "Tempura",
        native: "天ぷら",
        pronunciation: "tempura",
        subtitle: "Achieving the light, crispy coating",
        intro: "Good tempura is very light, with a thin, crisp shell that shatters when you bite it. The ingredients are basic (flour, water, egg), so technique matters most: keep everything cold and don't overmix.",
        diagram: {
          type: "formula",
          title: "Tempura Batter",
          components: [
            { name: "Cake Flour", amount: "1 cup", detail: "Low gluten = lighter batter. All-purpose works but is heavier." },
            { name: "Ice Water", amount: "1 cup", detail: "Must be ice cold; add ice cubes to the bowl" },
            { name: "Egg Yolk", amount: "1", detail: "Beaten, then added to water first" },
            { name: "Vodka", amount: "2 tbsp", detail: "Optional: evaporates faster than water for extra crispness" }
          ],
          result: "Egg + water first → Sift in flour → Mix with chopsticks (lumpy is OK) → Use immediately"
        },
        principles: [
          {
            title: "Cold is Key",
            description: "Chill your flour, use ice water, even chill your mixing bowl. Cold prevents gluten from developing."
          },
          {
            title: "Lumps are Good",
            description: "Unlike most batters, tempura batter should be lumpy. Overmixing develops gluten and makes it heavy."
          },
          {
            title: "Clean Oil Temp",
            description: "Maintain 340-360°F. Drop in a bit of batter: it should sink slightly, then float up sizzling. Skim bits of fried batter constantly."
          },
          {
            title: "Dry Your Ingredients",
            description: "Pat vegetables and seafood completely dry. Water creates steam pockets that make batter soggy."
          }
        ],
        commonMistakes: [
          "Batter too thick (should be thin, almost watery)",
          "Oil not hot enough (absorbs oil, becomes greasy)",
          "Crowding the pot (drops temperature)",
          "Mixing batter ahead of time (make it fresh)"
        ],
        youtube: [
          { title: "How to Make Perfect Tempura — Sudachi Recipes", url: "https://www.youtube.com/watch?v=s1XtDCPIvtE" },
          { title: "Tempura Master Class — Munchies", url: "https://www.youtube.com/watch?v=YjqRU1mNBSQ" }
        ]
      },
      {
        id: "rice-preparation",
        name: "Japanese Rice",
        native: "ご飯",
        pronunciation: "gohan",
        subtitle: "Cooking the rice served with most Japanese meals",
        intro: "In Japan, rice is so central that the word 'gohan' means both 'rice' and 'meal.' Properly cooked Japanese rice should be glossy, slightly sticky and each grain distinct. It takes practice, but the technique is precise.",
        diagram: {
          type: "process",
          title: "The Rice Washing Ritual",
          steps: [
            { label: "Measure", detail: "Use rice cooker cup (180ml, smaller than US cup)" },
            { label: "First Wash", detail: "Add cold water, swirl once, drain immediately" },
            { label: "Scrub", detail: "Gently 'polish' grains with your hand, 20 strokes" },
            { label: "Rinse", detail: "Add water, swirl, drain. Repeat until water is nearly clear (4-5 times)" },
            { label: "Soak", detail: "Cover with water, rest 30 min (needed for even cooking)" },
            { label: "Drain & Cook", detail: "Drain, add fresh water at 1:1 ratio, cook" }
          ]
        },
        principles: [
          {
            title: "Water Ratio Matters",
            description: "For Japanese short-grain rice: 1:1 to 1:1.1 (rice to water). New crop rice needs less water, older rice needs more."
          },
          {
            title: "Don't Peek",
            description: "Once cooking starts (rice cooker or pot), don't lift the lid. Steam is doing the work."
          },
          {
            title: "Rest After Cooking",
            description: "Let rice rest 10-15 minutes after cooking finishes. Then 'cut' through it with paddle to release steam, don't stir."
          }
        ],
        youtube: [
          { title: "How to Make Japanese Rice — Sudachi Recipes", url: "https://www.youtube.com/watch?v=SUobHmcIOc8" },
          { title: "Perfect Japanese Rice — Just One Cookbook", url: "https://www.youtube.com/watch?v=wU3kjMb-ZYQ" }
        ]
      },
      {
        id: "knife-cuts",
        name: "Japanese Knife Cuts",
        native: "切り方",
        pronunciation: "kirikata",
        subtitle: "Precision cutting for beautiful presentation and even cooking",
        intro: "Japanese cooks take knife skills seriously. The cut affects appearance, texture and how ingredients absorb flavors. Each cut has a name and purpose.",
        diagram: {
          type: "matrix",
          title: "Basic Japanese Cuts",
          categories: [
            {
              name: "Rounds & Halves",
              items: ["Wagiri (rounds)", "Hangetsugiri (half-moons)", "Ichogiri (quarter-moons)"]
            },
            {
              name: "Diagonal",
              items: ["Nanamegiri (diagonal)", "Sogigiri (thin diagonal, for delicate items)"]
            },
            {
              name: "Sticks & Strips",
              items: ["Sengiri (thin julienne)", "Hyoshigiri (thick sticks)", "Tanzakugiri (rectangles)"]
            },
            {
              name: "Decorative",
              items: ["Hanagiri (flower)", "Kikukagiri (chrysanthemum)", "Nejimume (spiral)"]
            },
            {
              name: "Special",
              items: ["Sasagaki (shaved, for burdock)", "Rangiri (rolling, for stews)", "Mentori (beveled edges)"]
            }
          ]
        },
        principles: [
          {
            title: "Sharp Knife, Single Direction",
            description: "Japanese knives are pulled, not pushed. Draw the blade toward you in one smooth motion instead of sawing."
          },
          {
            title: "Consistent Size",
            description: "All pieces should be uniform so they cook evenly and look harmonious. This is considered basic respect for ingredients."
          },
          {
            title: "Cut for the Dish",
            description: "Thin cuts for quick-cooking dishes, thicker for stews. The cut should match the cooking method."
          }
        ],
        youtube: [
          { title: "Japanese Knife Skills — Epicurious", url: "https://www.youtube.com/watch?v=FDNNG9doFe4" },
          { title: "Essential Japanese Cutting Techniques", url: "https://www.youtube.com/watch?v=idSstlMJuLE" }
        ]
      }
    ]
  },

  korea: {
    techniques: [
      {
        id: "kimchi-fermentation",
        name: "Kimchi Fermentation",
        native: "김치 담그기",
        pronunciation: "kimchi damgeugi",
        subtitle: "Making Korea's best-known ferment",
        intro: "Kimchi is a side dish that keeps fermenting after you make it. The same base technique produces hundreds of variations, from classic napa cabbage to white kimchi to cucumber kimchi.",
        diagram: {
          type: "process",
          title: "Napa Cabbage Kimchi",
          steps: [
            { label: "Salt", detail: "Quarter cabbage, salt between leaves (½ cup per head), rest 2 hours" },
            { label: "Rinse", detail: "Rinse thoroughly 3 times, squeeze out water, rest to drain 30 min" },
            { label: "Make Paste", detail: "Gochugaru + fish sauce + garlic + ginger + sugar" },
            { label: "Add Fillings", detail: "Mix paste with scallions, radish, jeotgal (salted seafood)" },
            { label: "Massage", detail: "Work paste between every leaf with gloved hands" },
            { label: "Ferment", detail: "Pack in jar, 1-5 days at room temp, then refrigerate" }
          ]
        },
        principles: [
          {
            title: "Salt Properly",
            description: "Besides seasoning, the salt draws out water and creates the conditions for fermentation. After salting, the cabbage should be wilted but not mushy."
          },
          {
            title: "Gochugaru Matters",
            description: "Use Korean chili flakes (gochugaru), not regular chili powder. It's milder, slightly sweet and has the right texture to create that paste."
          },
          {
            title: "Fermentation Time = Flavor",
            description: "Day 1-2: Fresh, mild. Day 3-5: Tangy, complex. Week 2+: Sour, intense. Taste daily and refrigerate when it's where you like it."
          }
        ],
        equipment: [
          { name: "Large basin", note: "For salting cabbage" },
          { name: "Food-safe gloves", note: "Chili will burn hands" },
          { name: "Glass or ceramic jar", note: "Metal reacts with acid" }
        ],
        variations: [
          { name: "Kkakdugi", description: "Cubed radish kimchi: same paste, crunchier texture" },
          { name: "Baek-kimchi", description: "White kimchi: no chili, milder, stuffed with julienned fillings" },
          { name: "Oi-sobagi", description: "Stuffed cucumber kimchi: quick ferment, summer favorite" }
        ],
        youtube: [
          { title: "How to Make Kimchi — Eater", url: "https://www.youtube.com/watch?v=TI949vGM4JM" },
          { title: "Traditional Kimchi Recipe — Maangchi", url: "https://www.youtube.com/watch?v=eTucCw1w6Ak" }
        ]
      },
      {
        id: "korean-bbq",
        name: "Korean BBQ Setup",
        native: "고기 굽기",
        pronunciation: "gogi gupgi",
        subtitle: "The complete tabletop grilling experience",
        intro: "Korean BBQ is a whole meal built around the grill. Protein, wraps, banchan, sauces and condiments all work together, so it helps to know how the table is set up.",
        diagram: {
          type: "layout",
          title: "The Korean BBQ Table",
          zones: [
            {
              name: "Grill Zone",
              items: ["Tabletop grill", "Tongs & scissors", "Marinated meats"]
            },
            {
              name: "Wraps",
              items: ["Lettuce leaves (sangchu)", "Perilla leaves (kkaennip)", "Pickled radish wraps"]
            },
            {
              name: "Banchan",
              items: ["Kimchi (multiple types)", "Pickled vegetables", "Seasoned spinach", "Bean sprouts"]
            },
            {
              name: "Sauces & Add-ons",
              items: ["Ssamjang", "Sesame oil + salt", "Sliced garlic", "Sliced jalapeños"]
            }
          ]
        },
        principles: [
          {
            title: "Wrap Building",
            description: "The ssam: lettuce leaf → meat → rice → ssamjang → garlic → kimchi → fold and eat in one bite. Layer flavors, don't overstuff."
          },
          {
            title: "Cut as You Cook",
            description: "Large cuts go on the grill first. Once seared, use scissors to cut into bite-sized pieces and finish cooking. This maximizes surface area."
          },
          {
            title: "Don't Flip Too Much",
            description: "Let the meat develop a crust before flipping. One flip for thin cuts, max two for thick cuts."
          }
        ],
        meats: [
          { name: "Samgyeopsal", description: "The classic: unmarinated pork belly dipped in sesame oil + salt" },
          { name: "Bulgogi", description: "Soy-marinated beef that's sweet and caramelizes nicely" },
          { name: "Galbi", description: "Marinated short ribs, cut flanken-style across the bone" },
          { name: "Dak-galbi", description: "Spicy marinated chicken, often griddled with vegetables" }
        ],
        youtube: [
          { title: "Korean BBQ Guide — Honeysuckle", url: "https://www.youtube.com/watch?v=PPlyk4wwWlw" },
          { title: "Complete Korean BBQ at Home", url: "https://www.youtube.com/watch?v=f1gAg2dYxMM" }
        ]
      },
      {
        id: "gochujang-sauces",
        name: "Gochujang-Based Sauces",
        native: "고추장 소스",
        pronunciation: "gochujang soseu",
        subtitle: "Building bold Korean sauces from fermented chili paste",
        intro: "Gochujang is Korea's fermented chili paste: spicy, sweet and deeply savory. It's intense on its own, but mixed with other ingredients it becomes the base for many Korean sauces.",
        diagram: {
          type: "matrix",
          title: "Gochujang Sauce Building",
          categories: [
            {
              name: "Base",
              items: ["Gochujang"]
            },
            {
              name: "Sweeten",
              items: ["Sugar", "Honey", "Corn syrup", "Apple/pear puree"]
            },
            {
              name: "Thin",
              items: ["Soy sauce", "Rice vinegar", "Sesame oil", "Water"]
            },
            {
              name: "Aromatics",
              items: ["Garlic", "Ginger", "Scallions", "Sesame seeds"]
            },
            {
              name: "Umami",
              items: ["Fish sauce", "Soy sauce", "Doenjang"]
            }
          ]
        },
        formulas: [
          {
            name: "Bibimbap Sauce",
            ratio: "2 tbsp gochujang : 1 tbsp sesame oil : 1 tbsp water : 1 tsp sugar : 1 tsp vinegar"
          },
          {
            name: "Ssamjang (Wrap Sauce)",
            ratio: "1 tbsp gochujang : 1 tbsp doenjang : 1 tsp sesame oil : minced garlic"
          },
          {
            name: "Tteokbokki Sauce",
            ratio: "2 tbsp gochujang : 1 tbsp gochugaru : 1 tbsp sugar : 1 tbsp soy sauce"
          },
          {
            name: "Korean Fried Chicken Glaze",
            ratio: "3 tbsp gochujang : 2 tbsp honey : 1 tbsp soy sauce : 1 tbsp rice vinegar"
          }
        ],
        principles: [
          {
            title: "Balance the Heat",
            description: "Gochujang is fermented, so it has savory depth as well as heat. Sweetness brings out its flavor rather than masking it."
          },
          {
            title: "Consistency Matters",
            description: "Straight gochujang is thick. For dipping sauces, thin it. For glazes, keep it thick so it coats."
          }
        ],
        youtube: [
          { title: "Gochujang Sauce Variations — Aaron and Claire", url: "https://www.youtube.com/watch?v=beWXJ7fp8gU" },
          { title: "Essential Gochujang Sauces for Korean Cooking", url: "https://www.youtube.com/watch?v=COUf-RjgZ7I" }
        ]
      },
      {
        id: "banchan-philosophy",
        name: "Banchan Balance",
        native: "반찬",
        pronunciation: "banchan",
        subtitle: "The art of the Korean side dish spread",
        intro: "Banchan are a core part of the Korean meal, served alongside the main dish rather than before it. A good spread balances flavors, textures, and colors and adds variety to the table.",
        diagram: {
          type: "matrix",
          title: "The Balanced Banchan Spread",
          categories: [
            {
              name: "Fermented",
              items: ["Kimchi (various)", "Jangajji (soy pickles)", "Jeotgal (fermented seafood)"]
            },
            {
              name: "Seasoned Vegetables (Namul)",
              items: ["Spinach (sigeumchi)", "Bean sprouts (kongnamul)", "Fernbrake (gosari)", "Bellflower root (doraji)"]
            },
            {
              name: "Braised (Jorim)",
              items: ["Soy-braised tofu", "Braised potatoes", "Soy eggs (mayak gyeran)", "Braised lotus root"]
            },
            {
              name: "Pan-fried (Jeon)",
              items: ["Zucchini jeon", "Fish jeon", "Kimchi jeon"]
            },
            {
              name: "Fresh/Crunchy",
              items: ["Cucumber salad (oi-muchim)", "Radish salad", "Green onion salad (pajori)"]
            }
          ]
        },
        principles: [
          {
            title: "Flavor Balance",
            description: "Include something sour (fermented), something savory (braised), something fresh (raw/blanched). No one flavor should dominate."
          },
          {
            title: "Color Harmony",
            description: "Koreans eat with their eyes first. Aim for green, white, orange/red and brown in your spread."
          },
          {
            title: "Make Ahead",
            description: "Most banchan keep well refrigerated. Batch cook 4-5 types on the weekend and enjoy all week."
          }
        ],
        youtube: [
          { title: "Korean Banchan Spread — Complete Guide", url: "https://www.youtube.com/watch?v=uRMhMGQqYro" },
          { title: "Easy Banchan Recipes for Beginners", url: "https://www.youtube.com/watch?v=OeVE6vZZLEo" }
        ]
      },
      {
        id: "jjigae-technique",
        name: "Jjigae (Stew) Technique",
        native: "찌개",
        pronunciation: "jjigae",
        subtitle: "Korean stews that cook and serve in the same pot",
        intro: "Jjigae is a category of Korean stews served bubbling hot in the same pot they're cooked in. Unlike soups, they're concentrated and meant to be eaten with rice. The technique is fast: most jjigae take under 20 minutes.",
        diagram: {
          type: "process",
          title: "Basic Jjigae Method",
          steps: [
            { label: "Sauté Base", detail: "Pork/seafood + aromatics in pot, 2-3 min" },
            { label: "Add Paste", detail: "Fry gochugaru, gochujang or doenjang briefly" },
            { label: "Add Liquid", detail: "Anchovy stock, rice water or plain water" },
            { label: "Main Ingredients", detail: "Tofu, vegetables, kimchi: whatever defines the stew" },
            { label: "Simmer", detail: "7-10 min covered, until vegetables tender" },
            { label: "Finish Hot", detail: "Add scallions, egg (optional), serve bubbling" }
          ]
        },
        principles: [
          {
            title: "Use the Right Pot",
            description: "Traditional ttukbaegi (stone pots) retain heat and keep stew bubbling at the table. You don't need one, but it makes the meal nicer."
          },
          {
            title: "Use Rice Water",
            description: "Water saved from rinsing rice adds body and slight creaminess to stews. Many Korean home cooks swear by it."
          },
          {
            title: "Serve Immediately",
            description: "Jjigae should arrive still bubbling. The egg goes in at the table, where the residual heat cooks it."
          }
        ],
        variations: [
          { name: "Kimchi-jjigae", description: "Fermented kimchi + pork + tofu. Better with aged kimchi." },
          { name: "Doenjang-jjigae", description: "Fermented soybean paste base + vegetables + tofu" },
          { name: "Sundubu-jjigae", description: "Silken tofu in spicy broth + optional egg and seafood" },
          { name: "Budae-jjigae", description: "Army stew: spam, hot dogs, ramen, kimchi, cheese" }
        ],
        youtube: [
          { title: "Korean Kimchi Jjigae — Maangchi", url: "https://www.youtube.com/watch?v=rJgb92JWMCE" },
          { title: "Korean Stew Technique — Korean Bapsang", url: "https://www.youtube.com/watch?v=afE_qNmwToo" }
        ]
      }
    ]
  },

  thailand: {
    techniques: [
      {
        id: "curry-paste",
        name: "Curry Paste Building",
        native: "เครื่องแกง",
        pronunciation: "kreuang gaeng",
        subtitle: "The mortar and pestle method",
        intro: "Traditional Thai curry paste is pounded, not blended. A mortar and pestle bruises fibers and releases oils in a way a blender can't. The finished paste should be smooth but still have body; don't take it all the way to a purée.",
        diagram: {
          type: "process",
          title: "Pounding Order (It Matters)",
          steps: [
            { label: "Hard/Dry First", detail: "Pound salt, peppercorns, coriander seeds to powder" },
            { label: "Fibrous Items", detail: "Pound lemongrass, galangal, kaffir lime zest fine" },
            { label: "Chilies", detail: "Dried or fresh, broken down with salt" },
            { label: "Aromatics", detail: "Pound garlic and shallots into the paste" },
            { label: "Wet/Soft", detail: "Shrimp paste and fresh herbs, pounded last" },
            { label: "Rest", detail: "Let paste sit 30 min before cooking for flavors to meld" }
          ]
        },
        formulas: [
          {
            name: "Red Curry Paste",
            ratio: "15 dried red chilies : 1 tbsp coriander seed : 1 tsp cumin : 4 garlic : 2 shallots : 2 stalks lemongrass : 1 inch galangal : 1 tsp shrimp paste"
          },
          {
            name: "Green Curry Paste",
            ratio: "15 green Thai chilies : same spices as red : plus fresh cilantro roots and Thai basil"
          },
          {
            name: "Massaman Paste",
            ratio: "Dried chilies : cinnamon : cardamom : cloves : nutmeg : star anise : plus standard aromatics"
          }
        ],
        principles: [
          {
            title: "Order Matters",
            description: "Hard items won't break down if added after wet items. Always dry → fibrous → wet."
          },
          {
            title: "Salt is Your Grit",
            description: "Salt creates friction to help break down fibrous ingredients. Don't skip it early."
          },
          {
            title: "Fresh vs Store-Bought",
            description: "Fresh paste has brighter, more vibrant flavor. Store-bought works but use 2-3 tbsp instead of 1-2."
          }
        ],
        equipment: [
          { name: "Granite Mortar & Pestle", note: "Heavy granite, at least 7-inch diameter" },
          { name: "Microplane", note: "For zesting kaffir lime" }
        ],
        youtube: [
          { title: "Thai Curry Paste from Scratch — Hot Thai Kitchen", url: "https://www.youtube.com/watch?v=d6YbVqqcR4w" },
          { title: "Red Curry Paste — Mortar & Pestle — Hot Thai Kitchen", url: "https://www.youtube.com/watch?v=ZXVVIG0qh3s" }
        ]
      },
      {
        id: "flavor-balance",
        name: "Thai Flavor Balance",
        native: "รสชาติ",
        pronunciation: "rot chart",
        subtitle: "The harmony of sweet, sour, salty and spicy",
        intro: "Thai cooking is about balance: no single flavor should dominate. Most dishes hit sweet, sour, salty and often spicy notes, so taste and adjust as you cook.",
        diagram: {
          type: "matrix",
          title: "The Four Tastes + Umami",
          categories: [
            {
              name: "Salty (เค็ม)",
              items: ["Fish sauce", "Soy sauce", "Shrimp paste", "Salt"]
            },
            {
              name: "Sweet (หวาน)",
              items: ["Palm sugar", "White sugar", "Coconut sugar", "Sweet soy sauce"]
            },
            {
              name: "Sour (เปรี้ยว)",
              items: ["Lime juice", "Tamarind", "Vinegar", "Green mango"]
            },
            {
              name: "Spicy (เผ็ด)",
              items: ["Thai chilies", "White pepper", "Chili flakes", "Curry paste"]
            },
            {
              name: "Umami",
              items: ["Fish sauce", "Fermented shrimp", "MSG", "Dried shrimp"]
            }
          ]
        },
        principles: [
          {
            title: "Taste as You Go",
            description: "Unlike Western cooking, Thai cooking requires constant tasting and adjusting. Add a bit, taste, adjust."
          },
          {
            title: "Start with Fish Sauce",
            description: "Fish sauce brings both salt and umami. Add that first, then balance with sugar and acid."
          },
          {
            title: "Lime Juice Last",
            description: "Add lime juice off the heat or just before serving. Heat destroys its brightness."
          }
        ],
        examples: [
          {
            dish: "Pad Thai",
            balance: "Tamarind (sour) + Fish sauce (salty/umami) + Palm sugar (sweet) + Chili flakes (spicy)"
          },
          {
            dish: "Tom Yum",
            balance: "Lime (sour) + Fish sauce (salty) + Sugar (sweet) + Thai chilies (spicy) + Galangal (aromatic)"
          },
          {
            dish: "Green Papaya Salad",
            balance: "Lime + Tamarind (sour) + Fish sauce (salty) + Palm sugar (sweet) + Bird's eye chilies (spicy)"
          }
        ],
        youtube: [
          { title: "Thai Flavor Balancing — Hot Thai Kitchen", url: "https://www.youtube.com/watch?v=RjAsKIKdq0g" },
          { title: "Understanding Thai Flavors — Hot Thai Kitchen", url: "https://www.youtube.com/watch?v=HvhXtEg6Xv0" }
        ]
      },
      {
        id: "coconut-curry-technique",
        name: "Coconut Curry Method",
        native: "แกงกะทิ",
        pronunciation: "gaeng kati",
        subtitle: "Building rich, complex curry",
        intro: "Thai coconut curries follow a specific method: crack the coconut cream to release oils, fry the paste until fragrant, then build layers. Rushing any step diminishes the final dish.",
        diagram: {
          type: "process",
          title: "The Curry Sequence",
          steps: [
            { label: "Crack Cream", detail: "Simmer thick coconut cream until oil separates (5-7 min)" },
            { label: "Fry Paste", detail: "Add curry paste to oil, fry until darkened and fragrant (3-5 min)" },
            { label: "Add Protein", detail: "Coat meat in the paste, sear briefly" },
            { label: "Coconut Milk", detail: "Add thin coconut milk, bring to simmer" },
            { label: "Season", detail: "Fish sauce and palm sugar to adjust balance" },
            { label: "Vegetables & Finish", detail: "Add veg by cook time, finish with basil off heat" }
          ]
        },
        principles: [
          {
            title: "Crack the Cream",
            description: "The thick cream at the top of the can has fat that needs to separate out and become the frying medium. Don't skip this; it's how the paste develops properly."
          },
          {
            title: "Fry Until Fragrant",
            description: "The paste should sizzle and darken. You'll smell the change as the raw garlic smell turns toasted and complex. This takes 3-5 minutes."
          },
          {
            title: "Layer Coconut Milk",
            description: "Thick cream for cracking, then thinner milk for liquid. Some cooks add a splash of thick cream at the end for richness."
          }
        ],
        youtube: [
          { title: "Thai Coconut Curry Technique — Hot Thai Kitchen", url: "https://www.youtube.com/watch?v=YzhbwPB5kq0" },
          { title: "How to Crack Coconut Cream — Hot Thai Kitchen", url: "https://www.youtube.com/watch?v=LIbKVpBQKJI" }
        ]
      },
      {
        id: "nam-prik",
        name: "Nam Prik (Chili Relish)",
        native: "น้ำพริก",
        pronunciation: "nahm prik",
        subtitle: "The main family of Thai dipping sauces",
        intro: "Nam prik is a family of chili-based dipping sauces/relishes found throughout Thailand. Each region has variations, but all share the pounded sauce technique and are served with raw vegetables, fried fish and rice.",
        diagram: {
          type: "formula",
          title: "Nam Prik Base Formula",
          components: [
            { name: "Chilies", amount: "5-10", detail: "Fresh, dried or roasted" },
            { name: "Garlic", amount: "5-8 cloves", detail: "Raw or roasted" },
            { name: "Shallots", amount: "2-3", detail: "Raw or roasted" },
            { name: "Shrimp Paste", amount: "1 tbsp", detail: "Or fish sauce for lighter version" },
            { name: "Lime Juice", amount: "2-3 tbsp", detail: "Added last, to taste" },
            { name: "Palm Sugar", amount: "1-2 tsp", detail: "Balances heat" }
          ],
          result: "Pound aromatics → Mix with shrimp paste → Season with lime + sugar"
        },
        variations: [
          { name: "Nam Prik Kapi", description: "Shrimp paste based: strong, classic" },
          { name: "Nam Prik Num", description: "Green chili: Northern Thai, milder" },
          { name: "Nam Prik Ong", description: "Tomato and pork: Northern, served with pork rinds" },
          { name: "Nam Prik Pla Too", description: "With fried mackerel pounded in" }
        ],
        principles: [
          {
            title: "Texture Matters",
            description: "Nam prik should be chunky, not smooth. Stop pounding when you have a relish with visible pieces."
          },
          {
            title: "Serve with Crudités",
            description: "Traditional accompaniments: cucumber, Thai eggplant, cabbage, long beans, and often fried fish or pork rinds."
          }
        ],
        youtube: [
          { title: "Thai Nam Prik — Hot Thai Kitchen", url: "https://www.youtube.com/watch?v=JXn0SmcU0Eo" },
          { title: "Nam Prik Varieties — Hot Thai Kitchen", url: "https://www.youtube.com/watch?v=Wvv0dqZ_xa4" }
        ]
      },
      {
        id: "wok-techniques-thai",
        name: "Thai Wok Techniques",
        native: "ผัด",
        pronunciation: "pad",
        subtitle: "High-heat, quick-cook methods",
        intro: "Thai wok cooking shares principles with Chinese, but the flavor profiles and specific techniques differ. 'Pad' means stir-fried, and Thai wok dishes emphasize brightness and distinct ingredients rather than sauce-coated uniformity.",
        diagram: {
          type: "process",
          title: "Pad (Stir-Fry) Sequence",
          steps: [
            { label: "Hot Wok, Oil", detail: "Wok smoking hot, add oil and swirl" },
            { label: "Aromatics", detail: "Garlic, chilies: 10 seconds, don't let them burn" },
            { label: "Protein", detail: "Add, spread flat, let sear 30 sec before tossing" },
            { label: "Sauce", detail: "Fish sauce, soy, oyster: pour down the sides" },
            { label: "Vegetables", detail: "Fast-cooking veg, toss constantly" },
            { label: "Herbs Off Heat", detail: "Thai basil, cilantro: residual heat only" }
          ]
        },
        principles: [
          {
            title: "Garlic First, Not Ginger",
            description: "Unlike Chinese cooking, Thai stir-fries often skip ginger. Garlic, chilies and sometimes galangal are the aromatic base."
          },
          {
            title: "Fish Sauce = Salt",
            description: "Thai wok cooking rarely uses plain salt. Fish sauce provides saltiness plus umami depth."
          },
          {
            title: "Fresh Herbs at the End",
            description: "Thai basil, cilantro and mint are stirred in off heat or added raw on top. They should stay vibrant."
          }
        ],
        dishes: [
          { name: "Pad Kra Pao", description: "Holy basil stir-fry, a street food staple" },
          { name: "Pad See Ew", description: "Wide rice noodles with dark soy, smoky and sweet" },
          { name: "Pad Thai", description: "Tamarind-based noodles, the most famous" },
          { name: "Pad Pak", description: "Simple, garlicky stir-fried vegetables" }
        ],
        youtube: [
          { title: "Thai Stir-Fry Technique — Hot Thai Kitchen", url: "https://www.youtube.com/watch?v=Swkq2jc5AnA" },
          { title: "Pad Kra Pao — Thai Wok Skills — Hot Thai Kitchen", url: "https://www.youtube.com/watch?v=q_9rDq2gGmg" }
        ]
      }
    ]
  },

  vietnam: {
    techniques: [
      {
        id: "nuoc-cham",
        name: "Nuoc Cham Building",
        native: "Nước Chấm",
        pronunciation: "nook chahm",
        subtitle: "Vietnam's go-to dipping sauce",
        intro: "Nuoc cham appears on nearly every Vietnamese table. It's the dipping sauce for spring rolls, the dressing for noodle bowls, the flavor booster for grilled meats. The balance of lime, fish sauce, sugar and chilies is key.",
        diagram: {
          type: "formula",
          title: "Classic Nuoc Cham",
          components: [
            { name: "Fish Sauce", amount: "3 tbsp", detail: "Good quality, not too fishy" },
            { name: "Lime Juice", amount: "3 tbsp", detail: "Fresh only, never bottled" },
            { name: "Sugar", amount: "2-3 tbsp", detail: "Dissolve completely" },
            { name: "Water", amount: "4-6 tbsp", detail: "Adjust to taste; more water = milder" },
            { name: "Garlic", amount: "2 cloves", detail: "Minced fine" },
            { name: "Thai Chilies", amount: "1-2", detail: "Sliced or minced" }
          ],
          result: "Dissolve sugar in lime + water → Add fish sauce → Add garlic + chili → Taste and adjust"
        },
        principles: [
          {
            title: "Dissolve Sugar First",
            description: "Sugar won't dissolve well in fish sauce alone. Dissolve it in the lime juice and water first."
          },
          {
            title: "Balance to Your Taste",
            description: "The 1:1 fish sauce to lime ratio is a starting point. Some prefer sweeter, some more sour. Taste and adjust."
          },
          {
            title: "Make Fresh",
            description: "Nuoc cham is best made fresh, within hours of serving. The lime juice loses brightness as it sits."
          }
        ],
        variations: [
          { name: "Nuoc Mam Pha", description: "Simpler: just fish sauce + water + sugar, for cooking." },
          { name: "Nuoc Cham Gung", description: "With ginger, to go with boiled chicken" },
          { name: "Mam Nem", description: "With fermented anchovy sauce, for bánh xèo" }
        ],
        youtube: [
          { title: "Vietnamese Nuoc Cham — Andrea Nguyen", url: "https://www.youtube.com/watch?v=eKtsXR_2QwQ" },
          { title: "Perfect Nuoc Cham Dipping Sauce — Helen's Recipes", url: "https://www.youtube.com/watch?v=OrUZzchXGzo" }
        ]
      },
      {
        id: "pho-broth",
        name: "Pho Broth",
        native: "Nước Phở",
        pronunciation: "nook fuh",
        subtitle: "The clear, aromatic beef broth foundation",
        intro: "Good pho broth is crystal clear, deeply beefy and perfumed with star anise, cinnamon and cloves. It takes at least 6 hours, but the technique isn't complicated: control the simmer and toast the spices.",
        diagram: {
          type: "process",
          title: "Pho Broth Method",
          steps: [
            { label: "Parboil Bones", detail: "Boil beef bones 10 min, drain, scrub clean" },
            { label: "Char Aromatics", detail: "Char onion + ginger over flame until blackened" },
            { label: "Toast Spices", detail: "Dry toast star anise, cinnamon, cloves, coriander" },
            { label: "Simmer Low", detail: "Bones + aromatics + spices, barely bubbling, 6-8 hours" },
            { label: "Skim Constantly", detail: "Remove scum and fat throughout cooking" },
            { label: "Season", detail: "Fish sauce, rock sugar, salt to taste" }
          ]
        },
        principles: [
          {
            title: "Low Simmer = Clear Broth",
            description: "A rolling boil emulsifies fat and makes cloudy broth. Keep it at a bare simmer, with only an occasional bubble."
          },
          {
            title: "Char, Don't Burn",
            description: "Onion and ginger should be blackened on the outside but not burnt through. This adds smoky sweetness."
          },
          {
            title: "Spice Bag",
            description: "Put whole spices in cheesecloth or a tea ball. This makes them easy to remove and prevents grit."
          }
        ],
        spiceBlend: [
          { spice: "Star Anise", amount: "5-6 whole", note: "Dominant aroma, so don't overdo it" },
          { spice: "Cinnamon", amount: "1 stick", note: "Vietnamese cinnamon is stronger" },
          { spice: "Cloves", amount: "4-5 whole", note: "Easy to over-add" },
          { spice: "Coriander Seeds", amount: "1 tbsp", note: "Toasted" },
          { spice: "Fennel Seeds", amount: "1 tsp", note: "Optional; adds sweetness" }
        ],
        youtube: [
          { title: "Pho Broth from Scratch — Cook With Mikey", url: "https://www.youtube.com/watch?v=P3xYYMLyibA" },
          { title: "Vietnamese Pho — Joshua Weissman", url: "https://www.youtube.com/watch?v=WlosNFMCnE4" }
        ]
      },
      {
        id: "fresh-rolls",
        name: "Fresh Roll Assembly",
        native: "Gỏi Cuốn",
        pronunciation: "goy cuon",
        subtitle: "Mastering the rice paper roll",
        intro: "Fresh spring rolls (gỏi cuốn) come down to technique: keeping the rice paper pliable, layering ingredients so they look good and rolling tightly without tearing. Once you get the rhythm, it's calming work.",
        diagram: {
          type: "process",
          title: "Rolling Technique",
          steps: [
            { label: "Dip Paper", detail: "Warm water, 2-3 seconds; it should still feel stiff" },
            { label: "Rest on Board", detail: "Lay flat on a damp towel or cutting board; it softens as you work" },
            { label: "Layer Visible Items", detail: "Shrimp, herbs face down first (they show through)" },
            { label: "Add Noodles + Protein", detail: "Vermicelli, pork/tofu in center" },
            { label: "Fold Sides", detail: "Fold left and right edges in first" },
            { label: "Roll Tight", detail: "Roll from bottom, tucking as you go" }
          ]
        },
        principles: [
          {
            title: "Don't Over-Soak",
            description: "The biggest mistake is soaking rice paper too long. It should still be slightly stiff when you start, since it keeps softening as you work."
          },
          {
            title: "Shrimp Face Down",
            description: "Place shrimp cut-side up (they'll show through the paper as pink). Herbs should also be placed face-down for visibility."
          },
          {
            title: "Tight but Gentle",
            description: "Roll as tightly as possible without tearing. If you see holes forming, you're pulling too hard."
          }
        ],
        fillings: [
          { name: "Classic", description: "Shrimp, pork, vermicelli, lettuce, mint, Thai basil" },
          { name: "Vegetarian", description: "Tofu, avocado, mango, vermicelli, herbs" },
          { name: "Crispy", description: "Add fried shallots or crushed peanuts for texture" }
        ],
        youtube: [
          { title: "Vietnamese Fresh Spring Rolls — Helen's Recipes", url: "https://www.youtube.com/watch?v=8CaadFo3sw0" },
          { title: "How to Roll Perfect Spring Rolls", url: "https://www.youtube.com/watch?v=4jFsAtcv9D8" }
        ]
      },
      {
        id: "caramelization",
        name: "Vietnamese Caramel",
        native: "Nước Màu",
        pronunciation: "nook mao",
        subtitle: "The base for Vietnamese braised dishes",
        intro: "Nước màu is caramelized sugar used in braised dishes like thịt kho (caramelized pork) and cá kho (caramelized fish). It's darker and less sweet than Western caramel, providing deep color and subtle bitterness.",
        diagram: {
          type: "process",
          title: "Making Nước Màu",
          steps: [
            { label: "Sugar + Water", detail: "3 tbsp sugar + 1 tbsp water in small pan" },
            { label: "Melt Slowly", detail: "Medium heat, no stirring until dissolved" },
            { label: "Watch Color", detail: "Swirl the pan as it colors, amber → dark brown" },
            { label: "Smoke Point", detail: "It's ready when it starts smoking and smells slightly bitter" },
            { label: "Add Water", detail: "Carefully add 3 tbsp water; it will splatter" },
            { label: "Dissolve", detail: "Stir until smooth, use immediately or store" }
          ]
        },
        principles: [
          {
            title: "Don't Stir Until Dissolved",
            description: "Stirring crystallizes the sugar. Let it melt and color naturally, then swirl the pan."
          },
          {
            title: "Dark but Not Burnt",
            description: "You want mahogany brown, not black. The line is fine, so stay with it: it can go from just right to burnt in seconds."
          },
          {
            title: "Hot Caramel + Water = Violent",
            description: "Adding water to hot caramel splatters dangerously. Stand back and add carefully."
          }
        ],
        uses: [
          { dish: "Thịt Kho", description: "Caramelized braised pork belly with eggs" },
          { dish: "Cá Kho Tộ", description: "Catfish braised in clay pot with caramel" },
          { dish: "Gà Kho", description: "Caramelized braised chicken" }
        ],
        youtube: [
          { title: "Vietnamese Caramel Sauce — Andrea Nguyen", url: "https://www.youtube.com/watch?v=xjQJvuiAke8" },
          { title: "Thit Kho — Vietnamese Caramelized Pork", url: "https://www.youtube.com/watch?v=gFeZjMY8tAU" }
        ]
      },
      {
        id: "herb-plate",
        name: "The Herb Plate",
        native: "Rau Sống",
        pronunciation: "rao song",
        subtitle: "Fresh herbs as part of the meal",
        intro: "Most Vietnamese meals come with a plate of fresh herbs, lettuce and raw vegetables. It's part of the meal, adding freshness, texture and balance to rich dishes.",
        diagram: {
          type: "matrix",
          title: "The Core Herbs",
          categories: [
            {
              name: "Always Present",
              items: ["Mint (húng)", "Thai basil (húng quế)", "Cilantro (ngò)", "Perilla (tía tô)"]
            },
            {
              name: "Lettuce & Leaves",
              items: ["Red leaf lettuce", "Butter lettuce", "Mustard greens", "Rice paddy herb (ngò om)"]
            },
            {
              name: "Vegetables",
              items: ["Bean sprouts", "Sliced cucumber", "Sliced jalapeños", "Banana blossom"]
            },
            {
              name: "Specialty",
              items: ["Fish mint (diếp cá)", "Culantro (ngò gai)", "Vietnamese coriander (rau răm)"]
            }
          ]
        },
        principles: [
          {
            title: "Match Herbs to Dish",
            description: "Pho gets Thai basil, bean sprouts, lime. Spring rolls get mint. Bún thịt nướng gets everything. Learn the pairings."
          },
          {
            title: "Keep Cold and Fresh",
            description: "Herbs should be washed, dried and kept cold until serving. Wilted herbs ruin the experience."
          },
          {
            title: "Eat Throughout",
            description: "Don't eat all the herbs first or save them for last. Alternate between bites of food and fresh herbs."
          }
        ],
        youtube: [
          { title: "Vietnamese Herbs 101 — A Complete Guide", url: "https://www.youtube.com/results?search_query=vietnamese+herb+plate+rau+song+essential+guide" },
          { title: "Essential Vietnamese Herbs for Cooking", url: "https://www.youtube.com/results?search_query=vietnamese+herbs+cooking+identification+guide" }
        ]
      }
    ]
  },

  india: {
    techniques: [
      {
        id: "tadka",
        name: "Tadka (Tempering)",
        native: "तड़का",
        pronunciation: "tar-kah",
        subtitle: "Blooming spices in hot oil",
        intro: "Tadka is the technique of blooming spices in hot oil to release their essential oils and aroma, and much of Indian cooking relies on it. It can go in at the start of cooking or on top as a finish.",
        diagram: {
          type: "process",
          title: "The Tadka Sequence",
          steps: [
            { label: "Heat Oil/Ghee", detail: "Medium-high heat until shimmering (not smoking)" },
            { label: "Whole Spices First", detail: "Cumin seeds, mustard seeds: wait for crackle/pop" },
            { label: "Aromatics", detail: "Curry leaves, dried chilies, asafoetida" },
            { label: "Quick Additions", detail: "Garlic, ginger, onions if using" },
            { label: "Ground Spices Last", detail: "Turmeric, coriander, chili powder: 30 seconds max" },
            { label: "Add Immediately", detail: "Pour over dal, vegetables or into the cooking pot" }
          ]
        },
        principles: [
          {
            title: "Listen for the Pop",
            description: "Cumin and mustard seeds should sizzle and pop. This takes 10-30 seconds. If they burn, start over."
          },
          {
            title: "Ground Spices Burn Fast",
            description: "Add ground spices last and very briefly. They burn in seconds, becoming bitter."
          },
          {
            title: "Start or Finish",
            description: "Tadka at the start builds the dish. Tadka poured over finished dal (chhonk) adds a fresh, bright note."
          }
        ],
        commonTadkas: [
          { name: "North Indian Dal", description: "Ghee + cumin + garlic + dried red chili + asafoetida" },
          { name: "South Indian Sambar", description: "Oil + mustard seeds + curry leaves + dried chilies + asafoetida" },
          { name: "Bengali Panch Phoron", description: "Equal parts cumin + fennel + nigella + fenugreek + mustard seeds" }
        ],
        youtube: [
          { title: "Tadka Technique — Indian Tempering", url: "https://www.youtube.com/watch?v=mgVKrlDFCX4" },
          { title: "How to Temper Spices — Indian Cooking", url: "https://www.youtube.com/watch?v=6gdd9r9GqDA" }
        ]
      },
      {
        id: "curry-base",
        name: "The Curry Base",
        native: "ग्रेवी",
        pronunciation: "gravy",
        subtitle: "The onion-tomato foundation",
        intro: "Most North Indian curries share a common base: onions cooked down to deep caramelization, tomatoes reduced to paste and spices bloomed into the mixture. Master this technique and you can make dozens of dishes.",
        diagram: {
          type: "process",
          title: "Building the Base",
          steps: [
            { label: "Cook Onions", detail: "Sliced or diced, cook until deep brown (15-25 min)" },
            { label: "Ginger-Garlic", detail: "Add paste, cook until raw smell disappears (2 min)" },
            { label: "Ground Spices", detail: "Fry turmeric, coriander, cumin, chili briefly" },
            { label: "Tomatoes", detail: "Fresh or canned, cook until oil separates" },
            { label: "Oil Separation", detail: "Oil pooling at the edges means the base is done" },
            { label: "Add Protein/Veg", detail: "Now add your main ingredient + water/stock" }
          ]
        },
        principles: [
          {
            title: "Don't Rush Onions",
            description: "Properly browned onions take 15-25 minutes. Don't rush this step; it's where the flavor develops."
          },
          {
            title: "Oil Separation (Bhunna)",
            description: "The curry base is ready when oil separates and pools at the edges. This stage is called 'bhunna,' and it matters for the final texture."
          },
          {
            title: "Splash of Water Prevents Burning",
            description: "If spices start sticking or burning, add a splash of water and continue. This is normal."
          }
        ],
        formulas: [
          {
            name: "Basic North Indian Gravy",
            ratio: "2 large onions : 1 tbsp ginger-garlic paste : 2 tomatoes : 1 tsp each turmeric, coriander, cumin"
          },
          {
            name: "Rich Makhani-Style",
            ratio: "Add: ¼ cup cream + 1 tbsp kasuri methi + 1 tbsp butter at end"
          },
          {
            name: "Karahi-Style",
            ratio: "Use fresh tomatoes, ginger strips, fresh green chilies instead of tomato paste"
          }
        ],
        youtube: [
          { title: "Indian Curry Base Technique — Happy Bellyfish", url: "https://www.youtube.com/watch?v=psrRIBkjHB0" },
          { title: "How to Make Indian Curry — Kunal Kapur", url: "https://www.youtube.com/watch?v=36GUVJISazw" }
        ]
      },
      {
        id: "spice-toasting",
        name: "Spice Toasting & Grinding",
        native: "भूनना",
        pronunciation: "bhunna",
        subtitle: "Maximizing spice flavor",
        intro: "Toasting whole spices before grinding releases volatile oils that pre-ground spices have already lost. Freshly ground versus store-bought is like fresh coffee versus instant.",
        diagram: {
          type: "process",
          title: "Toast to Grind Method",
          steps: [
            { label: "Dry Pan", detail: "No oil, medium heat" },
            { label: "Add Whole Spices", detail: "Single layer, similar-size spices together" },
            { label: "Toast & Shake", detail: "Shake constantly, 1-3 min until fragrant" },
            { label: "Watch Color", detail: "Should darken slightly without burning" },
            { label: "Cool Completely", detail: "Transfer to plate, cool 5 min" },
            { label: "Grind", detail: "Grind to a fine powder in a spice grinder or mortar" }
          ]
        },
        principles: [
          {
            title: "Similar Sizes Together",
            description: "Toast cumin and coriander seeds together (similar size). Cinnamon and bay leaves take longer, so toast them separately."
          },
          {
            title: "Cool Before Grinding",
            description: "Hot spices release moisture and can clump or paste in the grinder. Let them cool completely."
          },
          {
            title: "Grind Only What You Need",
            description: "Freshly ground spices lose potency within weeks. Toast and grind small batches."
          }
        ],
        spiceGroups: [
          { group: "Quick Toast (1-2 min)", spices: "Cumin, coriander, fennel, mustard seeds" },
          { group: "Medium Toast (2-3 min)", spices: "Black pepper, cloves, cardamom pods" },
          { group: "Long Toast (3-4 min)", spices: "Cinnamon sticks, bay leaves, mace" }
        ],
        youtube: [
          { title: "How to Toast and Grind Spices — Ethan Chlebowski", url: "https://www.youtube.com/watch?v=bsYzWK3cxOM" },
          { title: "Indian Spice Toasting Technique", url: "https://www.youtube.com/watch?v=XHrSAZpMSW4" }
        ]
      },
      {
        id: "masala-formulas",
        name: "Masala Formulas",
        native: "मसाला",
        pronunciation: "mah-sah-lah",
        subtitle: "Classic spice blend ratios",
        intro: "Masala means 'spice blend.' India has hundreds of regional variations, but a few classic formulas come up again and again. Learn these ratios and you can recreate traditional flavors.",
        diagram: {
          type: "matrix",
          title: "Common Masala Blends",
          categories: [
            {
              name: "Garam Masala",
              items: ["Cinnamon", "Cardamom", "Cloves", "Black pepper", "Cumin", "Coriander"]
            },
            {
              name: "Chaat Masala",
              items: ["Amchur (mango powder)", "Cumin", "Black salt", "Coriander", "Ginger", "Chili"]
            },
            {
              name: "Sambar Powder",
              items: ["Coriander", "Cumin", "Fenugreek", "Chana dal", "Red chilies", "Turmeric"]
            },
            {
              name: "Panch Phoron (Bengali)",
              items: ["Cumin", "Fennel", "Nigella", "Fenugreek", "Mustard seeds"]
            }
          ]
        },
        formulas: [
          {
            name: "Basic Garam Masala",
            ratio: "1 tbsp cumin : 1 tbsp coriander : 1 tsp black pepper : ½ tsp cinnamon : ½ tsp cardamom : ¼ tsp cloves"
          },
          {
            name: "Chaat Masala",
            ratio: "2 tbsp cumin : 1 tbsp amchur : 1 tbsp black salt : 1 tsp coriander : ½ tsp black pepper : ½ tsp chili"
          },
          {
            name: "Madras Curry Powder",
            ratio: "3 tbsp coriander : 2 tbsp cumin : 1 tbsp turmeric : 1 tsp chili : 1 tsp mustard : ½ tsp fenugreek"
          }
        ],
        principles: [
          {
            title: "Garam Masala at the End",
            description: "Garam masala is a finishing spice. Add it in the last 5 minutes of cooking to preserve its aromatics."
          },
          {
            title: "Regional Variations",
            description: "Many families have their own garam masala ratio. Treat these as starting points and adjust to your taste."
          }
        ],
        youtube: [
          { title: "How to Make Garam Masala — BBC Maestro", url: "https://www.youtube.com/watch?v=e0LGNyFvD-g" },
          { title: "Homemade Masala Blends — Manjula's Kitchen", url: "https://www.youtube.com/watch?v=DzbtkLe2X_w" }
        ]
      },
      {
        id: "rice-techniques",
        name: "Indian Rice Techniques",
        native: "चावल",
        pronunciation: "chawal",
        subtitle: "Fluffy basmati and biryani",
        intro: "Indian rice cooking, especially with basmati, aims for long, separate grains. Unlike East Asian sticky rice, each grain should stay distinct.",
        diagram: {
          type: "process",
          title: "Basmati Method",
          steps: [
            { label: "Rinse", detail: "Wash until water runs clear (4-5 times)" },
            { label: "Soak", detail: "Cover with cold water, 30 min minimum" },
            { label: "Boil Water", detail: "Large pot, salted, like pasta water" },
            { label: "Par-Cook", detail: "Add rice, cook until 70% done (5-6 min)" },
            { label: "Drain", detail: "Strain immediately" },
            { label: "Steam (Dum)", detail: "Cover tight, lowest heat 15 min, rest 5 min" }
          ]
        },
        principles: [
          {
            title: "Soaking Lengthens Grains",
            description: "Basmati expands in length, not width, when soaked. Soak it at least 30 minutes; 1-2 hours is better."
          },
          {
            title: "Par-boil, Don't Fully Cook",
            description: "Rice should still have a hard core when drained. It finishes during the dum (steaming) phase."
          },
          {
            title: "Tight Seal for Dum",
            description: "The lid must be completely sealed during dum. Traditional method uses dough to seal; at home, use foil under the lid."
          }
        ],
        variations: [
          { name: "Jeera Rice", description: "Whole cumin seeds bloomed in ghee before rice" },
          { name: "Pulao", description: "Rice cooked with spices and vegetables/meat in one pot" },
          { name: "Biryani", description: "Layered rice and meat, dum-cooked with saffron" }
        ],
        youtube: [
          { title: "Perfect Basmati Rice Technique — Kunal Kapur", url: "https://www.youtube.com/watch?v=PUiCiYQ37lE" },
          { title: "Biryani Rice — Dum Method Explained", url: "https://www.youtube.com/watch?v=gujMb3TfJRE" }
        ]
      }
    ]
  }
};
