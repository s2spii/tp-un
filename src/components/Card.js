import React from "react";

const Card = ({ recipe }) => {
  return (
    <li>
      <h3>{recipe.strMeal}</h3>
      <img src={recipe.strMealThumb} width="250" alt="" />
      <p>Catégorie : {recipe.strCategory}</p>
      <p>Origine : {recipe.strArea}</p>

      <div className="infos">
        <button onClick={() => window.open(recipe.strSource, "_blank")}>
          Source
        </button>
        <button onClick={() => window.open(recipe.strYoutube, "_blank")}>
          Vidéo
        </button>
      </div>
    </li>
  );
};

export default Card;
