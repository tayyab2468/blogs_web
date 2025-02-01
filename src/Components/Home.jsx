import React from 'react';
import image3 from '../jithin-vijayamohanan-yE91FizJkr8-unsplash.jpg';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from 'react-router-dom';
const Home = () => {
  const destinations = [
    { 
      name: "Switzerland", 
      details: "Snow-covered mountains, scenic train rides, and luxury resorts.", 
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    { 
      name: "Bali", 
      details: "Tropical beaches, vibrant nightlife, and cultural temples.", 
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    { 
      name: "Santorini", 
      details: "Breathtaking sunsets, white-washed houses, and blue domes.", 
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className="relative w-full min-h-screen">
      {/* Background image */}
      <div className="relative w-full h-screen">
        <img src={image3} className="w-full h-full object-cover" alt="Background" />
        
      

        <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-16 lg:px-24">
  <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white shadow-lg leading-snug md:leading-tight drop-shadow-xl">
    Explore the World with <span class="text-yellow-400">Wanderlust Adventures</span>
  </h1>

  <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium shadow-md leading-relaxed mt-4 px-6 py-3 
    bg-gradient-to-r from-black via-gray-900 to-black md:bg-transparent md:text-gray-100 
    rounded-lg transition-all duration-300">
    Discover breathtaking destinations around the globe. Whether you seek serene beaches, majestic mountains, or vibrant cities, 
    <span class="font-semibold text-yellow-300">we’ve got you covered.</span>
  </p>
  <Link to="/package">
  <button className="mt-6 px-6 py-3 text-lg sm:text-xl font-semibold text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-full shadow-md">
    Explore Destinations
  </button>
</Link> 
</div>
</div>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h1 className="text-gray-900 font-semibold text-4xl lg:text-5xl">
            Featured Destinations
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Discover breathtaking destinations handpicked for your perfect getaway. 
            Whether it's adventure, romance, or family fun, we have something for everyone.
          </p>
        </div>

       
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="flex flex-col border p-6 rounded-lg shadow-md bg-gray-50 text-center w-full max-w-xs sm:max-w-sm mx-auto"
            >
              <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover rounded-lg" />
              
              <h3 className="text-gray-900 font-semibold text-2xl mt-4">
                {destination.name}
              </h3>
              <p className="text-gray-700 mt-2 text-base">
                {destination.details}
              </p>
                 <Link to="/package">
              <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg font-bold hover:bg-blue-700 transition">
                Book Now
              </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <footer className="w-full bg-black text-white py-12">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
          <p className="text-center sm:text-left font-bold text-lg">
            © 2025 Wanderlust Adventures. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-6 sm:mt-0">
            <a href="/terms" className="hover:underline">Terms & Conditions</a>
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <a href="/faqs" className="hover:underline">FAQs</a>
          </div>
        </div>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon fontSize="large" className="hover:text-gray-400 transition" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookIcon fontSize="large" className="hover:text-gray-400 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon fontSize="large" className="hover:text-gray-400 transition" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon fontSize="large" className="hover:text-gray-400 transition" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
