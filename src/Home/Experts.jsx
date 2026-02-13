const Experts = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800">
          Meet Our Green Experts
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {/* Expert 1 */}
          <div className="bg-white p-6 rounded-xl text-center">
            <img
              src="https://i.pravatar.cc/150?img=10"
              className="w-24 h-24 rounded-full mx-auto"
              alt="Expert 1"
            />
            <h3 className="mt-4 text-black font-semibold">Expert 1</h3>
            <p className="text-sm text-black">Indoor Plants</p>
          </div>

          {/* Expert 2 */}
          <div className="bg-white p-6 rounded-xl text-center">
            <img
              src="https://i.pravatar.cc/150?img=11"
              className="w-24 h-24 rounded-full mx-auto"
              alt="Expert 2"
            />
            <h3 className="mt-4 text-black font-semibold">Expert 2</h3>
            <p className="text-sm text-black">Succulent Care</p>
          </div>

          {/* Expert 3 */}
          <div className="bg-white p-6 rounded-xl text-center">
            <img
              src="https://i.pravatar.cc/150?img=12"
              className="w-24 h-24 rounded-full mx-auto"
              alt="Expert 3"
            />
            <h3 className="mt-4 text-black font-semibold">Expert 3</h3>
            <p className="text-sm text-black">Eco Decor</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;
