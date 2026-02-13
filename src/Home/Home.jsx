import plants from "../data/plants.json";
import CareTips from "./CareTips";
import Experts from "./Experts";
import Hero from "./Hero";
import PlantCard from "./PlantCard";
import PlantOfWeek from "./PlantOfWeek";


const Home = () => {
  return (
    <>
      <Hero />

      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800">
          Top Rated Indoor Plants
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 my-5 gap-6">
      {plants.slice(0, 3).map((plant) => (
        <PlantCard key={plant.plantId} plant={plant} />
      ))}
    </div>
      </section>

      <CareTips />
      <Experts />
      <PlantOfWeek />
    </>
  );
};

export default Home;
