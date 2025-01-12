import React from "react";


const Details = () => {
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
          background: "linear-gradient(to bottom, #000000,rgb(0, 0, 0))",
        }}
      >
        {/* Gender */}
        <div className="mb-4">
          <label className="block text-white-700 text-lg font-medium mb-2">
            Gender
          </label>
          <select
            className="w-full p-3 rounded-md border border-white-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
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
          <label className="block text-white-700 text-lg font-medium mb-2">
            Age
          </label>
          <input
            type="number"
            min="0"
            className="w-full p-3 rounded-md border border-white-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        {/* State */}
        <div className="mb-4">
          <label className="block text-white-700 text-lg font-medium mb-2">
            State
          </label>
          <input
            type="text"
            className="w-full p-3 rounded-md border border-white-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        {/* Rural or Urban */}
        <div className="mb-4">
          <label className="block text-white-700 text-lg font-medium mb-2">
            Location
          </label>
          <select
            className="w-full p-3 rounded-md border border-white-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          >
            <option value="">Select</option>
            <option value="Rural">Rural</option>
            <option value="Urban">Urban</option>
          </select>
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-white-700 text-lg font-medium mb-2">
            Category
          </label>
          <select
            className="w-full p-3 rounded-md border border-white-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          >
            <option value="">Select</option>
            <option value="General">General</option>
            <option value="OBC">OBC</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
          </select>
        </div>

        {/* Differently Abled */}
        <div className="mb-4">
          <label className="block text-white-700 text-lg font-medium mb-2">
            Differently Abled
          </label>
          <select
            className="w-full p-3 rounded-md border border-white-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Minority */}
        <div className="mb-4">
          <label className="block text-white-700 text-lg font-medium mb-2">
            Minority
          </label>
          <select
            className="w-full p-3 rounded-md border border-white-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Student */}
        <div className="mb-4">
          <label className="block text-white-700 text-lg font-medium mb-2">
            Student
          </label>
          <select
            className="w-full p-3 rounded-md border border-white-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* BPL Category */}
        <div className="mb-4">
          <label className="block text-white-700 text-lg font-medium mb-2">
            BPL Category
          </label>
          <select
            className="w-full p-3 rounded-md border border-white-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Family Income */}
        <div className="mb-4">
          <label className="block text-white-700 text-lg font-medium mb-2">
            Family Income (Annual)
          </label>
          <input
            type="number"
            className="w-full p-3 rounded-md border border-white-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        {/* Guardian Income */}
        <div className="mb-4">
          <label className="block text-white-700 text-lg font-medium mb-2">
            Guardian Income (Annual)
          </label>
          <input
            type="number"
            className="w-full p-3 rounded-md border border-white-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
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
