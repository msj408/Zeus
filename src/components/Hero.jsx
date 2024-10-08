import React from "react";

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/assets/images/hero.jpg')" }}
    >
      <div className="h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
        <h1 className="text-5xl font-extrabold">Fresh Mediterranean Flavors</h1>
        <p className="mt-4 text-xl">
          Fast, delicious, and healthy meals inspired by Mediterranean cuisine.
        </p>

        {/* Add Catering Button to Hero */}
        <a
          href="/catering"
          className="mt-6 bg-secondary hover:bg-yellow-400 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          Request a Catering Quote
        </a>

        <a
          href="/menu"
          className="mt-6 bg-secondary hover:bg-yellow-400 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          Explore Menu
        </a>
      </div>
    </section>
  );
};

export default Hero;
