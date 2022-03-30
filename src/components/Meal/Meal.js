import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Meal.css";
const Meal = (props) => {
  const { strMeal, strInstructions, strMealThumb, idMeal } = props.meal;
  const negtive = useNavigate();
  const handeler = () => {
    negtive(`/meal/` + idMeal);
  };
  return (
    <div className="meal">
      <img className="m-auto" src={strMealThumb} alt="" />
      <h4>{strMeal}</h4>
      <p>{strInstructions.slice(0, 100)}</p>
     <div>
         <Link className="bg-orange-500 rounded-2xl border-4 p-3" to={'/meal/'+idMeal}>Show Details</Link>
     <button
        className="bg-orange-500 rounded-2xl border-4 p-3"
        onClick={handeler}
      >
        {strMeal}-{idMeal}
      </button>
     </div>
    </div>
  );
};

export default Meal;
