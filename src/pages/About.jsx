import Card from "../components/Card";

function About() {
  return (
    <div className="pt-28 px-6 bg-gray-50 min-h-screen">

      <div className="max-w-7xl mx-auto">

      <h1 className="text-4xl font-bold text-center mb-8">
        About Us
      </h1>

      <p className="text-center text-gray-600 mb-12">
        We are a modern web development company helping businesses grow online.
      </p>

      <h2 className="text-2xl font-semibold mb-6 text-center">
        Our Team
      </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Card title="John Doe" description="Frontend Developer" />
        <Card title="Jane Smith" description="UI/UX Designer" />
        <Card title="Mike Johnson" description="Backend Developer" />
      </div>

    </div>
    </div>
  );
}

export default About;
