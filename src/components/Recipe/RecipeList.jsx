import "../Recipe/Recipe.css"
import RecipeOverview from "./RecipeOverview"
import useRecipes from "../../hooks/useRecipes"
import { useNavigate, Link } from "react-router"



const RecipeList = function () {
    const { recipes, loadingStatus } = useRecipes();
    const navigate = useNavigate();

    if (loadingStatus != "Loaded") {
        return <h1>{loadingStatus}</h1>
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="fs-3 mb-5 col-8">Recipes List:</div>
                <div className="col-4">
                    <Link to="/recipe/new" className="btn btn-info">Add a recipe</Link>
                </div>
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