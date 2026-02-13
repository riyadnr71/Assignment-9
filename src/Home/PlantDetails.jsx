import { useParams } from "react-router";
import { useState } from "react";
import plants from "../data/plants.json";
import toast, { Toaster } from "react-hot-toast"; 

const PlantDetails = () => {
  const { id } = useParams();
  const plantId = parseInt(id);
  const plant = plants.find((p) => p.plantId === plantId);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!plant) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-red-500">Plant not found!</h2>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success toast
    toast.success(`Thank you ${name}! Your consultation for ${plant.plantName} is booked.`);

    setName("");
    setEmail("");
  };

  return (
    <div className="max-w-6xl mx-auto text-black px-4 py-16">
      {/* Hot Toast container */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="md:flex md:gap-10">
        {/* Image */}
        <img
          src={plant.image}
          alt={plant.plantName}
          className=" md:w-1/2  object-cover rounded-xl"
        />

        {/* Details */}
        <div className="mt-6 md:mt-0 md:w-1/2">
          <h1 className="text-3xl font-bold text-green-800">{plant.plantName}</h1>
          <p className="text-gray-600 mt-2">{plant.description}</p>

          <div className="mt-4 space-y-2">
            <p><strong>Category:</strong> {plant.category}</p>
            <p><strong>Price:</strong> ${plant.price}</p>
            <p><strong>Rating:</strong> ⭐ {plant.rating}</p>
            <p><strong>Available Stock:</strong> {plant.availableStock}</p>
            <p><strong>Care Level:</strong> {plant.careLevel}</p>
            <p><strong>Provider:</strong> {plant.providerName}</p>
          </div>

          {/* Consultation Form */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Book Consultation</h2>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  required
                  className="w-full border text-gray-600 px-3 py-2 rounded-lg"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Your Email"
                  className="w-full border px-3 text-gray-600 py-2 rounded-lg"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
