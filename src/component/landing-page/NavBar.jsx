import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-4xl font-bold text-white">
          <a href="#">
          Q<span className="text-green-500">uizo</span>
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="#home"
            className="hidden md:inline text-white hover:text-green-300 transition duration-200"
          >
            Home
          </a>
          <a
            href="#about"
            className="hidden md:inline text-white hover:text-green-300 transition duration-200"
          >
            About
          </a>
          <a
            href="#team"
            className="hidden md:inline text-white hover:text-green-300 transition duration-200"
          >
            Team
          </a>
          <button onClick={()=>{navigate('/signin')}} className="text-green-500 bg-white px-6 py-2 rounded-lg shadow-md hover:bg-slate-100 transition duration-200 flex-shrink-0">
            Sign In
          </button>

          <button onClick={()=>{navigate('/signup')}} className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-200 flex-shrink-0">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
