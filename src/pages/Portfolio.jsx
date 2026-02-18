function Portfolio() {
  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">

      <h1 className="text-4xl font-bold text-center mb-12">
        Our Portfolio
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {[1,2,3,4,5,6].map((item) => (
          <div key={item} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={`https://via.placeholder.com/400x250`}
              alt="project"
              className="w-full"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">
                Project {item}
              </h3>
              <p className="text-gray-600 text-sm">
                Description of the project goes here.
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Portfolio;
