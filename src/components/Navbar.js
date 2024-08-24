import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="IPA Church"
              className="rounded-full w-12 h-12 sm:w-14 sm:h-14"
            />
            <span className="text-white text-lg font-semibold ml-3">
              IPA CHURCH TIRUNELVELI
            </span>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex space-x-4">
              <Link
                to="/"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                About Us
              </Link>
              <Link
                to="/ministries"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Our Ministries
              </Link>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                >
                  Media
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 bg-gray-800 shadow-md rounded-md z-20">
                    <Link
                      to="/media/songs"
                      className="block px-4 py-2 text-white hover:bg-gray-700"
                    >
                      Songs
                    </Link>
                    <Link
                      to="/media/promise"
                      className="block px-4 py-2 text-white hover:bg-gray-700"
                    >
                      Promise
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/contact"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact Us
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
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
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              About Us
            </Link>
            <Link
              to="/ministries"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Our Ministries
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 focus:outline-none"
              >
                Media
              </button>
              {isDropdownOpen && (
                <div className="mt-2 space-y-1">
                  <Link
                    to="/media/songs"
                    className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                  >
                    Songs
                  </Link>
                  <Link
                    to="/media/promise"
                    className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                  >
                    Promise
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/contact"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
