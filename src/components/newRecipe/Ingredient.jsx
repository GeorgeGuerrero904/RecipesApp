function Ingredient({ ingredient, remove }) {
    let notes;
    if(ingredient.notes)
        notes = <div className="fw-bold">{ingredient.notes}</div>
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
           <div className=""> {`${ingredient.quantity} of ${ingredient.item}`} {notes}</div>
            <button className="btn btn-danger" onClick={()=> {remove(ingredient.id)}}>x</button>
        </li>
    );
}

export default Ingredient;