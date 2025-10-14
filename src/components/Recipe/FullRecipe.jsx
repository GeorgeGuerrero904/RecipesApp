function FullRecipe({ recipe, setRecipe }) {
    return (
        <div className="card m-5">
            <div className="card-body">
                <h5 className="card-title mb-4">{recipe.title}</h5>
                <p className="card-text">{recipe.description}</p>
                <div>Ingredients:</div>
                <ul>
                    {
                        recipe.ingredients.map(ing => {
                            return (
                                <li> {`${ing.quantity} of ${ing.item} ${ing.notes ? `(${ing.notes})` : ``}`}</li>
                            )
                        })
                    }
                </ul>
                <div>Steps:</div>
                <ol>
                    {
                        recipe.steps.map(step => {
                            return (
                                <li>{step}</li>
                            )
                        })
                    }
                </ol>
                <a href="#" className="card-link" onClick={() => setRecipe(undefined)}>Go Back</a>
            </div>
        </div>
    );
}

export default FullRecipe;