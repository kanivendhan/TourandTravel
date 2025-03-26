import React, { useState } from "react";

const Hero = () => {
  const [priceValue, setPriceValue] = useState(150); // Set default to min price
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = () => {
    if (!destination || !date) {
      alert("Please enter a destination and date.");
      return;
    }
    console.log("Searching for:", { destination, date, maxPrice: priceValue });
    // Implement actual search logic here (API call, navigation, etc.)
  };

  return (
    <div className="bg-black/20 h-full flex justify-center items-center p-4">
      <div className="container grid gap-4 bg-primary/10 p-6 rounded-md">
        {/* Header Section */}
        <div className="text-white text-center">
          <p data-aos="fade-up" className="text-sm">
            Our Packages
          </p>
          <p data-aos="fade-up" data-aos-delay="300" className="font-bold text-3xl">
            Search Your Destination
          </p>
        </div>

        {/* Search Form */}
        <div data-aos="fade-up" data-aos-delay="600" className="space-y-4 bg-white p-6 rounded-md shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Destination Input */}
            <div>
              <label htmlFor="destination" className="text-gray-600">
                Search your Destination
              </label>
              <input
                type="text"
                id="destination"
                placeholder="Tamil Nadu"
                className="w-full bg-gray-100 my-2 rounded-full p-2 focus:outline-primary"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>

            {/* Date Picker */}
            <div>
              <label htmlFor="date" className="text-gray-600">
                Date
              </label>
              <input
                type="date"
                id="date"
                className="w-full bg-gray-100 my-2 rounded-full p-2 focus:outline-primary"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            {/* Price Range Slider */}
            <div>
              <label htmlFor="price" className="text-gray-600 block">
                <div className="flex justify-between items-center">
                  <p>Max Price</p>
                  <p className="font-bold text-xl">₹ {priceValue}</p>
                </div>
              </label>
              <div className="bg-gray-100 rounded-full p-2">
                <input
                  type="range"
                  id="price"
                  className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                  min="150"
                  max="1000"
                  value={priceValue}
                  step="10"
                  onChange={(e) => setPriceValue(Number(e.target.value))}
                />
              </div>
            </div>
          </div>

          {/* Search Button */}
          <button
            className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-6 py-3 rounded-full transition-transform absolute left-1/2 -translate-x-1/2 -bottom-6 shadow-lg"
            onClick={handleSearch}
          >
            Search Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
