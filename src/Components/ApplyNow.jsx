import React, { useState } from 'react';

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cgpa: '',
    resume: null,
  });

  const [alert, setAlert] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled and a file is selected
    if (formData.name && formData.email && formData.cgpa && formData.resume) {
      setAlert({
        type: 'success',
        message: 'Application has been forwarded. You will be informed via email.',
      });
    } else {
      setAlert({
        type: 'error',
        message: 'Please fill all the fields and upload your resume.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="container max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Apply Now</h2>

        {/* Alert */}
        {alert && (
          <div
            role="alert"
            className={`mb-4 relative flex w-full p-3 text-sm text-white rounded-md ${
              alert.type === 'success' ? 'bg-green-600' : 'bg-red-600'
            }`}
          >
            {alert.message}
            <button
              className="flex items-center justify-center transition-all w-8 h-8 rounded-md text-white hover:bg-white/10 active:bg-white/10 absolute top-1.5 right-1.5"
              type="button"
              onClick={() => setAlert(null)}
            >
              
            </button>
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
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

          {/* CGPA Input */}
          <div>
            <label className="block text-gray-700 font-semibold">Your CGPA</label>
            <input
              type="text"
              name="cgpa"
              value={formData.cgpa}
              onChange={handleInputChange}
              placeholder="Enter your CGPA"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
            />
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-gray-700 font-semibold">Upload Resume</label>
            <input
              type="file"
              name="resume"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Submit Application
          </button>
        </form>

        
      </div>
    </div>
  );
};

export default ApplyNow;
