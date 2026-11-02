// The home page: ten ingredients to buy first (refs to INGREDIENTS entries,
// as "cuisine/id") and seven easy recipes that use them.
const STARTER = {
  pantry: [
    "china/light-soy",
    "china/sesame-oil",
    "vietnam/dau-giam",
    "thailand/fish-sauce",
    "thailand/sriracha",
    "thailand/coconut-milk",
    "thailand/jasmine-rice",
    "vietnam/toi",
    "china/ginger",
    "china/scallions"
  ],
  recipes: [
    {
      name: "Egg Fried Rice",
      country: "china",
      time: "15 min",
      ingredients: [
        "2 cups day-old cooked rice",
        "2 eggs, beaten",
        "2 tbsp vegetable oil",
        "2 tbsp soy sauce",
        "1 tsp sesame oil",
        "3 scallions, sliced",
        "Salt and white pepper to taste"
      ],
      steps: [
        "Heat oil in a wok or large pan over high heat until shimmering.",
        "Add beaten eggs, scramble quickly for 30 seconds, then push to the side.",
        "Add rice, pressing flat against the pan. Let it sizzle undisturbed for 30 seconds.",
        "Toss and break up clumps. Add soy sauce and toss to coat evenly.",
        "Add scallion whites, toss for 30 seconds more.",
        "Remove from heat, drizzle with sesame oil and top with scallion greens."
      ]
    },
    {
      name: "Miso Soup",
      country: "japan",
      time: "10 min",
      ingredients: [
        "4 cups water",
        "3 tbsp white miso paste",
        "1 block soft tofu, cubed",
        "2 scallions, sliced",
        "1 sheet dried seaweed (wakame or nori), torn into small pieces"
      ],
      steps: [
        "Bring water to a gentle simmer (not a boil).",
        "Add tofu cubes and seaweed. Simmer 2 minutes.",
        "Remove pot from heat. Ladle a little hot water into a bowl with miso paste and whisk until smooth.",
        "Pour the dissolved miso back into the pot and stir gently.",
        "Serve in bowls topped with scallion greens.",
        "Don’t let the soup boil once the miso is in. Boiling dulls its flavor."
      ]
    },
    {
      name: "Garlic Ginger Stir-Fry",
      country: "china",
      time: "15 min",
      ingredients: [
        "1 lb any vegetables (broccoli, snap peas, bell pepper, bok choy)",
        "3 cloves garlic, minced",
        "1 inch ginger, minced",
        "2 tbsp soy sauce",
        "1 tbsp rice vinegar",
        "1 tsp sesame oil",
        "2 tbsp vegetable oil",
        "Cooked rice for serving"
      ],
      steps: [
        "Cut vegetables into similar-sized pieces so they cook evenly.",
        "Mix soy sauce, rice vinegar and sesame oil in a small bowl for the sauce.",
        "Heat vegetable oil in a wok over high heat until it shimmers.",
        "Add garlic and ginger, stir for 15 seconds (don’t let them burn).",
        "Add hardest vegetables first (broccoli, carrots), stir-fry 2 min. Then softer ones (snap peas, greens), stir-fry 1 min.",
        "Pour in sauce, toss everything 30 seconds. Serve over rice immediately."
      ]
    },
    {
      name: "Simple Coconut Curry",
      country: "thailand",
      time: "25 min",
      ingredients: [
        "1 can full-fat coconut milk",
        "2 tbsp curry paste (red or yellow; store-bought is fine)",
        "1 lb chicken thighs or tofu, cut into chunks",
        "1 cup vegetables (bell pepper, bamboo shoots, green beans)",
        "1 tbsp fish sauce",
        "1 tsp sugar",
        "Fresh basil leaves (optional)",
        "Cooked jasmine rice for serving"
      ],
      steps: [
        "Scoop the thick cream from the top of the coconut can into a pan over medium heat.",
        "When it starts to bubble and split, add curry paste. Stir and fry for 1 minute until fragrant.",
        "Add chicken or tofu. Cook 3–4 minutes until lightly browned.",
        "Pour in the remaining coconut milk. Add vegetables, fish sauce and sugar.",
        "Simmer 10–15 minutes until chicken is cooked through and vegetables are tender.",
        "Taste and adjust: more fish sauce for salt, sugar for balance, lime juice if you have it. Serve over rice."
      ]
    },
    {
      name: "Kimchi Fried Rice",
      country: "korea",
      time: "15 min",
      ingredients: [
        "2 cups day-old cooked rice",
        "1 cup chopped kimchi (plus 2 tbsp kimchi juice)",
        "2 eggs",
        "1 tbsp soy sauce",
        "1 tsp sesame oil",
        "2 tbsp vegetable oil",
        "2 scallions, sliced",
        "Optional: gochujang for extra heat"
      ],
      steps: [
        "Heat vegetable oil in a large pan or wok over medium-high heat.",
        "Add chopped kimchi and stir-fry 2–3 minutes until slightly caramelized.",
        "Add rice, breaking up clumps. Stir-fry 3 minutes until rice is hot and slightly crispy.",
        "Add soy sauce and kimchi juice. Toss to combine.",
        "Push rice to the side, crack eggs into the open space. Scramble, then mix into rice.",
        "Drizzle sesame oil, top with scallions. Serve with a fried egg on top if you’re feeling fancy."
      ]
    },
    {
      name: "Vietnamese Dipping Sauce (Nước Chấm)",
      country: "vietnam",
      time: "5 min",
      ingredients: [
        "3 tbsp fish sauce",
        "3 tbsp warm water",
        "2 tbsp sugar or honey",
        "2 tbsp lime juice (about 1 lime)",
        "1 clove garlic, finely minced",
        "1 small chili, sliced (or ½ tsp chili flakes)"
      ],
      steps: [
        "Dissolve sugar in warm water.",
        "Add fish sauce and lime juice. Stir well.",
        "Add minced garlic and sliced chili.",
        "Taste: it should be a balance of salty, sweet, sour and a little spicy. Adjust to your liking.",
        "Let it sit 10 minutes for flavors to meld. Keeps refrigerated for a week.",
        "Use it on rice bowls, grilled meat, spring rolls or plain steamed vegetables."
      ]
    },
    {
      name: "Japanese Curry Rice",
      country: "japan",
      time: "30 min",
      ingredients: [
        "1 box Japanese curry roux, such as Golden Curry or Vermont Curry (in the Asian aisle)",
        "1 lb chicken, pork or tofu, cubed",
        "2 potatoes, cubed",
        "2 carrots, sliced",
        "1 onion, diced",
        "3 cups water",
        "Cooked rice for serving"
      ],
      steps: [
        "Sauté onion in oil until translucent, about 3 minutes.",
        "Add protein and cook until lightly browned.",
        "Add potatoes and carrots. Pour in water and bring to a boil.",
        "Reduce heat, cover and simmer 15 minutes until vegetables are tender.",
        "Turn off heat. Break curry roux blocks into the pot and stir until dissolved.",
        "Simmer on low 5 more minutes until thick. Serve over rice."
      ]
    }
  ]
};
