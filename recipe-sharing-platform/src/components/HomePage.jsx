import React from "react";
import { Link } from "react-router-dom";
import recipesData from "../data.json";

function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Recipe Sharing Platform
      </h1>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipesData.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="transform hover:scale-105 transition duration-300"
          >
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                  {recipe.title}
                </h2>
                <p className="text-gray-700 mb-4">{recipe.summary}</p>
                <div className="inline-block bg-green-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-green-700 transition">
                  View Recipe
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
