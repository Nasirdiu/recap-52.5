import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealDetails = () => {
  const { mealId } = useParams();
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals));
  }, [mealId]);
  return (
    <div>
      <h1 className="text-3xl font-bold">Meal Details:{mealId}</h1>
     {
         meal.map(meals=><p >name={meals.idMeal}</p>)
     }
      <h2>Name:{meal.idMeal}</h2>
    </div>
  );
};

export default MealDetails;
