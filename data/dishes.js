// Dishes by cuisine, then by region. A dish's id is its slugified name
// (#/d/china/mapo-tofu); its ingredients link to entries by name (see match() in app.js).
const DISHES = {
  china: {
    northern: [
      { name: "Jiaozi", native: "饺子", desc: "Boiled or pan-fried dumplings",
        ingredients: ["Dumpling wrappers", "Ground pork", "Napa cabbage", "Ginger", "Soy sauce", "Sesame oil"],
        steps: ["Mix pork with minced cabbage, ginger, soy sauce, sesame oil", "Place filling in wrapper, pleat edges", "Boil 6-8 min until floating, or pan-fry with water to steam"] , source: "https://www.ohmyfoodrecipes.com/boiled-dumplings/", sourceName: "Oh My Food Recipes" },
      { name: "Zhajiang Mian", native: "炸酱面", desc: "Noodles with meat sauce",
        ingredients: ["Wheat noodles", "Ground pork", "Sweet bean sauce", "Cucumber", "Scallions"],
        steps: ["Fry pork until browned, add sweet bean sauce and water", "Simmer until thick and glossy", "Serve over noodles with julienned cucumber and scallions"] },
      { name: "Lamb Skewers", native: "羊肉串", desc: "Cumin-spiced grilled lamb",
        ingredients: ["Lamb leg", "Cumin seeds", "Chili flakes", "Salt", "Sichuan peppercorn"],
        steps: ["Cube lamb into 1-inch pieces, thread onto skewers", "Grill over high heat, turning frequently", "Season with cumin, chili and salt while hot"] }
    ],
    sichuan: [
      { name: "Mapo Tofu", native: "麻婆豆腐", desc: "Tofu in numbing chili sauce",
        ingredients: ["Silken tofu", "Ground pork", "Doubanjiang", "Sichuan peppercorn", "Fermented black beans", "Scallions"],
        steps: ["Fry doubanjiang in oil until red, add pork and black beans", "Add broth and cubed tofu, simmer 5 min", "Thicken with cornstarch, top with ground Sichuan peppercorn"] , source: "https://thewoksoflife.com/ma-po-tofu-real-deal/", sourceName: "The Woks of Life" },
      { name: "Kung Pao Chicken", native: "宫保鸡丁", desc: "Spicy chicken with peanuts",
        ingredients: ["Chicken thigh", "Dried chilies", "Sichuan peppercorn", "Peanuts", "Chinkiang vinegar", "Soy sauce"],
        steps: ["Marinate diced chicken with soy, wine, cornstarch", "Fry chilies and peppercorns until fragrant", "Flash-fry chicken, add sauce (vinegar, soy, sugar), toss with peanuts"] , source: "https://redhousespice.com/kung-pao-chicken/", sourceName: "Red House Spice" },
      { name: "Dan Dan Noodles", native: "担担面", desc: "Spicy sesame noodles",
        ingredients: ["Thin wheat noodles", "Sesame paste", "Chili oil", "Sichuan preserved vegetable", "Ground pork"],
        steps: ["Mix sauce: sesame paste, chili oil, soy sauce, vinegar", "Fry pork with preserved vegetable until crispy", "Toss noodles with sauce, top with pork"] , source: "https://thewoksoflife.com/dan-dan-noodles/", sourceName: "The Woks of Life" }
    ],
    cantonese: [
      { name: "Char Siu", native: "叉烧", desc: "Honey-glazed BBQ pork",
        ingredients: ["Pork shoulder", "Hoisin sauce", "Honey", "Five-spice", "Red fermented tofu", "Soy sauce"],
        steps: ["Marinate pork strips overnight in sauce mixture", "Roast at high heat, basting with honey glaze", "Rest 10 min, slice against the grain"] , source: "https://thewoksoflife.com/chinese-bbq-pork-cha-siu/", sourceName: "The Woks of Life" },
      { name: "Steamed Fish", native: "清蒸鱼", desc: "Whole fish with ginger",
        ingredients: ["Whole sea bass or snapper", "Ginger", "Scallions", "Light soy sauce", "Sesame oil"],
        steps: ["Score fish, top with ginger slices, steam 8-10 min", "Discard ginger, top with fresh scallion slivers", "Pour hot oil over fish, drizzle with soy sauce"] },
      { name: "Wonton Noodles", native: "云吞面", desc: "Shrimp wontons in broth",
        ingredients: ["Wonton wrappers", "Shrimp", "Ground pork", "Egg noodles", "Chicken broth"],
        steps: ["Mix shrimp and pork filling with sesame oil and white pepper", "Wrap in wontons, boil until floating", "Serve in clear broth over thin egg noodles"] , source: "https://thewoksoflife.com/cantonese-wonton-noodle-soup/", sourceName: "The Woks of Life" }
    ],
    hunan: [
      { name: "Steamed Fish Head", native: "剁椒鱼头", desc: "Fish head with fermented chilies",
        ingredients: ["Fish head (bighead carp)", "Duo jiao (fermented chilies)", "Ginger", "Garlic", "Scallions"],
        steps: ["Score fish head, place on plate with ginger", "Cover with fermented chilies and garlic", "Steam 12-15 min, garnish with scallions and hot oil"] }
    ],
    jiangsu: [
      { name: "Red-Braised Pork", native: "红烧肉", desc: "Caramelized pork belly",
        ingredients: ["Pork belly", "Rock sugar", "Dark soy sauce", "Shaoxing wine", "Star anise", "Ginger"],
        steps: ["Blanch pork belly, cut into 1.5-inch cubes", "Caramelize rock sugar, add pork to coat", "Add wine, soy, spices, braise 1.5-2 hours until tender"] },
      { name: "Lion's Head", native: "狮子头", desc: "Giant pork meatballs",
        ingredients: ["Ground pork (fatty)", "Water chestnuts", "Ginger", "Napa cabbage", "Light soy sauce"],
        steps: ["Mix pork with minced water chestnuts and seasonings", "Form into large balls, pan-fry until golden", "Braise in broth with cabbage for 45 min"] }
    ]
  },
  japan: {
    kanto: [
      { name: "Tonkatsu", native: "豚カツ", desc: "Crispy pork cutlet",
        ingredients: ["Pork loin", "Panko breadcrumbs", "Flour", "Egg", "Cabbage", "Tonkatsu sauce"],
        steps: ["Pound pork thin, season with salt and pepper", "Dredge in flour, egg, then panko", "Deep fry at 170°C until golden, rest 5 min, slice"] },
      { name: "Soba", native: "蕎麦", desc: "Buckwheat noodles",
        ingredients: ["Dried soba noodles", "Dashi", "Soy sauce", "Mirin", "Scallions", "Nori"],
        steps: ["Cook soba, rinse in cold water until firm", "Make tsuyu: simmer dashi, soy, mirin", "Serve cold with dipping sauce, or hot in broth"] }
    ],
    kansai: [
      { name: "Okonomiyaki", native: "お好み焼き", desc: "Savory pancake",
        ingredients: ["Cabbage", "Flour", "Eggs", "Dashi", "Pork belly", "Okonomiyaki sauce", "Kewpie mayo"],
        steps: ["Mix shredded cabbage with batter (flour, egg, dashi)", "Cook on griddle, top with pork slices", "Flip when set, cook until done, top with sauce and mayo"] , source: "https://www.justonecookbook.com/okonomiyaki/", sourceName: "Just One Cookbook" },
      { name: "Kitsune Udon", native: "きつねうどん", desc: "Udon with sweet tofu",
        ingredients: ["Udon noodles", "Aburaage (fried tofu)", "Dashi", "Soy sauce", "Mirin", "Scallions"],
        steps: ["Simmer aburaage in sweet soy mixture until absorbed", "Make broth with dashi, soy, mirin", "Serve udon in broth topped with sweet tofu"] }
    ],
    kyushu: [
      { name: "Hakata Ramen", native: "博多ラーメン", desc: "Pork bone ramen",
        ingredients: ["Pork bones", "Thin ramen noodles", "Chashu pork", "Soft-boiled egg", "Beni shoga (red pickled ginger)", "Sesame"],
        steps: ["Boil pork bones 12+ hours for milky tonkotsu broth", "Cook noodles firm (kata-men style)", "Top with chashu, egg, ginger, sesame, scallions"] }
    ],
    hokkaido: [
      { name: "Miso Ramen", native: "味噌ラーメン", desc: "Miso butter ramen",
        ingredients: ["Chicken/pork broth", "Miso paste", "Ramen noodles", "Corn", "Butter", "Chashu", "Bean sprouts"],
        steps: ["Stir-fry garlic and ginger, add broth and miso", "Cook noodles, add to bowl with broth", "Top with corn, butter, chashu, bean sprouts"] }
    ],
    okinawa: [
      { name: "Goya Champuru", native: "ゴーヤチャンプル", desc: "Bitter melon stir-fry",
        ingredients: ["Bitter melon", "Firm tofu", "Eggs", "Spam or pork belly", "Soy sauce", "Dashi"],
        steps: ["Slice bitter melon thin, salt to reduce bitterness", "Stir-fry tofu and pork until golden", "Add bitter melon, scramble in eggs, season with soy"] , source: "https://www.justonecookbook.com/goya-champuru/", sourceName: "Just One Cookbook" }
    ]
  },
  korea: {
    seoul: [
      { name: "Bulgogi", native: "불고기", desc: "Marinated grilled beef",
        ingredients: ["Beef sirloin", "Soy sauce", "Asian pear", "Sesame oil", "Garlic", "Ginger", "Scallions"],
        steps: ["Slice beef thin, marinate 2+ hours in soy, pear puree, garlic, sesame", "Grill or pan-fry over high heat quickly", "Serve with rice and lettuce wraps"] , source: "https://www.10000recipe.com/recipe/6882924", sourceName: "만개의레시피 (10000recipe)" },
      { name: "Japchae", native: "잡채", desc: "Glass noodle stir-fry",
        ingredients: ["Sweet potato noodles", "Beef", "Spinach", "Carrots", "Mushrooms", "Soy sauce", "Sesame oil"],
        steps: ["Cook noodles, rinse and toss with sesame oil", "Stir-fry each vegetable and beef separately", "Combine all with soy sauce and sesame oil, serve warm or cold"] },
      { name: "Samgyetang", native: "삼계탕", desc: "Ginseng chicken soup",
        ingredients: ["Cornish hen", "Sweet rice", "Ginseng", "Jujubes", "Garlic", "Ginger"],
        steps: ["Stuff small chicken with soaked sweet rice, ginseng, jujubes", "Simmer in water 1-1.5 hours until tender", "Season with salt and pepper at table"] }
    ],
    jeolla: [
      { name: "Bibimbap", native: "비빔밥", desc: "Mixed rice bowl",
        ingredients: ["Rice", "Gochujang", "Sesame oil", "Beef", "Spinach", "Bean sprouts", "Carrots", "Egg"],
        steps: ["Prepare each vegetable namul (seasoned with sesame)", "Arrange over hot rice with beef and fried egg", "Add gochujang and sesame oil, mix thoroughly before eating"] , source: "https://www.10000recipe.com/recipe/6828718", sourceName: "만개의레시피 (10000recipe)" },
      { name: "Kimchi Jjigae", native: "김치찌개", desc: "Kimchi stew",
        ingredients: ["Aged kimchi", "Pork belly", "Tofu", "Gochugaru", "Garlic", "Scallions"],
        steps: ["Sauté pork and kimchi until fragrant", "Add water and gochugaru, simmer 20 min", "Add tofu cubes, cook 5 more min, garnish with scallions"] , source: "https://www.10000recipe.com/recipe/6835810", sourceName: "만개의레시피 (10000recipe)" }
    ],
    gyeongsang: [
      { name: "Dwaeji Gukbap", native: "돼지국밥", desc: "Pork soup with rice",
        ingredients: ["Pork bones and meat", "Rice", "Scallions", "Garlic", "Saeujeot (salted shrimp)"],
        steps: ["Boil pork bones and meat for hours until milky broth", "Slice meat thin, serve in broth over rice", "Season at table with saeujeot, scallions, chili flakes"] , source: "https://www.10000recipe.com/recipe/6859285", sourceName: "만개의레시피 (10000recipe)" }
    ]
  },
  thailand: {
    central: [
      { name: "Pad Thai", native: "ผัดไทย", desc: "Stir-fried rice noodles",
        ingredients: ["Rice stick noodles", "Tamarind paste", "Fish sauce", "Palm sugar", "Eggs", "Shrimp", "Bean sprouts", "Peanuts"],
        steps: ["Soak noodles until pliable, make sauce (tamarind, fish sauce, sugar)", "Stir-fry shrimp and tofu, push aside, scramble eggs", "Add noodles and sauce, toss with bean sprouts, serve with peanuts and lime"] , source: "https://cookpad.com/th/search/ผัดไทย", sourceName: "Cookpad Thailand" },
      { name: "Green Curry", native: "แกงเขียวหวาน", desc: "Coconut curry",
        ingredients: ["Green curry paste", "Coconut milk", "Chicken", "Thai eggplant", "Thai basil", "Fish sauce", "Palm sugar"],
        steps: ["Fry curry paste in coconut cream until fragrant and oil separates", "Add chicken and remaining coconut milk, simmer", "Add eggplant, season with fish sauce and sugar, finish with basil"] , source: "https://cookpad.com/th/search/แกงเขียวหวาน", sourceName: "Cookpad Thailand" },
      { name: "Tom Yum Goong", native: "ต้มยำกุ้ง", desc: "Hot and sour shrimp soup",
        ingredients: ["Shrimp", "Lemongrass", "Galangal", "Kaffir lime leaves", "Thai chilies", "Fish sauce", "Lime juice", "Mushrooms"],
        steps: ["Simmer aromatics (lemongrass, galangal, lime leaves) in broth", "Add mushrooms and shrimp, cook until shrimp pink", "Season with fish sauce, lime juice, chilies; do not boil after adding lime"] }
    ],
    northern: [
      { name: "Khao Soi", native: "ข้าวซอย", desc: "Curry noodle soup",
        ingredients: ["Egg noodles", "Coconut milk", "Red curry paste", "Chicken", "Pickled mustard greens", "Shallots", "Lime"],
        steps: ["Fry curry paste in coconut cream, add remaining milk and broth", "Simmer chicken until cooked through", "Serve over noodles, top with crispy noodles, pickled greens, shallots, lime"] , source: "https://hot-thai-kitchen.com/kao-soi/", sourceName: "Hot Thai Kitchen" }
    ],
    isaan: [
      { name: "Som Tam", native: "ส้มตำ", desc: "Green papaya salad",
        ingredients: ["Green papaya", "Thai chilies", "Garlic", "Fish sauce", "Lime juice", "Palm sugar", "Tomatoes", "Dried shrimp"],
        steps: ["Pound chilies and garlic in mortar", "Add shredded papaya, bruise with pestle", "Season with fish sauce, lime, sugar to balance sour, salty, sweet, spicy"] , source: "https://cookpad.com/th/search/ส้มตำ", sourceName: "Cookpad Thailand" },
      { name: "Larb", native: "ลาบ", desc: "Minced meat salad",
        ingredients: ["Ground pork or chicken", "Fish sauce", "Lime juice", "Toasted rice powder", "Thai chilies", "Mint", "Shallots"],
        steps: ["Cook meat in small amount of water until just done", "Dress with fish sauce, lime juice, chilies", "Toss with rice powder, herbs, shallots; serve with cabbage and sticky rice"] , source: "https://cookpad.com/th/search/ลาบ", sourceName: "Cookpad Thailand" }
    ],
    southern: [
      { name: "Massaman Curry", native: "แกงมัสมั่น", desc: "Rich peanut curry",
        ingredients: ["Massaman paste", "Coconut milk", "Beef or chicken", "Potatoes", "Peanuts", "Tamarind", "Palm sugar"],
        steps: ["Fry paste in coconut cream, add meat and brown", "Add coconut milk, potatoes, simmer until tender", "Season with tamarind, fish sauce, sugar, add roasted peanuts"] , source: "https://cookpad.com/th/search/แกงมัสมั่น", sourceName: "Cookpad Thailand" }
    ]
  },
  vietnam: {
    northern: [
      { name: "Pho Bo", native: "Phở Bò", desc: "Beef noodle soup",
        ingredients: ["Beef bones", "Phở noodles", "Beef slices", "Star anise", "Cinnamon", "Ginger", "Fish sauce", "Bean sprouts", "Herbs"],
        steps: ["Char ginger and onion, simmer with bones and spices 6+ hours", "Season broth with fish sauce and rock sugar", "Pour boiling broth over noodles and raw beef slices, serve with herbs"] },
      { name: "Bun Cha", native: "Bún Chả", desc: "Grilled pork with noodles",
        ingredients: ["Pork belly", "Pork patties", "Rice vermicelli", "Fish sauce", "Sugar", "Garlic", "Herbs", "Pickled papaya"],
        steps: ["Marinate pork in fish sauce, sugar, garlic; form patties", "Grill over charcoal until caramelized", "Serve with noodles, herbs and dipping sauce (nuoc cham)"] , source: "https://delightfulplate.com/vietnamese-grilled-pork-meatballs-noodles-bun-cha/", sourceName: "Delightful Plate" }
    ],
    central: [
      { name: "Bun Bo Hue", native: "Bún Bò Huế", desc: "Spicy beef noodle soup",
        ingredients: ["Beef shank", "Pork knuckle", "Lemongrass", "Shrimp paste", "Chili oil", "Thick rice noodles", "Banana blossom"],
        steps: ["Simmer beef and pork with lemongrass for hours", "Season with shrimp paste, chili oil, fish sauce", "Serve with thick noodles, meat slices, banana blossom, herbs"] , source: "https://www.hungryhuy.com/bun-bo-hue-recipe/", sourceName: "Hungry Huy" },
      { name: "Banh Xeo", native: "Bánh Xèo", desc: "Crispy crepe",
        ingredients: ["Rice flour", "Turmeric", "Coconut milk", "Pork", "Shrimp", "Bean sprouts", "Lettuce", "Herbs"],
        steps: ["Make batter with rice flour, turmeric, coconut milk", "Pour thin layer in hot pan, add pork, shrimp, sprouts", "Fold when crispy, wrap in lettuce with herbs, dip in nuoc cham"] , source: "https://www.hungryhuy.com/banh-xeo-savory-vietnamese-crepes/", sourceName: "Hungry Huy" }
    ],
    southern: [
      { name: "Com Tam", native: "Cơm Tấm", desc: "Broken rice plate",
        ingredients: ["Broken rice", "Pork chop", "Fish sauce", "Lemongrass", "Garlic", "Egg", "Pickled vegetables"],
        steps: ["Marinate pork chop in fish sauce, lemongrass, garlic", "Grill until charred and caramelized", "Serve over broken rice with fried egg, pickles, scallion oil"] , source: "https://www.hungryhuy.com/vietnamese-pork-chops/", sourceName: "Hungry Huy" },
      { name: "Goi Cuon", native: "Gỏi Cuốn", desc: "Fresh spring rolls",
        ingredients: ["Rice paper", "Rice vermicelli", "Shrimp", "Pork", "Lettuce", "Herbs", "Peanut sauce"],
        steps: ["Dip rice paper briefly in warm water until pliable", "Layer lettuce, herbs, noodles, meat, shrimp", "Roll tightly, serve with peanut hoisin dipping sauce"] , source: "https://www.hungryhuy.com/how-to-make-goi-cuon-vietnamese-spring-rolls/", sourceName: "Hungry Huy" }
    ]
  },
  india: {
    north: [
      { name: "Butter Chicken", native: "मुर्ग़ मखनी", desc: "Creamy tomato curry",
        ingredients: ["Chicken", "Yogurt", "Garam masala", "Tomatoes", "Cream", "Butter", "Kasuri methi"],
        steps: ["Marinate chicken in yogurt and spices, grill or broil until charred", "Make sauce: cook tomatoes with spices, blend smooth, add cream and butter", "Add chicken to sauce, simmer, finish with kasuri methi"] , source: "https://www.indianhealthyrecipes.com/butter-chicken/", sourceName: "Swasthi's Recipes" },
      { name: "Dal Makhani", native: "दाल मखनी", desc: "Creamy black lentils",
        ingredients: ["Black urad dal", "Kidney beans", "Tomatoes", "Cream", "Butter", "Ginger", "Garlic", "Garam masala"],
        steps: ["Soak dal overnight, pressure cook until very soft", "Make tadka with butter, ginger, garlic, tomatoes", "Combine, simmer hours on low, finish with cream and butter"] , source: "https://www.cookwithmanali.com/dal-makhani/", sourceName: "Cook With Manali" },
      { name: "Biryani", native: "बिरयानी", desc: "Layered spiced rice",
        ingredients: ["Basmati rice", "Lamb or chicken", "Yogurt", "Biryani masala", "Saffron", "Fried onions", "Ghee", "Mint"],
        steps: ["Marinate meat in yogurt and spices for hours", "Par-cook rice with whole spices until 70% done", "Layer meat and rice, seal pot, cook on low heat (dum) 30-40 min"] , source: "https://www.indianhealthyrecipes.com/hyderabadi-biryani-recipe/", sourceName: "Indian Healthy Recipes" }
    ],
    south: [
      { name: "Dosa", native: "தோசை", desc: "Crispy fermented crepe",
        ingredients: ["Rice", "Urad dal", "Fenugreek seeds", "Ghee", "Potato filling (for masala dosa)"],
        steps: ["Soak rice and dal separately, grind to smooth batter", "Ferment overnight until doubled and sour", "Spread thin on hot griddle, drizzle oil, cook until crispy"] , source: "https://www.daringgourmet.com/dosa-south-indian-crepes/", sourceName: "The Daring Gourmet" },
      { name: "Sambar", native: "சாம்பார்", desc: "Tamarind lentil stew",
        ingredients: ["Toor dal", "Tamarind", "Sambar powder", "Vegetables", "Curry leaves", "Mustard seeds"],
        steps: ["Cook dal until soft, add tamarind water and vegetables", "Add sambar powder, simmer until vegetables tender", "Temper with mustard seeds, curry leaves, dried chilies"] , source: "https://glebekitchen.com/sambar-south-indian-lentil-and-vegetable-stew/", sourceName: "Glebe Kitchen" }
    ],
    east: [
      { name: "Machher Jhol", native: "মাছের ঝোল", desc: "Bengali fish curry",
        ingredients: ["Rohu or carp", "Mustard oil", "Turmeric", "Cumin", "Nigella seeds", "Green chilies", "Tomatoes"],
        steps: ["Marinate fish in turmeric and salt, lightly fry in mustard oil", "Make sauce with cumin, nigella, turmeric, tomatoes", "Add fish and water, simmer until fish is cooked through"] , source: "https://www.cookeatworld.com/bengali-fish-curry/", sourceName: "Cook Eat World" }
    ],
    west: [
      { name: "Pav Bhaji", native: "पाव भाजी", desc: "Mashed vegetable curry with bread",
        ingredients: ["Mixed vegetables", "Pav bhaji masala", "Butter", "Onions", "Tomatoes", "Pav bread"],
        steps: ["Boil and mash vegetables (potato, cauliflower, peas)", "Sauté onions and tomatoes, add masala and vegetables", "Mash everything together with lots of butter, serve with toasted buttered pav"] , source: "https://www.indianhealthyrecipes.com/pav-bhaji-recipe-how-to-make-pav-bhaji-step-by-step-pictures/", sourceName: "Swasthi's Recipes" }
    ],
    coastal: [
      { name: "Goan Fish Curry", native: "Goan Fish Curry", desc: "Coconut fish curry",
        ingredients: ["Firm white fish", "Coconut", "Tamarind", "Kashmiri chilies", "Coriander", "Cumin", "Kokum"],
        steps: ["Grind coconut with spices to make masala paste", "Cook paste in oil, add tamarind water and kokum", "Add fish pieces, simmer gently until fish is just cooked"] , source: "https://www.indianhealthyrecipes.com/goan-fish-curry/", sourceName: "Indian Healthy Recipes" },
      { name: "Vindaloo", native: "Vindaloo", desc: "Spicy vinegar curry",
        ingredients: ["Pork", "Kashmiri chilies", "Vinegar", "Garlic", "Ginger", "Cumin", "Mustard seeds"],
        steps: ["Make paste with chilies, vinegar, garlic, ginger, spices", "Marinate pork overnight in paste", "Cook pork in marinade with added water until tender and sauce thickens"] , source: "https://www.indianhealthyrecipes.com/pork-vindaloo/", sourceName: "Indian Healthy Recipes" }
    ]
  },
  taiwan: {
    northern: [
      { name: "Lǔ Ròu Fàn", native: "滷肉飯", desc: "Braised pork rice bowl",
        ingredients: ["Pork belly", "Shallots", "Soy sauce", "Five spice", "Rice wine", "Rock sugar"],
        steps: ["Dice pork belly small, fry until fat renders", "Caramelize shallots, add soy sauce and spices", "Braise 1-2 hours until rich and glossy, serve over rice"], source: "https://icook.tw/categories/216", sourceName: "愛料理 (iCook Taiwan)" },
      { name: "Oyster Vermicelli", native: "蚵仔麵線", desc: "Oyster and intestine noodle soup",
        ingredients: ["Thin wheat vermicelli", "Oysters", "Pork intestines", "Bonito stock", "Black vinegar", "Cilantro"],
        steps: ["Simmer vermicelli in bonito broth until soft and gluey", "Poach oysters briefly, add intestines", "Serve with black vinegar, chili and cilantro"], source: "https://icook.tw/search/蚵仔麵線", sourceName: "愛料理 (iCook Taiwan)" },
      { name: "Pepper Buns", native: "胡椒餅", desc: "Crispy baked pork buns",
        ingredients: ["Bread dough", "Ground pork", "Scallions", "Black pepper", "Sesame seeds", "Five spice"],
        steps: ["Make yeasted dough, fill with peppered pork and scallion", "Coat with sesame seeds", "Bake in tandoor-style oven until crispy"], source: "https://icook.tw/categories/216", sourceName: "愛料理 (iCook Taiwan)" }
    ],
    southern: [
      { name: "Milkfish Congee", native: "虱目魚粥", desc: "Tainan-style fish rice porridge",
        ingredients: ["Milkfish belly", "Rice porridge", "Ginger", "Celery", "Fried shallots", "White pepper"],
        steps: ["Make thin rice porridge with fish stock", "Poach milkfish belly until just cooked", "Top with ginger, celery, fried shallots"], source: "https://icook.tw/search/虱目魚粥", sourceName: "愛料理 (iCook Taiwan)" },
      { name: "Coffin Bread", native: "棺材板", desc: "Thick toast with creamy filling",
        ingredients: ["Thick white bread", "Chicken", "Seafood", "Milk", "Butter", "Peas", "Carrots"],
        steps: ["Deep-fry thick bread slice, hollow out center", "Make creamy chicken and seafood filling", "Fill bread box, replace lid"], source: "https://icook.tw/search/棺材板", sourceName: "愛料理 (iCook Taiwan)" }
    ]
  },
  philippines: {
    luzon: [
      { name: "Chicken Adobo", native: "Adobong Manok", desc: "Braised chicken in vinegar and soy sauce",
        ingredients: ["Chicken pieces", "Soy sauce", "Cane vinegar", "Garlic", "Bay leaves", "Black peppercorns", "Rice"],
        steps: ["Combine chicken, soy sauce, vinegar, crushed garlic, bay leaves and peppercorns in a pot", "Bring to a boil, then simmer covered for 30 minutes until chicken is tender", "Uncover and reduce sauce until thick and glossy, serve over steamed rice"], source: "https://panlasangpinoy.com/chicken-adobo/", sourceName: "Panlasang Pinoy" },
      { name: "Sinigang na Baboy", native: "Sinigang", desc: "Sour tamarind pork soup",
        ingredients: ["Pork ribs", "Tamarind paste", "Tomatoes", "Onion", "Kangkong", "Long beans", "Radish", "Fish sauce"],
        steps: ["Boil pork ribs with onion and tomatoes until tender, skimming scum", "Add tamarind paste, radish and long beans; simmer until vegetables are cooked", "Add kangkong last, season with fish sauce, serve with steamed rice"], source: "https://panlasangpinoy.com/sinigang-na-baboy/", sourceName: "Panlasang Pinoy" },
      { name: "Kare-Kare", native: "Kare-Kare", desc: "Oxtail peanut stew",
        ingredients: ["Oxtail", "Tripe", "Peanut butter", "Annatto seeds", "Eggplant", "Banana blossom", "Long beans", "Bagoong"],
        steps: ["Simmer oxtail and tripe for 2-3 hours until very tender", "Make sauce with peanut butter, toasted rice flour and annatto water", "Add vegetables, simmer until tender, serve with bagoong (shrimp paste) on the side"], source: "https://panlasangpinoy.com/kare-kare/", sourceName: "Panlasang Pinoy" }
    ],
    visayas: [
      { name: "Lechon Kawali", native: "Lechon Kawali", desc: "Crispy deep-fried pork belly",
        ingredients: ["Pork belly", "Bay leaves", "Peppercorns", "Salt", "Garlic", "Soy sauce", "Vinegar dipping sauce"],
        steps: ["Boil pork belly with bay leaves, peppercorns and salt until tender", "Dry thoroughly (refrigerate uncovered overnight for best results)", "Deep-fry until golden and crackling-crisp, serve with spiced vinegar dip"], source: "https://panlasangpinoy.com/lechon-kawali/", sourceName: "Panlasang Pinoy" },
      { name: "La Paz Batchoy", native: "Batchoy", desc: "Noodle soup with pork offal",
        ingredients: ["Pork loin", "Pork liver", "Miki noodles", "Pork broth", "Garlic", "Chicharron", "Scallions", "Egg"],
        steps: ["Make rich pork broth, slice pork loin and liver thin", "Cook miki noodles in broth, add sliced pork and liver", "Top with crushed chicharron, fried garlic, scallions and raw egg"], source: "https://panlasangpinoy.com/batchoy/", sourceName: "Panlasang Pinoy" },
      { name: "Chicken Inasal", native: "Inasal", desc: "Grilled chicken with annatto and lemongrass",
        ingredients: ["Chicken", "Annatto oil", "Lemongrass", "Calamansi", "Garlic", "Ginger", "Vinegar", "Sugar"],
        steps: ["Marinate chicken in annatto oil, calamansi, lemongrass, garlic, ginger and vinegar", "Grill over charcoal, basting constantly with annatto-butter mixture", "Serve with garlic rice, vinegar dip and chicken oil drizzle"], source: "https://panlasangpinoy.com/chicken-inasal/", sourceName: "Panlasang Pinoy" }
    ],
    mindanao: [
      { name: "Beef Tapa", native: "Tapang Baka", desc: "Cured dried beef strips",
        ingredients: ["Beef sirloin", "Soy sauce", "Calamansi", "Garlic", "Sugar", "Black pepper", "Vinegar dip", "Garlic rice", "Egg"],
        steps: ["Slice beef thin, marinate overnight in soy sauce, calamansi, garlic, sugar and pepper", "Pan-fry in oil until caramelized and slightly crispy at edges", "Serve as 'tapsilog': tapa + sinangag (garlic fried rice) + itlog (fried egg)"], source: "https://panlasangpinoy.com/beef-tapa/", sourceName: "Panlasang Pinoy" },
      { name: "Satti", native: "Satti", desc: "Grilled meat skewers with spicy sauce",
        ingredients: ["Chicken or beef", "Satti sauce (spicy coconut)", "Coconut milk", "Chili", "Turmeric", "Garlic", "Rice cubes"],
        steps: ["Skewer marinated chicken or beef pieces on bamboo sticks", "Grill over charcoal until charred and cooked through", "Serve with spicy coconut satti sauce and pressed rice cubes (puso)"], source: "https://sarapdiaries.com/satti-recipe/", sourceName: "Sarap Diaries" }
    ]
  },
  laos: {
    vientiane: [
      { name: "Laab", native: "ລາບ", desc: "Minced meat salad with herbs and toasted rice",
        ingredients: ["Minced pork or chicken", "Fish sauce", "Lime juice", "Toasted rice powder", "Shallots", "Mint", "Cilantro", "Dried chili flakes"],
        steps: ["Cook minced meat in a dry pan with a splash of water until just done", "Toss with fish sauce, lime juice, toasted rice powder, sliced shallots and chili", "Fold in fresh mint and cilantro, serve at room temperature with sticky rice"], source: "https://hot-thai-kitchen.com/laab-moo/", sourceName: "Hot Thai Kitchen" },
      { name: "Tam Mak Hoong", native: "ຕຳໝາກຫຸ່ງ", desc: "Spicy green papaya salad",
        ingredients: ["Green papaya", "Cherry tomatoes", "Long beans", "Padaek", "Lime", "Garlic", "Chilies", "Palm sugar"],
        steps: ["Shred green papaya, cut long beans and tomatoes", "Pound garlic and chilies in a mortar, add padaek and palm sugar", "Add papaya and vegetables, pound gently to bruise and mix, finish with lime"], source: "https://hot-thai-kitchen.com/lao-papaya-salad/", sourceName: "Hot Thai Kitchen" },
      { name: "Khao Piak Sen", native: "ເຂົ້າປຽກເສັ້ນ", desc: "Lao chicken noodle soup",
        ingredients: ["Chicken", "Tapioca-rice noodles", "Lemongrass", "Galangal", "Garlic", "Fish sauce", "Cilantro", "Crispy shallots"],
        steps: ["Simmer whole chicken with lemongrass, galangal and garlic until tender", "Shred chicken, strain broth and season with fish sauce", "Cook fresh noodles in broth, top with shredded chicken, cilantro and crispy shallots"], source: "https://cookingwithlane.com/khao-piak-sen-lao-chicken-noodle-soup/", sourceName: "Cooking With Lane" }
    ],
    luang_prabang: [
      { name: "Or Lam", native: "ເອາະຫລາມ", desc: "Luang Prabang stew with lao pepperwood",
        ingredients: ["Buffalo or beef", "Eggplant", "Long beans", "Lemongrass", "Dill", "Chili pepperwood (sakhan)", "Padaek", "Sticky rice"],
        steps: ["Stew meat low and slow with lemongrass and padaek until very tender", "Add eggplant, long beans and dill in stages as each cooks differently", "Thicken with mashed sticky rice, finish with sakhan (pepperwood) for numbing heat"], source: "https://www.saengskitchen.com/laorecipes/orlam", sourceName: "Saeng's Kitchen" },
      { name: "Ping Kai", native: "ປີ້ງໄກ່", desc: "Lao-style grilled chicken",
        ingredients: ["Whole chicken", "Lemongrass", "Garlic", "Fish sauce", "Galangal", "Turmeric", "Cilantro root", "Sticky rice"],
        steps: ["Pound lemongrass, garlic, galangal, cilantro root and turmeric into a paste", "Flatten chicken, marinate in paste with fish sauce for several hours", "Grill slowly over low charcoal, basting with marinade, serve with sticky rice and jeow"], source: "https://www.196flavors.com/ping-kai/", sourceName: "196 Flavors" },
      { name: "Khao Jee", native: "ເຂົ້າຈີ່", desc: "Grilled sticky rice skewers with egg",
        ingredients: ["Sticky rice", "Egg", "Scallions", "Salt", "Bamboo skewers"],
        steps: ["Mix cooked sticky rice with beaten egg, sliced scallions and salt", "Form into flat patties or log shapes on bamboo skewers", "Grill over charcoal until golden and crispy on outside, soft inside"], source: "https://www.simplysuwanee.com/khao-jee/", sourceName: "Simply Suwanee" }
    ]
  }
};
