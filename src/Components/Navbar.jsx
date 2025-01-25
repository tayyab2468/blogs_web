import React, { useState } from "react";

import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="text-white">
      {/* Navbar */}
      <nav className="container flex flex-col py-4 px-6 sm:px-10 bg-green-800">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
             {/* Logo Section */}
    <div className="flex items-center gap-1">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
        alt="Pakistan Flag"
        className="h-5 w-6"
      />
      <h1 className="text-white font-bold">INTERN</h1>
    </div>

          {/* Hamburger Icon */}
          <div className="sm:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white">
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <ul
          className={`sm:flex sm:justify-end sm:items-center sm:gap-7 sm:font-semibold ${
            menuOpen
              ? "flex flex-col bg-green-700 gap-4 p-6 mt-4 rounded-md"
              : "hidden sm:flex"
          }`}
        >
          
          <li>
            <Link
              to="/"
              className="cursor-pointer text-white hover:text-green-300 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/internship"
              className="cursor-pointer text-white hover:text-green-300 transition"
            >
              Internship
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="cursor-pointer text-white hover:text-green-300 transition"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="cursor-pointer text-white hover:text-green-300 transition"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/applyNow"
              className="cursor-pointer text-white hover:text-green-300 transition"
            >
              Apply
            </Link>
          </li>
          <li>
            <button
              type="button"
              className=" font-Poppins text-white rounded-md px-5 py-2 uppercase hover:bg-green-600 transition"
            >
              Apply Now
            </button>
          </li>
        </ul>
          
        <hr className="border-t-2 border-gray-400 my-2" />
      </nav>
    </div>
  );
};

export default Navbar;
