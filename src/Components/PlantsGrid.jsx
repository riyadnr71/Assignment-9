import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { FaSearch } from "react-icons/fa";

export default function PlantsGrid() {
  const plants = useLoaderData();
  const [search, setSearch] = useState("");

  const filteredPlants = plants.filter((plant) =>
    plant.plantName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
        🌿 Our Beautiful Plants
      </h2>

      {/* 🔍 Search box */}
      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-md">
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search plants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-green-400 rounded-lg p-2 pl-10 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* 🪴 Plants Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredPlants.map((plant) => (
          <div
            key={plant.plantId}
            className="bg-white border border-green-200 shadow-md rounded-xl p-4 hover:shadow-lg transition"
          >
            <img
              src={plant.image}
              alt={plant.plantName}
              className="w-full h-40 object-contain mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold text-green-700">
              {plant.plantName}
            </h3>
            <p className="text-sm text-gray-600">{plant.category}</p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-green-600 font-bold">${plant.price}</span>
              <span className="text-yellow-500 text-sm">⭐ {plant.rating}</span>
            </div>
          </div>
        ))}
      </div>

      {filteredPlants.length === 0 && (
        <p className="text-center text-gray-600 mt-10">
          No plants found matching your search.
        </p>
      )}
    </div>
  );
}
