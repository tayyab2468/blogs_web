import FlagIcon from "@mui/icons-material/Flag";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Home } from "@mui/icons-material";
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="bg-gray-300 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 py-20 px-6 text-center lg:text-left">
        <div className="flex-1">
          <h2 className="text-gray-900 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-Poppins">
            Internships designed to get you job-ready.
          </h2>
          <p className="text-gray-700 text-lg md:text-xl tracking-normal mt-6 font-Poppins">
            Get the practical experience you need to stand out in today’s job market and begin your professional career by learning through an internship.
          </p>
          <div className="mt-6">
          <Link to="/internship">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
              Explore Internships
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Internships Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h1 className="text-gray-900 font-semibold font-Poppins text-4xl lg:text-5xl">
            Featured Internships
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Our six-week remote program offers practical experience to help you get ahead.
          </p>
        </div>

        {/* Grid layout for internships */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {["Front-end Development", "Back-end Development", "Data Science"].map((title, index) => (
            <div
              key={index}
              className="flex flex-col border p-8 items-center rounded-lg shadow-md bg-gray-50 text-center w-full sm:w-80 mx-auto"
            >
              <h3 className="text-gray-900 font-semibold font-Poppins text-2xl">
                {title}
              </h3>
              <p className="text-gray-700 mt-4 text-base">
                Learn industry-leading technologies and build real-world projects with our specialized internship programs.
              </p>
              <ul className="list-disc list-inside text-gray-800 font-medium text-base mt-4 space-y-2">
                <li>HTML, CSS, JavaScript</li>
                <li>React & Node.js</li>
                <li>Database Management</li>
              </ul>
               <Link to="/applyNow">
              <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg font-bold hover:bg-blue-700 transition">
                Apply Now
              </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* The Interns Community */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <h1 className="text-gray-900 font-semibold font-Poppins text-4xl lg:text-5xl">
            The Interns Community
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Join a thriving community of over 65,000 students gaining practical skills.
          </p>
        </div>

        {/* Testimonials */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {["Syed Muhammad Jhon Raza Naqvi", "Syed Muhammad Raza", "Khadija Ishaq"].map((name, index) => (
            <div
              key={index}
              className="flex flex-col items-center border p-6 rounded-lg shadow-md bg-white text-center w-full sm:w-80 mx-auto"
            >
              <p className="text-gray-700 text-base italic">
                "This internship provided me with invaluable skills and experience. Highly recommended!"
              </p>
              <h3 className="mt-4 text-blue-600 font-semibold font-Poppins text-sm">
                {name}
              </h3>
            </div>
          ))}
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
}

export default App;
