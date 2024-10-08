import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <p>&copy; 2024 Mediterranean Eats. All rights reserved.</p>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:text-secondary">
              Home
            </a>
          </li>
          <li>
            <a href="/menu" className="hover:text-secondary">
              Menu
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-secondary">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-secondary">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
