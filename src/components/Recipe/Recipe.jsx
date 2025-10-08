const Recipe = function ({ recipe }) {
    //deconstructing recipe object
    const { id, title, description, ingredients, steps } = recipe;
    return (
        <div className="row bg-success-subtle m-3 p-5 cursor-pointer">
            <div className="col-8">{title}</div>
            <div className="col-4 text-end">
                <span className="rounded-pill text-bg-success p-2">Ingredients: {ingredients.length}</span>
            </div>
        </div>
    )
}
export default Recipe;