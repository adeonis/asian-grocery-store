// Ingredients by cuisine, then by category. Each cuisine's key is its route
// (#/c/china); each ingredient's id is unique within its cuisine (#/i/china/light-soy).
const INGREDIENTS = {
  china: {
    name: "China",
    flag: "🇨🇳",
    categories: {
      "Sauces & Condiments": [
        {
          id: "light-soy",
          name: "Light Soy Sauce",
          native: "生抽",
          pronunciation: "shēng chōu",
          quickDesc: "The everyday soy sauce for seasoning and dipping",
          whatIsIt: "A thinner, saltier soy sauce fermented from soybeans, wheat, water and salt. It's lighter in color than dark soy sauce but packs more sodium punch. This is your go-to for everyday cooking.",
          howToUse: [
            "Add during cooking to season stir-fries, marinades and soups",
            "Use as a dipping sauce base (mix with vinegar, garlic, chili)",
            "Splash into fried rice in the last minute of cooking",
            "Marinate proteins for 15-30 minutes before cooking"
          ],
          pairsWith: ["Garlic", "Ginger", "Sesame oil", "Rice vinegar", "Shaoxing wine"],
          storage: "Room temperature in a cool, dark place. Refrigerate after opening for best quality (lasts 2-3 years).",
          substitutes: "Japanese soy sauce (shoyu) works but is slightly sweeter. Tamari if gluten-free (check label).",
          proTip: "Light soy is for flavor, dark soy is for color. Don't swap them: dark soy will make your dish too sweet and dark.",
          youtube: [
            { title: "Chinese Cooking Demystified: All About Soy Sauce", url: "https://www.youtube.com/results?search_query=chinese+cooking+demystified+soy+sauce" },
            { title: "The Woks of Life: Essential Chinese Sauces", url: "https://www.youtube.com/results?search_query=woks+of+life+soy+sauce+guide" }
          ]
        },
        {
          id: "dark-soy",
          name: "Dark Soy Sauce",
          native: "老抽",
          pronunciation: "lǎo chōu",
          quickDesc: "Thick, sweet sauce that gives dishes their rich mahogany color",
          whatIsIt: "A thicker, less salty soy sauce aged longer with added molasses or caramel. It's primarily used for color and a subtle sweetness, not as the main seasoning.",
          howToUse: [
            "Add 1-2 teaspoons to red-braised dishes for deep color",
            "Use sparingly in lo mein and chow mein for that restaurant-style look",
            "Combine with light soy sauce (never use alone for seasoning)",
            "Brush on roasted meats for a glossy finish"
          ],
          pairsWith: ["Light soy sauce", "Rock sugar", "Star anise", "Cinnamon", "Five spice"],
          storage: "Room temperature. Keeps for years due to high sugar content.",
          substitutes: "In a pinch: mix regular soy sauce with a tiny bit of molasses. Won't be exact but adds color.",
          proTip: "A little goes a long way. Start with half a teaspoon. You can always add more, but you can't take the color out once it's in.",
          youtube: [
            { title: "Light vs Dark Soy Sauce Explained", url: "https://www.youtube.com/results?search_query=light+vs+dark+soy+sauce+difference" },
            { title: "How to Use Dark Soy Sauce - Red Braised Pork", url: "https://www.youtube.com/results?search_query=dark+soy+sauce+red+braised+pork+recipe" }
          ]
        },
        {
          id: "oyster-sauce",
          name: "Oyster Sauce",
          native: "蚝油",
          pronunciation: "háo yóu",
          quickDesc: "Sweet, briny sauce that adds umami depth to everything",
          whatIsIt: "A thick, dark brown sauce originally made from oyster extracts, now often made with oyster essence, sugar and soy sauce. Many Chinese restaurant dishes rely on it.",
          howToUse: [
            "Drizzle over blanched Chinese broccoli or bok choy",
            "Add to stir-fry sauces in the last minute of cooking",
            "Use in marinades for beef and chicken",
            "Mix into ground meat for dumpling and bao fillings"
          ],
          pairsWith: ["Garlic", "Ginger", "Leafy greens", "Beef", "Mushrooms"],
          storage: "Refrigerate after opening and check the expiration date, since quality declines over time.",
          substitutes: "Vegetarian oyster sauce (made from mushrooms) for plant-based cooking. Hoisin + soy sauce in a pinch.",
          proTip: "Splurge on premium brands like Lee Kum Kee Premium. The cheaper versions are mostly corn syrup.",
          youtube: [
            { title: "Made With Lau: Beef with Oyster Sauce", url: "https://www.youtube.com/results?search_query=made+with+lau+beef+oyster+sauce" },
            { title: "Chinese Broccoli with Oyster Sauce", url: "https://www.youtube.com/results?search_query=chinese+broccoli+oyster+sauce+recipe" }
          ]
        },
        {
          id: "doubanjiang",
          name: "Doubanjiang",
          native: "豆瓣酱",
          pronunciation: "dòu bàn jiàng",
          quickDesc: "Spicy fermented bean paste, a base flavor of Sichuan cooking",
          whatIsIt: "A chunky, fermented paste made from broad beans, chili peppers and salt. Pixian doubanjiang (from Pixian county) is aged up to 8 years and considered the gold standard. It's intensely savory, spicy and complex.",
          howToUse: [
            "Fry in oil first to release its fragrance; don't skip this step",
            "Use as the base for mapo tofu, twice-cooked pork and dan dan noodles",
            "Add to braises and stews for depth",
            "Mix into dumpling dipping sauces"
          ],
          pairsWith: ["Sichuan peppercorns", "Garlic", "Ginger", "Fermented black beans", "Tofu"],
          storage: "Refrigerate after opening. The oil on top is normal; stir it back in.",
          substitutes: "Gochujang plus miso gives you fermented chili flavor, though nothing replicates it exactly.",
          proTip: "Look for 'Pixian' (郫县) on the label for authentic Sichuan flavor. Non-spicy versions exist too.",
          youtube: [
            { title: "Chinese Cooking Demystified: Mapo Tofu", url: "https://www.youtube.com/results?search_query=chinese+cooking+demystified+mapo+tofu" },
            { title: "The Woks of Life: Authentic Mapo Tofu", url: "https://www.youtube.com/results?search_query=woks+of+life+mapo+tofu+doubanjiang" }
          ]
        },
        {
          id: "shaoxing-wine",
          name: "Shaoxing Wine",
          native: "绍兴酒",
          pronunciation: "shào xīng jiǔ",
          quickDesc: "Amber cooking wine found in many Chinese dishes",
          whatIsIt: "A fermented rice wine from Shaoxing, China, with a dry, slightly nutty flavor. It removes gamey odors from meat and adds depth that's impossible to replicate with other ingredients.",
          howToUse: [
            "Add to marinades for any protein (1-2 tablespoons per pound)",
            "Splash into the wok when stir-frying for aromatic steam",
            "Use in braising liquids for red-cooked dishes",
            "Add to dumpling and wonton fillings"
          ],
          pairsWith: ["Soy sauce", "Ginger", "Green onions", "Star anise", "Any protein"],
          storage: "Room temperature in a cool, dark place. Lasts indefinitely.",
          substitutes: "Dry sherry is the closest substitute. Avoid 'cooking wine' with added salt if possible.",
          proTip: "If you can, buy the kind meant for drinking (no salt added) from the alcohol aisle. It's much better quality than the salted cooking versions.",
          youtube: [
            { title: "Chinese Cooking Wine Guide", url: "https://www.youtube.com/results?search_query=shaoxing+wine+chinese+cooking+guide" },
            { title: "How to Use Shaoxing Wine in Stir Fry", url: "https://www.youtube.com/results?search_query=how+to+use+shaoxing+wine+stir+fry" }
          ]
        },
        {
          id: "chinkiang-vinegar",
          name: "Chinkiang Vinegar",
          native: "镇江香醋",
          pronunciation: "zhèn jiāng xiāng cù",
          quickDesc: "Dark, malty black vinegar for dumplings and braises",
          whatIsIt: "A fermented rice vinegar from Zhenjiang with a deep black color and complex, slightly sweet, woody flavor. Less acidic than Western vinegars with a malty depth. The gold standard for Chinese black vinegar.",
          howToUse: [
            "Mix with soy sauce and chili oil for dumpling dipping sauce",
            "Add to hot and sour soup for authentic tang",
            "Drizzle over braised pork belly or noodles",
            "Use in sweet and sour dishes for depth"
          ],
          pairsWith: ["Soy sauce", "Ginger", "Dumplings", "Noodles", "Braised meats"],
          storage: "Room temperature indefinitely. Flavor deepens with age.",
          substitutes: "Balsamic vinegar is closest in complexity. Rice vinegar + a drop of Worcestershire in a pinch.",
          proTip: "The 'Gold Plum' brand with the yellow label is the authentic Chinkiang product. Avoid clear 'black vinegars' which lack depth.",
          youtube: [
            { title: "Chinese Black Vinegar Guide", url: "https://www.youtube.com/results?search_query=chinkiang+vinegar+chinese+cooking" },
            { title: "Dumpling Dipping Sauce Recipe", url: "https://www.youtube.com/results?search_query=chinese+dumpling+dipping+sauce+black+vinegar" }
          ]
        },
        {
          id: "chili-oil",
          name: "Chili Oil",
          native: "辣椒油",
          pronunciation: "là jiāo yóu",
          quickDesc: "Fragrant, spicy oil infused with chilies and aromatics",
          whatIsIt: "Oil infused with dried red chilies and often Sichuan peppercorns, garlic and spices. Ranges from simple chili-infused oil to complex versions like Lao Gan Ma with fermented black beans. It's a standard table condiment.",
          howToUse: [
            "Drizzle over dumplings, noodles and rice dishes",
            "Add to stir-fries for heat and color",
            "Mix into sauces and marinades",
            "Use as a finishing oil for soups"
          ],
          pairsWith: ["Soy sauce", "Vinegar", "Noodles", "Dumplings", "Sichuan peppercorn"],
          storage: "Room temperature for a few months. Refrigerate for longer storage.",
          substitutes: "Make your own: heat neutral oil and pour over chili flakes with a pinch of salt.",
          proTip: "Lao Gan Ma 'Spicy Chili Crisp' is the cult favorite, with crunchy bits and fermented black beans that add umami.",
          youtube: [
            { title: "How to Make Chinese Chili Oil", url: "https://www.youtube.com/results?search_query=how+to+make+chinese+chili+oil" },
            { title: "Lao Gan Ma Chili Crisp Review", url: "https://www.youtube.com/results?search_query=lao+gan+ma+chili+crisp+review" }
          ]
        },
        {
          id: "hoisin-sauce",
          name: "Hoisin Sauce",
          native: "海鲜酱",
          pronunciation: "hǎi xiān jiàng",
          quickDesc: "Sweet, thick sauce for glazing, dipping and stir-fries",
          whatIsIt: "A thick, fragrant sauce made from fermented soybeans, garlic, vinegar, sugar and spices. Despite the name meaning 'seafood sauce,' it contains no seafood. Used as a glaze, condiment and in cooking.",
          howToUse: [
            "Glaze on Peking duck or char siu pork",
            "Serve as dipping sauce for mu shu or spring rolls",
            "Add to stir-fry sauces for sweetness",
            "Spread in wraps and bao buns"
          ],
          pairsWith: ["Duck", "Pork", "Scallions", "Pancakes", "Rice"],
          storage: "Refrigerate after opening. Lasts several months.",
          substitutes: "Mix soy sauce + peanut butter + honey + a little vinegar for an approximation.",
          proTip: "It's very sweet, so a little goes a long way. Cut it with soy sauce or vinegar for balance.",
          youtube: [
            { title: "Hoisin Sauce Uses and Recipes", url: "https://www.youtube.com/results?search_query=hoisin+sauce+recipes+chinese" },
            { title: "Homemade Hoisin Sauce", url: "https://www.youtube.com/results?search_query=homemade+hoisin+sauce+recipe" }
          ]
        },
        {
          id: "fermented-black-beans",
          name: "Fermented Black Beans",
          native: "豆豉",
          pronunciation: "dòu chǐ",
          quickDesc: "Pungent, salty fermented soybeans packed with umami",
          whatIsIt: "Small black soybeans fermented with salt, creating an intensely savory, slightly funky ingredient. One of China's oldest condiments. They're soft and paste-like when cooked.",
          howToUse: [
            "Rinse briefly and chop before using to reduce saltiness",
            "Stir-fry with garlic for black bean sauce base",
            "Add to steamed fish, ribs or clams",
            "Mix into ground pork for mapo tofu"
          ],
          pairsWith: ["Garlic", "Ginger", "Seafood", "Pork ribs", "Bitter melon"],
          storage: "Airtight container at room temperature for months, or refrigerate for longer.",
          substitutes: "No true substitute. Miso + a little soy sauce provides some umami depth.",
          proTip: "Don't skip the rinse: they're very salty. A quick rinse mellows them without losing flavor.",
          youtube: [
            { title: "Black Bean Sauce Recipe", url: "https://www.youtube.com/results?search_query=chinese+black+bean+sauce+recipe" },
            { title: "Steamed Fish with Black Beans", url: "https://www.youtube.com/results?search_query=steamed+fish+fermented+black+beans" }
          ]
        },
        {
          id: "fermented-tofu",
          name: "Fermented Tofu",
          native: "腐乳",
          pronunciation: "fǔ rǔ",
          quickDesc: "Creamy, pungent fermented tofu cubes, often called Chinese cheese",
          whatIsIt: "Tofu cubes fermented in rice wine, salt and seasonings until creamy and intensely flavored. Comes in white (plain), red (with red rice yeast) and chili varieties. Nicknamed 'Chinese cheese' for its strong aroma.",
          howToUse: [
            "Mash and use as seasoning paste for stir-fried greens",
            "Spread on congee or rice porridge",
            "Add to braised pork belly for depth",
            "Use red fermented tofu to color and flavor char siu"
          ],
          pairsWith: ["Water spinach", "Pork belly", "Congee", "Rice", "Leafy greens"],
          storage: "Refrigerate after opening. The brine keeps it preserved for months.",
          substitutes: "No real substitute for the unique flavor. Strong blue cheese has similar pungency but different taste.",
          proTip: "Start small, since it's very salty and pungent. Half a cube can season a whole dish of greens.",
          youtube: [
            { title: "How to Use Fermented Tofu", url: "https://www.youtube.com/results?search_query=fermented+tofu+furu+chinese+cooking" },
            { title: "Water Spinach with Fermented Tofu", url: "https://www.youtube.com/results?search_query=water+spinach+fermented+tofu+recipe" }
          ]
        },
        {
          id: "rice-wine-vinegar",
          name: "Rice Wine Vinegar",
          native: "米醋",
          pronunciation: "mǐ cù",
          quickDesc: "Mild, slightly sweet vinegar for dressings and pickles",
          whatIsIt: "A mild, slightly sweet vinegar made from fermented rice. Less acidic than Western white vinegar with a clean, delicate flavor. It goes into sweet and sour dishes, pickles and dipping sauces.",
          howToUse: [
            "Make quick pickles for vegetables",
            "Add to dipping sauces for dumplings",
            "Use in sweet and sour sauce",
            "Dress cold noodle and cucumber salads"
          ],
          pairsWith: ["Sugar", "Soy sauce", "Ginger", "Cucumber", "Sesame oil"],
          storage: "Room temperature indefinitely. Does not spoil.",
          substitutes: "White wine vinegar or apple cider vinegar diluted slightly with water.",
          proTip: "Don't confuse it with 'seasoned rice vinegar': the added sugar and salt make that one great for sushi rice but too sweet for cooking.",
          youtube: [
            { title: "Chinese Pickled Vegetables", url: "https://www.youtube.com/results?search_query=chinese+pickled+vegetables+rice+vinegar" },
            { title: "Sweet and Sour Sauce Recipe", url: "https://www.youtube.com/results?search_query=sweet+and+sour+sauce+recipe+chinese" }
          ]
        },
        {
          id: "white-pepper",
          name: "White Pepper",
          native: "白胡椒",
          pronunciation: "bái hú jiāo",
          quickDesc: "Sharp, earthy pepper preferred in Chinese cooking over black",
          whatIsIt: "Peppercorns with the outer skin removed, giving a sharper, more earthy heat than black pepper. The default pepper in Chinese cuisine, especially in soups, congee and light-colored dishes where black specks would look out of place.",
          howToUse: [
            "Season hot and sour soup",
            "Add to congee and rice porridge",
            "Use in wonton soup broth",
            "Season stir-fries, especially with seafood"
          ],
          pairsWith: ["Soups", "Congee", "Seafood", "Eggs", "Noodle broths"],
          storage: "Whole peppercorns keep for years, but ground pepper loses potency, so grind as needed.",
          substitutes: "Black pepper works but changes the flavor profile and appearance.",
          proTip: "Chinese cooks reach for white pepper where Western cooks would use black. Hot and sour soup depends on it.",
          youtube: [
            { title: "White vs Black Pepper in Chinese Cooking", url: "https://www.youtube.com/results?search_query=white+pepper+chinese+cooking" },
            { title: "Hot and Sour Soup Recipe", url: "https://www.youtube.com/results?search_query=hot+and+sour+soup+recipe+authentic" }
          ]
        },
        {
          id: "sichuan-peppercorn",
          name: "Sichuan Peppercorn",
          native: "花椒",
          pronunciation: "huā jiāo",
          quickDesc: "Numbing, citrusy peppercorns that tingle your tongue",
          whatIsIt: "Despite the name, these aren't pepper but dried berries from a prickly ash tree. They're known for a numbing, tingling sensation called 'má' (麻) and have a lemony, floral aroma. They're the defining spice of Sichuan cuisine.",
          howToUse: [
            "Toast in a dry pan and grind for maximum aroma",
            "Use in mapo tofu, kung pao chicken and dan dan noodles",
            "Infuse into oil for chili oil",
            "Add whole to braises (remove before serving)"
          ],
          pairsWith: ["Chili", "Garlic", "Doubanjiang", "Beef", "Tofu"],
          storage: "Whole peppercorns in airtight container away from light. Grind as needed.",
          substitutes: "No true substitute for the numbing sensation. Black pepper + lemon zest mimics some flavor but not the má.",
          proTip: "There are green and red varieties. Green is more intensely numbing and citrusy, while red is more floral. Both are worth using.",
          youtube: [
            { title: "All About Sichuan Peppercorns", url: "https://www.youtube.com/results?search_query=sichuan+peppercorn+guide" },
            { title: "How to Use Sichuan Peppercorns", url: "https://www.youtube.com/results?search_query=how+to+use+sichuan+peppercorns" }
          ]
        },
        {
          id: "star-anise",
          name: "Star Anise",
          native: "八角",
          pronunciation: "bā jiǎo",
          quickDesc: "Beautiful star-shaped spice with intense licorice flavor",
          whatIsIt: "A dried star-shaped fruit with a powerful anise/licorice flavor. One of the key spices in Chinese five-spice powder. Used whole in braises and soups, then removed before serving.",
          howToUse: [
            "Add 1-2 stars to red-braised pork or beef",
            "Include in pho broth and Chinese master stocks",
            "Toast and grind for five-spice powder",
            "Simmer in tea eggs and soy sauce eggs"
          ],
          pairsWith: ["Soy sauce", "Cinnamon", "Pork belly", "Beef", "Eggs"],
          storage: "Whole stars last for years in airtight container. Ground loses aroma quickly.",
          substitutes: "Fennel seeds or anise seeds, though the flavor is less complex.",
          proTip: "It's very potent: one or two stars is usually enough for a whole braise. Too much makes dishes taste medicinal.",
          youtube: [
            { title: "Chinese Red Braised Pork", url: "https://www.youtube.com/results?search_query=chinese+red+braised+pork+star+anise" },
            { title: "Tea Eggs Recipe", url: "https://www.youtube.com/results?search_query=chinese+tea+eggs+recipe" }
          ]
        },
        {
          id: "sesame-paste",
          name: "Chinese Sesame Paste",
          native: "芝麻酱",
          pronunciation: "zhī ma jiàng",
          quickDesc: "Toasted sesame paste for noodles and hot pot dipping",
          whatIsIt: "A thick paste made from toasted sesame seeds, darker and more intensely nutty than Middle Eastern tahini. The base for cold sesame noodles and hot pot dipping sauces.",
          howToUse: [
            "Thin with water or oil for noodle sauce",
            "Mix into hot pot dipping sauce with soy sauce and garlic",
            "Use as base for dan dan noodle sauce",
            "Drizzle over cold dishes and salads"
          ],
          pairsWith: ["Soy sauce", "Chili oil", "Garlic", "Noodles", "Cucumber"],
          storage: "Refrigerate after opening. Oil separation is normal, so stir before using.",
          substitutes: "Tahini works but is milder. Add a drop of toasted sesame oil to boost flavor.",
          proTip: "Chinese sesame paste is made from toasted seeds (darker color), while tahini uses raw seeds. The flavor difference is significant.",
          youtube: [
            { title: "Cold Sesame Noodles Recipe", url: "https://www.youtube.com/results?search_query=chinese+cold+sesame+noodles+recipe" },
            { title: "Hot Pot Dipping Sauce", url: "https://www.youtube.com/results?search_query=chinese+hot+pot+sesame+dipping+sauce" }
          ]
        },
        {
          id: "xo-sauce",
          name: "XO Sauce",
          native: "XO酱",
          pronunciation: "XO jiàng",
          quickDesc: "Luxurious Hong Kong condiment with dried seafood and chili",
          whatIsIt: "A spicy, umami-rich condiment invented in Hong Kong in the 1980s. Made with dried shrimp, dried scallops, Jinhua ham, chili and oil. Named after XO cognac to convey luxury, though it contains no alcohol.",
          howToUse: [
            "Stir into fried rice or noodles",
            "Toss with stir-fried vegetables",
            "Serve as a condiment for dim sum",
            "Add to seafood dishes"
          ],
          pairsWith: ["Noodles", "Rice", "Seafood", "Green vegetables", "Tofu"],
          storage: "Refrigerate after opening. The oil on top protects it, and it lasts months.",
          substitutes: "No true substitute for the complex flavor. Chili crisp + dried shrimp approximates some elements.",
          proTip: "It's intensely flavored and expensive, so a little goes a long way. Lee Kum Kee makes a good commercial version.",
          youtube: [
            { title: "How to Make XO Sauce", url: "https://www.youtube.com/results?search_query=how+to+make+xo+sauce+recipe" },
            { title: "XO Sauce Fried Rice", url: "https://www.youtube.com/results?search_query=xo+sauce+fried+rice+recipe" }
          ]
        }
      ],
      "Noodles & Rice": [
        {
          id: "rice-noodles",
          name: "Wide Rice Noodles",
          native: "河粉",
          pronunciation: "hé fěn",
          quickDesc: "Silky flat noodles for char kway teow and pad see ew",
          whatIsIt: "Fresh or dried flat noodles made from rice flour and water. Fresh ones are silky and pliable; dried need soaking. They're the base for many beloved wok dishes.",
          howToUse: [
            "For fresh: separate gently with oiled hands before cooking",
            "For dried: soak in room temperature water for 30-60 minutes until pliable",
            "Cook over high heat with plenty of oil to prevent sticking",
            "Add soy sauce at the end and toss quickly"
          ],
          pairsWith: ["Beef", "Chinese broccoli", "Bean sprouts", "Eggs", "Dark soy sauce"],
          storage: "Fresh: use within 2-3 days, refrigerate. Dried: pantry for months.",
          substitutes: "Fresh fettuccine in a pinch (different but works). Dried rice stick noodles.",
          proTip: "Fresh noodles straight from the fridge are stiff. Let them come to room temperature, or microwave them briefly, before separating.",
          youtube: [
            { title: "Woks of Life: Beef Chow Fun", url: "https://www.youtube.com/results?search_query=woks+of+life+beef+chow+fun" },
            { title: "How to Cook Fresh Rice Noodles", url: "https://www.youtube.com/results?search_query=how+to+cook+fresh+rice+noodles+ho+fun" }
          ]
        },
        {
          id: "dried-noodles",
          name: "Dried Wheat Noodles",
          native: "面条",
          pronunciation: "miàn tiáo",
          quickDesc: "Versatile noodles for soups, stir-fries and cold dishes",
          whatIsIt: "Dried noodles made from wheat flour and water (sometimes egg). They come in various thicknesses and are shelf-stable for months. A pantry staple.",
          howToUse: [
            "Boil in plenty of water until just al dente (they'll continue cooking)",
            "Rinse with cold water if using for cold dishes or stir-fries",
            "Don't rinse if going straight into hot soup",
            "Toss with a little oil after draining to prevent clumping"
          ],
          pairsWith: ["Any broth", "Sesame paste", "Chili oil", "Vegetables", "Any protein"],
          storage: "Cool, dry pantry. Keeps for 1-2 years unopened.",
          substitutes: "Italian spaghetti or linguine works for many dishes.",
          proTip: "Cook noodles separately from soup to keep the broth clear and prevent noodles from getting mushy.",
          youtube: [
            { title: "Chinese Sesame Noodles Recipe", url: "https://www.youtube.com/results?search_query=chinese+sesame+noodles+recipe" },
            { title: "Dan Dan Noodles", url: "https://www.youtube.com/results?search_query=dan+dan+noodles+recipe+authentic" }
          ]
        },
        {
          id: "glass-noodles",
          name: "Glass Noodles (Mung Bean)",
          native: "粉丝",
          pronunciation: "fěn sī",
          quickDesc: "Translucent noodles that turn clear when cooked",
          whatIsIt: "Thin, translucent noodles made from mung bean starch. They turn clear and slippery when soaked or cooked. Also called cellophane noodles or bean thread noodles. Great at absorbing flavors.",
          howToUse: [
            "Soak in hot water until pliable, then add to stir-fries",
            "Add to hot pot and soups",
            "Braise with napa cabbage and pork",
            "Use in spring roll fillings"
          ],
          pairsWith: ["Napa cabbage", "Ground pork", "Soy sauce", "Sesame oil", "Mushrooms"],
          storage: "Dried noodles keep for years in pantry. Use immediately after soaking.",
          substitutes: "Sweet potato noodles (chewier) or thin rice vermicelli (different texture).",
          proTip: "Cut the bundle with scissors before soaking; the noodles are very long and hard to manage otherwise.",
          youtube: [
            { title: "Ants Climbing a Tree Recipe", url: "https://www.youtube.com/results?search_query=ants+climbing+a+tree+recipe+chinese" },
            { title: "Glass Noodles Stir Fry", url: "https://www.youtube.com/results?search_query=glass+noodles+stir+fry" }
          ]
        },
        {
          id: "sweet-potato-noodles",
          name: "Sweet Potato Noodles",
          native: "红薯粉",
          pronunciation: "hóng shǔ fěn",
          quickDesc: "Chewy, bouncy grey-brown noodles for hot pot and stir-fries",
          whatIsIt: "Thick, chewy noodles made from sweet potato starch. More substantial than glass noodles with a satisfying bounce. Turn greyish-brown when cooked. Popular in Sichuan cuisine and hot pot.",
          howToUse: [
            "Boil until chewy, then add to hot pot",
            "Stir-fry with vegetables and chili oil",
            "Braise with meat and vegetables",
            "Add to spicy Sichuan dishes"
          ],
          pairsWith: ["Chili oil", "Sichuan peppercorn", "Wood ear mushrooms", "Pork", "Pickled vegetables"],
          storage: "Dried noodles keep indefinitely. Cook immediately after boiling.",
          substitutes: "Korean dangmyeon (japchae noodles) are very similar. Glass noodles work but are less chewy.",
          proTip: "These noodles are very chewy, and some brands need 10+ minutes of boiling. Test until you get the texture you want.",
          youtube: [
            { title: "Sichuan Sweet Potato Noodles", url: "https://www.youtube.com/results?search_query=sichuan+sweet+potato+noodles" },
            { title: "Hot Pot Noodles Guide", url: "https://www.youtube.com/results?search_query=hot+pot+noodles+guide" }
          ]
        },
        {
          id: "egg-noodles",
          name: "Fresh Egg Noodles",
          native: "鸡蛋面",
          pronunciation: "jī dàn miàn",
          quickDesc: "Rich, yellow wheat noodles for wonton soup and lo mein",
          whatIsIt: "Wheat noodles enriched with eggs, giving them a rich yellow color and slightly chewy texture. Found in various thicknesses from thin wonton noodles to thick lo mein. Usually sold fresh or frozen.",
          howToUse: [
            "Boil for wonton soup or noodle soup",
            "Stir-fry for lo mein or chow mein",
            "Toss with sauce for cold noodle dishes",
            "Deep fry for crispy noodle nests"
          ],
          pairsWith: ["Soy sauce", "Oyster sauce", "Sesame oil", "Vegetables", "Any protein"],
          storage: "Fresh: refrigerate 3-5 days. Frozen: several months. Dried: pantry for months.",
          substitutes: "Italian egg fettuccine or linguine work for lo mein. Ramen noodles for soups.",
          proTip: "Fresh noodles are dusted with flour. Shake off the excess before cooking so the water doesn't turn starchy.",
          youtube: [
            { title: "Lo Mein Recipe", url: "https://www.youtube.com/results?search_query=lo+mein+recipe+chinese" },
            { title: "Wonton Noodle Soup", url: "https://www.youtube.com/results?search_query=wonton+noodle+soup+recipe" }
          ]
        },
        {
          id: "jasmine-rice",
          name: "Jasmine Rice",
          native: "茉莉香米",
          pronunciation: "mò lì xiāng mǐ",
          quickDesc: "Fragrant long-grain rice with floral aroma",
          whatIsIt: "A long-grain rice from Thailand with a distinctive floral, slightly nutty aroma. Grains are slightly sticky when cooked, not as separate as basmati. The everyday rice for many Chinese households.",
          howToUse: [
            "Steam or cook in rice cooker as everyday rice",
            "Use day-old for fried rice (fresh rice is too moist)",
            "Serve alongside stir-fries and braises",
            "Make congee (rice porridge)"
          ],
          pairsWith: ["Any Chinese dish", "Soy sauce", "Eggs", "Vegetables", "Meat"],
          storage: "Uncooked: airtight container for months. Cooked: refrigerate 4-5 days, freeze for longer.",
          substitutes: "Other long-grain white rice. Basmati is less sticky and has different aroma.",
          proTip: "For fried rice, spread cooked rice on a sheet pan and refrigerate uncovered overnight to dry it out.",
          youtube: [
            { title: "Perfect Jasmine Rice", url: "https://www.youtube.com/results?search_query=how+to+cook+jasmine+rice+perfect" },
            { title: "Chinese Fried Rice Recipe", url: "https://www.youtube.com/results?search_query=chinese+fried+rice+recipe" }
          ]
        },
        {
          id: "glutinous-rice",
          name: "Glutinous Rice (Sticky Rice)",
          native: "糯米",
          pronunciation: "nuò mǐ",
          quickDesc: "Sweet, sticky rice for dumplings and desserts",
          whatIsIt: "Short-grain rice that becomes very sticky and slightly sweet when cooked. Despite the name, it's gluten-free. Used for zongzi (rice dumplings), lo mai gai (lotus leaf wraps) and many desserts.",
          howToUse: [
            "Soak overnight, then steam for best results",
            "Make zongzi wrapped in bamboo leaves",
            "Fill lotus leaf wraps (lo mai gai)",
            "Use for mochi and rice cakes"
          ],
          pairsWith: ["Pork belly", "Chinese sausage", "Mushrooms", "Lotus leaves", "Red bean paste"],
          storage: "Uncooked: airtight container for months. Cooked: doesn't keep well, so use it the same day.",
          substitutes: "No real substitute for the sticky texture. Sushi rice is slightly sticky but different.",
          proTip: "Soak glutinous rice for at least 4 hours (overnight is best) before cooking, or it won't cook properly.",
          youtube: [
            { title: "Zongzi Recipe", url: "https://www.youtube.com/results?search_query=zongzi+recipe+chinese+rice+dumplings" },
            { title: "Lo Mai Gai Recipe", url: "https://www.youtube.com/results?search_query=lo+mai+gai+recipe+dim+sum" }
          ]
        }
      ],
      "Produce": [
        {
          id: "bok-choy",
          name: "Bok Choy",
          native: "白菜",
          pronunciation: "bái cài",
          quickDesc: "Crisp, mild Chinese cabbage that's great in stir-fries",
          whatIsIt: "A type of Chinese cabbage with thick white stems and dark green leaves. Baby bok choy is sweeter and more tender. Both cook quickly and absorb sauces beautifully.",
          howToUse: [
            "Separate leaves, wash thoroughly (dirt hides at the base)",
            "Stir-fry with garlic until stems are crisp-tender (2-3 minutes)",
            "Add to soups in the last few minutes",
            "Blanch and top with oyster sauce",
            "Halve baby bok choy and char in a hot pan"
          ],
          pairsWith: ["Garlic", "Oyster sauce", "Ginger", "Shiitake mushrooms", "Sesame oil"],
          storage: "Refrigerate unwashed in a plastic bag for up to 1 week.",
          substitutes: "Napa cabbage, choy sum or regular cabbage.",
          proTip: "The stems take longer to cook than the leaves, so add the stems first and the leaves in the last minute.",
          youtube: [
            { title: "Garlic Bok Choy Stir Fry", url: "https://www.youtube.com/results?search_query=garlic+bok+choy+stir+fry+recipe" },
            { title: "How to Cook Baby Bok Choy", url: "https://www.youtube.com/results?search_query=how+to+cook+baby+bok+choy+chinese" }
          ]
        },
        {
          id: "chinese-chives",
          name: "Chinese Chives",
          native: "韭菜",
          pronunciation: "jiǔ cài",
          quickDesc: "Pungent, garlicky greens for dumplings and stir-fries",
          whatIsIt: "Flat, dark green blades with a strong garlic-onion flavor, much more pungent than Western chives. Yellow chives (grown without light) are milder and more delicate.",
          howToUse: [
            "Chop and mix into dumpling and potsticker fillings",
            "Stir-fry with eggs for a classic simple dish",
            "Add to pancakes and savory crepes",
            "Toss into noodles at the very end of cooking"
          ],
          pairsWith: ["Eggs", "Pork", "Shrimp", "Tofu", "Rice noodles"],
          storage: "Wrap in paper towels, then plastic. They wilt fast, so use within 3-4 days.",
          substitutes: "Green onions + garlic gives a similar flavor profile but different texture.",
          proTip: "Add them at the very end of cooking. Overcooked, they turn army green and lose flavor.",
          youtube: [
            { title: "Chinese Chive and Egg Stir Fry", url: "https://www.youtube.com/results?search_query=chinese+chives+eggs+stir+fry" },
            { title: "Chinese Chive Dumplings", url: "https://www.youtube.com/results?search_query=chinese+chive+dumplings+recipe" }
          ]
        },
        {
          id: "gai-lan",
          name: "Gai Lan (Chinese Broccoli)",
          native: "芥蓝",
          pronunciation: "jiè lán",
          quickDesc: "Long-stemmed broccoli with thick stalks and dark leaves",
          whatIsIt: "A leafy green with thick, crisp stems and small florets. Slightly bitter but sweeter when cooked. The tender, juicy stems are the prized part. It's a dim sum restaurant staple served with oyster sauce.",
          howToUse: [
            "Blanch until bright green and top with oyster sauce",
            "Stir-fry with garlic and a splash of Shaoxing wine",
            "Add to noodle soups",
            "Steam and serve as a simple side dish"
          ],
          pairsWith: ["Oyster sauce", "Garlic", "Ginger", "Beef", "Fermented tofu"],
          storage: "Refrigerate in plastic bag for up to a week. Wash just before using.",
          substitutes: "Broccolini is a hybrid of gai lan and broccoli, so it's a very close substitute.",
          proTip: "If stems are thick, slice them on the diagonal or split lengthwise so they cook at the same rate as the leaves.",
          youtube: [
            { title: "Gai Lan with Oyster Sauce", url: "https://www.youtube.com/results?search_query=gai+lan+oyster+sauce+recipe" },
            { title: "How to Cook Chinese Broccoli", url: "https://www.youtube.com/results?search_query=how+to+cook+chinese+broccoli" }
          ]
        },
        {
          id: "choy-sum",
          name: "Choy Sum",
          native: "菜心",
          pronunciation: "cài xīn",
          quickDesc: "Tender flowering cabbage with yellow blossoms",
          whatIsIt: "A delicate leafy green with thin stems, small yellow flowers and tender leaves. Sweeter and more delicate than gai lan or bok choy. 'Choy sum' means 'heart of the vegetable' in Cantonese.",
          howToUse: [
            "Stir-fry quickly with garlic; it cooks in 2-3 minutes",
            "Blanch and serve with oyster sauce",
            "Add to soups in the last minute",
            "Steam and drizzle with soy sauce and sesame oil"
          ],
          pairsWith: ["Garlic", "Oyster sauce", "Ginger", "Sesame oil", "Shiitake mushrooms"],
          storage: "Very perishable, so use within 2-3 days. Refrigerate in plastic.",
          substitutes: "Baby bok choy or regular bok choy. Spinach in a pinch but different texture.",
          proTip: "The yellow flowers are edible and pretty, so leave them on. If they aren't wilted, they're a sign of freshness.",
          youtube: [
            { title: "Garlic Choy Sum Stir Fry", url: "https://www.youtube.com/results?search_query=choy+sum+garlic+stir+fry" },
            { title: "Chinese Greens Guide", url: "https://www.youtube.com/results?search_query=chinese+leafy+greens+guide" }
          ]
        },
        {
          id: "napa-cabbage",
          name: "Napa Cabbage",
          native: "大白菜",
          pronunciation: "dà bái cài",
          quickDesc: "Oblong cabbage with crinkly leaves, a dumpling and hot pot staple",
          whatIsIt: "A tall, oblong cabbage with crisp white ribs and pale green, crinkly leaves. Milder and sweeter than Western cabbage. Common in dumplings, hot pot, kimchi and stir-fries.",
          howToUse: [
            "Chop for dumpling and potsticker fillings",
            "Add to hot pot and soups",
            "Stir-fry with garlic and dried shrimp",
            "Braise slowly with pork and glass noodles"
          ],
          pairsWith: ["Pork", "Ginger", "Dried shrimp", "Glass noodles", "Tofu"],
          storage: "Refrigerate whole for 2+ weeks. Cut cabbage should be used within a few days.",
          substitutes: "Savoy cabbage or green cabbage, though they're more strongly flavored.",
          proTip: "Salt and squeeze chopped napa cabbage before using it in dumpling filling. It releases a lot of water that would make the wrappers soggy.",
          youtube: [
            { title: "Chinese Dumpling Recipe", url: "https://www.youtube.com/results?search_query=chinese+dumpling+recipe+napa+cabbage" },
            { title: "Braised Napa Cabbage", url: "https://www.youtube.com/results?search_query=braised+napa+cabbage+chinese" }
          ]
        },
        {
          id: "water-spinach",
          name: "Water Spinach (Ong Choy)",
          native: "空心菜",
          pronunciation: "kōng xīn cài",
          quickDesc: "Hollow-stemmed greens with arrow-shaped leaves",
          whatIsIt: "A semi-aquatic vegetable with hollow stems and arrow-shaped leaves. Also called morning glory (related to the flower). The stems stay crunchy while the leaves wilt. Popular across Southeast and East Asia.",
          howToUse: [
            "Stir-fry with garlic over very high heat",
            "Cook with fermented tofu for classic Cantonese dish",
            "Add to soups at the last minute",
            "Toss with shrimp paste for Malaysian-style"
          ],
          pairsWith: ["Garlic", "Fermented tofu", "Chili", "Shrimp paste", "Oyster sauce"],
          storage: "Very perishable: use within 1-2 days. Wrap in damp paper towels.",
          substitutes: "Regular spinach or pea shoots, though you'll lose the hollow stem texture.",
          proTip: "Cook over the highest heat you can. That keeps the greens from getting watery and the stems crisp.",
          youtube: [
            { title: "Water Spinach Stir Fry", url: "https://www.youtube.com/results?search_query=water+spinach+stir+fry+garlic" },
            { title: "Ong Choy with Fermented Tofu", url: "https://www.youtube.com/results?search_query=ong+choy+fermented+tofu" }
          ]
        },
        {
          id: "daikon",
          name: "Daikon Radish",
          native: "白萝卜",
          pronunciation: "bái luó bo",
          quickDesc: "Large white radish for soups, stir-fries and pickles",
          whatIsIt: "A large, mild white radish that can grow over a foot long. Much milder than red radishes with a slight peppery bite that mellows when cooked. Used across East Asian cuisines in different ways.",
          howToUse: [
            "Simmer in soups and braises until tender",
            "Grate raw as a condiment for rich foods",
            "Pickle for banchan or accompaniments",
            "Stir-fry with meat or add to hot pot"
          ],
          pairsWith: ["Beef", "Pork ribs", "Carrots", "Soy sauce", "Ginger"],
          storage: "Refrigerate whole for 2-3 weeks. Cut pieces should be wrapped and used within a week.",
          substitutes: "Turnip has similar texture when cooked, though the flavor differs.",
          proTip: "The top (near the leaves) is sweeter; the bottom is more pungent. Use the top raw and the bottom for cooking.",
          youtube: [
            { title: "Chinese Daikon Soup", url: "https://www.youtube.com/results?search_query=chinese+daikon+radish+soup" },
            { title: "Braised Daikon with Pork", url: "https://www.youtube.com/results?search_query=braised+daikon+pork+chinese" }
          ]
        },
        {
          id: "lotus-root",
          name: "Lotus Root",
          native: "莲藕",
          pronunciation: "lián ǒu",
          quickDesc: "Crunchy root with beautiful hole pattern inside",
          whatIsIt: "The underwater stem of the lotus plant, with a distinctive pattern of holes when sliced. Has a mild, slightly sweet flavor and stays crunchy even when cooked. Beautiful in presentation.",
          howToUse: [
            "Slice thin and stir-fry with pork or vegetables",
            "Simmer in soups with pork ribs",
            "Deep-fry thin slices for chips",
            "Stuff holes with glutinous rice for dessert"
          ],
          pairsWith: ["Pork ribs", "Vinegar", "Chili", "Soy sauce", "Sesame"],
          storage: "Refrigerate uncut for up to 2 weeks. Submerge cut pieces in water with a splash of vinegar.",
          substitutes: "Jicama has similar crunch but different flavor. Water chestnuts work in some dishes.",
          proTip: "Soak cut lotus root in water with vinegar to prevent browning and keep it crisp.",
          youtube: [
            { title: "Stir Fried Lotus Root", url: "https://www.youtube.com/results?search_query=stir+fried+lotus+root+chinese" },
            { title: "Lotus Root Soup Recipe", url: "https://www.youtube.com/results?search_query=chinese+lotus+root+soup" }
          ]
        },
        {
          id: "winter-melon",
          name: "Winter Melon",
          native: "冬瓜",
          pronunciation: "dōng guā",
          quickDesc: "Large, mild gourd that turns translucent when cooked",
          whatIsIt: "A very large gourd with white flesh that becomes translucent and silky when cooked. Despite the name, it's a summer vegetable. Has a very mild flavor that absorbs seasonings well. Often sold in pre-cut wedges.",
          howToUse: [
            "Simmer in soup with pork ribs or dried shrimp",
            "Braise with dried scallops",
            "Stir-fry with shrimp",
            "Use the shell as a soup tureen for banquets"
          ],
          pairsWith: ["Pork ribs", "Dried shrimp", "Dried scallops", "Ginger", "Goji berries"],
          storage: "Whole melons last weeks. Cut wedges should be wrapped and used within a week.",
          substitutes: "Fuzzy melon (smaller relative). Chayote or zucchini in a pinch, though different texture.",
          proTip: "The rind is very tough, so be careful when cutting. A large heavy knife or cleaver works best.",
          youtube: [
            { title: "Winter Melon Soup Recipe", url: "https://www.youtube.com/results?search_query=chinese+winter+melon+soup" },
            { title: "Braised Winter Melon", url: "https://www.youtube.com/results?search_query=braised+winter+melon+recipe" }
          ]
        },
        {
          id: "bitter-melon",
          name: "Bitter Melon",
          native: "苦瓜",
          pronunciation: "kǔ guā",
          quickDesc: "Bumpy green gourd with intensely bitter flavor",
          whatIsIt: "A warty, bumpy gourd with a strong bitter taste that's an acquired taste for many. Prized in Chinese medicine for cooling properties and blood sugar benefits. The bitterness mellows with cooking.",
          howToUse: [
            "Stir-fry with fermented black beans and pork",
            "Slice thin, salt and rinse to reduce bitterness",
            "Stuff with pork and steam",
            "Add to soups"
          ],
          pairsWith: ["Fermented black beans", "Pork", "Eggs", "Garlic", "Chili"],
          storage: "Refrigerate for up to a week. Yellow spots indicate over-ripeness.",
          substitutes: "No real substitute for the unique bitter flavor. If you dislike bitterness, try a different vegetable.",
          proTip: "To reduce bitterness: slice, salt heavily for 30 minutes, then rinse and squeeze out water before cooking.",
          youtube: [
            { title: "Bitter Melon Stir Fry", url: "https://www.youtube.com/results?search_query=bitter+melon+stir+fry+black+beans" },
            { title: "Stuffed Bitter Melon", url: "https://www.youtube.com/results?search_query=stuffed+bitter+melon+recipe" }
          ]
        },
        {
          id: "ginger",
          name: "Fresh Ginger",
          native: "姜",
          pronunciation: "jiāng",
          quickDesc: "Pungent, spicy root used throughout Chinese cooking",
          whatIsIt: "A knobby rhizome with a spicy, warming flavor. Along with garlic and scallions, it forms the holy trinity of Chinese aromatics. Used to add warmth and remove fishiness from seafood and meats.",
          howToUse: [
            "Slice and add to stir-fries at the start with garlic",
            "Mince into marinades and dumpling fillings",
            "Add coins to fish and seafood while steaming",
            "Brew into tea for colds and digestion"
          ],
          pairsWith: ["Garlic", "Scallions", "Soy sauce", "Fish", "Chicken"],
          storage: "Room temperature for a week, refrigerate for longer. Can be frozen whole.",
          substitutes: "Galangal is a cousin with different flavor. Ground ginger lacks the fresh brightness.",
          proTip: "Young ginger (pinkish skin, less fibrous) is milder and doesn't need peeling. Mature ginger should be peeled.",
          youtube: [
            { title: "How to Use Ginger in Chinese Cooking", url: "https://www.youtube.com/results?search_query=ginger+chinese+cooking+techniques" },
            { title: "Ginger Scallion Sauce", url: "https://www.youtube.com/results?search_query=ginger+scallion+sauce+recipe" }
          ]
        },
        {
          id: "scallions",
          name: "Scallions (Green Onions)",
          native: "葱",
          pronunciation: "cōng",
          quickDesc: "Everyday aromatic used from root to tip",
          whatIsIt: "Mild onions harvested young, with white bottoms and green tops. Every part gets used: whites for cooking, greens for garnish. Along with ginger and garlic, they're the most common aromatic in Chinese cuisine.",
          howToUse: [
            "Slice whites and cook first in stir-fries",
            "Chop greens for garnish on nearly any dish",
            "Make scallion oil by cooking slowly in oil",
            "Use whole in braises and stocks"
          ],
          pairsWith: ["Ginger", "Soy sauce", "Sesame oil", "Noodles", "Any protein"],
          storage: "Refrigerate in plastic bag for 1-2 weeks. Can regrow roots in water.",
          substitutes: "Chives or the green part of leeks. Shallots for the white part.",
          proTip: "For scallion pancakes and scallion oil, use mostly the green parts for color and milder flavor.",
          youtube: [
            { title: "Scallion Oil Noodles", url: "https://www.youtube.com/results?search_query=scallion+oil+noodles+chinese" },
            { title: "Scallion Pancakes Recipe", url: "https://www.youtube.com/results?search_query=chinese+scallion+pancakes+recipe" }
          ]
        },
        {
          id: "bean-sprouts",
          name: "Bean Sprouts",
          native: "豆芽",
          pronunciation: "dòu yá",
          quickDesc: "Crisp, refreshing sprouts for stir-fries and noodles",
          whatIsIt: "Young sprouted mung beans with white stems and small yellow heads. Prized for their crunchy texture and fresh, slightly nutty taste. Must be cooked briefly to retain crispness.",
          howToUse: [
            "Add to pad thai and chow fun in the last minute",
            "Stir-fry quickly with garlic",
            "Use fresh in Vietnamese spring rolls",
            "Add raw as garnish for pho"
          ],
          pairsWith: ["Rice noodles", "Eggs", "Garlic", "Soy sauce", "Sesame oil"],
          storage: "Very perishable; use within 2-3 days. Store in water in the refrigerator.",
          substitutes: "No real substitute for the crunch. Julienned cucumber adds freshness.",
          proTip: "Cook over very high heat for only 30 seconds to 1 minute. Overcooked sprouts turn soggy and limp.",
          youtube: [
            { title: "Stir Fried Bean Sprouts", url: "https://www.youtube.com/results?search_query=stir+fried+bean+sprouts+chinese" },
            { title: "Perfect Pad Thai with Bean Sprouts", url: "https://www.youtube.com/results?search_query=pad+thai+bean+sprouts" }
          ]
        },
        {
          id: "taro",
          name: "Taro Root",
          native: "芋头",
          pronunciation: "yù tou",
          quickDesc: "Starchy root with purple-flecked flesh for savory and sweet dishes",
          whatIsIt: "A starchy tuber with brown, hairy skin and white flesh flecked with purple. Has a subtle, nutty, slightly sweet flavor. Used in both savory dishes (braised pork) and desserts (taro bubble tea, taro balls).",
          howToUse: [
            "Braise with pork belly and aromatics",
            "Steam and mash for dim sum dishes",
            "Deep fry for crispy taro chips",
            "Use in sweet soups and bubble tea"
          ],
          pairsWith: ["Pork belly", "Coconut milk", "Rock sugar", "Dried shrimp", "Scallions"],
          storage: "Store in a cool, dry place for 1-2 weeks. Don't refrigerate it, because the cold causes starch breakdown.",
          substitutes: "Potato or sweet potato work in some recipes but have different texture and flavor.",
          proTip: "Raw taro can irritate your skin, so wear gloves when peeling or wash your hands right after. Always cook it thoroughly.",
          youtube: [
            { title: "Taro Braised Pork", url: "https://www.youtube.com/results?search_query=taro+braised+pork+belly+chinese" },
            { title: "Taro Bubble Tea Recipe", url: "https://www.youtube.com/results?search_query=taro+bubble+tea+recipe" }
          ]
        }
      ],
      "Proteins & Tofu": [
        {
          id: "firm-tofu",
          name: "Firm Tofu",
          native: "老豆腐",
          pronunciation: "lǎo dòu fu",
          quickDesc: "Dense, sliceable tofu for stir-fries and braising",
          whatIsIt: "Tofu pressed to remove moisture, resulting in a dense, firm texture that holds its shape when cooked. Ideal for stir-frying, braising and grilling. Won't fall apart like silken tofu.",
          howToUse: [
            "Press to remove excess water, then stir-fry",
            "Braise in sauce until flavorful",
            "Pan-fry until golden and crispy",
            "Cube for mapo tofu and hot pot"
          ],
          pairsWith: ["Soy sauce", "Chili", "Garlic", "Ground pork", "Scallions"],
          storage: "Keep in water in refrigerator, change water daily. Use within a week of opening.",
          substitutes: "Extra-firm tofu for even more structure. Tempeh for different texture and flavor.",
          proTip: "Press tofu between paper towels with a weight for 15-30 minutes before cooking. It'll absorb sauce better and fry crispier.",
          youtube: [
            { title: "Crispy Pan-Fried Tofu", url: "https://www.youtube.com/results?search_query=crispy+pan+fried+tofu+recipe" },
            { title: "Mapo Tofu Recipe", url: "https://www.youtube.com/results?search_query=mapo+tofu+recipe+authentic" }
          ]
        },
        {
          id: "silken-tofu",
          name: "Silken Tofu",
          native: "嫩豆腐",
          pronunciation: "nèn dòu fu",
          quickDesc: "Delicate, custardy tofu for soups and cold dishes",
          whatIsIt: "Unpressed tofu with a silky, custard-like texture. Very delicate and will fall apart if handled roughly. Best for soups, steaming and serving cold with toppings.",
          howToUse: [
            "Serve cold with soy sauce, scallions and chili oil",
            "Add to soups at the last minute",
            "Steam with soy sauce and ginger",
            "Blend into smoothies or desserts"
          ],
          pairsWith: ["Soy sauce", "Sesame oil", "Scallions", "Century egg", "Pork floss"],
          storage: "Refrigerate unopened for weeks. Once opened, keep in water and use within 2-3 days.",
          substitutes: "Soft tofu is slightly firmer but works similarly. No non-soy substitute.",
          proTip: "Shelf-stable silken tofu (in boxes) works well in cold dishes. Chill it before opening for the best texture.",
          youtube: [
            { title: "Cold Tofu with Toppings", url: "https://www.youtube.com/results?search_query=cold+silken+tofu+chinese+recipe" },
            { title: "Steamed Silken Tofu", url: "https://www.youtube.com/results?search_query=steamed+silken+tofu+recipe" }
          ]
        },
        {
          id: "dried-tofu",
          name: "Dried Tofu (Dougan)",
          native: "豆干",
          pronunciation: "dòu gān",
          quickDesc: "Extra-firm pressed tofu with chewy, meaty texture",
          whatIsIt: "Tofu that's been pressed until very dense and firm, sometimes smoked or seasoned. Has a chewy, almost meaty texture. Often sold in thin sheets, cubes or strips in the refrigerated section.",
          howToUse: [
            "Slice thin and stir-fry with vegetables",
            "Shred for salads and cold dishes",
            "Braise with soy sauce and spices",
            "Add to stir-fries as meat substitute"
          ],
          pairsWith: ["Celery", "Chili", "Soy sauce", "Sichuan peppercorn", "Garlic"],
          storage: "Refrigerate for up to 2 weeks. Vacuum-sealed lasts longer.",
          substitutes: "Extra-firm tofu pressed very well. Seitan for similar chewiness.",
          proTip: "Five-spice dried tofu is pre-seasoned and great for snacking or quick stir-fries.",
          youtube: [
            { title: "Stir Fried Dried Tofu", url: "https://www.youtube.com/results?search_query=stir+fried+dried+tofu+chinese" },
            { title: "Dried Tofu Salad", url: "https://www.youtube.com/results?search_query=chinese+dried+tofu+salad" }
          ]
        },
        {
          id: "tofu-puffs",
          name: "Tofu Puffs (Fried Tofu)",
          native: "油豆腐",
          pronunciation: "yóu dòu fu",
          quickDesc: "Light, spongy fried tofu that soaks up sauce",
          whatIsIt: "Tofu that's been deep-fried until puffed and golden, creating a spongy texture with a hollow center. Excellent at absorbing braising liquids and sauces. Sold fresh, frozen or dried.",
          howToUse: [
            "Braise in soy sauce until flavor is absorbed",
            "Add to hot pot and soups",
            "Stuff with meat filling",
            "Stir-fry with vegetables"
          ],
          pairsWith: ["Soy sauce", "Oyster sauce", "Mushrooms", "Bok choy", "Braising liquid"],
          storage: "Fresh: refrigerate for a few days. Frozen: months. Dried: pantry for weeks.",
          substitutes: "Regular firm tofu won't have the same spongy, absorbent texture.",
          proTip: "Before braising, blanch them in boiling water to remove excess oil. They'll absorb sauce better.",
          youtube: [
            { title: "Braised Tofu Puffs", url: "https://www.youtube.com/results?search_query=braised+tofu+puffs+chinese" },
            { title: "Stuffed Tofu Puffs", url: "https://www.youtube.com/results?search_query=stuffed+tofu+puffs+recipe" }
          ]
        },
        {
          id: "chinese-sausage",
          name: "Chinese Sausage (Lap Cheong)",
          native: "腊肠",
          pronunciation: "là cháng",
          quickDesc: "Sweet, savory dried sausage with waxy texture",
          whatIsIt: "Hard, dried pork sausages with a sweet-savory flavor from soy sauce, rice wine and sugar. The fat gives them a distinctive waxy texture. They must be cooked before eating and are often steamed on rice.",
          howToUse: [
            "Steam on top of rice in rice cooker",
            "Slice and stir-fry with vegetables",
            "Add to fried rice",
            "Include in sticky rice dishes and zongzi"
          ],
          pairsWith: ["Rice", "Eggs", "Vegetables", "Glutinous rice", "Mushrooms"],
          storage: "Refrigerate for months or freeze for longer. The drier they are, the longer they last.",
          substitutes: "No exact substitute. Sweet Italian sausage or kielbasa are different but work in some recipes.",
          proTip: "The darker sausages contain liver and are richer. Standard red ones are pork only and slightly sweeter.",
          youtube: [
            { title: "Chinese Sausage Rice", url: "https://www.youtube.com/results?search_query=chinese+sausage+rice+recipe" },
            { title: "Lap Cheong Fried Rice", url: "https://www.youtube.com/results?search_query=lap+cheong+fried+rice" }
          ]
        },
        {
          id: "tofu-skin",
          name: "Tofu Skin (Yuba)",
          native: "腐竹",
          pronunciation: "fǔ zhú",
          quickDesc: "Silky sheets of dried soy milk skin for soups and braises",
          whatIsIt: "The skin that forms on top of heated soy milk, lifted off and dried. Has a delicate, silky texture when rehydrated. Comes as dried sticks or fresh sheets. High in protein.",
          howToUse: [
            "Soak dried tofu skin until pliable",
            "Add to soups and hot pot",
            "Braise with vegetables",
            "Use fresh sheets as dim sum wrappers"
          ],
          pairsWith: ["Mushrooms", "Ginger", "Soy sauce", "Vegetables", "Broth"],
          storage: "Dried: pantry for months. Fresh: refrigerate and use within a few days.",
          substitutes: "No real substitute for the unique texture.",
          proTip: "They come in different shapes, and sticks take longer to rehydrate than sheets. Soak in warm water until no hard center remains.",
          youtube: [
            { title: "Tofu Skin Rolls Recipe", url: "https://www.youtube.com/results?search_query=tofu+skin+rolls+chinese+recipe" },
            { title: "Braised Tofu Skin", url: "https://www.youtube.com/results?search_query=braised+tofu+skin+fu+zhu" }
          ]
        }
      ],
      "Pantry Staples": [
        {
          id: "sesame-oil",
          name: "Toasted Sesame Oil",
          native: "麻油",
          pronunciation: "má yóu",
          quickDesc: "Nutty, aromatic finishing oil (a little goes a long way)",
          whatIsIt: "Oil pressed from toasted sesame seeds, giving it a dark amber color and intense nutty aroma. It's primarily a finishing oil, not for high-heat cooking.",
          howToUse: [
            "Drizzle over finished dishes as a flavor accent",
            "Add to dipping sauces and dressings",
            "Mix into dumpling fillings",
            "Use sparingly in marinades"
          ],
          pairsWith: ["Soy sauce", "Rice vinegar", "Garlic", "Ginger", "Chili"],
          storage: "Cool, dark place or refrigerate. Goes rancid faster than other oils.",
          substitutes: "No true substitute for the flavor. Tahini mixed into oil gives some nuttiness.",
          proTip: "Buy small bottles, since it loses potency quickly once opened. Kadoya brand is widely trusted.",
          youtube: [
            { title: "How to Use Sesame Oil in Asian Cooking", url: "https://www.youtube.com/results?search_query=how+to+use+sesame+oil+asian+cooking" },
            { title: "Sesame Oil Basics", url: "https://www.youtube.com/results?search_query=toasted+sesame+oil+cooking+tips" }
          ]
        },
        {
          id: "five-spice",
          name: "Five Spice Powder",
          native: "五香粉",
          pronunciation: "wǔ xiāng fěn",
          quickDesc: "Warm, aromatic blend for roasts, braises and marinades",
          whatIsIt: "A potent blend typically containing star anise, cloves, cinnamon, Sichuan peppercorn and fennel seeds. It's warm, slightly sweet and intensely aromatic.",
          howToUse: [
            "Rub on pork belly, duck or chicken before roasting",
            "Add to braising liquids (start with 1/4 teaspoon)",
            "Mix into ground meat for dumplings",
            "Sprinkle on roasted sweet potatoes or squash"
          ],
          pairsWith: ["Pork", "Duck", "Soy sauce", "Honey", "Ginger"],
          storage: "Airtight container away from heat and light. Best within 6 months.",
          substitutes: "Make your own by grinding equal parts of the five spices.",
          proTip: "It's very strong, so start with less than you think you need. You can always add more.",
          youtube: [
            { title: "Chinese Five Spice Pork Belly", url: "https://www.youtube.com/results?search_query=chinese+five+spice+pork+belly+recipe" },
            { title: "How to Make Five Spice Powder", url: "https://www.youtube.com/results?search_query=how+to+make+chinese+five+spice+powder" }
          ]
        },
        {
          id: "dried-shiitake",
          name: "Dried Shiitake Mushrooms",
          native: "香菇",
          pronunciation: "xiāng gū",
          quickDesc: "Intensely savory dried mushrooms for braises and soups",
          whatIsIt: "Shiitake mushrooms dried to concentrate their flavor, creating an intensely savory, almost meaty taste. The soaking liquid is also full of umami and used as stock. Worth keeping in the pantry.",
          howToUse: [
            "Soak in warm water for 30+ minutes before using",
            "Save soaking liquid for stocks and sauces",
            "Add to braises, soups and dumplings",
            "Slice for stir-fries and fried rice"
          ],
          pairsWith: ["Soy sauce", "Ginger", "Chicken", "Tofu", "Bok choy"],
          storage: "Airtight container in cool, dry place for years.",
          substitutes: "Fresh shiitakes work but have milder flavor. Dried porcini have similar umami intensity.",
          proTip: "Thick-capped 'flower mushrooms' (花菇) with cracked tops are premium quality and worth the splurge for special dishes.",
          youtube: [
            { title: "How to Rehydrate Dried Shiitakes", url: "https://www.youtube.com/results?search_query=rehydrate+dried+shiitake+mushrooms" },
            { title: "Braised Shiitake Mushrooms", url: "https://www.youtube.com/results?search_query=braised+shiitake+mushrooms+chinese" }
          ]
        },
        {
          id: "wood-ear",
          name: "Wood Ear Mushrooms",
          native: "木耳",
          pronunciation: "mù ěr",
          quickDesc: "Crunchy, wavy black fungus with no taste but great texture",
          whatIsIt: "A dark, ear-shaped fungus prized for its crunchy texture rather than flavor. Expands dramatically when soaked. Adds crunch and visual contrast to dishes. Also called black fungus or cloud ear.",
          howToUse: [
            "Soak until expanded, remove hard stem",
            "Add to hot and sour soup",
            "Stir-fry with eggs and vegetables",
            "Include in mu shu pork"
          ],
          pairsWith: ["Eggs", "Lily flowers", "Pork", "Ginger", "Vinegar"],
          storage: "Dried: pantry for years. Soaked: use immediately.",
          substitutes: "No substitute for the unique crunchy texture. Skip if unavailable.",
          proTip: "They expand 5-10x when soaked, so a small handful goes a long way. Remove the hard stem where it attached to the tree.",
          youtube: [
            { title: "Hot and Sour Soup Recipe", url: "https://www.youtube.com/results?search_query=hot+and+sour+soup+wood+ear" },
            { title: "Mu Shu Pork Recipe", url: "https://www.youtube.com/results?search_query=mu+shu+pork+recipe" }
          ]
        },
        {
          id: "dried-shrimp",
          name: "Dried Shrimp",
          native: "虾米",
          pronunciation: "xiā mǐ",
          quickDesc: "Tiny umami bombs that add savory depth to any dish",
          whatIsIt: "Small shrimp that have been salted and dried, concentrating their flavor into intense bursts of savory, briny taste. Used as a flavoring agent rather than a main ingredient. Sizes range from tiny to thumb-sized.",
          howToUse: [
            "Soak briefly to soften, then chop or use whole",
            "Add to stir-fried greens for umami",
            "Include in fried rice and noodles",
            "Use in dumpling and turnip cake fillings"
          ],
          pairsWith: ["Napa cabbage", "Eggs", "Rice", "Scallions", "Glass noodles"],
          storage: "Refrigerate after opening for months. Freeze for longer storage.",
          substitutes: "Dried scallops (more expensive), fish sauce (liquid form of umami).",
          proTip: "Pick the size for the job: tiny ones dissolve into dishes, while larger ones add chewy texture.",
          youtube: [
            { title: "Stir Fry with Dried Shrimp", url: "https://www.youtube.com/results?search_query=chinese+dried+shrimp+stir+fry" },
            { title: "XO Sauce Recipe", url: "https://www.youtube.com/results?search_query=xo+sauce+recipe+dried+shrimp" }
          ]
        },
        {
          id: "rock-sugar",
          name: "Rock Sugar",
          native: "冰糖",
          pronunciation: "bīng táng",
          quickDesc: "Large sugar crystals that add shine and subtle sweetness",
          whatIsIt: "Large amber or white crystals of sugar that dissolve slowly, adding gloss and gentle sweetness to braises. Preferred over granulated sugar in Chinese cooking for its clean flavor and glossy finish.",
          howToUse: [
            "Add to red-braised dishes for shine",
            "Use in sweet soups and desserts",
            "Dissolve in tea",
            "Add to char siu marinade"
          ],
          pairsWith: ["Soy sauce", "Pork belly", "Star anise", "Ginger", "Herbal teas"],
          storage: "Airtight container indefinitely. Will clump if exposed to moisture.",
          substitutes: "Granulated sugar works but doesn't create the same gloss. Brown sugar adds different flavor.",
          proTip: "Yellow rock sugar has a deeper flavor from less processing. White is more neutral.",
          youtube: [
            { title: "Red Braised Pork Belly", url: "https://www.youtube.com/results?search_query=red+braised+pork+belly+rock+sugar" },
            { title: "Chinese Rock Sugar Uses", url: "https://www.youtube.com/results?search_query=chinese+rock+sugar+cooking" }
          ]
        },
        {
          id: "cornstarch",
          name: "Cornstarch",
          native: "玉米淀粉",
          pronunciation: "yù mǐ diàn fěn",
          quickDesc: "Go-to thickener for sauces and velveting meat",
          whatIsIt: "A fine white starch used to thicken sauces and create that glossy Chinese restaurant look. Also used in 'velveting': coating meat in a cornstarch mixture to keep it tender during cooking.",
          howToUse: [
            "Mix with cold water before adding to hot liquids (slurry)",
            "Coat meat with cornstarch before stir-frying (velveting)",
            "Add to marinades for tender meat",
            "Use for crispy coatings when frying"
          ],
          pairsWith: ["Soy sauce", "Any stir-fry sauce", "Meat marinades", "Frying batters"],
          storage: "Airtight container in dry pantry indefinitely.",
          substitutes: "Potato starch or tapioca starch work similarly. Flour thickens but creates cloudier sauces.",
          proTip: "Always mix cornstarch with cold liquid first. Added directly to hot liquid, it forms lumps.",
          youtube: [
            { title: "Velveting Meat Technique", url: "https://www.youtube.com/results?search_query=velveting+chicken+cornstarch+chinese" },
            { title: "Chinese Sauce Thickening", url: "https://www.youtube.com/results?search_query=thicken+chinese+stir+fry+sauce" }
          ]
        },
        {
          id: "dried-scallops",
          name: "Dried Scallops (Conpoy)",
          native: "干贝",
          pronunciation: "gān bèi",
          quickDesc: "Luxurious umami powerhouse for special occasion cooking",
          whatIsIt: "Dried scallop adductor muscles with concentrated, intensely savory flavor. A luxury ingredient used sparingly to add deep seafood umami. They shred into delicate threads when cooked.",
          howToUse: [
            "Soak in warm water for hours or steam to rehydrate",
            "Add to congee for rich flavor",
            "Use in XO sauce",
            "Braise with vegetables"
          ],
          pairsWith: ["Winter melon", "Congee", "Rice", "Vegetables", "Mushrooms"],
          storage: "Refrigerate in airtight container for months. Freeze for longer.",
          substitutes: "Nothing replicates the flavor exactly, but dried shrimp is a more affordable umami source.",
          proTip: "Save the soaking liquid. It's full of flavor and makes a good stock for soups and sauces.",
          youtube: [
            { title: "Dried Scallop Congee", url: "https://www.youtube.com/results?search_query=dried+scallop+congee+recipe" },
            { title: "Cooking with Dried Scallops", url: "https://www.youtube.com/results?search_query=cooking+with+dried+scallops+conpoy" }
          ]
        },
        {
          id: "wonton-wrappers",
          name: "Wonton Wrappers",
          native: "馄饨皮",
          pronunciation: "hún tun pí",
          quickDesc: "Thin wheat wrappers for wontons, dumplings and more",
          whatIsIt: "Paper-thin squares of wheat dough for wrapping wontons. Thinner than dumpling wrappers and come in yellow (with egg) or white varieties. Also used for creative applications like fried chips or ravioli.",
          howToUse: [
            "Wrap around pork and shrimp filling for classic wontons",
            "Boil for soup or pan-fry for potstickers",
            "Deep fry for crispy chips",
            "Use as ravioli wrappers"
          ],
          pairsWith: ["Ground pork", "Shrimp", "Ginger", "Sesame oil", "Scallions"],
          storage: "Refrigerate for up to 2 weeks. Freeze for longer. Keep wrapped to prevent drying.",
          substitutes: "Gyoza wrappers are thicker but work. Fresh pasta sheets can substitute in fusion dishes.",
          proTip: "Keep wrappers covered with a damp towel while you work, since they dry out quickly and crack.",
          youtube: [
            { title: "How to Fold Wontons", url: "https://www.youtube.com/results?search_query=how+to+fold+wontons+techniques" },
            { title: "Wonton Soup Recipe", url: "https://www.youtube.com/results?search_query=wonton+soup+recipe+chinese" }
          ]
        },
        {
          id: "dumpling-wrappers",
          name: "Dumpling Wrappers",
          native: "饺子皮",
          pronunciation: "jiǎo zi pí",
          quickDesc: "Round wheat wrappers for potstickers and boiled dumplings",
          whatIsIt: "Round discs of wheat dough, thicker than wonton wrappers for sturdier dumplings. Used for jiaozi (boiled or pan-fried dumplings) and potstickers. Available fresh, frozen or dried.",
          howToUse: [
            "Fill with meat and vegetable mixtures",
            "Pleat and seal edges with water",
            "Pan-fry for potstickers (guotie)",
            "Boil for jiaozi or steam for shumai"
          ],
          pairsWith: ["Ground pork", "Napa cabbage", "Chives", "Ginger", "Soy sauce"],
          storage: "Refrigerate for a week. Freeze for months. Thaw before using.",
          substitutes: "Homemade dough is simple: flour + hot and cold water. Wonton wrappers work for soup dumplings.",
          proTip: "Thinner wrappers (marked 'thin' or 'Shanghai style') give better texture for pan-fried dumplings.",
          youtube: [
            { title: "How to Make Potstickers", url: "https://www.youtube.com/results?search_query=how+to+make+potstickers+recipe" },
            { title: "Dumpling Folding Techniques", url: "https://www.youtube.com/results?search_query=dumpling+folding+techniques+pleating" }
          ]
        }
      ]
    }
  },
  japan: {
    name: "Japan",
    flag: "🇯🇵",
    categories: {
      "Sauces & Condiments": [
        {
          id: "miso",
          name: "Miso Paste",
          native: "味噌",
          pronunciation: "mee-soh",
          quickDesc: "Fermented soybean paste, a major source of umami in Japanese cooking",
          whatIsIt: "A thick paste made from fermented soybeans, salt and koji (a mold). White (shiro) miso is mild and sweet; red (aka) miso is stronger and saltier; mixed (awase) is balanced.",
          howToUse: [
            "Dissolve in warm (not boiling) water or dashi for soup",
            "Whisk into salad dressings and marinades",
            "Glaze on fish, eggplant or tofu before broiling",
            "Add to butter for a compound butter on steak or vegetables"
          ],
          pairsWith: ["Dashi", "Tofu", "Wakame seaweed", "Green onions", "Sake"],
          storage: "Refrigerate after opening. Lasts up to a year.",
          substitutes: "Different miso types can substitute for each other. No non-miso substitute captures the flavor.",
          proTip: "Don't boil miso: it kills the beneficial probiotics and dulls the flavor. Add it last, off the heat.",
          youtube: [
            { title: "Just One Cookbook: Easy Miso Soup", url: "https://www.youtube.com/results?search_query=just+one+cookbook+miso+soup" },
            { title: "Miso Glazed Salmon Recipe", url: "https://www.youtube.com/results?search_query=miso+glazed+salmon+recipe" }
          ]
        },
        {
          id: "mirin",
          name: "Mirin",
          native: "味醂",
          pronunciation: "mee-rin",
          quickDesc: "Sweet rice wine that adds shine and depth to dishes",
          whatIsIt: "A sweet rice wine with about 14% alcohol and 40-50% sugar. True hon-mirin is naturally fermented; cheaper aji-mirin has added sweeteners. It adds sweetness, sheen and helps balance salty flavors.",
          howToUse: [
            "Add to teriyaki sauce (equal parts soy sauce, mirin, sake)",
            "Use in simmered dishes (nimono) for subtle sweetness",
            "Mix into dipping sauces for noodles and tempura",
            "Add to tamagoyaki (rolled omelet) batter"
          ],
          pairsWith: ["Soy sauce", "Sake", "Dashi", "Ginger", "Any protein"],
          storage: "Room temperature if hon-mirin (high alcohol). Refrigerate aji-mirin.",
          substitutes: "Sake + sugar (3:1 ratio) approximates the flavor.",
          proTip: "Look for 'hon-mirin' (本みりん) for the real thing. If it's in the vinegar aisle, it's probably aji-mirin.",
          youtube: [
            { title: "How to Use Mirin in Japanese Cooking", url: "https://www.youtube.com/results?search_query=how+to+use+mirin+japanese+cooking" },
            { title: "Homemade Teriyaki Sauce", url: "https://www.youtube.com/results?search_query=homemade+teriyaki+sauce+mirin+recipe" }
          ]
        },
        {
          id: "ponzu",
          name: "Ponzu",
          native: "ポン酢",
          pronunciation: "pon-zoo",
          quickDesc: "Citrusy soy sauce for dipping, dressing and marinades",
          whatIsIt: "A tangy sauce combining soy sauce, citrus juice (usually yuzu or sudachi), rice vinegar and dashi. It's bright, savory and refreshing, and it cuts through rich foods well.",
          howToUse: [
            "Use as a dipping sauce for shabu-shabu and gyoza",
            "Dress salads and cold noodles",
            "Drizzle over grilled fish or tataki",
            "Marinate proteins for a bright, savory flavor"
          ],
          pairsWith: ["Grated daikon", "Green onions", "Sesame", "Fish", "Pork"],
          storage: "Refrigerate after opening. Good for several months.",
          substitutes: "Mix soy sauce with lemon or lime juice and a splash of rice vinegar.",
          proTip: "Add grated daikon (momiji oroshi with chili is even better) to ponzu for a traditional dipping sauce.",
          youtube: [
            { title: "How to Make Ponzu Sauce", url: "https://www.youtube.com/results?search_query=how+to+make+ponzu+sauce+recipe" },
            { title: "Ponzu Dipping Sauce for Shabu Shabu", url: "https://www.youtube.com/results?search_query=ponzu+dipping+sauce+shabu+shabu" }
          ]
        },
        {
          id: "japanese-soy",
          name: "Japanese Soy Sauce (Shoyu)",
          native: "醤油",
          pronunciation: "shoh-yoo",
          quickDesc: "Balanced, slightly sweet soy sauce for everyday Japanese cooking",
          whatIsIt: "Japanese soy sauce (shoyu) is typically brewed with equal parts soybeans and wheat, making it slightly sweeter and more balanced than Chinese soy sauce. Koikuchi is the standard; usukuchi is lighter colored but saltier.",
          howToUse: [
            "Use as everyday seasoning in Japanese cooking",
            "Base for teriyaki, yakitori glazes and dipping sauces",
            "Splash on rice, eggs and tofu",
            "Mix with wasabi for sashimi dipping"
          ],
          pairsWith: ["Wasabi", "Ginger", "Mirin", "Sake", "Dashi"],
          storage: "Refrigerate after opening for best quality. Keeps for months.",
          substitutes: "Chinese light soy sauce works but is saltier. Tamari for gluten-free (check label).",
          proTip: "Kikkoman is the standard, but try Yamasa or Higashimaru for subtle differences. Fresh soy sauce (nama shoyu) is even more delicate.",
          youtube: [
            { title: "Japanese Soy Sauce Guide", url: "https://www.youtube.com/results?search_query=japanese+soy+sauce+types+guide" },
            { title: "How to Use Soy Sauce", url: "https://www.youtube.com/results?search_query=how+to+use+soy+sauce+japanese+cooking" }
          ]
        },
        {
          id: "sake",
          name: "Cooking Sake",
          native: "料理酒",
          pronunciation: "sah-keh",
          quickDesc: "Rice wine that tenderizes meat and adds depth to dishes",
          whatIsIt: "Fermented rice wine used extensively in Japanese cooking. Removes fishy and gamey odors, tenderizes proteins and adds umami depth. Cooking sake often has salt added; drinking sake works and is often better quality.",
          howToUse: [
            "Add to marinades for fish and meat",
            "Splash into pan when stir-frying or sautéing",
            "Include in simmered dishes and soups",
            "Combine with mirin and soy sauce for teriyaki"
          ],
          pairsWith: ["Soy sauce", "Mirin", "Ginger", "Fish", "Pork"],
          storage: "Room temperature. Keeps for months once opened.",
          substitutes: "Dry sherry or Chinese Shaoxing wine. White wine in a pinch.",
          proTip: "Avoid 'cooking sake' with lots of salt if possible. Regular drinking sake gives better flavor.",
          youtube: [
            { title: "How to Use Sake in Cooking", url: "https://www.youtube.com/results?search_query=how+to+use+sake+japanese+cooking" },
            { title: "Sake vs Mirin Explained", url: "https://www.youtube.com/results?search_query=sake+vs+mirin+difference" }
          ]
        },
        {
          id: "tonkatsu-sauce",
          name: "Tonkatsu Sauce",
          native: "とんかつソース",
          pronunciation: "ton-kah-tsu",
          quickDesc: "Sweet, tangy brown sauce for fried cutlets and more",
          whatIsIt: "A thick, sweet-tangy sauce made from fruits, vegetables and spices. Similar to Worcestershire but sweeter and thicker. It's the standard sauce for tonkatsu, korokke and other fried dishes. Bulldog is the classic brand.",
          howToUse: [
            "Drizzle over tonkatsu and chicken katsu",
            "Use as dipping sauce for korokke and fried foods",
            "Spread on okonomiyaki and yakisoba",
            "Mix with mayo for fry sauce"
          ],
          pairsWith: ["Fried cutlets", "Cabbage", "Rice", "Korokke", "Okonomiyaki"],
          storage: "Refrigerate after opening. Keeps for several months.",
          substitutes: "Mix Worcestershire sauce with ketchup and a little sugar (2:1:pinch ratio).",
          proTip: "There are three types: regular tonkatsu sauce, chuuno (medium) and usutaa (thinner like Worcestershire). They're all worth trying.",
          youtube: [
            { title: "Tonkatsu Sauce Recipe", url: "https://www.youtube.com/results?search_query=tonkatsu+sauce+recipe+homemade" },
            { title: "Tonkatsu with Sauce", url: "https://www.youtube.com/results?search_query=tonkatsu+recipe+with+sauce" }
          ]
        },
        {
          id: "wasabi",
          name: "Wasabi",
          native: "山葵",
          pronunciation: "wah-sah-bee",
          quickDesc: "Pungent green paste that clears sinuses and enhances fish",
          whatIsIt: "A spicy paste from the wasabi root, related to horseradish. Real wasabi is rare and expensive; most tubes/packets are horseradish dyed green. The heat hits the nose rather than the tongue and fades quickly.",
          howToUse: [
            "Mix small amount into soy sauce for sushi/sashimi",
            "Place directly on fish (traditional method)",
            "Add to dressings and mayo for a kick",
            "Use sparingly in noodle dishes"
          ],
          pairsWith: ["Sashimi", "Sushi", "Soy sauce", "Soba noodles", "Beef"],
          storage: "Refrigerate tubes after opening. Fresh wasabi should be used immediately.",
          substitutes: "Prepared horseradish + mustard gives similar heat. Nothing replicates real wasabi.",
          proTip: "Real wasabi is grated on sharkskin (oroshi). If you find fresh wasabi root, grate only what you need, because it loses potency in minutes.",
          youtube: [
            { title: "Real vs Fake Wasabi", url: "https://www.youtube.com/results?search_query=real+vs+fake+wasabi+difference" },
            { title: "How to Use Wasabi Properly", url: "https://www.youtube.com/results?search_query=how+to+use+wasabi+sushi+properly" }
          ]
        },
        {
          id: "rice-vinegar-jp",
          name: "Japanese Rice Vinegar",
          native: "米酢",
          pronunciation: "koh-meh-zoo",
          quickDesc: "Mild, slightly sweet vinegar used to season sushi rice",
          whatIsIt: "A mild vinegar made from fermented rice, less acidic than Western vinegars. Essential for seasoning sushi rice. Comes unseasoned (pure) or seasoned (with sugar and salt added).",
          howToUse: [
            "Season sushi rice (mix with sugar and salt)",
            "Make sunomono (vinegared cucumber salad)",
            "Add to dressings and pickles",
            "Include in dipping sauces"
          ],
          pairsWith: ["Sugar", "Soy sauce", "Cucumber", "Seaweed", "Fish"],
          storage: "Room temperature indefinitely.",
          substitutes: "Apple cider vinegar diluted with water. White wine vinegar.",
          proTip: "For sushi rice, use unseasoned rice vinegar and add your own sugar/salt for control. Seasoned is convenient but often too sweet.",
          youtube: [
            { title: "Perfect Sushi Rice", url: "https://www.youtube.com/results?search_query=perfect+sushi+rice+vinegar" },
            { title: "Japanese Rice Vinegar Uses", url: "https://www.youtube.com/results?search_query=japanese+rice+vinegar+uses" }
          ]
        },
        {
          id: "mentsuyu",
          name: "Mentsuyu (Noodle Sauce)",
          native: "めんつゆ",
          pronunciation: "men-tsu-yoo",
          quickDesc: "Concentrated dashi-soy sauce base for noodles and more",
          whatIsIt: "A concentrated sauce of dashi, soy sauce, mirin and sugar. Dilute for noodle dipping sauce or use straight as seasoning. It's very versatile and a shortcut to many Japanese flavors.",
          howToUse: [
            "Dilute for soba and udon dipping sauce",
            "Use as soup base (dilute more)",
            "Season donburi and rice bowls",
            "Quick seasoning for simmered vegetables"
          ],
          pairsWith: ["Noodles", "Rice", "Vegetables", "Eggs", "Tempura"],
          storage: "Refrigerate after opening. Keeps for several months.",
          substitutes: "Mix dashi, soy sauce, mirin in 8:1:1 ratio. Not as complex but works.",
          proTip: "Keep a bottle on hand; it saves a lot of time. Dilution ratios vary by brand, so check the label.",
          youtube: [
            { title: "How to Use Mentsuyu", url: "https://www.youtube.com/results?search_query=how+to+use+mentsuyu+japanese+cooking" },
            { title: "Homemade Mentsuyu Recipe", url: "https://www.youtube.com/results?search_query=homemade+mentsuyu+recipe" }
          ]
        },
        {
          id: "japanese-mayo",
          name: "Japanese Mayonnaise",
          native: "マヨネーズ",
          pronunciation: "mah-yo-neh-zu",
          quickDesc: "Richer, tangier mayo made with egg yolks only",
          whatIsIt: "Creamier and more savory than Western mayo, made with only egg yolks (not whole eggs), rice vinegar and MSG. Kewpie brand is iconic. Used as condiment, topping and ingredient.",
          howToUse: [
            "Drizzle on okonomiyaki and takoyaki",
            "Top sushi rolls (spicy mayo = mayo + sriracha)",
            "Use in potato and pasta salads",
            "Spread on sandwiches and in onigiri"
          ],
          pairsWith: ["Soy sauce", "Rice", "Vegetables", "Seafood", "Bread"],
          storage: "Refrigerate after opening. Use within a few months.",
          substitutes: "Regular mayo + rice vinegar + pinch MSG gets close.",
          proTip: "The squeeze bottle's star-shaped tip is there on purpose: it makes that signature zigzag pattern.",
          youtube: [
            { title: "Kewpie Mayo Review", url: "https://www.youtube.com/results?search_query=kewpie+mayo+japanese+mayonnaise+review" },
            { title: "Recipes with Japanese Mayo", url: "https://www.youtube.com/results?search_query=japanese+mayo+recipes" }
          ]
        },
        {
          id: "yuzu-kosho",
          name: "Yuzu Kosho",
          native: "柚子胡椒",
          pronunciation: "yoo-zoo koh-shoh",
          quickDesc: "Citrusy chili paste that's spicy, salty and aromatic",
          whatIsIt: "A potent paste of yuzu citrus zest, chili peppers and salt. Comes in green (unripe yuzu, green chilies) or red (ripe yuzu, red chilies). Intensely aromatic and addictive.",
          howToUse: [
            "Add a tiny dab to soups and hot pots",
            "Mix into dipping sauces for meat and fish",
            "Stir into ramen or udon",
            "Use as condiment for grilled meats"
          ],
          pairsWith: ["Soups", "Grilled meat", "Fish", "Noodles", "Rice"],
          storage: "Refrigerate. Keeps for months.",
          substitutes: "Nothing stands in for the yuzu flavor. Lemon zest + chili flakes is a distant approximation.",
          proTip: "It's very strong, so start with a tiny amount. Much of its appeal is the citrus aroma, which you'll lose if you cook it too long.",
          youtube: [
            { title: "What is Yuzu Kosho", url: "https://www.youtube.com/results?search_query=what+is+yuzu+kosho+japanese" },
            { title: "How to Use Yuzu Kosho", url: "https://www.youtube.com/results?search_query=how+to+use+yuzu+kosho" }
          ]
        },
        {
          id: "ume-plum",
          name: "Umeboshi (Pickled Plum)",
          native: "梅干し",
          pronunciation: "oo-meh-boh-shee",
          quickDesc: "Intensely sour, salty pickled plums for rice and health",
          whatIsIt: "Japanese plums (ume) pickled with salt and often red shiso leaves, creating an intensely sour, salty condiment. Considered to aid digestion and prevent illness. A staple in bento boxes.",
          howToUse: [
            "Place in center of rice balls (onigiri)",
            "Chop into rice for umeboshi rice",
            "Make into paste for dressings and sauces",
            "Eat alongside rice as a palate cleanser"
          ],
          pairsWith: ["Rice", "Shiso", "Fish", "Green tea", "Noodles"],
          storage: "Refrigerate after opening. Keeps for a very long time due to salt content.",
          substitutes: "No real substitute for the flavor. Sour cherries + salt is very different but sometimes used.",
          proTip: "Keep the liquid (ume vinegar) to use as a seasoning or in dressings. Some are very salty; others are sweetened.",
          youtube: [
            { title: "Umeboshi Rice Ball", url: "https://www.youtube.com/results?search_query=umeboshi+onigiri+recipe" },
            { title: "How to Eat Umeboshi", url: "https://www.youtube.com/results?search_query=how+to+eat+umeboshi" }
          ]
        }
      ],
      "Noodles & Rice": [
        {
          id: "soba",
          name: "Soba Noodles",
          native: "蕎麦",
          pronunciation: "soh-bah",
          quickDesc: "Nutty buckwheat noodles served hot or cold",
          whatIsIt: "Thin noodles made from buckwheat flour, sometimes mixed with wheat. They have an earthy, nutty flavor and slightly grainy texture. Can be served chilled with dipping sauce or in hot broth.",
          howToUse: [
            "Boil until just tender, then rinse thoroughly in cold water",
            "Serve cold (zaru soba) with tsuyu dipping sauce",
            "Add to hot dashi broth with toppings",
            "Stir-fry with vegetables (yakisoba style)"
          ],
          pairsWith: ["Tsuyu/mentsuyu", "Nori", "Green onions", "Wasabi", "Tempura"],
          storage: "Dried: pantry for months. Fresh/frozen: follow package directions.",
          substitutes: "Whole wheat spaghetti has similar earthiness but different texture.",
          proTip: "For cold soba, shocking in ice water after cooking gives the best texture. Serve on a bamboo mat to drain.",
          youtube: [
            { title: "Just One Cookbook: Cold Soba Noodles", url: "https://www.youtube.com/results?search_query=just+one+cookbook+zaru+soba" },
            { title: "How to Make Soba Noodle Soup", url: "https://www.youtube.com/results?search_query=soba+noodle+soup+recipe+japanese" }
          ]
        },
        {
          id: "udon",
          name: "Udon Noodles",
          native: "うどん",
          pronunciation: "oo-dohn",
          quickDesc: "Thick, chewy wheat noodles for soups and stir-fries",
          whatIsIt: "Fat, chewy noodles made from wheat flour, salt and water. They come fresh, frozen or dried, with frozen being the most convenient and often the best quality. Their neutral flavor makes them versatile.",
          howToUse: [
            "Simmer in dashi-based broth with toppings",
            "Stir-fry with protein and vegetables (yaki udon)",
            "Serve cold with dipping sauce in summer",
            "Add to hot pots (nabemono)"
          ],
          pairsWith: ["Dashi broth", "Tempura", "Soft egg", "Kamaboko", "Green onions"],
          storage: "Frozen: up to 3 months. Fresh: use within a few days. Dried: months in pantry.",
          substitutes: "Nothing matches their chewiness exactly. Fresh fettuccine is a distant option.",
          proTip: "Frozen udon is often better than dried because it stays chewy. Cook it straight from frozen in boiling water.",
          youtube: [
            { title: "Just One Cookbook: Udon Noodle Soup", url: "https://www.youtube.com/results?search_query=just+one+cookbook+udon+noodle+soup" },
            { title: "Yaki Udon (Stir Fried Udon)", url: "https://www.youtube.com/results?search_query=yaki+udon+stir+fried+noodles+recipe" }
          ]
        },
        {
          id: "ramen-noodles",
          name: "Ramen Noodles",
          native: "ラーメン",
          pronunciation: "rah-men",
          quickDesc: "Alkaline wheat noodles with springy, chewy texture",
          whatIsIt: "Wheat noodles made with kansui (alkaline mineral water) giving them their distinctive yellow color, springy texture and slightly eggy flavor. Come in various thicknesses for different ramen styles.",
          howToUse: [
            "Cook in boiling water until just done (usually 1-3 minutes)",
            "Add to ramen broth with toppings",
            "Use in dry-style ramen (mazemen)",
            "Don't overcook them; they should have a slight chew"
          ],
          pairsWith: ["Rich broth", "Chashu pork", "Soft egg", "Nori", "Green onions"],
          storage: "Fresh: refrigerate 3-5 days. Dried: pantry for months. Frozen: several months.",
          substitutes: "Sun Noodle brand is excellent if available. Dried ramen noodles work but fresh is better.",
          proTip: "Time the noodles carefully, since they keep cooking in hot broth. Aim for slightly underdone when they go into the bowl.",
          youtube: [
            { title: "How to Make Ramen at Home", url: "https://www.youtube.com/results?search_query=how+to+make+ramen+at+home" },
            { title: "Fresh Ramen Noodles", url: "https://www.youtube.com/results?search_query=fresh+ramen+noodles+recipe" }
          ]
        },
        {
          id: "somen",
          name: "Somen Noodles",
          native: "素麺",
          pronunciation: "soh-men",
          quickDesc: "Delicate, thin wheat noodles served ice-cold in summer",
          whatIsIt: "Very thin wheat noodles, typically served cold with dipping sauce in hot weather. They cook in just 1-2 minutes. A refreshing summer staple in Japan.",
          howToUse: [
            "Boil briefly (1-2 minutes), then rinse in ice water",
            "Serve cold in ice water with mentsuyu dipping sauce",
            "Add ginger, green onions and sesame as garnish",
            "Can be served hot in soup in winter"
          ],
          pairsWith: ["Mentsuyu", "Ginger", "Green onions", "Shiso", "Myoga"],
          storage: "Dried: pantry for months.",
          substitutes: "Angel hair pasta is similar thickness but different flavor.",
          proTip: "Traditionally served nagashi somen style, flowing down a bamboo chute with cold water. It's fun for parties.",
          youtube: [
            { title: "Cold Somen Noodles", url: "https://www.youtube.com/results?search_query=cold+somen+noodles+recipe" },
            { title: "Nagashi Somen Experience", url: "https://www.youtube.com/results?search_query=nagashi+somen+flowing+noodles" }
          ]
        },
        {
          id: "sushi-rice",
          name: "Sushi Rice (Japonica)",
          native: "すし飯",
          pronunciation: "soo-shee meh-shee",
          quickDesc: "Short-grain sticky rice for sushi and everyday meals",
          whatIsIt: "Short-grain japonica rice that becomes sticky when cooked. For sushi, it's seasoned with rice vinegar, sugar and salt. Brands like Koshihikari are premium; Calrose is a good everyday option.",
          howToUse: [
            "Wash until the water runs clear (don't skip this)",
            "Season with sushi vinegar for sushi",
            "Serve plain with Japanese meals",
            "Make onigiri and donburi"
          ],
          pairsWith: ["Rice vinegar", "Nori", "Fish", "Any Japanese dish"],
          storage: "Uncooked: airtight container for months. Cooked: use same day for sushi, refrigerate for other uses.",
          substitutes: "Calrose rice is widely available. Arborio works in a pinch but is starchier.",
          proTip: "Let rice rest 10 minutes after cooking before seasoning. Fan while mixing in vinegar to cool and create shine.",
          youtube: [
            { title: "Perfect Sushi Rice", url: "https://www.youtube.com/results?search_query=perfect+sushi+rice+recipe" },
            { title: "How to Season Sushi Rice", url: "https://www.youtube.com/results?search_query=how+to+season+sushi+rice" }
          ]
        },
        {
          id: "shirataki",
          name: "Shirataki Noodles",
          native: "白滝",
          pronunciation: "shee-rah-tah-kee",
          quickDesc: "Low-calorie konjac noodles with unique chewy texture",
          whatIsIt: "Translucent, gelatinous noodles made from konjac yam. Nearly zero calories and carbs. They have a unique chewy texture and absorb flavors from sauces and broths.",
          howToUse: [
            "Rinse and boil briefly to remove odor",
            "Add to sukiyaki and hot pot",
            "Use as low-carb noodle substitute",
            "Dry-fry to remove excess moisture before saucing"
          ],
          pairsWith: ["Sukiyaki broth", "Soy sauce", "Vegetables", "Meat"],
          storage: "Refrigerate in liquid. Keeps for months unopened.",
          substitutes: "No real substitute for the texture. Glass noodles are different but work in some dishes.",
          proTip: "The key to good shirataki is preparation: rinse well, boil 2-3 minutes, then dry-fry to remove water before adding to your dish.",
          youtube: [
            { title: "How to Prepare Shirataki", url: "https://www.youtube.com/results?search_query=how+to+prepare+shirataki+noodles" },
            { title: "Shirataki in Sukiyaki", url: "https://www.youtube.com/results?search_query=shirataki+noodles+sukiyaki" }
          ]
        },
        {
          id: "mochi-rice",
          name: "Mochi Rice (Sweet Rice)",
          native: "もち米",
          pronunciation: "moh-chee go-meh",
          quickDesc: "Glutinous rice for mochi, sekihan and sticky dishes",
          whatIsIt: "Short-grain glutinous rice (despite the name, it's gluten-free) that becomes very sticky when cooked. Used for mochi (pounded rice cakes), sekihan (red bean rice) and other special dishes.",
          howToUse: [
            "Soak several hours before steaming",
            "Steam (don't boil) for best results",
            "Pound into mochi with mortar and pestle",
            "Mix with regular rice for sekihan"
          ],
          pairsWith: ["Red beans", "Soy sauce", "Kinako powder", "Sugar"],
          storage: "Airtight container in cool, dry place.",
          substitutes: "Regular sushi rice won't achieve the same stickiness.",
          proTip: "Soaking overnight gives the best texture. For mochi, the rice needs to be pounded while still hot.",
          youtube: [
            { title: "How to Make Mochi", url: "https://www.youtube.com/results?search_query=how+to+make+mochi+from+scratch" },
            { title: "Sekihan Recipe", url: "https://www.youtube.com/results?search_query=sekihan+japanese+red+bean+rice" }
          ]
        }
      ],
      "Produce": [
        {
          id: "shiso",
          name: "Shiso (Perilla)",
          native: "紫蘇",
          pronunciation: "shee-soh",
          quickDesc: "Aromatic herb with mint-basil flavor for sushi and garnish",
          whatIsIt: "A fragrant herb with serrated leaves, related to mint. Green shiso (ooba) is most common; red shiso is used for umeboshi and coloring. Has a unique flavor between mint, basil and citrus.",
          howToUse: [
            "Wrap around sushi or place under sashimi",
            "Slice thin and add to salads and rice",
            "Use as wrapper for grilled meat",
            "Fry as tempura"
          ],
          pairsWith: ["Sashimi", "Rice", "Ume", "Noodles", "Tofu"],
          storage: "Wrap in damp paper towel, refrigerate. Use within a week.",
          substitutes: "No real substitute. Mint + basil together gives a hint of the flavor.",
          proTip: "The red variety (akajiso) is used to make umeboshi and to color pickled ginger.",
          youtube: [
            { title: "How to Use Shiso", url: "https://www.youtube.com/results?search_query=how+to+use+shiso+japanese+cooking" },
            { title: "Shiso Tempura Recipe", url: "https://www.youtube.com/results?search_query=shiso+tempura+recipe" }
          ]
        },
        {
          id: "daikon-jp",
          name: "Daikon (Japanese Radish)",
          native: "大根",
          pronunciation: "dye-kon",
          quickDesc: "Versatile giant radish for grating, simmering and pickling",
          whatIsIt: "A large white radish that's milder than red radishes. It shows up in many Japanese dishes: grated as a condiment, simmered in oden, pickled as takuan. Different parts of the radish suit different uses.",
          howToUse: [
            "Grate as condiment (oroshi) for tempura and fish",
            "Simmer in oden and nimono",
            "Pickle for takuan",
            "Add to miso soup and hot pot"
          ],
          pairsWith: ["Soy sauce", "Ponzu", "Fish", "Meat", "Miso"],
          storage: "Refrigerate whole for 2+ weeks. Grated should be used immediately.",
          substitutes: "Korean radish (mu) is similar. Turnip in some cooked applications.",
          proTip: "The top (near leaves) is sweeter and better for salads; the bottom is more pungent and better for cooking or grating.",
          youtube: [
            { title: "Japanese Daikon Dishes", url: "https://www.youtube.com/results?search_query=japanese+daikon+recipes" },
            { title: "How to Grate Daikon", url: "https://www.youtube.com/results?search_query=how+to+grate+daikon+oroshi" }
          ]
        },
        {
          id: "naga-negi",
          name: "Negi (Japanese Leek)",
          native: "長ネギ",
          pronunciation: "neh-gee",
          quickDesc: "Long white leek used in soups, hot pots and as garnish",
          whatIsIt: "A long, white-stemmed allium somewhere between a leek and a green onion. The white part is mild when cooked; the green part is used for garnish. It's common in Japanese cooking.",
          howToUse: [
            "Slice thin for garnish on soups and donburi",
            "Grill whole and serve with yakitori",
            "Add to hot pot and sukiyaki",
            "Include in savory egg custards (chawanmushi)"
          ],
          pairsWith: ["Miso soup", "Ramen", "Grilled meat", "Tofu", "Fish"],
          storage: "Refrigerate for 1-2 weeks.",
          substitutes: "Green onions (use more). Leeks (thicker and milder).",
          proTip: "For ramen, slice very thin on a diagonal for elegant presentation. Soak in cold water to remove sharp bite.",
          youtube: [
            { title: "Japanese Green Onion Uses", url: "https://www.youtube.com/results?search_query=negi+japanese+green+onion+uses" },
            { title: "Grilled Negi Yakitori", url: "https://www.youtube.com/results?search_query=grilled+negi+yakitori" }
          ]
        },
        {
          id: "enoki",
          name: "Enoki Mushrooms",
          native: "えのき茸",
          pronunciation: "eh-no-kee",
          quickDesc: "Delicate, long-stemmed mushrooms for soups and hot pot",
          whatIsIt: "Clusters of long, thin white mushrooms with tiny caps. They have a mild, slightly fruity flavor and delicate texture. Must be trimmed at the base before use.",
          howToUse: [
            "Add to hot pot and nabemono",
            "Include in miso soup",
            "Wrap in bacon and grill",
            "Add to stir-fries at the last minute"
          ],
          pairsWith: ["Soy sauce", "Butter", "Bacon", "Miso", "Hot pot broth"],
          storage: "Refrigerate in original packaging. Use within a week.",
          substitutes: "No exact substitute. Bean sprouts provide similar texture in some dishes.",
          proTip: "Cut off the bottom spongy part where they're connected. Separate gently into smaller clumps.",
          youtube: [
            { title: "Enoki Mushroom Recipes", url: "https://www.youtube.com/results?search_query=enoki+mushroom+recipes+japanese" },
            { title: "Bacon Wrapped Enoki", url: "https://www.youtube.com/results?search_query=bacon+wrapped+enoki+mushrooms" }
          ]
        },
        {
          id: "shiitake-fresh",
          name: "Fresh Shiitake Mushrooms",
          native: "椎茸",
          pronunciation: "shee-tah-keh",
          quickDesc: "Meaty, savory mushrooms for grilling and simmering",
          whatIsIt: "Brown mushrooms with thick caps and a meaty, savory flavor. One of the most popular mushrooms in Japanese cuisine. Fresh shiitake are milder than dried; both are widely used.",
          howToUse: [
            "Grill whole or slice for stir-fries",
            "Simmer in nimono and soup",
            "Add to sukiyaki and hot pot",
            "Score caps decoratively for presentation"
          ],
          pairsWith: ["Soy sauce", "Mirin", "Butter", "Vegetables", "Rice"],
          storage: "Refrigerate in paper bag. Use within a week.",
          substitutes: "Dried shiitake (rehydrate first) have more intense flavor. Cremini mushrooms work in some dishes.",
          proTip: "Remove the stems, which are too tough to eat, and save them for vegetable stock.",
          youtube: [
            { title: "Grilled Shiitake Recipe", url: "https://www.youtube.com/results?search_query=grilled+shiitake+mushrooms+japanese" },
            { title: "Shiitake in Japanese Cooking", url: "https://www.youtube.com/results?search_query=shiitake+japanese+cooking+recipes" }
          ]
        },
        {
          id: "shimeji",
          name: "Shimeji Mushrooms",
          native: "しめじ",
          pronunciation: "shee-meh-jee",
          quickDesc: "Clustered mushrooms with firm texture and nutty flavor",
          whatIsIt: "Small mushrooms that grow in clusters with firm, crunchy texture. Buna-shimeji (brown) and bunapi (white) are common. They have a slightly bitter taste when raw that sweetens when cooked.",
          howToUse: [
            "Sauté whole clusters in butter",
            "Add to pasta and rice dishes",
            "Include in hot pot and soups",
            "Must be cooked; never eat raw"
          ],
          pairsWith: ["Butter", "Soy sauce", "Garlic", "Pasta", "Rice"],
          storage: "Refrigerate. Use within a week.",
          substitutes: "Enoki or oyster mushrooms, though texture differs.",
          proTip: "Keep them in clusters when cooking for visual appeal. The firm texture holds up well to heat.",
          youtube: [
            { title: "Shimeji Mushroom Recipes", url: "https://www.youtube.com/results?search_query=shimeji+mushroom+recipes" },
            { title: "Garlic Butter Shimeji", url: "https://www.youtube.com/results?search_query=garlic+butter+shimeji+mushrooms" }
          ]
        },
        {
          id: "myoga",
          name: "Myoga (Japanese Ginger)",
          native: "茗荷",
          pronunciation: "myoh-gah",
          quickDesc: "Aromatic ginger buds for garnish and pickles",
          whatIsIt: "The flower buds of a plant related to ginger, with a mild, refreshing ginger-like flavor. Used as a garnish and in pickles. A distinctive summer ingredient in Japan.",
          howToUse: [
            "Slice thin as garnish for cold noodles",
            "Pickle in sweet vinegar",
            "Add to miso soup",
            "Mix into salads"
          ],
          pairsWith: ["Somen", "Tofu", "Miso soup", "Sashimi"],
          storage: "Refrigerate wrapped. Use within a week.",
          substitutes: "Very young ginger (gari) has some similarities but different flavor.",
          proTip: "Soak sliced myoga in cold water for 5 minutes to remove any bitterness and crisp it up.",
          youtube: [
            { title: "What is Myoga", url: "https://www.youtube.com/results?search_query=myoga+japanese+ginger+how+to+use" },
            { title: "Myoga in Japanese Cooking", url: "https://www.youtube.com/results?search_query=myoga+recipes+japanese" }
          ]
        },
        {
          id: "edamame",
          name: "Edamame",
          native: "枝豆",
          pronunciation: "eh-dah-mah-meh",
          quickDesc: "Young soybeans in the pod for snacking and salads",
          whatIsIt: "Immature soybeans still in their fuzzy pods. They're boiled and salted, then eaten by squeezing beans from pods. A classic Japanese bar snack and healthy appetizer.",
          howToUse: [
            "Boil in salted water, then salt generously",
            "Eat pods with hands, squeezing beans into mouth",
            "Shell and add to salads and rice",
            "Blend into dips"
          ],
          pairsWith: ["Salt", "Beer", "Sake", "Rice", "Salads"],
          storage: "Frozen keeps for months. Fresh: refrigerate and use within a few days.",
          substitutes: "No real substitute for the flavor and ritual of eating them.",
          proTip: "Salt the pods generously right after boiling, while they're still wet, so the salt sticks. Frozen edamame are excellent quality.",
          youtube: [
            { title: "How to Cook Edamame", url: "https://www.youtube.com/results?search_query=how+to+cook+edamame+perfectly" },
            { title: "Edamame Recipes", url: "https://www.youtube.com/results?search_query=edamame+recipes+japanese" }
          ]
        },
        {
          id: "gobo",
          name: "Gobo (Burdock Root)",
          native: "牛蒡",
          pronunciation: "goh-boh",
          quickDesc: "Earthy, fibrous root for kinpira and simmered dishes",
          whatIsIt: "A long, thin root vegetable with earthy, slightly sweet flavor. Has a satisfying crunch when properly prepared. High in fiber and considered healthy in Japanese cuisine.",
          howToUse: [
            "Slice thin for kinpira (sautéed burdock)",
            "Add to nimono (simmered dishes)",
            "Include in mixed rice (takikomi gohan)",
            "Use in soup and hot pot"
          ],
          pairsWith: ["Carrot", "Soy sauce", "Sesame", "Rice", "Miso"],
          storage: "Refrigerate wrapped in newspaper. Keeps for weeks.",
          substitutes: "Salsify is closest. Parsnip has different flavor but similar texture.",
          proTip: "Scrub rather than peel, since the skin has flavor. Soak cut pieces in water to prevent browning.",
          youtube: [
            { title: "Kinpira Gobo Recipe", url: "https://www.youtube.com/results?search_query=kinpira+gobo+recipe+japanese" },
            { title: "How to Prepare Gobo", url: "https://www.youtube.com/results?search_query=how+to+prepare+gobo+burdock+root" }
          ]
        },
        {
          id: "renkon",
          name: "Renkon (Lotus Root)",
          native: "蓮根",
          pronunciation: "ren-kon",
          quickDesc: "Decorative crunchy root with beautiful hole pattern",
          whatIsIt: "The underwater stem of the lotus plant, with a distinctive hole pattern when sliced. Crisp texture that remains even when cooked. Both beautiful and delicious.",
          howToUse: [
            "Slice and add to nimono and chirashi",
            "Make into chips (renkon chips)",
            "Include in kinpira",
            "Stuff the holes for appetizers"
          ],
          pairsWith: ["Soy sauce", "Vinegar", "Sesame", "Miso", "Ground meat"],
          storage: "Refrigerate uncut. Once cut, submerge in water with vinegar.",
          substitutes: "Jicama has similar crunch but lacks the holes. Water chestnuts in some dishes.",
          proTip: "Soak in vinegar water to keep it white and extra crisp. The hole pattern makes it symbolically auspicious (you can see through to the future).",
          youtube: [
            { title: "Japanese Lotus Root Dishes", url: "https://www.youtube.com/results?search_query=japanese+lotus+root+recipes+renkon" },
            { title: "Renkon Chips Recipe", url: "https://www.youtube.com/results?search_query=renkon+chips+recipe" }
          ]
        }
      ],
      "Proteins & Seafood": [
        {
          id: "tofu-jp",
          name: "Japanese Tofu",
          native: "豆腐",
          pronunciation: "toh-foo",
          quickDesc: "Silky, delicate tofu for miso soup and cold dishes",
          whatIsIt: "Japanese tofu (especially silken varieties) tends to be more delicate than Chinese tofu. Kinugoshi (silken) is custard-like; momen (cotton) is firmer. Both are used extensively.",
          howToUse: [
            "Add silken tofu to miso soup",
            "Serve cold (hiyayakko) with toppings",
            "Use in agedashi dofu (fried in broth)",
            "Include in hot pot and sukiyaki"
          ],
          pairsWith: ["Soy sauce", "Ginger", "Bonito flakes", "Green onions", "Dashi"],
          storage: "Keep in water in refrigerator. Change water daily.",
          substitutes: "Different tofu types can often substitute for each other.",
          proTip: "For hiyayakko, use the best silken tofu you can find, since it's the main ingredient. Drain it slightly before topping.",
          youtube: [
            { title: "Agedashi Tofu Recipe", url: "https://www.youtube.com/results?search_query=agedashi+tofu+recipe+japanese" },
            { title: "Hiyayakko Cold Tofu", url: "https://www.youtube.com/results?search_query=hiyayakko+cold+tofu+recipe" }
          ]
        },
        {
          id: "kamaboko",
          name: "Kamaboko (Fish Cake)",
          native: "蒲鉾",
          pronunciation: "kah-mah-boh-koh",
          quickDesc: "Bouncy, steamed fish cake with pink swirl",
          whatIsIt: "A processed fish product made from pureed white fish formed into a loaf on a wooden board. Has a distinctive bouncy texture. The classic has a pink outer edge and white interior.",
          howToUse: [
            "Slice and add to udon and ramen",
            "Include in osechi (New Year's) dishes",
            "Add to chirashi and bento",
            "Eat as a snack with wasabi and soy sauce"
          ],
          pairsWith: ["Noodles", "Soy sauce", "Wasabi", "Rice"],
          storage: "Refrigerate. Use within a week of opening.",
          substitutes: "Surimi or imitation crab has similar texture but different flavor.",
          proTip: "Narutomaki (the swirly fish cake in ramen) is a type of kamaboko named after the Naruto whirlpools.",
          youtube: [
            { title: "What is Kamaboko", url: "https://www.youtube.com/results?search_query=kamaboko+fish+cake+japanese" },
            { title: "Kamaboko in Japanese Dishes", url: "https://www.youtube.com/results?search_query=kamaboko+recipes+japanese" }
          ]
        },
        {
          id: "aburaage",
          name: "Aburaage (Fried Tofu Pouches)",
          native: "油揚げ",
          pronunciation: "ah-boo-rah-ah-geh",
          quickDesc: "Thin fried tofu pockets for inari sushi and udon",
          whatIsIt: "Thin slices of tofu deep-fried until golden and slightly puffy. They can be opened into pockets and stuffed. When simmered in sweet soy mixture, they become inari sushi pouches.",
          howToUse: [
            "Simmer in sweet soy sauce for inari sushi",
            "Slice and add to miso soup and udon",
            "Stuff with sushi rice",
            "Use in nimono and takikomi gohan"
          ],
          pairsWith: ["Sushi rice", "Miso soup", "Udon", "Soy sauce", "Sugar"],
          storage: "Refrigerate or freeze. Keeps longer frozen.",
          substitutes: "No real substitute for the texture and purpose.",
          proTip: "Pour boiling water over aburaage before using to remove excess oil (abura nuki). This also helps it absorb flavors.",
          youtube: [
            { title: "Inari Sushi Recipe", url: "https://www.youtube.com/results?search_query=inari+sushi+recipe+aburaage" },
            { title: "How to Prepare Aburaage", url: "https://www.youtube.com/results?search_query=how+to+prepare+aburaage" }
          ]
        },
        {
          id: "natto",
          name: "Natto",
          native: "納豆",
          pronunciation: "nah-toh",
          quickDesc: "Fermented soybeans with strong flavor and stringy texture",
          whatIsIt: "Soybeans fermented with Bacillus subtilis bacteria, creating a sticky, stringy texture and pungent smell. An acquired taste that's highly nutritious. A traditional breakfast food in Japan.",
          howToUse: [
            "Stir vigorously with included sauce and mustard",
            "Serve over hot rice",
            "Add to maki rolls (natto maki)",
            "Mix into pasta (natto pasta)"
          ],
          pairsWith: ["Hot rice", "Soy sauce", "Mustard", "Green onions", "Egg"],
          storage: "Refrigerate. Check expiration date.",
          substitutes: "Nothing else has the same flavor and texture.",
          proTip: "Stir 100 times or more to develop the strings and mellow the flavor. The more you stir, the better it tastes. Add raw egg for extra richness.",
          youtube: [
            { title: "How to Eat Natto", url: "https://www.youtube.com/results?search_query=how+to+eat+natto+properly" },
            { title: "Natto Recipes for Beginners", url: "https://www.youtube.com/results?search_query=natto+recipes+beginners" }
          ]
        }
      ],
      "Pantry Staples": [
        {
          id: "dashi",
          name: "Dashi (Stock)",
          native: "出汁",
          pronunciation: "dah-shee",
          quickDesc: "Umami-rich stock behind much of Japanese cooking",
          whatIsIt: "A light stock made from kombu (kelp) and katsuobushi (dried bonito flakes). It's the base for miso soup, noodle broths and simmered dishes. Instant dashi powder (hondashi) is a convenient shortcut.",
          howToUse: [
            "Use as the base for miso soup and clear soups",
            "Cook rice in dashi for extra flavor",
            "Simmer vegetables in dashi with soy sauce and mirin",
            "Combine with soy sauce and mirin for noodle dipping sauce (tsuyu)"
          ],
          pairsWith: ["Miso", "Soy sauce", "Mirin", "Tofu", "Vegetables"],
          storage: "Homemade: refrigerate 3-5 days or freeze. Powder: pantry for months.",
          substitutes: "Vegetarian: kombu + dried shiitake. Light chicken broth in a pinch (but different flavor).",
          proTip: "For homemade: don't boil the kombu (gets slimy) or steep bonito too long (gets bitter). 5 minutes steeping is enough.",
          youtube: [
            { title: "Just One Cookbook: How to Make Dashi", url: "https://www.youtube.com/results?search_query=just+one+cookbook+how+to+make+dashi" },
            { title: "3 Ways to Make Dashi Stock", url: "https://www.youtube.com/results?search_query=3+ways+to+make+dashi+stock" }
          ]
        },
        {
          id: "kombu",
          name: "Kombu (Dried Kelp)",
          native: "昆布",
          pronunciation: "kohm-boo",
          quickDesc: "Umami-rich dried seaweed for stock and simmering",
          whatIsIt: "Large dried kelp that's one of the key ingredients in dashi. It's also cooked as a vegetable. The white powder on the surface is natural glutamate (umami), so don't wash it off.",
          howToUse: [
            "Steep in water for kombu dashi",
            "Add to pot when cooking beans and grains",
            "Simmer as a vegetable in nimono",
            "Make tsukudani (simmered in soy sauce)"
          ],
          pairsWith: ["Bonito flakes", "Soy sauce", "Beans", "Rice"],
          storage: "Keep in airtight container in cool, dry place. Lasts indefinitely.",
          substitutes: "No real substitute for the umami. MSG provides the glutamate but not the flavor complexity.",
          proTip: "Don't boil kombu: take it out just before the water boils. Boiling makes it slimy and bitter.",
          youtube: [
            { title: "How to Use Kombu", url: "https://www.youtube.com/results?search_query=how+to+use+kombu+japanese+cooking" },
            { title: "Kombu Dashi Recipe", url: "https://www.youtube.com/results?search_query=kombu+dashi+recipe" }
          ]
        },
        {
          id: "katsuobushi",
          name: "Katsuobushi (Bonito Flakes)",
          native: "鰹節",
          pronunciation: "kah-tsoo-oh-boo-shee",
          quickDesc: "Dried, shaved fish flakes for dashi and toppings",
          whatIsIt: "Skipjack tuna that's been smoked, dried, fermented and shaved into thin flakes. One of the hardest foods in the world before shaving. A main ingredient in dashi, it's also used as a topping.",
          howToUse: [
            "Steep in hot water with kombu for dashi",
            "Sprinkle on okonomiyaki and takoyaki",
            "Top tofu, rice and vegetables",
            "Make furikake and onigiri fillings"
          ],
          pairsWith: ["Kombu", "Soy sauce", "Rice", "Vegetables", "Tofu"],
          storage: "Airtight container away from moisture. Use within a few months once opened.",
          substitutes: "Nothing replicates the smoky, savory flavor. Skip if unavailable.",
          proTip: "Steam makes the flakes 'dance' on hot food. That's considered appealing and shows the dish is fresh.",
          youtube: [
            { title: "How to Use Bonito Flakes", url: "https://www.youtube.com/results?search_query=how+to+use+bonito+flakes+katsuobushi" },
            { title: "Making Dashi with Bonito", url: "https://www.youtube.com/results?search_query=making+dashi+bonito+flakes" }
          ]
        },
        {
          id: "nori",
          name: "Nori (Seaweed Sheets)",
          native: "海苔",
          pronunciation: "noh-ree",
          quickDesc: "Crispy seaweed sheets for sushi and rice balls",
          whatIsIt: "Paper-thin sheets of dried, pressed seaweed. Used to wrap sushi rolls and rice balls, or crumbled as a topping. Good nori should be dark, shiny and crisp.",
          howToUse: [
            "Wrap around sushi rolls (maki) and hand rolls (temaki)",
            "Wrap around rice balls (onigiri)",
            "Crumble over rice, noodles and salads",
            "Cut into strips for garnishing soups"
          ],
          pairsWith: ["Sushi rice", "Fish", "Sesame seeds", "Soy sauce", "Wasabi"],
          storage: "Keep in airtight container with desiccant packet. Humidity makes it chewy.",
          substitutes: "No real substitute for wrapping.",
          proTip: "To revive stale nori, toast it briefly over a flame or in a hot pan until it's crispy again.",
          youtube: [
            { title: "How to Make Onigiri", url: "https://www.youtube.com/results?search_query=how+to+make+onigiri+rice+balls" },
            { title: "Sushi Roll Tutorial", url: "https://www.youtube.com/results?search_query=sushi+roll+tutorial+beginners+nori" }
          ]
        },
        {
          id: "wakame",
          name: "Wakame Seaweed",
          native: "若布",
          pronunciation: "wah-kah-meh",
          quickDesc: "Tender seaweed for miso soup and salads",
          whatIsIt: "A tender, slightly sweet seaweed sold dried or salted. It rehydrates quickly and is used in soups and salads. Much softer than kombu.",
          howToUse: [
            "Add to miso soup",
            "Rehydrate for seaweed salad",
            "Include in sunomono",
            "Add to noodle soups"
          ],
          pairsWith: ["Miso", "Tofu", "Cucumber", "Sesame", "Rice vinegar"],
          storage: "Dried: pantry for months. Salted: refrigerate.",
          substitutes: "Other seaweeds like hijiki, though texture differs.",
          proTip: "It expands a lot when rehydrated, so use less than you think you need. Cut it into smaller pieces before adding to soup.",
          youtube: [
            { title: "Japanese Seaweed Salad", url: "https://www.youtube.com/results?search_query=wakame+seaweed+salad+recipe" },
            { title: "Miso Soup with Wakame", url: "https://www.youtube.com/results?search_query=miso+soup+wakame+recipe" }
          ]
        },
        {
          id: "panko",
          name: "Panko Breadcrumbs",
          native: "パン粉",
          pronunciation: "pahn-koh",
          quickDesc: "Light, flaky breadcrumbs for extra-crunchy coating",
          whatIsIt: "Japanese-style breadcrumbs made from crustless white bread. The flakes are larger and lighter than Western breadcrumbs, which makes a very crispy, airy coating.",
          howToUse: [
            "Coat proteins for deep-frying (tonkatsu, chicken katsu)",
            "Use for oven-baked 'fried' dishes",
            "Top casseroles and gratins",
            "Mix into meatballs for lighter texture"
          ],
          pairsWith: ["Pork cutlet", "Shrimp", "Chicken", "Tonkatsu sauce", "Cabbage"],
          storage: "Airtight container in pantry. Keeps for months.",
          substitutes: "Regular breadcrumbs work but are less crunchy.",
          proTip: "For extra crunch, don't pack the panko. Press gently so the flakes stay fluffy.",
          youtube: [
            { title: "Crispy Tonkatsu Recipe", url: "https://www.youtube.com/results?search_query=tonkatsu+pork+cutlet+recipe+crispy" },
            { title: "Chicken Katsu Recipe", url: "https://www.youtube.com/results?search_query=chicken+katsu+recipe+panko" }
          ]
        },
        {
          id: "furikake",
          name: "Furikake (Rice Seasoning)",
          native: "ふりかけ",
          pronunciation: "foo-ree-kah-keh",
          quickDesc: "Dry seasoning blend to sprinkle over rice",
          whatIsIt: "A dry seasoning mix typically containing sesame seeds, dried fish, seaweed and other flavorings. Dozens of varieties exist, from simple seaweed to salmon, egg and wasabi flavors.",
          howToUse: [
            "Sprinkle generously over hot rice",
            "Mix into onigiri rice",
            "Season popcorn and snacks",
            "Sprinkle on noodles and salads"
          ],
          pairsWith: ["Rice", "Onigiri", "Tofu", "Eggs", "Noodles"],
          storage: "Airtight container in pantry. Keep dry.",
          substitutes: "Make your own with sesame, crumbled nori and salt.",
          proTip: "Noritama (seaweed and egg) and salmon furikake are the classics. Try different flavors to find your favorite.",
          youtube: [
            { title: "Homemade Furikake", url: "https://www.youtube.com/results?search_query=homemade+furikake+recipe" },
            { title: "Furikake Rice Recipes", url: "https://www.youtube.com/results?search_query=furikake+rice+recipes+japanese" }
          ]
        },
        {
          id: "japanese-curry",
          name: "Japanese Curry Roux",
          native: "カレールー",
          pronunciation: "kah-reh roo",
          quickDesc: "Solid curry blocks for rich, mild Japanese curry",
          whatIsIt: "Pre-made curry blocks combining curry powder, flour, oil and seasonings. Japanese curry is milder and sweeter than Indian curry. Golden Curry and Vermont Curry are popular brands.",
          howToUse: [
            "Simmer meat and vegetables in water",
            "Add curry blocks and stir until dissolved",
            "Serve over rice with pickles",
            "Use for curry udon and curry bread"
          ],
          pairsWith: ["Rice", "Potatoes", "Carrots", "Pork", "Chicken"],
          storage: "Pantry until opened. Wrap well after opening.",
          substitutes: "Make from scratch with curry powder, flour and butter (but blocks are convenient).",
          proTip: "Mix two different brands or heat levels for more complex flavor. Curry is better the next day, so let it sit overnight.",
          youtube: [
            { title: "Japanese Curry Rice", url: "https://www.youtube.com/results?search_query=japanese+curry+rice+recipe" },
            { title: "Best Japanese Curry", url: "https://www.youtube.com/results?search_query=best+japanese+curry+recipe" }
          ]
        },
        {
          id: "pickled-ginger",
          name: "Pickled Ginger (Gari)",
          native: "ガリ",
          pronunciation: "gah-ree",
          quickDesc: "Pink pickled ginger slices to cleanse the palate",
          whatIsIt: "Young ginger pickled in sweet vinegar. Naturally pale pink (or dyed) and served with sushi to cleanse the palate between different fish. Has a mild, slightly sweet ginger flavor.",
          howToUse: [
            "Eat between pieces of sushi to cleanse palate",
            "Serve alongside Japanese dishes",
            "Chop and add to rice and salads",
            "Never put directly on sushi (bad etiquette)"
          ],
          pairsWith: ["Sushi", "Sashimi", "Rice", "Japanese dishes"],
          storage: "Refrigerate. Keeps for months.",
          substitutes: "Homemade is easy: slice young ginger, pickle in rice vinegar with sugar and salt.",
          proTip: "Natural gari is pale pink; bright pink is dyed. Use between different types of sushi to reset your palate.",
          youtube: [
            { title: "Homemade Pickled Ginger", url: "https://www.youtube.com/results?search_query=homemade+pickled+ginger+gari+sushi" },
            { title: "How to Eat Sushi Properly", url: "https://www.youtube.com/results?search_query=how+to+eat+sushi+properly+etiquette" }
          ]
        },
        {
          id: "beni-shoga",
          name: "Beni Shoga (Red Pickled Ginger)",
          native: "紅生姜",
          pronunciation: "beh-nee shoh-gah",
          quickDesc: "Bright red ginger strips for ramen, gyudon and yakisoba",
          whatIsIt: "Ginger cut into thin matchsticks and pickled in umezu, the salty red brine left over from making umeboshi. It's sharp, salty and sour rather than sweet, and the brine (or red coloring in cheaper brands) gives it its vivid color. It is not the same as gari, the sweet pink ginger served with sushi.",
          howToUse: [
            "Add a pinch to tonkotsu ramen like Hakata ramen",
            "Top gyudon (beef rice bowls) and yakisoba",
            "Mix into takoyaki and okonomiyaki batter",
            "Fry in tempura batter for beni shoga tempura"
          ],
          pairsWith: ["Ramen noodles", "Pork", "Beef", "Rice", "Okonomiyaki"],
          storage: "Refrigerate after opening. Keeps for months in its brine.",
          substitutes: "Gari in a pinch, rinsed and patted dry, though it's sweeter. Or julienned fresh ginger quickly pickled in umeboshi vinegar.",
          proTip: "Look for umezu (plum vinegar) on the label; it tastes cleaner than versions colored with dye. Usually sold in small bags or jars near the other pickles.",
          youtube: [
            { title: "How to Make Beni Shoga", url: "https://www.youtube.com/results?search_query=how+to+make+beni+shoga+red+pickled+ginger" },
            { title: "Hakata Tonkotsu Ramen Toppings", url: "https://www.youtube.com/results?search_query=hakata+tonkotsu+ramen+toppings" }
          ]
        },
        {
          id: "kinako",
          name: "Kinako (Roasted Soybean Powder)",
          native: "きな粉",
          pronunciation: "kee-nah-koh",
          quickDesc: "Nutty roasted soybean flour for mochi and sweets",
          whatIsIt: "Flour made from roasted soybeans with a nutty, slightly sweet flavor. Used primarily in Japanese sweets and for coating mochi. Similar color and texture to graham cracker crumbs.",
          howToUse: [
            "Coat mochi and dango",
            "Mix into milk or smoothies",
            "Sprinkle on ice cream and yogurt",
            "Use in baking"
          ],
          pairsWith: ["Mochi", "Sugar", "Honey", "Milk", "Ice cream"],
          storage: "Airtight container in pantry.",
          substitutes: "No perfect substitute. Peanut flour has similar texture but different flavor.",
          proTip: "Mix with a little sugar before using, since most traditional preparations are slightly sweetened.",
          youtube: [
            { title: "Kinako Mochi Recipe", url: "https://www.youtube.com/results?search_query=kinako+mochi+recipe" },
            { title: "Japanese Kinako Recipes", url: "https://www.youtube.com/results?search_query=kinako+recipes+japanese+sweets" }
          ]
        }
      ]
    }
  },
  korea: {
    name: "Korea",
    flag: "🇰🇷",
    categories: {
      "Sauces & Condiments": [
        {
          id: "gochujang",
          name: "Gochujang",
          native: "고추장",
          pronunciation: "go-choo-jahng",
          quickDesc: "Spicy-sweet fermented chili paste and a staple of Korean cooking",
          whatIsIt: "A thick, sticky paste made from chili powder, glutinous rice, fermented soybeans and salt. It's spicy, sweet, savory and slightly funky from fermentation. Traditionally aged in earthenware pots for years.",
          howToUse: [
            "Mix into bibimbap and stir thoroughly",
            "Make Korean fried chicken glaze (gochujang + honey + soy sauce)",
            "Add to stews and braises for depth and heat",
            "Thin with sesame oil and vinegar for a dipping sauce"
          ],
          pairsWith: ["Sesame oil", "Garlic", "Rice", "Beef", "Tofu"],
          storage: "Refrigerate after opening. Lasts a very long time (over a year).",
          substitutes: "Sriracha + miso is not authentic but provides similar sweet-spicy-fermented notes.",
          proTip: "Heat levels vary by brand. Sunchang is a reliable mid-spice brand. For less heat, look for ones marked 'mild.'",
          youtube: [
            { title: "Maangchi: How to Make Gochujang", url: "https://www.youtube.com/results?search_query=maangchi+gochujang+recipe" },
            { title: "Korean Fried Chicken with Gochujang", url: "https://www.youtube.com/results?search_query=korean+fried+chicken+gochujang+sauce" }
          ]
        },
        {
          id: "doenjang",
          name: "Doenjang",
          native: "된장",
          pronunciation: "dwen-jahng",
          quickDesc: "Pungent fermented soybean paste for stews and dipping",
          whatIsIt: "A chunky, intensely savory paste made from fermented soybeans. It's stronger and more pungent than Japanese miso, with an earthy, almost cheesy depth. It's the main flavor in doenjang-jjigae (soybean paste stew).",
          howToUse: [
            "Make doenjang-jjigae with tofu, zucchini and anchovy broth",
            "Use as a dip for fresh vegetables (ssamjang is doenjang + gochujang)",
            "Add to marinades for grilled meats",
            "Stir into soup bases for umami depth"
          ],
          pairsWith: ["Zucchini", "Tofu", "Garlic", "Gochujang", "Sesame"],
          storage: "Refrigerate. Lasts indefinitely due to high salt content.",
          substitutes: "Red miso is similar but milder and less funky.",
          proTip: "Traditional doenjang is stronger than commercial versions. If it smells overwhelmingly funky, that's a sign of quality.",
          youtube: [
            { title: "Maangchi: Doenjang Jjigae", url: "https://www.youtube.com/results?search_query=maangchi+doenjang+jjigae" },
            { title: "Korean Soybean Paste Stew", url: "https://www.youtube.com/results?search_query=korean+soybean+paste+stew+recipe" }
          ]
        },
        {
          id: "kimchi",
          name: "Kimchi",
          native: "김치",
          pronunciation: "kim-chee",
          quickDesc: "Fermented spicy cabbage, Korea's best-known side dish and a cooking ingredient",
          whatIsIt: "Salted, fermented vegetables (usually napa cabbage) seasoned with chili, garlic, ginger and fish sauce. Young kimchi is bright and crunchy; aged kimchi is sour and soft. Both have their uses.",
          howToUse: [
            "Eat as a banchan (side dish) with any Korean meal",
            "Chop and add to fried rice, noodles and stews",
            "Make kimchi jjigae (stew) with older, sour kimchi",
            "Use in pancakes (kimchijeon) with flour and eggs"
          ],
          pairsWith: ["Pork", "Rice", "Tofu", "Eggs", "Ramen"],
          storage: "Refrigerate to slow fermentation. It gets tangier over time, which doesn't mean it has spoiled.",
          substitutes: "Nothing comes close. For cooking, sauerkraut plus gochugaru works in a pinch.",
          proTip: "Save the juice. Kimchi brine is great in marinades, soups and bloody marys.",
          youtube: [
            { title: "Maangchi: Traditional Kimchi Recipe", url: "https://www.youtube.com/results?search_query=maangchi+traditional+kimchi+recipe" },
            { title: "Kimchi Fried Rice", url: "https://www.youtube.com/results?search_query=kimchi+fried+rice+recipe" },
            { title: "Kimchi Jjigae (Kimchi Stew)", url: "https://www.youtube.com/results?search_query=kimchi+jjigae+stew+recipe" }
          ]
        },
        {
          id: "ssamjang",
          name: "Ssamjang",
          native: "쌈장",
          pronunciation: "ssahm-jahng",
          quickDesc: "Savory-spicy dipping paste for lettuce wraps and grilled meat",
          whatIsIt: "A thick dipping sauce combining doenjang and gochujang with sesame oil, garlic and sometimes chopped scallions. It was made for ssam (wraps) and is the usual sauce with Korean BBQ.",
          howToUse: [
            "Spread inside lettuce wraps with Korean BBQ",
            "Use as a dip for fresh vegetables",
            "Add to rice bowls for instant flavor",
            "Spread on grilled meat sandwiches"
          ],
          pairsWith: ["Grilled pork belly", "Lettuce", "Perilla leaves", "Garlic", "Rice"],
          storage: "Refrigerate after opening. Lasts several months.",
          substitutes: "Mix doenjang and gochujang 1:1 with a splash of sesame oil.",
          proTip: "The ideal ssam bite: rice, meat, ssamjang, garlic slice, all wrapped in lettuce and eaten in one bite.",
          youtube: [
            { title: "How to Make Ssamjang", url: "https://www.youtube.com/results?search_query=how+to+make+ssamjang+recipe" },
            { title: "Korean BBQ Lettuce Wraps", url: "https://www.youtube.com/results?search_query=korean+bbq+lettuce+wraps+ssamjang" }
          ]
        },
        {
          id: "ganjang",
          name: "Korean Soy Sauce (Ganjang)",
          native: "간장",
          pronunciation: "gan-jahng",
          quickDesc: "Light, salty soy sauce used to season Korean soups",
          whatIsIt: "Korean soy sauce comes in two main types: soup soy sauce (guk-ganjang) which is lighter and saltier for soups, and regular soy sauce (yangjo-ganjang) for everyday cooking. Soup soy sauce is a byproduct of making doenjang.",
          howToUse: [
            "Use soup soy sauce for clear soups and namul (vegetable sides)",
            "Season stir-fries and marinades with regular soy sauce",
            "Mix with sesame oil for dipping sauces",
            "Add to bibimbap sauce"
          ],
          pairsWith: ["Sesame oil", "Garlic", "Green onions", "Rice vinegar", "Gochugaru"],
          storage: "Room temperature in a cool, dark place.",
          substitutes: "Japanese soy sauce works for regular ganjang. For soup soy sauce, use fish sauce + regular soy sauce diluted.",
          proTip: "Guk-ganjang (soup soy sauce) is much saltier than regular soy sauce, so use half the amount and adjust.",
          youtube: [
            { title: "Korean Soy Sauce Types Explained", url: "https://www.youtube.com/results?search_query=korean+soy+sauce+types+ganjang" },
            { title: "Korean Namul with Soup Soy Sauce", url: "https://www.youtube.com/results?search_query=korean+namul+side+dish+recipe" }
          ]
        },
        {
          id: "korean-fish-sauce",
          name: "Korean Fish Sauce (Aekjeot)",
          native: "액젓",
          pronunciation: "aek-juht",
          quickDesc: "Fermented anchovy or sand lance sauce for kimchi and stews",
          whatIsIt: "A pungent fermented fish sauce, typically made from anchovies (myeolchi-aekjeot) or sand lance (kkanari-aekjeot). Traditional kimchi recipes call for it, and it adds deep umami to stews and sauces.",
          howToUse: [
            "Add to kimchi paste for authentic flavor",
            "Season jjigae (stews) for depth",
            "Use in place of salt in Korean dishes",
            "Mix into dipping sauces"
          ],
          pairsWith: ["Gochugaru", "Garlic", "Ginger", "Fermented shrimp paste", "Vegetables"],
          storage: "Refrigerate after opening. Lasts over a year.",
          substitutes: "Vietnamese or Thai fish sauce works but has a different flavor profile.",
          proTip: "Myeolchi (anchovy) is stronger and better for kimchi. Kkanari (sand lance) is milder and better for cooking.",
          youtube: [
            { title: "Korean Fish Sauce for Kimchi", url: "https://www.youtube.com/results?search_query=korean+fish+sauce+aekjeot+kimchi" },
            { title: "Maangchi: Kimchi Ingredients", url: "https://www.youtube.com/results?search_query=maangchi+kimchi+ingredients+fish+sauce" }
          ]
        },
        {
          id: "saeujeot",
          name: "Fermented Shrimp Paste (Saeujeot)",
          native: "새우젓",
          pronunciation: "sae-oo-juht",
          quickDesc: "Tiny salted fermented shrimp for kimchi and seasoning",
          whatIsIt: "Small shrimp fermented in salt, creating a pungent, salty paste. One of the key fermentation agents in traditional kimchi, adding depth that fish sauce alone cannot achieve.",
          howToUse: [
            "Add to kimchi paste (mince finely first)",
            "Season steamed pork (bossam) with whole shrimp",
            "Mix into dipping sauces",
            "Add to soups and stews for umami"
          ],
          pairsWith: ["Napa cabbage", "Pork belly", "Tofu", "Sesame oil", "Green onions"],
          storage: "Refrigerate. Lasts indefinitely due to high salt content.",
          substitutes: "Fish sauce works but lacks the texture, and nothing matches it exactly.",
          proTip: "Look for 'juni saeujeot' (June shrimp). It's made from spring-caught shrimp and considered the best quality.",
          youtube: [
            { title: "Fermented Shrimp for Kimchi", url: "https://www.youtube.com/results?search_query=saeujeot+fermented+shrimp+kimchi" },
            { title: "Bossam with Saeujeot", url: "https://www.youtube.com/results?search_query=korean+bossam+saeujeot+dip" }
          ]
        },
        {
          id: "korean-sesame-oil",
          name: "Korean Sesame Oil",
          native: "참기름",
          pronunciation: "cham-gi-reum",
          quickDesc: "Dark, nutty oil for finishing dishes and dipping sauces",
          whatIsIt: "Deeply roasted sesame oil with an intense, nutty flavor. Korean sesame oil is typically darker and more strongly roasted than Chinese or Japanese versions. Used as a finishing oil, not for frying.",
          howToUse: [
            "Drizzle over bibimbap, namul and finished dishes",
            "Mix into dipping sauces with soy sauce",
            "Add to marinades for grilled meats",
            "Toss with rice and vegetables"
          ],
          pairsWith: ["Soy sauce", "Garlic", "Salt", "Rice", "Vegetables"],
          storage: "Store in a cool, dark place. Refrigerate for longer storage.",
          substitutes: "Japanese or Chinese sesame oil works but is milder. Nothing replicates the depth.",
          proTip: "Heat destroys the flavor, so add sesame oil at the end of cooking or use it as a finishing oil.",
          youtube: [
            { title: "Korean Sesame Oil Uses", url: "https://www.youtube.com/results?search_query=korean+sesame+oil+cooking+uses" },
            { title: "How to Make Korean Namul", url: "https://www.youtube.com/results?search_query=korean+namul+sesame+oil" }
          ]
        },
        {
          id: "korean-chili-oil",
          name: "Chili Oil (Gochu-gireum)",
          native: "고추기름",
          pronunciation: "go-choo-gi-reum",
          quickDesc: "Spicy red oil made with gochugaru for added heat",
          whatIsIt: "Oil infused with gochugaru (Korean chili flakes), creating a milder, sweeter chili oil compared to Chinese versions. Adds color and gentle heat to dishes.",
          howToUse: [
            "Drizzle over tteokbokki and noodles",
            "Add to bibim-guksu (spicy cold noodles)",
            "Mix into dipping sauces",
            "Use for stir-frying vegetables"
          ],
          pairsWith: ["Gochugaru", "Sesame oil", "Soy sauce", "Noodles", "Rice dishes"],
          storage: "Room temperature for a few weeks, refrigerate for longer.",
          substitutes: "Chinese chili oil works but is spicier and less sweet.",
          proTip: "Make your own: gently heat neutral oil to 300°F and pour over gochugaru. Let infuse for 30 minutes.",
          youtube: [
            { title: "How to Make Korean Chili Oil", url: "https://www.youtube.com/results?search_query=korean+chili+oil+gochugaru+recipe" },
            { title: "Bibim-guksu with Chili Oil", url: "https://www.youtube.com/results?search_query=bibim+guksu+spicy+noodles" }
          ]
        },
        {
          id: "korean-rice-vinegar",
          name: "Korean Rice Vinegar",
          native: "식초",
          pronunciation: "shik-cho",
          quickDesc: "Mild vinegar for pickles, sauces and salads",
          whatIsIt: "A mild, slightly sweet vinegar made from fermented rice. Less acidic than Western vinegars, it's used in Korean pickles, dipping sauces and cold noodle dishes.",
          howToUse: [
            "Make quick pickled vegetables (danmuji, pickled radish)",
            "Add to naengmyeon broth for tang",
            "Mix into cho-gochujang dipping sauce",
            "Dress cold noodle salads"
          ],
          pairsWith: ["Gochujang", "Sugar", "Soy sauce", "Garlic", "Cucumber"],
          storage: "Room temperature indefinitely.",
          substitutes: "Japanese rice vinegar or apple cider vinegar diluted with a little water.",
          proTip: "Cold noodles get their tang from the vinegar, so don't skip it.",
          youtube: [
            { title: "Korean Pickled Vegetables", url: "https://www.youtube.com/results?search_query=korean+pickled+vegetables+recipe" },
            { title: "Cho-gochujang Sauce", url: "https://www.youtube.com/results?search_query=cho+gochujang+sauce+recipe" }
          ]
        },
        {
          id: "mat-gan-jang",
          name: "Flavored Soy Sauce (Mat-Ganjang)",
          native: "맛간장",
          pronunciation: "maht-gan-jahng",
          quickDesc: "Pre-seasoned soy sauce with garlic, onion and aromatics",
          whatIsIt: "Soy sauce simmered with garlic, onion, ginger, green onions and sometimes kelp to create a ready-to-use seasoning. A convenient shortcut for many Korean dishes.",
          howToUse: [
            "Season fried rice instantly",
            "Use as a quick marinade for meat",
            "Drizzle over tofu and vegetables",
            "Add to stir-fries"
          ],
          pairsWith: ["Rice", "Tofu", "Vegetables", "Eggs", "Noodles"],
          storage: "Refrigerate after making. Lasts 2-3 weeks.",
          substitutes: "Regular soy sauce + minced garlic and ginger.",
          proTip: "Make a big batch and keep it in the fridge to save time on weeknights.",
          youtube: [
            { title: "How to Make Mat-Ganjang", url: "https://www.youtube.com/results?search_query=mat+ganjang+korean+flavored+soy+sauce" },
            { title: "Korean Cooking with Mat-Ganjang", url: "https://www.youtube.com/results?search_query=korean+mat+ganjang+recipes" }
          ]
        },
        {
          id: "corn-syrup-mulyeot",
          name: "Korean Corn Syrup (Mulyeot)",
          native: "물엿",
          pronunciation: "mool-yuht",
          quickDesc: "Clear syrup for glossy glazes and adding sweetness",
          whatIsIt: "A thick, clear syrup used to add shine and sweetness to Korean dishes. Creates the glossy coating on Korean fried chicken, braised dishes and japchae.",
          howToUse: [
            "Glaze Korean fried chicken for that shiny coat",
            "Add to japchae for shine and subtle sweetness",
            "Use in braised dishes like jangjorim",
            "Mix into dipping sauces"
          ],
          pairsWith: ["Soy sauce", "Gochujang", "Garlic", "Sesame oil", "Glass noodles"],
          storage: "Room temperature. Keeps indefinitely.",
          substitutes: "Honey or light corn syrup works. Rice syrup is also good.",
          proTip: "A little goes a long way. Use it for shine and binding rather than as the main sweetener.",
          youtube: [
            { title: "Korean Mulyeot Uses", url: "https://www.youtube.com/results?search_query=korean+mulyeot+corn+syrup+cooking" },
            { title: "Glossy Korean Fried Chicken", url: "https://www.youtube.com/results?search_query=glossy+korean+fried+chicken+sauce" }
          ]
        }
      ],
      "Noodles & Rice": [
        {
          id: "dangmyeon",
          name: "Glass Noodles (Dangmyeon)",
          native: "당면",
          pronunciation: "dahng-myuhn",
          quickDesc: "Chewy sweet potato starch noodles for japchae",
          whatIsIt: "Translucent noodles made from sweet potato starch, much chewier and bouncier than mung bean glass noodles. This is the noodle used in japchae (Korean stir-fried noodles).",
          howToUse: [
            "Make japchae with vegetables and beef",
            "Add to hot pot and stews",
            "Use in Korean-style spring rolls (mandu)",
            "Add to soups for texture"
          ],
          pairsWith: ["Sesame oil", "Soy sauce", "Spinach", "Beef", "Mushrooms"],
          storage: "Dry pantry. Keeps indefinitely.",
          substitutes: "Chinese glass noodles work but are less chewy. There's no exact substitute.",
          proTip: "Don't overcook them: they should be chewy, not mushy. Boil 6-8 minutes, then rinse with cold water.",
          youtube: [
            { title: "Maangchi: Japchae Recipe", url: "https://www.youtube.com/results?search_query=maangchi+japchae+recipe" },
            { title: "How to Cook Dangmyeon", url: "https://www.youtube.com/results?search_query=how+to+cook+dangmyeon+noodles" }
          ]
        },
        {
          id: "naengmyeon-noodles",
          name: "Cold Noodles (Naengmyeon)",
          native: "냉면",
          pronunciation: "naeng-myuhn",
          quickDesc: "Chewy buckwheat noodles served ice-cold in summer",
          whatIsIt: "Thin, chewy noodles made from buckwheat and potato starch, served in ice-cold beef broth (mul-naengmyeon) or spicy sauce (bibim-naengmyeon). A beloved summer dish that requires scissors to cut the long noodles.",
          howToUse: [
            "Serve in icy beef broth with sliced beef and vegetables",
            "Toss with spicy gochujang sauce for bibim-naengmyeon",
            "Always serve ice cold, often with ice cubes in the broth",
            "Cut with scissors for easier eating"
          ],
          pairsWith: ["Beef broth", "Gochujang", "Asian pear", "Cucumber", "Hard-boiled egg"],
          storage: "Dry noodles keep for months. Cook fresh or use frozen.",
          substitutes: "Soba noodles are similar but not as chewy.",
          proTip: "After boiling, rinse thoroughly in cold water and rub to remove excess starch for the best texture.",
          youtube: [
            { title: "Maangchi: Naengmyeon Recipe", url: "https://www.youtube.com/results?search_query=maangchi+naengmyeon+recipe" },
            { title: "Korean Cold Noodles Guide", url: "https://www.youtube.com/results?search_query=korean+cold+noodles+naengmyeon" }
          ]
        },
        {
          id: "korean-instant-noodles",
          name: "Ramyeon (Korean Instant Noodles)",
          native: "라면",
          pronunciation: "rah-myuhn",
          quickDesc: "Spicy instant noodles that are a cultural phenomenon",
          whatIsIt: "Korean instant noodles are chewier and spicier than Japanese or American versions. Shin Ramyun is the most famous, but there are dozens of varieties from mild to extremely hot.",
          howToUse: [
            "Cook in boiling water with the seasoning packet",
            "Add egg, vegetables and cheese for upgrades",
            "Make ramyeon jjigae (stew) with kimchi and pork",
            "Use as a base for creative fusion dishes"
          ],
          pairsWith: ["Eggs", "Cheese", "Kimchi", "Green onions", "Spam"],
          storage: "Pantry. Check expiration date on package.",
          substitutes: "Japanese instant ramen (different flavor profile).",
          proTip: "Don't drain the water; the broth is part of the dish. Add an egg in the last minute for creamy richness.",
          youtube: [
            { title: "Korean Ramyeon Cooking Tips", url: "https://www.youtube.com/results?search_query=korean+ramyeon+cooking+tips" },
            { title: "Shin Ramyun Upgrades", url: "https://www.youtube.com/results?search_query=shin+ramyun+upgrades+recipes" }
          ]
        },
        {
          id: "sujebi-dough",
          name: "Hand-Torn Noodles (Sujebi)",
          native: "수제비",
          pronunciation: "soo-jeh-bi",
          quickDesc: "Rustic hand-torn wheat dough pieces in anchovy broth",
          whatIsIt: "A comfort food of hand-torn wheat flour dough pieces cooked in anchovy and kelp broth. Similar to Italian pasta but with a chewy, rustic texture. Often includes vegetables and seafood.",
          howToUse: [
            "Make anchovy-kelp broth and drop in torn dough pieces",
            "Add zucchini, potato and green onions",
            "Simmer until dough is cooked through",
            "Serve hot in the broth"
          ],
          pairsWith: ["Anchovy broth", "Zucchini", "Potato", "Clams", "Green onions"],
          storage: "Make dough fresh. Rested dough keeps overnight refrigerated.",
          substitutes: "Fresh pasta torn into pieces works similarly.",
          proTip: "Rest the dough for at least 30 minutes so it's more pliable and easier to tear.",
          youtube: [
            { title: "Maangchi: Sujebi Recipe", url: "https://www.youtube.com/results?search_query=maangchi+sujebi+recipe" },
            { title: "Korean Hand-Torn Noodle Soup", url: "https://www.youtube.com/results?search_query=korean+sujebi+soup+recipe" }
          ]
        },
        {
          id: "kalguksu-noodles",
          name: "Knife-Cut Noodles (Kalguksu)",
          native: "칼국수",
          pronunciation: "kahl-gook-soo",
          quickDesc: "Fresh wheat noodles cut with a knife in anchovy broth",
          whatIsIt: "Fresh, hand-cut wheat noodles served in a light anchovy and clam broth. The noodles are thick, slightly chewy and have a homemade texture. A popular comfort food especially in the summer.",
          howToUse: [
            "Cook fresh noodles in anchovy-kelp-clam broth",
            "Add zucchini and potato slices",
            "Garnish with green onions and dried seaweed",
            "Serve hot as a one-bowl meal"
          ],
          pairsWith: ["Clams", "Zucchini", "Anchovy broth", "Garlic", "Green onions"],
          storage: "Fresh noodles: use same day. Dried: pantry for months.",
          substitutes: "Fresh fettuccine or udon in a pinch.",
          proTip: "The broth matters most here. Make it with dried anchovies and kelp for authentic flavor.",
          youtube: [
            { title: "Kalguksu Recipe", url: "https://www.youtube.com/results?search_query=kalguksu+korean+noodle+soup+recipe" },
            { title: "Korean Knife-Cut Noodles", url: "https://www.youtube.com/results?search_query=korean+kalguksu+homemade" }
          ]
        },
        {
          id: "korean-short-grain-rice",
          name: "Korean Short-Grain Rice",
          native: "쌀",
          pronunciation: "ssahl",
          quickDesc: "Sticky, slightly sweet rice served with most Korean meals",
          whatIsIt: "Short-grain rice that cooks up sticky and slightly sweet, which makes it easy to eat with chopsticks alongside banchan. Some Koreans add a little sweet rice (chapssal) for extra stickiness.",
          howToUse: [
            "Rinse until water runs clear before cooking",
            "Use in rice cooker with equal parts water",
            "Serve with every Korean meal as the base",
            "Use day-old rice for fried rice"
          ],
          pairsWith: ["Any Korean main dish", "Banchan", "Sesame oil", "Seaweed", "Soup"],
          storage: "Cool, dry pantry. Use within a year for best quality.",
          substitutes: "Japanese sushi rice is nearly identical.",
          proTip: "Let rice rest for 10 minutes after cooking before opening the lid so it finishes steaming.",
          youtube: [
            { title: "How to Cook Korean Rice", url: "https://www.youtube.com/results?search_query=how+to+cook+korean+rice+perfectly" },
            { title: "Korean Rice Washing Technique", url: "https://www.youtube.com/results?search_query=korean+rice+washing+technique" }
          ]
        },
        {
          id: "sweet-rice",
          name: "Sweet Rice (Chapssal)",
          native: "찹쌀",
          pronunciation: "chahp-ssahl",
          quickDesc: "Extra-sticky glutinous rice for rice cakes and desserts",
          whatIsIt: "A short-grain rice that becomes very sticky and chewy when cooked. Used for tteok (rice cakes), yakshik (sweet rice dessert), and sometimes mixed with regular rice for extra stickiness.",
          howToUse: [
            "Soak overnight before cooking",
            "Make yakshik (sweet rice with nuts and jujube)",
            "Use for tteok and rice cakes",
            "Mix a little with regular rice for stickier texture"
          ],
          pairsWith: ["Jujube", "Chestnuts", "Pine nuts", "Honey", "Cinnamon"],
          storage: "Cool, dry pantry.",
          substitutes: "Thai sticky rice is similar but slightly different texture.",
          proTip: "Soak glutinous rice for at least 2 hours (ideally overnight), or it won't cook properly.",
          youtube: [
            { title: "Korean Sweet Rice Dessert", url: "https://www.youtube.com/results?search_query=korean+yakshik+sweet+rice+recipe" },
            { title: "How to Cook Sweet Rice", url: "https://www.youtube.com/results?search_query=how+to+cook+korean+sweet+rice" }
          ]
        }
      ],
      "Produce": [
        {
          id: "napa-cabbage",
          name: "Napa Cabbage (Baechu)",
          native: "배추",
          pronunciation: "bae-choo",
          quickDesc: "Tall, mild cabbage, the usual base for kimchi",
          whatIsIt: "A tall, oblong cabbage with pale green leaves and white ribs. Milder and more tender than regular cabbage, it's the base for the most common type of kimchi and is also used in stews and stir-fries.",
          howToUse: [
            "Salt and ferment for kimchi",
            "Add to kimchi jjigae and other stews",
            "Use raw in salads and ssam",
            "Quick stir-fry with garlic and fish sauce"
          ],
          pairsWith: ["Gochugaru", "Fish sauce", "Garlic", "Pork", "Tofu"],
          storage: "Refrigerate unwashed. Keeps 1-2 weeks.",
          substitutes: "Green cabbage works but is crunchier and less sweet.",
          proTip: "For kimchi, slice lengthwise and salt the leaves heavily. The salt draws out water and preps them for fermentation.",
          youtube: [
            { title: "How to Prepare Napa Cabbage for Kimchi", url: "https://www.youtube.com/results?search_query=how+to+prepare+napa+cabbage+kimchi" },
            { title: "Maangchi: Baechu Kimchi", url: "https://www.youtube.com/results?search_query=maangchi+baechu+kimchi" }
          ]
        },
        {
          id: "korean-radish",
          name: "Korean Radish (Mu)",
          native: "무",
          pronunciation: "moo",
          quickDesc: "Large, mild radish for kimchi, pickles and soups",
          whatIsIt: "A large, round-ish radish that's sweeter and denser than daikon. It has a green top portion and white bottom. It's the main ingredient in kkakdugi (cubed radish kimchi) and goes into many soups and stews.",
          howToUse: [
            "Cube for kkakdugi (radish kimchi)",
            "Add to soups and stews for sweetness",
            "Quick pickle for chicken mu (pickled radish)",
            "Julienne for salads"
          ],
          pairsWith: ["Gochugaru", "Fish sauce", "Beef", "Seaweed", "Green onions"],
          storage: "Refrigerate. Keeps 2-3 weeks.",
          substitutes: "Daikon works but is less sweet and dense.",
          proTip: "The green-topped portion is sweeter and better for eating fresh; the white portion is better for cooking.",
          youtube: [
            { title: "Maangchi: Kkakdugi Recipe", url: "https://www.youtube.com/results?search_query=maangchi+kkakdugi+radish+kimchi" },
            { title: "Korean Radish Uses", url: "https://www.youtube.com/results?search_query=korean+radish+mu+recipes" }
          ]
        },
        {
          id: "korean-cucumbers",
          name: "Korean Cucumber (Oi)",
          native: "오이",
          pronunciation: "oh-ee",
          quickDesc: "Small, spiny cucumbers for kimchi and salads",
          whatIsIt: "Small cucumbers with bumpy, spiny skin and crisp, dense flesh with small seed cavities. They're crunchier and less watery than Western cucumbers, so they hold their texture in kimchi.",
          howToUse: [
            "Make oi-sobagi (stuffed cucumber kimchi)",
            "Quick pickle with soy sauce and sesame oil",
            "Slice for cold noodle toppings",
            "Make spicy cucumber salad (oi-muchim)"
          ],
          pairsWith: ["Gochugaru", "Sesame oil", "Soy sauce", "Garlic", "Rice vinegar"],
          storage: "Refrigerate. Best used within a week.",
          substitutes: "Persian or Kirby cucumbers are closest. Regular cucumber is too watery.",
          proTip: "Don't peel Korean cucumbers; the skin adds flavor and nutrition.",
          youtube: [
            { title: "Korean Cucumber Salad", url: "https://www.youtube.com/results?search_query=korean+cucumber+salad+oi+muchim" },
            { title: "Oi-sobagi (Cucumber Kimchi)", url: "https://www.youtube.com/results?search_query=oi+sobagi+cucumber+kimchi" }
          ]
        },
        {
          id: "korean-perilla",
          name: "Perilla Leaves (Kkaennip)",
          native: "깻잎",
          pronunciation: "kkae-nip",
          quickDesc: "Aromatic herb with a unique minty-basil flavor",
          whatIsIt: "Large, heart-shaped leaves with a distinctive aroma somewhere between mint and basil. A signature Korean herb used as a wrap for meat, pickled as banchan or added to stews.",
          howToUse: [
            "Wrap Korean BBQ meat with rice and ssamjang",
            "Make pickled perilla leaves (kkaennip jangajji)",
            "Add to soups and stews",
            "Use as a garnish for noodles"
          ],
          pairsWith: ["Grilled pork belly", "Rice", "Soy sauce", "Garlic", "Chili"],
          storage: "Wrap in damp paper towel, refrigerate. Use within a week.",
          substitutes: "Shiso leaves are related but taste different. Nothing else has quite the same flavor.",
          proTip: "Perilla is often confused with shiso (Japanese) but has a stronger, more pungent flavor.",
          youtube: [
            { title: "Pickled Perilla Leaves Recipe", url: "https://www.youtube.com/results?search_query=korean+pickled+perilla+leaves+kkaennip" },
            { title: "How to Use Perilla in Korean Cooking", url: "https://www.youtube.com/results?search_query=korean+perilla+leaves+cooking" }
          ]
        },
        {
          id: "korean-green-onions",
          name: "Korean Green Onions (Pa)",
          native: "파",
          pronunciation: "pah",
          quickDesc: "Long, thick green onions used in nearly every Korean dish",
          whatIsIt: "Large green onions (larger than Western scallions) used throughout Korean cooking. The white parts are often cooked, while the green parts are used as garnish. Also made into pajeon (green onion pancakes).",
          howToUse: [
            "Make pajeon (green onion pancakes)",
            "Add to stews, soups and stir-fries",
            "Make pa-muchim (spicy green onion salad)",
            "Use as garnish for nearly everything"
          ],
          pairsWith: ["Gochugaru", "Soy sauce", "Sesame oil", "Garlic", "Seafood"],
          storage: "Refrigerate roots-down in water, or wrap in damp paper towel.",
          substitutes: "Regular scallions work if you use more of them.",
          proTip: "The large Korean variety (daepa) is better for pajeon. Regular green onions are fine for garnishing.",
          youtube: [
            { title: "Maangchi: Pajeon Recipe", url: "https://www.youtube.com/results?search_query=maangchi+pajeon+green+onion+pancake" },
            { title: "Korean Green Onion Salad", url: "https://www.youtube.com/results?search_query=korean+green+onion+salad+pa+muchim" }
          ]
        },
        {
          id: "korean-garlic",
          name: "Garlic (Maneul)",
          native: "마늘",
          pronunciation: "mah-neul",
          quickDesc: "Used generously in almost every Korean dish",
          whatIsIt: "Koreans use more garlic per capita than almost any other country. It's a staple in marinades, kimchi and stews, and it's often served raw alongside Korean BBQ for wrapping with meat.",
          howToUse: [
            "Mince and add to kimchi paste",
            "Serve whole cloves with Korean BBQ",
            "Add generously to jjigae and other stews",
            "Use in marinades for bulgogi and galbi"
          ],
          pairsWith: ["Ginger", "Soy sauce", "Sesame oil", "Gochujang", "Green onions"],
          storage: "Cool, dry place with ventilation. Don't refrigerate whole bulbs.",
          substitutes: "Pre-minced garlic works in a pinch but loses pungency.",
          proTip: "Korean recipes often call for what seems like 'too much' garlic to Western cooks. Use it generously for authentic flavor.",
          youtube: [
            { title: "Korean Garlic Usage", url: "https://www.youtube.com/results?search_query=korean+cooking+garlic+usage" },
            { title: "Grilled Garlic for Korean BBQ", url: "https://www.youtube.com/results?search_query=korean+bbq+grilled+garlic" }
          ]
        },
        {
          id: "korean-ginger",
          name: "Ginger (Saenggang)",
          native: "생강",
          pronunciation: "saeng-gahng",
          quickDesc: "Warming root used in marinades, teas and stews",
          whatIsIt: "Fresh ginger root adds warmth and brightness to Korean cooking. Used in marinades, soups and traditional drinks like saenggang-cha (ginger tea).",
          howToUse: [
            "Mince for bulgogi and galbi marinades",
            "Slice and add to soup broths",
            "Make saenggang-cha (ginger tea) with honey",
            "Add to kimchi for brightness"
          ],
          pairsWith: ["Garlic", "Soy sauce", "Honey", "Pear", "Meat marinades"],
          storage: "Refrigerate wrapped in paper towel, or freeze for longer storage.",
          substitutes: "Ginger paste or powder work but fresh is best.",
          proTip: "Freeze ginger and grate it while frozen. It grates much more easily and lasts longer.",
          youtube: [
            { title: "Korean Ginger Tea Recipe", url: "https://www.youtube.com/results?search_query=korean+ginger+tea+saenggang+cha" },
            { title: "Ginger in Korean Marinades", url: "https://www.youtube.com/results?search_query=korean+marinade+ginger+bulgogi" }
          ]
        },
        {
          id: "asian-pear",
          name: "Asian Pear (Bae)",
          native: "배",
          pronunciation: "bae",
          quickDesc: "Crisp, sweet fruit used as meat tenderizer and garnish",
          whatIsIt: "A round, apple-shaped pear with crisp, juicy flesh and mild sweetness. In Korean cooking, it's used grated in marinades to tenderize meat and add natural sweetness.",
          howToUse: [
            "Grate into bulgogi and galbi marinades (tenderizes meat)",
            "Slice and add to cold noodles",
            "Use in fresh fruit salads",
            "Juice for a natural sweetener"
          ],
          pairsWith: ["Beef", "Soy sauce", "Garlic", "Ginger", "Sesame oil"],
          storage: "Refrigerate. Keeps 2-3 weeks.",
          substitutes: "Kiwi or fresh pineapple for tenderizing. Apple for sweetness (different flavor).",
          proTip: "Asian pear contains enzymes that break down proteins, so don't marinate too long or the meat turns mushy.",
          youtube: [
            { title: "Korean Pear Marinade", url: "https://www.youtube.com/results?search_query=korean+pear+meat+marinade" },
            { title: "Bulgogi Marinade with Pear", url: "https://www.youtube.com/results?search_query=bulgogi+marinade+asian+pear" }
          ]
        },
        {
          id: "korean-zucchini",
          name: "Korean Zucchini (Aehobak)",
          native: "애호박",
          pronunciation: "ae-ho-bahk",
          quickDesc: "Light green squash for jeon, stews and side dishes",
          whatIsIt: "A pale green squash similar to zucchini but with thinner skin and sweeter, more tender flesh. One of the most common vegetables in Korean home cooking.",
          howToUse: [
            "Slice and pan-fry for hobak-jeon (zucchini pancakes)",
            "Add to doenjang-jjigae and other stews",
            "Make hobak-namul (seasoned zucchini side dish)",
            "Add to bibimbap"
          ],
          pairsWith: ["Doenjang", "Sesame oil", "Garlic", "Eggs", "Beef"],
          storage: "Refrigerate. Use within a week.",
          substitutes: "Regular zucchini or yellow squash works well.",
          proTip: "Salt zucchini slices before pan-frying to draw out excess water for crispier results.",
          youtube: [
            { title: "Korean Zucchini Pancakes", url: "https://www.youtube.com/results?search_query=korean+zucchini+pancakes+hobak+jeon" },
            { title: "Hobak Namul Recipe", url: "https://www.youtube.com/results?search_query=hobak+namul+korean+zucchini+side+dish" }
          ]
        },
        {
          id: "korean-spinach",
          name: "Korean Spinach (Sigeumchi)",
          native: "시금치",
          pronunciation: "shi-geum-chi",
          quickDesc: "Tender spinach blanched and seasoned as banchan",
          whatIsIt: "Spinach is one of the most common banchan ingredients. Korean spinach is typically smaller and more tender than Western varieties, though regular spinach works fine.",
          howToUse: [
            "Blanch and season for sigeumchi-namul (spinach side dish)",
            "Add to bibimbap",
            "Use in japchae",
            "Add to soups and stews"
          ],
          pairsWith: ["Sesame oil", "Soy sauce", "Garlic", "Sesame seeds", "Salt"],
          storage: "Refrigerate unwashed. Use within a few days.",
          substitutes: "Any tender spinach variety works.",
          proTip: "Blanch very briefly (30 seconds), then move it straight to an ice bath; overcooked spinach loses its bright color.",
          youtube: [
            { title: "Sigeumchi Namul Recipe", url: "https://www.youtube.com/results?search_query=sigeumchi+namul+korean+spinach+recipe" },
            { title: "How to Make Korean Spinach Side Dish", url: "https://www.youtube.com/results?search_query=korean+spinach+banchan+recipe" }
          ]
        },
        {
          id: "fernbrake",
          name: "Fernbrake (Gosari)",
          native: "고사리",
          pronunciation: "go-sah-ri",
          quickDesc: "Chewy fern shoots for bibimbap and side dishes",
          whatIsIt: "Dried fern shoots (bracken fern) that are rehydrated and seasoned. They have a unique chewy texture and earthy flavor. One of the classic toppings for traditional bibimbap.",
          howToUse: [
            "Soak dried gosari, then braise with seasonings",
            "Add to bibimbap as a classic topping",
            "Include in japchae",
            "Make gosari-namul (seasoned fernbrake)"
          ],
          pairsWith: ["Sesame oil", "Soy sauce", "Garlic", "Beef", "Perilla oil"],
          storage: "Dried: pantry for months. Rehydrated: refrigerate and use within days.",
          substitutes: "No real substitute for the unique texture. Omit if unavailable.",
          proTip: "Dried gosari needs to soak for hours (or overnight) and then be boiled before cooking.",
          youtube: [
            { title: "How to Prepare Gosari", url: "https://www.youtube.com/results?search_query=how+to+prepare+gosari+dried+fernbrake" },
            { title: "Gosari Namul Recipe", url: "https://www.youtube.com/results?search_query=gosari+namul+korean+recipe" }
          ]
        },
        {
          id: "bellflower-root",
          name: "Bellflower Root (Doraji)",
          native: "도라지",
          pronunciation: "doh-rah-jee",
          quickDesc: "Crunchy root with slight bitterness for side dishes",
          whatIsIt: "The root of the balloon flower plant, with a crunchy texture and slightly bitter flavor. Often used in traditional medicine and as a banchan. Requires soaking and rinsing to reduce bitterness.",
          howToUse: [
            "Season with gochugaru for spicy doraji-namul",
            "Add to bibimbap",
            "Use in traditional soups for health benefits",
            "Pickle in soy sauce"
          ],
          pairsWith: ["Gochugaru", "Sesame oil", "Soy sauce", "Honey", "Vinegar"],
          storage: "Fresh: refrigerate and use within a week. Dried: pantry for months.",
          substitutes: "No real substitute. Omit if unavailable.",
          proTip: "Soak fresh doraji in salted water and massage to reduce the bitter compounds.",
          youtube: [
            { title: "Doraji Namul Recipe", url: "https://www.youtube.com/results?search_query=doraji+namul+bellflower+root+recipe" },
            { title: "How to Prepare Doraji", url: "https://www.youtube.com/results?search_query=how+to+prepare+doraji+korean" }
          ]
        }
      ],
      "Proteins & Seafood": [
        {
          id: "korean-tofu",
          name: "Korean Tofu (Dubu)",
          native: "두부",
          pronunciation: "doo-boo",
          quickDesc: "Soy bean curd in various textures for stews and sides",
          whatIsIt: "Korean tofu comes in firm (for pan-frying), medium (for stews) and soft/silken (for sundubu-jjigae). Fresh Korean tofu is often creamier and more flavorful than standard supermarket tofu.",
          howToUse: [
            "Make sundubu-jjigae with soft tofu",
            "Pan-fry firm tofu for dubu-jorim (braised tofu)",
            "Add cubed tofu to doenjang-jjigae",
            "Serve cold with seasoning as dubu-kimchi"
          ],
          pairsWith: ["Kimchi", "Gochujang", "Sesame oil", "Soy sauce", "Pork"],
          storage: "Refrigerate in water, change water daily. Use within a week.",
          substitutes: "Japanese silken tofu for soft, firm Chinese tofu for pan-frying.",
          proTip: "For crispier pan-fried tofu, press out excess water with paper towels before cooking.",
          youtube: [
            { title: "Sundubu Jjigae Recipe", url: "https://www.youtube.com/results?search_query=sundubu+jjigae+soft+tofu+stew" },
            { title: "Korean Braised Tofu", url: "https://www.youtube.com/results?search_query=dubu+jorim+korean+braised+tofu" }
          ]
        },
        {
          id: "dried-anchovies",
          name: "Dried Anchovies (Myeolchi)",
          native: "멸치",
          pronunciation: "myuhl-chi",
          quickDesc: "Tiny dried fish for broth and stir-fried snacks",
          whatIsIt: "Small dried anchovies used primarily for making the base stock in Korean cooking. Larger ones are stir-fried with soy sauce and syrup as a banchan. A basic item in any Korean pantry.",
          howToUse: [
            "Simmer large ones with kelp for stock (dashima-myeolchi yuksu)",
            "Stir-fry with soy sauce and corn syrup for banchan",
            "Add to stews for extra umami",
            "Eat small ones as a crunchy snack"
          ],
          pairsWith: ["Kelp (dashima)", "Soy sauce", "Corn syrup", "Gochujang", "Peanuts"],
          storage: "Refrigerate or freeze for best quality. Keeps for months.",
          substitutes: "Japanese niboshi (iriko) are similar. Fish sauce adds umami but not the body.",
          proTip: "Remove the heads and guts from large anchovies before making stock to prevent bitterness.",
          youtube: [
            { title: "How to Make Korean Anchovy Stock", url: "https://www.youtube.com/results?search_query=korean+anchovy+stock+myeolchi+recipe" },
            { title: "Stir-Fried Anchovies Banchan", url: "https://www.youtube.com/results?search_query=korean+stir+fried+anchovies+banchan" }
          ]
        },
        {
          id: "korean-fish-cakes",
          name: "Fish Cakes (Eomuk)",
          native: "어묵",
          pronunciation: "uh-mook",
          quickDesc: "Processed fish cakes for stews, soups and street food",
          whatIsIt: "Processed fish paste formed into sheets, tubes or balls. A staple in Korean street food (eomuk-guk) and used in tteokbokki, stews and kimbap. Available in various shapes.",
          howToUse: [
            "Add to tteokbokki",
            "Skewer and serve in anchovy broth (eomuk-tang)",
            "Stir-fry with vegetables",
            "Include in kimbap rolls"
          ],
          pairsWith: ["Tteokbokki sauce", "Anchovy broth", "Soy sauce", "Vegetables", "Rice cakes"],
          storage: "Refrigerate. Frozen keeps for months.",
          substitutes: "Japanese kamaboko or surimi products are similar.",
          proTip: "Blanch fish cakes in hot water briefly before using to remove excess oil.",
          youtube: [
            { title: "Korean Fish Cake Soup (Eomuk-tang)", url: "https://www.youtube.com/results?search_query=korean+fish+cake+soup+eomuk+tang" },
            { title: "Stir-Fried Fish Cakes", url: "https://www.youtube.com/results?search_query=korean+stir+fried+fish+cakes" }
          ]
        },
        {
          id: "bulgogi-beef",
          name: "Bulgogi-Cut Beef",
          native: "불고기",
          pronunciation: "bool-go-gi",
          quickDesc: "Thinly sliced beef for Korea's famous grilled dish",
          whatIsIt: "Very thinly sliced beef (usually ribeye or sirloin), often sold pre-sliced at Korean markets. The thin cut allows the sweet soy marinade to penetrate quickly and cook fast over high heat.",
          howToUse: [
            "Marinate in bulgogi sauce and grill or pan-fry",
            "Stir-fry with vegetables for bulgogi rice bowls",
            "Use as kimbap filling",
            "Make bulgogi cheese quesadillas (fusion)"
          ],
          pairsWith: ["Soy sauce", "Asian pear", "Sesame oil", "Garlic", "Sugar"],
          storage: "Refrigerate and use within 2 days, or freeze.",
          substitutes: "Ask butcher to slice ribeye paper-thin, or partially freeze and slice yourself.",
          proTip: "Freeze beef for 20-30 minutes before slicing. It's much easier to cut thin when firm.",
          youtube: [
            { title: "Maangchi: Bulgogi Recipe", url: "https://www.youtube.com/results?search_query=maangchi+bulgogi+recipe" },
            { title: "Authentic Korean Bulgogi", url: "https://www.youtube.com/results?search_query=authentic+korean+bulgogi+recipe" }
          ]
        },
        {
          id: "galbi-cut",
          name: "Short Ribs (Galbi)",
          native: "갈비",
          pronunciation: "gahl-bi",
          quickDesc: "Flanken-cut beef short ribs for grilling",
          whatIsIt: "Beef short ribs cut across the bone (flanken-style), creating thin strips with small bone sections. The bones add flavor during grilling, and the thin cut cooks quickly.",
          howToUse: [
            "Marinate overnight in galbi sauce and grill",
            "Braise for galbi-jjim (braised short ribs)",
            "Wrap in lettuce with rice and ssamjang",
            "Score the meat between bones for better marinade penetration"
          ],
          pairsWith: ["Soy sauce", "Asian pear", "Sesame oil", "Garlic", "Green onions"],
          storage: "Refrigerate and use within 2-3 days, or freeze.",
          substitutes: "LA galbi is the same cut. Regular short ribs work but need different cooking.",
          proTip: "Score the meat in a crosshatch pattern to help the marinade penetrate and the meat cook more evenly.",
          youtube: [
            { title: "Maangchi: LA Galbi Recipe", url: "https://www.youtube.com/results?search_query=maangchi+galbi+recipe" },
            { title: "Korean BBQ Short Ribs", url: "https://www.youtube.com/results?search_query=korean+bbq+short+ribs+galbi" }
          ]
        },
        {
          id: "pork-belly",
          name: "Pork Belly (Samgyeopsal)",
          native: "삼겹살",
          pronunciation: "sahm-gyup-sahl",
          quickDesc: "Thick-sliced pork belly for Korean BBQ",
          whatIsIt: "Uncured, thick-sliced pork belly, the most popular meat for Korean BBQ. The name means 'three-layered meat' referring to the alternating layers of meat and fat.",
          howToUse: [
            "Grill at the table for Korean BBQ",
            "Wrap in lettuce with garlic, ssamjang and kimchi",
            "Slice and add to stir-fries",
            "Boil for bossam (boiled pork wraps)"
          ],
          pairsWith: ["Lettuce", "Ssamjang", "Garlic", "Kimchi", "Perilla leaves"],
          storage: "Refrigerate and use within 3 days, or freeze.",
          substitutes: "Any pork belly cut works. Bacon is too thin and smoked.",
          proTip: "As is traditional, cut it into bite-sized pieces with scissors while grilling.",
          youtube: [
            { title: "Korean Pork Belly BBQ", url: "https://www.youtube.com/results?search_query=korean+pork+belly+bbq+samgyeopsal" },
            { title: "How to Eat Samgyeopsal", url: "https://www.youtube.com/results?search_query=how+to+eat+samgyeopsal+korean+bbq" }
          ]
        }
      ],
      "Pantry Staples": [
        {
          id: "gochugaru",
          name: "Gochugaru",
          native: "고춧가루",
          pronunciation: "go-choo-gah-roo",
          quickDesc: "Vibrant Korean chili flakes used in kimchi and most spicy dishes",
          whatIsIt: "Coarsely ground dried Korean red chilies with seeds removed. It's mildly spicy with a sweet, almost fruity undertone. The texture can be fine (for gochujang) or coarse (for kimchi).",
          howToUse: [
            "Make kimchi (it's what gives kimchi its red color)",
            "Add to stews, soups and stir-fries",
            "Make spicy dipping sauces with soy sauce and sesame oil",
            "Season blanched vegetables for banchan"
          ],
          pairsWith: ["Garlic", "Sesame oil", "Soy sauce", "Fish sauce", "Rice vinegar"],
          storage: "Freeze or refrigerate to maintain color and flavor. Fades in pantry over time.",
          substitutes: "Aleppo pepper is similar in heat and sweetness. Crushed red pepper is hotter and lacks the sweetness.",
          proTip: "Buy in bulk from Korean stores; it's much cheaper than small jars. Store it in the freezer to keep it vibrant.",
          youtube: [
            { title: "What is Gochugaru? Korean Chili Flakes Guide", url: "https://www.youtube.com/results?search_query=gochugaru+korean+chili+flakes+guide" },
            { title: "Spicy Korean Cucumber Salad", url: "https://www.youtube.com/results?search_query=korean+cucumber+salad+gochugaru" }
          ]
        },
        {
          id: "korean-rice-cakes",
          name: "Tteok (Rice Cakes)",
          native: "떡",
          pronunciation: "dduk/tteok",
          quickDesc: "Chewy rice cakes for soups, stir-fries and snacks",
          whatIsIt: "Chewy cylinders or ovals made from glutinous rice flour. Garaetteok (cylinder) is for stir-fries; thinly sliced tteokguk is for soup. They're pleasantly chewy when cooked right.",
          howToUse: [
            "Make tteokbokki (spicy stir-fried rice cakes in gochujang sauce)",
            "Add sliced rice cakes to tteokguk (New Year's soup)",
            "Thread on skewers with vegetables for grilling",
            "Add to hot pot or stews"
          ],
          pairsWith: ["Gochujang", "Fish cakes", "Vegetables", "Eggs", "Cheese (fusion style)"],
          storage: "Frozen: months. Fresh: use within a week. Dried: soak before using.",
          substitutes: "Nothing quite matches the chewiness, but thick udon works in some dishes.",
          proTip: "Soak frozen or dried rice cakes in cold water for at least 30 minutes before cooking so they cook more evenly.",
          youtube: [
            { title: "Maangchi: Tteokbokki Recipe", url: "https://www.youtube.com/results?search_query=maangchi+tteokbokki+recipe" },
            { title: "Korean Rice Cake Soup (Tteokguk)", url: "https://www.youtube.com/results?search_query=korean+rice+cake+soup+tteokguk" }
          ]
        },
        {
          id: "dashima",
          name: "Dried Kelp (Dashima)",
          native: "다시마",
          pronunciation: "dah-shi-mah",
          quickDesc: "Thick seaweed sheets for making stock",
          whatIsIt: "Dried kelp used primarily for making stock (often combined with dried anchovies). The white powder on the surface is glutamates, which carry the umami, so don't wash it off.",
          howToUse: [
            "Simmer with dried anchovies for Korean stock",
            "Remove before boiling (extended boiling releases slime)",
            "Cut into strips and braise as banchan",
            "Add to rice while cooking for extra nutrition"
          ],
          pairsWith: ["Dried anchovies", "Radish", "Soy sauce", "Green onions", "Tofu"],
          storage: "Cool, dry pantry in airtight container. Keeps for years.",
          substitutes: "Japanese kombu is the same thing.",
          proTip: "Don't wash off the white powder. It's natural glutamates, which provide umami.",
          youtube: [
            { title: "Korean Stock with Dashima", url: "https://www.youtube.com/results?search_query=korean+stock+dashima+kelp" },
            { title: "Dashima Uses in Korean Cooking", url: "https://www.youtube.com/results?search_query=dashima+korean+cooking+uses" }
          ]
        },
        {
          id: "dried-shiitake",
          name: "Dried Shiitake Mushrooms",
          native: "표고버섯",
          pronunciation: "pyo-go-buh-suht",
          quickDesc: "Intensely flavored dried mushrooms for soups and stir-fries",
          whatIsIt: "Dried shiitake mushrooms have a more concentrated flavor than fresh and create an umami-rich soaking liquid that's used as stock. Widely used in Korean temple cuisine and many vegetarian dishes.",
          howToUse: [
            "Soak in water until soft, reserve soaking liquid for stock",
            "Add to japchae, bibimbap and stir-fries",
            "Include in vegetarian stocks",
            "Slice for kimbap filling"
          ],
          pairsWith: ["Soy sauce", "Sesame oil", "Glass noodles", "Tofu", "Vegetables"],
          storage: "Cool, dry pantry. Keeps for years.",
          substitutes: "Fresh shiitake (reduce cooking time) or other dried mushrooms.",
          proTip: "Save the soaking liquid. It's full of umami and makes an excellent vegetarian stock.",
          youtube: [
            { title: "How to Rehydrate Dried Mushrooms", url: "https://www.youtube.com/results?search_query=how+to+rehydrate+dried+shiitake" },
            { title: "Korean Mushroom Dishes", url: "https://www.youtube.com/results?search_query=korean+shiitake+mushroom+recipes" }
          ]
        },
        {
          id: "roasted-seaweed",
          name: "Roasted Seaweed (Gim)",
          native: "김",
          pronunciation: "geem",
          quickDesc: "Thin, crispy seaweed sheets for wrapping and snacking",
          whatIsIt: "Paper-thin sheets of dried seaweed, roasted and seasoned with sesame oil and salt. Used for kimbap, as a rice wrap or eaten as a snack. Crispier and more strongly flavored than Japanese nori.",
          howToUse: [
            "Wrap rice for kimbap rolls",
            "Tear and mix into rice",
            "Eat as a snack or banchan",
            "Crumble over bibimbap"
          ],
          pairsWith: ["Rice", "Sesame oil", "Salt", "Any Korean meal"],
          storage: "Keep sealed to maintain crispness. Once opened, use quickly or seal tightly.",
          substitutes: "Japanese nori (less oily), unseasoned seaweed for kimbap.",
          proTip: "Korean gim for eating/wrapping is pre-seasoned. For kimbap, use the larger unseasoned sheets.",
          youtube: [
            { title: "How to Make Kimbap", url: "https://www.youtube.com/results?search_query=how+to+make+kimbap+korean+seaweed+roll" },
            { title: "Korean Seaweed Rice", url: "https://www.youtube.com/results?search_query=korean+seaweed+rice+gim" }
          ]
        },
        {
          id: "sesame-seeds",
          name: "Sesame Seeds (Kkaesogeum)",
          native: "깨소금",
          pronunciation: "kkae-so-geum",
          quickDesc: "Toasted sesame seeds for garnishing and flavoring",
          whatIsIt: "Toasted white or black sesame seeds, often ground with salt to make kkaesogeum (sesame salt). Used as a finishing garnish on almost every Korean dish.",
          howToUse: [
            "Sprinkle over namul, bibimbap and finished dishes",
            "Grind with salt for kkaesogeum seasoning",
            "Add to marinades and sauces",
            "Mix into rice"
          ],
          pairsWith: ["Sesame oil", "Soy sauce", "Vegetables", "Rice", "Noodles"],
          storage: "Room temperature in airtight container, or freeze for longer storage.",
          substitutes: "Japanese sesame seeds work. Pre-toasted saves time.",
          proTip: "Toast raw seeds in a dry pan until fragrant for the best flavor. Pre-toasted are convenient but less aromatic.",
          youtube: [
            { title: "How to Make Kkaesogeum", url: "https://www.youtube.com/results?search_query=how+to+make+kkaesogeum+sesame+salt" },
            { title: "Toasting Sesame Seeds", url: "https://www.youtube.com/results?search_query=toasting+sesame+seeds+korean+cooking" }
          ]
        },
        {
          id: "perilla-oil",
          name: "Perilla Oil (Deulgireum)",
          native: "들기름",
          pronunciation: "deul-gi-reum",
          quickDesc: "Nutty oil from perilla seeds for an authentic Korean flavor",
          whatIsIt: "Oil pressed from roasted perilla seeds, with a unique nutty, earthy flavor distinct from sesame oil. Traditional in Korean cooking and adds an irreplaceable flavor to namul and Korean dishes.",
          howToUse: [
            "Season namul and vegetable side dishes",
            "Drizzle over bibimbap",
            "Mix into sauces",
            "Use in traditional Korean recipes calling for it"
          ],
          pairsWith: ["Vegetables", "Soy sauce", "Salt", "Garlic", "Fernbrake"],
          storage: "Refrigerate after opening, since it goes rancid faster than sesame oil.",
          substitutes: "Sesame oil is similar, though it doesn't taste the same as perilla oil.",
          proTip: "Perilla oil has a shorter shelf life than sesame oil, so buy small bottles and use them quickly.",
          youtube: [
            { title: "Perilla Oil in Korean Cooking", url: "https://www.youtube.com/results?search_query=perilla+oil+korean+cooking+deulgireum" },
            { title: "Namul with Perilla Oil", url: "https://www.youtube.com/results?search_query=korean+namul+perilla+oil" }
          ]
        },
        {
          id: "jujube",
          name: "Dried Jujube (Daechu)",
          native: "대추",
          pronunciation: "dae-choo",
          quickDesc: "Sweet dried red dates for soups, teas and desserts",
          whatIsIt: "Dried red dates with a sweet, apple-like flavor. Used in traditional Korean cooking for soups (especially samgyetang), desserts and teas. Also valued in traditional medicine.",
          howToUse: [
            "Add to samgyetang (ginseng chicken soup)",
            "Make jujube tea",
            "Include in yakshik (sweet rice dessert)",
            "Add to sweet soups and porridges"
          ],
          pairsWith: ["Ginseng", "Chicken", "Sweet rice", "Chestnuts", "Pine nuts"],
          storage: "Room temperature in airtight container. Keeps for months.",
          substitutes: "Medjool dates have similar sweetness but different flavor.",
          proTip: "Slice jujubes and remove the pit before adding to dishes for easier eating.",
          youtube: [
            { title: "Samgyetang with Jujube", url: "https://www.youtube.com/results?search_query=samgyetang+korean+ginseng+chicken+soup" },
            { title: "Jujube Tea Recipe", url: "https://www.youtube.com/results?search_query=korean+jujube+tea+daechu+cha" }
          ]
        },
        {
          id: "pine-nuts",
          name: "Pine Nuts (Jat)",
          native: "잣",
          pronunciation: "jaht",
          quickDesc: "Small, rich nuts for garnishing and sauces",
          whatIsIt: "Small, creamy nuts from Korean pine trees. Used as a garnish, ground into porridges and added to traditional desserts. Korean pine nuts are longer and more slender than Mediterranean varieties.",
          howToUse: [
            "Garnish traditional dishes and desserts",
            "Make jatjuk (pine nut porridge)",
            "Add to yakshik and other sweet dishes",
            "Blend into sauces"
          ],
          pairsWith: ["Rice porridge", "Honey", "Jujube", "Chestnuts", "Sesame"],
          storage: "Refrigerate or freeze. Their high oil content makes them go rancid quickly.",
          substitutes: "Italian pine nuts work but have different flavor.",
          proTip: "Toast briefly in a dry pan to bring out the flavor, but watch carefully because they burn quickly.",
          youtube: [
            { title: "Korean Pine Nut Porridge", url: "https://www.youtube.com/results?search_query=jatjuk+korean+pine+nut+porridge" },
            { title: "Pine Nuts in Korean Cooking", url: "https://www.youtube.com/results?search_query=korean+pine+nuts+cooking" }
          ]
        },
        {
          id: "korean-pancake-mix",
          name: "Korean Pancake Mix (Buchim-garu)",
          native: "부침가루",
          pronunciation: "boo-chim-gah-roo",
          quickDesc: "Pre-mixed flour for crispy Korean pancakes",
          whatIsIt: "A flour blend specifically formulated for making Korean pancakes (jeon and buchimgae). Contains flour, cornstarch, salt and sometimes baking powder for extra crispiness.",
          howToUse: [
            "Make pajeon (green onion pancakes)",
            "Make kimchijeon (kimchi pancakes)",
            "Batter vegetables and seafood for jeon",
            "Mix with water to desired consistency"
          ],
          pairsWith: ["Green onions", "Kimchi", "Seafood", "Zucchini", "Dipping sauce"],
          storage: "Cool, dry pantry. Check expiration date.",
          substitutes: "Mix all-purpose flour with a little cornstarch and salt.",
          proTip: "Use ice cold water and don't overmix. Lumps are fine and help create a crispier texture.",
          youtube: [
            { title: "How to Make Korean Pancakes", url: "https://www.youtube.com/results?search_query=korean+pancake+buchimgae+recipe" },
            { title: "Crispy Pajeon Tips", url: "https://www.youtube.com/results?search_query=crispy+pajeon+tips+korean+pancake" }
          ]
        }
      ]
    }
  },
  thailand: {
    name: "Thailand",
    flag: "🇹🇭",
    categories: {
      "Sauces & Condiments": [
        {
          id: "fish-sauce",
          name: "Fish Sauce",
          native: "น้ำปลา",
          pronunciation: "nahm plah",
          quickDesc: "Pungent, savory liquid that adds depth to Southeast Asian cooking",
          whatIsIt: "A thin, amber liquid made from fermented fish and salt. It smells strong on its own but mellows in cooking, adding deep savory (umami) flavor. Quality varies a lot; good fish sauce is clear and reddish-brown.",
          howToUse: [
            "Use as the salt element in Thai, Vietnamese and Filipino cooking",
            "Add to stir-fries, curries and soups",
            "Make dipping sauces with lime, sugar and chili",
            "Add a splash to any dish that needs more umami"
          ],
          pairsWith: ["Lime juice", "Palm sugar", "Garlic", "Chili", "Herbs"],
          storage: "Room temperature is fine. Refrigerate if you prefer; it rarely goes bad.",
          substitutes: "Soy sauce + a splash of Worcestershire. For vegetarian: mushroom sauce or soy sauce.",
          proTip: "Red Boat and Squid brand are excellent. If the ingredients list more than fish and salt, skip it.",
          youtube: [
            { title: "Hot Thai Kitchen: All About Fish Sauce", url: "https://www.youtube.com/results?search_query=hot+thai+kitchen+fish+sauce+guide" },
            { title: "Prik Nam Pla (Fish Sauce Condiment)", url: "https://www.youtube.com/results?search_query=prik+nam+pla+fish+sauce+chili+dip" }
          ]
        },
        {
          id: "thai-curry-paste",
          name: "Thai Curry Paste",
          native: "พริกแกง",
          pronunciation: "prik gaeng",
          quickDesc: "Aromatic paste of chilies, lemongrass and spices for curries",
          whatIsIt: "A pounded paste of fresh chilies, lemongrass, galangal, shallots, garlic and spices. Red curry paste is the most versatile; green is spicier; yellow is mild with turmeric; massaman is warm and spiced.",
          howToUse: [
            "Fry in coconut cream (the thick part) to release oils and aroma",
            "Add coconut milk, protein and vegetables for curry",
            "Mix into soups and stir-fries",
            "Use as a marinade base for grilled meats"
          ],
          pairsWith: ["Coconut milk", "Thai basil", "Fish sauce", "Palm sugar", "Kaffir lime leaves"],
          storage: "Refrigerate after opening. Homemade: up to 2 weeks. Jarred: follow package date.",
          substitutes: "No real substitute for the fresh herb flavor. Indian curry paste is different but can work in fusion.",
          proTip: "Mae Ploy and Maesri are reliable brands. Fry the paste in coconut cream first to build depth.",
          youtube: [
            { title: "Hot Thai Kitchen: Thai Red Curry", url: "https://www.youtube.com/results?search_query=hot+thai+kitchen+red+curry+recipe" },
            { title: "How to Make Green Curry Paste", url: "https://www.youtube.com/results?search_query=how+to+make+thai+green+curry+paste" },
            { title: "Thai Panang Curry Recipe", url: "https://www.youtube.com/results?search_query=thai+panang+curry+recipe" }
          ]
        },
        {
          id: "oyster-sauce-thai",
          name: "Oyster Sauce (Thai Style)",
          native: "ซอสหอยนางรม",
          pronunciation: "sauce hoi nahng rom",
          quickDesc: "Sweet, briny sauce for stir-fries and marinades",
          whatIsIt: "A thick, dark sauce made from oyster extracts with a sweet, savory flavor. Maekrua brand is the Thai favorite and has a slightly different profile than Chinese versions.",
          howToUse: [
            "Add to stir-fries in the last minute of cooking",
            "Use in pad see ew and other noodle dishes",
            "Mix into marinades for grilled meats",
            "Drizzle over blanched vegetables"
          ],
          pairsWith: ["Soy sauce", "Garlic", "Dark soy sauce", "Wide rice noodles", "Chinese broccoli"],
          storage: "Refrigerate after opening. Lasts several months.",
          substitutes: "Chinese oyster sauce works fine. Vegetarian mushroom sauce for plant-based.",
          proTip: "Maekrua (with the man riding the oyster) is considered the authentic Thai brand.",
          youtube: [
            { title: "Thai Oyster Sauce Stir-Fry", url: "https://www.youtube.com/results?search_query=thai+oyster+sauce+stir+fry" },
            { title: "Pad See Ew Recipe", url: "https://www.youtube.com/results?search_query=pad+see+ew+recipe+authentic" }
          ]
        },
        {
          id: "palm-sugar",
          name: "Palm Sugar",
          native: "น้ำตาลปี๊บ",
          pronunciation: "nahm tahn peep",
          quickDesc: "Unrefined sugar with caramel notes for authentic Thai sweetness",
          whatIsIt: "Sugar made from the sap of palm trees (coconut or toddy palm). It has a complex, caramel-like sweetness with hints of butterscotch. Sold as paste, discs or granules.",
          howToUse: [
            "Use in pad thai sauce for authentic sweetness",
            "Add to curries to balance fish sauce",
            "Make Thai dipping sauces",
            "Use in desserts like mango sticky rice"
          ],
          pairsWith: ["Fish sauce", "Tamarind", "Lime", "Coconut milk", "Chilies"],
          storage: "Room temperature in airtight container. Can harden but still usable.",
          substitutes: "Light brown sugar or coconut sugar are closest. White sugar works but lacks complexity.",
          proTip: "If your palm sugar is hard as a rock, microwave briefly or grate with a cheese grater.",
          youtube: [
            { title: "Palm Sugar in Thai Cooking", url: "https://www.youtube.com/results?search_query=palm+sugar+thai+cooking" },
            { title: "How to Soften Palm Sugar", url: "https://www.youtube.com/results?search_query=how+to+use+palm+sugar" }
          ]
        },
        {
          id: "tamarind-paste",
          name: "Tamarind Paste",
          native: "มะขามเปียก",
          pronunciation: "ma-kahm bpiak",
          quickDesc: "Tangy, fruity paste used in pad thai and sour soups",
          whatIsIt: "A sour, fruity paste made from tamarind pulp. It provides the signature tang in pad thai and many Thai soups. Available as whole pods, paste block (needs dissolving) or ready-made concentrate.",
          howToUse: [
            "Dissolve block paste in warm water, strain out seeds and fibers",
            "Add to pad thai for authentic sour-sweet flavor",
            "Use in tom yum and other sour soups",
            "Make tamarind dipping sauce for satay"
          ],
          pairsWith: ["Palm sugar", "Fish sauce", "Chilies", "Garlic", "Shallots"],
          storage: "Refrigerate after opening. Paste blocks keep for months.",
          substitutes: "Lime juice plus a little brown sugar approximates it, though the flavor won't be the same.",
          proTip: "Block tamarind (soak and strain yourself) has better flavor than concentrate, but concentrate is more convenient.",
          youtube: [
            { title: "How to Use Tamarind", url: "https://www.youtube.com/results?search_query=how+to+use+tamarind+paste+thai" },
            { title: "Authentic Pad Thai with Tamarind", url: "https://www.youtube.com/results?search_query=authentic+pad+thai+tamarind" }
          ]
        },
        {
          id: "thai-sweet-chili",
          name: "Thai Sweet Chili Sauce",
          native: "น้ำจิ้มไก่",
          pronunciation: "nahm jim gai",
          quickDesc: "Sweet, tangy, mildly spicy dipping sauce",
          whatIsIt: "A sweet and tangy sauce with mild heat, traditionally served with fried chicken and spring rolls. Mae Ploy brand is the classic. Made from chilies, garlic, sugar and vinegar.",
          howToUse: [
            "Dip spring rolls and fried appetizers",
            "Serve with grilled chicken",
            "Glaze grilled shrimp or wings",
            "Add to stir-fries for quick sweet-spicy flavor"
          ],
          pairsWith: ["Spring rolls", "Fried chicken", "Grilled meats", "Tofu", "Seafood"],
          storage: "Refrigerate after opening. Lasts for months.",
          substitutes: "Mix equal parts honey and sriracha with a splash of vinegar.",
          proTip: "Make your own spicier version by adding minced fresh chilies to store-bought sauce.",
          youtube: [
            { title: "Thai Sweet Chili Sauce Recipe", url: "https://www.youtube.com/results?search_query=thai+sweet+chili+sauce+recipe" },
            { title: "Uses for Sweet Chili Sauce", url: "https://www.youtube.com/results?search_query=thai+sweet+chili+sauce+uses" }
          ]
        },
        {
          id: "shrimp-paste",
          name: "Shrimp Paste (Kapi)",
          native: "กะปิ",
          pronunciation: "ga-pi",
          quickDesc: "Intense fermented shrimp paste for curry pastes and dips",
          whatIsIt: "A thick, pungent paste of fermented ground shrimp. Authentic curry pastes and some dipping sauces rely on it. It smells very strong raw but mellows when cooked.",
          howToUse: [
            "Add to curry pastes (traditional recipes always include it)",
            "Roast and mix into nam prik dipping sauces",
            "Add tiny amounts to stir-fries for umami",
            "Include in pad thai for depth"
          ],
          pairsWith: ["Chilies", "Lime", "Garlic", "Fish sauce", "Palm sugar"],
          storage: "Refrigerate. Keeps indefinitely due to high salt content.",
          substitutes: "Vietnamese or Malaysian shrimp paste work. Nothing vegetarian replicates it.",
          proTip: "A little goes a long way. Start with less than you think you need; you can always add more.",
          youtube: [
            { title: "How to Use Shrimp Paste", url: "https://www.youtube.com/results?search_query=how+to+use+shrimp+paste+kapi+thai" },
            { title: "Thai Curry Paste with Kapi", url: "https://www.youtube.com/results?search_query=thai+curry+paste+shrimp+paste" }
          ]
        },
        {
          id: "thai-soy-sauce",
          name: "Thai Thin Soy Sauce",
          native: "ซีอิ๊วขาว",
          pronunciation: "see-ew khao",
          quickDesc: "Light, salty soy sauce for Thai cooking",
          whatIsIt: "Thai thin soy sauce is lighter and saltier than Chinese light soy. The Golden Mountain and Healthy Boy brands are Thai standards. Used for seasoning where you want salt without darkening the dish.",
          howToUse: [
            "Season stir-fries and fried rice",
            "Add to noodle dishes",
            "Use in marinades",
            "Mix into dipping sauces"
          ],
          pairsWith: ["Fish sauce", "Oyster sauce", "Garlic", "White pepper", "Vegetables"],
          storage: "Room temperature. Keeps for years.",
          substitutes: "Chinese light soy sauce or Japanese soy sauce work fine.",
          proTip: "Golden Mountain seasoning sauce is a popular Thai alternative with a slightly different flavor.",
          youtube: [
            { title: "Thai Soy Sauce Types", url: "https://www.youtube.com/results?search_query=thai+soy+sauce+types+cooking" },
            { title: "Golden Mountain Sauce Uses", url: "https://www.youtube.com/results?search_query=golden+mountain+sauce+thai" }
          ]
        },
        {
          id: "thai-dark-soy",
          name: "Thai Sweet Dark Soy Sauce",
          native: "ซีอิ๊วดำ",
          pronunciation: "see-ew dam",
          quickDesc: "Thick, sweet soy sauce for color and caramel notes",
          whatIsIt: "A thick, almost syrupy soy sauce with added molasses or caramel. Gives pad see ew its signature dark color. Much sweeter and thicker than Chinese dark soy.",
          howToUse: [
            "Add to pad see ew for color and sweetness",
            "Use in braised dishes",
            "Mix with thin soy sauce for balance",
            "Add to marinades for caramelization"
          ],
          pairsWith: ["Thin soy sauce", "Oyster sauce", "Wide rice noodles", "Garlic", "Chinese broccoli"],
          storage: "Room temperature. Keeps indefinitely.",
          substitutes: "Chinese dark soy sauce + a little molasses or brown sugar.",
          proTip: "Healthy Boy brand is the most common. Use it sparingly, since it's very sweet and will darken your dish quickly.",
          youtube: [
            { title: "Thai Dark Soy Sauce Guide", url: "https://www.youtube.com/results?search_query=thai+dark+soy+sauce+see+ew+dam" },
            { title: "Pad See Ew Dark Soy", url: "https://www.youtube.com/results?search_query=pad+see+ew+dark+soy+sauce" }
          ]
        },
        {
          id: "sriracha",
          name: "Sriracha",
          native: "ศรีราชา",
          pronunciation: "see-rah-chah",
          quickDesc: "Famous hot sauce from Thailand's coast",
          whatIsIt: "A bright red hot sauce made from chili peppers, garlic, sugar, salt and vinegar. Named after the coastal city of Si Racha. The Thai original (Sriraja Panich) is different from the famous American Huy Fong brand.",
          howToUse: [
            "Add to pho and noodle soups",
            "Mix into dipping sauces",
            "Drizzle over fried rice and noodles",
            "Use as a condiment for eggs and sandwiches"
          ],
          pairsWith: ["Hoisin sauce", "Lime", "Noodles", "Rice", "Eggs"],
          storage: "Refrigerate after opening for best flavor. Keeps for months.",
          substitutes: "Sambal oelek or other garlic chili sauces.",
          proTip: "Thai Sriraja Panich has a thinner consistency and slightly different flavor than American Huy Fong.",
          youtube: [
            { title: "Sriracha Sauce History", url: "https://www.youtube.com/results?search_query=sriracha+sauce+history+thailand" },
            { title: "How to Use Sriracha", url: "https://www.youtube.com/results?search_query=sriracha+sauce+recipes+uses" }
          ]
        },
        {
          id: "nam-prik-pao",
          name: "Roasted Chili Paste (Nam Prik Pao)",
          native: "น้ำพริกเผา",
          pronunciation: "nahm prik pow",
          quickDesc: "Sweet, smoky chili jam for tom yum and stir-fries",
          whatIsIt: "A thick, dark paste of roasted chilies, shallots, garlic, shrimp paste and palm sugar. It's sweet, smoky and savory, and it goes into many tom yum soups.",
          howToUse: [
            "Add to tom yum soup for the creamy red version (tom yum goong)",
            "Stir into fried rice",
            "Use as a spread or dip",
            "Add to stir-fries for instant complexity"
          ],
          pairsWith: ["Coconut milk", "Lime", "Fish sauce", "Shrimp", "Rice"],
          storage: "Refrigerate after opening. Lasts for months.",
          substitutes: "Sambal oelek + a little sugar and fish sauce approximates it.",
          proTip: "Maesri and Pantai are good brands. This is what makes tom yum 'creamy' (tom yum nam khon).",
          youtube: [
            { title: "Nam Prik Pao Recipe", url: "https://www.youtube.com/results?search_query=nam+prik+pao+recipe+roasted+chili+paste" },
            { title: "Tom Yum with Nam Prik Pao", url: "https://www.youtube.com/results?search_query=tom+yum+nam+prik+pao" }
          ]
        },
        {
          id: "thai-seasoning-sauce",
          name: "Golden Mountain Seasoning Sauce",
          native: "ซอสปรุงรส",
          pronunciation: "sauce prung rot",
          quickDesc: "Umami-rich seasoning sauce similar to soy sauce",
          whatIsIt: "A Thai seasoning sauce made from fermented soybeans with a flavor between soy sauce and Maggi seasoning. Saltier and more savory than regular soy sauce with a unique umami punch.",
          howToUse: [
            "Season stir-fries and fried rice",
            "Add to soups for extra umami",
            "Use in marinades",
            "Mix into dipping sauces"
          ],
          pairsWith: ["Garlic", "White pepper", "Fish sauce", "Vegetables", "Noodles"],
          storage: "Room temperature. Keeps indefinitely.",
          substitutes: "Maggi seasoning or light soy sauce with a splash of Worcestershire.",
          proTip: "Many Thai cooks prefer Golden Mountain over regular soy sauce for stir-fries.",
          youtube: [
            { title: "Golden Mountain Sauce Guide", url: "https://www.youtube.com/results?search_query=golden+mountain+seasoning+sauce+thai" },
            { title: "Thai Fried Rice with Golden Mountain", url: "https://www.youtube.com/results?search_query=thai+fried+rice+golden+mountain+sauce" }
          ]
        },
        {
          id: "thai-chili-flakes",
          name: "Thai Chili Flakes (Prik Pon)",
          native: "พริกป่น",
          pronunciation: "prik bpon",
          quickDesc: "Toasted dried chili flakes for heat",
          whatIsIt: "Dried Thai chilies that have been toasted and crushed. Adds both heat and a toasty, slightly smoky flavor. A tableside condiment at every noodle shop.",
          howToUse: ["Sprinkle on noodles and soups", "Add to stir-fries", "Mix into dipping sauces", "Season fried rice"],
          pairsWith: ["Fish sauce", "Lime", "Noodles", "Soups", "Rice dishes"],
          storage: "Airtight container in cool, dark place. Keeps for months.",
          substitutes: "Korean gochugaru or crushed red pepper (different heat profile).",
          proTip: "Toast your own dried chilies and grind fresh for the best flavor."
        },
        {
          id: "black-soy-sauce",
          name: "Black Soy Sauce (See Ew Dam)",
          native: "ซีอิ๊วดำหวาน",
          pronunciation: "see-ew dam waan",
          quickDesc: "Thick molasses-sweetened soy for color",
          whatIsIt: "An extra-thick, sweet soy sauce with molasses that adds deep color and caramel sweetness. Even thicker and sweeter than regular Thai dark soy. Use sparingly.",
          howToUse: ["Add color to pad see ew", "Use in braised dishes", "Mix with thin soy sauce", "Brush on grilled meats for color"],
          pairsWith: ["Thin soy sauce", "Wide rice noodles", "Chinese broccoli", "Pork", "Garlic"],
          storage: "Room temperature. Keeps indefinitely.",
          substitutes: "Regular dark soy sauce plus molasses or brown sugar.",
          proTip: "Start with less than you think you need. It's very concentrated and will darken your dish quickly."
        },
        {
          id: "yellow-bean-sauce",
          name: "Yellow Bean Sauce",
          native: "เต้าเจี้ยว",
          pronunciation: "tao jiao",
          quickDesc: "Fermented soybean sauce for stir-fries",
          whatIsIt: "A salty paste of fermented yellow soybeans. Adds deep savory flavor to Thai-Chinese stir-fries. May contain whole beans or be smooth.",
          howToUse: ["Stir-fry with morning glory and other vegetables", "Add to fried rice", "Use in marinades", "Include in noodle dishes"],
          pairsWith: ["Garlic", "Chilies", "Oyster sauce", "Morning glory", "Pork"],
          storage: "Refrigerate after opening. Keeps for months.",
          substitutes: "Miso paste thinned with soy sauce approximates it.",
          proTip: "Look for Healthy Boy or Pantai brands for authentic Thai flavor."
        },
        {
          id: "thai-chili-vinegar",
          name: "Thai Chili Vinegar",
          native: "พริกน้ำส้ม",
          pronunciation: "prik nam som",
          quickDesc: "Vinegar with sliced chilies for noodles",
          whatIsIt: "White vinegar with sliced fresh Thai chilies. A standard tableside condiment for noodle soups, adding sourness and heat. Often in a small bottle at every noodle shop.",
          howToUse: ["Add to noodle soups for sourness", "Splash on fried rice", "Use as a dipping sauce component", "Season rice porridge"],
          pairsWith: ["Noodle soups", "Fried rice", "Congee", "Dumplings", "Fish sauce"],
          storage: "Room temperature. Keeps indefinitely.",
          substitutes: "Make your own: slice Thai chilies into white or rice vinegar.",
          proTip: "Part of the 'four flavors' condiment set (with sugar, fish sauce and chili flakes)."
        }
      ],
      "Produce": [
        {
          id: "thai-basil",
          name: "Thai Basil",
          native: "โหระพา",
          pronunciation: "ho-rah-pah",
          quickDesc: "Anise-scented herb for curries and stir-fries",
          whatIsIt: "A sturdy basil with pointed leaves, purple stems and a distinctive anise/licorice flavor. It holds up to heat much better than Italian basil and adds an irreplaceable flavor to Thai dishes.",
          howToUse: [
            "Add to curries in the last few minutes",
            "Stir into pad kra pao (basil chicken) just before serving",
            "Use as a garnish for pho and noodle soups",
            "Eat fresh alongside dishes as part of a herb plate"
          ],
          pairsWith: ["Chili", "Garlic", "Fish sauce", "Coconut milk", "Chicken"],
          storage: "Store stems in water like flowers, loosely covered. Use within a week.",
          substitutes: "Italian basil is sweeter and less sturdy but usable. Add a tiny bit of tarragon for the anise note.",
          proTip: "Don't substitute dried Thai basil, which loses its flavor. Use fresh or leave it out.",
          youtube: [
            { title: "Pad Kra Pao (Thai Basil Chicken)", url: "https://www.youtube.com/results?search_query=pad+kra+pao+thai+basil+chicken+recipe" },
            { title: "Hot Thai Kitchen: Thai Holy Basil Stir Fry", url: "https://www.youtube.com/results?search_query=hot+thai+kitchen+basil+stir+fry" }
          ]
        },
        {
          id: "holy-basil",
          name: "Holy Basil (Krapao)",
          native: "กะเพรา",
          pronunciation: "gra-pow",
          quickDesc: "Peppery, clove-scented basil for the famous stir-fry",
          whatIsIt: "A different basil variety with serrated leaves and a peppery, clove-like flavor. This is the authentic basil for pad krapao (the famous stir-fry). More pungent and spicy than Thai sweet basil.",
          howToUse: [
            "Use in pad krapao (Thai holy basil stir-fry)",
            "Add to spicy stir-fries",
            "Garnish curries and soups",
            "Cook with ground pork or chicken"
          ],
          pairsWith: ["Chilies", "Garlic", "Fish sauce", "Oyster sauce", "Ground meat"],
          storage: "Very perishable. Use within 3-4 days. Store in water like flowers.",
          substitutes: "Thai basil works but has a different flavor; holy basil has no true match.",
          proTip: "Holy basil is hard to find fresh outside Asia. Some Asian grocery stores carry it frozen.",
          youtube: [
            { title: "Authentic Pad Krapao Recipe", url: "https://www.youtube.com/results?search_query=authentic+pad+krapao+holy+basil" },
            { title: "Thai vs Holy Basil Difference", url: "https://www.youtube.com/results?search_query=thai+basil+vs+holy+basil+difference" }
          ]
        },
        {
          id: "lemongrass",
          name: "Lemongrass",
          native: "ตะไคร้",
          pronunciation: "tah-khrai",
          quickDesc: "Citrusy, fragrant stalks for soups, curries and marinades",
          whatIsIt: "A tall, fibrous grass with an intense lemon-citrus flavor and floral aroma. Only the bottom 4-6 inches of the pale, tender part is used. It's fibrous and usually removed before eating (unless very finely minced).",
          howToUse: [
            "Bruise and add whole to soups (remove before serving)",
            "Slice very thin or mince finely for curry pastes",
            "Thread chunks on skewers as aromatic handles for grilling",
            "Steep in hot water with ginger for tea"
          ],
          pairsWith: ["Galangal", "Kaffir lime leaves", "Coconut milk", "Shrimp", "Chicken"],
          storage: "Refrigerate wrapped in plastic for 2-3 weeks. Freeze for months (slice first).",
          substitutes: "Lemon zest + a small amount of ginger is the best approximation.",
          proTip: "Peel off the tough outer layers until you reach the softer, pale interior. That's the part with the most flavor.",
          youtube: [
            { title: "How to Use Lemongrass", url: "https://www.youtube.com/results?search_query=how+to+use+lemongrass+cooking" },
            { title: "Tom Yum Soup Recipe", url: "https://www.youtube.com/results?search_query=tom+yum+soup+recipe+lemongrass" }
          ]
        },
        {
          id: "galangal",
          name: "Galangal",
          native: "ข่า",
          pronunciation: "khaa",
          quickDesc: "Ginger-like rhizome with piney, citrus flavor",
          whatIsIt: "A rhizome that looks similar to ginger but tastes distinctly different: sharper and more citrusy, with pine and pepper notes. Tom yum and tom kha soups depend on it.",
          howToUse: [
            "Slice and add to tom yum and tom kha soups",
            "Pound into curry pastes",
            "Add to marinades for grilled meats",
            "Use in stir-fries (slice thin or remove before serving)"
          ],
          pairsWith: ["Lemongrass", "Kaffir lime leaves", "Coconut milk", "Chicken", "Shrimp"],
          storage: "Refrigerate for 2-3 weeks. Freeze sliced for months.",
          substitutes: "Ginger is NOT the same but can work in emergencies. Use 50% more to compensate for milder flavor.",
          proTip: "Galangal is much harder than ginger and doesn't grate well. Slice it thinly instead.",
          youtube: [
            { title: "Galangal vs Ginger", url: "https://www.youtube.com/results?search_query=galangal+vs+ginger+difference" },
            { title: "How to Use Galangal", url: "https://www.youtube.com/results?search_query=how+to+use+galangal+thai+cooking" }
          ]
        },
        {
          id: "kaffir-lime-leaves",
          name: "Kaffir Lime Leaves",
          native: "ใบมะกรูด",
          pronunciation: "bai ma-grood",
          quickDesc: "Intensely aromatic double leaves for soups and curries",
          whatIsIt: "The leaves of the kaffir lime tree, with a unique double-leaf shape and an intensely floral, citrus aroma. One of the core aromatics in Thai cooking. Used whole or very finely shredded.",
          howToUse: [
            "Add whole to soups and curries (remove before eating)",
            "Shred very finely and add to curry pastes",
            "Garnish fried fish cakes and salads",
            "Infuse into coconut milk for desserts"
          ],
          pairsWith: ["Lemongrass", "Galangal", "Coconut milk", "Chilies", "Chicken"],
          storage: "Freeze in zip-lock bags. They keep for months and can be used straight from frozen.",
          substitutes: "Lime zest provides some citrus but not the floral notes. No true substitute.",
          proTip: "Remove the tough center vein if shredding. The leaves are too tough to eat whole, so always shred or remove them.",
          youtube: [
            { title: "How to Use Kaffir Lime Leaves", url: "https://www.youtube.com/results?search_query=how+to+use+kaffir+lime+leaves+thai" },
            { title: "Tom Kha Gai with Kaffir Lime", url: "https://www.youtube.com/results?search_query=tom+kha+gai+kaffir+lime+leaves" }
          ]
        },
        {
          id: "thai-chilies",
          name: "Thai Bird's Eye Chilies",
          native: "พริกขี้หนู",
          pronunciation: "prik kee noo",
          quickDesc: "Small but intensely hot chilies for serious heat",
          whatIsIt: "Tiny chilies (1-2 inches) with serious heat, about 50,000-100,000 Scoville units. The name 'prik kee noo' translates to 'mouse droppings chili', referring to their small size.",
          howToUse: [
            "Slice and add to stir-fries",
            "Pound into curry pastes",
            "Add to fish sauce for prik nam pla dipping sauce",
            "Use in salads like som tam (papaya salad)"
          ],
          pairsWith: ["Fish sauce", "Lime", "Garlic", "Palm sugar", "Herbs"],
          storage: "Refrigerate for 1-2 weeks. Freeze for months.",
          substitutes: "Serrano chilies (milder) or cayenne (similar heat, different flavor).",
          proTip: "Wear gloves when handling them, and don't touch your face. The heat comes from the seeds and membranes.",
          youtube: [
            { title: "Thai Chilies Guide", url: "https://www.youtube.com/results?search_query=thai+bird+eye+chili+cooking" },
            { title: "Prik Nam Pla Recipe", url: "https://www.youtube.com/results?search_query=prik+nam+pla+thai+chili+fish+sauce" }
          ]
        },
        {
          id: "thai-eggplant",
          name: "Thai Eggplant",
          native: "มะเขือเปราะ",
          pronunciation: "ma-khuea pro",
          quickDesc: "Small, round green eggplants with slightly bitter crunch",
          whatIsIt: "Golf ball-sized green and white striped eggplants with a crunchy texture even when cooked. They have a slightly bitter flavor that goes well with rich curries.",
          howToUse: [
            "Quarter and add to green and red curries",
            "Eat raw with nam prik dipping sauces",
            "Add to stir-fries",
            "Include in Thai-style salads"
          ],
          pairsWith: ["Curry paste", "Coconut milk", "Fish sauce", "Thai basil", "Chilies"],
          storage: "Refrigerate for up to a week.",
          substitutes: "There's no exact substitute. Japanese or Italian eggplant work but lack the crunch.",
          proTip: "Keep them in water after cutting to prevent browning. Add to curries in the last few minutes to maintain texture.",
          youtube: [
            { title: "Thai Eggplant in Curry", url: "https://www.youtube.com/results?search_query=thai+eggplant+green+curry" },
            { title: "Thai Eggplant Varieties", url: "https://www.youtube.com/results?search_query=thai+eggplant+varieties+cooking" }
          ]
        },
        {
          id: "pea-eggplant",
          name: "Pea Eggplant (Makhuea Puang)",
          native: "มะเขือพวง",
          pronunciation: "ma-khuea puang",
          quickDesc: "Tiny, bitter eggplants that pop in your mouth",
          whatIsIt: "Pea-sized green eggplants that grow in clusters. They have an intense, slightly bitter flavor and pop in your mouth when bitten. Traditional in green curry and jungle curry.",
          howToUse: [
            "Add whole to green curry",
            "Include in jungle curry (gaeng pa)",
            "Use in nam prik (chili dips)",
            "Stir-fry with minced pork"
          ],
          pairsWith: ["Green curry paste", "Holy basil", "Fish sauce", "Chilies", "Pork"],
          storage: "Refrigerate and use within a few days. Very perishable.",
          substitutes: "No real substitute. Regular green peas don't have the same flavor or texture.",
          proTip: "They're quite bitter and an acquired taste, but authentic green curry calls for them.",
          youtube: [
            { title: "Pea Eggplant in Thai Cooking", url: "https://www.youtube.com/results?search_query=pea+eggplant+thai+curry+makhuea+puang" },
            { title: "Authentic Green Curry with Pea Eggplant", url: "https://www.youtube.com/results?search_query=authentic+green+curry+pea+eggplant" }
          ]
        },
        {
          id: "thai-ginger",
          name: "Ginger (Khing)",
          native: "ขิง",
          pronunciation: "khing",
          quickDesc: "Warming root for stir-fries and medicinal dishes",
          whatIsIt: "Fresh ginger root is used differently than galangal in Thai cooking. It's featured in stir-fries, especially with seafood, and in medicinal soups and teas.",
          howToUse: [
            "Julienne for stir-fries with fish and seafood",
            "Add to medicinal soups",
            "Make ginger tea",
            "Use in some noodle dishes"
          ],
          pairsWith: ["Fish", "Seafood", "Soy sauce", "Garlic", "Mushrooms"],
          storage: "Refrigerate for weeks. Freeze for months.",
          substitutes: "Nothing replicates fresh ginger. Galangal is not a substitute; the two have very different uses.",
          proTip: "Thai stir-fries often use matchstick-cut ginger that's meant to be eaten, unlike galangal, which is removed.",
          youtube: [
            { title: "Thai Ginger Fish", url: "https://www.youtube.com/results?search_query=thai+ginger+fish+stir+fry" },
            { title: "Ginger vs Galangal in Thai Cooking", url: "https://www.youtube.com/results?search_query=ginger+galangal+thai+cooking+difference" }
          ]
        },
        {
          id: "cilantro-coriander",
          name: "Cilantro / Coriander",
          native: "ผักชี",
          pronunciation: "pak chee",
          quickDesc: "Herb used whole: leaves, stems and roots",
          whatIsIt: "Thai cooks use the whole cilantro plant: leaves for garnish, stems in curry pastes, and roots for marinades and pastes. The roots are prized for their intense, earthy flavor.",
          howToUse: [
            "Use leaves as garnish for nearly everything",
            "Pound stems and roots into curry pastes",
            "Add roots to marinades for grilled meats",
            "Include in Thai-style salads"
          ],
          pairsWith: ["Garlic", "White pepper", "Fish sauce", "Lime", "Chilies"],
          storage: "Store with roots in water, loosely covered. Use within a week.",
          substitutes: "For leaves only, regular cilantro works. Roots are hard to find outside Asia, so use extra stems.",
          proTip: "For the most authentic flavor, use the roots. Look for bunches with roots still attached at Asian markets.",
          youtube: [
            { title: "Thai Cilantro Root Uses", url: "https://www.youtube.com/results?search_query=thai+cilantro+root+cooking" },
            { title: "How to Use Whole Cilantro Plant", url: "https://www.youtube.com/results?search_query=how+to+use+cilantro+root+thai" }
          ]
        },
        {
          id: "green-papaya",
          name: "Green Papaya",
          native: "มะละกอดิบ",
          pronunciation: "ma-la-gor dip",
          quickDesc: "Unripe papaya for Thailand's famous som tam salad",
          whatIsIt: "Unripe papaya with firm, crunchy white flesh. It's shredded and pounded into som tam, Thailand's beloved spicy green papaya salad. Has a neutral flavor that absorbs the dressing.",
          howToUse: [
            "Shred for som tam (green papaya salad)",
            "Add to stir-fries",
            "Use in curries",
            "Pickle for a tangy side"
          ],
          pairsWith: ["Lime", "Fish sauce", "Palm sugar", "Chilies", "Dried shrimp"],
          storage: "Refrigerate whole for up to a week. Shred just before using.",
          substitutes: "Shredded green mango, kohlrabi or jicama can substitute for texture.",
          proTip: "Use a Thai papaya shredder or julienne peeler for the proper thin strips; the dish depends on that texture.",
          youtube: [
            { title: "Som Tam Recipe", url: "https://www.youtube.com/results?search_query=som+tam+green+papaya+salad+recipe" },
            { title: "How to Shred Green Papaya", url: "https://www.youtube.com/results?search_query=how+to+shred+green+papaya+som+tam" }
          ]
        },
        {
          id: "thai-shallots",
          name: "Thai Shallots",
          native: "หอมแดง",
          pronunciation: "hom daeng",
          quickDesc: "Small, pungent shallots, a curry paste staple",
          whatIsIt: "Small purple-red shallots more pungent than Western varieties. Along with garlic, they're one of the main aromatics in curry pastes. Also used raw in salads and fried for garnish.",
          howToUse: [
            "Pound into curry pastes",
            "Slice raw for salads",
            "Fry until crispy for garnish",
            "Add to stir-fries and dips"
          ],
          pairsWith: ["Garlic", "Chilies", "Fish sauce", "Lime", "Herbs"],
          storage: "Cool, dry place with ventilation. Keep for weeks.",
          substitutes: "Regular shallots or red onion work. Use slightly less as Thai shallots are more intense.",
          proTip: "Fried shallots are a common garnish. Fry them slowly in oil until golden and crispy.",
          youtube: [
            { title: "Thai Fried Shallots", url: "https://www.youtube.com/results?search_query=thai+fried+shallots+crispy" },
            { title: "Curry Paste with Shallots", url: "https://www.youtube.com/results?search_query=thai+curry+paste+shallots" }
          ]
        },
        {
          id: "banana-blossom",
          name: "Banana Blossom",
          native: "หัวปลี",
          pronunciation: "hua plee",
          quickDesc: "Edible flower used in salads and curries",
          whatIsIt: "The large purple-maroon flower that emerges from the banana plant. The tender inner petals are sliced thin and used raw in salads or cooked in curries. Has a mild, slightly bitter taste.",
          howToUse: ["Slice thin and soak in acidulated water to prevent browning", "Add raw to salads like yam hua plee", "Cook in curries", "Use as a meat substitute in vegan dishes"],
          pairsWith: ["Coconut milk", "Lime", "Chilies", "Shrimp", "Chicken"],
          storage: "Refrigerate wrapped in plastic. Use within a few days.",
          substitutes: "Artichoke hearts have a similar texture.",
          proTip: "Remove outer purple petals until you reach the pale, tender inner layers."
        },
        {
          id: "sawtooth-coriander",
          name: "Sawtooth Coriander",
          native: "ผักชีฝรั่ง",
          pronunciation: "pak chee farang",
          quickDesc: "Pungent herb with serrated leaves",
          whatIsIt: "Long, serrated leaves with a flavor stronger than regular cilantro. Also called culantro or Mexican coriander. Very popular in Thai and Vietnamese cooking.",
          howToUse: ["Add to larb and other meat salads", "Include in tom yum and sour soups", "Use in Vietnamese pho", "Chop into stir-fries"],
          pairsWith: ["Mint", "Fish sauce", "Lime", "Ground meat", "Chili"],
          storage: "Wrap in damp paper towel, refrigerate. Use within a week.",
          substitutes: "Regular cilantro, using more to compensate for milder flavor.",
          proTip: "The flavor intensifies when cooked, unlike regular cilantro."
        },
        {
          id: "krachai",
          name: "Fingerroot (Krachai)",
          native: "กระชาย",
          pronunciation: "gra-chai",
          quickDesc: "Finger-shaped rhizome for jungle curry",
          whatIsIt: "A rhizome with finger-like protrusions, related to ginger and galangal but with a unique earthy, peppery, slightly medicinal flavor. A standard ingredient in jungle curry.",
          howToUse: ["Slice thin for jungle curry (gaeng pa)", "Add to stir-fried fish dishes", "Include in some noodle dishes", "Pound into curry pastes"],
          pairsWith: ["Fish", "Green peppercorns", "Kaffir lime", "Thai basil", "Chilies"],
          storage: "Refrigerate in a plastic bag for up to 2 weeks. Can be frozen.",
          substitutes: "No true substitute. A mix of ginger and galangal approximates it distantly.",
          proTip: "Look for it in the freezer section of Asian markets. Fresh is rare outside Thailand."
        },
        {
          id: "betel-leaves",
          name: "Betel Leaves",
          native: "ใบชะพลู",
          pronunciation: "bai cha-plu",
          quickDesc: "Heart-shaped wraps for miang kham",
          whatIsIt: "Glossy, heart-shaped leaves from the pepper family with a slightly peppery, herbal taste. Used as edible wraps for the iconic Thai appetizer miang kham.",
          howToUse: ["Use as wraps for miang kham bites", "Wrap around grilled meats", "Add to curries", "Use in traditional medicine"],
          pairsWith: ["Coconut", "Lime", "Ginger", "Dried shrimp", "Palm sugar"],
          storage: "Wrap in damp paper towel, refrigerate up to a week.",
          substitutes: "Spinach leaves or butter lettuce for wrapping (different flavor).",
          proTip: "For miang kham, fill leaves with coconut, peanuts, dried shrimp, lime, ginger and sweet sauce."
        }
      ],
      "Noodles & Rice": [
        {
          id: "rice-stick",
          name: "Rice Stick Noodles",
          native: "เส้นจันท์",
          pronunciation: "sen chan",
          quickDesc: "Thin, flat noodles used for pad thai",
          whatIsIt: "Dried flat rice noodles that come in various widths. The thin ones are used for pad thai and the wider ones for pad see ew. Soak them before cooking instead of boiling them.",
          howToUse: [
            "Soak in room temperature water until pliable (30-60 minutes)",
            "Don't over-soak; they should still be slightly firm",
            "Add directly to a hot wok, where they'll finish cooking in the sauce",
            "Use in soups by adding to hot broth"
          ],
          pairsWith: ["Tamarind", "Fish sauce", "Eggs", "Shrimp", "Bean sprouts"],
          storage: "Dry pantry. Keeps for over a year.",
          substitutes: "Fresh rice noodles if available (no soaking needed).",
          proTip: "Hot water soaking is faster but makes them mushy. Room temp takes longer but gives better texture.",
          youtube: [
            { title: "Hot Thai Kitchen: Authentic Pad Thai", url: "https://www.youtube.com/results?search_query=hot+thai+kitchen+pad+thai+recipe" },
            { title: "Pad See Ew Recipe", url: "https://www.youtube.com/results?search_query=pad+see+ew+recipe+rice+noodles" }
          ]
        },
        {
          id: "wide-rice-noodles",
          name: "Wide Rice Noodles (Sen Yai)",
          native: "เส้นใหญ่",
          pronunciation: "sen yai",
          quickDesc: "Fresh, silky flat noodles for pad see ew and rad na",
          whatIsIt: "Fresh wide rice noodles, silky and pliable. They're sold fresh in sheets or pre-cut strips. These are the noodles in pad see ew, rad na and drunken noodles.",
          howToUse: [
            "Separate gently with oiled hands before cooking",
            "Cook over very high heat for best results",
            "Don't overcook; they should be tender, not mushy",
            "Add soy sauce at the end and toss quickly"
          ],
          pairsWith: ["Dark soy sauce", "Oyster sauce", "Chinese broccoli", "Egg", "Garlic"],
          storage: "Refrigerate and use within 2-3 days. Do not freeze, because freezing ruins the texture.",
          substitutes: "Dried wide rice noodles (soak first) or fresh fettuccine in a pinch.",
          proTip: "If noodles are cold and stuck together, microwave briefly or let sit at room temperature to soften.",
          youtube: [
            { title: "How to Cook Fresh Rice Noodles", url: "https://www.youtube.com/results?search_query=how+to+cook+fresh+rice+noodles+sen+yai" },
            { title: "Pad See Ew with Fresh Noodles", url: "https://www.youtube.com/results?search_query=pad+see+ew+fresh+rice+noodles" }
          ]
        },
        {
          id: "glass-noodles-thai",
          name: "Glass Noodles (Woon Sen)",
          native: "วุ้นเส้น",
          pronunciation: "woon sen",
          quickDesc: "Translucent mung bean noodles for salads and soups",
          whatIsIt: "Thin, translucent noodles made from mung bean starch. They turn clear and slippery when cooked. Used in yum woon sen (glass noodle salad) and soups.",
          howToUse: [
            "Soak in warm water until soft",
            "Cut with scissors before serving (they're very long)",
            "Add to soups or stir-fries",
            "Toss with lime dressing for yum woon sen salad"
          ],
          pairsWith: ["Lime", "Fish sauce", "Chilies", "Shrimp", "Ground pork"],
          storage: "Dry pantry. Keeps indefinitely.",
          substitutes: "Korean dangmyeon (chewier) or rice vermicelli (different texture).",
          proTip: "Don't oversoak or they'll get too soft. They should still have a slight bite.",
          youtube: [
            { title: "Yum Woon Sen Recipe", url: "https://www.youtube.com/results?search_query=yum+woon+sen+glass+noodle+salad" },
            { title: "Thai Glass Noodle Soup", url: "https://www.youtube.com/results?search_query=thai+glass+noodle+soup" }
          ]
        },
        {
          id: "thai-rice-vermicelli",
          name: "Rice Vermicelli (Sen Mee)",
          native: "เส้นหมี่",
          pronunciation: "sen mee",
          quickDesc: "Thin rice noodles for pad mee and curries",
          whatIsIt: "Very thin rice noodles, thinner than pad thai noodles. Used in mee krob (crispy noodles), pad mee, and served with curry for khanom jeen.",
          howToUse: [
            "Soak briefly in warm water",
            "Deep fry dry for crispy mee krob",
            "Add to soups and curries",
            "Stir-fry for pad mee"
          ],
          pairsWith: ["Curry", "Fish sauce", "Lime", "Bean sprouts", "Herbs"],
          storage: "Dry pantry. Keeps for over a year.",
          substitutes: "Vietnamese bun noodles or thin rice stick noodles.",
          proTip: "For mee krob (crispy noodles), fry them straight from the package without soaking. They puff up immediately.",
          youtube: [
            { title: "Mee Krob Crispy Noodles", url: "https://www.youtube.com/results?search_query=mee+krob+crispy+thai+noodles" },
            { title: "Thai Rice Vermicelli Recipes", url: "https://www.youtube.com/results?search_query=thai+rice+vermicelli+sen+mee" }
          ]
        },
        {
          id: "jasmine-rice",
          name: "Jasmine Rice",
          native: "ข้าวหอมมะลิ",
          pronunciation: "khao hom mali",
          quickDesc: "Fragrant long-grain rice served with most Thai meals",
          whatIsIt: "A long-grain rice with a distinctive floral aroma, named for its jasmine-like fragrance when cooked. The standard rice for Thai cuisine, served with nearly every meal.",
          howToUse: [
            "Rinse until water runs clear",
            "Cook with slightly less water than standard rice",
            "Serve with curries, stir-fries and grilled meats",
            "Use day-old rice for fried rice"
          ],
          pairsWith: ["Any Thai curry", "Stir-fries", "Grilled meats", "Omelettes", "Every Thai dish"],
          storage: "Cool, dry pantry. New crop rice is more fragrant.",
          substitutes: "Basmati rice has similar length but different aroma. Regular long-grain lacks fragrance.",
          proTip: "Look for 'Hom Mali' on Thai rice packages, which indicates genuine Thai jasmine rice. New crop rice is more aromatic.",
          youtube: [
            { title: "How to Cook Perfect Jasmine Rice", url: "https://www.youtube.com/results?search_query=how+to+cook+perfect+jasmine+rice" },
            { title: "Thai Jasmine Rice Guide", url: "https://www.youtube.com/results?search_query=thai+jasmine+rice+hom+mali" }
          ]
        },
        {
          id: "sticky-rice",
          name: "Sticky Rice (Khao Niao)",
          native: "ข้าวเหนียว",
          pronunciation: "khao nee-ow",
          quickDesc: "Glutinous rice staple of Northern and Northeastern Thailand",
          whatIsIt: "Long-grain glutinous rice that becomes sticky when steamed. The staple carb of Isaan (Northeastern Thailand) and Laos, eaten with hands by pinching off balls to scoop up food.",
          howToUse: [
            "Soak overnight, then steam in a bamboo basket",
            "Eat by rolling into balls to scoop up food",
            "Serve with som tam, grilled meats and laab",
            "Use in mango sticky rice dessert"
          ],
          pairsWith: ["Som tam", "Grilled chicken", "Laab", "Mango", "Coconut milk"],
          storage: "Dry pantry. Keeps for years.",
          substitutes: "There's no substitute; the texture is unique.",
          proTip: "You must soak sticky rice overnight, or it won't cook properly. Steam it rather than boiling it.",
          youtube: [
            { title: "How to Cook Thai Sticky Rice", url: "https://www.youtube.com/results?search_query=how+to+cook+thai+sticky+rice" },
            { title: "Mango Sticky Rice Recipe", url: "https://www.youtube.com/results?search_query=mango+sticky+rice+recipe+authentic" }
          ]
        },
        {
          id: "egg-noodles-thai",
          name: "Thai Egg Noodles (Ba Mee)",
          native: "บะหมี่",
          pronunciation: "ba-mee",
          quickDesc: "Yellow wheat noodles for soups and stir-fries",
          whatIsIt: "Fresh or dried wheat noodles enriched with eggs, giving them a yellow color. Used in ba mee haeng (dry noodles) and noodle soups throughout Thailand.",
          howToUse: [
            "Boil briefly until just al dente",
            "Serve in soup or dry with seasonings",
            "Top with roast pork, wontons or crab",
            "Stir-fry for pad ba mee"
          ],
          pairsWith: ["Roast pork", "Fish balls", "Greens", "Soy sauce", "Chili vinegar"],
          storage: "Fresh: refrigerate for a few days. Dried: pantry for months.",
          substitutes: "Chinese egg noodles or ramen noodles work.",
          proTip: "Look for noodles with alkali (kansui) for that springy texture and yellow color.",
          youtube: [
            { title: "Ba Mee Recipe", url: "https://www.youtube.com/results?search_query=ba+mee+thai+egg+noodles+recipe" },
            { title: "Thai Noodle Soup", url: "https://www.youtube.com/results?search_query=thai+egg+noodle+soup" }
          ]
        },
        {
          id: "fermented-rice-noodles",
          name: "Fermented Rice Noodles (Kanom Jeen)",
          native: "ขนมจีน",
          pronunciation: "ka-nom jeen",
          quickDesc: "Fresh rice noodles served with curries",
          whatIsIt: "Fresh, slightly fermented rice noodles with a subtle sour tang. Served in bundles topped with various curries. A popular Thai street food and breakfast dish.",
          howToUse: ["Serve in nests topped with curry", "Pair with nam prik and raw vegetables", "Eat for breakfast or lunch", "Serve with sauces rather than stir-frying"],
          pairsWith: ["Fish curry", "Green curry", "Nam ya", "Bean sprouts", "Pickled vegetables"],
          storage: "Refrigerate and use within 2-3 days.",
          substitutes: "Rice vermicelli (different texture but works).",
          proTip: "Often sold in Asian markets in the refrigerated section in small bundles."
        }
      ],
      "Pantry Staples": [
        {
          id: "coconut-milk",
          name: "Coconut Milk",
          native: "กะทิ",
          pronunciation: "ga-thi",
          quickDesc: "Rich, creamy milk used in curries and desserts",
          whatIsIt: "The creamy liquid extracted from grated coconut meat. The thick cream rises to the top and is used to fry curry paste; the thinner milk is added later. Most Thai curries use it.",
          howToUse: [
            "Fry curry paste in the thick cream that rises to the top",
            "Add the thinner milk to curries and soups",
            "Use in desserts like sticky rice with mango",
            "Make tom kha (coconut soup)"
          ],
          pairsWith: ["Curry paste", "Palm sugar", "Fish sauce", "Kaffir lime", "Thai basil"],
          storage: "Canned: pantry until opened, then refrigerate. Fresh: use within days.",
          substitutes: "No real substitute for the richness. Coconut cream is even richer.",
          proTip: "Don't shake the can before opening. The cream on top is what you use to fry curry paste.",
          youtube: [
            { title: "How to Use Coconut Milk in Thai Cooking", url: "https://www.youtube.com/results?search_query=coconut+milk+thai+curry+cooking" },
            { title: "Coconut Cream vs Milk", url: "https://www.youtube.com/results?search_query=coconut+cream+vs+coconut+milk+thai" }
          ]
        },
        {
          id: "dried-shrimp",
          name: "Dried Shrimp",
          native: "กุ้งแห้ง",
          pronunciation: "goong haeng",
          quickDesc: "Tiny dried shrimp for umami and texture",
          whatIsIt: "Small shrimp that have been salted and dried. They add a savory, slightly sweet seafood flavor and chewy texture to many Thai dishes, especially som tam and fried rice.",
          howToUse: [
            "Add to som tam (green papaya salad)",
            "Include in pad thai",
            "Add to fried rice for umami",
            "Use in coconut-based curries"
          ],
          pairsWith: ["Papaya", "Lime", "Chilies", "Garlic", "Fish sauce"],
          storage: "Refrigerate or freeze for best quality. Keeps for months.",
          substitutes: "Fish sauce provides umami but not the texture.",
          proTip: "Rinse and soak briefly to soften if they're very hard and salty.",
          youtube: [
            { title: "Dried Shrimp in Thai Cooking", url: "https://www.youtube.com/results?search_query=dried+shrimp+thai+cooking" },
            { title: "Som Tam with Dried Shrimp", url: "https://www.youtube.com/results?search_query=som+tam+dried+shrimp" }
          ]
        },
        {
          id: "roasted-rice-powder",
          name: "Roasted Rice Powder (Khao Khua)",
          native: "ข้าวคั่ว",
          pronunciation: "khao kua",
          quickDesc: "Toasted ground rice for texture in salads",
          whatIsIt: "Rice grains toasted until golden, then ground into a powder. It adds a nutty flavor and slight crunch to Isaan salads like laab and nam tok.",
          howToUse: [
            "Sprinkle into laab (minced meat salad)",
            "Add to nam tok (grilled beef salad)",
            "Include in yum salads for texture",
            "Use as a thickener"
          ],
          pairsWith: ["Ground meat", "Lime", "Fish sauce", "Mint", "Chilies"],
          storage: "Room temperature in airtight container. Best used fresh.",
          substitutes: "No substitute for the unique flavor. Make your own easily.",
          proTip: "Make your own: dry-toast raw sticky rice until golden, then grind. Much better than store-bought.",
          youtube: [
            { title: "How to Make Roasted Rice Powder", url: "https://www.youtube.com/results?search_query=how+to+make+roasted+rice+powder+khao+khua" },
            { title: "Laab Recipe with Khao Khua", url: "https://www.youtube.com/results?search_query=laab+recipe+roasted+rice+powder" }
          ]
        },
        {
          id: "thai-chili-powder",
          name: "Thai Chili Powder (Prik Bon)",
          native: "พริกป่น",
          pronunciation: "prik bon",
          quickDesc: "Ground dried chilies for adding heat",
          whatIsIt: "Dried Thai chilies ground into a coarse or fine powder. Used to add heat to finished dishes. It's much hotter than Korean gochugaru.",
          howToUse: [
            "Sprinkle on noodle soups",
            "Add to fried rice and stir-fries",
            "Use in laab and Isaan salads",
            "Mix into dipping sauces"
          ],
          pairsWith: ["Fish sauce", "Lime", "Noodles", "Rice", "Salads"],
          storage: "Room temperature in airtight container. Keeps for months.",
          substitutes: "Cayenne pepper (similar heat) or crushed red pepper flakes.",
          proTip: "Thai noodle shops always have this on the table along with sugar, fish sauce and vinegar.",
          youtube: [
            { title: "Thai Table Condiments", url: "https://www.youtube.com/results?search_query=thai+table+condiments+prik+bon" },
            { title: "Making Thai Chili Powder", url: "https://www.youtube.com/results?search_query=making+thai+chili+powder" }
          ]
        },
        {
          id: "preserved-radish",
          name: "Preserved Radish (Chai Poh)",
          native: "ไชโป๊ว",
          pronunciation: "chai poh",
          quickDesc: "Sweet-salty preserved radish for pad thai and congee",
          whatIsIt: "Salted or sweetened preserved daikon radish with a chewy texture. It adds a unique sweet-salty-savory element to pad thai and other dishes. Comes in sweet or salty versions.",
          howToUse: [
            "Add chopped to pad thai (a standard ingredient)",
            "Top congee and rice porridge",
            "Include in carrot cake/radish cake",
            "Mix into omelettes"
          ],
          pairsWith: ["Noodles", "Rice", "Eggs", "Garlic", "Bean sprouts"],
          storage: "Refrigerate after opening. Keeps for months.",
          substitutes: "No real substitute. Some skip it in pad thai but it's authentic.",
          proTip: "Rinse sweet preserved radish before using if it's too sweet. Salty version may need soaking.",
          youtube: [
            { title: "Preserved Radish in Pad Thai", url: "https://www.youtube.com/results?search_query=preserved+radish+pad+thai+chai+poh" },
            { title: "How to Use Chai Poh", url: "https://www.youtube.com/results?search_query=how+to+use+chai+poh+preserved+radish" }
          ]
        },
        {
          id: "thai-white-pepper",
          name: "White Pepper",
          native: "พริกไทยขาว",
          pronunciation: "prik thai khao",
          quickDesc: "The default pepper in Thai cooking",
          whatIsIt: "Peppercorns with outer skin removed, creating a sharper, earthier heat than black pepper. Thais use white pepper far more than black, especially in marinades with garlic and cilantro root.",
          howToUse: [
            "Season soups and stir-fries",
            "Add to marinades with garlic and cilantro root",
            "Use in congee and rice porridge",
            "Season dipping sauces"
          ],
          pairsWith: ["Garlic", "Cilantro root", "Fish sauce", "Soy sauce", "Meats"],
          storage: "Whole peppercorns keep for years. Ground pepper loses potency, so grind it fresh.",
          substitutes: "Black pepper works but changes the flavor profile.",
          proTip: "The trinity of Thai marinades: garlic + white pepper + cilantro root.",
          youtube: [
            { title: "White Pepper in Thai Cooking", url: "https://www.youtube.com/results?search_query=white+pepper+thai+cooking" },
            { title: "Thai Marinade with White Pepper", url: "https://www.youtube.com/results?search_query=thai+marinade+garlic+white+pepper+cilantro" }
          ]
        },
        {
          id: "pandan-leaf",
          name: "Pandan Leaves",
          native: "ใบเตย",
          pronunciation: "bai toey",
          quickDesc: "Fragrant leaves for desserts and rice",
          whatIsIt: "Long, blade-like leaves with a sweet, floral, vanilla-like aroma. Called the 'vanilla of Southeast Asia.' Used to flavor rice, desserts and wrap chicken.",
          howToUse: [
            "Knot and add to rice while cooking for fragrance",
            "Wrap around chicken for pandan chicken",
            "Extract juice for green desserts",
            "Flavor coconut custards and sticky rice"
          ],
          pairsWith: ["Coconut milk", "Palm sugar", "Rice", "Chicken", "Tapioca"],
          storage: "Refrigerate for a week, or freeze for months.",
          substitutes: "Vanilla extract provides sweetness but not the same aroma, and pandan has no real substitute.",
          proTip: "Tie the leaves into a knot before adding them to rice so they're easier to remove when done.",
          youtube: [
            { title: "Pandan Chicken Recipe", url: "https://www.youtube.com/results?search_query=pandan+chicken+recipe+thai" },
            { title: "Pandan Extract for Desserts", url: "https://www.youtube.com/results?search_query=pandan+extract+thai+desserts" }
          ]
        },
        {
          id: "tapioca-pearls",
          name: "Tapioca Pearls",
          native: "สาคู",
          pronunciation: "sa-koo",
          quickDesc: "Chewy pearls for Thai desserts",
          whatIsIt: "Small pearls made from tapioca starch that become translucent and chewy when cooked. Used in Thai desserts, especially with coconut milk and fruit.",
          howToUse: [
            "Cook in sweetened coconut milk",
            "Add to dessert soups with fruit",
            "Make sa-koo piak (warm tapioca dessert)",
            "Include in iced drinks"
          ],
          pairsWith: ["Coconut milk", "Palm sugar", "Jackfruit", "Corn", "Taro"],
          storage: "Dry pantry. Keeps for years.",
          substitutes: "Boba pearls are larger but similar. Sago pearls are identical.",
          proTip: "Cook in boiling water until translucent with a tiny white center, then rinse and add to cold desserts.",
          youtube: [
            { title: "Thai Tapioca Dessert", url: "https://www.youtube.com/results?search_query=thai+tapioca+dessert+coconut" },
            { title: "How to Cook Tapioca Pearls", url: "https://www.youtube.com/results?search_query=how+to+cook+tapioca+pearls+perfectly" }
          ]
        },
        {
          id: "green-peppercorns",
          name: "Fresh Green Peppercorns",
          native: "พริกไทยอ่อน",
          pronunciation: "prik thai on",
          quickDesc: "Mild, aromatic peppercorns for jungle curry",
          whatIsIt: "Unripe peppercorns still on the stem, with a fresh, mild heat and aromatic flavor. Common in jungle curry and many Thai stir-fries, especially with seafood.",
          howToUse: ["Add whole clusters to jungle curry", "Stir-fry with seafood and holy basil", "Include in peppery stir-fries", "Add to spicy soups"],
          pairsWith: ["Fish", "Fingerroot", "Holy basil", "Garlic", "Chilies"],
          storage: "Fresh: refrigerate up to a week. Brined: months in fridge after opening.",
          substitutes: "Brined green peppercorns work well. Black pepper is quite different.",
          proTip: "Fresh on the stem is best. Brined in jars are widely available and very good."
        },
        {
          id: "coconut-cream",
          name: "Coconut Cream",
          native: "หัวกะทิ",
          pronunciation: "hua ga-ti",
          quickDesc: "Thick, rich first pressing for frying curry paste",
          whatIsIt: "The thick, rich first pressing of coconut meat. Higher fat content than coconut milk. Used to fry curry pastes and add richness to curries and desserts.",
          howToUse: ["Fry curry paste in cream until oil separates", "Add to curries for richness", "Use in desserts", "Top sweet sticky rice"],
          pairsWith: ["Curry paste", "Palm sugar", "Sticky rice", "Mango", "Pandan"],
          storage: "Refrigerate after opening. Use within a week.",
          substitutes: "Scoop the thick layer from top of unshaken coconut milk can.",
          proTip: "When frying curry paste, cook until you see red oil separate. That's how the flavor develops."
        },
        {
          id: "tapioca-starch",
          name: "Tapioca Starch",
          native: "แป้งมันสำปะหลัง",
          pronunciation: "bpaeng man sam-bpa-lang",
          quickDesc: "Thickener and coating for crispy textures",
          whatIsIt: "A fine white powder from cassava root. Used to thicken sauces, make chewy desserts and create crispy coatings. Gives a glossy finish to stir-fry sauces.",
          howToUse: ["Thicken stir-fry sauces", "Coat proteins before frying for crispiness", "Make tapioca pearls and desserts", "Add to marinades for tender meat"],
          pairsWith: ["Coconut milk", "Palm sugar", "Pandan", "Chicken", "Pork"],
          storage: "Cool, dry pantry. Keeps indefinitely.",
          substitutes: "Cornstarch works for thickening (different texture when coating).",
          proTip: "Mix with water before adding to hot liquids to prevent lumps."
        },
        {
          id: "fried-garlic",
          name: "Fried Garlic",
          native: "กระเทียมเจียว",
          pronunciation: "gra-tiam jiao",
          quickDesc: "Crispy garlic topping for noodles and rice",
          whatIsIt: "Thinly sliced or minced garlic fried until golden and crispy. A common Thai garnish that adds crunch and sweet garlic flavor. The garlic oil is also prized.",
          howToUse: ["Top noodle dishes and fried rice", "Sprinkle on congee and soups", "Garnish stir-fries", "Use the garlic oil for cooking"],
          pairsWith: ["Noodles", "Rice", "Soups", "Congee", "Stir-fries"],
          storage: "Airtight container at room temp for a few days. Oil keeps in fridge.",
          substitutes: "Store-bought fried garlic or shallots.",
          proTip: "Fry in plenty of oil over medium heat. Remove them just before they're fully golden, since carryover cooking finishes them."
        },
        {
          id: "pickled-garlic",
          name: "Pickled Garlic",
          native: "กระเทียมดอง",
          pronunciation: "gra-tiam dong",
          quickDesc: "Sweet-sour garlic for noodles and snacking",
          whatIsIt: "Whole garlic heads pickled in a sweet vinegar brine until mellow and slightly sweet-sour. The cloves become soft and mild enough to eat whole.",
          howToUse: ["Serve alongside pad thai and noodles", "Eat as a side with rice dishes", "Slice into salads", "Snack on with drinks"],
          pairsWith: ["Pad thai", "Noodle dishes", "Fried rice", "Grilled meats", "Rice porridge"],
          storage: "Refrigerate after opening. Keeps for months in brine.",
          substitutes: "Pickled onions or shallots (different but complementary).",
          proTip: "Always served alongside authentic pad thai. The sweetness balances the sour and savory."
        }
      ]
    }
  },
  vietnam: {
    name: "Vietnam",
    flag: "🇻🇳",
    categories: {
      "Sauces & Condiments": [
        {
          id: "hoisin",
          name: "Hoisin Sauce",
          native: "Tương đen",
          pronunciation: "tuong den",
          quickDesc: "Sweet, tangy sauce for dipping and glazing",
          whatIsIt: "A thick, dark, sweet sauce made from fermented soybean paste, garlic, vinegar and spices. It's often called 'Chinese barbecue sauce' but is used widely in Vietnamese cooking for pho and spring rolls.",
          howToUse: [
            "Serve alongside pho for dipping meat",
            "Use as a dipping sauce for spring rolls (fresh or fried)",
            "Glaze grilled meats and char siu",
            "Add to stir-fry sauces for sweetness"
          ],
          pairsWith: ["Sriracha", "Pho", "Duck", "Pork", "Spring rolls"],
          storage: "Refrigerate after opening. Lasts for months.",
          substitutes: "BBQ sauce + soy sauce + molasses approximates it.",
          proTip: "For pho, serve hoisin on the side rather than adding it to the bowl, so each person can dip their meat.",
          youtube: [
            { title: "How to Eat Pho Properly", url: "https://www.youtube.com/results?search_query=how+to+eat+pho+properly+hoisin" },
            { title: "Homemade Hoisin Sauce Recipe", url: "https://www.youtube.com/results?search_query=homemade+hoisin+sauce+recipe" }
          ]
        },
        {
          id: "nuoc-cham",
          name: "Nước Chấm",
          native: "Nước chấm",
          pronunciation: "nook chahm",
          quickDesc: "The standard Vietnamese dipping sauce: sweet, sour, salty and spicy",
          whatIsIt: "A versatile dipping sauce made from fish sauce, lime juice, sugar, water, garlic and chili. It's lighter and more balanced than straight fish sauce and is used with nearly everything in Vietnamese cuisine.",
          howToUse: [
            "Drizzle over rice vermicelli bowls (bún)",
            "Serve with spring rolls (fresh and fried)",
            "Dip grilled meats",
            "Add to salads as dressing"
          ],
          pairsWith: ["Herbs", "Rice vermicelli", "Grilled pork", "Spring rolls", "Any Vietnamese dish"],
          storage: "Refrigerate for up to 2 weeks.",
          substitutes: "There's no substitute, but it's easy to make fresh.",
          proTip: "The ratio is flexible to taste, but start with: 3 tbsp fish sauce, 3 tbsp lime juice, 4 tbsp sugar, 1/2 cup warm water to dissolve sugar. Adjust from there.",
          youtube: [
            { title: "How to Make Nuoc Cham", url: "https://www.youtube.com/results?search_query=how+to+make+nuoc+cham+vietnamese+dipping+sauce" },
            { title: "Vietnamese Spring Rolls with Nuoc Cham", url: "https://www.youtube.com/results?search_query=vietnamese+spring+rolls+nuoc+cham" }
          ]
        },
        {
          id: "nuoc-mam",
          name: "Fish Sauce",
          native: "Nước mắm",
          pronunciation: "nook mahm",
          quickDesc: "Fermented fish liquid, the main source of umami in Vietnamese cooking",
          whatIsIt: "A thin, amber-colored liquid made from fermented fish and salt. It's intensely savory with a pungent aroma that mellows when cooked. Vietnamese fish sauce (particularly from Phú Quốc island) is considered among the finest.",
          howToUse: [
            "Add to marinades for grilled meats",
            "Season soups and broths",
            "Use as base for nước chấm dipping sauce",
            "Add umami to stir-fries and braises"
          ],
          pairsWith: ["Lime juice", "Sugar", "Garlic", "Chili", "All Vietnamese cooking"],
          storage: "Room temperature or refrigerate. Lasts for years.",
          substitutes: "Soy sauce lacks depth but adds saltiness. Worcestershire sauce has some similar notes.",
          proTip: "Look for fish sauce with only fish and salt on the ingredient list. Red Boat and Three Crabs are quality brands.",
          youtube: [
            { title: "Fish Sauce Explained", url: "https://www.youtube.com/results?search_query=vietnamese+fish+sauce+nuoc+mam+explained" },
            { title: "How to Choose Fish Sauce", url: "https://www.youtube.com/results?search_query=best+fish+sauce+brands+vietnamese+cooking" }
          ]
        },
        {
          id: "tuong-ot",
          name: "Vietnamese Chili Sauce",
          native: "Tương ớt",
          pronunciation: "tuong ut",
          quickDesc: "Bright red chili sauce for pho and everything else",
          whatIsIt: "A smooth, bright red chili sauce commonly served with pho and other dishes. Huy Fong Sriracha (with the rooster) was created by a Vietnamese immigrant and is the most recognizable version.",
          howToUse: [
            "Squeeze into pho for heat",
            "Add to bánh mì sandwiches",
            "Mix with mayo for spicy aioli",
            "Drizzle on eggs, noodles and rice dishes"
          ],
          pairsWith: ["Hoisin sauce", "Pho", "Bánh mì", "Spring rolls", "Noodle dishes"],
          storage: "Room temperature until opened, then refrigerate. Lasts months.",
          substitutes: "Sambal oelek for texture with seeds. Any chili garlic sauce works.",
          proTip: "Sriracha and hoisin together are the classic pho condiment pair: sweet and spicy.",
          youtube: [
            { title: "How Sriracha Is Made", url: "https://www.youtube.com/results?search_query=how+sriracha+is+made+huy+fong" },
            { title: "Pho Condiments Guide", url: "https://www.youtube.com/results?search_query=pho+condiments+how+to+use" }
          ]
        },
        {
          id: "mam-tom",
          name: "Fermented Shrimp Paste",
          native: "Mắm tôm",
          pronunciation: "mahm tom",
          quickDesc: "Pungent purple shrimp paste for bún riêu and dipping sauces",
          whatIsIt: "A thick, purple-gray paste made from fermented shrimp. Extremely pungent with an intense umami flavor. A little goes a very long way. Certain Northern Vietnamese dishes depend on it.",
          howToUse: [
            "Mix small amounts into bún riêu crab noodle soup",
            "Add to dipping sauce for bánh cuốn",
            "Use in bún đậu mắm tôm (tofu and noodles)",
            "Always dilute with lime juice before serving"
          ],
          pairsWith: ["Lime juice", "Sugar", "Chili", "Fried tofu", "Pork"],
          storage: "Refrigerate after opening. Keeps for months.",
          substitutes: "There's no real substitute. Fish sauce is milder and tastes different.",
          proTip: "Squeeze plenty of lime into mắm tôm before eating to tame the intensity. People tend to love it or hate it.",
          youtube: [
            { title: "Bún Đậu Mắm Tôm Explained", url: "https://www.youtube.com/results?search_query=bun+dau+mam+tom+vietnamese" },
            { title: "How to Use Mắm Tôm", url: "https://www.youtube.com/results?search_query=mam+tom+shrimp+paste+vietnamese" }
          ]
        },
        {
          id: "sa-te",
          name: "Satay Sauce",
          native: "Sa tế",
          pronunciation: "sah tay",
          quickDesc: "Spicy lemongrass chili oil for noodles and grilled meats",
          whatIsIt: "A Vietnamese-Chinese chili oil made with dried shrimp, lemongrass, garlic and chili. Unlike Southeast Asian peanut satay, this is a fragrant, spicy oil condiment.",
          howToUse: [
            "Add to phở or bún bò Huế for extra heat",
            "Drizzle on stir-fried noodles",
            "Mix into dipping sauces",
            "Use as marinade base for grilled meats"
          ],
          pairsWith: ["Noodle soups", "Grilled meats", "Stir-fries", "Rice dishes"],
          storage: "Room temperature or refrigerate. Keeps for months.",
          substitutes: "Chili crisp or chili oil with garlic, though flavor differs.",
          proTip: "A small spoonful is enough to flavor a bowl of pho. Start small; it packs heat.",
          youtube: [
            { title: "Vietnamese Sa Tế Recipe", url: "https://www.youtube.com/results?search_query=vietnamese+sate+chili+oil+recipe" },
            { title: "Bún Bò Huế with Sa Tế", url: "https://www.youtube.com/results?search_query=bun+bo+hue+sate" }
          ]
        },
        {
          id: "tuong-den",
          name: "Vietnamese Soybean Sauce",
          native: "Tương bần",
          pronunciation: "tuong ban",
          quickDesc: "Thick fermented soybean sauce for cooking and dipping",
          whatIsIt: "A chunky, thick sauce made from fermented soybeans. Unlike smooth hoisin, it has visible bean pieces and a deeper, less sweet flavor. Used in Northern Vietnamese cooking.",
          howToUse: [
            "Use as dipping sauce for boiled pork",
            "Add to stir-fries for depth",
            "Mix into braises and stews",
            "Serve with bánh cuốn rice rolls"
          ],
          pairsWith: ["Pork", "Tofu", "Rice rolls", "Fresh herbs"],
          storage: "Refrigerate after opening. Lasts for months.",
          substitutes: "Hoisin mixed with miso paste approximates it.",
          proTip: "Don't confuse it with Chinese doubanjiang: Vietnamese tương is milder and slightly sweet.",
          youtube: [
            { title: "Vietnamese Fermented Bean Sauce", url: "https://www.youtube.com/results?search_query=vietnamese+tuong+ban+soybean+sauce" }
          ]
        },
        {
          id: "dau-me",
          name: "Sesame Oil",
          native: "Dầu mè",
          pronunciation: "yow meh",
          quickDesc: "Nutty toasted sesame oil for finishing dishes",
          whatIsIt: "Oil pressed from toasted sesame seeds with a rich, nutty aroma. Used as a finishing oil rather than cooking oil in Vietnamese cuisine. Adds depth to marinades and dressings.",
          howToUse: [
            "Drizzle on finished dishes",
            "Add to marinades for grilled meats",
            "Mix into dipping sauces",
            "Use in cold noodle salads"
          ],
          pairsWith: ["Soy sauce", "Garlic", "Ginger", "Rice vinegar", "Noodles"],
          storage: "Cool dark place. Refrigerate for longer storage.",
          substitutes: "No real substitute for the flavor. Omit if unavailable.",
          proTip: "A few drops go a long way. Use it sparingly as an accent so it doesn't take over the dish.",
          youtube: [
            { title: "How to Use Sesame Oil", url: "https://www.youtube.com/results?search_query=how+to+use+sesame+oil+asian+cooking" }
          ]
        },
        {
          id: "nuoc-tuong",
          name: "Vietnamese Soy Sauce",
          native: "Nước tương",
          pronunciation: "nook tuong",
          quickDesc: "Light soy sauce for seasoning and marinades",
          whatIsIt: "A thinner, lighter soy sauce used in Vietnamese cooking. Less dominant than fish sauce but provides salty umami for vegetarian dishes or when a lighter touch is needed.",
          howToUse: [
            "Season stir-fries and fried rice",
            "Use in marinades for grilled meats",
            "Add to vegetarian dishes as fish sauce substitute",
            "Mix into dipping sauces"
          ],
          pairsWith: ["Garlic", "Sugar", "Chili", "Sesame oil", "Rice"],
          storage: "Cool dark place. Lasts for years.",
          substitutes: "Any light soy sauce works. Maggi seasoning is popular in Vietnam.",
          proTip: "Maggi seasoning sauce is extremely popular in Vietnam for its unique savory flavor.",
          youtube: [
            { title: "Vietnamese Seasoning Sauces", url: "https://www.youtube.com/results?search_query=vietnamese+soy+sauce+maggi+seasoning" }
          ]
        },
        {
          id: "dau-giam",
          name: "Rice Vinegar",
          native: "Dấm gạo",
          pronunciation: "zum gow",
          quickDesc: "Mild, slightly sweet vinegar for pickles and dressings",
          whatIsIt: "A mild vinegar made from fermented rice. Less harsh than Western vinegars with subtle sweetness. Used for quick pickles (đồ chua) and salad dressings.",
          howToUse: [
            "Make đồ chua (pickled carrots and daikon)",
            "Add to dipping sauces for brightness",
            "Dress Vietnamese salads",
            "Balance rich, fatty dishes"
          ],
          pairsWith: ["Sugar", "Carrots", "Daikon", "Fish sauce", "Fresh vegetables"],
          storage: "Room temperature. Lasts indefinitely.",
          substitutes: "White wine vinegar or apple cider vinegar, slightly diluted.",
          proTip: "For quick pickles, use equal parts sugar and vinegar with a pinch of salt.",
          youtube: [
            { title: "Vietnamese Pickled Vegetables", url: "https://www.youtube.com/results?search_query=do+chua+vietnamese+pickled+vegetables" },
            { title: "Quick Pickles for Bánh Mì", url: "https://www.youtube.com/results?search_query=banh+mi+pickled+carrots+daikon" }
          ]
        },
        {
          id: "nuoc-cot-dua",
          name: "Coconut Milk",
          native: "Nước cốt dừa",
          pronunciation: "nook coat yua",
          quickDesc: "Rich, creamy coconut extract for curries and desserts",
          whatIsIt: "The creamy liquid extracted from grated coconut flesh. Used in both savory curries (especially Southern Vietnamese cuisine) and sweet desserts like chè.",
          howToUse: [
            "Make Vietnamese coconut curry (cà ri)",
            "Add richness to braised dishes",
            "Use in sweet soups and desserts (chè)",
            "Pour over sticky rice with mango"
          ],
          pairsWith: ["Curry powder", "Lemongrass", "Palm sugar", "Tapioca", "Bananas"],
          storage: "Refrigerate after opening. Use within a week.",
          substitutes: "Heavy cream for savory dishes (different flavor). No substitute for desserts.",
          proTip: "Shake the can before opening. Full-fat coconut milk gives best results.",
          youtube: [
            { title: "Vietnamese Coconut Curry", url: "https://www.youtube.com/results?search_query=vietnamese+coconut+curry+ca+ri" },
            { title: "Che Vietnamese Dessert", url: "https://www.youtube.com/results?search_query=che+vietnamese+coconut+dessert" }
          ]
        },
        {
          id: "duong-thot-not",
          name: "Palm Sugar",
          native: "Đường thốt nốt",
          pronunciation: "duong tot note",
          quickDesc: "Caramel-flavored sugar from palm sap for desserts and savory dishes",
          whatIsIt: "Unrefined sugar made from the sap of palm trees. Has a complex, caramel-like flavor with hints of butterscotch. Used in both sweet and savory Vietnamese dishes.",
          howToUse: [
            "Dissolve in nước chấm dipping sauce",
            "Use in caramelized pork and fish dishes",
            "Sweeten Vietnamese desserts and drinks",
            "Add to curry pastes for depth"
          ],
          pairsWith: ["Fish sauce", "Lime juice", "Coconut milk", "Ginger", "Tamarind"],
          storage: "Airtight container at room temperature. Softens in humidity.",
          substitutes: "Brown sugar or coconut sugar work but lack complexity.",
          proTip: "Grate or chop hard palm sugar before using. Softer paste forms are easier to work with.",
          youtube: [
            { title: "Vietnamese Caramelized Pork", url: "https://www.youtube.com/results?search_query=thit+kho+vietnamese+caramelized+pork" },
            { title: "Palm Sugar in Asian Cooking", url: "https://www.youtube.com/results?search_query=palm+sugar+asian+cooking" }
          ]
        }
      ],
      "Produce": [
        {
          id: "rice-paper",
          name: "Rice Paper",
          native: "Bánh tráng",
          pronunciation: "bahn chahng",
          quickDesc: "Thin wrappers for fresh spring rolls and fried rolls",
          whatIsIt: "Paper-thin dried rounds made from rice flour, water and salt. They're brittle when dry but become pliable and slightly sticky when moistened. The foundation for Vietnamese spring rolls.",
          howToUse: [
            "Dip briefly in warm water until just softened (don't over-soak)",
            "Lay on a damp cloth or flat surface and fill for fresh rolls",
            "Double wrap for fried rolls (so they don't crack)",
            "Let sit 30 seconds after dipping before rolling; they keep softening"
          ],
          pairsWith: ["Vermicelli", "Fresh herbs", "Shrimp", "Pork", "Lettuce"],
          storage: "Dry pantry. Keep away from moisture. Lasts indefinitely.",
          substitutes: "Lettuce cups for a low-carb option. No other wrapper replicates the texture.",
          proTip: "Work with one wrapper at a time. If it tears, start over with a new one; they're cheap. Use warm (not hot) water.",
          youtube: [
            { title: "How to Roll Vietnamese Spring Rolls", url: "https://www.youtube.com/results?search_query=how+to+roll+vietnamese+spring+rolls+rice+paper" },
            { title: "Fresh Spring Rolls (Gỏi Cuốn) Recipe", url: "https://www.youtube.com/results?search_query=goi+cuon+fresh+spring+rolls+recipe" }
          ]
        },
        {
          id: "rau-thom",
          name: "Thai Basil",
          native: "Rau húng quế",
          pronunciation: "row hung kway",
          quickDesc: "Anise-scented basil served with pho and noodle dishes",
          whatIsIt: "A variety of basil with purple stems, pointed leaves and a distinctive anise/licorice flavor. Unlike sweet basil, it holds up to heat and is added to soups and stir-fries.",
          howToUse: [
            "Add whole leaves to pho just before eating",
            "Tear into stir-fries at the last minute",
            "Include in fresh spring rolls",
            "Serve on the herb plate with any Vietnamese meal"
          ],
          pairsWith: ["Pho", "Beef", "Chili", "Lime", "Bean sprouts"],
          storage: "Wrap stems in damp paper towel, refrigerate. Use within a week.",
          substitutes: "Sweet basil lacks the anise flavor but works in a pinch. Mint is sometimes used.",
          proTip: "Look for purple stems and sturdy leaves. Don't cook it long; add it at the very end.",
          youtube: [
            { title: "Vietnamese Herbs Explained", url: "https://www.youtube.com/results?search_query=vietnamese+herbs+thai+basil+explained" },
            { title: "How to Use Thai Basil", url: "https://www.youtube.com/results?search_query=thai+basil+cooking+uses" }
          ]
        },
        {
          id: "hung-lui",
          name: "Vietnamese Mint",
          native: "Rau răm",
          pronunciation: "row ram",
          quickDesc: "Peppery, citrusy herb used in spring rolls (not related to mint)",
          whatIsIt: "Despite its English name, this isn't related to mint. It has pointed leaves with chevron markings and a peppery, citrusy, slightly numbing flavor. Also called laksa leaf or hot mint.",
          howToUse: [
            "Add to fresh spring rolls (gỏi cuốn)",
            "Include in noodle salads",
            "Garnish duck and rich meat dishes",
            "Use in Malaysian laksa"
          ],
          pairsWith: ["Duck", "Shrimp", "Spring rolls", "Rich meats", "Noodle dishes"],
          storage: "Wrap in damp paper towels and refrigerate. It spoils quickly, so use it within a few days.",
          substitutes: "No true substitute. Combination of mint and cilantro approximates some aspects.",
          proTip: "It's potent, so use it sparingly. A few leaves per spring roll is enough.",
          youtube: [
            { title: "Vietnamese Coriander/Rau Răm", url: "https://www.youtube.com/results?search_query=rau+ram+vietnamese+coriander" },
            { title: "Spring Rolls with Vietnamese Herbs", url: "https://www.youtube.com/results?search_query=goi+cuon+vietnamese+herbs" }
          ]
        },
        {
          id: "rau-mui",
          name: "Cilantro",
          native: "Rau mùi / Ngò",
          pronunciation: "row moo-ee / ngo",
          quickDesc: "Fresh, citrusy herb used in everything from pho to bánh mì",
          whatIsIt: "The same cilantro used in Mexican and Indian cuisines. In Vietnamese cooking, both leaves and stems are used generously as a fresh garnish and flavor component.",
          howToUse: [
            "Scatter over pho and noodle soups",
            "Add to bánh mì sandwiches",
            "Include in fresh spring rolls",
            "Mix into salads and garnishes"
          ],
          pairsWith: ["Lime", "Chili", "Fish sauce", "Pho", "Almost everything"],
          storage: "Stand stems in water, cover with plastic bag, refrigerate. Or wrap in damp towels.",
          substitutes: "If you're one of the people who taste soap, use more of the other herbs instead.",
          proTip: "Don't throw away the stems. Chop them and use them too; they have lots of flavor.",
          youtube: [
            { title: "How to Store Cilantro", url: "https://www.youtube.com/results?search_query=how+to+store+cilantro+fresh" },
            { title: "Vietnamese Herb Plate", url: "https://www.youtube.com/results?search_query=vietnamese+fresh+herb+plate" }
          ]
        },
        {
          id: "ngo-gai",
          name: "Culantro/Sawtooth Herb",
          native: "Ngò gai",
          pronunciation: "ngo guy",
          quickDesc: "Long serrated leaves with concentrated cilantro flavor",
          whatIsIt: "A tropical herb with long, serrated leaves and an intense cilantro-like flavor. Not related to cilantro despite similar taste. Holds up to cooking better than cilantro.",
          howToUse: [
            "Tear the leaves into pho",
            "Include on Vietnamese herb plates",
            "Use in long-cooked dishes where cilantro would wilt",
            "Add to soups and braises"
          ],
          pairsWith: ["Pho", "Beef dishes", "Soups", "Rich broths", "Other Vietnamese herbs"],
          storage: "Wrap in damp paper towels, refrigerate. Lasts longer than cilantro.",
          substitutes: "Extra cilantro, though culantro has more concentrated flavor.",
          proTip: "If you can't find fresh culantro, Asian grocers sometimes carry it frozen.",
          youtube: [
            { title: "Culantro vs Cilantro", url: "https://www.youtube.com/results?search_query=culantro+vs+cilantro+difference" },
            { title: "Pho Herbs Guide", url: "https://www.youtube.com/results?search_query=pho+herbs+guide+vietnamese" }
          ]
        },
        {
          id: "tia-to",
          name: "Perilla/Shiso",
          native: "Tía tô",
          pronunciation: "tee-ah toe",
          quickDesc: "Purple-green leaves with minty, basil-like flavor",
          whatIsIt: "Large, soft leaves that are green on top and purple underneath. The flavor is complex: minty, basil-like, slightly anise. Used in Korean and Japanese cuisine as well.",
          howToUse: [
            "Wrap grilled meats with rice and dipping sauce",
            "Add to fresh spring rolls",
            "Include on herb plates",
            "Use as wrapping leaves for lettuce wraps"
          ],
          pairsWith: ["Grilled meats", "Rice", "Nước chấm", "Fresh rolls", "Rich dishes"],
          storage: "Wrap in damp paper towels, refrigerate. Use within a week.",
          substitutes: "Mint and basil together approximate some of the flavor.",
          proTip: "The two sides of the leaf taste different; the purple underside is more aromatic.",
          youtube: [
            { title: "Vietnamese Perilla/Tía Tô", url: "https://www.youtube.com/results?search_query=tia+to+vietnamese+perilla" },
            { title: "Korean vs Vietnamese Perilla", url: "https://www.youtube.com/results?search_query=perilla+leaves+cooking" }
          ]
        },
        {
          id: "la-lot",
          name: "Lolot/Betel Leaves",
          native: "Lá lốt",
          pronunciation: "lah lot",
          quickDesc: "Heart-shaped leaves for wrapping grilled beef",
          whatIsIt: "Heart-shaped, dark green leaves from the pepper family. They have a unique peppery, slightly bitter flavor that becomes aromatic when grilled. Used to wrap beef in the famous bò lá lốt.",
          howToUse: [
            "Wrap around seasoned ground beef and grill (bò lá lốt)",
            "Use as wrapping for other grilled meats",
            "Add to certain noodle soups"
          ],
          pairsWith: ["Ground beef", "Pork", "Lemongrass", "Fish sauce", "Grilled meats"],
          storage: "Refrigerate wrapped in damp paper towels. Use within a few days.",
          substitutes: "Grape leaves work for wrapping but lack the distinct flavor. Perilla is sometimes used.",
          proTip: "Roll the beef tightly and secure with toothpicks before grilling. Grill over high heat for char.",
          youtube: [
            { title: "Bò Lá Lốt Recipe", url: "https://www.youtube.com/results?search_query=bo+la+lot+grilled+beef+betel+leaf" },
            { title: "Vietnamese Grilled Beef Wraps", url: "https://www.youtube.com/results?search_query=vietnamese+grilled+beef+lolot+leaves" }
          ]
        },
        {
          id: "xa",
          name: "Lemongrass",
          native: "Xả",
          pronunciation: "sah",
          quickDesc: "Fragrant citrusy stalks used in marinades and soups",
          whatIsIt: "Long, fibrous stalks with an intense lemon-citrus fragrance. The flavor is bright and floral. Only the lower, tender portion is edible; upper stalks are used for infusing.",
          howToUse: [
            "Mince finely for marinades and meat dishes",
            "Bruise whole stalks and add to soups (remove before eating)",
            "Make lemongrass chicken, pork or beef",
            "Infuse into teas and drinks"
          ],
          pairsWith: ["Garlic", "Chili", "Fish sauce", "Chicken", "Pork", "Shrimp"],
          storage: "Refrigerate for weeks. Freeze for months. Dried lemongrass lacks fresh flavor.",
          substitutes: "Lemon zest + a little ginger approximates it but isn't the same.",
          proTip: "Remove tough outer layers and use only the bottom 4-5 inches. The purple-tinged inner core is most tender.",
          youtube: [
            { title: "How to Prepare Lemongrass", url: "https://www.youtube.com/results?search_query=how+to+prepare+lemongrass+cooking" },
            { title: "Vietnamese Lemongrass Chicken", url: "https://www.youtube.com/results?search_query=ga+xao+xa+ot+lemongrass+chicken" }
          ]
        },
        {
          id: "gia",
          name: "Bean Sprouts",
          native: "Giá đỗ",
          pronunciation: "yah doh",
          quickDesc: "Crisp, fresh sprouts for pho and noodle dishes",
          whatIsIt: "Sprouted mung beans with crunchy white stems and tiny green heads. They add freshness and texture to noodle soups and stir-fries. Best used very fresh.",
          howToUse: [
            "Add raw to pho just before eating for crunch",
            "Quick stir-fry with garlic",
            "Include in fresh spring rolls",
            "Top bún and other noodle dishes"
          ],
          pairsWith: ["Pho", "Noodles", "Stir-fries", "Garlic", "Scallions"],
          storage: "Refrigerate in water, change daily. Use within 2-3 days.",
          substitutes: "Nothing replicates the crunch. Shredded cabbage adds different texture.",
          proTip: "For pho, some people like them raw and crunchy, others briefly blanched. Both are correct.",
          youtube: [
            { title: "Pho Toppings Guide", url: "https://www.youtube.com/results?search_query=pho+toppings+bean+sprouts" },
            { title: "Stir-Fried Bean Sprouts", url: "https://www.youtube.com/results?search_query=stir+fried+bean+sprouts+asian" }
          ]
        },
        {
          id: "cu-cai-trang",
          name: "Daikon Radish",
          native: "Củ cải trắng",
          pronunciation: "koo kai chahng",
          quickDesc: "Large white radish for pickles, soups and salads",
          whatIsIt: "A large, mild white radish. Less peppery than red radishes. Used throughout Vietnamese cuisine in pickles (đồ chua), soups and fresh preparations.",
          howToUse: [
            "Pickle with carrots for bánh mì (đồ chua)",
            "Add to soups and hot pots",
            "Shred raw for salads",
            "Braise with pork or beef"
          ],
          pairsWith: ["Carrots", "Rice vinegar", "Fish sauce", "Pork", "Beef"],
          storage: "Refrigerate whole for weeks. Cut daikon should be used within days.",
          substitutes: "Regular radishes are more peppery. Turnip works in cooked dishes.",
          proTip: "Salt and squeeze out water before pickling for better crunch. Thinner slices pickle faster.",
          youtube: [
            { title: "Vietnamese Pickled Vegetables", url: "https://www.youtube.com/results?search_query=do+chua+pickled+daikon+carrots" },
            { title: "How to Make Đồ Chua", url: "https://www.youtube.com/results?search_query=banh+mi+pickles+do+chua+recipe" }
          ]
        },
        {
          id: "ca-rot",
          name: "Carrots",
          native: "Cà rốt",
          pronunciation: "kah rot",
          quickDesc: "A Vietnamese pickle staple that also adds color to dishes",
          whatIsIt: "Regular carrots are used throughout Vietnamese cooking, especially pickled with daikon for bánh mì and bún dishes. They add sweetness, crunch and vibrant color.",
          howToUse: [
            "Julienne and pickle with daikon (đồ chua)",
            "Shred for fresh spring rolls",
            "Add to stir-fries and soups",
            "Include in noodle bowls"
          ],
          pairsWith: ["Daikon", "Rice vinegar", "Sugar", "Spring rolls", "Noodle dishes"],
          storage: "Refrigerate. Keeps for weeks.",
          substitutes: "No substitute needed; carrots are widely available.",
          proTip: "Cut into thin matchsticks for quick pickling. Thicker cuts need more time.",
          youtube: [
            { title: "How to Julienne Carrots", url: "https://www.youtube.com/results?search_query=how+to+julienne+carrots+vietnamese" },
            { title: "Bánh Mì Pickles", url: "https://www.youtube.com/results?search_query=banh+mi+pickled+vegetables" }
          ]
        },
        {
          id: "ot-tuoi",
          name: "Fresh Chilies",
          native: "Ớt tươi",
          pronunciation: "ut too-ee",
          quickDesc: "Small, fiery chilies for heat and garnish",
          whatIsIt: "Thai bird's eye chilies or similar small, hot peppers. Used fresh for intense heat. Vietnamese cooking tends to be less spicy than Thai, but fresh chilies are always offered on the side.",
          howToUse: [
            "Slice into nước chấm dipping sauce",
            "Add to pho and noodle soups for heat",
            "Include in stir-fries",
            "Mince into marinades"
          ],
          pairsWith: ["Fish sauce", "Lime", "Garlic", "All Vietnamese dishes"],
          storage: "Refrigerate for 1-2 weeks. Freeze for longer storage.",
          substitutes: "Serrano or jalapeño (less hot). Red pepper flakes (different texture).",
          proTip: "Remove seeds and membrane for less heat. The tip is milder than the stem end.",
          youtube: [
            { title: "Thai Chilies in Cooking", url: "https://www.youtube.com/results?search_query=thai+bird+eye+chili+cooking" },
            { title: "Vietnamese Chili Uses", url: "https://www.youtube.com/results?search_query=vietnamese+fresh+chili+cooking" }
          ]
        },
        {
          id: "hanh-la",
          name: "Scallions/Green Onions",
          native: "Hành lá",
          pronunciation: "hahn lah",
          quickDesc: "Mild onion flavor for garnishing and cooking",
          whatIsIt: "The same green onions used worldwide. Both white and green parts are used in Vietnamese cooking for their mild onion flavor and fresh green color as garnish.",
          howToUse: [
            "Scatter over pho and noodle soups",
            "Chop into scallion oil for rice and noodles",
            "Add to stir-fries",
            "Use in marinades and fillings"
          ],
          pairsWith: ["Ginger", "Garlic", "Rice", "Noodles", "All Vietnamese dishes"],
          storage: "Refrigerate standing in water or wrapped in damp towels.",
          substitutes: "Chives or the green part of leeks work similarly.",
          proTip: "Make mỡ hành (scallion oil): pour hot oil over chopped scallions. It's a classic topping for rice and noodles.",
          youtube: [
            { title: "Vietnamese Scallion Oil", url: "https://www.youtube.com/results?search_query=mo+hanh+vietnamese+scallion+oil" },
            { title: "How to Use Scallions", url: "https://www.youtube.com/results?search_query=scallions+green+onions+cooking" }
          ]
        },
        {
          id: "toi",
          name: "Garlic",
          native: "Tỏi",
          pronunciation: "toy",
          quickDesc: "Everyday aromatic used generously in Vietnamese cooking",
          whatIsIt: "Regular garlic is used abundantly in Vietnamese cuisine: minced, sliced, fried or raw. Fried garlic is a common topping, and garlic shows up in most savory dishes.",
          howToUse: [
            "Mince and add to marinades and stir-fries",
            "Fry until golden for crispy garlic topping",
            "Include in dipping sauces",
            "Add to soups and braises"
          ],
          pairsWith: ["Fish sauce", "Lemongrass", "Chili", "Everything savory"],
          storage: "Room temperature in dry place. Keeps for weeks to months.",
          substitutes: "Garlic powder in a pinch, but fresh is always better.",
          proTip: "Fried garlic (tỏi phi) is sold pre-made at Asian grocers. It's a great shortcut topping.",
          youtube: [
            { title: "Vietnamese Fried Garlic", url: "https://www.youtube.com/results?search_query=toi+phi+vietnamese+fried+garlic" },
            { title: "How to Fry Garlic Crispy", url: "https://www.youtube.com/results?search_query=crispy+fried+garlic+asian+cooking" }
          ]
        },
        {
          id: "gung",
          name: "Ginger",
          native: "Gừng",
          pronunciation: "gung",
          quickDesc: "Warm, spicy root for soups, marinades and digestion",
          whatIsIt: "Fresh ginger root with its characteristic warm, spicy bite. Used in Vietnamese cooking to balance rich dishes, add warmth to soups and aid digestion.",
          howToUse: [
            "Slice and add to pho broth",
            "Char for deeper flavor in stocks",
            "Mince into stir-fries and marinades",
            "Make ginger dipping sauce for chicken"
          ],
          pairsWith: ["Scallions", "Garlic", "Chicken", "Fish", "Soups"],
          storage: "Room temperature for a week, refrigerate for longer, freeze for months.",
          substitutes: "Ground ginger lacks freshness. Galangal has different flavor but sometimes works.",
          proTip: "Char ginger and onion directly over a flame before adding them to pho for a smoky depth.",
          youtube: [
            { title: "How to Char Ginger for Pho", url: "https://www.youtube.com/results?search_query=char+ginger+onion+pho+recipe" },
            { title: "Ginger Scallion Sauce", url: "https://www.youtube.com/results?search_query=ginger+scallion+sauce+vietnamese" }
          ]
        },
        {
          id: "chanh",
          name: "Lime",
          native: "Chanh",
          pronunciation: "chahn",
          quickDesc: "Citrus that brightens most Vietnamese dishes",
          whatIsIt: "Fresh limes (or sometimes small lemons called chanh vàng) provide much of the acidity in Vietnamese cuisine. Squeezed into pho, mixed into dipping sauces and served with nearly every meal.",
          howToUse: [
            "Squeeze into pho and noodle soups",
            "Add to nước chấm dipping sauce",
            "Serve wedges alongside grilled meats",
            "Use juice in marinades and dressings"
          ],
          pairsWith: ["Fish sauce", "Chili", "Sugar", "Fresh herbs", "Everything"],
          storage: "Room temperature for a week, refrigerate for longer.",
          substitutes: "Lemon works in a pinch but is less tart. Rice vinegar adds sourness differently.",
          proTip: "Roll limes firmly on the counter before cutting to release more juice.",
          youtube: [
            { title: "How to Eat Pho Properly", url: "https://www.youtube.com/results?search_query=how+to+eat+pho+lime+herbs" },
            { title: "Vietnamese Lime Uses", url: "https://www.youtube.com/results?search_query=lime+in+vietnamese+cooking" }
          ]
        }
      ],
      "Noodles & Rice": [
        {
          id: "rice-vermicelli",
          name: "Rice Vermicelli",
          native: "Bún",
          pronunciation: "boon",
          quickDesc: "Thin rice noodles for salads, spring rolls and soups",
          whatIsIt: "Thin, round dried rice noodles. Much thinner than pho noodles, they're the base for bún bowls and the filling in fresh spring rolls. They cook in minutes.",
          howToUse: [
            "Boil 3-5 minutes, then rinse with cold water",
            "Serve at room temperature in bún bowls with grilled meat",
            "Add to fresh spring rolls",
            "Use in soups (add at the end)"
          ],
          pairsWith: ["Grilled pork", "Fresh herbs", "Nước chấm", "Pickled vegetables", "Crushed peanuts"],
          storage: "Dry pantry. Keeps for over a year.",
          substitutes: "Thin rice stick noodles or angel hair pasta (different but works).",
          proTip: "Don't overcook them; they get mushy fast. Slightly underdone is better, since they keep softening.",
          youtube: [
            { title: "Bún Thịt Nướng (Vermicelli Bowl)", url: "https://www.youtube.com/results?search_query=bun+thit+nuong+vietnamese+vermicelli+bowl" },
            { title: "Vietnamese Grilled Pork Noodles", url: "https://www.youtube.com/results?search_query=vietnamese+grilled+pork+noodles+recipe" }
          ]
        },
        {
          id: "pho-noodles",
          name: "Phở Noodles",
          native: "Bánh phở",
          pronunciation: "bahn fuh",
          quickDesc: "Flat rice noodles specifically for Vietnam's famous soup",
          whatIsIt: "Flat, wide rice noodles that are soft and slippery. Fresh bánh phở are best but dried works well. They're wider and flatter than bún (vermicelli) and specifically used for phở.",
          howToUse: [
            "Blanch fresh noodles briefly in boiling water",
            "Soak dried noodles, then boil 5-7 minutes",
            "Place in bowl and ladle hot broth over them",
            "Don't overcook; they should be tender, not mushy"
          ],
          pairsWith: ["Phở broth", "Beef", "Chicken", "Bean sprouts", "Herbs", "Hoisin", "Sriracha"],
          storage: "Fresh: refrigerate and use within 2-3 days. Dried: pantry for months.",
          substitutes: "Pad thai noodles are similar. Fettuccine in a pinch (very different though).",
          proTip: "Fresh phở noodles from Asian grocers are noticeably better than dried. Look in the refrigerated section.",
          youtube: [
            { title: "How to Make Phở", url: "https://www.youtube.com/results?search_query=how+to+make+pho+vietnamese+recipe" },
            { title: "Phở Noodle Guide", url: "https://www.youtube.com/results?search_query=pho+noodles+fresh+vs+dried" }
          ]
        },
        {
          id: "mi-trung",
          name: "Egg Noodles",
          native: "Mì trứng",
          pronunciation: "mee chung",
          quickDesc: "Yellow wheat noodles for mì quảng and dry noodle dishes",
          whatIsIt: "Yellow noodles made with wheat flour and eggs. Used in dishes like mì quảng (turmeric noodles from central Vietnam) and various stir-fried and soup noodle dishes.",
          howToUse: [
            "Boil until just tender, don't overcook",
            "Use in mì quảng with turmeric broth",
            "Stir-fry for mì xào (fried noodles)",
            "Serve in soups"
          ],
          pairsWith: ["Turmeric", "Pork", "Shrimp", "Quail eggs", "Peanuts"],
          storage: "Fresh: refrigerate for a few days. Dried: pantry for months.",
          substitutes: "Chinese egg noodles or Italian egg pasta work similarly.",
          proTip: "For mì quảng, the noodles should be slightly chewy and served with very little broth.",
          youtube: [
            { title: "Mì Quảng Recipe", url: "https://www.youtube.com/results?search_query=mi+quang+vietnamese+turmeric+noodles" },
            { title: "Vietnamese Egg Noodles", url: "https://www.youtube.com/results?search_query=vietnamese+egg+noodles+recipe" }
          ]
        },
        {
          id: "hu-tieu",
          name: "Hủ Tiếu Noodles",
          native: "Hủ tiếu",
          pronunciation: "hoo tee-oh",
          quickDesc: "Chewy Cambodian-Vietnamese rice noodles for clear soups",
          whatIsIt: "Translucent rice noodles that are chewier than phở noodles. Popular in Southern Vietnam for hủ tiếu Nam Vang (Phnom Penh-style noodles) with pork, seafood and clear broth.",
          howToUse: [
            "Blanch briefly and add to clear broth",
            "Serve dry with sauce on the side",
            "Top with ground pork, shrimp and quail eggs",
            "Add fried garlic and scallion oil"
          ],
          pairsWith: ["Pork", "Shrimp", "Clear broth", "Bean sprouts", "Garlic oil"],
          storage: "Fresh: refrigerate a few days. Dried: pantry for months.",
          substitutes: "Phở noodles work but have different texture.",
          proTip: "Hủ tiếu can be served 'khô' (dry, with sauce on side) or 'nước' (in broth).",
          youtube: [
            { title: "Hủ Tiếu Nam Vang", url: "https://www.youtube.com/results?search_query=hu+tieu+nam+vang+recipe" },
            { title: "Vietnamese Clear Noodle Soup", url: "https://www.youtube.com/results?search_query=hu+tieu+vietnamese+noodle+soup" }
          ]
        },
        {
          id: "mien",
          name: "Glass Noodles",
          native: "Miến",
          pronunciation: "mee-en",
          quickDesc: "Translucent mung bean noodles for soups and spring rolls",
          whatIsIt: "Clear noodles made from mung bean starch. They become translucent and slippery when cooked. Used in soups, spring rolls and stir-fries.",
          howToUse: [
            "Soak in warm water until soft, then cook briefly",
            "Add to miến gà (chicken glass noodle soup)",
            "Include in fresh or fried spring rolls",
            "Stir-fry with vegetables"
          ],
          pairsWith: ["Chicken", "Mushrooms", "Crab", "Wood ear fungus", "Ginger"],
          storage: "Dry pantry. Keeps indefinitely.",
          substitutes: "Rice vermicelli has different texture but works in some dishes.",
          proTip: "Cut them with scissors after cooking, since they can be very long and unwieldy.",
          youtube: [
            { title: "Miến Gà Recipe", url: "https://www.youtube.com/results?search_query=mien+ga+vietnamese+glass+noodle+soup" },
            { title: "Glass Noodles Guide", url: "https://www.youtube.com/results?search_query=glass+noodles+cellophane+noodles+cooking" }
          ]
        },
        {
          id: "banh-canh",
          name: "Bánh Canh Noodles",
          native: "Bánh canh",
          pronunciation: "bahn kahn",
          quickDesc: "Thick, chewy tapioca noodles for rich crab soup",
          whatIsIt: "Thick, round, chewy noodles made from tapioca and rice flour. They have a distinctive bouncy texture and are used in bánh canh soups with crab, pork or fish cake.",
          howToUse: [
            "Add to thick, rich broths",
            "Make bánh canh cua (crab noodle soup)",
            "Serve with fish cakes and pork",
            "Cook directly in broth to absorb flavor"
          ],
          pairsWith: ["Crab", "Pork hocks", "Fish cakes", "Thick broth", "Scallion oil"],
          storage: "Fresh: refrigerate for a few days. Dried available at some grocers.",
          substitutes: "Udon has similar thickness but different texture.",
          proTip: "This dish is known for its thick broth and chewy noodles; it should be hearty.",
          youtube: [
            { title: "Bánh Canh Cua Recipe", url: "https://www.youtube.com/results?search_query=banh+canh+cua+crab+noodle+soup" },
            { title: "Vietnamese Thick Noodle Soup", url: "https://www.youtube.com/results?search_query=banh+canh+vietnamese+noodle" }
          ]
        },
        {
          id: "gao-te",
          name: "Jasmine Rice",
          native: "Gạo tẻ",
          pronunciation: "gow teh",
          quickDesc: "Fragrant long-grain rice for everyday Vietnamese meals",
          whatIsIt: "Fragrant, slightly sticky long-grain rice. The everyday rice of Vietnam, served alongside virtually every meal. Vietnamese jasmine rice has a subtle floral aroma.",
          howToUse: [
            "Rinse well and cook with appropriate water ratio",
            "Serve alongside curries, stir-fries and grilled meats",
            "Use for cơm tấm (broken rice) dishes",
            "Make fried rice with day-old rice"
          ],
          pairsWith: ["Grilled meats", "Stir-fries", "Curries", "Fish sauce", "Eggs"],
          storage: "Cool, dry place in airtight container. Keeps for years.",
          substitutes: "Any long-grain rice works. Basmati is less sticky.",
          proTip: "Rinse until water runs clear for fluffier rice. Let rest 5 minutes after cooking before serving.",
          youtube: [
            { title: "Perfect Vietnamese Rice", url: "https://www.youtube.com/results?search_query=how+to+cook+vietnamese+jasmine+rice" },
            { title: "Rice Cooker vs Stovetop", url: "https://www.youtube.com/results?search_query=perfect+jasmine+rice+recipe" }
          ]
        },
        {
          id: "gao-nep",
          name: "Sticky/Glutinous Rice",
          native: "Gạo nếp",
          pronunciation: "gow nep",
          quickDesc: "Chewy, sticky rice for xôi and bánh",
          whatIsIt: "Short-grain rice that becomes very sticky and chewy when cooked. Used for xôi (sticky rice dishes), bánh chưng (rice cakes) and desserts. Requires soaking before cooking.",
          howToUse: [
            "Soak overnight or at least 4 hours",
            "Steam (don't boil) for best texture",
            "Make xôi with mung beans, peanuts or coconut",
            "Use for bánh chưng and bánh tét"
          ],
          pairsWith: ["Mung beans", "Coconut", "Pandan", "Chinese sausage", "Pork"],
          storage: "Cool, dry place in airtight container. Keeps for years.",
          substitutes: "Sushi rice is less sticky but similar. Regular rice won't work.",
          proTip: "These must be soaked first. Steaming gives better texture than boiling.",
          youtube: [
            { title: "Xôi Recipe", url: "https://www.youtube.com/results?search_query=xoi+vietnamese+sticky+rice+recipe" },
            { title: "How to Steam Sticky Rice", url: "https://www.youtube.com/results?search_query=how+to+steam+sticky+rice+vietnamese" }
          ]
        },
        {
          id: "com-tam",
          name: "Broken Rice",
          native: "Cơm tấm",
          pronunciation: "kohm tam",
          quickDesc: "Fractured rice grains for Saigon's iconic grilled pork dish",
          whatIsIt: "Rice grains that have been fractured during milling. Once considered inferior, it's now the base of cơm tấm, Saigon's classic dish of grilled pork, egg and pickles over broken rice.",
          howToUse: [
            "Cook like regular rice (may need slightly less water)",
            "Serve with sườn nướng (grilled pork chop)",
            "Top with bì (shredded pork skin), chả (pork loaf) and fried egg",
            "Drizzle with nước mắm pha (diluted fish sauce)"
          ],
          pairsWith: ["Grilled pork chop", "Fish sauce", "Pickled vegetables", "Fried egg", "Pork loaf"],
          storage: "Cool, dry place. Keeps for months.",
          substitutes: "Regular jasmine rice works but lacks the unique texture.",
          proTip: "The grains cook slightly faster than whole rice. Cơm tấm is traditionally a breakfast/lunch dish in Vietnam.",
          youtube: [
            { title: "Cơm Tấm Recipe", url: "https://www.youtube.com/results?search_query=com+tam+suon+bi+cha+recipe" },
            { title: "Saigon Broken Rice", url: "https://www.youtube.com/results?search_query=vietnamese+broken+rice+com+tam" }
          ]
        },
        {
          id: "bot-gao",
          name: "Rice Flour",
          native: "Bột gạo",
          pronunciation: "boat gow",
          quickDesc: "Fine rice flour for bánh cuốn, bánh xèo and desserts",
          whatIsIt: "Finely ground rice flour used for making fresh rice noodles, bánh cuốn (steamed rice rolls), bánh xèo (crispy crepes) and various desserts.",
          howToUse: [
            "Mix with water for bánh cuốn batter",
            "Combine with turmeric for bánh xèo",
            "Use in sweet desserts and cakes",
            "Make fresh rice noodles"
          ],
          pairsWith: ["Tapioca starch", "Water", "Turmeric", "Coconut milk", "Sugar"],
          storage: "Cool, dry place in airtight container. Keeps for months.",
          substitutes: "Glutinous rice flour has different properties. Not interchangeable with wheat flour.",
          proTip: "For best bánh cuốn, let batter rest at least 30 minutes before cooking.",
          youtube: [
            { title: "Bánh Cuốn Recipe", url: "https://www.youtube.com/results?search_query=banh+cuon+steamed+rice+rolls+recipe" },
            { title: "Bánh Xèo Recipe", url: "https://www.youtube.com/results?search_query=banh+xeo+vietnamese+crepe+recipe" }
          ]
        }
      ],
      "Proteins & Seafood": [
        {
          id: "thit-nuong",
          name: "Vietnamese Grilled Pork",
          native: "Thịt nướng",
          pronunciation: "tit noong",
          quickDesc: "Lemongrass-marinated pork for bún and rice dishes",
          whatIsIt: "Thinly sliced pork (shoulder or loin) marinated in lemongrass, fish sauce, garlic and sugar, then grilled until caramelized. The quintessential protein for vermicelli bowls.",
          howToUse: [
            "Grill or pan-fry until caramelized",
            "Serve over rice (cơm) or vermicelli (bún)",
            "Add to bánh mì sandwiches",
            "Wrap in lettuce with herbs"
          ],
          pairsWith: ["Vermicelli", "Rice", "Nước chấm", "Fresh herbs", "Pickled vegetables"],
          storage: "Marinate up to overnight. Cooked pork keeps 3-4 days refrigerated.",
          substitutes: "Chicken or beef can be marinated similarly.",
          proTip: "Slice pork thin against the grain for tenderness. The sugar in the marinade creates the caramelization you want.",
          youtube: [
            { title: "Bún Thịt Nướng Recipe", url: "https://www.youtube.com/results?search_query=bun+thit+nuong+vietnamese+grilled+pork" },
            { title: "Vietnamese Pork Marinade", url: "https://www.youtube.com/results?search_query=vietnamese+grilled+pork+lemongrass+marinade" }
          ]
        },
        {
          id: "cha-lua",
          name: "Vietnamese Pork Loaf",
          native: "Chả lụa",
          pronunciation: "chah loo-ah",
          quickDesc: "Smooth, bouncy pork sausage wrapped in banana leaves",
          whatIsIt: "A smooth, dense pork sausage made from pounded pork, fish sauce and spices, wrapped in banana leaves and steamed. Has a distinctive bouncy texture and mild flavor.",
          howToUse: [
            "Slice and add to bánh mì",
            "Include in cơm tấm plates",
            "Add to spring rolls",
            "Serve as part of bánh cuốn"
          ],
          pairsWith: ["Bánh mì", "Rice", "Fish sauce", "Fresh vegetables", "Pickles"],
          storage: "Refrigerate unopened for weeks. Once opened, use within a week.",
          substitutes: "No real substitute for the texture. Spam is sometimes used but very different.",
          proTip: "Buy from Vietnamese delis for freshest quality. The banana leaf wrapping is traditional.",
          youtube: [
            { title: "How to Make Chả Lụa", url: "https://www.youtube.com/results?search_query=cha+lua+vietnamese+pork+roll+recipe" },
            { title: "Vietnamese Deli Meats", url: "https://www.youtube.com/results?search_query=vietnamese+cold+cuts+cha+lua" }
          ]
        },
        {
          id: "tom-kho",
          name: "Dried Shrimp",
          native: "Tôm khô",
          pronunciation: "tom koh",
          quickDesc: "Intense umami flavor bombs for soups and stir-fries",
          whatIsIt: "Small shrimp that have been salted and dried. They pack intense umami and seafood flavor. Used to add depth to soups, stir-fries and papaya salad.",
          howToUse: [
            "Soak briefly to rehydrate",
            "Add to soups for depth",
            "Pound into green papaya salad",
            "Use in stir-fries and fried rice"
          ],
          pairsWith: ["Papaya", "Cabbage", "Eggs", "Soups", "Stir-fries"],
          storage: "Room temperature in airtight container. Refrigerate for longer storage.",
          substitutes: "Dried scallops have similar umami. Fish sauce adds different but related flavor.",
          proTip: "A little goes a long way. They're very concentrated in flavor.",
          youtube: [
            { title: "Vietnamese Papaya Salad", url: "https://www.youtube.com/results?search_query=goi+du+du+vietnamese+papaya+salad+dried+shrimp" },
            { title: "How to Use Dried Shrimp", url: "https://www.youtube.com/results?search_query=dried+shrimp+asian+cooking" }
          ]
        },
        {
          id: "muc-kho",
          name: "Dried Squid",
          native: "Mực khô",
          pronunciation: "mook koh",
          quickDesc: "Chewy dried squid for snacking and cooking",
          whatIsIt: "Squid that's been dried and flattened. Popular as a snack when grilled and served with chili sauce, or used in cooking to add umami to dishes.",
          howToUse: [
            "Grill over flame and serve with chili sauce",
            "Rehydrate and add to stir-fries",
            "Use in soups for flavor",
            "Eat as a chewy snack"
          ],
          pairsWith: ["Chili sauce", "Beer", "Soups", "Stir-fries"],
          storage: "Room temperature in airtight container. Keeps for months.",
          substitutes: "No real substitute for the unique chewy texture.",
          proTip: "Look for it shredded (easier to cook with) or whole (better for grilling as snack).",
          youtube: [
            { title: "Grilled Dried Squid", url: "https://www.youtube.com/results?search_query=muc+kho+nuong+vietnamese+grilled+dried+squid" },
            { title: "Vietnamese Dried Squid Snack", url: "https://www.youtube.com/results?search_query=dried+squid+vietnamese+street+food" }
          ]
        },
        {
          id: "dau-hu",
          name: "Tofu",
          native: "Đậu hũ",
          pronunciation: "dow hoo",
          quickDesc: "Versatile soy protein used fresh, fried or in soups",
          whatIsIt: "Bean curd made from soy milk. In Vietnamese cooking, it's used fresh (silky), fried (crispy outside) or in various preparations. A protein staple for vegetarians and omnivores alike.",
          howToUse: [
            "Fry until golden for crispy tofu",
            "Add silky tofu to soups",
            "Stuff fried tofu with pork (đậu hũ nhồi thịt)",
            "Serve with bún đậu mắm tôm"
          ],
          pairsWith: ["Lemongrass", "Fish sauce", "Mắm tôm", "Scallions", "Mushrooms"],
          storage: "Refrigerate in water, change water daily. Use within a week.",
          substitutes: "For fried tofu specifically, buy it pre-fried at Asian grocers to save time.",
          proTip: "Press firm tofu before frying for crispier results. Or buy pre-fried tofu puffs.",
          youtube: [
            { title: "Vietnamese Fried Tofu", url: "https://www.youtube.com/results?search_query=dau+hu+chien+vietnamese+fried+tofu" },
            { title: "Bún Đậu Mắm Tôm", url: "https://www.youtube.com/results?search_query=bun+dau+mam+tom+recipe" }
          ]
        },
        {
          id: "trung-cut",
          name: "Quail Eggs",
          native: "Trứng cút",
          pronunciation: "chung koot",
          quickDesc: "Tiny speckled eggs for bánh mì and noodle dishes",
          whatIsIt: "Small speckled eggs from quail. Popular in Vietnamese cuisine added to bánh mì, cơm tấm and noodle soups. They're usually hard-boiled and have a richer flavor than chicken eggs.",
          howToUse: [
            "Hard-boil and add to bánh mì",
            "Include in cơm tấm plates",
            "Top noodle soups",
            "Use in hủ tiếu and other dishes"
          ],
          pairsWith: ["Bánh mì", "Rice dishes", "Noodle soups", "Salads"],
          storage: "Refrigerate. Fresh eggs keep 3-4 weeks. Boiled eggs keep a week.",
          substitutes: "Half a chicken egg works but isn't the same.",
          proTip: "Boil for 3-4 minutes for hard-boiled. They're tedious to peel, so buying them canned/jarred saves time.",
          youtube: [
            { title: "How to Peel Quail Eggs", url: "https://www.youtube.com/results?search_query=how+to+peel+quail+eggs+easily" },
            { title: "Vietnamese Bánh Mì Assembly", url: "https://www.youtube.com/results?search_query=banh+mi+quail+eggs" }
          ]
        }
      ],
      "Pantry Staples": [
        {
          id: "me-rang",
          name: "Roasted Peanuts",
          native: "Đậu phộng rang",
          pronunciation: "dow fong rang",
          quickDesc: "Crunchy topping for noodles, spring rolls and salads",
          whatIsIt: "Dry-roasted peanuts, often crushed, used as a topping throughout Vietnamese cuisine. They add crunch and nutty flavor to noodle bowls, spring rolls and salads.",
          howToUse: [
            "Crush and sprinkle over bún and noodle dishes",
            "Add to fresh spring roll dipping sauce",
            "Top Vietnamese salads",
            "Include in desserts"
          ],
          pairsWith: ["Bún", "Spring rolls", "Salads", "Nước chấm", "Desserts"],
          storage: "Airtight container at room temperature. Use within a few months for best freshness.",
          substitutes: "Cashews work for some dishes. No nut works the same for peanut sauce.",
          proTip: "Buy unsalted roasted peanuts and crush them yourself for freshest flavor.",
          youtube: [
            { title: "Vietnamese Peanut Sauce", url: "https://www.youtube.com/results?search_query=vietnamese+peanut+sauce+spring+rolls" },
            { title: "Bún Toppings Guide", url: "https://www.youtube.com/results?search_query=bun+cha+toppings+peanuts" }
          ]
        },
        {
          id: "hanh-phi",
          name: "Fried Shallots",
          native: "Hành phi",
          pronunciation: "hahn fee",
          quickDesc: "Crispy fried shallots for topping everything",
          whatIsIt: "Thinly sliced shallots fried until golden and crispy. A common topping in Vietnamese cuisine, adding crunch and sweet onion flavor to rice, noodles and congee.",
          howToUse: [
            "Sprinkle over rice and noodle dishes",
            "Top congee (cháo)",
            "Add to bánh cuốn",
            "Use as garnish for soups"
          ],
          pairsWith: ["Rice", "Noodles", "Congee", "Scallion oil", "Everything"],
          storage: "Airtight container at room temperature. Keep crispy by avoiding humidity.",
          substitutes: "Fried onions work. Store-bought is convenient; homemade is better.",
          proTip: "Make extra when frying and save the shallot oil for cooking. Both are worth keeping.",
          youtube: [
            { title: "How to Make Fried Shallots", url: "https://www.youtube.com/results?search_query=hanh+phi+vietnamese+fried+shallots" },
            { title: "Crispy Shallots Tips", url: "https://www.youtube.com/results?search_query=crispy+fried+shallots+recipe" }
          ]
        },
        {
          id: "dau-xanh",
          name: "Mung Beans",
          native: "Đậu xanh",
          pronunciation: "dow sahng",
          quickDesc: "Green beans for sweet and savory dishes, used whole, split or as paste",
          whatIsIt: "Small green beans used whole, split or as paste. In Vietnamese cuisine, they're used in sweet desserts (chè), savory sticky rice (xôi) and as filling for bánh.",
          howToUse: [
            "Cook with sticky rice for xôi đậu xanh",
            "Make sweet soup (chè đậu xanh)",
            "Use as filling for bánh",
            "Sprout for bean sprouts"
          ],
          pairsWith: ["Sticky rice", "Coconut milk", "Sugar", "Pandan", "Pork"],
          storage: "Dry beans keep for months. Cooked beans refrigerate for days.",
          substitutes: "Red beans for some sweet applications.",
          proTip: "Soak dried beans before cooking. Split beans (without skin) cook much faster.",
          youtube: [
            { title: "Xôi Đậu Xanh Recipe", url: "https://www.youtube.com/results?search_query=xoi+dau+xanh+vietnamese+mung+bean+sticky+rice" },
            { title: "Chè Đậu Xanh", url: "https://www.youtube.com/results?search_query=che+dau+xanh+vietnamese+mung+bean+dessert" }
          ]
        },
        {
          id: "la-dua",
          name: "Pandan Leaves",
          native: "Lá dứa",
          pronunciation: "lah yua",
          quickDesc: "Fragrant green leaves for natural coloring and vanilla-like flavor",
          whatIsIt: "Long, blade-like leaves with a unique sweet, vanilla-like fragrance. Used to add flavor and natural green color to desserts, rice and drinks throughout Southeast Asia.",
          howToUse: [
            "Tie in knots and add to rice or coconut milk",
            "Blend and strain for green color and flavor",
            "Wrap around chicken before grilling",
            "Infuse into custards and desserts"
          ],
          pairsWith: ["Coconut", "Sticky rice", "Chicken", "Sugar", "Desserts"],
          storage: "Refrigerate wrapped in damp towels. Freeze for longer storage.",
          substitutes: "Pandan extract works but isn't as good. Vanilla has somewhat similar notes.",
          proTip: "Fresh leaves have much better flavor than extract. Find them fresh or frozen at Asian grocers.",
          youtube: [
            { title: "How to Use Pandan Leaves", url: "https://www.youtube.com/results?search_query=pandan+leaves+cooking+uses" },
            { title: "Pandan Chicken Recipe", url: "https://www.youtube.com/results?search_query=pandan+chicken+wrapped+thai" }
          ]
        },
        {
          id: "bot-nang",
          name: "Tapioca Starch",
          native: "Bột năng",
          pronunciation: "boat nang",
          quickDesc: "Starch for thickening, chewy textures and translucent wrappers",
          whatIsIt: "Starch extracted from cassava root. Used as a thickener, to add chewiness to doughs, and to make translucent wrappers and pearls. Many Vietnamese desserts depend on it.",
          howToUse: [
            "Add to rice flour for chewier texture",
            "Use as thickener for sauces",
            "Make tapioca pearls for drinks",
            "Create translucent dumpling wrappers"
          ],
          pairsWith: ["Rice flour", "Coconut milk", "Sugar", "Fillings"],
          storage: "Cool, dry place in airtight container. Keeps indefinitely.",
          substitutes: "Cornstarch thickens but doesn't add chewiness. Potato starch is closer.",
          proTip: "Mix with water before adding to hot liquids to prevent lumps.",
          youtube: [
            { title: "Vietnamese Tapioca Desserts", url: "https://www.youtube.com/results?search_query=vietnamese+tapioca+dessert+recipe" },
            { title: "How to Use Tapioca Starch", url: "https://www.youtube.com/results?search_query=tapioca+starch+cooking+uses" }
          ]
        },
        {
          id: "nam-meo",
          name: "Wood Ear Mushrooms",
          native: "Nấm mèo",
          pronunciation: "nam mao",
          quickDesc: "Crunchy black fungus for spring rolls and stir-fries",
          whatIsIt: "A type of dried fungus that's dark brown/black with a distinctive crunchy, slightly gelatinous texture. Nearly flavorless but adds great texture to dishes.",
          howToUse: [
            "Soak until soft, then slice thin",
            "Add to spring roll filling",
            "Include in stir-fries",
            "Use in soups and hot pots"
          ],
          pairsWith: ["Ground pork", "Glass noodles", "Eggs", "Vegetables", "Spring rolls"],
          storage: "Dried mushrooms keep indefinitely. Rehydrated should be used immediately.",
          substitutes: "Other mushrooms add flavor but not the same crunch.",
          proTip: "They expand a lot when soaked, so a little goes a long way.",
          youtube: [
            { title: "How to Prepare Wood Ear", url: "https://www.youtube.com/results?search_query=wood+ear+mushroom+how+to+prepare" },
            { title: "Vietnamese Spring Roll Filling", url: "https://www.youtube.com/results?search_query=nem+ran+cha+gio+filling+wood+ear" }
          ]
        },
        {
          id: "nam-huong",
          name: "Dried Shiitake Mushrooms",
          native: "Nấm hương",
          pronunciation: "nam huong",
          quickDesc: "Intensely flavored dried mushrooms for soups and braises",
          whatIsIt: "Dried shiitake mushrooms with concentrated umami flavor. The soaking liquid is also valuable as a flavorful stock. Used in vegetarian dishes, soups and braises.",
          howToUse: [
            "Soak in warm water until soft (save the liquid)",
            "Slice and add to stir-fries and soups",
            "Use in vegetarian versions of dishes",
            "Add to clay pot dishes"
          ],
          pairsWith: ["Soy sauce", "Ginger", "Garlic", "Rice", "Noodles"],
          storage: "Dry, cool place. Keeps for months to years.",
          substitutes: "Fresh shiitake lack the concentrated flavor. Other dried mushrooms work differently.",
          proTip: "Save the soaking liquid; it's full of flavor for soups and sauces.",
          youtube: [
            { title: "How to Rehydrate Shiitake", url: "https://www.youtube.com/results?search_query=how+to+rehydrate+dried+shiitake+mushrooms" },
            { title: "Vietnamese Clay Pot Dishes", url: "https://www.youtube.com/results?search_query=vietnamese+clay+pot+mushroom" }
          ]
        },
        {
          id: "ca-phe",
          name: "Vietnamese Coffee",
          native: "Cà phê",
          pronunciation: "kah fey",
          quickDesc: "Dark-roasted robusta coffee for the iconic cà phê sữa đá",
          whatIsIt: "Strong, dark-roasted coffee, often robusta beans, traditionally brewed slowly through a phin filter. Usually served with sweetened condensed milk (sữa đá) over ice.",
          howToUse: [
            "Brew slowly through a phin filter",
            "Add sweetened condensed milk to taste",
            "Serve over ice for cà phê sữa đá",
            "Drink black (cà phê đen) for purists"
          ],
          pairsWith: ["Sweetened condensed milk", "Ice", "Egg (for egg coffee)", "Coconut milk"],
          storage: "Cool, dry place in airtight container. Use within a month of opening.",
          substitutes: "Any dark roast coffee works, but the flavor profile differs.",
          proTip: "The flavor depends on the slow drip through the phin, so don't rush it.",
          youtube: [
            { title: "How to Make Cà Phê Sữa Đá", url: "https://www.youtube.com/results?search_query=ca+phe+sua+da+vietnamese+iced+coffee" },
            { title: "Vietnamese Phin Filter Guide", url: "https://www.youtube.com/results?search_query=vietnamese+phin+coffee+filter+how+to" }
          ]
        },
        {
          id: "sua-dac",
          name: "Sweetened Condensed Milk",
          native: "Sữa đặc",
          pronunciation: "sua dak",
          quickDesc: "Thick, sweet milk for coffee and desserts",
          whatIsIt: "Milk with water removed and sugar added, creating a thick, very sweet product. It sweetens Vietnamese iced coffee and is used in many desserts throughout Southeast Asia.",
          howToUse: [
            "Stir into Vietnamese coffee",
            "Drizzle over desserts and fruits",
            "Use in sweet bread and baked goods",
            "Mix into smoothies and shakes"
          ],
          pairsWith: ["Coffee", "Tropical fruits", "Bread", "Ice", "Desserts"],
          storage: "Unopened keeps for months. Refrigerate after opening.",
          substitutes: "No real substitute for the specific sweetness and consistency.",
          proTip: "Longevity brand is the traditional choice for Vietnamese coffee. The red and white can is iconic.",
          youtube: [
            { title: "Vietnamese Coffee Recipe", url: "https://www.youtube.com/results?search_query=vietnamese+coffee+sweetened+condensed+milk" },
            { title: "Condensed Milk Desserts", url: "https://www.youtube.com/results?search_query=sweetened+condensed+milk+dessert+recipes" }
          ]
        },
        {
          id: "bot-nghe",
          name: "Turmeric Powder",
          native: "Bột nghệ",
          pronunciation: "boat ngeh",
          quickDesc: "Golden spice for color and earthy flavor",
          whatIsIt: "Ground dried turmeric root with a bright golden color and earthy, slightly bitter flavor. Used for both color and flavor in Vietnamese dishes, especially in central Vietnamese cuisine.",
          howToUse: [
            "Add to bánh xèo batter for yellow color",
            "Use in mì quảng turmeric noodles",
            "Mix into marinades",
            "Season fish and seafood dishes"
          ],
          pairsWith: ["Fish", "Noodles", "Coconut milk", "Lemongrass", "Dill"],
          storage: "Cool, dry place away from light. Keeps for months but loses potency.",
          substitutes: "Fresh turmeric is brighter in flavor. Saffron gives color but different taste.",
          proTip: "Turmeric stains easily, so use it carefully and clean up quickly.",
          youtube: [
            { title: "Vietnamese Turmeric Fish", url: "https://www.youtube.com/results?search_query=cha+ca+la+vong+turmeric+fish" },
            { title: "Bánh Xèo with Turmeric", url: "https://www.youtube.com/results?search_query=banh+xeo+turmeric+batter" }
          ]
        },
        {
          id: "ngu-vi-huong",
          name: "Five Spice Powder",
          native: "Ngũ vị hương",
          pronunciation: "noo vee huong",
          quickDesc: "Aromatic blend of star anise, cloves, cinnamon, pepper and fennel",
          whatIsIt: "A Chinese-origin spice blend used throughout Vietnamese cooking. Typically contains star anise, cloves, cinnamon, Sichuan pepper and fennel. Adds warm, complex aroma to meats.",
          howToUse: [
            "Season pho broth",
            "Marinate duck and pork",
            "Add to braised dishes",
            "Use in thịt kho (caramelized pork)"
          ],
          pairsWith: ["Pork", "Duck", "Star anise", "Soy sauce", "Sugar"],
          storage: "Airtight container away from heat and light. Use within 6 months.",
          substitutes: "Make your own from individual spices for fresher flavor.",
          proTip: "It's very potent, so use it sparingly. A little goes a long way.",
          youtube: [
            { title: "Five Spice Pork Belly", url: "https://www.youtube.com/results?search_query=five+spice+pork+belly+vietnamese" },
            { title: "How to Use Five Spice", url: "https://www.youtube.com/results?search_query=five+spice+powder+how+to+use" }
          ]
        }
      ]
    }
  },
  india: {
    name: "India",
    flag: "🇮🇳",
    categories: {
      "Sauces & Condiments": [
        {
          id: "ghee",
          name: "Ghee",
          native: "घी",
          pronunciation: "ghee",
          quickDesc: "Clarified butter with a nutty flavor and high smoke point",
          whatIsIt: "Butter that's been simmered until the water evaporates and milk solids brown and are strained out. It's shelf-stable, has a high smoke point and adds a rich, nutty flavor to dishes.",
          howToUse: [
            "Use for frying spices (tadka/tempering)",
            "Cook dosa, paratha and roti",
            "Add a spoonful to finish dal and rice dishes",
            "Use anywhere you'd use butter or oil for cooking"
          ],
          pairsWith: ["Rice", "Dal", "Spices", "Flatbreads", "Vegetables"],
          storage: "Room temperature for months. Refrigerate for longer storage (up to a year).",
          substitutes: "Clarified butter is essentially the same. Regular butter works but has lower smoke point.",
          proTip: "A small amount goes a long way. The milk solids are what burn in regular butter, so ghee won't burn as easily.",
          youtube: [
            { title: "How to Make Ghee at Home", url: "https://www.youtube.com/results?search_query=how+to+make+ghee+at+home" },
            { title: "Indian Tadka/Tempering Technique", url: "https://www.youtube.com/results?search_query=indian+tadka+tempering+technique+ghee" }
          ]
        },
        {
          id: "tamarind",
          name: "Tamarind Paste",
          native: "इमली",
          pronunciation: "im-lee",
          quickDesc: "Sour, fruity paste for chutneys, curries and South Indian dishes",
          whatIsIt: "A paste made from the pulp of tamarind pods: sticky, brown and intensely sour with fruity undertones. Key to sambar, rasam and many South Indian preparations.",
          howToUse: [
            "Mix with water and strain for tamarind water",
            "Add to sambar, rasam and South Indian curries",
            "Make sweet tamarind chutney with sugar and spices",
            "Use in chutneys and sauces"
          ],
          pairsWith: ["Jaggery/sugar", "Cumin", "Chili", "Curry leaves", "Dates"],
          storage: "Refrigerate concentrate after opening. Block tamarind lasts months at room temp.",
          substitutes: "Lime juice + a bit of brown sugar captures some of the sour-sweet quality.",
          proTip: "Concentrated paste is convenient; block tamarind has more nuanced flavor but needs soaking and straining.",
          youtube: [
            { title: "How to Use Tamarind in Cooking", url: "https://www.youtube.com/results?search_query=how+to+use+tamarind+indian+cooking" },
            { title: "Tamarind Chutney Recipe", url: "https://www.youtube.com/results?search_query=tamarind+chutney+recipe+indian" }
          ]
        },
        {
          id: "mango-pickle",
          name: "Mango Pickle",
          native: "आम का अचार",
          pronunciation: "aam ka achaar",
          quickDesc: "Spicy, tangy pickled mango, one of India's most common condiments",
          whatIsIt: "Unripe green mango preserved in oil with spices like fenugreek, mustard, chili and turmeric. Regions have their own styles, from Andhra's fiery avakaya to Gujarati sweet-sour versions.",
          howToUse: [
            "Serve alongside dal, rice and curries",
            "Add to yogurt rice (curd rice)",
            "Eat with parathas and roti",
            "Mix into plain rice with ghee"
          ],
          pairsWith: ["Rice", "Dal", "Yogurt", "Parathas", "Any Indian meal"],
          storage: "Oil-based pickles keep for months at room temperature. Some styles need refrigeration.",
          substitutes: "Other Indian pickles (lime, chili, mixed vegetable) serve similar purposes.",
          proTip: "Always use a dry, clean spoon, since moisture will spoil the pickle. The oil should cover the mango pieces.",
          youtube: [
            { title: "Mango Pickle Recipe", url: "https://www.youtube.com/results?search_query=indian+mango+pickle+achaar+recipe" },
            { title: "Types of Indian Pickles", url: "https://www.youtube.com/results?search_query=types+of+indian+pickles+achaar" }
          ]
        },
        {
          id: "chutney-mint",
          name: "Mint Chutney",
          native: "पुदीना चटनी",
          pronunciation: "pudina chatni",
          quickDesc: "Bright green, fresh herb chutney for samosas and kebabs",
          whatIsIt: "A vibrant green sauce made from fresh mint, cilantro, green chilies and sometimes yogurt. Served with virtually every Indian appetizer and snack.",
          howToUse: [
            "Serve with samosas, pakoras and chaat",
            "Spread on sandwiches and wraps",
            "Serve alongside tandoori meats",
            "Drizzle on kebabs"
          ],
          pairsWith: ["Samosas", "Pakoras", "Tandoori chicken", "Kebabs", "Chaat"],
          storage: "Refrigerate and use within 3-5 days. Adding lemon juice helps preserve color.",
          substitutes: "Cilantro chutney is similar. No true substitute for the fresh flavor.",
          proTip: "Blend with ice cubes for brighter green color. Add yogurt for a creamy version.",
          youtube: [
            { title: "Mint Chutney Recipe", url: "https://www.youtube.com/results?search_query=pudina+chutney+mint+chutney+recipe" },
            { title: "Green Chutney for Chaat", url: "https://www.youtube.com/results?search_query=green+chutney+for+chaat" }
          ]
        },
        {
          id: "raita",
          name: "Raita",
          native: "रायता",
          pronunciation: "rye-tah",
          quickDesc: "Cool yogurt sauce to balance spicy dishes",
          whatIsIt: "Yogurt mixed with vegetables (usually cucumber, tomato or onion) and spices like cumin and mint. Served as a cooling accompaniment to spicy curries and biryani.",
          howToUse: [
            "Serve alongside biryani and pulao",
            "Pair with spicy curries",
            "Serve with parathas and rotis",
            "Use as a cooling dip for kababs"
          ],
          pairsWith: ["Biryani", "Spicy curries", "Pulao", "Parathas", "Kebabs"],
          storage: "Refrigerate and use same day for best freshness.",
          substitutes: "Plain yogurt with salt and cumin serves a similar cooling purpose.",
          proTip: "Salt the cucumber and squeeze out water before adding to prevent watery raita.",
          youtube: [
            { title: "Cucumber Raita Recipe", url: "https://www.youtube.com/results?search_query=cucumber+raita+recipe+indian" },
            { title: "Boondi Raita", url: "https://www.youtube.com/results?search_query=boondi+raita+recipe" }
          ]
        },
        {
          id: "dahi",
          name: "Yogurt/Dahi",
          native: "दही",
          pronunciation: "dah-hee",
          quickDesc: "Tangy cultured yogurt used in cooking and as a condiment",
          whatIsIt: "Indian-style yogurt that's typically thicker and tangier than Western yogurt. Used in marinades, curries, raita, lassi drinks and eaten plain with meals.",
          howToUse: [
            "Marinate meats for tandoori",
            "Make raita and lassi",
            "Serve plain with rice and dal",
            "Add to curries for creaminess and tang"
          ],
          pairsWith: ["Rice", "Spices", "Sugar", "Salt", "Fruits"],
          storage: "Refrigerate. Homemade keeps about a week.",
          substitutes: "Greek yogurt is thicker; regular plain yogurt works.",
          proTip: "Indian dahi is easy to make at home: add a spoonful of existing yogurt to warm milk and let it set overnight.",
          youtube: [
            { title: "How to Make Dahi at Home", url: "https://www.youtube.com/results?search_query=how+to+make+dahi+yogurt+at+home+indian" },
            { title: "Mango Lassi Recipe", url: "https://www.youtube.com/results?search_query=mango+lassi+recipe" }
          ]
        },
        {
          id: "kashmiri-mirch",
          name: "Kashmiri Chili Powder",
          native: "कश्मीरी मिर्च",
          pronunciation: "kash-mee-ree mirch",
          quickDesc: "Vibrant red chili powder for color without extreme heat",
          whatIsIt: "A mild chili powder made from Kashmiri chilies, prized for its deep red color more than its heat. Used in tandoori dishes, rogan josh and any dish that needs vibrant color.",
          howToUse: [
            "Use in tandoori marinades for color",
            "Add to rogan josh and other Kashmiri dishes",
            "Mix into curries for red color without overwhelming heat",
            "Use in biryani masala"
          ],
          pairsWith: ["Yogurt", "Tandoori meats", "Curries", "Rice dishes"],
          storage: "Airtight container away from light. Keeps 6 months to a year.",
          substitutes: "Paprika + a pinch of cayenne approximates it. Deghi mirch is similar.",
          proTip: "This is for color, not heat. Combine with cayenne if you want both color and spice.",
          youtube: [
            { title: "Kashmiri Chili vs Regular Chili", url: "https://www.youtube.com/results?search_query=kashmiri+chili+powder+vs+regular" },
            { title: "Tandoori Chicken Recipe", url: "https://www.youtube.com/results?search_query=tandoori+chicken+kashmiri+mirch" }
          ]
        },
        {
          id: "amchur",
          name: "Amchur (Mango Powder)",
          native: "अमचूर",
          pronunciation: "ahm-choor",
          quickDesc: "Tangy dried mango powder for sourness in dry dishes",
          whatIsIt: "Powder made from dried unripe green mangoes. Adds a tangy, fruity sourness to dishes where liquid acids like lemon or tamarind won't work well.",
          howToUse: [
            "Add to chaat and snacks for tanginess",
            "Season dry vegetable dishes",
            "Use in samosa and pakora fillings",
            "Add to marinades"
          ],
          pairsWith: ["Potatoes", "Chickpeas", "Chaat masala", "Coriander", "Cumin"],
          storage: "Airtight container in cool, dry place. Keeps for months.",
          substitutes: "Lemon juice adds sourness but also liquid. Tamarind powder works in some dishes.",
          proTip: "Add at the end of cooking to preserve the bright, fruity tang.",
          youtube: [
            { title: "How to Use Amchur", url: "https://www.youtube.com/results?search_query=amchur+powder+how+to+use+indian+cooking" },
            { title: "Aloo Chaat Recipe", url: "https://www.youtube.com/results?search_query=aloo+chaat+recipe+amchur" }
          ]
        },
        {
          id: "jaggery",
          name: "Jaggery",
          native: "गुड़",
          pronunciation: "gur",
          quickDesc: "Unrefined cane sugar with deep, complex sweetness",
          whatIsIt: "Traditional unrefined sugar made by boiling down sugarcane juice or palm sap. Has a deep, molasses-like flavor with hints of caramel. Comes in blocks or powder.",
          howToUse: [
            "Use in South Indian sambar and rasam",
            "Make traditional sweets and desserts",
            "Add to balance spicy or sour dishes",
            "Use in chutneys and sauces"
          ],
          pairsWith: ["Tamarind", "Lentils", "Peanuts", "Sesame", "Coconut"],
          storage: "Room temperature in airtight container. If it hardens, break off pieces as needed.",
          substitutes: "Dark brown sugar or palm sugar have similar notes. Not the same depth.",
          proTip: "Grate or chop solid jaggery before using. It dissolves faster in warm liquids.",
          youtube: [
            { title: "Jaggery in Indian Cooking", url: "https://www.youtube.com/results?search_query=jaggery+indian+cooking+uses" },
            { title: "How to Make Chikki", url: "https://www.youtube.com/results?search_query=peanut+chikki+jaggery+recipe" }
          ]
        },
        {
          id: "coconut-oil",
          name: "Coconut Oil",
          native: "नारियल तेल",
          pronunciation: "nariyal tel",
          quickDesc: "Aromatic oil common in South Indian cooking",
          whatIsIt: "Oil pressed from coconut flesh, with a distinctive sweet, coconut aroma. The primary cooking fat in Kerala and other South Indian cuisines. Can be refined (neutral) or virgin (coconut flavor).",
          howToUse: [
            "Use for South Indian tempering and cooking",
            "Make Kerala-style curries and stir-fries",
            "Use in coconut-based chutneys",
            "Apply to hair and skin (traditional use)"
          ],
          pairsWith: ["Curry leaves", "Mustard seeds", "Coconut", "Seafood", "South Indian dishes"],
          storage: "Room temperature in tropical climates. It solidifies below 76°F/24°C, which is normal.",
          substitutes: "Any neutral oil works for cooking but loses the coconut flavor.",
          proTip: "Virgin coconut oil has strong coconut flavor; refined is neutral. Choose based on the dish.",
          youtube: [
            { title: "Kerala Cooking with Coconut Oil", url: "https://www.youtube.com/results?search_query=kerala+cooking+coconut+oil" },
            { title: "South Indian Tempering", url: "https://www.youtube.com/results?search_query=south+indian+tempering+tadka+coconut+oil" }
          ]
        },
        {
          id: "mustard-oil",
          name: "Mustard Oil",
          native: "सरसों का तेल",
          pronunciation: "sarson ka tel",
          quickDesc: "Pungent, warming oil for Bengali and North Indian cooking",
          whatIsIt: "Oil pressed from mustard seeds with a distinctive pungent, sharp flavor. A staple of Bengali cuisine and traditional pickle making. The flavor mellows when heated.",
          howToUse: [
            "Use for Bengali fish curries",
            "Make traditional Indian pickles",
            "Season salads and chutneys raw",
            "Use in North Indian cooking"
          ],
          pairsWith: ["Fish", "Greens", "Pickles", "Paneer", "Bengali dishes"],
          storage: "Cool, dark place. Keeps for months.",
          substitutes: "No substitute for the unique pungent flavor. Canola oil works but loses character.",
          proTip: "Heat mustard oil to smoking point before using to mellow the raw pungency, then cool slightly and use.",
          youtube: [
            { title: "Bengali Fish Curry", url: "https://www.youtube.com/results?search_query=bengali+fish+curry+mustard+oil" },
            { title: "Mustard Oil Uses", url: "https://www.youtube.com/results?search_query=mustard+oil+indian+cooking" }
          ]
        }
      ],
      "Spices": [
        {
          id: "garam-masala",
          name: "Garam Masala",
          native: "गरम मसाला",
          pronunciation: "gah-rahm mah-sah-lah",
          quickDesc: "Warm, aromatic spice blend for curries and finishing dishes",
          whatIsIt: "A blend of warming spices typically including cinnamon, cardamom, cloves, cumin and coriander. 'Garam' means warm, referring to the warming properties of the spices. Blends vary by region and family.",
          howToUse: [
            "Add at the END of cooking to preserve aromatics",
            "Sprinkle over finished dal, curry and rice dishes",
            "Use in marinades for tandoori and grilled meats",
            "Add to chai tea"
          ],
          pairsWith: ["Onions", "Tomatoes", "Yogurt", "Chicken", "Chickpeas"],
          storage: "Airtight container away from heat and light. Best within 3-6 months.",
          substitutes: "No single substitute. Make your own from whole spices for best flavor.",
          proTip: "Buy whole spices and toast/grind your own; you'll notice a big difference. Add it near the end of cooking instead of at the start.",
          youtube: [
            { title: "Hebbar's Kitchen: Homemade Garam Masala", url: "https://www.youtube.com/results?search_query=hebbars+kitchen+garam+masala" },
            { title: "How to Make Garam Masala from Scratch", url: "https://www.youtube.com/results?search_query=how+to+make+garam+masala+from+scratch" }
          ]
        },
        {
          id: "cumin",
          name: "Cumin Seeds",
          native: "जीरा",
          pronunciation: "jee-rah",
          quickDesc: "Earthy, warm seeds used whole or ground in nearly every Indian dish",
          whatIsIt: "Small, ridged seeds with an earthy, warm, slightly nutty flavor. A core spice in Indian cooking, used whole for tempering or ground in spice blends.",
          howToUse: [
            "Add whole seeds to hot oil for tempering (tadka)",
            "Grind for spice blends and curry powders",
            "Toast and sprinkle over raita and chaat",
            "Use in rice dishes and dals"
          ],
          pairsWith: ["Coriander", "Turmeric", "Chili", "Yogurt", "Tomatoes"],
          storage: "Whole seeds keep for years. Ground cumin loses flavor within months.",
          substitutes: "Caraway seeds have similar shape but different flavor. No true substitute.",
          proTip: "Toast whole seeds in a dry pan until fragrant before grinding for the best flavor.",
          youtube: [
            { title: "Jeera Rice Recipe", url: "https://www.youtube.com/results?search_query=jeera+rice+cumin+rice+recipe" },
            { title: "How to Temper Cumin", url: "https://www.youtube.com/results?search_query=cumin+tempering+tadka+technique" }
          ]
        },
        {
          id: "coriander-seeds",
          name: "Coriander Seeds",
          native: "धनिया",
          pronunciation: "dha-ni-ya",
          quickDesc: "Citrusy, slightly sweet seeds often paired with cumin",
          whatIsIt: "Round seeds from the cilantro plant with a bright, citrusy, slightly sweet flavor, very different from cilantro leaves. One of the most used spices in Indian cooking.",
          howToUse: [
            "Toast and grind for curry powders",
            "Use whole in pickles and rice dishes",
            "Add ground coriander to curries and dals",
            "Combine with cumin for the classic base"
          ],
          pairsWith: ["Cumin", "Turmeric", "Chili", "Ginger", "Garlic"],
          storage: "Whole seeds keep for years. Ground loses potency within months.",
          substitutes: "No true substitute. Caraway + lemon zest vaguely approximates.",
          proTip: "Always toast before grinding. The cumin-coriander combination (often 1:2 ratio) is foundational.",
          youtube: [
            { title: "How to Use Coriander Seeds", url: "https://www.youtube.com/results?search_query=coriander+seeds+indian+cooking" },
            { title: "Coriander Powder Recipe", url: "https://www.youtube.com/results?search_query=homemade+coriander+powder" }
          ]
        },
        {
          id: "turmeric",
          name: "Turmeric",
          native: "हल्दी",
          pronunciation: "hal-dee",
          quickDesc: "Golden spice that colors and adds earthiness to everything",
          whatIsIt: "Ground dried turmeric root with a bright golden-yellow color and earthy, slightly bitter flavor. Used in virtually every Indian curry for color and its purported health benefits.",
          howToUse: [
            "Add to curries, dals and rice for color",
            "Use in marinades for meats and vegetables",
            "Make golden milk (haldi doodh)",
            "Add to pickles and chutneys"
          ],
          pairsWith: ["Black pepper (enhances absorption)", "Ginger", "Cumin", "All curries"],
          storage: "Airtight container away from light. Keeps for years but loses potency.",
          substitutes: "Nothing replicates the color and flavor. Saffron gives color but different taste.",
          proTip: "Use it sparingly, since too much makes dishes bitter. A little goes a long way.",
          youtube: [
            { title: "Turmeric in Indian Cooking", url: "https://www.youtube.com/results?search_query=turmeric+haldi+indian+cooking+uses" },
            { title: "Golden Milk Recipe", url: "https://www.youtube.com/results?search_query=golden+milk+haldi+doodh+recipe" }
          ]
        },
        {
          id: "cardamom",
          name: "Cardamom",
          native: "इलायची",
          pronunciation: "eh-lai-chee",
          quickDesc: "Intensely aromatic green or black pods, called the 'queen of spices'",
          whatIsIt: "Green cardamom has a sweet, floral, almost minty flavor. Black cardamom is smoky and bold. Both are used whole in rice and curries, or ground in desserts and chai.",
          howToUse: [
            "Add whole pods to rice dishes and curries",
            "Grind for desserts and sweet dishes",
            "Add to chai and coffee",
            "Use in garam masala"
          ],
          pairsWith: ["Cinnamon", "Cloves", "Rice", "Milk", "Sugar"],
          storage: "Whole pods keep for years. Ground cardamom loses aroma quickly.",
          substitutes: "There's no true substitute. Cinnamon plus nutmeg comes vaguely close.",
          proTip: "Crack pods lightly before adding to release the seeds. Green for sweet, black for savory.",
          youtube: [
            { title: "Cardamom in Indian Cooking", url: "https://www.youtube.com/results?search_query=cardamom+elaichi+indian+cooking" },
            { title: "Masala Chai Recipe", url: "https://www.youtube.com/results?search_query=masala+chai+recipe+cardamom" }
          ]
        },
        {
          id: "mustard-seeds",
          name: "Mustard Seeds",
          native: "राई",
          pronunciation: "rai",
          quickDesc: "Tiny seeds that pop in hot oil, a staple of South Indian tempering",
          whatIsIt: "Small round seeds (black, brown or yellow) that pop and release a nutty flavor when added to hot oil. Fundamental in South Indian cooking and used in many dals and vegetable dishes.",
          howToUse: [
            "Add to hot oil until they pop for tempering",
            "Use in South Indian sambar and rasam",
            "Add to pickles and chutneys",
            "Use in Bengali fish dishes"
          ],
          pairsWith: ["Curry leaves", "Dried chilies", "Urad dal", "Coconut", "Asafoetida"],
          storage: "Airtight container. Whole seeds keep for years.",
          substitutes: "No substitute for the popping texture and nutty flavor.",
          proTip: "Cover the pan when they start popping, because they jump. Listen for the popping to slow before adding the next ingredients.",
          youtube: [
            { title: "South Indian Tempering", url: "https://www.youtube.com/results?search_query=south+indian+tempering+mustard+seeds" },
            { title: "How to Temper Mustard Seeds", url: "https://www.youtube.com/results?search_query=mustard+seeds+tadka+technique" }
          ]
        },
        {
          id: "curry-leaves",
          name: "Curry Leaves",
          native: "कढ़ी पत्ता",
          pronunciation: "ka-ree pat-ta",
          quickDesc: "Aromatic leaves used throughout South Indian cooking (unrelated to curry powder)",
          whatIsIt: "Shiny, dark green leaves from the curry tree with a distinctive citrusy, slightly nutty aroma. Not related to curry powder. Used widely in South Indian cuisine.",
          howToUse: [
            "Add to hot oil for tempering",
            "Use in sambar, rasam and dals",
            "Add to coconut chutneys",
            "Include in upma and poha"
          ],
          pairsWith: ["Mustard seeds", "Coconut", "Dried chilies", "Lentils", "Rice dishes"],
          storage: "Refrigerate fresh leaves for 1-2 weeks. Freeze for months. Dried loses most flavor.",
          substitutes: "Nothing substitutes well. Bay leaves are sometimes suggested but taste completely different.",
          proTip: "Buy fresh: dried curry leaves have almost no flavor. Indian grocers carry fresh ones.",
          youtube: [
            { title: "Curry Leaves in Cooking", url: "https://www.youtube.com/results?search_query=curry+leaves+indian+cooking+uses" },
            { title: "South Indian Tadka", url: "https://www.youtube.com/results?search_query=south+indian+tadka+curry+leaves" }
          ]
        },
        {
          id: "fenugreek",
          name: "Fenugreek Seeds",
          native: "मेथी",
          pronunciation: "meh-thee",
          quickDesc: "Bitter seeds with maple-like aroma for pickles and curries",
          whatIsIt: "Small, hard, yellowish seeds with a bitter taste and distinctive maple-like aroma. Used in pickles, spice blends and some curries. The leaves (methi) are also used as an herb.",
          howToUse: [
            "Add to pickles and achaar",
            "Use sparingly in dals and curries",
            "Include in sambar powder and panch phoron",
            "Add to bread doughs for flavor"
          ],
          pairsWith: ["Potatoes", "Bitter greens", "Pickles", "Tomatoes", "Eggs"],
          storage: "Airtight container. Keeps for years.",
          substitutes: "Maple syrup gives similar aroma in some applications but not the same.",
          proTip: "Use very sparingly, since too much makes dishes unpleasantly bitter. A few seeds go a long way.",
          youtube: [
            { title: "Methi in Indian Cooking", url: "https://www.youtube.com/results?search_query=fenugreek+methi+indian+cooking" },
            { title: "Methi Paratha Recipe", url: "https://www.youtube.com/results?search_query=methi+paratha+recipe" }
          ]
        },
        {
          id: "asafoetida",
          name: "Asafoetida",
          native: "हींग",
          pronunciation: "heeng",
          quickDesc: "Pungent spice that tastes like onion and garlic combined",
          whatIsIt: "A dried resin with an intensely pungent smell that turns into an onion-garlic-like flavor when cooked. Used especially in vegetarian cooking where onion and garlic are avoided.",
          howToUse: [
            "Add a tiny pinch to hot oil for tempering",
            "Use in dals and vegetable dishes",
            "Add to sambar and rasam",
            "Include in dishes for those avoiding onion/garlic"
          ],
          pairsWith: ["Lentils", "Vegetables", "Turmeric", "Cumin", "All tempering"],
          storage: "Airtight container away from other spices (it will flavor them). Keeps for years.",
          substitutes: "Onion powder + garlic powder approximates the flavor.",
          proTip: "Use extremely sparingly: a pinch is enough for a whole pot, and too much will ruin a dish.",
          youtube: [
            { title: "How to Use Asafoetida", url: "https://www.youtube.com/results?search_query=asafoetida+hing+indian+cooking" },
            { title: "Hing in Dal", url: "https://www.youtube.com/results?search_query=hing+asafoetida+dal+recipe" }
          ]
        },
        {
          id: "fennel-seeds",
          name: "Fennel Seeds",
          native: "सौंफ",
          pronunciation: "saunf",
          quickDesc: "Sweet, licorice-flavored seeds for cooking and as a mouth freshener",
          whatIsIt: "Green-grey seeds with a sweet, anise-like flavor. Used in cooking, baking, and traditionally served after meals as a digestive and breath freshener.",
          howToUse: [
            "Add to panch phoron and other spice blends",
            "Use in meat curries, especially Kashmiri dishes",
            "Chew after meals as a digestive",
            "Add to pickles and breads"
          ],
          pairsWith: ["Meat", "Fish", "Cabbage", "Potatoes", "Baked goods"],
          storage: "Airtight container. Keeps for years.",
          substitutes: "Anise seeds are similar but stronger.",
          proTip: "Toast lightly to enhance the sweet flavor. Often served sugar-coated at Indian restaurants.",
          youtube: [
            { title: "Fennel Seeds in Cooking", url: "https://www.youtube.com/results?search_query=fennel+seeds+saunf+indian+cooking" },
            { title: "Panch Phoron Recipe", url: "https://www.youtube.com/results?search_query=panch+phoron+five+spice+blend" }
          ]
        },
        {
          id: "cloves",
          name: "Cloves",
          native: "लौंग",
          pronunciation: "laung",
          quickDesc: "Intensely aromatic dried flower buds for rice and curries",
          whatIsIt: "Dried flower buds with an intense, warm, slightly sweet flavor. Used whole in rice dishes and curries, or ground in spice blends. One of the key components of garam masala.",
          howToUse: [
            "Add whole to biryani and pulao",
            "Use in garam masala",
            "Add to chai and mulled drinks",
            "Use in meat curries and kormas"
          ],
          pairsWith: ["Cinnamon", "Cardamom", "Rice", "Meat", "Sweets"],
          storage: "Whole cloves keep for years. Ground loses potency quickly.",
          substitutes: "Allspice has some similar notes. No true substitute.",
          proTip: "Use sparingly, since cloves can overpower a dish. 3-4 cloves is often enough for a large pot.",
          youtube: [
            { title: "Cloves in Indian Cooking", url: "https://www.youtube.com/results?search_query=cloves+laung+indian+cooking" },
            { title: "Biryani Spices", url: "https://www.youtube.com/results?search_query=biryani+whole+spices+cloves" }
          ]
        },
        {
          id: "cinnamon",
          name: "Cinnamon/Cassia",
          native: "दालचीनी",
          pronunciation: "daal-chee-nee",
          quickDesc: "Warm, sweet bark for rice dishes and spice blends",
          whatIsIt: "Rolled bark with a warm, sweet flavor. Indian cooking typically uses cassia (thicker, stronger) rather than true Ceylon cinnamon (delicate, sweeter). Used whole in rice and curries.",
          howToUse: [
            "Add sticks to biryani and pulao",
            "Include in garam masala",
            "Use in korma and other creamy curries",
            "Add to chai and sweets"
          ],
          pairsWith: ["Cardamom", "Cloves", "Rice", "Lamb", "Sweets"],
          storage: "Sticks keep for years. Ground cinnamon loses aroma within months.",
          substitutes: "Cassia and Ceylon cinnamon can substitute for each other.",
          proTip: "Break sticks into smaller pieces for more flavor release. Remove before serving or warn diners.",
          youtube: [
            { title: "Cinnamon in Indian Cooking", url: "https://www.youtube.com/results?search_query=cinnamon+dalchini+indian+cooking" },
            { title: "Whole Spices in Biryani", url: "https://www.youtube.com/results?search_query=whole+spices+biryani+recipe" }
          ]
        },
        {
          id: "red-chili",
          name: "Red Chili Powder",
          native: "लाल मिर्च",
          pronunciation: "laal mirch",
          quickDesc: "Hot chili powder for heat in curries and everything else",
          whatIsIt: "Ground dried red chilies, providing heat to Indian dishes. Different from Kashmiri chili (which is milder and used for color). Heat level varies by variety.",
          howToUse: [
            "Add to curries for heat",
            "Use in marinades and dry rubs",
            "Add to chutneys and pickles",
            "Sprinkle on chaat and snacks"
          ],
          pairsWith: ["All curries", "Vegetables", "Meat", "Lentils", "Snacks"],
          storage: "Airtight container away from light. Keeps for 6 months to a year.",
          substitutes: "Cayenne pepper is similar. Paprika lacks heat but adds color.",
          proTip: "Indian red chili powder is often hotter than Western varieties. Start with less and adjust.",
          youtube: [
            { title: "Red Chili Powder in Cooking", url: "https://www.youtube.com/results?search_query=red+chili+powder+indian+cooking" },
            { title: "Homemade Red Chili Powder", url: "https://www.youtube.com/results?search_query=homemade+red+chili+powder" }
          ]
        },
        {
          id: "saffron",
          name: "Saffron",
          native: "केसर",
          pronunciation: "kesar",
          quickDesc: "The world's most expensive spice, used for biryani, sweets and special occasions",
          whatIsIt: "Dried stigmas of the crocus flower, with a unique honey-like, slightly metallic flavor and golden color. Used sparingly in special dishes due to its high cost.",
          howToUse: [
            "Soak in warm milk before adding to dishes",
            "Add to biryani and pulao",
            "Use in kheer and other sweets",
            "Add to lassi and special drinks"
          ],
          pairsWith: ["Milk", "Rice", "Cardamom", "Sugar", "Nuts"],
          storage: "Airtight container away from light. Keeps for years but aroma fades.",
          substitutes: "Turmeric gives color but not flavor. Safflower is called 'poor man's saffron' but tastes different.",
          proTip: "A few strands go a long way. Always bloom in warm liquid first to release color and flavor.",
          youtube: [
            { title: "How to Use Saffron", url: "https://www.youtube.com/results?search_query=saffron+kesar+indian+cooking" },
            { title: "Saffron Rice Recipe", url: "https://www.youtube.com/results?search_query=saffron+rice+kesar+pulao" }
          ]
        }
      ],
      "Produce": [
        {
          id: "cilantro",
          name: "Fresh Cilantro",
          native: "हरा धनिया",
          pronunciation: "hara dhaniya",
          quickDesc: "Fresh herb for garnishing and chutneys",
          whatIsIt: "The fresh leaves of the coriander plant with a bright, citrusy flavor. Used abundantly in Indian cooking as a garnish, in chutneys and as a flavoring.",
          howToUse: [
            "Garnish curries, dals and rice",
            "Make green chutney",
            "Add to raita",
            "Include in marinades"
          ],
          pairsWith: ["Mint", "Green chilies", "Lemon", "Yogurt", "All Indian dishes"],
          storage: "Stand stems in water and cover loosely, or wrap in damp paper towels.",
          substitutes: "Some people experience cilantro as soapy; if that's you, use parsley instead.",
          proTip: "Use the stems too, since they have lots of flavor. Chop and add them to cooking; save the leaves for garnish.",
          youtube: [
            { title: "Green Chutney Recipe", url: "https://www.youtube.com/results?search_query=cilantro+green+chutney+recipe" },
            { title: "How to Store Cilantro", url: "https://www.youtube.com/results?search_query=how+to+store+cilantro+fresh" }
          ]
        },
        {
          id: "green-chili",
          name: "Green Chilies",
          native: "हरी मिर्च",
          pronunciation: "hari mirch",
          quickDesc: "Fresh chilies for heat and bright flavor",
          whatIsIt: "Fresh green chilies used throughout Indian cooking for heat. Varieties range from mild to very hot. Serrano peppers are a common substitute outside India.",
          howToUse: [
            "Slit and add whole to curries",
            "Mince into chutneys",
            "Add to tempering",
            "Use in pickles"
          ],
          pairsWith: ["Onions", "Tomatoes", "Cilantro", "Ginger", "All savory dishes"],
          storage: "Refrigerate for 1-2 weeks. Freeze for longer storage.",
          substitutes: "Serrano or jalapeño work. Adjust quantity based on heat level.",
          proTip: "Slit chilies lengthwise but keep whole for milder heat that can be removed. Mince for more heat.",
          youtube: [
            { title: "Green Chilies in Indian Cooking", url: "https://www.youtube.com/results?search_query=green+chili+indian+cooking" },
            { title: "How to Handle Hot Peppers", url: "https://www.youtube.com/results?search_query=how+to+handle+hot+peppers+safely" }
          ]
        },
        {
          id: "ginger",
          name: "Fresh Ginger",
          native: "अदरक",
          pronunciation: "adrak",
          quickDesc: "Pungent, warming root used throughout Indian cooking",
          whatIsIt: "Fresh ginger root with its characteristic warm, pungent, slightly sweet bite. Used in virtually every Indian curry alongside garlic. Often made into a paste.",
          howToUse: [
            "Make ginger-garlic paste",
            "Grate or mince into curries",
            "Slice for chai",
            "Add to marinades"
          ],
          pairsWith: ["Garlic", "Onions", "Tomatoes", "All curries", "Tea"],
          storage: "Room temperature for a week. Refrigerate for longer. Freeze for months.",
          substitutes: "Ground ginger lacks the fresh bite but works in a pinch.",
          proTip: "Peel with the edge of a spoon to remove the skin without wasting the flesh.",
          youtube: [
            { title: "Ginger-Garlic Paste", url: "https://www.youtube.com/results?search_query=ginger+garlic+paste+indian+cooking" },
            { title: "How to Store Ginger", url: "https://www.youtube.com/results?search_query=how+to+store+fresh+ginger" }
          ]
        },
        {
          id: "garlic",
          name: "Garlic",
          native: "लहसुन",
          pronunciation: "leh-sun",
          quickDesc: "Pungent bulb used generously in North Indian cooking",
          whatIsIt: "Fresh garlic used abundantly in North Indian cuisine, often combined with ginger. Some South Indian Brahmin cuisines avoid it, along with onion.",
          howToUse: [
            "Make ginger-garlic paste",
            "Mince and fry until golden",
            "Add to curries and dals",
            "Use in pickles and chutneys"
          ],
          pairsWith: ["Ginger", "Onions", "Tomatoes", "All North Indian curries"],
          storage: "Room temperature in dry place. Keeps for weeks.",
          substitutes: "Garlic powder in a pinch, but fresh is much better.",
          proTip: "For easier peeling, smash cloves with the flat of a knife.",
          youtube: [
            { title: "Ginger Garlic Paste", url: "https://www.youtube.com/results?search_query=ginger+garlic+paste+recipe" },
            { title: "Garlic in Indian Cooking", url: "https://www.youtube.com/results?search_query=garlic+indian+cooking+uses" }
          ]
        },
        {
          id: "onions",
          name: "Onions",
          native: "प्याज",
          pronunciation: "pyaaz",
          quickDesc: "Cooked down as the base of most Indian curries",
          whatIsIt: "Regular onions (white, yellow or red) form the base of most North Indian curries. Slowly cooked until golden brown, they provide sweetness, body and depth.",
          howToUse: [
            "Fry until golden brown for curry base",
            "Slice raw for salads and garnish",
            "Caramelize for biryani",
            "Add to raita"
          ],
          pairsWith: ["Ginger", "Garlic", "Tomatoes", "All curries"],
          storage: "Room temperature in dry, dark place. Keeps for weeks.",
          substitutes: "For those avoiding onions, asafoetida provides some similar savory notes.",
          proTip: "Take your time with onions. Properly browned onions (not burnt) are the base of a good curry.",
          youtube: [
            { title: "How to Brown Onions for Curry", url: "https://www.youtube.com/results?search_query=how+to+brown+onions+indian+curry" },
            { title: "Caramelized Onions for Biryani", url: "https://www.youtube.com/results?search_query=crispy+fried+onions+biryani" }
          ]
        },
        {
          id: "tomatoes",
          name: "Tomatoes",
          native: "टमाटर",
          pronunciation: "ta-maa-tar",
          quickDesc: "Forms the base of curry gravy along with onions",
          whatIsIt: "Fresh tomatoes cooked down to form the tangy base of many Indian curries. With onions, they make up the base of most North Indian gravies.",
          howToUse: [
            "Cook down for curry base",
            "Use fresh in raita and salads",
            "Add to dals for tanginess",
            "Use in chutneys"
          ],
          pairsWith: ["Onions", "Ginger", "Garlic", "All curry spices"],
          storage: "Room temperature until ripe, then refrigerate.",
          substitutes: "Canned tomatoes work well in curries. Tomato paste for concentrated flavor.",
          proTip: "Cook tomatoes until the raw smell is gone and oil separates from the masala. Don't skip this step.",
          youtube: [
            { title: "Tomato Curry Base", url: "https://www.youtube.com/results?search_query=tomato+onion+curry+base+indian" },
            { title: "When is Masala Ready", url: "https://www.youtube.com/results?search_query=when+is+masala+ready+oil+separation" }
          ]
        },
        {
          id: "coconut",
          name: "Fresh Coconut",
          native: "नारियल",
          pronunciation: "naa-ri-yal",
          quickDesc: "A South Indian staple, used as flesh, milk and oil",
          whatIsIt: "Fresh coconut flesh is grated and used in chutneys, curries and sweets. Coconut milk is extracted for creamy curries. A staple of South Indian cuisine.",
          howToUse: [
            "Grate fresh for chutneys and garnish",
            "Extract milk for curries",
            "Toast and add to dishes",
            "Use in sweets and desserts"
          ],
          pairsWith: ["Curry leaves", "Mustard seeds", "Chili", "Jaggery", "Rice"],
          storage: "Refrigerate cut coconut for a few days. Grated coconut freezes well.",
          substitutes: "Desiccated coconut works for some uses. Canned coconut milk is convenient.",
          proTip: "To crack a coconut, find the 'eyes' and poke through one, drain the water, then hit the equator firmly.",
          youtube: [
            { title: "How to Open a Coconut", url: "https://www.youtube.com/results?search_query=how+to+open+crack+coconut" },
            { title: "Coconut Chutney Recipe", url: "https://www.youtube.com/results?search_query=coconut+chutney+south+indian" }
          ]
        },
        {
          id: "drumstick",
          name: "Drumstick/Moringa",
          native: "सहजन",
          pronunciation: "sahjan",
          quickDesc: "Long green pods for sambar and South Indian dishes",
          whatIsIt: "Long, ridged green pods from the moringa tree. The flesh inside is scraped off the fibrous exterior after cooking. A common addition to South Indian sambar.",
          howToUse: [
            "Cut into pieces and add to sambar",
            "Cook in dal",
            "Add to coconut curries",
            "Scrape flesh from fiber when eating"
          ],
          pairsWith: ["Sambar", "Dal", "Coconut", "Tamarind"],
          storage: "Refrigerate for a week or so.",
          substitutes: "No true substitute. Sometimes called 'drumstick' in Indian stores.",
          proTip: "When eating, bite down and scrape the soft flesh off with your teeth, discarding the fibrous outer part.",
          youtube: [
            { title: "Drumstick Sambar", url: "https://www.youtube.com/results?search_query=drumstick+sambar+recipe" },
            { title: "How to Eat Drumstick", url: "https://www.youtube.com/results?search_query=how+to+eat+drumstick+vegetable" }
          ]
        }
      ],
      "Pantry Staples": [
        {
          id: "basmati",
          name: "Basmati Rice",
          native: "बासमती चावल",
          pronunciation: "bahs-mah-tee",
          quickDesc: "Long-grain aromatic rice that stays fluffy and separate",
          whatIsIt: "A long-grain rice with a distinctive nutty aroma. The grains elongate rather than fatten when cooked and stay separate rather than sticky. Aged basmati is prized for better texture and aroma.",
          howToUse: [
            "Rinse thoroughly until the water runs clear",
            "Soak 20-30 minutes for longer, fluffier grains",
            "Cook with whole spices for pilaf and biryani",
            "Serve alongside curries and dal"
          ],
          pairsWith: ["Ghee", "Whole spices", "Saffron", "Curry", "Dal"],
          storage: "Airtight container in cool, dry place. Keeps for years.",
          substitutes: "Jasmine rice is aromatic but stickier. Long grain white rice works but lacks the aroma.",
          proTip: "Don't skip rinsing: it removes excess starch and prevents gummy rice. Soaking also makes a noticeable difference.",
          youtube: [
            { title: "Perfect Basmati Rice Every Time", url: "https://www.youtube.com/results?search_query=perfect+basmati+rice+recipe+fluffy" },
            { title: "Chicken Biryani Recipe", url: "https://www.youtube.com/results?search_query=chicken+biryani+recipe+basmati" }
          ]
        },
        {
          id: "dal",
          name: "Dal (Lentils)",
          native: "दाल",
          pronunciation: "dahl",
          quickDesc: "Protein-rich legumes in countless varieties for everyday cooking",
          whatIsIt: "The word 'dal' refers both to dried split legumes and the cooked dish. Common types: chana dal (split chickpeas), masoor dal (red lentils), toor dal (pigeon peas), moong dal (mung beans).",
          howToUse: [
            "Simmer with water, turmeric and salt until soft",
            "Finish with a tadka (tempering of fried spices in ghee)",
            "Use different types for different dishes",
            "Red lentils (masoor) cook fastest; chickpea dal takes longest"
          ],
          pairsWith: ["Turmeric", "Cumin", "Garlic", "Tomatoes", "Cilantro"],
          storage: "Dry pantry in airtight container. Keeps for a year or more.",
          substitutes: "Different dals have different textures but can often substitute for each other.",
          proTip: "The tadka (hot spiced ghee poured over the cooked dal) is what makes it special. Don't skip this step.",
          youtube: [
            { title: "Dal Tadka Recipe", url: "https://www.youtube.com/results?search_query=dal+tadka+recipe+indian" },
            { title: "Types of Dal Explained", url: "https://www.youtube.com/results?search_query=types+of+dal+lentils+explained+indian+cooking" }
          ]
        },
        {
          id: "chickpeas",
          name: "Chickpeas",
          native: "चना",
          pronunciation: "chana",
          quickDesc: "Versatile legume for chole, chaat and countless dishes",
          whatIsIt: "Also called garbanzo beans or chole. Used whole in curries (chole) and chaat, or split as chana dal. One of India's most important protein sources.",
          howToUse: [
            "Make chole (chickpea curry)",
            "Add to chaat and salads",
            "Grind for besan (chickpea flour)",
            "Roast for snacking"
          ],
          pairsWith: ["Onions", "Tomatoes", "Chole masala", "Tea (with chole bhature)", "Cumin"],
          storage: "Dry chickpeas keep for years. Soak overnight before cooking.",
          substitutes: "Canned chickpeas are convenient but lack the texture of home-cooked.",
          proTip: "Adding baking soda while soaking helps chickpeas cook faster and become softer.",
          youtube: [
            { title: "Chole Recipe", url: "https://www.youtube.com/results?search_query=chole+recipe+punjabi+chickpea+curry" },
            { title: "Chana Chaat", url: "https://www.youtube.com/results?search_query=chana+chaat+recipe" }
          ]
        },
        {
          id: "besan",
          name: "Chickpea Flour",
          native: "बेसन",
          pronunciation: "bay-sun",
          quickDesc: "Protein-rich flour for pakoras, sweets and thickening",
          whatIsIt: "Flour ground from dried chickpeas with a distinct nutty flavor. Used for frying batters, sweets, thickening curries and making savory snacks. A staple of Indian cooking.",
          howToUse: [
            "Make pakora and bhaji batter",
            "Prepare besan ladoo and other sweets",
            "Use to thicken curries",
            "Make savory pancakes (chilla)"
          ],
          pairsWith: ["Onions", "Spices", "Sugar", "Ghee", "Vegetables"],
          storage: "Airtight container in cool, dry place. Keeps for months.",
          substitutes: "No true substitute; nothing else has the same flavor.",
          proTip: "For sweets, toast besan in ghee to remove the raw taste. Ladoo needs this step.",
          youtube: [
            { title: "Pakora Recipe", url: "https://www.youtube.com/results?search_query=pakora+recipe+besan+batter" },
            { title: "Besan Ladoo Recipe", url: "https://www.youtube.com/results?search_query=besan+ladoo+recipe" }
          ]
        },
        {
          id: "atta",
          name: "Whole Wheat Flour (Atta)",
          native: "आटा",
          pronunciation: "aah-tah",
          quickDesc: "Fine whole wheat flour for making roti and chapati",
          whatIsIt: "Finely ground whole wheat flour used to make everyday Indian flatbreads like roti, chapati and paratha. Indian atta is ground finer than Western whole wheat flour.",
          howToUse: [
            "Make roti and chapati",
            "Make parathas and puris",
            "Use in some desserts",
            "Mix with other flours for different breads"
          ],
          pairsWith: ["Water", "Salt", "Ghee", "Oil", "Stuffings"],
          storage: "Airtight container in cool place. Refrigerate in hot weather.",
          substitutes: "Western whole wheat flour works but makes denser rotis. Chapati flour is the same as atta.",
          proTip: "Knead dough well and let it rest for soft rotis. The dough should be soft, not stiff.",
          youtube: [
            { title: "How to Make Roti", url: "https://www.youtube.com/results?search_query=how+to+make+roti+chapati+recipe" },
            { title: "Soft Chapati Tips", url: "https://www.youtube.com/results?search_query=soft+chapati+tips+atta" }
          ]
        },
        {
          id: "paneer",
          name: "Paneer",
          native: "पनीर",
          pronunciation: "pa-neer",
          quickDesc: "Fresh Indian cheese that doesn't melt",
          whatIsIt: "Fresh, unaged cheese made by curdling milk with lemon juice or vinegar. It doesn't melt when cooked, so it holds up well in curries and on the grill. A major protein source for vegetarians.",
          howToUse: [
            "Cube and add to curries (palak paneer, paneer tikka masala)",
            "Grill or fry for paneer tikka",
            "Crumble for stuffings",
            "Make desserts like rasgulla"
          ],
          pairsWith: ["Spinach", "Tomatoes", "Cream", "Spices", "Bell peppers"],
          storage: "Refrigerate in water for up to a week. Change water daily.",
          substitutes: "Firm tofu for similar texture (different flavor). Halloumi in some applications.",
          proTip: "Homemade paneer is easy and much better than store-bought. To make it, curdle hot milk with lemon juice.",
          youtube: [
            { title: "How to Make Paneer at Home", url: "https://www.youtube.com/results?search_query=how+to+make+paneer+at+home" },
            { title: "Palak Paneer Recipe", url: "https://www.youtube.com/results?search_query=palak+paneer+recipe" }
          ]
        },
        {
          id: "papad",
          name: "Papad/Papadum",
          native: "पापड़",
          pronunciation: "paa-par",
          quickDesc: "Thin, crispy lentil wafers served with meals",
          whatIsIt: "Thin, crispy discs made from lentil or chickpea flour, dried and then fried or roasted. Served as a side with meals or as a snack with chutney.",
          howToUse: [
            "Fry in oil until crispy",
            "Roast over open flame",
            "Microwave for oil-free option",
            "Serve alongside dal and rice"
          ],
          pairsWith: ["Dal", "Rice", "Pickles", "Chutneys", "Any Indian meal"],
          storage: "Keep dry in airtight container. Lasts for months.",
          substitutes: "No real substitute for the texture and flavor.",
          proTip: "For the healthiest option, microwave for 30-60 seconds until puffed and crisp.",
          youtube: [
            { title: "How to Fry Papad", url: "https://www.youtube.com/results?search_query=how+to+fry+papad+crispy" },
            { title: "Roasted Papad on Flame", url: "https://www.youtube.com/results?search_query=roasted+papad+on+flame" }
          ]
        },
        {
          id: "idli-rice",
          name: "Idli Rice",
          native: "इडली चावल",
          pronunciation: "idli chawal",
          quickDesc: "Short-grain parboiled rice for idli and dosa batter",
          whatIsIt: "A specific short-grain parboiled rice used for making idli and dosa batter. The parboiling process gives the batter its characteristic texture and fermentation properties.",
          howToUse: [
            "Soak and grind with urad dal for idli batter",
            "Use for dosa batter",
            "Ferment overnight for sour flavor",
            "Steam into soft, fluffy idlis"
          ],
          pairsWith: ["Urad dal", "Sambar", "Coconut chutney", "Tomato chutney"],
          storage: "Dry, cool place. Keeps for months.",
          substitutes: "Regular parboiled rice works but produces different texture.",
          proTip: "The ratio of idli rice to urad dal is typically 4:1. Fermentation time varies with temperature.",
          youtube: [
            { title: "Idli Batter Recipe", url: "https://www.youtube.com/results?search_query=idli+batter+recipe+idli+rice" },
            { title: "Soft Idli Tips", url: "https://www.youtube.com/results?search_query=soft+idli+tips+batter" }
          ]
        },
        {
          id: "urad-dal",
          name: "Urad Dal",
          native: "उड़द दाल",
          pronunciation: "urad daal",
          quickDesc: "Black gram dal for idli batter, dal makhani and tempering",
          whatIsIt: "Split black gram (with or without skin). White urad dal is essential for idli batter and gives it fluffiness. Whole black urad is used for the rich dal makhani.",
          howToUse: [
            "Grind with idli rice for batter",
            "Use in tempering for South Indian dishes",
            "Make dal makhani with whole urad",
            "Use in medu vada"
          ],
          pairsWith: ["Idli rice", "Mustard seeds", "Curry leaves", "Cream (for dal makhani)"],
          storage: "Dry, cool place in airtight container. Keeps for months.",
          substitutes: "No substitute for idli batter. Different dals work for other applications.",
          proTip: "For idli batter, soak urad dal separately from rice for better grinding and fluffier idlis.",
          youtube: [
            { title: "Dal Makhani Recipe", url: "https://www.youtube.com/results?search_query=dal+makhani+recipe+authentic" },
            { title: "Medu Vada Recipe", url: "https://www.youtube.com/results?search_query=medu+vada+recipe+urad+dal" }
          ]
        },
        {
          id: "poha",
          name: "Poha (Flattened Rice)",
          native: "पोहा",
          pronunciation: "po-haa",
          quickDesc: "Flattened rice flakes for quick breakfast dishes",
          whatIsIt: "Rice that's been parboiled, flattened and dried into flakes. Comes in thin and thick varieties. Rehydrates quickly for fast cooking. A popular breakfast across India.",
          howToUse: [
            "Rinse briefly and cook with onions and spices",
            "Make batata poha (with potatoes)",
            "Use in chivda (savory snack mix)",
            "Add to some desserts"
          ],
          pairsWith: ["Onions", "Peanuts", "Curry leaves", "Mustard seeds", "Potatoes"],
          storage: "Airtight container in dry place. Keeps for months.",
          substitutes: "Rice flakes from other grains work differently.",
          proTip: "Don't oversoak; just rinse briefly. Thin poha needs less water than thick poha.",
          youtube: [
            { title: "Poha Recipe", url: "https://www.youtube.com/results?search_query=poha+recipe+indian+breakfast" },
            { title: "Kanda Poha", url: "https://www.youtube.com/results?search_query=kanda+poha+maharashtrian+recipe" }
          ]
        },
        {
          id: "semolina",
          name: "Semolina/Rava",
          native: "सूजी/रवा",
          pronunciation: "sooji/rava",
          quickDesc: "Coarse wheat product for upma, halwa and many dishes",
          whatIsIt: "Coarsely ground durum wheat. Used for savory upma, sweet halwa and as a coating for fried foods. A versatile ingredient in Indian cooking.",
          howToUse: [
            "Make upma (savory breakfast)",
            "Prepare rava halwa (sweet dessert)",
            "Use as coating for fried foods",
            "Make rava dosa and rava idli"
          ],
          pairsWith: ["Vegetables", "Cashews", "Ghee", "Sugar", "Spices"],
          storage: "Airtight container in cool place. Refrigerate in humid weather.",
          substitutes: "Cream of wheat is similar. Farina works for some applications.",
          proTip: "Toast semolina in ghee before adding liquid for nutty flavor and to prevent lumps.",
          youtube: [
            { title: "Upma Recipe", url: "https://www.youtube.com/results?search_query=upma+recipe+south+indian+breakfast" },
            { title: "Rava Kesari/Sheera", url: "https://www.youtube.com/results?search_query=rava+kesari+sheera+recipe" }
          ]
        },
        {
          id: "cashews",
          name: "Cashews",
          native: "काजू",
          pronunciation: "kaa-joo",
          quickDesc: "Rich nuts for curries, sweets and garnishing",
          whatIsIt: "Kidney-shaped nuts used widely in Indian cooking: in rich korma curries, ground into pastes for creaminess, fried for garnish and in sweets like kaju katli.",
          howToUse: [
            "Grind into paste for creamy curries",
            "Fry in ghee for garnishing rice and sweets",
            "Make kaju katli and kaju barfi",
            "Add to pulao and biryani"
          ],
          pairsWith: ["Ghee", "Raisins", "Cardamom", "Cream", "Rice dishes"],
          storage: "Airtight container. Refrigerate or freeze for longer storage.",
          substitutes: "Almonds or cream for richness in curries.",
          proTip: "Soak cashews before grinding for smoother, creamier paste.",
          youtube: [
            { title: "Cashew Curry Paste", url: "https://www.youtube.com/results?search_query=cashew+paste+indian+curry" },
            { title: "Kaju Katli Recipe", url: "https://www.youtube.com/results?search_query=kaju+katli+recipe" }
          ]
        }
      ]
    }
  },
  taiwan: {
    name: "Taiwan",
    flag: "🇹🇼",
    categories: {
      "Sauces & Condiments": [
        {
          id: "tw-soy-paste",
          name: "Thick Soy Sauce Paste",
          native: "醬油膏",
          pronunciation: "jiàng yóu gāo",
          quickDesc: "Thick, sweet soy paste for dipping and braising",
          whatIsIt: "A viscous, slightly sweet soy sauce paste that clings to food. Used in Taiwanese braised dishes and as a dipping sauce for dumplings and rice rolls.",
          howToUse: ["Dip fan tuan (rice rolls) and dumplings", "Braise pork belly (lu rou)", "Drizzle over blanched vegetables", "Mix into noodle dishes"],
          pairsWith: ["Rice rolls", "Dumplings", "Pork belly", "Vegetables", "Tofu"],
          storage: "Room temperature. Keeps indefinitely.",
          substitutes: "Regular soy sauce mixed with a little molasses and cornstarch.",
          proTip: "Kim Lan brand is the classic Taiwanese choice."
        },
        {
          id: "tw-shacha",
          name: "Shacha Sauce",
          native: "沙茶醬",
          pronunciation: "shā chá jiàng",
          quickDesc: "Savory sauce of dried shrimp, garlic and spices",
          whatIsIt: "A uniquely Taiwanese sauce made from dried shrimp, brill fish, garlic, shallots and spices. Similar to but distinct from Chinese satay sauce. A standard sauce for hot pot dipping.",
          howToUse: ["Mix into hot pot dipping sauce", "Stir-fry with beef and vegetables", "Add to noodle soups", "Use as a marinade"],
          pairsWith: ["Beef", "Hot pot", "Rice noodles", "Eggs", "Garlic"],
          storage: "Refrigerate after opening. Keeps for months.",
          substitutes: "No direct substitute. Satay sauce plus fish sauce approximates it.",
          proTip: "Bull Head brand (牛頭牌) is the iconic Taiwanese shacha."
        },
        {
          id: "tw-black-vinegar",
          name: "Taiwanese Black Vinegar",
          native: "烏醋",
          pronunciation: "wū cù",
          quickDesc: "Mellow, sweet-sour vinegar for dumplings",
          whatIsIt: "A dark, mellow vinegar with hints of sweetness and spice. Less sharp than Chinese black vinegar. The usual dipping vinegar for dumplings and xiao long bao.",
          howToUse: ["Dip dumplings and xiao long bao", "Add to hot and sour soup", "Drizzle over noodles", "Use in braised dishes"],
          pairsWith: ["Ginger", "Dumplings", "Soup dumplings", "Noodles", "Pork"],
          storage: "Room temperature. Keeps indefinitely.",
          substitutes: "Chinkiang vinegar with a pinch of sugar.",
          proTip: "Always pair with thin-sliced ginger for dumpling dipping."
        },
        {
          id: "tw-rice-wine",
          name: "Taiwanese Rice Wine",
          native: "米酒",
          pronunciation: "mǐ jiǔ",
          quickDesc: "Cooking wine, one of the three cups in three-cup dishes",
          whatIsIt: "A clear rice wine widely used in Taiwanese cooking, especially in three-cup chicken. It has a clean, slightly sweet flavor.",
          howToUse: ["Make three-cup chicken (san bei ji)", "Add to marinades", "Deglaze pans", "Use in soups and stews"],
          pairsWith: ["Sesame oil", "Soy sauce", "Basil", "Chicken", "Ginger"],
          storage: "Room temperature. Keeps indefinitely.",
          substitutes: "Shaoxing wine or dry sherry.",
          proTip: "TTL brand red label is the standard cooking wine in Taiwan."
        }
      ],
      "Produce": [
        {
          id: "tw-water-spinach",
          name: "Water Spinach",
          native: "空心菜",
          pronunciation: "kōng xīn cài",
          quickDesc: "Hollow-stemmed greens for garlic stir-fry",
          whatIsIt: "A popular leafy green with hollow stems and tender leaves. Cooks in seconds and has a mild, slightly sweet flavor. A ubiquitous side dish in Taiwan.",
          howToUse: ["Stir-fry with garlic over high heat", "Add to soups", "Blanch and dress with oyster sauce", "Include in hot pot"],
          pairsWith: ["Garlic", "Fermented tofu", "Oyster sauce", "Chili", "Shrimp paste"],
          storage: "Refrigerate and use within 2-3 days.",
          substitutes: "Regular spinach or bok choy.",
          proTip: "Very high heat and quick cooking keeps stems crunchy and leaves tender."
        },
        {
          id: "tw-bamboo-shoots",
          name: "Fresh Bamboo Shoots",
          native: "竹筍",
          pronunciation: "zhú sǔn",
          quickDesc: "Tender shoots for soups and stir-fries",
          whatIsIt: "Young bamboo shoots with a crisp texture and subtle sweetness. Taiwan is famous for its spring bamboo shoots. Must be cooked before eating.",
          howToUse: ["Boil and slice for salads", "Add to soups like bamboo shoot chicken soup", "Stir-fry with pork", "Braise in soy sauce"],
          pairsWith: ["Chicken", "Pork", "Soy sauce", "Sesame oil", "Mushrooms"],
          storage: "Refrigerate uncooked up to a week. Cooked: 3-4 days.",
          substitutes: "Canned bamboo shoots (rinse well).",
          proTip: "Fresh shoots need boiling for 20-30 min to remove bitterness."
        },
        {
          id: "tw-mustard-greens",
          name: "Taiwanese Mustard Greens",
          native: "芥菜",
          pronunciation: "jiè cài",
          quickDesc: "Bitter greens often pickled or braised",
          whatIsIt: "Large, slightly bitter greens common in Hakka cuisine and Lunar New Year dishes. Can be eaten fresh, pickled or preserved.",
          howToUse: ["Braise with pork for long life dish", "Pickle into suan cai", "Add to soups", "Stir-fry with garlic"],
          pairsWith: ["Pork belly", "Garlic", "Dried shrimp", "Rice", "Tofu"],
          storage: "Refrigerate up to a week.",
          substitutes: "Chinese broccoli or other Asian mustard greens.",
          proTip: "The bitterness mellows significantly with long braising."
        },
        {
          id: "tw-taro",
          name: "Taro Root",
          native: "芋頭",
          pronunciation: "yù tou",
          quickDesc: "Starchy root for savory and sweet dishes",
          whatIsIt: "A starchy root vegetable with a subtle, nutty flavor and purple-flecked flesh. Used in both savory dishes and beloved Taiwanese desserts like taro balls.",
          howToUse: ["Make taro balls for dessert", "Braise with pork", "Steam and mash", "Add to soups"],
          pairsWith: ["Coconut milk", "Pork", "Sweet potato", "Brown sugar", "Rice"],
          storage: "Cool, dark place for weeks. Don't refrigerate.",
          substitutes: "Sweet potato has different flavor but similar texture.",
          proTip: "Wear gloves when handling raw taro, which can irritate skin."
        }
      ],
      "Noodles & Rice": [
        {
          id: "tw-rice-noodles",
          name: "Taiwanese Rice Noodles",
          native: "米粉",
          pronunciation: "mǐ fěn",
          quickDesc: "Thin rice noodles for stir-fry",
          whatIsIt: "Very thin rice noodles, thinner than Thai or Vietnamese versions. The base for Taiwan's famous fried rice noodles (chao mi fen).",
          howToUse: ["Soak and stir-fry (chao mi fen)", "Add to soups", "Use in spring rolls", "Serve in broth"],
          pairsWith: ["Pork", "Cabbage", "Dried shrimp", "Mushrooms", "Soy sauce"],
          storage: "Dry pantry. Keeps for over a year.",
          substitutes: "Thin rice vermicelli.",
          proTip: "Hsinchu city is famous for its sun-dried rice noodles."
        },
        {
          id: "tw-knife-cut-noodles",
          name: "Knife-Cut Noodles",
          native: "刀削麵",
          pronunciation: "dāo xiāo miàn",
          quickDesc: "Thick, chewy wheat noodles",
          whatIsIt: "Thick, irregular wheat noodles sliced directly from a dough ball into boiling water. Their chewy texture suits hearty beef noodle soup.",
          howToUse: ["Serve in beef noodle soup", "Top with braised beef", "Use in dry noodle dishes", "Add to hot pot"],
          pairsWith: ["Beef", "Tomato", "Pickled mustard greens", "Chili oil", "Green onion"],
          storage: "Fresh: use same day. Dried: months in pantry.",
          substitutes: "Wide wheat noodles or udon.",
          proTip: "The irregular thickness gives varied texture in each bite."
        }
      ],
      "Pantry Staples": [
        {
          id: "tw-dried-shrimp",
          name: "Dried Shrimp (Large)",
          native: "蝦米",
          pronunciation: "xiā mǐ",
          quickDesc: "Umami-rich shrimp for rice and noodles",
          whatIsIt: "Dried salted shrimp that add intense savory flavor. Taiwanese cooking uses larger ones than Thai cuisine. They go into sticky rice and radish cake.",
          howToUse: ["Add to sticky rice (you fan)", "Include in turnip cake", "Stir-fry with rice noodles", "Add to soups"],
          pairsWith: ["Sticky rice", "Mushrooms", "Pork", "Shallots", "Soy sauce"],
          storage: "Refrigerate or freeze. Keeps for months.",
          substitutes: "Dried scallops or extra fish sauce for umami.",
          proTip: "Soak in warm water for 15 minutes before using to soften."
        },
        {
          id: "tw-five-spice",
          name: "Five Spice Powder",
          native: "五香粉",
          pronunciation: "wǔ xiāng fěn",
          quickDesc: "Aromatic blend for braised meats",
          whatIsIt: "A warm spice blend of star anise, cloves, cinnamon, Sichuan peppercorn and fennel. It seasons Taiwanese braised dishes and lu wei (braised snacks).",
          howToUse: ["Season braised pork belly", "Add to lu wei braising liquid", "Rub on roast duck", "Mix into dumpling fillings"],
          pairsWith: ["Pork", "Soy sauce", "Rock sugar", "Star anise", "Ginger"],
          storage: "Airtight container away from light. Best within 6 months.",
          substitutes: "Make your own blend or use Chinese five spice.",
          proTip: "Use it sparingly. It's potent, and a little goes a long way."
        },
        {
          id: "tw-fried-shallots",
          name: "Fried Shallots",
          native: "油蔥酥",
          pronunciation: "yóu cōng sū",
          quickDesc: "Crispy topping for everything",
          whatIsIt: "Thinly sliced shallots fried until golden and crispy. A beloved Taiwanese topping that adds crunch and sweet onion flavor to countless dishes.",
          howToUse: ["Top rice and noodles", "Garnish soups", "Add to lu rou fan", "Mix into fillings"],
          pairsWith: ["Rice", "Noodles", "Congee", "Braised pork", "Vegetables"],
          storage: "Store in an airtight container; it keeps a few weeks. Save the oil.",
          substitutes: "Store-bought fried shallots or fried garlic.",
          proTip: "Don't toss the shallot-infused oil. Use it for cooking."
        },
        {
          id: "tw-sesame-oil",
          name: "Black Sesame Oil",
          native: "黑麻油",
          pronunciation: "hēi má yóu",
          quickDesc: "Nutty oil for three-cup and sesame dishes",
          whatIsIt: "Deeply roasted black sesame oil with an intense, nutty aroma. In Taiwan it's used for cooking as well as finishing. Three-cup chicken and sesame oil chicken both depend on it.",
          howToUse: ["Cook three-cup chicken and other dishes", "Make sesame oil chicken soup", "Add to ginger-based postpartum dishes", "Drizzle on noodles"],
          pairsWith: ["Ginger", "Rice wine", "Chicken", "Basil", "Soy sauce"],
          storage: "Cool, dark place. Use within a year.",
          substitutes: "Regular toasted sesame oil (less intense).",
          proTip: "You can cook with it as well as finish with it, but don't overheat it or it turns bitter."
        },
        {
          id: "tw-pickled-mustard",
          name: "Pickled Mustard Greens",
          native: "酸菜",
          pronunciation: "suān cài",
          quickDesc: "Sour preserved greens for beef noodle soup",
          whatIsIt: "Salted and fermented mustard greens with a sour, tangy flavor. A classic topping for Taiwanese beef noodle soup and a common side dish.",
          howToUse: ["Top beef noodle soup", "Stir-fry with pork", "Add to soups", "Serve as a side dish"],
          pairsWith: ["Beef", "Pork belly", "Noodles", "Chili", "Garlic"],
          storage: "Refrigerate after opening. Keeps for weeks.",
          substitutes: "Sauerkraut has a similar sour note.",
          proTip: "Rinse before using if you prefer less saltiness."
        }
      ]
    }
  },
  philippines: {
    name: "Philippines",
    flag: "🇵🇭",
    categories: {
      "Sauces & Condiments": [
        {
          id: "ph-soy-sauce",
          name: "Toyo (Filipino Soy Sauce)",
          native: "Toyo",
          pronunciation: "toy-oh",
          quickDesc: "Saltier, thinner soy sauce for adobo",
          whatIsIt: "Filipino soy sauce is saltier and thinner than Chinese or Japanese varieties. Along with vinegar, it's the base of adobo.",
          howToUse: ["Make adobo with vinegar", "Create toyomansi dipping sauce", "Marinate meats", "Season stir-fries"],
          pairsWith: ["Vinegar", "Calamansi", "Garlic", "Bay leaves", "Pork"],
          storage: "Room temperature. Keeps indefinitely.",
          substitutes: "Regular soy sauce with extra salt.",
          proTip: "Silver Swan and Datu Puti are the popular Filipino brands."
        },
        {
          id: "ph-vinegar",
          name: "Cane Vinegar (Sukang Iloko)",
          native: "Sukang Iloko",
          pronunciation: "soo-kahng ee-loh-koh",
          quickDesc: "Mild sugarcane vinegar for adobo and dipping",
          whatIsIt: "A mild, slightly sweet vinegar made from sugarcane. The most common cooking vinegar in the Philippines, used for adobo and sawsawan dipping sauces.",
          howToUse: ["Make adobo", "Create sawsawan dipping sauce", "Pickle vegetables", "Add to paksiw dishes"],
          pairsWith: ["Soy sauce", "Garlic", "Fish sauce", "Chili", "Onions"],
          storage: "Room temperature. Keeps indefinitely.",
          substitutes: "White wine vinegar or diluted apple cider vinegar.",
          proTip: "Don't stir adobo right after adding the vinegar. Let it simmer undisturbed so it mellows."
        },
        {
          id: "ph-fish-sauce",
          name: "Patis (Filipino Fish Sauce)",
          native: "Patis",
          pronunciation: "pah-tees",
          quickDesc: "Amber fish sauce for soups and dipping",
          whatIsIt: "Filipino fish sauce, lighter in color than Thai or Vietnamese versions. Used in cooking and as a table condiment, often mixed with calamansi.",
          howToUse: ["Season sinigang and other soups", "Make patis-calamansi dipping sauce", "Add to stir-fries", "Marinate seafood"],
          pairsWith: ["Calamansi", "Garlic", "Chili", "Tomatoes", "Onions"],
          storage: "Room temperature. Keeps indefinitely.",
          substitutes: "Thai or Vietnamese fish sauce.",
          proTip: "Mix with calamansi and chili for the classic Filipino dipping sauce."
        },
        {
          id: "ph-bagoong",
          name: "Bagoong (Shrimp Paste)",
          native: "Bagoong Alamang",
          pronunciation: "bah-goh-ohng",
          quickDesc: "Fermented shrimp paste for kare-kare",
          whatIsIt: "Fermented shrimp paste ranging from gray to pink to dark. The traditional side for kare-kare and used to flavor many dishes. Sautéed bagoong is sweeter.",
          howToUse: ["Serve with kare-kare", "Sauté with tomatoes for condiment", "Add to pinakbet", "Season green mango salads"],
          pairsWith: ["Pork", "Green mango", "Tomatoes", "Eggplant", "Bitter melon"],
          storage: "Refrigerate after opening. Keeps for months.",
          substitutes: "Thai shrimp paste (kapi) is similar but drier.",
          proTip: "Sautéed bagoong (ginisang bagoong) made with pork fat and sugar is well worth trying."
        }
      ],
      "Produce": [
        {
          id: "ph-calamansi",
          name: "Calamansi",
          native: "Kalamansi",
          pronunciation: "kah-lah-mahn-see",
          quickDesc: "Tiny citrus used throughout Filipino cooking",
          whatIsIt: "A small, round citrus fruit with a flavor between lime and mandarin orange. A go-to souring agent in Filipino cuisine, used in cooking and as a table condiment.",
          howToUse: ["Squeeze over pancit and noodles", "Make calamansi juice drink", "Add to sawsawan dipping sauce", "Marinate fish for kinilaw"],
          pairsWith: ["Fish sauce", "Soy sauce", "Fish", "Noodles", "Grilled meats"],
          storage: "Refrigerate up to 2 weeks. Juice can be frozen.",
          substitutes: "Mix equal parts lime and orange juice.",
          proTip: "Cut in half and squeeze with the cut side down to catch seeds."
        },
        {
          id: "ph-bitter-melon",
          name: "Bitter Melon (Ampalaya)",
          native: "Ampalaya",
          pronunciation: "ahm-pah-lah-yah",
          quickDesc: "Warty gourd prized for its bitterness",
          whatIsIt: "A bumpy, ridged gourd with an assertively bitter flavor that Filipinos love. Believed to have health benefits. The bitterness mellows with cooking.",
          howToUse: ["Stir-fry with eggs (ginisang ampalaya)", "Add to pinakbet", "Stuff and braise", "Include in soups"],
          pairsWith: ["Eggs", "Tomatoes", "Shrimp paste", "Pork", "Garlic"],
          storage: "Refrigerate up to a week.",
          substitutes: "No substitute for the unique bitter flavor.",
          proTip: "Salt and squeeze out liquid to reduce bitterness if desired."
        },
        {
          id: "ph-kangkong",
          name: "Kangkong",
          native: "Kangkong",
          pronunciation: "kahng-kohng",
          quickDesc: "Water spinach for adobo and sinigang",
          whatIsIt: "Water spinach with hollow stems and tender leaves. One of the most popular vegetables in the Philippines, added to soups and stir-fries.",
          howToUse: ["Add to sinigang soup", "Make adobong kangkong", "Stir-fry with garlic", "Include in pinakbet"],
          pairsWith: ["Garlic", "Bagoong", "Vinegar", "Tomatoes", "Pork"],
          storage: "Refrigerate and use within 2-3 days.",
          substitutes: "Regular spinach or bok choy.",
          proTip: "Add to soups at the last minute so it stays bright green."
        },
        {
          id: "ph-tamarind",
          name: "Fresh Tamarind (Sampalok)",
          native: "Sampalok",
          pronunciation: "sahm-pah-lok",
          quickDesc: "Sour fruit for sinigang broth",
          whatIsIt: "The sour pods used to make the beloved sinigang soup. Fresh tamarind gives the most authentic flavor, though powder and paste are common shortcuts.",
          howToUse: ["Boil for sinigang broth", "Make tamarind candy", "Add to sauces", "Create souring agent for soups"],
          pairsWith: ["Pork", "Shrimp", "Fish", "Vegetables", "Fish sauce"],
          storage: "Room temperature for weeks. Pulp freezes well.",
          substitutes: "Sinigang mix powder or tamarind paste.",
          proTip: "Boil pods in water, mash and strain for fresh sinigang base."
        }
      ],
      "Noodles & Rice": [
        {
          id: "ph-rice-noodles",
          name: "Bihon (Rice Sticks)",
          native: "Bihon",
          pronunciation: "bee-hon",
          quickDesc: "Thin rice noodles for pancit bihon",
          whatIsIt: "Thin rice noodles used in the popular pancit bihon. They absorb flavors well and have a slightly chewy texture when properly cooked.",
          howToUse: ["Make pancit bihon", "Add to soups", "Combine with canton noodles", "Stir-fry with vegetables"],
          pairsWith: ["Soy sauce", "Calamansi", "Pork", "Chicken", "Vegetables"],
          storage: "Dry pantry. Keeps for over a year.",
          substitutes: "Thai rice vermicelli.",
          proTip: "Soak in water until pliable, then stir-fry; they finish cooking in the pan."
        },
        {
          id: "ph-canton-noodles",
          name: "Canton Noodles",
          native: "Pancit Canton",
          pronunciation: "pahn-sit kahn-ton",
          quickDesc: "Wheat noodles for pancit canton",
          whatIsIt: "Yellow wheat flour noodles, sometimes with egg. Used alone or mixed with bihon (pancit palabok). Chewier than rice noodles.",
          howToUse: ["Make pancit canton", "Mix with bihon for pancit bihon canton", "Stir-fry with meat and vegetables", "Add to soups"],
          pairsWith: ["Soy sauce", "Oyster sauce", "Pork", "Shrimp", "Cabbage"],
          storage: "Dry pantry. Keeps for months.",
          substitutes: "Chinese egg noodles or lo mein noodles.",
          proTip: "Brief blanching before stir-frying gives the best texture."
        },
        {
          id: "ph-glutinous-rice",
          name: "Malagkit (Glutinous Rice)",
          native: "Malagkit",
          pronunciation: "mah-lahg-kit",
          quickDesc: "Sticky rice for suman and rice cakes",
          whatIsIt: "Glutinous rice used in Filipino rice cakes (kakanin) and wrapped treats like suman. Also used in savory dishes like bringhe.",
          howToUse: ["Make suman and other kakanin", "Cook bringhe (Filipino paella)", "Create rice cakes", "Make champorado base"],
          pairsWith: ["Coconut milk", "Brown sugar", "Banana leaves", "Ube", "Mango"],
          storage: "Dry pantry. Keeps indefinitely.",
          substitutes: "Thai sticky rice.",
          proTip: "Soak overnight for rice cakes to get the right sticky texture."
        }
      ],
      "Pantry Staples": [
        {
          id: "ph-coconut-cream",
          name: "Coconut Cream (Kakang Gata)",
          native: "Kakang Gata",
          pronunciation: "kah-kahng gah-tah",
          quickDesc: "Rich first extraction for ginataang dishes",
          whatIsIt: "The thick, rich first pressing of coconut meat. Used in countless Filipino dishes from savory stews to desserts. Creamier than coconut milk.",
          howToUse: ["Make ginataang kalabasa", "Cook laing", "Create coconut desserts", "Add richness to stews"],
          pairsWith: ["Taro leaves", "Squash", "Shrimp", "Pork", "Palm sugar"],
          storage: "Refrigerate after opening. Use within a week.",
          substitutes: "Thick part from top of unshaken coconut milk can.",
          proTip: "Fresh gata is incomparably better than canned for desserts."
        },
        {
          id: "ph-ube",
          name: "Ube (Purple Yam)",
          native: "Ube",
          pronunciation: "oo-beh",
          quickDesc: "Vibrant purple yam for desserts",
          whatIsIt: "A vivid purple yam with a mildly sweet, nutty flavor. The signature ingredient in ube halaya (jam) and countless Filipino desserts gaining worldwide popularity.",
          howToUse: ["Make ube halaya jam", "Add to halo-halo", "Flavor ice cream and cakes", "Include in rice cakes"],
          pairsWith: ["Coconut milk", "Condensed milk", "Butter", "Macapuno", "Cheese"],
          storage: "Cool, dark place for weeks. Cooked ube freezes well.",
          substitutes: "Ube extract or powder for color/flavor (not texture).",
          proTip: "Fresh ube is labor-intensive to prepare, so ube halaya in jars saves hours of work."
        },
        {
          id: "ph-annatto",
          name: "Annatto Seeds (Atsuete)",
          native: "Atsuete",
          pronunciation: "aht-soo-eh-teh",
          quickDesc: "Red seeds for color in kare-kare",
          whatIsIt: "Small red seeds that impart a bright orange-red color to dishes. Used to color kare-kare, pancit palabok and other dishes. Subtle earthy flavor.",
          howToUse: ["Steep in oil for atsuete oil", "Color kare-kare sauce", "Tint pancit palabok", "Add to rice dishes"],
          pairsWith: ["Oil", "Oxtail", "Shrimp", "Rice noodles", "Peanuts"],
          storage: "Dry pantry. Keeps for years.",
          substitutes: "Annatto powder or paprika for color.",
          proTip: "Steep in warm oil, then strain out seeds. The oil keeps for months."
        }
      ]
    }
  },
  laos: {
    name: "Laos",
    flag: "🇱🇦",
    categories: {
      "Sauces & Condiments": [
        {
          id: "la-padaek",
          name: "Padaek (Lao Fish Sauce)",
          native: "ປາແດກ",
          pronunciation: "bpah-daek",
          quickDesc: "Chunky fermented fish sauce with intense umami",
          whatIsIt: "A thick, pungent fermented fish sauce with visible fish chunks. Much stronger and funkier than Thai fish sauce. Used as a base seasoning across Lao cooking.",
          howToUse: ["Season larb and tam mak hoong", "Add to jeow dipping sauces", "Use in soups and stews", "Flavor stir-fries"],
          pairsWith: ["Sticky rice", "Lime", "Chilies", "Herbs", "Galangal"],
          storage: "Room temperature. Keeps indefinitely.",
          substitutes: "Thai fish sauce (less complex but works).",
          proTip: "The liquid is used for cooking; the fish chunks add texture to some dishes."
        },
        {
          id: "la-jeow",
          name: "Jeow (Chili Dipping Sauce)",
          native: "ແຈ່ວ",
          pronunciation: "jaew",
          quickDesc: "Roasted chili sauce for sticky rice",
          whatIsIt: "A family of Lao dipping sauces made from roasted chilies, garlic, and often tomatoes or eggplant. Served with sticky rice and grilled meats.",
          howToUse: ["Dip sticky rice", "Serve with grilled meats", "Accompany vegetables", "Add to noodle dishes"],
          pairsWith: ["Sticky rice", "Grilled chicken", "Vegetables", "Fish", "Pork"],
          storage: "Refrigerate. Best within a week.",
          substitutes: "Thai nam prik or sambal.",
          proTip: "Jeow bong (made with dried buffalo skin) is a famous Luang Prabang specialty."
        },
        {
          id: "la-fish-paste",
          name: "Fermented Fish Paste",
          native: "ປາຮົມ",
          pronunciation: "bpah-hom",
          quickDesc: "Intense preserved fish for traditional dishes",
          whatIsIt: "A thick paste of fermented freshwater fish, even more intense than padaek. Used sparingly to add deep umami to traditional dishes.",
          howToUse: ["Add to or ping (grilled parcels)", "Season soups", "Flavor larb", "Mix into dipping sauces"],
          pairsWith: ["Galangal", "Lemongrass", "Kaffir lime", "Herbs", "Chilies"],
          storage: "Refrigerate. Keeps for months.",
          substitutes: "Padaek or shrimp paste.",
          proTip: "A little goes a very long way, so use it sparingly."
        }
      ],
      "Produce": [
        {
          id: "la-galangal",
          name: "Galangal",
          native: "ຂ່າ",
          pronunciation: "kah",
          quickDesc: "Piney, citrusy rhizome for soups and larb",
          whatIsIt: "A rhizome related to ginger but with a sharp, piney, citrusy flavor. A key flavor in tom yum-style soups and larb. Harder and more fibrous than ginger.",
          howToUse: ["Slice for soups (not eaten, just flavoring)", "Pound into larb", "Add to curry pastes", "Include in grilled fish parcels"],
          pairsWith: ["Lemongrass", "Kaffir lime", "Fish sauce", "Chilies", "Chicken"],
          storage: "Refrigerate up to 3 weeks. Freezes well.",
          substitutes: "Nothing replicates it exactly. Ginger tastes different but is sometimes used.",
          proTip: "Slice thinly for soups. It's too fibrous to eat, but it infuses the broth with flavor."
        },
        {
          id: "la-dill",
          name: "Lao Dill (Pak Si)",
          native: "ຜັກຊີ",
          pronunciation: "pak see",
          quickDesc: "Distinctive herb for mok and fish dishes",
          whatIsIt: "Dill is used much more in Lao cuisine than other Southeast Asian cuisines. It goes into fish dishes and mok (steamed parcels).",
          howToUse: ["Add to mok (steamed banana leaf parcels)", "Season fish soups", "Include in larb", "Garnish salads"],
          pairsWith: ["Fish", "Coconut milk", "Lemongrass", "Galangal", "Chilies"],
          storage: "Refrigerate wrapped in damp paper towel. Use within a week.",
          substitutes: "No substitute for the unique dill flavor in Lao cooking.",
          proTip: "Lao cooks use much more dill than you'd expect, so be generous."
        },
        {
          id: "la-mint",
          name: "Lao Mint",
          native: "ຫອມລັບ",
          pronunciation: "hom lap",
          quickDesc: "Fresh mint for larb",
          whatIsIt: "Fresh mint is indispensable in Lao cuisine, especially in larb and salads. Provides a cooling contrast to spicy dishes.",
          howToUse: ["Mix into larb", "Add to salads", "Garnish soups", "Serve on herb plates"],
          pairsWith: ["Lime", "Fish sauce", "Chilies", "Ground meat", "Sticky rice"],
          storage: "Store stems in water, cover loosely. Use within a week.",
          substitutes: "Any fresh spearmint variety.",
          proTip: "Tear leaves rather than chopping to release more aroma."
        },
        {
          id: "la-long-beans",
          name: "Long Beans",
          native: "ຖົ່ວຍາວ",
          pronunciation: "tua nyao",
          quickDesc: "Crunchy beans for tam mak hoong",
          whatIsIt: "Very long, thin green beans that stay crunchy when raw. Common in tam mak hoong (papaya salad) and served with sticky rice meals.",
          howToUse: ["Cut into tam mak hoong", "Serve raw with larb", "Stir-fry with pork", "Add to curries"],
          pairsWith: ["Papaya salad", "Sticky rice", "Fish sauce", "Chili", "Garlic"],
          storage: "Refrigerate up to a week.",
          substitutes: "Regular green beans (less crunchy when raw).",
          proTip: "Cut into 2-inch pieces for salad; they should stay crunchy."
        }
      ],
      "Noodles & Rice": [
        {
          id: "la-sticky-rice",
          name: "Lao Sticky Rice",
          native: "ເຂົ້າໜຽວ",
          pronunciation: "khao niao",
          quickDesc: "The staple food of Laos, eaten by hand",
          whatIsIt: "Glutinous sticky rice is the main staple food of Laos, eaten at nearly every meal. Steamed in a bamboo basket and served in a small lidded basket. Eaten by hand.",
          howToUse: ["Soak overnight, steam in bamboo basket", "Roll into balls to scoop up dishes", "Serve in a tip khao basket", "Eat with larb, jeow and grilled meats"],
          pairsWith: ["Larb", "Jeow", "Grilled chicken", "Papaya salad", "All Lao dishes"],
          storage: "Dry pantry. Keeps for years.",
          substitutes: "Thai sticky rice is identical.",
          proTip: "Must soak at least 4 hours, preferably overnight, before steaming."
        },
        {
          id: "la-khao-poon",
          name: "Khao Poon Noodles",
          native: "ເຂົ້າປຸ້ນ",
          pronunciation: "khao poon",
          quickDesc: "Fresh rice vermicelli for Lao noodle soup",
          whatIsIt: "Fresh, thin rice noodles similar to Thai kanom jeen. Served in nests topped with a rich, aromatic curry broth.",
          howToUse: ["Serve with khao poon curry broth", "Top with herbs and vegetables", "Add to soups", "Eat with coconut-based curries"],
          pairsWith: ["Coconut curry", "Banana blossom", "Bean sprouts", "Mint", "Long beans"],
          storage: "Refrigerate and use within 2-3 days.",
          substitutes: "Rice vermicelli or Thai kanom jeen.",
          proTip: "The noodle soup is served with a mountain of fresh vegetables and herbs."
        }
      ],
      "Pantry Staples": [
        {
          id: "la-toasted-rice",
          name: "Toasted Rice Powder",
          native: "ເຂົ້າຄົ່ວ",
          pronunciation: "khao khua",
          quickDesc: "Nutty toasted rice powder for larb",
          whatIsIt: "Sticky rice toasted until golden brown, then ground to a powder. It adds a nutty flavor and slight crunch to larb, and larb isn't complete without it.",
          howToUse: ["Sprinkle generously over larb", "Add to tam mak hoong", "Include in meat salads", "Mix into dipping sauces"],
          pairsWith: ["Ground meat", "Fish sauce", "Lime", "Mint", "Chilies"],
          storage: "Airtight container. Keeps for months.",
          substitutes: "Toast and grind your own sticky rice.",
          proTip: "Toast until deeply golden, almost brown, for the best nutty flavor."
        },
        {
          id: "la-dried-chilies",
          name: "Lao Dried Chilies",
          native: "ໝາກເຜັດແຫ້ງ",
          pronunciation: "mak pet haeng",
          quickDesc: "Hot dried chilies for jeow and larb",
          whatIsIt: "Small, very hot dried chilies roasted and ground for larb and jeow. Lao food tends to be quite spicy, and these chilies deliver the heat.",
          howToUse: ["Toast and grind for larb", "Make jeow dipping sauce", "Add to soups", "Season stir-fries"],
          pairsWith: ["Fish sauce", "Lime", "Garlic", "Shallots", "Herbs"],
          storage: "Airtight container. Keeps for months.",
          substitutes: "Thai dried chilies or árbol chilies.",
          proTip: "Toast in a dry pan until fragrant before grinding for best flavor."
        },
        {
          id: "la-bamboo-shoots",
          name: "Bamboo Shoots (No Mai)",
          native: "ໜໍ່ໄມ້",
          pronunciation: "nor mai",
          quickDesc: "Crunchy shoots for soups and salads",
          whatIsIt: "Fresh or fermented bamboo shoots are common in Lao cooking. Fresh shoots need cooking; fermented (sour) shoots are used in soups like kaeng no mai.",
          howToUse: ["Make kaeng no mai soup", "Add to stir-fries", "Include in or lam stew", "Pickle for sour flavor"],
          pairsWith: ["Pork", "Fish", "Padaek", "Chilies", "Herbs"],
          storage: "Fresh: refrigerate up to a week. Fermented: weeks in fridge.",
          substitutes: "Canned bamboo shoots (rinse well).",
          proTip: "Fermented bamboo shoots add a sour note to soups, so adjust the padaek accordingly."
        },
        {
          id: "la-kaffir-lime",
          name: "Kaffir Lime Leaves",
          native: "ໃບຂີ້ຫູດ",
          pronunciation: "bai kee hoot",
          quickDesc: "Citrusy leaves for soups and curries",
          whatIsIt: "Distinctive double-lobed leaves with an intense citrus aroma. Used in Lao soups and curries, either whole or very finely shredded.",
          howToUse: ["Add whole to soups and curries", "Shred very fine for larb", "Include in mok parcels", "Infuse into curry pastes"],
          pairsWith: ["Galangal", "Lemongrass", "Fish sauce", "Coconut milk", "Chicken"],
          storage: "Freeze for months. Refrigerate up to 2 weeks.",
          substitutes: "Lime zest (different but adds citrus note).",
          proTip: "Remove the center stem and slice the leaves hair-thin for salads."
        }
      ]
    }
  },

};
