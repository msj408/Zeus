import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <div className="text-secondary font-bold text-2xl">
          Zeus Fresh Mediterranean
        </div>
        <ul className="flex space-x-6 text-white font-semibold">
          <li>
            <a href="/" className="text-secondary hover:text-primary">
              Home
            </a>
          </li>
          <li>
            <a href="/menu" className="text-secondary hover:text-primary">
              Menu
            </a>
          </li>
          <li>
            <a href="/about" className="text-secondary hover:text-primary">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" className="text-secondary hover:text-primary">
              Contact
            </a>
          </li>
          <li>
            <a href="/catering" className="text-secondary hover:text-primary">
              Catering
            </a>
          </li>{" "}
          {/* Catering Link */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
