import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center flex-shrink-0 space-x-4">
            <img
              src="/logo.png"
              alt="IPA Church"
              style={{ width: "60px", height: "60px" }}
              className="rounded-full"
            />
            <span className="text-white text-lg font-semibold">
              IPA CHURCH TIRUNELVELI
            </span>
          </div>
          <div className="flex space-x-4 ml-6">
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
            <div className="relative group">
              <Link className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Media
              </Link>
              <div className="absolute left-0 mt-2 hidden group-hover:block bg-gray-800 shadow-md rounded-md z-20">
                <Link
                  to="/media/songs"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  Songs
                </Link>
                <Link
                  to="/media/sermons"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  Sermons
                </Link>
              </div>
            </div>
            <Link
              to="/contact"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
