import navValues from "../../navigation/navValues";
import FullRecipe from "../Recipe/FullRecipe";
import RecipeList from "../Recipe/RecipeList";

const ComponentPicker = ({ currentNavLocation }) => {
    switch (currentNavLocation) {
        case navValues.home:
            return <RecipeList />;
        case navValues.recipe:
            return <FullRecipe />;
            default:
                return (<h3>No component for navigation value {currentNavLocation} found</h3>);
    }
}

export default ComponentPicker;