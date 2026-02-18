function Portfolio() {
  return (
    <div className="pt-28 px-6 bg-gray-50 min-h-screen">

      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">
          Our Portfolio
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Some of our recent successful projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {[1,2,3,4,5,6].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src="https://via.placeholder.com/400x250"
                alt="project"
                className="w-full"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Project {item}
                </h3>
                <p className="text-gray-600 text-sm">
                  A modern responsive website built for business growth.
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Portfolio;
