import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Catering from "./components/Catering"; // Import Catering

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Router>
        <Navbar />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/catering" element={<Catering />} />{" "}
            {/* Catering Route */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
