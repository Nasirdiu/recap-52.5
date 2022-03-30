import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import "./Restotrent.css";

const Restotrent = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMels] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMels(data.meals));
  }, [searchText]);
  const searchFood = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div>
      <h1 className="text-5xl text-teal-600 font-bold ">Food Search</h1>
      <input
        onChange={searchFood}
        className="mt-5 placeholder:italic placeholder:text-slate-400  bg-white w-50 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Search for anything..."
        type="text"
        name="search"
      />
      <h2 className="text-2xl mt-3 text-green-200 font-bold">
        Result Found:{meals.length}
      </h2>
      <div className="meal-container">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
    </div>
  );
};

export default Restotrent;
