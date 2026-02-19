import usabilityImg from "../assets/usability.png";
import companywebsite from  "../assets/companyweb.png";
import prodash from  "../assets/prodash.png";
import weather from  "../assets/weather.png";
import recipe from '../assets/racipefinder.png';
import ecommerce from "../assets//ecommerce.png";

function Portfolio() {
let projects=[{
  name:"ProDash",
  description:"It is a E-commerce website by React and tailwind CSS using Fakestore API with some functionalities like validation,loading,searching,filters,sorting, routing,contex API, Redux toolkit etc. ",
  image:prodash
},{
  name:"Weather App",
  description:"A React App with tailwind CSS to showcase real weather data from api according to city, zip code and coordinates with 5 days forcast of wind speed, humidity, temperature with error handling",
  image:weather,
},{
  name:"RecipeFinder",
  description:"A React project designed to master the fundamentals of state management, list mapping, and conditional rendering. This app allows users to browse recipes, filter by category, and manage a real-time favorites collection.",
  image:recipe,
},{
  name:"E-Commeres Websites",
  description:"A pure vanilla javascript website with product listing by using map method, sorting, filtering, add to cart with dynamic quantity and total price with remove functionality. ",
  image:ecommerce,
},
{
  name:"Company Website",
  description:"A responsive marketing website built using React.js and Tailwind CSS. A fully responsive multi-page marketing website using React.js with reusable components, proper SEO meta tags, and deployed it to Vercel.",
  image:companywebsite

},{
  name:"UsabilityHub",
  description:"A pixel-perfect clone of UsabilityHub's landing page built with pure HTML5 and CSS3. This project demonstrates advanced CSS techniques, responsive design principles, and modern layout systems without any frameworks. ",
  image:usabilityImg
}]


  return (
    <div className="pt-28 px-6 bg-gray-50 min-h-screen mb-20">

      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">
          Our Portfolio
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Some of our recent successful projects you can find on our github.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={item?.image}
                alt="project"
                className="w-full"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                   {item.name}
                </h3>
                <p className="text-gray-600 text-sm">
                 {item.description}
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
