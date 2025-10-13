import React from "react";
import AMCPlan from "../../assets/AMCPlan.png";

const AmcPlanDetails = () => {
  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <div className="flex items-center mb-8">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-700 font-semibold text-lg">
          AMC Plan
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* AMC Plan Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left - Image + Buttons */}
        <div className="flex flex-col items-center space-y-4">
          <img src={AMCPlan} alt="AMC Plan" className=" w-full" />
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
        <div className="md:col-span-2 space-y-6">
          {/* Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Gold Annual Maintenance Contract (AMC) Plan Premium Servic.
            </h2>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500 text-xl">★</span>
              <span className="font-semibold">4.96</span>
              <span className="text-gray-500">(2.3M Reviews)</span>
            </div>
            <p className="text-xl font-bold">₹1999.00</p>
            <p className="text-gray-600">Validity: 1 Year</p>

            {/* Offers */}
            <div className="space-y-2">
              <h3 className="font-semibold">Available Offers</h3>
              <div className="border-t border-gray-300 mb-4"></div>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li>UPI Off ₹50</li>
                <li>Debit Card Off ₹100</li>
                <li>Credit Card Off 5%</li>
              </ul>
            </div>
          </div>

          {/* Service Description */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Service Description</h3>
            <div className="border-t border-gray-300 mb-4"></div>
            <ul className="pl-6 space-y-2 text-gray-700">
              <li>Service</li>
              <li>Filter</li>
              <li>AMC</li>
              <li>Electric Parts</li>
              <li>Faulty Parts</li>
            </ul>
            <p className="text-gray-600 mt-4 text-sm">
              Lorem ipsum dolor sit amet consectetur. Netus bibendum duis lorem
              ullamcorper id...
            </p>
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

            {/* Ratings Breakdown */}
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
              {[
                { name: "You", date: "20 Dec, 2024" },
                { name: "Eleenor Pena", date: "23 Jul, 2024" },
                { name: "Devon Lane", date: "15 Mar, 2024" },
              ].map((review, i) => (
                <div key={i} className="border-b pb-4">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.date}</p>
                  <p className="text-gray-700 mt-1 text-sm">
                    Lorem ipsum dolor sit amet consectetur. Sed lacus facilisi
                    semper.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Similar AMC Plans */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Similar AMC Plans</h3>
        <div className="border-t border-gray-300 mb-4"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="border rounded p-4 flex flex-col">
              <img
                src={AMCPlan}
                alt="AMC"
                className="mb-2 w-full object-cover rounded"
              />
              <p className="font-semibold text-sm">
                {item === 1 ? "Gold AMC Plan" : "Platinum AMC Plan"} Service
              </p>
              <p className="text-gray-600 text-sm">With 6 Month Warranty</p>
              <p className="font-bold mt-1">
                ₹{item === 1 ? "799.00" : "899.00"}
              </p>
              {/* Buttons side by side */}
              <div className="flex gap-2 mt-2">
                <button className="flex-1  text-black py-1 rounded hover:bg-green-700 border border-gray-500">
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

export default AmcPlanDetails;
