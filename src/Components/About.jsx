import React from "react";
import image10 from './values.png';
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-700 to-green-900 text-white py-16 px-10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="mt-8 text-lg md:text-xl max-w-2xl mx-auto font-Poppins text-left">
            Our mission is to enable individuals globally to lead successful, meaningful, and fulfilling lives.
          </p>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 text-left md:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Here with a Cause</h2>
            <p className="mt-4 text-gray-600 text-lg md:text-xl tracking-wide font-Poppins leading-relaxed">
              We aspire to deliver exceptional value to the business world by empowering corporations 
              to attain unparalleled human resource efficiency and fostering the growth of students into 
              exemplary professionals.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <img src={image10} className="w-full max-w-md" alt="Our Values" />
          </div>
        </div>
      </section>

      {/* Changing the Game Section */}
      <section className="py-16 bg-gray-300">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Transforming Education Through Innovation
          </h2>
          <p className="mt-4 text-black text-lg md:text-xl tracking-wide font-Poppins leading-relaxed">
            At Interns, we believe technology should be accessible to everyone. Our platform provides learning paths, challenges, and industry-expert-designed sprints that help individuals and businesses develop essential skills, accelerate release cycles, and build secure, reliable products.
          </p>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Be Part of the Future of Learning
          </h2>
          <p className="mt-4 text-black text-lg md:text-xl tracking-wide font-Poppins leading-relaxed">
            We are committed to redefining the way people learn and grow. Join our journey and help shape the future of education.
          </p>
          <Link 
            to="https://mail.google.com/mail/u/0/#inbox" 
            className="mt-6 inline-block text-black text-lg md:text-xl max-w-3xl mx-auto underline hover:text-blue-600 font-bold"
          >
            Share Your Thoughts!
          </Link>
        </div>
      </section>
    
    {/* Footer */}
    <footer className="bg-blue-800 py-10 text-white text-center">
    <h1 className="text-white text-xl font-bold">INTERN</h1>
    

    {/* Social Icons */}
    <div className="flex justify-center gap-4 mt-6">
      <InstagramIcon fontSize="large" />
      <FacebookIcon fontSize="large" />
      <LinkedInIcon fontSize="large" />
      <YouTubeIcon fontSize="large" />
    </div>
  </footer>
  </div>
  );
};

export default About;
