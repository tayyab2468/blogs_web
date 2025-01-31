import React, { useState } from 'react';
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [alert, setAlert] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (formData.name && formData.email && formData.message) {
      setAlert({
        type: 'success',
        message: 'Message sent successfully!'
      });
    } else {
      setAlert({
        type: 'error',
        message: 'Please fill all the fields.'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="container max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>

        {/* Alert */}
        {alert && (
          <div
            role="alert"
            className={`mb-4 relative flex w-full p-3 text-sm text-white rounded-md ${alert.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}
          >
            {alert.message}
            <button
              className="flex items-center justify-center transition-all w-8 h-8 rounded-md text-white hover:bg-white/10 active:bg-white/10 absolute top-1.5 right-1.5"
              type="button"
              onClick={() => setAlert(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-5 w-5"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 font-semibold">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-semibold">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label className="block text-gray-700 font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              placeholder="Write your message here..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Social Media Links */}
        <div className="mt-8 text-center">
          <p className="text-gray-700">Follow us on</p>
          <div className="flex justify-center gap-6 mt-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-2xl">
              <FacebookIcon />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 text-2xl">
              <XIcon />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 text-2xl">
              <LinkedInIcon />
            </a>
          </div>
        </div>

        {/* Google Maps Embed (Optional) */}
        <div className="mt-8">
  <iframe
    title="Google Maps location in Melbourne"
    className="w-full h-64 rounded-lg"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093665!2d144.95373521531708!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5dfc5b5b3f%3A0x3d2f0f7db9b9b2b!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sbd!4v1619045811058!5m2!1sen!2sbd"
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>


<footer className="w-full bg-black text-white py-6 mt-16">
  <div className="container mx-auto flex flex-col items-center text-center px-4">
    
    {/* Footer Links & Copyright */}
    <div className="w-full flex flex-col sm:flex-row sm:justify-between max-w-4xl">
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
    </div>
  );
};

export default Contact;