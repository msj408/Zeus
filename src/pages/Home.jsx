import React from "react";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Hero /> {/* This is your existing hero section */}
      {/* Add the Catering Call-to-Action here, just below the Hero */}
      <section className="py-12 bg-primary text-white text-center">
        <h2 className="text-4xl font-bold">Catering for Every Occasion!</h2>
        <p className="mt-4 text-lg">
          Let us help make your event special with fresh Mediterranean flavors.
        </p>
        <a
          href="/catering"
          className="mt-6 inline-block bg-secondary hover:bg-yellow-400 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          Request a Catering Quote
        </a>
      </section>
      {/* Continue with the rest of the homepage sections */}
      <Menu />
      <AboutUs />
      <Contact />
    </>
  );
};

export default Home;
