import React from "react";
import service from '../../assets/track-service.png'

const ServiceTracking = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Booking Info */}
      <div className="bg-white shadow rounded p-4 mb-6">
        <h2 className="text-gray-700 font-semibold">Service Booking ID - 1239564261565</h2>
        <div className="flex items-center gap-4 mt-2">
          <img
            src={service}
            alt="Service"
            className="w-24 h-24 object-cover rounded"
          />
          <div>
            <h3 className="text-lg font-semibold">Water Purifier Regular Service</h3>
            <p>Time: 1 Hour 30 Minutes</p>
            <p className="text-xl font-bold mt-1">Rs. 1900</p>
          </div>
        </div>
      </div>

     
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/*  Timeline */}
        <div className="col-span-3 bg-white shadow rounded p-6">
          <div className="flex items-center justify-between  border-2  p-4  rounded-sm mb-4">
            <div className="flex gap-1 text-3xl text-[#7EC1B1]">
              {Array(5).fill().map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <a href="#" className="text-[#7EC1B1]">Write a Review</a>
          </div>

          {/* Timeline */}
          <ol className="relative border-l border-gray-300">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-1.5 top-1.5" />
              <h4 className="font-bold">Service Registered Confirmed</h4>
              <p className="text-sm text-gray-600">Water leakage from the purifier tank, slow water flow and unusual sounds.</p>
              <p className="text-xs text-gray-500">Wed, 1st Oct 2025 - 10:30 am</p>
            </li>

            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-1.5 top-1.5" />
              <h4 className="font-bold">Engineer Assigned</h4>
              <p className="text-sm text-gray-600">Jacob Jones</p>
              <button className="mt-1 text-white bg-green-500 px-3 py-1 rounded text-sm">Call Now</button>
              <p className="text-xs text-gray-500 mt-1">Fri 1st Oct 2025 - 10:30 am</p>
            </li>

            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-1.5 top-1.5" />
              <h4 className="font-bold">Service OTP Received</h4>
              <p className="text-sm text-gray-600">8697</p>
              <p className="text-xs text-gray-500">Fri 1st Oct 2025 - 12:30 pm</p>
            </li>

            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-1.5 top-1.5" />
              <h4 className="font-bold">Order Summary</h4>
              <p className="text-sm text-gray-600">200002 - PQWN-RO - MEMBRANE 79</p>
              <p className="text-xs text-gray-500">Sat 1st Oct 2025 - 10:30 am</p>
            </li>

            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-1.5 top-1.5" />
              <h4 className="font-bold">Case Closed</h4>
            </li>
          </ol>

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

        {/* Right: Sidebar */}
       
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
    </div>
  );
};

export default ServiceTracking;
