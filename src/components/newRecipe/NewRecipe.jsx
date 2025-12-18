import { useState } from "react";
import { ReactSortable } from 'react-sortablejs';
import { Navigate } from 'react-router';
import Ingredient from "./Ingredient";
import Step from "./Step";
import "./NewRecipe.css"

function NewRecipe() {

    const [ingredients, setIngredients] = useState([]);
    const [currentIngredient, setCurrentIngredient] = useState({ id: 0, item: "", quantity: "", notes: "" });

    const [stepList, setStepList] = useState([]);
    const [currentStep, setCurrentStep] = useState({ id: 0, step: "" });

    const changeCurrentIngredient = ((e) => setCurrentIngredient({ ...currentIngredient, [e.target.name]: e.target.value }))

    const addIngredient = () => {
        //adding key in order to use it in the map
        setCurrentIngredient({ ...currentIngredient, id: ingredients.length });
        setIngredients([...ingredients, currentIngredient]);
        //cleaning ingredients inputs
        setCurrentIngredient({ item: "", quantity: "", notes: "" });
    };

    const addStep = () => {
        setCurrentStep({ ...currentStep, id: stepList.length });
        setStepList([...stepList, currentStep]);
        setCurrentStep({ id: 0, step: "" });
    }
    const removeIgredient = (id) => {
        const index = ingredients.findIndex(o => o.id == id);
        ingredients.splice(index, 1);
        setIngredients([...ingredients]);
    }
    const postRecipe = async (recipe) => {
        const rsp = await fetch("http://localhost:8000/recipes", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(recipe),
        });
        return await rsp.json();
    };
    const addRecipe = async (recipe) => {
        await postRecipe(recipe);
    };

    const recipeSubmitAcion = async (formData) => {
        addRecipe({
            title: formData.get("title"),
            description: formData.get("description"),
            ingredients: ingredients.map(({...ing }) => ing),
            steps: stepList.map((el) => el.step)
        });
        return <Navigate to="/" replace />;
    }
    return (
        <div className="container m-5">
            <form action={recipeSubmitAcion} className="row justify-content-between">
                <h2>New recipe</h2>
                <div className="mb-3 mt-5">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" name="title" className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" name="description" rows="3"></textarea>
                </div>
                <div className="col-6 row justify-content-between " id="ingredientsContainer">
                    <label className="form-label">Ingredients</label>
                    <div className="mb-3">
                        <input type="text" className="form-control" name="item" value={currentIngredient.item} placeholder="Name" onChange={changeCurrentIngredient} />
                    </div>
                    <div className="col-auto">
                        <input className="form-control" name="quantity" value={currentIngredient.quantity} placeholder="Quantity & presentation" onChange={changeCurrentIngredient} />
                    </div>
                    <div className="col-auto">
                        <input className="form-control" name="notes" value={currentIngredient.notes} placeholder="Notes" onChange={changeCurrentIngredient} />
                    </div>
                    <button type="button" className="btn btn-primary my-3" onClick={addIngredient}>Add Ingredient</button>
                    <ul className="list-group list-group-flush border">
                        {ingredients.map((ing) => <Ingredient ingredient={ing} key={ing.id} remove={removeIgredient} />)}
                    </ul>
                </div>
                <div className="col-6">
                    <label className="form-label">Preparation Steps</label>
                    <div className="mb-3">
                        <textarea className="form-control" value={currentStep.step} onChange={(e) => { setCurrentStep({ ...currentStep, step: e.target.value }) }} rows={4} placeholder=""></textarea>
                        <button type="button" className="btn btn-primary my-3 w-100" onClick={addStep}>Add Step</button>
                    </div>
                    <ul className="list-group list-group-flush border overflow-y-scroll" id="stepsList">
                        <ReactSortable list={stepList} setList={setStepList} animation="200" easing="ease-out">
                            {stepList.map((step) => <Step step={step.step} key={step.id} />)}
                        </ReactSortable>
                    </ul>
                </div>
                <button className="btn btn-primary mt-5">save</button>
            </form>
        </div>
    );
}

export default NewRecipe;