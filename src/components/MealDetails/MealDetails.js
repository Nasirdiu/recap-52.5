import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Meal-details.css";
const MealDetails = () => {
  const { mealId } = useParams();
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
      
  }, []);
  return (
    <div className="meal-details">
      <h1 className="text-3xl font-bold">Meal Details:{mealId}</h1>

      <img className="w-60 m-auto rounded-2xl" src={meal.strMealThumb} alt="" />
      <h2 className="text-2xl font-bold">Name:{meal.strMeal}</h2>
      <p className="text-sm font-bold">Visit:{meal.strYoutube}</p>
      <p>{meal.strInstructions?.slice(0, 150)}</p>
    </div>
  );
};

export default MealDetails;
