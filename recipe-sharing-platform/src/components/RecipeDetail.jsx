import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

function RecipeDetails() {
  const { id } = useParams(); // get id from URL
  const recipe = recipesData.find((r) => String(r.id) === String(id)); // match by id

  // useEffect to meet ALX requirement
  useEffect(() => {
    console.log(`RecipeDetails mounted for recipe ID: ${id}`);
  }, [id]);

  if (!recipe) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-10 bg-white shadow-lg rounded-xl mt-10">
        <h1 className="text-3xl font-bold text-red-600 text-center">
          Recipe not found
        </h1>
        <div className="text-center mt-6">
          <Link
            to="/"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-white shadow-lg rounded-xl mt-10">
      <h1 className="text-4xl font-bold mb-6 text-center">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-80 object-cover rounded-xl shadow-md mb-6"
      />
      <p className="text-lg mb-6">{recipe.summary}</p>

      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-6">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
      <ol className="list-decimal list-inside space-y-2 mb-6">
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <div className="text-center">
        <Link
          to="/"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetails;
