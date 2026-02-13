const Hero = () => {
  return (
    <div className="bg-green-50 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800">
          Bring Nature Into Your Home
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover beautiful indoor plants, expert care tips, and personalized consultations.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
          Explore Plants
        </button>
      </div>
    </div>
  );
};

export default Hero;
