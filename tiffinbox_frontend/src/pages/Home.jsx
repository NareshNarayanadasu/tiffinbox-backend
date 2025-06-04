import React, { useEffect, useState } from "react";
import axios from "axios";
import MealCard from "../components/MealCard";

export default function Home() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios.get("/api/meals/")
      .then((res) => setMeals(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {meals.map((meal) => (
        <MealCard key={meal.id} meal={meal} />
      ))}
    </div>
  );
}