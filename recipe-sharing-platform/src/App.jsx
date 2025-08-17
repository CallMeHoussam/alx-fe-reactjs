import React from "react";
import "./App.css";
import HomePage from "./components/HomePage.jsx"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        {/* App routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
