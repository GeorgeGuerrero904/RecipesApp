import { useEffect, useState } from "react"
import "../Recipe/Recipe.css"
import RecipeOverview from "./RecipeOverview"


const RecipeList = function ({selectRecipe}) {
    const [recipes, setRecipes] = useState([]);

    useEffect(function () {
        const getRecipes = async function () {
            let response = await fetch("http://localhost:8000/recipes");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setRecipes(data)
        }
        getRecipes();
    }, []);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="fs-3 mb-5 col-8">Recipes List:</div>
                <div className="col-4"><button id="addRecipe" className="btn btn-info">Add a recipe</button></div>
            </div>

            {
                recipes.map(recipe => (
                    <RecipeOverview selectRecipe={selectRecipe} recipe={recipe} key={recipe.id} />
                ))
            }
        </div>
    )
}

export default RecipeList;