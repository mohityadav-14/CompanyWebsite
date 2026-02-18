import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
 <nav className="fixed top-0 left-0 w-full h-20 bg-white shadow z-50">
  <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          DevCompany
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/services" className="hover:text-blue-600">Services</Link>
          <Link to="/portfolio" className="hover:text-blue-600">Portfolio</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4 space-y-3 font-medium">
          <Link to="/" className="block">Home</Link>
          <Link to="/about" className="block">About</Link>
          <Link to="/services" className="block">Services</Link>
          <Link to="/portfolio" className="block">Portfolio</Link>
          <Link to="/contact" className="block">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
