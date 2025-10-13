import React from "react";
import ROinstallation from "../../assets/ROinstallation.png";
import Service from "../../assets/Service.png";

const ServiceDetailsPage = () => {
  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <div className="flex items-center mb-8">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-700 font-semibold text-lg">
          Service
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Service Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left - Image + Buttons */}
        <div className="col-span-1 flex flex-col items-center space-y-4">
          <img
            src={ROinstallation}
            alt="Service"
            className=" w-full"
          />
          <div className="flex gap-4 w-full">
            <button className="flex-1 bg-[#A3D829] text-white px-6 py-2 rounded hover:bg-green-700">
              Add to Cart
            </button>
            <button className="flex-1 bg-green-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Buy Now
            </button>
          </div>
        </div>

        {/* Right - Info + Description + Reviews */}
        <div className="col-span-2 space-y-6">
          {/* Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Prefilter RO Service Check Up Housing Bowl
            </h2>
            <p className="text-gray-600">
              Connector for Water Purifier, Solid Filter Cartridge (5, Pack of
              5)
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500 text-xl">★</span>
              <span className="font-semibold">4.96</span>
              <span className="text-gray-500">(2.3M Reviews)</span>
            </div>
            <p className="text-lg font-bold">₹899.00</p>
            <p className="text-gray-500">Service Within: 24Hrs</p>
            <p className="text-gray-500">Time: 30 min</p>

            {/* Offers */}
            <div className="space-y-2">
              <h3 className="font-semibold">Available Offers</h3>
              <div className="border-t border-gray-300 mb-4"></div>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li>UPI Off ₹50 - Pay using UPI</li>
                <li>Debit Card Off ₹100</li>
                <li>Credit Card Off 5%</li>
              </ul>
            </div>
          </div>

          {/* Service Description */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Service Description</h3>
            <div className="border-t border-gray-300 mb-4"></div>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Cleaning of Machine and Filters</li>
              <li>Complete Water Purifier Checkup</li>
              <li>Water Quality Test (TDS)</li>
              <li>Filter / Spare Parts Rate applicable as per rate card</li>
            </ul>
          </div>

          {/* Customer Reviews */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
            <div className="border-t border-gray-300 mb-4"></div>
            <div className="flex items-center space-x-2 text-yellow-500">
              <span className="text-2xl">★</span>
              <span className="text-lg font-bold text-black">4.5</span>
              <span className="text-gray-500">(2.3M Reviews)</span>
            </div>

            {/* Ratings Bar */}
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="w-16">5 star</span>
                <div className="bg-gray-200 h-2 w-full mx-2 rounded">
                  <div className="bg-green-500 h-2 w-[78%] rounded"></div>
                </div>
                <span>78%</span>
              </div>
              <div className="flex items-center">
                <span className="w-16">4 star</span>
                <div className="bg-gray-200 h-2 w-full mx-2 rounded">
                  <div className="bg-green-400 h-2 w-[35%] rounded"></div>
                </div>
                <span>35%</span>
              </div>
              <div className="flex items-center">
                <span className="w-16">3 star</span>
                <div className="bg-gray-200 h-2 w-full mx-2 rounded">
                  <div className="bg-yellow-400 h-2 w-[25%] rounded"></div>
                </div>
                <span>25%</span>
              </div>
            </div>

            {/* Review Items */}
            <div className="mt-6 space-y-4">
              <div className="border-b pb-4">
                <p className="font-semibold">You</p>
                <p className="text-sm text-gray-600">20 Dec, 2024</p>
                <p className="text-gray-700 mt-1">
                  Lorem ipsum dolor sit amet consectetur...
                </p>
              </div>
              <div className="border-b pb-4">
                <p className="font-semibold">Eleenor Pena</p>
                <p className="text-sm text-gray-600">23 Jul, 2024</p>
                <p className="text-gray-700 mt-1">
                  Sed lacus facilisi semper...
                </p>
              </div>
              <div className="border-b pb-4">
                <p className="font-semibold">Devon Lane</p>
                <p className="text-sm text-gray-600">15 Mar, 2024</p>
                <p className="text-gray-700 mt-1">
                  Lorem ipsum dolor sit amet consectetur...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Services */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Similar Services</h3>
        <div className="border-t border-gray-300 mb-4"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="border rounded p-4 flex flex-col">
              <img
                src={Service}
                alt="Similar Service"
                className="mb-2 w-full h-40 object-cover rounded"
              />
              <p className="font-semibold text-sm">Service Title {item}</p>
              <p className="text-gray-600 text-sm">With 6 Month Warranty</p>
              <p className="font-bold mt-1">₹899.00</p>
              {/* Buttons side by side */}
              <div className="flex gap-2 mt-2">
                <button className="flex-1  text-black py-1 rounded hover:bg-green-700 border border-gray-400">
                  Add to Cart
                </button>
                <button className="flex-1 bg-green-600 text-white py-1 rounded hover:bg-blue-700">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
