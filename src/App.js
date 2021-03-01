import React, {useState, useEffect} from "react";
import './App.css';
import Recipe from "./recipes";

function App() {

  const appId = "********"; // write your appId here
  const appKey = "***********************"; // and your appKey or your apiKey here

  const [recipes , setRecipes] = useState([]);
  const [search, setSearch]= useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(()=>{

    // use effect is a function
   getRecipes();

  }, [query]);

  const getRecipes = async () => {

     const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`);
     const data  = await response.json();
     setRecipes(data.hits);
      }

      const updateSearch = (e) => {
           setSearch(e.target.value);
      }

      const getSearch = (e) =>
      {
        e.preventDefault();
        setQuery(search);
        setSearch("");
      }

  return (
    <div className="App">
      <h1>Food Recipes</h1>
         <form onSubmit={getSearch}>
        <input type="text" value={search} onChange={updateSearch}></input>
        <button type="submit">SEARCH</button>
      </form>

      {recipes.map(recipe => (
        <Recipe title={recipe.recipe.label} calories = {recipe.recipe.calories} image = {recipe.recipe.image}
              ingredients = {recipe.recipe.ingredients}/>
      ))}
      
    </div>
  );
}

export default App;
