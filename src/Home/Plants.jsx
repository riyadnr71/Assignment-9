import plants from "../data/plants.json";
import IndoorPlantCard from "./IndoorPlantCard";


const Plants = () => {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-center text-green-800">
        Our Indoor Plants
      </h1>

      <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
        Browse our carefully selected indoor plants that bring freshness,
        beauty, and a healthy environment to your home.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
        {plants.map((plant) => (
          <IndoorPlantCard
            key={plant.plantId}
            plant={plant}
          />
        ))}
      </div>
    </section>
  );
};

export default Plants;
