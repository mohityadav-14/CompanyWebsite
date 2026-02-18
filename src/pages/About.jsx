import Card from "../components/Card";
function About() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-6">
          About Us
        </h1>

        <p className="text-center text-gray-600 mb-12">
          We are a modern web development company helping businesses grow online.
        </p>

        <h2 className="text-2xl font-semibold text-center mb-8">
          Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold">Mohit Yadav</h3>
            <p className="text-gray-600 text-sm">Frontend Developer</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold">Satyam Yadav</h3>
            <p className="text-gray-600 text-sm">UI/UX Designer</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold">Shailesh Tripathi</h3>
            <p className="text-gray-600 text-sm">Backend Developer</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
