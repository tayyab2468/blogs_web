import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/${query.toLowerCase()}`); // Fixed template string syntax
      setQuery(""); // Clear input after search
    }
  };

  return (
    <nav className="bg-black text-white flex items-center justify-between h-28 w-full px-4 md:px-8 lg:px-16 relative">
      {/* Logo */}
      <h1 className="text-white font-Poppins text-xl font-bold">News App</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex font-Poppins text-xl gap-8">
        {["home", "business", "health", "technology", "sports", "world"].map(
          (item) => (
            <li key={item}>
              <Link
                to={`/${item}`}
                className="py-2 hover:text-blue-300 cursor-pointer"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Search Bar (Hidden on Mobile) */}
      <form
        onSubmit={handleSearch}
        className="hidden md:flex relative items-center"
      >
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search bar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-40 md:w-64 h-10 text-black font-Poppins rounded-lg focus:outline-none px-4 py-2 pl-10"
          aria-label="Search"
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white"
          aria-label="Submit Search"
        >
          Search
        </button>
      </form>

      {/* Buttons (Hidden on Mobile) */}
      <div className="hidden md:flex items-center gap-4">
      <Link to="/login" className="bg-blue-500 hover:bg-red-500 px-4 py-2 rounded-md">
          Login
        </Link>
        <Link to="/signup" className="bg-blue-500 hover:bg-red-500 px-4 py-2 rounded-md w-full">Signup  </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-24 left-0 w-full bg-black flex flex-col items-center gap-4 py-4 z-50">
          <ul className="flex flex-col text-2xl  font-Poppins gap-8 mt-10">
            {["home", "business", "health", "technology", "sports", "world"].map(
              (item) => (
                <li key={item}>
                  <Link
                    to={`/${item}`}
                    className="py-2 hover:text-blue-300 cursor-pointer"
                    onClick={() => setIsOpen(false)} // Close menu on click
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              )
            )}
          </ul>
          <div className="flex flex-col justify-center text-center gap-4 mt-4">
            <Link to="/login" className="bg-blue-500 hover:bg-red-500 px-12 py-2 rounded-md w-full">
              Login
           </Link>
           <Link to="/signup" className="bg-blue-500 hover:bg-red-500 px-4 py-2 rounded-md w-full">
              Signup
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
