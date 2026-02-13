import React from "react";
import { FaStar, FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PlantCard({ plant }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:translate-y-1 hover:shadow-xl transition-all">
      <div className="h-44 w-full bg-green-50 flex items-center justify-center">
        <img
          src={plant.image}
          alt={plant.plantName}
          className="h-36 object-contain"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-black">{plant.plantName}</h3>
            <p className="text-sm text-black/80">{plant.category} • {plant.careLevel}</p>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-black">${plant.price}</div>
            <div className="flex items-center text-yellow-500 text-sm mt-1 justify-end">
              <FaStar className="mr-1" /> <span className="text-black ml-1">{plant.rating}</span>
            </div>
          </div>
        </div>

        <p className="mt-3 text-sm text-black/70 h-14 overflow-hidden">{plant.description}</p>

        <div className="mt-4 flex gap-2">
          <Link
            to={`/plants/${plant.plantId}`}
            className="flex-1 text-center px-3 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition"
          >
            View Details
          </Link>
          <button
            className="px-3 py-2 rounded-lg border border-green-600 text-green-700 font-medium hover:bg-green-50 transition flex items-center gap-2"
            title="Add to wishlist"
          >
            <FaLeaf /> Save
          </button>
        </div>
      </div>
    </div>
  );
}
