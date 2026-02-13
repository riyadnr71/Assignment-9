const CareTips = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800">
          Plant Care Tips
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="p-6 bg-green-50 rounded-xl">
            💧 <h3 className="font-semibold mt-2">Watering</h3>
            <p className="text-sm text-gray-600">
              Water only when the soil feels dry to avoid root rot.
            </p>
          </div>

          <div className="p-6 bg-green-50 rounded-xl">
            ☀️ <h3 className="font-semibold mt-2">Sunlight</h3>
            <p className="text-sm text-gray-600">
              Most indoor plants prefer bright, indirect sunlight.
            </p>
          </div>

          <div className="p-6 bg-green-50 rounded-xl">
            🌱 <h3 className="font-semibold mt-2">Fertilizing</h3>
            <p className="text-sm text-gray-600">
              Feed your plants once a month for healthy growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareTips;
