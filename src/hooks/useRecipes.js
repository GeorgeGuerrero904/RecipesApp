import { useEffect, useState } from "react";

function useRecipes() {
    const [recipes, setRecipes] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState();

    useEffect(function () {
        setLoadingStatus("Loading...");
        const getRecipes = async function () {
            let response = await fetch("http://localhost:8000/recipes");
            if (!response.ok) {
                setLoadingStatus("Opps something went wrong...")
            }

            const data = await response.json();
            setLoadingStatus("Loaded")
            setRecipes(data)
        }
        setTimeout(function () {
            getRecipes();
        }, 1000);

    }, []);

    return { recipes, setRecipes, loadingStatus };
}

export default useRecipes;