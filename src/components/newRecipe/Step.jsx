function Step({ step }) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="d-inline">{step}</div>
                <button className="btn btn-danger">x</button>
        </li>
    );
}

export default Step;