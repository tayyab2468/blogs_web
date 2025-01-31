import React from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from 'react-router-dom';
const destinations = [
  { name: 'Maldives', image: 'https://plus.unsplash.com/premium_photo-1666286163385-abe05f0326c4', description: 'Experience the ultimate island getaway with crystal-clear turquoise waters, powdery white sand beaches, and luxurious overwater bungalows.' },
  { name: 'Skardu', image: 'https://plus.unsplash.com/premium_photo-1697730198247-ed3c72ecf932', description: 'Nestled in the majestic Karakoram Range, Skardu boasts breathtaking landscapes, glacial lakes, and a serene atmosphere.' },
  { name: 'Sri Lanka', image: 'https://images.unsplash.com/photo-1586008481877-7dd7c8236d00', description: 'A jewel of the Indian Ocean, Sri Lanka offers lush green mountains, ancient temples, and pristine beaches.' },
  { name: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34', description: 'The City of Love enchants visitors with its world-famous landmarks, art museums, and exquisite cuisine.' },
  { name: 'Bali', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', description: 'A tropical paradise rich in culture, Bali offers stunning beaches, lush rice terraces, and vibrant nightlife.' },
  { name: 'Kyoto', image: 'https://images.unsplash.com/photo-1578469645742-46cae010e5d4', description: 'Step into Japan’s past in Kyoto, where ancient temples, scenic gardens, and traditional tea houses create an enchanting atmosphere.' }
];

const Destination = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center mt-17 text-4xl font-bold font-Poppins tracking-tight">
        Explore Destinations Around the World
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
        {destinations.map((dest, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={dest.image} alt={dest.name} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold text-black">{dest.name}</h2>
              <p className="text-gray-600 mt-2">{dest.description}</p>
               <Link to="/package">
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                View More
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <footer className="w-full bg-black text-white py-6 mt-19">
  <div className="container mx-auto flex flex-col items-center text-center px-4">
    
    {/* Footer Links & Copyright */}
    <div className="w-full flex flex-col sm:flex-row sm:justify-between max-w-4xl MT-5">
      <p className="text-sm sm:text-base font-semibold">
        © 2025 Wanderlust Adventures. All Rights Reserved.
      </p>
      <div className="flex flex-wrap justify-center sm:justify-end gap-3 mt-3 sm:mt-0">
        <a href="/terms" className="hover:underline text-xs sm:text-sm">Terms & Conditions</a>
        <a href="/privacy" className="hover:underline text-xs sm:text-sm">Privacy Policy</a>
        <a href="/faqs" className="hover:underline text-xs sm:text-sm">FAQs</a>
      </div>
    </div>

    {/* Social Media Icons */}
    <div className="flex justify-center gap-6 mt-4">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <InstagramIcon fontSize="medium" className="hover:text-gray-400 transition" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FacebookIcon fontSize="medium" className="hover:text-gray-400 transition" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon fontSize="medium" className="hover:text-gray-400 transition" />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <YouTubeIcon fontSize="medium" className="hover:text-gray-400 transition" />
      </a>
    </div>

  </div>
</footer>

    </div>
  );
};

export default Destination;
