import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent font-sans text-lg z-50 p-4 ">
      <div className="container mx-auto flex justify-between items-center">

        <div className="text-white text-4xl  font-extralight tracking-tighter text-shadow-md">
        
          FoodDelivery
        </div>
        
        
        

        {/* Hamburger Icon (Visible on small screens) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white mt-6 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex font-semibold space-x-6 items-center text-white">
          <Link
            to="/"
            className="hover:text-shadow-lg py-2 px-4 rounded-lg transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="hover:text-shadow-lg py-2 px-4 rounded-lg transition-all duration-300"
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="hover:text-shadow-lg py-2 px-4 rounded-lg transition-all duration-300"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:text-shadow-lg py-2 px-4 rounded-lg transition-all duration-300"
          >
            Contact
          </Link>
          {/* Buttons for Login and Sign Up */}
          <Link
            to="/login"
            className="border-[1px] border-white py-2 px-4 rounded-lg transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0px_0px_15px_5px_rgba(255,255,255,0.3)] shadow-lg text-white"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="border-[1px] border-white py-2 px-4 rounded-lg transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0px_0px_15px_5px_rgba(255,255,255,0.3)] shadow-lg text-white"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden hover:text-shadow-lg transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-start space-y-4 text-white p-4">
          <li>
            <Link
              to="/"
              className="block py-2 px-4  hover:text-shadow-lg rounded-lg w-full transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className="block py-2 px-4  hover:text-shadow-lg rounded-lg w-full transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block py-2 px-4  hover:text-shadow-lg rounded-lg w-full transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block py-2 px-4 hover:bg-gray-700 hover:shadow-[0px_0px_15px_5px_rgba(255,255,255,0.3)] rounded-lg w-full transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
          {/* Mobile View - Buttons for Login and Sign Up */}
          <li>
            <Link
              to="/login"
              className="block py-2 px-4 border-[1px] border-white hover:bg-white hover:text-black hover:shadow-[0px_0px_15px_5px_rgba(255,255,255,0.3)] rounded-lg w-full text-center transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="block py-2 px-4 border-[1px] border-white hover:bg-white hover:text-black hover:shadow-[0px_0px_15px_5px_rgba(255,255,255,0.6)] rounded-lg w-full text-center transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
