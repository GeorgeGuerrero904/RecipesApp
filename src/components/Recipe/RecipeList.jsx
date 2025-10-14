import { useEffect, useState } from "react"
import "../Recipe/Recipe.css"
import RecipeOverview from "./RecipeOverview"
import useRecipes from "../../hooks/useRecipes"


const RecipeList = function ({ selectRecipe }) {
    const { recipes, setRecipes, loadingStatus } = useRecipes();
    if(loadingStatus != "Loaded"){
        return <h1>{loadingStatus}</h1>
    }
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