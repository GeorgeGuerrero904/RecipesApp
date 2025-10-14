import Banner from "./components/Banner/Banner"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router"
import RecipeList from "./components/Recipe/RecipeList"
import FullRecipe from "./components/Recipe/FullRecipe"

function App() {
  return (
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route index element={<RecipeList />} />
        <Route path="recipe/:id" element={<FullRecipe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
