import React, { useState } from 'react';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from 'react-router-dom';
const categories = ['All', 'Honeymoon', 'Family', 'Adventure'];

const packages = [
  { 
    name: 'Maldives Honeymoon', 
    category: 'Honeymoon', 
    price: '$2500', 
    description: 'Enjoy a romantic getaway in an overwater bungalow with stunning ocean views and private dining.', 
    image: 'https://plus.unsplash.com/premium_photo-1666286163385-abe05f0326c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D',
    amenities: ['Food Included', 'WiFi', 'Airport Transfer']
  },
  { 
    name: 'Skardu Adventure', 
    category: 'Adventure', 
    price: '$1800', 
    description: 'Explore the breathtaking landscapes of Skardu with guided treks, serene lakes, and thrilling expeditions.', 
    image: 'https://plus.unsplash.com/premium_photo-1697730198247-ed3c72ecf932?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    amenities: ['Breakfast Included', 'Guided Tours', 'Camping Gear']
  },
  { 
    name: 'Sri Lanka Family Tour', 
    category: 'Family', 
    price: '$2000', 
    description: 'A perfect family vacation featuring cultural tours, scenic beaches, and wildlife safaris.', 
    image: 'https://images.unsplash.com/photo-1586008481877-7dd7c8236d00?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    amenities: ['All Meals Included', 'Theme Park Access', 'Transportation']
  },
  { 
    name: 'Hunza Valley', 
    category: 'Honeymoon', 
    price: 'Rs 90K', 
    description: 'A perfect Honeymoon vacation featuring cultural tours, scenic landscapes, and local heritage.', 
    image: 'https://images.unsplash.com/photo-1514558427911-8e293bebf18c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    amenities: ['Luxury Hotel', 'Breakfast & Dinner', 'Tour Guide']
  },
  { 
    name: 'Paris Romantic Escape', 
    category: 'Honeymoon', 
    price: '$3000', 
    description: 'Experience the magic of Paris with a romantic Seine river cruise, fine dining, and iconic sights.', 
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    amenities: ['Eiffel Tower Tour', 'Luxury Stay', 'Private Dinner']
  },
  { 
    name: 'Bali Adventure Trail', 
    category: 'Adventure', 
    price: '$2200', 
    description: 'Discover Bali’s hidden waterfalls, hike volcanoes, and dive into the vibrant underwater world.', 
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    amenities: ['Scuba Diving', 'Island Hopping', 'Local Cuisine']
  },
  { 
    name: 'Kyoto Cultural Family Trip', 
    category: 'Family', 
    price: '$2100', 
    description: 'Immerse in Kyoto’s rich history with temple visits, traditional tea ceremonies, and scenic gardens.', 
    image: 'https://images.unsplash.com/photo-1578469645742-46cae010e5d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    amenities: ['Tea Ceremony', 'Cultural Tours', 'Photography Sessions']
  },
  { 
    name: 'Swiss Alps Ski Adventure', 
    category: 'Adventure', 
    price: '$3500', 
    description: 'Hit the slopes in the Swiss Alps with guided skiing, luxury lodges, and breathtaking mountain views.', 
    image: 'https://plus.unsplash.com/premium_photo-1663099325894-01652fa175bc?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    amenities: ['Ski Equipment', 'Mountain Lodge', 'Hot Springs']
  },
  { 
    name: 'New York City Explorer', 
    category: 'Family', 
    price: '$2800', 
    description: 'Experience the energy of NYC with Broadway shows, museum tours, and Central Park adventures.', 
    image: 'https://images.unsplash.com/photo-1466350380309-a09bb7347af9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    amenities: ['City Tour', 'Broadway Show', 'Luxury Hotel']
  },
  { 
    name: 'Dubai Luxury Retreat', 
    category: 'Honeymoon', 
    price: '$4000', 
    description: 'Enjoy a lavish Dubai getaway with a desert safari, private yacht experience, and high-end shopping.', 
    image: 'https://images.unsplash.com/photo-1528702748617-c64d49f918af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    amenities: ['Private Yacht', 'Desert Safari', '5-Star Hotel']
  },
  { 
    name: 'Amazon Rainforest Expedition', 
    category: 'Adventure', 
    price: '$3200', 
    description: 'Explore the Amazon with guided jungle treks, wildlife spotting, and eco-lodging in the rainforest.', 
    image: 'https://plus.unsplash.com/premium_photo-1687525933572-e5d144fea470?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    amenities: ['Eco Lodge', 'Wildlife Tours', 'Boat Safari']
  }
];

   


const Package = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPackages = selectedCategory === 'All' 
    ? packages 
    : packages.filter(pkg => pkg.category === selectedCategory);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center text-4xl font-bold font-Poppins tracking-tight">Explore Our Packages</h1>

      {/* Category Selection for Mobile */}
      <div className="mt-6 flex flex-col items-center sm:hidden">
        <select 
          className="px-4 py-2 border rounded-lg bg-black text-white" 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Category Buttons for Larger Screens */}
      <div className="hidden sm:flex justify-center space-x-4 mt-6">
        {categories.map(category => (
          <button 
            key={category} 
            className={`px-4 py-2 rounded-lg ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`} 
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredPackages.map((pkg, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden p-4">
            <img src={pkg.image} alt={pkg.name} className="w-full h-56 object-cover rounded-t-2xl" />
            <div className="p-4 flex flex-col items-center">
              <h2 className="text-2xl font-bold text-black text-center">{pkg.name}</h2>
              <p className="text-gray-600 mt-2 text-center">{pkg.description}</p>
              
              {/* Centered Price */}
              <p className="text-lg font-bold mt-4 text-black px-4 py-2 rounded-lg text-center">
                {pkg.price}
              </p>

              {/* Centered Amenities */}
              <div className="mt-4 w-full text-center">
                <h3 className="font-bold  text-gray-700">Packages:</h3>
                <ul className="list-none  mt-4 text-gray-600 space-y-1">
                  {pkg.amenities.map((amenity, idx) => (
                    <li key={idx} className="bg-gray-100 px-3 py-1 rounded-lg inline-block m-1 hover:bg-gray-300">
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
                  <Link to="/booknow">
              <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Book Now
              </button>
              </Link>
            </div>
          </div>
        ))}
         
      </div>
       {/* Footer Section */}
       <footer className="max-w-full bg-black text-white py-12 mt-16 border-round">
        <div className="container mx-auto flex flex-col items-center text-center px-4">
          {/* Footer Links */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:w-full max-w-4xl">
            <p className="font-bold text-lg">© 2025 Wanderlust Adventures. All Rights Reserved.</p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-6 mt-6 sm:mt-0">
              <a href="/terms" className="hover:underline">Terms & Conditions</a>
              <a href="/privacy" className="hover:underline">Privacy Policy</a>
              <a href="/faqs" className="hover:underline">FAQs</a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6 mt-6">
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
        </div>
      </footer>
    </div>
  );
};

export default Package;
