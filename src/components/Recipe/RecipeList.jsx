import { useContext, useEffect, useState } from "react"
import "../Recipe/Recipe.css"
import RecipeOverview from "./RecipeOverview"
import useRecipes from "../../hooks/useRecipes"
import navigationContext from "../../navigation/navigationContext"
import navValues from "../../navigation/navValues"


const RecipeList = function () {
    const {navigate} = useContext(navigationContext);
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
                    <RecipeOverview navigate={navigate} recipe={recipe} key={recipe.id} />
                ))
            }
        </div>
    )
}

export default RecipeList;