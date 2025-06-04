import React from "react";

export default function MealCard({ meal }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md">
      <h2 className="text-lg font-bold">{meal.name}</h2>
      <p className="text-gray-600">{meal.description}</p>
      <p className="text-green-700 font-semibold">₹{meal.price}</p>
      <p className="text-sm">{meal.is_available ? "Available" : "Unavailable"}</p>
      <button className="mt-2 bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">
        Order Now
      </button>
    </div>
  );
}