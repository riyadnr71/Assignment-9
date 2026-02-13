import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Components/AuthContext/AuthContext";

const PlantCard = ({ plant }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleViewDetails = () => {
    if (!user) {
     
      navigate("/login", { state: { from: `/plants-Details/${plant.plantId}` } });
      return;
    }
   
    navigate(`/plants-Details/${plant.plantId}`);
  };

  return (
    <div className="border rounded-xl shadow-sm hover:shadow-md transition">
      <img
  src={plant.image}
  alt={plant.plantName}
  className="h-48 w-full object-cover rounded-t-xl"
/>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{plant.plantName}</h3>
        <p className="text-sm text-gray-500">{plant.category}</p>

        <div className="flex justify-between items-center mt-2">
          <span className="text-green-600 font-bold">${plant.price}</span>
          <span className="text-yellow-500">⭐ {plant.rating}</span>
        </div>

        <button
          onClick={handleViewDetails}
          className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default PlantCard;
