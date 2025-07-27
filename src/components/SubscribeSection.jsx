const SubscribeSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto bg-gray-100 text-black rounded-2xl p-10 text-center shadow-md overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
          Stay Updated
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Subscribe to our newsletter for the latest updates, new features, and
          exclusive content.
        </p>

        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 rounded-md bg-white text-black placeholder:text-gray-800 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff00667a] w-full sm:w-80"
          />
          <button
            type="submit"
            className="bg-[#ff0065] hover:bg-black px-6 py-3 rounded-full font-semibold text-white transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;
