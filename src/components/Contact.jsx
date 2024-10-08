import React from "react";

const Contact = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-lg mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h2>
        <form className="bg-white p-6 shadow-md rounded-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-3 rounded-lg transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
