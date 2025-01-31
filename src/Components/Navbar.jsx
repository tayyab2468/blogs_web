import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center py-4">
        {/* Logo */}
        <span className="text-3xl font-bold text-black cursor-pointer">
          Adventures
        </span>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 font-semibold">
          <li><Link to="/" className="hover:text-cyan-500 text-black">HOME</Link></li>
          <li><Link to="/destination" className="hover:text-cyan-500 text-black">DESTINATION</Link></li>
          <li><Link to="/package" className="hover:text-cyan-500 text-black">PACKAGES</Link></li>
          <li><Link to="/contact" className="hover:text-cyan-500 text-black">CONTACT US</Link></li>
        </ul>

        {/* Book Now Button (Desktop) */}
        <div className="hidden md:block">
          <Link to="/booknow">
            <button className="bg-cyan-400 text-black px-6 py-2 rounded hover:bg-red-500 transition">
              Book Now
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="text-3xl md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center text-xl font-bold text-white z-50">
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setIsOpen(false)}
          >
            <AiOutlineClose />
          </button>

          <ul className="space-y-6 text-center">
            <li><Link to="/" onClick={() => setIsOpen(false)}>HOME</Link></li>
            <li><Link to="/destination" onClick={() => setIsOpen(false)}>DESTINATION</Link></li>
            <li><Link to="/package" onClick={() => setIsOpen(false)}>PACKAGES</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT US</Link></li>
          </ul>

          {/* Mobile Book Now Button */}
          <Link to="/booknow" className="mt-8">
            <button className="bg-cyan-400 text-white px-6 py-2 rounded hover:bg-red-500 transition">
              Book Now
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
