import Banner from "./components/Banner/Banner"
import "./App.css"
import RecipeList from "./components/Recipe/RecipeList"
import FullRecipe from "./components/Recipe/FullRecipe"
import { useState } from "react"


function App() {
  const [selectedRecipe, setSelectedRecipe] = useState();
  return (
    <>
      <Banner />
      {
        selectedRecipe ? <FullRecipe recipe={selectedRecipe} /> : <RecipeList selectRecipe={setSelectedRecipe}/>
      }
    </>
  )
}

export default App
