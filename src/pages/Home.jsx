import Button from "../components/Button";
import Card from "../components/Card";

function Home() {
  return (
    <div className="pt-24">

      {/* Hero Section */}
      <section className="bg-blue-600 text-black text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          We Build Modern Websites
        </h1>
        <p className="mb-6 text-lg">
          Professional web solutions for startups and businesses.
        </p>
        <Button text="Get Started" />
      </section>

      {/* Services Preview */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Web Development"
            description="Modern and responsive websites built with latest technologies."
          />
          <Card
            title="UI/UX Design"
            description="Clean and user-focused design experiences."
          />
          <Card
            title="SEO Optimization"
            description="Improve your website ranking and visibility."
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
