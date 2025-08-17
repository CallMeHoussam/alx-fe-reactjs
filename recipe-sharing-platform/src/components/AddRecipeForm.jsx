import React, { useState } from "react";

function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // ✅ Add a validate function
  const validate = () => {
    const ingredientList = ingredients.split("\n").filter(Boolean);
    const stepsList = steps.split("\n").filter(Boolean);
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required";
    if (ingredientList.length < 2)
      newErrors.ingredients = "Please provide at least 2 ingredients";
    if (stepsList.length < 1)
      newErrors.steps = "Please provide at least 1 preparation step";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // true if valid
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return; // call validate before submitting

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split("\n").filter(Boolean),
      instructions: steps.split("\n").filter(Boolean),
    };

    onAddRecipe(newRecipe);

    // Clear form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-700">
          Add a New Recipe
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Recipe Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition ${
                errors.title
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-green-500"
              }`}
              placeholder="Enter recipe title"
            />
            {errors.title && (
              <p className="text-red-500 mt-1 text-sm">{errors.title}</p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Ingredients (one per line)
            </label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition ${
                errors.ingredients
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-green-500"
              }`}
              rows={4}
              placeholder="Enter each ingredient on a new line"
            />
            {errors.ingredients && (
              <p className="text-red-500 mt-1 text-sm">{errors.ingredients}</p>
            )}
          </div>

          {/* Steps */}
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Preparation Steps (one per line)
            </label>
            <textarea
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition ${
                errors.steps
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-green-500"
              }`}
              rows={4}
              placeholder="Enter each step on a new line"
            />
            {errors.steps && (
              <p className="text-red-500 mt-1 text-sm">{errors.steps}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition shadow-lg"
            >
              Submit Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;
