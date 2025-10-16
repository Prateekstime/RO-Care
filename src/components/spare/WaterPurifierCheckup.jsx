// WaterPurifierCheckup.jsx
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const issues = [
  {
    title: "Not Working",
    rating: "4.8",
    reviews: "1.9M Reviews",
    price: "₹899.00",
  },
  {
    title: "Low Water Flow",
    rating: "4.8",
    reviews: "1.9M Reviews",
    price: "₹299.00",
  },
  {
    title: "Water Leakage",
    rating: "4.8",
    reviews: "1.9M Reviews",
    price: "₹299.00",
  },
];

const steps = [
  {
    title: "Check-up",
    desc: "The technician inspects your water purifier and provides a diagnosis with repair quote.",
  },
  {
    title: "Sourcing Spare Parts (If Required)",
    desc: "If needed, the technician will order spare parts from us.",
  },
  {
    title: "Repair",
    desc: "The technician completes the repair work.",
  },
  {
    title: "Post Repair Cleaning",
    desc: "The technician thoroughly cleans the area & surfaces after the repair.",
  },
  {
    title: "Payment",
    desc: "Pay the final repair amount, minus the booking fee already paid.",
  },
];

const reviews = [
  {
    name: "Jane Cooper",
    date: "20 Dec, 2024",
    stars: 5,
  },
  {
    name: "Eleanor Pena",
    date: "23 Jul, 2024",
    stars: 4,
  },
  {
    name: "Devon Lane",
    date: "15 Mar, 2024",
    stars: 5,
  },
];

export default function WaterPurifierCheckup() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-y-auto p-4 font-sans">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-xl font-semibold">Water Purifier Check-up</h1>
           
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <AiFillStar className="text-teal-500 mr-1" />
            4.96 (2.3M Reviews) • ₹299.00 • Time: 30 mins
          </div>
        </div>
        <button className="border border-teal-500 text-teal-500 px-3 py-1 rounded hover:bg-teal-50">
          Add To Cart
        </button>
      </div>

      {/* Issues */}
      <div className="mt-6">
        <h2 className="text-md font-semibold mb-2">Select Issues</h2>
         <div className="border-t border-gray-300 mb-2"></div>
        <div className="grid grid-cols-3 gap-2">
          {issues.map((issue, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-2 text-center text-sm shadow-sm"
            >
              <h3 className="font-semibold">{issue.title}</h3>
              <p className="flex items-center justify-center text-xs text-gray-500">
                <AiFillStar className="text-teal-500 mr-1" />
                {issue.rating} ({issue.reviews})
              </p>
              <p className="text-teal-600 font-semibold mt-1">{issue.price}</p>
              <button className="mt-1 text-sm bg-teal-500 text-white rounded px-2 py-1 hover:bg-teal-600">
                Add
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="mt-6">
        <h2 className="text-md font-semibold mb-2">How It Works</h2>
         <div className="border-t border-gray-300 mb-4"></div>
        <div className="relative border-l-2 border-green-500 pl-4 space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-5 top-1 w-6 h-6 flex items-center justify-center bg-green-500 text-white rounded-full text-sm font-bold">
                {index + 1}
              </div>
              <h3 className="font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Please Note */}
      <div className="mt-6">
        <h2 className="text-md font-semibold mb-2">Please Note</h2>
         <div className="border-t border-gray-300 mb-4"></div>
        <ul className="list-disc ml-6 text-sm text-gray-600 space-y-1">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
            Repair quote will be provided after the check-up.
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
            The cost of all spare parts will be borne by the customer.
          </li>
        </ul>
      </div>

      {/* Brands */}
      <div className="mt-6">
        <h2 className="text-md font-semibold mb-2">We repair all brands</h2>
         <div className="border-t border-gray-300 mb-4"></div>
        <div className="flex gap-4">
          {["KENT", "Pureit", "Livpure", "Eureka", "Aquaguard", "& More"].map(
            (brand, i) => (
              <div
                key={i}
                className="border rounded p-2 w-14 h-14 flex items-center justify-center text-[10px] text-center"
              >
                {brand}
              </div>
            )
          )}
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-6">
        <h2 className="text-md font-semibold">Customer Reviews</h2>
         <div className="border-t border-gray-300 mb-4"></div>
        <div className="flex items-center text-teal-500 text-lg font-bold mt-1">
          <AiFillStar className="mr-1" />
          4.96
        </div>
        <p className="text-sm text-gray-500 mb-2">2.3M Reviews</p>

        {/* Ratings Bar */}
        <div className="space-y-1 mb-4">
          {[5, 4, 3, 2, 1].map((star, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm">
              <span>{star}</span>
              <div className="bg-gray-200 w-full h-2 rounded">
                <div className="bg-teal-500 h-2 rounded w-1/3"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {reviews.map((review, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              <div>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold">{review.name}</span>
                  <span className="text-gray-500 text-xs">{review.date}</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Lorem ipsum dolor sit amet consectetur. Sed lacus facilisi
                  semper lacus rhoncus cursus.
                </p>
                <div className="flex text-teal-500 mt-1">
                  {[...Array(5)].map((_, j) =>
                    j < review.stars ? (
                      <AiFillStar key={j} className="w-4 h-4" />
                    ) : (
                      <AiOutlineStar key={j} className="w-4 h-4" />
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
