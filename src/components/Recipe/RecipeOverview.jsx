

const RecipeOverview = function ({ recipe, navigate }) {
    //deconstructing recipe object
    const { id, title, ingredients } = recipe;
    return (
        <div className="row bg-success-subtle m-3 p-5 cursor-pointer" onClick={() => navigate(`/recipe/${id}`, { state: { recipe } })}>
            <div className="col-8">{title}</div>
            <div className="col-4 text-end">
                <span className="rounded-pill text-bg-success p-2">Ingredients: {ingredients.length}</span>
            </div>
        </div>
    )
}
export default RecipeOverview;