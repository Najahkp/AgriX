import React from "react";

const Home = () => {
  return (
    <div className="relative w-full h-screen bg-teal-200">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md flex items-center justify-between px-10 py-4">
        <h1 className="text-3xl font-bold text-black">
          Agri-<span className="text-green-500">X</span>
        </h1>
        <ul className="flex space-x-6 text-lg font-medium">
          <li><a href="#" className="hover:text-green-500">Home</a></li>
          <li><a href="#" className="hover:text-green-500">Pages</a></li>
          <li><a href="#" className="hover:text-green-500">Portfolio</a></li>
          <li><a href="#" className="hover:text-green-500">Blog</a></li>
          <li><a href="#" className="hover:text-green-500">Shop</a></li>
          <li><a href="#" className="hover:text-green-500">Contacts</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center h-full text-center">
        {/* Floating Badge */}
        <div className="absolute top-16 right-10 bg-white text-green-600 text-sm font-bold px-4 py-1 rounded-full shadow-md">
          100% Organic
        </div>

        {/* Hero Image */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/600x400" 
            alt="Floating Fruits"
            className="w-[600px] mx-auto drop-shadow-lg"
          />
        </div>

        {/* Hero Text */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-md mt-5">
          Home Agriculture Sales
        </h2>

        {/* Call to Action Button */}
        <button className="mt-6 px-6 py-3 bg-green-700 text-white font-semibold text-lg rounded-md shadow-lg hover:bg-green-800 transition">
          Check Products
        </button>
      </div>

      {/* Floating Action Buttons */}
      <div className="absolute right-5 bottom-10 flex flex-col space-y-3">
        <button className="w-12 h-12 bg-yellow-400 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-yellow-500 transition">
          🛒
        </button>
        <button className="w-12 h-12 bg-yellow-400 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-yellow-500 transition">
          💬
        </button>
        <button className="w-12 h-12 bg-yellow-400 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-yellow-500 transition">
          💻
        </button>
      </div>
    </div>
  );
};

export default Home;
