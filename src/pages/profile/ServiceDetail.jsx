import { div } from "framer-motion/client";
import { useNavigate } from "react-router-dom";
import React from "react";
import star from "../../assets/Star.svg"
import img from "../../assets/product_1732_1_thumb.webp"

const ServiceDetail = () => {
        const navigate =useNavigate();
  return (
    <div className="grid grid-cols-5 gap-6 w-screen max-w-6xl mx-auto">
      {/* Left Side (Main Content) */}
      <div className="col-span-3 max-w-6xl  p-4 bg-white shadow-lg rounded-lg font-sans">
        {/* Header */}
        <div>
          <div className="border-b pb-4 mb-6 flex">
            <img src={img} alt="image" className="h-20 w-20" />
            <div className="mt-4 flex flex-col">
              <h1 className="text-sm font-bold text-gray-400">
                Service Booking ID – ID3295462f566
              </h1>
              <h2 className="text-xl font-semibold text-gray-700">
                Water Purifier Regular Service
              </h2>
              <p className="text-gray-600">Time: 1 Hour 30 Minutes</p>
              <span className="text-lg font-bold text-gray-800">Rs. 1900</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="flex h-5 ">

            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            </div>
            <div className="">
              <button className=" text-cyan-600 px-4 py-2 ">
                Write a Review
              </button>
            </div>
         
          </div>
         

          {/* Tracking Timeline */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Order Tracking
            </h3>
            <div className="space-y-4 relative">
              {/* Vertical line */}
              <div className="absolute mb-10 left-4 top-2 bottom-2 w-0.5 bg-green-500"></div>

              {/* Timeline items */}
              {[
                {
                  status: "Order Confirmed",
                  description: "Your Order has been placed.",
                  time: "Wed, 1st Oct 2025 - 10:30 am",
                  completed: true,
                },
                {
                  status: "Your item has been picked up by delivery partner",
                  description:
                    "Seller has given your parcel to delivery partner",
                  time: "Wed, 1st Oct 2025 - 10:00 am",
                  completed: true,
                },
                {
                  status: "Shipped",
                  description:
                    "Ekart Logistics - FMPC5FDG564 Your item has been shipped",
                  time: "Fri 1st Oct 2025 - 10:30 am",
                  completed: true,
                },
                {
                  status: "Out for Delivery",
                  description: "Your item is out for delivery",
                  time: "Fri 1st Oct 2025 - 12:30 pm",
                  completed: true,
                },
                {
                  status: "Delivered",
                  description: "Your item has been delivered",
                  time: "Sat 1st Oct 2025 - 10:30 am",
                  completed: true,
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start relative">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                      item.completed ? "bg-green-500" : "bg-gray-300"
                    }`}
                  >
                    {item.completed && (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="ml-4 flex-1">
                    <p
                      className={`font-medium ${
                        item.completed ? "text-green-600" : "text-gray-500"
                      }`}
                    >
                      {item.status}
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      {item.description}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Address */}
         </div>
         
          {/* Buttons */}
          <div className="text-center justify-center flex gap-4">
            <button className="border text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-colors w-full max-w-xs"
            onClick={()=>{navigate("/cancel-reason")}}>
              Cancel
            </button>
            <button className="border text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-colors w-full max-w-xs">
              Chat With Us
            </button>
          </div>
      </div>

      {/* Right Side (Sidebar) */}
      <div className="col-span-2  gap-2 ">
        <div className="mb-4 p-4 border rounded-lg">
            <h3 className="text-2xl  border-b border-gray-400 font-semibold text-gray-800 ">
              Service Address Details
            </h3>
            <div className="bg-gray-50 p-2 ">
              <p className="font-medium text-gray-800">Eleanor Pena</p>
              <p className="text-gray-600">
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
              <p className="text-gray-600">Phone Number: +919876543210</p>
            </div>
          </div>

          {/* Price Details */}
          <div className="mb-4 border rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Price Details
            </h3>
            <div className="space-y-2">
              {[
                { label: "Price (1 items)", value: "₹2499" },
                { label: "Discount", value: "-₹500", isDiscount: true },
                { label: "Platform Fee", value: "₹1" },
                { label: "Debit Card Off", value: "-₹100", isDiscount: true },
                { label: "Delivery Charges", value: "₹100 Free", isFree: true },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span
                    className={`text-gray-600 ${
                      item.isFree ? "text-green-600" : ""
                    }`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`font-medium ${
                      item.isDiscount
                        ? "text-green-600"
                        : item.isFree
                        ? "text-green-600"
                        : "text-gray-800"
                    }`}
                  >
                    {item.value}
                  </span>
                  
                </div>
              ))}

              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between items-center border-dashed border-t border-b border-gray-400  font-bold text-lg">
                  <span>Total Amount</span>
                  <span>1900</span>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <p className="text-green-700 font-medium">
                You total saved on this order 700
              </p>
            </div>
             <div className="mb-3 flex">
                <div className="bg-green-400 h-6 w-6 mx-2 rounded-full text-white text-center">
                <p>% </p>
                </div>
                <div>

              <p className="text-gray-700 font-medium">

                1 Offer Applied On This Order
              </p>
              <p className="text-sm text-gray-600">Debit Card Off ₹100</p>
                </div>
            </div>

          </div>

          {/* Offers and Payment */}
          <div className="mb-6">
           
            <div className="border px-4 py-4 rounded-sm mb-4">
              <p className="text-gray-700 font-medium">
                Payment Mode : Debit Card
              </p>
            </div>
             <div className="border px-4 py-4 rounded-sm flex">
                <img src="" alt="invoice" />
              <button className="text-gray-700 font-medium">
                Download Invoice
              </button>
            </div>
          </div>

        
      </div>
    </div>
  );
};

export default ServiceDetail;
