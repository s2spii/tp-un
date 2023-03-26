import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
      .then((res) => setRecipe(res.data.meals));
  }, [search]);

  return (
    <div>
      <h1>React Cook</h1>
      <div className="form__group field">
        <input
          type="text"
          className="form__field"
          placeholder="Name"
          name="name"
          id="name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <label htmlFor="name" className="form__label">
          Name
        </label>
      </div>
      <ul className="recipe-container">
        {recipes &&
          recipes.map((recipe, index) => <Card recipe={recipe} key={index} />)}
      </ul>
    </div>
  );
};

export default App;
