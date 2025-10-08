import { useState } from "react"
import "../Recipe/Recipe.css"
import Recipe from "./Recipe"

//No free recipes API found so emulating response here 
const
    recipesArray = [
        {
            "id": 1,
            "title": "Quick & Easy Tomato Pasta ",
            "description": "A classic, fast, and flavorful pasta dish using crushed tomatoes.",
            "ingredients": [
                { "item": "Spaghetti or preferred pasta", "quantity": "200g (7oz)" },
                { "item": "Olive oil", "quantity": "1 tbsp" },
                { "item": "Garlic", "quantity": "2 cloves", "notes": "minced" },
                { "item": "Crushed tomatoes (canned)", "quantity": "400g (14oz)" },
                { "item": "Dried oregano", "quantity": "1/2 tsp", "notes": "optional" },
                { "item": "Salt and black pepper", "quantity": "To taste" },
                { "item": "Fresh basil leaves", "quantity": "For garnish", "notes": "optional" },
                { "item": "Parmesan cheese", "quantity": "For serving", "notes": "optional" }
            ],
            "steps": [
                "Bring a large pot of salted water to a boil. Add the pasta and cook until al dente. Drain, reserving about 1/2 cup of pasta water.",
                "Heat olive oil in a medium saucepan over medium heat. Add the minced garlic and sauté for about 1 minute until fragrant.",
                "Pour in the crushed tomatoes, add the dried oregano, and season with salt and pepper. Stir well.",
                "Bring the sauce to a gentle simmer for 8-10 minutes. If the sauce becomes too thick, add a splash of the reserved pasta water.",
                "Add the drained pasta directly into the saucepan and toss to coat evenly.",
                "Serve immediately, garnished with fresh basil and grated Parmesan, if desired."
            ]
        },
        {
            "id": 2,
            "title": "Simple Scrambled Eggs with Toast ",
            "description": "A quick and satisfying breakfast or light meal.",
            "ingredients": [
                { "item": "Large eggs", "quantity": "2-3" },
                { "item": "Milk or cream", "quantity": "1 tbsp", "notes": "optional, for creamier eggs" },
                { "item": "Salt and black pepper", "quantity": "Pinch of each" },
                { "item": "Butter or oil", "quantity": "1 tsp" },
                { "item": "Bread", "quantity": "2 slices", "notes": "toasted" },
                { "item": "Optional Toppings", "quantity": "Ketchup, hot sauce, cheese, etc.", "notes": "for serving" }
            ],
            "steps": [
                "Crack the eggs into a small bowl. Add milk (if using), salt, and pepper. Whisk with a fork until fully combined.",
                "Place a non-stick frying pan over medium-low heat. Add the butter or oil and let it melt.",
                "Pour the egg mixture into the pan. Let it sit for about 30 seconds until the edges begin to set.",
                "Using a spatula, gently push the cooked edges toward the center, tilting the pan to allow uncooked egg to flow underneath. Continue this until the eggs are mostly set but still moist.",
                "Slide the scrambled eggs onto a plate next to your toast and add any desired toppings."
            ]
        },
        {
            "id": 3,
            "title": "Classic Tuna Salad Sandwich",
            "description": "An easy-to-make lunch staple with minimal prep.",
            "ingredients": [
                { "item": "Tuna (canned, in water or oil)", "quantity": "1 can (140g/5oz)", "notes": "drained" },
                { "item": "Mayonnaise", "quantity": "2 tbsp" },
                { "item": "Celery stalk", "quantity": "1", "notes": "finely diced (optional)" },
                { "item": "Red onion", "quantity": "1 tbsp", "notes": "finely minced (optional)" },
                { "item": "Dijon mustard", "quantity": "1/2 tsp", "notes": "optional" },
                { "item": "Salt and black pepper", "quantity": "To taste" },
                { "item": "Bread", "quantity": "2 slices" },
                { "item": "Lettuce and tomato slices", "quantity": "For serving", "notes": "optional" }
            ],
            "steps": [
                "In a medium bowl, flake the drained tuna with a fork.",
                "Add the mayonnaise, diced celery, minced red onion, and Dijon mustard (if using).",
                "Stir all ingredients together until well combined.",
                "Season the tuna salad with salt and black pepper to your taste.",
                "Spread the tuna salad evenly over one slice of bread.",
                "Add lettuce and tomato (if using), top with the second slice of bread, and serve immediately."
            ]
        }
    ]

const RecipeList = function () {
    const [recipes, setRecipes] = useState(recipesArray);
    return (
        <>
            <div className="container mt-5">
                <div className="fs-3 mb-5">Recipes List:</div>
                {
                    recipes.map(recipe => (
                        <Recipe recipe={recipe} key={recipe.id} />
                    ))
                }
            </div>
        </>
    )
}

export default RecipeList;