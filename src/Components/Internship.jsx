import React, { useState } from "react";
import { Instagram, Facebook, LinkedIn, YouTube } from "@mui/icons-material"; // Importing icons
import { Link } from "react-router-dom";

const internshipsData = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Google",
    location: "California, USA",
    duration: "6 months",
    type: "Remote",
    image: "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png",
  },
  {
    id: 2,
    title: "Data Science Intern",
    company: "Microsoft",
    location: "New York, USA",
    duration: "3 months",
    type: "On-Site",
    image: "https://1000logos.net/wp-content/uploads/2016/10/Microsoft-Logo-500x281.png",
  },
  {
    id: 3,
    title: "UI/UX Design Intern",
    company: "Apple",
    location: "London, UK",
    duration: "4 months",
    type: "Hybrid",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 4,
    title: "Front-End Developer Intern",
    company: "Meta",
    location: "San Francisco, USA",
    duration: "6 months",
    type: "Remote",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  },
  {
    id: 5,
    title: "Cybersecurity Intern",
    company: "Amazon",
    location: "Seattle, USA",
    duration: "3 months",
    type: "On-Site",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    id: 6,
    title: "Machine Learning Intern",
    company: "Tesla",
    location: "Berlin, Germany",
    duration: "4 months",
    type: "Hybrid",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
];

const Internship = () => {
  const [filters, setFilters] = useState({ duration: "", type: "", location: "" });

  const filteredInternships = internshipsData.filter((internship) => {
    return (
      (filters.duration === "" || internship.duration === filters.duration) &&
      (filters.type === "" || internship.type === filters.type) &&
      (filters.location === "" || internship.location === filters.location)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        {/* Heading & Description */}
        <div className="text-center mb-8 max-w-4xl mx-auto py-16">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight font-Poppins">
            Turn Yourself into an Industry Expert
          </h1>
          <p className="text-xl text-gray-600 mt-5 font-Poppins">
            Looking to stand out in today's competitive job market? Our six-week remote program offers
            practical experience that can help you get ahead. Join us today and start building your skills
            for a brighter future.
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-wrap gap-4 justify-center mb-6">
          {/* Duration Filter */}
          <select
            className="border p-2 rounded-md text-black"
            onChange={(e) => setFilters({ ...filters, duration: e.target.value })}
          >
            <option value="">All Durations</option>
            <option value="3 months">3 months</option>
            <option value="4 months">4 months</option>
            <option value="6 months">6 months</option>
          </select>

          {/* Type Filter */}
          <select
            className="border p-2 rounded-md text-black"
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          >
            <option value="">All Types</option>
            <option value="Remote">Remote</option>
            <option value="On-Site">On-Site</option>
            <option value="Hybrid">Hybrid</option>
          </select>

          {/* Location Filter */}
          <select
            className="border p-2 rounded-md text-black"
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          >
            <option value="">All Locations</option>
            <option value="California, USA">California, USA</option>
            <option value="New York, USA">New York, USA</option>
            <option value="London, UK">London, UK</option>
            <option value="San Francisco, USA">San Francisco, USA</option>
            <option value="Seattle, USA">Seattle, USA</option>
            <option value="Berlin, Germany">Berlin, Germany</option>
          </select>
        </div>

        {/* Internship Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInternships.length > 0 ? (
            filteredInternships.map((internship) => (
              <div key={internship.id} className="bg-white shadow-md rounded-lg p-6 transition hover:shadow-lg">
                {/* Internship Image */}
                <img
                  src={internship.image}
                  alt={internship.company}
                  className="w-full h-40 object-contain mb-4"
                />

                <h2 className="text-xl font-bold text-gray-900">{internship.title}</h2>
                <p className="text-gray-700 font-semibold">{internship.company}</p>
                <p className="text-gray-600">{internship.location}</p>
                <p className="text-gray-500">Duration: {internship.duration}</p>
                <p className="text-gray-500">Type: {internship.type}</p>
                {/* Link and Apply Now Button */}
                <Link to="/applyNow">
                  <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition">
                    Apply Now
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-3">No internships found</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-800 py-10 text-white text-center mt-16">
        <h1 className="text-white text-xl font-bold">INTERN</h1>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-6">
          <Instagram fontSize="large" />
          <Facebook fontSize="large" />
          <LinkedIn fontSize="large" />
          <YouTube fontSize="large" />
        </div>
      </footer>
    </div>
  );
};

export default Internship;
