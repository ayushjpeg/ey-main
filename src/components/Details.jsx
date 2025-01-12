import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Age: "",
    Gender: "",
    State: "",
    Income: "",
    Category: "",
    Disability: "",
    Minority: "",
    Student: "",
    BPL: "",
    Location: "",
    Custom: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/submit", formData, {
        headers: {
          "Content-Type": "application/json", // Ensure you're sending JSON data
        },
      });
      navigate("/result", { state: { data: response.data } });  // use navigate instead of history.push
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };
  
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-0 px-6 sm:px-4 md:px-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-wide font-semibold">
        Provide Your Details
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          To Get Started
        </span>
      </h1>
      <form
        className="mt-10 w-full max-w-4xl bg-white shadow-lg p-8 rounded-lg border border-orange-700"
        style={{
          background: "linear-gradient(to bottom,rgb(255, 255, 255),rgb(151, 146, 146))",
        }}
        onSubmit={handleSubmit}
      >
        {/* Gender */}
        <div className="mb-4">
          <label className="block text-white-700 text-lg font-medium mb-2">Gender</label>
          <select
            className="w-full p-3 rounded-md border border-white-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            name="Gender"
            value={formData.Gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Age */}
        <div className="mb-4">
          <label className="block text-white-700 text-lg font-medium mb-2">Age</label>
          <input
            type="number"
            min="0"
            name="Age"
            value={formData.Age}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-white-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        {/* State */}
        <div className="mb-4">
          <label className="block text-white-700 text-lg font-medium mb-2">State</label>
          <input
            type="text"
            name="State"
            value={formData.State}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-white-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        {/* Income */}
        <div className="mb-4">
          <label className="block text-white-700 text-lg font-medium mb-2">Income</label>
          <input
            type="number"
            name="Income"
            value={formData.Income}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-white-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-white-700 text-lg font-medium mb-2">Category</label>
          <select
            className="w-full p-3 rounded-md border border-white-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            name="Category"
            value={formData.Category}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="General">General</option>
            <option value="OBC">OBC</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
          </select>
        </div>

        {/* Disability */}
        <div className="mb-4">
          <label className="block text-white-700 text-lg font-medium mb-2">Disability</label>
          <select
            className="w-full p-3 rounded-md border border-white-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            name="Disability"
            value={formData.Disability}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Minority */}
        <div className="mb-4">
          <label className="block text-white-700 text-lg font-medium mb-2">Minority</label>
          <select
            className="w-full p-3 rounded-md border border-white-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            name="Minority"
            value={formData.Minority}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Student */}
        <div className="mb-4">
          <label className="block text-white-700 text-lg font-medium mb-2">Student</label>
          <select
            className="w-full p-3 rounded-md border border-white-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            name="Student"
            value={formData.Student}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* BPL */}
        <div className="mb-4">
          <label className="block text-white-700 text-lg font-medium mb-2">BPL Category</label>
          <select
            className="w-full p-3 rounded-md border border-white-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            name="BPL"
            value={formData.BPL}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-white-700 text-lg font-medium mb-2">Location</label>
          <select
            className="w-full p-3 rounded-md border border-white-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            name="Location"
            value={formData.Location}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Rural">Rural</option>
            <option value="Urban">Urban</option>
          </select>
        </div>

        {/* Custom Information */}
        <div className="mb-4">
          <label className="block text-white-700 text-lg font-medium mb-2">Custom Information</label>
          <input
            type="text"
            name="Custom"
            value={formData.Custom}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-white-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-6 rounded-md text-white hover:shadow-lg"
          >
            Submit Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default Details;
