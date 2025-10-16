import { useState } from "react";
import Ingredient from "./Ingredient";

function NewRecipe() {
    let recipe = {
        title: "",
        description: "",
        ingredients: [],
        steps: []
    };

    const [ingredients, setIngredients] = useState([]);
    const [currentIngredient, setCurrentIngredient] = useState({ id: 0, item: "", quantity: "", notes: "" });
    const changeCurrentIngredient = ((e) => setCurrentIngredient({ ...currentIngredient, [e.target.name]: e.target.value }))

    const setIngredientAttr = () => {
        //adding key in order to use it in the map
        setCurrentIngredient({ ...currentIngredient, id: ingredients.length });
        setIngredients([...ingredients, currentIngredient]);
        //cleaning ingredients inputs
        setCurrentIngredient({ item: "", quantity: "", notes: "" });
    };
    const removeIgredient = (id) => {
        const index = ingredients.findIndex(o => o.id == id);
        ingredients.splice(index, 1);
        setIngredients([...ingredients]);
    }

    const recipeSubmitAcion = (formData) => {
    }
    return (
        <div className="container m-5">
            <form action={recipeSubmitAcion} className="row justify-content-between">
                <h2>New recipe</h2>
                <div class="mb-3 mt-5">
                    <label for="title" class="form-label">Title</label>
                    <input type="email" name="title" class="form-control" id="title" />
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea class="form-control" id="description" rows="3"></textarea>
                </div>
                <div className="col-6 row justify-content-between ">
                    <label class="form-label">Ingredients</label>
                    <div class="mb-3">
                        <input type="text" class="form-control" name="item" value={currentIngredient.item} placeholder="Name" onChange={changeCurrentIngredient} />
                    </div>
                    <div className="col-auto">
                        <input class="form-control" name="quantity" value={currentIngredient.quantity} placeholder="Quantity & presentation" onChange={changeCurrentIngredient} />
                    </div>
                    <div className="col-auto">
                        <input class="form-control" name="notes" value={currentIngredient.notes} placeholder="Notes" onChange={changeCurrentIngredient} />
                    </div>
                    <buttton className="btn btn-primary my-3" onClick={setIngredientAttr}>Add Ingredient</buttton>
                    <ul className="list-group list-group-flush border">
                        {ingredients.map((ing) => <Ingredient ingredient={ing} key={ing.id} remove={removeIgredient} />)}
                    </ul>
                </div>
                <div className="col-6">
                    <label class="form-label">Preparation Steps</label>
                    <div class="mb-3">
                        <textarea name="" className="form-control" id="" placeholder=""></textarea>
                        <buttton className="btn btn-primary my-3 w-100" onClick={setIngredientAttr}>Add Step</buttton>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default NewRecipe;