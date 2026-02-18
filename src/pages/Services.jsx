import Card from "../components/Card";

function Services() {
  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">

      <h1 className="text-4xl font-bold text-center mb-12">
        Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <Card
          title="Web Development"
          description="Modern responsive websites built with latest technologies."
        />

        <Card
          title="E-commerce Development"
          description="Online stores with secure payment integration."
        />

        <Card
          title="UI/UX Design"
          description="Clean and user-friendly design solutions."
        />

        <Card
          title="SEO Optimization"
          description="Improve visibility and search ranking."
        />

        <Card
          title="Maintenance"
          description="Ongoing support and updates for your website."
        />

        <Card
          title="Consulting"
          description="Technical guidance for digital growth."
        />

      </div>
    </div>
  );
}

export default Services;
