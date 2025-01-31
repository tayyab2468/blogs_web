import React, { useState } from "react";

const BookNow = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: "",
    travelers: 1,
    checkIn: "",
    checkOut: "",
    packageType: "",
    paymentMethod: "",
    termsAccepted: false,
  });

  const [alert, setAlert] = useState(null);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.destination ||
      !formData.checkIn ||
      !formData.checkOut ||
      !formData.packageType ||
      !formData.paymentMethod ||
      !formData.termsAccepted
    ) {
      setAlert({ type: "error", message: "Please fill all required fields." });
      return;
    }

    // Show success message
    setAlert({ type: "success", message: "🎉 Congratulations! Booking Completed Successfully!" });

    // Scroll to top to show alert
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Auto-hide alert after 5 seconds
    setTimeout(() => {
      setAlert(null);
    }, 5000);

    // Reset form after submission
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      destination: "",
      travelers: 1,
      checkIn: "",
      checkOut: "",
      packageType: "",
      paymentMethod: "",
      termsAccepted: false,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="container max-w-3xl bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Book Your Trip ✈️
        </h2>

        {/* Alert Messages */}
        {alert && (
          <div
            className={`mb-4 p-3 text-white rounded ${
              alert.type === "success" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {alert.message}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block font-semibold text-black">Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400 text-black"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold text-black">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block font-semibold text-black">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Destination */}
          <div>
            <label className="block font-semibold text-black">Destination *</label>
            <select
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400 text-black"
            >
              <option value="">Select Destination</option>
              <option value="Maldives">Maldives</option>
              <option value="Paris">Paris</option>
              <option value="Bali">Bali</option>
              <option value="Skardu">Skardu</option>
            </select>
          </div>

          {/* Number of Travelers */}
          <div>
            <label className="block font-semibold text-black">Number of Travelers *</label>
            <input
              type="number"
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              min="1"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400 text-black"
            />
          </div>

          {/* Travel Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-black">Check-in Date *</label>
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400 text-black"
              />
            </div>
            <div>
              <label className="block font-semibold text-black">Check-out Date *</label>
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400 text-black"
              />
            </div>
          </div>

          {/* Package Type */}
          <div>
            <label className="block font-semibold text-black">Package Type *</label>
            <select
              name="packageType"
              value={formData.packageType}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400 text-black"
            >
              <option value="">Select Package</option>
              <option value="Honeymoon">Honeymoon</option>
              <option value="Adventure">Adventure</option>
              <option value="Family">Family</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>

          {/* Payment Method */}
          <div>
            <label className="block font-semibold text-black">Payment Method *</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400 text-black"
            >
              <option value="">Select Payment Method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mr-2"
            />
            <label>I agree to the Terms & Conditions *</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookNow;
