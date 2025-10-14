const RecipeOverview = function ({ recipe, selectRecipe }) {
    //deconstructing recipe object
    const { title, ingredients } = recipe;
    return (
        <div className="row bg-success-subtle m-3 p-5 cursor-pointer" onClick={() => selectRecipe(recipe)}>
            <div className="col-8">{title}</div>
            <div className="col-4 text-end">
                <span className="rounded-pill text-bg-success p-2">Ingredients: {ingredients.length}</span>
            </div>
        </div>
    )
}
export default RecipeOverview;