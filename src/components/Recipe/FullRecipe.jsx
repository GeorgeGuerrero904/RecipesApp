import { useLocation, Link } from "react-router";

function FullRecipe() {
    //const { id } = useParams();
    const location = useLocation();
    const { recipe } = location.state;
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
                                <li>{step.toString()}</li>
                            )
                        })
                    }
                </ol>
                <Link to="/">Go Back</Link>
            </div>
        </div>
    );
}

export default FullRecipe;